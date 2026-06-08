# BIPETech - Site Institucional

Site institucional da **BIPETech**, empresa brasileira de tecnologia educacional que atua como holding e guarda-chuva de plataformas digitais voltadas ao ensino, à aprendizagem e à transformação de carreiras.

## 🚀 Sobre o Projeto

A BIPETech aplica tecnologia e inteligência artificial à educação para conectar quem ensina a quem aprende e levar cada pessoa, de forma concreta, do conhecimento ao resultado. O site é uma landing page institucional que apresenta a empresa e seus produtos.

### Nossos Produtos

1. **ConectaEduca** — A plataforma completa de educação digital ([conectaeduca.com.br](https://conectaeduca.com.br))
   - Marketplace de dois lados: criadores que vendem e alunos que aprendem
   - Criação e venda de cursos, com player de aulas ao vivo e gravadas
   - Pagamentos, analytics e monetização integrados

2. **TreinadorOAB** — Acompanhamento de estudos para a 1ª fase da OAB ([treinadoroab.com.br](https://treinadoroab.com.br))
   - Método "Destranque sua Aprovação"
   - Organização diária dos estudos, constância e apoio emocional
   - Rádio TreinadorOAB: dicas, correção de questões, notícias e jurisprudência

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Build Tool**: Vite
- **Backend**: Express.js + TypeScript
- **Database**: PostgreSQL com Drizzle ORM
- **Deployment**: Replit

## 📦 Estrutura do Projeto

```
├── client/          # Frontend React
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── lib/
├── server/          # Backend Express
├── shared/          # Schemas compartilhados
└── README.md
```

## 🚀 Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/reisrodrigo1-dev/BipeTech.git
cd BipeTech
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto:
```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5000`

## 🎨 Design

Sistema de design próprio, premium e coeso:
- **Identidade**: azul-petróleo profundo (marca-mãe) + acento âmbar pontual, fugindo do gradiente azul-roxo genérico
- **Cores de produto**: violeta-magenta (ConectaEduca) e esmeralda-jade (TreinadorOAB)
- **Tipografia**: Sora (títulos) + Inter (corpo)
- **Ícones**: Lucide (SVG), sem emojis
- **Dark mode** com tokens semânticos (redesenhado, não invertido)
- Animações sutis (transform/opacity), reveal-on-scroll e respeito a `prefers-reduced-motion`
- Acessibilidade: contraste AA, foco visível por teclado, viewport com zoom habilitado

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Funcionalidades

- ✅ Design responsivo
- ✅ Navegação suave entre seções
- ✅ Animações e efeitos hover
- ✅ SEO otimizado
- ✅ Performance otimizada
- ✅ Acessibilidade (WCAG)

## 📊 Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## 📝 Licença

Este projeto é propriedade da BIPETech. Todos os direitos reservados.

## 👥 Contato

- Website: [BIPETech](https://bipetech.com)
- Email: contato@bipetech.com

---

Desenvolvido com ❤️ pela equipe BIPETech