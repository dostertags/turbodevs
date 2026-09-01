import type { Dictionary } from "@/i18n/types"

export const pt: Dictionary = {
  meta: {
    title: "TurboDevs — Software Sob Medida, Construído para Rodar 24/7",
    description:
      "A TurboDevs é um estúdio de engenharia de software full-service que constrói sistemas sob medida para web, automação e Web3 — projetados para continuar funcionando o tempo todo, não apenas no dia do lançamento.",
  },
  nav: {
    work: "Trabalho",
    grantfox: "Grantfox",
    approach: "Abordagem",
    notes: "Notas",
    contact: "Contato",
    startProject: "Iniciar um projeto",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
  },
  hero: {
    eyebrow: "Estúdio de engenharia de software",
    headline: "Software sob medida que funciona — de dia e de noite.",
    paragraph:
      "Sistemas full-stack, pipelines de automação e integrações Web3, projetados para equipes que precisam de soluções sob medida que se mantêm confiáveis o tempo todo. Engenharia poliglota — TypeScript, Python, Solidity/Soroban — comprovada em conformidade tributária, pagamentos Web3 e SaaS em produção rodando 24/7.",
    ctaPrimary: "Ver o trabalho",
    ctaSecondary: "Falar conosco",
    scrollHint: "Role até o trabalho",
    sectors: {
      government: "Governo & Conformidade",
      web3: "Web3 & Blockchain",
      energy: "Energia & Indústria",
      consumerSaas: "Software para Consumidor",
      hospitality: "Hotelaria & Pequenos Negócios",
    },
    stats: [
      { value: "1.800+", label: "testes automatizados" },
      { value: "5", label: "repositórios públicos" },
      { value: "7", label: "linguagens" },
    ],
  },
  services: {
    eyebrow: "O que construímos",
    title: "Quatro disciplinas, um único padrão de engenharia.",
    items: [
      {
        title: "Engenharia de produto full-stack",
        description:
          "Frontends em React/Next.js, serviços em TypeScript e Python, e a disciplina de CI/testes para mantê-los sempre em produção — a mesma stack por trás do SaaS de match de vagas em produção da turbotrabajo.",
      },
      {
        title: "Integração Web3 e blockchain",
        description:
          "Autenticação nativa via carteira, verificação de pagamentos on-chain e sistemas adjacentes a contratos inteligentes em Stellar/Soroban — construídos para o checkout com confirmação pela Horizon da stellarfit e lançados dentro do marketplace em produção da Grantfox.",
      },
      {
        title: "Sistemas de automação e conformidade",
        description:
          "Automação de navegador headless e de API para processos que os órgãos reguladores realmente verificam — somente leitura por padrão, construída para continuar funcionando corretamente sob incerteza, o padrão por trás de sii e previred.",
      },
      {
        title: "Pipelines de IA integrados, ancorados em fatos",
        description:
          "LLMs escrevem o texto sobre números que o seu código já calculou — nunca os números em si. Toda afirmação gerada é verificada novamente contra um conjunto de fatos congelado antes de ser publicada.",
      },
    ],
  },
  work: {
    eyebrow: "Trabalho selecionado",
    title: "Público, verificável e ainda em funcionamento.",
    items: {
      sii: {
        kicker: "Automação de autoridade tributária",
        description:
          "Um núcleo em TypeScript, uma CLI e um servidor MCP que automatizam a autoridade tributária do Chile (SII), construídos em torno de guardrails que o mantêm confiável em vez de scripts de melhor esforço.",
      },
      previred: {
        kicker: "Automação de portal previdenciário",
        description:
          "Automação somente leitura do portal de contribuições previdenciárias do Chile, projetada para que o disparo de pagamentos seja impossível por construção — não apenas desencorajado por uma revisão de código.",
      },
      stellarfit: {
        kicker: "Pagamentos Web3",
        description:
          "Checkout de assinatura liquidado na blockchain Stellar — o acesso só é concedido depois que a Horizon confirma um pagamento de uso único com memo correspondente, sem exigir confiança custodial.",
      },
      glowcheck: {
        kicker: "Visão computacional",
        description:
          "Análise facial e de pele combinando modelos demográficos DeepFace/TensorFlow com métricas próprias de tom de pele (ITA), eritema e assimetria facial.",
      },
      turbotrabajo: {
        kicker: "SaaS em produção",
        description:
          "Uma plataforma de candidatura a vagas em produção: autenticação via Firebase, correspondência de perfis, uma carteira de tokens com autoridade no servidor e pagamentos via Flow.cl de ponta a ponta.",
      },
      "battery-storage-reporting": {
        kicker: "Energia · Relatórios ancorados em IA",
        description:
          "Relatórios diários automatizados de desempenho para um sistema de armazenamento de energia em baterias de escala de rede elétrica: um mecanismo determinístico de KPIs combinado com uma camada narrativa de LLM em que cada número gerado é verificado novamente contra os fatos congelados antes da publicação, mantendo o relatório confiável dia após dia.",
      },
    },
  },
  grantfox: {
    eyebrow: "Projeto em destaque",
    title: "Contribuindo para o marketplace Stellar em produção da Grantfox",
    paragraph:
      "A Grantfox opera um marketplace nativo de carteira para prompts e agentes de IA, liquidado em Stellar. Trabalhamos diretamente no seu backend em NestJS e no frontend em Next.js como colaboradores externos — o tipo de trabalho que só conta se um revisor de verdade, e não nós, decidir que está correto.",
    points: [
      "Segurança de deploy reforçada: ambientes que não são de desenvolvimento exigem um segredo JWT explícito antes de inicializar, e não sobem com flags de pagamento simulado ou de seed de banco de dados ativadas.",
      "Autorização por escopo de carteira: saldo, histórico de transações e compras são derivados apenas do principal autenticado — verificado para que uma conta não consiga ler ou alterar os dados de outra.",
      "UI do marketplace entregue: as páginas de dashboard, marketplace, detalhe do ativo e carteira, implementando o fluxo de compra e entrega de prompts da plataforma.",
    ],
    cta: "Visitar a Grantfox",
  },
  approach: {
    eyebrow: "Como trabalhamos",
    title: "Construído para continuar funcionando.",
    paragraph:
      "Todo projeto acima segue a mesma disciplina: sistemas construídos para permanecer confiáveis em condições reais, e cada número publicado rastreável até uma fonte que você pode conferir. A linha entre o que um LLM escreve e o que ele tem permissão para afirmar é imposta em código — para que o que dizemos corresponda ao que está realmente em produção.",
    pillars: [
      {
        title: "Determinístico antes de tudo",
        body: "Os números vêm do código, não de um modelo. Quando usamos um LLM, ele escreve texto sobre fatos já calculados — nunca calcula o fato em si.",
      },
      {
        title: "Construído para uptime",
        body: "Configuração ausente, uma chave não rotacionada, uma entrada não verificável — o sistema detecta isso antes que chegue à produção, para que o que está em produção continue funcionando em vez de degradar silenciosamente.",
      },
      {
        title: "Afirmações rastreáveis",
        body: "Todo número que publicamos, sobre o nosso próprio trabalho ou o de um cliente, é respaldado por uma fonte que podemos apontar. Se não conseguimos rastrear a fonte, não publicamos.",
      },
    ],
  },
  demo: {
    eyebrow: "Veja funcionando",
    title: "Ative um toggle. Veja o que o mantém funcionando.",
    paragraph:
      "Esta é a mesma proteção de deploy que roda no backend real da Grantfox, reduzida a um toggle. Altere as flags abaixo e clique em deploy para ver exatamente a verificação que impede um build malconfigurado de chegar à produção — a lógica roda inteiramente no seu navegador, sem nenhuma API falsa simulando um servidor.",
    panelLabel: "painel de deploy",
    toggles: {
      jwt: { label: "JWT_SECRET definido", description: "Segredo explícito para assinar tokens de autenticação." },
      seed: { label: "DB_SEED_ON_STARTUP", description: "Popula um saldo de carteira de demonstração na inicialização." },
      nodeEnv: { label: "NODE_ENV=production", description: "Bloqueado para esta demonstração." },
    },
    deployButton: "Deploy",
    terminalPrompt: "$ NODE_ENV=production npm run start",
    emptyState: "// pressione deploy para executar a verificação",
    reasons: {
      jwtMissing: "JWT_SECRET não definido — cairia de volta para o segredo de desenvolvimento publicado, permitindo que qualquer pessoa forje um token válido",
      seedOn: "DB_SEED_ON_STARTUP está ativado em produção — a inicialização criaria uma carteira fabricada com 450 créditos",
    },
    refusedPrefix: "✗ Inicialização recusada — ",
    successLine: "✓ Sequência de inicialização iniciada — todas as verificações de proteção foram aprovadas.",
  },
  notes: {
    eyebrow: "Notas de campo",
    title: "Notas do trabalho.",
    paragraph:
      "Textos curtos sobre as decisões reais de engenharia por trás do trabalho acima — não resumos, o raciocínio.",
    readSuffix: "de leitura",
    items: {
      "fail-closed-deployments": {
        title: "Por que nossos deploys se recusam a iniciar",
        dek: "Na Grantfox, tornamos um conjunto de configurações incorretas impossível de rodar em produção, fazendo o processo travar na inicialização em vez de degradar silenciosamente.",
        readTime: "5 min",
        body: [
          "Contribuímos para a Grantfox, um marketplace nativo de carteira para prompts e agentes de IA construído sobre Stellar, como colaboradores externos trabalhando sobre seu backend em NestJS e frontend em Next.js em produção. Parte desse trabalho não teve nada a ver com funcionalidades. Consistiu em percorrer a sequência de inicialização e perguntar, para cada variável de ambiente que altera o comportamento de segurança, o que acontece se ela simplesmente ficar sem definição em produção. Em vários pontos, a resposta honesta foi: a aplicação inicia mesmo assim, usando um valor padrão que era adequado para um laptop e perigoso em um servidor.",
          "O caso mais claro foi o JWT_SECRET. A autenticação baseada em tokens só é tão forte quanto o segredo usado para assiná-los e verificá-los; qualquer pessoa que possua esse segredo pode emitir um token se passando por qualquer usuário, porque o servidor não tem como distinguir um token autoemitido de um que ele mesmo emitiu. Antes, o backend caía de volta para um dev-secret publicado quando o JWT_SECRET não estava definido. Essa string existe no histórico do código-fonte e na documentação local de configuração, o que significa que não é um segredo — é um valor conhecido. Um serviço rodando com esse valor em produção não está fracamente protegido, está sem autenticação nenhuma, só que com passos extras: forjar um token com a chave conhecida, assiná-lo, apresentá-lo, e a aplicação não tem base nenhuma para recusá-lo.",
          "A correção foi parar de tolerar a ausência do JWT_SECRET a partir do momento em que a aplicação acredita estar rodando de verdade. Na inicialização, a aplicação lê seu modo de ambiente e, fora do desenvolvimento, agora exige que o JWT_SECRET esteja explicitamente definido, ou se recusa a iniciar. Sem fallback, sem aviso-e-continua. Essa é uma troca deliberada: abrimos mão da conveniência de simplesmente funcionar em qualquer ambiente que alguém esqueceu de configurar, em troca da garantia de que um processo em produção nunca vai rodar silenciosamente com uma chave que um atacante pode consultar. Uma falha no momento do deploy é barulhenta, imediata e bloqueia o rollout. Um fallback silencioso é invisível até que alguém o descubra.",
          "A mesma revisão revelou uma segunda categoria que parece não ter relação, mas tem: PAYMENT_SIMULATION_ENABLED, MOCK_PAYMENT_ENABLED, MOCK_PAYMENT_FAIL e DB_SEED_ON_STARTUP. Cada uma delas existe por um motivo real — você quer exercitar o fluxo de compra sem tocar em Stellar, ou sem um provedor de pagamento no meio, ou com um conjunto de dados reproduzível quando um ambiente novo é inicializado. A flag de seed, em particular, grava uma carteira fabricada com um saldo de 450 créditos para que haja algo contra o que testar. Nada disso é um problema em desenvolvimento. Vira um problema no instante em que continua ativo em um deploy que usuários reais conseguem acessar.",
          "Tratamos um saldo semeado e um sucesso de pagamento simulado como o mesmo modo de falha, porque estruturalmente é exatamente isso que são. Assim que essa carteira de 450 créditos é gravada no banco de dados, nada a jusante consegue diferenciá-la de um saldo que chegou por meio de uma compra real — os caminhos de código da carteira, da transação e da compra leem todos das mesmas tabelas e não carregam nenhuma flag de proveniência dizendo que esse crédito foi inventado. Uma flag de pagamento simulado deixada ativada tem a mesma propriedade: faz o fluxo de compra reportar sucesso sem que nenhum dinheiro tenha se movido, e esse sucesso é indistinguível de um real para tudo que o lê depois. Estado fabricado é estado fabricado, não importa qual flag o produziu, então deploys reais agora se recusam a iniciar se qualquer uma dessas quatro estiver ativada, da mesma forma que se recusam a iniciar sem o JWT_SECRET.",
          "O mecanismo em ambos os casos tem o mesmo formato: condicionar o comportamento inseguro ao ambiente em que o processo acredita estar, e fazer com que essa condição falhe fechada em vez de falhar aberta. Falhar aberta significa que uma variável não definida ou malconfigurada silenciosamente assume que está em dev, assume que está tudo bem — exatamente o cenário em que ninguém está observando. Falhar fechada significa que a mesma configuração ausente resolve se recusar a rodar, o que transforma uma brecha de segurança sutil em uma falha de deploy óbvia e impossível de ignorar. Preferimos que um engenheiro encare um log de inicialização travado e defina a variável correta do que deixar essa brecha ativa em produção pelo tempo que for até alguém perceber.",
          "A lição geral que continuamos reaprendendo é que os padrões voltados à experiência do desenvolvedor e os padrões voltados à segurança em produção geralmente não são o mesmo valor, e um código que não distingue os dois ambientes acabará escolhendo o mais conveniente no pior momento possível. É mais barato tornar essa distinção explícita na inicialização do processo — uma verificação, em um só lugar, falhando de forma barulhenta — do que confiar que todo deploy será configurado corretamente à mão e torcer para que a diferença nunca importe.",
        ],
      },
      "llm-grounding": {
        title: "Ensinando um LLM onde os fatos terminam",
        dek: "Em um pipeline de relatórios para baterias de escala de rede elétrica, deixamos um LLM escrever as frases e nunca os números — e mesmo assim verificamos cada número que ele escreveu.",
        readTime: "6 min",
        body: [
          "Construímos o relatório diário de desempenho para um sistema de armazenamento de energia em baterias de escala de rede elétrica da mesma forma que construiríamos qualquer pipeline de relatórios, até a última etapa. Os dados de SCADA saem do local, um mecanismo de KPIs em Python os transforma nos números que importam — estado de carga, ciclos de carga e descarga, disponibilidade, o que quer que o contrato exija — e esses números são congelados em um conjunto de fatos antes que qualquer outra coisa aconteça. A última etapa é a redação: alguém precisa transformar uma tabela de KPIs em um relatório que um humano queira ler. Essa é a etapa que entregamos a um LLM, e também é a etapa em que menos confiamos — por isso todo o pipeline é construído em torno da ideia de não confiar nele.",
          "A decisão de design por trás de tudo isso é que o LLM nunca calcula nada. Ele não soma uma coluna, não tira a média de uma semana, não deriva uma porcentagem a partir de dois números que demos a ele. Todo número que aparece no relatório final foi calculado pelo mecanismo de KPIs em Python, ponto final, antes mesmo de o LLM ver os dados. O trabalho do modelo é estritamente narrativo: dado esse conjunto congelado de fatos, escrever parágrafos que um operador de usina queira ler. Essa separação importa porque um mecanismo determinístico de KPIs é testável no sentido normal — mesma entrada, mesma saída, sempre — e um LLM que também precisasse fazer aritmética por baixo dos panos não é determinístico nem, pela nossa experiência, confiavelmente correto nisso. Então não pedimos que ele faça isso. Pedimos que ele escreva, e deixamos que o código faça a única parte do trabalho em que estar errado é silencioso e caro.",
          "'Conjunto de fatos congelado' está fazendo um trabalho real nessa frase, não é só um jeito cuidadoso de falar. Significa que a saída do mecanismo de KPIs é travada antes de o LLM ser invocado — uma estrutura fixa de números e rótulos que o modelo recebe como contexto e não pode revisar, recalcular ou estender. O LLM pode escolher como formular um número, em que ordem apresentá-lo, quais números destacar na história de um determinado dia, mas não pode introduzir um número que ainda não esteja presente nesse conjunto congelado. Se o modelo quiser dizer que o sistema descarregou por um certo número de horas, esse valor já precisa existir nos fatos que lhe foram entregues. Nada depois do mecanismo de KPIs tem permissão para inventar um fato.",
          "Essa restrição só importa se algo a impõe, então, depois que o LLM escreve seu rascunho, uma verificação de embasamento separada relê a saída. Mecanicamente, é simples: extrair cada token numérico do texto gerado — cada valor, porcentagem e contagem que o modelo escreveu — e comparar cada um deles com o conjunto de fatos congelado. Um número no texto do LLM que não seja rastreável até um número que o Python realmente calculou é uma incompatibilidade. Não importa se a incompatibilidade é uma estatística alucinada ou um arredondamento de aparência plausível de um número real que se desviou ao ser reformulado — de qualquer forma, é um número no relatório que não veio dos dados, e é exatamente esse o modo de falha que esse pipeline existe para capturar. Um único token numérico incompatível em qualquer lugar da saída bloqueia a publicação do relatório. Não é sinalizado para revisão, não é publicado com uma ressalva — é bloqueado.",
          "Tratamos a verificação de embasamento como estrutural o suficiente para merecer sua própria cobertura de testes, não apenas verificações pontuais em alguns relatórios de amostra. O pipeline como um todo é sustentado por 648 testes, e nenhum deles faz uma chamada de rede — a matemática dos KPIs, a etapa de congelamento dos fatos e a própria verificação de embasamento são todas exercitadas de forma determinística, offline, a cada execução. Isso é uma consequência direta de manter cálculo e narração separados: as partes do sistema mais fáceis de errar de forma catastrófica (aritmética sobre números reais de energia e financeiros) também são as partes mais baratas de testar exaustivamente, porque não dependem do que um LLM sente vontade de produzir naquele dia.",
          "Nada disso protege contra o relatório simplesmente não aparecer. Um pipeline que corretamente se recusa a publicar um relatório ruim é só metade da história se ninguém perceber que o relatório nunca rodou — um cron job travado e uma verificação de embasamento sólida como rocha produzem o mesmo silêncio do ponto de vista do cliente. Por isso existe uma camada de monitoramento ao lado da lógica de geração dos relatórios: uma verificação do tipo dead-man's-switch que espera que uma execução agendada aconteça e dispara um alerta no instante em que ela não acontece. Corretude e vivacidade são modos de falha diferentes, e não queríamos que a correção de um servisse silenciosamente como substituto do outro.",
          "Não construímos dessa forma porque LLMs sejam pouco confiáveis em algum sentido abstrato — construímos assim porque estávamos colocando a saída do modelo ao lado de números que um cliente usaria para tomar decisões reais, operacionais e financeiras, sobre um ativo físico real, e 'geralmente certo' não é uma propriedade que se pode entregar a alguém nessa posição. Qualquer um que publique texto gerado por LLM ao lado de números que importam está fazendo a mesma aposta, tenha nomeado isso ou não: ou a aritmética do modelo é confiada implicitamente, ou algo fora do modelo verifica seu trabalho antes de um humano vê-lo. Manter o LLM totalmente fora do cálculo, congelar os fatos antes de ele escrever uma palavra, e verificar depois cada número que ele emite contra esse conjunto congelado não é uma proteção contra o modelo ser ruim em matemática. É uma recusa em deixar que uma etapa que não conseguimos verificar totalmente seja a que decide quais são os números.",
        ],
      },
      "verified-claims-ledger": {
        title: "Um registro para cada afirmação que publicamos",
        dek: "Por que a frase 'ainda não divulgado' neste site e o campo UNAVAILABLE na API de carteira da Grantfox são a mesma decisão de engenharia.",
        readTime: "5 min",
        body: [
          "Toda afirmação pública neste site deve remeter a uma fonte nomeada — um repositório, um commit, uma captura de tela, um README — e não à nossa própria lembrança do que construímos. Mantemos esse rastro em um registro: um documento simples que associa cada frase que publicamos à sua origem e a quando a verificamos. Se uma afirmação não consegue apontar para uma linha nesse registro, ela não é publicada. Isso parece um hábito de documentação. Na verdade, é a mesma decisão que tomamos dentro do próprio software, e o lugar mais claro para ver isso é uma única resposta de API dentro da Grantfox.",
          "A Grantfox é um marketplace nativo de carteira para prompts e agentes de IA, construído sobre Stellar, e trabalhamos em seu backend e frontend como colaboradores externos. Uma carteira ali carrega dois tipos diferentes de saldo: um saldo de registro que o backend consegue calcular diretamente a partir das compras e transações que registrou, e um saldo on-chain que exigiria de fato ler a rede Stellar. Ainda não integramos essa leitura on-chain. O estado honesto dessa parte do sistema é: não sabemos o número.",
          "A forma fácil de lidar com essa lacuna seria fingir — devolver o número do registro e rotulá-lo como o saldo on-chain, ou calcular algo de aparência plausível e deixar a tela da carteira renderizá-lo como qualquer outro campo. Ninguém inspecionando o JSON necessariamente perceberia, e um painel em que todo campo tem um número parece mais acabado do que um com uma lacuna visível. Não fizemos isso. A API reporta o saldo on-chain como UNAVAILABLE. Não zero, não uma estimativa, não o número do registro disfarçado de rótulo on-chain — um status explícito que diz que o caminho de verificação ainda não existe.",
          "Os hashes de transação recebem o mesmo tratamento. Um hash de transação real da Stellar é uma string hexadecimal de 64 caracteres, e a Grantfox só preenche esse campo quando um hash realmente existe on-chain. Quando não existe — uma transação não foi liquidada, ou o fluxo em questão não produz um — o campo é null. Poderíamos ter entregado um placeholder, algo com formato hexadecimal que preenchesse o campo e satisfizesse o que quer que o frontend espere que uma string pareça ali. Não fizemos isso, pelo mesmo motivo pelo qual o saldo não é estimado: um null é uma afirmação verdadeira sobre o que sabemos, e um hash fabricado é uma mentira vestida com a forma de uma prova.",
          "Nenhuma dessas é uma decisão grande. São fáceis de passar despercebidas em um diff, e é improvável que algum usuário chegue a perguntar por que um campo da carteira diz UNAVAILABLE enquanto os demais mostram números. Mas é a mesma decisão, aplicada no nível de um campo de API em vez do nível de uma frase, que governa o que deixamos entrar neste site. Um status UNAVAILABLE e um rótulo 'ainda não divulgado' são o mesmo movimento: quando a resposta honesta é não temos esse número, dizer isso em vez de calcular algo que se pareça com ele.",
          "É por isso que não publicamos a porcentagem de taxa ou comissão da Grantfox em nenhum lugar deste site. Poderíamos estimar uma a partir de termos típicos de marketplace, ou inferir uma faixa a partir das partes da lógica de taxas que revisamos diretamente, e ela se encaixaria confortavelmente ao lado de tudo mais em uma página de serviços. Em vez disso, rotulamos como 'ainda não divulgado', porque não temos uma fonte para isso da mesma forma que temos uma fonte para o hardening de deploy que entregamos ou para o fluxo de compra que construímos. A mesma regra que mantém um null no campo de hash de transação mantém essa linha fora do nosso texto.",
          "O custo é visível nos dois lugares. Uma tela de carteira com UNAVAILABLE parece menos acabada do que uma em que todo campo carrega um número. Uma página de serviços com 'ainda não divulgado' torna o discurso mais fraco do que uma com uma porcentagem de taxa e uma projeção de receita ao lado dos demais números. Nenhum de nós pode fingir que a lacuna não existe só porque preenchê-la soaria melhor. A alternativa — inventar a peça faltante — é barata exatamente uma vez, e é a mesma falha, quer apareça como um saldo de carteira fabricado ou como uma estatística fabricada em nosso próprio site.",
          "Portanto, o registro não é um aviso legal que colamos depois do fato para nos proteger. É a mesma disciplina que embutimos nos sistemas que entregamos, rodando ao contrário sobre as nossas próprias afirmações: antes de uma frase entrar neste site, perguntamos qual linha a sustenta, da mesma forma que o endpoint de saldo da Grantfox pergunta se de fato tem uma leitura on-chain antes de imprimir um número. Quando a resposta é não, a frase — assim como o campo — diz isso.",
        ],
      },
    },
  },
  contact: {
    eyebrow: "Entre em contato",
    title: "Conte-nos o que você está construindo.",
    paragraph:
      "Trabalho de produto full-stack, uma integração Web3, ou um pipeline de automação que precisa resistir a uma auditoria — envie o formato do problema e diremos claramente se é um bom encaixe.",
    nameLabel: "Nome",
    emailLabel: "E-mail",
    messageLabel: "O que você está construindo?",
    sendingLabel: "Enviando…",
    sendButton: "Enviar",
    sentMessage: "Enviado — lemos cada mensagem pessoalmente e respondemos em poucos dias.",
    errorMessage: "Algo deu errado ao enviar isso — tente novamente, ou envie um e-mail",
    errorCta: "diretamente.",
  },
  footer: {
    sourceLabel: "Código-fonte",
  },
  webVitals: {
    eyebrow: "Esta página, medida ao vivo",
    caption:
      "Números reais da sua visita, agora mesmo — a mesma regra de afirmar apenas o que é verificado aplicada ao nosso próprio site.",
    good: "bom",
    needsAttention: "precisa de atenção",
    waitingForPaint: "medindo…",
    waitingForInteraction: "aguardando um clique",
    metrics: {
      lcp: { label: "Velocidade de carregamento", description: "Quanto tempo o conteúdo principal levou para aparecer." },
      inp: {
        label: "Capacidade de resposta",
        description: "Com que rapidez a página reage quando você clica em algo.",
      },
      cls: { label: "Estabilidade visual", description: "Se o conteúdo salta enquanto a página carrega." },
    },
  },
  whatsapp: {
    label: "WhatsApp",
    greeting: "Olá, TurboDevs! Gostaria de falar sobre um projeto.",
  },
}
