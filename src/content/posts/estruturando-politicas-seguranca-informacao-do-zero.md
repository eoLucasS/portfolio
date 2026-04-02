---
title: "Como Estruturar Políticas de Segurança da Informação do Zero em uma Empresa"
date: "2025-02-20"
readingTime: "12 min de leitura"
tags: ["Governança", "Políticas de SI", "Blue Team", "ITIL"]
excerpt: "O processo real de criar a base documental de Segurança da Informação em uma empresa que nunca teve uma. Sem teoria genérica: o que funciona na prática."
---

Quando entrei como Assistente de TI focado em Segurança da Informação, a empresa não tinha **nenhuma** política de SI formalizada. Nenhum documento, nenhum procedimento, nenhuma classificação de dados. A segurança existia de forma implícita, baseada no bom senso individual de cada colaborador.

Minha missão foi construir essa base do zero. Este artigo é o registro do que aprendi nesse processo.

## Por que políticas de SI são a fundação de tudo

Sem políticas documentadas, a segurança da sua empresa depende de pessoas. E pessoas mudam de cargo, saem da empresa, esquecem combinados verbais. Políticas de Segurança da Informação são a **memória institucional** da segurança.

Elas servem para:

- **Definir responsabilidades:** quem é responsável pelo quê em caso de incidente
- **Padronizar comportamentos:** todos sabem o que é aceitável e o que não é
- **Sustentar controles técnicos:** uma política de DLP só faz sentido se existe uma política que define o que é dado sensível
- **Atender requisitos de conformidade:** auditorias, certificações e regulamentações exigem documentação
- **Proteger a empresa juridicamente:** em caso de incidente, ter políticas documentadas e comunicadas faz diferença

## O erro de começar pela norma ISO 27001

Muitos profissionais tentam implementar a ISO 27001 inteira logo de cara. Isso raramente funciona em empresas que estão começando. A norma é extensa, e tentar cobrir todos os controles de uma vez resulta em documentos enormes que ninguém lê e ninguém segue.

A abordagem que funcionou foi **começar pelo essencial** e expandir gradualmente:

1. Política de Segurança da Informação (documento guarda-chuva)
2. Política de Controle de Acesso
3. Política de Classificação de Dados
4. Procedimento de Gestão de Incidentes
5. Política de Uso Aceitável de Recursos de TI

Esses cinco documentos cobrem 80% dos cenários do dia a dia e criam a fundação para tudo que vem depois.

## Passo 1: Entenda o negócio antes de escrever qualquer coisa

Antes de abrir o Word, eu passei semanas entendendo como a empresa funciona:

- **Quais são os ativos críticos?** Servidores, bancos de dados, sistemas ERP, e-mails, SharePoint
- **Quem acessa o quê?** Mapeamento de acessos por departamento e função
- **Quais são os riscos reais?** Onde a empresa já teve problemas ou quase teve
- **Qual é a cultura organizacional?** Uma empresa com cultura mais flexível precisa de políticas que eduquem, não que punam

Esse mapeamento é o que diferencia uma política que funciona de uma política que vira papel de gaveta.

## Passo 2: A Política de Segurança da Informação

Este é o documento guarda-chuva. Ele define:

- **Objetivo:** proteger a confidencialidade, integridade e disponibilidade das informações
- **Escopo:** a quem se aplica (todos os colaboradores, terceiros, prestadores de serviço)
- **Princípios:** os pilares que guiam todas as decisões de segurança
- **Responsabilidades:** o papel de cada área (TI, gestores, colaboradores, alta direção)
- **Sanções:** as consequências do descumprimento

O documento não precisa ter 50 páginas. As melhores políticas que já vi têm entre 5 e 10 páginas. Objetividade é mais eficaz que volume.

## Passo 3: Controle de Acesso

Esta política define **quem pode acessar o quê** e **como esses acessos são concedidos, revisados e revogados**. Na prática, ela cobre:

- **Princípio do menor privilégio:** cada usuário recebe apenas os acessos necessários para sua função
- **Processo de concessão:** como solicitar acesso (quem aprova, qual o fluxo)
- **Revisão periódica:** a cada quanto tempo os acessos são revisados (recomendo trimestralmente)
- **Revogação imediata:** quando um colaborador sai da empresa, os acessos são removidos no mesmo dia
- **Contas privilegiadas:** regras específicas para administradores de sistema

Com Microsoft Entra ID, essa política ganha enforcement técnico real. Acesso Condicional, MFA obrigatório para contas administrativas e políticas de sessão são os braços técnicos da política documental.

## Passo 4: Classificação de Dados

Sem saber o que é sensível, você não consegue proteger nada de forma inteligente. A política de classificação define:

- **Níveis de classificação:** Público, Interno, Confidencial, Altamente Confidencial
- **Critérios para cada nível:** o que torna um dado "Confidencial" versus "Interno"
- **Responsabilidade de classificação:** quem classifica (o criador do documento, o gestor da área)
- **Controles por nível:** o que é permitido fazer com cada nível (compartilhar, imprimir, copiar)

Essa política é o que sustenta a implementação de Sensitivity Labels no Microsoft Purview. Sem ela, os rótulos são apenas etiquetas sem significado.

## Passo 5: Gestão de Incidentes

Quando algo dá errado, as pessoas precisam saber **exatamente** o que fazer. O procedimento de gestão de incidentes define:

- **O que é um incidente de segurança:** exemplos concretos (phishing, vazamento de dados, acesso não autorizado, malware)
- **Como reportar:** canal específico, formulário, informações obrigatórias
- **Fluxo de resposta:** quem é acionado, em que ordem, quais são os SLAs
- **Categorização:** severidade do incidente (baixa, média, alta, crítica) com critérios objetivos
- **Pós-incidente:** análise de causa raiz e ações corretivas

Na prática, alinhei esse procedimento com o framework ITIL para gestão de incidentes, garantindo rastreabilidade e métricas para melhoria contínua.

## Passo 6: Uso Aceitável de Recursos

Esta é a política que mais impacta o dia a dia do colaborador. Ela define o que é permitido e o que não é ao usar os recursos de TI da empresa:

- Uso de e-mail corporativo (proibido para fins pessoais que comprometam a segurança)
- Instalação de software não autorizado
- Acesso a sites e serviços de armazenamento pessoal
- Uso de dispositivos pessoais (BYOD)
- Compartilhamento de credenciais

O tom dessa política faz toda a diferença. Se ela for punitiva demais, os colaboradores vão encontrar formas de burlar os controles. Se for educativa, eles se tornam aliados da segurança.

## Como fazer as pessoas realmente lerem as políticas

Escrever a política é metade do trabalho. A outra metade é garantir que as pessoas saibam que ela existe e entendam o que ela diz.

O que funcionou:

- **Apresentação para gestores primeiro:** eles são multiplicadores. Se o gestor entende e apoia, a equipe segue
- **Resumo visual de uma página:** para cada política, criei um resumo visual com os pontos principais. Ninguém lê 10 páginas, mas todo mundo lê um infográfico de uma página
- **Integração no onboarding:** todo novo colaborador recebe e assina as políticas no primeiro dia
- **Comunicação recorrente:** lembretes trimestrais por e-mail com situações reais

## Métricas para acompanhar

Políticas sem métricas são políticas sem evolução. Os indicadores que acompanho:

- **Taxa de assinatura:** percentual de colaboradores que assinaram/reconheceram as políticas
- **Incidentes por categoria:** para identificar se alguma política tem gap
- **Solicitações de exceção:** muitas exceções indicam que a política pode estar desalinhada com a realidade operacional
- **Tempo de revogação de acesso:** quanto tempo leva entre o desligamento e a remoção efetiva dos acessos

## Conclusão

Estruturar Segurança da Informação do zero em uma empresa é um trabalho que exige paciência, pragmatismo e muita comunicação. Não adianta criar documentos perfeitos se ninguém os conhece.

Comece pelo essencial, valide com o negócio, comunique de forma clara e evolua de forma incremental. A segurança mais robusta é aquela que cresce junto com a maturidade da organização.

Se você está enfrentando esse desafio, saiba que o primeiro passo é sempre o mais difícil. Mas cada política implementada é uma camada a mais de proteção que não existia antes.
