import { useEffect, useState } from "react";
import {
  BrainCircuit,
  Database,
  CreditCard,
  MonitorPlay,
  Sparkles,
  ScanLine,
  Split,
  type LucideIcon,
} from "lucide-react";

/* ==================================================================
   HeroPanel — painel de camadas que "respira".
   Uma camada é destacada por vez, em loop. Comunica "sistema rodando"
   sem exibir um único número ou dado real.
   ================================================================== */

const LAYERS: { label: string; hint: string; icon: LucideIcon }[] = [
  { label: "Inteligência aplicada", hint: "correção item a item", icon: BrainCircuit },
  { label: "Dados e identidade", hint: "papéis e permissões", icon: Database },
  { label: "Monetização", hint: "split de pagamento", icon: CreditCard },
  { label: "Entrega e mídia", hint: "aula ao vivo e sob demanda", icon: MonitorPlay },
];

export function HeroPanel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = window.setInterval(() => {
      setActive((a) => (a + 1) % LAYERS.length);
    }, 2500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="relative">
      {/* chips flutuantes */}
      <div
        className="float-tile absolute -right-3 -top-5 hidden items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm md:flex"
        style={{ ["--rot" as string]: "5deg", animationDelay: "0s" }}
      >
        <Sparkles className="h-3.5 w-3.5 text-[hsl(43_96%_62%)]" />
        tool-use
      </div>
      <div
        className="float-tile absolute -left-4 bottom-8 hidden items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm lg:flex"
        style={{ ["--rot" as string]: "-4deg", animationDelay: "0.8s" }}
      >
        <ScanLine className="h-3.5 w-3.5 text-[hsl(190_75%_62%)]" />
        visão computacional
      </div>

      <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm sm:p-5">
        <div className="mb-4 flex items-center gap-2 px-1">
          <span className="h-2 w-2 rounded-full bg-[hsl(43_96%_58%)]" />
          <span className="text-xs font-medium uppercase tracking-[0.08em] text-white/50">
            Espinha dorsal compartilhada
          </span>
        </div>

        <div className="space-y-2.5">
          {LAYERS.map((l, i) => {
            const Icon = l.icon;
            const on = i === active;
            return (
              <div
                key={l.label}
                className={`flex items-center gap-3 rounded-2xl border px-4 py-3.5 transition-all duration-500 ${
                  on
                    ? "border-[hsl(43_96%_58%_/_0.4)] bg-white/[0.09]"
                    : "border-white/8 bg-white/[0.03]"
                }`}
              >
                <span
                  className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl transition-colors duration-500 ${
                    on ? "bg-[hsl(43_96%_58%_/_0.18)] text-[hsl(43_96%_66%)]" : "bg-white/5 text-white/45"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <div
                    className={`text-sm font-semibold transition-colors duration-500 ${
                      on ? "text-white" : "text-white/60"
                    }`}
                  >
                    {l.label}
                  </div>
                  <div
                    className={`truncate text-xs transition-colors duration-500 ${
                      on ? "text-white/65" : "text-white/35"
                    }`}
                  >
                    {l.hint}
                  </div>
                </div>
                {on && <span className="breathe h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[hsl(43_96%_58%)]" />}
              </div>
            );
          })}
        </div>

        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
          <span className="text-xs text-white/45">Duas verticais</span>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-[hsl(276_78%_68%_/_0.16)] px-2.5 py-1 text-[0.7rem] font-semibold text-[hsl(276_78%_78%)]">
              ConectaEduca
            </span>
            <span className="rounded-full bg-[hsl(158_60%_52%_/_0.16)] px-2.5 py-1 text-[0.7rem] font-semibold text-[hsl(158_60%_62%)]">
              TreinadorOAB
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==================================================================
   SplitFlow — como o dinheiro anda.
   Mostra a proporção do split sem exibir um único valor real.
   ================================================================== */

export function SplitFlow() {
  return (
    <div className="rounded-[28px] border border-border bg-card p-6 sm:p-8">
      <svg viewBox="0 0 560 220" className="w-full" role="img" aria-label="Fluxo de split de pagamento: o aluno paga, o Mercado Pago Connect divide no ato e credita o criador diretamente, retendo a taxa de plataforma.">
        {/* nós */}
        <g>
          <rect x="4" y="86" width="118" height="48" rx="14" className="fill-muted" />
          <text x="63" y="107" textAnchor="middle" className="fill-foreground text-[13px] font-semibold">Aluno</text>
          <text x="63" y="122" textAnchor="middle" className="fill-muted-foreground text-[11px]">paga</text>
        </g>

        <g>
          <rect x="212" y="80" width="136" height="60" rx="16" className="fill-[hsl(var(--brand)/0.10)] stroke-[hsl(var(--brand)/0.35)]" strokeWidth="1" />
          <text x="280" y="104" textAnchor="middle" className="fill-foreground text-[13px] font-semibold">Split no ato</text>
          <text x="280" y="121" textAnchor="middle" className="fill-muted-foreground text-[11px]">Mercado Pago Connect</text>
        </g>

        <g>
          <rect x="438" y="26" width="118" height="52" rx="14" className="fill-[hsl(var(--pa-conecta)/0.12)] stroke-[hsl(var(--pa-conecta)/0.4)]" strokeWidth="1" />
          <text x="497" y="48" textAnchor="middle" className="fill-foreground text-[13px] font-semibold">Criador</text>
          <text x="497" y="64" textAnchor="middle" className="fill-muted-foreground text-[11px]">recebe direto</text>
        </g>

        <g>
          <rect x="438" y="146" width="118" height="52" rx="14" className="fill-muted" />
          <text x="497" y="168" textAnchor="middle" className="fill-foreground text-[13px] font-semibold">BIPETech</text>
          <text x="497" y="184" textAnchor="middle" className="fill-muted-foreground text-[11px]">taxa de plataforma</text>
        </g>

        {/* trilhas — espessura proporcional, sem valor monetário */}
        <path d="M122 110 H212" fill="none" className="flow-line stroke-[hsl(var(--brand))]" strokeWidth="3" strokeLinecap="round" />
        <path d="M348 104 C 392 104, 400 52, 438 52" fill="none" className="flow-line stroke-[hsl(var(--pa-conecta))]" strokeWidth="9" strokeLinecap="round" />
        <path d="M348 118 C 392 118, 400 172, 438 172" fill="none" className="flow-line stroke-muted-foreground" strokeWidth="3" strokeLinecap="round" />
      </svg>

      <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
        O criador não espera repasse. A divisão acontece no momento da compra e o valor é creditado direto
        na conta dele. A BIPETech retém uma taxa de plataforma de{" "}
        <strong className="font-semibold text-foreground">10% a 25%</strong>, conforme o plano — regra de
        produto, não resultado financeiro. A espessura das trilhas é ilustrativa.
      </p>
    </div>
  );
}

/* ==================================================================
   BackboneNote — legenda reutilizável
   ================================================================== */

export function SplitIcon() {
  return <Split className="h-5 w-5" />;
}
