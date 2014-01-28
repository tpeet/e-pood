# Elion e-pood
Kompileeritud failid asuvad Build kataloogis, juurkataloogis on tööfailid. Struktuur pärineb töövahendist - [Hammer](http://hammerformac.com).
Et ma olen laisk htmli tippija, on templiitimise abivahendiks [Handlebars](http://handlebarsjs.com/), mis arenduse käigus asendatakse. 

## Sisu

### Struktuur
Suurelt jaolt on leht üles ehitatud rootslaste koodile, säilitades nende algset scss-i. Minupoolsed duplitseerivad ülekirjutused järgivad rootslaste struktuuri, eristatud tsr-ee- kataloogi.

### Töös on:

	- Avaleht (ülemine slaider ja ülemised tooteklotsid)
	  - Sisselogitud kasutaja
	- Toote klotsvaade


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
