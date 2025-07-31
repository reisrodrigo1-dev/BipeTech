import { useState, useEffect } from "react";

export default function Home() {
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="font-inter bg-white text-gray-900">
      {/* Header */}
      <header className={`bg-white shadow-sm sticky top-0 z-50 transition-all ${isHeaderScrolled ? 'bg-white/95 backdrop-blur-sm' : ''}`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-bipe-blue to-bipe-deep rounded-lg flex items-center justify-center">
                <i className="fas fa-brain text-white text-lg"></i>
              </div>
              <span className="text-2xl font-bold text-bipe-deep">BIPETech</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('sobre')} className="text-bipe-gray hover:text-bipe-blue transition-colors">Sobre</button>
              <button onClick={() => scrollToSection('empresas')} className="text-bipe-gray hover:text-bipe-blue transition-colors">Empresas</button>
              <button onClick={() => scrollToSection('missao')} className="text-bipe-gray hover:text-bipe-blue transition-colors">Missão</button>
              <button onClick={() => scrollToSection('tecnologias')} className="text-bipe-gray hover:text-bipe-blue transition-colors">Tecnologias</button>
            </div>
            
            <button className="md:hidden text-bipe-gray">
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-bipe-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
                <i className="fas fa-robot"></i>
                <span>Powered by AI própria</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Inovação em <span className="text-transparent bg-clip-text bg-gradient-to-r from-bipe-blue to-bipe-deep">Tecnologia</span> e Inteligência Artificial
            </h1>
            
            <p className="text-xl text-bipe-gray mb-8 max-w-3xl mx-auto leading-relaxed">
              A BIPETech é uma holding de tecnologia que revoluciona mercados através da inovação e inteligência artificial própria, conectando conhecimento, tecnologia e oportunidades.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('empresas')}
                className="bg-bipe-blue hover:bg-bipe-deep text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                <i className="fas fa-rocket mr-2"></i>
                Conheça Nossas Empresas
              </button>
              <button 
                onClick={() => scrollToSection('tecnologias')}
                className="border-2 border-bipe-blue text-bipe-blue hover:bg-bipe-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all"
              >
                <i className="fas fa-play mr-2"></i>
                Ver Tecnologias
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Sobre a BIPETech</h2>
            <p className="text-lg text-bipe-gray leading-relaxed">
              Somos uma empresa de tecnologia focada em inovação e desenvolvimento de soluções inteligentes. 
              Nossa inteligência artificial própria potencializa cada uma de nossas empresas, criando 
              ecossistemas tecnológicos que transformam a forma como profissionais e empresas interagem 
              com conhecimento e oportunidades digitais.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-slate-50 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-bipe-blue to-bipe-deep rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-lightbulb text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Inovação Contínua</h3>
              <p className="text-bipe-gray">Desenvolvemos tecnologias disruptivas que antecipam as necessidades do mercado.</p>
            </div>
            
            <div className="text-center p-6 bg-slate-50 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-bipe-blue to-bipe-deep rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-brain text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">IA Proprietária</h3>
              <p className="text-bipe-gray">Nossa inteligência artificial própria impulsiona cada solução que criamos.</p>
            </div>
            
            <div className="text-center p-6 bg-slate-50 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-bipe-blue to-bipe-deep rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-network-wired text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Ecossistema Integrado</h3>
              <p className="text-bipe-gray">Conectamos diferentes verticais através de um ecossistema tecnológico robusto.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section id="empresas" className="bg-slate-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossas Empresas</h2>
            <p className="text-lg text-bipe-gray max-w-2xl mx-auto">
              Três empresas inovadoras que formam nosso ecossistema tecnológico, 
              cada uma especializada em seu mercado.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* DireitoHub */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-balance-scale text-white text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">DireitoHub</h3>
              </div>
              
              <p className="text-bipe-blue font-semibold mb-6 text-lg leading-relaxed">
                Transforme seu conhecimento jurídico em renda: crie sua página de vendas profissional em minutos!
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3 text-sm"></i>
                  <span className="text-gray-700">Crie páginas de vendas personalizadas para seus cursos jurídicos</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3 text-sm"></i>
                  <span className="text-gray-700">Construtor visual fácil, rápido e responsivo</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3 text-sm"></i>
                  <span className="text-gray-700">Gerencie e publique seus cursos online</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3 text-sm"></i>
                  <span className="text-gray-700">Personalize cores, textos, imagens e vídeos</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3 text-sm"></i>
                  <span className="text-gray-700">Integração com YouTube e upload de imagens</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3 text-sm"></i>
                  <span className="text-gray-700">Plataforma segura, moderna e feita para advogados</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3 text-sm"></i>
                  <span className="text-gray-700">Tudo em um só lugar: do cadastro do curso à venda online</span>
                </li>
              </ul>
              
              <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                <i className="fas fa-external-link-alt mr-2"></i>
                Conhecer DireitoHub
              </button>
            </div>
            
            {/* Marketplace */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-store text-white text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Marketplace</h3>
              </div>
              
              <p className="text-bipe-blue font-semibold mb-6 text-lg leading-relaxed">
                Crie, venda e assista cursos online de forma simples, moderna e profissional!
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check text-purple-500 mt-1 mr-3 text-sm"></i>
                  <span className="text-gray-700">Plataforma para criadores lançarem e venderem seus próprios cursos online</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-purple-500 mt-1 mr-3 text-sm"></i>
                  <span className="text-gray-700">Experiência moderna para alunos: player responsivo, aulas ao vivo e gravadas</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-purple-500 mt-1 mr-3 text-sm"></i>
                  <span className="text-gray-700">Gestão de módulos, aulas, materiais e progresso do aluno</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-purple-500 mt-1 mr-3 text-sm"></i>
                  <span className="text-gray-700">Suporte a anotações, materiais em PDF e acompanhamento de desempenho</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-purple-500 mt-1 mr-3 text-sm"></i>
                  <span className="text-gray-700">Interface mobile-first, acessível e otimizada para SEO e performance</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-purple-500 mt-1 mr-3 text-sm"></i>
                  <span className="text-gray-700">Identidade visual profissional, com cores institucionais e tipografia moderna</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-purple-500 mt-1 mr-3 text-sm"></i>
                  <span className="text-gray-700">Ideal para advogados, professores e especialistas que desejam monetizar conhecimento</span>
                </li>
              </ul>
              
              <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                <i className="fas fa-external-link-alt mr-2"></i>
                Conhecer Marketplace
              </button>
            </div>
            
            {/* BIPE Plataforma */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-bipe-blue to-bipe-deep rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-code text-white text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">BIPE Plataforma</h3>
              </div>
              
              <p className="text-bipe-blue font-semibold mb-6 text-lg leading-relaxed">
                Soluções tecnológicas avançadas para empresas que buscam inovação digital e crescimento sustentável.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check text-bipe-blue mt-1 mr-3 text-sm"></i>
                  <span className="text-gray-700">Desenvolvimento de plataformas digitais customizadas</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-bipe-blue mt-1 mr-3 text-sm"></i>
                  <span className="text-gray-700">Integração de inteligência artificial em processos empresariais</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-bipe-blue mt-1 mr-3 text-sm"></i>
                  <span className="text-gray-700">Automação e otimização de fluxos de trabalho</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-bipe-blue mt-1 mr-3 text-sm"></i>
                  <span className="text-gray-700">Consultoria em transformação digital</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-bipe-blue mt-1 mr-3 text-sm"></i>
                  <span className="text-gray-700">Soluções escaláveis e seguras para empresas de todos os portes</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-bipe-blue mt-1 mr-3 text-sm"></i>
                  <span className="text-gray-700">Suporte técnico especializado e acompanhamento contínuo</span>
                </li>
              </ul>
              
              <button className="w-full bg-gradient-to-r from-bipe-blue to-bipe-deep text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                <i className="fas fa-external-link-alt mr-2"></i>
                Conhecer BIPE Plataforma
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section id="missao" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Missão, Visão e Valores</h2>
            <p className="text-lg text-bipe-gray max-w-2xl mx-auto">
              Os princípios que guiam nossa jornada de inovação e crescimento sustentável.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Missão */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-r from-bipe-blue to-bipe-deep rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-target text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Missão</h3>
              <p className="text-bipe-gray leading-relaxed">
                Democratizar o acesso à tecnologia de ponta, capacitando profissionais e empresas 
                a transformarem conhecimento em oportunidades reais através de nossas soluções 
                integradas de inteligência artificial.
              </p>
            </div>
            
            {/* Visão */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 text-center border border-amber-100">
              <div className="w-16 h-16 bg-gradient-to-r from-bipe-amber to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-eye text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visão</h3>
              <p className="text-bipe-gray leading-relaxed">
                Ser reconhecida como a principal holding de tecnologia do Brasil, 
                liderando a revolução digital através da inovação contínua e 
                criando um ecossistema que conecta conhecimento, tecnologia e crescimento.
              </p>
            </div>
            
            {/* Valores */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center border border-green-100">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-heart text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Valores</h3>
              <div className="text-left space-y-2">
                <div className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span className="text-bipe-gray text-sm">Inovação Constante</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span className="text-bipe-gray text-sm">Excelência Técnica</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span className="text-bipe-gray text-sm">Transparência</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span className="text-bipe-gray text-sm">Impacto Social</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span className="text-bipe-gray text-sm">Colaboração</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="tecnologias" className="bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Tecnologias que Utilizamos</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Stack tecnológico moderno e robusto que potencializa nossas soluções inovadoras.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 max-w-6xl mx-auto">
            
            {/* React */}
            <div className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-all border border-gray-700">
              <i className="fab fa-react text-4xl text-blue-400 mb-3"></i>
              <h4 className="text-white font-semibold text-sm">React</h4>
              <p className="text-gray-400 text-xs mt-1">Components & Hooks</p>
            </div>
            
            {/* Vite */}
            <div className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-all border border-gray-700">
              <i className="fas fa-bolt text-4xl text-yellow-400 mb-3"></i>
              <h4 className="text-white font-semibold text-sm">Vite</h4>
              <p className="text-gray-400 text-xs mt-1">Build Tool</p>
            </div>
            
            {/* Tailwind CSS */}
            <div className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-all border border-gray-700">
              <i className="fas fa-paint-brush text-4xl text-teal-400 mb-3"></i>
              <h4 className="text-white font-semibold text-sm">Tailwind</h4>
              <p className="text-gray-400 text-xs mt-1">CSS Framework</p>
            </div>
            
            {/* JavaScript */}
            <div className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-all border border-gray-700">
              <i className="fab fa-js-square text-4xl text-yellow-300 mb-3"></i>
              <h4 className="text-white font-semibold text-sm">JavaScript</h4>
              <p className="text-gray-400 text-xs mt-1">ES6+</p>
            </div>
            
            {/* HTML5 */}
            <div className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-all border border-gray-700">
              <i className="fab fa-html5 text-4xl text-orange-500 mb-3"></i>
              <h4 className="text-white font-semibold text-sm">HTML5</h4>
              <p className="text-gray-400 text-xs mt-1">Semantic</p>
            </div>
            
            {/* CSS3 */}
            <div className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-all border border-gray-700">
              <i className="fab fa-css3-alt text-4xl text-blue-500 mb-3"></i>
              <h4 className="text-white font-semibold text-sm">CSS3</h4>
              <p className="text-gray-400 text-xs mt-1">Responsive</p>
            </div>
            
            {/* Google Fonts */}
            <div className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-all border border-gray-700">
              <i className="fab fa-google text-4xl text-red-500 mb-3"></i>
              <h4 className="text-white font-semibold text-sm">G. Fonts</h4>
              <p className="text-gray-400 text-xs mt-1">Inter Typography</p>
            </div>
            
            {/* SVG */}
            <div className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-all border border-gray-700">
              <i className="fas fa-vector-square text-4xl text-green-400 mb-3"></i>
              <h4 className="text-white font-semibold text-sm">SVG</h4>
              <p className="text-gray-400 text-xs mt-1">Icons & Graphics</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-gray-800 text-gray-300 px-6 py-3 rounded-lg border border-gray-700">
              <i className="fas fa-code"></i>
              <span>ESLint • Context API • Mobile-First • SEO Optimized</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-bipe-blue to-bipe-deep py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para Transformar seu Negócio?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Junte-se ao ecossistema BIPETech e descubra como nossas soluções podem 
            impulsionar seu crescimento através da tecnologia e inovação.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-bipe-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg">
              <i className="fas fa-phone mr-2"></i>
              Fale Conosco
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-bipe-blue px-8 py-4 rounded-lg font-semibold transition-all">
              <i className="fas fa-envelope mr-2"></i>
              Solicitar Demonstração
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-bipe-blue to-bipe-deep rounded-lg flex items-center justify-center">
                  <i className="fas fa-brain text-white text-lg"></i>
                </div>
                <span className="text-2xl font-bold text-white">BIPETech</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Holding de tecnologia focada em inovação e inteligência artificial, 
                transformando conhecimento em oportunidades digitais.
              </p>
              <div className="flex space-x-4">
                <i className="fab fa-linkedin text-xl hover:text-bipe-blue cursor-pointer transition-colors"></i>
                <i className="fab fa-twitter text-xl hover:text-bipe-blue cursor-pointer transition-colors"></i>
                <i className="fab fa-github text-xl hover:text-bipe-blue cursor-pointer transition-colors"></i>
                <i className="fab fa-instagram text-xl hover:text-bipe-blue cursor-pointer transition-colors"></i>
              </div>
            </div>
            
            {/* Companies */}
            <div>
              <h4 className="text-white font-semibold mb-4">Nossas Empresas</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-bipe-blue transition-colors">DireitoHub</a></li>
                <li><a href="#" className="hover:text-bipe-blue transition-colors">Marketplace</a></li>
                <li><a href="#" className="hover:text-bipe-blue transition-colors">BIPE Plataforma</a></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contato</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-bipe-blue transition-colors">Fale Conosco</a></li>
                <li><a href="#" className="hover:text-bipe-blue transition-colors">Suporte</a></li>
                <li><a href="#" className="hover:text-bipe-blue transition-colors">Carreiras</a></li>
                <li><a href="#" className="hover:text-bipe-blue transition-colors">Imprensa</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>&copy; 2024 BIPETech. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
