import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";
import { useInViewOnce, prefersReducedMotion } from "@/hooks/use-in-view";

/* ==================================================================
   OcrDemo — leitura da folha de respostas.

   Grade estilizada com respostas FICTÍCIAS. Não é o layout da folha
   oficial e não há chamada de IA a partir desta página.
   ================================================================== */

const ALTERNATIVAS = ["A", "B", "C", "D"] as const;

// Trecho ilustrativo: 12 questões (a folha real tem 80).
const RESPOSTAS = ["C", "A", "D", "B", "A", "C", "C", "B", "D", "A", "B", "D"];

const PASSO_MS = 380;

export function OcrDemo() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  const [lidas, setLidas] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion()) {
      setLidas(RESPOSTAS.length);
      return;
    }
    if (lidas >= RESPOSTAS.length) return;
    const t = window.setTimeout(() => setLidas((n) => n + 1), PASSO_MS);
    return () => window.clearTimeout(t);
  }, [inView, lidas]);

  const completo = lidas >= RESPOSTAS.length;

  return (
    <div ref={ref} className="accent-oab rounded-[28px] border border-border bg-card p-5 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="font-heading text-base font-semibold">Leitura do gabarito</div>
          <p className="text-sm text-muted-foreground">
            Uma foto da folha vira as respostas do aluno, por visão computacional.
          </p>
        </div>
        <span className="rounded-full bg-accent/15 px-2.5 py-1 text-[0.7rem] font-semibold text-accent-foreground">
          respostas fictícias
        </span>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-[1.15fr_1fr]">
        {/* Folha */}
        <div className="relative min-w-0 overflow-hidden rounded-2xl border border-border bg-surface p-4">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            Trecho da folha
          </div>
          <div className="space-y-1.5">
            {RESPOSTAS.map((resp, i) => {
              const lida = i < lidas;
              return (
                <div
                  key={i}
                  className={`flex items-center gap-2 rounded-lg px-2 py-1 transition-colors duration-300 ${
                    lida ? "bg-accent-product-soft" : ""
                  }`}
                >
                  <span className="w-6 flex-shrink-0 font-mono text-[0.68rem] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex gap-1.5">
                    {ALTERNATIVAS.map((alt) => {
                      const marcada = alt === resp;
                      return (
                        <span
                          key={alt}
                          className={`flex h-4 w-4 items-center justify-center rounded-full border text-[0.55rem] font-semibold transition-colors duration-300 ${
                            marcada
                              ? lida
                                ? "border-transparent bg-accent-product text-[hsl(var(--pa-fg))]"
                                : "border-foreground/40 bg-foreground/25 text-transparent"
                              : "border-border text-transparent"
                          }`}
                        >
                          {alt}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* linha de varredura */}
          {!completo && (
            <div
              className="pointer-events-none absolute inset-x-3 h-8 rounded-lg transition-all duration-300"
              style={{
                top: `${52 + lidas * 26}px`,
                background:
                  "linear-gradient(180deg, transparent, hsl(var(--pa) / 0.22), transparent)",
                boxShadow: "0 0 0 1px hsl(var(--pa) / 0.25)",
              }}
              aria-hidden
            />
          )}
        </div>

        {/* Extração */}
        <div className="min-w-0 rounded-2xl border border-border bg-surface p-4">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            Respostas extraídas
          </div>
          <div className="grid grid-cols-3 gap-1.5 font-mono text-[0.72rem] sm:grid-cols-2 md:grid-cols-3">
            {RESPOSTAS.map((r, i) => (
              <div
                key={i}
                className={`rounded-md border px-2 py-1 tabular-nums transition-all duration-300 ${
                  i < lidas
                    ? "border-border bg-card text-foreground"
                    : "border-dashed border-border text-transparent"
                }`}
              >
                {String(i + 1).padStart(2, "0")} · {i < lidas ? r : "–"}
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-border bg-card px-3 py-2.5">
            <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-[hsl(var(--pa))]" />
            <p className="text-[0.75rem] leading-relaxed text-muted-foreground">
              A imagem é descartada após o processamento. O dado do aluno não vira estoque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
