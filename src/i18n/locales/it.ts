import type { Dictionary } from "@/i18n/types"

export const it: Dictionary = {
  meta: {
    title: "TurboDevs — Software su misura, progettato per funzionare 24/7",
    description:
      "TurboDevs è uno studio di ingegneria del software full-service che costruisce sistemi su misura per web, automazione e Web3 — progettati per continuare a funzionare 24 ore su 24, non solo il giorno del lancio.",
  },
  nav: {
    work: "Lavori",
    grantfox: "Grantfox",
    approach: "Approccio",
    notes: "Note",
    contact: "Contatti",
    startProject: "Avvia un progetto",
    openMenu: "Apri il menu",
    closeMenu: "Chiudi il menu",
  },
  hero: {
    eyebrow: "Studio di ingegneria del software",
    headline: "Software su misura che funziona — giorno e notte.",
    paragraph:
      "Sistemi full-stack, pipeline di automazione e integrazioni Web3, progettati per team che hanno bisogno di soluzioni su misura affidabili 24 ore su 24. Ingegneria poliglotta — TypeScript, Python, Solidity/Soroban — collaudata in ambito di compliance fiscale, pagamenti Web3 e SaaS in produzione attivi 24/7.",
    ctaPrimary: "Guarda i lavori",
    ctaSecondary: "Parla con noi",
    scrollHint: "Scorri per i lavori",
  },
  services: {
    eyebrow: "Cosa costruiamo",
    title: "Quattro discipline, un unico standard di ingegneria.",
    items: [
      {
        title: "Ingegneria di prodotto full-stack",
        description:
          "Frontend React/Next.js, servizi in TypeScript e Python, e la disciplina di CI/test per continuare a rilasciarli — lo stesso stack dietro il SaaS di produzione per il matching di lavoro di turbotrabajo.",
      },
      {
        title: "Integrazione Web3 e blockchain",
        description:
          "Autenticazione wallet-native, verifica dei pagamenti on-chain e sistemi adiacenti agli smart contract su Stellar/Soroban — costruiti per il checkout di stellarfit confermato da Horizon e rilasciati all'interno del marketplace live di Grantfox.",
      },
      {
        title: "Sistemi di automazione e compliance",
        description:
          "Automazione headless-browser e API per processi che i regolatori controllano davvero — di sola lettura per impostazione predefinita, costruita per continuare a funzionare correttamente in condizioni di incertezza, lo schema alla base di sii e previred.",
      },
      {
        title: "Pipeline AI integrate, ancorate ai fatti",
        description:
          "Gli LLM scrivono la prosa sui numeri che il tuo codice ha già calcolato — mai i numeri stessi. Ogni affermazione generata viene verificata rispetto a un set di fatti congelato prima della pubblicazione.",
      },
    ],
  },
  work: {
    eyebrow: "Lavori selezionati",
    title: "Pubblici, verificabili e ancora attivi.",
    items: {
      sii: {
        kicker: "Automazione dell'autorità fiscale",
        description:
          "Un core TypeScript, una CLI e un server MCP che automatizzano l'autorità fiscale cilena (SII), costruiti attorno a guardrail che li rendono affidabili anziché script best-effort.",
      },
      previred: {
        kicker: "Automazione del portale pensionistico",
        description:
          "Automazione di sola lettura del portale dei contributi pensionistici cileno, progettata in modo che i programmi di pagamento siano non avviabili per costruzione — non solo scoraggiati da una code review.",
      },
      stellarfit: {
        kicker: "Pagamenti Web3",
        description:
          "Checkout in abbonamento regolato sulla blockchain Stellar — l'accesso viene concesso solo dopo che Horizon conferma un pagamento monouso con memo corrispondente, senza bisogno di fiducia custodiale.",
      },
      glowcheck: {
        kicker: "Computer vision",
        description:
          "Analisi del volto e della pelle che combina i modelli demografici DeepFace/TensorFlow con metriche originali di tono della pelle ITA, eritema e asimmetria facciale.",
      },
      turbotrabajo: {
        kicker: "SaaS in produzione",
        description:
          "Una piattaforma di ricerca lavoro in produzione: autenticazione Firebase, matching dei profili, un wallet a token con autorità lato server, e pagamenti Flow.cl end-to-end.",
      },
      "battery-storage-reporting": {
        kicker: "Energia · Reportistica ancorata all'AI",
        description:
          "Reportistica automatica giornaliera delle prestazioni per un sistema di accumulo a batteria su scala di rete: un motore KPI deterministico abbinato a uno strato narrativo LLM in cui ogni numero generato viene verificato rispetto ai fatti congelati prima della pubblicazione, mantenendo il report affidabile giorno dopo giorno.",
      },
    },
  },
  grantfox: {
    eyebrow: "Collaborazione in evidenza",
    title: "Un contributo al marketplace Stellar live di Grantfox",
    paragraph:
      "Grantfox gestisce un marketplace wallet-native per prompt e agenti AI, regolato su Stellar. Lavoriamo direttamente nel suo backend NestJS e frontend Next.js come contributor esterni — il tipo di lavoro che conta solo se un revisore vero, non noi, lo giudica corretto.",
    points: [
      "Sicurezza di deployment irrigidita: gli ambienti non di sviluppo richiedono un JWT secret esplicito prima di avviarsi, e non partono se i flag di pagamento simulato o di seed del database sono rimasti attivi.",
      "Autorizzazione con ambito wallet: saldo, cronologia delle transazioni e acquisti vengono derivati solo dal principal autenticato — verificato in modo che un account non possa leggere o toccare quello di un altro.",
      "UI del marketplace rilasciata: le pagine dashboard, marketplace, dettaglio-asset e wallet che implementano il flusso di acquisto e consegna dei prompt della piattaforma.",
    ],
    cta: "Visita Grantfox",
  },
  approach: {
    eyebrow: "Come lavoriamo",
    title: "Costruito per continuare a funzionare.",
    paragraph:
      "Ogni collaborazione sopra segue la stessa disciplina: sistemi costruiti per rimanere affidabili in condizioni reali, e ogni numero pubblicato riconducibile a una fonte verificabile. Il confine tra ciò che un LLM scrive e ciò che è autorizzato ad affermare è imposto nel codice — così che ciò che diciamo corrisponda a ciò che è realmente in esecuzione.",
    pillars: [
      {
        title: "Deterministico prima di tutto",
        body: "I numeri provengono dal codice, non da un modello. Dove usiamo comunque un LLM, questo scrive prosa su fatti già calcolati — non calcola mai il fatto stesso.",
      },
      {
        title: "Costruito per l'uptime",
        body: "Una configurazione mancante, una chiave non ruotata, un input non verificabile — il sistema li intercetta prima che raggiungano la produzione, così che ciò che è live continui a funzionare invece di degradarsi silenziosamente.",
      },
      {
        title: "Affermazioni tracciabili",
        body: "Ogni cifra che pubblichiamo, sul nostro lavoro o su quello di un cliente, è supportata da una fonte a cui possiamo fare riferimento. Se non possiamo indicarne la fonte, non la pubblichiamo.",
      },
    ],
  },
  demo: {
    eyebrow: "Guardalo funzionare",
    title: "Attiva un interruttore. Guarda cosa lo mantiene in funzione.",
    paragraph:
      "Questo è lo stesso meccanismo di sicurezza del deployment in esecuzione nel backend reale di Grantfox, ridotto a un interruttore. Cambia i flag qui sotto e premi deploy per vedere il controllo esatto che impedisce a una build mal configurata di raggiungere mai la produzione — la logica gira interamente nel tuo browser, nessuna API finta al posto di un server.",
    panelLabel: "pannello di deploy",
    toggles: {
      jwt: { label: "JWT_SECRET impostato", description: "Secret esplicito per firmare i token di autenticazione." },
      seed: { label: "DB_SEED_ON_STARTUP", description: "Popola un saldo wallet demo all'avvio." },
      nodeEnv: { label: "NODE_ENV=production", description: "Bloccato per questa demo." },
    },
    deployButton: "Deploy",
    terminalPrompt: "$ NODE_ENV=production npm run start",
    emptyState: "// premi deploy per eseguire il controllo",
    reasons: {
      jwtMissing: "JWT_SECRET non impostato — ricadrebbe sul dev secret pubblicato, permettendo a chiunque di forgiare un token valido",
      seedOn: "DB_SEED_ON_STARTUP è attivo in produzione — l'avvio popolerebbe un wallet fittizio con 450 crediti",
    },
    refusedPrefix: "✗ Avvio rifiutato — ",
    successLine: "✓ Sequenza di avvio iniziata — tutti i controlli di sicurezza superati.",
  },
  notes: {
    eyebrow: "Note dal campo",
    title: "Note dal lavoro.",
    paragraph:
      "Brevi approfondimenti sulle decisioni ingegneristiche reali dietro il lavoro sopra — non riassunti, il ragionamento.",
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
    eyebrow: "Mettiti in contatto",
    title: "Raccontaci cosa stai costruendo.",
    paragraph:
      "Lavoro di prodotto full-stack, un'integrazione Web3, o una pipeline di automazione che deve reggere a un audit — mandaci la forma del problema e ti diremo chiaramente se è un buon fit.",
    nameLabel: "Nome",
    emailLabel: "Email",
    messageLabel: "Cosa stai costruendo?",
    sendingLabel: "Invio in corso…",
    sendButton: "Invia",
    sentMessage: "Inviato — leggiamo ogni messaggio di persona e rispondiamo entro un paio di giorni.",
    errorMessage: "Qualcosa è andato storto durante l'invio — riprova, oppure scrivi",
    errorCta: "direttamente.",
  },
  footer: {
    sourceLabel: "Codice sorgente",
  },
  whatsapp: {
    label: "WhatsApp",
    greeting: "Ciao TurboDevs! Vorrei parlare di un progetto.",
  },
}
