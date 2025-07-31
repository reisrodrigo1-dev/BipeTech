import { useState, useEffect } from "react";

export default function Home() {
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderScrolled(window.scrollY > 50);
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
    <div className="font-inter bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isHeaderScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <i className="fas fa-brain text-white text-xl"></i>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                BIPETech
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('sobre')} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Sobre</button>
              <button onClick={() => scrollToSection('empresas')} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Empresas</button>
              <button onClick={() => scrollToSection('missao')} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Missão</button>
              <button onClick={() => scrollToSection('tecnologias')} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Tecnologias</button>
            </div>
            
            <button className="md:hidden text-gray-600 dark:text-gray-300">
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 pt-24 pb-20 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-blue-200 dark:border-blue-800">
                <i className="fas fa-robot text-lg"></i>
                <span>Powered by IA própria</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                Grandes nomes estão <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
                  migrando para a BIPETech
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Somos uma holding de tecnologia que revoluciona mercados através da inovação e 
                <strong className="text-blue-600 dark:text-blue-400"> inteligência artificial própria</strong>, 
                conectando conhecimento, tecnologia e oportunidades.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">3</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">empresas inovadoras</div>
              </div>
              <div className="text-center p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">100%</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">tecnologia própria</div>
              </div>
              <div className="text-center p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg">
                <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">∞</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">possibilidades</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => scrollToSection('empresas')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-xl"
              >
                <i className="fas fa-rocket mr-3"></i>
                Conheça Nossas Empresas
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 px-10 py-4 rounded-xl font-semibold text-lg transition-all"
              >
                <i className="fas fa-info-circle mr-3"></i>
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">
              A solução de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">ponta a ponta</span> mais fácil e rápida
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Uma só empresa que reúne tudo o que você precisa para começar ou escalar o seu negócio digital. 
              <strong className="text-blue-600 dark:text-blue-400"> Nossa IA própria potencializa</strong> cada uma de nossas empresas, 
              criando ecossistemas tecnológicos que transformam mercados.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group text-center p-8 bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-600">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-lightbulb text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Inovação Contínua</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Desenvolvemos tecnologias disruptivas que antecipam as necessidades do mercado e 
                <strong className="text-blue-600 dark:text-blue-400"> revolucionam setores inteiros</strong>.
              </p>
            </div>
            
            <div className="group text-center p-8 bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-600">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-brain text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">IA Proprietária</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Nossa inteligência artificial própria impulsiona cada solução que criamos, 
                <strong className="text-purple-600 dark:text-purple-400"> oferecendo vantagem competitiva única</strong>.
              </p>
            </div>
            
            <div className="group text-center p-8 bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-600">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-network-wired text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Ecossistema Integrado</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Conectamos diferentes verticais através de um ecossistema tecnológico robusto que 
                <strong className="text-green-600 dark:text-green-400"> maximiza resultados</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section id="empresas" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">
              Nossas <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Empresas</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Três empresas inovadoras que formam nosso ecossistema tecnológico. 
              <strong className="text-blue-600 dark:text-blue-400">Uma só ferramenta que reúne tudo</strong> o que você precisa 
              para começar ou escalar o seu negócio digital.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* DireitoHub */}
            <div className="group bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-400">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-balance-scale text-white text-2xl"></i>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">DireitoHub</h3>
              </div>
              
              <p className="text-green-600 dark:text-green-400 font-bold mb-8 text-xl leading-relaxed">
                Transforme seu conhecimento jurídico em renda: crie sua página de vendas profissional em minutos!
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <i className="fas fa-check text-green-600 dark:text-green-400 text-sm"></i>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-lg">Crie páginas de vendas personalizadas para seus cursos jurídicos</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <i className="fas fa-check text-green-600 dark:text-green-400 text-sm"></i>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-lg">Construtor visual fácil, rápido e responsivo</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <i className="fas fa-check text-green-600 dark:text-green-400 text-sm"></i>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-lg">Plataforma segura, moderna e feita para advogados</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <i className="fas fa-check text-green-600 dark:text-green-400 text-sm"></i>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-lg">Tudo em um só lugar: do cadastro à venda online</span>
                </li>
              </ul>
              
              <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg">
                <i className="fas fa-arrow-right mr-3"></i>
                Conhecer DireitoHub
              </button>
            </div>
            
            {/* Marketplace */}
            <div className="group bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-store text-white text-2xl"></i>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Marketplace</h3>
              </div>
              
              <p className="text-purple-600 dark:text-purple-400 font-bold mb-8 text-xl leading-relaxed">
                Crie, venda e assista cursos online de forma simples, moderna e profissional!
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <i className="fas fa-check text-purple-600 dark:text-purple-400 text-sm"></i>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-lg">Plataforma completa para criadores e educadores</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <i className="fas fa-check text-purple-600 dark:text-purple-400 text-sm"></i>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-lg">Player responsivo com aulas ao vivo e gravadas</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <i className="fas fa-check text-purple-600 dark:text-purple-400 text-sm"></i>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-lg">Interface moderna e otimizada para conversão</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <i className="fas fa-check text-purple-600 dark:text-purple-400 text-sm"></i>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-lg">Ideal para monetizar conhecimento especializado</span>
                </li>
              </ul>
              
              <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg">
                <i className="fas fa-arrow-right mr-3"></i>
                Conhecer Marketplace
              </button>
            </div>
            
            {/* BIPE Plataforma */}
            <div className="group bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-code text-white text-2xl"></i>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">BIPE Plataforma</h3>
              </div>
              
              <p className="text-blue-600 dark:text-blue-400 font-bold mb-8 text-xl leading-relaxed">
                Soluções tecnológicas avançadas para empresas que buscam inovação digital e crescimento sustentável.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <i className="fas fa-check text-blue-600 dark:text-blue-400 text-sm"></i>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-lg">Desenvolvimento de plataformas digitais customizadas</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <i className="fas fa-check text-blue-600 dark:text-blue-400 text-sm"></i>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-lg">Integração de IA em processos empresariais</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <i className="fas fa-check text-blue-600 dark:text-blue-400 text-sm"></i>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-lg">Consultoria em transformação digital</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <i className="fas fa-check text-blue-600 dark:text-blue-400 text-sm"></i>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-lg">Soluções escaláveis e acompanhamento contínuo</span>
                </li>
              </ul>
              
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg">
                <i className="fas fa-arrow-right mr-3"></i>
                Conhecer BIPE Plataforma
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section id="missao" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">
              Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Princípios</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Os valores que guiam nossa jornada de inovação e crescimento sustentável, 
              <strong className="text-blue-600 dark:text-blue-400">construindo o futuro da tecnologia</strong> no Brasil.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* Missão */}
            <div className="group bg-white dark:bg-gray-700 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-10 border border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-target text-white text-3xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Missão</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-center">
                Democratizar o acesso à <strong className="text-blue-600 dark:text-blue-400">tecnologia de ponta</strong>, 
                capacitando profissionais e empresas a transformarem conhecimento em oportunidades reais 
                através de nossas soluções integradas de inteligência artificial.
              </p>
            </div>
            
            {/* Visão */}
            <div className="group bg-white dark:bg-gray-700 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-10 border border-gray-200 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-400">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-eye text-white text-3xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Visão</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-center">
                Ser reconhecida como a <strong className="text-purple-600 dark:text-purple-400">principal holding de tecnologia</strong> 
                do Brasil, liderando a revolução digital através da inovação contínua e criando um 
                ecossistema que conecta conhecimento, tecnologia e crescimento.
              </p>
            </div>
            
            {/* Valores */}
            <div className="group bg-white dark:bg-gray-700 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-10 border border-gray-200 dark:border-gray-600 hover:border-green-500 dark:hover:border-green-400">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-heart text-white text-3xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Valores</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-check text-green-600 dark:text-green-400 text-sm"></i>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-lg font-medium">Inovação Constante</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-check text-green-600 dark:text-green-400 text-sm"></i>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-lg font-medium">Excelência Técnica</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-check text-green-600 dark:text-green-400 text-sm"></i>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-lg font-medium">Transparência</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-check text-green-600 dark:text-green-400 text-sm"></i>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-lg font-medium">Impacto Social</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-check text-green-600 dark:text-green-400 text-sm"></i>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-lg font-medium">Colaboração</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="tecnologias" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">
              Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Tecnológico</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Solução completa que integra as <strong className="text-blue-600 dark:text-blue-400">melhores ferramentas</strong> do mercado 
              para facilitar o sucesso da sua jornada digital.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 max-w-7xl mx-auto mb-16">
            
            {/* React */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400">
              <i className="fab fa-react text-5xl text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300"></i>
              <h4 className="text-gray-900 dark:text-white font-bold text-sm mb-1">React</h4>
              <p className="text-gray-500 dark:text-gray-400 text-xs">Components & Hooks</p>
            </div>
            
            {/* Vite */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-yellow-500 dark:hover:border-yellow-400">
              <i className="fas fa-bolt text-5xl text-yellow-400 mb-4 group-hover:scale-110 transition-transform duration-300"></i>
              <h4 className="text-gray-900 dark:text-white font-bold text-sm mb-1">Vite</h4>
              <p className="text-gray-500 dark:text-gray-400 text-xs">Build Tool</p>
            </div>
            
            {/* Tailwind CSS */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400">
              <i className="fas fa-paint-brush text-5xl text-teal-400 mb-4 group-hover:scale-110 transition-transform duration-300"></i>
              <h4 className="text-gray-900 dark:text-white font-bold text-sm mb-1">Tailwind</h4>
              <p className="text-gray-500 dark:text-gray-400 text-xs">CSS Framework</p>
            </div>
            
            {/* JavaScript */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-yellow-600 dark:hover:border-yellow-500">
              <i className="fab fa-js-square text-5xl text-yellow-300 mb-4 group-hover:scale-110 transition-transform duration-300"></i>
              <h4 className="text-gray-900 dark:text-white font-bold text-sm mb-1">JavaScript</h4>
              <p className="text-gray-500 dark:text-gray-400 text-xs">ES6+</p>
            </div>
            
            {/* HTML5 */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-400">
              <i className="fab fa-html5 text-5xl text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300"></i>
              <h4 className="text-gray-900 dark:text-white font-bold text-sm mb-1">HTML5</h4>
              <p className="text-gray-500 dark:text-gray-400 text-xs">Semantic</p>
            </div>
            
            {/* CSS3 */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500">
              <i className="fab fa-css3-alt text-5xl text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300"></i>
              <h4 className="text-gray-900 dark:text-white font-bold text-sm mb-1">CSS3</h4>
              <p className="text-gray-500 dark:text-gray-400 text-xs">Responsive</p>
            </div>
            
            {/* Google Fonts */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-red-500 dark:hover:border-red-400">
              <i className="fab fa-google text-5xl text-red-500 mb-4 group-hover:scale-110 transition-transform duration-300"></i>
              <h4 className="text-gray-900 dark:text-white font-bold text-sm mb-1">G. Fonts</h4>
              <p className="text-gray-500 dark:text-gray-400 text-xs">Inter Typography</p>
            </div>
            
            {/* SVG */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-400">
              <i className="fas fa-vector-square text-5xl text-green-400 mb-4 group-hover:scale-110 transition-transform duration-300"></i>
              <h4 className="text-gray-900 dark:text-white font-bold text-sm mb-1">SVG</h4>
              <p className="text-gray-500 dark:text-gray-400 text-xs">Icons & Graphics</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center space-x-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-2xl border border-gray-200 dark:border-gray-700">
              <i className="fas fa-code text-xl"></i>
              <span className="font-semibold">ESLint • Context API • Mobile-First • SEO Optimized</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 py-24">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Pronto para <span className="text-yellow-300">Transformar</span> seu Negócio?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
              Junte-se ao ecossistema BIPETech e descubra como nossas soluções podem 
              <strong className="text-yellow-300"> impulsionar seu crescimento</strong> através da tecnologia e inovação.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 hover:text-blue-800 transition-all transform hover:scale-105 shadow-2xl">
                <i className="fas fa-rocket mr-3"></i>
                Começar Agora
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105">
                <i className="fas fa-calendar mr-3"></i>
                Agendar Demonstração
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-gray-400 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <i className="fas fa-brain text-white text-xl"></i>
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  BIPETech
                </span>
              </div>
              <p className="text-gray-400 mb-8 max-w-md text-lg leading-relaxed">
                Holding de tecnologia focada em inovação e inteligência artificial, 
                <strong className="text-blue-400"> transformando conhecimento</strong> em oportunidades digitais.
              </p>
              <div className="flex space-x-6">
                <div className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer">
                  <i className="fab fa-linkedin text-gray-400 hover:text-white text-lg"></i>
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer">
                  <i className="fab fa-twitter text-gray-400 hover:text-white text-lg"></i>
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer">
                  <i className="fab fa-github text-gray-400 hover:text-white text-lg"></i>
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer">
                  <i className="fab fa-instagram text-gray-400 hover:text-white text-lg"></i>
                </div>
              </div>
            </div>
            
            {/* Companies */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Nossas Empresas</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-lg">DireitoHub</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-lg">Marketplace</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-lg">BIPE Plataforma</a></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Contato</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-lg">Fale Conosco</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-lg">Suporte</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-lg">Carreiras</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-lg">Imprensa</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-lg">&copy; 2025 BIPETech. Todos os direitos reservados.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">Política de Privacidade</a>
                <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">Termos de Uso</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
