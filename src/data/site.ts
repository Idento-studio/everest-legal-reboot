export type Service = {
  slug: string;
  title: string;
  tagline: string;
  intro: string;
  bullets: string[];
  cases: { title: string; text: string }[];
};

export const services: Service[] = [
  {
    slug: "aansprakelijkheidsrecht",
    title: "Aansprakelijkheidsrecht",
    tagline: "Schade, verzekering en verhaal",
    intro:
      "Wanneer schade ontstaat, is de vraag zelden alleen wie fout was, maar vooral wie draagt wat. Wij begeleiden ondernemingen, bestuurders en verzekeraars doorheen buitencontractuele en contractuele aansprakelijkheid, van eerste ingebrekestelling tot procedure.",
    bullets: [
      "Contractuele en buitencontractuele aansprakelijkheid",
      "Bestuurdersaansprakelijkheid",
      "Productaansprakelijkheid en recall",
      "Verzekeringsdekking en regres",
      "Expertises en schadebegroting",
    ],
    cases: [
      { title: "Bouwschade", text: "Verdediging van een aannemer in een tienjarige aansprakelijkheidsclaim na gevelschade." },
      { title: "Bestuurders", text: "Advies aan een raad van bestuur over risico's bij een naderende insolventie." },
    ],
  },
  {
    slug: "fraude-en-ondernemingsstrafrecht",
    title: "(Anti-)fraude en ondernemingsstrafrecht",
    tagline: "Compliance, onderzoek en verdediging",
    intro:
      "Een strafonderzoek raakt een onderneming in haar kern: reputatie, continuïteit en mensen. Wij staan vennootschappen en leidinggevenden bij tijdens interne onderzoeken, huiszoekingen en strafprocedures, en bouwen preventief aan een sluitend compliancebeleid.",
    bullets: [
      "Interne onderzoeken en forensische trajecten",
      "Bijstand bij huiszoeking en verhoor",
      "Witwas, corruptie en sociale fraude",
      "Verbeurdverklaring en minnelijke schikking",
      "Compliance- en integriteitsbeleid",
    ],
    cases: [
      { title: "Intern onderzoek", text: "Onderzoek naar aankoopfraude bij een industriële groep, met herstel van de interne controles." },
      { title: "Strafprocedure", text: "Verdediging van een zaakvoerder in een dossier rond vermeende factuurcarrousels." },
    ],
  },
  {
    slug: "arbitrage-en-bemiddeling",
    title: "Arbitrage en bemiddeling",
    tagline: "Geschillen beslechten buiten de rechtbank",
    intro:
      "Niet elk geschil hoort thuis voor een rechtbank. Arbitrage en bemiddeling bieden snelheid, vertrouwelijkheid en internationale afdwingbaarheid. Wij treden op als raadsman, arbiter en erkend bemiddelaar.",
    bullets: [
      "Nationale en internationale arbitrage (CEPANI, ICC)",
      "Erkende bemiddeling in burgerlijke en handelszaken",
      "Redactie van arbitrage- en escalatieclausules",
      "Erkenning en tenuitvoerlegging van uitspraken",
      "Collaboratieve onderhandeling",
    ],
    cases: [
      { title: "CEPANI", text: "Vertegenwoordiging van een leverancier in een arbitrage over een langlopend distributiecontract." },
      { title: "Bemiddeling", text: "Bemiddeling tussen aandeelhouders die tot een volledige uitkoopregeling leidde." },
    ],
  },
  {
    slug: "bank-en-financieel-recht",
    title: "Bank- en financieel recht",
    tagline: "Financiering, zekerheden en toezicht",
    intro:
      "Van kredietdocumentatie tot toezichtsvragen: wij adviseren kredietnemers, kredietverstrekkers en investeerders over financieringsstructuren en de regels die er rond gebouwd zijn.",
    bullets: [
      "Krediet- en financieringsdocumentatie",
      "Zekerheden en waarborgen",
      "Betalingsdiensten en fintech",
      "Bancaire aansprakelijkheid en geschillen",
      "Toezichtsrecht en FSMA/NBB-dossiers",
    ],
    cases: [
      { title: "Herfinanciering", text: "Begeleiding van een familiale groep bij een herfinanciering met bankenconsortium." },
      { title: "Geschil", text: "Betwisting van een kredietopzegging en de daaruit volgende schade." },
    ],
  },
  {
    slug: "fiscaal-recht",
    title: "Fiscaal recht",
    tagline: "Structuur, controle en betwisting",
    intro:
      "Fiscaliteit is zelden een losstaand gegeven. Wij denken mee over de fiscale gevolgen van uw structuur en transacties, en verdedigen uw standpunt bij controle, bezwaar en voor de rechtbank.",
    bullets: [
      "Vennootschapsbelasting en herstructureringen",
      "BTW en indirecte belastingen",
      "Fiscale controles en bezwaarprocedures",
      "Fiscale procedure voor hof en rechtbank",
      "Lokale belastingen en rulings",
    ],
    cases: [
      { title: "Controle", text: "Begeleiding van een KMO doorheen een diepgaande controle over transfer pricing." },
      { title: "Procedure", text: "Vernietiging van een aanslag wegens schending van de motiveringsplicht." },
    ],
  },
  {
    slug: "insolventierecht",
    title: "Insolventierecht",
    tagline: "Continuïteit, reorganisatie en herstel",
    intro:
      "Wanneer het spannend wordt, telt elke week. Wij begeleiden ondernemingen in moeilijkheden, hun bestuurders en hun schuldeisers bij reorganisatie, overdracht en faillissement, met oog voor wat nog te redden valt.",
    bullets: [
      "Gerechtelijke reorganisatie (WCO/boek XX)",
      "Overdracht onder gerechtelijk gezag",
      "Faillissement en vereffening",
      "Positie en aansprakelijkheid van bestuurders",
      "Schuldeisersbelangen en aangiften van schuldvordering",
    ],
    cases: [
      { title: "Reorganisatie", text: "Homologatie van een reorganisatieplan met behoud van zeventig arbeidsplaatsen." },
      { title: "Overname", text: "Begeleiding van een overnemer bij de verwerving van activa uit een faillissement." },
    ],
  },
  {
    slug: "publiek-en-administratief-recht",
    title: "Publiek en administratief recht",
    tagline: "Overheidsopdrachten en bestuurshandelingen",
    intro:
      "Wie met de overheid werkt, werkt binnen strakke procedures. Wij staan zowel aanbesteders als inschrijvers bij, en voeren procedures voor de Raad van State en de burgerlijke rechtbanken.",
    bullets: [
      "Overheidsopdrachten: plaatsing en uitvoering",
      "Schorsings- en vernietigingsberoepen bij de Raad van State",
      "Vergunningen en handhaving",
      "Subsidies en staatssteun",
      "Openbaarheid van bestuur",
    ],
    cases: [
      { title: "Gunning", text: "Schorsing bij uiterst dringende noodzakelijkheid van een onregelmatige gunningsbeslissing." },
      { title: "Uitvoering", text: "Begeleiding van een aanbesteder bij een complexe raamovereenkomst voor diensten." },
    ],
  },
  {
    slug: "gezondheidsrecht",
    title: "Gezondheidsrecht",
    tagline: "Zorginstellingen, beoefenaars en patiënten",
    intro:
      "De zorgsector beweegt tussen deontologie, regelgeving en aansprakelijkheid. Wij adviseren ziekenhuizen, zorgverleners en toeleveranciers over hun rechtspositie en staan hen bij in tuchtprocedures en aansprakelijkheidsdossiers.",
    bullets: [
      "Medische aansprakelijkheid en Fonds Medische Ongevallen",
      "Patiëntenrechten en gegevensbescherming",
      "Ziekenhuisgovernance en samenwerkingsovereenkomsten",
      "Tucht- en deontologische procedures",
      "Regelgeving voor geneesmiddelen en hulpmiddelen",
    ],
    cases: [
      { title: "Aansprakelijkheid", text: "Verdediging van een ziekenhuis in een dossier over postoperatieve complicaties." },
      { title: "Governance", text: "Herwerking van de samenwerkingsovereenkomsten tussen artsen en instelling." },
    ],
  },
  {
    slug: "ip-ict-en-privacy",
    title: "Intellectuele eigendom, ICT en privacy",
    tagline: "Creatie, data en technologie",
    intro:
      "Uw merk, uw software en uw data zijn vaak uw meest waardevolle activa. Wij beschermen ze contractueel en procedureel, en zorgen dat uw verwerking van persoonsgegevens standhoudt.",
    bullets: [
      "Merken, tekeningen en modellen",
      "Auteursrecht en softwarelicenties",
      "IT- en SaaS-contracten, cloud en AI",
      "GDPR: registers, DPA's en datalekken",
      "Namaak, domeinnamen en online handhaving",
    ],
    cases: [
      { title: "Merkinbreuk", text: "Stakingsvordering tegen een concurrent met een verwarrend gelijkend teken." },
      { title: "AI-beleid", text: "Opstellen van een AI- en dataverwerkingsbeleid voor een technologiebedrijf." },
    ],
  },
  {
    slug: "ondernemingsrecht-en-contracten",
    title: "Ondernemingsrecht en contracten",
    tagline: "De juridische ruggengraat van uw activiteit",
    intro:
      "Goede contracten voorkomen de meeste geschillen. Wij stellen uw commerciële documentatie op, onderhandelen mee aan tafel en voeren procedure wanneer het toch misloopt.",
    bullets: [
      "Algemene voorwaarden en raamcontracten",
      "Distributie, agentuur en franchise",
      "B2B-wetgeving en onrechtmatige bedingen",
      "Handelsgeschillen en invordering",
      "Internationale koop en incoterms",
    ],
    cases: [
      { title: "Distributie", text: "Beëindiging van een internationaal distributienetwerk met beperking van opzegvergoedingen." },
      { title: "Voorwaarden", text: "Volledige herwerking van de contractdocumentatie van een productiebedrijf." },
    ],
  },
  {
    slug: "sociaal-recht",
    title: "Sociaal recht",
    tagline: "Mensen, arbeid en sociale zekerheid",
    intro:
      "Van aanwerving tot afscheid, en van collectief overleg tot inspectiebezoek: wij begeleiden werkgevers bij alle facetten van de arbeidsrelatie, pragmatisch en met oog voor het sociale klimaat.",
    bullets: [
      "Individuele en collectieve ontslagen",
      "Arbeidsreglementen en beleid",
      "Sociale inspectie en schijnzelfstandigheid",
      "Herstructurering en overgang van onderneming",
      "Concurrentiebedingen en bedrijfsgeheimen",
    ],
    cases: [
      { title: "Herstructurering", text: "Begeleiding van een Wet Renault-procedure bij een productiesite." },
      { title: "Inspectie", text: "Verdediging bij een dossier rond de kwalificatie van zelfstandige medewerkers." },
    ],
  },
  {
    slug: "sportrecht",
    title: "Sportrecht",
    tagline: "Clubs, atleten en federaties",
    intro:
      "Sport heeft een eigen rechtsorde, met eigen instanties en tempo. Wij staan clubs, spelers, makelaars en federaties bij in contracten, transfers en tuchtprocedures.",
    bullets: [
      "Speler- en trainerscontracten",
      "Transfers en makelaarsovereenkomsten",
      "Tuchtprocedures en BAS/CAS",
      "Licenties en federatiereglementen",
      "Sponsoring en beeldrechten",
    ],
    cases: [
      { title: "Transfer", text: "Begeleiding van een club bij een internationale transfer met opleidingsvergoedingen." },
      { title: "Tucht", text: "Verdediging van een atleet voor een nationale tuchtinstantie." },
    ],
  },
  {
    slug: "vastgoed-bouw-en-energierecht",
    title: "Vastgoed-, bouw- en energierecht",
    tagline: "Van grond tot oplevering en verder",
    intro:
      "Bouwen en ontwikkelen betekent risico's spreiden over vele partijen. Wij begeleiden bouwheren, ontwikkelaars, aannemers en energiespelers doorheen het volledige traject.",
    bullets: [
      "Aannemings- en ontwikkelingsovereenkomsten",
      "Omgevingsvergunningen en handhaving",
      "Bouwgeschillen en gerechtelijke expertises",
      "Huur, erfpacht en opstal",
      "Energieprojecten en PPA's",
    ],
    cases: [
      { title: "Ontwikkeling", text: "Structurering van een gemengd woonproject met publiek-private samenwerking." },
      { title: "Expertise", text: "Bijstand in een gerechtelijke expertise over gebreken aan een technische installatie." },
    ],
  },
  {
    slug: "vennootschapsrecht",
    title: "Vennootschapsrecht",
    tagline: "Structuur, governance en transacties",
    intro:
      "Uw vennootschapsstructuur bepaalt hoe u groeit, samenwerkt en ooit overdraagt. Wij begeleiden oprichters, aandeelhouders en bestuurders bij structurering, transacties en conflicten.",
    bullets: [
      "Overnames en due diligence",
      "Aandeelhoudersovereenkomsten",
      "Herstructureringen, fusies en splitsingen",
      "Corporate governance en bestuurdersstatuut",
      "Aandeelhoudersgeschillen en uitkoop",
    ],
    cases: [
      { title: "Overname", text: "Begeleiding van een management buy-out met gefaseerde earn-out." },
      { title: "Conflict", text: "Uitkoopvordering die een blokkering tussen twee aandeelhouders doorbrak." },
    ],
  },
];

export const offices = [
  {
    city: "Brussel",
    lines: ["Louizalaan 283/19", "1050 Brussel"],
    phone: "+32 (0)2 640 44 00",
    email: "info@everest-law.eu",
    kbo: "0888.433.391",
  },
  {
    city: "Antwerpen",
    lines: ["Bosmanslei 29", "2018 Antwerpen"],
    phone: "+32 (0)3 376 02 00",
    email: "info@everest-law.com",
    kbo: "0887.444.288",
  },
  {
    city: "Gent",
    lines: ["Bollebergen 2A bus 20", "9052 Gent"],
    phone: "+32 (0)9 334 94 70",
    email: "info@everest-law.be",
    kbo: "0843.239.014",
  },
  {
    city: "Hasselt",
    lines: ["Kempische Steenweg 303/200", "3500 Hasselt"],
    phone: "+32 (0)11 76 44 02",
    email: "info@everest-law.be",
    kbo: "2.384.015.520",
  },
];

export type Post = {
  slug: string;
  title: string;
  date: string;
  displayDate: string;
  category: string;
  excerpt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "nulprijzen-vereiste-opties-overheidsopdrachten",
    title: "Nulprijzen voor vereiste opties in overheidsopdrachten: spelen met vuur?",
    date: "2026-01-14",
    displayDate: "14 januari 2026",
    category: "Publiek recht",
    excerpt:
      "De Raad van State werpt een interessant licht op de vraag of het opnemen van nulprijzen voor vereiste opties een offerte substantieel onregelmatig maakt.",
    body: [
      "In een arrest van 28 juli 2025 (nr. 263.984), gewezen in het kader van een vordering tot schorsing bij uiterst dringende noodzakelijkheid, boog de Raad van State zich over de prijsopgave van vereiste opties in een opdracht voor diensten.",
      "De inschrijver had voor elk van de vereiste opties een prijs van nul euro opgegeven. De aanbesteder aanvaardde die offerte. Een concurrent vorderde de schorsing en argumenteerde dat een nulprijs geen prijs is, en dat de offerte dus substantieel onregelmatig moest worden verklaard.",
      "De Raad van State nuanceert. Een nulprijs is niet per definitie onwettig, maar hij verplicht de aanbesteder wel tot een zorgvuldige prijsbevraging. Wie zonder onderzoek aanvaardt, riskeert een vernietiging wegens gebrekkige motivering.",
      "Voor aanbesteders betekent dit: leg in het bestek uitdrukkelijk vast hoe met nulprijzen wordt omgegaan, en documenteer elke prijsbevraging. Voor inschrijvers: onderbouw een nulprijs vooraf, zodat de vraag van de aanbesteder u niet verrast.",
    ],
  },
  {
    slug: "eu-singapore-convention-mediation",
    title: "EU-positie tegenover het Verdrag van Singapore inzake bemiddeling",
    date: "2025-12-02",
    displayDate: "2 december 2025",
    category: "Arbitrage en bemiddeling",
    excerpt:
      "De European Dispute Resolution Society organiseerde een online evenement over de positie van de Europese Unie tegenover het Verdrag van Singapore inzake bemiddeling.",
    body: [
      "Het Verdrag van Singapore maakt internationale bemiddelingsakkoorden rechtstreeks afdwingbaar in de verdragsluitende staten, vergelijkbaar met wat het Verdrag van New York voor arbitrale uitspraken doet.",
      "De Europese Unie heeft het verdrag nog niet ondertekend. De discussie draait rond de bevoegdheidsverdeling tussen de Unie en de lidstaten, en rond de verhouding tot de bestaande bemiddelingsrichtlijn.",
      "Voor ondernemingen met grensoverschrijdende contracten blijft de praktische conclusie ongewijzigd: besteed aandacht aan de escalatieclausule en leg vast waar en hoe een bemiddelingsakkoord afdwingbaar wordt gemaakt.",
    ],
  },
  {
    slug: "toegankelijkheid-overheidsopdrachten-eaa",
    title: "Toegankelijkheid in overheidsopdrachten: bent u klaar voor de Accessibility Act?",
    date: "2025-06-17",
    displayDate: "17 juni 2025",
    category: "Publiek recht",
    excerpt:
      "De Europese Accessibility Act brengt concrete veranderingen mee voor de manier waarop aanbesteders hun opdrachten in de markt zetten.",
    body: [
      "Richtlijn (EU) 2019/882 betreffende de toegankelijkheid van producten en diensten markeert een belangrijke stap richting een meer inclusieve samenleving. Sinds 28 juni 2025 gelden de verplichtingen ten volle.",
      "Voor aanbesteders betekent dit dat toegankelijkheidsvereisten in de technische specificaties moeten worden opgenomen wanneer de opdracht producten of diensten binnen het toepassingsgebied betreft.",
      "Wie dat nalaat, riskeert niet enkel handhaving, maar ook betwisting door inschrijvers die wél toegankelijk aanbieden en zich benadeeld voelen door een bestek dat er geen rekening mee houdt.",
    ],
  },
  {
    slug: "bestuurdersaansprakelijkheid-bij-naderende-insolventie",
    title: "Bestuurdersaansprakelijkheid bij naderende insolventie: het kantelpunt",
    date: "2025-04-08",
    displayDate: "8 april 2025",
    category: "Insolventierecht",
    excerpt:
      "Vanaf welk moment verschuift de zorgplicht van het bestuur van de aandeelhouders naar de schuldeisers? Een praktische leidraad.",
    body: [
      "Boek XX van het Wetboek van economisch recht bevat een reeks aansprakelijkheidsgronden die pas in beeld komen wanneer een onderneming in moeilijkheden verkeert, met wrongful trading als bekendste voorbeeld.",
      "Het kantelpunt is zelden een datum in een agenda. Het is het moment waarop een normaal voorzichtig bestuurder moest weten dat er geen redelijk vooruitzicht meer was om de onderneming te redden.",
      "Praktisch: documenteer uw besluitvorming, laat cijfers tijdig actualiseren en overweeg een gerechtelijke reorganisatie eerder vroeger dan later. Notulen zijn in dit soort dossiers het belangrijkste bewijsmiddel.",
    ],
  },
  {
    slug: "ai-act-wat-verandert-er-voor-uw-onderneming",
    title: "De AI-verordening: wat verandert er concreet voor uw onderneming?",
    date: "2025-02-19",
    displayDate: "19 februari 2025",
    category: "IP, ICT en privacy",
    excerpt:
      "Niet elk gebruik van AI is hoogrisico. Een overzicht van de verplichtingen die er wél toe doen voor de doorsnee onderneming.",
    body: [
      "De AI-verordening deelt systemen in naar risico. De meeste ondernemingen gebruiken AI-toepassingen die in de categorie beperkt risico vallen, met vooral transparantieverplichtingen tot gevolg.",
      "Belangrijker dan de classificatie is vaak het contract met uw leverancier: wie is aanbieder, wie is gebruiksverantwoordelijke, en wie draagt het risico bij een verkeerde output?",
      "Combineer uw AI-beleid met uw GDPR-documentatie. In de praktijk botsen beide kaders vooral op het punt van de rechtsgrond en de bewaartermijn van prompts en outputs.",
    ],
  },
];

export const vacancies = [
  {
    title: "Advocaat-medewerker ondernemingsrecht",
    office: "Antwerpen",
    type: "Voltijds",
    experience: "0 tot 4 jaar balie",
    description:
      "U werkt mee aan een gevarieerde portefeuille van contracten, overnames en handelsgeschillen, met snel eigen dossierverantwoordelijkheid.",
  },
  {
    title: "Advocaat-medewerker publiek recht en overheidsopdrachten",
    office: "Brussel",
    type: "Voltijds",
    experience: "2 tot 6 jaar balie",
    description:
      "U begeleidt aanbesteders en inschrijvers en voert procedures voor de Raad van State. Interesse in bouw- en omgevingsrecht is een plus.",
  },
  {
    title: "Advocaat-medewerker sociaal recht",
    office: "Gent",
    type: "Voltijds of 4/5",
    experience: "0 tot 3 jaar balie",
    description:
      "U adviseert werkgevers over ontslag, herstructurering en sociale inspectie, en pleit regelmatig voor de arbeidsrechtbank.",
  },
  {
    title: "Paralegal / juridisch assistent",
    office: "Hasselt",
    type: "Voltijds",
    experience: "Bachelor rechtspraktijk",
    description:
      "U ondersteunt het team bij dossieropvolging, termijnbewaking en communicatie met cliënten en griffies.",
  },
  {
    title: "Stage voor stagiairs-advocaten",
    office: "Alle vestigingen",
    type: "Stagejaren 1 tot 3",
    experience: "Master in de rechten",
    description:
      "Een volwaardig stagetraject met begeleiding door een vaste stagemeester, eigen dossiers en interne opleidingen.",
  },
];
