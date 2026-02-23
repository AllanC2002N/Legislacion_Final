// =========================================================
// 1. DATOS FINANCIEROS Y DE MERCADO
// =========================================================

const utilidadData = {
    labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
        { label: 'Tiendas Tuti TTDE S.A.', data: [-3531909.25, -5905384.03, -6773706.07, -6749267.17, -6051477.18, 632855.98], borderColor: '#e3000f', backgroundColor: '#e3000f', borderWidth: 4, tension: 0.3, pointRadius: 5, pointHoverRadius: 8, showLine: true },
        { label: 'Corporación Favorita', data: [146948162.24, 147499234.25, 143823630.32, 155767666.19, 165187931.58, 169565587.88], borderColor: '#334155', borderWidth: 2, tension: 0.3, pointRadius: 3, showLine: true },
        { label: 'Corporación El Rosado', data: [28656111.27, 27622934.68, 25507431.13, 34172869.60, 38196833.17, 14646069.77], borderColor: '#64748b', borderWidth: 2, tension: 0.3, pointRadius: 3, showLine: true },
        { label: 'TIA S.A.', data: [28975054.28, 28489595.55, 22699894.74, 30230705.00, 20086074.00, 6642977.00], borderColor: '#94a3b8', borderWidth: 2, tension: 0.3, pointRadius: 3, showLine: true },
        { label: 'Gerardo Ortiz e Hijos', data: [12727412.00, 18171357.00, 23441765.33, 24095565.72, 20645569.49, 35348055.06], borderColor: '#cbd5e1', borderWidth: 2, tension: 0.3, pointRadius: 3, showLine: true },
        { label: 'Mega Santamaria', data: [477228.00, 5639201.00, 5318398.00, 6856480.64, 5398336.15, 2823643.67], borderColor: '#e2e8f0', borderWidth: 2, tension: 0.3, pointRadius: 3, showLine: true }
    ]
};

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

const mercadoData = {
    labels: ['Corporación Favorita', 'Corporación El Rosado', 'TIA S.A.', 'Gerardo Ortiz e Hijos', 'Tiendas Tuti', 'Mega Santamaria'],
    datasets: [{
        data: [41.09, 25.42, 12.90, 8.38, 7.68, 4.53],
        backgroundColor: ['#334155', '#64748b', '#94a3b8', '#cbd5e1', '#e3000f', '#f1f5f9'],
        borderWidth: 3, borderColor: '#ffffff', hoverOffset: 6
    }]
};

// NUEVOS DATOS: Impacto de Comisiones en Utilidad (Gráfico Combinado)
const impactoData = {
    labels: ['Corp. Favorita', 'Corp. El Rosado', 'TIA S.A.', 'Gerardo Ortiz', 'Mega Santamaria'],
    datasets: [
        {
            type: 'bar',
            label: 'Utilidad Neta 2024 ($M)',
            data: [169.56, 14.64, 6.64, 35.34, 2.82],
            backgroundColor: '#334155', // Gris oscuro corporativo
            yAxisID: 'y'
        },
        {
            type: 'bar',
            label: 'Costo Comisiones ($M)',
            data: [20.12, 12.41, 5.96, 4.17, 1.88],
            backgroundColor: '#e3000f', // Rojo de alerta/costo
            yAxisID: 'y'
        },
        {
            type: 'line',
            label: 'Impacto en Utilidad (%)',
            data: [11.87, 84.76, 89.78, 11.81, 66.63],
            borderColor: '#fbbf24', // Línea amarilla/dorada para el %
            backgroundColor: '#fbbf24',
            borderWidth: 3,
            pointRadius: 5,
            tension: 0.3,
            yAxisID: 'y1' // Eje secundario a la derecha
        }
    ]
};

const macroPagosData = {
    labels: ['Tarjetas de Crédito', 'Tarjetas de Débito'],
    datasets: [{
        data: [75.01, 24.99],
        backgroundColor: ['#e3000f', '#334155'],
        borderWidth: 3,
        borderColor: '#ffffff',
        hoverOffset: 6
    }]
};

const comisionesData = {
    labels: ['Corp. Favorita C.A.', 'Corp. El Rosado S.A.', 'TIA S.A.', 'Gerardo Ortiz e Hijos', 'Mega Santamaria S.A.'],
    datasets: [
        {
            label: 'Comisión T. Crédito (4.02%)',
            data: [17.266741, 10.648432, 5.116105, 3.579975, 1.613789],
            backgroundColor: '#e3000f', 
            borderRadius: 4
        },
        {
            label: 'Comisión T. Débito (2.00%)',
            data: [2.861945, 1.764967, 0.847989, 0.593377, 0.267484],
            backgroundColor: '#334155', 
            borderRadius: 4
        }
    ]
};

// =========================================================
// 2. GENERADORES DE GRÁFICOS CON BLINDAJE (Seguros)
// =========================================================

function createMultiLineChart(canvasId) {
    const el = document.getElementById(canvasId);
    if (!el) return;
    new Chart(el.getContext('2d'), {
        type: 'line', data: utilidadData,
        options: {
            responsive: true, maintainAspectRatio: false, interaction: { mode: 'index', intersect: false },
            plugins: { legend: { position: 'top', labels: { usePointStyle: true, boxWidth: 8, font: { size: 11 } } }, tooltip: { callbacks: { label: function(c) { return c.dataset.label + ': $' + (c.parsed.y / 1000000).toFixed(2) + ' M'; } } } },
            scales: { y: { display: true, title: { display: true, text: 'Utilidad Neta (Millones USD)' }, grid: { color: '#f1f5f9' }, ticks: { callback: function(value) { return '$' + (value / 1000000).toFixed(0) + 'M'; } } }, x: { grid: { display: false }, ticks: { font: { weight: 'bold' } } } }
        }
    });
}

function createGroupedBarChart(canvasId) {
    const el = document.getElementById(canvasId);
    if (!el) return;
    new Chart(el.getContext('2d'), {
        type: 'bar', data: ingresosData,
        options: {
            responsive: true, maintainAspectRatio: false, interaction: { mode: 'index', intersect: false },
            plugins: { legend: { position: 'top', labels: { usePointStyle: true, boxWidth: 8, font: { size: 11 } } }, tooltip: { callbacks: { label: function(c) { return c.dataset.label + ': $' + (c.parsed.y / 1000000).toFixed(2) + ' M'; } } } },
            scales: { y: { display: true, title: { display: true, text: 'Ingresos Operacionales (Millones USD)' }, grid: { color: '#f1f5f9' }, ticks: { callback: function(value) { return '$' + (value / 1000000).toFixed(0) + 'M'; } } }, x: { grid: { display: false }, ticks: { font: { weight: 'bold' } } } }
        }
    });
}

function createMarketShareChart(canvasId) {
    const el = document.getElementById(canvasId);
    if (!el) return;
    new Chart(el.getContext('2d'), {
        type: 'doughnut', data: mercadoData,
        options: {
            responsive: true, maintainAspectRatio: false, cutout: '65%',
            plugins: { legend: { position: 'right', labels: { usePointStyle: true, boxWidth: 10, font: { size: 11 } } }, tooltip: { callbacks: { label: function(c) { return ' ' + c.label + ': ' + c.parsed + '%'; } } } }
        }
    });
}

// NUEVA FUNCIÓN: Gráfico Combinado Utilidad vs Costo vs Porcentaje
function createImpactoUtilidadChart(canvasId) {
    const el = document.getElementById(canvasId);
    if (!el) return;
    new Chart(el.getContext('2d'), {
        data: impactoData,
        options: {
            responsive: true, maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            plugins: {
                legend: { position: 'top', labels: { usePointStyle: true, boxWidth: 10, font: { size: 11 } } },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            if (context.dataset.yAxisID === 'y1') {
                                return context.dataset.label + ': ' + context.parsed.y + '%';
                            }
                            return context.dataset.label + ': $' + context.parsed.y + ' Millones';
                        }
                    }
                }
            },
            scales: {
                x: { 
                    grid: { display: false }, 
                    ticks: { font: { weight: 'bold', size: 10 } } 
                },
                y: { 
                    type: 'linear', display: true, position: 'left', 
                    title: { display: true, text: 'Millones USD' },
                    ticks: { callback: function(value) { return '$' + value + 'M'; } }
                },
                y1: { 
                    type: 'linear', display: true, position: 'right', 
                    title: { display: true, text: 'Impacto (%)' },
                    grid: { drawOnChartArea: false }, // Evita que se superpongan las líneas de fondo
                    ticks: { callback: function(value) { return value + '%'; } } 
                }
            }
        }
    });
}

function createMacroPagosChart(canvasId) {
    const el = document.getElementById(canvasId);
    if (!el) return;
    new Chart(el.getContext('2d'), {
        type: 'doughnut', data: macroPagosData,
        options: {
            responsive: true, maintainAspectRatio: false, cutout: '70%', 
            plugins: { legend: { position: 'bottom', labels: { usePointStyle: true, boxWidth: 10, font: { size: 12, weight: 'bold' } } }, tooltip: { callbacks: { label: function(c) { return ' ' + c.label + ': ' + c.parsed + '%'; } } } }
        }
    });
}

function createComisionesChart(canvasId) {
    const el = document.getElementById(canvasId);
    if (!el) return;
    new Chart(el.getContext('2d'), {
        type: 'bar',
        data: comisionesData,
        options: {
            responsive: true, maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            plugins: {
                legend: { position: 'top', labels: { usePointStyle: true, boxWidth: 10, font: { size: 12, weight: 'bold' } } },
                tooltip: {
                    callbacks: {
                        label: function(context) { return context.dataset.label + ': $' + context.parsed.y.toFixed(2) + ' M'; },
                        footer: function(tooltipItems) {
                            let total = 0;
                            tooltipItems.forEach(function(item) { total += item.parsed.y; });
                            return 'Costo Total POS: $' + total.toFixed(2) + ' M';
                        }
                    }
                }
            },
            scales: {
                x: { stacked: true, grid: { display: false }, ticks: { font: { weight: 'bold', size: 11 } } },
                y: { stacked: true, title: { display: true, text: 'Costo Bancario (Millones de USD)', font: { weight: 'bold' } }, grid: { color: '#f1f5f9' }, ticks: { callback: function(value) { return '$' + value + 'M'; } } }
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
    createImpactoUtilidadChart('chartImpactoUtilidad'); // Reemplaza al ROS
    createMacroPagosChart('chartMacroPagos');
    createComisionesChart('chartComisiones');
});