// data.js

export const database = {
    2022: {
        indDig: 47.48, 
        edgi: { 
            val: 68.89, 
            formula: "(OSI + HCI + TI) / 3",
            context: "La fórmula propuesta por la ONU se basa en el cálculo del promedio de tres dimensiones fundamentales: el Índice de Servicios en Línea (OSI), el Índice de Capital Humano (HCI) y el Índice de Infraestructura de Telecomunicaciones (TII). Este indicador mide el nivel de digitalización de los países en una escala de 0 a 1. El resultado obtenido permite identificar el grado de desarrollo y el rango de crecimiento de la digitalización del Ecuador en comparación con el resto del mundo.",
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
            context: "Índice compuesto que mide la madurez digital integrando infraestructura, equipamiento y capacidad humana. Ofreciendo una visión realista de la inclusión tecnológica su objetivo es determinar qué tan preparada está la población para participar plenamente en la economía y sociedad digital moderna.",
            method: "Recolección de datos de los informes del INEC.",
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
            context: "Este indicador permite analizar el impacto de las exportaciones (EXP), la inversión extranjera directa (IDE) y el valor agregado bruto del sector de tecnologías de la información VAB (TI), en comparación con el sector más representativo dentro del PIB, que es el comercio al por mayor y menor VAB (Com). De esta manera, se contrasta la evolución de la industria digital emergente frente a una industria tradicional con mayor peso en la economía nacional.",
            method: "Los datos fueron obtenidos de los informes oficiales del Banco Central del Ecuador. Para el indicador de Inversión Extranjera Directa (IDE), se accedió a la sección “Estadísticas y Reportes”, luego a la opción “Inversión Directa por Rama de Actividad Económica”. En el caso del indicador de Exportaciones (EXP), se ingresó a “Estadísticas y Reportes”, posteriormente al “Boletín de Resultados de la Balanza de Pagos”, seleccionando la edición correspondiente a 2025 y, dentro de esta, el apartado de “Servicios”. Finalmente, para el indicador de Valor Agregado Bruto (VAB), se consultó la sección “Cuadros de Resultados”, luego “Cuentas Nacionales Anuales” y, dentro de esta, la opción “Serie Histórica y PIB per cápita”.",
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
            context: "Este indicador evalúa el impacto de la adopción de medios de pago digitales, considerando la relación SPI/PIB, que mide el monto de pagos interbancarios en proporción al Producto Interno Bruto. Además, incorpora el nivel de transacciones realizadas a través de terminales POS, comparando el monto de pagos electrónicos con los retiros de efectivo, con el fin de analizar el grado de sustitución del dinero físico por medios digitales en la economía.",
            method: "Los datos fueron extraídos del Banco Central del Ecuador (BCE). Para el indicador SPI/PIB, se accedió a la sección “Sistema de Pagos Interbancarios / PIB”, donde, en los tres puntos ubicados en la parte inferior izquierda del recuadro, se encuentra la opción para descargar la serie histórica. En el caso del indicador POS, se ingresó a la opción “Estadísticas de Puntos de Venta Electrónicos (POS)”, donde se puede consultar la información correspondiente al año 2025. Para acceder a datos históricos, se selecciona la opción “Otros años”. Finalmente, para el indicador de retiros de efectivo, se ingresó a la opción “Estadísticas de Retiros de Dinero”, siguiendo el mismo procedimiento utilizado para obtener la información histórica del indicador POS.",
            ref: "https://bce.fin.ec/medios-pago-2022",
            breakdownFormula: "<strong>1. GD Normalizado:</strong><br> GD_norm = (GDi - min(GD)) / (Max(GD) - Min(GD))<br><br><strong>2. CS:</strong><br> CS = POS / (POS + RETIROS)<br><br><strong>3. Índice PAY:</strong><br> PAY = √(GD_norm * CS)",
            breakdown: [
                { label: "GD (SIP/PIB)", value: "134.66", extra: "", ref: "https://contenido.bce.fin.ec/documentos/informacioneconomica/MediosPago/ix_MediosPagoPrin.html#" },
                { label: "min(GD) [Año 2010]", value: "44.96", extra: "Base Histórica", ref: "https://contenido.bce.fin.ec/documentos/informacioneconomica/MediosPago/ix_MediosPagoPrin.html#" },
                { label: "Max(GD) [Año 2025]", value: "152.46", extra: "Tope Histórico", ref: "https://contenido.bce.fin.ec/documentos/informacioneconomica/MediosPago/ix_MediosPagoPrin.html#" },
                { label: "GD_norm", value: "83.44%", extra: "Pag 85", ref: "https://www.oecd.org/content/dam/oecd/en/publications/reports/2008/08/handbook-on-constructing-composite-indicators-methodology-and-user-guide_g1gh9301/9789264043466-en.pdf" },
                { label: "POS", value: "$10,910,791,431", extra: "", ref: "https://www.superbancos.gob.ec/estadisticas/portalestudios/servicios-financieros/" },
                { label: "RETIROS", value: "$45,181,473,635", extra: "", ref: "https://www.superbancos.gob.ec/estadisticas/portalestudios/servicios-financieros/" },
                { label: "CS", value: "19.45%", extra: "Calculo prom", ref: "https://www.uaeh.edu.mx/docencia/VI_Lectura/licenciatura/documentos/LEC4.pdf" }
            ]
        }
    },
    2023: {
        indDig: 50.12, 
        edgi: { 
            val: 74.15, 
            formula: "(OSI + HCI + TI) / 3",
            context: "La fórmula propuesta por la ONU se basa en el cálculo del promedio de tres dimensiones fundamentales: el Índice de Servicios en Línea (OSI), el Índice de Capital Humano (HCI) y el Índice de Infraestructura de Telecomunicaciones (TII). Este indicador mide el nivel de digitalización de los países en una escala de 0 a 1, lo que permite identificar el grado de desarrollo y el rango de crecimiento de la digitalización del Ecuador en comparación con el resto del mundo. Si bien el estudio oficial se publica únicamente en años pares, en este caso se realizó una aproximación lineal para estimar los valores correspondientes al año 2023.",
            method: "Extracción de datos de los informes anuales de la ONU sobre gobierno digital y análisis de las plataformas digitales del Estado.",
            ref: "https://publicadministration.un.org/egovkb/en-us/Data/Country-Information/id/52-Ecuador/dataYear/2022",
            breakdownFormula: "EDGI = (OSI + HCI + TI) / 3",
            breakdown: [
                { label: "OSI (Servicios en línea)", value: "0.85055", extra: "Dato Calculado", ref:"https://publicadministration.un.org/egovkb/en-us/Data/Country-Information/id/52-Ecuador/dataYear/2024" },
                { label: "HCI (Capital humano)", value: "0.7823", extra: "Dato Calculado" , ref:"https://publicadministration.un.org/egovkb/en-us/Data/Country-Information/id/52-Ecuador/dataYear/2024" },
                { label: "TII (Infraestructura)", value: "0.59155", extra: "Dato Calculado", ref:"https://publicadministration.un.org/egovkb/en-us/Data/Country-Information/id/52-Ecuador/dataYear/2024" }
            ]
        },
        acc: { 
            val: 68.50, 
            formula: "(HI + PI + CA + SP + AD) / 5",
            context: "Índice compuesto que mide la madurez digital integrando infraestructura, equipamiento y capacidad humana. Ofreciendo una visión realista de la inclusión tecnológica su objetivo es determinar qué tan preparada está la población para participar plenamente en la economía y sociedad digital moderna.",
            method: "Recolección de datos de los informes del INEC.",
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
            context: "Este indicador permite analizar el impacto de las exportaciones (EXP), la inversión extranjera directa (IDE) y el valor agregado bruto del sector de tecnologías de la información VAB (TI), en comparación con el sector más representativo dentro del PIB, que es el comercio al por mayor y menor VAB (Com). De esta manera, se contrasta la evolución de la industria digital emergente frente a una industria tradicional con mayor peso en la economía nacional.",
            method: "Los datos fueron obtenidos de los informes oficiales del Banco Central del Ecuador. Para el indicador de Inversión Extranjera Directa (IDE), se accedió a la sección “Estadísticas y Reportes”, luego a la opción “Inversión Directa por Rama de Actividad Económica”. En el caso del indicador de Exportaciones (EXP), se ingresó a “Estadísticas y Reportes”, posteriormente al “Boletín de Resultados de la Balanza de Pagos”, seleccionando la edición correspondiente a 2025 y, dentro de esta, el apartado de “Servicios”. Finalmente, para el indicador de Valor Agregado Bruto (VAB), se consultó la sección “Cuadros de Resultados”, luego “Cuentas Nacionales Anuales” y, dentro de esta, la opción “Serie Histórica y PIB per cápita”.",
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
            context: "Este indicador evalúa el impacto de la adopción de medios de pago digitales, considerando la relación SPI/PIB, que mide el monto de pagos interbancarios en proporción al Producto Interno Bruto. Además, incorpora el nivel de transacciones realizadas a través de terminales POS, comparando el monto de pagos electrónicos con los retiros de efectivo, con el fin de analizar el grado de sustitución del dinero físico por medios digitales en la economía.",
            method: "Los datos fueron extraídos del Banco Central del Ecuador (BCE). Para el indicador SPI/PIB, se accedió a la sección “Sistema de Pagos Interbancarios / PIB”, donde, en los tres puntos ubicados en la parte inferior izquierda del recuadro, se encuentra la opción para descargar la serie histórica. En el caso del indicador POS, se ingresó a la opción “Estadísticas de Puntos de Venta Electrónicos (POS)”, donde se puede consultar la información correspondiente al año 2025. Para acceder a datos históricos, se selecciona la opción “Otros años”. Finalmente, para el indicador de retiros de efectivo, se ingresó a la opción “Estadísticas de Retiros de Dinero”, siguiendo el mismo procedimiento utilizado para obtener la información histórica del indicador POS.",
            ref: "https://bce.fin.ec/medios-pago-2023",
            breakdownFormula: "<strong>1. GD Normalizado:</strong><br> GD_norm = (GDi - min(GD)) / (Max(GD) - Min(GD))<br><br><strong>2. CS:</strong><br> CS = POS / (POS + RETIROS)<br><br><strong>3. Índice PAY:</strong><br> PAY = √(GD_norm * CS)",
            breakdown: [
                { label: "GD (SIP/PIB)", value: "136.80", extra: "", ref: "https://contenido.bce.fin.ec/documentos/informacioneconomica/MediosPago/ix_MediosPagoPrin.html#" },
                { label: "min(GD) [Año 2010]", value: "44.96", extra: "Base Histórica", ref: "https://contenido.bce.fin.ec/documentos/informacioneconomica/MediosPago/ix_MediosPagoPrin.html#" },
                { label: "Max(GD) [Año 2025]", value: "152.46", extra: "Tope Histórico C", ref: "https://contenido.bce.fin.ec/documentos/informacioneconomica/MediosPago/ix_MediosPagoPrin.html#" },
                { label: "GD_norm", value: "85.43%", extra: "Pag 85", ref: "https://www.oecd.org/content/dam/oecd/en/publications/reports/2008/08/handbook-on-constructing-composite-indicators-methodology-and-user-guide_g1gh9301/9789264043466-en.pdf" },
                { label: "POS", value: "$12,154,309,528", extra: "", ref: "https://www.superbancos.gob.ec/estadisticas/portalestudios/servicios-financieros/" },
                { label: "RETIROS", value: "$41,913,411,487", extra: "", ref: "https://www.superbancos.gob.ec/estadisticas/portalestudios/servicios-financieros/" },
                { label: "CS", value: "22.48%", extra: "Calculo prom", ref: "https://www.uaeh.edu.mx/docencia/VI_Lectura/licenciatura/documentos/LEC4.pdf" }
            ]
        }
    },
    2024: {
        indDig: 52.65, 
        edgi: { 
            val: 78.00, 
            formula: "(OSI + HCI + TI) / 3",
            context: "La fórmula propuesta por la ONU se basa en el cálculo del promedio de tres dimensiones fundamentales: el Índice de Servicios en Línea (OSI), el Índice de Capital Humano (HCI) y el Índice de Infraestructura de Telecomunicaciones (TII). Este indicador mide el nivel de digitalización de los países en una escala de 0 a 1. El resultado obtenido permite identificar el grado de desarrollo y el rango de crecimiento de la digitalización del Ecuador en comparación con el resto del mundo.",
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
            context: "Índice compuesto que mide la madurez digital integrando infraestructura, equipamiento y capacidad humana. Ofreciendo una visión realista de la inclusión tecnológica su objetivo es determinar qué tan preparada está la población para participar plenamente en la economía y sociedad digital moderna.",
            method: "Recolección de datos de los informes del INEC.",
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
            context: "Este indicador permite analizar el impacto de las exportaciones (EXP), la inversión extranjera directa (IDE) y el valor agregado bruto del sector de tecnologías de la información VAB (TI), en comparación con el sector más representativo dentro del PIB, que es el comercio al por mayor y menor VAB (Com). De esta manera, se contrasta la evolución de la industria digital emergente frente a una industria tradicional con mayor peso en la economía nacional.",
            method: "Los datos fueron obtenidos de los informes oficiales del Banco Central del Ecuador. Para el indicador de Inversión Extranjera Directa (IDE), se accedió a la sección “Estadísticas y Reportes”, luego a la opción “Inversión Directa por Rama de Actividad Económica”. En el caso del indicador de Exportaciones (EXP), se ingresó a “Estadísticas y Reportes”, posteriormente al “Boletín de Resultados de la Balanza de Pagos”, seleccionando la edición correspondiente a 2025 y, dentro de esta, el apartado de “Servicios”. Finalmente, para el indicador de Valor Agregado Bruto (VAB), se consultó la sección “Cuadros de Resultados”, luego “Cuentas Nacionales Anuales” y, dentro de esta, la opción “Serie Histórica y PIB per cápita”.",
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
            context: "Este indicador evalúa el impacto de la adopción de medios de pago digitales, considerando la relación SPI/PIB, que mide el monto de pagos interbancarios en proporción al Producto Interno Bruto. Además, incorpora el nivel de transacciones realizadas a través de terminales POS, comparando el monto de pagos electrónicos con los retiros de efectivo, con el fin de analizar el grado de sustitución del dinero físico por medios digitales en la economía.",
            method: "Los datos fueron extraídos del Banco Central del Ecuador (BCE). Para el indicador SPI/PIB, se accedió a la sección “Sistema de Pagos Interbancarios / PIB”, donde, en los tres puntos ubicados en la parte inferior izquierda del recuadro, se encuentra la opción para descargar la serie histórica. En el caso del indicador POS, se ingresó a la opción “Estadísticas de Puntos de Venta Electrónicos (POS)”, donde se puede consultar la información correspondiente al año 2025. Para acceder a datos históricos, se selecciona la opción “Otros años”. Finalmente, para el indicador de retiros de efectivo, se ingresó a la opción “Estadísticas de Retiros de Dinero”, siguiendo el mismo procedimiento utilizado para obtener la información histórica del indicador POS.",
            ref: "https://bce.fin.ec/medios-pago-2024",
            breakdownFormula: "<strong>1. GD Normalizado:</strong><br> GD_norm = (GDi - min(GD)) / (Max(GD) - Min(GD))<br><br><strong>2. CS:</strong><br> CS = POS / (POS + RETIROS)<br><br><strong>3. Índice PAY:</strong><br> PAY = √(GD_norm * CS)",
            breakdown: [
                { label: "GD (SIP/PIB)", value: "139.55", extra: "", ref: "#" },
                { label: "min(GD) [Año 2010]", value: "44.96", extra: "Base Histórica", ref: "https://contenido.bce.fin.ec/documentos/informacioneconomica/MediosPago/ix_MediosPagoPrin.html#" },
                { label: "Max(GD) [Año 2025]", value: "152.46", extra: "Tope Histórico C", ref: "https://contenido.bce.fin.ec/documentos/informacioneconomica/MediosPago/ix_MediosPagoPrin.html#" },
                { label: "GD_norm", value: "87.99%", extra: "Pag 85", ref: "https://www.oecd.org/content/dam/oecd/en/publications/reports/2008/08/handbook-on-constructing-composite-indicators-methodology-and-user-guide_g1gh9301/9789264043466-en.pdf" },
                { label: "POS", value: "$12,207,088,440", extra: "", ref: "https://www.superbancos.gob.ec/estadisticas/portalestudios/servicios-financieros/" },
                { label: "RETIROS", value: "$42,060,487,320", extra: "", ref: "https://www.superbancos.gob.ec/estadisticas/portalestudios/servicios-financieros/" },
                { label: "CS", value: "22.49%", extra: "Calculo prom", ref: "https://www.uaeh.edu.mx/docencia/VI_Lectura/licenciatura/documentos/LEC4.pdf" }
            ]
        }
    },
    2025: {
        indDig: 56.53, 
        edgi: { 
            val: 79.96, 
            formula: "(OSI + HCI + TI) / 3",
            context: "La fórmula propuesta por la ONU se basa en el cálculo del promedio de tres dimensiones fundamentales: el Índice de Servicios en Línea (OSI), el Índice de Capital Humano (HCI) y el Índice de Infraestructura de Telecomunicaciones (TII). Este indicador mide el nivel de digitalización de los países en una escala de 0 a 1, lo que permite identificar el grado de desarrollo y el rango de crecimiento de la digitalización del Ecuador en comparación con el resto del mundo. Si bien el estudio oficial se publica únicamente en años pares, en este caso se realizó una aproximación lineal para estimar los valores correspondientes al año 2025.",
            method: "Extracción de datos de los informes anuales de la ONU sobre gobierno digital y análisis de las plataformas digitales del Estado.",
            ref: "https://publicadministration.un.org/egovkb/en-us/Data/Country-Information/id/52-Ecuador/dataYear/2024",
            breakdownFormula: "EDGI = (OSI + HCI + TI) / 3",
            breakdown: [
                { label: "OSI (Servicios en línea)", value: "0.91825", extra: "Dato Calculado", ref: "https://publicadministration.un.org/egovkb/en-us/Data/Country-Information/id/52-Ecuador/dataYear/2024" },
                { label: "HCI (Capital humano)", value: "0.8256", extra: "Dato Calculado", ref: "https://publicadministration.un.org/egovkb/en-us/Data/Country-Information/id/52-Ecuador/dataYear/2024" },
                { label: "TII (Infraestructura)", value: "0.65485", extra: "Dato Calculado", ref: "https://publicadministration.un.org/egovkb/en-us/Data/Country-Information/id/52-Ecuador/dataYear/2024" }
            ]
        },
        acc: { 
            val: 74.11, 
            formula: "(HI + PI + CA + SP + AD) / 5",
            context: "Índice compuesto que mide la madurez digital integrando infraestructura, equipamiento y capacidad humana. Ofreciendo una visión realista de la inclusión tecnológica su objetivo es determinar qué tan preparada está la población para participar plenamente en la economía y sociedad digital moderna.",
            method: "Recolección de datos de los informes del INEC.",
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
            context: "Este indicador permite analizar el impacto de las exportaciones (EXP), la inversión extranjera directa (IDE) y el valor agregado bruto del sector de tecnologías de la información VAB (TI), en comparación con el sector más representativo dentro del PIB, que es el comercio al por mayor y menor VAB (Com). De esta manera, se contrasta la evolución de la industria digital emergente frente a una industria tradicional con mayor peso en la economía nacional.",
            method: "Los datos fueron obtenidos de los informes oficiales del Banco Central del Ecuador. Para el indicador de Inversión Extranjera Directa (IDE), se accedió a la sección “Estadísticas y Reportes”, luego a la opción “Inversión Directa por Rama de Actividad Económica”. En el caso del indicador de Exportaciones (EXP), se ingresó a “Estadísticas y Reportes”, posteriormente al “Boletín de Resultados de la Balanza de Pagos”, seleccionando la edición correspondiente a 2025 y, dentro de esta, el apartado de “Servicios”. Finalmente, para el indicador de Valor Agregado Bruto (VAB), se consultó la sección “Cuadros de Resultados”, luego “Cuentas Nacionales Anuales” y, dentro de esta, la opción “Serie Histórica y PIB per cápita”.",
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
            context: "Este indicador evalúa el impacto de la adopción de medios de pago digitales, considerando la relación SPI/PIB, que mide el monto de pagos interbancarios en proporción al Producto Interno Bruto. Además, incorpora el nivel de transacciones realizadas a través de terminales POS, comparando el monto de pagos electrónicos con los retiros de efectivo, con el fin de analizar el grado de sustitución del dinero físico por medios digitales en la economía.",
            method: "Los datos fueron extraídos del Banco Central del Ecuador (BCE). Para el indicador SPI/PIB, se accedió a la sección “Sistema de Pagos Interbancarios / PIB”, donde, en los tres puntos ubicados en la parte inferior izquierda del recuadro, se encuentra la opción para descargar la serie histórica. En el caso del indicador POS, se ingresó a la opción “Estadísticas de Puntos de Venta Electrónicos (POS)”, donde se puede consultar la información correspondiente al año 2025. Para acceder a datos históricos, se selecciona la opción “Otros años”. Finalmente, para el indicador de retiros de efectivo, se ingresó a la opción “Estadísticas de Retiros de Dinero”, siguiendo el mismo procedimiento utilizado para obtener la información histórica del indicador POS.",
            ref: "https://bce.fin.ec/medios-pago-2025",
            breakdownFormula: "<strong>1. GD Normalizado:</strong><br> GD_norm = (GDi - min(GD)) / (Max(GD) - Min(GD))<br><br><strong>2. CS:</strong><br> CS = POS / (POS + RETIROS)<br><br><strong>3. Índice PAY:</strong><br> PAY = √(GD_norm * CS)",
            breakdown: [
                { label: "GD (SIP/PIB)", value: "152.46", extra: "Dato Calculado", ref: "https://contenido.bce.fin.ec/documentos/informacioneconomica/MediosPago/ix_MediosPagoPrin.html#"},
                { label: "min(GD) [Año 2010]", value: "44.96", extra: "Base Histórica", ref: "https://contenido.bce.fin.ec/documentos/informacioneconomica/MediosPago/ix_MediosPagoPrin.html#" },
                { label: "Max(GD) [Año 2025]", value: "152.46", extra: "Tope Histórico C", ref: "https://contenido.bce.fin.ec/documentos/informacioneconomica/MediosPago/ix_MediosPagoPrin.html#" },
                { label: "GD_norm", value: "100.00%", extra: "Pag 85", ref: "https://www.oecd.org/content/dam/oecd/en/publications/reports/2008/08/handbook-on-constructing-composite-indicators-methodology-and-user-guide_g1gh9301/9789264043466-en.pdf" },
                { label: "POS", value: "$14,658,240,959", extra: "", ref: "https://www.superbancos.gob.ec/estadisticas/portalestudios/servicios-financieros/" },
                { label: "RETIROS", value: "$32,669,043,537", extra: "", ref: "https://www.superbancos.gob.ec/estadisticas/portalestudios/servicios-financieros/" },
                { label: "CS", value: "30.97%", extra: "Calculo prom", ref: "https://www.uaeh.edu.mx/docencia/VI_Lectura/licenciatura/documentos/LEC4.pdf" }
            ]
        }
    }
};

export function getDataByYear(year) {
    return database[year] || null;
}