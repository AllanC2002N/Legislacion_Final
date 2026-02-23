// --- DATOS DE LA LÍNEA DE TIEMPO (Evolución Digital, Legal y Fintech en Ecuador) ---
const timelineData = [
    {
        fecha: "Junio 1992",
        titulo: "Llegada de Internet (Ecuanet)",
        descripcion: "La conexión de los nodos de Ecuanet marcó el ingreso formal del Ecuador a Internet desde Quito, permitiendo interconectar universidades y entidades financieras con redes globales.",
        detalle: "<strong>Categoría:</strong> Tecnología <br> <strong>Fuente:</strong> El Telégrafo",
        url: "https://www.eltelegrafo.com.ec/noticias/tecnologia/1/ecuador-accede-a-internet-desde-hace-25-anos"
    },
    {
        fecha: "10 de Agosto 1992",
        titulo: "Ley Especial de Telecomunicaciones",
        descripcion: "Publicación en el Registro Oficial 996 para regular el sector. Surgió ante la necesidad de organizar una industria en crecimiento y separar los roles de control.",
        detalle: "<strong>Categoría:</strong> Legal <br> <strong>Fuente:</strong> Registro Oficial 996",
        url: "https://www.telecomunicaciones.gob.ec/wp-content/uploads/downloads/2012/11/Ley-Especial-de-Telecomunicaciones.pdf"
    },
    {
        fecha: "5 de Septiembre 2000",
        titulo: "Acceso Universal",
        descripcion: "Declaración del Acceso Universal como Política de Estado, cuyo objetivo principal fue impulsar la difusión del internet a nivel nacional.",
        detalle: "<strong>Categoría:</strong> Legal <br> <strong>Fuente:</strong> Gobierno Electrónico",
        url: "https://www.gobiernoelectronico.gob.ec/ano2000/"
    },
    {
        fecha: "17 de Abril 2002",
        titulo: "Ley de Comercio Electrónico",
        descripcion: "Otorgó validez legal a la firma electrónica igualándola a la manuscrita. Es la base legal que sostiene los millones de trámites digitales actuales.",
        detalle: "<strong>Categoría:</strong> Legal <br> <strong>Fuente:</strong> Ley de Comercio Electrónico",
        url: "https://www.gob.ec/sites/default/files/regulations/2018-11/Documento_Reglamento-General-Ley-de-Comercio-Electrónico-Firmas-Electrónicas-Mensajes-de-Datos.pdf"
    },
    {
        fecha: "18 de Mayo 2004",
        titulo: "Ley de Transparencia (LOTAIP)",
        descripcion: "Obliga a las instituciones del Estado a transparentar su información y gestión a través de portales web, sentando las bases del Gobierno Electrónico.",
        detalle: "<strong>Categoría:</strong> Marco Legal <br> <strong>Fuente:</strong> Corte Constitucional",
        url: "https://esacc.corteconstitucional.gob.ec/storage/api/v1/10_DWL_FL/e2NhcnBldGE6ICJub3RhaXAyMDIzIiwgdXVpZDoiNmFhMDdkZjUtNWZjZS00MDJkLTlmZjgtMzBlMjFlZjkwMTFkLnBkZiJ9"
    },
    {
        fecha: "Octubre 2008",
        titulo: "Firma Electrónica Operativa",
        descripcion: "El Banco Central del Ecuador se acredita como entidad de certificación oficial, otorgando validez técnica y práctica a la Ley de Comercio Electrónico de 2002.",
        detalle: "<strong>Categoría:</strong> Certificación Digital <br> <strong>Fuente:</strong> Repositorio UTN (Pág. 28)",
        url: "https://repositorio.utn.edu.ec/bitstream/123456789/10255/2/04%20ISC%20544%20TRABAJO%20GRADO.pdf"
    },
    {
        fecha: "11 de Mayo 2009",
        titulo: "Sistema de Gestión Documental QUIPUX",
        descripcion: "Emisión del instructivo para el uso obligatorio de QUIPUX en la administración pública, buscando reducir el uso de papel y mejorar el control documental.",
        detalle: "<strong>Categoría:</strong> Legal <br> <strong>Fuente:</strong> Registro Oficial No. 597",
        url: "https://web.gestiondocumental.gob.ec/wp-content/uploads/2020/08/110713-Acuerdo-781.pdf"
    },
    {
        fecha: "13 de Agosto 2009",
        titulo: "Creación del MINTEL",
        descripcion: "Nace el Ministerio de Telecomunicaciones y Sociedad de la Información con el objetivo de concentrar la rectoría de conectividad y gobierno electrónico.",
        detalle: "<strong>Categoría:</strong> Institucional <br> <strong>Fuente:</strong> MINTEL",
        url: "https://www.telecomunicaciones.gob.ec/mintel-cumple-7-anos-de-servir-a-los-ecuatorianos/"
    },
    {
        fecha: "17 de Mayo 2013",
        titulo: "Facturación Electrónica SRI",
        descripcion: "Inicio de la obligatoriedad, organizada por grupos, para emitir comprobantes digitales, garantizando un control tributario eficiente y automatizado.",
        detalle: "<strong>Categoría:</strong> Tecnología Financiera <br> <strong>Fuente:</strong> SRI / CCQ",
        url: "https://ccq.ec/wp-content/uploads/2022/10/ConTribSept22.pdf" // Dejado con una sola URL pública válida
    },
    {
        fecha: "2017",
        titulo: "Fundación de Kushki",
        descripcion: "Nace la empresa tecnológica que estandarizaría la infraestructura y pasarelas de transacciones digitales corporativas en Ecuador y la región.",
        detalle: "<strong>Categoría:</strong> Ecosistema Fintech <br> <strong>Fuente:</strong> Reporte Endeavor",
        url: "https://endeavor.org/wp-content/uploads/dlm_uploads/2023/09/Endeavor-Insight-Data-Explainer_Unicorn-Founder-Pathways.pdf"
    },
    {
        fecha: "23 de Octubre 2018",
        titulo: "Ley de Optimización de Trámites",
        descripcion: "Prohíbe exigir documentos físicos que el Estado ya posee en sus bases de datos, con el fin de reducir la burocracia y los costos para el ciudadano.",
        detalle: "<strong>Categoría:</strong> Legal <br> <strong>Fuente:</strong> Ley Gob.ec",
        url: "https://www.gob.ec/regulaciones/ley-organica-optimizacion-eficiencia-tramites-administrativos"
    },
    {
        fecha: "6 de Noviembre 2019",
        titulo: "Portal GOB.EC",
        descripcion: "Lanzamiento de la plataforma centralizada de servicios ciudadanos, creada para ordenar la oferta dispersa de trámites gubernamentales.",
        detalle: "<strong>Categoría:</strong> Tecnología <br> <strong>Fuente:</strong> Gob.ec",
        url: "https://www.e-comex.com/gobierno-pone-en-linea-1600-tramites-ciudadanos-en-ecuador/"
    },
    {
        fecha: "22 de Junio 2020",
        titulo: "Implementación del SATJE",
        descripcion: "Implementación del Sistema Automático de Trámite Judicial (SATJE) como plataforma informática para el registro y seguimiento de causas en la Función Judicial.",
        detalle: "<strong>Categoría:</strong> Tecnología <br> <strong>Fuente:</strong> Función Judicial del Ecuador",
        url: "https://www.funcionjudicial.gob.ec/consejo-de-la-judicatura-implementa-el-e-satje-2020-herramienta-tecnologica-que-permite-gestionar-tramites-judiciales-en-linea/"
    },
    {
        fecha: "26 de Mayo 2021",
        titulo: "Protección de Datos Personales",
        descripcion: "Expedición de la Ley Orgánica de Protección de Datos Personales para proteger la privacidad ciudadana ante el tratamiento masivo de información.",
        detalle: "<strong>Categoría:</strong> Legal <br> <strong>Fuente:</strong> Ley LOPDP",
        url: "https://www.finanzaspopulares.gob.ec/wp-content/uploads/2021/07/ley_organica_de_proteccion_de_datos_personales.pdf"
    },
    {
        fecha: "Julio 2021",
        titulo: "Hito: Digital supera a Físico",
        descripcion: "Histórico: El volumen de transferencias electrónicas rebasó por primera vez a las transacciones físicas en ventanilla bancaria.",
        detalle: "<strong>Categoría:</strong> Hito Financiero <br> <strong>Fuente:</strong> Asobanca",
        url: "https://asobanca.org.ec/wp-content/uploads/2022/07/2022-07-06-BP-Avance-Banca-Digital-transacciones.pdf"
    },
    {
        fecha: "Junio 2022",
        titulo: "Primer Unicornio Ecuatoriano",
        descripcion: "Kushki alcanza una valoración de USD 1,500 millones tras una nueva ronda de inversión, demostrando la madurez del ecosistema tecnológico nacional.",
        detalle: "<strong>Categoría:</strong> Hito Financiero <br> <strong>Fuente:</strong> Forbes",
        url: "https://forbes.pe/negocios/2022-06-07/kushki-se-convierte-en-el-primer-unicornio-de-ecuador-con-adicion-de-us100-millones-en-ronda-de-inversion"
    },
    {
        fecha: "22 de Diciembre 2022",
        titulo: "Aprobación de la Ley Fintech",
        descripcion: "Regula oficialmente el ecosistema de empresas tecnológicas financieras, brindando seguridad jurídica a las pasarelas y billeteras digitales.",
        detalle: "<strong>Categoría:</strong> Marco Legal <br> <strong>Fuente:</strong> Registro Oficial",
        url: "https://www.telecomunicaciones.gob.ec/wp-content/uploads/2023/01/RO_221222_0215S2.pdf"
    },
    {
        fecha: "Febrero 2023",
        titulo: "Ley de Transformación Digital",
        descripcion: "Normativa que facilita contratos 100% digitales y ofrece incentivos para atraer inversión extranjera al sector tecnológico y audiovisual.",
        detalle: "<strong>Categoría:</strong> Marco Legal <br> <strong>Fuente:</strong> Registro Oficial No. 245",
        url: "https://www.supercias.gob.ec/bd_supercias/descargas/lotaip/a2/2023/Marzo/R_O_245.pdf"
    },
    {
        fecha: "2023",
        titulo: "PeiGo (Visa Virtual)",
        descripcion: "Lanzamiento de una tarjeta Visa virtual inmediata enfocada en bancarizar de forma ágil a la población no atendida por la banca tradicional.",
        detalle: "<strong>Categoría:</strong> Banca Digital <br> <strong>Fuente:</strong> Forbes Ecuador",
        url: "https://www.forbes.com.ec/negocios/minsait-payments-peigo-lanzan-primera-tarjeta-100-virtual-ecuador-n29598"
    },
    {
        fecha: "2024",
        titulo: "Agenda Digital y Política 2030",
        descripcion: "Política Pública para la Transformación Digital 2025-2030, diseñada para garantizar ciberseguridad avanzada y cerrar la brecha rural.",
        detalle: "<strong>Categoría:</strong> Legal <br> <strong>Fuente:</strong> Política 2025",
        url: "https://www.gobiernoelectronico.gob.ec/wp-content/uploads/2025/03/INSTRUMENTO-Politica-Publica-para-la-Transformacion-Digital-Ecuador-2025-2030-MINTEL-signed_f.pdf"
    },
    {
        fecha: "Septiembre 2024",
        titulo: "Regulación de Medios de Pago",
        descripcion: "Normativa técnica de la Junta Financiera que aterriza operativamente la Ley Fintech, organizando formalmente a las entidades de pago auxiliares.",
        detalle: "<strong>Categoría:</strong> Regulación Monetaria <br> <strong>Fuente:</strong> DGA Legal",
        url: "https://www.dgalegal.com/noticia-juridica-no-208/"
    },
    {
        fecha: "Enero 2025",
        titulo: "Alianza CNT y Google Cloud",
        descripcion: "Acuerdo estratégico entre el Estado y el gigante tecnológico para modernizar la infraestructura de nube e inteligencia artificial en Ecuador.",
        detalle: "<strong>Categoría:</strong> Infraestructura <br> <strong>Fuente:</strong> Embajada de Estados Unidos",
        url: "https://ec.usembassy.gov/es/los-estados-unidos-apoya-la-transformacion-digital-del-ecuador-por-medio-de-un-acuerdo-con-google-cloud/"
    }
];

// --- LÓGICA DE RENDERIZADO E INTERACTIVIDAD ---
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('timeline-container');
    const progressLine = document.getElementById('timeline-progress');

    // 1. Inyectar las tarjetas dinámicamente
    timelineData.forEach((evento, index) => {
        const positionClass = (index % 2 === 0) ? 'left' : 'right';
        
        // Mantenemos la lógica por si en el futuro decides agregar un url2 de nuevo
        let linksHTML = '';
        if (evento.url2) {
            linksHTML = `
                <a href="${evento.url}" target="_blank" class="info-btn">REF 1</a>
                <a href="${evento.url2}" target="_blank" class="info-btn" style="margin-left: 5px;">REF 2</a>
            `;
        } else {
            linksHTML = `<a href="${evento.url}" target="_blank" class="info-btn">REF</a>`;
        }
        
        const itemHTML = `
            <div class="timeline-item ${positionClass}">
                <div class="timeline-card">
                    <div class="card-header-tl">
                        <span class="timeline-date">${evento.fecha}</span>
                        <div>${linksHTML}</div>
                    </div>
                    <h3>${evento.titulo}</h3>
                    <p>${evento.descripcion}</p>
                    <button class="expand-btn">Ver más detalles</button>
                    <div class="timeline-details">${evento.detalle}</div>
                </div>
            </div>
        `;
        progressLine.insertAdjacentHTML('beforebegin', itemHTML);
    });

    const timelineItems = document.querySelectorAll('.timeline-item');

    // 2. Interactividad del botón "Ver más"
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

    // 3. Progreso interactivo al hacer Scroll
    window.addEventListener('scroll', () => {
        const rect = container.getBoundingClientRect();
        const start = window.innerHeight / 2; 
        const end = rect.height;
        let percentage = ((start - rect.top) / end) * 100;
        
        if (percentage < 0) percentage = 0;
        if (percentage > 100) percentage = 100;
        
        progressLine.style.height = percentage + '%';

        timelineItems.forEach(item => {
            const itemRect = item.getBoundingClientRect();
            if (itemRect.top < window.innerHeight / 2 + 50) {
                item.classList.add('visible');
                item.classList.add('active-dot');
            } else {
                item.classList.remove('active-dot');
            }
        });
    });

    window.dispatchEvent(new Event('scroll'));
});