# Bemästra språket

En gemensam webbplats med två spel:

- **Så säger man ju inte!** – 35 verbövningar. Barnet läser en tokig form och skriver den rätta. Alla 34 former i den ursprungliga listan ingår, plus hinnde → hann.
- **Vokalverkstan** – 25 ordpar och 50 övningar om korta och långa vokaler.

Startsidan låter barnet välja spel. Båda spelen har samma färger, IBM Plex Sans, stora bokstäver, animationer och en länk tillbaka till spelvalet. Knappen ”Visa ledtråden igen” är borttagen.

## Publicera från ditt befintliga repository

1. Öppna ditt lokala repository i Visual Studio Code. Om det bara finns på GitHub eller motsvarande: välj **Git: Clone** i kommandopaletten och öppna den klonade mappen.
2. Kopiera leveransmappens **innehåll till repositoryts rot**. `netlify.toml` ska alltså ligga direkt i roten, med `public/` bredvid. Om du har den tidigare Vokalverkstan-exporten uppdaterar du `public/index.html` och lägger till de nya undermapparna.
3. Behåll repositoryts `.git`-mapp. Slå ihop eventuell befintlig `.gitignore`, README eller Netlify-konfiguration med det du vill använda här.
4. I **Source Control**, kontrollera och stagea webbplatsens ändringar. Gör en **Commit**, exempelvis `Lägg till spelval och oregelbundna verb`, och **Push** till den branch som Netlify ska publicera.
5. Om repositoryt inte redan är kopplat: välj **Add new project → Import an existing project** i Netlify och välj din Git-leverantör och ditt repository.
6. Kontrollera följande och starta publiceringen:

| Netlify-inställning | Värde |
| --- | --- |
| Base directory | Tomt, dvs. repositoryts rot |
| Package directory | Tomt |
| Build command | Tomt |
| Publish directory | `public` |

`netlify.toml` innehåller redan publiceringsmappen och ett tomt byggkommando. Är repositoryt redan anslutet räcker en push till den valda produktionsbranchen när inställningarna stämmer. Ingen installation eller byggprocess behövs.

## Filer

```text
netlify.toml
.gitignore
README.md
public/
  index.html                    # Gemensam startsida
  assets/
    site.css                    # Gemensam design och animationer
    verbs.js                    # Verbövningar och svarskontroll
    results.js                  # Poängräkning och gemensam resultatruta
  sasagermanjuinte/
    index.html                  # Skriv rätt verbform
  vokalverkstan/
    index.html                  # Välj mellan vokalord
```

Öppna `public/index.html` i en vanlig webbläsare för lokal förhandsvisning. Navigeringen använder relativa länkar och fungerar även lokalt. IBM Plex Sans hämtas från Google Fonts; utan internet visas ett reservtypsnitt. Emojiillustrationerna kan se olika ut på olika enheter.

## Uppdatera innehållet

Arbeta i filerna under `public/` i ditt repository. Verbövningarna finns i listan `exercises` överst i `assets/verbs.js`. Varje post anger exempelmening, ursprungsform, facit och animation. Vid ändrat antal övningar uppdateras räknaren automatiskt; uppdatera även de fasta antalen i startsidan och verbsidans etiketter/beskrivning.

Vokalverkstans ordpar och logik finns i `vokalverkstan/index.html`. Gemensam design ändras i `assets/site.css`. Gör commit och push för att publicera uppdateringar.

## Resultat efter varje spel

När alla unika övningar är avklarade visas **Visa resultat**. Resultatrutan anger hur många rätt barnet fick på första försöket: av 50 i Vokalverkstan och av 35 i Så säger man ju inte!. Barnet får fortsätta försöka tills ordet är rätt. Tomma textsvar räknas inte som försök. Upprepade svar ger inte extra poäng och ordvalsväljaren nollställer inte tidigare försök. Nästa ord går till nästa oavklarade övning, även om man har hoppat direkt till slutet.

**Spela igen** nollställer omgången. Resultaten finns bara i den pågående sidan; omladdning eller navigation bort från spelet startar om. Inga resultat skickas till en server.

De fem nya k/ck-paren är baka/backa, haka/hacka, läka/läcka, vika/vicka och vek/veck. Tak/tack finns kvar sedan tidigare.

## Pedagogik och språk

Verbövningen tränar vanligt skriftspråk och använder meningar som skiljer mellan exempelvis ”jag bar” och ”jag har burit”. Barnet kan försöka flera gånger. Efter två felaktiga försök visas första bokstaven och ordets längd; efter tre visas facit som barnet får skriva. Stora bokstäver, omgivande blanksteg och avslutande punkt accepteras. Å, ä och ö räknas som egna bokstäver.

Talspråk och dialekter kan ha andra böjningar. Därför förklaras för vuxna att övningen gäller skriftspråk. Fryste behandlas i meningen ”Jag frös när jag glömde jackan”: fryste kan vara korrekt vid infrysning av mat, vilket förklaras i informationen till den vuxne. I dyka-övningen används skriftspråkets dök.

Källor för dessa språkval:

- [Svenska Akademiens grammatik, volym 2, verb §64: frysa](https://svenska.se/SAG_Volym_2.pdf)
- [Språkrådets frågelåda: dök eller dykte](https://frageladan.isof.se/faqs/26589)
- [SAOL: dölja, dolde, dolt](https://svenska.se/saol/?sok=d%C3%B6lja)

## Netlify-dokumentation

- [Publicera från ett Git-repository](https://docs.netlify.com/start/quickstarts/deploy-from-repository/)
- [Filbaserade inställningar](https://docs.netlify.com/build/configure-builds/file-based-configuration/)
