// main.js
import { getDataByYear } from './data.js';
import { renderDashboard, toggleCardDetails } from './ui.js';

// Función central para coordinar la actualización
function handleYearChange(year) {
    const data = getDataByYear(year);
    if (data) {
        renderDashboard(year, data);
    } else {
        console.error(`No se encontraron datos para el año ${year}`);
    }
}

// Configurar los Listeners (Eventos de clic) al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Eventos para los botones de años
    const yearButtons = document.querySelectorAll('.year-btn');
    yearButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Extraer el año del ID del botón (ej: 'btn-2024' -> 2024)
            const year = parseInt(e.target.id.split('-')[1]);
            handleYearChange(year);
        });
    });

    // 2. Eventos para expandir las tarjetas
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Evitar que el clic en el enlace de referencia cierre la tarjeta
            if (e.target.tagName.toLowerCase() === 'a') return;
            
            // Buscar el ID del indicador asociado a esta tarjeta
            const valueElement = card.querySelector('.card-value');
            if (valueElement) {
                const indicatorId = valueElement.id.split('-')[0];
                toggleCardDetails(indicatorId);
            }
        });
    });

    // 3. Cargar el año por defecto (2025) al iniciar
    handleYearChange(2025);
});