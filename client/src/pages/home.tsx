import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Sun,
  Moon,
  ArrowRight,
  ArrowUpRight,
  Check,
  Building2,
  GraduationCap,
  BrainCircuit,
  Store,
  Scale,
  Sparkles,
  Radio,
  CreditCard,
  BarChart3,
  CalendarCheck,
  Target,
  Eye,
  Cpu,
  ShieldCheck,
  Users,
  TrendingUp,
  Zap,
  HeartHandshake,
  Linkedin,
  Instagram,
  Mail,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Hooks                                                               */
/* ------------------------------------------------------------------ */

function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = localStorage.getItem("bipetech-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = (stored as "light" | "dark") || (prefersDark ? "dark" : "light");
    setTheme(initial);
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

    // Safety net: immediately reveal anything already in the viewport (above the
    // fold), and guarantee everything is shown shortly after load even if the
    // observer never fires (e.g. unusual viewport / no-scroll environments).
    const revealInView = () => {
      els.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.add("is-visible");
        }
      });
    };
    revealInView();
    const fallback = window.setTimeout(() => {
      els.forEach((el) => el.classList.add("is-visible"));
    }, 1200);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);
}

/* ------------------------------------------------------------------ */
/* Small building blocks                                               */
/* ------------------------------------------------------------------ */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-primary">
      {children}
    </span>
  );
}

function NavLink({ label, href, onClick }: { label: string; href: string; onClick?: () => void }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring rounded-sm"
    >
      {label}
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "Princípios", href: "#principios" },
  { label: "Contato", href: "#contato" },
];

const PILARES: { titulo: string; descricao: string; icone: LucideIcon }[] = [
  {
    titulo: "Infraestrutura para quem ensina",
    descricao:
      "Ferramentas para educadores e criadores produzirem, venderem e monetizarem conhecimento, com tecnologia integrada em um só lugar.",
    icone: Building2,
  },
  {
    titulo: "Jornada para quem aprende",
    descricao:
      "Experiências de estudo com método, ritmo e apoio, desenhadas a partir da realidade de cada aluno até o objetivo final.",
    icone: GraduationCap,
  },
  {
    titulo: "Inteligência que organiza",
    descricao:
      "IA como camada que organiza estudos, personaliza jornadas e aproxima o aprendizado do resultado real de cada pessoa.",
    icone: BrainCircuit,
  },
];

const PRODUTOS = [
  {
    nome: "ConectaEduca",
    tagline: "A plataforma completa de educação digital",
    descricao:
      "Um marketplace de dois lados: dá a criadores e educadores as ferramentas para produzir, vender e monetizar cursos e conteúdo, e a alunos um universo amplo de conhecimento profissional relevante.",
    bullets: [
      "Criação e venda de cursos em um só lugar",
      "Player de aulas ao vivo e gravadas",
      "Pagamentos, analytics e monetização integrados",
      "Feito para criadores e alunos — os dois lados do mercado",
    ],
    ctaLabel: "Acessar ConectaEduca",
    ctaUrl: "https://conectaeduca.com.br",
    icone: Store,
    accentClass: "accent-conecta",
  },
  {
    nome: "TreinadorOAB",
    tagline: "Acompanhamento de estudos para a 1ª fase da OAB",
    descricao:
      "Vai além do conteúdo. Guiada pelo método “Destranque sua Aprovação”, organiza a rotina diária, sustenta a constância e cuida do lado emocional da jornada — com método, ritmo e apoio até a aprovação.",
    bullets: [
      "Método “Destranque sua Aprovação”",
      "Organização diária dos estudos e constância",
      "Apoio emocional ao longo da jornada",
      "Rádio TreinadorOAB: dicas, correção de questões e jurisprudência",
    ],
    ctaLabel: "Acessar TreinadorOAB",
    ctaUrl: "https://treinadoroab.com.br",
    icone: Scale,
    accentClass: "accent-oab",
  },
];

const DIFERENCIAIS: { titulo: string; descricao: string; icone: LucideIcon; large?: boolean }[] = [
  {
    titulo: "IA aplicada à educação",
    descricao:
      "Inteligência artificial como camada que organiza estudos, personaliza jornadas e amplia o alcance de educadores — não como vitrine.",
    icone: Sparkles,
    large: true,
  },
  { titulo: "Player ao vivo e gravado", descricao: "Aulas com qualidade e fluidez para criadores e alunos.", icone: BarChart3 },
  { titulo: "Pagamentos e monetização", descricao: "Infraestrutura para transformar conhecimento em renda.", icone: CreditCard },
  { titulo: "Acompanhamento de estudos", descricao: "Rotina, constância e método guiando o aluno até o resultado.", icone: CalendarCheck },
  { titulo: "Rádio e conteúdo em áudio", descricao: "Dicas, correções e novidades no ritmo do estudante.", icone: Radio },
];

const VALORES: { titulo: string; descricao: string; icone: LucideIcon }[] = [
  { titulo: "Educação que gera resultado", descricao: "Medimos sucesso pela transformação real do aluno e do educador, não por vaidade de plataforma.", icone: Target },
  { titulo: "Tecnologia com propósito", descricao: "IA e produto são meios, não vitrine. Só construímos o que torna o aprender mais simples e humano.", icone: Cpu },
  { titulo: "Honestidade no que prometemos", descricao: "Comunicamos com clareza, sem inflar números ou expectativas. Confiança vem da transparência.", icone: ShieldCheck },
  { titulo: "Foco em quem usa", descricao: "Conhecemos a fundo cada público e desenhamos cada produto a partir da sua realidade.", icone: Users },
  { titulo: "Constância e excelência", descricao: "Grandes conquistas vêm da disciplina diária — no aluno e na forma como evoluímos.", icone: TrendingUp },
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
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-dvh bg-background text-foreground">
      {/* ===================== Header ===================== */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
          scrolled ? "border-b border-border bg-background/85 backdrop-blur-md" : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
          <a href="#top" className="flex items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface ring-1 ring-border">
              <img src="/logo_BIPETech.png" alt="BIPETech" className="h-6 w-6 object-contain" />
            </span>
            <span className="font-heading text-lg font-bold tracking-tight">BIPETech</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((l) => (
              <NavLink key={l.href} {...l} />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <a
              href="#produtos"
              className="hidden rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:bg-primary-hover active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:inline-block"
            >
              Conhecer o ecossistema
            </a>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-secondary md:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="border-t border-border bg-background px-5 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((l) => (
                <NavLink key={l.href} {...l} onClick={() => setMenuOpen(false)} />
              ))}
            </div>
          </div>
        )}
      </header>

      {/* ===================== Hero ===================== */}
      <section id="top" className="hero-mesh relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-6">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-[0.8125rem] font-medium text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Tecnologia e IA aplicadas à educação
            </span>
          </div>

          <h1 className="reveal mt-7 font-heading text-[clamp(2.5rem,6vw,4rem)] font-bold leading-[1.05]">
            Transformamos conhecimento em{" "}
            <span className="text-primary">conquista</span>
          </h1>

          <p className="reveal mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A BIPETech é o ecossistema brasileiro que conecta quem ensina a quem aprende.
            Plataformas digitais que levam cada pessoa, de forma concreta, do conhecimento ao resultado.
          </p>

          <div className="reveal mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#produtos"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-transform hover:bg-primary-hover active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:w-auto"
            >
              Conhecer nossos produtos
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#sobre"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 text-base font-semibold text-foreground transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:w-auto"
            >
              Sobre a BIPETech
            </a>
          </div>
        </div>

        {/* Honest qualitative proof strip */}
        <div className="reveal mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-3 px-5 sm:grid-cols-3 sm:px-6">
          {[
            { icon: ShieldCheck, label: "Plataformas em produção" },
            { icon: Zap, label: "IA aplicada, não vitrine" },
            { icon: HeartHandshake, label: "Suporte humano" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center justify-center gap-2.5 rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium text-muted-foreground">
              <Icon className="h-4 w-4 text-primary" />
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* ===================== Sobre ===================== */}
      <section id="sobre" className="border-t border-border py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="reveal mx-auto max-w-3xl text-center">
            <Eyebrow>Quem somos</Eyebrow>
            <h2 className="mt-3 font-heading text-[clamp(1.875rem,4vw,2.75rem)] font-bold">
              Mais que software. Um ecossistema de educação.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              A BIPETech atua como holding e guarda-chuva de plataformas voltadas ao ensino, à aprendizagem
              e à transformação de carreiras. De um lado, infraestrutura para quem cria e distribui educação.
              Do outro, experiências de estudo que sustentam o aluno até o resultado.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PILARES.map(({ titulo, descricao, icone: Icon }) => (
              <div
                key={titulo}
                className="reveal rounded-2xl border border-border bg-card p-7 transition-transform duration-200 hover:-translate-y-1"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-heading text-xl font-semibold">{titulo}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== Produtos ===================== */}
      <section id="produtos" className="border-t border-border bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="reveal mx-auto max-w-3xl text-center">
            <Eyebrow>Nossos produtos</Eyebrow>
            <h2 className="mt-3 font-heading text-[clamp(1.875rem,4vw,2.75rem)] font-bold">
              Dois produtos, uma mesma tese
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Plataforma que habilita a educação em escala e produto verticalizado que prova, em um nicho de
              alta exigência, como tecnologia bem aplicada leva o aluno até o resultado.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {PRODUTOS.map((p) => {
              const Icon = p.icone;
              return (
                <div
                  key={p.nome}
                  className={`${p.accentClass} reveal group flex flex-col rounded-2xl border border-border bg-card p-8 transition-transform duration-200 hover:-translate-y-1`}
                  style={{ borderTop: "3px solid hsl(var(--pa))" }}
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent-product-soft text-accent-product">
                      <Icon className="h-7 w-7" />
                    </span>
                    <div>
                      <h3 className="font-heading text-2xl font-bold">{p.nome}</h3>
                      <p className="text-sm font-medium text-accent-product">{p.tagline}</p>
                    </div>
                  </div>

                  <p className="mt-6 leading-relaxed text-muted-foreground">{p.descricao}</p>

                  <ul className="mt-6 space-y-3">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent-product-soft">
                          <Check className="h-3 w-3 text-accent-product" />
                        </span>
                        <span className="text-[0.95rem] text-foreground/90">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={p.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-accent-product px-6 py-3 text-base font-semibold text-[hsl(var(--pa-fg))] transition-transform hover:opacity-95 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    {p.ctaLabel}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== Diferenciais (bento) ===================== */}
      <section className="border-t border-border py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="reveal mx-auto max-w-3xl text-center">
            <Eyebrow>Por que BIPETech</Eyebrow>
            <h2 className="mt-3 font-heading text-[clamp(1.875rem,4vw,2.75rem)] font-bold">
              Tecnologia que serve ao aprendizado
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3 md:auto-rows-fr">
            {DIFERENCIAIS.map(({ titulo, descricao, icone: Icon, large }) => (
              <div
                key={titulo}
                className={`reveal relative overflow-hidden rounded-2xl border border-border p-7 transition-transform duration-200 hover:-translate-y-1 ${
                  large ? "bg-card md:col-span-2 md:row-span-2" : "bg-card"
                }`}
              >
                {large && (
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full"
                    style={{ background: "radial-gradient(closest-side, hsl(var(--brand-accent) / 0.18), transparent)" }}
                    aria-hidden
                  />
                )}
                <span
                  className={`flex items-center justify-center rounded-xl ${
                    large ? "h-14 w-14 bg-accent/15 text-accent" : "h-12 w-12 bg-primary/10 text-primary"
                  }`}
                >
                  <Icon className={large ? "h-7 w-7" : "h-6 w-6"} />
                </span>
                <h3 className={`mt-5 font-heading font-semibold ${large ? "text-2xl" : "text-lg"}`}>{titulo}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== Princípios ===================== */}
      <section id="principios" className="border-t border-border bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="reveal mx-auto max-w-3xl text-center">
            <Eyebrow>Nossos princípios</Eyebrow>
            <h2 className="mt-3 font-heading text-[clamp(1.875rem,4vw,2.75rem)] font-bold">
              No que acreditamos
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div className="reveal rounded-2xl border border-border bg-card p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Target className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-semibold">Missão</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Aplicar tecnologia e inteligência artificial à educação para conectar quem ensina a quem aprende
                e levar cada pessoa, de forma concreta, do conhecimento ao resultado.
              </p>
            </div>
            <div className="reveal rounded-2xl border border-border bg-card p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Eye className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-semibold">Visão</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Ser o ecossistema brasileiro de referência em tecnologia educacional, reconhecido por transformar
                aprendizado em conquistas reais — de carreiras construídas a aprovações conquistadas.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {VALORES.map(({ titulo, descricao, icone: Icon }) => (
              <div key={titulo} className="reveal rounded-2xl border border-border bg-card p-6">
                <Icon className="h-6 w-6 text-primary" />
                <h4 className="mt-4 font-heading text-base font-semibold leading-snug">{titulo}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section id="contato" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div
            className="reveal relative overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-12"
            style={{ background: "linear-gradient(135deg, hsl(198 80% 30%), hsl(198 84% 22%))" }}
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: "radial-gradient(60% 80% at 80% 0%, hsl(var(--brand-accent) / 0.18), transparent 60%)" }}
              aria-hidden
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-white">
                Conhecimento vira conquista quando a tecnologia é bem aplicada
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/85">
                Seja para construir uma fonte de renda ensinando ou conquistar a aprovação que muda uma carreira,
                há um produto BIPETech para o seu objetivo.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="https://conectaeduca.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-base font-semibold text-accent-foreground transition-transform hover:opacity-95 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
                >
                  Acessar ConectaEduca
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="https://treinadoroab.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/40 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
                >
                  Acessar TreinadorOAB
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
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
                O ecossistema de tecnologia e IA que transforma conhecimento em conquista.
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
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-heading text-sm font-semibold">Produtos</h4>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a href="https://conectaeduca.com.br" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
                    ConectaEduca
                  </a>
                </li>
                <li>
                  <a href="https://treinadoroab.com.br" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
                    TreinadorOAB
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-sm font-semibold">Empresa</h4>
              <ul className="mt-4 space-y-3 text-sm">
                <li><a href="#sobre" className="text-muted-foreground transition-colors hover:text-foreground">Sobre</a></li>
                <li><a href="#principios" className="text-muted-foreground transition-colors hover:text-foreground">Missão e valores</a></li>
                <li><a href="#contato" className="text-muted-foreground transition-colors hover:text-foreground">Contato</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2026 BIPETech. Tecnologia educacional brasileira. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
