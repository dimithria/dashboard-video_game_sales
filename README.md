# 🎮 Analytics Dashboard

Um painel interativo de análise de vendas de videogames com dados de 1971-2024.

**[English](#english) | [Português](#português)**

---

## Português

### 📋 Descrição do Projeto

O VGChartz Analytics Dashboard é uma aplicação web interativa que apresenta análises detalhadas de vendas de videogames globais. Com dados de mais de 64 mil títulos lançados entre 1971 e 2024, o dashboard oferece visualizações em tempo real dos trends de mercado, preferências regionais e especializações de gênero por console.

### 🎯 Características Principais

- **5 Seções de Análise:**
  - 📊 **Visão Geral**: Gêneros, consoles, publicadoras e histórico de lançamentos
  - 🏆 **Top Títulos**: Top 50 títulos mais vendidos com tabela do top 20
  - 📈 **Linha do Tempo**: Evolução de vendas por ano e vendas regionais
  - 🎮 **Análise de Consoles**: Mapa de calor console-gênero e especialização
  - 🌍 **Diferenças Regionais**: Análise de preferências de NA, Japão e PAL

- **Bilíngue**: Suporte completo para Inglês 🇺🇸 e Português 🇧🇷
- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Gráficos Interativos**: Utilizando Chart.js para visualizações dinâmicas
- **Dark Mode**: Interface moderna com tema escuro
- **100% Frontend**: Sem dependências de backend

### 📁 Estrutura de Arquivos

```
com_html/
├── index.html          # Estrutura HTML (marcação)
├── styles.css          # Estilos CSS (design e layout)
├── script.js           # Lógica JavaScript (dados e interatividade)
├── page_complete.html  # Versão original (tudo em um arquivo)
└── README.md          # Este arquivo
```

### 🚀 Como Usar

#### Opção 1: Abrir Localmente

1. Navegue até o diretório do projeto
2. Abra `index.html` no seu navegador preferido
3. Clique no botão 🌐 para alternar entre Inglês e Português

#### Opção 2: Servidor Local (recomendado)

```bash
# Usando Python 3
python -m http.server 8000

# Usando Python 2
python -m SimpleHTTPServer 8000

# Usando Node.js (http-server)
npx http-server
```

Então acesse: `http://localhost:8000`

### 📊 Dados do Dashboard

| Métrica            | Valor                   |
| ------------------ | ----------------------- |
| Títulos Analisados | 64,016                  |
| Consoles           | 81                      |
| Gêneros            | 20                      |
| Período            | 1971-2024               |
| Regiões            | 4 (NA, JP, PAL, Outros) |

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

### Fonte

Fonte de dados obtidos gratuitamente no site
[Maven Analytics](https://mavenanalytics.io/data-playground/video-game-sales)

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
├── page_complete.html  # Original version (everything in one file)
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

---

### 🤝 Contributing

Found a bug or want to suggest improvements? Feel free to open an issue or submit a pull request.