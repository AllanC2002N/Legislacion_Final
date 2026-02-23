const metroData = {
    2023: {
        cuentas: "410,735",
        cedulas: "128,285",
        tarjetas: "83,687",
        pasajesMes: "3,200,000",
        montoMes: "$1,350,000",
        pasajesDigitales: "850,000",
        impactoPOS: "1.2%"
    },
    2024: {
        cuentas: "212,179 ",
        cedulas: "163,090 ",
        tarjetas: "175,284 ",
        pasajesMes: "53,289,753",
        montoMes: "$22,065,606.41",
        pasajesDigitales: "10,370,835.01",
        impactoPOS: "0.085%"
    },
    2025: {
        cuentas: "151,359 ",
        cedulas: "109,443 ",
        tarjetas: "73,643",
        pasajesMes: "63,008,757",
        montoMes: "$26,243,001.39",
        pasajesDigitales: "12,334,210.65",
        impactoPOS: "0.084%"
    },
    tarifas: [
        { tipo: "Normal", costo: "$0.45" },
        { tipo: "Estudiantil / 3ra Edad", costo: "$0.22" },
        { tipo: "Discapacidad", costo: "$0.10" }
    ]
};

// Helper para convertir strings ("410,735", "$26.41", "1.2%") a números reales
function parseNum(str) {
    if (!str) return 0;
    return parseFloat(String(str).replace(/[$,%\s]/g, ''));
}

// Gráficas de 3 barras (Para Adopción)
function createMiniBarChart(canvasId, val23, val24, val25) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['2023', '2024', '2025'],
            datasets: [{
                data: [val23, val24, val25],
                backgroundColor: ['#fecaca', '#f87171', '#dc2626'],
                borderRadius: 4,
                barPercentage: 0.6,
                categoryPercentage: 0.8,
                maxBarThickness: 40 // <--- ESTO EVITA QUE LAS BARRAS SE PONGAN GORDAS/ESTIRADAS
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return new Intl.NumberFormat('es-EC').format(context.parsed.y);
                        }
                    }
                }
            },
            scales: {
                y: {
                    display: true, 
                    beginAtZero: true,
                    ticks: {
                        font: { size: 10 },
                        callback: function(value) {
                            if (value >= 1000) return (value / 1000) + 'k';
                            return value;
                        }
                    }
                },
                x: {
                    grid: { display: false },
                    border: { display: false },
                    ticks: { font: { weight: 'bold', size: 11 } }
                }
            },
            layout: { padding: { top: 10 } }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Llenar Textos de Adopción (3 años)
    document.getElementById('cuentas-23').innerText = metroData[2023].cuentas;
    document.getElementById('cedulas-23').innerText = metroData[2023].cedulas;
    document.getElementById('tarjetas-23').innerText = metroData[2023].tarjetas;
    document.getElementById('cuentas-24').innerText = metroData[2024].cuentas;
    document.getElementById('cedulas-24').innerText = metroData[2024].cedulas;
    document.getElementById('tarjetas-24').innerText = metroData[2024].tarjetas;
    document.getElementById('cuentas-25').innerText = metroData[2025].cuentas;
    document.getElementById('cedulas-25').innerText = metroData[2025].cedulas;
    document.getElementById('tarjetas-25').innerText = metroData[2025].tarjetas;

    // 2. Llenar Textos de Operatividad (2024 y 2025)
    document.getElementById('pasajes-24').innerText = metroData[2024].pasajesMes;
    document.getElementById('monto-24').innerText = metroData[2024].montoMes;
    document.getElementById('digitales-24').innerText = metroData[2024].pasajesDigitales;
    document.getElementById('impacto-24').innerText = metroData[2024].impactoPOS;
    
    document.getElementById('pasajes-25').innerText = metroData[2025].pasajesMes;
    document.getElementById('monto-25').innerText = metroData[2025].montoMes;
    document.getElementById('digitales-25').innerText = metroData[2025].pasajesDigitales;
    document.getElementById('impacto-25').innerText = metroData[2025].impactoPOS;

    // 3. Pintar Tarifario
    const tarifasList = document.getElementById('tarifas-list');
    metroData.tarifas.forEach(tarifa => {
        tarifasList.innerHTML += `
            <li class="breakdown-item" style="padding: 6px 0;">
                <div class="breakdown-label"><strong>${tarifa.tipo}</strong></div>
                <div class="breakdown-value-wrapper" style="font-weight: 800; color: #dc2626;">
                    ${tarifa.costo}
                </div>
            </li>
        `;
    });

    // 4. Crear Gráficos de Adopción
    createMiniBarChart('chartCuentas', parseNum(metroData[2023].cuentas), parseNum(metroData[2024].cuentas), parseNum(metroData[2025].cuentas));
    createMiniBarChart('chartCedulas', parseNum(metroData[2023].cedulas), parseNum(metroData[2024].cedulas), parseNum(metroData[2025].cedulas));
    createMiniBarChart('chartTarjetas', parseNum(metroData[2023].tarjetas), parseNum(metroData[2024].tarjetas), parseNum(metroData[2025].tarjetas));

    // 5. Dona de Medios Digitales vs Físicos basada en Monto Recaudado (2025)
    const totalMonto25 = parseNum(metroData[2025].montoMes);
    const montoDigital25 = parseNum(metroData[2025].pasajesDigitales);
    const montoFisico25 = totalMonto25 - montoDigital25;
    
    const pctDigital = Math.round((montoDigital25 / totalMonto25) * 100);
    const pctFisico = 100 - pctDigital;

    const ctxPagos = document.getElementById('pagosChart').getContext('2d');
    new Chart(ctxPagos, {
        type: 'doughnut',
        data: {
            labels: [`Digital (${pctDigital}%)`, `Físico (${pctFisico}%)`],
            datasets: [{
                data: [montoDigital25, montoFisico25],
                backgroundColor: ['#dc2626', '#e2e8f0'],
                borderWidth: 0,
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            plugins: {
                legend: { 
                    position: 'right',
                    labels: { boxWidth: 12, font: { size: 11 } }
                }
            }
        }
    });

    // 6. Gráfico de Línea para Impacto POS (2024 vs 2025)
    const impacto24 = parseNum(metroData[2024].impactoPOS);
    const impacto25 = parseNum(metroData[2025].impactoPOS);

    const ctxImpacto = document.getElementById('chartImpacto').getContext('2d');
    new Chart(ctxImpacto, {
        type: 'line',
        data: {
            labels: ['2024', '2025'],
            datasets: [{
                data: [impacto24, impacto25],
                borderColor: '#991b1b', 
                backgroundColor: 'rgba(220, 38, 38, 0.1)', 
                borderWidth: 3,
                pointBackgroundColor: '#dc2626',
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
                tooltip: {
                    callbacks: { label: function(context) { return context.parsed.y + '%'; } }
                }
            },
            scales: {
                y: { display: false, min: 0, max: Math.max(impacto24, impacto25) * 1.2 },
                x: { display: false }
            },
            layout: { padding: { top: 10, bottom: 10, left: 10, right: 10 } }
        }
    });
});