// --- DATOS REALES DE LA LÍNEA DE TIEMPO ECUADOR ---
const timelineData = [
    {
        fecha: "Junio 1992",
        titulo: "Llegada de Internet (Ecuanet)",
        descripcion: "La conexión de los nodos de Ecuanet marcó el ingreso formal del Ecuador a Internet desde Quito, este proceso permitió interconectar universidades, centros de investigación y entidades financieras con redes globales.",
        detalle: "<strong>Categoría:</strong> Tecnología <br> <strong>Fuente:</strong> El Telégrafo",
        url: "https://www.eltelegrafo.com.ec/noticias/tecnologia/1/ecuador-accede-a-internet-desde-hace-25-anos"
    },
    {
        fecha: "10 de agosto 1992",
        titulo: "Ley Especial de Telecomunicaciones",
        descripcion: "Publicación en Registro Oficial 996 para regular el sector. Necesidad de regular un sector en crecimiento y separar los roles de control.",
        detalle: "<strong>Categoría:</strong> Legal <br> <strong>Fuente:</strong> Registro Oficial 996",
        url: "https://www.telecomunicaciones.gob.ec/wp-content/uploads/downloads/2012/11/Ley-Especial-de-Telecomunicaciones.pdf"
    },
    {
        fecha: "5 de septiembre 2000",
        titulo: "Acceso Universal",
        descripcion: "Declaración del Acceso Universal como Política de Estado. Su objetivo fue impulsar la difusión del internet a nivel nacional.",
        detalle: "<strong>Categoría:</strong> Legal <br> <strong>Fuente:</strong> Gobierno Electrónico",
        url: "https://www.gobiernoelectronico.gob.ec/ano2000/"
    },
    {
        fecha: "17 de abril 2002",
        titulo: "Ley de Comercio Electrónico",
        descripcion: "Dar validez legal a la firma electrónica igual que la manuscrita. Fue la base legal para el millón de firmas electrónicas mensuales actuales.",
        detalle: "<strong>Categoría:</strong> Legal <br> <strong>Fuente:</strong> Ley de Comercio Electrónico",
        url: "https://www.gob.ec/sites/default/files/regulations/2018-11/Documento_Reglamento-General-Ley-de-Comercio-Electrónico-Firmas-Electrónicas-Mensajes-de-Datos.pdf"
    },
    {
        fecha: "11 de mayo 2009",
        titulo: "Sistema de Gestión Documental QUIPUX",
        descripcion: "Emisión del Instructivo para normar el uso obligatorio del Sistema de Gestión Documental QUIPUX en las entidades de la Administración Pública Central. Necesidad de uniformar la gestión documental en la administración pública, reducir el uso del papel y mejorar el control.",
        detalle: "<strong>Categoría:</strong> Legal <br> <strong>Fuente:</strong> Registro Oficial No. 597",
        url: "https://web.gestiondocumental.gob.ec/wp-content/uploads/2020/08/110713-Acuerdo-781.pdf"
    },
    {
        fecha: "13 de agosto 2009",
        titulo: "Creación del MINTEL",
        descripcion: "Ministerio de Telecomunicaciones y Sociedad de la Información. Su objetivo fue concentrar la rectoría de conectividad y gobierno electrónico.",
        detalle: "<strong>Categoría:</strong> Tecnología <br> <strong>Fuente:</strong> MINTEL",
        url: "https://www.telecomunicaciones.gob.ec/mintel-cumple-7-anos-de-servir-a-los-ecuatorianos/"
    },
    {
        fecha: "17 de mayo 2013",
        titulo: "Facturación Electrónica SRI",
        descripcion: "Inicio de obligatoriedad por grupos para comprobantes digitales. Control tributario eficiente y automatización.",
        detalle: "<strong>Categoría:</strong> Tecnología Financiera <br> <strong>Fuente:</strong> SRI",
        url: "https://www.sri.gob.ec/facturacion-electronica"
    },
    {
        fecha: "23 de octubre 2018",
        titulo: "Ley de Optimización de Trámites",
        descripcion: "Prohibición de exigir documentos físicos que el Estado ya posee. Reducir burocracia y costos para el ciudadano.",
        detalle: "<strong>Categoría:</strong> Legal <br> <strong>Fuente:</strong> Ley Gob.ec",
        url: "https://www.gob.ec/regulaciones/ley-organica-optimizacion-eficiencia-tramites-administrativos"
    },
    {
        fecha: "6 de noviembre 2019",
        titulo: "Portal GOB.EC",
        descripcion: "Lanzamiento de la plataforma centralizada de servicios ciudadanos. Ordenar la oferta dispersa de trámites.",
        detalle: "<strong>Categoría:</strong> Tecnología <br> <strong>Fuente:</strong> Gob.ec",
        url: "https://www.e-comex.com/gobierno-pone-en-linea-1600-tramites-ciudadanos-en-ecuador/"
    },
    {
        fecha: "22 de junio 2020",
        titulo: "Implementación del SATJE",
        descripcion: "Implementación del Sistema Automático de Trámite Judicial Ecuatoriano (SATJE) como plataforma informática para la gestión, registro y seguimiento de causas judiciales en la Función Judicial.",
        detalle: "<strong>Categoría:</strong> Tecnología <br> <strong>Fuente:</strong> Función Judicial del Ecuador",
        url: "https://www.funcionjudicial.gob.ec/consejo-de-la-judicatura-implementa-el-e-satje-2020-herramienta-tecnologica-que-permite-gestionar-tramites-judiciales-en-linea/"
    },
    {
        fecha: "26 de mayo 2021",
        titulo: "Protección de Datos Personales",
        descripcion: "Ley Orgánica de Protección de Datos Personales. Proteger la privacidad ante el tratamiento masivo de datos.",
        detalle: "<strong>Categoría:</strong> Legal <br> <strong>Fuente:</strong> Ley LOPDP",
        url: "https://www.finanzaspopulares.gob.ec/wp-content/uploads/2021/07/ley_organica_de_proteccion_de_datos_personales.pdf"
    },
    {
        fecha: "2024",
        titulo: "Agenda Digital y Política 2030",
        descripcion: "Política Pública para la Transformación Digital 2025-2030. Necesidad de interoperabilidad total y ciberseguridad avanzada. Hoja de ruta para cerrar la brecha rural y mejorar la justicia digital.",
        detalle: "<strong>Categoría:</strong> Legal <br> <strong>Fuente:</strong> Política 2025",
        url: "https://www.gobiernoelectronico.gob.ec/wp-content/uploads/2025/03/INSTRUMENTO-Politica-Publica-para-la-Transformacion-Digital-Ecuador-2025-2030-MINTEL-signed_f.pdf"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('timeline-container');
    const progressLine = document.getElementById('timeline-progress');

    // 1. Inyectar las tarjetas dinámicamente
    timelineData.forEach((evento, index) => {
        const positionClass = (index % 2 === 0) ? 'left' : 'right';
        
        // Se añade la cabecera flex (card-header-tl) con la fecha y el botón REF que lleva a tu link
        const itemHTML = `
            <div class="timeline-item ${positionClass}">
                <div class="timeline-card">
                    <div class="card-header-tl">
                        <span class="timeline-date">${evento.fecha}</span>
                        <a href="${evento.url}" target="_blank" class="info-btn">REF</a>
                    </div>
                    <h3>${evento.titulo}</h3>
                    <p>${evento.descripcion}</p>
                    <button class="expand-btn">Ver más detalles</button>
                    <div class="timeline-details">${evento.detalle}</div>
                </div>
            </div>
        `;
        // Insertamos antes de la línea de progreso para no borrarla
        progressLine.insertAdjacentHTML('beforebegin', itemHTML);
    });

    const timelineItems = document.querySelectorAll('.timeline-item');

    // 2. Lógica de interactividad "Ver más"
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('expand-btn')) {
            const btn = e.target;
            const details = btn.nextElementSibling;
            
            if (details.style.display === 'block') {
                details.style.display = 'none';
                btn.innerText = 'Ver más detalles';
            } else {
                details.style.display = 'block';
                btn.innerText = 'Ocultar detalles';
            }
        }
    });

    // 3. Lógica de la línea de progreso interactiva con el Scroll
    window.addEventListener('scroll', () => {
        const rect = container.getBoundingClientRect();
        const start = window.innerHeight / 2; 
        const end = rect.height;
        let percentage = ((start - rect.top) / end) * 100;
        
        // Limitar entre 0% y 100%
        if (percentage < 0) percentage = 0;
        if (percentage > 100) percentage = 100;
        
        progressLine.style.height = percentage + '%';

        timelineItems.forEach(item => {
            const itemRect = item.getBoundingClientRect();
            // Activamos la tarjeta cuando cruza la mitad de la pantalla
            if (itemRect.top < window.innerHeight / 2 + 50) {
                item.classList.add('visible');
                item.classList.add('active-dot');
            } else {
                item.classList.remove('active-dot');
            }
        });
    });

    // Disparar evento inicial
    window.dispatchEvent(new Event('scroll'));
});