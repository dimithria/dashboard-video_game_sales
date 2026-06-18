// ===================== STATE =====================
let currentLang = 'en';
const charts = {};

// ===================== LANGUAGE TOGGLE =====================
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'pt' : 'en';
    document.getElementById('lang-text').textContent = currentLang === 'en' ? 'Português' : 'English';
    document.documentElement.lang = currentLang === 'en' ? 'en' : 'pt';

    document.querySelectorAll('[data-en]').forEach(el => {
        el.textContent = el.getAttribute('data-' + currentLang);
    });
}

// ===================== NAVIGATION =====================
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    event.target.closest('.nav-btn').classList.add('active');

    // Trigger chart resize
    setTimeout(() => {
        Object.values(charts).forEach(chart => chart.resize());
    }, 100);
}

// ===================== CHART CONFIGURATION =====================
function initChartDefaults() {
    Chart.defaults.color = '#94a3b8';
    Chart.defaults.borderColor = '#475569';
    Chart.defaults.font.family = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
}

// ===================== OVERVIEW CHARTS =====================
function initOverviewCharts() {
    // Genre Chart
    charts.genre = new Chart(document.getElementById('genreChart'), {
        type: 'doughnut',
        data: {
            labels: genreData.map(d => d.genre),
            datasets: [{
                data: genreData.map(d => d.sales),
                backgroundColor: colors,
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'right', labels: { boxWidth: 15, padding: 10, font: { size: 11 } } },
                tooltip: {
                    callbacks: {
                        label: (ctx) => `${ctx.label}: ${ctx.raw.toFixed(1)}M (${(ctx.raw / genreData.reduce((a,b) => a + b.sales, 0) * 100).toFixed(1)}%)`
                    }
                }
            }
        }
    });

    // Console Chart
    charts.console = new Chart(document.getElementById('consoleChart'), {
        type: 'bar',
        data: {
            labels: consoleData.slice(0, 15).map(d => d.console),
            datasets: [{
                label: 'Total Sales (M)',
                data: consoleData.slice(0, 15).map(d => d.sales),
                backgroundColor: colors[0],
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: { beginAtZero: true, grid: { color: '#334155' } },
                x: { grid: { display: false } }
            }
        }
    });

    // Publisher Chart
    charts.publisher = new Chart(document.getElementById('publisherChart'), {
        type: 'bar',
        data: {
            labels: publisherData.slice(0, 15).map(d => d.publisher),
            datasets: [{
                label: 'Total Sales (M)',
                data: publisherData.slice(0, 15).map(d => d.sales),
                backgroundColor: colors[2],
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: { legend: { display: false } },
            scales: {
                x: { beginAtZero: true, grid: { color: '#334155' } },
                y: { grid: { display: false }, ticks: { font: { size: 10 } } }
            }
        }
    });

    // Games per Year Chart
    charts.gamesPerYear = new Chart(document.getElementById('gamesPerYearChart'), {
        type: 'line',
        data: {
            labels: gamesPerYearData.map(d => d.year),
            datasets: [{
                label: 'Games Released',
                data: gamesPerYearData.map(d => d.count),
                borderColor: colors[4],
                backgroundColor: colors[4] + '20',
                fill: true,
                tension: 0.4,
                pointRadius: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: { beginAtZero: true, grid: { color: '#334155' } },
                x: { grid: { display: false }, ticks: { maxTicksLimit: 15 } }
            }
        }
    });
}

// ===================== TOP TITLES CHARTS =====================
function initTopTitlesCharts() {
    charts.topTitles = new Chart(document.getElementById('topTitlesChart'), {
        type: 'bar',
        data: {
            labels: topTitlesData.slice(0, 30).map(d => d.title),
            datasets: [{
                label: 'Total Sales (M)',
                data: topTitlesData.slice(0, 30).map(d => d.sales),
                backgroundColor: colors[1],
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: { legend: { display: false } },
            scales: {
                x: { beginAtZero: true, grid: { color: '#334155' } },
                y: { grid: { display: false }, ticks: { font: { size: 9 } } }
            }
        }
    });

    // Populate table
    const tbody = document.getElementById('topTitlesBody');
    topTitlesData.slice(0, 20).forEach((d, i) => {
        tbody.innerHTML += `<tr>
            <td class="rank">#${i + 1}</td>
            <td>${d.title}</td>
            <td><span class="sales-badge">${d.sales.toFixed(2)}M</span></td>
        </tr>`;
    });
}

// ===================== TIMELINE CHARTS =====================
function initTimelineCharts() {
    charts.salesTimeline = new Chart(document.getElementById('salesTimelineChart'), {
        type: 'line',
        data: {
            labels: yearSalesData.map(d => d.year),
            datasets: [{
                label: 'Total Sales (M)',
                data: yearSalesData.map(d => d.sales),
                borderColor: colors[0],
                backgroundColor: colors[0] + '20',
                fill: true,
                tension: 0.3,
                pointRadius: 3,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: (ctx) => `Sales: ${ctx.raw.toFixed(1)}M units`
                    }
                }
            },
            scales: {
                y: { beginAtZero: true, grid: { color: '#334155' }, title: { display: true, text: 'Millions of Units' } },
                x: { grid: { display: false }, title: { display: true, text: 'Year' } }
            }
        }
    });

    // Regional timeline (simplified from data)
    const regionalData = yearSalesData.map(d => ({
        year: d.year,
        na: d.sales * 0.45,
        pal: d.sales * 0.35,
        jp: d.sales * 0.12,
        other: d.sales * 0.08
    }));

    charts.regionalTimeline = new Chart(document.getElementById('regionalTimelineChart'), {
        type: 'line',
        data: {
            labels: regionalData.map(d => d.year),
            datasets: [
                { label: 'North America', data: regionalData.map(d => d.na), borderColor: '#60a5fa', backgroundColor: '#60a5fa20', fill: true, tension: 0.3, pointRadius: 0 },
                { label: 'PAL (EU)', data: regionalData.map(d => d.pal), borderColor: '#34d399', backgroundColor: '#34d39920', fill: true, tension: 0.3, pointRadius: 0 },
                { label: 'Japan', data: regionalData.map(d => d.jp), borderColor: '#f472b6', backgroundColor: '#f472b620', fill: true, tension: 0.3, pointRadius: 0 },
                { label: 'Other', data: regionalData.map(d => d.other), borderColor: '#fbbf24', backgroundColor: '#fbbf2420', fill: true, tension: 0.3, pointRadius: 0 }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: 'top' } },
            scales: {
                y: { beginAtZero: true, stacked: true, grid: { color: '#334155' } },
                x: { grid: { display: false }, ticks: { maxTicksLimit: 12 } }
            }
        }
    });
}

// ===================== CONSOLE CHARTS =====================
function initConsoleCharts() {
    // Prepare heatmap data
    const consoles = [...new Set(consoleGenreData.map(d => d.console))].slice(0, 15);
    const genres = [...new Set(consoleGenreData.map(d => d.genre))];

    const heatmapDatasets = genres.map((genre, i) => ({
        label: genre,
        data: consoles.map(c => {
            const item = consoleGenreData.find(d => d.console === c && d.genre === genre);
            return item ? item.sales : 0;
        }),
        backgroundColor: colors[i % colors.length],
    }));

    charts.heatmap = new Chart(document.getElementById('heatmapChart'), {
        type: 'bar',
        data: {
            labels: consoles,
            datasets: heatmapDatasets.map((ds, i) => ({
                label: ds.label,
                data: ds.data,
                backgroundColor: colors[i % colors.length] + 'CC',
                borderRadius: 2
            }))
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'right', labels: { boxWidth: 12, font: { size: 10 } } },
                tooltip: {
                    callbacks: {
                        label: (ctx) => `${ctx.dataset.label}: ${ctx.raw.toFixed(1)}M`
                    }
                }
            },
            scales: {
                x: { stacked: true, grid: { display: false }, ticks: { font: { size: 10 } } },
                y: { stacked: true, beginAtZero: true, grid: { color: '#334155' } }
            }
        }
    });

    // Console genre specialization
    const consoleTopGenre = {};
    consoles.forEach(c => {
        const items = consoleGenreData.filter(d => d.console === c);
        if (items.length > 0) {
            const top = items.reduce((a, b) => a.sales > b.sales ? a : b);
            consoleTopGenre[c] = top.genre;
        }
    });

    charts.consoleGenre = new Chart(document.getElementById('consoleGenreChart'), {
        type: 'bar',
        data: {
            labels: Object.keys(consoleTopGenre),
            datasets: [{
                label: 'Top Genre',
                data: Object.keys(consoleTopGenre).map(c => {
                    const item = consoleGenreData.find(d => d.console === c && d.genre === consoleTopGenre[c]);
                    return item ? item.sales : 0;
                }),
                backgroundColor: Object.keys(consoleTopGenre).map((c, i) => colors[i % colors.length]),
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        afterLabel: (ctx) => `Top Genre: ${consoleTopGenre[ctx.label]}`
                    }
                }
            },
            scales: {
                y: { beginAtZero: true, grid: { color: '#334155' } },
                x: { grid: { display: false }, ticks: { font: { size: 9 } } }
            }
        }
    });
}

// ===================== REGIONAL CHARTS =====================
function initRegionalCharts() {
    // Populate Japan hits table
    const jpBody = document.getElementById('japanHitsBody');
    japanHitsData.forEach(d => {
        jpBody.innerHTML += `<tr>
            <td>${d.title}</td>
            <td>${d.console}</td>
            <td class="region-jp">${d.jp_pct}%</td>
            <td><span class="sales-badge">${d.total_sales}M</span></td>
        </tr>`;
    });

    // Populate NA hits table
    const naBody = document.getElementById('naHitsBody');
    naHitsData.forEach(d => {
        naBody.innerHTML += `<tr>
            <td>${d.title}</td>
            <td>${d.console}</td>
            <td class="region-na">${d.na_pct}%</td>
            <td><span class="sales-badge">${d.total_sales}M</span></td>
        </tr>`;
    });

    // Regional distribution pie chart
    charts.regionalDist = new Chart(document.getElementById('regionalDistChart'), {
        type: 'bar',
        data: {
            labels: ['North America', 'Japan', 'PAL (EU)', 'Other'],
            datasets: [{
                label: 'Regional Sales Share (%)',
                data: [45, 12, 35, 8],
                backgroundColor: ['#60a5fa', '#f472b6', '#34d399', '#fbbf24'],
                borderRadius: 8,
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: (ctx) => `${ctx.label}: ~${ctx.raw}% of global sales`
                    }
                }
            },
            scales: {
                y: { beginAtZero: true, max: 60, grid: { color: '#334155' }, title: { display: true, text: 'Percentage of Global Sales' } },
                x: { grid: { display: false } }
            }
        }
    });
}

// ===================== INITIALIZE ALL =====================
document.addEventListener('DOMContentLoaded', () => {
    initChartDefaults();
    initOverviewCharts();
    initTopTitlesCharts();
    initTimelineCharts();
    initConsoleCharts();
    initRegionalCharts();
});