// data.js

export const database = {
    2022: {
        indDig: 47.48, 
        edgi: { 
            val: 68.89, 
            formula: "(OSI + HCI + TI) / 3",
            context: "Formula propuesta por la ONU, cuyo calculo se basa en el promedio de tres dimensiones: Índice de servicios en línea (OSI), Índice de capital humano (HCI) e Índice de infraestructura de telecomunicaciones (TII).",
            method: "Extracción de datos de los informes anuales de la ONU sobre gobierno digital y análisis de las plataformas digitales del Estado del Año 2022.",
            ref: "https://publicadministration.un.org/egovkb/en-us/Data/Country-Information/id/52-Ecuador/dataYear/2022",
            breakdownFormula: "EDGI = (OSI + HCI + TI) / 3",
            breakdown: [
                { label: "OSI (Servicios en línea)", value: "0.7651", extra: "", ref: "https://publicadministration.un.org/egovkb/en-us/Data/Country-Information/id/52-Ecuador/dataYear/2022" },
                { label: "HCI (Capital humano)", value: "0.7748", extra: "", ref: "https://publicadministration.un.org/egovkb/en-us/Data/Country-Information/id/52-Ecuador/dataYear/2022" },
                { label: "TII (Infraestructura)", value: "0.5269", extra: "", ref: "https://publicadministration.un.org/egovkb/en-us/Data/Country-Information/id/52-Ecuador/dataYear/2022" }
            ]
        },
        acc: { 
            val: 66.58, 
            formula: "(HI + PI + CA + SP + AD) / 5",
            context: "Acceso limitado a turnos web para servicios básicos (ej. cedulación o inscripción de empresas). Brecha digital significativa en zonas rurales.",
            method: "Conteo de registros en la base de datos heredada del sistema tradicional de agendamiento de turnos.",
            ref: "https://datos.gob.ec/dataset/accesibilidad-2022",
            breakdownFormula: "ACC = (HI + PI + CA + SP + AD) / 5",
            breakdown: [
                { label: "HI (Hogares Internet)", value: "60.4%", extra: "", ref: "https://www.ecuadorencifras.gob.ec/documentos/web-inec/Estadisticas_Sociales/TIC/2024/202407_Tecnologia_de_la_Informacion_y_Comunicacion-TICs.pdf" },
                { label: "PI (Usuarios Internet)", value: "69.7%", extra: "", ref: "https://www.ecuadorencifras.gob.ec/documentos/web-inec/Estadisticas_Sociales/TIC/2024/202407_Tecnologia_de_la_Informacion_y_Comunicacion-TICs.pdf" },
                { label: "CA (Celulares activos)", value: "58.8%", extra: "", ref: "https://www.ecuadorencifras.gob.ec/documentos/web-inec/Estadisticas_Sociales/TIC/2024/202407_Tecnologia_de_la_Informacion_y_Comunicacion-TICs.pdf" },
                { label: "SP (Smartphones)", value: "52.2%", extra: "", ref: "https://www.ecuadorencifras.gob.ec/documentos/web-inec/Estadisticas_Sociales/TIC/2024/202407_Tecnologia_de_la_Informacion_y_Comunicacion-TICs.pdf" },
                { label: "AD (Alfabetismo)", value: "91.8%", extra: "1-8.2%", ref: "https://www.ecuadorencifras.gob.ec/documentos/web-inec/Estadisticas_Sociales/TIC/2024/202407_Tecnologia_de_la_Informacion_y_Comunicacion-TICs.pdf" }
            ]
        },
        eco: { 
            val: 14.16, 
            formula: "( EXP + IDE + VAB(TI) ) / VAB(COM)",
            context: "Ahorros iniciales generados por la reducción de copias impresas en procesos administrativos internos y memorandos.",
            method: "Cálculo financiero básico basado en las facturas de compra de insumos de oficina y resmas de papel de las instituciones.",
            ref: "https://finanzas.gob.ec/reporte-ahorro-2022",
            breakdownFormula: "ECO = (EXP + IDE + VAB_TI) / VAB_COM",
            breakdown: [
                { label: "EXP (Exportaciones TI)", value: "$72.94M", extra: "", ref: "https://contenido.bce.fin.ec/documentos/informacioneconomica/SectorExterno/ix_BalanzaPagos.html" },
                { label: "IDE (Inv. Extranjera TI)", value: "$18.03M", extra: "", ref: "https://contenido.bce.fin.ec/documentos/informacioneconomica/SectorExterno/ix_InversionExtranjeraDirecta.html" },
                { label: "VAB(TI) (Valor Agregado TI)", value: "$2483.29M", extra: "", ref: "https://contenido.bce.fin.ec/documentos/informacioneconomica/cuentasnacionales/ix_cuentasnacionalesanuales.html" },
                { label: "VAB(COM) (Sector Com.)", value: "$18183.80M", extra: "", ref: "https://contenido.bce.fin.ec/documentos/informacioneconomica/cuentasnacionales/ix_cuentasnacionalesanuales.html" }
            ]
        },
        pay: { 
            val: 40.29, 
            formula: "PAY = √(GD_norm * CS)",
            context: "Implementación de transferencias bancarias directas para casos específicos, como el pago de pensiones alimenticias.",
            method: "Consolidación de reportes manuales emitidos a fin de mes por las entidades bancarias asociadas al Estado.",
            ref: "https://bce.fin.ec/medios-pago-2022",
            breakdownFormula: "<strong>1. GD Normalizado:</strong><br> GD_norm = (GDi - min(GD)) / (Max(GD) - Min(GD))<br><br><strong>2. Desarrollo Sist. Pagos (CS):</strong><br> CS = POS / (POS + RETIROS)<br><br><strong>3. Índice PAY:</strong><br> PAY = √(GD_norm * CS)",
            breakdown: [
                { label: "GD (SIP/PIB)", value: "134.66", extra: "", ref: "#" },
                { label: "min(GD) [Año 2010]", value: "44.96", extra: "Base Histórica", ref: "#" },
                { label: "Max(GD) [Año 2025]", value: "152.46", extra: "Tope Histórico", ref: "#" },
                { label: "GD_norm", value: "83.44%", extra: "Resultado 1", ref: "#" },
                { label: "POS", value: "$10,910,791,431", extra: "", ref: "#" },
                { label: "RETIROS", value: "$45,181,473,635", extra: "", ref: "#" },
                { label: "CS", value: "19.45%", extra: "Resultado 2", ref: "#" }
            ]
        }
    },
    2023: {
        indDig: 50.12, 
        edgi: { 
            val: 74.15, 
            formula: "(OSI + HCI + TI) / 3",
            context: "Formula propuesta por la ONU, cuyo calculo se basa en el promedio de tres dimensiones: Índice de servicios en línea (OSI), Índice de capital humano (HCI) e Índice de infraestructura de telecomunicaciones (TII). Si bien el estudio abarca solo los años pares se hizo una aproximacion lineal para conseguir los valores de 2023.",
            method: "Extracción de datos de los informes anuales de la ONU sobre gobierno digital y análisis de las plataformas digitales del Estado.",
            ref: "https://publicadministration.un.org/egovkb/en-us/Data/Country-Information/id/52-Ecuador/dataYear/2022",
            breakdownFormula: "EDGI = (OSI + HCI + TI) / 3",
            breakdown: [
                { label: "OSI (Servicios en línea)", value: "0.85055", extra: "Dato Calculado", ref:"" },
                { label: "HCI (Capital humano)", value: "0.7823", extra: "Dato Calculado" , ref:"" },
                { label: "TII (Infraestructura)", value: "0.59155", extra: "Dato Calculado", ref:"" }
            ]
        },
        acc: { 
            val: 68.50, 
            formula: "(HI + PI + CA + SP + AD) / 5",
            context: "Expansión del servicio de consultas web a zonas periféricas mediante la activación de infocentros comunitarios.",
            method: "Cruce de datos de IPs de conexión regional con la base demográfica actualizada del Registro Civil.",
            ref: "https://datos.gob.ec/dataset/accesibilidad-2023",
            breakdownFormula: "ACC = (HI + PI + CA + SP + AD) / 5",
            breakdown: [
                { label: "HI (Hogares Internet)", value: "62.2%", extra: "", ref: "https://www.ecuadorencifras.gob.ec/documentos/web-inec/Estadisticas_Sociales/TIC/2024/202407_Tecnologia_de_la_Informacion_y_Comunicacion-TICs.pdf" },
                { label: "PI (Usuarios Internet)", value: "72.7%", extra: "", ref: "https://www.ecuadorencifras.gob.ec/documentos/web-inec/Estadisticas_Sociales/TIC/2024/202407_Tecnologia_de_la_Informacion_y_Comunicacion-TICs.pdf" },
                { label: "CA (Celulares activos)", value: "59.6%", extra: "", ref: "https://www.ecuadorencifras.gob.ec/documentos/web-inec/Estadisticas_Sociales/TIC/2024/202407_Tecnologia_de_la_Informacion_y_Comunicacion-TICs.pdf" },
                { label: "SP (Smartphones)", value: "55.6%", extra: "", ref: "https://www.ecuadorencifras.gob.ec/documentos/web-inec/Estadisticas_Sociales/TIC/2024/202407_Tecnologia_de_la_Informacion_y_Comunicacion-TICs.pdf" },
                { label: "AD (Alfabetismo)", value: "92.4%", extra: "1-7,6%", ref: "https://www.ecuadorencifras.gob.ec/documentos/web-inec/Estadisticas_Sociales/TIC/2024/202407_Tecnologia_de_la_Informacion_y_Comunicacion-TICs.pdf" }
            ]
        },
        eco: { 
            val: 13.99, 
            formula: "( EXP + IDE + VAB(TI) ) / VAB(COM)",
            context: "Optimización de tiempos gracias a las primeras implementaciones de notificaciones electrónicas, reduciendo el uso de casilleros físicos.",
            method: "Análisis de tiempos y movimientos por parte de la unidad de talento humano y auditoría interna.",
            ref: "https://finanzas.gob.ec/reporte-ahorro-2023",
            breakdownFormula: "ECO = (EXP + IDE + VAB_TI) / VAB_COM",
            breakdown: [
                { label: "EXP (Exportaciones TI)", value: "$96.83M", extra: "", ref: "https://contenido.bce.fin.ec/documentos/informacioneconomica/SectorExterno/ix_BalanzaPagos.html" },
                { label: "IDE (Inv. Extranjera TI)", value: "$37.96M", extra: "", ref: "https://contenido.bce.fin.ec/documentos/informacioneconomica/SectorExterno/ix_InversionExtranjeraDirecta.html" },
                { label: "VAB(TI) (Valor Agregado TI)", value: "$2469.60M", extra: "", ref: "https://contenido.bce.fin.ec/documentos/informacioneconomica/cuentasnacionales/ix_cuentasnacionalesanuales.html" },
                { label: "VAB(COM) (Sector Com.)", value: "$18620.26M", extra: "", ref: "https://contenido.bce.fin.ec/documentos/informacioneconomica/cuentasnacionales/ix_cuentasnacionalesanuales.html" }
            ]
        },
        pay: { 
            val: 43.82, 
            formula: "PAY = √(GD_norm * CS)",
            context: "Integración de cobros con tarjetas de crédito y débito directamente en las ventanillas de las principales agencias administrativas.",
            method: "Recopilación de transacciones procesadas a través de las APIs de las nuevas pasarelas de pago instaladas.",
            ref: "https://bce.fin.ec/medios-pago-2023",
            breakdownFormula: "<strong>1. GD Normalizado:</strong><br> GD_norm = (GDi - min(GD)) / (Max(GD) - Min(GD))<br><br><strong>2. Desarrollo Sist. Pagos (CS):</strong><br> CS = POS / (POS + RETIROS)<br><br><strong>3. Índice PAY:</strong><br> PAY = √(GD_norm * CS)",
            breakdown: [
                { label: "GD (SIP/PIB)", value: "136.80", extra: "", ref: "#" },
                { label: "min(GD) [Año 2010]", value: "44.96", extra: "Base Histórica", ref: "#" },
                { label: "Max(GD) [Año 2025]", value: "152.46", extra: "Tope Histórico", ref: "#" },
                { label: "GD_norm", value: "85.43%", extra: "Resultado 1", ref: "#" },
                { label: "POS", value: "$12,154,309,528", extra: "", ref: "#" },
                { label: "RETIROS", value: "$41,913,411,487", extra: "", ref: "#" },
                { label: "CS", value: "22.48%", extra: "Resultado 2", ref: "#" }
            ]
        }
    },
    2024: {
        indDig: 52.65, 
        edgi: { 
            val: 78.00, 
            formula: "(OSI + HCI + TI) / 3",
            context: "Formula propuesta por la ONU, cuyo calculo se basa en el promedio de tres dimensiones: Índice de servicios en línea (OSI), Índice de capital humano (HCI) e Índice de infraestructura de telecomunicaciones (TII).",
            method: "Extracción de datos de los informes anuales de la ONU sobre gobierno digital y análisis de las plataformas digitales del Estado del Año 2024.",
            ref: "https://publicadministration.un.org/egovkb/en-us/Data/Country-Information/id/52-Ecuador/dataYear/2024",
            breakdownFormula: "EDGI = (OSI + HCI + TI) / 3",
            breakdown: [
                { label: "OSI (Servicios en línea)", value: "0.8851", extra: "", ref: "https://publicadministration.un.org/egovkb/en-us/Data/Country-Information/id/52-Ecuador/dataYear/2024" },
                { label: "HCI (Capital humano)", value: "0.7715", extra: "", ref: "https://publicadministration.un.org/egovkb/en-us/Data/Country-Information/id/52-Ecuador/dataYear/2024" },
                { label: "TII (Infraestructura)", value: "0.6834", extra: "", ref: "https://publicadministration.un.org/egovkb/en-us/Data/Country-Information/id/52-Ecuador/dataYear/2024" }
            ]
        },
        acc: { 
            val: 71.36, 
            formula: "(HI + PI + CA + SP + AD) / 5",
            context: "Basado en los registros únicos de acceso ciudadano a la ventanilla universal de servicios administrativos del Estado central.",
            method: "Extracción directa de usuarios únicos (Logins) desde el Identity Provider (IdP) del Estado.",
            ref: "https://datos.gob.ec/dataset/accesibilidad-2024",
            breakdownFormula: "ACC = (HI + PI + CA + SP + AD) / 5",
            breakdown: [
                { label: "HI (Hogares Internet)", value: "66.0%", extra: "", ref: "https://www.ecuadorencifras.gob.ec/documentos/web-inec/Estadisticas_Sociales/TIC/2024/202407_Tecnologia_de_la_Informacion_y_Comunicacion-TICs.pdf" },
                { label: "PI (Usuarios Internet)", value: "77.2%", extra: "", ref: "https://www.ecuadorencifras.gob.ec/documentos/web-inec/Estadisticas_Sociales/TIC/2024/202407_Tecnologia_de_la_Informacion_y_Comunicacion-TICs.pdf" },
                { label: "CA (Celulares activos)", value: "61.3%", extra: "", ref: "https://www.ecuadorencifras.gob.ec/documentos/web-inec/Estadisticas_Sociales/TIC/2024/202407_Tecnologia_de_la_Informacion_y_Comunicacion-TICs.pdf" },
                { label: "SP (Smartphones)", value: "57.7%", extra: "", ref: "https://www.ecuadorencifras.gob.ec/documentos/web-inec/Estadisticas_Sociales/TIC/2024/202407_Tecnologia_de_la_Informacion_y_Comunicacion-TICs.pdf" },
                { label: "AD (Alfabetismo)", value: "94.6%", extra: "1-5.4%", ref: "https://www.ecuadorencifras.gob.ec/documentos/web-inec/Estadisticas_Sociales/TIC/2024/202407_Tecnologia_de_la_Informacion_y_Comunicacion-TICs.pdf" }
            ]
        },
        eco: { 
            val: 16.73, 
            formula: "( EXP + IDE + VAB(TI) ) / VAB(COM)",
            context: "Cálculo financiero del ahorro generado al eliminar el uso de papel en las citaciones legales y notificaciones electrónicas obligatorias.",
            method: "Modelo econométrico validado por el Ministerio de Finanzas sobre reducción de costos operativos y logísticos.",
            ref: "https://finanzas.gob.ec/reporte-ahorro-2024",
            breakdownFormula: "ECO = (EXP + IDE + VAB_TI) / VAB_COM",
            breakdown: [
                { label: "EXP (Exportaciones TI)", value: "$94.85M", extra: "", ref: "https://contenido.bce.fin.ec/documentos/informacioneconomica/SectorExterno/ix_BalanzaPagos.html" },
                { label: "IDE (Inv. Extranjera TI)", value: "$103.69M", extra: "", ref: "https://contenido.bce.fin.ec/documentos/informacioneconomica/SectorExterno/ix_InversionExtranjeraDirecta.html" },
                { label: "VAB(TI) (Valor Agregado TI)", value: "$2979.27M", extra: "Dato Calculado", ref: "https://contenido.bce.fin.ec/documentos/informacioneconomica/cuentasnacionales/ix_cuentasnacionalesanuales.html" },
                { label: "VAB(COM) (Sector Com.)", value: "$18992.65M", extra: "Dato Calculado", ref: "https://contenido.bce.fin.ec/documentos/informacioneconomica/cuentasnacionales/ix_cuentasnacionalesanuales.html" }
            ]
        },
        pay: { 
            val: 44.49, 
            formula: "PAY = √(GD_norm * CS)",
            context: "Adopción de pasarelas de pago en línea para tasas notariales y registrales, evitando que el ciudadano acuda físicamente a la agencia bancaria.",
            method: "Cruce de datos de recaudación del SRI con los logs transaccionales del botón de pago.",
            ref: "https://bce.fin.ec/medios-pago-2024",
            breakdownFormula: "<strong>1. GD Normalizado:</strong><br> GD_norm = (GDi - min(GD)) / (Max(GD) - Min(GD))<br><br><strong>2. Desarrollo Sist. Pagos (CS):</strong><br> CS = POS / (POS + RETIROS)<br><br><strong>3. Índice PAY:</strong><br> PAY = √(GD_norm * CS)",
            breakdown: [
                { label: "GD (SIP/PIB)", value: "139.55", extra: "", ref: "#" },
                { label: "min(GD) [Año 2010]", value: "44.96", extra: "Base Histórica", ref: "#" },
                { label: "Max(GD) [Año 2025]", value: "152.46", extra: "Tope Histórico", ref: "#" },
                { label: "GD_norm", value: "87.99%", extra: "Resultado 1", ref: "#" },
                { label: "POS", value: "$12,207,088,440", extra: "", ref: "#" },
                { label: "RETIROS", value: "$42,060,487,320", extra: "", ref: "#" },
                { label: "CS", value: "22.49%", extra: "Resultado 2", ref: "#" }
            ]
        }
    },
    2025: {
        indDig: 56.53, 
        edgi: { 
            val: 79.96, 
            formula: "(OSI + HCI + TI) / 3",
            context: "Formula propuesta por la ONU, cuyo calculo se basa en el promedio de tres dimensiones: Índice de servicios en línea (OSI), Índice de capital humano (HCI) e Índice de infraestructura de telecomunicaciones (TII). Si bien el estudio abarca solo los años pares se hizo una aproximacion lineal para conseguir los valores de 2025.",
            method: "Extracción de datos de los informes anuales de la ONU sobre gobierno digital y análisis de las plataformas digitales del Estado.",
            ref: "https://publicadministration.un.org/egovkb/en-us/Data/Country-Information/id/52-Ecuador/dataYear/2024",
            breakdownFormula: "EDGI = (OSI + HCI + TI) / 3",
            breakdown: [
                { label: "OSI (Servicios en línea)", value: "0.91825", extra: "Dato Calculado", ref: "" },
                { label: "HCI (Capital humano)", value: "0.8256", extra: "Dato Calculado", ref: "" },
                { label: "TII (Infraestructura)", value: "0.65485", extra: "Dato Calculado", ref: "" }
            ]
        },
        acc: { 
            val: 74.11, 
            formula: "(HI + PI + CA + SP + AD) / 5",
            context: "Incremento drástico de accesibilidad debido a la implementación del sistema móvil que permite consultar el estado de procesos legales directamente desde el celular.",
            method: "Cruce de datos transaccionales de logins únicos en la aplicación móvil contra la base poblacional activa.",
            ref: "https://datos.gob.ec/dataset/accesibilidad-2025",
            breakdownFormula: "ACC = (HI + PI + CA + SP + AD) / 5",
            breakdown: [
                { label: "HI (Hogares Internet)", value: "71.34%", extra: "", ref: "https://www.ecuadorencifras.gob.ec/tecnologias-de-la-informacion-y-comunicacion-tic/" },
                { label: "PI (Usuarios Internet)", value: "80.07%", extra: "", ref: "https://www.ecuadorencifras.gob.ec/tecnologias-de-la-informacion-y-comunicacion-tic/" },
                { label: "CA (Celulares activos)", value: "61.93%", extra: "", ref: "https://www.ecuadorencifras.gob.ec/tecnologias-de-la-informacion-y-comunicacion-tic/" },
                { label: "SP (Smartphones)", value: "59.33%", extra: "", ref: "https://www.ecuadorencifras.gob.ec/tecnologias-de-la-informacion-y-comunicacion-tic/" },
                { label: "AD (Alfabetismo)", value: "97.87%", extra: "1-2.1%", ref: "https://www.ecuadorencifras.gob.ec/tecnologias-de-la-informacion-y-comunicacion-tic/" }
            ]
        },
        eco: { 
            val: 16.40, 
            formula: "( EXP + IDE + VAB(TI) ) / VAB(COM)",
            context: "El uso de la nube pública y arquitectura de microservicios redujo en un 30% los costos de mantenimiento de servidores físicos en las instituciones.",
            method: "Reporte de facturación de servicios Cloud contrastado con los presupuestos históricos de mantenimiento de infraestructura física.",
            ref: "https://finanzas.gob.ec/reporte-ahorro-2025",
            breakdownFormula: "ECO = (EXP + IDE + VAB_TI) / VAB_COM",
            breakdown: [
                { label: "EXP (Exportaciones TI)", value: "$125.79M", extra: "Dato Calculado", ref: "https://contenido.bce.fin.ec/documentos/informacioneconomica/SectorExterno/ix_BalanzaPagos.html" },
                { label: "IDE (Inv. Extranjera TI)", value: "$26.62M", extra: "Dato Calculado", ref: "https://contenido.bce.fin.ec/documentos/informacioneconomica/SectorExterno/ix_InversionExtranjeraDirecta.html" },
                { label: "VAB(TI) (Valor Agregado TI)", value: "$3079.27M", extra: "Dato Calculado", ref: "https://contenido.bce.fin.ec/documentos/informacioneconomica/cuentasnacionales/ix_cuentasnacionalesanuales.html" },
                { label: "VAB(COM) (Sector Com.)", value: "$19709.46M", extra: "Dato Calculado", ref: "https://contenido.bce.fin.ec/documentos/informacioneconomica/cuentasnacionales/ix_cuentasnacionalesanuales.html" }
            ]
        },
        pay: { 
            val: 55.65, 
            formula: "PAY = √(GD_norm * CS)",
            context: "Consolidación del botón de pagos gubernamental unificado, permitiendo liquidar multas, tasas judiciales y aranceles 24/7 sin intermediación física.",
            method: "Reportes automatizados del Banco Central sobre compensación de pagos electrónicos públicos.",
            ref: "https://bce.fin.ec/medios-pago-2025",
            breakdownFormula: "<strong>1. GD Normalizado:</strong><br> GD_norm = (GDi - min(GD)) / (Max(GD) - Min(GD))<br><br><strong>2. Desarrollo Sist. Pagos (CS):</strong><br> CS = POS / (POS + RETIROS)<br><br><strong>3. Índice PAY:</strong><br> PAY = √(GD_norm * CS)",
            breakdown: [
                { label: "GD (SIP/PIB)", value: "152.46", extra: "", ref: "#" },
                { label: "min(GD) [Año 2010]", value: "44.96", extra: "Base Histórica", ref: "#" },
                { label: "Max(GD) [Año 2025]", value: "152.46", extra: "Tope Histórico", ref: "#" },
                { label: "GD_norm", value: "100.00%", extra: "Resultado 1", ref: "#" },
                { label: "POS", value: "$14,658,240,959", extra: "", ref: "#" },
                { label: "RETIROS", value: "$32,669,043,537", extra: "", ref: "#" },
                { label: "CS", value: "30.97%", extra: "Resultado 2", ref: "#" }
            ]
        }
    }
};

export function getDataByYear(year) {
    return database[year] || null;
}