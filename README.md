# Elion e-pood
Kompileeritud failid asuvad Build kataloogis. Ehitamiseks kasutan [Hammerit](http://hammerformac.com), sealt ka pärit projekti ebaharilik ülesehitus. Asja voorus on, et juurkataloogis on projekti osad ilusti väikeste hallatavate (ja soovi/vajaduse korral kopeeritavate) juppidena, assetsis css sassi kujul ja juppidena.
Et ma olen laisk htmli tippija, on templiitimise abivahendiks [Handlebars](http://handlebarsjs.com/), mis arenduse käigus asendatakse .Net tagidega. 

## Sisu

### Struktuur
Hetkel on leht üles ehitatud rootslaste koodile, säilitades nende algset scss-i. Minupoolsed duplitseerivad ülekirjutused järgivad rootslaste struktuuri, eristatud tsr-ee- kataloogi. Ehitan mobile-first approachi kasutades.

### Töös on:

	- Avaleht (ülemine slaider ja ülemised tooteklotsid)
	  - Sisselogitud kasutaja
	- Toote klotsvaade

Ülejäänud nähtavad leheosad on kopipaste rootslaste näidisest ega toimi responsivena.

### Abivahendid, suurelt jaolt eksperimentaalsed:
- uued ikoonid lisaks rootslaste omale ka [Fontasticus](http://fontastic.me/)
- [grunt](http://gruntjs.com/)
	- [grunt responsive-images](https://github.com/andismith/grunt-responsive-images)
	- meediapäringute sortimiseks [grunt-combine-media-queries](https://github.com/buildingblocks/grunt-combine-media-queries)
- meediapäringitele vastavate pildisuurste serveerimiseks [srcset-polyfill](https://github.com/borismus/srcset-polyfill)
- [angular-ui bootstrap](http://angular-ui.github.io/bootstrap/)

### Muudatused rootsi koodi
- Maha võetud user scale restriction

### Bugid rootsi koodis
- Slaider vigane IE10 Win8 tahvlil.
	
### Do-not-forget
- Korrasta javascript footeris (includes), lisa require.js. Angular on küljes ainult dns-na, lisa fallback.
- Angular.js on eksperimentaalne, headis. Võib hakata konfliktima handlebarsiga. Miks mõlemad? Sest handlebarsi süntaks on ülilihtne lubab kiiresti templiitida. Angulari läheb pärast ilmselt ka päriselt kasutajainteraktsioonides tarvis.
- Kas imagereplacement või ei ja kustmaalt

### Legal ja muu
See on isiklik repo ja tööversioon. Kus viga näed laita, tule ja aita, aga puhast ja läikivat koodi siit praegu ei leia.
