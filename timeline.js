// --- DATOS DE LA LÍNEA DE TIEMPO (Evolución Digital, Legal y Fintech en Ecuador) ---
const timelineData = [
    {
        fecha: "Junio 1992",
        titulo: "Llegada de Internet (Ecuanet)",
        descripcion: "Ecuador ingresa a la era digital conectando sus primeros nodos en Quito. Este hito interconectó a universidades y entidades financieras con la red global.",
        detalle: "<strong>Categoría:</strong> Tecnología <br> <strong>Fuente:</strong> El Telégrafo",
        url: "https://www.eltelegrafo.com.ec/noticias/tecnologia/1/ecuador-accede-a-internet-desde-hace-25-anos"
    },
    {
        fecha: "10 de Agosto 1992",
        titulo: "Ley Especial de Telecomunicaciones",
        descripcion: "Se publica la primera normativa para organizar el sector de las telecomunicaciones, separando los roles de control y operación ante el crecimiento de la industria.",
        detalle: "<strong>Categoría:</strong> Legal <br> <strong>Fuente:</strong> Registro Oficial 996",
        url: "https://www.telecomunicaciones.gob.ec/wp-content/uploads/downloads/2012/11/Ley-Especial-de-Telecomunicaciones.pdf"
    },
    {
        fecha: "5 de Septiembre 2000",
        titulo: "Política de Acceso Universal",
        descripcion: "El Estado declara el acceso a Internet como Política Pública Nacional para masificar la conectividad en todo el territorio ecuatoriano.",
        detalle: "<strong>Categoría:</strong> Legal <br> <strong>Fuente:</strong> Gobierno Electrónico",
        url: "https://www.gobiernoelectronico.gob.ec/ano2000/"
    },
    {
        fecha: "17 de Abril 2002",
        titulo: "Ley de Comercio Electrónico",
        descripcion: "Otorga total validez jurídica a la firma electrónica y los mensajes de datos, sentando la base legal para la digitalización de trámites y negocios.",
        detalle: "<strong>Categoría:</strong> Legal <br> <strong>Fuente:</strong> Ley de Comercio Electrónico",
        url: "https://www.gob.ec/sites/default/files/regulations/2018-11/Documento_Reglamento-General-Ley-de-Comercio-Electrónico-Firmas-Electrónicas-Mensajes-de-Datos.pdf"
    },
    {
        fecha: "18 de Junio 2002",
        titulo: "Primera Transacción Digital",
        descripcion: "El sistema financiero ecuatoriano registra su primera transferencia electrónica oficial por USD 50, inaugurando la era de la banca digital en el país.",
        detalle: "<strong>Categoría:</strong> Hito Financiero <br> <strong>Fuente:</strong> Banco Central del Ecuador",
        url: "https://www.bce.fin.ec/"
    },
    {
        fecha: "18 de Mayo 2004",
        titulo: "Ley de Transparencia (LOTAIP)",
        descripcion: "Se promulga la Ley Orgánica de Transparencia y Acceso a la Información Pública. Obliga a las instituciones del Estado a transparentar su gestión en portales web.",
        detalle: "<strong>Categoría:</strong> Legal <br> <strong>Fuente:</strong> Registro Oficial Suplemento 337",
        url: "https://www.defensoria.gob.ec/wp-content/uploads/2021/02/LOTAIP.pdf"
    },
    {
        fecha: "Octubre 2008",
        titulo: "Firma Electrónica Operativa",
        descripcion: "El Banco Central se certifica oficialmente para emitir firmas electrónicas, permitiendo que la Ley de 2002 se aplique en la práctica ciudadana.",
        detalle: "<strong>Categoría:</strong> Certificación Digital <br> <strong>Fuente:</strong> Entidad de Certificación de Información",
        url: "https://www.eci.bce.ec/"
    },
    {
        fecha: "11 de Mayo 2009",
        titulo: "Sistema QUIPUX",
        descripcion: "Se decreta el uso obligatorio de QUIPUX en el Gobierno Central para unificar la gestión documental, reducir el uso de papel y auditar los procesos públicos.",
        detalle: "<strong>Categoría:</strong> Legal / Tecnología <br> <strong>Fuente:</strong> Registro Oficial No. 597",
        url: "https://web.gestiondocumental.gob.ec/wp-content/uploads/2020/08/110713-Acuerdo-781.pdf"
    },
    {
        fecha: "13 de Agosto 2009",
        titulo: "Creación del MINTEL",
        descripcion: "Nace el Ministerio de Telecomunicaciones para centralizar las políticas de conectividad, digitalización y desarrollo del gobierno electrónico.",
        detalle: "<strong>Categoría:</strong> Institucional <br> <strong>Fuente:</strong> MINTEL",
        url: "https://www.telecomunicaciones.gob.ec/mintel-cumple-7-anos-de-servir-a-los-ecuatorianos/"
    },
    {
        fecha: "17 de Mayo 2013",
        titulo: "Facturación Electrónica SRI",
        descripcion: "El SRI implementa la emisión de comprobantes digitales por grupos obligatorios, automatizando el control tributario a nivel nacional.",
        detalle: "<strong>Categoría:</strong> Tecnología Financiera <br> <strong>Fuente:</strong> SRI",
        url: "https://www.sri.gob.ec/facturacion-electronica"
    },
    {
        fecha: "2014",
        titulo: "Nace Payphone",
        descripcion: "Surge una de las primeras startups Fintech ecuatorianas, pionera en el cobro con tarjetas desde dispositivos móviles.",
        detalle: "<strong>Categoría:</strong> Ecosistema Fintech <br> <strong>Fuente:</strong> Portal Oficial Payphone",
        url: "https://livepayphone.com/nosotros/"
    },
    {
        fecha: "2016",
        titulo: "Código Ingenios",
        descripcion: "Normativa que prioriza el uso de software libre en el sector público y declara el acceso a Internet como un servicio básico y derecho ciudadano.",
        detalle: "<strong>Categoría:</strong> Marco Legal <br> <strong>Fuente:</strong> OMPI (WIPO)",
        url: "https://www.wipo.int/edocs/lexdocs/laws/es/ec/ec075es.pdf"
    },
    {
        fecha: "2017",
        titulo: "Fundación de Kushki",
        descripcion: "Se funda la empresa tecnológica que estandarizaría la infraestructura de pagos y pasarelas de cobro digitales en Ecuador y la región.",
        detalle: "<strong>Categoría:</strong> Ecosistema Fintech <br> <strong>Fuente:</strong> Kushki",
        url: "https://kushkipagos.com/"
    },
    {
        fecha: "23 de Octubre 2018",
        titulo: "Ley de Optimización de Trámites",
        descripcion: "Prohíbe a las instituciones públicas exigir documentos físicos que el Estado ya posee en sus bases de datos, reduciendo tiempos y burocracia.",
        detalle: "<strong>Categoría:</strong> Legal <br> <strong>Fuente:</strong> Ley Gob.ec",
        url: "https://www.gob.ec/regulaciones/ley-organica-optimizacion-eficiencia-tramites-administrativos"
    },
    {
        fecha: "6 de Noviembre 2019",
        titulo: "Portal GOB.EC",
        descripcion: "Se lanza la plataforma gubernamental centralizada para agrupar y digitalizar la oferta de miles de trámites ciudadanos en un solo lugar.",
        detalle: "<strong>Categoría:</strong> Tecnología <br> <strong>Fuente:</strong> Gob.ec",
        url: "https://www.e-comex.com/gobierno-pone-en-linea-1600-tramites-ciudadanos-en-ecuador/"
    },
    {
        fecha: "2 de Marzo 2020",
        titulo: "Banca Móvil Pichincha",
        descripcion: "Días antes del confinamiento, el banco más grande del país renueva su app móvil, una actualización vital para sostener la economía en cuarentena.",
        detalle: "<strong>Categoría:</strong> Banca Digital <br> <strong>Fuente:</strong> Banco Pichincha",
        url: "https://www.pichincha.com/portal/banca-movil"
    },
    {
        fecha: "16 de Marzo 2020",
        titulo: "Pandemia: El 'Big Bang' Digital",
        descripcion: "El cierre físico forzado acelera drásticamente la digitalización. En cinco meses, las transferencias electrónicas crecieron un 35% en el país.",
        detalle: "<strong>Categoría:</strong> Hito Histórico <br> <strong>Fuente:</strong> Asobanca",
        url: "https://asobanca.org.ec/wp-content/uploads/2023/07/La-era-de-la-banca-digital-en-Ecuador.pdf"
    },
    {
        fecha: "22 de Junio 2020",
        titulo: "Implementación del SATJE",
        descripcion: "La Función Judicial digitaliza la justicia mediante el Sistema Automático de Trámite Judicial (SATJE), permitiendo el seguimiento de causas en línea.",
        detalle: "<strong>Categoría:</strong> Tecnología <br> <strong>Fuente:</strong> Función Judicial",
        url: "https://www.funcionjudicial.gob.ec/consejo-de-la-judicatura-implementa-el-e-satje-2020-herramienta-tecnologica-que-permite-gestionar-tramites-judiciales-en-linea/"
    },
    {
        fecha: "26 de Mayo 2021",
        titulo: "Protección de Datos Personales (LOPDP)",
        descripcion: "Ecuador expide su Ley Orgánica para proteger la privacidad ciudadana y regular cómo las empresas manejan grandes volúmenes de datos.",
        detalle: "<strong>Categoría:</strong> Legal <br> <strong>Fuente:</strong> Ley LOPDP",
        url: "https://www.finanzaspopulares.gob.ec/wp-content/uploads/2021/07/ley_organica_de_proteccion_de_datos_personales.pdf"
    },
    {
        fecha: "Julio 2021",
        titulo: "Hito: Digital supera a Físico",
        descripcion: "Histórico: Las transferencias electrónicas (285 millones) rebasan por primera vez a los trámites en ventanilla bancaria.",
        detalle: "<strong>Categoría:</strong> Hito Financiero <br> <strong>Fuente:</strong> Asobanca",
        url: "https://asobanca.org.ec/wp-content/uploads/2023/07/La-era-de-la-banca-digital-en-Ecuador.pdf"
    },
    {
        fecha: "2021",
        titulo: "Consolidación de 'DeUna'",
        descripcion: "La billetera digital masifica los cobros mediante códigos QR, incorporando a miles de pequeños comercios al sistema financiero sin uso de POS.",
        detalle: "<strong>Categoría:</strong> Pagos P2P <br> <strong>Fuente:</strong> DeUna App",
        url: "https://www.deuna.app/"
    },
    {
        fecha: "Febrero 2022",
        titulo: "Defensa al Cliente Financiero",
        descripcion: "Ley que obliga a la banca a habilitar canales digitales eficientes para la resolución rápida de reclamos y fraudes electrónicos.",
        detalle: "<strong>Categoría:</strong> Marco Legal <br> <strong>Fuente:</strong> Superintendencia de Bancos",
        url: "https://www.superbancos.gob.ec/bancos/wp-content/uploads/downloads/2022/02/Ley-Derogatoria-Ley-Organica-Defensa-Derechos-Clientes-SFN.pdf"
    },
    {
        fecha: "Junio 2022",
        titulo: "Primer Unicornio Ecuatoriano",
        descripcion: "Kushki alcanza una valoración de USD 1,500 millones, demostrando la madurez y potencial del desarrollo tecnológico nacional.",
        detalle: "<strong>Categoría:</strong> Hito Financiero <br> <strong>Fuente:</strong> Kushki Pagos",
        url: "https://kushkipagos.com/blog/noticias/kushki-se-convierte-en-unicornio/"
    },
    {
        fecha: "Diciembre 2022",
        titulo: "Aprobación de la Ley Fintech",
        descripcion: "Se aprueba el marco regulatorio para normar el crecimiento de empresas tecnológicas financieras y dar seguridad jurídica a sus inversiones.",
        detalle: "<strong>Categoría:</strong> Marco Legal <br> <strong>Fuente:</strong> Registro Oficial",
        url: "https://www.bce.fin.ec/images/Transparencia/MarcoLegal/LeyDesarrolloControlSFT.pdf"
    },
    {
        fecha: "Febrero 2023",
        titulo: "Ley de Transformación Digital",
        descripcion: "Normativa orientada a captar inversiones extranjeras mediante incentivos tributarios y que facilita la creación de empresas 100% digitales.",
        detalle: "<strong>Categoría:</strong> Marco Legal <br> <strong>Fuente:</strong> MINTEL",
        url: "https://www.telecomunicaciones.gob.ec/wp-content/uploads/2023/02/Ley-Organica-para-la-Transformacion-Digital-y-Audiovisual.pdf"
    },
    {
        fecha: "2023",
        titulo: "PeiGo (Visa Virtual)",
        descripcion: "Lanzamiento de la primera billetera ecuatoriana enfocada en bancarizar jóvenes otorgándoles una tarjeta de débito virtual inmediata.",
        detalle: "<strong>Categoría:</strong> Banca Digital <br> <strong>Fuente:</strong> PeiGo",
        url: "https://www.peigo.com.ec/"
    },
    {
        fecha: "Septiembre 2024",
        titulo: "Regulación de Medios de Pago",
        descripcion: "La Junta Financiera emite la normativa técnica que aterriza operativamente la Ley Fintech, organizando formalmente a las pasarelas y billeteras.",
        detalle: "<strong>Categoría:</strong> Regulación Monetaria <br> <strong>Fuente:</strong> JPRM",
        url: "https://www.juntamonetariafinanciera.gob.ec/"
    },
    {
        fecha: "Enero 2025",
        titulo: "Alianza CNT y Google Cloud",
        descripcion: "Histórica asociación público-privada para potenciar la infraestructura de nube, inteligencia artificial y servicios estatales en Ecuador.",
        detalle: "<strong>Categoría:</strong> Infraestructura <br> <strong>Fuente:</strong> Corporación Nacional de Telecomunicaciones",
        url: "https://www.cnt.com.ec/"
    },
    {
        fecha: "Abril 2025",
        titulo: "Agenda Digital 2025-2030",
        descripcion: "El MINTEL presenta la política de Estado para la próxima década, enfocada en ciberseguridad, interoperabilidad total y cierre de brechas rurales.",
        detalle: "<strong>Categoría:</strong> Política Pública <br> <strong>Fuente:</strong> Agenda Digital Ecuador",
        url: "https://www.gobiernoelectronico.gob.ec/wp-content/uploads/2025/03/INSTRUMENTO-Politica-Publica-para-la-Transformacion-Digital-Ecuador-2025-2030-MINTEL-signed_f.pdf"
    },
    {
        fecha: "Proyección 2026",
        titulo: "Integración IA y Ciberseguridad",
        descripcion: "Se espera la consolidación de la Inteligencia Artificial en procesos bancarios/públicos y la adopción universal de la firma electrónica ciudadana.",
        detalle: "<strong>Categoría:</strong> Futuro Tecnológico <br> <strong>Fuente:</strong> Proyecciones MINTEL",
        url: "https://www.telecomunicaciones.gob.ec/"
    }
];

// --- LÓGICA DE RENDERIZADO E INTERACTIVIDAD ---
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('timeline-container');
    const progressLine = document.getElementById('timeline-progress');

    // 1. Inyectar las tarjetas
    timelineData.forEach((evento, index) => {
        const positionClass = (index % 2 === 0) ? 'left' : 'right';
        
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

    // Disparar la línea de inicio al cargar
    window.dispatchEvent(new Event('scroll'));
});