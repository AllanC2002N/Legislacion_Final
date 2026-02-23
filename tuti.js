// --- DATOS MOCKUP DE TUTI (Reemplazar con tu Excel) ---
const tutiData = {
    2023: {
        tiendas: "250",
        empleos: "1,800",
    },
    2024: {
        tiendas: "420",
        empleos: "3,100",
        transacciones: "5,400,000",
        ticketPromedio: "$12.50"
    },
    2025: {
        tiendas: "650",
        empleos: "5,200",
        transacciones: "8,900,000",
        ticketPromedio: "$14.20"
    },
    provincias: {
        costa: "65", // Porcentaje
        sierra: "35"
    },
    marcas: {
        propias: "82", // Porcentaje
        comerciales: "18"
    },
    topCategorias: [
        { nombre: "Lácteos y Huevos", peso: "28%" },
        { nombre: "Limpieza del Hogar", peso: "22%" },
        { nombre: "Cárnicos y Embutidos", peso: "19%" }
    ]
};

// Helper numérico
function parseNum(str) {
    if (!str) return 0;
    return parseFloat(String(str).replace(/[$,%\s]/g, ''));
}

// Colores Corporativos Tuti para los gráficos
const colors = {
    blue: '#0033a0',
    lightBlue: '#8099d0',
    yellow: '#ffd100',
    red: '#e3000f',
    gray: '#e2e8f0'
};

// Gráficas de Barras Estándar (3 años)
function createBarChart(canvasId, val23, val24, val25, colorBase) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['2023', '2024', '2025'],
            datasets: [{
                data: [val23, val24, val25],
                backgroundColor: [colors.lightBlue, colors.lightBlue, colorBase],
                borderRadius: 4,
                maxBarThickness: 40 
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: { display: true, beginAtZero: true },
                x: { grid: { display: false }, border: { display: false } }
            }
        }
    });
}

// Gráfica de Líneas (2 años)
function createLineChart(canvasId, val24, val25, labelPrefix) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2024', '2025'],
            datasets: [{
                data: [val24, val25],
                borderColor: colors.blue, 
                backgroundColor: 'rgba(0, 51, 160, 0.1)', 
                borderWidth: 3,
                pointBackgroundColor: colors.red,
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 6,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: { callbacks: { label: function(c) { return labelPrefix + c.parsed.y; } } }
            },
            scales: { y: { display: false, min: 0 }, x: { display: false } },
            layout: { padding: 10 }
        }
    });
}

// Gráfica de Dona
function createDoughnutChart(canvasId, val1, val2, label1, label2, color1, color2) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [`${label1} (${val1}%)`, `${label2} (${val2}%)`],
            datasets: [{
                data: [val1, val2],
                backgroundColor: [color1, color2],
                borderWidth: 0,
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            plugins: { legend: { position: 'right', labels: { boxWidth: 12, font: { size: 11 } } } }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Llenar Textos (Expansión)
    document.getElementById('tiendas-23').innerText = tutiData[2023].tiendas;
    document.getElementById('tiendas-24').innerText = tutiData[2024].tiendas;
    document.getElementById('tiendas-25').innerText = tutiData[2025].tiendas;
    
    document.getElementById('empleos-23').innerText = tutiData[2023].empleos;
    document.getElementById('empleos-24').innerText = tutiData[2024].empleos;
    document.getElementById('empleos-25').innerText = tutiData[2025].empleos;

    document.getElementById('prov-costa').innerText = tutiData.provincias.costa + '%';
    document.getElementById('prov-sierra').innerText = tutiData.provincias.sierra + '%';

    // 2. Llenar Textos (Ventas)
    document.getElementById('trans-24').innerText = tutiData[2024].transacciones;
    document.getElementById('trans-25').innerText = tutiData[2025].transacciones;
    
    document.getElementById('ticket-24').innerText = tutiData[2024].ticketPromedio;
    document.getElementById('ticket-25').innerText = tutiData[2025].ticketPromedio;

    document.getElementById('marca-propia').innerText = tutiData.marcas.propias + '%';
    document.getElementById('marca-comercial').innerText = tutiData.marcas.comerciales + '%';

    // 3. Pintar Top Categorías
    const catList = document.getElementById('categorias-list');
    tutiData.topCategorias.forEach(cat => {
        catList.innerHTML += `
            <li class="breakdown-item" style="padding: 6px 0; border-bottom: 1px dashed #e2e8f0;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <strong>${cat.nombre}</strong>
                    <span style="font-weight: 800; color: ${colors.blue};">${cat.peso}</span>
                </div>
            </li>
        `;
    });

    // 4. Renderizar Gráficos de Expansión
    createBarChart('chartTiendas', parseNum(tutiData[2023].tiendas), parseNum(tutiData[2024].tiendas), parseNum(tutiData[2025].tiendas), colors.blue);
    createBarChart('chartEmpleos', parseNum(tutiData[2023].empleos), parseNum(tutiData[2024].empleos), parseNum(tutiData[2025].empleos), colors.yellow);
    
    // Dona de Provincias
    createDoughnutChart('chartProvincias', parseNum(tutiData.provincias.costa), parseNum(tutiData.provincias.sierra), 'Costa', 'Sierra', colors.red, colors.gray);

    // 5. Renderizar Gráficos de Ventas
    createLineChart('chartTransacciones', parseNum(tutiData[2024].transacciones), parseNum(tutiData[2025].transacciones), '');
    createLineChart('chartTicket', parseNum(tutiData[2024].ticketPromedio), parseNum(tutiData[2025].ticketPromedio), '$');
    
    // Dona de Marcas Propias vs Comerciales
    createDoughnutChart('chartMarcas', parseNum(tutiData.marcas.propias), parseNum(tutiData.marcas.comerciales), 'Tuti', 'Comercial', colors.blue, colors.yellow);
});