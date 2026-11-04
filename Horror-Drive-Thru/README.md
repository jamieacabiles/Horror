# Horror Drive Thru

Statisk, dansk website til et **fiktivt studieprojekt**. HTML, CSS og almindelig JavaScript, uden backend, pakker eller byggetrin.

## Sider og filer

| Fil                         | Indhold                                                 |
| --------------------------- | ------------------------------------------------------- |
| `index.html`                | Forside, åbningsanimation, advarsel og sted             |
| `billetter.html`            | Kalender, tidspunkt, antal biler og demobekræftelse     |
| `oplevelsen.html`           | Oplevelsestekst, vandret galleri og fiktive gæsteudsagn |
| `praktisk-information.html` | Ankomst, varighed, alder, adresse og kontakt            |
| `assets/css/style.css`      | Fælles mobil-først-styling; desktop fra 1000 px         |
| `assets/js/main.js`         | Menu, fokus, galleri, indtoning og billetdemo           |
| `assets/images`            | Lokale Figma-billeder og optimerede WebP-versioner      |
| `assets/fonts`             | Lokale fonte og OFL-licenser                            |

## Lokal visning

Åbn `index.html` direkte i browseren. Alternativt start en lokal server fra projektmappen:

```sh
python3 -m http.server 8080
```

Åbn derefter `http://localhost:8080`. PHPStorms browserfunktion kan også bruges. Der skal ikke køres npm eller installeres pakker.

## Upload til webhotel

1. Upload de fire HTML-filer og hele `assets`-mappen til den ønskede mappe på webhotellet.
2. Bevar filnavne og mappestruktur. Alle runtime-stier er relative, så løsningen også virker i en undermappe.
3. `index.html` er startsiden. Ingen PHP, database, API-nøgler eller serverfunktioner kræves.
4. Upload ikke `.git`, README eller eventuelle testfiler som del af websitet.

Der er ikke foretaget push, merge eller upload. Arbejdet ligger på `feat/responsive-horror-site`.

## Funktioner og tilgængelighed

- Mobilmenuen bruger et CSS-kors og teksten MENU. JavaScript tilføjer X-lukning, Escape, fokusretur og fokusbegrænsning inde i menuen. Uden JavaScript kan den åbnes/lukkes via den indbyggede details/summary-funktion.
- Galleriet kan rulles med touch, scrollbar, piletaster og de to pileknapper.
- Dato og tidspunkt er radiofelter: kun ét valg pr. gruppe. Valg markeres med flueben, ramme og farve. Valgene gentages som tekst i overblikket.
- Antallet gælder biler. Designet har ikke et særskilt antalsfelt; det er tilføjet for at opfylde kravet. Antal skal være et helt tal mellem 1 og 99.
- Billetdemoen bruger ingen netværkskald eller lagring. Submit stoppes i JavaScript. Bekræftelsesknappen er deaktiveret uden JavaScript for at undgå formularafsendelse.
- Ingen betaling, bookingdata eller rigtig reservation. Adresse, kontaktdata og gæsteudsagn er tydeligt fiktive.
- Den oprindelige forsidetekst siger 31. november, som ikke findes. Perioden er ensrettet til **1.–31. oktober 2026** fra siden Praktisk information. Kalenderen følger oktober 2026. Kl. 24.00 forklares som midnat til næste dag.
- Heroens mørke lag påvirker kun billedet, så navigation og billetlink kan bruges under animationen. Thru har et fast område og roterer omkring et punkt ved T'et efter afsløringen. Reduced motion slår de større bevægelser fra.

## Designgrundlag og begrænsninger

Figma: https://www.figma.com/design/PW2YkPVQrDNoSWHhNZBgAZ/Horror-Drive-Thru?node-id=25-83

Prototypesiden indeholder nu både mobil- og desktopframes. Desktopforsiden har ID `244:328`; de tidligere `104:*`-ID'er findes ikke længere. Der er fire færdige sider; mørke/lyse forsider er animationstilstande, ikke ekstra HTML-sider.

Der er hentet præcis designinformation og referencebilleder for bl.a. mobilens praktiske information, desktophero, navigation, advarselssektion, mobilens galleri, oplevelsestekst og begge kalenderstørrelser. Prototypehandlinger blev også læst; fejlpegende billetlinks er rettet i HTML.

**Designkontrollen er ikke fuldført:** Flere komplette frames og sektioner gav interne fejl/timeouts. Især baggrundsbeskæringer på øvrige desktopundersider og de sidste kortdetaljer skal sammenlignes visuelt i Figma. Implementeringen kan derfor ikke betegnes som et færdigt, pixelkontrolleret designmatch.

## Billeder og fonte

Billederne er hentet fra dette Figma-projekt, uden erstatningsbilleder. Oplyst oprindelse: Unsplash. Prototypesiden gav ingen fotografnavne, oprindelige billed-URL'er eller licensdokumentation. Disse oplysninger skal findes i gruppens originale kildeliste før offentlig brug. En eksport fra Figma dokumenterer ikke i sig selv brugsrettigheder.

| Lokal fil         | Figma-aktiv | Brug                                           |
| ----------------- | ----------- | ---------------------------------------------- |
| forest-headlights | bdafd.png   | Hero, baggrunde og første galleribillede       |
| gallery-mask      | 89318.png   | Andet galleribillede                           |
| gallery-forest    | 1f1f5.png   | Tredje galleribillede: maskeret person ved bil |
| gallery-scene     | 14746.png   | Fjerde galleribillede: skikkelse i skov        |
| gallery-figure    | dedfd.png   | Femte galleribillede: silhuet bag rude         |
| gallery-road      | 88c5f.png   | Sjette galleribillede: dugget bilrude          |

WebP er de anvendte optimerede filer; PNG-eksporterne er bevaret som kildefiler. Billeder længere nede lazy-loades.

Metal Mania og Changa kommer fra Google Fonts' officielle repository:

- https://github.com/google/fonts/tree/main/ofl/metalmania
- https://github.com/google/fonts/tree/main/ofl/changa

OFL-licenserne er vedlagt. Ingen eksterne fontforespørgsler ved visning.

## SEO

Alle sider har `lang="da"`, unik titel/metabeskrivelse, én H1 og semantiske sektioner. Der er ingen Event- eller anmeldelsesdata, da projektet er fiktivt. Der er ikke opfundet canonical-URL'er eller produktionsdomæne. `robots.txt.example` er en skabelon; sitemap/canonical tilføjes først, når den endelige adresse og undermappe kendes. En robots-fil gælder kun fra domænets rod og bør ikke overskrive webhotellets eksisterende opsætning.

## Kontroller

Udført:

- JavaScript-syntaks: `node --check assets/js/main.js`.
- Statisk kontrol af alle fire HTML-siders links, fragment-ID'er, lokale aktiver, alt-attributter og én H1 pr. side: ingen fejl fundet.
- DOM-funktionstest i jsdom: ét dato-/tidsvalg, opdateret overblik, stoppet formularafsendelse, demobekræftelse med fokus, ugyldigt antal, Escape/fokusretur og deaktiveret submit uden JavaScript bestod. Dette erstatter ikke en rigtig browsertest.
- Billederne er hentet lokalt og konverteret til WebP med bevaret billedformat.

**Ikke udført:** browserbaseret layout- og funktionstest. Miljøet manglede en browser, browserdownload returnerede ugyldige arkiver, og den tilsluttede browser svarede ikke. Følgende skal derfor stadig afprøves i en rigtig browser:

1. Alle sider ved 360, 402, 768, 1000 og 1280 px: ingen vandret sidescroll, tekstoverlap eller forkerte billedbeskæringer.
2. MENU → Tab/Shift+Tab → Escape; fokus skal returnere til MENU.
3. Alle header-, footer- og billetlinks.
4. Galleri med touch, pileknapper og tastatur.
5. Skift mellem to datoer/tider, vælg antal biler, og bekræft. Kun ét valg pr. gruppe og korrekt tekstoverblik.
6. Prøv tomme/ugyldige felter og antal 0, 1, 2, 99 og 100.
7. Slå JavaScript fra: indhold og navigation skal stadig virke; ingen formular må blive sendt.
8. Slå reduceret bevægelse til: ingen hero-/dingleanimation eller skjult advarsel.
9. Sammenlign med mobil- og desktopframes i Figma, og kontrollér kontrast oven på billederne.
