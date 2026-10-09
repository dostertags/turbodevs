import type { Dictionary } from "@/i18n/types"

export const pt: Dictionary = {
  meta: {
    title: "TurboDevs — Software para operações que não podem parar",
    description:
      "A TurboDevs é um estúdio de engenharia de software. Encontramos o processo que custa horas ou oportunidades à sua equipe, o substituímos por software e o mantemos funcionando 24/7.",
  },
  nav: {
    services: "Serviços",
    work: "Trabalho",
    products: "Produtos",
    notes: "Notas",
    contact: "Contato",
    cta: "Fale conosco",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
  },
  hero: {
    eyebrow: "Estúdio de engenharia de software",
    headline: "Software para operações que não podem parar.",
    paragraph:
      "Feito para software de missão crítica, onde ficar fora do ar não é uma opção. Construímos sistemas resilientes e prontos para produção — de monitoramento de usinas solares e motores de conformidade tributária a pagamentos Web3 — sustentados por confiabilidade operacional 24/7.",
    ctaPrimary: "Fale conosco",
    ctaSecondary: "Ver o trabalho",
    clientsLabel: "Em produção com",
  },
  stats: {
    eyebrow: "Em números",
    items: {
      tests: "testes automatizados por trás dos nossos sistemas para a autoridade tributária e de relatórios de energia",
      systems: "sistemas de clientes em produção que construímos ou para os quais contribuímos",
      portals: "portais do governo chileno automatizados: SII e Previred",
      uptime: "de operação para os sistemas que operamos",
    },
  },
  problem: {
    eyebrow: "O problema",
    title: "O trabalho que mantém uma empresa funcionando é o trabalho que ninguém tem tempo de consertar.",
    body: "Declarações com prazo. Usinas que reportam todos os dias. Licitações que expiram em uma caixa de entrada. Esses processos rodam em planilhas, portais e na memória de alguém — até o dia em que deixam de rodar. Nós os substituímos por software que faz o trabalho, verifica a própria saída e continua funcionando à noite.",
  },
  services: {
    eyebrow: "Como trabalhamos",
    title: "Quatro etapas. Comece por qualquer uma ou nos entregue o ciclo inteiro.",
    stages: [
      {
        title: "Diagnosticar",
        line: "Encontrar o processo que mais custa a você.",
        body: "Sentamos com as pessoas que fazem o trabalho, mapeamos o processo passo a passo e registramos quais etapas custam horas, erros ou oportunidades perdidas — e quais automatizar primeiro.",
      },
      {
        title: "Construir",
        line: "Software que faz o trabalho.",
        body: "Automações, integrações e agentes de IA construídos sobre os seus próprios arquivos e sistemas. Os números vêm do código; quando um modelo escreve, ele escreve sobre fatos já calculados, e cada número é verificado antes de sair.",
        proof: "Em produção: o respondedor de licitações privadas da Sainz Intec.",
      },
      {
        title: "Implantar",
        line: "Dentro da sua operação.",
        body: "Nos conectamos aos portais, arquivos e fontes de dados que sua equipe já usa, e trabalhamos ao lado das pessoas que os operam até que o sistema faça parte da rotina.",
        proof: "Na prática: nossas automações do SII e da Previred, construídas sobre os portais que as equipes chilenas usam todo mês.",
      },
      {
        title: "Operar",
        line: "24/7, monitorado.",
        body: "Operamos o que construímos: monitoramento, relatórios diários e uma verificação de cada saída, para que continue funcionando muito depois do dia do lançamento.",
        proof: "Em produção: a estação solar com baterias da Quorelia e um relatório diário de armazenamento em baterias.",
      },
    ],
  },
  work: {
    eyebrow: "Trabalho",
    title: "Sistemas rodando em produção hoje.",
    challengeLabel: "O desafio",
    builtLabel: "O que construímos",
    confidentialClient: "Cliente confidencial do setor de energia",
    visitLabel: "Visitar",
    cases: {
      quorelia: {
        sector: "Energia",
        challenge: "Uma estação solar com baterias que precisa operar dia e noite, sem ninguém ao lado dela.",
        built: "O software que opera a estação dia e noite, sem parar.",
        quote:
          "A TurboDevs desenvolveu para nós uma estação solar com baterias 24/7 que funciona dia e noite. Ela continua operando mesmo quando ninguém está olhando, então o sistema faz seu trabalho à noite tão bem quanto de dia. Eles dedicaram tempo para entender como nossa operação de energia realmente funciona e construíram algo em que confiamos todos os dias.",
      },
      sainzIntec: {
        sector: "Compras industriais",
        challenge: "Licitações privadas e pedidos de compra expirando em uma caixa de entrada antes que alguém os respondesse.",
        built: "Um respondedor automático que responde licitações privadas sozinho.",
        quote:
          "A TurboDevs construiu para nós um sistema que responde licitações privadas sozinho — e está trazendo novos negócios reais para a empresa. Oportunidades que antes passavam despercebidas agora são respondidas sem que ninguém da equipe precise correr atrás delas. Já faz parte de como conquistamos trabalho, e continua funcionando enquanto nos concentramos em entregá-lo.",
      },
      batteryStorage: {
        sector: "Energia",
        challenge:
          "Um relatório diário de desempenho para um sistema de armazenamento em baterias de escala de rede elétrica, onde um número errado significa uma decisão operacional errada.",
        built:
          "Um mecanismo determinístico de KPIs com uma narrativa escrita por cima. Cada número do texto é verificado contra os fatos calculados antes de o relatório sair, sustentado por 648 testes automatizados.",
      },
      grantfox: {
        sector: "Marketplace Web3",
        challenge: "Um marketplace em produção, nativo de carteira, para prompts e agentes de IA, liquidado em Stellar.",
        built:
          "Como colaboradores externos: verificações de segurança de deploy, autorização por escopo de carteira e a interface de compra e entrega.",
      },
      vertigo: {
        sector: "Restauração",
        challenge: "Um restaurante que precisava do site no ar rapidamente — e de alguém para mantê-lo atualizado.",
        built: "O site, entregue rápido, com suporte contínuo desde então.",
        quote:
          "Eles entregaram nosso site rápido e continuam com a gente desde então — sempre atentos ao que precisamos. Quando algo precisa mudar, avisamos e está feito, sem precisar ficar cobrando. Para um restaurante, isso é uma preocupação a menos e um parceiro com quem podemos contar enquanto o negócio cresce.",
      },
    },
    openSourceTitle: "Código aberto",
    openSourceIntro: "Nossas próprias ferramentas, públicas no GitHub — a engenharia por trás do trabalho com clientes.",
    openSource: {
      sii: {
        kicker: "Automação de autoridade tributária",
        description:
          "Um núcleo em TypeScript, uma CLI e um servidor MCP que automatizam a autoridade tributária do Chile (SII), com 1,178 testes herméticos.",
      },
      previred: {
        kicker: "Automação de portal previdenciário",
        description:
          "Automação somente leitura do portal de contribuições previdenciárias do Chile, projetada para que pagamentos não possam ser disparados, por construção.",
      },
      stellarfit: {
        kicker: "Pagamentos Web3",
        description:
          "Checkout de assinatura liquidado em Stellar: o acesso só é concedido depois que a rede confirma um pagamento de uso único.",
      },
      glowcheck: {
        kicker: "Visão computacional",
        description:
          "Análise facial e de pele combinando modelos DeepFace/TensorFlow com métricas próprias de tom de pele, eritema e assimetria.",
      },
      turbotrabajo: {
        kicker: "SaaS em produção",
        description:
          "Uma plataforma de candidatura a vagas em produção: autenticação via Firebase, correspondência de perfis, uma carteira de tokens no servidor e pagamentos via Flow.cl.",
      },
    },
  },
  capabilities: {
    eyebrow: "Capacidades",
    title: "O que construímos, de ponta a ponta.",
    paragraph: "Do primeiro mapeamento de um fluxo de trabalho ao sistema rodando em produção: desenvolvimento de software e consultoria de TI pela mesma equipe.",
    items: {
      automation: {
        title: "Automação de processos",
        body: "Trabalho repetitivo em portais, planilhas e caixas de entrada, substituído por software que roda sozinho e registra cada etapa.",
      },
      software: {
        title: "Software sob medida e plataformas web",
        body: "Aplicações web, ferramentas internas e plataformas voltadas ao cliente, construídas em TypeScript e Python e entregues com testes.",
      },
      ai: {
        title: "Agentes de IA, com embasamento",
        body: "Agentes e assistentes que trabalham sobre os seus próprios documentos e dados, com cada número verificado contra a fonte antes de sair.",
      },
      data: {
        title: "Pipelines de dados e relatórios",
        body: "Pipelines que coletam, limpam e calculam os seus KPIs, e os relatórios gerados a partir deles todos os dias.",
      },
      integration: {
        title: "Integração de sistemas e APIs",
        body: "Conexões entre os sistemas que você já usa — portais, ERPs, provedores de pagamento, blockchains — por meio de APIs estáveis.",
      },
      cloud: {
        title: "Deploy em nuvem e DevOps",
        body: "Infraestrutura, pipelines de CI e releases configurados para que cada mudança seja testada antes de chegar à produção.",
      },
      monitoring: {
        title: "Monitoramento e alertas",
        body: "Verificações que percebem quando uma tarefa agendada não rodou ou um número não fecha, e alertam a sua equipe.",
      },
      security: {
        title: "Reforço de segurança",
        body: "Verificações de configuração, acesso por escopo e padrões seguros, para que um sistema não possa iniciar em um estado inseguro.",
      },
    },
  },
  industries: {
    eyebrow: "Setores",
    title: "Onde nosso software roda hoje.",
    items: {
      energy: {
        name: "Energia",
        body: "Operações solares e de armazenamento em baterias: software de estação e relatórios diários de desempenho.",
      },
      government: {
        name: "Governo e conformidade",
        body: "Automação dos portais tributário e previdenciário do Chile, SII e Previred, somente leitura por padrão.",
      },
      procurement: {
        name: "Compras industriais",
        body: "Licitações privadas e pedidos de compra, respondidos automaticamente.",
      },
      hospitality: {
        name: "Restauração",
        body: "Sites de restaurantes entregues rápido e mantidos atualizados.",
      },
      web3: {
        name: "Web3 e pagamentos",
        body: "Marketplaces nativos de carteira e verificação de pagamentos on-chain em Stellar.",
      },
      hr: {
        name: "RH e recrutamento",
        body: "Plataformas de candidatura a vagas com correspondência de candidatos e pagamentos.",
      },
    },
    photoAlt: "Fileiras de painéis solares em um deserto, com montanhas ao fundo.",
  },
  engagement: {
    eyebrow: "Formas de trabalhar conosco",
    title: "Comece por um processo ou nos entregue o sistema inteiro.",
    items: {
      diagnostic: {
        name: "Diagnóstico",
        body: "Uma avaliação curta e de escopo fechado de um processo: quanto ele custa hoje, o que automatizar primeiro e um plano por escrito.",
      },
      project: {
        name: "Projeto",
        body: "Um sistema definido, construído e entregue conforme um escopo acordado, com testes e documentação.",
      },
      team: {
        name: "Equipe integrada",
        body: "Nossos engenheiros trabalhando dentro da sua operação, ao lado das pessoas que a conduzem.",
      },
      operation: {
        name: "Operação gerenciada",
        body: "Operamos o que construímos: monitoramento, relatórios e correções, com um único ponto de contato.",
      },
    },
    cta: "Fale conosco sobre o seu processo",
  },
  products: {
    eyebrow: "Produtos",
    title: "Problemas que já resolvemos mais de uma vez.",
    paragraph: "Sistemas prontos, nascidos do nosso trabalho com clientes e dos nossos projetos de código aberto, adaptados à sua empresa em vez de construídos do zero.",
    requestLabel: "Solicitar acesso",
    items: {
      sii: {
        name: "Automação SII",
        line: "Os processos da sua empresa com a autoridade tributária do Chile, automatizados por CLI e API — somente leitura por padrão.",
        basis: "Baseado no nosso projeto de código aberto sii, com 1.178 testes herméticos.",
      },
      previred: {
        name: "Automação Previred",
        line: "Os processos de contribuições previdenciárias no Previred, automatizados e somente leitura, com pagamentos impossíveis por design.",
        basis: "Baseado no nosso projeto de código aberto previred.",
      },
      bids: {
        name: "Resposta a licitações",
        line: "Responde automaticamente a licitações privadas e pedidos de compra, para que nenhuma oportunidade se perca na caixa de entrada.",
        basis: "Em produção na Sainz Intec.",
      },
      energy: {
        name: "Relatórios de energia",
        line: "Relatórios diários de KPIs para ativos solares e de baterias, com cada número verificado antes do envio.",
        basis: "Nascido do nosso trabalho de relatórios para armazenamento em baterias.",
      },
    },
  },
  notes: {
    eyebrow: "Notas",
    title: "Como construímos, por escrito.",
    paragraph: "Textos curtos sobre as decisões de engenharia por trás do trabalho acima.",
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
    eyebrow: "Contato",
    title: "Conte-nos qual processo não pode parar.",
    paragraph: "Lemos cada mensagem pessoalmente e respondemos em poucos dias.",
    nameLabel: "Nome",
    companyLabel: "Empresa",
    roleLabel: "Cargo",
    optionalLabel: "opcional",
    emailLabel: "E-mail corporativo",
    interestLabel: "No que você tem interesse?",
    interestPlaceholder: "Escolha uma opção",
    interests: {
      diagnose: "Diagnosticar um processo",
      build: "Construir uma automação ou um agente de IA",
      products: "Um dos nossos produtos",
      run: "Operar e dar suporte a um sistema existente",
      other: "Outra coisa",
    },
    messageLabel: "Conte-nos sobre o processo",
    sendingLabel: "Enviando…",
    sendButton: "Enviar",
    sentMessage: "Enviado — lemos cada mensagem pessoalmente e respondemos em poucos dias.",
    errorMessage: "Algo deu errado ao enviar isso — tente novamente, ou envie um e-mail",
    errorCta: "diretamente.",
    directLabel: "Ou escreva diretamente para nós",
  },
  footer: {
    industriesTitle: "Setores",
    capabilitiesTitle: "Capacidades",
    footageLabel: "Vídeo",
    photoLabel: "Foto",
    companyTitle: "Empresa",
    writingTitle: "Textos",
    contactTitle: "Contato",
    openSourceLabel: "Código aberto",
    sourceLabel: "Código-fonte deste site",
  },
  whatsapp: {
    label: "WhatsApp",
    greeting: "Olá, TurboDevs! Gostaria de falar sobre um projeto.",
  },
  a11y: {
    skipToContent: "Pular para o conteúdo",
    newTab: "abre em uma nova aba",
    selectLanguage: "Selecionar idioma",
    pauseVideo: "Pausar vídeo de fundo",
    playVideo: "Reproduzir vídeo de fundo",
  },
}
