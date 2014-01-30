# Elion e-pood
Kompileeritud failid asuvad Build kataloogis, juurkataloogis on tööfailid. Struktuur pärineb töövahendist - [Hammer](http://hammerformac.com).
Templiitimise abivahendiks on [Handlebars](http://handlebarsjs.com/), mis arenduse käigus asendatakse. Projekt on segu [Bootstrap-Sassist](https://github.com/twbs/bootstrap-sass/tree/master/vendor/assets/stylesheets/bootstrap) ja [rootslaste komponentidest](http://responsivecode.teliasonera.com/). 

Rootslastelt on välja lülitatud:
  - _tsr-grid.scss
  - _tsr-variables.scss (liidetud `_bs-ee-variables.scss` algusse)
  - _tsr-normalize.scss
  - _tsr-typography.scss

Bootstrapist on lisatud:
  - _variables.scss  
  - _mixins.scss  
  - _normalize.scss  
  - _scaffolding.scss 
  - _grid.scss  
  - _print.scss  
  - _type.scss  
  - _responsive-utilities.scss

Bootsrapist on muudetud ja lisatud:
  - _bs-ee-variables.scss (alustatud elioni stiili lisamisega)
  - _bs-ee-breadcrumbs.scss (puuduv komponent TSR-l)

## Sisu

### Töös on:

- Avaleht 
  - Avaslaider (TSR põhjal, WIN8 IE10 bugine)
  - Tooteklotsidega avamenüü (custom, TSR põhjal)
  - Sisselogitud kasutaja
- 2nd level
  - Tooteklotsid (custom, TSR põhjal)
  - Vertikaalne akordionmenüü (custom)
  - Leivapuru (BS põhjal)

### Juhtnöörid koodi oma projektis kasutamiseks:
  - All on BS3, siis rootsi scss, siis eesti kohendused.
  - Iga komponent on eraldi html-jupike, millele käib kaasa eraldi scss ja js (nagu rootslastel)
  - Juurkataloogis on põhilehed, mis includevad jupikesi
  - html-jupikesed asuvad `/_includes/..`
  - Vastav scss asub `/assets/css/_tsr-ee-elion/..`
  - Vastav js asub `assets/js/_tsr-ee-js/..`
  htmlis on sees Handlebarsi templated. Pure htmli saamiseks tuleb loogeliste sulgude sees asuv kola asendada teksti või labeliga. Inspiratsiooni saab `/asstets/js/handlebars/*.hbs` failidest (json). Lisaks tuleb script-tagi sees olev jupp tõsta eelneva tühja divi sisse, mille id-s sisaldub sõna `-placeholder-`.


### Abivahendid, suurelt jaolt eksperimentaalsed:
- uued ikoonid, mida Ahto juurde teeb lisaks rootslaste omale ka [Fontasticus](http://fontastic.me/). Ligipääsud annab Ahto - see on siiski avalik repo.
- [grunt](http://gruntjs.com/)
	- [grunt responsive-images](https://github.com/andismith/grunt-responsive-images)
	- meediapäringute sortimiseks [grunt-combine-media-queries](https://github.com/buildingblocks/grunt-combine-media-queries)
- meediapäringitele vastavate pildisuurste serveerimiseks [srcset-polyfill](https://github.com/borismus/srcset-polyfill)
- [angular-ui bootstrap](http://angular-ui.github.io/bootstrap/)

### Muudatused rootsi koodi
- Maha võetud user scale restriction
- Maha võetud tsr-typography.scss. See ei tee eriti midagi, rootslased on seda nii palju üle kirjutanud. Vajab kohendamist nüüd, vist tuleb BS typo.
- Maha võetud tsr-grid.scss (asendatud gridiga [Bootstrap-Sassist](https://github.com/twbs/bootstrap-sass) koos juurdekäivate kohustuslike variablete ja mixingutega)
- maha võetud normalize.scss (BS3 kasutab uuemat)

### Teada bugid
Vajab kohendamist peale rootsi gridi asendamist menüü, footer alumine riba, avaslaideri reklaamkast, tooteslaideri toote laiused, kogu lehe max laius ja breakpointid.

### Bugid rootsi koodis
- Slaider vigane IE10 Win8 tahvlil.
- See pagana grid läheb iga jumala liigutuse peale katki. Pole mõtet jännata.
	
### Do-not-forget
- Korrasta javascript footeris (includes), lisa require.js. Angular on küljes ainult dns-na, lisa fallback.
- Kas image replacement või ei ja kustmaalt. Praegu küljes.

### Legal ja muu
See on isiklik repo ja tööversioon. Kus viga näed laita, tule ja aita, aga puhast ja läikivat koodi siit praegu ei leia.
