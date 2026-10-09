import type { Dictionary } from "@/i18n/types"

export const it: Dictionary = {
  meta: {
    title: "TurboDevs — Software per operazioni che non possono fermarsi",
    description:
      "TurboDevs è uno studio di ingegneria del software. Troviamo il processo che costa al tuo team ore od opportunità, lo sostituiamo con software e lo manteniamo in funzione 24/7.",
  },
  nav: {
    services: "Servizi",
    work: "Lavori",
    products: "Prodotti",
    notes: "Note",
    contact: "Contatti",
    cta: "Parla con noi",
    openMenu: "Apri il menu",
    closeMenu: "Chiudi il menu",
  },
  hero: {
    eyebrow: "Studio di ingegneria del software",
    headline: "Software per operazioni che non possono fermarsi.",
    paragraph:
      "Pensato per software critici, dove un fermo non è un'opzione. Progettiamo sistemi resilienti e pronti per la produzione — dal monitoraggio di impianti fotovoltaici e dai motori di compliance fiscale ai pagamenti Web3 — supportati da un'affidabilità operativa 24/7.",
    ctaPrimary: "Parla con noi",
    ctaSecondary: "Guarda i lavori",
    clientsLabel: "In produzione con",
  },
  stats: {
    eyebrow: "In numeri",
    items: {
      tests: "test automatizzati alla base dei nostri sistemi per l'autorità fiscale e per la reportistica energetica",
      systems: "sistemi di clienti in produzione che abbiamo costruito o a cui contribuiamo",
      portals: "portali governativi cileni automatizzati: SII e Previred",
      uptime: "di operatività per i sistemi che gestiamo",
    },
  },
  problem: {
    eyebrow: "Il problema",
    title: "Il lavoro che manda avanti un'azienda è quello che nessuno ha il tempo di sistemare.",
    body: "Adempimenti con scadenze. Impianti che inviano dati ogni giorno. Gare che scadono in una casella di posta. Questi processi si reggono su fogli di calcolo, portali e sulla memoria di qualcuno — fino al giorno in cui smettono di farlo. Li sostituiamo con software che fa il lavoro, controlla il proprio output e continua a funzionare di notte.",
  },
  services: {
    eyebrow: "Come lavoriamo",
    title: "Quattro fasi. Inizia da una qualsiasi, o affidaci l'intero ciclo.",
    stages: [
      {
        title: "Diagnosi",
        line: "Trova il processo che ti costa di più.",
        body: "Ci sediamo con le persone che svolgono il lavoro, mappiamo il processo passo dopo passo e mettiamo per iscritto quali passaggi costano ore, errori od opportunità perse — e quali automatizzare per primi.",
      },
      {
        title: "Sviluppo",
        line: "Software che fa il lavoro.",
        body: "Automazioni, integrazioni e agenti AI costruiti sui tuoi file e sistemi. I numeri vengono dal codice; dove scrive un modello, scrive su fatti già calcolati, e ogni cifra viene verificata prima di uscire.",
        proof: "In produzione: il sistema di risposta alle gare private di Sainz Intec.",
      },
      {
        title: "Rilascio",
        line: "Dentro la tua operatività.",
        body: "Ci colleghiamo ai portali, ai file e alle fonti di dati che il tuo team usa già, e lavoriamo al fianco delle persone che li gestiscono finché il sistema non entra a far parte della routine.",
        proof: "In pratica: le nostre automazioni per SII e Previred, costruite sui portali che i team cileni usano ogni mese.",
      },
      {
        title: "Esercizio",
        line: "24/7, sotto controllo.",
        body: "Gestiamo ciò che costruiamo: monitoraggio, report giornalieri e un controllo su ogni output, così continua a funzionare ben oltre il giorno del lancio.",
        proof: "In produzione: la stazione solare con batterie di Quorelia e un report giornaliero sull'accumulo a batteria.",
      },
    ],
  },
  work: {
    eyebrow: "Lavori",
    title: "Sistemi in produzione oggi.",
    challengeLabel: "La sfida",
    builtLabel: "Cosa abbiamo costruito",
    confidentialClient: "Cliente energetico riservato",
    visitLabel: "Visita",
    cases: {
      quorelia: {
        sector: "Energia",
        challenge: "Una stazione solare con batterie che deve funzionare giorno e notte, senza nessuno accanto.",
        built: "Il software che gestisce la stazione 24 ore su 24.",
        quote:
          "TurboDevs ha sviluppato per noi una stazione solare con batterie 24/7 che funziona giorno e notte. Continua a funzionare anche quando nessuno la controlla, così il sistema fa il suo lavoro di notte come di giorno. Si sono presi il tempo di capire come funziona davvero la nostra attività energetica e hanno costruito qualcosa su cui contiamo ogni giorno.",
      },
      sainzIntec: {
        sector: "Acquisti industriali",
        challenge: "Gare private e richieste di acquisto che scadevano in una casella di posta prima che qualcuno rispondesse.",
        built: "Un sistema automatico che risponde da solo alle gare private.",
        quote:
          "TurboDevs ci ha costruito un sistema che risponde da solo alle gare private — e sta portando nuovo lavoro reale all'azienda. Opportunità che prima ci sfuggivano ora ricevono una risposta senza che nessuno del team debba rincorrerle. È diventato parte del modo in cui acquisiamo lavoro, e continua a funzionare mentre noi ci concentriamo sul portarlo a termine.",
      },
      batteryStorage: {
        sector: "Energia",
        challenge:
          "Un report giornaliero delle prestazioni per un sistema di accumulo a batteria su scala di rete, dove un numero sbagliato significa una decisione operativa sbagliata.",
        built:
          "Un motore KPI deterministico con una narrazione scritta sopra. Ogni numero nel testo viene verificato rispetto ai fatti calcolati prima che il report esca, con il supporto di 648 test automatizzati.",
      },
      grantfox: {
        sector: "Marketplace Web3",
        challenge: "Un marketplace live e wallet-native per prompt e agenti AI, regolato su Stellar.",
        built:
          "Come contributor esterni: controlli di sicurezza del deployment, autorizzazione con ambito wallet e l'interfaccia di acquisto e consegna.",
      },
      vertigo: {
        sector: "Ospitalità",
        challenge: "Un ristorante che aveva bisogno di mettere online il proprio sito in fretta — e di qualcuno che lo mantenesse aggiornato.",
        built: "Il sito web, consegnato in fretta, con supporto continuo da allora.",
        quote:
          "Hanno realizzato il nostro sito web in fretta e da allora sono rimasti al nostro fianco — sempre attenti a ciò di cui abbiamo bisogno. Quando qualcosa va cambiato, glielo diciamo ed è fatto, senza dover sollecitare. Per un ristorante significa un pensiero in meno e un partner su cui contare mentre l'attività cresce.",
      },
    },
    openSourceTitle: "Open source",
    openSourceIntro: "I nostri strumenti, pubblici su GitHub — l'ingegneria dietro il lavoro per i clienti.",
    openSource: {
      sii: {
        kicker: "Automazione dell'autorità fiscale",
        description:
          "Un core TypeScript, una CLI e un server MCP che automatizzano l'autorità fiscale cilena (SII), con 1,178 test ermetici.",
      },
      previred: {
        kicker: "Automazione del portale pensionistico",
        description:
          "Automazione di sola lettura del portale dei contributi pensionistici cileno, progettata in modo che i pagamenti non possano essere inviati, per costruzione.",
      },
      stellarfit: {
        kicker: "Pagamenti Web3",
        description:
          "Checkout in abbonamento regolato su Stellar: l'accesso viene concesso solo dopo che la rete conferma un pagamento monouso.",
      },
      glowcheck: {
        kicker: "Computer vision",
        description:
          "Analisi del volto e della pelle che combina modelli DeepFace/TensorFlow con metriche originali di tono della pelle, eritema e asimmetria.",
      },
      turbotrabajo: {
        kicker: "SaaS in produzione",
        description:
          "Una piattaforma per candidature di lavoro in produzione: autenticazione Firebase, matching dei profili, un wallet a token lato server e pagamenti Flow.cl.",
      },
    },
  },
  capabilities: {
    eyebrow: "Competenze",
    title: "Cosa costruiamo, dall'inizio alla fine.",
    paragraph: "Dalla prima mappatura di un flusso di lavoro al sistema in produzione: sviluppo software e consulenza IT dallo stesso team.",
    items: {
      automation: {
        title: "Automazione dei processi",
        body: "Il lavoro ripetitivo su portali, fogli di calcolo e caselle di posta, sostituito da software che funziona da solo e registra ogni passaggio.",
      },
      software: {
        title: "Software su misura e piattaforme web",
        body: "Applicazioni web, strumenti interni e piattaforme rivolte ai clienti, costruiti in TypeScript e Python e rilasciati con i test.",
      },
      ai: {
        title: "Agenti AI, ancorati ai fatti",
        body: "Agenti e assistenti che lavorano sui tuoi documenti e dati, con ogni cifra verificata rispetto alla fonte prima di uscire.",
      },
      data: {
        title: "Pipeline di dati e reportistica",
        body: "Pipeline che raccolgono, puliscono e calcolano i tuoi KPI, e i report generati a partire da essi ogni giorno.",
      },
      integration: {
        title: "Integrazione di sistemi e API",
        body: "Collegamenti tra i sistemi che usi già — portali, ERP, provider di pagamento, blockchain — tramite API stabili.",
      },
      cloud: {
        title: "Deployment cloud e DevOps",
        body: "Infrastruttura, pipeline CI e rilasci configurati in modo che ogni modifica sia testata prima di arrivare in produzione.",
      },
      monitoring: {
        title: "Monitoraggio e alert",
        body: "Controlli che si accorgono quando un job pianificato non è stato eseguito o un numero non torna, e avvisano il tuo team.",
      },
      security: {
        title: "Rafforzamento della sicurezza",
        body: "Controlli di configurazione, accessi limitati e impostazioni predefinite sicure, così un sistema non può avviarsi in uno stato non sicuro.",
      },
    },
  },
  industries: {
    eyebrow: "Settori",
    title: "Dove gira oggi il nostro software.",
    items: {
      energy: {
        name: "Energia",
        body: "Impianti solari e di accumulo a batteria: software per le stazioni e reportistica giornaliera delle prestazioni.",
      },
      government: {
        name: "Pubblica amministrazione e compliance",
        body: "Automazione dei portali fiscali e pensionistici cileni, SII e Previred, in sola lettura per impostazione predefinita.",
      },
      procurement: {
        name: "Acquisti industriali",
        body: "Gare private e richieste di acquisto, con risposta automatica.",
      },
      hospitality: {
        name: "Ospitalità",
        body: "Siti web per ristoranti, consegnati in fretta e mantenuti aggiornati.",
      },
      web3: {
        name: "Web3 e pagamenti",
        body: "Marketplace wallet-native e verifica dei pagamenti on-chain su Stellar.",
      },
      hr: {
        name: "Risorse umane e recruiting",
        body: "Piattaforme per candidature di lavoro con matching dei candidati e pagamenti.",
      },
    },
    photoAlt: "File di pannelli solari in un deserto, con montagne sullo sfondo.",
  },
  engagement: {
    eyebrow: "Come collaborare con noi",
    title: "Inizia da un processo, o affidaci l'intero sistema.",
    items: {
      diagnostic: {
        name: "Diagnosi",
        body: "Una valutazione breve e a perimetro fisso di un processo: quanto costa oggi, cosa automatizzare per primo e un piano scritto.",
      },
      project: {
        name: "Progetto",
        body: "Un sistema definito, costruito e consegnato secondo un perimetro concordato, con test e documentazione.",
      },
      team: {
        name: "Team integrato",
        body: "I nostri ingegneri al lavoro dentro la tua operatività, al fianco delle persone che la gestiscono.",
      },
      operation: {
        name: "Gestione operativa",
        body: "Gestiamo ciò che abbiamo costruito: monitoraggio, report e correzioni, con un unico referente.",
      },
    },
    cta: "Parlaci del tuo processo",
  },
  products: {
    eyebrow: "Prodotti",
    title: "Problemi che abbiamo già risolto più di una volta.",
    paragraph: "Sistemi pronti, nati dal nostro lavoro con i clienti e dai nostri progetti open source, adattati alla tua azienda invece di essere costruiti da zero.",
    requestLabel: "Richiedi accesso",
    items: {
      sii: {
        name: "Automazione SII",
        line: "Le pratiche della tua azienda con l'autorità fiscale cilena, automatizzate tramite CLI e API — in sola lettura per impostazione predefinita.",
        basis: "Basato sul nostro progetto open source sii, con 1,178 test ermetici.",
      },
      previred: {
        name: "Automazione Previred",
        line: "I versamenti previdenziali su Previred, automatizzati e in sola lettura, con pagamenti impossibili per costruzione.",
        basis: "Basato sul nostro progetto open source previred.",
      },
      bids: {
        name: "Risposta alle gare",
        line: "Risponde automaticamente a gare private e richieste di acquisto, così nessuna opportunità si perde in una casella di posta.",
        basis: "In produzione presso Sainz Intec.",
      },
      energy: {
        name: "Report energetici",
        line: "Report giornalieri di KPI per impianti solari e batterie, con ogni numero verificato prima dell'invio.",
        basis: "Nato dal nostro lavoro di reportistica per l'accumulo a batterie.",
      },
    },
  },
  notes: {
    eyebrow: "Note",
    title: "Come costruiamo, messo per iscritto.",
    paragraph: "Brevi approfondimenti sulle decisioni ingegneristiche dietro il lavoro qui sopra.",
    readSuffix: "di lettura",
    items: {
      "fail-closed-deployments": {
        title: "Perché i nostri deployment si rifiutano di avviarsi",
        dek: "Su Grantfox abbiamo reso impossibile eseguire in produzione un insieme di configurazioni errate, facendo sì che il processo si blocchi all'avvio invece di degradarsi silenziosamente.",
        readTime: "5 min",
        body: [
          "Contribuiamo a Grantfox, un marketplace wallet-native per prompt e agenti AI costruito su Stellar, come contributor esterni che lavorano sul suo backend NestJS e frontend Next.js in produzione. Una parte consistente di quel lavoro non ha avuto nulla a che fare con le funzionalità. È consistita nel ripercorrere la sequenza di avvio e chiedersi, per ogni variabile d'ambiente che modifica il comportamento di sicurezza, cosa succede se viene semplicemente lasciata non impostata in produzione. In diversi punti la risposta onesta era: l'app si avvia comunque, usando un default che andava bene su un laptop ed era pericoloso su un server.",
          "Il caso più evidente era JWT_SECRET. L'autenticazione basata su token è forte solo quanto il secret usato per firmarli e verificarli; chiunque possieda quel secret può coniare un token che afferma di essere un qualsiasi utente, perché il server non ha modo di distinguere un token auto-emesso da uno che ha effettivamente emesso lui stesso. Il backend, quando JWT_SECRET non era impostato, ricadeva su un dev-secret pubblicato. Quella stringa esiste nella cronologia del codice sorgente e nei documenti di setup locale, il che significa che non è affatto un secret — è un valore noto. Un servizio in esecuzione con quel valore in produzione non è debolmente protetto, è non autenticato, solo con qualche passaggio in più: forgiare un token con la chiave ben nota, firmarlo, presentarlo, e l'app non ha alcuna base per rifiutarlo.",
          "La correzione è stata smettere di tollerare l'assenza di JWT_SECRET nel momento in cui l'app ritiene di essere in esecuzione per davvero. All'avvio, l'app legge la sua modalità d'ambiente, e al di fuori dello sviluppo ora richiede che JWT_SECRET sia impostato esplicitamente, altrimenti si rifiuta di avviarsi. Nessun fallback, nessun avviso-e-prosegui. È un compromesso deliberato: abbiamo rinunciato alla comodità del \"funziona comunque in qualsiasi ambiente qualcuno abbia dimenticato di configurare\", in cambio della garanzia che un processo in produzione non stia mai girando silenziosamente con una chiave che un attaccante può reperire. Un crash al momento del deploy è rumoroso, immediato, e blocca il rollout. Un fallback silenzioso è invisibile finché qualcuno non lo scopre.",
          "Lo stesso passaggio ha fatto emergere una seconda categoria che sembra scollegata ma non lo è: PAYMENT_SIMULATION_ENABLED, MOCK_PAYMENT_ENABLED, MOCK_PAYMENT_FAIL e DB_SEED_ON_STARTUP. Ognuno di questi esiste per una ragione reale — si vuole testare il flusso di acquisto senza toccare Stellar, o senza un provider di pagamento nel ciclo, o con un dataset riproducibile quando un ambiente nuovo si avvia. Il flag di seed in particolare scrive un wallet fittizio con un saldo di 450 crediti, così da avere qualcosa su cui testare. Niente di tutto questo è un problema in sviluppo. Diventa un problema nell'istante in cui rimane attivo in un deployment raggiungibile da utenti reali.",
          "Trattiamo un saldo seedato e un pagamento simulato con successo come la stessa modalità di guasto, perché strutturalmente lo sono. Una volta che quel wallet da 450 crediti viene scritto nel database, nulla a valle può distinguerlo da un saldo arrivato tramite un acquisto reale — i percorsi di codice di wallet, transazioni e acquisti leggono tutti dalle stesse tabelle e non portano un flag di provenienza che dica \"questo credito è stato inventato\". Un flag di pagamento simulato lasciato attivo ha la proprietà identica: fa sì che il flusso di acquisto riporti successo senza che il denaro si sia mai mosso, e quel successo è indistinguibile da uno reale per tutto ciò che lo legge in seguito. Uno stato fittizio è uno stato fittizio indipendentemente da quale flag lo abbia prodotto, quindi i deployment reali ora si rifiutano di avviarsi se uno qualsiasi di questi quattro flag è attivo, allo stesso modo in cui si rifiutano di avviarsi senza JWT_SECRET.",
          "Il meccanismo in entrambi i casi ha la stessa forma: condizionare il comportamento non sicuro all'ambiente in cui il processo ritiene di trovarsi, e fare in modo che la condizione fallisca in modo chiuso (fail closed) anziché aperto (fail open). Fail open significa che una variabile non impostata o mal configurata si risolve silenziosamente assumendo \"sviluppo, va tutto bene\" — che è esattamente il contesto in cui nessuno la sta osservando. Fail closed significa che la stessa configurazione mancante si risolve rifiutandosi di funzionare, il che trasforma una falla di sicurezza sottile in un fallimento di deploy evidente e impossibile da ignorare. Preferiamo che un ingegnere fissi un log di avvio con un crash e imposti la variabile giusta, piuttosto che avere quella falla attiva in produzione per tutto il tempo che serve a qualcuno per accorgersene.",
          "La lezione generale che continuiamo a reimparare è che i default pensati per l'esperienza dello sviluppatore e i default pensati per la sicurezza in produzione di solito non coincidono, e un codice che non distingue tra i due ambienti finirà prima o poi per scegliere quello comodo nel momento peggiore. Rendere quella distinzione esplicita all'avvio del processo — un controllo, un solo punto, che fallisce in modo rumoroso — costa meno che affidarsi al fatto che ogni deployment venga configurato correttamente a mano e sperare che la differenza non conti mai.",
        ],
      },
      "llm-grounding": {
        title: "Insegnare a un LLM dove finiscono i fatti",
        dek: "In una pipeline di reportistica per batterie su scala di rete, abbiamo lasciato che un LLM scrivesse le frasi e mai i numeri — per poi verificare comunque ogni numero che ha scritto.",
        readTime: "6 min",
        body: [
          "Abbiamo costruito il report giornaliero delle prestazioni per un sistema di accumulo di energia a batteria su scala di rete allo stesso modo in cui costruiremmo qualsiasi pipeline di reportistica, fino all'ultimo passaggio. I dati SCADA arrivano dal sito, un motore KPI in Python li trasforma nei numeri che contano — stato di carica, cicli di carica e scarica, disponibilità, qualunque cosa richieda il contratto — e quei numeri vengono congelati in un set di fatti prima che accada qualsiasi altra cosa. L'ultimo passaggio è la prosa: qualcuno deve trasformare una tabella di KPI in un report che una persona abbia voglia di leggere. È il passaggio che abbiamo affidato a un LLM, ed è anche il passaggio di cui ci fidiamo meno, motivo per cui l'intera pipeline è costruita attorno all'idea di non fidarsene.",
          "La scelta progettuale alla base di tutto questo è che l'LLM non calcola mai nulla. Non somma una colonna, non fa la media di una settimana, non deriva una percentuale da due numeri che gli abbiamo dato. Ogni numero che compare nel report finale è stato calcolato dal motore KPI in Python, punto, prima ancora che l'LLM veda i dati. Il compito del modello è strettamente narrativo: dato questo insieme congelato di fatti, scrivere paragrafi che un operatore di impianto abbia voglia di leggere. Questa separazione conta perché un motore KPI deterministico è testabile nel senso normale del termine — stesso input, stesso output, ogni volta — mentre un LLM a cui si chiede anche di fare aritmetica sotto il cofano non è né deterministico né, nella nostra esperienza, affidabilmente corretto in questo. Quindi non glielo chiediamo. Gli chiediamo di scrivere, e lasciamo che sia il codice a occuparsi dell'unica parte del lavoro in cui sbagliare è silenzioso e costoso.",
          "'Set di fatti congelato' sta facendo un lavoro concreto in questa frase, non è solo un modo per sembrare prudenti. Significa che l'output del motore KPI è bloccato prima che l'LLM venga invocato — una struttura fissa di numeri ed etichette che al modello viene data come contesto e che non può rivedere, ricalcolare o ampliare. L'LLM può scegliere come formulare un numero, in che ordine presentarlo, quali numeri mettere in primo piano per la narrazione di una data giornata, ma non può introdurre un numero che non sia già presente in quel set congelato. Se il modello vuole dire che il sistema si è scaricato per un certo numero di ore, quella cifra deve già esistere nei fatti che gli sono stati consegnati. Nulla a valle del motore KPI ha la possibilità di inventare un fatto.",
          "Quel vincolo conta solo se qualcosa lo fa rispettare, quindi dopo che l'LLM scrive la sua bozza, un controllo di grounding separato rilegge l'output. Meccanicamente è semplice: estrarre ogni token numerico dal testo generato — ogni cifra, percentuale e conteggio che il modello ha scritto — e confrontare ciascuno con il set di fatti congelato. Un numero nella prosa dell'LLM che non è riconducibile a un numero che Python ha effettivamente calcolato è una discrepanza. Non importa se la discrepanza è una statistica allucinata o l'arrotondamento plausibile di un numero reale che si è alterato nella riformulazione — in entrambi i casi è un numero nel report che non proviene dai dati, ed è esattamente la modalità di guasto che questa pipeline esiste per intercettare. Un solo token numerico non corrispondente ovunque nell'output blocca la pubblicazione di quel report. Non segnalato per revisione, non pubblicato con un avvertimento — bloccato.",
          "Consideriamo il controllo di grounding abbastanza portante da meritare una propria copertura di test, non solo verifiche a campione su qualche report di esempio. L'intera pipeline è supportata da 648 test, e nessuno di essi effettua una chiamata di rete — la matematica dei KPI, il passaggio di congelamento dei fatti e il controllo di grounding stesso vengono tutti eseguiti in modo deterministico, offline, a ogni esecuzione. È una conseguenza diretta del tenere separati calcolo e narrazione: le parti del sistema più facili da sbagliare in modo catastrofico (l'aritmetica su cifre energetiche e finanziarie reali) sono anche le parti più economiche da testare in modo esaustivo, perché non dipendono da cosa un LLM ha voglia di produrre quel giorno.",
          "Niente di tutto questo protegge dal fatto che il report semplicemente non compaia. Una pipeline che si rifiuta correttamente di pubblicare un report sbagliato è solo metà della storia se nessuno si accorge che il report non è mai stato eseguito — un cron job bloccato e un controllo di grounding solidissimo producono lo stesso silenzio dal punto di vista del cliente. Per questo esiste uno strato di monitoraggio accanto alla logica di reportistica: un controllo dead-man's-switch che si aspetta che un'esecuzione pianificata avvenga e alza un allarme nel momento in cui questo non accade. Correttezza e liveness sono modalità di guasto diverse, e non volevamo che una correzione per l'una finisse silenziosamente per sostituire l'altra.",
          "Non l'abbiamo costruita così perché gli LLM siano inaffidabili in senso astratto — l'abbiamo costruita così perché stavamo mettendo l'output del modello accanto a numeri che un cliente avrebbe usato per prendere decisioni operative e finanziarie reali su un asset fisico reale, e \"di solito corretto\" non è una proprietà che si può consegnare a qualcuno in quella posizione. Chiunque distribuisca testo generato da un LLM accanto a numeri che contano sta facendo la stessa scommessa, che l'abbia riconosciuto o meno: o l'aritmetica del modello viene fidata implicitamente, oppure qualcosa al di fuori del modello ne verifica il lavoro prima che una persona lo veda. Tenere l'LLM completamente fuori dal calcolo, congelare i fatti prima che scriva anche solo una parola, e verificare in seguito ogni numero che emette rispetto a quel set congelato non è una protezione contro un modello scarso in matematica. È il rifiuto di lasciare che un passaggio che non possiamo verificare fino in fondo sia quello che decide quali sono i numeri.",
        ],
      },
      "verified-claims-ledger": {
        title: "Un ledger per ogni affermazione che pubblichiamo",
        dek: "Perché la frase 'non ancora reso noto' su questo sito e il campo UNAVAILABLE nell'API del wallet di Grantfox sono la stessa decisione ingegneristica.",
        readTime: "5 min",
        body: [
          "Ogni affermazione pubblica su questo sito dovrebbe essere riconducibile a una fonte nominata — un repository, un commit, uno screenshot, un README — non al nostro ricordo di ciò che abbiamo costruito. Teniamo traccia di questo in un ledger: un documento semplice che associa ogni frase che pubblichiamo a da dove proviene e a quando l'abbiamo verificata. Se un'affermazione non può indicare una riga in quel ledger, non viene pubblicata. Sembra un'abitudine da documentazione. In realtà è la stessa decisione che prendiamo all'interno del software stesso, e il punto più chiaro in cui vederlo è un'unica risposta API dentro Grantfox.",
          "Grantfox è un marketplace wallet-native per prompt e agenti AI, costruito su Stellar, e lavoriamo sul suo backend e frontend come contributor esterni. Un wallet lì porta due tipi diversi di saldo: un saldo di ledger che il backend può calcolare direttamente dagli acquisti e dalle transazioni che ha registrato, e un saldo on-chain che richiederebbe di leggere effettivamente la rete Stellar. Non abbiamo ancora integrato quella lettura on-chain. Lo stato onesto di quella parte del sistema è: non conosciamo il numero.",
          "Il modo facile per gestire quel vuoto sarebbe falsificarlo — restituire la cifra di ledger ed etichettarla come saldo on-chain, oppure calcolare qualcosa di plausibile e lasciare che la schermata del wallet lo renderizzi come qualsiasi altro campo. Chi ispeziona il JSON non se ne accorgerebbe necessariamente, e una dashboard in cui ogni campo ha un numero sembra più completa di una con un vuoto visibile. Non l'abbiamo fatto. L'API riporta il saldo on-chain come UNAVAILABLE. Non zero, non una stima, non il numero di ledger travestito da saldo on-chain — uno stato esplicito che dice che il percorso di verifica non esiste ancora.",
          "Gli hash delle transazioni ricevono lo stesso trattamento. Un vero hash di transazione Stellar è una stringa esadecimale di 64 caratteri, e Grantfox popola quel campo solo quando ne esiste effettivamente uno on-chain. Quando non è così — una transazione non si è regolata, oppure il flusso in questione non ne produce uno — il campo è null. Avremmo potuto rilasciare un placeholder, qualcosa dalla forma esadecimale che riempia il campo e soddisfi qualunque cosa il frontend si aspetti che una stringa abbia quell'aspetto lì. Non l'abbiamo fatto, per la stessa ragione per cui il saldo non viene stimato: un null è un'affermazione vera su ciò che sappiamo, e un hash fabbricato è una bugia travestita da prova.",
          "Nessuna delle due è una decisione importante. Sono facili da non notare in un diff, ed è improbabile che un utente si chieda mai perché un campo del wallet dica UNAVAILABLE mentre il resto mostra numeri. Ma sono la stessa decisione, applicata a livello di campo API invece che a livello di frase, che governa ciò che lasciamo entrare su questo sito. Uno stato UNAVAILABLE e un'etichetta 'non ancora reso noto' sono la stessa mossa: quando la risposta onesta è \"non abbiamo quel numero\", dirlo invece di calcolare qualcosa che gli somigli.",
          "Questo è il motivo per cui non pubblichiamo da nessuna parte su questo sito la percentuale di fee o commissione di Grantfox. Potremmo stimarne una a partire da condizioni tipiche di marketplace, o dedurre un intervallo dalle parti della logica delle fee che abbiamo revisionato direttamente, e starebbe comodamente accanto a tutto il resto in una pagina servizi. La etichettiamo invece come 'non ancora reso noto', perché non ne abbiamo una fonte nello stesso modo in cui abbiamo una fonte per l'irrigidimento del deployment che abbiamo rilasciato o per il flusso di acquisto che abbiamo costruito. La stessa regola che mantiene un null nel campo dell'hash di transazione tiene quella riga fuori dai nostri testi.",
          "Il costo è visibile in entrambi i posti. Una schermata wallet con UNAVAILABLE al suo interno sembra meno rifinita di una in cui ogni campo porta un numero. Una pagina servizi con 'non ancora reso noto' al suo interno rende un pitch più piatto di una con una percentuale di fee e una proiezione di ricavi accanto al resto dei numeri. Nessuno dei due può far finta che il vuoto non ci sia solo perché riempirlo suonerebbe meglio. L'alternativa — inventare il pezzo mancante — è economica esattamente una volta, ed è lo stesso fallimento che emerga come un saldo wallet fabbricato o come una statistica fabbricata sul nostro stesso sito.",
          "Quindi il ledger non è un disclaimer che aggiungiamo a posteriori per coprirci. È la stessa disciplina che costruiamo nei sistemi che rilasciamo, applicata al contrario alle nostre stesse affermazioni: prima che una frase finisca su questo sito, ci chiediamo quale riga la sostenga, allo stesso modo in cui l'endpoint del saldo di Grantfox si chiede se dispone davvero di una lettura on-chain prima di stampare una cifra. Quando la risposta è no, la frase — come il campo — lo dice.",
        ],
      },
    },
  },
  contact: {
    eyebrow: "Contatti",
    title: "Dicci quale processo non può fermarsi.",
    paragraph: "Leggiamo ogni messaggio di persona e rispondiamo entro un paio di giorni.",
    nameLabel: "Nome",
    companyLabel: "Azienda",
    roleLabel: "Ruolo",
    optionalLabel: "facoltativo",
    emailLabel: "Email di lavoro",
    interestLabel: "Cosa ti interessa?",
    interestPlaceholder: "Scegli un'opzione",
    interests: {
      diagnose: "Diagnosticare un processo",
      build: "Costruire un'automazione o un agente AI",
      products: "Uno dei nostri prodotti",
      run: "Gestire e supportare un sistema esistente",
      other: "Altro",
    },
    messageLabel: "Raccontaci il processo",
    sendingLabel: "Invio in corso…",
    sendButton: "Invia",
    sentMessage: "Inviato — leggiamo ogni messaggio di persona e rispondiamo entro un paio di giorni.",
    errorMessage: "Qualcosa è andato storto durante l'invio — riprova, oppure scrivi",
    errorCta: "direttamente.",
    directLabel: "Oppure scrivici direttamente",
  },
  footer: {
    industriesTitle: "Settori",
    capabilitiesTitle: "Competenze",
    footageLabel: "Filmato",
    photoLabel: "Foto",
    companyTitle: "Azienda",
    writingTitle: "Articoli",
    contactTitle: "Contatti",
    openSourceLabel: "Open source",
    sourceLabel: "Il codice sorgente di questo sito",
  },
  whatsapp: {
    label: "WhatsApp",
    greeting: "Ciao TurboDevs! Vorrei parlare di un progetto.",
  },
  a11y: {
    skipToContent: "Vai al contenuto",
    newTab: "si apre in una nuova scheda",
    selectLanguage: "Seleziona lingua",
    pauseVideo: "Metti in pausa il video di sfondo",
    playVideo: "Riproduci il video di sfondo",
  },
}
