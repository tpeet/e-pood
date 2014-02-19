# Elion e-pood
Kompileeritud failid asuvad Build kataloogis, juurkataloogis on tööfailid. Struktuur pärineb töövahendist - [Hammer](http://hammerformac.com).
Templiitimise abivahendiks on [Handlebars](http://handlebarsjs.com/), mis arenduse käigus asendatakse. Projekt on segu [Bootstrap-Sassist](https://github.com/twbs/bootstrap-sass/tree/master/vendor/assets/stylesheets/bootstrap) ja [rootslaste komponentidest](http://responsivecode.teliasonera.com/). 

Rootslastelt on välja lülitatud:
  - _tsr-grid.scss
  - _tsr-variables.scss (värvid liidetud `_bs-ee-variables.scss` algusse)
  - _tsr-normalize.scss
  - _tsr-typography.scss

Bootstrapist on lisatud:
  - _normalize.scss  
  - _scaffolding.scss (maha võetud body font size)
  - _grid.scss  
  - _print.scss  
  - _type.scss  
  - _responsive-utilities.scss
  - _tooltip.scss
  - _popover.scss
  - _tabs.scss
  - _buttons.scss

Bootsrapist on muudetud ja lisatud:
  - _bs-ee-variables.scss (alustatud elioni stiili lisamisega)
  - _bs-ee-mixins.scss (gridi korrastamiseks muudetud)
  - _bs-ee-breadcrumbs.scss (puuduv komponent TSR-l)
  - _bs-ee-navs.scss (tabs ja nav pills)

## Sisu

### Valmis on:
- Üldine 
  - fontide suurused kohandatud telefon-tahvel-desktop (väike tahvel ja telefon suurendatud fondiga). Üle kirjutatud rootslaste hard-coded tekstisuurused, tuleb teha jätkuvalt edasi kui komponente lisandub sealt. Süntaks: em(15) annab 15px emides.
  - BS3 gridi sisse viidud muutused, et see vastaks rootslaste layoudile (muudetud sm konteineri padding, gutter).
- Avaleht 
  - Avaslaider (muuta veel et taustapilt poleks css-s)
  - Tooteklotsidega avamenüü
  - Tooteslaider
  - Sisselogitud kasutaja - vaatamiseks vajuta "sisene" nuppu (NB! tooteslaideris on kehv ribboneid kasutada)
- 2nd level
  - Vertikaalne akordionmenüü 2 tasandit, hidden on small
  - Leivapuru (BS põhjal)
  - Tooteklotside vaade - sinna saad kui vajutad avalehel p]hilinki, nt Arvutid ja lisad (puudu filter, ikoone)
  - Toote detailvaade
  - Toote listvaade (custom, TSR põhjal)

### Töös on:
- 3rd level, detailvaade responsiveks
- 3rd level, arvamuste osa

### Vaja teha veel esimese etapi raames: 
- Päis Viljarilt järgmine nädal
- Multiply efekt toodetele Aarelt
- H1 kuni H6 suurused Ahtolt, välja vahetada 
- 2nd level lehe ülemine ots korrastada, lisa võrdlus ja ikoonid 
- Html-css refaktoreering
- Responsive images serveerimine javascript
- Require js lisada javascripti optimeeritud serveerimiseks, dns
- Proovida kasutada Code Blocksi et serveerida mobiilidele ainult mobiili-cssi
- Avaslaider kasutab css-background image, tõsta htmli 
- Üle vaadata ja parandada, mis katki on läinud
- Brauseritestid
- Taas üle vaadata ja parandada, mis bugid on leitud
- Backend kood külge panna
- Üle vaadtata ja parandada, mis katki on läinud

### Andmesisestuses muutub kindlasti
- Avaslaideri sisestus (lisandub tekstiväli või mitu)
- Lindi ja rombi sisestus
- Uus layout ei tolereeri valesti lõigatud pilte. Pildi suurus peab olema ruut.
- Pildi nimedes ei tohi olla tühikuid, süntaks product-name-number-direction-color.jpg 

### Sisulised küsimused
- Mis on rombide loogika/mis tekst sinna võib minna?
- Mis on lintide loogika, mis tekst sinna võib minna?
- Misasi läheb avalehe alumisse slaiderisse täpselt?
- Kuidas asendatakse mitte-desktop vaates 2nd level külgmenüü?
- Kas jäävad leheküljenumbrid või lae lisa allääres? Ühele meeldib üks, teisele teine.


### Puudu on
- Filtrid
- Värvide esitlus komponent, otsus, kuidas esitada kirjusid värve

### Uued üldkasutatavad komponendid lisaks rootslastele (kohandatud BS või custom)
- Leivapuru
- Vertikaalne akordionmenüü
- Ümmargune badge ikooni või tekstiga
- Ribbon (lisatud ribbon mobiilile)
- Tootevärvid klikatavana (vajab veel tööd)
- Elioni logo skaleeruva svg-na, fallback png
- klass product mis teeb columnidega containerist TSR stiilile vastava paddinguteta layoudi

### Juhtnöörid koodi oma projektis kasutamiseks:
  - All on BS3, siis rootsi scss, siis eesti kohendused.
  - Iga komponent on eraldi html-jupike, millele käib kaasa eraldi scss ja js (nagu rootslastel)
  - Juurkataloogis on põhilehed, mis includevad jupikesi
  - html-jupikesed asuvad `_includes/..`
  - Vastav scss asub `assets/css/_tsr-ee-elion/..`
  - Vastav js asub `assets/js/_tsr-ee-js/..`
  htmlis on sees Handlebarsi templated. Pure htmli saamiseks tuleb loogeliste sulgude sees asuv kola asendada teksti või labeliga. Inspiratsiooni saab `assets/js/handlebars/*.hbs` failidest (json). Lisaks tuleb script-tagi sees olev jupp tõsta eelneva tühja divi sisse, mille id-s sisaldub sõna `-placeholder-`.


### Abivahendid, suurelt jaolt eksperimentaalsed:
- uued ikoonid, mida Ahto juurde teeb lisaks rootslaste omale ka [Fontasticus](http://fontastic.me/). Ligipääsud annab Ahto - see on siiski avalik repo.
- [grunt](http://gruntjs.com/)
	- [grunt responsive-images](https://github.com/andismith/grunt-responsive-images)
	- meediapäringute sortimiseks [grunt-combine-media-queries](https://github.com/buildingblocks/grunt-combine-media-queries)
- meediapäringitele vastavate pildisuurste serveerimiseks [srcset-polyfill](https://github.com/borismus/srcset-polyfill)
- [angular-ui bootstrap](http://angular-ui.github.io/bootstrap/)

### Muudatused rootsi koodi
- Maha võetud user scale restriction
- Maha võetud tsr-typography.scss. 
- Maha võetud tsr-grid.scss (asendatud gridiga [Bootstrap-Sassist](https://github.com/twbs/bootstrap-sass) koos juurdekäivate kohustuslike variablete ja mixingutega)
- maha võetud normalize.scss (BS3 kasutab uuemat)

	
### Do-not-forget
- Korrasta javascript footeris (includes), lisa require.js. 
- Kas image replacement või ei ja kustmaalt. Praegu küljes.
