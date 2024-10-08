import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".engeformenergia",
  `Como Assistente de T.I de Infraestrutura, atuo para garantir a continuidade e eficiência dos sistemas, sempre buscando soluções que impulsionem a inovação tecnológica da empresa. Com uma abordagem focada na segurança e na evolução dos processos internos, meu objetivo é contribuir para a robustez da infraestrutura e apoiar o crescimento sustentável do negócio, alinhando as necessidades organizacionais às melhores práticas do setor.`,
  "Assistente de T.I",
  "Engeform Energia",
  "Nov 2024 - Atual"
);

hoverChangeExperience(
  ".engeformenergiaestag",
  `Como estagiário de T.I na Engeform Energia, atuei no suporte e na manutenção de sistemas críticos da empresa, garantindo a continuidade das operações tecnológicas. Colaborei com a equipe em iniciativas voltadas à otimização de processos e à implementação de melhorias estruturais, sempre com foco na inovação e na segurança. Além disso, participei de projetos que fortaleceram a eficiência e a gestão de recursos de T.I.`,
  "Estagiário de T.I",
  "Engeform Energia",
  "Set 2023 - Out 2024"
);

// hoverChangeExperience(
//   ".y",
//   `texto aqui`,
//   "cargo exercido",
//   "nome da empresa",
//   "Jun 2021 - Jan 2022 (8 meses)"
// );

// hoverChangeExperience(
//   ".z",
//   `texto aqui`,
//   "cargo exercido",
//   "nome da empresa",
//   "Jun 2021 - Jan 2022 (8 meses)"
// );

// Descrições atualizadas para cada ferramenta
hoverChangeDescription(
  ".kali",
  "Kali Linux é uma distribuição baseada em Linux projetada especificamente para testes de penetração e auditorias de segurança. Vem pré-carregada com uma vasta gama de ferramentas de segurança, facilitando a identificação e exploração de vulnerabilidades em diversos sistemas."
);

hoverChangeDescription(
  ".windows",
  "Windows é um sistema operacional amplamente utilizado em ambientes corporativos e pessoais. Conhecer suas particularidades e vulnerabilidades é essencial para realizar testes de segurança eficazes e implementar medidas de proteção adequadas."
);

hoverChangeDescription(
  ".python",
  "Python é uma linguagem de programação versátil e poderosa, amplamente utilizada em scripts de automação, desenvolvimento de ferramentas de pentesting e análise de dados. Sua sintaxe clara e vasta biblioteca a tornam uma escolha preferida entre profissionais de segurança."
);

hoverChangeDescription(
  ".javascript",
  "JavaScript é uma linguagem de programação fundamental para o desenvolvimento de aplicações web dinâmicas. No contexto de segurança, é essencial para testar a robustez de aplicações contra ataques como XSS e injeções de código."
);

hoverChangeDescription(
  ".bash",
  "Bash é um shell de comando utilizado em sistemas Unix/Linux para automatizar tarefas e administrar sistemas. Dominar Bash é crucial para escrever scripts eficientes que auxiliam em processos de pentesting e análise de segurança."
);

hoverChangeDescription(
  ".burpsuite",
  "Burp Suite é uma plataforma integrada para testes de segurança de aplicações web. Oferece ferramentas avançadas para interceptar, modificar e analisar o tráfego HTTP/S, facilitando a identificação e exploração de vulnerabilidades em aplicações web."
);

hoverChangeDescription(
  ".git",
  "Git é um sistema de controle de versão que permite gerenciar e acompanhar mudanças em projetos de desenvolvimento de software. No contexto de segurança, facilita a colaboração e o versionamento de scripts e ferramentas personalizadas de pentesting."
);

hoverChangeDescription(
  ".nmap",
  "Nmap é uma ferramenta poderosa de scanner de rede utilizada para descobrir hosts, serviços e vulnerabilidades em redes. É essencial para mapear a infraestrutura de TI e identificar pontos fracos que podem ser explorados durante um teste de penetração."
);

hoverChangeDescription(
  ".metasploit",
  "Metasploit é um framework robusto para desenvolvimento e execução de exploits. Facilita a identificação e exploração de vulnerabilidades, além de oferecer ferramentas para pós-exploração e avaliação de sistemas comprometidos."
);

hoverChangeDescription(
  ".nessus",
  "Nessus é um scanner de vulnerabilidades líder no mercado, utilizado para identificar falhas de segurança em sistemas, redes e aplicações. Fornece relatórios detalhados que ajudam na priorização e correção das vulnerabilidades encontradas."
);

hoverChangeDescription(
  ".sqlmap",
  "SQLMap é uma ferramenta automatizada para detecção e exploração de vulnerabilidades de injeção SQL em aplicações web. Simplifica o processo de identificação de falhas em bancos de dados, permitindo a extração de informações sensíveis de forma eficiente."
);

hoverChangeDescription(
  ".nikto",
  "Nikto é um scanner de servidores web que realiza varreduras abrangentes para identificar vulnerabilidades, configurações incorretas e arquivos expostos. É essencial para avaliar a segurança de servidores web e garantir que estejam protegidos contra ameaças comuns."
);

// Atualizar ano do Copyright no index.html
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
  }
});