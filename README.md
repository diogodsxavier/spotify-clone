# Spotify Clone 🎵

Este é um projeto de clone do Spotify desenvolvido com React e a API do Spotify.

## Funcionalidades
- Login com Spotify via OAuth2.
- Busca de músicas e artistas.
- Player de pré-visualização.

## Tecnologias Utilizadas
- React
- React Router
- Axios
- API do Spotify

## Como Executar
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/spotify-clone.git
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

