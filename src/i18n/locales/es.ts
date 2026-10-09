import type { Dictionary } from "@/i18n/types"

export const es: Dictionary = {
  meta: {
    title: "TurboDevs — Software para operaciones que no pueden detenerse",
    description:
      "TurboDevs es un estudio de ingeniería de software. Encontramos el proceso que le cuesta horas u oportunidades a tu equipo, lo reemplazamos con software y lo mantenemos funcionando 24/7.",
  },
  nav: {
    services: "Servicios",
    work: "Trabajo",
    products: "Productos",
    notes: "Notas",
    contact: "Contacto",
    cta: "Habla con nosotros",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  hero: {
    eyebrow: "Estudio de ingeniería de software",
    headline: "Software para operaciones que no pueden detenerse.",
    paragraph:
      "Hecho para software de misión crítica, donde una caída no es una opción. Construimos sistemas resilientes y listos para producción — desde monitoreo de plantas solares y motores de cumplimiento tributario hasta pagos Web3 — respaldados por confiabilidad operativa 24/7.",
    ctaPrimary: "Habla con nosotros",
    ctaSecondary: "Ver el trabajo",
    clientsLabel: "En producción con",
  },
  stats: {
    eyebrow: "En cifras",
    items: {
      tests: "pruebas automatizadas detrás de nuestros sistemas tributarios y de reportes de energía",
      systems: "sistemas de clientes en producción que construimos o en los que contribuimos",
      portals: "portales del Estado de Chile automatizados: SII y Previred",
      uptime: "de operación para los sistemas que operamos",
    },
  },
  problem: {
    eyebrow: "El problema",
    title: "El trabajo que mantiene funcionando un negocio es el trabajo que nadie tiene tiempo de arreglar.",
    body: "Declaraciones con plazos. Plantas que reportan todos los días. Licitaciones que vencen en una bandeja de entrada. Estos procesos funcionan con planillas, portales y la memoria de alguien — hasta el día en que dejan de funcionar. Los reemplazamos con software que hace el trabajo, revisa su propio resultado y sigue funcionando de noche.",
  },
  services: {
    eyebrow: "Cómo trabajamos",
    title: "Cuatro etapas. Empieza en cualquiera, o déjanos el ciclo completo.",
    stages: [
      {
        title: "Diagnosticar",
        line: "Encontrar el proceso que más te cuesta.",
        body: "Nos sentamos con las personas que hacen el trabajo, mapeamos el proceso paso a paso y dejamos por escrito qué pasos cuestan horas, errores u oportunidades perdidas — y cuáles automatizar primero.",
      },
      {
        title: "Construir",
        line: "Software que hace el trabajo.",
        body: "Automatizaciones, integraciones y agentes de IA construidos sobre tus propios archivos y sistemas. Los números vienen del código; donde un modelo escribe, escribe sobre hechos ya calculados, y cada cifra se verifica antes de salir.",
        proof: "En producción: el sistema de respuesta a licitaciones privadas de Sainz Intec.",
      },
      {
        title: "Desplegar",
        line: "Dentro de tu operación.",
        body: "Nos conectamos a los portales, archivos y fuentes de datos que tu equipo ya usa, y trabajamos junto a las personas que los operan hasta que el sistema es parte de la rutina.",
        proof: "En la práctica: nuestras automatizaciones de SII y Previred, construidas sobre los portales que los equipos chilenos usan cada mes.",
      },
      {
        title: "Operar",
        line: "24/7, bajo vigilancia.",
        body: "Operamos lo que construimos: monitoreo, reportes diarios y una verificación de cada resultado, para que siga funcionando mucho después del día del lanzamiento.",
        proof: "En producción: la estación solar con baterías de Quorelia y un reporte diario de almacenamiento en baterías.",
      },
    ],
  },
  work: {
    eyebrow: "Trabajo",
    title: "Sistemas funcionando hoy en producción.",
    challengeLabel: "El desafío",
    builtLabel: "Lo que construimos",
    confidentialClient: "Cliente energético confidencial",
    visitLabel: "Visitar",
    cases: {
      quorelia: {
        sector: "Energía",
        challenge: "Una estación solar con baterías que tiene que operar día y noche, sin nadie a su lado.",
        built: "El software que opera la estación las 24 horas.",
        quote:
          "TurboDevs nos desarrolló una estación solar con baterías 24/7 que funciona día y noche. Sigue operando aunque nadie la esté mirando, así que el sistema hace su trabajo de noche igual que de día. Se tomaron el tiempo de entender cómo funciona realmente nuestra operación energética y construyeron algo en lo que confiamos todos los días.",
      },
      sainzIntec: {
        sector: "Abastecimiento industrial",
        challenge: "Licitaciones privadas y solicitudes de compra que vencían en una bandeja de entrada antes de que alguien las respondiera.",
        built: "Un sistema automatizado que responde licitaciones privadas por sí solo.",
        quote:
          "TurboDevs nos construyó un sistema que responde licitaciones privadas por sí solo — y está trayendo nuevos negocios reales a la empresa. Oportunidades que antes se nos pasaban ahora se responden sin que nadie del equipo tenga que perseguirlas. Ya es parte de cómo ganamos trabajo, y sigue funcionando mientras nosotros nos enfocamos en cumplirlo.",
      },
      batteryStorage: {
        sector: "Energía",
        challenge:
          "Un reporte diario de rendimiento para un sistema de almacenamiento en baterías a escala de red, donde un número equivocado significa una decisión operativa equivocada.",
        built:
          "Un motor determinista de KPI con una narrativa escrita encima. Cada número del texto se verifica contra los hechos calculados antes de que el reporte salga, respaldado por 648 pruebas automatizadas.",
      },
      grantfox: {
        sector: "Marketplace Web3",
        challenge: "Un marketplace en vivo, nativo por wallet, para prompts y agentes de IA, liquidado en Stellar.",
        built:
          "Como colaboradores externos: verificaciones de seguridad de despliegue, autorización acotada a la wallet y la interfaz de compra y entrega.",
      },
      vertigo: {
        sector: "Hospitalidad",
        challenge: "Un restaurante que necesitaba su sitio web en línea rápido — y a alguien que lo mantuviera al día.",
        built: "El sitio web, entregado rápido, con soporte continuo desde entonces.",
        quote:
          "Entregaron nuestro sitio web rápido y han seguido con nosotros desde entonces — siempre atentos a lo que necesitamos. Cuando algo tiene que cambiar, se lo decimos y queda hecho, sin tener que andar insistiendo. Para un restaurante, eso es una preocupación menos y un socio con el que podemos contar a medida que el negocio crece.",
      },
    },
    openSourceTitle: "Código abierto",
    openSourceIntro: "Nuestras propias herramientas, públicas en GitHub — la ingeniería detrás del trabajo con clientes.",
    openSource: {
      sii: {
        kicker: "Automatización de la autoridad tributaria",
        description:
          "Un núcleo en TypeScript, una CLI y un servidor MCP que automatizan la autoridad tributaria de Chile (SII), con 1.178 pruebas herméticas.",
      },
      previred: {
        kicker: "Automatización del portal de pensiones",
        description:
          "Automatización de solo lectura del portal de cotizaciones previsionales de Chile, diseñada para que los pagos no puedan despacharse por construcción.",
      },
      stellarfit: {
        kicker: "Pagos Web3",
        description:
          "Checkout de suscripción liquidado en Stellar: el acceso se otorga solo después de que la red confirma un pago de un solo uso.",
      },
      glowcheck: {
        kicker: "Visión artificial",
        description:
          "Análisis facial y de piel que combina modelos de DeepFace/TensorFlow con métricas originales de tono de piel, eritema y asimetría.",
      },
      turbotrabajo: {
        kicker: "SaaS en producción",
        description:
          "Una plataforma de postulación laboral en producción: autenticación con Firebase, matching de perfiles, una wallet de tokens del lado del servidor y pagos con Flow.cl.",
      },
    },
  },
  capabilities: {
    eyebrow: "Capacidades",
    title: "Lo que construimos, de punta a punta.",
    paragraph: "Desde el primer mapa de un flujo de trabajo hasta el sistema funcionando en producción: desarrollo de software y consultoría TI a cargo del mismo equipo.",
    items: {
      automation: {
        title: "Automatización de procesos",
        body: "Trabajo repetitivo en portales, planillas y bandejas de entrada, reemplazado por software que funciona por sí solo y registra cada paso.",
      },
      software: {
        title: "Software a medida y plataformas web",
        body: "Aplicaciones web, herramientas internas y plataformas para clientes, construidas en TypeScript y Python y entregadas con pruebas.",
      },
      ai: {
        title: "Agentes de IA, con anclaje en los datos",
        body: "Agentes y asistentes que trabajan sobre tus propios documentos y datos, con cada cifra verificada contra la fuente antes de salir.",
      },
      data: {
        title: "Pipelines de datos y reportes",
        body: "Pipelines que recopilan, limpian y calculan tus KPI, y los reportes que se generan a partir de ellos todos los días.",
      },
      integration: {
        title: "Integración de sistemas y APIs",
        body: "Conexiones entre los sistemas que ya usas — portales, ERP, proveedores de pago, blockchains — mediante APIs estables.",
      },
      cloud: {
        title: "Despliegue en la nube y DevOps",
        body: "Infraestructura, pipelines de CI y releases configurados para que cada cambio se pruebe antes de llegar a producción.",
      },
      monitoring: {
        title: "Monitoreo y alertas",
        body: "Verificaciones que detectan cuando una tarea programada no se ejecutó o un número no cuadra, y alertan a tu equipo.",
      },
      security: {
        title: "Endurecimiento de seguridad",
        body: "Revisiones de configuración, accesos acotados y valores por defecto seguros, para que un sistema no pueda arrancar en un estado inseguro.",
      },
    },
  },
  industries: {
    eyebrow: "Industrias",
    title: "Dónde funciona hoy nuestro software.",
    items: {
      energy: {
        name: "Energía",
        body: "Operaciones solares y de almacenamiento en baterías: software de estación y reportes diarios de rendimiento.",
      },
      government: {
        name: "Gobierno y cumplimiento",
        body: "Automatización de los portales tributario y previsional de Chile, SII y Previred, en modo solo lectura por defecto.",
      },
      procurement: {
        name: "Abastecimiento industrial",
        body: "Licitaciones privadas y solicitudes de compra, respondidas automáticamente.",
      },
      hospitality: {
        name: "Hospitalidad",
        body: "Sitios web de restaurantes, entregados rápido y mantenidos al día.",
      },
      web3: {
        name: "Web3 y pagos",
        body: "Marketplaces nativos por wallet y verificación de pagos on-chain en Stellar.",
      },
      hr: {
        name: "RR. HH. y reclutamiento",
        body: "Plataformas de postulación laboral con matching de candidatos y pagos.",
      },
    },
    photoAlt: "Hileras de paneles solares en un desierto, con montañas al fondo.",
  },
  engagement: {
    eyebrow: "Formas de trabajar con nosotros",
    title: "Empieza con un proceso, o déjanos el sistema completo.",
    items: {
      diagnostic: {
        name: "Diagnóstico",
        body: "Una evaluación breve y de alcance fijo de un proceso: cuánto cuesta hoy, qué automatizar primero y un plan por escrito.",
      },
      project: {
        name: "Proyecto",
        body: "Un sistema definido, construido y entregado según un alcance acordado, con pruebas y documentación.",
      },
      team: {
        name: "Equipo integrado",
        body: "Nuestros ingenieros trabajando dentro de tu operación, junto a las personas que la llevan.",
      },
      operation: {
        name: "Operación gestionada",
        body: "Operamos lo que construimos: monitoreo, reportes y correcciones, con un solo punto de contacto.",
      },
    },
    cta: "Cuéntanos sobre tu proceso",
  },
  products: {
    eyebrow: "Productos",
    title: "Problemas que ya hemos resuelto más de una vez.",
    paragraph: "Sistemas listos, nacidos de nuestro trabajo con clientes y de nuestros proyectos de código abierto, que adaptamos a tu empresa en lugar de construirlos desde cero.",
    requestLabel: "Solicitar acceso",
    items: {
      sii: {
        name: "Automatización SII",
        line: "Los trámites de tu empresa con el Servicio de Impuestos Internos, automatizados mediante una CLI y una API, en modo solo lectura por defecto.",
        basis: "Basado en nuestro proyecto de código abierto sii, con 1.178 pruebas herméticas.",
      },
      previred: {
        name: "Automatización Previred",
        line: "Los procesos de cotizaciones previsionales en Previred, automatizados y en solo lectura, con los pagos imposibles por diseño.",
        basis: "Basado en nuestro proyecto de código abierto previred.",
      },
      bids: {
        name: "Respuesta a licitaciones",
        line: "Responde automáticamente licitaciones privadas y solicitudes de compra, para que ninguna oportunidad se pierda en una bandeja de entrada.",
        basis: "En producción en Sainz Intec.",
      },
      energy: {
        name: "Reportes de energía",
        line: "Reportes diarios de KPI para activos solares y de baterías, con cada número verificado antes de enviar el reporte.",
        basis: "Nacido de nuestro trabajo de reportes para almacenamiento en baterías.",
      },
    },
  },
  notes: {
    eyebrow: "Notas",
    title: "Cómo construimos, por escrito.",
    paragraph: "Textos breves sobre las decisiones de ingeniería detrás del trabajo anterior.",
    readSuffix: "de lectura",
    items: {
      "fail-closed-deployments": {
        title: "Por qué nuestros despliegues se niegan a iniciar",
        dek: "En Grantfox hicimos imposible que un conjunto de configuraciones incorrectas se ejecutara en producción, haciendo que el proceso falle al arrancar en lugar de degradarse silenciosamente.",
        readTime: "5 min",
        body: [
          "Contribuimos a Grantfox, un marketplace nativo por wallet de prompts y agentes de IA construido sobre Stellar, como colaboradores externos que trabajan contra su backend de NestJS y su frontend de Next.js en producción. Una parte de ese trabajo no ha tenido nada que ver con funcionalidades. Ha consistido en recorrer la secuencia de arranque y preguntar, para cada variable de entorno que cambia el comportamiento de seguridad, qué pasa si simplemente se deja sin configurar en producción. En varios casos la respuesta honesta era: la aplicación arranca de todos modos, usando un valor por defecto que estaba bien para un laptop y era peligroso en un servidor.",
          "El caso más claro fue JWT_SECRET. La autenticación basada en tokens es tan fuerte como el secreto usado para firmarlos y verificarlos; quien tenga ese secreto puede acuñar un token que afirme ser cualquier usuario, porque el servidor no tiene manera de distinguir un token auto-emitido de uno que él mismo emitió. El backend solía recurrir a un secreto de desarrollo publicado cuando JWT_SECRET no estaba configurado. Esa cadena existe en el historial del código fuente y en la documentación local de configuración, lo que significa que no es un secreto en absoluto — es un valor conocido. Un servicio que corre con eso en producción no está débilmente protegido, está sin autenticación, solo que con pasos adicionales: falsificar un token con la clave conocida, firmarlo, presentarlo, y la aplicación no tiene base para rechazarlo.",
          "La solución fue dejar de tolerar la ausencia de JWT_SECRET una vez que la aplicación cree que está corriendo de verdad. Al arrancar, la aplicación lee su modo de entorno, y fuera de desarrollo ahora exige que JWT_SECRET esté configurado explícitamente o se niega a iniciar. Sin fallback, sin advertir-y-continuar. Este es un intercambio deliberado: renunciamos a la comodidad de que simplemente funcione en cualquier entorno que alguien olvidó configurar, a cambio de la garantía de que un proceso en producción nunca corre silenciosamente con una clave que un atacante puede buscar. Una caída en el momento del despliegue es ruidosa, inmediata, y bloquea el rollout. Un fallback silencioso es invisible hasta que alguien lo encuentra.",
          "La misma revisión encontró una segunda categoría que parece no estar relacionada, pero lo está: PAYMENT_SIMULATION_ENABLED, MOCK_PAYMENT_ENABLED, MOCK_PAYMENT_FAIL y DB_SEED_ON_STARTUP. Cada una de estas existe por una razón real — quieres ejercitar el flujo de compra sin tocar Stellar, o sin un proveedor de pagos en el circuito, o con un conjunto de datos reproducible cuando arranca un entorno nuevo. El flag de seed en particular escribe una wallet fabricada con un saldo de 450 créditos para que haya algo contra qué probar. Nada de eso es un problema en desarrollo. Se convierte en un problema en el instante en que sigue activado en un despliegue al que usuarios reales pueden acceder.",
          "Tratamos un saldo generado por seed y un pago simulado exitoso como el mismo modo de falla, porque estructuralmente lo son. Una vez que esa wallet de 450 créditos se escribe en la base de datos, nada más adelante puede distinguirla de un saldo que llegó a través de una compra real — los caminos de código de wallet, transacción y compra leen todos de las mismas tablas y no llevan un flag de procedencia que diga este crédito fue inventado. Un flag de pago simulado dejado activo tiene la propiedad idéntica: hace que el flujo de compra reporte éxito sin que se haya movido dinero, y ese éxito es indistinguible de uno real para todo lo que lo lea después. Un estado fabricado es un estado fabricado sin importar qué flag lo produjo, así que los despliegues reales ahora se niegan a iniciar si cualquiera de estos cuatro está activado, de la misma forma en que se niegan a iniciar sin JWT_SECRET.",
          "El mecanismo en ambos casos tiene la misma forma: condicionar el comportamiento inseguro al entorno en el que el proceso cree estar, y hacer que esa condición falle cerrado en lugar de fallar abierto. Fallar abierto significa que una variable sin configurar o mal configurada se resuelve silenciosamente asumiendo desarrollo, asumiendo que está bien — que es exactamente el escenario donde nadie está vigilando. Fallar cerrado significa que esa misma configuración faltante se resuelve negándose a ejecutar, lo que convierte una brecha de seguridad sutil en una falla de despliegue evidente e imposible de pasar por alto. Preferimos que un ingeniero mire fijamente un log de arranque caído y configure la variable correcta, a que esa brecha quede activa en vivo durante todo el tiempo que tome que alguien la note.",
          "La lección general que seguimos reaprendiendo es que los valores por defecto pensados para la experiencia del desarrollador y los pensados para la seguridad en producción normalmente no son el mismo valor, y el código que no distingue entre ambos entornos eventualmente elegirá el conveniente en el peor momento. Es más barato hacer esa distinción explícita al iniciar el proceso — una verificación, un solo lugar, falla de forma ruidosa — que confiar en que cada despliegue esté configurado correctamente a mano y esperar que la diferencia nunca importe.",
        ],
      },
      "llm-grounding": {
        title: "Enseñarle a un LLM dónde terminan los hechos",
        dek: "En un pipeline de reportes de baterías a escala de red, dejamos que un LLM escribiera las oraciones y nunca los números — y aun así verificamos cada número que escribió.",
        readTime: "6 min",
        body: [
          "Construimos el reporte diario de rendimiento para un sistema de almacenamiento de energía en baterías a escala de red de la misma forma en que construiríamos cualquier pipeline de reportes, hasta el último paso. Los datos de SCADA salen del sitio, un motor de KPI en Python los convierte en los números que importan — estado de carga, ciclos de carga y descarga, disponibilidad, lo que sea que exija el contrato — y esos números quedan congelados en un conjunto de hechos antes de que ocurra cualquier otra cosa. El último paso es la redacción: alguien tiene que convertir una tabla de KPI en un reporte que un humano quiera leer. Ese es el paso que le entregamos a un LLM, y también es el paso en el que menos confiamos, razón por la cual todo el pipeline está construido alrededor de no confiar en él.",
          "La decisión de diseño detrás de todo esto es que el LLM nunca calcula nada. No suma una columna, no promedia una semana, no deriva un porcentaje a partir de dos números que le dimos. Cada número que aparece en el reporte final fue calculado por el motor de KPI en Python, punto, antes de que el LLM siquiera vea los datos. El trabajo del modelo es estrictamente narrar: dado este conjunto congelado de hechos, escribir párrafos que un operador de planta querría leer. Esa separación importa porque un motor de KPI determinista es comprobable en el sentido normal — misma entrada, misma salida, siempre — y a un LLM al que además se le pide hacer aritmética por debajo no es determinista ni, en nuestra experiencia, confiablemente correcto en eso. Así que no se lo pedimos. Le pedimos que escriba, y dejamos que el código haga la única parte del trabajo donde equivocarse es silencioso y costoso.",
          "«Conjunto de hechos congelado» está haciendo un trabajo real en esa frase, no solo sonando cuidadoso. Significa que la salida del motor de KPI queda bloqueada antes de invocar al LLM — una estructura fija de números y etiquetas que se le entrega al modelo como contexto y que este no puede revisar, recalcular ni ampliar. El LLM puede elegir cómo redactar un número, en qué orden presentarlo, qué números destacar para la historia de un día dado, pero no puede introducir un número que no esté ya en ese conjunto congelado. Si el modelo quiere decir que el sistema estuvo descargando durante cierta cantidad de horas, esa cifra ya tiene que existir en los hechos que se le entregaron. Nada más adelante del motor de KPI puede inventar un hecho.",
          "Esa restricción solo importa si algo la hace cumplir, así que después de que el LLM escribe su borrador, una verificación de anclaje independiente vuelve a leer la salida. Mecánicamente es directo: se extrae cada token numérico del texto generado — cada cifra, porcentaje y conteo que el modelo escribió — y se compara cada uno contra el conjunto de hechos congelado. Un número en el texto del LLM que no se pueda rastrear hasta un número que Python realmente calculó es una discrepancia. No importa si la discrepancia es una estadística alucinada o un redondeo con apariencia plausible de una cifra real que se desvió al redactarla de nuevo — en cualquier caso, es un número en el reporte que no vino de los datos, y ese es exactamente el modo de falla que este pipeline existe para detectar. Un solo token numérico sin coincidencia en cualquier parte de la salida bloquea la publicación de ese reporte. No se marca para revisión, no se publica con una advertencia — se bloquea.",
          "Consideramos que la verificación de anclaje es lo suficientemente crítica como para necesitar su propia cobertura de pruebas, no solo revisiones puntuales contra algunos reportes de muestra. El pipeline en su conjunto está respaldado por 648 pruebas, y ninguna de ellas hace una llamada de red — la aritmética de KPI, el paso de congelamiento de hechos y la propia verificación de anclaje se ejercitan de forma determinista, sin conexión, en cada ejecución. Esa es una consecuencia directa de mantener separadas la computación y la narración: las partes del sistema donde es más fácil equivocarse de forma catastrófica (aritmética sobre cifras reales de energía y finanzas) son también las partes más baratas de probar exhaustivamente, porque no dependen de lo que a un LLM se le ocurra producir ese día.",
          "Nada de eso te protege de que el reporte simplemente no aparezca. Un pipeline que correctamente se niega a publicar un mal reporte es solo la mitad de la historia si nadie nota que el reporte nunca se ejecutó — un cron job detenido y una verificación de anclaje sólida como roca producen el mismo silencio desde el punto de vista del cliente. Por eso existe una capa de monitoreo junto a la lógica de reportes: una verificación tipo dead-man's-switch que espera que ocurra una ejecución programada y lanza una alerta en el momento en que no ocurre. Corrección y disponibilidad son modos de falla distintos, y no queríamos que una solución para uno sustituyera silenciosamente a la otra.",
          "No lo construimos así porque los LLM sean poco confiables en algún sentido abstracto — lo construimos así porque estábamos poniendo la salida del modelo junto a números que un cliente usaría para tomar decisiones operativas y financieras reales sobre un activo físico real, y 'normalmente correcto' no es una propiedad que puedas entregarle a alguien en esa posición. Cualquiera que publique texto generado por un LLM junto a números que importan está haciendo la misma apuesta, la haya nombrado o no: o se confía implícitamente en la aritmética del modelo, o algo fuera del modelo revisa su trabajo antes de que un humano lo vea. Mantener al LLM completamente fuera del cálculo, congelar los hechos antes de que escriba una sola palabra, y verificar después cada número que emite contra ese conjunto congelado no es una cobertura contra que un modelo sea malo para las matemáticas. Es una negativa a dejar que un paso que no podemos verificar por completo sea el que decida cuáles son los números.",
        ],
      },
      "verified-claims-ledger": {
        title: "Un registro para cada afirmación que publicamos",
        dek: "Por qué la frase 'aún no divulgado' en este sitio y el campo UNAVAILABLE en la API de wallet de Grantfox son la misma decisión de ingeniería.",
        readTime: "5 min",
        body: [
          "Se supone que cada afirmación pública en este sitio se puede rastrear hasta una fuente identificada — un repositorio, un commit, una captura de pantalla, un README — y no hasta nuestro propio recuerdo de lo que construimos. Guardamos ese rastro en un registro: un documento simple que empareja cada oración que publicamos con su origen y con el momento en que la verificamos. Si una afirmación no puede señalar una fila en ese registro, no se publica. Eso suena a un hábito de documentación. En realidad es la misma decisión que tomamos dentro del propio software, y el lugar más claro para verla es una sola respuesta de API dentro de Grantfox.",
          "Grantfox es un marketplace nativo por wallet para prompts y agentes de IA, construido sobre Stellar, y trabajamos en su backend y frontend como colaboradores externos. Ahí, una wallet lleva dos tipos distintos de saldo: un saldo de registro que el backend puede calcular directamente a partir de las compras y transacciones que ha registrado, y un saldo on-chain que requeriría leer efectivamente la red de Stellar. Aún no hemos integrado esa lectura on-chain. El estado honesto de esa parte del sistema es: no conocemos el número.",
          "La forma fácil de manejar esa brecha es simularla — devolver la cifra del registro y etiquetarla como el saldo on-chain, o calcular algo con apariencia plausible y dejar que la pantalla de la wallet lo muestre como cualquier otro campo. Nadie que inspeccionara el JSON lo notaría necesariamente, y un dashboard donde cada campo tiene un número se ve más terminado que uno con una brecha visible. No hicimos eso. La API reporta el saldo on-chain como UNAVAILABLE. No cero, no una estimación, no el número del registro disfrazado de saldo on-chain — un estado explícito que dice que la vía de verificación aún no existe.",
          "Los hashes de transacción reciben el mismo tratamiento. Un hash de transacción real de Stellar es una cadena hexadecimal de 64 caracteres, y Grantfox llena ese campo solo cuando realmente existe uno on-chain. Cuando no existe — una transacción no se ha liquidado, o el flujo en cuestión no produce uno — el campo es null. Podríamos haber entregado un placeholder, algo con forma hexadecimal que llene el campo y satisfaga lo que sea que el frontend espere que se vea una cadena ahí. No lo hicimos, por la misma razón por la que el saldo no se estima: un null es una afirmación verdadera sobre lo que sabemos, y un hash fabricado es una mentira con la forma de una prueba.",
          "Ninguna de esas dos es una decisión grande. Son fáciles de pasar por alto en un diff, y es poco probable que algún usuario pregunte alguna vez por qué un campo de la wallet dice UNAVAILABLE mientras el resto muestra números. Pero es la misma decisión, aplicada al nivel de un campo de API en lugar del nivel de una oración, la que gobierna lo que dejamos entrar a este sitio. Un estado UNAVAILABLE y una etiqueta de aún no divulgado son el mismo movimiento: cuando la respuesta honesta es no tenemos ese número, decirlo así en lugar de calcular algo que se le parezca.",
          "Por eso no publicamos en ninguna parte de este sitio el porcentaje de comisión o fee de Grantfox. Podríamos estimar uno a partir de términos típicos de marketplace, o inferir un rango a partir de las partes de la lógica de comisiones que hemos revisado directamente, y encajaría cómodamente junto a todo lo demás en una página de servicios. En cambio, lo etiquetamos como aún no divulgado, porque no tenemos una fuente para ello de la misma forma en que tenemos una fuente para el endurecimiento de despliegue que entregamos o el flujo de compra que construimos. La misma regla que mantiene un null en el campo de hash de transacción mantiene esa línea fuera de nuestro copy.",
          "El costo es visible en ambos lugares. Una pantalla de wallet con UNAVAILABLE se ve menos terminada que una donde cada campo lleva un número. Una página de servicios con aún no divulgado hace un pitch más plano que una con un porcentaje de comisión y una proyección de ingresos junto al resto de los números. Ninguno de los dos puede darse el lujo de fingir que la brecha no está ahí solo porque llenarla se leería mejor. La alternativa — inventar la pieza faltante — es barata exactamente una vez, y es la misma falla ya sea que aparezca como un saldo de wallet fabricado o como una estadística fabricada en nuestro propio sitio.",
          "Así que el registro no es un descargo de responsabilidad que agregamos después para cubrirnos. Es la misma disciplina que incorporamos en los sistemas que entregamos, corriendo en reversa sobre nuestras propias afirmaciones: antes de que una oración entre a este sitio, preguntamos qué fila la respalda, de la misma forma en que el endpoint de saldo de Grantfox pregunta si realmente tiene una lectura on-chain antes de imprimir una cifra. Cuando la respuesta es no, la oración — igual que el campo — lo dice.",
        ],
      },
    },
  },
  contact: {
    eyebrow: "Contacto",
    title: "Cuéntanos qué proceso no puede detenerse.",
    paragraph: "Leemos cada mensaje nosotros mismos y respondemos en un par de días.",
    nameLabel: "Nombre",
    companyLabel: "Empresa",
    roleLabel: "Cargo",
    optionalLabel: "opcional",
    emailLabel: "Correo de trabajo",
    interestLabel: "¿Qué te interesa?",
    interestPlaceholder: "Elige una opción",
    interests: {
      diagnose: "Diagnosticar un proceso",
      build: "Construir una automatización o un agente de IA",
      products: "Uno de nuestros productos",
      run: "Operar y dar soporte a un sistema existente",
      other: "Otra cosa",
    },
    messageLabel: "Cuéntanos sobre el proceso",
    sendingLabel: "Enviando…",
    sendButton: "Enviar",
    sentMessage: "Enviado — leemos cada mensaje nosotros mismos y respondemos en un par de días.",
    errorMessage: "Algo salió mal al enviar esto — intenta de nuevo, o escribe a",
    errorCta: "directamente.",
    directLabel: "O escríbenos directamente",
  },
  footer: {
    industriesTitle: "Industrias",
    capabilitiesTitle: "Capacidades",
    footageLabel: "Video",
    photoLabel: "Foto",
    companyTitle: "Empresa",
    writingTitle: "Escritos",
    contactTitle: "Contacto",
    openSourceLabel: "Código abierto",
    sourceLabel: "Código fuente de este sitio",
  },
  whatsapp: {
    label: "WhatsApp",
    greeting: "¡Hola TurboDevs! Me gustaría hablar sobre un proyecto.",
  },
  a11y: {
    skipToContent: "Saltar al contenido",
    newTab: "se abre en una pestaña nueva",
    selectLanguage: "Seleccionar idioma",
    pauseVideo: "Pausar video de fondo",
    playVideo: "Reproducir video de fondo",
  },
}
