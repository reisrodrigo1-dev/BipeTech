import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, CreditCard, Calculator, Building2, Lock, Gauge, ShieldCheck, type LucideIcon } from "lucide-react";
import { Logo } from "@/components/site/Logo";

/* ==================================================================
   /engenharia — aprofundamento para quem quer cavar.

   Decisões de arquitetura e os porquês. Deliberadamente SEM nomes de
   coleção, endpoints, regiões, provedor de auth ou versões — isso
   viraria mapa para atacante sem agregar nada ao leitor.
   ================================================================== */

const DECISOES: { titulo: string; pergunta: string; resposta: string; icon: LucideIcon }[] = [
  {
    titulo: "Split nativo, não repasse manual",
    pergunta: "Por que dividir o pagamento no ato da compra?",
    resposta:
      "Repasse manual obriga a plataforma a custodiar dinheiro de terceiro, cria fila de pagamento e transforma cada erro operacional em disputa. Com o split no momento da transação, o valor do criador nunca passa por uma conta nossa: ele é creditado direto. Isso reduz risco regulatório, elimina uma classe inteira de bug financeiro e torna a taxa de plataforma explícita em vez de implícita.",
    icon: CreditCard,
  },
  {
    titulo: "Determinismo na avaliação",
    pergunta: "Por que o modelo não escreve a nota final?",
    resposta:
      "Um modelo de linguagem é excelente para ler um texto e argumentar se um critério foi atendido. É inadequado para aritmética com consequência. Então separamos as responsabilidades: a IA julga cada item da rubrica isoladamente e justifica; o backend aplica o peso, faz o clamp e soma. A nota é reproduzível e auditável — e, principalmente, contestável pelo aluno, porque cada ponto tem um item e uma justificativa por trás.",
    icon: Calculator,
  },
  {
    titulo: "White-label isolado por slug",
    pergunta: "Como uma instituição opera com a própria marca?",
    resposta:
      "Cada parceiro recebe um espaço próprio identificado por slug, com suas turmas, professores, alunos e relatórios. O isolamento é verificado no acesso ao dado, não apenas na navegação: pertencer a um espaço é condição para ler ou escrever nele. Assim, adicionar um parceiro é configuração, não um novo deploy.",
    icon: Building2,
  },
  {
    titulo: "Papéis segregados e impersonação auditada",
    pergunta: "Como o suporte ajuda um usuário sem virar porta dos fundos?",
    resposta:
      "Os papéis são separados por capacidade, não por tela. Quando a operação precisa reproduzir o que um usuário vê, isso acontece por um mecanismo explícito de impersonação, que deixa rastro e não silencia a origem da ação. A alternativa comum — dar acesso amplo ao time de suporte — troca um problema de produto por um problema de segurança.",
    icon: Lock,
  },
  {
    titulo: "Cotas por feature contêm o custo de IA",
    pergunta: "O que impede a conta de IA de explodir?",
    resposta:
      "IA generativa tem custo marginal real, o que a torna diferente de software tradicional: um usuário muito ativo pode custar múltiplos do que paga. Por isso cada funcionalidade que consome modelo tem cota, e acompanhamos custo por plano e por usuário. Isso mantém a margem previsível e permite desenhar preço com base em consumo observado, não em estimativa.",
    icon: Gauge,
  },
  {
    titulo: "Dado de aluno não vira estoque",
    pergunta: "O que acontece com o que o aluno envia?",
    resposta:
      "A imagem da folha de respostas é processada e descartada — não guardamos o que não precisamos guardar. Conteúdo de aluno não é usado para treinar modelo. A postura é a de coletar o mínimo necessário para entregar a função, o que simplifica a conformidade com a LGPD em vez de terceirizá-la para uma política escrita depois.",
    icon: ShieldCheck,
  },
];

export default function Engenharia() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Engenharia | BIPETech";
  }, []);

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="sticky top-3 z-50 flex justify-center px-4 pt-3 sm:top-5">
        <nav className="flex w-full max-w-3xl items-center justify-between rounded-full border border-border bg-background/85 px-4 py-2.5 backdrop-blur-md">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Link>
          <Logo className="h-6" />
        </nav>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-24">
        <span className="text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-primary">
          Engenharia
        </span>
        <h1 className="display-tight mt-3 text-[clamp(2rem,4.5vw,3rem)]">
          As decisões e os porquês
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Escolhas de arquitetura que moldam os dois produtos. Não há aqui nome de coleção, endpoint,
          região ou versão de biblioteca — esse tipo de detalhe serve mais a quem ataca do que a quem lê.
          O que interessa é o critério por trás de cada decisão.
        </p>

        <div className="mt-14 space-y-12">
          {DECISOES.map(({ titulo, pergunta, resposta, icon: Icon }) => (
            <article key={titulo}>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="font-heading text-xl font-semibold">{titulo}</h2>
              </div>
              <p className="mt-4 font-heading text-[0.95rem] font-medium text-foreground/80">{pergunta}</p>
              <p className="mt-2.5 leading-relaxed text-muted-foreground">{resposta}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-surface p-6">
          <h2 className="font-heading text-base font-semibold">Sobre números</h2>
          <p className="mt-2.5 leading-relaxed text-muted-foreground">
            Você não vai encontrar contador de usuários, faturamento ou taxa de aprovação neste site.
            Não publicamos número que o visitante não possa verificar por conta própria. O que está
            aqui é fato de arquitetura e regra de produto — o resto é conversa para uma mesa, não para
            uma página pública.
          </p>
        </div>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para a home
          </Link>
        </div>
      </main>
    </div>
  );
}
