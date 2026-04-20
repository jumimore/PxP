// ============================================================
// BANCO DE PREGUNTAS – PARTE II
// Manual Formadores PxP · DGT-AVAE-IMOVIAL
// Competencias y Metodología del Formador/a Vial
// ============================================================

const PARTE2 = {
  id: "parte2",
  titulo: "Competencias y Metodología del Formador/a Vial",
  descripcion: "Facilitación del aprendizaje, motivación, dinamización grupal, comunicación y canalización de actitudes.",
  temas: [
    // ─── TEMA P2-1 ─────────────────────────────────────────────
    {
      id: "p2-t1",
      numero: "Tema 1",
      titulo: "El Instructor como Facilitador del Aprendizaje",
      descripcion: "Rol del formador, aprendizaje adulto, estilos de aprendizaje y evaluación.",
      preguntas: [
        {
          id: "p2t1-001",
          pregunta: "¿Cuáles son las tres competencias principales del formador vial moderno según el manual?",
          opciones: [
            "Normativa, sanción y control",
            "Técnica, comunicativa y emocional/social",
            "Pedagógica, psicológica y jurídica",
            "Teórica, práctica y evaluadora"
          ],
          correcta: 1,
          explicacion: "El formador del siglo XXI debe reunir tres grandes competencias: técnica (conocer el contenido), comunicativa (saber conectar) y emocional/social (saber escuchar y acompañar).",
          referencia: "Parte II, Tema 1 – Perfil del formador"
        },
        {
          id: "p2t1-002",
          pregunta: "¿Cuál es el principio pedagógico fundamental sobre el aprendizaje adulto?",
          opciones: [
            "Los adultos aprenden mejor mediante memorización",
            "Los adultos aprenden mejor cuando entienden la utilidad inmediata de lo que aprenden y conectan con su experiencia",
            "Los adultos necesitan más horas de clase teórica que los jóvenes",
            "Los adultos solo aprenden si sienten presión por la sanción"
          ],
          correcta: 1,
          explicacion: "El alumnado adulto aprende mejor cuando entiende la utilidad inmediata, aporta su propia experiencia, rechaza la imposición y puede conectar lo aprendido con su vida real.",
          referencia: "Parte II, Tema 1 – Aprendizaje adulto"
        },
        {
          id: "p2t1-003",
          pregunta: "¿Cuál es la definición del rol del formador PxP según el manual?",
          opciones: [
            "Transmisor de normas de tráfico",
            "Facilitador del aprendizaje y activador de conciencia vial",
            "Evaluador de capacidades técnicas de conducción",
            "Inspector del cumplimiento de la normativa"
          ],
          correcta: 1,
          explicacion: "El formador no es un transmisor de normas sino un facilitador del aprendizaje, un activador de conciencia vial que ayuda a las personas a revisar sus creencias, emociones y conductas al volante.",
          referencia: "Parte II, Tema 1 – Introducción"
        },
        {
          id: "p2t1-004",
          pregunta: "¿Qué estilo de aprendizaje caracteriza al alumno 'Integrador'?",
          opciones: [
            "Necesita datos, lógica y argumentos",
            "Prefiere estructura y claridad de normas",
            "Busca experimentar, cuestionar y probar",
            "Aprende conectando emociones, historias y significados"
          ],
          correcta: 3,
          explicacion: "El alumno Integrador aprende conectando emociones, historias y significados. La estrategia adecuada es usar testimonios, experiencias personales y análisis de casos.",
          referencia: "Parte II, Tema 1 – Estilos de aprendizaje"
        },
        {
          id: "p2t1-005",
          pregunta: "¿Cuál de las siguientes actitudes de los alumnos frente al curso es considerada 'receptiva'?",
          opciones: [
            "'Todo el mundo lo hace'",
            "'Yo conduzco bien, fue mala suerte'",
            "'Podría haber hecho las cosas mejor'",
            "'Esto no sirve para nada'"
          ],
          correcta: 2,
          explicacion: "La actitud receptiva se caracteriza por el reconocimiento de que 'podría haber hecho las cosas mejor', mostrando apertura al cambio y reflexión.",
          referencia: "Parte II, Tema 1 – Motivaciones y actitudes"
        },
        {
          id: "p2t1-006",
          pregunta: "¿Cuál es el recurso didáctico más potente que menciona el manual para los cursos PxP?",
          opciones: [
            "Presentaciones PowerPoint con normativa",
            "La palabra, la emoción y la experiencia vivencial",
            "Exámenes tipo test frecuentes",
            "Vídeos de siniestros graves"
          ],
          correcta: 1,
          explicacion: "En los cursos PxP, los recursos más potentes son la palabra, la emoción y la experiencia vivencial. No es necesario un exceso de teoría, sino dinámicas vivenciales.",
          referencia: "Parte II, Tema 1 – Recursos didácticos"
        },
        {
          id: "p2t1-007",
          pregunta: "¿Cuál es el frase pedagógica que resume la actitud del buen formador PxP?",
          opciones: [
            "'No se enseña seguridad vial, se despierta conciencia vial'",
            "'La ley es la ley, y hay que cumplirla'",
            "'El conductor que no aprende debe perder el permiso'",
            "'La estadística habla por sí sola'"
          ],
          correcta: 0,
          explicacion: "'No se enseña seguridad vial, se despierta conciencia vial' es la frase clave del Tema 1 que resume el rol del formador como activador de conciencia.",
          referencia: "Parte II, Tema 1 – Aprendizaje adulto"
        },
        {
          id: "p2t1-008",
          pregunta: "¿Qué tipo de evaluación busca en los cursos de reeducación vial según el manual?",
          opciones: [
            "Calificar numéricamente al alumno para determinar si supera el curso",
            "Evidenciar un cambio en actitudes y reflexión del alumno",
            "Verificar la memorización de la normativa",
            "Medir la velocidad de reacción del conductor"
          ],
          correcta: 1,
          explicacion: "La evaluación no busca calificar, sino evidenciar un cambio. No se trata de medir lo que saben, sino lo que han comprendido.",
          referencia: "Parte II, Tema 1 – Evaluación"
        },
        {
          id: "p2t1-009",
          pregunta: "¿Qué estilo de aprendizaje tiene el alumno 'Analista'?",
          opciones: [
            "Aprende mediante testimonios y experiencias emocionales",
            "Necesita datos, lógica, argumentos, cifras y estudios",
            "Prefiere las dinámicas prácticas y juegos de roles",
            "Aprende mejor con protocolos y pasos secuenciales"
          ],
          correcta: 1,
          explicacion: "El alumno Analista necesita datos, lógica y argumentos. La estrategia adecuada es ofrecer cifras, ejemplos, legislación y estudios.",
          referencia: "Parte II, Tema 1 – Estilos de aprendizaje"
        },
        {
          id: "p2t1-010",
          pregunta: "¿Cuáles son los cinco principios del aprendizaje efectivo en adultos mencionados en el manual?",
          opciones: [
            "Memorización, repetición, evaluación, sanción y refuerzo",
            "Participación activa, significado personal, feedback inmediato, respeto mutuo y aprendizaje emocional",
            "Teoría, práctica, normativa, evaluación y certificación",
            "Contenido, metodología, materiales, evaluación y seguimiento"
          ],
          correcta: 1,
          explicacion: "Los 5 principios del aprendizaje adulto efectivo son: 1) participación activa, 2) significado personal, 3) feedback inmediato, 4) respeto mutuo, 5) aprendizaje emocional.",
          referencia: "Parte II, Tema 1 – Principios del aprendizaje"
        },
        {
          id: "p2t1-011",
          pregunta: "¿Qué afirma el principio pedagógico: 'Los alumnos aprenden lo que el formador enseña, pero también...'?",
          opciones: [
            "'...lo que dice el reglamento'",
            "'...cómo el formador es'",
            "'...lo que les motiva en ese momento'",
            "'...lo que pueden memorizar'"
          ],
          correcta: 1,
          explicacion: "El principio pedagógico completo es: 'Los alumnos aprenden lo que el formador enseña, pero también cómo el formador es'. El ejemplo del docente es tan enseñante como el contenido.",
          referencia: "Parte II, Tema 1 – Enfoque metodológico"
        },
        {
          id: "p2t1-012",
          pregunta: "¿Qué herramienta de evaluación al final del curso describe el manual como 'dinámica de cierre'?",
          opciones: [
            "Un examen tipo test de normativa",
            "Una prueba de conducción en circuito",
            "'Tres aprendizajes que me llevo' o cuestionario de autopercepción",
            "Una escala de actitudes completada por el formador"
          ],
          correcta: 2,
          explicacion: "Como herramienta de evaluación final se usan dinámicas como 'Tres aprendizajes que me llevo' y cuestionarios de autopercepción ('¿Qué cambiarías en tu forma de conducir?').",
          referencia: "Parte II, Tema 1 – Evaluación"
        },
        {
          id: "p2t1-013",
          pregunta: "¿Cuándo ha 'cumplido su misión' el formador PxP según el manual?",
          opciones: [
            "Cuando el alumno aprueba el examen final",
            "Cuando el alumno dice: 'Nunca lo había visto así, pero ahora lo entiendo'",
            "Cuando el alumno promete no volver a infringir",
            "Cuando el alumno recupera todos sus puntos"
          ],
          correcta: 1,
          explicacion: "El formador cumple su misión cuando el participante sale del curso diciendo 'Nunca lo había visto así, pero ahora lo entiendo', evidenciando un cambio real de perspectiva.",
          referencia: "Parte II, Tema 1 – Reflexión final"
        },
        {
          id: "p2t1-014",
          pregunta: "En el aprendizaje adulto, ¿por qué se dice que el alumno 'rechaza la imposición'?",
          opciones: [
            "Porque todos los adultos son por naturaleza rebeldes",
            "Porque prefiere la colaboración y el diálogo antes que una dinámica jerárquica obligatoria",
            "Porque no reconocen la autoridad de la DGT",
            "Porque no quieren perder más tiempo en la autoescuela"
          ],
          correcta: 1,
          explicacion: "El alumno adulto rechaza la imposición y prefiere la colaboración, por lo que asimila mejor los conceptos si nacen del diálogo frente al mandato puro.",
          referencia: "Parte II, Tema 1 – Aprendizaje adulto"
        },
        {
          id: "p2t1-015",
          pregunta: "Según el modelo de formador del siglo XXI, ¿qué implica la 'competencia técnica'?",
          opciones: [
            "Saber programar los sistemas informáticos de la autoescuela",
            "Conocer las normas, factores de riesgo y fundamentos técnicos e interpretarlos con rigor y actualidad",
            "Habilidad para conducir en circuitos resbaladizos con destreza",
            "Saber conectar empáticamente con cualquier alumno"
          ],
          correcta: 1,
          explicacion: "La competencia técnica alude a conocer en profundidad la normativa, factores de riesgo y fundamentos del PxP, aplicando el temario con rigor.",
          referencia: "Parte II, Tema 1 – Perfil del formador"
        },
        {
          id: "p2t1-016",
          pregunta: "¿Qué significa que el formador utilice el 'feedback inmediato' como principio efectivo?",
          opciones: [
            "Que debe hacer un examen al finalizar cada bloque obligatoriamente",
            "Que el participante debe saber qué ha mejorado y por qué justo en el transcurso de la dinámica o al aportar algo",
            "Que no se puede evaluar al alumno hasta que no acaba el curso",
            "Que las sanciones deben ser explicadas al inicio del curso"
          ],
          correcta: 1,
          explicacion: "El feedback inmediato permite al alumno constatar su avance al instante (qué ha mejorado y por qué), reforzando conductas positivas al momento.",
          referencia: "Parte II, Tema 1 – Principios del aprendizaje"
        },
        {
          id: "p2t1-017",
          pregunta: "Respecto a los que asisten a la sensibilización, ¿qué actitud previa predominante exige una mayor estrategia por parte del formador?",
          opciones: [
            "La sumisión absoluta a las normas",
            "La actitud receptiva generalizada",
            "Llegar a la defensiva, con experiencias previas sancionadoras que generan desconfianza e incluso rechazo",
            "El deseo entusiasta de aprender"
          ],
          correcta: 2,
          explicacion: "En un curso de reeducación el alumnado a menudo llega tras haber sido sancionado, sintiendo resistencia, prejuicios o desconfianza. El profesor debe canalizar esas emociones.",
          referencia: "Parte II, Tema 1 – Introducción"
        }
      ]
    },

    // ─── TEMA P2-2 ─────────────────────────────────────────────
    {
      id: "p2-t2",
      numero: "Tema 2",
      titulo: "La Motivación de Equipos",
      descripcion: "Componentes de la motivación, retroalimentación, automotivación del formador.",
      preguntas: [
        {
          id: "p2t2-001",
          pregunta: "¿Cuáles son los tres ejes sobre los que se sostiene la motivación humana según el manual?",
          opciones: [
            "Incentivo, presión y resultado",
            "Sentido, competencia y pertenencia",
            "Recompensa, sanción y norma",
            "Emoción, razón y voluntad"
          ],
          correcta: 1,
          explicacion: "La motivación humana se sostiene sobre tres ejes: sentido (entender para qué sirve), competencia (sentir que puedo hacerlo bien) y pertenencia (saber que formo parte de algo).",
          referencia: "Parte II, Tema 2 – Componentes de la motivación"
        },
        {
          id: "p2t2-002",
          pregunta: "¿Qué frase del manual resume la importancia de la automotivación del formador?",
          opciones: [
            "'El formador motivado no solo enseña mejor: contagia entusiasmo y coherencia'",
            "'La motivación es innata, no puede enseñarse'",
            "'El salario es el principal motivador del formador'",
            "'La motivación depende exclusivamente del grupo'"
          ],
          correcta: 0,
          explicacion: "'El formador motivado no solo enseña mejor: contagia entusiasmo y coherencia' es la clave de la automotivación docente.",
          referencia: "Parte II, Tema 2 – Automotivación"
        },
        {
          id: "p2t2-003",
          pregunta: "¿Cuáles son los indicadores de descontento grupal que debe detectar el formador?",
          opciones: [
            "Participación excesiva y críticas constructivas",
            "Silencios prolongados, críticas constantes, conversaciones paralelas y aislamiento de participantes",
            "Preguntas frecuentes y debate activo",
            "Llegar puntual y participar en las dinámicas"
          ],
          correcta: 1,
          explicacion: "Los indicadores de descontento incluyen: silencios prolongados o apatía colectiva, críticas constantes o sarcasmo, conversaciones paralelas y aislamiento de algún participante.",
          referencia: "Parte II, Tema 2 – Detección del descontento"
        },
        {
          id: "p2t2-004",
          pregunta: "¿Cuáles son las características del feedback efectivo según el manual?",
          opciones: [
            "Diferido, general, crítico y unidireccional",
            "Inmediato, concreto, constructivo y equilibrado",
            "Formal, escrito, individual y detallado",
            "Subjetivo, emocional, colectivo y repetido"
          ],
          correcta: 1,
          explicacion: "El feedback efectivo debe ser: inmediato (responder al momento), concreto (centrado en conductas), constructivo (muestra la mejora posible) y equilibrado (combina reconocimiento y orientación).",
          referencia: "Parte II, Tema 2 – Retroalimentación"
        },
        {
          id: "p2t2-005",
          pregunta: "¿Cuál de los siguientes enfoques del formador sobre el curso es más efectivo para motivar según el manual?",
          opciones: [
            "Presentarlo como una sanción merecida por las infracciones",
            "Transmitir que 'esto no es un castigo, es una oportunidad'",
            "Insistir en las estadísticas de siniestralidad",
            "Comenzar recordando los puntos que perdió cada alumno"
          ],
          correcta: 1,
          explicacion: "El formador debe dar sentido al curso transmitiendo que 'esto no es un castigo, es una oportunidad', conectando el curso con la vida real del alumno.",
          referencia: "Parte II, Tema 2 – Motivar en el aula"
        },
        {
          id: "p2t2-006",
          pregunta: "¿Qué frase resume la clave fundamental de la motivación según el Tema 2?",
          opciones: [
            "'Las personas olvidan lo que oyen, pero recuerdan cómo las hiciste sentir'",
            "'La normativa es suficiente para motivar'",
            "'Sancionar más es la mejor forma de motivar al infractor'",
            "'La motivación solo viene de premios económicos'"
          ],
          correcta: 0,
          explicacion: "'Las personas olvidan lo que oyen, pero recuerdan cómo las hiciste sentir' es la clave de la motivación grupal descrita en el Tema 2.",
          referencia: "Parte II, Tema 2 – Motivación en entorno laboral"
        },
        {
          id: "p2t2-007",
          pregunta: "¿Qué dinámica de cierre recomienda el manual para consolidar la motivación al final de cada sesión?",
          opciones: [
            "Un examen sorpresa de normativa",
            "Pedir a cada participante que diga 'una idea que se lleva' o 'un cambio que intentará aplicar'",
            "Una proyección de vídeos de siniestros graves",
            "Revisar la lista de infracciones de cada alumno"
          ],
          correcta: 1,
          explicacion: "La dinámica recomendada de cierre consiste en pedir a cada participante que diga 'una idea que se lleva' o 'un cambio que intentará aplicar', cerrando con reconocimiento del formador.",
          referencia: "Parte II, Tema 2 – Cómo motivar en el aula"
        },
        {
          id: "p2t2-008",
          pregunta: "Según el Tema 2, ¿cómo reencuadra el formador una queja o crítica del grupo?",
          opciones: [
            "Ignorándola para no interrumpir el flujo de la clase",
            "Transformando la queja en reflexión: '¿Qué parte de lo que dices crees que podríamos mejorar entre todos?'",
            "Derivando al alumno al psicólogo del programa",
            "Aplicando la sanción correspondiente del reglamento"
          ],
          correcta: 1,
          explicacion: "El reencuadre consiste en transformar la queja en reflexión preguntando: '¿Qué parte de lo que dices crees que podríamos mejorar entre todos?', dando protagonismo al grupo.",
          referencia: "Parte II, Tema 2 – Detección del descontento"
        },
        {
          id: "p2t2-009",
          pregunta: "¿Qué elementos conforman el enfoque de la motivación por 'Argumentos'?",
          opciones: [
            "Las sanciones económicas que motivan el cumplimiento",
            "Explicar el porqué detrás de cada norma para que el alumno asuma la responsabilidad desde la reflexión",
            "Los premios por buena participación",
            "Las estadísticas de siniestralidad"
          ],
          correcta: 1,
          explicacion: "Las personas adultas se mueven por razones, no por órdenes. Explicar el por qué detrás de cada norma hace que el alumno asuma la responsabilidad desde la reflexión, no desde el miedo.",
          referencia: "Parte II, Tema 2 – Teorías de motivación"
        },
        {
          id: "p2t2-010",
          pregunta: "¿Cuál es la reflexión final del Tema 2 sobre la motivación?",
          opciones: [
            "'La verdadera motivación nace del castigo'",
            "'La verdadera motivación no nace del castigo, sino del descubrimiento de un motivo para mejorar'",
            "'La motivación solo puede imponerse desde la autoridad'",
            "'Sin sanciones no hay motivación'"
          ],
          correcta: 1,
          explicacion: "'La verdadera motivación no nace del castigo, sino del descubrimiento de un motivo para mejorar' es la reflexión final del Tema 2.",
          referencia: "Parte II, Tema 2 – Reflexión final"
        }
      ]
    },

    // ─── TEMA P2-3 ─────────────────────────────────────────────
    {
      id: "p2-t3",
      numero: "Tema 3",
      titulo: "La Dinamización Grupal",
      descripcion: "Estilos de liderazgo, cohesión, técnicas de dinamización y gestión de conflictos.",
      preguntas: [
        {
          id: "p2t3-001",
          pregunta: "¿Cuál es el estilo de liderazgo educativo óptimo para el formador PxP según el manual?",
          opciones: [
            "Autoritario, para mantener el control del grupo",
            "Permisivo, para favorecer la participación libre",
            "Facilitador: equilibra autoridad y participación, escucha, ordena y orienta sin imponer",
            "Directivo, explicando todo sin hacer preguntas"
          ],
          correcta: 2,
          explicacion: "El estilo facilitador (óptimo) equilibra autoridad y participación. Escucha, ordena, pregunta y orienta sin imponer, fomentando confianza, diálogo y respeto mutuo.",
          referencia: "Parte II, Tema 3 – Estilos de gestión de grupos"
        },
        {
          id: "p2t3-002",
          pregunta: "¿Cuál es la idea clave sobre el grupo en el contexto formativo?",
          opciones: [
            "'El grupo es un problema que gestionar'",
            "'El grupo no es un problema que gestionar, sino un recurso que aprovechar'",
            "'El grupo debe ser homogéneo para funcionar'",
            "'El grupo es secundario respecto al contenido'"
          ],
          correcta: 1,
          explicacion: "'El grupo no es un problema que gestionar, sino un recurso que aprovechar' es la idea clave sobre el grupo en los cursos de reeducación vial.",
          referencia: "Parte II, Tema 3 – Introducción"
        },
        {
          id: "p2t3-003",
          pregunta: "¿Cuáles son las cinco categorías de técnicas de dinamización grupal descritas en el manual?",
          opciones: [
            "Activas, pasivas, reflexivas, evaluativas y motivacionales",
            "Participativas, persuasivas, de sensibilización/integración, de creación de ambiente y de presentación",
            "Individuales, grupales, mixtas, evaluativas y reflexivas",
            "Verbales, visuales, auditivas, kinestésicas y emocionales"
          ],
          correcta: 1,
          explicacion: "Las cinco categorías de técnicas de dinamización son: participativas (involucrar al grupo), persuasivas (toma de conciencia), de sensibilización/integración (empatía y emoción), de creación de ambiente (atención) y de presentación (reducir tensión inicial).",
          referencia: "Parte II, Tema 3 – Técnicas de dinamización"
        },
        {
          id: "p2t3-004",
          pregunta: "¿Cómo responde el manual que debe actuar el formador ante un participante agresivo?",
          opciones: [
            "Confrontarle directamente para demostrar autoridad",
            "Expulsarle de la sesión si persiste en su actitud",
            "Mantener serenidad, no entrar en confrontación y reencuadrar con respeto",
            "Ignorarle completamente para no darle protagonismo"
          ],
          correcta: 2,
          explicacion: "Ante un participante agresivo, el formador debe mantener la serenidad, no entrar en confrontación y reencuadrar con respeto: 'Aprecio tu punto de vista, ¿te parece si lo debatimos después de escuchar a los demás?'",
          referencia: "Parte II, Tema 3 – Tratamiento de conflictos"
        },
        {
          id: "p2t3-005",
          pregunta: "¿Cuál es el ejercicio recomendado en la primera sesión para romper la dinámica de culpa?",
          opciones: [
            "Pedir a cada participante que cuente su infracción",
            "Pedir a cada participante que comparta una 'experiencia positiva al volante'",
            "Mostrar datos estadísticos de siniestralidad",
            "Revisar la normativa básica del permiso por puntos"
          ],
          correcta: 1,
          explicacion: "En la primera sesión se recomienda pedir a cada participante que comparta una 'experiencia positiva al volante' o algo que le gusta de conducir. Así se rompe la dinámica de culpa y se introduce el valor personal.",
          referencia: "Parte II, Tema 3 – Creación de confianza"
        },
        {
          id: "p2t3-006",
          pregunta: "¿Cuál es la frase guía del Tema 3 sobre el liderazgo en la conducción grupal?",
          opciones: [
            "'El formador manda; el grupo obedece'",
            "'Conducir un grupo es como conducir un vehículo: firmeza en el volante y suavidad en los gestos'",
            "'El grupo decide y el formador ejecuta'",
            "'La autoridad es incompatible con la empatía'"
          ],
          correcta: 1,
          explicacion: "'Conducir un grupo es como conducir un vehículo: firmeza en el volante y suavidad en los gestos' es la frase guía del Tema 3 sobre el liderazgo facilitador.",
          referencia: "Parte II, Tema 3 – Estilos de gestión"
        },
        {
          id: "p2t3-007",
          pregunta: "¿Cómo gestiona el formador a un participante que monopoliza la palabra?",
          opciones: [
            "Interrumpiéndole directamente",
            "Agradecer su aporte y redistribuir el turno: 'Interesante lo que comentas, ¿alguien más quiere aportar algo distinto?'",
            "Ignorarle y continuar con la clase",
            "Cambiarlo de grupo"
          ],
          correcta: 1,
          explicacion: "Ante el participante repetitivo, el formador agradece su aporte y redistribuye el turno: 'Interesante lo que comentas, ¿alguien más quiere aportar algo distinto?'",
          referencia: "Parte II, Tema 3 – Tratamiento de conflictos"
        },
        {
          id: "p2t3-008",
          pregunta: "¿Cómo aborda el formador a un participante pasivo que no participa?",
          opciones: [
            "Presionándole para que intervenga obligatoriamente",
            "Registrando su actitud como negativa en el informe",
            "No presionarle e incluirle con preguntas suaves: '¿Tú cómo lo ves desde tu experiencia?'",
            "Ignorándole para no interrumpir el flujo del grupo"
          ],
          correcta: 2,
          explicacion: "Ante el participante pasivo, el formador no presiona e incluye con preguntas suaves: '¿Tú cómo lo ves desde tu experiencia?'",
          referencia: "Parte II, Tema 3 – Tratamiento de conflictos"
        },
        {
          id: "p2t3-009",
          pregunta: "¿Qué técnica de presentación describe el 'Semáforo personal' mencionado en el manual?",
          opciones: [
            "Un ejercicio de señalización vial",
            "Verde = lo que hago bien, ámbar = lo que debo mejorar, rojo = lo que quiero cambiar",
            "Una clasificación del comportamiento del alumno",
            "Un sistema de evaluación del formador"
          ],
          correcta: 1,
          explicacion: "El 'Semáforo personal' es una técnica de presentación donde verde = lo que hago bien, ámbar = lo que debo mejorar y rojo = lo que quiero cambiar.",
          referencia: "Parte II, Tema 3 – Técnicas de presentación"
        },
        {
          id: "p2t3-010",
          pregunta: "¿Qué regla de oro establece el manual sobre los participantes que bloquean el grupo?",
          opciones: [
            "'Expulsar inmediatamente al que perturba'",
            "'Nunca humilles a quien bloquea el grupo. Gánalo con respeto y lo convertirás en aliado'",
            "'Ignorar al bloqueador y centrarse en el grupo positivo'",
            "'Reportar al bloqueador a la DGT'"
          ],
          correcta: 1,
          explicacion: "'Nunca humilles a quien bloquea el grupo. Gánalo con respeto y lo convertirás en aliado' es la regla de oro del Tema 3 sobre gestión de conflictos.",
          referencia: "Parte II, Tema 3 – Tratamiento de conflictos"
        },
        {
          id: "p2t3-011",
          pregunta: "¿Por qué la 'Dinámica El segundo decisivo' es una técnica de sensibilización / integración?",
          opciones: [
            "Porque mide el tiempo de reacción del alumno",
            "Porque cada uno narra una decisión arriesgada y su consecuencia, despertando empatía y reflexión colectiva",
            "Porque simula la toma de decisiones en la conducción",
            "Porque evalúa el conocimiento normativo"
          ],
          correcta: 1,
          explicacion: "'El segundo decisivo' es una técnica de sensibilización donde cada uno narra una decisión arriesgada y su consecuencia, lo que despierta empatía y reflexión. Lo que se siente, se integra más que lo que se escucha.",
          referencia: "Parte II, Tema 3 – Técnicas de sensibilización"
        },
        {
          id: "p2t3-012",
          pregunta: "¿Cómo actúa el grupo como 'espejo emocional' respecto al formador?",
          opciones: [
            "El grupo refleja siempre el contenido de la clase",
            "Si el formador está tenso, el grupo se tensa; si transmite calma, el grupo se regula",
            "El grupo imita los gestos físicos del formador",
            "El grupo evalúa al formador mediante su participación"
          ],
          correcta: 1,
          explicacion: "El grupo actúa como un espejo emocional: si el formador está tenso, el grupo se tensa; si transmite calma, el grupo se regula. La serenidad del formador es su mejor herramienta de dinamización.",
          referencia: "Parte II, Tema 3 – Gestión emocional del formador"
        },
        {
          id: "p2t3-013",
          pregunta: "En la fase de creación de confianza, ¿qué se busca evitando de inicio preguntar a los alumnos el motivo literal de la pérdida de puntos?",
          opciones: [
            "Ahorrar tiempo para explicar antes la Ley de Seguridad Vial",
            "Evitar activar el mecanismo defensivo de 'culpa' y justificación, buscando primero que asuman protagonismo personal positivo",
            "Porque la DGT prohíbe preguntar sobre infracciones antes de la segunda hora de clase",
            "Porque no importa saber por qué han perdido los puntos"
          ],
          correcta: 1,
          explicacion: "Evitar preguntar de inicio por la infracción reduce mecanismos defensivos, centrándose primero en generar un ambiente de seguridad donde el infractor no se sienta juzgado.",
          referencia: "Parte II, Tema 3 – Creación de confianza"
        },
        {
          id: "p2t3-014",
          pregunta: "¿En qué consisten las dinámicas 'participativas' frente a las de 'sensibilización'?",
          opciones: [
            "Ambas sirven solo para matar el aburrimiento en zonas teóricas",
            "Las participativas solo sirven para el 'semáforo personal' y las de sensibilización para la visualización de normas",
            "Las participativas involucran al grupo cognitiva y verbalmente con debates o lluvias de ideas, mientras que las de sensibilización apelan a la integración emocional y empatía profunda",
            "Son exactamente lo mismo, una de ellas la inventó la DGT"
          ],
          correcta: 2,
          explicacion: "Técnicas participativas buscan activar reflexiones conjuntas, mientras que la sensibilización busca alterar actitudes mediante dinámicas más emocionales (como casos reales o ponerse en el lugar de las víctimas).",
          referencia: "Parte II, Tema 3 – Técnicas de dinamización"
        },
        {
          id: "p2t3-015",
          pregunta: "¿Cuál es una técnica adecuada para gestionar un líder 'negativo' o resistente en un grupo?",
          opciones: [
            "Entrar en disputa hasta que reconozca que está equivocado",
            "Usar 'Confrontación indirecta', rebotando sus dudas formales al conjunto del aula usando su liderazgo en favor del proceso",
            "Expulsarle temporalmente para recuperar el control",
            "Darle la razón en todo para que no critique las lecciones"
          ],
          correcta: 1,
          explicacion: "Ganarle con respeto y devolver la pregunta o crítica constructiva al escrutinio del grupo permite transformar su liderazgo de destructivo a propositivo.",
          referencia: "Parte II, Tema 3 – Tratamiento de conflictos"
        },
        {
          id: "p2t3-016",
          pregunta: "¿Por qué el estilo de 'liderazgo permisivo' absoluto NO es adecuado para la reeducación vial?",
          opciones: [
            "Porque hace perder el hilo del debate, dificulta conclusiones concretas y elimina el contraste correctivo necesario ante falsos mitos de los alumnos",
            "Porque es demasiado rudo con los infractores",
            "Porque a los adultos no les gusta la libertad",
            "Porque genera demasiada simpatía y desautoriza el pago del curso"
          ],
          correcta: 0,
          explicacion: "Si bien el grupo debe participar, la ausencia de guía en un 'laissez faire' no ayuda a romper falacias o mitos, derivando en charlas de bar improductivas que no construyen seguridad vial.",
          referencia: "Parte II, Tema 3 – Estilos de gestión"
        }
      ]
    },

    // ─── TEMA P2-4 ─────────────────────────────────────────────
    {
      id: "p2-t4",
      numero: "Tema 4",
      titulo: "La Comunicación",
      descripcion: "Comunicación verbal y no verbal, escucha activa, barreras y oratoria.",
      preguntas: [
        {
          id: "p2t4-001",
          pregunta: "¿Qué principio básico de comunicación afirma que el sentido del mensaje está en la respuesta del receptor?",
          opciones: [
            "'Toda conducta comunica, incluso el silencio'",
            "'El sentido del mensaje está en la respuesta del receptor, no en la intención del emisor'",
            "'La forma es menos importante que el contenido'",
            "'No existe comunicación neutral'"
          ],
          correcta: 1,
          explicacion: "Uno de los principios básicos de comunicación del manual es que 'el sentido del mensaje está en la respuesta del receptor, no en la intención del emisor'.",
          referencia: "Parte II, Tema 4 – Nociones básicas"
        },
        {
          id: "p2t4-002",
          pregunta: "¿Qué porcentaje del impacto comunicativo proviene de la comunicación no verbal?",
          opciones: ["El 30%", "El 50%", "El 60%", "El 70%"],
          correcta: 3,
          explicacion: "El 70% del impacto comunicativo proviene de la comunicación no verbal: el cuerpo, la voz y la mirada transmiten seguridad o duda, empatía o distancia.",
          referencia: "Parte II, Tema 4 – Comunicación no verbal"
        },
        {
          id: "p2t4-003",
          pregunta: "¿Cuáles son los cinco principios de la escucha activa descritos en el manual?",
          opciones: [
            "Escuchar, responder, preguntar, confirmar y agradecer",
            "Atención plena, empatía, reformulación, silencio estratégico y validación",
            "Silencio, asertividad, feedback, paciencia y comprensión",
            "Interés, preguntas abiertas, síntesis, confirmación y respeto"
          ],
          correcta: 1,
          explicacion: "Los 5 principios de la escucha activa son: atención plena (mirar, asentir), empatía, reformulación (repetir con tus palabras), silencio estratégico (permitir que piense) y validación.",
          referencia: "Parte II, Tema 4 – Escucha activa"
        },
        {
          id: "p2t4-004",
          pregunta: "¿Cuáles son las barreras de comunicación más comunes en el aula vial?",
          opciones: [
            "El ruido ambiental y las sillas incómodas",
            "Emocionales, de autoridad, de lenguaje (tecnicismos), de actitud y de prejuicio",
            "El horario de clase y la duración de las sesiones",
            "El tamaño del grupo y la falta de materiales"
          ],
          correcta: 1,
          explicacion: "Las barreras de comunicación incluyen: emocionales (ira, frustración, miedo), de autoridad ('yo llevo 30 años conduciendo'), de lenguaje (tecnicismos), de actitud (apatía) y de prejuicio (desconfianza).",
          referencia: "Parte II, Tema 4 – Barreras de comunicación"
        },
        {
          id: "p2t4-005",
          pregunta: "¿Cuál es la regla de oro sobre el lenguaje del formador?",
          opciones: [
            "'El formador debe hablar siempre en términos técnicos'",
            "'El formador debe adaptar su lenguaje al grupo, no esperar que el grupo se adapte a él'",
            "'El formador debe usar el mismo mensaje para todos los grupos'",
            "'El formador debe limitarse al contenido del manual'"
          ],
          correcta: 1,
          explicacion: "'El formador debe adaptar su lenguaje al grupo, no esperar que el grupo se adapte a él' es la regla de oro de la comunicación en el Tema 4.",
          referencia: "Parte II, Tema 4 – Elementos de comunicación"
        },
        {
          id: "p2t4-006",
          pregunta: "¿Qué diferencia existe entre un mensaje informativo y un mensaje persuasivo?",
          opciones: [
            "El informativo usa emoción y el persuasivo usa datos",
            "El informativo describe datos objetivos; el persuasivo busca generar reflexión o cambio de actitud",
            "No hay diferencia práctica entre ambos tipos de mensaje",
            "El persuasivo usa amenazas; el informativo usa ejemplos"
          ],
          correcta: 1,
          explicacion: "El mensaje informativo describe, explica o aclara datos objetivos, mientras que el mensaje persuasivo busca generar reflexión o cambio de actitud en el receptor.",
          referencia: "Parte II, Tema 4 – Mensajes informativos y persuasivos"
        },
        {
          id: "p2t4-007",
          pregunta: "¿Cuál es el consejo de oratoria más práctico que da el manual?",
          opciones: [
            "'Habla solo de lo que dice el manual'",
            "'Habla con el grupo, no al grupo'",
            "'Limita las sesiones a 30 minutos para mantener la atención'",
            "'Evita las preguntas abiertas para no perder el control'"
          ],
          correcta: 1,
          explicacion: "'Habla con el grupo, no al grupo' es el consejo práctico de oratoria del Tema 4, enfatizando la comunicación bidireccional y la conexión emocional.",
          referencia: "Parte II, Tema 4 – Prácticas de oratoria"
        },
        {
          id: "p2t4-008",
          pregunta: "¿Cuál es la reflexión final del Tema 4 sobre la comunicación y la docencia?",
          opciones: [
            "'La comunicación es un complemento de la docencia'",
            "'La comunicación no es un complemento de la docencia: es la docencia misma'",
            "'El contenido es más importante que la forma de comunicarlo'",
            "'El formador debe minimizar la comunicación para no confundir'"
          ],
          correcta: 1,
          explicacion: "'La comunicación no es un complemento de la docencia: es la docencia misma. Cada gesto, palabra o silencio construye o destruye confianza.' es la reflexión final del Tema 4.",
          referencia: "Parte II, Tema 4 – Reflexión final"
        },
        {
          id: "p2t4-009",
          pregunta: "¿Cuáles son los componentes del proceso de comunicación mencionados en el manual?",
          opciones: [
            "Emisor, receptor, mensaje, canal, código, ruido y feedback",
            "Hablante, oyente, texto, medio, código y retorno",
            "Formador, alumno, contenido, material, lenguaje y evaluación",
            "Señal, receptor, decodificación, respuesta y retroalimentación"
          ],
          correcta: 0,
          explicacion: "Los elementos del proceso de comunicación son: emisor, receptor, mensaje (contenido + emoción), canal (medio), código (lenguaje compartido), ruido (distorsiones) y feedback (respuesta del receptor).",
          referencia: "Parte II, Tema 4 – Elementos del proceso"
        },
        {
          id: "p2t4-010",
          pregunta: "¿Qué recomendación da el manual sobre el uso del silencio en la oratoria?",
          opciones: [
            "Evitar los silencios para mantener el ritmo de la clase",
            "Usar silencios como herramienta pedagógica: invitan a pensar",
            "Los silencios solo son aceptables al inicio de cada sesión",
            "Los silencios deben llenarse con preguntas retóricas"
          ],
          correcta: 1,
          explicacion: "El silencio estratégico es una herramienta pedagógica que invita al alumno a pensar y reflexionar. Debe incorporarse en la voz del formador con ritmo pausado.",
          referencia: "Parte II, Tema 4 – La voz / Escucha activa"
        },
        {
          id: "p2t4-011",
          pregunta: "¿Qué estrategia de comunicación recomienda el manual con alumnos difíciles o escépticos?",
          opciones: [
            "Confrontarles directamente con sus infracciones",
            "No tomarse los ataques como personales y usar el humor como puente, manteniendo control emocional",
            "Ignorarles para no interrumpir la sesión",
            "Expulsarles si persisten en su actitud desafiante"
          ],
          correcta: 1,
          explicacion: "Con alumnos difíciles, la estrategia es: no tomarse los ataques como personales, responder con serenidad (no con autoridad), reencuadrar las objeciones y usar el humor como puente, nunca como arma.",
          referencia: "Parte II, Tema 4 – Comunicación con alumnos difíciles"
        },
        {
          id: "p2t4-012",
          pregunta: "¿Cuál es el ejemplo de mensaje persuasivo que ofrece el manual sobre el alcohol?",
          opciones: [
            "'Las multas por alcoholemia son muy elevadas'",
            "'El alcohol está prohibido por la ley de tráfico'",
            "'¿De verdad esas dos copas valen más que volver a casa?'",
            "'0,5 g/l es el límite legal para los conductores'"
          ],
          correcta: 2,
          explicacion: "El manual ofrece como ejemplo de mensaje persuasivo: '¿De verdad esas dos copas valen más que volver a casa?', frente al mensaje informativo: 'El alcohol afecta el tiempo de reacción desde la primera copa'.",
          referencia: "Parte II, Tema 4 – Mensajes persuasivos"
        },
        {
          id: "p2t4-013",
          pregunta: "Dentro de la comunicación no verbal, el 'silencio estratégico' es un recurso del orador para...",
          opciones: [
            "Castigar la falta de atención del alumnado",
            "Permitir un tiempo de sedimentación reflexiva tras una afirmación categórica o pregunta interpelativa",
            "Esperar a que el grupo se dé cuenta sola de un error legislativo",
            "Recrear un ambiente de misterio para aumentar el miedo en accidentes"
          ],
          correcta: 1,
          explicacion: "El formador no debe temer el silencio; es una herramienta valiosa de calado emocional y pausa reflexiva, muy efectiva tras interrogantes retóricos.",
          referencia: "Parte II, Tema 4 – La voz / Escucha activa"
        },
        {
          id: "p2t4-014",
          pregunta: "La técnica de 'reformulación' dentro de la escucha activa consiste en...",
          opciones: [
            "Corregir rápidamente con voz alta el error del alumno para que el grupo lo oiga",
            "Obligar al alumno a que repita lo que acaba de decir el profesor como prueba de interés",
            "Devolverle con tus propias palabras el mensaje central que nos ha expresado (ej: 'Si te entiendo bien, tú consideras que...')",
            "Cambiar de tema cuando alguien se estanca en una idea y resulta cansino"
          ],
          correcta: 2,
          explicacion: "Reformular ayuda a la validación del participante, le hace sentir escuchado, garantiza que no interpretamos erróneamente su queja y relaja barreras defensivas.",
          referencia: "Parte II, Tema 4 – Escucha activa"
        },
        {
          id: "p2t4-015",
          pregunta: "El 'ruido comunicacional' (cualquier distorsión del mensaje) se produce más fuertemente en PxP porque...",
          opciones: [
            "Las aulas carecen de aislamiento acústico moderno",
            "Las barreras actitudinales y los prejuicios cognitivos actúan como filtros emocionales que modifican cómo los alumnos interpretan al profesor",
            "Normalmente el formador usa el tono de voz demasiado alto",
            "Las interferencias de teléfonos móviles no se silencian bien"
          ],
          correcta: 1,
          explicacion: "El ruido no es solo sonoro, una fuerte barrera perjudicial en reeducación son los filtros cognitivos de 'castigado' y 'la DGT solo recauda', provocando ruidos en la asimilación real del sistema.",
          referencia: "Parte II, Tema 4 – Barreras de comunicación"
        },
        {
          id: "p2t4-016",
          pregunta: "Si un alumno cuestiona: 'Es imposible circular a 30 km/h por la ciudad sin entorpecer', un formador no defensivo usando la comunicación asertiva diría...",
          opciones: [
            "'Eso no es verdad, si quieres puedes hacerlo, o asumes la multa'",
            "'Comprendo que te parezca muy lento si piensas en tu tiempo de llegada, ¿les parece igual de lento a los vecinos o peatones si analizamos su seguridad?'",
            "'Te recuerdo que el manual técnico y el RD 970/2020 avalan esto, yo no puedo modificar las leyes'",
            "'De acuerdo, propongámosle a la DGT reformar esto ya que todos opináis igual'"
          ],
          correcta: 1,
          explicacion: "El formador asertivo no confronta, valida la emoción subyacente y formula una pregunta abierta que hace dudar al alumno trasladándolo al contexto solidario.",
          referencia: "Parte II, Tema 4 – Comunicación con alumnos difíciles"
        }
      ]
    },

    // ─── TEMA P2-5 ─────────────────────────────────────────────
    {
      id: "p2-t5",
      numero: "Tema 5",
      titulo: "La Canalización de Actitudes",
      descripcion: "Análisis de actitudes, técnicas de cambio, resistencias y cultura de la seguridad.",
      preguntas: [
        {
          id: "p2t5-001",
          pregunta: "¿Cuáles son las tres dimensiones que componen una actitud según el manual?",
          opciones: [
            "Verbal, no verbal y conductual",
            "Cognitiva (lo que pienso), afectiva (lo que siento) y conductual (lo que hago)",
            "Normativa, emocional y técnica",
            "Social, individual y cultural"
          ],
          correcta: 1,
          explicacion: "Una actitud se compone de tres dimensiones: cognitiva (lo que pienso), afectiva (lo que siento) y conductual (lo que hago). El formador debe trabajar en los tres niveles.",
          referencia: "Parte II, Tema 5 – Análisis de actitudes"
        },
        {
          id: "p2t5-002",
          pregunta: "¿Cuáles son las cuatro fases del cambio actitudinal que describe el manual?",
          opciones: [
            "Conocimiento, comprensión, aplicación y evaluación",
            "Resistencia, duda, comprensión y aceptación",
            "Negación, negociación, aceptación y compromiso",
            "Conciencia, motivación, acción y mantenimiento"
          ],
          correcta: 1,
          explicacion: "El cambio actitudinal es un proceso gradual que pasa por cuatro fases: resistencia, duda, comprensión y aceptación. El papel del formador es acompañar, no empujar.",
          referencia: "Parte II, Tema 5 – Técnicas de cambio"
        },
        {
          id: "p2t5-003",
          pregunta: "¿Qué técnica de cambio actitudinal consiste en mostrar el conflicto entre lo que dice el alumno y lo que hace?",
          opciones: [
            "Reflexión guiada",
            "Confrontación empática",
            "Modelado",
            "Reforzamiento positivo"
          ],
          correcta: 1,
          explicacion: "La confrontación empática consiste en mostrar el conflicto entre lo que la persona dice y lo que hace, sin juicio: 'Dices que respetas la seguridad, pero superas los límites. ¿Qué crees que pasa en ese momento dentro de ti?'",
          referencia: "Parte II, Tema 5 – Técnicas de cambio"
        },
        {
          id: "p2t5-004",
          pregunta: "¿Cuáles son los cuatro tipos de resistencia al cambio que describe el manual?",
          opciones: [
            "Activa, pasiva, abierta y encubierta",
            "Intelectual, emocional, cultural y reactiva",
            "Verbal, no verbal, grupal e individual",
            "Normativa, actitudinal, técnica y personal"
          ],
          correcta: 1,
          explicacion: "Los cuatro tipos de resistencia son: intelectual (busca argumentos para justificar el error), emocional (se siente juzgado), cultural (normaliza conductas de riesgo) y reactiva (desafía la autoridad).",
          referencia: "Parte II, Tema 5 – Actitudes de resistencia"
        },
        {
          id: "p2t5-005",
          pregunta: "¿Qué estrategia de canalización de la resistencia consiste en 'validar la emoción, no la conducta'?",
          opciones: [
            "Escuchar antes de corregir y reconocer los sentimientos sin justificar el comportamiento",
            "Confrontar directamente la conducta inapropiada",
            "Ignorar la emoción y centrarse en la normativa",
            "Derivar al alumno al psicólogo del programa"
          ],
          correcta: 0,
          explicacion: "Validar la emoción (no la conducta) implica decir: 'Entiendo que te moleste la sanción, pero veamos por qué la norma existe'. Se reconoce el sentimiento sin justificar la infracción.",
          referencia: "Parte II, Tema 5 – Estrategias para la resistencia"
        },
        {
          id: "p2t5-006",
          pregunta: "¿Cuál es la regla práctica del Tema 5 sobre el cambio de actitudes?",
          opciones: [
            "'Di siempre lo que está mal para que el alumno corrija'",
            "'No digas lo que está mal: haz que lo descubran'",
            "'La sanción es la mejor herramienta de cambio'",
            "'Repite el mensaje hasta que el alumno lo interiorice'"
          ],
          correcta: 1,
          explicacion: "'No digas lo que está mal: haz que lo descubran' es la regla práctica del Tema 5, ya que las actitudes no se cambian con sermones, sino con vivencias significativas donde el alumno descubre por sí mismo.",
          referencia: "Parte II, Tema 5 – Técnicas de cambio"
        },
        {
          id: "p2t5-007",
          pregunta: "¿Cuáles son los cuatro pilares de la cultura de la seguridad vial como valor permanente?",
          opciones: [
            "Normativa, sanciones, tecnología y educación",
            "Respeto, responsabilidad, autocontrol y compromiso social",
            "Velocidad, prudencia, señalización y mantenimiento",
            "Prevención, detección, corrección y evaluación"
          ],
          correcta: 1,
          explicacion: "La cultura de la seguridad vial se construye sobre cuatro pilares: respeto (hacia la vida propia y ajena), responsabilidad (consecuencias de cada decisión), autocontrol (gestión de impulsos) y compromiso social (ser ejemplo).",
          referencia: "Parte II, Tema 5 – Cultura de la seguridad"
        },
        {
          id: "p2t5-008",
          pregunta: "¿Cuál es la diferencia entre el 'modelo antiguo' y el 'modelo actual' de cultura vial según el manual?",
          opciones: [
            "El modelo antiguo usa tecnología y el actual usa educación",
            "El modelo antiguo cumple por miedo a la multa; el modelo actual cumple por respeto a la vida",
            "No existe diferencia real entre ambos modelos",
            "El modelo antiguo es más eficaz que el actual"
          ],
          correcta: 1,
          explicacion: "El modelo antiguo: 'cumplir por miedo a la multa'. El modelo actual: 'cumplir por respeto a la vida'. El formador debe ayudar al grupo a trascender la cultura del castigo y acercarse a la responsabilidad colectiva.",
          referencia: "Parte II, Tema 5 – Cultura de la seguridad"
        },
        {
          id: "p2t5-009",
          pregunta: "¿Qué indica que un alumno muestra una actitud de 'apoyo al cambio' o actitud positiva?",
          opciones: [
            "Que llega puntual y no hace preguntas",
            "Que muestra escucha activa, acepta la responsabilidad, pregunta genuinamente y muestra empatía con las víctimas",
            "Que hace todas las actividades sin protestar",
            "Que firma la asistencia y realiza el test final"
          ],
          correcta: 1,
          explicacion: "Los indicadores de actitud positiva (apoyo al cambio) incluyen: escucha activa y preguntas genuinas, aceptación de la responsabilidad, interés por comprender las causas del error y empatía con las víctimas.",
          referencia: "Parte II, Tema 5 – Actitudes de apoyo"
        },
        {
          id: "p2t5-010",
          pregunta: "¿Cuál es la reflexión final del Tema 5 sobre el objetivo del cambio actitudinal?",
          opciones: [
            "El alumno debe tener miedo de volver a infringir",
            "Cuando una persona deja de pensar 'tengo que hacerlo' y empieza a pensar 'quiero hacerlo mejor', el cambio es real y duradero",
            "El cambio actitudinal debe producirse en una sola sesión",
            "La normativa es el mejor instrumento de cambio actitudinal"
          ],
          correcta: 1,
          explicacion: "El Tema 5 concluye que el cambio real y duradero ocurre 'cuando una persona deja de pensar «tengo que hacerlo» y empieza a pensar «quiero hacerlo mejor»'.",
          referencia: "Parte II, Tema 5 – Reflexión final"
        },
        {
          id: "p2t5-011",
          pregunta: "¿Qué técnica de cambio actitudinal describe el manual como 'modelado'?",
          opciones: [
            "Presentar modelos de buena conducción en vídeo",
            "El formador actúa como modelo de respeto y serenidad; los alumnos aprenden del ejemplo",
            "Usar maniquíes de crash test para mostrar lesiones",
            "Pedir a los alumnos que imiten comportamientos seguros"
          ],
          correcta: 1,
          explicacion: "El 'modelado' consiste en que el formador actúa como modelo coherente de respeto y serenidad. Los alumnos aprenden tanto del ejemplo como del discurso.",
          referencia: "Parte II, Tema 5 – Técnicas de cambio"
        },
        {
          id: "p2t5-012",
          pregunta: "¿Qué pregunta didáctica del manual ejemplifica una 'reflexión guiada' sobre la cultura vial?",
          opciones: [
            "'¿Conoces el límite de velocidad en esta vía?'",
            "'¿Qué es peor: no conocer la norma o creer que tú estás por encima de ella?'",
            "'¿Cuántos puntos perdiste con esa infracción?'",
            "'¿Cuál es el límite legal de alcoholemia?'"
          ],
          correcta: 1,
          explicacion: "La pregunta '¿Qué es peor: no conocer la norma o creer que tú estás por encima de ella?' es un ejemplo de reflexión guiada del Tema 5, que genera un debate que vale más que cualquier diapositiva.",
          referencia: "Parte II, Tema 5 – Cambio cultural"
        }
      ]
    }
  ]
};