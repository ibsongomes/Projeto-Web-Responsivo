# Projeto-Web-Responsivo

## UsersCx

O Projeto foi desenvolvido por [Ibson Gomes](https://github.com/ibsongomes) para a disciplina de Coding da faculdade Senac, focado na criação de uma interface responsiva utilizando HTML, CSS e JavaScript.
Consiste em um cadastro de usuários, com nome de "UsersCx".

### Tecnologias Utilizadas:

* **HTML**
* **CSS**
* **JavaScript**

### Funcionalidades:

* **Responsividade:** Interface responsiva que se adapta a dispositivos móveis.
* **Preenchimento Automático (Integração de API):** Consumo da API pública ViaCEP. Ao digitar um CEP válido, os campos de Endereço, Cidade e Estado são preenchidos automaticamente.
* **Validação de Dados:** O sistema impede o envio do formulário se o campo "Nome" estiver vazio ou se o "CEP" inserido for inexistente/inválido.
* **Integração de Hardware (Foto de Perfil):** Acesso nativo à galeria de arquivos e câmera do dispositivo do usuário para envio de foto, gerando uma pré-visualização (miniatura) em tempo real na interface.
* **Progressive Web App (PWA):** A aplicação é instalável (pode ser adicionada à tela inicial de smartphones e computadores) e utiliza um Service Worker para gerenciar o cache, permitindo carregamento rápido.

### Assistência de Inteligência Artificial (IA)

Durante o desenvolvimento deste projeto, ferramentas de IA generativa (como o Google Gemini) foram utilizadas como apoio ao aprendizado e aceleração de desenvolvimento. A IA foi empregada especificamente nas seguintes etapas:

* **Ajustes de Layout:** Auxílio na resolução de conflitos avançados de CSS Grid e Flexbox, especificamente no alinhamento dinâmico da miniatura da foto de perfil.
* **Configuração de PWA:** Geração da estrutura base e sintaxe dos arquivos `manifest.json` e Service Worker (`sw.js`) para habilitar a instalação e o funcionamento offline.
* **Refinamento de JavaScript:** Otimização da lógica de consumo da API ViaCEP e implementação da API nativa do navegador para pré-visualização de imagens (`URL.createObjectURL`).
* **Debugging:** Identificação de falhas lógicas na revalidação de campos do formulário.

*Nota: Toda a estrutura, implementação, testes e personalização do código foram ativamente gerenciados, revisados e compreendidos por [Ibson](https://github.com/ibsongomes).*

## Link da Aplicação:
https://ibsongomes.github.io/Projeto-Web-Responsivo/

## Imagem da Aplicação:
<img width="1016" height="681" alt="image" src="https://github.com/user-attachments/assets/82254d31-f102-40fc-b92b-d8fe2c370c86" />
