// ui.js

export function renderDashboard(year, data) {
    if (!data) return;

    document.getElementById('ind-dig-value').innerText = data.indDig.toFixed(2);

    const indicators = ['edgi', 'acc', 'eco', 'pay'];
    
    const colors = {
        'edgi': '#38bdf8',
        'acc':  '#0284c7',
        'eco':  '#5f62e9',
        'pay':  '#0d9488' 
    };

    indicators.forEach(ind => {
        let suffix = '';
        let prefix = '';
        let percentageForChart = 0;

        if (ind === 'edgi' || ind === 'acc' || ind === 'pay') {
            suffix = '%';
            percentageForChart = data[ind].val;
        } else if (ind === 'acc' || ind === 'pay') {
            suffix = '%';
            percentageForChart = data[ind].val;
        } else if (ind === 'eco') {
            prefix = '$';
            suffix = 'M';
            const metaAhorro = 300; 
            percentageForChart = (data[ind].val / metaAhorro) * 100;
        }

        percentageForChart = Math.min(percentageForChart, 100);

        document.getElementById(`${ind}-value`).innerText = prefix + data[ind].val + suffix;
        document.getElementById(`${ind}-formula`).innerText = data[ind].formula;
        document.getElementById(`${ind}-context`).innerText = data[ind].context;
        document.getElementById(`${ind}-method`).innerText = data[ind].method;
        document.getElementById(`${ind}-ref`).href = data[ind].ref;

        const chart = document.getElementById(`${ind}-chart`);
        if (chart) {
            const chartColor = colors[ind];
            chart.style.background = `conic-gradient(${chartColor} ${percentageForChart}%, #e2e8f0 ${percentageForChart}%)`;
            document.getElementById(`${ind}-value`).style.color = chartColor;
        }

        // --- NUEVO: Renderizar el Desglose (Breakdown) ---
        if (data[ind].breakdown) {
            const formulaEl = document.getElementById(`${ind}-breakdown-formula`);
            const listEl = document.getElementById(`${ind}-breakdown-list`);
            
            // Validamos que existan en el HTML antes de inyectar
            if (formulaEl && listEl) {
                formulaEl.innerText = data[ind].breakdownFormula;
                listEl.innerHTML = ''; 
                
                data[ind].breakdown.forEach(item => {
                    const li = document.createElement('li');
                    li.className = 'breakdown-item';
                    
                    const extraHtml = item.extra ? `<span class="breakdown-extra">${item.extra}</span>` : '';
                    
                    li.innerHTML = `
                        <div class="breakdown-label"><strong>${item.label}</strong>: ${item.value}</div>
                        <div class="breakdown-value-wrapper">
                            ${extraHtml}
                            <a href="${item.ref}" target="_blank" class="ref-btn" onclick="event.stopPropagation()">Ref</a>
                        </div>
                    `;
                    listEl.appendChild(li);
                });
            }
        }
    });

    document.querySelectorAll('.year-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`btn-${year}`);
    if (activeBtn) activeBtn.classList.add('active');
}

export function toggleCardDetails(indicatorId) {
    const card = document.getElementById(`${indicatorId}-value`).closest('.card');
    document.querySelectorAll('.card').forEach(c => {
        if (c !== card) c.classList.remove('expanded');
    });
    card.classList.toggle('expanded');
}