// =========================================================
// 1. DATOS FINANCIEROS (RETAIL ALIMENTARIO)
// =========================================================

// --- Utilidad Neta 2019-2024 ---
const utilidadData = {
    labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
        {
            label: 'Tiendas Tuti TTDE S.A.',
            data: [-3531909.25, -5905384.03, -6773706.07, -6749267.17, -6051477.18, 632855.98],
            borderColor: '#e3000f', backgroundColor: '#e3000f', borderWidth: 4, tension: 0.3, pointRadius: 5, pointHoverRadius: 8
        },
        {
            label: 'Corporación Favorita',
            data: [146948162.24, 147499234.25, 143823630.32, 155767666.19, 165187931.58, 169565587.88],
            borderColor: '#334155', borderWidth: 2, tension: 0.3, pointRadius: 3
        },
        {
            label: 'Corporación El Rosado',
            data: [28656111.27, 27622934.68, 25507431.13, 34172869.60, 38196833.17, 14646069.77],
            borderColor: '#64748b', borderWidth: 2, tension: 0.3, pointRadius: 3
        },
        {
            label: 'TIA S.A.',
            data: [28975054.28, 28489595.55, 22699894.74, 30230705.00, 20086074.00, 6642977.00],
            borderColor: '#94a3b8', borderWidth: 2, tension: 0.3, pointRadius: 3
        },
        {
            label: 'Gerardo Ortiz e Hijos',
            data: [12727412.00, 18171357.00, 23441765.33, 24095565.72, 20645569.49, 35348055.06],
            borderColor: '#cbd5e1', borderWidth: 2, tension: 0.3, pointRadius: 3
        },
        {
            label: 'Mega Santamaria',
            data: [477228.00, 5639201.00, 5318398.00, 6856480.64, 5398336.15, 2823643.67],
            borderColor: '#e2e8f0', borderWidth: 2, tension: 0.3, pointRadius: 3
        }
    ]
};

// --- Ingresos Operacionales 2022-2024 ---
const ingresosData = {
    labels: ['2022', '2023', '2024'],
    datasets: [
        { label: 'Tiendas Tuti TTDE S.A.', data: [240094053.15, 446665993.97, 693240837.34], backgroundColor: '#e3000f', borderRadius: 4 },
        { label: 'Corporación Favorita', data: [2355580171.13, 2483015099.25, 2546101459.75], backgroundColor: '#334155', borderRadius: 4 },
        { label: 'Corporación El Rosado', data: [1431995151.99, 1567038006.29, 1570185672.02], backgroundColor: '#64748b', borderRadius: 4 },
        { label: 'TIA S.A.', data: [776159786.92, 787980599.00, 754405497.00], backgroundColor: '#94a3b8', borderRadius: 4 },
        { label: 'Gerardo Ortiz e Hijos', data: [472127549.26, 505779781.14, 527892328.87], backgroundColor: '#cbd5e1', borderRadius: 4 },
        { label: 'Mega Santamaria', data: [293503606.50, 282256705.61, 237964565.18], backgroundColor: '#e2e8f0', borderRadius: 4 }
    ]
};

// --- Participación de Mercado ---
const mercadoData = {
    labels: ['Corporación Favorita', 'Corporación El Rosado', 'TIA S.A.', 'Gerardo Ortiz e Hijos', 'Tiendas Tuti', 'Mega Santamaria'],
    datasets: [{
        data: [41.09, 25.42, 12.90, 8.38, 7.68, 4.53],
        backgroundColor: ['#334155', '#64748b', '#94a3b8', '#cbd5e1', '#e3000f', '#f1f5f9'],
        borderWidth: 3, borderColor: '#ffffff', hoverOffset: 6
    }]
};

// --- Margen ROS (Dispersión conectada con líneas) ---
const rosData = {
    datasets: [
        {
            label: 'Tiendas Tuti TTDE S.A.',
            data: [{x: 2022, y: -2.81}, {x: 2023, y: -1.35}, {x: 2024, y: 0.09}],
            backgroundColor: '#e3000f',
            borderColor: '#e3000f',
            pointRadius: 6,
            pointHoverRadius: 9,
            showLine: true, // ¡LÍNEA ACTIVADA!
            borderWidth: 4, // Línea gruesa
            tension: 0.1
        },
        {
            label: 'Corporación Favorita',
            data: [{x: 2022, y: 6.61}, {x: 2023, y: 6.65}, {x: 2024, y: 6.66}],
            backgroundColor: '#334155', borderColor: '#334155', pointRadius: 4, showLine: true, borderWidth: 2, tension: 0.1
        },
        {
            label: 'Corporación El Rosado',
            data: [{x: 2022, y: 2.39}, {x: 2023, y: 2.44}, {x: 2024, y: 0.93}],
            backgroundColor: '#64748b', borderColor: '#64748b', pointRadius: 4, showLine: true, borderWidth: 2, tension: 0.1
        },
        {
            label: 'TIA S.A.',
            data: [{x: 2022, y: 3.89}, {x: 2023, y: 2.55}, {x: 2024, y: 0.88}],
            backgroundColor: '#94a3b8', borderColor: '#94a3b8', pointRadius: 4, showLine: true, borderWidth: 2, tension: 0.1
        },
        {
            label: 'Gerardo Ortiz e Hijos',
            data: [{x: 2022, y: 5.10}, {x: 2023, y: 4.08}, {x: 2024, y: 6.70}],
            backgroundColor: '#cbd5e1', borderColor: '#cbd5e1', pointRadius: 4, showLine: true, borderWidth: 2, tension: 0.1
        },
        {
            label: 'Mega Santamaria',
            data: [{x: 2022, y: 2.34}, {x: 2023, y: 1.91}, {x: 2024, y: 1.19}],
            backgroundColor: '#9ca3af', borderColor: '#9ca3af', pointRadius: 4, showLine: true, borderWidth: 2, tension: 0.1
        }
    ]
};

// =========================================================
// 2. GENERADORES DE GRÁFICOS (CHART.JS)
// =========================================================

function createMultiLineChart(canvasId) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
        type: 'line', data: utilidadData,
        options: {
            responsive: true, maintainAspectRatio: false, interaction: { mode: 'index', intersect: false },
            plugins: {
                legend: { position: 'top', labels: { usePointStyle: true, boxWidth: 8, font: { size: 11 } } },
                tooltip: { callbacks: { label: function(c) { return c.dataset.label + ': $' + (c.parsed.y / 1000000).toFixed(2) + ' M'; } } }
            },
            scales: {
                y: { display: true, title: { display: true, text: 'Utilidad Neta (Millones USD)' }, grid: { color: '#f1f5f9' }, ticks: { callback: function(value) { return '$' + (value / 1000000).toFixed(0) + 'M'; } } },
                x: { grid: { display: false }, ticks: { font: { weight: 'bold' } } }
            }
        }
    });
}

function createGroupedBarChart(canvasId) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
        type: 'bar', data: ingresosData,
        options: {
            responsive: true, maintainAspectRatio: false, interaction: { mode: 'index', intersect: false },
            plugins: { 
                legend: { position: 'top', labels: { usePointStyle: true, boxWidth: 8, font: { size: 11 } } }, 
                tooltip: { callbacks: { label: function(c) { return c.dataset.label + ': $' + (c.parsed.y / 1000000).toFixed(2) + ' M'; } } } 
            },
            scales: { 
                y: { display: true, title: { display: true, text: 'Ingresos Operacionales (Millones USD)' }, grid: { color: '#f1f5f9' }, ticks: { callback: function(value) { return '$' + (value / 1000000).toFixed(0) + 'M'; } } }, 
                x: { grid: { display: false }, ticks: { font: { weight: 'bold' } } } 
            }
        }
    });
}

function createMarketShareChart(canvasId) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
        type: 'doughnut', data: mercadoData,
        options: {
            responsive: true, maintainAspectRatio: false, cutout: '65%',
            plugins: {
                legend: { position: 'right', labels: { usePointStyle: true, boxWidth: 10, font: { size: 11 } } },
                tooltip: { callbacks: { label: function(c) { return ' ' + c.label + ': ' + c.parsed + '%'; } } }
            }
        }
    });
}

function createScatterChart(canvasId) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
        type: 'scatter',
        data: rosData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'top', labels: { usePointStyle: true, boxWidth: 8, font: { size: 11 } } },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.parsed.y + '% (Año ' + context.parsed.x + ')';
                        }
                    }
                }
            },
            scales: {
                x: {
                    type: 'linear', position: 'bottom', title: { display: true, text: 'Año' }, grid: { display: false },
                    ticks: { stepSize: 1, callback: function(value) { return value.toString(); }, font: { weight: 'bold' } }
                },
                y: {
                    title: { display: true, text: 'Margen ROS (%)' }, grid: { color: '#f1f5f9' },
                    ticks: { callback: function(value) { return value + '%'; } }
                }
            }
        }
    });
}

// =========================================================
// 3. INICIALIZACIÓN DEL DOM
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
    createMultiLineChart('chartUtilidad');
    createGroupedBarChart('chartIngresos'); 
    createMarketShareChart('chartMercado'); 
    createScatterChart('chartROS'); 
});