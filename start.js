const { exec } = require("child_process");
const path = require("path");

// Defina o diretório do seu projeto
const projectDir = path.resolve(__dirname);

// Defina o ambiente de produção
process.env.NODE_ENV = "production";

// Instale as dependências
exec("npm install", { cwd: projectDir }, (err, stdout, stderr) => {
  if (err) {
    console.error(`Erro ao instalar dependências: ${stderr}`);
    process.exit(1);
  }

  console.log("Dependências instaladas com sucesso.");

  // Inicie o servidor Next.js
  exec("npm run start", { cwd: projectDir }, (err, stdout, stderr) => {
    if (err) {
      console.error(`Erro ao iniciar o servidor: ${stderr}`);
      process.exit(1);
    }

    console.log("Servidor Next.js iniciado com sucesso.");
    console.log(stdout);
  });
});
