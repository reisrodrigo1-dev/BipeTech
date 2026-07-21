import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Sun,
  Moon,
  ArrowRight,
  ArrowUpRight,
  Check,
  Store,
  Scale,
  Sparkles,
  ScanLine,
  Calculator,
  CreditCard,
  Video,
  Building2,
  BrainCircuit,
  ShieldCheck,
  Globe,
  Layers,
  Target,
  Repeat,
  Lock,
  GraduationCap,
  Briefcase,
  Linkedin,
  Instagram,
  Mail,
  type LucideIcon,
} from "lucide-react";
import { HeroPanel, SplitFlow } from "@/components/site/Artifacts";
import { CorrectionEngine } from "@/components/site/CorrectionEngine";

/* ------------------------------------------------------------------ */
/* Hooks                                                               */
/* ------------------------------------------------------------------ */

function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = localStorage.getItem("bipetech-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme((stored as "light" | "dark") || (prefersDark ? "dark" : "light"));
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("bipetech-theme", theme);
  }, [theme]);

  return { theme, toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")) };
}

/** Adds `is-visible` to `.reveal` elements as they enter the viewport. */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));

    // Safety net: reveal what is already above the fold, and guarantee
    // everything shows even if the observer never fires.
    const revealInView = () =>
      els.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("is-visible");
      });
    revealInView();
    const fallback = window.setTimeout(() => els.forEach((el) => el.classList.add("is-visible")), 1200);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);
}

/* ------------------------------------------------------------------ */
/* Building blocks                                                     */
/* ------------------------------------------------------------------ */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-primary">
      {children}
    </span>
  );
}

function SectionHead({
  eyebrow,
  titulo,
  sub,
}: {
  eyebrow: string;
  titulo: string;
  sub?: string;
}) {
  return (
    <div className="reveal mx-auto max-w-3xl text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="display-tight mt-3 text-[clamp(1.875rem,4vw,2.75rem)]">{titulo}</h2>
      {sub && <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{sub}</p>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const NAV_LINKS = [
  { label: "Produtos", href: "#produtos" },
  { label: "Engenharia", href: "#engenharia" },
  { label: "Playbook", href: "#playbook" },
  { label: "Contato", href: "#contato" },
];

const PRODUTOS = [
  {
    nome: "ConectaEduca",
    url: "https://conectaeduca.com.br",
    tagline: "A plataforma completa de educação digital",
    resumo:
      "Marketplace de dois lados: criadores publicam cursos, mentorias com agenda, eventos e ebooks. Alunos compram e consomem tudo em um portal único.",
    capacidades: [
      { titulo: "PAP, o assistente que produz", desc: "A IA conversa, estrutura o curso e gera a página de vendas — com tool-use, entrega o artefato em vez de sugerir texto.", icon: Sparkles },
      { titulo: "Sales Studio e Capture Studio", desc: "Páginas de vendas e de captura construídas dentro da plataforma, com domínio próprio.", icon: Globe },
      { titulo: "Checkout com split nativo", desc: "PIX, boleto e cartão parcelado. O criador recebe direto na conta dele.", icon: CreditCard },
      { titulo: "Entrega completa", desc: "Mentoria por vídeo, transmissão ao vivo, certificados verificáveis e fórum por aula.", icon: Video },
    ],
    icone: Store,
    accentClass: "accent-conecta",
  },
  {
    nome: "TreinadorOAB",
    url: "https://treinadoroab.com.br",
    tagline: "Preparação para o Exame da OAB, nas duas fases",
    resumo:
      "Treino e correção para a 1ª e a 2ª fase. O módulo de recurso é o coração do produto: transforma um palpite em cálculo reproduzível.",
    capacidades: [
      { titulo: "Análise de recurso", desc: "Lê o espelho oficial da FGV, calcula a margem recursal de forma determinística e apoia a redação do recurso.", icon: Scale },
      { titulo: "Correção da 2ª fase item a item", desc: "Peças e questões discursivas avaliadas contra a rubrica oficial, com justificativa por item.", icon: BrainCircuit },
      { titulo: "OCR da folha de respostas", desc: "As 80 respostas extraídas de uma foto por visão computacional. A imagem é descartada após o processamento.", icon: ScanLine },
      { titulo: "Portais white-label", desc: "Instituições parceiras operam com slug próprio, turmas, professores e relatórios.", icon: Building2 },
    ],
    icone: Scale,
    accentClass: "accent-oab",
  },
];

const CAMADAS: { titulo: string; itens: string; icon: LucideIcon }[] = [
  { titulo: "Inteligência", itens: "IA aplicada — tool-use, visão computacional e avaliação contra rubrica", icon: BrainCircuit },
  { titulo: "Dados e identidade", itens: "Papéis e permissões, isolamento por tenant, impersonação administrativa auditada", icon: Lock },
  { titulo: "Monetização", itens: "Checkout, split no ato da compra, assinaturas, pacotes e cotas por feature", icon: CreditCard },
  { titulo: "Entrega e mídia", itens: "Portal do aluno, videochamada, transmissão ao vivo e white-label por slug", icon: Video },
];

const PLAYBOOK = [
  { n: "01", titulo: "Base horizontal", desc: "A plataforma de criação, venda e entrega existe e roda em produção.", icon: Layers },
  { n: "02", titulo: "Escolha do nicho", desc: "Um domínio de altíssima exigência, com critério objetivo de acerto e uma dor cara.", icon: Target },
  { n: "03", titulo: "Verticalização", desc: "A IA deixa de ser genérica e passa a operar contra a rubrica oficial daquele domínio.", icon: BrainCircuit },
  { n: "04", titulo: "Repetição", desc: "A mesma anatomia se aplica a outros domínios com correção regrada.", icon: Repeat },
];

const PRINCIPIOS: { titulo: string; desc: string; icon: LucideIcon }[] = [
  { titulo: "Determinismo onde importa", desc: "A IA gera linguagem e julgamento. Regra de negócio e número ficam no código.", icon: Calculator },
  { titulo: "O dado do aluno não vira estoque", desc: "A imagem da folha de respostas é processada e descartada. Dado de aluno não treina modelo.", icon: ShieldCheck },
  { titulo: "Honestidade de métrica", desc: "Não publicamos número que o visitante não possa verificar. Por isso não há contador nesta página.", icon: Check },
];

const PORTAS = [
  { label: "Sou criador de conteúdo", desc: "Publicar e vender na ConectaEduca", href: "https://conectaeduca.com.br", externo: true, icon: Store },
  { label: "Estudo para a OAB", desc: "Treinar e corrigir no TreinadorOAB", href: "https://treinadoroab.com.br", externo: true, icon: GraduationCap },
  { label: "Represento uma instituição", desc: "Portal white-label para sua marca", href: "#contato", externo: false, icon: Building2 },
  { label: "Quero conversar sobre a BIPETech", desc: "Contato institucional", href: "#contato", externo: false, icon: Briefcase },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();
  useReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-dvh bg-background text-foreground">
      {/* ===================== Header (pílula flutuante) ===================== */}
      <header className="sticky top-3 z-50 flex justify-center px-4 pt-3 sm:top-5">
        <nav
          className={`flex w-full max-w-5xl items-center justify-between gap-4 rounded-full px-4 py-2.5 transition-all duration-300 sm:px-5 ${
            scrolled ? "border border-border bg-background/85 shadow-sm backdrop-blur-md" : "border border-transparent"
          }`}
        >
          <a href="#top" className="flex flex-shrink-0 items-center gap-2.5 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface ring-1 ring-border">
              <img src="/logo_BIPETech.png" alt="BIPETech" className="h-5 w-5 object-contain" />
            </span>
            <span className="font-heading text-base font-bold tracking-tight">BIPETech</span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex flex-shrink-0 items-center gap-1.5">
            <button
              onClick={toggle}
              aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
              className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <a
              href="#contato"
              className="hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-transform hover:opacity-95 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:inline-block"
            >
              Falar com a BIPETech
            </a>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground hover:bg-secondary md:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      {menuOpen && (
        <div className="fixed inset-x-4 top-20 z-40 rounded-3xl border border-border bg-background p-5 shadow-lg md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-base font-medium text-muted-foreground">
                {l.label}
              </a>
            ))}
            <a href="#contato" onClick={() => setMenuOpen(false)} className="mt-2 rounded-full bg-accent px-4 py-2.5 text-center text-sm font-semibold text-accent-foreground">
              Falar com a BIPETech
            </a>
          </div>
        </div>
      )}

      {/* ===================== Hero ===================== */}
      <section id="top" className="px-4 pb-16 pt-6 sm:pb-24 sm:pt-8">
        <div className="panel-deep relative mx-auto max-w-6xl overflow-hidden rounded-[28px] px-6 py-16 sm:rounded-[40px] sm:px-12 sm:py-24">
          <div className="dot-mesh pointer-events-none absolute inset-0 opacity-60" aria-hidden />
          <div className="relative grid items-center gap-12 lg:grid-cols-[5fr_6fr]">
            <div>
              <span className="reveal inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-[0.8125rem] font-medium text-white/75">
                <span className="breathe h-1.5 w-1.5 rounded-full bg-[hsl(43_96%_58%)]" />
                Duas plataformas em produção
              </span>

              <h1 className="reveal display-tight mt-6 text-[clamp(2.25rem,5vw,3.75rem)] text-white">
                Construímos a infraestrutura que faz educação funcionar no digital.
              </h1>

              <p className="reveal mt-6 max-w-[52ch] text-lg leading-relaxed text-white/70">
                Dois produtos no ar — um marketplace de infoprodutos e um preparatório para a OAB —
                sobre a mesma base de IA aplicada, checkout com split e portais white-label.
              </p>

              <div className="reveal mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#produtos"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-base font-semibold text-accent-foreground transition-transform hover:opacity-95 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Conhecer os produtos
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#engenharia"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Ver a arquitetura
                </a>
              </div>
            </div>

            <div className="reveal">
              <HeroPanel />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== Faixa de realidade ===================== */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 sm:px-6 md:grid-cols-3 md:gap-0 md:divide-x md:divide-border">
          <div className="reveal md:pr-8">
            <div className="flex items-center gap-2 font-heading text-sm font-semibold">
              <Globe className="h-4 w-4 text-primary" />
              Dois produtos no ar
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              <a href="https://conectaeduca.com.br" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-foreground">conectaeduca.com.br</a>
              {" e "}
              <a href="https://treinadoroab.com.br" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-foreground">treinadoroab.com.br</a>
              {" — confira você mesmo."}
            </p>
          </div>
          <div className="reveal md:px-8">
            <div className="flex items-center gap-2 font-heading text-sm font-semibold">
              <BrainCircuit className="h-4 w-4 text-primary" />
              IA em fluxo real de usuário
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Tool-use e visão computacional dentro do produto, não chat decorativo.
            </p>
          </div>
          <div className="reveal md:pl-8">
            <div className="flex items-center gap-2 font-heading text-sm font-semibold">
              <CreditCard className="h-4 w-4 text-primary" />
              Pagamentos com split nativo
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Mercado Pago Connect: o criador recebe direto, sem esperar repasse.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== Produtos ===================== */}
      <section id="produtos" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <SectionHead
            eyebrow="O que roda hoje"
            titulo="Dois produtos, uma engenharia"
            sub="Um horizontal, que habilita qualquer criador. Um vertical, que prova a tese num nicho de altíssima exigência."
          />

          <div className="mt-16 space-y-16">
            {PRODUTOS.map((p, idx) => {
              const Icon = p.icone;
              return (
                <div key={p.nome} className={`${p.accentClass} reveal`}>
                  <div className="grid gap-8 lg:grid-cols-[5fr_7fr] lg:items-start">
                    <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="flex items-center gap-3">
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-product-soft text-accent-product">
                          <Icon className="h-6 w-6" />
                        </span>
                        <div>
                          <h3 className="font-heading text-2xl font-bold">{p.nome}</h3>
                          <p className="text-sm font-medium text-accent-product">{p.tagline}</p>
                        </div>
                      </div>
                      <p className="mt-5 leading-relaxed text-muted-foreground">{p.resumo}</p>
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent-product px-5 py-2.5 text-sm font-semibold text-[hsl(var(--pa-fg))] transition-transform hover:opacity-95 active:scale-[0.98]"
                      >
                        Visitar plataforma
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>

                    <div className={`grid gap-3 sm:grid-cols-2 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                      {p.capacidades.map((c) => {
                        const CIcon = c.icon;
                        return (
                          <div
                            key={c.titulo}
                            className="rounded-2xl border border-border bg-card p-5 transition-transform duration-200 hover:-translate-y-1"
                          >
                            <CIcon className="h-5 w-5 text-accent-product" />
                            <div className="mt-3 font-heading text-[0.95rem] font-semibold leading-snug">{c.titulo}</div>
                            <p className="mt-2 text-[0.8rem] leading-relaxed text-muted-foreground">{c.desc}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== Engine de correção ===================== */}
      <section id="engenharia" className="border-t border-border bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <SectionHead
            eyebrow="Por dentro"
            titulo="A engine de correção, aberta"
            sub="A diferença entre “IA que dá nota” e “IA contida por regra”. É aqui que mora o fosso — e é por isso que a nota é justa e contestável."
          />
          <div className="reveal mt-14">
            <CorrectionEngine />
          </div>
        </div>
      </section>

      {/* ===================== Split ===================== */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <SectionHead
            eyebrow="Modelo"
            titulo="Como o dinheiro anda"
            sub="Interessa igualmente a quem vende e a quem investe — sem um centavo de resultado na tela."
          />
          <div className="reveal mt-12">
            <SplitFlow />
          </div>
        </div>
      </section>

      {/* ===================== Espinha dorsal ===================== */}
      <section className="border-t border-border bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <SectionHead
            eyebrow="Plataforma"
            titulo="Duas verticais, uma engenharia"
            sub="Os dois produtos não são projetos paralelos. Compartilham a mesma espinha dorsal — e é ela que torna uma terceira vertical um projeto de meses, não de anos."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-4">
            {CAMADAS.map(({ titulo, itens, icon: Icon }, i) => (
              <div
                key={titulo}
                className="reveal rounded-2xl border border-border bg-card p-6 transition-transform duration-200 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-heading text-base font-semibold">{titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{itens}</p>
              </div>
            ))}
          </div>
          <div className="reveal mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="rounded-full bg-[hsl(var(--pa-conecta)/0.14)] px-3.5 py-1.5 font-semibold text-[hsl(var(--pa-conecta))]">ConectaEduca</span>
            <span className="text-muted-foreground">e</span>
            <span className="rounded-full bg-[hsl(var(--pa-oab)/0.14)] px-3.5 py-1.5 font-semibold text-[hsl(var(--pa-oab))]">TreinadorOAB</span>
            <span className="text-muted-foreground">rodam sobre estas mesmas quatro camadas.</span>
          </div>
        </div>
      </section>

      {/* ===================== Playbook ===================== */}
      <section id="playbook" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <SectionHead
            eyebrow="A tese"
            titulo="De infraestrutura a nova vertical"
            sub="O TreinadorOAB não é só o segundo produto. É a prova de que a base horizontal aguenta um domínio com critério objetivo de acerto."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-4">
            {PLAYBOOK.map(({ n, titulo, desc, icon: Icon }, i) => (
              <div
                key={n}
                className="reveal relative rounded-2xl border border-border bg-card p-6"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-muted-foreground">{n}</span>
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold">{titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
          <p className="reveal mt-8 text-center text-sm text-muted-foreground">
            Tese declarada, não roadmap. Não nomeamos mercados nem prazos que ainda não existem.
          </p>
        </div>
      </section>

      {/* ===================== Princípios de engenharia ===================== */}
      <section className="border-t border-border bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <SectionHead eyebrow="Como decidimos" titulo="Princípios de engenharia" />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {PRINCIPIOS.map(({ titulo, desc, icon: Icon }, i) => (
              <div
                key={titulo}
                className="reveal rounded-2xl border border-border bg-card p-7"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-heading text-base font-semibold">{titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
          <p className="reveal mx-auto mt-10 max-w-2xl text-center leading-relaxed text-muted-foreground">
            A BIPETech é uma empresa brasileira de tecnologia educacional que constrói e opera seus próprios
            produtos. Também mantemos disciplina de custo: cotas mensais por feature e custo de IA monitorado
            por plano e por aluno.
          </p>
        </div>
      </section>

      {/* ===================== Portas de entrada ===================== */}
      <section id="contato" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <SectionHead eyebrow="Por onde começar" titulo="Qual é o seu caso?" />
          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {PORTAS.map(({ label, desc, href, externo, icon: Icon }, i) => (
              <a
                key={label}
                href={href}
                {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="reveal group flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-heading text-base font-semibold">{label}</span>
                  <span className="block text-sm text-muted-foreground">{desc}</span>
                </span>
                {externo ? (
                  <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                ) : (
                  <ArrowRight className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== Footer ===================== */}
      <footer className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-background ring-1 ring-border">
                  <img src="/logo_BIPETech.png" alt="BIPETech" className="h-6 w-6 object-contain" />
                </span>
                <span className="font-heading text-lg font-bold tracking-tight">BIPETech</span>
              </div>
              <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">
                Tecnologia educacional brasileira. Construímos e operamos nossos próprios produtos.
              </p>
              <div className="mt-6 flex gap-2">
                {[
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Mail, label: "E-mail" },
                ].map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#contato"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-heading text-sm font-semibold">Produtos</h4>
              <ul className="mt-4 space-y-3 text-sm">
                <li><a href="https://conectaeduca.com.br" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">ConectaEduca</a></li>
                <li><a href="https://treinadoroab.com.br" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">TreinadorOAB</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-sm font-semibold">Empresa</h4>
              <ul className="mt-4 space-y-3 text-sm">
                <li><a href="#engenharia" className="text-muted-foreground hover:text-foreground">Engenharia</a></li>
                <li><a href="#playbook" className="text-muted-foreground hover:text-foreground">Playbook</a></li>
                <li><a href="#contato" className="text-muted-foreground hover:text-foreground">Contato</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-border pt-6">
            <p className="text-sm text-muted-foreground">
              © 2026 BIPETech. Tecnologia educacional brasileira. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
