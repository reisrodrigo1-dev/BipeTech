import { useEffect, useState } from "react";
import { Play, Pause, RotateCcw, Wrench, Check } from "lucide-react";
import { useInViewOnce, prefersReducedMotion } from "@/hooks/use-in-view";

/* ==================================================================
   PapDemo — o assistente da ConectaEduca estruturando um curso.

   Conteúdo 100% FICTÍCIO, escrito para esta demonstração. Nenhuma
   chamada de IA parte desta página: a sequência é um roteiro estático.
   ================================================================== */

type Passo =
  | { tipo: "user"; texto: string }
  | { tipo: "assistant"; texto: string }
  | { tipo: "tool"; nome: string; resultado: string }
  | { tipo: "modulo"; titulo: string; meta: string }
  | { tipo: "pagina" };

const ROTEIRO: Passo[] = [
  { tipo: "user", texto: "Quero criar um curso de Excel para quem trabalha com financeiro." },
  { tipo: "assistant", texto: "Certo. Vou estruturar em 4 módulos, com aula prática em cada um e um simulado no fim." },
  { tipo: "modulo", titulo: "Fundamentos e organização de planilhas", meta: "3 aulas · vídeo" },
  { tipo: "modulo", titulo: "Fórmulas essenciais do financeiro", meta: "4 aulas · vídeo + material" },
  { tipo: "modulo", titulo: "Dashboards e visualização", meta: "3 aulas · vídeo" },
  { tipo: "modulo", titulo: "Automação com macros", meta: "2 aulas · vídeo + simulado" },
  { tipo: "tool", nome: "pap_save_draft", resultado: "rascunho do curso salvo" },
  { tipo: "assistant", texto: "Estrutura pronta. Gerei também a página de vendas com a oferta." },
  { tipo: "tool", nome: "pap_generate_sales_page", resultado: "página de vendas criada" },
  { tipo: "pagina" },
];

const INTERVALO = 1100;

export function PapDemo() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  const [passo, setPasso] = useState(0);
  const [rodando, setRodando] = useState(true);

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion()) {
      setPasso(ROTEIRO.length);
      setRodando(false);
      return;
    }
    if (!rodando || passo >= ROTEIRO.length) return;
    const t = window.setTimeout(() => setPasso((p) => p + 1), INTERVALO);
    return () => window.clearTimeout(t);
  }, [inView, rodando, passo]);

  const visiveis = ROTEIRO.slice(0, passo);
  const chat = visiveis.filter((p) => p.tipo === "user" || p.tipo === "assistant" || p.tipo === "tool");
  const modulos = visiveis.filter((p): p is Extract<Passo, { tipo: "modulo" }> => p.tipo === "modulo");
  const temPagina = visiveis.some((p) => p.tipo === "pagina");
  const fim = passo >= ROTEIRO.length;

  return (
    <div ref={ref} className="accent-conecta rounded-[28px] border border-border bg-card p-5 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="font-heading text-base font-semibold">PAP em ação</div>
          <p className="text-sm text-muted-foreground">
            O assistente conversa, estrutura o curso e entrega os artefatos.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-accent/15 px-2.5 py-1 text-[0.7rem] font-semibold text-accent-foreground">
            conteúdo fictício
          </span>
          <button
            onClick={() => (fim ? (setPasso(0), setRodando(true)) : setRodando((r) => !r))}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            aria-label={fim ? "Reiniciar demonstração" : rodando ? "Pausar demonstração" : "Continuar demonstração"}
          >
            {fim ? <RotateCcw className="h-4 w-4" /> : rodando ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {/* Conversa */}
        <div className="min-w-0 rounded-2xl border border-border bg-surface p-4">
          <div className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">Conversa</div>
          <div className="mt-3 min-h-[13rem] space-y-2.5">
            {chat.map((m, i) =>
              m.tipo === "tool" ? (
                <div
                  key={i}
                  className="flex items-center gap-2 rounded-xl border border-accent-product/30 bg-accent-product-soft px-3 py-2 font-mono text-[0.72rem] text-accent-product"
                >
                  <Wrench className="h-3.5 w-3.5 flex-shrink-0" />
                  <span className="min-w-0 flex-1 truncate">{m.nome}()</span>
                  <Check className="h-3.5 w-3.5 flex-shrink-0" />
                </div>
              ) : (
                <div
                  key={i}
                  className={`max-w-[85%] break-words rounded-2xl px-3.5 py-2.5 text-[0.82rem] leading-relaxed ${
                    m.tipo === "user"
                      ? "ml-auto bg-secondary text-secondary-foreground"
                      : "bg-accent-product-soft text-foreground"
                  }`}
                >
                  {m.texto}
                </div>
              )
            )}
          </div>
        </div>

        {/* Artefato produzido */}
        <div className="min-w-0 rounded-2xl border border-border bg-surface p-4">
          <div className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            Artefato produzido
          </div>
          <div className="mt-3 min-h-[13rem] space-y-2">
            {modulos.length === 0 && (
              <p className="pt-8 text-center text-sm text-muted-foreground/60">aguardando estrutura…</p>
            )}
            {modulos.map((m, i) => (
              <div key={i} className="rounded-xl border border-border bg-card px-3.5 py-2.5">
                <div className="flex items-start gap-2.5">
                  <span className="mt-0.5 font-mono text-[0.7rem] text-accent-product">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <div className="text-[0.82rem] font-semibold leading-snug">{m.titulo}</div>
                    <div className="text-[0.72rem] text-muted-foreground">{m.meta}</div>
                  </div>
                </div>
              </div>
            ))}

            {temPagina && (
              <div className="rounded-xl border border-accent-product/40 bg-card p-3">
                <div className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-accent-product">
                  Página de vendas
                </div>
                <div className="space-y-1.5">
                  <div className="h-2.5 w-3/4 rounded bg-accent-product/30" />
                  <div className="h-1.5 w-full rounded bg-muted" />
                  <div className="h-1.5 w-5/6 rounded bg-muted" />
                  <div className="mt-2 flex gap-1.5">
                    <div className="h-5 w-20 rounded-full bg-accent-product/40" />
                    <div className="h-5 w-14 rounded-full bg-muted" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
