# Controle de Finanças

Uma aplicação web para controle financeiro pessoal desenvolvida com React.js e Styled Components.

## 📋 Sobre o Projeto

Esta aplicação permite ao usuário registrar e acompanhar suas transações financeiras, categorizando-as como entrada ou saída. A interface intuitiva fornece um resumo visual dos totais de entrada, saída e saldo atual, além de um histórico detalhado das transações realizadas.

## ✨ Funcionalidades

- Cadastro de transações (entradas e saídas)
- Visualização de resumo financeiro (entradas, saídas e saldo total)
- Listagem de todas as transações realizadas
- Exclusão de transações
- Armazenamento local das informações (localStorage)
- Interface responsiva e amigável

## 🚀 Tecnologias Utilizadas

- [React.js](https://reactjs.org/) - Biblioteca JavaScript para construção da interface
- [Styled Components](https://styled-components.com/) - Biblioteca para estilização com CSS-in-JS
- [localStorage API](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage) - Para persistência de dados no navegador

## 📦 Estrutura do Projeto

```
src/
├── components/
│   ├── Cards.jsx          # Componente de cards de resumo financeiro
│   ├── CardItem.jsx       # Item individual de card para o resumo
│   ├── Form.jsx           # Formulário para adição de transações
│   ├── Header.jsx         # Cabeçalho da aplicação
│   ├── Input.jsx          # Componente reutilizável de input
│   └── ListaDeTransacoes.jsx  # Lista de transações realizadas
├── styles/
│   └── style.js           # Estilos globais e componentes estilizados
└── App.js                 # Componente principal da aplicação
```

## 🔧 Instalação e Uso

1. Clone este repositório:

   ```bash
   git clone https://github.com/DevGabriel0402/controlefinanceiro.git
   cd controle-financeiro
   ```

2. Instale as dependências:

   ```bash
   yarn add
   ```

3. Execute a aplicação em modo de desenvolvimento:

   ```bash
   yarn add
   ```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador para visualizar a aplicação.

## 🧩 Como Usar

1. **Adicionar uma Transação**:

   - Preencha a descrição da transação
   - Informe o valor
   - Selecione o tipo (Entrada ou Saída)
   - Clique em "Adicionar"

2. **Excluir uma Transação**:

   - Na lista de transações, passe o mouse sobre o item desejado
   - Clique no botão "X" que aparece

3. **Visualizar Resumo**:
   - Os cards superiores mostram automaticamente os totais de entrada, saída e saldo atual

## 📱 Responsividade

A aplicação é completamente responsiva, adaptando-se a diferentes tamanhos de tela, desde dispositivos móveis até desktops.

## 🛠️ Possíveis Melhorias Futuras

- Implementar filtros por data e categoria
- Adicionar gráficos para visualização de gastos
- Criar sistema de login para múltiplos usuários
- Adicionar funcionalidade de exportação de dados
- Implementar categorias personalizáveis para transações

## 👨‍💻 Autor

Desenvolvido por [Gabriel](https://github.com/DevGabriel0402)

---

⭐️ Avalie este projeto se ele foi útil para você!
