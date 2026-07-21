import { useEffect, useRef, useState } from "react";
import { FileText, ListChecks, ScanSearch, Calculator, Check, Minus, X } from "lucide-react";

/* ==================================================================
   CorrectionEngine — a seção-âncora de credibilidade.

   Todo o conteúdo abaixo é FICTÍCIO e escrito do zero: nenhuma peça,
   rubrica ou nota real é usada, e nenhuma chamada de IA é feita a
   partir da landing (evita custo, latência e prompt injection).
   ================================================================== */

const ESTAGIOS = [
  { icon: FileText, titulo: "Entrada", desc: "Peça ou questão discursiva enviada pelo aluno." },
  { icon: ListChecks, titulo: "Rubrica", desc: "O espelho oficial é decomposto em itens avaliáveis." },
  { icon: ScanSearch, titulo: "Avaliação item a item", desc: "Cada item é julgado isolado, com justificativa." },
  { icon: Calculator, titulo: "Normalização", desc: "Clamp por peso no backend. A nota final é aritmética." },
];

type Estado = "atendido" | "parcial" | "nao";

const ITENS: { item: string; estado: Estado; nota: string }[] = [
  { item: "Endereçamento correto da peça", estado: "atendido", nota: "0,20 / 0,20" },
  { item: "Identificação das partes", estado: "atendido", nota: "0,30 / 0,30" },
  { item: "Fundamento legal aplicável", estado: "parcial", nota: "0,25 / 0,50" },
  { item: "Tese jurídica principal", estado: "atendido", nota: "0,60 / 0,60" },
  { item: "Pedido específico e coerente", estado: "parcial", nota: "0,15 / 0,40" },
  { item: "Fecho e requisitos formais", estado: "nao", nota: "0,00 / 0,20" },
];

const ESTILO: Record<Estado, { cls: string; Icon: typeof Check; label: string }> = {
  atendido: { cls: "text-[hsl(158_64%_36%)] bg-[hsl(158_64%_36%/0.12)]", Icon: Check, label: "Atendido" },
  parcial: { cls: "text-[hsl(43_90%_38%)] bg-[hsl(43_96%_52%/0.16)]", Icon: Minus, label: "Parcial" },
  nao: { cls: "text-[hsl(0_72%_48%)] bg-[hsl(0_72%_48%/0.12)]", Icon: X, label: "Não atendido" },
};

export function CorrectionEngine() {
  const [revelados, setRevelados] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const run = () => {
      if (started.current) return;
      started.current = true;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setRevelados(ITENS.length);
        return;
      }
      let i = 0;
      const tick = window.setInterval(() => {
        i += 1;
        setRevelados(i);
        if (i >= ITENS.length) window.clearInterval(tick);
      }, 420);
    };

    if (!("IntersectionObserver" in window)) {
      run();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && run()),
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);

    // Rede de segurança: se o widget já estiver visível, começa agora; e
    // mesmo que o observer nunca dispare, os itens não podem ficar
    // invisíveis para sempre.
    if (el.getBoundingClientRect().top < window.innerHeight) run();
    const fallback = window.setTimeout(run, 2500);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div ref={ref}>
      {/* Pipeline de 4 estágios */}
      <div className="relative grid gap-4 md:grid-cols-4">
        {ESTAGIOS.map(({ icon: Icon, titulo, desc }, i) => (
          <div key={titulo} className="relative rounded-2xl border border-border bg-card p-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </span>
            <div className="mt-4 font-heading text-sm font-semibold">{titulo}</div>
            <p className="mt-1.5 text-[0.8rem] leading-relaxed text-muted-foreground">{desc}</p>
            {i < ESTAGIOS.length - 1 && (
              <svg
                className="absolute -right-4 top-1/2 hidden h-3 w-8 -translate-y-1/2 md:block"
                viewBox="0 0 32 12"
                aria-hidden
              >
                <path
                  d="M0 6 H32"
                  fill="none"
                  className="flow-line stroke-[hsl(43_96%_52%)]"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </div>
        ))}
      </div>

      {/* Garantias em mono */}
      <div className="mt-4 grid gap-2 rounded-2xl bg-foreground/[0.04] p-4 font-mono text-[0.78rem] text-muted-foreground sm:grid-cols-3">
        <div>temperature = 0</div>
        <div>nota limitada pelo peso do item</div>
        <div>o modelo não escreve a nota final</div>
      </div>

      {/* Widget item a item */}
      <div className="mt-6 grid gap-5 lg:grid-cols-[0.85fr_1fr]">
        <div className="min-w-0 rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
              Peça enviada
            </span>
            <span className="rounded-full bg-accent/15 px-2.5 py-1 text-[0.7rem] font-semibold text-accent-foreground">
              exemplo ilustrativo
            </span>
          </div>
          <div className="mt-4 space-y-2.5 break-words font-mono text-[0.75rem] leading-relaxed text-muted-foreground">
            <p>EXCELENTÍSSIMO SENHOR DOUTOR JUIZ [...]</p>
            <p>[Parte autora], já qualificada nos autos, vem [...]</p>
            <p>Dos fatos: a requerente foi surpreendida [...]</p>
            <p>Do direito: aplica-se ao caso o disposto [...]</p>
            <p className="text-muted-foreground/50">[texto fictício, escrito para esta demonstração]</p>
          </div>
        </div>

        <div className="min-w-0 rounded-2xl border border-border bg-card p-6">
          <span className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            Itens da rubrica
          </span>
          <ul className="mt-4 space-y-2">
            {ITENS.map((it, i) => {
              const on = i < revelados;
              const { cls, Icon, label } = ESTILO[it.estado];
              return (
                <li
                  key={it.item}
                  className={`flex items-center gap-3 rounded-xl border border-border px-3.5 py-2.5 transition-all duration-500 ${
                    on ? "opacity-100" : "translate-y-1 opacity-0"
                  }`}
                >
                  <span className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ${cls}`}>
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="min-w-0 flex-1 truncate text-[0.85rem]">{it.item}</span>
                  <span className="sr-only">{label}</span>
                  <span className="flex-shrink-0 font-mono text-[0.75rem] tabular-nums text-muted-foreground">
                    {it.nota}
                  </span>
                </li>
              );
            })}
          </ul>

          <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
            <span className="text-sm font-semibold">Total normalizado</span>
            <span className="font-mono text-sm font-semibold tabular-nums">1,50 / 2,20</span>
          </div>
        </div>
      </div>

      <p className="mt-6 text-center font-heading text-lg font-semibold">
        A IA lê e argumenta. A conta quem faz é o código.
      </p>
    </div>
  );
}
