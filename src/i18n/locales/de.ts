import type { Dictionary } from "@/i18n/types"

export const de: Dictionary = {
  meta: {
    title: "TurboDevs — Maßgeschneiderte Software, gebaut für den 24/7-Betrieb",
    description:
      "TurboDevs ist ein Full-Service-Studio für Softwareentwicklung, das maßgeschneiderte Systeme für Web, Automatisierung und Web3 baut — entwickelt, um rund um die Uhr zuverlässig zu laufen, nicht nur am Launch-Tag.",
  },
  nav: {
    work: "Projekte",
    grantfox: "Grantfox",
    approach: "Ansatz",
    notes: "Notizen",
    contact: "Kontakt",
    startProject: "Projekt starten",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
  },
  hero: {
    eyebrow: "Studio für Softwareentwicklung",
    headline: "Individuelle Software, die funktioniert — Tag und Nacht.",
    paragraph:
      "Full-Stack-Systeme, Automatisierungs-Pipelines und Web3-Integrationen — entwickelt für Teams, die maßgeschneiderte Lösungen brauchen, die rund um die Uhr zuverlässig laufen. Polyglotte Entwicklung — TypeScript, Python, Solidity/Soroban — bewährt in Steuer-Compliance, Web3-Zahlungen und Produktions-SaaS im 24/7-Betrieb.",
    ctaPrimary: "Projekte ansehen",
    ctaSecondary: "Sprechen Sie mit uns",
    scrollHint: "Zu den Projekten scrollen",
  },
  services: {
    eyebrow: "Was wir bauen",
    title: "Vier Disziplinen, ein technischer Standard.",
    items: [
      {
        title: "Full-Stack-Produktentwicklung",
        description:
          "React/Next.js-Frontends, TypeScript- und Python-Services sowie die CI/Test-Disziplin, die dafür sorgt, dass sie zuverlässig ausgeliefert werden — derselbe Stack, der hinter turbotrabajos produktivem Job-Matching-SaaS steht.",
      },
      {
        title: "Web3- und Blockchain-Integration",
        description:
          "Wallet-native Authentifizierung, On-Chain-Zahlungsverifizierung und smart-contract-nahe Systeme auf Stellar/Soroban — entwickelt für stellarfits Horizon-bestätigten Checkout und im Live-Marketplace von Grantfox im Einsatz.",
      },
      {
        title: "Automatisierung & Compliance-Systeme",
        description:
          "Headless-Browser- und API-Automatisierung für Prozesse, die Aufsichtsbehörden tatsächlich prüfen — standardmäßig nur lesend, gebaut, um auch unter Unsicherheit korrekt weiterzulaufen — das Muster hinter sii und previred.",
      },
      {
        title: "KI-integrierte Pipelines, faktenverankert",
        description:
          "LLMs verfassen Fließtext über Zahlen, die Ihr Code bereits berechnet hat — niemals die Zahlen selbst. Jede generierte Aussage wird vor der Veröffentlichung gegen einen eingefrorenen Faktensatz geprüft.",
      },
    ],
  },
  work: {
    eyebrow: "Ausgewählte Projekte",
    title: "Öffentlich, überprüfbar — und immer noch in Betrieb.",
    items: {
      sii: {
        kicker: "Automatisierung für die Steuerbehörde",
        description:
          "Ein TypeScript-Kern, eine CLI und ein MCP-Server automatisieren Chiles Steuerbehörde (SII) — gebaut mit Schutzmechanismen, die für Zuverlässigkeit sorgen, statt auf Best-Effort-Skripte zu setzen.",
      },
      previred: {
        kicker: "Automatisierung des Rentenportals",
        description:
          "Rein lesende Automatisierung von Chiles Portal für Rentenbeiträge — so konzipiert, dass Zahlungsvorgänge bauartbedingt nicht auslösbar sind, nicht nur durch ein Code-Review davon abgeraten wird.",
      },
      stellarfit: {
        kicker: "Web3-Zahlungen",
        description:
          "Abo-Checkout, abgewickelt auf der Stellar-Blockchain — Zugriff wird erst gewährt, nachdem Horizon eine memo-abgeglichene Einmalzahlung bestätigt hat, ganz ohne dass Nutzer einem Verwahrer vertrauen müssen.",
      },
      glowcheck: {
        kicker: "Computer Vision",
        description:
          "Gesichts- und Hautanalyse, die DeepFace/TensorFlow-Demografiemodelle mit eigens entwickelten ITA-Hautton-, Erythem- und Gesichtsasymmetrie-Metriken kombiniert.",
      },
      turbotrabajo: {
        kicker: "Produktives SaaS",
        description:
          "Eine produktive Plattform für Jobbewerbungen: Firebase-Authentifizierung, Profil-Matching, eine serverseitig autoritative Token-Wallet und Flow.cl-Zahlungen — durchgängig.",
      },
      "battery-storage-reporting": {
        kicker: "Energie · KI-gestütztes, faktenbasiertes Reporting",
        description:
          "Automatisiertes tägliches Leistungsreporting für ein netzskaliertes Batteriespeichersystem: eine deterministische KPI-Engine kombiniert mit einer LLM-Textebene, deren jede generierte Zahl vor der Veröffentlichung gegen die eingefrorenen Fakten geprüft wird — Tag für Tag zuverlässig.",
      },
    },
  },
  grantfox: {
    eyebrow: "Ausgewähltes Engagement",
    title: "Beiträge zum Live-Marketplace von Grantfox auf Stellar",
    paragraph:
      "Grantfox betreibt einen wallet-nativen Marketplace für KI-Prompts und Agents, abgewickelt auf Stellar. Wir arbeiten als externe Contributor direkt im NestJS-Backend und Next.js-Frontend — die Art von Arbeit, die nur zählt, wenn ein echter Reviewer, nicht wir selbst, sie für korrekt befindet.",
    points: [
      "Gehärtete Deployment-Sicherheit: Nicht-Entwicklungsumgebungen benötigen ein explizites JWT-Secret, bevor sie hochfahren, und starten nicht, wenn Simulated-Payment- oder Database-Seed-Flags aktiviert geblieben sind.",
      "Wallet-scoped Autorisierung: Guthaben, Transaktionsverlauf und Käufe werden ausschließlich aus dem authentifizierten Principal abgeleitet — verifiziert, sodass ein Konto nie auf ein anderes zugreifen oder es verändern kann.",
      "Ausgelieferte Marketplace-UI: die Dashboard-, Marketplace-, Asset-Detail- und Wallet-Seiten, die den Kauf- und Auslieferungs-Flow der Plattform für Prompts umsetzen.",
    ],
    cta: "Grantfox besuchen",
  },
  approach: {
    eyebrow: "Wie wir arbeiten",
    title: "Gebaut, um weiterzulaufen.",
    paragraph:
      "Jedes der oben genannten Projekte folgt derselben Disziplin: Systeme, die unter realen Bedingungen zuverlässig bleiben, und jede veröffentlichte Zahl lässt sich bis zu einer überprüfbaren Quelle zurückverfolgen. Die Grenze zwischen dem, was ein LLM schreibt, und dem, was es behaupten darf, wird im Code selbst durchgesetzt — sodass das, was wir sagen, mit dem übereinstimmt, was tatsächlich läuft.",
    pillars: [
      {
        title: "Deterministisch zuerst",
        body: "Zahlen stammen aus Code, nicht aus einem Modell. Wo wir überhaupt ein LLM einsetzen, schreibt es Fließtext über bereits berechnete Fakten — es berechnet den Fakt nie selbst.",
      },
      {
        title: "Gebaut für Uptime",
        body: "Fehlende Konfiguration, ein nicht rotierter Schlüssel, eine nicht verifizierbare Eingabe — das System fängt es ab, bevor es überhaupt in Produktion gelangt, sodass das, was live ist, weiterläuft statt still zu degradieren.",
      },
      {
        title: "Nachvollziehbare Aussagen",
        body: "Jede Zahl, die wir veröffentlichen — über unsere eigene Arbeit oder die eines Kunden —, wird durch eine Quelle gestützt, auf die wir verweisen können. Können wir sie nicht belegen, veröffentlichen wir sie nicht.",
      },
    ],
  },
  demo: {
    eyebrow: "In Aktion sehen",
    title: "Einen Schalter umlegen. Sehen, was es am Laufen hält.",
    paragraph:
      "Das ist genau die Deployment-Absicherung, die im echten Backend von Grantfox läuft — reduziert auf einen Schalter. Ändern Sie die Flags unten und klicken Sie auf Deploy, um exakt die Prüfung zu sehen, die einen falsch konfigurierten Build davon abhält, jemals in Produktion zu gelangen — die Logik läuft vollständig in Ihrem Browser, keine simulierte API steht stellvertretend für einen Server.",
    panelLabel: "deploy-panel",
    toggles: {
      jwt: { label: "JWT_SECRET gesetzt", description: "Explizites Secret zum Signieren von Auth-Tokens." },
      seed: { label: "DB_SEED_ON_STARTUP", description: "Erzeugt beim Start ein Demo-Wallet-Guthaben." },
      nodeEnv: { label: "NODE_ENV=production", description: "Für diese Demo fest eingestellt." },
    },
    deployButton: "Deploy",
    terminalPrompt: "$ NODE_ENV=production npm run start",
    emptyState: "// Deploy klicken, um die Prüfung auszuführen",
    reasons: {
      jwtMissing:
        "JWT_SECRET nicht gesetzt — würde auf das veröffentlichte Dev-Secret zurückfallen und es jedem ermöglichen, ein gültiges Token zu fälschen",
      seedOn:
        "DB_SEED_ON_STARTUP ist in Produktion aktiviert — der Start würde ein fingiertes Wallet mit 450 Credits erzeugen",
    },
    refusedPrefix: "✗ Start verweigert — ",
    successLine: "✓ Bootsequenz gestartet — alle Sicherheitsprüfungen bestanden.",
  },
  notes: {
    eyebrow: "Notizen aus der Praxis",
    title: "Notizen aus der Arbeit.",
    paragraph:
      "Kurze Beiträge über die tatsächlichen technischen Entscheidungen hinter den oben genannten Projekten — keine Zusammenfassungen, sondern die Begründung dahinter.",
    readSuffix: "Lesezeit",
    items: {
      "fail-closed-deployments": {
        title: "Warum unsere Deployments den Start verweigern",
        dek: "Bei Grantfox haben wir eine Reihe von Fehlkonfigurationen in Produktion unmöglich gemacht, indem der Prozess beim Start abstürzt, statt still zu degradieren.",
        readTime: "5 Min.",
        body: [
          "Wir tragen als externe Contributor zu Grantfox bei, einem wallet-nativen Marketplace für KI-Prompts und Agents auf Stellar-Basis, und arbeiten dabei direkt gegen dessen produktives NestJS-Backend und Next.js-Frontend. Ein erheblicher Teil dieser Arbeit hatte nichts mit Features zu tun. Sie bestand darin, die Bootsequenz durchzugehen und für jede Umgebungsvariable, die das Sicherheitsverhalten verändert, zu fragen: Was passiert, wenn diese in Produktion einfach nicht gesetzt wird? An mehreren Stellen lautete die ehrliche Antwort: Die App startet trotzdem — mit einem Standardwert, der auf einem Laptop unproblematisch, auf einem Server aber gefährlich war.",
          "Der klarste Fall war JWT_SECRET. Token-basierte Authentifizierung ist nur so stark wie das Secret, mit dem Tokens signiert und verifiziert werden; wer dieses Secret besitzt, kann ein Token ausstellen, das behauptet, ein beliebiger Nutzer zu sein — denn der Server hat keine Möglichkeit, ein selbst ausgestelltes Token von einem zu unterscheiden, das er selbst ausgegeben hat. Das Backend fiel früher auf ein veröffentlichtes Dev-Secret zurück, wenn JWT_SECRET nicht gesetzt war. Diese Zeichenkette existiert in der Versionshistorie und in lokalen Setup-Dokumenten — sie ist also gar kein Geheimnis, sondern ein bekannter Wert. Ein Dienst, der damit in Produktion läuft, ist nicht schwach geschützt, sondern schlicht unauthentifiziert, nur mit ein paar Extraschritten: Token mit dem bekannten Schlüssel fälschen, signieren, vorlegen — und die App hat keine Grundlage, es abzulehnen.",
          "Die Lösung bestand darin, das Fehlen von JWT_SECRET nicht länger zu tolerieren, sobald die App glaubt, im echten Betrieb zu laufen. Beim Start liest die App ihren Umgebungsmodus aus, und außerhalb von Development verlangt sie nun, dass JWT_SECRET explizit gesetzt ist — sonst verweigert sie den Start. Kein Fallback, kein „Warnung und trotzdem weiter\". Das ist ein bewusster Kompromiss: Wir haben die Bequemlichkeit aufgegeben, dass es einfach in jeder Umgebung läuft, die jemand zu konfigurieren vergessen hat, im Austausch für die Garantie, dass ein Produktionsprozess nie still mit einem Schlüssel läuft, den ein Angreifer nachschlagen kann. Ein Absturz zum Deploy-Zeitpunkt ist laut, sofort sichtbar und blockiert den Rollout. Ein stiller Fallback bleibt unsichtbar, bis ihn jemand findet.",
          "Derselbe Durchgang förderte eine zweite Kategorie zutage, die unabhängig wirkt, es aber nicht ist: PAYMENT_SIMULATION_ENABLED, MOCK_PAYMENT_ENABLED, MOCK_PAYMENT_FAIL und DB_SEED_ON_STARTUP. Jede dieser Variablen existiert aus einem echten Grund — man will den Kaufablauf testen, ohne Stellar anzufassen, ohne einen Zahlungsanbieter im Spiel zu haben, oder mit einem reproduzierbaren Datensatz, wenn eine frische Umgebung hochfährt. Insbesondere das Seed-Flag schreibt ein fingiertes Wallet mit einem Guthaben von 450 Credits, damit es etwas zum Testen gibt. Nichts davon ist in Development ein Problem. Es wird zu einem Problem in dem Moment, in dem es in einem Deployment aktiviert bleibt, das echte Nutzer erreichen können.",
          "Wir behandeln ein per Seed erzeugtes Guthaben und einen simulierten Zahlungserfolg als denselben Fehlermodus, weil sie es strukturell auch sind. Sobald dieses Wallet mit 450 Credits in die Datenbank geschrieben ist, kann nichts nachgelagert es von einem Guthaben unterscheiden, das durch einen echten Kauf zustande kam — die Code-Pfade für Wallet, Transaktion und Kauf lesen alle aus denselben Tabellen und tragen kein Herkunfts-Flag, das sagt: Dieses Guthaben wurde erfunden. Ein aktiv gelassenes Mock-Payment-Flag hat dieselbe Eigenschaft: Es lässt den Kaufablauf Erfolg melden, ohne dass Geld geflossen ist, und dieser Erfolg ist für alles, was ihn danach ausliest, nicht von einem echten zu unterscheiden. Fingierter Zustand bleibt fingierter Zustand, egal welches Flag ihn erzeugt hat — deshalb verweigern produktive Deployments jetzt den Start, wenn eine dieser vier Variablen aktiviert ist, genauso wie sie ohne JWT_SECRET den Start verweigern.",
          "Der Mechanismus hat in beiden Fällen dieselbe Form: das unsichere Verhalten an die Umgebung koppeln, in der sich der Prozess wähnt, und das Gate fail closed statt fail open gestalten. Fail open bedeutet, dass eine nicht gesetzte oder falsch konfigurierte Variable still zu „Dev annehmen, alles gut\" auflöst — genau die Konstellation, in der niemand danach schaut. Fail closed bedeutet, dass dieselbe fehlende Konfiguration zu „Start verweigern\" auflöst, wodurch aus einer subtilen Sicherheitslücke ein offensichtlicher, unübersehbarer Deploy-Fehler wird. Uns ist lieber, ein Ingenieur starrt auf ein abgestürztes Boot-Log und setzt die richtige Variable, als dass diese Lücke live bleibt, bis irgendwann jemand sie bemerkt.",
          "Die generelle Lehre, die wir immer wieder neu lernen: Standardwerte für Developer Experience und Standardwerte für Produktionssicherheit sind meist nicht derselbe Wert, und Code, der die beiden Umgebungen nicht unterscheidet, wird irgendwann im ungünstigsten Moment den bequemen Wert wählen. Es ist günstiger, diese Unterscheidung explizit beim Prozessstart zu treffen — eine Prüfung, an einer Stelle, die laut scheitert — als sich darauf zu verlassen, dass jedes Deployment von Hand korrekt konfiguriert wird, und zu hoffen, dass der Unterschied nie eine Rolle spielt.",
        ],
      },
      "llm-grounding": {
        title: "Einem LLM beibringen, wo die Fakten enden",
        dek: "In einer Reporting-Pipeline für ein netzskaliertes Batteriesystem lassen wir ein LLM die Sätze schreiben, niemals die Zahlen — und prüfen trotzdem jede Zahl, die es schreibt.",
        readTime: "6 Min.",
        body: [
          "Wir haben den täglichen Leistungsbericht für ein netzskaliertes Batteriespeichersystem genauso aufgebaut wie jede andere Reporting-Pipeline — bis zum letzten Schritt. SCADA-Daten kommen von der Anlage, eine Python-KPI-Engine wandelt sie in die relevanten Zahlen um — Ladezustand, Lade- und Entladezyklen, Verfügbarkeit, was auch immer der Vertrag verlangt —, und diese Zahlen werden zu einem Faktensatz eingefroren, bevor sonst irgendetwas passiert. Der letzte Schritt ist Fließtext: Jemand muss eine Tabelle voller KPIs in einen Bericht verwandeln, den ein Mensch lesen möchte. Das ist der Schritt, den wir einem LLM übertragen haben — und zugleich der Schritt, dem wir am wenigsten vertrauen, weshalb die gesamte Pipeline darauf ausgelegt ist, ihm eben nicht zu vertrauen.",
          "Die Design-Entscheidung, die dem allen zugrunde liegt: Das LLM berechnet nie irgendetwas. Es summiert keine Spalte, mittelt keine Woche, leitet keinen Prozentsatz aus zwei ihm übergebenen Zahlen ab. Jede Zahl, die im finalen Bericht erscheint, wurde von der Python-KPI-Engine berechnet, Punkt, bevor das LLM die Daten überhaupt zu Gesicht bekommt. Die Aufgabe des Modells ist strikt die Erzählung: Schreibe, ausgehend von diesem eingefrorenen Faktensatz, Absätze, die ein Anlagenbetreiber lesen möchte. Diese Trennung ist wichtig, weil eine deterministische KPI-Engine im üblichen Sinn testbar ist — gleiche Eingabe, gleiche Ausgabe, jedes Mal —, während ein LLM, das nebenbei auch noch rechnen soll, weder deterministisch ist noch unserer Erfahrung nach zuverlässig korrekt darin. Also verlangen wir das nicht von ihm. Wir lassen es schreiben, und wir überlassen dem Code den einzigen Teil der Aufgabe, bei dem ein Fehler still und teuer ist.",
          "„Eingefrorener Faktensatz\" leistet in diesem Satz echte Arbeit, es klingt nicht nur vorsichtig. Es bedeutet, dass die Ausgabe der KPI-Engine gesperrt ist, bevor das LLM aufgerufen wird — eine feste Struktur aus Zahlen und Bezeichnungen, die dem Modell als Kontext übergeben wird und die es nicht revidieren, neu berechnen oder erweitern kann. Das LLM kann wählen, wie eine Zahl formuliert wird, in welcher Reihenfolge sie präsentiert wird, welche Zahlen es für die Geschichte eines bestimmten Tages in den Vordergrund stellt — aber es kann keine Zahl einführen, die nicht bereits in diesem eingefrorenen Satz steht. Will das Modell sagen, das System habe eine bestimmte Anzahl Stunden entladen, muss diese Zahl bereits in den ihm übergebenen Fakten existieren. Niemand nach der KPI-Engine darf einen Fakt erfinden.",
          "Diese Einschränkung zählt nur, wenn etwas sie auch durchsetzt. Deshalb liest ein separater Grounding-Check die Ausgabe erneut, nachdem das LLM seinen Entwurf geschrieben hat. Mechanisch ist das unkompliziert: Jedes numerische Token wird aus dem generierten Text extrahiert — jede Zahl, jeder Prozentsatz, jede Anzahl, die das Modell notiert hat —, und jedes davon wird gegen den eingefrorenen Faktensatz abgeglichen. Eine Zahl in der Prosa des LLM, die sich nicht auf eine tatsächlich von Python berechnete Zahl zurückführen lässt, ist eine Abweichung. Dabei spielt es keine Rolle, ob die Abweichung eine halluzinierte Statistik ist oder eine plausibel aussehende Rundung einer echten Zahl, die beim Umformulieren abgedriftet ist — in beiden Fällen ist es eine Zahl im Bericht, die nicht aus den Daten stammt, und genau diesen Fehlermodus soll die Pipeline abfangen. Ein einziges nicht zuordenbares numerisches Token irgendwo in der Ausgabe blockiert die Veröffentlichung dieses Berichts. Nicht zur Prüfung markiert, nicht mit einem Vorbehalt veröffentlicht — blockiert.",
          "Wir betrachten den Grounding-Check als so tragend, dass er eine eigene Testabdeckung braucht, nicht nur Stichproben an ein paar Beispielberichten. Die Pipeline als Ganzes wird von 648 Tests abgesichert, und keiner davon führt einen Netzwerkaufruf aus — die KPI-Mathematik, der Schritt des Einfrierens der Fakten und der Grounding-Check selbst werden bei jedem Lauf deterministisch und offline geprüft. Das ist eine direkte Folge davon, Berechnung und Erzählung getrennt zu halten: Die Teile des Systems, bei denen am leichtesten katastrophale Fehler passieren können (Arithmetik auf echten Energie- und Finanzzahlen), sind auch die Teile, die am günstigsten erschöpfend zu testen sind, weil sie nicht davon abhängen, worauf das LLM an diesem Tag gerade Lust hat.",
          "Nichts davon schützt Sie davor, dass der Bericht schlicht ausbleibt. Eine Pipeline, die korrekt die Veröffentlichung eines schlechten Berichts verweigert, ist nur die halbe Geschichte, wenn niemand bemerkt, dass der Bericht überhaupt nie gelaufen ist — ein hängengebliebener Cronjob und ein bombenfester Grounding-Check erzeugen aus Sicht des Kunden dieselbe Stille. Deshalb gibt es neben der Reporting-Logik eine Monitoring-Ebene: eine Totmannschalter-Prüfung, die einen planmäßigen Lauf erwartet und in dem Moment Alarm schlägt, in dem er ausbleibt. Korrektheit und Liveness sind unterschiedliche Fehlermodi, und wir wollten nicht, dass eine Lösung für das eine still für das andere einsteht.",
          "Wir haben das nicht gebaut, weil LLMs in irgendeinem abstrakten Sinn nicht vertrauenswürdig wären — wir haben es gebaut, weil wir Modellausgaben neben Zahlen stellten, mit denen ein Kunde echte betriebliche und finanzielle Entscheidungen über ein reales physisches Asset trifft, und „meistens richtig\" ist keine Eigenschaft, die man jemandem in dieser Position anbieten kann. Wer LLM-generierten Text neben Zahlen ausliefert, die zählen, geht dieselbe Wette ein, ob benannt oder nicht: Entweder wird der Arithmetik des Modells implizit vertraut, oder etwas außerhalb des Modells prüft seine Arbeit, bevor ein Mensch sie sieht. Das LLM vollständig aus der Berechnung herauszuhalten, die Fakten einzufrieren, bevor es ein Wort schreibt, und danach jede Zahl, die es ausgibt, gegen diesen eingefrorenen Satz zu verifizieren, ist keine Absicherung dagegen, dass ein Modell schlecht in Mathe ist. Es ist die Weigerung, einen Schritt, den wir nicht vollständig verifizieren können, darüber entscheiden zu lassen, was die Zahlen sind.",
        ],
      },
      "verified-claims-ledger": {
        title: "Ein Ledger für jede Aussage, die wir veröffentlichen",
        dek: "Warum der Satz „noch nicht offengelegt\" auf dieser Website und das Feld UNAVAILABLE in Grantfox' Wallet-API dieselbe technische Entscheidung sind.",
        readTime: "5 Min.",
        body: [
          "Jede öffentliche Aussage auf dieser Website soll sich bis zu einer benannten Quelle zurückverfolgen lassen — einem Repository, einem Commit, einem Screenshot, einer README —, nicht bis zu unserer eigenen Erinnerung daran, was wir gebaut haben. Diese Rückverfolgbarkeit halten wir in einem Ledger fest: einem einfachen Dokument, das jeden von uns veröffentlichten Satz mit seiner Herkunft und dem Zeitpunkt der letzten Prüfung verknüpft. Kann eine Aussage nicht auf eine Zeile in diesem Ledger verweisen, wird sie nicht veröffentlicht. Das klingt nach einer Dokumentationsgewohnheit. Tatsächlich ist es dieselbe Entscheidung, die wir auch in der Software selbst treffen, und der klarste Ort, das zu sehen, ist eine einzelne API-Antwort innerhalb von Grantfox.",
          "Grantfox ist ein wallet-nativer Marketplace für KI-Prompts und Agents auf Stellar-Basis, und wir arbeiten als externe Contributor an dessen Backend und Frontend. Ein Wallet trägt dort zwei unterschiedliche Arten von Guthaben: ein Ledger-Guthaben, das das Backend direkt aus den erfassten Käufen und Transaktionen berechnen kann, und ein On-Chain-Guthaben, für das man tatsächlich das Stellar-Netzwerk auslesen müsste. Diesen On-Chain-Zugriff haben wir noch nicht integriert. Der ehrliche Zustand dieses Teils des Systems lautet: Wir kennen die Zahl nicht.",
          "Der einfache Weg, mit dieser Lücke umzugehen, wäre, sie vorzutäuschen — den Ledger-Wert zurückgeben und als On-Chain-Guthaben bezeichnen, oder etwas plausibel Aussehendes berechnen und die Wallet-Ansicht es wie jedes andere Feld rendern lassen. Niemand, der das JSON inspiziert, würde das zwangsläufig bemerken, und ein Dashboard, in dem jedes Feld eine Zahl trägt, wirkt fertiger als eines mit einer sichtbaren Lücke. Das haben wir nicht getan. Die API meldet das On-Chain-Guthaben als UNAVAILABLE. Nicht null, keine Schätzung, nicht die Ledger-Zahl mit einem On-Chain-Etikett — sondern ein expliziter Status, der sagt: Der Verifizierungspfad existiert noch nicht.",
          "Transaktions-Hashes erfahren dieselbe Behandlung. Ein echter Stellar-Transaktions-Hash ist eine 64-stellige Hex-Zeichenkette, und Grantfox befüllt dieses Feld nur, wenn tatsächlich einer on-chain existiert. Ist das nicht der Fall — eine Transaktion hat noch nicht abgewickelt, oder der betreffende Flow erzeugt gar keinen —, ist das Feld null. Wir hätten einen Platzhalter ausliefern können, etwas Hex-förmiges, das das Feld füllt und erfüllt, was das Frontend dort an einer Zeichenkette erwartet. Das haben wir nicht getan, aus demselben Grund, aus dem das Guthaben nicht geschätzt wird: Ein null ist eine wahre Aussage über das, was wir wissen, und ein fingierter Hash ist eine Lüge in der Form eines Beweises.",
          "Keine der beiden Entscheidungen ist groß. Sie lassen sich in einem Diff leicht übersehen, und kaum ein Nutzer wird je fragen, warum ein Wallet-Feld UNAVAILABLE zeigt, während die übrigen Zahlen anzeigen. Aber es ist dieselbe Entscheidung, angewendet auf der Ebene eines API-Felds statt auf der Ebene eines Satzes, die bestimmt, was wir auf diese Website lassen. Ein UNAVAILABLE-Status und ein Label „noch nicht offengelegt\" sind derselbe Schritt: Wenn die ehrliche Antwort lautet, wir haben diese Zahl nicht, sagt man das — statt etwas zu berechnen, das ihr ähnelt.",
          "Deshalb veröffentlichen wir Grantfox' Gebühren- oder Provisionssatz nirgendwo auf dieser Website. Wir könnten einen aus typischen Marketplace-Konditionen schätzen oder eine Spanne aus den Teilen der Gebührenlogik ableiten, die wir direkt geprüft haben, und es würde sich bequem neben allem anderen auf einer Leistungsseite einfügen. Stattdessen kennzeichnen wir es als „noch nicht offengelegt\", weil wir dafür keine Quelle haben — anders als für die Deployment-Härtung, die wir ausgeliefert haben, oder den Kaufablauf, den wir gebaut haben. Dieselbe Regel, die ein null im Transaktions-Hash-Feld hält, hält diese Zeile aus unseren Texten heraus.",
          "Die Kosten sind an beiden Stellen sichtbar. Eine Wallet-Ansicht mit UNAVAILABLE wirkt weniger fertig als eine, in der jedes Feld eine Zahl trägt. Eine Leistungsseite mit „noch nicht offengelegt\" liefert ein flacheres Pitch als eine mit einem Gebührensatz und einer Umsatzprognose neben den übrigen Zahlen. Keiner von uns darf so tun, als gäbe es die Lücke nicht, nur weil sie ausgefüllt besser klingen würde. Die Alternative — die fehlende Angabe zu erfinden — ist genau einmal billig, und es ist derselbe Fehler, ob er als fingiertes Wallet-Guthaben auftaucht oder als fingierte Statistik auf unserer eigenen Website.",
          "Der Ledger ist also kein Disclaimer, den wir uns im Nachhinein zur Absicherung anheften. Es ist dieselbe Disziplin, die wir in die Systeme einbauen, die wir ausliefern — nur rückwärts angewandt auf unsere eigenen Aussagen: Bevor ein Satz auf diese Website kommt, fragen wir, welche Zeile ihn stützt — genauso wie der Balance-Endpunkt von Grantfox fragt, ob tatsächlich ein On-Chain-Zugriff vorliegt, bevor er eine Zahl ausgibt. Lautet die Antwort nein, sagt der Satz — wie das Feld — genau das.",
        ],
      },
    },
  },
  contact: {
    eyebrow: "Kontakt aufnehmen",
    title: "Erzählen Sie uns, was Sie bauen.",
    paragraph:
      "Full-Stack-Produktarbeit, eine Web3-Integration oder eine Automatisierungs-Pipeline, die einem Audit standhalten muss — schildern Sie uns die Grundzüge des Problems, und wir sagen Ihnen unverblümt, ob wir dazu passen.",
    nameLabel: "Name",
    emailLabel: "E-Mail",
    messageLabel: "Was bauen Sie gerade?",
    sendingLabel: "Wird gesendet…",
    sendButton: "Senden",
    sentMessage: "Gesendet — wir lesen jede Nachricht persönlich und antworten innerhalb weniger Tage.",
    errorMessage: "Beim Senden ist etwas schiefgelaufen — versuchen Sie es erneut oder schreiben Sie uns per E-Mail",
    errorCta: "direkt.",
  },
  footer: {
    sourceLabel: "Quellcode",
  },
  whatsapp: {
    label: "WhatsApp",
    greeting: "Hallo TurboDevs! Ich würde gerne über ein Projekt sprechen.",
  },
}
