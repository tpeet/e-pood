// Handlebars

  var source   = $("#front-list-template").html();
  var template = Handlebars.compile(source);
  var data = { frontlist: [
    {
      frontpage: "y",
      loggedin: "",
      arvutid: "y",
      caption: "Arvutid ja lisad",
      path: "/arvutid-ja-lisad.html",
      name: "HP Pavilion 15-n051so",
      id: "Samsung-NP915s3g",
      ribbon: { size: "medium", text: "Soodne" },
      badge: {color: "primary", iconized: "icon", icon: "icon-mobiletsicon48px" },
      firstflash: { orientation: "horizontal", lg: "4G" },
      secondflash: { orientation: "horizontal", lg: "5G", sm: "some text"},
      price: "549 €",
      link: [ "Sülearvutid", "Tahvelarvutid", "Lauaarvutid", "Monitor-arvutid"]
    },
    {
      frontpage: "y",
      loggedin: "",
      arvutid: "y",
      caption: "TV ja audio",
      name: "46\" LED-teler Samsung F5300",
      id: "Samsung-F5300-LED-tv",
      badge: {color: "green", text: "6" },
      price: "Soodushind 599 €",
      ribbon: { size: "small", text: "+Kingitus" },
      firstflash: { orientation: "horizontal", lg: "4G" },
      link: [ "Telerid", "Kodukinod", "Kõrvaklapid ja lisad", "Mängukonsoolid"]
    },
    {
      caption: "Foto, video, GPS",
      name: "Canon EOS 70D + objektiiv 18-55 mm IS STM",
      id: "canon-eos-70d-18-135mm",
      badge: {color: "red", iconized: "icon", icon: "icon-phonetsicon48px" },
      price: "Soodushind 1299 €",
      link: [ "Peegelkaamerad", "Hübriidkaamerad", "Kompaktkaamerad", "Objektiivid"]
    },
    {
      caption: "Telefonid",
      name: "LG G2",
      id: "LG-G2_black",
      price: "Soodushind 459 €",
      ribbon: { text: "Uus" },
      firstflash: { orientation: "vertical", lg: "4G" },
      link: [ "Mobiiltelefonid", "Mobiiltelefonide lisavarustus", "Lauatelefonid", "Lauatelefonide lisavarustus"]
    }
    ]};

  $("#content-placeholder-frontlist").html(template(data));

  var productsource   = $("#product-slider-template").html();
  var producttemplate = Handlebars.compile(productsource);
  var productdata = { products: [
    {
      name: "HP Pavilion 15-n051so",
      id: "1-Samsung Galaxy Tab 3 10.1 4g + wifi GT-P5220ZWASEB-eest-valge",
      description: "Lorem ipsum.",
      price: "549 €"
    },
    {
      name: "juhtmeta hiir Logitech M325",
      id: "logitech1",
      badge: {color: "green", text: "6" },
      ribbon: { size: "medium", text: "Soodne" },
      firstflash: { lg: "Äri" },
      price: "Soodushind 599 €",
      description: "Lihtne väike hiir, mida on mugav kaasas kanda. ",
      price: "Soodushind 21 €"
    },
    {
      name: "sülearvuti Asus X200CA (must)",
      id: "Asus-X200CA-sülearvuti-eest-must 1",
      description: "Mõnusalt väike sülearvuti internetis surfamiseks. ",
      price: "359 €"
    },
    {
      name: "HP Pavilion 15-n051so",
      id: "4",
      description: "Suuremahulise kõvakettaga HP sülearvuti sobib koju igapäevaseks kasutamiseks ning ka vähemnõudlikemate mängude mängimiseks.",
      price: "549 €"
    },
    {
      name: "Norton AntiVirus 2013 3-PC",
      id: "99691",
      secondflash: { lg: "", sm: "Lõpumüük"},
      description: "Kiire ja tõhus kaitse sinu arvutile kahjurprogrammide ja internetiohtude eest.",
      price: "17 €"
    },
    {
      name: "HP Pavilion 15-n051so",
      id: "4",
      description: "Suuremahulise kõvakettaga HP sülearvuti sobib koju igapäevaseks kasutamiseks ning ka vähemnõudlikemate mängude mängimiseks.",
      price: "549 €"
    },
    {
      name: "HP Pavilion 15-n051so",
      id: "4",
      description: "Suuremahulise kõvakettaga HP sülearvuti sobib koju igapäevaseks kasutamiseks ning ka vähemnõudlikemate mängude mängimiseks.",
      price: "549 €"
    },
    {
      name: "HP Pavilion 15-n051so",
      id: "4",
      description: "Suuremahulise kõvakettaga HP sülearvuti sobib koju igapäevaseks kasutamiseks ning ka vähemnõudlikemate mängude mängimiseks.",
      price: "549 €"
    }
    ]};
  $("#content-placeholder-productslider").html(producttemplate(productdata));