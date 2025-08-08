# Documentar toda a tragetória e como fiz o projeto
Inicializar o projeto com npm ```npm init -y``` \
Instalar as dependências iniciais:
- Execução: express, dotenv e cors
- Dev: typescript, tsx, @types/node, @types/express (com flag --save-dev)

@types/node e @types/express permitem que o TypeScript possa entender o Node.js e o express e funcionar corretamente

Inicializar o projeto TypeScript com o comando ```npx tsc --init```. Esse comando cria o arquivo `tsconfig.json`, eessencial para definir as opções de compilação do TS, versão do ECMAScript, padrão de módulos, etc.  

Criar os arquivos app e server.ts de forma separada para facilitar os testes furutamente, assim não será necessário subir o servidor para testar.

## Docker

Temos uma abordagem multi-stage build, que serve para manter a imagem final menor e mais segura. Primeiro a etapa de build vai instalar todas as dependências e preparar o ambiente da aplicação. Depois a imagem final é construída em produção com apenas o necessário para a aplicação funcionar.

FROM diz qual a imagem utilizar para o docker, nesse caso o Node.js versão 20. Depois definimos o diretório /app para trabalhar dentro do container. Copiamos os arquivos de dependência e instalamos as dependências. Depois copia o restante do código para dentro do container.

Para a segunda etapa escolhi uma imagem menor e mais leve do node e instalamos no mesmo diretório as dependências, menos as de desenvolvimento. Tudo que foi preparado no builder é copiado para essa imagem final (código + node_modules)

Rodamos o container com `docker compose up --build`. O servidor e banco de dados estão funcionando