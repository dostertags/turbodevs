import type { Dictionary } from "@/i18n/types"

export const de: Dictionary = {
  meta: {
    title: "TurboDevs — Software für Abläufe, die nicht stillstehen dürfen",
    description:
      "TurboDevs ist ein Studio für Softwareentwicklung. Wir finden den Prozess, der Ihr Team Stunden oder Chancen kostet, ersetzen ihn durch Software und halten ihn 24/7 am Laufen.",
  },
  nav: {
    services: "Leistungen",
    work: "Projekte",
    products: "Produkte",
    notes: "Notizen",
    contact: "Kontakt",
    cta: "Sprechen Sie uns an",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
  },
  hero: {
    eyebrow: "Studio für Softwareentwicklung",
    headline: "Software für Abläufe, die nicht stillstehen dürfen.",
    paragraph:
      "Für geschäftskritische Software, bei der Ausfallzeiten keine Option sind. Wir entwickeln resiliente, produktionsreife Systeme — von der Überwachung von Solarkraftwerken und Steuer-Compliance-Engines bis zu Web3-Zahlungen — mit zuverlässigem 24/7-Betrieb.",
    ctaPrimary: "Sprechen Sie uns an",
    ctaSecondary: "Projekte ansehen",
    clientsLabel: "Im Einsatz bei",
    photoAlt: "Reihen von Solarmodulen in einer Wüste, im Hintergrund Berge.",
    photoCredit: "Foto",
  },
  problem: {
    eyebrow: "Das Problem",
    title: "Die Arbeit, die ein Unternehmen am Laufen hält, ist die Arbeit, für deren Verbesserung niemand Zeit hat.",
    body: "Meldungen mit Fristen. Anlagen, die jeden Tag berichten. Ausschreibungen, die in einem Posteingang verfallen. Diese Prozesse laufen über Tabellen, Portale und das Gedächtnis einzelner Personen — bis zu dem Tag, an dem sie es nicht mehr tun. Wir ersetzen sie durch Software, die die Arbeit erledigt, ihre eigenen Ergebnisse prüft und auch nachts weiterläuft.",
  },
  services: {
    eyebrow: "Wie wir arbeiten",
    title: "Vier Phasen. Steigen Sie bei einer beliebigen ein oder übergeben Sie uns den ganzen Kreislauf.",
    stages: [
      {
        title: "Diagnose",
        line: "Den Prozess finden, der Sie am meisten kostet.",
        body: "Wir setzen uns mit den Menschen zusammen, die die Arbeit machen, bilden den Prozess Schritt für Schritt ab und halten fest, welche Schritte Stunden, Fehler oder verpasste Chancen kosten — und welche zuerst automatisiert werden sollten.",
      },
      {
        title: "Entwicklung",
        line: "Software, die die Arbeit erledigt.",
        body: "Automatisierungen, Integrationen und KI-Agenten, aufgebaut auf Ihren eigenen Dateien und Systemen. Zahlen stammen aus Code; wo ein Modell schreibt, schreibt es über bereits berechnete Fakten, und jede Zahl wird geprüft, bevor sie hinausgeht.",
        proof: "Im Einsatz: das System, das bei Sainz Intec private Ausschreibungen beantwortet.",
      },
      {
        title: "Einführung",
        line: "Mitten in Ihrem Betrieb.",
        body: "Wir binden die Portale, Dateien und Datenquellen an, die Ihr Team bereits nutzt, und arbeiten mit den Menschen zusammen, die sie betreuen, bis das System fester Teil der Routine ist.",
        proof: "In der Praxis: unsere SII- und Previred-Automatisierungen, aufgebaut auf den Portalen, die chilenische Teams jeden Monat nutzen.",
      },
      {
        title: "Betrieb",
        line: "24/7, überwacht.",
        body: "Wir betreiben, was wir bauen: Monitoring, tägliche Berichte und eine Prüfung jeder Ausgabe, damit es auch lange nach dem Launch-Tag weiter funktioniert.",
        proof: "Im Einsatz: die Solarbatteriestation von Quorelia und ein täglicher Bericht für einen Batteriespeicher.",
      },
    ],
  },
  work: {
    eyebrow: "Projekte",
    title: "Systeme, die heute in Produktion laufen.",
    challengeLabel: "Die Herausforderung",
    builtLabel: "Was wir gebaut haben",
    confidentialClient: "Vertraulicher Energiekunde",
    visitLabel: "Besuchen",
    cases: {
      quorelia: {
        sector: "Energie",
        challenge: "Eine Solarbatteriestation, die Tag und Nacht arbeiten muss, ohne dass jemand danebensteht.",
        built: "Die Software, die die Station rund um die Uhr betreibt.",
        quote:
          "TurboDevs hat für uns eine 24/7-Solarbatteriestation entwickelt, die Tag und Nacht läuft. Sie arbeitet weiter, auch wenn niemand hinsieht — nachts genauso zuverlässig wie tagsüber. Das Team hat sich die Zeit genommen zu verstehen, wie unser Energiebetrieb tatsächlich funktioniert, und etwas gebaut, auf das wir uns jeden Tag verlassen.",
      },
      sainzIntec: {
        sector: "Industrielle Beschaffung",
        challenge: "Private Ausschreibungen und Beschaffungsanfragen, die im Posteingang verfielen, bevor jemand sie beantwortete.",
        built: "Ein automatisches System, das private Ausschreibungen selbstständig beantwortet.",
        quote:
          "TurboDevs hat uns ein System gebaut, das private Ausschreibungen selbstständig beantwortet — und es bringt dem Unternehmen echtes Neugeschäft. Chancen, die uns früher entgangen sind, werden jetzt beantwortet, ohne dass jemand im Team ihnen hinterherlaufen muss. Es ist Teil davon geworden, wie wir Aufträge gewinnen, und läuft weiter, während wir uns auf die Umsetzung konzentrieren.",
      },
      batteryStorage: {
        sector: "Energie",
        challenge:
          "Ein täglicher Leistungsbericht für ein netzskaliertes Batteriespeichersystem, bei dem eine falsche Zahl eine falsche Betriebsentscheidung bedeutet.",
        built:
          "Eine deterministische KPI-Engine mit einem darauf aufbauenden Fließtext. Jede Zahl im Text wird gegen die berechneten Fakten geprüft, bevor der Bericht hinausgeht — abgesichert durch 648 automatisierte Tests.",
      },
      grantfox: {
        sector: "Web3-Marketplace",
        challenge: "Ein wallet-nativer Live-Marketplace für KI-Prompts und Agents, abgewickelt auf Stellar.",
        built:
          "Als externe Contributor: Sicherheitsprüfungen für Deployments, wallet-scoped Autorisierung und die Oberfläche für Kauf und Auslieferung.",
      },
      vertigo: {
        sector: "Gastgewerbe",
        challenge: "Ein Restaurant, dessen Website schnell online gehen musste — und das jemanden brauchte, der sie aktuell hält.",
        built: "Die Website, schnell ausgeliefert, seitdem mit laufendem Support.",
        quote:
          "Sie haben unsere Website schnell umgesetzt und begleiten uns seitdem — immer nah an dem, was wir brauchen. Wenn sich etwas ändern soll, sagen wir es ihnen, und es wird erledigt, ohne dass wir nachhaken müssen. Für ein Restaurant heißt das: eine Sorge weniger und ein Partner, auf den wir uns verlassen können, während das Geschäft wächst.",
      },
    },
    openSourceTitle: "Open Source",
    openSourceIntro: "Unsere eigenen Tools, öffentlich auf GitHub — die Technik hinter der Kundenarbeit.",
    openSource: {
      sii: {
        kicker: "Automatisierung für die Steuerbehörde",
        description:
          "Ein TypeScript-Kern, eine CLI und ein MCP-Server, die Chiles Steuerbehörde (SII) automatisieren, mit 1.178 hermetischen Tests.",
      },
      previred: {
        kicker: "Automatisierung des Rentenportals",
        description:
          "Rein lesende Automatisierung von Chiles Portal für Rentenbeiträge, so konzipiert, dass Zahlungen bauartbedingt nicht ausgelöst werden können.",
      },
      stellarfit: {
        kicker: "Web3-Zahlungen",
        description:
          "Abo-Checkout, abgewickelt auf Stellar: Zugriff wird erst gewährt, nachdem das Netzwerk eine Einmalzahlung bestätigt hat.",
      },
      glowcheck: {
        kicker: "Computer Vision",
        description:
          "Gesichts- und Hautanalyse, die DeepFace/TensorFlow-Modelle mit eigenen Metriken für Hautton, Erythem und Asymmetrie kombiniert.",
      },
      turbotrabajo: {
        kicker: "Produktives SaaS",
        description:
          "Eine produktive Plattform für Jobbewerbungen: Firebase-Authentifizierung, Profil-Matching, eine serverseitige Token-Wallet und Flow.cl-Zahlungen.",
      },
    },
  },
  products: {
    eyebrow: "Produkte",
    title: "Probleme, die wir schon mehr als einmal gelöst haben.",
    paragraph: "Fertige Systeme aus unserer Kundenarbeit und unseren Open-Source-Projekten, für Ihr Unternehmen eingerichtet statt von Grund auf neu gebaut.",
    requestLabel: "Zugang anfragen",
    items: {
      sii: {
        name: "SII-Automatisierung",
        line: "Die Abläufe Ihres Unternehmens mit der chilenischen Steuerbehörde, automatisiert über CLI und API — standardmäßig nur lesend.",
        basis: "Basiert auf unserem Open-Source-Projekt sii, mit 1.178 hermetischen Tests.",
      },
      previred: {
        name: "Previred-Automatisierung",
        line: "Rentenbeitragsprozesse bei Previred, automatisiert und nur lesend; Zahlungen sind konstruktionsbedingt ausgeschlossen.",
        basis: "Basiert auf unserem Open-Source-Projekt previred.",
      },
      bids: {
        name: "Ausschreibungs-Responder",
        line: "Beantwortet private Ausschreibungen und Beschaffungsanfragen automatisch, damit keine Chance im Postfach verloren geht.",
        basis: "Im Einsatz bei Sainz Intec.",
      },
      energy: {
        name: "Energie-Reporting",
        line: "Tägliche KPI-Berichte für Solar- und Batterieanlagen; jede Zahl wird vor dem Versand geprüft.",
        basis: "Entstanden aus unserem Reporting-Projekt für Batteriespeicher.",
      },
    },
  },
  notes: {
    eyebrow: "Notizen",
    title: "Wie wir bauen, schriftlich festgehalten.",
    paragraph: "Kurze Beiträge über die technischen Entscheidungen hinter den oben gezeigten Projekten.",
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
    eyebrow: "Kontakt",
    title: "Sagen Sie uns, welcher Prozess nicht stillstehen darf.",
    paragraph: "Wir lesen jede Nachricht persönlich und antworten innerhalb weniger Tage.",
    nameLabel: "Name",
    companyLabel: "Unternehmen",
    roleLabel: "Funktion",
    optionalLabel: "optional",
    emailLabel: "Geschäftliche E-Mail",
    interestLabel: "Wofür interessieren Sie sich?",
    interestPlaceholder: "Bitte auswählen",
    interests: {
      diagnose: "Einen Prozess analysieren",
      build: "Eine Automatisierung oder einen KI-Agenten entwickeln",
      products: "Eines unserer Produkte",
      run: "Ein bestehendes System betreiben und betreuen",
      other: "Etwas anderes",
    },
    messageLabel: "Beschreiben Sie den Prozess",
    sendingLabel: "Wird gesendet…",
    sendButton: "Senden",
    sentMessage: "Gesendet — wir lesen jede Nachricht persönlich und antworten innerhalb weniger Tage.",
    errorMessage: "Beim Senden ist etwas schiefgelaufen — versuchen Sie es erneut oder schreiben Sie uns per E-Mail",
    errorCta: "direkt.",
    directLabel: "Oder schreiben Sie uns direkt",
  },
  footer: {
    companyTitle: "Unternehmen",
    writingTitle: "Beiträge",
    contactTitle: "Kontakt",
    openSourceLabel: "Open Source",
    sourceLabel: "Quellcode dieser Website",
  },
  whatsapp: {
    label: "WhatsApp",
    greeting: "Hallo TurboDevs! Ich würde gerne über ein Projekt sprechen.",
  },
  a11y: {
    skipToContent: "Zum Inhalt springen",
    newTab: "wird in neuem Tab geöffnet",
    selectLanguage: "Sprache auswählen",
  },
}
