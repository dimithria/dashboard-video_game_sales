# 🎮 VGChartz Analytics Dashboard

<div align="center">

Um painel interativo de análise de vendas de videogames com dados de **64.016 títulos** lançados entre **1971-2024**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Frontend](https://img.shields.io/badge/Frontend-100%25-blue)
![Responsive](https://img.shields.io/badge/Responsive-Mobile%2FTablet%2FDesktop-success)
![Bilingual](https://img.shields.io/badge/Bilingual-EN%2FPT--BR-brightgreen)

**[English](#english) | [Português](#português)**

</div>

---

## 📚 Índice

- [Português](#português)
  - [Descrição](#descrição)
  - [Características](#características-principais)
  - [Estrutura de Arquivos](#estrutura-de-arquivos)
  - [Instalação e Uso](#instalação-e-uso)
  - [Tecnologias](#tecnologias-utilizadas)
  - [Dados](#dados)
  - [Contribuindo](#contribuindo)
- [English](#english)

---

## Português

### 📋 Descrição

O **VGChartz Analytics Dashboard** é uma aplicação web interativa e responsiva que apresenta análises detalhadas e em tempo real de vendas de videogames globais. Com dados de mais de **64 mil títulos** lançados entre 1971 e 2024, o dashboard oferece visualizações dinâmicas dos trends de mercado, preferências regionais, especializações de gênero por console e evolução histórica das vendas.

Este projeto foi desenvolvido como parte do programa **Maven Analytics** e demonstra proficiência em análise de dados, visualização interativa e desenvolvimento web frontend.

### 🎯 Características Principais

#### 📊 **5 Seções de Análise Interativa:**

1. **Visão Geral** - Estatísticas gerais do mercado
   - Distribuição por gênero
   - Consoles mais populares
   - Publicadoras líderes
   - Histórico de lançamentos por década

2. **Top Títulos** - Títulos mais vendidos
   - Ranking dos 50 títulos com melhor desempenho
   - Tabela detalhada dos top 20
   - Filtros por região e período

3. **Linha do Tempo** - Evolução histórica
   - Gráfico de vendas por ano (1971-2024)
   - Análise de tendências regionais
   - Ciclos de vida de gerações de consoles

4. **Análise de Consoles** - Performance por plataforma
   - Mapa de calor console-gênero
   - Especialização de cada plataforma
   - Market share histórico

5. **Diferenças Regionais** - Preferências por região
   - Análise de mercados: América do Norte, Japão e PAL
   - Distribuição de gêneros por região
   - Vendas comparativas

#### ⚙️ **Recursos Técnicos:**

- ✅ **Bilíngue**: Suporte completo para Inglês 🇺🇸 e Português 🇧🇷
- ✅ **Design Responsivo**: Otimizado para desktop, tablet e mobile
- ✅ **Gráficos Interativos**: Powered by Chart.js 4.4.1
- ✅ **Dark Mode**: Interface moderna com tema escuro
- ✅ **100% Frontend**: Sem dependências de backend
- ✅ **Performance**: Carregamento rápido e otimizado
- ✅ **Acessibilidade**: Navegação clara e intuitiva

### 📁 Estrutura de Arquivos

```
dashboard-video_game_sales/
├── index.html          # Estrutura HTML (marcação semântica)
├── style.css           # Estilos CSS (design, layout e responsividade)
├── script.js           # Lógica JavaScript (dados, gráficos e interatividade)
├── data.js             # Dataset com 64.016 registros de videogames
├── README.md           # Este arquivo
```

### 🚀 Instalação e Uso

#### ✨ Opção 1: Abrir Localmente (Simples)

1. Clone ou faça download do repositório:

   ```bash
   git clone https://github.com/dimithria/dashboard-video_game_sales.git
   cd dashboard-video_game_sales
   ```

2. Abra `index.html` diretamente no seu navegador preferido (Chrome, Firefox, Safari, Edge)

3. Clique no botão 🌐 no header para alternar entre Inglês e Português

#### 🖥️ Opção 2: Servidor Local (Recomendado)

Para melhor compatibilidade e performance, use um servidor local:

**Python 3:**

```bash
python -m http.server 8000
```

**Python 2:**

```bash
python -m SimpleHTTPServer 8000
```

**Node.js:**

```bash
npx http-server
```

**PHP:**

```bash
php -S localhost:8000
```

Acesse: `http://localhost:8000`

### �️ Tecnologias Utilizadas

| Tecnologia            | Descrição                          | Versão |
| --------------------- | ---------------------------------- | ------ |
| **HTML5**             | Marcação semântica e estrutura     | -      |
| **CSS3**              | Design responsivo e dark mode      | -      |
| **JavaScript**        | Lógica, interatividade e dados     | ES6+   |
| **Chart.js**          | Biblioteca de gráficos interativos | 4.4.1  |
| **Responsive Design** | Mobile-first e adaptável           | -      |

**Sem dependências de backend!** Todo o processamento é feito no navegador do cliente.

### 📊 Dados do Dashboard

O dashboard utiliza um dataset completo com **64.016 registros** de videogames:

| Métrica        | Valor                                       |
| -------------- | ------------------------------------------- |
| **Títulos**    | 64.016 títulos de videogames                |
| **Consoles**   | 81 plataformas diferentes                   |
| **Gêneros**    | 20 gêneros distintos                        |
| **Período**    | 1971 - 2024 (53 anos de dados)              |
| **Regiões**    | 4 mercados principais (NA, JP, PAL, Outros) |
| **Produtoras** | 563 publishers incluindo grandes nomes      |

**Fontes de Dados:**

- Data source: [Maven Analytics Data Playground](https://mavenanalytics.io/data-playground/video-game-sales)
- Histórico de 53 anos de vendas globais de videogames
- Dados validados e processados para qualidade

### 🎨 Paleta de Cores

- **Fundo Primário**: `#0f172a` (Azul bem escuro)
- **Destaque Principal**: `#3b82f6` (Azul brilhante)
- **Sucesso**: `#22c55e` (Verde)
- **Aviso**: `#f59e0b` (Amarelo)
- **Erro**: `#ef4444` (Vermelho)

### 📱 Compatibilidade

- ✅ Chrome/Edge (último)
- ✅ Firefox (último)
- ✅ Safari (último)
- ✅ Mobile (iOS/Android)
- ⚠️ IE não suportado (falta suporte a CSS variables)

### 🛠️ Customização

#### Adicionar Novos Dados

Edite a seção `DATA` em `script.js`:

```javascript
const novosDados = [
  { titulo: "Novo Jogo", vendas: 100.5 },
  // ... mais dados
];
```

#### Alterar Cores

Edite as variáveis CSS em `styles.css`:

```css
:root {
  --accent: #seu-cor;
  --bg-primary: #sua-cor-de-fundo;
  /* ... */
}
```

#### Adicionar Novo Gráfico

1. Adicione o elemento `<canvas>` em `index.html`
2. Crie a função `initNovoGrafico()` em `script.js`
3. Chame a função no `DOMContentLoaded`

### 📚 Dependências Externas

- **Chart.js** (v4.4.1): Biblioteca de gráficos
  - CDN: `https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js`

Não requer Node.js, npm ou outras dependências de backend!

### 💡 Insights Principais

- **Gêneros Dominantes**: Action e Shooter dominam o mercado
- **Melhor Console**: PS2 com 1,027 bilhões de unidades vendidas
- **Publicadora Líder**: Activision com 722M em vendas
- **Ano de Pico**: 2008 com 538M de unidades vendidas
- **Preferências Regionais**:
  - NA: Shooters (Call of Duty, Halo)
  - JP: RPGs e exclusivas (Dragon Quest, Hot Shots)
  - PAL: Esportes e Ação

### 🔍 Seções Detalhadas

#### Visão Geral

- Distribuição de gêneros em gráfico de rosca
- Top 15 consoles em vendas
- Top 15 publicadoras
- Histórico de lançamentos por ano

#### Top Títulos

- Gráfico horizontal dos 30 títulos mais vendidos
- Tabela interativa com top 20 títulos
- Badges com valores de vendas

#### Linha do Tempo

- Gráfico de área mostrando evolução de vendas
- Vendas regionais estratificadas ao longo do tempo
- Análises com insights sobre períodos chave

#### Análise de Consoles

- Mapa de calor console-gênero (mostra especialização)
- Gráfico de gênero principal por console
- Insights sobre identidade de cada console

#### Diferenças Regionais

- Tabela de sucessos locais no Japão
- Tabela de sucessos na América do Norte
- Distribuição regional em gráfico de barras
- Análise cultural de preferências

### 🐛 Troubleshooting

**Os gráficos não aparecem?**

- Verifique se Chart.js foi carregado (inspecione a aba Network)
- Limpe o cache do navegador
- Tente em outro navegador

**Idioma não muda?**

- Clique no botão 🌐 no header
- Verifique se JavaScript está habilitado

**Layout desalinhado?**

- Redimensione a janela do navegador
- Verifique a versão do navegador
- Tente em modo incógnito

### 📞 Contato & Suporte

Se você tiver dúvidas, sugestões ou encontrar problemas:

1. **GitHub Issues**: [Abrir uma issue](https://github.com/dimithria/dashboard-video_game_sales/issues)
2. **Discussões**: Participe das discussões do repositório
3. **Pull Requests**: Contribuições são bem-vindas!

### 🙏 Agradecimentos

- **Maven Analytics** por fornecer o dataset
- **Chart.js** por excelente biblioteca de gráficos
- Comunidade open source pelos recursos e inspiração

### 📧 Autor

**Dimitria** - Desenvolvedora Full Stack

- GitHub: [@dimithria](https://github.com/dimithria)
- Projeto: [Dashboard Video Game Sales](https://github.com/dimithria/dashboard-video_game_sales)

### 🔗 Links Úteis

- [Vue.js Docs](https://vuejs.org/)
- [Chart.js Documentation](https://www.chartjs.org/)
- [Maven Analytics](https://mavenanalytics.io/)
- [Web Dev Resources](https://developer.mozilla.org/)

---

### 🌟 Se Este Projeto Foi Útil

- ⭐ Dê uma estrela no GitHub
- 🔗 Compartilhe com a comunidade
- 💬 Deixe feedback e sugestões

---

## 🚀 Contribuindo

Contribuições são bem-vindas! Para melhorias maiores, abra uma issue primeiro para discutir as mudanças propostas.

---

## English

### 📋 Project Description

The Analytics Dashboard is an interactive web application that presents detailed analyses of global video game sales. With data from over 64 thousand titles released between 1971 and 2024, the dashboard offers real-time visualizations of market trends, regional preferences, and genre specialization by console.

### 🎯 Key Features

- **5 Analysis Sections:**
  - 📊 **Overview**: Genres, consoles, publishers, and release history
  - 🏆 **Top Titles**: Top 50 best-selling titles with top 20 table
  - 📈 **Sales Timeline**: Sales evolution by year and regional sales
  - 🎮 **Console Analysis**: Console-genre heatmap and specialization
  - 🌍 **Regional Differences**: Analysis of NA, Japan, and PAL preferences

- **Bilingual**: Full support for English 🇺🇸 and Portuguese 🇧🇷
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Interactive Charts**: Using Chart.js for dynamic visualizations
- **Dark Mode**: Modern interface with dark theme
- **100% Frontend**: No backend dependencies

### 📁 File Structure

```
com_html/
├── index.html          # HTML structure (markup)
├── styles.css          # CSS styles (design and layout)
├── script.js           # JavaScript logic (data and interactivity)
└── README.md          # This file
```

### 🚀 How to Use

#### Option 1: Open Locally

1. Navigate to the project directory
2. Open `index.html` in your preferred browser
3. Click the 🌐 button to toggle between English and Portuguese

#### Option 2: Local Server (recommended)

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (http-server)
npx http-server
```

Then access: `http://localhost:8000`

### 📊 Dashboard Data

| Metric          | Value                   |
| --------------- | ----------------------- |
| Titles Analyzed | 64,016                  |
| Consoles        | 81                      |
| Genres          | 20                      |
| Period          | 1971-2024               |
| Regions         | 4 (NA, JP, PAL, Others) |

### 🎨 Color Palette

- **Primary Background**: `#0f172a` (Very dark blue)
- **Primary Accent**: `#3b82f6` (Bright blue)
- **Success**: `#22c55e` (Green)
- **Warning**: `#f59e0b` (Yellow)
- **Error**: `#ef4444` (Red)

### 📱 Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile (iOS/Android)
- ⚠️ IE not supported (lacks CSS variables support)

### 🛠️ Customization

#### Add New Data

Edit the `DATA` section in `script.js`:

```javascript
const newData = [
  { title: "New Game", sales: 100.5 },
  // ... more data
];
```

#### Change Colors

Edit CSS variables in `styles.css`:

```css
:root {
  --accent: #your-color;
  --bg-primary: #your-background-color;
  /* ... */
}
```

#### Add New Chart

1. Add the `<canvas>` element in `index.html`
2. Create the `initNewChart()` function in `script.js`
3. Call the function on `DOMContentLoaded`

### 📚 External Dependencies

- **Chart.js** (v4.4.1): Charting library
  - CDN: `https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js`

No Node.js, npm, or other backend dependencies required!

### 💡 Key Insights

- **Dominant Genres**: Action and Shooter dominate the market
- **Best Console**: PS2 with 1.027 billion units sold
- **Leading Publisher**: Activision with 722M in sales
- **Peak Year**: 2008 with 538M units sold
- **Regional Preferences**:
  - NA: Shooters (Call of Duty, Halo)
  - JP: RPGs and exclusives (Dragon Quest, Hot Shots)
  - PAL: Sports and Action

### 🔍 Detailed Sections

#### Overview

- Genre distribution in pie chart
- Top 15 consoles by sales
- Top 15 publishers
- Release history by year

#### Top Titles

- Horizontal chart of top 30 best-selling titles
- Interactive table with top 20 titles
- Badges with sales values

#### Sales Timeline

- Area chart showing sales evolution
- Regional sales stratified over time
- Insights on key periods

#### Console Analysis

- Console-genre heatmap (shows specialization)
- Top genre chart by console
- Insights about each console's identity

#### Regional Differences

- Table of local hits in Japan
- Table of hits in North America
- Regional distribution in bar chart
- Cultural analysis of preferences

### 🐛 Troubleshooting

**Charts not appearing?**

- Check if Chart.js was loaded (inspect Network tab)
- Clear browser cache
- Try in another browser

**Language not changing?**

- Click the 🌐 button in the header
- Check if JavaScript is enabled

**Layout misaligned?**

- Resize browser window
- Check browser version
- Try in incognito mode

### Font

Data source obtained for free from the
[Maven Analytics](https://mavenanalytics.io/data-playground/video-game-sales)

### 📞 Contact & Support

Have questions, suggestions, or found issues?

1. **GitHub Issues**: [Open an issue](https://github.com/dimithria/dashboard-video_game_sales/issues)
2. **Discussions**: Join repository discussions
3. **Pull Requests**: Contributions welcome!


### 📧 Author

**Dimitria** - Full Stack Developer

- GitHub: [@dimithria](https://github.com/dimithria)
- Project: [Dashboard Video Game Sales](https://github.com/dimithria/dashboard-video_game_sales)

### 🔗 Useful Links

- [Vue.js Docs](https://vuejs.org/)
- [Chart.js Documentation](https://www.chartjs.org/)
- [Maven Analytics](https://mavenanalytics.io/)
- [Web Dev Resources](https://developer.mozilla.org/)

---

### 🌟 If This Project Was Useful

- ⭐ Give it a star on GitHub
- 🔗 Share with the community
- 💬 Leave feedback and suggestions

---

## 🤝 Contributing

Contributions are welcome! For major improvements, please open an issue first to discuss the proposed changes.

**Made with ❤️ by [Dimitria](https://github.com/dimithria)**
