# Nome do projeto
TaskHub

# Visão do projeto
Um sistema de gerenciamento de tarefas para equipes que permite organização, rastreamento e análise de produtividade

# Público alvo
- Pequenas e médias equipes que precisam acompanhar tarefas
- Freelancers que trabalham com múltiplos clientes
- Times de desenvolvimento, design ou marketing

# Funcionalidades previstas (MVP)
- Cadastro e login de usuários
- Criação e gerenciamento de equipes
- Atribuição de usuários a equipes
- CRUD de tarefas
- Atribuição de tarefas a usuários
- Filtros por status, prioridade, data
- Dashboard de produtividade por equipe
- Autenticação e autorizaçao com JWT

# Métricas que o sistema pode fornecer
- Total de tarefas por time
- Tarefas por status (aberta, em andamento, concluída)
- Tempo médio de conclusão
- Tarefas criadas e concluídas por dia (últimos 7/30 dias)
- Participação dos usuários (quem cria, quem resolve)

# Requisitos não funcionais
- Deploy automático na nuvem (AWS, GCP ou Azure)
- API REST com documentaçao Swagger
- Banco de dados relacionar com consultas avançadas
- Cobertura de testes > 80% com Jest
- Monitoramento e logs estruturados (winston)
- Tratamento robusto de erros com mensagens amigáveis e padronizadas
- CI/CD com github actions
- Executável local com Docker Compose

# Fora no escopo (por enquanto)
- Integração com serviços externos (Slack, email)
- Frontend web
- Sistema de pagamentos ou planos
