import type { Dictionary } from "@/i18n/types"

export const es: Dictionary = {
  meta: {
    title: "TurboDevs — Software a Medida, Construido para Funcionar 24/7",
    description:
      "TurboDevs es un estudio de ingeniería de software integral que construye sistemas a medida en web, automatización y Web3 — diseñados para seguir funcionando las 24 horas, no solo el día del lanzamiento.",
  },
  nav: {
    work: "Trabajo",
    grantfox: "Grantfox",
    approach: "Enfoque",
    notes: "Notas",
    contact: "Contacto",
    startProject: "Iniciar un proyecto",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  hero: {
    eyebrow: "Estudio de ingeniería de software",
    headline: "Software a medida que funciona — día y noche.",
    paragraph:
      "Sistemas full-stack, pipelines de automatización e integraciones Web3, diseñados para equipos que necesitan soluciones a medida que se mantengan confiables las 24 horas. Ingeniería políglota — TypeScript, Python, Solidity/Soroban — probada en cumplimiento tributario, pagos Web3 y SaaS en producción funcionando 24/7.",
    ctaPrimary: "Ver el trabajo",
    ctaSecondary: "Habla con nosotros",
    scrollHint: "Desplázate para ver el trabajo",
    sectors: {
      government: "Gobierno y Cumplimiento Normativo",
      web3: "Web3 y Blockchain",
      energy: "Energía e Industria",
      consumerSaas: "Software para Consumidores",
      hospitality: "Hospitalidad y Pequeñas Empresas",
    },
    stats: [
      { value: "1.800+", label: "pruebas automatizadas" },
      { value: "5", label: "repositorios públicos" },
      { value: "7", label: "lenguajes" },
    ],
  },
  services: {
    eyebrow: "Qué construimos",
    title: "Cuatro disciplinas, un mismo estándar de ingeniería.",
    items: [
      {
        title: "Ingeniería de producto full-stack",
        description:
          "Frontends en React/Next.js, servicios en TypeScript y Python, y la disciplina de CI/pruebas para seguir entregando — el mismo stack detrás del SaaS de matching de empleo en producción de turbotrabajo.",
      },
      {
        title: "Integración Web3 y blockchain",
        description:
          "Autenticación nativa por wallet, verificación de pagos on-chain y sistemas adyacentes a smart contracts en Stellar/Soroban — construidos para el checkout de stellarfit confirmado por Horizon y desplegados dentro del marketplace en producción de Grantfox.",
      },
      {
        title: "Sistemas de automatización y cumplimiento",
        description:
          "Automatización con navegador headless y APIs para procesos que los reguladores realmente revisan — de solo lectura por defecto, construida para seguir funcionando correctamente bajo incertidumbre, el patrón detrás de sii y previred.",
      },
      {
        title: "Pipelines con IA integrada, anclados a los hechos",
        description:
          "Los LLM redactan el texto sobre números que tu código ya calculó — nunca los números en sí. Cada afirmación generada se verifica contra un conjunto de hechos congelado antes de publicarse.",
      },
    ],
  },
  work: {
    eyebrow: "Trabajo seleccionado",
    title: "Público, verificable y todavía en funcionamiento.",
    items: {
      sii: {
        kicker: "Automatización de la autoridad tributaria",
        description:
          "Un núcleo en TypeScript, una CLI y un servidor MCP que automatizan el Servicio de Impuestos Internos de Chile (SII), construidos alrededor de barreras de seguridad que lo mantienen confiable en lugar de ser scripts de mejor esfuerzo.",
      },
      previred: {
        kicker: "Automatización del portal de pensiones",
        description:
          "Automatización de solo lectura del portal de cotizaciones previsionales de Chile, diseñada para que los programas de pago sean indespachables por construcción — no solo desalentados por una revisión de código.",
      },
      stellarfit: {
        kicker: "Pagos Web3",
        description:
          "Checkout de suscripción liquidado en la blockchain de Stellar — el acceso se otorga solo después de que Horizon confirma un pago de un solo uso con memo coincidente, sin requerir confianza custodial.",
      },
      glowcheck: {
        kicker: "Visión artificial",
        description:
          "Análisis facial y de piel que combina modelos demográficos de DeepFace/TensorFlow con métricas originales de tono de piel (ITA), eritema y asimetría facial.",
      },
      turbotrabajo: {
        kicker: "SaaS en producción",
        description:
          "Una plataforma de postulación laboral en producción: autenticación con Firebase, matching de perfiles, una wallet de tokens con autoridad del servidor y pagos con Flow.cl de principio a fin.",
      },
      "battery-storage-reporting": {
        kicker: "Energía · Reportes de IA anclados a los hechos",
        description:
          "Reportes diarios automatizados de rendimiento para un sistema de almacenamiento de baterías a escala de red: un motor determinista de KPI combinado con una capa narrativa de LLM en la que cada número generado se verifica contra los hechos congelados antes de su publicación, manteniendo el reporte confiable día tras día.",
      },
    },
  },
  grantfox: {
    eyebrow: "Colaboración destacada",
    title: "Contribuyendo al marketplace de Grantfox, en producción sobre Stellar",
    paragraph:
      "Grantfox opera un marketplace nativo por wallet para prompts y agentes de IA, liquidado en Stellar. Trabajamos directamente en su backend de NestJS y su frontend de Next.js como colaboradores externos — el tipo de trabajo que solo cuenta si un revisor real, no nosotros, decide que es correcto.",
    points: [
      "Seguridad de despliegue reforzada: los entornos que no son de desarrollo requieren un secreto JWT explícito antes de poder iniciar, y no arrancan si quedan activados los flags de pago simulado o de seed de base de datos.",
      "Autorización acotada a la wallet: el saldo, el historial de transacciones y las compras se derivan únicamente del principal autenticado — verificado para que una cuenta no pueda leer ni tocar los datos de otra.",
      "UI de marketplace entregada: las páginas de dashboard, marketplace, detalle de activo y wallet que implementan el flujo de compra y entrega de prompts de la plataforma.",
    ],
    cta: "Visitar Grantfox",
  },
  approach: {
    eyebrow: "Cómo trabajamos",
    title: "Construido para seguir funcionando.",
    paragraph:
      "Cada colaboración descrita arriba sigue la misma disciplina: sistemas construidos para mantenerse confiables en condiciones reales, y cada número publicado rastreable hasta una fuente que puedes verificar. La línea entre lo que un LLM escribe y lo que tiene permitido afirmar se aplica en el código — así lo que decimos coincide con lo que realmente está en funcionamiento.",
    pillars: [
      {
        title: "Determinismo primero",
        body: "Los números vienen del código, no de un modelo. Donde usamos un LLM, este redacta texto sobre hechos ya calculados — nunca calcula el hecho en sí.",
      },
      {
        title: "Construido para el uptime",
        body: "Una configuración faltante, una clave sin rotar, una entrada no verificable — el sistema lo detecta antes de que llegue a producción, de modo que lo que está en vivo sigue funcionando en lugar de degradarse silenciosamente.",
      },
      {
        title: "Afirmaciones rastreables",
        body: "Cada cifra que publicamos, sobre nuestro propio trabajo o el de un cliente, está respaldada por una fuente que podemos señalar. Si no podemos respaldarla con una fuente, no la publicamos.",
      },
    ],
  },
  demo: {
    eyebrow: "Míralo en acción",
    title: "Acciona un interruptor. Mira qué lo mantiene funcionando.",
    paragraph:
      "Esta es la misma protección de despliegue que corre en el backend real de Grantfox, reducida a un interruptor. Cambia los flags de abajo y presiona deploy para ver la verificación exacta que evita que una build mal configurada llegue a producción — la lógica corre completamente en tu navegador, sin una API falsa haciendo de servidor.",
    panelLabel: "panel de despliegue",
    toggles: {
      jwt: { label: "JWT_SECRET configurado", description: "Secreto explícito para firmar tokens de autenticación." },
      seed: { label: "DB_SEED_ON_STARTUP", description: "Genera un saldo de wallet de demostración al iniciar." },
      nodeEnv: { label: "NODE_ENV=production", description: "Bloqueado para esta demo." },
    },
    deployButton: "Desplegar",
    terminalPrompt: "$ NODE_ENV=production npm run start",
    emptyState: "// presiona Desplegar para ejecutar la verificación",
    reasons: {
      jwtMissing:
        "JWT_SECRET no está configurado — se recurriría al secreto de desarrollo publicado, permitiendo que cualquiera falsifique un token válido",
      seedOn:
        "DB_SEED_ON_STARTUP está activado en producción — el arranque generaría una wallet fabricada con 450 créditos",
    },
    refusedPrefix: "✗ Inicio rechazado — ",
    successLine: "✓ Secuencia de arranque iniciada — todas las verificaciones de seguridad pasaron.",
  },
  notes: {
    eyebrow: "Notas de campo",
    title: "Notas desde el trabajo.",
    paragraph:
      "Textos breves sobre las decisiones de ingeniería reales detrás del trabajo anterior — no resúmenes, el razonamiento.",
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
    eyebrow: "Ponte en contacto",
    title: "Cuéntanos qué estás construyendo.",
    paragraph:
      "Trabajo de producto full-stack, una integración Web3, o un pipeline de automatización que tiene que resistir una auditoría — cuéntanos la forma del problema y te diremos con franqueza si somos un buen fit.",
    nameLabel: "Nombre",
    emailLabel: "Correo electrónico",
    messageLabel: "¿Qué estás construyendo?",
    sendingLabel: "Enviando…",
    sendButton: "Enviar",
    sentMessage: "Enviado — leemos cada mensaje nosotros mismos y respondemos en un par de días.",
    errorMessage: "Algo salió mal al enviar esto — intenta de nuevo, o escribe a",
    errorCta: "directamente.",
  },
  footer: {
    sourceLabel: "Código fuente",
  },
  webVitals: {
    eyebrow: "Esta página, medida en vivo",
    caption:
      "Cifras reales de tu visita, ahora mismo — la misma regla de afirmar solo lo verificado aplicada a nuestro propio sitio.",
    good: "bien",
    needsAttention: "necesita atención",
    waitingForPaint: "midiendo…",
    waitingForInteraction: "esperando un clic",
    metrics: {
      lcp: { label: "Velocidad de carga", description: "Cuánto tardó en aparecer el contenido principal." },
      inp: {
        label: "Capacidad de respuesta",
        description: "Qué tan rápido reacciona la página cuando haces clic en algo.",
      },
      cls: { label: "Estabilidad visual", description: "Si el contenido salta mientras carga la página." },
    },
  },
  whatsapp: {
    label: "WhatsApp",
    greeting: "¡Hola TurboDevs! Me gustaría hablar sobre un proyecto.",
  },
}
