// ============================================================
// BANCO DE PREGUNTAS – PARTE I
// Manual Formadores PxP · DGT-AVAE-IMOVIAL
// ============================================================

const PARTE1 = {
  id: "parte1",
  titulo: "Fundamentos del Programa PxP y Seguridad Vial",
  descripcion: "Sistema de permiso por puntos, normativa, factores de riesgo y seguridad vial.",
  temas: [
    // ─── TEMA 0 ───────────────────────────────────────────────
    {
      id: "p1-t0",
      numero: "Tema 0",
      titulo: "El Sistema de Permiso por Puntos y las Sanciones de Tráfico",
      descripcion: "Marco normativo, funcionamiento del permiso por puntos y sistema de recuperación.",
      preguntas: [
        {
          id: "p1t0-001",
          pregunta: "¿Qué ley introdujo el sistema de permiso por puntos en España?",
          opciones: ["Ley 17/2005, de 19 de julio", "Real Decreto 818/2009", "Ley Orgánica 3/2007", "Real Decreto Legislativo 6/2015"],
          correcta: 0,
          explicacion: "La Ley 17/2005, de 19 de julio, fue la que reguló el permiso y la licencia de conducción por puntos en España, entrando en vigor el 1 de julio de 2006.",
          referencia: "Tema 0 – Marco normativo"
        },
        {
          id: "p1t0-002",
          pregunta: "¿Cuántos puntos tiene asignados inicialmente un conductor novel al obtener su permiso?",
          opciones: ["12 puntos", "8 puntos", "14 puntos", "15 puntos"],
          correcta: 1,
          explicacion: "Los conductores noveles (con menos de 3 años de antigüedad del permiso) empiezan con 8 puntos, frente a los 12 de los conductores con permiso consolidado.",
          referencia: "Tema 0 – Dotación de puntos"
        },
        {
          id: "p1t0-003",
          pregunta: "¿Cuántos puntos tiene asignados un conductor con el permiso consolidado (más de 3 años sin perder puntos)?",
          opciones: ["12 puntos", "14 puntos", "15 puntos", "8 puntos"],
          correcta: 1,
          explicacion: "Un conductor que mantiene su permiso sin perder puntos durante más de 3 años puede alcanzar hasta 14 puntos (saldo máximo).",
          referencia: "Tema 0 – Dotación de puntos"
        },
        {
          id: "p1t0-004",
          pregunta: "¿Cuál es el objetivo principal del sistema de permiso por puntos?",
          opciones: [
            "Aumentar la recaudación por multas",
            "Modificar actitudes y comportamientos de los conductores infractores",
            "Reducir el número de vehículos en circulación",
            "Penalizar económicamente las infracciones graves"
          ],
          correcta: 1,
          explicacion: "El sistema combina la sanción con la reeducación: su finalidad es modificar actitudes y comportamientos de los conductores infractores, reduciendo la reincidencia.",
          referencia: "Tema 0 – Finalidad del sistema"
        },
        {
          id: "p1t0-005",
          pregunta: "¿Qué sucede cuando un conductor pierde todos sus puntos?",
          opciones: [
            "Debe pagar una multa elevada para recuperar el permiso",
            "Queda inhabilitado para conducir y debe realizar un curso de sensibilización",
            "Su permiso queda suspendido 6 meses automáticamente",
            "Debe superar de nuevo el examen teórico"
          ],
          correcta: 1,
          explicacion: "La pérdida total de puntos conlleva la inhabilitación para conducir. Para recuperar el permiso, el conductor deberá superar un curso de sensibilización y reeducación vial y el examen psicotécnico.",
          referencia: "Tema 0 – Pérdida del permiso"
        },
        {
          id: "p1t0-006",
          pregunta: "¿Cuántos puntos se recuperan al superar un curso de sensibilización y reeducación vial (recuperación parcial)?",
          opciones: ["2 puntos", "4 puntos", "6 puntos", "8 puntos"],
          correcta: 0,
          explicacion: "La realización de un curso de recuperación parcial de puntos permite recuperar hasta 2 puntos (con un máximo de 12 en el permiso ordinario).",
          referencia: "Tema 0 – Recuperación de puntos"
        },
        {
          id: "p1t0-007",
          pregunta: "¿Con qué frecuencia máxima puede un conductor realizar cursos de recuperación parcial de puntos?",
          opciones: ["Una vez al año", "Cada dos años", "Una vez al mes", "Cada seis meses"],
          correcta: 0,
          explicacion: "Los cursos de recuperación parcial de puntos solo pueden realizarse una vez por año natural.",
          referencia: "Tema 0 – Recuperación de puntos"
        },
        {
          id: "p1t0-008",
          pregunta: "¿Qué tipo de infracciones conllevan la pérdida de 6 puntos en el permiso?",
          opciones: [
            "Conducir con tasa de alcohol entre 0,5 y 0,8 g/l",
            "Conducir hablando por el teléfono móvil",
            "No usar el cinturón de seguridad",
            "Conducir con una tasa de alcohol superior a 1,2 g/l o con presencia de drogas"
          ],
          correcta: 3,
          explicacion: "Las infracciones más graves, como conducir con tasas de alcohol muy elevadas (>1,2 g/l) o con presencia de sustancias estupefacientes, y la conducción manifiestamente temeraria, conllevan la pérdida de 6 puntos.",
          referencia: "Tema 0 – Tabla de infracciones y puntos"
        },
        {
          id: "p1t0-009",
          pregunta: "¿Cuántos puntos se pierden por superar en más de 60 km/h la velocidad máxima permitida fuera de poblado?",
          opciones: ["2 puntos", "4 puntos", "6 puntos", "3 puntos"],
          correcta: 2,
          explicacion: "Superar la velocidad máxima en más de 50 km/h en vías interurbanas o en más de 30 km/h en vías urbanas supone la pérdida de 6 puntos.",
          referencia: "Tema 0 – Tabla de puntos por infracción"
        },
        {
          id: "p1t0-010",
          pregunta: "¿A qué conductores se aplica un límite de alcoholemia más estricto (0,3 g/l en sangre)?",
          opciones: [
            "A todos los conductores mayores de 65 años",
            "A los conductores noveles y a los profesionales del transporte",
            "A los conductores que hayan perdido más de 4 puntos",
            "A los conductores durante el período nocturno"
          ],
          correcta: 1,
          explicacion: "Los conductores con menos de dos años de antigüedad de permiso y los conductores profesionales tienen un límite de 0,3 g/l (0,15 mg/l en aire espirado), más estricto que el general de 0,5 g/l.",
          referencia: "Tema 0 – Tasas de alcohol"
        },
        {
          id: "p1t0-011",
          pregunta: "¿Cuántos puntos conlleva la pérdida por no respetar el uso del cinturón de seguridad, el casco o los sistemas de retención infantil?",
          opciones: ["3 puntos", "4 puntos", "2 puntos", "6 puntos"],
          correcta: 1,
          explicacion: "Desde la reforma de la Ley de Tráfico (Ley 18/2021), no usar el cinturón de seguridad, el casco u otros elementos de protección obligatorios (SRI) conlleva la pérdida de 4 puntos.",
          referencia: "Tema 0 – Infracciones y puntos"
        },
        {
          id: "p1t0-012",
          pregunta: "¿Cuántos puntos se recuperan al transcurrir 2 años sin cometer infracciones con pérdida de puntos?",
          opciones: ["Se recuperan 4 puntos", "Se recuperan 2 puntos", "Se recupera el saldo de 12 puntos completo", "Se recuperan los puntos perdidos hasta el máximo de 12"],
          correcta: 3,
          explicacion: "Tras 2 años sin perder puntos, se recupera el saldo hasta el máximo de 12 puntos (no los 14 del saldo máximo, que se consigue por 3 años consecutivos sin perder puntos).",
          referencia: "Tema 0 – Recuperación automática de puntos"
        },
        {
          id: "p1t0-013",
          pregunta: "¿Qué organismo gestiona el Registro de conductores e Infractores en España?",
          opciones: ["El Ministerio de Justicia", "La Dirección General de Tráfico (DGT)", "La Guardia Civil de Tráfico", "Las Jefaturas Provinciales de Tráfico"],
          correcta: 1,
          explicacion: "La DGT gestiona el Registro de Conductores e Infractores, donde quedan registradas todas las sanciones y puntos de cada conductor.",
          referencia: "Tema 0 – Registro de conductores"
        },
        {
          id: "p1t0-014",
          pregunta: "¿Cuántos puntos se pierden por conducir sujetando con la mano dispositivos de telefonía móvil?",
          opciones: ["6 puntos", "3 puntos", "4 puntos", "2 puntos"],
          correcta: 0,
          explicacion: "Conducir sujetando con la mano el teléfono móvil es una infracción grave que conlleva la pérdida de 6 puntos (Ley 18/2021). Si se manipula estando en un soporte sin sujetarlo, son 3 puntos.",
          referencia: "Tema 0 – Infracciones y puntos"
        },
        {
          id: "p1t0-015",
          pregunta: "¿Cuál es la finalidad educativa de los cursos de sensibilización y reeducación vial del sistema PxP?",
          opciones: [
            "Incrementar los ingresos del Estado",
            "Humanizar la seguridad vial y fomentar el cambio de actitudes",
            "Enseñar normativa exclusivamente",
            "Penalizar al conductor reincidente"
          ],
          correcta: 1,
          explicacion: "Los cursos PxP buscan humanizar la seguridad vial, fomentando el cambio de actitudes desde la reflexión y la empatía, no solo desde el conocimiento normativo.",
          referencia: "Tema 0 – Finalidad educativa"
        },
        {
          id: "p1t0-016",
          pregunta: "¿Qué elemento es obligatorio en todo curso de recuperación de puntos según el manual?",
          opciones: [
            "Un examen teórico de circulación",
            "La intervención de una víctima o familiar de víctima de tráfico",
            "Una prueba de conducción en circuito",
            "Una sesión con el psicólogo de tráfico de la DGT"
          ],
          correcta: 1,
          explicacion: "Toda acción formativa de recuperación parcial o total de puntos debe incluir la intervención de una víctima o familiar perteneciente a una asociación sin ánimo de lucro declarada de utilidad pública.",
          referencia: "Tema 0 – Requisitos del curso"
        },
        {
          id: "p1t0-017",
          pregunta: "¿Cuántos puntos se pierden por adelantar poniendo en peligro o entorpeciendo a ciclistas?",
          opciones: ["6 puntos", "4 puntos", "3 puntos", "2 puntos"],
          correcta: 0,
          explicacion: "Los adelantamientos que pongan en peligro o entorpezcan a ciclistas son infracciones muy graves que conllevan la pérdida de 6 puntos.",
          referencia: "Tema 0 – Infracciones graves"
        },
        {
          id: "p1t0-018",
          pregunta: "¿En qué momento puede empezar a recuperar puntos un conductor novel?",
          opciones: [
            "Desde el primer día del permiso",
            "Tras 1 año sin infracciones con pérdida de puntos",
            "Al cumplirse el segundo año desde la expedición del permiso",
            "Tras completar la fase de ampliación del saldo"
          ],
          correcta: 2,
          explicacion: "Un conductor novel puede recuperar puntos automáticamente al cumplirse 2 años desde la expedición del permiso sin haber cometido infracciones que conlleven pérdida de puntos.",
          referencia: "Tema 0 – Recuperación de puntos noveles"
        },
        {
          id: "p1t0-019",
          pregunta: "¿Cuántos puntos hacen perder el incumplimiento de las normas sobre uso de sistemas de iluminación?",
          opciones: ["3 puntos", "4 puntos", "2 puntos", "1 punto"],
          correcta: 0,
          explicacion: "El incumplimiento de las normas sobre sistemas de alumbrado y señalización óptica supone la pérdida de 3 puntos.",
          referencia: "Tema 0 – Infracciones"
        },
        {
          id: "p1t0-020",
          pregunta: "¿Qué le ocurre al conductor que pierde todos sus puntos (pierde el permiso) y vuelve a conducir sin obtenerlo de nuevo?",
          opciones: [
            "Se le aplica únicamente una sanción económica",
            "Incurre en un delito penal por conducción sin permiso vigente",
            "Se le deniega permanentemente la posibilidad de obtener el permiso",
            "Se le exige realizar un examen médico"
          ],
          correcta: 1,
          explicacion: "Conducir una vez perdido el permiso por agotamiento de puntos constituye un delito contra la seguridad vial tipificado en el Código Penal.",
          referencia: "Tema 0 – Consecuencias legales"
        },
        {
          id: "p1t0-021",
          pregunta: "¿Qué significa el principio de 'non bis in idem' en relación a los siniestros de tráfico?",
          opciones: [
            "Que no se puede sancionar dos veces el mismo hecho (vía administrativa y penal combinadas)",
            "Que un conductor reincidente pierde el doble de puntos",
            "Que no se puede suspender el permiso de conducir sin previo aviso",
            "Que los cursos de recuperación deben hacerse dos veces"
          ],
          correcta: 0,
          explicacion: "El principio 'non bis in idem' impide sancionar dos veces el mismo hecho. Si hay condena penal, ésta absorbe la sanción administrativa correspondiente a ese hecho.",
          referencia: "Tema 0 – Código Penal"
        },
        {
          id: "p1t0-022",
          pregunta: "¿Qué delito tipifica el artículo 382 bis del Código Penal según la última reforma?",
          opciones: [
            "El exceso de velocidad en vías urbanas",
            "El abandono del lugar del accidente",
            "La conducción temeraria sin víctimas",
            "El exceso de alcohol superior a 1mg/l"
          ],
          correcta: 1,
          explicacion: "El nuevo artículo 382 bis CP tipifica por primera vez el abandono voluntario del lugar del siniestro, aunque no exista intención de eludir la responsabilidad.",
          referencia: "Tema 0 – Código Penal y Seguridad Vial"
        },
        {
          id: "p1t0-023",
          pregunta: "Si el proceso penal finaliza con sentencia condenatoria por conducción temeraria, ¿qué ocurre con el expediente sancionador administrativo?",
          opciones: [
            "Continúa y se aplica además la pérdida de puntos",
            "Se archiva sin declaración de responsabilidad (prevalencia de la vía penal)",
            "Solo se retiran los puntos y no se cobra la multa",
            "La vía administrativa tiene prevalencia sobre la penal"
          ],
          correcta: 1,
          explicacion: "Si el proceso penal finaliza con sentencia condenatoria, el procedimiento administrativo sancionador se archivará sin declaración de responsabilidad (prevalencia de la vía penal).",
          referencia: "Tema 0 – Código Penal"
        },
        {
          id: "p1t0-024",
          pregunta: "Para recuperar el permiso de conducción tras una condena penal que imponga privación del derecho a conducir, ¿qué se exige?",
          opciones: [
            "Un pago administrativo especial",
            "Realizar un curso de sensibilización y reeducación vial, y adicionalmente en ciertos casos una prueba",
            "Esperar 6 meses sin necesidad de realizar acciones complementarias",
            "Solo realizar un examen práctico"
          ],
          correcta: 1,
          explicacion: "La recuperación del permiso tras una condena penal exige la superación de un curso de sensibilización y reeducación vial y, en ciertos casos, una prueba de control de conocimientos.",
          referencia: "Tema 0 – Recuperación tras privación penal"
        },
        {
          id: "p1t0-025",
          pregunta: "¿Cuál de las siguientes acciones NO es un objetivo de los cursos de sensibilización PxP?",
          opciones: [
            "Modificar conductas y actitudes infractoras",
            "Reforzar conocimientos normativos orientados exclusivamente a aprobar exámenes",
            "Ayudar al infractor a tomar conciencia de su estilo de conducción",
            "Fomentar la responsabilidad cívica y la convivencia en el tráfico"
          ],
          correcta: 1,
          explicacion: "El objetivo NO es un aprendizaje de normas para un examen, sino cambiar el comportamiento, fomentar la empatía y reeducar actitudes.",
          referencia: "Tema 0 – Filosofía PxP"
        }
      ]
    },

    // ─── TEMA 1 ───────────────────────────────────────────────
    {
      id: "p1-t1",
      numero: "Tema 1",
      titulo: "La Perspectiva de Género en la Seguridad Vial",
      descripcion: "Igualdad, diferencias de género en movilidad y siniestralidad, rol docente.",
      preguntas: [
        {
          id: "p1t1-001",
          pregunta: "¿Qué ley española respalda la perspectiva de género en todos los ámbitos, incluida la educación vial?",
          opciones: ["Ley 17/2005", "Ley Orgánica 3/2007, de 22 de marzo", "Real Decreto 818/2009", "Ley 18/2009"],
          correcta: 1,
          explicacion: "La Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, es el marco legal que respalda la perspectiva de género en todos los ámbitos.",
          referencia: "Tema 1 – Marco normativo"
        },
        {
          id: "p1t1-002",
          pregunta: "Según los datos estadísticos, ¿qué proporción aproximada de conductores fallecidos en siniestros de tráfico son hombres?",
          opciones: ["El 50%", "El 65%", "Aproximadamente el 90%", "El 75%"],
          correcta: 2,
          explicacion: "Aproximadamente nueve de cada diez conductores fallecidos en siniestros de tráfico son hombres, lo que refleja un mayor nivel de exposición al riesgo y patrones de conducción más agresivos.",
          referencia: "Tema 1 – Análisis de siniestralidad"
        },
        {
          id: "p1t1-003",
          pregunta: "¿Cuál de los siguientes factores de riesgo es más frecuente en hombres según los estudios?",
          opciones: [
            "Mayor uso del transporte público",
            "Mayor vulnerabilidad como peatones",
            "Mayor exposición al exceso de velocidad, alcohol y distracción",
            "Mayor número de desplazamientos cortos"
          ],
          correcta: 2,
          explicacion: "Los varones muestran mayor exposición a conductas de riesgo como exceso de velocidad, consumo de alcohol y distracción por dispositivos.",
          referencia: "Tema 1 – Diferencias de género"
        },
        {
          id: "p1t1-004",
          pregunta: "¿Qué significa 'igualdad efectiva' en el contexto de la educación vial?",
          opciones: [
            "Tratar a todos los alumnos exactamente igual, sin distinción alguna",
            "No solo ofrecer las mismas oportunidades, sino eliminar las barreras que impiden ejercerlas",
            "Prohibir todo tipo de diferenciación en los materiales didácticos",
            "Impartir el mismo contenido exclusivamente en formato digital"
          ],
          correcta: 1,
          explicacion: "La igualdad efectiva significa no solo ofrecer las mismas oportunidades, sino eliminar las barreras que impiden ejercerlas, lo que puede implicar adaptar metodologías según las necesidades reales.",
          referencia: "Tema 1 – Conceptos clave"
        },
        {
          id: "p1t1-005",
          pregunta: "¿Cuál es el impacto de los estereotipos de género en la conducción, según el manual?",
          opciones: [
            "Mejoran la percepción del riesgo en los conductores masculinos",
            "Son inofensivos para el aprendizaje de la conducción",
            "Pueden generar exceso de confianza en alumnos y inseguridad en alumnas",
            "Solo afectan a conductores noveles"
          ],
          correcta: 2,
          explicacion: "Los estereotipos pueden fomentar actitudes de exceso de confianza o temeridad en alumnos varones y generar autoexigencia excesiva o inseguridad en alumnas.",
          referencia: "Tema 1 – Estereotipos y roles"
        },
        {
          id: "p1t1-006",
          pregunta: "En materia de movilidad cotidiana, ¿qué patrón diferencial se observa entre hombres y mujeres?",
          opciones: [
            "Las mujeres realizan más viajes laborales de larga distancia",
            "Los hombres usan más el transporte público",
            "Las mujeres realizan más desplazamientos cortos relacionados con tareas de cuidado",
            "Hombres y mujeres tienen patrones de movilidad idénticos"
          ],
          correcta: 2,
          explicacion: "Las mujeres realizan más desplazamientos cortos, relacionados con tareas domésticas, familiares o de cuidado, mientras que los hombres concentran más viajes laborales de media y larga distancia.",
          referencia: "Tema 1 – Movilidad cotidiana"
        },
        {
          id: "p1t1-007",
          pregunta: "¿Qué estrategia educativa diferenciada recomienda el manual para los alumnos masculinos?",
          opciones: [
            "Reforzar su confianza y autonomía al volante",
            "Trabajar la autocontención, la empatía y la percepción del riesgo",
            "Enseñar conducción defensiva con énfasis en maniobras avanzadas",
            "Proporcionar más horas de prácticas en circuito"
          ],
          correcta: 1,
          explicacion: "En los hombres, la estrategia diferenciada consiste en trabajar la autocontención, la empatía y la percepción del riesgo.",
          referencia: "Tema 1 – Enfoques preventivos diferenciados"
        },
        {
          id: "p1t1-008",
          pregunta: "¿Cómo debe el profesorado aplicar la perspectiva de género en la evaluación del alumnado?",
          opciones: [
            "Aplicando criterios más exigentes a los alumnos varones",
            "Evaluando de forma diferente según el género para compensar desigualdades",
            "Aplicando criterios uniformes, transparentes y libres de sesgo",
            "Priorizando la actitud sobre la competencia técnica"
          ],
          correcta: 2,
          explicacion: "La evaluación debe ser siempre objetiva y basada en criterios técnicos, no en percepciones de género, aplicando criterios uniformes, transparentes y libres de sesgo.",
          referencia: "Tema 1 – Perspectiva de género en la formación"
        },
        {
          id: "p1t1-009",
          pregunta: "¿Qué ODS (Objetivo de Desarrollo Sostenible) de la Agenda 2030 se relaciona directamente con la igualdad de género?",
          opciones: ["ODS 3", "ODS 5", "ODS 11", "ODS 13"],
          correcta: 1,
          explicacion: "El ODS 5 de la Agenda 2030 se refiere específicamente a la igualdad de género.",
          referencia: "Tema 1 – Marco normativo"
        },
        {
          id: "p1t1-010",
          pregunta: "¿Por qué el testimonio femenino de víctimas en los cursos PxP aporta un valor especial?",
          opciones: [
            "Porque las mujeres son mejores comunicadoras que los hombres",
            "Porque evidencia cómo las desigualdades de género también influyen en el impacto social del siniestro",
            "Porque reduce el tiempo de la sesión formativa",
            "Porque sustituye la explicación técnica de la normativa"
          ],
          correcta: 1,
          explicacion: "El testimonio femenino de víctimas, o de familiares, aporta una dimensión social y ética al proceso educativo, evidenciando cómo las desigualdades de género influyen en el impacto del siniestro (mayor carga de cuidados, secuelas emocionales).",
          referencia: "Tema 1 – Víctimas y perspectiva de género"
        },
        {
          id: "p1t1-011",
          pregunta: "¿Cuál es la clave didáctica fundamental relacionada con la igualdad de género en el aula de conducción?",
          opciones: [
            "No hablar de diferencias de género para no discriminar",
            "Usar lenguaje inclusivo y analizar casos de siniestralidad con enfoque de género",
            "Separar a alumnos y alumnas en grupos distintos",
            "Adaptar las normas de tráfico según el género"
          ],
          correcta: 1,
          explicacion: "Las claves didácticas incluyen usar lenguaje inclusivo, evitar sesgos y estereotipos, y analizar casos de siniestralidad con enfoque de género para promover debates sobre igualdad y convivencia.",
          referencia: "Tema 1 – Claves didácticas"
        },
        {
          id: "p1t1-012",
          pregunta: "¿Qué principio pedagógico resume la idea de enseñar en igualdad según el manual?",
          opciones: [
            "Tratar a todos igual sin considerar sus necesidades individuales",
            "Enseñar con equidad, atendiendo a las necesidades reales de cada persona",
            "Adaptar la normativa a las características de cada conductor",
            "Minimizar las diferencias entre alumnos para evitar conflictos"
          ],
          correcta: 1,
          explicacion: "Enseñar en igualdad no significa tratar a todos igual, sino enseñar con equidad, atendiendo a las necesidades reales de cada persona.",
          referencia: "Tema 1 – Conclusión pedagógica"
        },
        {
          id: "p1t1-013",
          pregunta: "¿Qué estrategia educativa recomienda el manual para las alumnas conductoras?",
          opciones: [
            "Trabajar la autocontención y la reducción de velocidad",
            "Reforzar la confianza, la autonomía y la toma de decisiones seguras",
            "Aumentar las horas de práctica nocturna",
            "Reducir el control sobre las emociones durante la conducción"
          ],
          correcta: 1,
          explicacion: "Para las mujeres, la estrategia diferenciada consiste en reforzar la confianza, la autonomía y la toma de decisiones seguras.",
          referencia: "Tema 1 – Enfoques preventivos diferenciados"
        },
        {
          id: "p1t1-014",
          pregunta: "¿Cuál es la razón por la que la igualdad de género no es solo una cuestión de justicia social en seguridad vial?",
          opciones: [
            "Porque los hombres tienen más siniestros y deben pagar más impuestos",
            "Porque es un requisito para la eficacia de las políticas de seguridad vial",
            "Porque la ley exige la paridad de género en las autoescuelas",
            "Porque mejora la rentabilidad de las empresas de transporte"
          ],
          correcta: 1,
          explicacion: "La igualdad no es solo una cuestión de justicia social: es un requisito para la eficacia de las políticas de seguridad vial. Un modelo educativo que ignore las desigualdades reproduce estereotipos y limita el alcance de la prevención.",
          referencia: "Tema 1 – Introducción"
        },
        {
          id: "p1t1-015",
          pregunta: "¿Cuál es el papel del profesorado vial en relación con la igualdad de género?",
          opciones: [
            "Ignorar las diferencias de género para no discriminar",
            "Actuar como modelo de comportamiento igualitario e integrar la igualdad en su práctica docente",
            "Remitir a los alumnos a cursos específicos de igualdad",
            "Evitar cualquier referencia a datos estadísticos diferenciados por género"
          ],
          correcta: 1,
          explicacion: "El profesorado debe actuar como modelo de comportamiento igualitario. Su forma de comunicarse y su actitud hacia los alumnos influyen tanto como los contenidos que enseña.",
          referencia: "Tema 1 – Rol del profesorado"
        }
      ]
    },

    // ─── TEMA 2 ───────────────────────────────────────────────
    {
      id: "p1-t2",
      numero: "Tema 2",
      titulo: "Los Siniestros de Tráfico",
      descripcion: "Concepto, causas, dimensión del problema y enfoque del Sistema Seguro.",
      preguntas: [
        {
          id: "p1t2-001",
          pregunta: "¿Por qué el término 'siniestro vial' está reemplazando progresivamente al de 'accidente de tráfico'?",
          opciones: [
            "Porque 'siniestro' es un término más moderno y técnico",
            "Porque 'accidente' implica azar mientras que 'siniestro' subraya su carácter prevenible",
            "Porque así lo establece la normativa comunitaria europea",
            "Porque es el término preferido por las aseguradoras"
          ],
          correcta: 1,
          explicacion: "El término sustituye progresivamente a 'accidente de tráfico', ya que 'accidente' implica azar, mientras que 'siniestro' subraya su carácter prevenible.",
          referencia: "Tema 2 – Concepto"
        },
        {
          id: "p1t2-002",
          pregunta: "Según la OMS, ¿cuántas personas fallecen anualmente en el mundo por siniestros de tráfico?",
          opciones: ["Más de 500.000", "Más de 1,3 millones", "Aproximadamente 800.000", "Cerca de 2 millones"],
          correcta: 1,
          explicacion: "Según la Organización Mundial de la Salud (OMS), cada año fallecen más de 1,3 millones de personas en siniestros de tráfico y cerca de 50 millones sufren lesiones.",
          referencia: "Tema 2 – Dimensión del problema"
        },
        {
          id: "p1t2-003",
          pregunta: "¿En qué porcentaje de los siniestros está presente el factor humano según estudios de la DGT y Fundación MAPFRE?",
          opciones: ["En más del 90%", "En el 70%", "En el 50%", "En el 80%"],
          correcta: 0,
          explicacion: "Según estudios de la DGT y la Fundación MAPFRE, en más del 90% de los siniestros, el factor humano está presente.",
          referencia: "Tema 2 – Causas de los siniestros"
        },
        {
          id: "p1t2-004",
          pregunta: "¿Cuáles son los tres factores del sistema vial que intervienen en los siniestros?",
          opciones: [
            "Conductor, vehículo y normativa",
            "Humano, vehículo y vía/entorno",
            "Velocidad, alcohol y distracción",
            "Infraestructura, legislación y formación"
          ],
          correcta: 1,
          explicacion: "El tráfico se concibe como un sistema dinámico formado por tres factores: Humano (percepción, decisión, conducta), Vehículo (condiciones técnicas) y Vía/Entorno (diseño, señalización, condiciones meteorológicas).",
          referencia: "Tema 2 – Multicausalidad"
        },
        {
          id: "p1t2-005",
          pregunta: "¿Cuál es el fundamento del enfoque 'Sistema Seguro' adoptado por la UE y la OMS?",
          opciones: [
            "Toda responsabilidad recae en el conductor",
            "Ningún error humano debe pagarse con una vida",
            "La tecnología puede eliminar todos los siniestros",
            "La velocidad es el único factor de riesgo que importa"
          ],
          correcta: 1,
          explicacion: "El Sistema Seguro ('Safe System') parte de la premisa de que ningún error humano debe pagarse con una vida, diseñando vías y vehículos para minimizar las consecuencias de los fallos humanos.",
          referencia: "Tema 2 – Sistema Seguro"
        },
        {
          id: "p1t2-006",
          pregunta: "¿Cuál es el objetivo de la Estrategia Española de Seguridad Vial 2030 en cuanto a víctimas?",
          opciones: [
            "Eliminar completamente los siniestros mortales",
            "Reducir a la mitad el número de víctimas mortales y heridos graves",
            "Reducir en un 25% los fallecidos",
            "Alcanzar cero víctimas en vías urbanas"
          ],
          correcta: 1,
          explicacion: "La Estrategia Española de Seguridad Vial 2030 se fija como objetivo reducir a la mitad el número de víctimas mortales y heridos graves.",
          referencia: "Tema 2 – Estrategia 2030"
        },
        {
          id: "p1t2-007",
          pregunta: "¿Qué porcentaje del PIB nacional supone el impacto económico de los siniestros de tráfico en España aproximadamente?",
          opciones: ["Más del 1%", "El 2%", "El 0,5%", "El 3%"],
          correcta: 0,
          explicacion: "El impacto económico de los siniestros de tráfico en España es superior al 1% del PIB nacional.",
          referencia: "Tema 2 – Dimensión del problema"
        },
        {
          id: "p1t2-008",
          pregunta: "¿Qué principio del Sistema Seguro establece que conductores, administraciones, fabricantes y formadores comparten la tarea de prevenir?",
          opciones: [
            "Tolerancia al error",
            "Responsabilidad compartida",
            "Reducción del impacto",
            "Aprendizaje continuo"
          ],
          correcta: 1,
          explicacion: "El principio de 'Responsabilidad compartida' del Sistema Seguro establece que todos los actores —conductores, administraciones, fabricantes y formadores— comparten la tarea de prevenir.",
          referencia: "Tema 2 – Sistema Seguro"
        },
        {
          id: "p1t2-009",
          pregunta: "¿Cuál de las siguientes afirmaciones sobre los siniestros viales es correcta según el enfoque del manual?",
          opciones: [
            "Los siniestros son inevitables porque el error humano es impredecible",
            "Los siniestros son el resultado de una cadena de decisiones, errores o condiciones prevenibles",
            "Los siniestros dependen principalmente del azar y las condiciones meteorológicas",
            "Los siniestros solo pueden prevenirse con tecnología avanzada"
          ],
          correcta: 1,
          explicacion: "El siniestro vial no es un hecho inevitable, sino el resultado de una cadena de decisiones, errores o condiciones prevenibles.",
          referencia: "Tema 2 – Introducción"
        },
        {
          id: "p1t2-010",
          pregunta: "¿Qué tres niveles del factor humano debe abordar el formador en sus clases?",
          opciones: [
            "Técnico, económico y social",
            "Cognitivo, motivacional/emocional y social",
            "Perceptivo, motor y actitudinal",
            "Normativo, preventivo y reactivo"
          ],
          correcta: 1,
          explicacion: "El formador debe abordar el factor humano desde tres niveles: cognitivo (atención, percepción, memoria), motivacional y emocional (estrés, ira, euforia) y social (modelos culturales, normas de grupo).",
          referencia: "Tema 2 – Factor humano"
        },
        {
          id: "p1t2-011",
          pregunta: "¿Más del qué porcentaje de los siniestros mortales están relacionados con el ámbito laboral?",
          opciones: ["El 10%", "El 20%", "Más del 30%", "El 50%"],
          correcta: 2,
          explicacion: "Más del 30% de los siniestros mortales están relacionados con el trabajo, siendo los conductores profesionales especialmente vulnerables por la fatiga y la presión del tiempo.",
          referencia: "Tema 2 – Conducción profesional"
        },
        {
          id: "p1t2-012",
          pregunta: "¿Por qué la OMS considera los siniestros viales una 'epidemia silenciosa'?",
          opciones: [
            "Porque ocurren principalmente de noche sin testigos",
            "Porque generan mortalidad, discapacidad y costes sanitarios comparables a enfermedades graves",
            "Porque los medios de comunicación no los difunden suficientemente",
            "Porque afectan principalmente a colectivos desfavorecidos"
          ],
          correcta: 1,
          explicacion: "Los siniestros viales son considerados por la OMS una epidemia silenciosa porque generan mortalidad, discapacidad y costes sanitarios comparables a enfermedades graves.",
          referencia: "Tema 2 – Siniestros como problema de salud pública"
        },
        {
          id: "p1t2-013",
          pregunta: "¿Cuál es el mensaje clave del manual respecto a los siniestros viales para transmitir en el aula?",
          opciones: [
            "La velocidad es siempre el factor determinante en un siniestro",
            "No existen siniestros inevitables, sino errores corregibles",
            "El factor humano no puede modificarse con educación",
            "La tecnología eliminará pronto todos los siniestros"
          ],
          correcta: 1,
          explicacion: "El profesor debe enseñar a sus alumnos que no existen siniestros inevitables, sino errores corregibles, transmitiendo así el valor de la educación y la prevención.",
          referencia: "Tema 2 – Concepto"
        },
        {
          id: "p1t2-014",
          pregunta: "¿Qué tipo de consecuencias deja un siniestro vial más allá de las físicas?",
          opciones: [
            "Solo legales y económicas",
            "Psicológicas y sociales: estrés postraumático, culpa, duelo",
            "Únicalmente efectos sobre el patrimonio de las víctimas",
            "Solo consecuencias familiares a corto plazo"
          ],
          correcta: 1,
          explicacion: "Los siniestros viales no solo dejan víctimas físicas, sino también secuelas psicológicas y sociales: estrés postraumático, culpa, ansiedad, duelos no resueltos, que afectan a víctimas, culpables y su entorno.",
          referencia: "Tema 2 – Dimensión humana"
        },
        {
          id: "p1t2-015",
          pregunta: "Según el manual, ¿qué hace que un 'incidente vial' sea diferente a un 'siniestro vial'?",
          opciones: [
            "El incidente ocurre en zonas urbanas y el siniestro en carretera",
            "El incidente no tiene consecuencias graves y sirve como indicador de riesgo",
            "El siniestro solo implica daños materiales, el incidente lesiones personales",
            "No hay diferencia conceptual entre ambos términos"
          ],
          correcta: 1,
          explicacion: "El incidente vial hace referencia a sucesos sin consecuencias graves (roces, averías, detenciones), que sirven como indicadores de riesgo, a diferencia del siniestro que tiene consecuencias para personas, bienes o el entorno.",
          referencia: "Tema 2 – Conceptos"
        },
        {
          id: "p1t2-016",
          pregunta: "En la investigación de siniestros, ¿cuál de los tres factores es el más influyente (presente en más del 90% de los casos)?",
          opciones: [
            "El factor vía y entorno",
            "El factor vehículo",
            "El factor humano",
            "El factor meteorológico"
          ],
          correcta: 2,
          explicacion: "El factor humano (percepción, decisión, conducta y actitud) está presente en más del 90% de los siniestros viales.",
          referencia: "Tema 2 – Causas de siniestros"
        },
        {
          id: "p1t2-017",
          pregunta: "Según el concepto de 'Sistema Seguro', ¿quién comparte la responsabilidad de prevenir los siniestros?",
          opciones: [
            "Solo el conductor infractor",
            "Conductores, administraciones, fabricantes y formadores (responsabilidad compartida)",
            "Únicamente los cuerpos policiales y de regulación",
            "Los ingenieros civiles y las empresas de automoción"
          ],
          correcta: 1,
          explicacion: "El Sistema Seguro establece el principio de 'responsabilidad compartida', implicando a todos los actores para prevenir siniestros.",
          referencia: "Tema 2 – Sistema Seguro"
        },
        {
          id: "p1t2-018",
          pregunta: "¿Qué significa el principio de 'tolerancia al error' en el diseño urbano y vial?",
          opciones: [
            "Que no se multarán las pequeñas infracciones",
            "Que los conductores no pierden puntos en la primera infracción",
            "Que vías y vehículos deben estar diseñados para minimizar las consecuencias de los fallos humanos",
            "Que se asume cierto número de víctimas anuales como inevitable"
          ],
          correcta: 2,
          explicacion: "El principio de 'tolerancia al error' asume que el conductor cometerá fallos, por lo que el entorno y el vehículo deben minimizar sus consecuencias letales.",
          referencia: "Tema 2 – Sistema Seguro"
        },
        {
          id: "p1t2-019",
          pregunta: "Desde el punto de vista psicosocial, ¿cómo afecta el estilo de vida a la conducción?",
          opciones: [
            "No tiene una correlación demostrable",
            "Factores como prisa, estrés, presión laboral o competitividad aumentan significativamente la siniestralidad",
            "Solo influye si la persona sufre enfermedades mentales graves",
            "Únicamente tiene efecto en la conducción nocturna"
          ],
          correcta: 1,
          explicacion: "La presión laboral, la fatiga y en general la 'cultura de riesgo' y el estilo de vida estresante aumentan las decisiones de riesgo al volante y, como consecuencia, los siniestros.",
          referencia: "Tema 2 – Psicosociología"
        },
        {
          id: "p1t2-020",
          pregunta: "En España, las muertes por siniestros de tráfico son consideradas por las instituciones de salud como...",
          opciones: [
            "Un mal menor provocado por el progreso técnico",
            "Una de las principales causas de muerte no natural en el país y una 'epidemia silenciosa'",
            "Un factor insignificante comparado con otras muertes accidentales domésticas",
            "Exclusivamente un problema de tipo policial y legal"
          ],
          correcta: 1,
          explicacion: "Se considera a los siniestros como una importante causa de muerte no natural y, según la OMS, una 'epidemia silenciosa'.",
          referencia: "Tema 2 – Problema de salud pública"
        }
      ]
    },

    // ─── TEMA 3 ───────────────────────────────────────────────
    {
      id: "p1-t3",
      numero: "Tema 3",
      titulo: "Consecuencias y Lesiones en un Siniestro Vial",
      descripcion: "Tipos de lesiones, factores de gravedad, lesiones en usuarios vulnerables.",
      preguntas: [
        {
          id: "p1t3-001",
          pregunta: "¿Cuál es la principal causa de fallecimiento y discapacidad permanente en los siniestros de tráfico?",
          opciones: [
            "Lesiones torácicas y abdominales",
            "Traumatismos craneoencefálicos y lesiones en cabeza y cuello",
            "Fracturas en extremidades inferiores",
            "Lesiones pélvicas"
          ],
          correcta: 1,
          explicacion: "Los traumatismos craneoencefálicos (TCE), contusiones cerebrales y lesiones en cabeza y cuello son la principal causa de fallecimiento y discapacidad permanente en siniestros.",
          referencia: "Tema 3 – Lesiones por zona corporal"
        },
        {
          id: "p1t3-002",
          pregunta: "¿En cuánto reduce el riesgo de muerte el uso del casco en motociclistas?",
          opciones: ["Un 20%", "Un 40%", "Un 60%", "Un 70%"],
          correcta: 1,
          explicacion: "El casco reduce el riesgo de muerte en motoristas en un 40%.",
          referencia: "Tema 3 – Lesiones según tipo de vehículo"
        },
        {
          id: "p1t3-003",
          pregunta: "¿Cuál de los siguientes tipos de colisión produce principalmente latigazo cervical?",
          opciones: ["Colisión frontal", "Colisión lateral", "Alcance trasero", "Vuelco"],
          correcta: 2,
          explicacion: "El alcance trasero provoca principalmente latigazo cervical y lesiones cervicales y dorsales, siendo la distancia de seguridad insuficiente el factor de riesgo principal.",
          referencia: "Tema 3 – Lesiones según tipo de siniestro"
        },
        {
          id: "p1t3-004",
          pregunta: "¿Por qué las lesiones en siniestros viales son consideradas un problema de salud pública?",
          opciones: [
            "Porque solo afectan a conductores de transporte público",
            "Porque son la primera causa de discapacidad adquirida en la edad laboral y afectan a menores de 35 años",
            "Porque generan tasas de mortalidad superiores a las enfermedades cardiovasculares",
            "Porque afectan únicamente en zonas rurales"
          ],
          correcta: 1,
          explicacion: "Según la OMS, las lesiones causadas por el tráfico son una de las principales causas de muerte en menores de 35 años y la primera causa de discapacidad adquirida en la edad laboral.",
          referencia: "Tema 3 – Magnitud y contexto"
        },
        {
          id: "p1t3-005",
          pregunta: "¿Qué elemento de seguridad previene principalmente el latigazo cervical?",
          opciones: ["El airbag frontal", "El cinturón de seguridad", "El reposacabezas", "Los airbags laterales"],
          correcta: 2,
          explicacion: "El reposacabezas es el elemento preventivo clave para evitar el latigazo cervical en colisiones por alcance trasero.",
          referencia: "Tema 3 – Prevención"
        },
        {
          id: "p1t3-006",
          pregunta: "¿Cuáles son las lesiones más frecuentes en una colisión frontal?",
          opciones: [
            "Latigazo cervical y lesiones dorsales",
            "Traumatismos craneales, torácicos, fracturas de fémur y pelvis",
            "Lesiones abdominales y fracturas costales",
            "Politraumatismos y expulsión del vehículo"
          ],
          correcta: 1,
          explicacion: "En la colisión frontal las lesiones más frecuentes son traumatismos craneales, torácicos y fracturas de fémur y pelvis, siendo el no uso del cinturón y el exceso de velocidad los principales factores de riesgo.",
          referencia: "Tema 3 – Lesiones según tipo de siniestro"
        },
        {
          id: "p1t3-007",
          pregunta: "¿Cuáles son los usuarios más vulnerables en zonas urbanas en términos de mortalidad?",
          opciones: [
            "Los conductores de turismos",
            "Los peatones, ciclistas y usuarios de VMP",
            "Los conductores de vehículos pesados",
            "Los pasajeros de transporte público"
          ],
          correcta: 1,
          explicacion: "Los usuarios vulnerables —peatones, ciclistas, motoristas, personas mayores, menores y usuarios de VMP— son especialmente vulnerables porque carecen de protección estructural del vehículo.",
          referencia: "Tema 3 – Lesiones en usuarios vulnerables"
        },
        {
          id: "p1t3-008",
          pregunta: "¿Qué porcentaje de reducción del riesgo de muerte o lesión grave ofrece el cinturón de seguridad?",
          opciones: ["Un 20%", "Un 30%", "La mitad (50%)", "Un 75%"],
          correcta: 2,
          explicacion: "El cinturón de seguridad reduce a la mitad el riesgo de muerte o lesión grave en caso de siniestro.",
          referencia: "Tema 3 – Seguridad pasiva"
        },
        {
          id: "p1t3-009",
          pregunta: "¿Cuál es la causa adulta principal de lesiones craneales y abdominales en menores durante un siniestro?",
          opciones: [
            "El exceso de velocidad del conductor",
            "El mal uso o ausencia de sistemas de retención infantil (SRI)",
            "La falta de airbags en el vehículo",
            "La conducción nocturna"
          ],
          correcta: 1,
          explicacion: "En el caso de los menores, el error adulto (padres, cuidadores) respecto al mal uso o ausencia de Sistemas de Retención Infantil (SRI) es el principal factor causal de lesiones.",
          referencia: "Tema 3 – Usuarios vulnerables"
        },
        {
          id: "p1t3-010",
          pregunta: "¿Cuál de las siguientes afirmaciones sobre la enseñanza de lesiones es correcta según el manual?",
          opciones: [
            "El conocimiento de las lesiones debe emplearse para generar miedo en el alumnado",
            "El conocimiento de las lesiones debe emplearse como herramienta de prevención, no de miedo",
            "Las lesiones físicas son lo único relevante para el formador",
            "El formador debe evitar hablar de lesiones para no provocar rechazo"
          ],
          correcta: 1,
          explicacion: "El conocimiento de las lesiones debe emplearse como herramienta de prevención, no de miedo. El objetivo es que el alumno interiorice el valor de la vida y comprenda que cada decisión tiene un coste potencial.",
          referencia: "Tema 3 – Educación basada en conciencia del daño"
        },
        {
          id: "p1t3-011",
          pregunta: "¿Cuál es el Trastorno psicológico más común identificado en supervivientes de siniestros viales?",
          opciones: [
            "Trastorno obsesivo-compulsivo",
            "Trastorno de estrés postraumático (TEPT)",
            "Trastorno depresivo mayor",
            "Trastorno límite de personalidad"
          ],
          correcta: 1,
          explicacion: "El Trastorno de Estrés Postraumático (TEPT) es la secuela psicológica más frecuente tras un siniestro, junto con ansiedad, depresión, culpa y aislamiento social.",
          referencia: "Tema 3 – Lesiones psicológicas"
        },
        {
          id: "p1t3-012",
          pregunta: "¿Qué multiplicador de gravedad de lesiones supone la falta de equipamiento adecuado en un motorista?",
          opciones: ["Lo duplica", "Lo triplica", "Lo multiplica por cinco", "Lo multiplica por diez"],
          correcta: 2,
          explicacion: "La falta de equipamiento adecuado en motoristas multiplica por cinco la gravedad de las lesiones.",
          referencia: "Tema 3 – Usuarios vulnerables"
        },
        {
          id: "p1t3-013",
          pregunta: "¿Por qué son más vulnerables las personas mayores en siniestros de baja velocidad?",
          opciones: [
            "Porque tienen peor visión nocturna",
            "Porque su fragilidad ósea y lentitud de reacción aumentan su mortalidad incluso ante impactos leves",
            "Porque no usan el cinturón de seguridad",
            "Porque conducen más horas al día"
          ],
          correcta: 1,
          explicacion: "Las personas mayores son más vulnerables por fragilidad ósea y lentitud de reacción, presentando mayor mortalidad ante impactos a baja velocidad.",
          referencia: "Tema 3 – Usuarios vulnerables"
        },
        {
          id: "p1t3-014",
          pregunta: "¿Qué maniobra educativa en el aula recomienda el manual para concienciar sobre las lesiones sin generar imágenes violentas?",
          opciones: [
            "Proyección de imágenes explícitas de siniestros",
            "Comparaciones visuales seguras y dinámicas reflexivas como '¿Qué pierdes en un segundo de distracción?'",
            "Lectura de estadísticas de mortalidad",
            "Visitas a hospitales de traumatología"
          ],
          correcta: 1,
          explicacion: "El manual recomienda comparaciones visuales seguras (energía de impacto), dinámicas reflexivas como '¿Qué pierdes en un segundo de distracción?' y casos reales o testimonios guiados.",
          referencia: "Tema 3 – Educación preventiva"
        },
        {
          id: "p1t3-015",
          pregunta: "¿Qué tipo de coste de los siniestros incluye la pérdida de productividad y la dependencia?",
          opciones: ["Coste económico", "Coste social", "Coste emocional", "Coste legal"],
          correcta: 1,
          explicacion: "El coste social de los siniestros incluye pérdida de productividad, dependencia y trauma familiar, mientras el coste económico engloba hospitalización, seguros y bajas laborales.",
          referencia: "Tema 3 – Implicaciones sociales"
        },
        {
          id: "p1t3-016",
          pregunta: "En el impacto por alcance trasero, la lesión más característica es el síndrome de 'latigazo cervical'. ¿Cómo puede mitigarse principalmente en el vehículo?",
          opciones: [
            "Mediante el uso de los frenos antibloqueo",
            "Haciendo uso correcto de los airbags laterales",
            "Con la correcta regulación del reposacabezas",
            "Instalando luces de freno de alta intensidad"
          ],
          correcta: 2,
          explicacion: "La prevención fundamental frente al latigazo cervical en colisiones por alcance es el ajuste adecuado y el uso del reposacabezas.",
          referencia: "Tema 3 – Latigazo cervical (prevención)"
        },
        {
          id: "p1t3-017",
          pregunta: "En colisiones, ¿por qué es tan crítico el uso de los Sistemas de Retención Infantil (SRI) y ajustarlos conforme a talla y peso?",
          opciones: [
            "Porque los niños ocupan menos espacio y podrían marearse",
            "Porque el cuerpo de un menor no soporta las tensiones de los cinturones de adultos y las lesiones pélvico-abdominales y cervicales pueden ser fatales",
            "Para evitar multas económicas agravadas",
            "Porque los anclajes ISOFIX solo funcionan con esos sistemas"
          ],
          correcta: 1,
          explicacion: "Su uso reduce drásticamente las lesiones letales, ya que el cuerpo inmaduro no está preparado para la retención tradicional de los cinturones.",
          referencia: "Tema 3 – Sistemas SRI"
        },
        {
          id: "p1t3-018",
          pregunta: "En motoristas, además del casco, ¿qué otro equipamiento reduce las lesiones vasculares y por abrasión?",
          opciones: [
            "Cinturón de seguridad dorsal",
            "Indumentaria técnica y chaqueta con protección que se ajuste perfectamente",
            "Manoplas reforzadas",
            "Chaleco reflectante obligatorio diurno"
          ],
          correcta: 1,
          explicacion: "La ropa de protección en motoristas reduce contusiones, desgarros, abrasiones y lesiones en extremidades (reduciendo la gravedad hasta por 5).",
          referencia: "Tema 3 – Equipación moto"
        },
        {
          id: "p1t3-019",
          pregunta: "Mencione el efecto multiplicador que se produce en ocupantes que viajan en la parte trasera sin usar el cinturón frente a aquellos que sí lo usan:",
          opciones: [
            "Tienen 4 veces más posibilidades de sufrir lesiones graves y proyectarse fatalmente contra ocupantes delanteros",
            "Solamente afecta si hay choque trasero",
            "La falta del cinturón atrás causa un recargo en el seguro sin afectar las lesiones directas",
            "Las posibilidades de lesión letal disminuyen si van en medio"
          ],
          correcta: 0,
          explicacion: "El ocupante sin cinturón puede comportarse como un 'proyectil', multiplicando las opciones de matar a los asientos delanteros y sufriendo lesiones graves él mismo.",
          referencia: "Tema 3 – Proyectiles humanos"
        },
        {
          id: "p1t3-020",
          pregunta: "¿Por qué se denomina 'vulnerables' a peatones, ciclistas y usuarios VMP?",
          opciones: [
            "Por su escasa pericia en las normas de circulación",
            "Por la carencia de chasis protector, absorbiendo toda la energía cinética del vehículo en un impacto",
            "Porque tienen un carril lento",
            "Por no contar habitualmente con seguro"
          ],
          correcta: 1,
          explicacion: "Los usuarios vulnerables reciben el impacto íntegramente sobre su cuerpo debido a que carecen de protección estructural.",
          referencia: "Tema 3 – Usuarios vulnerables"
        }
      ]
    },

    // ─── TEMA 4 ───────────────────────────────────────────────
    {
      id: "p1-t4",
      numero: "Tema 4",
      titulo: "La Conducción: una Tarea de Toma de Decisiones",
      descripcion: "Procesos cognitivos, emocionales y motivacionales en la conducción.",
      preguntas: [
        {
          id: "p1t4-001",
          pregunta: "¿Cuáles son las cinco fases del ciclo de toma de decisiones en la conducción?",
          opciones: [
            "Ver, pensar, actuar, evaluar, corregir",
            "Percibir, interpretar, decidir, ejecutar, evaluar",
            "Observar, planificar, actuar, revisar, adaptar",
            "Atender, analizar, prever, reaccionar, aprender"
          ],
          correcta: 1,
          explicacion: "Las cinco fases del ciclo de decisión en conducción son: 1) Percibir, 2) Interpretar, 3) Decidir, 4) Ejecutar, 5) Evaluar. Este ciclo ocurre de forma continua y puede fallar en cualquier fase.",
          referencia: "Tema 4 – Conducción como toma de decisiones"
        },
        {
          id: "p1t4-002",
          pregunta: "¿Qué caracteriza al Sistema 1 de pensamiento aplicado a la conducción?",
          opciones: [
            "Es lento, analítico y racional",
            "Es rápido, automático, emocional y basado en hábitos",
            "Es consciente y deliberado",
            "Es exclusivo de conductores expertos"
          ],
          correcta: 1,
          explicacion: "El Sistema 1 de pensamiento es rápido, automático, emocional y basado en hábitos. El problema surge cuando el conductor se deja dominar por él y deja de pensar antes de actuar.",
          referencia: "Tema 4 – Proceso de toma de decisiones"
        },
        {
          id: "p1t4-003",
          pregunta: "¿Cuál de las siguientes emociones al volante aumenta la impulsividad y puede llevar a conductas agresivas?",
          opciones: ["El miedo", "La tristeza", "La ira o frustración", "La euforia"],
          correcta: 2,
          explicacion: "La ira o frustración ante la congestión o las acciones de otros conductores aumenta la impulsividad y puede llevar a conductas agresivas o temerarias.",
          referencia: "Tema 4 – Dominio motivacional y emocional"
        },
        {
          id: "p1t4-004",
          pregunta: "¿Cuál es el objetivo de la formación respecto a la toma de decisiones según el manual?",
          opciones: [
            "Conseguir que el alumno conduzca de forma perfecta y sin errores",
            "Lograr que el alumno piense como un conductor responsable",
            "Automatizar todas las respuestas del conductor",
            "Reducir el tiempo de reacción por debajo de 0,5 segundos"
          ],
          correcta: 1,
          explicacion: "El objetivo no es que el alumno conduzca de forma 'perfecta', sino que piense como un conductor responsable, anticipando, respetando y controlando.",
          referencia: "Tema 4 – Toma de decisiones enseñable"
        },
        {
          id: "p1t4-005",
          pregunta: "¿Cómo puede la tecnología en el vehículo debilitar la toma de decisiones del conductor?",
          opciones: [
            "Haciendo más complejos los sistemas de control",
            "Generando exceso de confianza y reduciendo la atención del conductor",
            "Aumentando la velocidad de circulación recomendada",
            "Eliminando la necesidad de señalizar las maniobras"
          ],
          correcta: 1,
          explicacion: "Las ayudas electrónicas (ADAS, sensores, GPS) también pueden debilitar la toma de decisiones al generar exceso de confianza. El formador debe enseñar que la tecnología asiste, pero no sustituye la atención ni el juicio humano.",
          referencia: "Tema 4 – Toma de decisiones y tecnología"
        },
        {
          id: "p1t4-006",
          pregunta: "¿Cuáles son los tres dominios que determinan el comportamiento del conductor?",
          opciones: [
            "Cognitivo, emocional y físico",
            "Cognitivo, motivacional/emocional y social",
            "Técnico, normativo y actitudinal",
            "Perceptivo, motor y volitivo"
          ],
          correcta: 1,
          explicacion: "El comportamiento del conductor está determinado por tres dimensiones: cognitiva (percepción, atención, razonamiento), emocional (emociones que modifican la percepción) y motivacional y social (valores, creencias, presión social).",
          referencia: "Tema 4 – Principios explicativos"
        },
        {
          id: "p1t4-007",
          pregunta: "¿Qué factor se menciona como el que puede generar 'falsa confianza' en el conductor experimentado?",
          opciones: [
            "El uso de ADAS exclusivamente",
            "La automatización excesiva de las maniobras",
            "La conducción nocturna",
            "La presencia de pasajeros"
          ],
          correcta: 1,
          explicacion: "Cuando el conductor automatiza las maniobras, libera recursos cognitivos, pero el exceso de automatización puede provocar 'falsa confianza' y reducir la vigilancia.",
          referencia: "Tema 4 – Dominio cognitivo"
        },
        {
          id: "p1t4-008",
          pregunta: "¿Cómo influye la presión social en la toma de decisiones de conducción?",
          opciones: [
            "No influye, ya que cada conductor actúa de forma independiente",
            "Puede llevar a imitar conductas temerarias, competir o demostrar habilidad",
            "Solo afecta a conductores menores de 25 años",
            "Mejora siempre la toma de decisiones del conductor"
          ],
          correcta: 1,
          explicacion: "La necesidad de llegar rápido, la presión social o la búsqueda de control influyen en la toma de decisiones, pudiendo llevar a imitar conductas temerarias, competir o demostrar habilidad.",
          referencia: "Tema 4 – Dimensión motivacional"
        },
        {
          id: "p1t4-009",
          pregunta: "¿Qué proceso cognitivo permite al conductor mantener la información temporalmente para actuar?",
          opciones: ["La percepción", "La atención selectiva", "La memoria de trabajo", "El juicio anticipatorio"],
          correcta: 2,
          explicacion: "La memoria de trabajo es el proceso cognitivo que permite mantener la información temporalmente para actuar y es fundamental en la conducción.",
          referencia: "Tema 4 – Dominio cognitivo"
        },
        {
          id: "p1t4-010",
          pregunta: "¿Qué mensaje clave del manual describe la relación entre conducción y responsabilidad?",
          opciones: [
            "'Conducir bien es llegar antes'",
            "'Cada maniobra es una decisión. Y cada decisión, una oportunidad de prevenir'",
            "'La velocidad máxima es siempre la más segura'",
            "'Confía en la tecnología del vehículo'"
          ],
          correcta: 1,
          explicacion: "'Cada maniobra es una decisión. Y cada decisión, una oportunidad de prevenir' es el mensaje clave del Tema 4 para transmitir al aula.",
          referencia: "Tema 4 – Mensaje para el aula"
        },
        {
          id: "p1t4-011",
          pregunta: "¿Cuáles son los factores que influyen en la toma de decisión de conducción mencionados explícitamente en el manual?",
          opciones: [
            "Solo los factores internos del conductor",
            "Fatiga, estrés, alcohol/drogas, distracción, presión social y experiencia",
            "Exclusivamente las condiciones meteorológicas y del firme",
            "Solo el nivel de formación y la antigüedad del permiso"
          ],
          correcta: 1,
          explicacion: "Los factores que condicionan la decisión son: fatiga y sueño, estrés y estados emocionales, consumo de alcohol/drogas/medicamentos, distracción, presión social y experiencia.",
          referencia: "Tema 4 – Factores que influyen"
        },
        {
          id: "p1t4-012",
          pregunta: "¿En qué consiste la técnica pedagógica de 'reforzamiento positivo' en el contexto de la toma de decisiones?",
          opciones: [
            "Premiar económicamente al alumno que conduce bien",
            "Destacar las decisiones correctas del alumno, no solo sus errores",
            "No corregir los errores del alumno para no desmotivarle",
            "Usar recompensas materiales para motivar el aprendizaje"
          ],
          correcta: 1,
          explicacion: "El reforzamiento positivo consiste en destacar las decisiones correctas del alumno, no solo los errores, para potenciar el aprendizaje significativo.",
          referencia: "Tema 4 – Toma de decisiones enseñable"
        },
        {
          id: "p1t4-013",
          pregunta: "Según el manual, ¿de dónde nace la conducción responsable?",
          opciones: [
            "De la potencia del motor del vehículo",
            "De la mente, no del motor",
            "De la normativa de tráfico aplicada correctamente",
            "De los sistemas ADAS del vehículo"
          ],
          correcta: 1,
          explicacion: "Según el Tema 4, 'la conducción responsable nace de la mente, no del motor'. Educar conductores seguros implica enseñar a pensar, sentir y decidir correctamente bajo presión.",
          referencia: "Tema 4 – Reflexión final"
        },
        {
          id: "p1t4-014",
          pregunta: "¿Cuál es la herramienta más efectiva que el formador puede usar para entrenar la anticipación?",
          opciones: [
            "Realizar prácticas avanzadas de velocidad en circuito",
            "Plantear situaciones hipotéticas y simulaciones que forjen el pensamiento anticipatorio",
            "Memorizar el código de circulación en su totalidad",
            "Incrementar las horas de conducción en autovía"
          ],
          correcta: 1,
          explicacion: "Enseñar conducción preventiva requiere plantear situaciones hipotéticas ('¿Qué pasaría si…?'), fomentar la observación crítica del tráfico y pedir al alumno que verbalice sus decisiones.",
          referencia: "Tema 4 / Tema 10 – Anticipación"
        },
        {
          id: "p1t4-015",
          pregunta: "¿Qué técnica de autocontrol emocional al volante menciona el manual para gestionar la ira o el estrés?",
          opciones: [
            "Aumentar la velocidad para liberar la tensión",
            "Respiración, distancia emocional y reencuadre positivo",
            "Detener el vehículo y abandonarlo",
            "Escuchar música a alto volumen"
          ],
          correcta: 1,
          explicacion: "El formador debe ayudar al alumno a aplicar técnicas de autocontrol como la respiración, la distancia emocional y el reencuadre positivo.",
          referencia: "Tema 4 – Dominio emocional"
        }
      ]
    },

    // ─── TEMA 5 ───────────────────────────────────────────────
    {
      id: "p1-t5",
      numero: "Tema 5",
      titulo: "La Distracción como Factor de Risk",
      descripcion: "Tipos de distracción, procesos atencionales, uso del móvil y educación preventiva.",
      preguntas: [
        {
          id: "p1t5-001",
          pregunta: "¿Cuál es la primera causa de siniestralidad vial en España actualmente, según la DGT y la OMS?",
          opciones: ["El exceso de velocidad", "El consumo de alcohol", "La distracción al volante", "La somnolencia"],
          correcta: 2,
          explicacion: "La distracción al volante es actualmente la primera causa de siniestralidad vial en España, presente en más del 30% de los siniestros mortales.",
          referencia: "Tema 5 – Introducción"
        },
        {
          id: "p1t5-002",
          pregunta: "¿Cuántos metros recorre a ciegas un vehículo que viaja a 120 km/h si el conductor mira el móvil durante 5 segundos?",
          opciones: ["100 metros", "Más de 160 metros", "83 metros", "50 metros"],
          correcta: 1,
          explicacion: "Leer un mensaje durante 5 segundos a 120 km/h equivale a recorrer más de 160 metros a ciegas.",
          referencia: "Tema 5 – Tipos de distracción"
        },
        {
          id: "p1t5-003",
          pregunta: "¿Qué tipo de distracción provoca el uso del teléfono móvil, incluso con sistema de manos libres?",
          opciones: ["Solo distracción visual", "Solo distracción física o manual", "Distracción cognitiva principalmente", "Distracción auditiva exclusivamente"],
          correcta: 2,
          explicacion: "Incluso en modo manos libres, el teléfono móvil provoca distracción cognitiva: el cerebro se centra en la conversación y no en la conducción.",
          referencia: "Tema 5 – El móvil: la distracción reina"
        },
        {
          id: "p1t5-004",
          pregunta: "¿En cuánto multiplica el riesgo de siniestro el envío de mensajes de texto conduciendo?",
          opciones: ["Lo multiplica por 4", "Lo multiplica por 10", "Lo multiplica por 23", "Lo multiplica por 6"],
          correcta: 2,
          explicacion: "Según datos de la DGT y la UE, enviar un mensaje de texto multiplica por 23 el riesgo de siniestro.",
          referencia: "Tema 5 – El móvil"
        },
        {
          id: "p1t5-005",
          pregunta: "¿Cuántos metros recorre sin control un vehículo a 100 km/h durante una distracción de 3 segundos?",
          opciones: ["50 metros", "100 metros", "83 metros", "120 metros"],
          correcta: 2,
          explicacion: "Según la DGT, una distracción de apenas tres segundos a 100 km/h equivale a recorrer 83 metros sin control.",
          referencia: "Tema 5 – Efectos de la distracción"
        },
        {
          id: "p1t5-006",
          pregunta: "¿Qué porcentaje de la información que procesa un conductor en la conducción llega a través de la visión?",
          opciones: ["El 60%", "El 70%", "El 50%", "Más del 80%"],
          correcta: 3,
          explicacion: "La percepción visual es el sentido más implicado en la conducción, representando más del 80% de la información procesada.",
          referencia: "Tema 5 – Procesos perceptivos"
        },
        {
          id: "p1t5-007",
          pregunta: "¿Cuál de los siguientes es un tipo de distracción auditiva en la conducción?",
          opciones: [
            "Mirar el teléfono móvil",
            "Comer o beber al volante",
            "Atender a sonidos externos o conversaciones que interfieren la concentración",
            "Pensar en problemas personales"
          ],
          correcta: 2,
          explicacion: "La distracción auditiva consiste en atender a sonidos externos o conversaciones que interfieren la concentración en la conducción.",
          referencia: "Tema 5 – Tipos de distracción"
        },
        {
          id: "p1t5-008",
          pregunta: "¿Qué capacidad atencional permite cambiar el foco rápidamente sin perder información?",
          opciones: ["Atención selectiva", "Atención sostenida", "Atención dividida", "Atención alternante"],
          correcta: 3,
          explicacion: "La atención alternante es la capacidad de cambiar el foco de atención rápidamente sin perder información relevante.",
          referencia: "Tema 5 – Procesos atencionales"
        },
        {
          id: "p1t5-009",
          pregunta: "¿Cómo describe el manual el fenómeno de que el conductor 've pero no nota' algo?",
          opciones: [
            "Como un fallo de la memoria de trabajo",
            "Como el 'efecto túnel' de la velocidad",
            "Como una limitación del campo visual útil que se estrecha con la velocidad",
            "Como resultado de que la mente selecciona: no percibimos todo, solo lo que creemos importante"
          ],
          correcta: 3,
          explicacion: "El formador debe explicar que la mente selecciona: no percibimos todo, sino lo que creemos importante. Un conductor puede 'ver' pero no 'notar' un peatón si su mente está ocupada en otro estímulo.",
          referencia: "Tema 5 – Procesos perceptivos"
        },
        {
          id: "p1t5-010",
          pregunta: "¿Cuál es el objetivo final de la educación preventiva contra la distracción según el manual?",
          opciones: [
            "Penalizar económicamente el uso del móvil al volante",
            "Lograr un cambio cultural: que los alumnos perciban la distracción como inaceptable",
            "Instalar limitadores tecnológicos en todos los vehículos",
            "Reducir exclusivamente el número de accidentes en autovía"
          ],
          correcta: 1,
          explicacion: "El objetivo es lograr un cambio cultural: que los alumnos perciban la distracción como inaceptable, del mismo modo que hoy se percibe conducir ebrio.",
          referencia: "Tema 5 – La educación como antídoto"
        },
        {
          id: "p1t5-011",
          pregunta: "¿Cuál de los siguientes NO es un factor de distracción mencionado en el manual?",
          opciones: ["El uso del navegador y pantallas táctiles", "Comer o beber al volante", "El uso correcto del sistema ABS", "La fatiga y somnolencia"],
          correcta: 2,
          explicacion: "El uso correcto del sistema ABS es un elemento de seguridad activa, no un factor de distracción. Los demás sí son factores de distracción explícitamente mencionados.",
          referencia: "Tema 5 – Principales factores"
        },
        {
          id: "p1t5-012",
          pregunta: "¿Qué fenómeno perceptivo reduce el campo visual útil del conductor a alta velocidad?",
          opciones: ["El efecto túnel", "La visión borrosa", "La ambliopía", "El deslumbramiento"],
          correcta: 0,
          explicacion: "El 'efecto túnel' es el fenómeno por el que el campo visual útil del conductor se estrecha progresivamente a medida que aumenta la velocidad.",
          referencia: "Tema 5 – Procesos perceptivos"
        },
        {
          id: "p1t5-013",
          pregunta: "¿Qué estrategia educativa recomienda el manual específicamente para demostrar en el aula los límites de la atención?",
          opciones: [
            "Mostrar estadísticas de siniestralidad en pantalla",
            "Simulación controlada pidiendo al alumno que lea una frase mientras observa una imagen de tráfico durante 5 segundos",
            "Realizar una prueba de velocidad de reacción con cronómetro",
            "Leer el artículo legal que regula el uso del móvil"
          ],
          correcta: 1,
          explicacion: "El manual recomienda simular una 'distracción controlada': pedir al alumnado que lea una frase o resuelva una operación mientras observa una imagen de tráfico durante 5 segundos, para evidenciar cuántos elementos no vieron.",
          referencia: "Tema 5 – El móvil"
        },
        {
          id: "p1t5-014",
          pregunta: "¿En qué porcentaje de siniestros mortales se estima que está presente la distracción?",
          opciones: ["En más del 10%", "En más del 20%", "En más del 30%", "En más del 50%"],
          correcta: 2,
          explicacion: "La distracción está presente en más del 30% de los siniestros mortales según datos de la DGT.",
          referencia: "Tema 5 – Introducción"
        },
        {
          id: "p1t5-015",
          pregunta: "¿Cuánto multiplica el riesgo de siniestro usar el teléfono móvil al volante (sin manos libres)?",
          opciones: ["Lo multiplica por 2", "Lo multiplica por 4", "Lo multiplica por 8", "Lo multiplica por 12"],
          correcta: 1,
          explicacion: "Usar el móvil sin manos libres multiplica por 4 el riesgo de siniestro según la DGT y la UE.",
          referencia: "Tema 5 – El móvil"
        }
      ]
    },

    // ─── TEMA 6 ───────────────────────────────────────────────
    {
      id: "p1-t6",
      numero: "Tema 6",
      titulo: "Nuevas Formas de Movilidad",
      descripcion: "VMP, movilidad sostenible, marco normativo y convivencia vial.",
      preguntas: [
        {
          id: "p1t6-001",
          pregunta: "¿Qué velocidad máxima define a un Vehículo de Movilidad Personal (VMP) según la DGT (2021)?",
          opciones: ["Entre 6 y 35 km/h", "Entre 6 y 25 km/h", "Hasta 45 km/h", "Entre 10 y 30 km/h"],
          correcta: 1,
          explicacion: "Un VMP se define como vehículo de una o más ruedas, propulsado exclusivamente por motor eléctrico, con velocidad máxima entre 6 y 25 km/h, diseñado para transportar una sola persona.",
          referencia: "Tema 6 – VMP"
        },
        {
          id: "p1t6-002",
          pregunta: "¿Cuál es la norma principal que regula la velocidad máxima en vías urbanas de un solo carril por sentido?",
          opciones: ["50 km/h", "40 km/h", "30 km/h", "20 km/h"],
          correcta: 2,
          explicacion: "El Reglamento General de Circulación (modificado por RD 970/2020) establece 30 km/h como velocidad máxima en vías urbanas de un solo carril por sentido.",
          referencia: "Tema 6 – Marco normativo"
        },
        {
          id: "p1t6-003",
          pregunta: "¿Cuál es la principal prohibición de circulación aplicable a los VMP?",
          opciones: [
            "Circular por vías de acceso rápido",
            "Circular por aceras y zonas peatonales",
            "Circular sin luces durante el día",
            "Circular a más de 20 km/h en zona escolar"
          ],
          correcta: 1,
          explicacion: "A los VMP les está prohibido circular por aceras y zonas peatonales, siendo obligatorio su uso correcto en las vías habilitadas.",
          referencia: "Tema 6 – Normas VMP"
        },
        {
          id: "p1t6-004",
          pregunta: "¿Cuál de los siguientes es un principio de la nueva movilidad urbana sostenible?",
          opciones: [
            "Priorizar la velocidad y la fluidez rodada",
            "Reducir el protagonismo del coche privado y fomentar medios más eficientes",
            "Construir más aparcamientos en superficie",
            "Eliminar el transporte público para reducir el gasto"
          ],
          correcta: 1,
          explicacion: "Las ciudades del siglo XXI se están rediseñando para priorizar la seguridad, la sostenibilidad y la calidad de vida, lo que implica reducir el protagonismo del coche privado.",
          referencia: "Tema 6 – Nueva movilidad"
        },
        {
          id: "p1t6-005",
          pregunta: "¿Cuál de los siguientes elementos es obligatorio para los usuarios de VMP?",
          opciones: [
            "Seguro de responsabilidad civil en todos los casos",
            "Casco y elementos reflectantes",
            "Licencia de conducción de tipo AM",
            "Chaleco de alta visibilidad en todo momento"
          ],
          correcta: 1,
          explicacion: "Para los usuarios de VMP es obligatorio el uso del casco y de elementos reflectantes.",
          referencia: "Tema 6 – Normas VMP"
        },
        {
          id: "p1t6-006",
          pregunta: "¿Cuál es el mensaje pedagógico del manual sobre los VMP?",
          opciones: [
            "Los VMP son juguetes sin riesgo para adultos",
            "Los VMP son vehículos que deben circular con responsabilidad, no son juguetes",
            "Los VMP son más seguros que las bicicletas",
            "Los VMP solo deben usarse en carriles bici"
          ],
          correcta: 1,
          explicacion: "El profesorado debe transmitir que los VMP no son juguetes, sino vehículos que deben circular con responsabilidad, cumpliendo la normativa aplicable.",
          referencia: "Tema 6 – VMP"
        },
        {
          id: "p1t6-007",
          pregunta: "¿Cuáles son los cuatro ejes de la nueva movilidad urbana sostenible mencionados en el manual?",
          opciones: [
            "Velocidad, eficiencia, comodidad y legislación",
            "Sostenibilidad ambiental, eficiencia, inclusión y seguridad compartida",
            "Tecnología, innovación, diseño y competitividad",
            "Movilidad eléctrica, automatización, conectividad y acceso"
          ],
          correcta: 1,
          explicacion: "Los cuatro ejes de la nueva movilidad son: 1) Sostenibilidad ambiental, 2) Eficiencia y conectividad, 3) Inclusión y accesibilidad, 4) Seguridad vial compartida.",
          referencia: "Tema 6 – Nueva movilidad en ciudades"
        },
        {
          id: "p1t6-008",
          pregunta: "En la conducción sostenible, ¿qué principio de conducción eficiente menciona el manual?",
          opciones: [
            "Acelerar rápidamente para evitar atascos",
            "Anticipación y suavidad en las maniobras, uso adecuado de marchas",
            "Mantener siempre la velocidad máxima permitida",
            "No usar el freno motor para ahorrar combustible"
          ],
          correcta: 1,
          explicacion: "Los principios de conducción eficiente incluyen anticipación y suavidad en las maniobras, uso adecuado de marchas y velocidad constante, evitando frenadas y aceleraciones bruscas.",
          referencia: "Tema 6 – Conducción eficiente"
        },
        {
          id: "p1t6-009",
          pregunta: "¿Cuál es el Real Decreto que modifica el Reglamento General de Circulación incorporando la nueva normativa de VMP y velocidades urbanas?",
          opciones: ["RD 818/2009", "RD 1428/2003 modificado por RD 970/2020", "RD 2822/1998", "RD 6/2015"],
          correcta: 1,
          explicacion: "El RD 1428/2003 (Reglamento General de Circulación), modificado por RD 970/2020, incorpora las novedades sobre VMP, ZBE y velocidades máximas urbanas.",
          referencia: "Tema 6 – Marco normativo"
        },
        {
          id: "p1t6-010",
          pregunta: "¿Cuáles son los cuatro principios de convivencia vial en el espacio compartido?",
          opciones: [
            "Velocidad, prioridad, señalización y cortesía",
            "Cooperación, empatía, previsión y comunicación",
            "Respeto, obediencia, seguridad y eficiencia",
            "Igualdad, libertad, fraternidad y responsabilidad"
          ],
          correcta: 1,
          explicacion: "Los principios de convivencia vial en el espacio compartido son: cooperación, empatía, previsión y comunicación.",
          referencia: "Tema 6 – Calzada como espacio compartido"
        },
        {
          id: "p1t6-011",
          pregunta: "¿Qué problema urbano ha intensificado el auge del comercio electrónico según el manual?",
          opciones: [
            "El aumento de la velocidad media en vías urbanas",
            "La saturación de calzadas y aceras por vehículos de reparto",
            "La reducción del transporte público",
            "El incremento de zonas peatonales sin regulación"
          ],
          correcta: 1,
          explicacion: "El auge del comercio electrónico ha incrementado notablemente el número de vehículos de reparto en zonas urbanas, causando saturación de calzadas y aceras e incremento de siniestros con peatones y ciclistas.",
          referencia: "Tema 6 – Distribución urbana de mercancías"
        },
        {
          id: "p1t6-012",
          pregunta: "¿Puede un usuario de VMP utilizar auriculares durante la circulación?",
          opciones: [
            "Sí, si solo usa uno",
            "Sí, si usa un sistema de manos libres homologado",
            "No, está prohibido el uso de auriculares",
            "Sí, siempre que circule por carril bici"
          ],
          correcta: 2,
          explicacion: "Está prohibido el uso de auriculares en los VMP. El formador debe conocer la normativa local y transmitirla, destacando que los VMP son vehículos que deben circular con responsabilidad.",
          referencia: "Tema 6 – Normas VMP"
        },
        {
          id: "p1t6-013",
          pregunta: "¿Cuál es el mensaje pedagógico clave del Tema 6 respecto al concepto de vía pública?",
          opciones: [
            "La vía pública pertenece a los vehículos de motor con prioridad",
            "El futuro de la movilidad está en más velocidad y más eficiencia rodada",
            "La vía pública debe concebirse como espacio de tránsito, no de convivencia",
            "La vía pública es un espacio de convivencia donde todos comparten responsabilidad"
          ],
          correcta: 3,
          explicacion: "La nueva movilidad obliga a cambiar la manera de entender la vía pública: de espacio de tránsito a espacio de convivencia, donde todos forman parte de un sistema común.",
          referencia: "Tema 6 – Reflexión final"
        }
      ]
    },

    // ─── TEMA 7 ───────────────────────────────────────────────
    {
      id: "p1-t7",
      numero: "Tema 7",
      titulo: "Los Usuarios Vulnerables de la Vía",
      descripcion: "Tipos de usuarios vulnerables, zona de incertidumbre, estrategias preventivas.",
      preguntas: [
        {
          id: "p1t7-001",
          pregunta: "¿Qué porcentaje de las víctimas mortales en zona urbana son usuarios vulnerables según la DGT (2024)?",
          opciones: ["Más del 30%", "Más del 40%", "Más del 50%", "Más del 70%"],
          correcta: 2,
          explicacion: "Según cifras DGT 2024, más del 50% de las víctimas mortales en zona urbana son usuarios vulnerables (peatones, ciclistas, motoristas, etc.).",
          referencia: "Tema 7 – Cifras de siniestralidad"
        },
        {
          id: "p1t7-002",
          pregunta: "¿Cuál es la probabilidad de supervivencia de un peatón atropellado a 30 km/h?",
          opciones: ["El 40%", "El 60%", "El 90%", "El 50%"],
          correcta: 2,
          explicacion: "A 30 km/h, un peatón atropellado sobrevive en el 90% de los casos. A 50 km/h, la probabilidad de supervivencia cae por debajo del 20%.",
          referencia: "Tema 7 – Cifras clave"
        },
        {
          id: "p1t7-003",
          pregunta: "¿Qué es la 'zona de incertidumbre' en el contexto de los usuarios vulnerables?",
          opciones: [
            "Una zona de la vía sin señalización adecuada",
            "El espacio en que la conducta de los usuarios vulnerables deja de ser previsible",
            "Un carril exclusivo para ciclistas y motoristas",
            "La zona próxima a los pasos de peatones sin semáforo"
          ],
          correcta: 1,
          explicacion: "La zona de incertidumbre es el espacio en el que la conducta de los usuarios más vulnerables deja de ser previsible, lo que exige al conductor mayor atención, prudencia y empatía.",
          referencia: "Tema 7 – Zona de incertidumbre"
        },
        {
          id: "p1t7-004",
          pregunta: "¿Cuál es la distancia lateral mínima exigida al adelantar a un ciclista?",
          opciones: ["0,5 metros", "1 metro", "1,5 metros", "2 metros"],
          correcta: 2,
          explicacion: "Al adelantar a un ciclista se debe mantener una distancia lateral mínima de 1,5 metros, pudiendo invadir el carril contiguo en los casos establecidos reglamentariamente.",
          referencia: "Tema 7 – Los ciclistas"
        },
        {
          id: "p1t7-005",
          pregunta: "¿Cuáles son los grupos considerados usuarios vulnerables de la vía?",
          opciones: [
            "Solo peatones y ciclistas",
            "Peatones, ciclistas, motoristas, usuarios de VMP, personas mayores y menores",
            "Conductores de turismos y furgonetas",
            "Todos los usuarios mayores de 65 años"
          ],
          correcta: 1,
          explicacion: "Los grupos principales de usuarios vulnerables son: peatones, ciclistas, motoristas, conductores de VMP, personas mayores y niños/jóvenes.",
          referencia: "Tema 7 – Concepto y grupos"
        },
        {
          id: "p1t7-006",
          pregunta: "¿Cuál es la causa principal de lesiones en menores durante un siniestro vial?",
          opciones: [
            "La velocidad excesiva del vehículo",
            "El error adulto respecto al uso de sistemas de retención infantil",
            "La circulación nocturna",
            "Las malas condiciones del firme"
          ],
          correcta: 1,
          explicacion: "En los menores, el error adulto (padres, cuidadores) en el uso o instalación de los Sistemas de Retención Infantil (SRI) es el principal factor causal de lesiones.",
          referencia: "Tema 7 – Niños y jóvenes"
        },
        {
          id: "p1t7-007",
          pregunta: "¿Cuál es la estrategia educativa clave para proteger a los usuarios vulnerables según el manual?",
          opciones: [
            "Prohibirles el acceso a vías de alta velocidad",
            "Instalar barreras físicas de separación entre tipos de usuarios",
            "La empatía y la anticipación: enseñar a ponerse en el lugar del otro",
            "Requerir a los ciclistas que usen chaleco reflectante"
          ],
          correcta: 2,
          explicacion: "La empatía es el elemento pedagógico clave: enseñar a ponerse en el lugar del otro cambia la manera de conducir y es la herramienta más poderosa para proteger a los vulnerables.",
          referencia: "Tema 7 – Estrategias"
        },
        {
          id: "p1t7-008",
          pregunta: "¿Qué características cognitivas hacen especialmente vulnerables a los niños en la vía pública?",
          opciones: [
            "Su tamaño físico les impide ver bien los semáforos",
            "No han desarrollado plenamente sus capacidades cognitivas, perceptivas y motoras",
            "Preferentemente van peatones sin acompañante adulto",
            "Tienen mayor tiempo de reacción que los adultos"
          ],
          correcta: 1,
          explicacion: "Los menores son especialmente vulnerables porque aún no han desarrollado plenamente sus capacidades cognitivas, perceptivas y motoras; su campo visual, capacidad de anticipación y juicio del peligro son limitados.",
          referencia: "Tema 7 – Niños y jóvenes"
        },
        {
          id: "p1t7-009",
          pregunta: "¿Cuál es el rol del profesorado vial respecto a los usuarios vulnerables según el manual?",
          opciones: [
            "Centrarse exclusivamente en la habilidad técnica del alumno",
            "Actuar como educador social que moldea comportamientos de respeto y convivencia",
            "Remitir el tema de vulnerables a los organismos de tráfico",
            "Evitar datos estadísticos para no generar ansiedad"
          ],
          correcta: 1,
          explicacion: "El profesor vial es un educador social que moldea comportamientos de respeto y convivencia, con la misión de enseñar no solo a conducir, sino a convivir en la vía pública.",
          referencia: "Tema 7 – Rol educativo"
        },
        {
          id: "p1t7-010",
          pregunta: "¿Cuál es el factor que los motoristas a menudo subestiman según el manual?",
          opciones: ["La velocidad permitida", "El riesgo de su actividad", "El mantenimiento del vehículo", "La distancia de seguridad"],
          correcta: 1,
          explicacion: "Los motoristas combinan alta exposición y baja protección. A menudo su percepción del riesgo es baja y su comportamiento más arriesgado, subestimando el riesgo de su actividad.",
          referencia: "Tema 7 – Conductores de motocicleta"
        },
        {
          id: "p1t7-011",
          pregunta: "¿Cuál de las siguientes medidas es obligatoria para los SRI (Sistemas de Retención Infantil)?",
          opciones: [
            "Usarse hasta que el niño cumpla 12 años",
            "Usarse hasta que el menor alcance 1,35 m de altura",
            "Usarse hasta que el menor pese más de 36 kg",
            "Usarse solo en trayectos de más de 50 km"
          ],
          correcta: 1,
          explicacion: "El uso del SRI es obligatorio hasta que el menor alcanza 1,35 m de altura.",
          referencia: "Tema 7 – Niños y jóvenes"
        },
        {
          id: "p1t7-002b",
          pregunta: "¿Cuál es el principio educativo que resume la protección de los usuarios vulnerables en el manual?",
          opciones: [
            "'Quien más puede, más debe cuidar'",
            "'La seguridad vial es solo responsabilidad del Estado'",
            "'La velocidad garantiza la seguridad'",
            "'La tecnología protege a todos los usuarios'"
          ],
          correcta: 0,
          explicacion: "El manual subraya el principio de 'quien más puede, más debe cuidar' como eje de la conducción responsable y de la protección de los usuarios más vulnerables.",
          referencia: "Tema 7 – Claves didácticas"
        }
      ]
    },

    // ─── TEMA 8 ───────────────────────────────────────────────
    {
      id: "p1-t8",
      numero: "Tema 8",
      titulo: "Los Factores de Riesgo",
      descripcion: "Velocidad, alcohol, drogas, somnolencia, fatiga, estrés y distracción.",
      preguntas: [
        {
          id: "p1t8-001",
          pregunta: "¿Cuáles son los siete factores de riesgo prioritarios identificados por la DGT y la OMS?",
          opciones: [
            "Velocidad, alcohol, drogas, somnolencia, fatiga, estrés y distracción",
            "Velocidad, lluvia, noche, cansancio, alcohol, drogas y distracciones",
            "Alcohol, drogas, exceso de velocidad, falta de mantenimiento, neumáticos, señalización y fatiga",
            "Distracción, somnolencia, agresividad, exceso de carga, velocidad, alcohol y curvas"
          ],
          correcta: 0,
          explicacion: "La DGT y la OMS identifican siete factores prioritarios: velocidad, alcohol y drogas, enfermedades y medicamentos, somnolencia, fatiga, estrés y distracción.",
          referencia: "Tema 8 – Introducción"
        },
        {
          id: "p1t8-002",
          pregunta: "¿A partir de qué tasa de alcohol en sangre ya se produce un deterioro perceptible de las capacidades sensoriales y cognitivas?",
          opciones: ["0,5 g/l", "0,3 g/l", "0,8 g/l", "0,2 g/l"],
          correcta: 1,
          explicacion: "A partir de 0,3 g/l de alcohol en sangre ya se produce un deterioro perceptible de las capacidades sensoriales y cognitivas.",
          referencia: "Tema 8 – El alcohol"
        },
        {
          id: "p1t8-003",
          pregunta: "¿Cuál es el límite legal de alcoholemia general para conductores en España?",
          opciones: ["0,3 g/l", "0,5 g/l (0,25 mg/l en aire)", "0,8 g/l", "1,0 g/l"],
          correcta: 1,
          explicacion: "El límite legal general es de 0,5 g/l en sangre (0,25 mg/l en aire espirado), aunque la única tasa realmente segura es 0,0.",
          referencia: "Tema 8 – El alcohol"
        },
        {
          id: "p1t8-004",
          pregunta: "¿Cuál de los siguientes efectos produce el cannabis en la conducción?",
          opciones: [
            "Aumento de la velocidad de reacción y mayor concentración",
            "Distorsiones sensoriales, aumento del tiempo de reacción y efecto residual prolongado",
            "Reducción de la impulsividad y mayor atención",
            "Mejora del equilibrio y coordinación motora"
          ],
          correcta: 1,
          explicacion: "El cannabis provoca distorsiones sensoriales (visión borrosa, alteración de percepción del tiempo y espacio), aumenta el tiempo de reacción y su efecto residual puede durar varias horas.",
          referencia: "Tema 8 – Drogas: cannabis"
        },
        {
          id: "p1t8-005",
          pregunta: "¿Cuál es el efecto inicial de la cocaína en la conducción?",
          opciones: [
            "Somnolencia y reducción de reflejos",
            "Euforia, exceso de confianza, agresividad y conductas temerarias",
            "Reducción de la velocidad de reacción",
            "Visión borrosa y pérdida de control lateral"
          ],
          correcta: 1,
          explicacion: "La cocaína estimula el sistema nervioso central generando euforia, exceso de confianza y agresividad, produciendo hiperactividad, impulsividad y conductas temerarias.",
          referencia: "Tema 8 – Drogas: cocaína"
        },
        {
          id: "p1t8-006",
          pregunta: "¿Qué síntoma previo a la somnolencia severa al volante debe reconocer el conductor?",
          opciones: [
            "Visión borrosa y náuseas",
            "Parpadeo constante, dificultad para mantener la vista enfocada, invasión de carril",
            "Dolor de cabeza intenso",
            "Temblor en las manos"
          ],
          correcta: 1,
          explicacion: "Los síntomas previos a la somnolencia severa incluyen: parpadeo constante, dificultad para mantener la vista enfocada, cambios de velocidad sin razón e invasión de carril.",
          referencia: "Tema 8 – La somnolencia"
        },
        {
          id: "p1t8-007",
          pregunta: "¿Con qué frecuencia recomienda el manual realizar paradas en viajes largos para prevenir la fatiga?",
          opciones: ["Cada 3 horas o 200 km", "Cada 2 horas o 150 km", "Cada hora o 100 km", "Cada 4 horas o 300 km"],
          correcta: 1,
          explicacion: "Para prevenir la somnolencia, el manual recomienda parar cada 2 horas o 150 km.",
          referencia: "Tema 8 – Somnolencia: prevención"
        },
        {
          id: "p1t8-008",
          pregunta: "¿Cómo se identifica visualmente en los medicamentos el riesgo de afectar a la conducción?",
          opciones: [
            "Con una etiqueta roja en la caja",
            "Con el pictograma del triángulo rojo con un coche",
            "Con una línea amarilla en el prospecto",
            "Con el símbolo universal de la calavera"
          ],
          correcta: 1,
          explicacion: "Los medicamentos que pueden afectar a la conducción se identifican con el pictograma del triángulo rojo con un coche (volante tachado).",
          referencia: "Tema 8 – Enfermedades y medicamentos"
        },
        {
          id: "p1t8-009",
          pregunta: "¿Cuál es el efecto del estrés en la conducción según el manual?",
          opciones: [
            "Mejora la atención y concentración del conductor",
            "Genera impulsividad, maniobras bruscas y menor tolerancia al error ajeno",
            "Reduce la velocidad de circulación del conductor estresado",
            "No tiene efectos relevantes en la conducción"
          ],
          correcta: 1,
          explicacion: "El estrés genera impulsividad, maniobras bruscas y menor tolerancia a los errores ajenos, siendo sus causas comunes el tráfico denso, la presión de tiempo y los problemas personales.",
          referencia: "Tema 8 – El estrés"
        },
        {
          id: "p1t8-010",
          pregunta: "¿Qué combinación de sustancias describen como especialmente peligrosa en el manual?",
          opciones: [
            "Cafeína + antihistamínicos",
            "Alcohol + cannabis (que genera profunda alteración del tiempo de reacción)",
            "Nicotina + ansiolíticos",
            "Alcohol + vitaminas"
          ],
          correcta: 1,
          explicacion: "El manual destaca que la combinación alcohol + cannabis genera una alteración profunda del tiempo de reacción; y alcohol + cocaína potencia la impulsividad y puede provocar fallos cardíacos.",
          referencia: "Tema 8 – Riesgo combinado"
        },
        {
          id: "p1t8-011",
          pregunta: "¿Cuáles son los factores meteorológicos del entorno vial que mencionan explícitamente los factores ambientales?",
          opciones: [
            "El sol y el calor únicamente",
            "La lluvia, la niebla, el hielo y el viento",
            "Solo la niebla y la lluvia",
            "El granizo y la nieve"
          ],
          correcta: 1,
          explicacion: "Los factores meteorológicos mencionados como factores ambientales de riesgo son: lluvia, niebla, hielo y viento.",
          referencia: "Tema 2 y 8 – Factores ambientales"
        },
        {
          id: "p1t8-012",
          pregunta: "¿En qué contexto son especialmente vulnerables los conductores profesionales según el Tema 8?",
          opciones: [
            "En trayectos urbanos por la alta densidad de tráfico",
            "Por la fatiga, la presión del tiempo y la exposición prolongada",
            "Por conducir vehículos de gran tonelaje",
            "Por tener permisos de conducción más complejos"
          ],
          correcta: 1,
          explicacion: "Los conductores profesionales son especialmente vulnerables por la fatiga, la presión del tiempo y la exposición prolongada en su jornada laboral.",
          referencia: "Tema 8 – Distracción y conducción laboral"
        },
        {
          id: "p1t8-013",
          pregunta: "¿Cuál es la combinación de factores de riesgo más frecuente en los siniestros según el manual?",
          opciones: [
            "Velocidad + lluvia",
            "Velocidad + distracción / Fatiga + estrés / Alcohol + exceso de confianza",
            "Somnolencia + falta de señalización",
            "Cannabis + exceso de velocidad únicamente"
          ],
          correcta: 1,
          explicacion: "Las combinaciones más frecuentes en los siniestros son: velocidad + distracción, fatiga + estrés, alcohol + exceso de confianza, y somnolencia + monotonía de la vía.",
          referencia: "Tema 8 – Interacción entre factores"
        },
        {
          id: "p1t8-014",
          pregunta: "¿Qué pedagogía recomienda el manual para abordar el alcohol y las drogas en el aula?",
          opciones: [
            "Lectura del código penal aplicable a la conducción bajo efectos",
            "Perspectiva científica, emocional y social con recursos como gafas de simulación y debate ético",
            "Solo estadísticas de siniestralidad por alcohol",
            "Referencia exclusiva a las multas y sanciones penales"
          ],
          correcta: 1,
          explicacion: "El formador debe abordar el alcohol y drogas desde perspectiva científica, emocional y social: explicar mecanismos cerebrales, usar testimonios reales, realizar simulaciones y promover debate ético.",
          referencia: "Tema 8 – Estrategia docente"
        },
        {
          id: "p1t8-015",
          pregunta: "¿Qué tipo de enfermedades pueden suponer un riesgo específico de pérdida de consciencia al volante?",
          opciones: [
            "La hipertensión y el colesterol",
            "La diabetes (riesgo de hipoglucemia) y la epilepsia (crisis imprevisibles)",
            "El asma y las alergias",
            "La artritis y los problemas musculares"
          ],
          correcta: 1,
          explicacion: "La diabetes conlleva riesgo de hipoglucemia (pérdida de consciencia) y la epilepsia puede presentar crisis imprevisibles, lo que supone restricción del permiso en algunos casos.",
          referencia: "Tema 8 – Enfermedades y medicamentos"
        }
      ]
    },

    // ─── TEMA 9 ───────────────────────────────────────────────
    {
      id: "p1-t9",
      numero: "Tema 9",
      titulo: "Seguridad Activa y Pasiva",
      descripcion: "Sistemas de seguridad del vehículo, ADAS, mantenimiento y prevención.",
      preguntas: [
        {
          id: "p1t9-001",
          pregunta: "¿Cuál es la misión de la seguridad activa en un vehículo?",
          opciones: [
            "Proteger a los ocupantes durante el impacto",
            "Prevenir el siniestro aumentando estabilidad, adherencia, visibilidad y control",
            "Absorber la energía del impacto",
            "Activar los airbags en caso de colisión"
          ],
          correcta: 1,
          explicacion: "La seguridad activa es el conjunto de sistemas que ayudan a evitar el siniestro, aumentando la estabilidad, la adherencia, la visibilidad y el control. Su misión es prevenir el siniestro.",
          referencia: "Tema 9 – Concepto"
        },
        {
          id: "p1t9-002",
          pregunta: "¿Qué sistema de frenada evita el bloqueo de ruedas en una frenada de emergencia?",
          opciones: ["ESP", "EBD", "ABS", "BAS"],
          correcta: 2,
          explicacion: "El ABS (Antilock Braking System) evita el bloqueo de ruedas en frenadas de emergencia, manteniendo la capacidad de dirección del vehículo.",
          referencia: "Tema 9 – Seguridad activa: frenos"
        },
        {
          id: "p1t9-003",
          pregunta: "¿En cuánto reduce el ESP los siniestros por pérdida de control?",
          opciones: ["Un 40%", "Un 60%", "Hasta un 80%", "Un 50%"],
          correcta: 2,
          explicacion: "El ESP (Electronic Stability Program) reduce hasta un 80% los siniestros por pérdida de control al corregir derrapes aplicando frenado selectivo.",
          referencia: "Tema 9 – Seguridad activa: ESP"
        },
        {
          id: "p1t9-004",
          pregunta: "¿Cuál es el principal elemento de seguridad pasiva y cuánto reduce el riesgo de muerte?",
          opciones: [
            "El airbag, reduce el riesgo un 60%",
            "El cinturón de seguridad, reduce el riesgo a la mitad",
            "La carrocería estructurada, reduce el riesgo un 70%",
            "El SRI, reduce el riesgo un 80%"
          ],
          correcta: 1,
          explicacion: "El cinturón de seguridad es el principal elemento de seguridad pasiva y reduce a la mitad el riesgo de muerte o lesión grave.",
          referencia: "Tema 9 – Seguridad pasiva: cinturón"
        },
        {
          id: "p1t9-005",
          pregunta: "¿Cuándo se activan los airbags en un vehículo?",
          opciones: [
            "Cuando se supera una velocidad determinada",
            "En milisegundos al detectar una desaceleración brusca (colisión)",
            "Solo tras activación manual del conductor",
            "Cuando el cinturón no está abrochado"
          ],
          correcta: 1,
          explicacion: "Los airbags se activan en milisegundos al detectar una desaceleración brusca propia de una colisión. Siempre complementan al cinturón y nunca lo sustituyen.",
          referencia: "Tema 9 – Seguridad pasiva: airbags"
        },
        {
          id: "p1t9-006",
          pregunta: "¿En cuánto reduce el casco el riesgo de muerte para los motoristas?",
          opciones: ["Un 20%", "Un 30%", "Un 40%", "Un 60%"],
          correcta: 2,
          explicacion: "El casco reduce el riesgo de muerte en un 40% para los motoristas.",
          referencia: "Tema 9 – Seguridad pasiva: casco"
        },
        {
          id: "p1t9-007",
          pregunta: "¿Cuál es el concepto de 'seguridad preventiva' según el Manual de Profesores de Formación Vial de la DGT?",
          opciones: [
            "Solo los airbags y cinturones de seguridad pasiva",
            "Cualquier sistema que ayude al conductor a mantener su atención o facilite su respuesta ante situaciones críticas",
            "El conjunto de medidas legales que regulan la conducción",
            "Los elementos de la vía diseñados para minimizar impactos"
          ],
          correcta: 1,
          explicacion: "La seguridad preventiva se define como 'Cualquier sistema que ayude al conductor a mantener su atención en la conducción o facilite su respuesta ante una determinada situación crítica'.",
          referencia: "Tema 9 – Seguridad preventiva"
        },
        {
          id: "p1t9-008",
          pregunta: "¿Cuáles son los tres pilares de la seguridad vial moderna mencionados en el Tema 9?",
          opciones: [
            "Legislación, sanción y educación",
            "Factor humano, vehículo y entorno vial",
            "Prevención, protección y asistencia",
            "Conductor, vía y señalización"
          ],
          correcta: 1,
          explicacion: "La seguridad vial moderna se apoya en tres pilares inseparables: el factor humano (responsable de la mayoría de siniestros), el vehículo (con sistemas preventivos) y el entorno vial (diseñado para minimizar el riesgo).",
          referencia: "Tema 9 – Introducción"
        },
        {
          id: "p1t9-009",
          pregunta: "¿Cómo se debe ajustar el reposacabezas para ser efectivo?",
          opciones: [
            "A nivel del cuello, para máxima comodidad",
            "A la altura de la cabeza, no del cuello",
            "Inclinado hacia delante",
            "A la altura de los hombros"
          ],
          correcta: 1,
          explicacion: "El reposacabezas debe ajustarse a la altura y distancia de la cabeza, no del cuello, para ser efectivo como elemento de prevención del latigazo cervical.",
          referencia: "Tema 9 – Seguridad pasiva: reposacabezas"
        },
        {
          id: "p1t9-010",
          pregunta: "¿Qué enseña el formador sobre los ADAS según el manual?",
          opciones: [
            "Que los ADAS hacen innecesaria la atención del conductor",
            "Que los ADAS son ayudas, no sustitutos de la atención y el juicio humano",
            "Que los ADAS solo funcionan en autovías",
            "Que los ADAS eliminan completamente el riesgo de siniestro"
          ],
          correcta: 1,
          explicacion: "El formador debe enseñar que los ADAS son ayudas, no sustitutos. La educación en su uso responsable es clave para evitar la sobreconfianza tecnológica.",
          referencia: "Tema 9 – ADAS"
        },
        {
          id: "p1t9-011",
          pregunta: "¿Cuál es la enseñanza correcta sobre la técnica de frenado cuando el vehículo tiene ABS?",
          opciones: [
            "Pisar el freno de forma intermitente (bombeando)",
            "Pisar y mantener la presión máxima en el freno (pisar y mantener)",
            "Accionar el freno de mano junto con el freno de pie",
            "Reducir primero la marcha antes de frenar"
          ],
          correcta: 1,
          explicacion: "Con ABS, la técnica correcta es 'pisar y mantener' la presión máxima, dejando que el sistema electrónico gestione el antibloqueo.",
          referencia: "Tema 9 – ABS: técnica de frenado"
        },
        {
          id: "p1t9-012",
          pregunta: "¿Cuál es la función del BAS (Asistencia a la frenada)?",
          opciones: [
            "Distribuir la fuerza de frenado entre ejes",
            "Aplicar la presión máxima de frenado automáticamente en emergencias",
            "Evitar el bloqueo de ruedas",
            "Controlar la tracción de las ruedas motrices"
          ],
          correcta: 1,
          explicacion: "El BAS (Brake Assist System) aplica automáticamente la presión máxima de frenado en situaciones de emergencia cuando detecta que el conductor frena con urgencia pero sin presión suficiente.",
          referencia: "Tema 9 – Seguridad activa: frenos"
        },
        {
          id: "p1t9-013",
          pregunta: "¿Hasta qué altura deben usarse los SRI (Sistemas de Retención Infantil) según el manual?",
          opciones: ["Hasta los 12 años de edad", "Hasta 1,35 m de altura del menor", "Hasta los 10 años o 36 kg", "Hasta 1,20 m de altura"],
          correcta: 1,
          explicacion: "El SRI es fundamental para menores hasta 1,35 m de altura. El mal uso o instalación incorrecta anula su eficacia.",
          referencia: "Tema 9 – Seguridad pasiva: SRI"
        }
      ]
    },

    // ─── TEMA 10 ──────────────────────────────────────────────
    {
      id: "p1-t10",
      numero: "Tema 10",
      titulo: "La Conducción Preventiva",
      descripcion: "Principios de conducción preventiva, anticipación y responsabilidad compartida.",
      preguntas: [
        {
          id: "p1t10-001",
          pregunta: "¿Cuál es la diferencia fundamental entre conducción defensiva y conducción preventiva?",
          opciones: [
            "La defensiva es para autopistas y la preventiva para ciudad",
            "La defensiva reacciona ante el error ajeno; la preventiva se anticipa al error antes de que ocurra",
            "La preventiva es más agresiva que la defensiva",
            "No existe diferencia, son términos sinónimos"
          ],
          correcta: 1,
          explicacion: "La conducción defensiva reacciona ante el error ajeno, mientras que la preventiva se anticipa al error antes de que ocurra, gestionando de forma proactiva los riesgos.",
          referencia: "Tema 10 – Defensiva vs. Preventiva"
        },
        {
          id: "p1t10-002",
          pregunta: "¿Cuál es el eje central de la conducción preventiva que describe el manual?",
          opciones: [
            "La velocidad máxima permitida",
            "La técnica mecánica de manejo del vehículo",
            "La anticipación y la gestión consciente del riesgo",
            "El conocimiento exhaustivo del código de circulación"
          ],
          correcta: 2,
          explicacion: "La anticipación y la gestión consciente del riesgo son el eje central de la conducción preventiva según el manual.",
          referencia: "Tema 10 – Conducción preventiva"
        },
        {
          id: "p1t10-003",
          pregunta: "¿Cuáles son los cuatro valores que demuestra el conductor preventivo según el manual?",
          opciones: [
            "Velocidad, precisión, confianza y eficiencia",
            "Respeto, empatía, responsabilidad y paciencia",
            "Destreza, prudencia, conocimiento y normativa",
            "Agilidad, anticipación, control y reflejos"
          ],
          correcta: 1,
          explicacion: "El conductor preventivo demuestra: respeto (por la vida propia y ajena), empatía (hacia los vulnerables), responsabilidad (ante consecuencias de sus actos) y paciencia (como virtud vial).",
          referencia: "Tema 10 – Conducción preventiva como valores"
        },
        {
          id: "p1t10-004",
          pregunta: "¿Qué metodología pedagógica clave recomienda el formador para entrenar el pensamiento anticipatorio?",
          opciones: [
            "Memorización de señales y normativa",
            "Plantear situaciones hipotéticas ('¿Qué pasaría si…?') y pedir al alumno que verbalice sus decisiones",
            "Incrementar las horas de prácticas en circuito cerrado",
            "Usar exclusivamente simuladores de conducción virtuales"
          ],
          correcta: 1,
          explicacion: "Para desarrollar el pensamiento anticipatorio, el formador debe plantear situaciones hipotéticas, fomentar la observación crítica y pedir al alumno que verbalice sus decisiones durante la práctica.",
          referencia: "Tema 10 – Anticipación como competencia docente"
        },
        {
          id: "p1t10-005",
          pregunta: "¿Qué describe el manual como 'la síntesis de todo lo que la educación vial busca lograr'?",
          opciones: [
            "El conocimiento completo del código de circulación",
            "La conducción preventiva: anticiparse, respetar, proteger",
            "La habilidad técnica de manejo del vehículo",
            "El dominio de los sistemas de seguridad activa"
          ],
          correcta: 1,
          explicacion: "El Tema 10 describe la conducción preventiva como 'la síntesis de todo lo que la educación vial busca lograr: conductores reflexivos, responsables y humanos'.",
          referencia: "Tema 10 – Reflexión final"
        },
        {
          id: "p1t10-006",
          pregunta: "¿Cuál es el mensaje clave sobre el conductor verdaderamente seguro según el manual?",
          opciones: [
            "'El conductor seguro es el que reacciona más rápido'",
            "'El verdadero conductor seguro no es quien reacciona rápido, sino quien nunca necesita hacerlo'",
            "'El conductor seguro es el que más km ha recorrido'",
            "'El conductor seguro es el que usa todos los ADAS disponibles'"
          ],
          correcta: 1,
          explicacion: "'El verdadero conductor seguro no es quien reacciona rápido, sino quien nunca necesita hacerlo' es el mensaje del Tema 10 sobre la conducción preventiva.",
          referencia: "Tema 10 – Reflexión final"
        }
      ]
    },

    // ─── TEMA 11 ──────────────────────────────────────────────
    {
      id: "p1-t11",
      numero: "Tema 11",
      titulo: "Actuación en Caso de Siniestro Vial",
      descripcion: "Regla P.A.S., protocolo de actuación, aspectos éticos y legales.",
      preguntas: [
        {
          id: "p1t11-001",
          pregunta: "¿Cuáles son los tres pasos que componen la regla P.A.S.?",
          opciones: [
            "Parar, Avisar, Señalizar",
            "Proteger, Avisar, Socorrer",
            "Precaución, Asistencia, Seguridad",
            "Proteger, Alertar, Socorrer"
          ],
          correcta: 1,
          explicacion: "La regla P.A.S. resume la secuencia correcta de actuación: Proteger (evitar nuevos peligros), Avisar (llamar al 112) y Socorrer (prestar ayuda básica).",
          referencia: "Tema 11 – Regla P.A.S."
        },
        {
          id: "p1t11-002",
          pregunta: "¿A partir de qué fecha es obligatorio el uso exclusivo de la señal luminosa V-16 conectada?",
          opciones: ["1 de enero de 2025", "1 de enero de 2026", "1 de julio de 2025", "1 de julio de 2026"],
          correcta: 1,
          explicacion: "A partir del 1 de enero de 2026, será obligatorio el uso exclusivo de la señal luminosa V-16 conectada (que se coloca sobre el techo del vehículo emitiendo destellos en 360º), sin necesidad de salir del vehículo.",
          referencia: "Tema 11 – Proteger: señal V-16"
        },
        {
          id: "p1t11-003",
          pregunta: "¿En qué situación sería correcto mover a una víctima de un siniestro antes de que lleguen los servicios de emergencia?",
          opciones: [
            "Siempre que la víctima esté inconsciente",
            "Nunca, bajo ninguna circunstancia",
            "Solo en caso de peligro inminente como incendio, explosión, derrumbe o caída al agua",
            "Cuando la víctima lo solicite expresamente"
          ],
          correcta: 2,
          explicacion: "El traslado improvisado de una víctima solo debe hacerse en caso de peligro inminente (incendio, explosión, derrumbe, caída al agua), ya que mover incorrectamente a una persona puede agravar lesiones.",
          referencia: "Tema 11 – Traslado del herido"
        },
        {
          id: "p1t11-004",
          pregunta: "¿Qué delito comete quien se niega a auxiliar a una víctima de siniestro pudiendo hacerlo?",
          opciones: [
            "Infracción administrativa grave",
            "Delito penal de omisión del deber de socorro (art. 195 y 382 bis del Código Penal)",
            "Infracción leve de tráfico",
            "Delito civil de negligencia"
          ],
          correcta: 1,
          explicacion: "Negarse a auxiliar a una víctima constituye un delito penal de omisión del deber de socorro (art. 195 y 382 bis del Código Penal).",
          referencia: "Tema 11 – Componente ético y legal"
        },
        {
          id: "p1t11-005",
          pregunta: "¿Cuál es la posición de seguridad correcta para una persona inconsciente que respira?",
          opciones: [
            "Boca arriba con las piernas elevadas",
            "Posición lateral de seguridad (PLS)",
            "Sentada con la cabeza inclinada hacia adelante",
            "Boca abajo con la cabeza girada"
          ],
          correcta: 1,
          explicacion: "Una persona inconsciente que respira debe colocarse en Posición Lateral de Seguridad (PLS) para evitar que se ahogue con posibles vómitos mientras se mantienen vías aéreas libres.",
          referencia: "Tema 11 – Socorrer"
        },
        {
          id: "p1t11-006",
          pregunta: "Respecto al casco de un motorista implicado en un siniestro, ¿cuándo debe retirarse?",
          opciones: [
            "Siempre, para comprobar lesiones en la cabeza",
            "Nunca bajo ninguna circunstancia",
            "Solo si existe riesgo vital inminente y sea imprescindible para garantizar la respiración",
            "Si el motorista lo solicita"
          ],
          correcta: 2,
          explicacion: "Nunca se debe retirar el casco a un motorista implicado en un siniestro, salvo que exista una situación de riesgo vital inminente y sea imprescindible hacerlo para garantizar la respiración.",
          referencia: "Tema 11 – Socorrer"
        },
        {
          id: "p1t11-007",
          pregunta: "¿Cuál es la primera acción al llegar a la escena de un siniestro según la regla P.A.S.?",
          opciones: [
            "Llamar inmediatamente al 112",
            "Comprobar el estado de las víctimas",
            "Proteger el lugar y evitar nuevos peligros señalizando con V-16 y luces de emergencia",
            "Iniciar las maniobras de RCP en los heridos"
          ],
          correcta: 2,
          explicacion: "La primera acción es PROTEGER: señalizar el lugar con V-16, encender luces de emergencia, ponerse el chaleco reflectante y asegurar la zona antes de socorrer a las víctimas.",
          referencia: "Tema 11 – Proteger"
        },
        {
          id: "p1t11-008",
          pregunta: "¿Qué información básica debe comunicarse al llamar al 112 tras un siniestro?",
          opciones: [
            "Solo el número de vehículos y la matrícula",
            "Lugar exacto, número de vehículos y personas, tipo de siniestro, estado de víctimas y riesgos añadidos",
            "Únicamente el nombre del conductor y el seguro del vehículo",
            "La causa probable del siniestro y las infracciones cometidas"
          ],
          correcta: 1,
          explicacion: "Al llamar al 112 se debe communicar: lugar exacto (carretera, km, sentido), número de vehículos y personas, tipo de siniestro, estado aparente de las víctimas y riesgos añadidos.",
          referencia: "Tema 11 – Avisar"
        },
        {
          id: "p1t11-009",
          pregunta: "¿Está permitido grabar imágenes de víctimas en un siniestro?",
          opciones: [
            "Sí, siempre para documentarlo",
            "No, en ningún caso",
            "No se deben grabar imágenes que identifiquen a personas heridas o fallecidas ya que vulnera su intimidad y puede infringir el RGPD",
            "Sí, solo si las víctimas están inconscientes"
          ],
          correcta: 2,
          explicacion: "No se deben tomar fotografías o vídeos que muestren a personas heridas, fallecidas o en vulnerabilidad, ya que vulnera su intimidad e infringe la normativa de protección de datos (RGPD y LOPDGDD).",
          referencia: "Tema 11 – Conducta general"
        },
        {
          id: "p1t11-010",
          pregunta: "¿Cuál es la distancia mínima a la que debe colocarse el dispositivo de preseñalización (hasta 31 dic. 2025)?",
          opciones: ["25 metros", "50 metros", "100 metros", "75 metros"],
          correcta: 1,
          explicacion: "Hasta el 31 de diciembre de 2025, el dispositivo de preseñalización (triángulo V-16) debe colocarse al menos a 50 metros del vehículo inmovilizado, de forma visible desde al menos 100 metros.",
          referencia: "Tema 11 – Proteger: señalización"
        }
      ]
    },

    // ─── TEMA 12 ──────────────────────────────────────────────
    {
      id: "p1-t12",
      numero: "Tema 12",
      titulo: "La Importancia del Cumplimiento de las Normas de Tráfico",
      descripcion: "Marco jurídico, principios éticos, responsabilidades del conductor.",
      preguntas: [
        {
          id: "p1t12-001",
          pregunta: "¿Cuál es el texto normativo que regula la circulación en España?",
          opciones: [
            "Ley 17/2005",
            "Real Decreto Legislativo 6/2015 (Ley de Tráfico y Seguridad Vial)",
            "Real Decreto 818/2009",
            "Ley Orgánica 3/2007"
          ],
          correcta: 1,
          explicacion: "La Ley de Tráfico y Seguridad Vial (Real Decreto Legislativo 6/2015) constituye el marco jurídico que regula la circulación en España.",
          referencia: "Tema 12 – Ley de tráfico"
        },
        {
          id: "p1t12-002",
          pregunta: "¿Qué Real Decreto regula los requisitos para obtener, renovar o recuperar los permisos de conducción?",
          opciones: ["RD 6/2015", "RD 818/2009", "RD 1428/2003", "RD 2822/1998"],
          correcta: 1,
          explicacion: "El Reglamento General de Conductores (Real Decreto 818/2009) regula los requisitos para obtener, renovar o recuperar los permisos de conducción.",
          referencia: "Tema 12 – Reglamento de Conductores"
        },
        {
          id: "p1t12-003",
          pregunta: "¿Cuáles son los cinco principios éticos y formativos que rigen la circulación vial según el manual?",
          opciones: [
            "Velocidad, eficiencia, respeto, técnica y normativa",
            "Seguridad, responsabilidad, solidaridad, igualdad y respeto",
            "Prevención, protección, sanción, educación y conciencia",
            "Empatía, prudencia, anticipación, señalización y mantenimiento"
          ],
          correcta: 1,
          explicacion: "Los principios éticos que rigen la circulación son: seguridad, responsabilidad, solidaridad, igualdad y respeto.",
          referencia: "Tema 12 – Principios éticos"
        },
        {
          id: "p1t12-004",
          pregunta: "¿Qué tipo de responsabilidad conlleva una infracción de tráfico estándar?",
          opciones: ["Responsabilidad penal", "Responsabilidad civil", "Responsabilidad administrativa", "Responsabilidad laboral"],
          correcta: 2,
          explicacion: "Las infracciones de tráfico conllevan responsabilidad administrativa (multa y pérdida de puntos). La responsabilidad civil se aplica ante daños a terceros y la penal ante conducción temeraria, alcoholemia o fuga.",
          referencia: "Tema 12 – Responsabilidades"
        },
        {
          id: "p1t12-005",
          pregunta: "¿Qué consecuencia legal conlleva la conducción temeraria o la fuga en caso de siniestro?",
          opciones: [
            "Solo multa económica",
            "Responsabilidad penal: prisión, antecedentes y retirada judicial del permiso",
            "Responsabilidad civil: indemnización por daños",
            "Responsabilidad administrativa: sanción y puntos"
          ],
          correcta: 1,
          explicacion: "La conducción temeraria, la alcoholemia grave y la fuga en caso de siniestro conllevan responsabilidad penal: prisión, antecedentes penales y retirada judicial del permiso.",
          referencia: "Tema 12 – Responsabilidades"
        },
        {
          id: "p1t12-006",
          pregunta: "¿Cuál es la razón pedagógica por la que el manual recomienda enseñar la norma vinculada a su razón de ser?",
          opciones: [
            "Para que los alumnos memoricen mejor los artículos del reglamento",
            "Para que entiendan cada norma como un instrumento de prevención, no de castigo",
            "Para facilitar la aprobación del examen teórico",
            "Para que el alumno conozca las sanciones exactas por infracción"
          ],
          correcta: 1,
          explicacion: "El manual recomienda enseñar las normas como instrumentos de prevención, no de castigo, relacionando cada artículo con su razón de ser (por ejemplo, límites de velocidad = energía cinética).",
          referencia: "Tema 12 – Norma como herramienta educativa"
        },
        {
          id: "p1t12-007",
          pregunta: "¿Qué principio técnico de seguridad vial implica esperar que los demás actúen correctamente pero manteniendo la capacidad de reacción?",
          opciones: [
            "Conducción defensiva",
            "Responsabilidad compartida",
            "Confianza en la normalidad",
            "Señalización preventiva"
          ],
          correcta: 2,
          explicacion: "El principio de 'confianza en la normalidad' consiste en esperar que los demás actúen de forma correcta, pero sin confianza ciega, manteniendo la capacidad de reacción ante lo imprevisto.",
          referencia: "Tema 12 – Principios técnicos"
        },
        {
          id: "p1t12-008",
          pregunta: "¿Cuál es la conclusión filosófica del Tema 12 sobre la relación entre la norma y la conciencia?",
          opciones: [
            "La norma sin sanción no tiene efecto",
            "Solo cuando la ley se convierte en conciencia, la seguridad vial deja de ser obligación y pasa a ser cultura",
            "La normativa es suficiente sin educación",
            "La conciencia individual no puede cambiar la cultura vial"
          ],
          correcta: 1,
          explicacion: "El manual concluye que 'Solo cuando la ley se convierte en conciencia, la seguridad vial deja de ser una obligación y pasa a ser una cultura compartida'.",
          referencia: "Tema 12 – Reflexión final"
        },
        {
          id: "p1t12-009",
          pregunta: "¿Qué papel tiene el profesorado como modelo de cumplimiento normativo?",
          opciones: [
            "Su ejemplo personal tiene menos impacto que la lección teórica",
            "Su ejemplo tiene más impacto que cualquier lección teórica",
            "Solo debe ser modelo en el circuito de prácticas",
            "Su papel se limita a transmitir la normativa sin necesidad de ejemplificación"
          ],
          correcta: 1,
          explicacion: "El ejemplo del docente tiene más impacto que cualquier lección teórica. El alumnado aprende tanto por observación como por instrucción.",
          referencia: "Tema 12 – Profesorado como modelo"
        }
      ]
    },

    // ─── TEMA 13 ──────────────────────────────────────────────
    {
      id: "p1-t13",
      numero: "Tema 13",
      titulo: "Motocicletas",
      descripcion: "Siniestralidad en motos, factores de riesgo específicos, ARAS y equipamiento.",
      preguntas: [
        {
          id: "p1t13-001",
          pregunta: "¿Qué porcentaje de las víctimas mortales en carretera representan los motoristas según los datos DGT 2024?",
          opciones: ["El 15%", "El 20%", "Cerca del 25%", "El 35%"],
          correcta: 2,
          explicacion: "Los motoristas representan cerca del 25% de las víctimas mortales en carretera según los informes de la DGT (2024).",
          referencia: "Tema 13 – Siniestralidad"
        },
        {
          id: "p1t13-002",
          pregunta: "¿Desde qué año es obligatorio el ABS en motocicletas nuevas en Europa?",
          opciones: ["2014", "2016", "2018", "2020"],
          correcta: 1,
          explicacion: "El ABS para motocicletas es obligatorio desde 2016 como elemento de los ARAS (Advanced Rider Assistance Systems).",
          referencia: "Tema 13 – ARAS"
        },
        {
          id: "p1t13-003",
          pregunta: "¿Cuál es el estándar de homologación del casco obligatorio para los motoristas?",
          opciones: ["ECE R-22.05", "UNECE R22.06", "EN 1078", "DOT FMVSS 218"],
          correcta: 1,
          explicacion: "El casco homologado para motoristas debe cumplir el estándar UNECE R22.06.",
          referencia: "Tema 13 – Normas: casco"
        },
        {
          id: "p1t13-004",
          pregunta: "¿Cuáles son los siete factores de riesgo específicos en la conducción de motocicletas?",
          opciones: [
            "Velocidad, alcohol, drogas, lluvia, curvas, fatiga y ciudad",
            "Vulnerabilidad física, inestabilidad, menor visibilidad, efectos del entorno, riesgo en curvas, en intersecciones y distracción/exceso de confianza",
            "Casco, guantes, botas, chaqueta, visibilidad, mantenimiento y normativa",
            "Adelantamientos, velocidad, alcohol, somnolencia, lluvia, baches y conducción nocturna"
          ],
          correcta: 1,
          explicacion: "Los 7 factores de riesgo específicos son: 1) vulnerabilidad física, 2) inestabilidad inherente, 3) menor visibilidad, 4) efectos del entorno, 5) riesgo en curvas, 6) riesgo en intersecciones, 7) distracción o exceso de confianza.",
          referencia: "Tema 13 – Factores de riesgo"
        },
        {
          id: "p1t13-005",
          pregunta: "¿Cuántos segundos de separación mínima debe mantener un motorista en condiciones normales?",
          opciones: ["1 segundo", "2 segundos", "3 segundos", "4 segundos"],
          correcta: 1,
          explicacion: "Se debe mantener al menos 2 segundos de separación en condiciones normales, aumentando esa distancia con lluvia, niebla, fatiga o baja visibilidad.",
          referencia: "Tema 13 – Cumplimiento de normas"
        },
        {
          id: "p1t13-006",
          pregunta: "¿Qué sistema de los ARAS homologa la frenada combinada en motocicletas?",
          opciones: ["ABS", "TCS", "CBS (Frenado Combinado)", "MSC"],
          correcta: 2,
          explicacion: "El CBS (Combined Braking System o frenado combinado) distribuye la fuerza de frenado entre ambas ruedas cuando se acciona solo uno de los frenos.",
          referencia: "Tema 13 – ARAS"
        },
        {
          id: "p1t13-007",
          pregunta: "¿Cuál es el elemento de equipamiento nuevo que menciona el manual para motoristas y que incorpora tecnología de airbag?",
          opciones: ["El casco integral", "El chaleco Airbag", "La chaqueta integrada", "Las rodilleras de impacto"],
          correcta: 1,
          explicacion: "El manual menciona el chaleco Airbag como un elemento esencial del equipamiento de protección personal para motoristas.",
          referencia: "Tema 13 – Equipamiento"
        },
        {
          id: "p1t13-008",
          pregunta: "¿Por qué el formador debe enseñar a todos los conductores (no solo motoristas) sobre las motos?",
          opciones: [
            "Porque todos los conductores obtendrán el permiso A en algún momento",
            "Porque enseñar a ver, respetar y proteger a los motoristas reduce drásticamente los siniestros",
            "Porque la ley exige esta formación transversal",
            "Porque los conductores de coche son siempre responsables de los accidentes con motos"
          ],
          correcta: 1,
          explicacion: "El profesorado debe integrar la educación motociclista para todos los alumnos, ya que enseñar a ver, respetar y proteger a los motoristas reduce drásticamente los siniestros entre coche y moto.",
          referencia: "Tema 13 – Educación desde el aula"
        },
        {
          id: "p1t13-009",
          pregunta: "¿Está permitido el uso de intercomunicadores integrados en el casco homologado para motoristas?",
          opciones: [
            "No, está prohibido cualquier dispositivo electrónico en la moto",
            "Sí, se autorizan los intercomunicadores integrados en el casco homologado para comunicación entre conductor y pasajero",
            "Solo se permite si el intercomunicador es inalámbrico",
            "Solo en autopistas y autovías"
          ],
          correcta: 1,
          explicacion: "Se autorizan los intercomunicadores integrados en el casco homologado que permiten comunicación entre conductor y pasajero sin manipulación manual.",
          referencia: "Tema 13 – Normas: auriculares"
        },
        {
          id: "p1t13-010",
          pregunta: "¿Cuál es la estrategia de visibilidad activa que debe adoptar el motorista?",
          opciones: [
            "Circular en ángulos muertos de los vehículos para sorprenderlos",
            "No circular en ángulos muertos y posicionarse de forma visible; hacerse ver activamente",
            "Usar solo luces de cruce en ciudad",
            "Circular siempre por el carril izquierdo"
          ],
          correcta: 1,
          explicacion: "El motorista no puede confiar en ser visto, sino que debe hacerse visible activamente: circulando fuera de ángulos muertos y posicionándose de forma que sea perceptible para otros conductores.",
          referencia: "Tema 13 – Conducción preventiva en moto"
        },
        {
          id: "p1t13-011",
          pregunta: "¿Cuál es el mensaje final del Tema 13 respecto a la actitud del motorista?",
          opciones: [
            "'La mejor protección del motorista es su velocidad'",
            "'La mejor protección del motorista es su actitud'",
            "'La mejor protección del motorista es el casco'",
            "'La mejor protección del motorista es el seguro'"
          ],
          correcta: 1,
          explicacion: "'La mejor protección del motorista es su actitud' es el mensaje final del Tema 13, subrayando que la formación, la prudencia y la consciencia del riesgo son más determinantes que cualquier equipamiento.",
          referencia: "Tema 13 – Reflexión final"
        }
      ]
    }
  ]
};