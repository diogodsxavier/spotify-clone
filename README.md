# Spotify Clone 🎵

Este é um projeto simplificado que replica funcionalidades inspiradas no Spotify. Desenvolvido para explorar a API oficial do Spotify, o projeto oferece uma interface responsiva que permite aos usuários realizar buscas e reproduzir prévias de músicas diretamente no navegador.

## Funcionalidades 🚀

- **Autenticação com Spotify:**  
  Login via OAuth 2.0 para acesso seguro à API do Spotify.
  
- **Busca de Músicas:**  
  Pesquisa e filtragem de músicas utilizando dados em tempo real da API.

- **Reprodução de Prévias:**  
  Reprodução de trechos das músicas, diretamente no navegador.

- **Interface Responsiva:**  
  Layout adaptável para diferentes dispositivos e tamanhos de tela.

- **Logout Simplificado:**  
  Opção para sair da conta facilmente, especialmente otimizada para telas pequenas.

## Tecnologias Utilizadas 🛠️

- **React:** Biblioteca JavaScript para construir interfaces de usuário dinâmicas.
- **TypeScript:** Superset do JavaScript que adiciona tipagem estática, melhorando a manutenção do código.
- **Tailwind CSS:** Framework para estilização rápida e responsiva.
- **Axios:** Biblioteca para realizar requisições HTTP de forma simplificada.
- **Spotify Web API:** API oficial para integração com dados e funcionalidades do Spotify.
- **Vercel:** Plataforma de deploy e hospedagem do projeto.

## Como Executar o Projeto 🖥️

### Pré-requisitos:
- Node.js instalado na máquina.
- Conta no [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/) para obter o Client ID.

### Passos:

1. **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/spotify-clone.git
    cd spotify-clone
    ```
2. **Instale as dependências:**
    ```bash
    npm install
    ```
3. **Configure as variáveis de ambiente:**
   - Crie um arquivo `.env` na raiz do projeto e adicione:
     ```
     VITE_SPOTIFY_CLIENT_ID=seu_client_id
     ```
4. **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
5. **Acesse o projeto:**
   - Abra no navegador: [http://localhost:5173](http://localhost:5173)

## Deploy no Vercel 🚀

### Passos para Implantação:

1. **Login no Vercel:**  
   Acesse sua conta no [Vercel](https://vercel.com).

2. **Novo Projeto:**  
   Clique em "New Project" e importe o repositório do GitHub.

3. **Configuração de Variáveis de Ambiente:**
   - Na aba "Settings" do seu projeto, adicione a variável:
     ```
     VITE_SPOTIFY_CLIENT_ID=seu_client_id
     ```
4. **Deploy:**  
   Clique em "Deploy". Ao final do processo, o Vercel fornecerá uma URL para acessar seu projeto online.

## Melhorias Futuras 🌟

- Adicionar suporte para criação e gerenciamento de playlists.
- Implementar controle de volume no player.
- Melhorar a experiência do usuário com animações e feedback visual.
- Suporte para múltiplos idiomas, ampliando a acessibilidade do projeto.

## Contribuição 🤝

Contribuições são muito bem-vindas!  
Sinta-se à vontade para abrir issues ou enviar pull requests com suas sugestões e melhorias.

## Licença 📄

Este projeto está licenciado sob a [MIT License](LICENSE).

