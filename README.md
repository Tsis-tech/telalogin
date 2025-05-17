# Sistema de Autenticação Moderno 🚀

Um sistema de autenticação moderno e elegante com frontend em HTML/CSS/JavaScript e backend em Spring Boot.

![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.1.0-brightgreen)
![Java](https://img.shields.io/badge/Java-17-orange)
![HTML5](https://img.shields.io/badge/HTML-5-red)
![CSS3](https://img.shields.io/badge/CSS-3-blue)

## 🌟 Características

### Frontend
- Design moderno com efeito glassmorphism
- Animações suaves e interativas
- Sistema de design com variáveis CSS
- Validação de senha em tempo real
- Transições elegantes entre formulários
- Interface totalmente responsiva
- Feedback visual para interações do usuário

### Backend
- API REST com Spring Boot
- Sistema de autenticação seguro
- Criptografia de senha com BCrypt
- Banco de dados H2 em memória
- Documentação da API integrada
- Validações de dados
- Cross-Origin Resource Sharing (CORS) configurado

## 🚀 Tecnologias Utilizadas

### Frontend
- HTML5
- CSS3 com variáveis customizadas
- JavaScript moderno
- Animações CSS
- Glassmorphism UI

### Backend
- Java 17
- Spring Boot 3.1.0
- Spring Security
- Spring Data JPA
- H2 Database
- Lombok
- Maven

## 📦 Estrutura do Projeto

\`\`\`
auth-system/
├── frontend/          
│   ├── global.css     # Estilos globais e variáveis CSS
│   ├── index.html     # Página principal
│   └── script.js      # Lógica do frontend
└── backend/           
    ├── src/main/java/com/example/auth/
    │   ├── config/    # Configurações do Spring
    │   ├── controller/# Controladores REST
    │   ├── model/     # Entidades
    │   ├── repository/# Repositórios JPA
    │   └── service/   # Lógica de negócio
    └── pom.xml        # Dependências Maven
\`\`\`

## 🛠️ Como Executar

### Backend
1. Certifique-se de ter o Java 17 e Maven instalados
2. Navegue até a pasta do backend:
   \`\`\`powershell
   cd auth-system/backend
   \`\`\`
3. Execute o projeto:
   \`\`\`powershell
   mvn spring-boot:run
   \`\`\`
4. O servidor estará disponível em http://localhost:8080

### Frontend
1. Navegue até a pasta do frontend:
   \`\`\`powershell
   cd auth-system/frontend
   \`\`\`
2. Inicie um servidor local (exemplo com Python):
   \`\`\`powershell
   python -m http.server 5500
   \`\`\`
3. Acesse http://localhost:5500 no navegador

## 🔐 Endpoints da API

- **POST /api/auth/registro**
  - Registra um novo usuário
  - Body: { "nome": "string", "email": "string", "senha": "string" }

- **POST /api/auth/login**
  - Autentica um usuário
  - Body: { "email": "string", "senha": "string" }

## 💡 Recursos Modernos

- **Design System**
  - Cores primárias em diferentes tons
  - Sistema de sombras consistente
  - Bordas arredondadas padronizadas
  - Tipografia otimizada

- **Animações**
  - Efeito de flutuação no container
  - Transições suaves nos inputs
  - Feedback visual nas interações
  - Loading states nos botões

- **Segurança**
  - Proteção contra CSRF
  - Criptografia de senha
  - Validação de dados
  - Headers de segurança configurados

## 🌐 Acesso ao Banco de Dados

O console do H2 está disponível em http://localhost:8080/h2-console com as seguintes credenciais:
- JDBC URL: jdbc:h2:mem:authdb
- Username: sa
- Password: (deixe em branco)

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ✨ Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.
