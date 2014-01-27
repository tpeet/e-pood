# Elion e-pood
Kompileeritud failid asuvad Build kataloogis. Ehitamiseks kasutan [Hammerit](http://hammerformac.com), sealt ka pärit projekti ebaharilik ülesehitus. Et ma olen laisk htmli tippija, on templiitimise abivahendiks [Handlebars](http://handlebarsjs.com/), mis arenduse käigus asendatakse .Net tagidega. 

## Sisu

### Struktuur
Hetkel on leht üles ehitatud rootslaste koodile, säilitades nende algset scss-i. Minupoolsed duplitseerivad ülekirjutused järgivad rootslaste struktuuri, eristatud tsr-ee- kataloogi.

### Töös on:

	- Avaleht (ülemine slaider ja ülemised tooteklotsid)
	  - Sisselogitud kasutaja
	- Toote klotsvaade
	
### Do-not-forget
- Korrasta javascript footeris (includes), lisa require.js
- Angular.js on eksperimentaalne, headis. Võib hakata konfliktima handlebarsiga. Miks mõlemad? Sest handlebarsi süntaks on ülilihtne lubab kiiresti templiitida. Angulari läheb pärast ilmselt ka päriselt kasutajainteraktsioonides tarvis.
- Kas imagereplacement või ei ja kustmaalt

### Legal ja muu
See on isiklik repo ja tööversioon. Kus viga näed laita, tule ja aita, aga puhast ja läikivat koodi siit praegu ei leia.
