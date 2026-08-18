import React from 'react';

const App = () => {
  return (
    <div className="bg-gray-100 p-4 min-h-screen font-sans">
      <div className="max-w-5xl mx-auto border border-gray-300 shadow-xl rounded-lg bg-white overflow-hidden">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row bg-slate-800 text-white p-8 items-center md:items-start gap-8">
          
          {/* FOTO */}
          <div className="h-44 w-44 overflow-hidden rounded-full border-4 border-white shadow-lg shrink-0 bg-slate-700">
            <img 
              src="/essafoto.jpeg" 
              alt="Natalia Nunes Alves"
              className="h-full w-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.innerHTML = '<div class="h-full w-full flex items-center justify-center text-5xl font-bold text-slate-400">NN</div>';
              }}
            />
          </div>

          <div className="text-center md:text-left mt-4 md:mt-8">
            <h1 className="font-bold text-3xl md:text-5xl uppercase tracking-wider">
              Natália Nunes Alves
            </h1>
            <p className="text-xl text-blue-400 font-semibold mt-2">
              Futura Desenvolvedora Full Stack
            </p>
          </div>
        </div>

        {/* --- CORPO DO CURRÍCULO --- */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* COLUNA LATERAL */}
          <aside className="md:col-span-1 space-y-10">
            
            <section>
              <h2 className="text-xl font-bold text-slate-800 border-b-2 border-blue-500 pb-2 mb-4 uppercase">Contato</h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-center gap-3">
                  <span className="text-blue-600 font-bold w-12 text-xs">Email:</span>
                  <span className="truncate text-sm font-medium">natalianalves@hotmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-600 font-bold w-12 text-xs">Fone:</span>
                  <span className="text-sm font-medium">(31) 983684168</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-600 font-bold w-12 text-xs">Local:</span>
                  <span className="text-sm italic">Belo Horizonte - MG</span>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 border-b-2 border-blue-500 pb-2 mb-4 uppercase">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  'React', 'Vite', 'JavaScript', 'HTML5', 'CSS3', 'Node.js', 'NPM',
                  'Git', 'GitHub', 'Vercel', 'AWS Cloud', 'Python', 'Java', 'SQL', 'Neo4j', 'UML'
                ].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 border-b-2 border-blue-500 pb-2 mb-4 uppercase">Educação</h2>
              <div className="space-y-6 text-sm">
                <div>
                  <p className="text-blue-600 font-extrabold text-base">2025 — 2027</p>
                  <p className="font-bold text-gray-800 uppercase leading-tight">Análise e Des. de Sistemas</p>
                  <p className="text-gray-500">Uninter</p>
                </div>
                <div>
                  <p className="text-blue-600 font-extrabold text-base">2025 — 2026</p>
                  <p className="font-bold text-gray-800 uppercase leading-tight">Certificação Front-End em React</p>
                  <p className="text-gray-500">IFMG (144h)</p>
                </div>
                <div>
                  <p className="text-blue-600 font-extrabold text-base">2026</p>
                  <p className="font-bold text-gray-800 uppercase leading-tight">Formação Complementar</p>
                  <p className="text-gray-500">AWS Academy (Cloud & IA)</p>
                  <p className="text-gray-500">Senac-GO / Cisco (Redes & Cibersegurança)</p>
                </div>
              </div>
            </section>
          </aside>

          {/* CONTEÚDO PRINCIPAL */}
          <main className="md:col-span-2 space-y-12">
            
            <section>
              <h2 className="text-xl font-bold text-slate-800 border-b-2 border-blue-500 pb-2 mb-4 uppercase">Sobre Mim</h2>
              <p className="text-gray-700 leading-relaxed text-justify font-medium">
                Estudante de Análise e Desenvolvimento de Sistemas com sólida formação complementar. Possuo Residência Tecnológica pelo programa federal Conecta e Capacita (IFMG/CEPEDI/MCTI/SOFTEX), atuando na resolução de desafios práticos de desenvolvimento web. Além da base sólida em Front-End, possuo qualificações em Cloud Computing (AWS), Infraestrutura de Redes e Cibersegurança. Experiência prática acadêmica no desenvolvimento de aplicações com JavaScript, React, Python e modelagem de bancos de dados (Relacionais e Neo4j). Busco oportunidade para aplicar meus conhecimentos técnicos de forma prática.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 border-b-2 border-blue-500 pb-2 mb-4 uppercase">Experiência & Projetos</h2>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-lg font-bold text-gray-800 tracking-tight">Residente Front-End</h3>
                    <span className="text-xs font-bold bg-slate-200 text-slate-700 px-2 py-1 rounded">05/2026 - 07/2026</span>
                  </div>
                  <p className="text-blue-600 font-medium mb-3 italic text-sm">IFMG / CEPEDI (Programa Conecta e Capacita)</p>
                  <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                    <li>Atuação em Residência Tecnológica com dedicação de 56 horas voltadas exclusivamente ao desenvolvimento e aplicação prática de soluções web.</li>
                    <li>Resolução de desafios tecnológicos práticos com empresas parceiras.</li>
                    <li>Aplicação de conceitos avançados de Front-End utilizando <strong>React</strong> e <strong>Vite</strong>.</li>
                    <li>Controle de versionamento de código e colaboração técnica utilizando <strong>Git</strong> e <strong>GitHub</strong>.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-lg font-bold text-gray-800 tracking-tight">Práticas Acadêmicas e Autônomas</h3>
                    <span className="text-xs font-bold bg-slate-200 text-slate-700 px-2 py-1 rounded">2024 - Presente</span>
                  </div>
                  <p className="text-blue-600 font-medium mb-3 italic text-sm">Desenvolvimento e Engenharia</p>
                  <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                    <li>Desenvolvimento de aplicações completas e SPAs estruturadas com deploy ativo via <strong>Vercel</strong>.</li>
                    <li>Criação de lógicas de programação e pequenos jogos utilizando a linguagem <strong>Python</strong>.</li>
                    <li>Modelagem e análise de dados utilizando estruturas relacionais (<strong>SQL</strong>) e bancos orientados a grafos (<strong>Neo4j / Cypher</strong>).</li>
                    <li>Uso de boas práticas de Engenharia de Software com análise de requisitos, diagramas ER, MER e documentações em <strong>UML</strong>.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* DIFERENCIAIS */}
            <section>
              <h2 className="text-xl font-bold text-slate-800 border-b-2 border-blue-500 pb-2 mb-4 uppercase">Diferenciais</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="p-5 bg-gray-50 rounded-lg border-l-4 border-blue-500 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-lg mb-1">
                    Cloud & IA (AWS)
                  </h3>
                  <p className="text-xs text-gray-600 italic">
                    Conhecimentos sólidos em infraestrutura de computação em nuvem e inteligência artificial generativa pela AWS Academy.
                  </p>
                </div>

                <div className="p-5 bg-gray-50 rounded-lg border-l-4 border-blue-500 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-lg mb-1">
                    Redes & Segurança
                  </h3>
                  <p className="text-xs text-gray-600 italic">
                    Formação em infraestrutura de redes e segurança digital pelas trilhas oficiais da Cisco Networking Academy e Senac-GO.
                  </p>
                </div>

              </div>
            </section>
          </main>

        </div>
      </div>
      <footer className="text-center mt-6 text-gray-400 text-[10px] uppercase tracking-[2px]">
        Desenvolvido com React, Vite & Tailwind CSS
      </footer>
    </div>
  );
};

export default App;
