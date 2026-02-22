// data.js

export const database = {
    2022: {
        indDig: 100,
        edgi: { 
            val: 68.89, 
            formula: "(OSI + HCI + TI) / 3",
            context: "Formula propuesta por la ONU, cuyo calculo se basa en el promedio de tres dimensiones: Índice de servicios en línea (OSI), Índice de capital humano (HCI) e Índice de infraestructura de telecomunicaciones (TII).",
            method: "Extracción de datos de los informes anuales de la ONU sobre gobierno digital y análisis de las plataformas digitales del Estado del Año 2022.",
            ref: "https://publicadministration.un.org/egovkb/en-us/Data/Country-Information/id/52-Ecuador/dataYear/2022",
            breakdownFormula: "EDGI = (OSI + HCI + TI) / 3",
            breakdown: [
                { label: "OSI (Servicios en línea)", value: "65.4", extra: "", ref: "#" },
                { label: "HCI (Capital humano)", value: "71.2", extra: "", ref: "#" },
                { label: "TI (Infraestructura)", value: "70.0", extra: "", ref: "#" }
            ]
        },
        acc: { 
            val: 65.0, 
            formula: "(HI + PI + CA + SP + AD) / 5",
            context: "Acceso limitado a turnos web para servicios básicos (ej. cedulación o inscripción de empresas). Brecha digital significativa en zonas rurales.",
            method: "Conteo de registros en la base de datos heredada del sistema tradicional de agendamiento de turnos.",
            ref: "https://datos.gob.ec/dataset/accesibilidad-2022",
            breakdownFormula: "ACC = (HI + PI + CA + SP + AD) / 5",
            breakdown: [
                { label: "HI (Hogares red)", value: "58.0%", extra: "", ref: "#" },
                { label: "PI (Usuarios red)", value: "60.2%", extra: "", ref: "#" },
                { label: "CA (Celulares activos)", value: "70.5%", extra: "", ref: "#" },
                { label: "SP (Smartphones)", value: "45.0%", extra: "", ref: "#" },
                { label: "AD (Alfabetismo)", value: "91.3%", extra: "(INEC)", ref: "#" }
            ]
        },
        eco: { 
            val: 120.5, 
            formula: "( EXP + IDE + VAB(TI) ) / VAB(COM)",
            context: "Ahorros iniciales generados por la reducción de copias impresas en procesos administrativos internos y memorandos.",
            method: "Cálculo financiero básico basado en las facturas de compra de insumos de oficina y resmas de papel de las instituciones.",
            ref: "https://finanzas.gob.ec/reporte-ahorro-2022",
            breakdownFormula: "ECO = (EXP + IDE + VAB_TI) / VAB_COM",
            breakdown: [
                { label: "EXP (Exportaciones TI)", value: "$20.5M", extra: "", ref: "#" },
                { label: "IDE (Inv. Extranjera)", value: "$45.0M", extra: "", ref: "#" },
                { label: "VAB(TI) (Valor Agregado TI)", value: "$180.2M", extra: "", ref: "#" },
                { label: "VAB(COM) (Sector Com.)", value: "$2.0B", extra: "", ref: "#" }
            ]
        },
        pay: { 
            val: 30.2, 
            formula: "PAY = √(GD(norm) * CS)",
            context: "Implementación de transferencias bancarias directas para casos específicos, como el pago de pensiones alimenticias.",
            method: "Consolidación de reportes manuales emitidos a fin de mes por las entidades bancarias asociadas al Estado.",
            ref: "https://bce.fin.ec/medios-pago-2022",
            breakdownFormula: "PAY = √(GD_norm * CS)",
            breakdown: [
                { label: "GD(norm) (Gob. Digital)", value: "0.45", extra: "", ref: "#" },
                { label: "CS (Ciberseguridad)", value: "0.20", extra: "", ref: "#" }
            ]
        }
    },
    2023: {
        indDig: 58.7,
        edgi: { 
            val: 0.58, 
            formula: "(OSI + HCI + TI) / 3",
            context: "Formula propuesta por la ONU, cuyo calculo se basa en el promedio de tres dimensiones: Índice de servicios en línea (OSI), Índice de capital humano (HCI) e Índice de infraestructura de telecomunicaciones (TII). Si bien el estudio abarca solo los años pares se hizo una aproximacion lineal para conseguir los valores de 2023.",
            method: "Extracción de datos de los informes anuales de la ONU sobre gobierno digital y análisis de las plataformas digitales del Estado.",
            ref: "https://publicadministration.un.org/egovkb/en-us/Data/Country-Information/id/52-Ecuador/dataYear/2022",
            breakdownFormula: "EDGI = (OSI + HCI + TI) / 3",
            breakdown: [
                { label: "OSI (Servicios en línea)", value: "0.55", extra: "", ref: "#" },
                { label: "HCI (Capital humano)", value: "0.60", extra: "", ref: "#" },
                { label: "TI (Infraestructura)", value: "0.59", extra: "", ref: "#" }
            ]
        },
        acc: { 
            val: 72.1, 
            formula: "(HI + PI + CA + SP + AD) / 5",
            context: "Expansión del servicio de consultas web a zonas periféricas mediante la activación de infocentros comunitarios.",
            method: "Cruce de datos de IPs de conexión regional con la base demográfica actualizada del Registro Civil.",
            ref: "https://datos.gob.ec/dataset/accesibilidad-2023",
            breakdownFormula: "ACC = (HI + PI + CA + SP + AD) / 5",
            breakdown: [
                { label: "HI (Hogares red)", value: "66.0%", extra: "", ref: "#" },
                { label: "PI (Usuarios red)", value: "77.2%", extra: "", ref: "#" },
                { label: "CA (Celulares activos)", value: "61.3%", extra: "", ref: "#" },
                { label: "SP (Smartphones)", value: "57.7%", extra: "", ref: "#" },
                { label: "AD (Alfabetismo)", value: "94.6%", extra: "(INEC)", ref: "#" }
            ]
        },
        eco: { 
            val: 145.8, 
            formula: "( EXP + IDE + VAB(TI) ) / VAB(COM)",
            context: "Optimización de tiempos gracias a las primeras implementaciones de notificaciones electrónicas, reduciendo el uso de casilleros físicos.",
            method: "Análisis de tiempos y movimientos por parte de la unidad de talento humano y auditoría interna.",
            ref: "https://finanzas.gob.ec/reporte-ahorro-2023",
            breakdownFormula: "ECO = (EXP + IDE + VAB_TI) / VAB_COM",
            breakdown: [
                { label: "EXP (Exportaciones TI)", value: "$25.1M", extra: "", ref: "#" },
                { label: "IDE (Inv. Extranjera)", value: "$52.4M", extra: "", ref: "#" },
                { label: "VAB(TI) (Valor Agregado TI)", value: "$210.5M", extra: "", ref: "#" },
                { label: "VAB(COM) (Sector Com.)", value: "$2.1B", extra: "", ref: "#" }
            ]
        },
        pay: { 
            val: 45.6, 
            formula: "PAY = √(GD(norm) * CS)",
            context: "Integración de cobros con tarjetas de crédito y débito directamente en las ventanillas de las principales agencias administrativas.",
            method: "Recopilación de transacciones procesadas a través de las APIs de las nuevas pasarelas de pago instaladas.",
            ref: "https://bce.fin.ec/medios-pago-2023",
            breakdownFormula: "PAY = √(GD_norm * CS)",
            breakdown: [
                { label: "GD(norm) (Gob. Digital)", value: "0.52", extra: "", ref: "#" },
                { label: "CS (Ciberseguridad)", value: "0.40", extra: "", ref: "#" }
            ]
        }
    },
    2024: {
        indDig: 72.4,
        edgi: { 
            val: 0.75, 
            formula: "(OSI + HCI + TI) / 3",
            context: "Formula propuesta por la ONU, cuyo calculo se basa en el promedio de tres dimensiones: Índice de servicios en línea (OSI), Índice de capital humano (HCI) e Índice de infraestructura de telecomunicaciones (TII).",
            method: "Extracción de datos de los informes anuales de la ONU sobre gobierno digital y análisis de las plataformas digitales del Estado del Año 2024.",
            ref: "https://publicadministration.un.org/egovkb/en-us/Data/Country-Information/id/52-Ecuador/dataYear/2024",
            breakdownFormula: "EDGI = (OSI + HCI + TI) / 3",
            breakdown: [
                { label: "OSI (Servicios en línea)", value: "0.78", extra: "", ref: "#" },
                { label: "HCI (Capital humano)", value: "0.72", extra: "", ref: "#" },
                { label: "TI (Infraestructura)", value: "0.75", extra: "", ref: "#" }
            ]
        },
        acc: { 
            val: 81.5, 
            formula: "(HI + PI + CA + SP + AD) / 5",
            context: "Basado en los registros únicos de acceso ciudadano a la ventanilla universal de servicios administrativos del Estado central.",
            method: "Extracción directa de usuarios únicos (Logins) desde el Identity Provider (IdP) del Estado.",
            ref: "https://datos.gob.ec/dataset/accesibilidad-2024",
            breakdownFormula: "ACC = (HI + PI + CA + SP + AD) / 5",
            breakdown: [
                { label: "HI (Hogares red)", value: "75.0%", extra: "", ref: "#" },
                { label: "PI (Usuarios red)", value: "85.2%", extra: "", ref: "#" },
                { label: "CA (Celulares activos)", value: "80.1%", extra: "", ref: "#" },
                { label: "SP (Smartphones)", value: "71.6%", extra: "", ref: "#" },
                { label: "AD (Alfabetismo)", value: "95.6%", extra: "(INEC)", ref: "#" }
            ]
        },
        eco: { 
            val: 190.2, 
            formula: "( EXP + IDE + VAB(TI) ) / VAB(COM)",
            context: "Cálculo financiero del ahorro generado al eliminar el uso de papel en las citaciones legales y notificaciones electrónicas obligatorias.",
            method: "Modelo econométrico validado por el Ministerio de Finanzas sobre reducción de costos operativos y logísticos.",
            ref: "https://finanzas.gob.ec/reporte-ahorro-2024",
            breakdownFormula: "ECO = (EXP + IDE + VAB_TI) / VAB_COM",
            breakdown: [
                { label: "EXP (Exportaciones TI)", value: "$38.5M", extra: "", ref: "#" },
                { label: "IDE (Inv. Extranjera)", value: "$80.0M", extra: "", ref: "#" },
                { label: "VAB(TI) (Valor Agregado TI)", value: "$310.2M", extra: "", ref: "#" },
                { label: "VAB(COM) (Sector Com.)", value: "$2.2B", extra: "", ref: "#" }
            ]
        },
        pay: { 
            val: 62.1, 
            formula: "PAY = √(GD(norm) * CS)",
            context: "Adopción de pasarelas de pago en línea para tasas notariales y registrales, evitando que el ciudadano acuda físicamente a la agencia bancaria.",
            method: "Cruce de datos de recaudación del SRI con los logs transaccionales del botón de pago.",
            ref: "https://bce.fin.ec/medios-pago-2024",
            breakdownFormula: "PAY = √(GD_norm * CS)",
            breakdown: [
                { label: "GD(norm) (Gob. Digital)", value: "0.71", extra: "", ref: "#" },
                { label: "CS (Ciberseguridad)", value: "0.54", extra: "", ref: "#" }
            ]
        }
    },
    2025: {
        indDig: 85.1,
        edgi: { 
            val: 0.88, 
            formula: "(OSI + HCI + TI) / 3",
            context: "Formula propuesta por la ONU, cuyo calculo se basa en el promedio de tres dimensiones: Índice de servicios en línea (OSI), Índice de capital humano (HCI) e Índice de infraestructura de telecomunicaciones (TII). Si bien el estudio abarca solo los años pares se hizo una aproximacion lineal para conseguir los valores de 2025.",
            method: "Extracción de datos de los informes anuales de la ONU sobre gobierno digital y análisis de las plataformas digitales del Estado.",
            ref: "https://publicadministration.un.org/egovkb/en-us/Data/Country-Information/id/52-Ecuador/dataYear/2024",
            breakdownFormula: "EDGI = (OSI + HCI + TI) / 3",
            breakdown: [
                { label: "OSI (Servicios en línea)", value: "0.91", extra: "", ref: "#" },
                { label: "HCI (Capital humano)", value: "0.86", extra: "", ref: "#" },
                { label: "TI (Infraestructura)", value: "0.87", extra: "", ref: "#" }
            ]
        },
        acc: { 
            val: 92.0, 
            formula: "(HI + PI + CA + SP + AD) / 5",
            context: "Incremento drástico de accesibilidad debido a la implementación del sistema móvil que permite consultar el estado de procesos legales directamente desde el celular.",
            method: "Cruce de datos transaccionales de logins únicos en la aplicación móvil contra la base poblacional activa.",
            ref: "https://datos.gob.ec/dataset/accesibilidad-2025",
            breakdownFormula: "ACC = (HI + PI + CA + SP + AD) / 5",
            breakdown: [
                { label: "HI (Hogares red)", value: "88.0%", extra: "", ref: "#" },
                { label: "PI (Usuarios red)", value: "94.2%", extra: "", ref: "#" },
                { label: "CA (Celulares activos)", value: "95.1%", extra: "", ref: "#" },
                { label: "SP (Smartphones)", value: "86.6%", extra: "", ref: "#" },
                { label: "AD (Alfabetismo)", value: "96.1%", extra: "(INEC)", ref: "#" }
            ]
        },
        eco: { 
            val: 230.5, 
            formula: "( EXP + IDE + VAB(TI) ) / VAB(COM)",
            context: "El uso de la nube pública y arquitectura de microservicios redujo en un 30% los costos de mantenimiento de servidores físicos en las instituciones.",
            method: "Reporte de facturación de servicios Cloud contrastado con los presupuestos históricos de mantenimiento de infraestructura física.",
            ref: "https://finanzas.gob.ec/reporte-ahorro-2025",
            breakdownFormula: "ECO = (EXP + IDE + VAB_TI) / VAB_COM",
            breakdown: [
                { label: "EXP (Exportaciones TI)", value: "$52.5M", extra: "", ref: "#" },
                { label: "IDE (Inv. Extranjera)", value: "$120.0M", extra: "", ref: "#" },
                { label: "VAB(TI) (Valor Agregado TI)", value: "$415.2M", extra: "", ref: "#" },
                { label: "VAB(COM) (Sector Com.)", value: "$2.5B", extra: "", ref: "#" }
            ]
        },
        pay: { 
            val: 78.4, 
            formula: "PAY = √(GD(norm) * CS)",
            context: "Consolidación del botón de pagos gubernamental unificado, permitiendo liquidar multas, tasas judiciales y aranceles 24/7 sin intermediación física.",
            method: "Reportes automatizados del Banco Central sobre compensación de pagos electrónicos públicos.",
            ref: "https://bce.fin.ec/medios-pago-2025",
            breakdownFormula: "PAY = √(GD_norm * CS)",
            breakdown: [
                { label: "GD(norm) (Gob. Digital)", value: "0.85", extra: "", ref: "#" },
                { label: "CS (Ciberseguridad)", value: "0.72", extra: "", ref: "#" }
            ]
        }
    }
};

export function getDataByYear(year) {
    return database[year] || null;
}