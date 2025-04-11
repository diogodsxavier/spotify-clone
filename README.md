Spotify Clone 🎵
Este é um projeto de clone simplificado do Spotify, desenvolvido com o objetivo de explorar a API do Spotify e criar uma interface responsiva para busca e reprodução de músicas. O projeto permite que os usuários façam login com suas contas do Spotify, pesquisem músicas e reproduzam prévias diretamente no navegador.

Funcionalidades 🚀
Login com Spotify: Autenticação via OAuth 2.0 para acessar a API do Spotify.
Busca de Músicas: Pesquise músicas diretamente na API do Spotify.
Reprodução de Prévia: Reproduza prévias de músicas diretamente no navegador.
Interface Responsiva: Layout adaptável para diferentes tamanhos de tela.
Logout: Opção para sair da conta no final da página em telas pequenas.
Tecnologias Utilizadas 🛠️
React: Biblioteca JavaScript para construção de interfaces de usuário.
TypeScript: Superset do JavaScript que adiciona tipagem estática ao código.
Tailwind CSS: Framework CSS para estilização rápida e responsiva.
Axios: Biblioteca para realizar requisições HTTP.
Spotify Web API: API oficial do Spotify para busca e reprodução de músicas.
Vercel: Plataforma para deploy e hospedagem do projeto.

Como Executar o Projeto 🖥️
Pré-requisitos:
Node.js instalado na máquina.
Conta no Spotify Developer Dashboard para obter o Client ID.

Passos:

1. Clone o repositório:
git clone https://github.com/seu-usuario/spotify-clone.git
cd spotify-clone

2. Instale as dependências:
npm install

3. Configure as variáveis de ambiente: Crie um arquivo .env na raiz do projeto e adicione:
VITE_SPOTIFY_CLIENT_ID=seu_client_id

4. Inicie o servidor de desenvolvimento:
npm run dev

5. Acesse o projeto no navegador:
http://localhost:5173

Deploy no Vercel 🚀

Passos para Implantação:

1.Faça login no Vercel.
2.Clique em "New Project" e importe o repositório do GitHub.
3.Configure a variável de ambiente no Vercel:
    Vá para a aba "Settings" do projeto.
    Adicione a variável VITE_SPOTIFY_CLIENT_ID com o valor do seu Client ID do Spotify.
4.Clique em "Deploy" para implantar o projeto.

Após o deploy, o Vercel fornecerá uma URL para acessar o projeto online.

Estrutura do Projeto 📂

src/
├── components/
│   ├── Player.tsx         # Componente para reprodução de prévias
│   ├── SearchBar.tsx      # Componente de busca
│   ├── TrackList.tsx      # Lista de músicas
├── hooks/
│   ├── useAuth.ts         # Hook para autenticação com Spotify
├── types/
│   ├── spotify.ts         # Tipos para a API do Spotify
├── App.tsx                # Componente principal
├── index.css              # Estilos globais com Tailwind CSS

Melhorias Futuras 🌟

Adicionar suporte para playlists.
Implementar controle de volume no player.
Melhorar a experiência de usuário com animações.
Suporte para múltiplos idiomas.

Contribuição 🤝
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

Licença 📄
Este projeto está licenciado sob a MIT License.