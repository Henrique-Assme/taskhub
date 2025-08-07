# Estrutura de pastas

```
src/
│
├── modules/              # Cada domínio do sistema fica aqui
│   ├── user/             # user.controller.ts, user.service.ts, user.repository.ts
│   ├── task/             # task.controller.ts, etc
│   └── team/
│
├── core/                 # Coisas reutilizáveis e genéricas
│   ├── errors/           # AppError.ts, NotFoundError.ts...
│   ├── middlewares/      # errorHandler.ts, authMiddleware.ts...
│   └── utils/            # funções auxiliares
│
├── config/               # Configurações externas (env, db, etc)
│
├── routes/               # Arquivos de rotas centralizados por domínio
│
├── app.ts                # Configuração do Express, middlewares
└── server.ts             # Ponto de entrada da aplicação
```

# Fluxo da aplicação

Client → Router → Controller → Service → Repository → Prisma → DB -> Response (200/201/400/etc)

# Decisões técnicas
1. Node.js + TypeScript
Node.js oefere um ambiente leve e rápido para construir APIs, com uma comunidade e ecossistemas grandes
TypeScript adiciona tipagem estática, auxiliando a evitar erros comuns e tornando o código mais escalável e fácil de manter

2. Express.js
Expreess é um framework simples e flexível que já tenho contato, permite maior controle sobre a arquitetura da aplicação. Como quero aplicar princípios e clean code e organizar as responsabilidades manualmente é a melhor opção que vejo. 
Evitar frameworks mais fechados, como Next e NestJs, para aprender a construção real do projeto.

3. Prisma ORM + PostgreSQL
Prisma fornece uma interface modernas e segura para tipagem forte com TS, facilitando consultas complexas e evitando SQL injection. PostgreeSQL é um banco relacional robusto, confiável e com recursos avançados para relatórios e métricas no projeto (AGG, JOINS)
Prisma facilita o uso de PostgreSQL e melhora a produtividade durante o desenvolvimento, sem sacrificar performance ou expressividade

4. Jest + Supertest
Jest é um test runner consolidade com ótima integração com TypeScript. Supertest permite testes E2E da API com facilidae. A escolha garante testes rápidos, cobertura clara e facilidade para rodar em CI/CD

5. Swagger + swagger-jsdoc
Swagger é um padrão de mercado para documentar APIs REST. Facilita o entendimento da API por outras pessoas, garante consistência e serve como contraro entre front e backend

6. Winston para logs estruturados
Winston permite definir níveis de log (info, error, debug), persistir logs e enviar observabilidade no futuro (Ex: Grafana Loki). Logs estruturados são essenciais para debugging e rastreamento de erros em produção

7. Docker + Docker Compose
Docker permite empacotar o app e suas dependências de forma reprodutível. Docker Compose facilida o setup do ambiente de desenvolvimento, com PostgreSQL e a aplicaçao rodando juntos

8. JWT para autenticação
JWT é uma solução leeve e stateless para autenticação, ideal para aplicações que podem escalar horizontalmente no futuro. Permite validar sessões sem depende de armazenamento central de sessões

9. CI/CD com github actions
GitHub Actions é gratuíto, fácil de configurar e permite automatizar testes, lint, deploy e coverage. Traz profissionalismo e segurança para o ciclo de desenvolvimento