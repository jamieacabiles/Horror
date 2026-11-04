```markdown
# Projektbeskrivelse

- Horror Drive Thru er et fiktivt Halloween-event og et studieprojekt.
- Websitet præsenterer oplevelsen, praktiske oplysninger, et galleri og en billetdemo.
- Figma er udgangspunktet for layout, tekst, farver, typografi og billeder.

# Arbejdsform

- Undersøg den eksisterende kode, før du foreslår ændringer.
- Forklar, hvad du vil ændre, hvorfor og i hvilke filer.
- Vent på brugerens godkendelse, før du ændrer noget. Det gælder også ved konkrete opgaver.
- Godkendelsen gælder kun de beskrevne ændringer.
- Oplys om fejl og relevante risici, og spørg om tilladelse før rettelser.
- Følg projektets eksisterende struktur, filnavne og kodestil.
- Lav så få ændringer som nødvendigt.
- Gæt ikke, hvis vigtig information mangler. Spørg først.
- Hvis Figma ikke kan læses, oplys det før visuelle ændringer.
- Nævn gerne andre forbedringer separat som forslag uden at udføre dem.

# Begrænsninger

- Brugeren står selv for alle commits. CODEX må ikke oprette commits.
- Push, merge og upload kræver en særskilt besked fra brugeren.
- Tilføj ikke frameworks eller biblioteker uden tilladelse.
- Installér ikke pakker.
- Brug ikke backend, database eller byggetrin.
- Ændr ikke projektstrukturen uden begrundelse og godkendelse.
- Ændr kun eksisterende tekst efter godkendelse, og bevar meningen.
- Opfind ikke datoer, priser, kontaktoplysninger eller anmeldelser.
- Billetdemoen må ikke foretage betaling, sende bookingdata eller oprette reservationer.

# Teknologier

- Brug semantisk HTML5, CSS3 og almindelig JavaScript.
- Websitet skal kunne køre statisk på webhotellet.
- Brug fælles CSS og genbrugelig JavaScript.
- Brug relative filstier, så websitet fungerer i en undermappe.

# Projektstruktur

- HTML-filer må ligge i projektets rod.
- AGENTS.md og README.md skal ligge i projektets rod.
- Billeder, CSS, JavaScript og fonte skal ligge i assets-mappen.
- Bevar denne opdeling:
  - index.html: forside.
  - billetter.html: billetdemo.
  - oplevelsen.html: oplevelsestekst og galleri.
  - praktisk-information.html: praktiske oplysninger og kontakt.
  - assets/css/style.css: fælles styling.
  - assets/js/main.js: fælles funktioner.
  - assets/images/: billeder.
  - assets/fonts/: fonte og licenser.

# Andre vigtige ting ift. projektet

- Byg mobil først, og tilpas til desktop og størrelserne imellem.
- Følg Figma frem for at opfinde et nyt design.
- Tag hensyn til protanopi: supplér vigtig information og valgte tilstande med tekst, symboler eller former.
- Brug tilstrækkelig kontrast, synlig tastaturfokus og tydelige navne på knapper og felter.
- Mobilmenuen skal have omvendt kors, teksten MENU, X-lukning, Escape og korrekt fokusretur.
- Galleriet skal kunne rulles vandret med touch og betjenes på desktop.
- Billetdemoen skal tillade én dato og ét tidspunkt ad gangen samt antal biler.
- Vis et samlet billetoverblik og en tydelig demobekræftelse.
- Bevar heroens afsløring, Thru-bevægelsen og advarselssektionens indtoning uden layoutskift.
- Navigation og billetknapper skal virke under animationerne.
- Respektér prefers-reduced-motion, og undgå blinkende effekter.
- Bevar adgang til indhold og navigation uden JavaScript.
- Genbrug projektets billeder og kildeoplysninger. Oplys, hvis originalfiler eller oplysninger om brugsrettigheder mangler.
- Brug relevante alt-tekster og tom alt-tekst på dekorative billeder.
- Lazy-load billeder længere nede på siderne.
- Brug dansk dokumentsprog, unikke sidetitler, metabeskrivelser og logisk overskriftstruktur.
- Markér arrangement, adresse, kontaktoplysninger og gæsteudsagn som fiktive.
- Brug kun strukturerede data, der svarer til synligt indhold. Opfind ikke et produktionsdomæne.

# Test og kvalitet

- Kontrollér godkendte ændringer på mobil og desktop, og sammenlign med Figma.
- Kontrollér relevante links, filstier, billeder og utilsigtet vandret sidescroll.
- Test berørte funktioner, tastaturbetjening og reduceret bevægelse.
- Kontrollér, at billetdemoen ikke sender data, heller ikke uden JavaScript.
- Rapportér fundne fejl før yderligere rettelser.
- Angiv, hvilke kontroller der er udført, og hvilke der ikke kunne udføres.
- Påstå ikke, at en test er bestået uden at have kørt den.

# Svar fra CODEX

- Skriv kort, konkret og på dansk.
- Før ændringer: forklar løsningen og begrundelsen, og bed om godkendelse.
- Efter ændringer: beskriv, hvad der blev ændret, hvorfor og i hvilke filer.
- Oplys om udførte kontroller og relevante fejl, risici eller begrænsninger.
- Vis kun relevante kodestykker, når de hjælper eller efterspørges. Git viser allerede ændringerne.
- Hold forbedringsforslag adskilt fra udførte ændringer.
```

```markdown
# Projektbeskrivelse
- Fiktivt Horror Drive Thru-event med billetdemo.
- Følg Figma for design og indhold.

# Arbejdsform
- Undersøg eksisterende kode først.
- Forklar ændringer og hvorfor. Vent på godkendelse, også ved konkrete opgaver.
- Følg eksisterende struktur og kodestil. Ændr mindst muligt.
- Spørg, hvis vigtig information mangler. Gæt ikke.
- Oplys fejl før rettelser. Andre forbedringer er kun forslag.

# Teknologier
- HTML5, CSS3 og almindelig JavaScript.
- Statisk website uden byggetrin. Brug relative filstier.

# Projektstruktur
- HTML, AGENTS.md og README.md i roden.
- CSS, JavaScript, billeder og fonte i assets/.

# Begrænsninger
- Ingen pakkeinstallation eller backend.
- Ingen nye frameworks eller biblioteker uden tilladelse.
- Bevar meningen ved godkendte tekstændringer.
- Brugeren laver selv commits. Push, merge og upload kræver særskilt besked.
- Ingen betaling, bookingdata eller rigtige reservationer.

# Andre vigtige ting
- Mobil først; tilpas til desktop.
- Protanopi: vigtig information må ikke afhænge af farve alene.
- Brug tydelig fokus, kontrast, feltnavne og relevante alt-tekster.
- Understøt tastatur og reduceret bevægelse. Undgå blink og layoutskift.
- Bevar menu, galleri, billetdemo og aftalte animationer.
- Genbrug projektets billeder. Oplys manglende kilder.
- Markér projektet som fiktivt. Opfind ikke oplysninger.
- Brug dansk, unikke sidetitler og logiske overskrifter.

# Test og kvalitet
- Kontrollér berørte sider, funktioner og links på mobil og desktop.
- Test tastatur, reduceret bevægelse og visning uden JavaScript.
- Rapportér resultater, fejl og begrænsninger ærligt.

# Svar fra CODEX
- Svar kort på dansk.
- Beskriv ændringer, filer og kontroller.
- Vis kun kode ved behov.
- Hold forbedringsforslag separat.
```

```markdown
# Projektbeskrivelse
- Statisk website til et fiktivt Horror Drive Thru-event med billetdemo.
- Figma bestemmer design og indhold.

# Arbejdsform
- Undersøg eksisterende kode først.
- Forklar foreslåede ændringer og hvorfor. Vent på godkendelse, også ved konkrete opgaver og fejlrettelser.
- Bevar struktur, kodestil og tekstens mening. Ændr mindst muligt.
- Spørg ved manglende information; gæt ikke.

# Teknologier
- HTML5, CSS3 og almindelig JavaScript.
- Brug relative filstier.

# Projektstruktur
- HTML, AGENTS.md og README.md i roden.
- CSS, JavaScript, billeder og fonte i assets/.

# Begrænsninger
- Ingen backend, pakkeinstallation eller byggetrin.
- Frameworks og biblioteker kræver tilladelse.
- Brugeren laver commits. Push, merge og upload kræver særskilt besked.
- Ingen betaling, afsendelse af bookingdata eller rigtige reservationer.

# Andre vigtige ting
- Mobil først med tilpasning til desktop.
- Understøt protanopi, tastatur og reduceret bevægelse.
- Brug tydelig kontrast, fokus, feltnavne og alt-tekster.
- Bevar aftalte funktioner og animationer uden blink eller layoutskift.
- Genbrug billeder og kildeoplysninger.
- Markér fiktive oplysninger; opfind ikke fakta.
- Brug dansk, unikke sidetitler og logiske overskrifter.

# Test og kvalitet
- Test berørte sider, funktioner og links på mobil og desktop.
- Kontrollér tastaturbetjening, reduceret bevægelse og adgang uden JavaScript.

# Svar fra CODEX
- Svar kort på dansk med ændrede filer, testresultater og relevante fejl eller risici.
- Vis kun kode ved behov.
- Angiv øvrige forbedringer separat som forslag uden at udføre dem.
```