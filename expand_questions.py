import re
import json

file_path = r"d:\Antigravity app\proyectos\app test PxP\js\data\parte1.js"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Add questions to Tema 0
tema0_extra = """
        ,{
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
        }"""

# Inject into Tema 0
match0 = re.search(r'(id:\s*"p1t0-020",.*?\n\s+})', content, re.DOTALL)
if match0:
    content = content[:match0.end()] + tema0_extra + content[match0.end():]

# Add questions to Tema 2
tema2_extra = """
        ,{
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
        }"""

match2 = re.search(r'(id:\s*"p1t2-015",.*?\n\s+})', content, re.DOTALL)
if match2:
    content = content[:match2.end()] + tema2_extra + content[match2.end():]

# Add questions to Tema 3
tema3_extra = """
        ,{
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
        }"""

match3 = re.search(r'(id:\s*"p1t3-015",.*?\n\s+})', content, re.DOTALL)
if match3:
    content = content[:match3.end()] + tema3_extra + content[match3.end():]

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Added new questions. File size: {len(content)}")
