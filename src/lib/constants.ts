export const SITE_URL = "https://portfolio-lucaslopes.vercel.app";

export const OWNER = {
  name: "Lucas Silva",
  title: "Blue Team | Segurança da Informação | IAM | DLP",
  education: "Ciência da Computação",
  postGrad: "Defensive Cyber Security // Blue Team Operations",
  postGradInstitution: "FIAP",
  company: "PEC Energia S.A.",
  email: "lucascontato1419@gmail.com",
  cvUrl: "/docs/cv-lucas-silva.pdf",
  bio: "Profissional de Segurança da Informação com atuação em proteção de dados, gestão de identidade e acesso (IAM), prevenção contra vazamento de dados (DLP) e governança de TI em ambiente corporativo Microsoft 365. Experiência na estruturação de políticas de segurança, controle de endpoints, classificação de dados e implementação de controles voltados a garantir a confidencialidade, integridade e disponibilidade das informações. Bacharel em Ciência da Computação pela Universidade São Judas Tadeu, com pós-graduação em Defensive Cyber Security (Blue Team Operations) pela FIAP em andamento.",
};

export const SOCIAL_LINKS = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/lucaslopesdasilva/", icon: "/icons/linkedin.png" },
  { name: "GitHub", url: "https://github.com/eoLucasS", icon: "/icons/github.png" },
  { name: "Instagram", url: "https://www.instagram.com/lucas.revolt/", icon: "/icons/instagram.png" },
  { name: "Discord", url: "https://discord.com/users/1061061379773181953", icon: "/icons/discord.png" },
  { name: "Email", url: "mailto:lucascontato1419@gmail.com", icon: "/icons/gmail.png" },
];

export const EXPERIENCES = [
  {
    id: 1,
    role: "Assistente de TI",
    subtitle: "Segurança da Informação e Infraestrutura",
    company: "PEC Energia S.A.",
    period: "Nov 2024 - Atual",
    description:
      "Criei do zero toda a base documental de Segurança da Informação da empresa, cobrindo controle de acesso, classificação de dados e gestão de incidentes. Implementei DLP com Sensitivity Labels no Microsoft Purview, protegendo dados sensíveis em ambiente multi-tenant com dois tenants M365 (E3 + EMS E5). Administro identidade e acesso via Entra ID com Acesso Condicional e MFA para colaboradores e terceiros. Gerencio endpoints corporativos via Intune, com deploy automatizado de aplicações Win32 e políticas de segurança segmentadas por departamento. Monitoro e analiso logs de segurança para detecção de atividades suspeitas e apoio na investigação de incidentes. Conduzi a migração da plataforma de ITSM para uma solução com categorização ITIL e controle de SLAs.",
  },
  {
    id: 2,
    role: "Estagiário de TI",
    subtitle: "",
    company: "PEC Energia S.A.",
    period: "Set 2023 - Out 2024",
    description:
      "Efetivado antes do término do contrato por reconhecimento de desempenho e contribuição técnica ao time. Construí base de conhecimento interna que reduziu retrabalho em chamados recorrentes. Responsável pelo atendimento e resolução de incidentes de TI, administração do Microsoft 365, configuração de equipamentos e provisionamento de acessos.",
  },
];

export const PROJECTS = [
  {
    title: "VisionQuest",
    color: "#E51D37",
    description:
      "Jogo educacional interativo que utiliza visão computacional para ensinar matemática de forma inclusiva, com reconhecimento de gestos e perguntas dinâmicas.",
    tags: ["Python", "OpenCV", "MediaPipe"],
    github: "https://github.com/eoLucasS/VisionQuest",
  },
  {
    title: "CyberLens",
    color: "#00A3FF",
    description:
      "Ferramenta open-source com IA que analisa a compatibilidade do seu currículo com qualquer vaga de emprego. Nota de aderência, lacunas, palavras-chave ausentes e plano de estudos personalizado.",
    tags: ["Python", "IA", "NLP"],
    github: "https://github.com/eoLucasS/CyberLens",
  },
  {
    title: "MatchIT",
    color: "#FF6B2B",
    description:
      "Marketplace mobile-first de hardware usado com sistema de swipes, chat em tempo real e matching por localização. Voltado para economia circular e redução de e-waste.",
    tags: ["Mobile", "React Native", "Real-time"],
    github: "https://github.com/eoLucasS/matchit",
  },
  {
    title: "Benchmark de Algoritmos",
    color: "#A6FB98",
    description:
      "Comparação de eficiência de busca e ordenação entre ArrayList e consultas SQL, analisando ciclos e performance em Java.",
    tags: ["Java", "SQL", "Algoritmos"],
    github: "https://github.com/eoLucasS/Benchmark-de-Algoritmos-A3",
  },
  {
    title: "Compilador BASIC",
    color: "#536FED",
    description:
      "Compilador de BASIC para C em Python com análise léxica, sintática e GUI interativa. Tabela de símbolos e código compilado em tempo real.",
    tags: ["Python", "Compiladores", "GUI"],
    github: "https://github.com/eoLucasS/Compilador-A3",
  },
];

export const SECURITY_TRIAD = [
  {
    title: "Confidencialidade",
    icon: "/icons/confidentiality.png",
    description:
      "Garante que as informações só sejam acessadas por pessoas autorizadas, evitando vazamentos ou acessos não permitidos.",
  },
  {
    title: "Integridade",
    icon: "/icons/integrity.png",
    description:
      "Assegura que as informações não sejam alteradas ou corrompidas, garantindo que os dados sejam precisos e confiáveis.",
  },
  {
    title: "Disponibilidade",
    icon: "/icons/availability.png",
    description:
      "Assegura que os sistemas e dados estejam acessíveis aos usuários autorizados sempre que necessário, minimizando interrupções.",
  },
];

export const SKILLS = [
  { name: "Kali Linux", icon: "/icons/kalilinux.png", description: "Kali Linux é uma distribuição baseada em Linux projetada especificamente para testes de penetração e auditorias de segurança. Vem pré-carregada com uma vasta gama de ferramentas de segurança, facilitando a identificação e exploração de vulnerabilidades em diversos sistemas." },
  { name: "Windows", icon: "/icons/windows.png", description: "Windows é um sistema operacional amplamente utilizado em ambientes corporativos e pessoais. Conhecer suas particularidades e vulnerabilidades é essencial para realizar testes de segurança eficazes e implementar medidas de proteção adequadas." },
  { name: "Python", icon: "/icons/python.png", description: "Python é uma linguagem de programação versátil e poderosa, amplamente utilizada em scripts de automação, desenvolvimento de ferramentas de pentesting e análise de dados. Sua sintaxe clara e vasta biblioteca a tornam uma escolha preferida entre profissionais de segurança." },
  { name: "JavaScript", icon: "/icons/js.png", description: "JavaScript é uma linguagem de programação fundamental para o desenvolvimento de aplicações web dinâmicas. No contexto de segurança, é essencial para testar a robustez de aplicações contra ataques como XSS e injeções de código." },
  { name: "Bash", icon: "/icons/bash.png", description: "Bash é um shell de comando utilizado em sistemas Unix/Linux para automatizar tarefas e administrar sistemas. Dominar Bash é crucial para escrever scripts eficientes que auxiliam em processos de pentesting e análise de segurança." },
  { name: "Burp Suite", icon: "/icons/burpsuite.png", description: "Burp Suite é uma plataforma integrada para testes de segurança de aplicações web. Oferece ferramentas avançadas para interceptar, modificar e analisar o tráfego HTTP/S, facilitando a identificação e exploração de vulnerabilidades em aplicações web." },
  { name: "Git", icon: "/icons/git.png", description: "Git é um sistema de controle de versão que permite gerenciar e acompanhar mudanças em projetos de desenvolvimento de software. No contexto de segurança, facilita a colaboração e o versionamento de scripts e ferramentas personalizadas de pentesting." },
  { name: "Nmap", icon: "/icons/nmap.png", description: "Nmap é uma ferramenta poderosa de scanner de rede utilizada para descobrir hosts, serviços e vulnerabilidades em redes. É essencial para mapear a infraestrutura de TI e identificar pontos fracos que podem ser explorados durante um teste de penetração." },
  { name: "Metasploit", icon: "/icons/metasploit.png", description: "Metasploit é um framework robusto para desenvolvimento e execução de exploits. Facilita a identificação e exploração de vulnerabilidades, além de oferecer ferramentas para pós-exploração e avaliação de sistemas comprometidos." },
  { name: "Nessus", icon: "/icons/nessus.png", description: "Nessus é um scanner de vulnerabilidades líder no mercado, utilizado para identificar falhas de segurança em sistemas, redes e aplicações. Fornece relatórios detalhados que ajudam na priorização e correção das vulnerabilidades encontradas." },
  { name: "SQLMap", icon: "/icons/sqlmap.png", description: "SQLMap é uma ferramenta automatizada para detecção e exploração de vulnerabilidades de injeção SQL em aplicações web. Simplifica o processo de identificação de falhas em bancos de dados, permitindo a extração de informações sensíveis de forma eficiente." },
  { name: "Nikto", icon: "/icons/nikto.png", description: "Nikto é um scanner de servidores web que realiza varreduras abrangentes para identificar vulnerabilidades, configurações incorretas e arquivos expostos. É essencial para avaliar a segurança de servidores web e garantir que estejam protegidos contra ameaças comuns." },
];

export const NAV_LINKS = [
  { label: "Sobre", href: "#s-about" },
  { label: "Experiência", href: "#s-experience" },
  { label: "Projetos", href: "#s-projects" },
  { label: "Blog", href: "/blog" },
];

export const BLOG_NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Artigos", href: "/blog" },
];

export const EDUCATION = [
  {
    degree: "Pós-graduação",
    field: "Defensive Cyber Security // Blue Team Operations",
    institution: "FIAP",
    period: "Mar 2026 - Dez 2026",
    status: "Em andamento",
  },
  {
    degree: "Bacharelado",
    field: "Ciência da Computação",
    institution: "Universidade São Judas Tadeu",
    period: "Jan 2022 - Dez 2025",
    status: "Concluído",
  },
];

export const CERTIFICATIONS = [
  {
    title: "Red Hat System Administration I (RH124)",
    institution: "Red Hat",
  },
  {
    title: "AWS Academy Cloud Foundations",
    institution: "Amazon Web Services",
  },
  {
    title: "Segurança Ofensiva e Teste de Invasão (Pentest)",
    institution: "Técnicas de Invasão",
  },
  {
    title: "Introdução ao Pentest na Prática",
    institution: "Desec Security",
  },
  {
    title: "Curso de Segurança Ofensiva e Defensiva",
    institution: "Desec Security",
  },
];

export const STATS = [
  { value: 2, label: "Tenants M365", suffix: "" },
  { value: 138, label: "Endpoints gerenciados", suffix: "+" },
  { value: 10, label: "Políticas de SI criadas", suffix: "+" },
  { value: 1, label: "Estrutura de SI criada do zero", suffix: "ª" },
];

export const TESTIMONIALS = [
  {
    name: "Kaique Otavio",
    role: "Gestor de TI // Diretor na Help Digital SBC",
    text: "É com grande prazer que recomendo Lucas Lopes da Silva pelo seu profissionalismo exemplar e habilidades notáveis. Tive o prazer de estudar com Lucas na USJT, onde pude testemunhar em primeira mão sua dedicação e talento.",
    initials: "KO",
  },
  {
    name: "Gabriel Cortes Teixeira",
    role: "Desenvolvedor Full-Stack // .NET, React & TypeScript",
    text: "Eu recomendo sem dúvidas Lucas como um profissional altamente competente e confiável no campo da tecnologia. Sua abordagem criativa na resolução de problemas e compromisso com a excelência fazem dele uma adição inestimável para qualquer equipe.",
    initials: "GC",
  },
  {
    name: "Nycolas Garcia",
    role: "Cientista de Dados e Engenheiro de ML // FIAP",
    text: "É um prazer recomendar o Lucas. Estudamos juntos em Ciência da Computação na USJT, onde ele se destacou pela pontualidade, pela eficiência em organizar tarefas, antecipar riscos e apoiar a equipe, sempre com postura proativa e colaborativa.",
    initials: "NG",
  },
];

export const FOOTER_SOCIALS = [
  { name: "GitHub", url: "https://github.com/eoLucasS", icon: "/icons/github.png" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/lucaslopesdasilva/", icon: "/icons/linkedin.png" },
  { name: "Instagram", url: "https://www.instagram.com/lucas.revolt/", icon: "/icons/instagram.png" },
];
