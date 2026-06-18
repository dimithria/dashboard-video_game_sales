// ===================== DATA =====================
const topTitlesData = [{"title": "Grand Theft Auto V", "sales": 64.29}, {"title": "Call of Duty: Black Ops", "sales": 30.99}, {"title": "Call of Duty: Modern Warfare 3", "sales": 30.71}, {"title": "Call of Duty: Black Ops II", "sales": 29.59}, {"title": "Call of Duty: Ghosts", "sales": 28.8}, {"title": "Call of Duty: Black Ops 3", "sales": 26.72}, {"title": "Call of Duty: Modern Warfare 2", "sales": 25.02}, {"title": "Minecraft", "sales": 24.01}, {"title": "Grand Theft Auto IV", "sales": 22.53}, {"title": "Call of Duty: Advanced Warfare", "sales": 21.78}, {"title": "The Elder Scrolls V: Skyrim", "sales": 20.51}, {"title": "Call of Duty: WWII", "sales": 19.82}, {"title": "Red Dead Redemption 2", "sales": 19.71}, {"title": "Call of Duty 4: Modern Warfare", "sales": 18.33}, {"title": "FIFA 15", "sales": 18.03}, {"title": "Battlefield 3", "sales": 17.32}, {"title": "FIFA 14", "sales": 17.31}, {"title": "FIFA 17", "sales": 17.02}, {"title": "FIFA 18", "sales": 16.92}, {"title": "Guitar Hero III: Legends of Rock", "sales": 16.38}, {"title": "Grand Theft Auto: Vice City", "sales": 16.19}, {"title": "Call of Duty: World at War", "sales": 15.94}, {"title": "FIFA 16", "sales": 15.82}, {"title": "FIFA 13", "sales": 15.36}, {"title": "LEGO Star Wars: The Complete Saga", "sales": 15.33}, {"title": "The Sims 3", "sales": 15.2}, {"title": "Battlefield 4", "sales": 14.6}, {"title": "Call of Duty: Black Ops IIII", "sales": 14.3}, {"title": "Assassin's Creed IV: Black Flag", "sales": 13.71}, {"title": "Call of Duty: Infinite Warfare", "sales": 13.6}, {"title": "LEGO Batman: The Videogame", "sales": 13.55}, {"title": "Fallout 4", "sales": 13.51}, {"title": "Battlefield 1", "sales": 13.16}, {"title": "Grand Theft Auto III", "sales": 13.11}, {"title": "Red Dead Redemption", "sales": 13.07}, {"title": "FIFA Soccer 12", "sales": 13.06}, {"title": "Assassin's Creed III", "sales": 13.06}, {"title": "Destiny", "sales": 12.78}, {"title": "Star Wars Battlefront (2015)", "sales": 12.67}];

const yearSalesData = [{"year": 1971, "sales": 0.0}, {"year": 1973, "sales": 0.0}, {"year": 1975, "sales": 0.0}, {"year": 1977, "sales": 2.5}, {"year": 1978, "sales": 2.36}, {"year": 1979, "sales": 0.31}, {"year": 1980, "sales": 2.26}, {"year": 1981, "sales": 7.73}, {"year": 1982, "sales": 28.99}, {"year": 1983, "sales": 22.68}, {"year": 1984, "sales": 4.85}, {"year": 1985, "sales": 2.19}, {"year": 1986, "sales": 10.35}, {"year": 1987, "sales": 5.59}, {"year": 1988, "sales": 8.73}, {"year": 1989, "sales": 9.12}, {"year": 1990, "sales": 9.07}, {"year": 1991, "sales": 6.05}, {"year": 1992, "sales": 9.38}, {"year": 1993, "sales": 20.16}, {"year": 1994, "sales": 36.85}, {"year": 1995, "sales": 52.98}, {"year": 1996, "sales": 101.36}, {"year": 1997, "sales": 105.89}, {"year": 1998, "sales": 132.23}, {"year": 1999, "sales": 169.61}, {"year": 2000, "sales": 171.12}, {"year": 2001, "sales": 226.75}, {"year": 2002, "sales": 314.5}, {"year": 2003, "sales": 300.89}, {"year": 2004, "sales": 284.68}, {"year": 2005, "sales": 313.48}, {"year": 2006, "sales": 244.42}, {"year": 2007, "sales": 436.39}, {"year": 2008, "sales": 538.11}, {"year": 2009, "sales": 495.36}, {"year": 2010, "sales": 454.02}, {"year": 2011, "sales": 440.32}, {"year": 2012, "sales": 285.47}, {"year": 2013, "sales": 266.0}, {"year": 2014, "sales": 292.11}, {"year": 2015, "sales": 230.45}, {"year": 2016, "sales": 208.02}, {"year": 2017, "sales": 191.96}, {"year": 2018, "sales": 148.03}, {"year": 2019, "sales": 2.55}, {"year": 2020, "sales": 3.45}, {"year": 2021, "sales": 0.0}, {"year": 2022, "sales": 0.0}, {"year": 2023, "sales": 0.0}, {"year": 2024, "sales": 0.0}];

const consoleGenreData = [{"console": "PS2", "genre": "Action", "sales": 171.01}, {"console": "PS2", "genre": "Adventure", "sales": 44.32}, {"console": "PS2", "genre": "Education", "sales": 0.24}, {"console": "PS2", "genre": "Fighting", "sales": 66.77}, {"console": "PS2", "genre": "MMO", "sales": 0.32}, {"console": "PS2", "genre": "Misc", "sales": 87.56}, {"console": "PS2", "genre": "Party", "sales": 0.08}, {"console": "PS2", "genre": "Platform", "sales": 59.58}, {"console": "PS2", "genre": "Puzzle", "sales": 5.33}, {"console": "PS2", "genre": "Racing", "sales": 129.79}, {"console": "PS2", "genre": "Role-Playing", "sales": 40.77}, {"console": "PS2", "genre": "Shooter", "sales": 104.2}, {"console": "PS2", "genre": "Simulation", "sales": 37.99}, {"console": "PS2", "genre": "Sports", "sales": 266.38}, {"console": "PS2", "genre": "Strategy", "sales": 13.34}, {"console": "PS2", "genre": "Visual Novel", "sales": 0.08}, {"console": "X360", "genre": "Action", "sales": 161.9}, {"console": "X360", "genre": "Action-Adventure", "sales": 24.59}, {"console": "X360", "genre": "Adventure", "sales": 27.69}, {"console": "X360", "genre": "Board Game", "sales": 0.02}, {"console": "X360", "genre": "Education", "sales": 0.52}, {"console": "X360", "genre": "Fighting", "sales": 37.47}, {"console": "X360", "genre": "Misc", "sales": 57.74}, {"console": "X360", "genre": "Music", "sales": 9.4}, {"console": "X360", "genre": "Party", "sales": 0.22}, {"console": "X360", "genre": "Platform", "sales": 17.16}, {"console": "X360", "genre": "Puzzle", "sales": 1.7}, {"console": "X360", "genre": "Racing", "sales": 66.37}, {"console": "X360", "genre": "Role-Playing", "sales": 65.1}, {"console": "X360", "genre": "Shooter", "sales": 231.35}, {"console": "X360", "genre": "Simulation", "sales": 10.98}, {"console": "X360", "genre": "Sports", "sales": 141.09}, {"console": "X360", "genre": "Strategy", "sales": 6.24}, {"console": "X360", "genre": "Visual Novel", "sales": 0.25}];

const japanHitsData = [{"title": "Hot Shots Golf", "console": "PS", "total_sales": 2.79, "na_sales": 0.29, "jp_sales": 2.13, "pal_sales": 0.2, "na_pct": 10.4, "jp_pct": 76.3}, {"title": "Hot Shots Golf", "console": "PS", "total_sales": 2.56, "na_sales": 0.26, "jp_sales": 2.13, "pal_sales": 0.17, "na_pct": 10.2, "jp_pct": 83.2}, {"title": "Minecraft", "console": "PSV", "total_sales": 2.47, "na_sales": 0.22, "jp_sales": 1.25, "pal_sales": 0.73, "na_pct": 8.9, "jp_pct": 50.6}, {"title": "Dragon Quest XI: Echoes of an Elusive Age", "console": "PS4", "total_sales": 2.04, "na_sales": 0.29, "jp_sales": 1.43, "pal_sales": 0.22, "na_pct": 14.2, "jp_pct": 70.1}, {"title": "Virtua Fighter 2", "console": "SAT", "total_sales": 1.93, "na_sales": 0.34, "jp_sales": 1.3, "pal_sales": 0.26, "na_pct": 17.6, "jp_pct": 67.4}];

const naHitsData = [{"title": "Grand Theft Auto: Vice City", "console": "PS2", "total_sales": 16.15, "na_sales": 8.41, "jp_sales": 0.47, "pal_sales": 5.49, "na_pct": 52.1, "jp_pct": 2.9}, {"title": "Grand Theft Auto V", "console": "X360", "total_sales": 15.86, "na_sales": 9.06, "jp_sales": 0.06, "pal_sales": 5.33, "na_pct": 57.1, "jp_pct": 0.4}, {"title": "Call of Duty: Modern Warfare 3", "console": "X360", "total_sales": 14.82, "na_sales": 9.07, "jp_sales": 0.13, "pal_sales": 4.29, "na_pct": 61.2, "jp_pct": 0.9}];

const genreData = [{"genre": "Sports", "sales": 1187.51}, {"genre": "Action", "sales": 1125.89}, {"genre": "Shooter", "sales": 995.5}, {"genre": "Misc", "sales": 557.79}, {"genre": "Racing", "sales": 525.75}, {"genre": "Role-Playing", "sales": 426.8}, {"genre": "Platform", "sales": 349.15}, {"genre": "Fighting", "sales": 341.13}, {"genre": "Adventure", "sales": 325.39}, {"genre": "Simulation", "sales": 300.65}, {"genre": "Action-Adventure", "sales": 148.52}, {"genre": "Puzzle", "sales": 127.28}, {"genre": "Strategy", "sales": 118.31}, {"genre": "Music", "sales": 51.75}, {"genre": "MMO", "sales": 9.31}, {"genre": "Party", "sales": 6.21}, {"genre": "Visual Novel", "sales": 5.78}, {"genre": "Sandbox", "sales": 1.89}, {"genre": "Education", "sales": 0.97}, {"genre": "Board Game", "sales": 0.33}];

const consoleData = [{"console": "PS2", "sales": 1027.76}, {"console": "X360", "sales": 859.79}, {"console": "PS3", "sales": 839.7}, {"console": "PS", "sales": 546.25}, {"console": "PS4", "sales": 539.92}, {"console": "Wii", "sales": 459.44}, {"console": "DS", "sales": 458.17}, {"console": "XOne", "sales": 268.96}, {"console": "PSP", "sales": 245.29}, {"console": "XB", "sales": 232.05}, {"console": "GBA", "sales": 224.48}, {"console": "PC", "sales": 168.99}, {"console": "GC", "sales": 119.53}, {"console": "3DS", "sales": 99.27}, {"console": "N64", "sales": 93.79}, {"console": "2600", "sales": 75.66}, {"console": "SNES", "sales": 65.71}, {"console": "PSV", "sales": 63.02}, {"console": "NES", "sales": 47.93}, {"console": "NS", "sales": 36.46}, {"console": "WiiU", "sales": 35.42}, {"console": "SAT", "sales": 33.67}, {"console": "GB", "sales": 19.84}, {"console": "GEN", "sales": 18.83}, {"console": "DC", "sales": 13.31}];

const publisherData = [{"publisher": "Activision", "sales": 722.77}, {"publisher": "Electronic Arts", "sales": 644.13}, {"publisher": "EA Sports", "sales": 485.66}, {"publisher": "Ubisoft", "sales": 462.57}, {"publisher": "THQ", "sales": 320.89}, {"publisher": "Sony Computer Entertainment", "sales": 311.08}, {"publisher": "Rockstar Games", "sales": 239.67}, {"publisher": "Konami", "sales": 210.7}, {"publisher": "Sega", "sales": 206.38}, {"publisher": "Nintendo", "sales": 140.8}, {"publisher": "Capcom", "sales": 131.24}, {"publisher": "LucasArts", "sales": 118.48}, {"publisher": "Bethesda Softworks", "sales": 111.08}, {"publisher": "Warner Bros. Interactive Entertainment", "sales": 103.51}, {"publisher": "Disney Interactive Studios", "sales": 103.3}, {"publisher": "Atari", "sales": 101.63}, {"publisher": "2K Sports", "sales": 101.04}, {"publisher": "Square Enix", "sales": 95.74}, {"publisher": "Namco", "sales": 91.03}, {"publisher": "Midway Games", "sales": 87.57}];

const gamesPerYearData = [{"year": 1971, "count": 1}, {"year": 1973, "count": 1}, {"year": 1975, "count": 1}, {"year": 1977, "count": 11}, {"year": 1978, "count": 45}, {"year": 1979, "count": 8}, {"year": 1980, "count": 35}, {"year": 1981, "count": 50}, {"year": 1982, "count": 214}, {"year": 1983, "count": 298}, {"year": 1984, "count": 102}, {"year": 1985, "count": 101}, {"year": 1986, "count": 159}, {"year": 1987, "count": 270}, {"year": 1988, "count": 294}, {"year": 1989, "count": 426}, {"year": 1990, "count": 657}, {"year": 1991, "count": 779}, {"year": 1992, "count": 933}, {"year": 1993, "count": 1034}, {"year": 1994, "count": 1163}, {"year": 1995, "count": 1153}, {"year": 1996, "count": 1228}, {"year": 1997, "count": 1040}, {"year": 1998, "count": 1096}, {"year": 1999, "count": 1272}, {"year": 2000, "count": 1552}, {"year": 2001, "count": 1478}, {"year": 2002, "count": 1726}, {"year": 2003, "count": 1723}, {"year": 2004, "count": 1606}, {"year": 2005, "count": 1810}, {"year": 2006, "count": 2096}, {"year": 2007, "count": 2525}, {"year": 2008, "count": 2936}, {"year": 2009, "count": 4360}, {"year": 2010, "count": 3586}, {"year": 2011, "count": 3386}, {"year": 2012, "count": 1584}, {"year": 2013, "count": 1740}, {"year": 2014, "count": 2896}, {"year": 2015, "count": 1680}, {"year": 2016, "count": 1352}, {"year": 2017, "count": 1558}, {"year": 2018, "count": 1538}, {"year": 2019, "count": 1290}, {"year": 2020, "count": 1452}, {"year": 2021, "count": 422}, {"year": 2022, "count": 168}, {"year": 2023, "count": 108}, {"year": 2024, "count": 22}];

// ===================== LANGUAGE =====================
let currentLang = 'en';

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

    setTimeout(() => {
        Object.values(charts).forEach(chart => chart.resize());
    }, 100);
}

// ===================== CHART CONFIG =====================
Chart.defaults.color = '#94a3b8';
Chart.defaults.borderColor = '#475569';
Chart.defaults.font.family = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";

const colors = [
    '#3b82f6', '#ef4444', '#22c55e', '#f59e0b', '#8b5cf6',
    '#ec4899', '#06b6d4', '#f97316', '#84cc16', '#6366f1',
    '#14b8a6', '#d946ef', '#f43f5e', '#0ea5e9', '#a855f7',
    '#eab308', '#10b981', '#64748b', '#fb7185', '#38bdf8'
];

const charts = {};

// ===================== OVERVIEW CHARTS =====================
function initOverviewCharts() {
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
                y: { beginAtZero: true, grid: { color: '#334155' } },
                x: { grid: { display: false }, ticks: { maxTicksLimit: 12 } }
            }
        }
    });

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
    const jpBody = document.getElementById('japanHitsBody');
    japanHitsData.forEach(d => {
        jpBody.innerHTML += `<tr>
            <td>${d.title}</td>
            <td>${d.console}</td>
            <td class="region-jp">${d.jp_pct}%</td>
            <td><span class="sales-badge">${d.total_sales}M</span></td>
        </tr>`;
    });

    const naBody = document.getElementById('naHitsBody');
    naHitsData.forEach(d => {
        naBody.innerHTML += `<tr>
            <td>${d.title}</td>
            <td>${d.console}</td>
            <td class="region-na">${d.na_pct}%</td>
            <td><span class="sales-badge">${d.total_sales}M</span></td>
        </tr>`;
    });

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
                y: { beginAtZero: true, max: 60, grid: { color: '#334155' } },
                x: { grid: { display: false } }
            }
        }
    });
}

// ===================== INITIALIZE =====================
document.addEventListener('DOMContentLoaded', () => {
    initOverviewCharts();
    initTopTitlesCharts();
    initTimelineCharts();
    initConsoleCharts();
    initRegionalCharts();
});