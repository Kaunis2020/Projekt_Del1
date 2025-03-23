CREATE TABLE coldbeverages(
id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
photo varchar(100) DEFAULT 'saknas',
name varchar(100) NOT NULL,
category varchar(100) NOT NULL,
type varchar(100) NOT NULL,
price INTEGER NOT NULL,
ingredients text NOT NULL,
description text NOT NULL
);

CREATE TABLE hotbeverages(
id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
photo varchar(100) DEFAULT 'saknas',
name varchar(100) NOT NULL,
category varchar(100) NOT NULL,
type varchar(100) NOT NULL,
price INTEGER NOT NULL,
ingredients text NOT NULL,
description text NOT NULL
);

INSERT INTO hotbeverages(photo, name, category, type, price, ingredients, description) VALUES('te.jpg', 'Lipton Te', 'Te', 'Alkoholfri', 5, 'Vatten, socker, te', 'Lipton te med flera olika smaker. Serveras med socker, citron eller mjölk.');
INSERT INTO hotbeverages(photo, name, category, type, price, ingredients, description) VALUES('kaffe.jpg', 'Kaffe från Colombia', 'Kaffe', 'Alkoholfri', 10, 'Vatten, socker, kaffe', 'Äkta colombianskt kaffe. Serveras med socker, mjölk eller grädde.');
INSERT INTO hotbeverages(photo, name, category, type, price, ingredients, description) VALUES('varmchoklad.jpg', 'Varm choklad', 'Kakao', 'Alkoholfri', 10, 'Vatten, socker, kakao', 'Varm choklad. Serveras med socker, mjölk eller vispad grädde.');
INSERT INTO hotbeverages(photo, name, category, type, price, ingredients, description) VALUES('grontte.jpg', 'Grönt Te', 'Te', 'Alkoholfri', 5, 'Vatten, socker, grönt te', 'Lipton grönt te med flera olika smaker. Serveras med socker, mynta, citron eller mjölk.');
INSERT INTO hotbeverages(photo, name, category, type, price, ingredients, description) VALUES('cappuccino.jpg', 'Cappuccino', 'Cappuccino', 'Alkoholfri', 5, 'Vatten, socker, mjölk, kaffe', 'Cappuccino är en kaffedryck gjord på lika delar espresso, ångad mjölk och mjölkskum.');

INSERT INTO coldbeverages(photo, name, category, type, price, ingredients, description) VALUES('fantaexotic.jpg', 'Fanta Exotic', 'Läsk', 'Alkoholfri', 5, 'Vatten, socker, persikojuice, citrusextrakt', 'Alkoholfri läsk från koncentrerade fruktjuicer.');
INSERT INTO coldbeverages(photo, name, category, type, price, ingredients, description) VALUES('oreomilkshake.jpg', 'Oreo Milkshake', 'Dessertdryck', 'Vego, Alkoholfri', 5, 'Oreokakor, vegomjölk, vegansk vaniljglass', 'Oreo Milkshake. Som en chokladmilkshake med en barnsligt god twist: Oreo-kakor. Toppad med vegansk vispad grädde.');
INSERT INTO coldbeverages(photo, name, category, type, price, ingredients, description) VALUES('milkshake.jpg', 'Milkshake', 'Dessertdryck', 'Alkoholfri', 10, 'Mjölk, glass, choklad, grädde', 'Icke-vegansk milkshake. En chokladmilkshake med äkta vispad grädde.');
INSERT INTO coldbeverages(photo, name, category, type, price, ingredients, description) VALUES('aperol.jpg', 'Aperol', 'Aperitif', 'Alkohol', 10, 'Alkoholhalt 11%', 'Aperol är en italiensk aperitif. Kryddig, söt, något bitter smak med tydlig karaktär av apelsin, inslag av rabarber och örter.');
INSERT INTO coldbeverages(photo, name, category, type, price, ingredients, description) VALUES('cocktail.jpg', 'Paloma cocktail', 'Cocktail', 'Alkohol', 15, 'Alkoholhalt 15%', 'En uppfriskande cocktail bestående av blodapelsin, lime, tequila 15% och grapefruit juice.');
INSERT INTO coldbeverages(photo, name, category, type, price, ingredients, description) VALUES('raspberry.jpg', 'Raspberry Cocktail', 'Cocktail', 'Alkohol', 15, 'Alkoholhalt 25%', 'En uppfriskande cocktail bestående av färska hallon, lime, vodka 25% samt basilika.');
INSERT INTO hotbeverages(photo, name, category, type, price, ingredients, description) VALUES('espresso.jpg', 'Espresso', 'Kaffe', 'Alkoholfri', 10, 'Vatten, socker, kaffe', 'Espresso av högsta kvalitet. Serveras med eller utan socker, mjölk eller grädde.');
INSERT INTO hotbeverages(photo, name, category, type, price, ingredients, description) VALUES('te.jpg', 'Lipton Te', 'Te', 'Alkoholfri', 5, 'Vatten, socker, te', 'Lipton te med flera olika smaker. Serveras med socker, citron, honung eller mjölk.');
INSERT INTO hotbeverages(photo, name, category, type, price, ingredients, description) VALUES('kaffe.jpg', 'Kaffe från Colombia', 'Kaffe', 'Alkoholfri', 10, 'Vatten, socker, kaffe', 'Äkta colombianskt kaffe. Serveras med socker, mjölk eller grädde.');
INSERT INTO hotbeverages(photo, name, category, type, price, ingredients, description) VALUES('varmchoklad.jpg', 'Varm choklad', 'Kakao', 'Alkoholfri', 10, 'Vatten, socker, kakao', 'Varm choklad. Serveras med socker, mjölk eller vispad grädde.');
INSERT INTO hotbeverages(photo, name, category, type, price, ingredients, description) VALUES('grontte.jpg', 'Grönt Te', 'Te', 'Alkoholfri', 5, 'Vatten, socker, grönt te', 'Lipton grönt te med flera olika smaker. Serveras med socker, mynta, citron, honung eller mjölk.');
INSERT INTO hotbeverages(photo, name, category, type, price, ingredients, description) VALUES('cappuccino.jpg', 'Cappuccino', 'Cappuccino', 'Alkoholfri', 5, 'Vatten, socker, mjölk, kaffe', 'Cappuccino är en kaffedryck gjord på lika delar espresso, ångad mjölk och mjölkskum.');
INSERT INTO hotbeverages(photo, name, category, type, price, ingredients, description) VALUES('latte.jpg', 'Kaffe Latte', 'Kaffe', 'Alkoholfri', 10, 'Vatten, socker, grädde, kaffe, kanel', 'Kaffe latte är len och värmande god. Först espresso eller starkt kaffe, sedan mjölk och till sist ett krämigt skum av äkta vispad grädde.');
INSERT INTO coldbeverages(photo, name, category, type, price, ingredients, description) VALUES('loka.jpg', 'Loka Crush', 'Vatten', 'Alkoholfri', 15, 'Vatten, fruktjuice', 'Loka Crush har fyra olika smaker: citron, päron, hallon och jordgubb. Loka Crush har inga konserveringsmedel, färgämnen eller sötningsmedel.');
INSERT INTO coldbeverages(photo, name, category, type, price, ingredients, description) VALUES('ramlosa.jpg', 'Ramlösa', 'Vatten', 'Alkoholfri', 15, 'Vatten, fruktjuice', 'Ramlösa har flera olika smaker: citrus, päron, mango, ananas, granatäpple, hallon, kiwi och svarta vinbär');
INSERT INTO coldbeverages(photo, name, category, type, price, ingredients, description) VALUES('cola.jpg', 'Coca-Cola', 'Läsk', 'Alkoholfri', 5, 'Vatten, socker', 'Alkoholfri läsk');
INSERT INTO coldbeverages(photo, name, category, type, price, ingredients, description) VALUES('pepsi.jpg', 'Pepsi-Cola', 'Läsk', 'Alkoholfri', 5, 'Vatten, socker', 'Alkoholfri läsk');
INSERT INTO coldbeverages(photo, name, category, type, price, ingredients, description) VALUES('fantaorange.jpg', 'Fanta Orange', 'Läsk', 'Alkoholfri', 5, 'Vatten, socker, apelsinjuice', 'Alkoholfri läsk från koncentrerade fruktjuicer.');
INSERT INTO coldbeverages(photo, name, category, type, price, ingredients, description) VALUES('fantacherry.jpg', 'Fanta Cherry', 'Läsk', 'Alkoholfri', 5, 'Vatten, socker, körsbärjuice', 'Alkoholfri läsk från koncentrerade fruktjuicer.');
INSERT INTO coldbeverages(photo, name, category, type, price, ingredients, description) VALUES('falcon.jpg', 'Falcon', 'Öl', 'Alkohol', 10, 'Kornmalt och humle', 'Öl med alkoholhalt på 5,2% vol.');
INSERT INTO coldbeverages(photo, name, category, type, price, ingredients, description) VALUES('tuborg.jpg', 'Tuborg', 'Öl', 'Alkohol', 10, 'Kornmalt och humle', 'Öl med alkoholhalt på 6,5% vol.');
INSERT INTO coldbeverages(photo, name, category, type, price, ingredients, description) VALUES('carlsberg.jpg', 'Carlsberg', 'Öl', 'Alkohol', 10, 'Kornmalt och humle', 'Öl med alkoholhalt på 7,0% vol.');
INSERT INTO coldbeverages(photo, name, category, type, price, ingredients, description) VALUES('heineken.jpg', 'Heineken', 'Öl', 'Alkohol', 10, 'Kornmalt och humle', 'Öl med alkoholhalt på 5,0% vol.');
INSERT INTO coldbeverages(photo, name, category, type, price, ingredients, description) VALUES('bourgogneblanc.jpg', 'Bourgogne Blanc', 'Vitt vin', 'Alkohol', 15, 'Chardonnay-vindruvor', 'Vitt vin med alkoholhalt på 13,0% vol. Torr, frisk och fruktig med inslag av gula äpplen.');
INSERT INTO coldbeverages(photo, name, category, type, price, ingredients, description) VALUES('sauvignonblanc.jpg', 'Sauvignon Blanc', 'Vitt vin', 'Alkohol', 10, 'Vindruvor', 'Vitt vin från Frankrike med alkoholhalt på 11.50% vol. Fruktig, aromatisk, druvtypisk doft med inslag av citrus, krusbär och gröna äpplen.');
INSERT INTO coldbeverages(photo, name, category, type, price, ingredients, description) VALUES('champagne.jpg', 'Champagne Debuchy', 'Champagne', 'Alkohol', 15, 'Pinot noir 70%, Chardonnay 20%', 'Alkoholhalt 12% vol. Champagne Debuchy är en torr, frisk, smakrik och klassisk champagne. Generös och elegant, med en klassisk champagnekaraktär
av aprikos, mogna äpplen, brioche och nougat.');

INSERT INTO coldbeverages(photo, name, category, type, price, ingredients, description) VALUES('pannierbrut.jpg', 'Champagne Pannier Brut', 'Champagne', 'Alkohol', 10, 'Vindruvor Chardonnay, Pinot Noir ', 'Alkoholhalt 12.0% vol. Champagne Pannier Brut från Frankrike har friska citrustoner tillsammans med gula och röda äpplen med inslag av apelsinblom.');
INSERT INTO hotbeverages(photo, name, category, type, price, ingredients, description) VALUES('mocaccino.jpg', 'Caffe Mocha', 'Kaffe', 'Alkoholfri', 5, 'Vispgrädde, mjölk, kaffe', 'Caffe Mocha är en typ av kaffedryck som innehåller espresso, chokladsås, ångad mjölk och vispgrädde. Vi har en lite lyxigare variant där det starka, smakrika kaffet får sällskap av både choklad och vispgrädde.');
INSERT INTO nonvegan(photo, name, category, type, price, ingredients, description) VALUES('fruktsallad.jpg', 'Fruktsallad med vaniljglass', 'Dessert', 'ej vegan', 20, 'Vaniljglass, jordgubbar, kiwi, mango', 'Läcker fruktsallad med jordgubbar, mango, kiwi, ananas och syrlig sockerlag som serveras med vaniljglass och pistaschmandlar.');
INSERT INTO nonvegan(photo, name, category, type, price, ingredients, description) VALUES('kokttorsk.jpg', 'Torsk med potatis', 'Varmrätt', 'ej vegan', 25, 'Färsk torsk, potatis, gul lök', 'Färsk torsk med potatis. Fisken serveras med smör, riven pepparrot, rädisor, kokt potatis och rågbröd.');
INSERT INTO nonvegan(photo, name, category, type, price, ingredients, description) VALUES('hummersoppa.jpg', 'Hummersoppa', 'Soppa', 'ej vegan', 30, 'Hummer, morot, gul lök, vitlök, rotselleri, vispgrädde', 'Hummersoppa är en soppa som passar utmärk vid festliga tillfällen med lyxiga humrar i huvudrollen. Serveras med vetebröd.');
INSERT INTO vegan(photo, name, category, type, price, ingredients, description) VALUES('pestopasta.jpg', 'Vegansk pestopasta', 'Varmrätt', 'vegan', 20, 'Pasta, basilika, vitlök, olivolja, tomater', 'Ett väldigt gott och läckert veganskt pestorecept med cashewnötter som ger en otroligt krämig och god pestopasta genovese med eller utan parmesanost!');
INSERT INTO vegan(photo, name, category, type, price, ingredients, description) VALUES('kikaartsgryta.jpg', 'Vegansk kikärtsgryta', 'Varmrätt', 'vegan', 15, 'Paprika, purjolök, morot, vitlök, kokosmjölk, kikärtor', 'Kikärtsgryta med grönsaker och kokosmjölk. Kikärtsgryta är en näst intill komplett rätt. Mättande, proteinrik och supergott! Serveras med ciabattabröd.');
INSERT INTO vegan(photo, name, category, type, price, ingredients, description) VALUES('blabarspaj.jpg', 'Vegansk blåbärspaj', 'Bakverk', 'vegan', 10, 'Mjöl, smör, blåbär, vaniljsocker, citronjuice', 'Vegansk blåbärspaj med vegogrädde. Denna ljuvliga veganska blåbärspaj är en klassisk dessert som kombinerar söta, saftiga blåbär med ett krispigt och smuligt pajskal.');
INSERT INTO vegan(photo, name, category, type, price, ingredients, description) VALUES('vegobiff.jpg', 'Veganska biffar', 'Varmrätt', 'vegan', 20, 'Potatis, gul lök, olivolja, tomater, vitlök', 'Veganska biffar med kryddpeppar med vegansk potatisgratäng och rödvinssås. Serveras med med en krämig potatisgratäng, bröd och klassisk rödvinssås.');
INSERT INTO vegan(photo, name, category, type, price, ingredients, description) VALUES('vegkottbullar.jpg', 'Veganska köttbullar', 'Varmrätt', 'vegan', 15, 'Potatis, morot, lök, olja, dijonsenap', 'Veganska köttbullar i gräddsås med kokt potatis. De veganska köttbullarna görs på sojafärs och blir magiskt goda. Till dem serveras en krämig gräddsås gjord på havregrädde, kokt potatis och grönsaker.');
INSERT INTO vegan(photo, name, category, type, price, ingredients, description) VALUES('asiavego.jpg', 'Asiatiska vegobullar', 'Varmrätt', 'vegan', 20, 'Ris, vitlök, chili, broccoli, olja', 'Asiatiska vegobullar i teriyakisås. Smakrika vegobullar i god teriyakisås som serveras med ris, krispiga grönsaker och koriander.');
INSERT INTO vegan(photo, name, category, type, price, ingredients, description) VALUES('auberginepasta.jpg', 'Auberginepasta', 'Varmrätt', 'vegan', 15, 'Auberginer, rödlök, olivolja, tomater, basilika', 'Auberginepasta med valnötter och ruccolasallad. Färgrik och läcker pastarätt av godsaker som bland annat aubergine, lök, körsbärstomater och färsk tagliolinipasta.');
INSERT INTO nonvegan(photo, name, category, type, price, ingredients, description) VALUES('smorgastarta.jpg', 'Smörgåstårta', 'Smörgås', 'ej vegan', 25, 'Dill, räkor, gravad lax, citron, gurka, ost, majonäs', 'En riktigt lyxig och saftig smörgåstårta med skalade räkor och gravad lax.');
INSERT INTO vegan(photo, name, category, type, price, ingredients, description) VALUES('vegosmorgas.jpg', 'Vegansk smörgåstårta', 'Smörgås',  'vegan', 15, 'Tomater, citron, majonnäs, rödlök, gurka, rädisor', 'En klassisk vegansk smörgåstårta med vegomajonnäs och grönsaker.');
INSERT INTO vegan(photo, name, category, type, price, ingredients, description) VALUES('sorbet.jpg', 'Jordgubbsglass', 'Glass',  'vegan', 10, 'Kokosmjölk, socker, jordgubbar', 'Vegansk glass med flera olika smaker: jordgubb, mango, päron, banan, ananas, choklad.');
INSERT INTO nonvegan(photo, name, category, type, price, ingredients, description) VALUES('torskrisotto.jpg', 'Torsk med risotto', 'Varmrätt', 'ej vegan', 15, 'Torsk, olivolja, majs, smör, parmesanost, kantareller', 'Stekt torsk tillsammans med risotto, vitlök och kantareller blir en riktig festmåltid.');
INSERT INTO nonvegan(photo, name, category, type, price, ingredients, description) VALUES('biffstek.jpg', 'Biffstek med potatis', 'Varmrätt', 'ej vegan', 25, 'Nötkött, potatis, gurka, tomater, paprika', 'En härlig och lyxig biffstek med potatisgratäng och krispiga grönsaker i en underbar och krämig gräddsås.');
INSERT INTO nonvegan(photo, name, category, type, price, ingredients, description) VALUES('stektkyck.jpg', 'Kyckling med rotfrukter', 'Varmrätt', 'ej vegan', 15, 'Rotselleri, morötter, kålrot, palsternacka, gul lök', 'Stekt kyckling med rotfrukter och örtsås. Till stekt kyckling serveras rotfrukter och en örtsås. Mycket gott!');
INSERT INTO nonvegan(photo, name, category, type, price, ingredients, description) VALUES('varmroktlax.jpg', 'Varmrökt lax med romsås', 'Varmrätt', 'ej vegan', 20, 'Lax, potatis, citron, gräddfil, tomater, avokado', 'Varmrökt lax serveras med romsås, kokt potatis, citron samt sallad på babyspenat, tomater, avokado och majonnäs.');
INSERT INTO nonvegan(photo, name, category, type, price, ingredients, description) VALUES('cherrypie.jpg', 'Körsbärspaj', 'Bakverk', 'ej vegan', 10, 'Mjöl, ägg, smör, grädde, körsbär', 'En underbart god nybakad körsbärspaj som serveras med vispad grädde eller vaniljglass.');
INSERT INTO nonvegan(photo, name, category, type, price, ingredients, description) VALUES('bananbakelse.jpg', 'Bananbakelse', 'Bakverk', 'ej vegan', 10, 'Vetemjöl, smör, ägg, grädde, vaniljkräm, bananer', 'Bananbakelser fyllda med vaniljkräm, banan och vispad grädde. Garneras med glasyr och smält choklad.');
INSERT INTO nonvegan(photo, name, category, type, price, ingredients, description) VALUES('gourmetbiff.jpg', 'Gourmetbiff med potatis och lök', 'Varmrätt', 'ej vegan', 30, 'Ryggbiff, gul lök, smör, potatis, olja, svartpeppar', 'Stekt ryggbiff serveras med stekt lök, sky, råstekt potatis och sallad med tomater, gurka och paprika.');
INSERT INTO nonvegan(photo, name, category, type, price, ingredients, description) VALUES('kottfarspaj.jpg', 'Kantarell- och köttfärspaj', 'Varmrätt', 'ej vegan', 10, 'Köttfärs, kantareller, paprika, oregano, gul lök', 'Köttfärspaj med kantareller, paprika och oregano. Serveras med en fräsch grönsallad.');
INSERT INTO nonvegan(photo, name, category, type, price, ingredients, description) VALUES('jordglass.jpg', 'Jordgubbsglass', 'Glass', 'ej vegan', 10, 'Mjölk, socker, jordgubbar', 'En mycket lyxig och smakrik jordgubbsglass. Serveras med chokladsås.');
INSERT INTO nonvegan(photo, name, category, type, price, ingredients, description) VALUES('budapest.jpg', 'Budapestbakelse', 'Bakverk', 'ej vegan', 10, 'Mjöl, mandarin, choklad, socker', 'Budapestbakelsen är mångas fikafavorit. Hasselnötsmaräng, vispad grädde och mandarinklyftor. Bakelsen garneras med fint spritsad grädde och en mandarinklyfta.');
INSERT INTO nonvegan(photo, name, category, type, price, ingredients, description) VALUES('kinesiskgryta.jpg', 'Kinesisk köttgryta', 'Varmrätt', 'ej vegan', 25, 'Nötkött, vitkål, palsternacka, timjan, morötter, purjolök', 'Kinesisk köttgryta serveras med kokt ris, grönsallad och kinesisk soja.');
INSERT INTO nonvegan(photo, name, category, type, price, ingredients, description) VALUES('napoleon.jpg', 'Napoleonbakelse', 'Bakverk', 'ej vegan', 10, 'Vetemjöl, smör, vanilj, mjölk, hallonsylt, grädde', 'En väldigt smarrig klassisk Napoleonbakelse med hallonsylt, färska hallon och vispad grädde.');
INSERT INTO nonvegan(photo, name, category, type, price, ingredients, description) VALUES('pekinganka.jpg', 'Pekinganka med rotfrukter', 'Varmrätt', 'ej vegan', 20, 'Anka, honung, purjolök, gurka, rotfrukter', 'En klassisk och traditionell pekinganka som serveras med rotfrukter, färska grönsaker och bröd.');
INSERT INTO nonvegan(photo, name, category, type, price, ingredients, description) VALUES('kiev.jpg', 'Kyckling Kiev', 'Varmrätt', 'ej vegan', 15, 'Kyckling, persilja, vitlök, smör, potatis', 'Kyckling Kiev är en ukrainsk kycklingrätt bestående av panerad kycklingfilé fylld med persiljekryddat vitlökssmör. Serveras med krispiga potatisklyftor och fräsch sallad.');
INSERT INTO nonvegan(photo, name, category, type, price, ingredients, description) VALUES('kottfarspajost.jpg', 'Krämig köttfärspaj', 'Varmrätt', 'ej vegan', 10, 'Vetemjöl, svamp, köttfärs, vitlök, grädde, ost', 'Krämig köttfärspaj med svamp, ost och skinka. Fylld med köttfärs, svamp och skinka, kryddad med vitlök och chili samt med grädde och smakrik ost.');
INSERT INTO vegan(photo, name, category, type, price, ingredients, description) VALUES('frystyoghurt.jpg', 'Vegansk fryst yogurt', 'Dessert',  'vegan', 5, 'Kokosmjölk, hallon, citronjuice', 'Vegansk fryst yogurt med kokosmjölk och hallon. En läcker och smarrig vegansk efterrätt till alla högtider!');
INSERT INTO coldbeverages(photo, name, category, type, price, ingredients, description) VALUES('drickyoghurt.jpg', 'Yalla Drickyoghurt', 'Drickyoghurt', 'Alkoholfri', 5, 'Mjölk, socker, jordgubbar', 'Yalla Drickyoghurt med jordgubbssmak. Finns också i flera olika smaker: banan, blåbär, kiwi och mango.');
INSERT INTO vegan(photo, name, category, type, price, ingredients, description) VALUES('jordgubbssmoothie.jpg', 'Jordgubbssmoothie', 'Smoothie',  'vegan', 10, 'Bananer, jordgubbar, sötad sojayoghurt, cashewnötter', 'Vegansk jordgubbssmoothie. En underbar, somrig smoothie helt utan mjölkprodukter.');
INSERT INTO coldbeverages(photo, name, category, type, price, ingredients, description) VALUES('likor.jpg', 'Jordgubbslikör', 'Likör', 'Alkohol', 15, 'Vatten, socker, aromämnen', 'Likör med alkoholhalt 21%. Finns även med smaken av passionsfrukt och mango.');
INSERT INTO coldbeverages(photo, name, category, type, price, ingredients, description) VALUES('kaffelikor.jpg', 'Kaffelikör', 'Likör', 'Alkohol', 20, 'Likör, glass, grädde', 'Likör med alkoholhalt 25%. Serveras med vaniljglass och vispad grädde.');
INSERT INTO vegan(photo, name, category, type, price, ingredients, description) VALUES('veganpasta.jpg', 'Vegansk pasta', 'Varmrätt', 'vegan', 10, 'Tomater, pasta, pesto, olivolja, vitlök', 'Vegansk pasta med grön pesto och stekta tomater. Den här veganska pastan med pesto och stekta tomater är nästan oförskämt god. Setveras med vitlöksröran.');
INSERT INTO nonvegan(photo, name, category, type, price, ingredients, description) VALUES('nudelsoppa.jpg', 'Nudelsoppa', 'Soppa', 'ej vegan', 15, 'Lime, kokosmjölk, kyckling, röd curry, vitlök', 'Nudelsoppa med kyckling och röd curry. Kryddig, krämig och alldeles underbar.');
INSERT INTO nonvegan(photo, name, category, type, price, ingredients, description) VALUES('eclair.jpg', 'Eclair', 'Bakverk', 'ej vegan', 5, 'Vetemjöl, smör, ägg, vispgrädde, choklad', 'Eclair är en fransk bakelse av chouxdeg som här fylls med vaniljgrädde och choklad.');
INSERT INTO nonvegan(photo, name, category, type, price, ingredients, description) VALUES('glaceyoghurt.jpg', 'Persikoglass', 'Glass', 'ej vegan', 5, 'Mjölk, socker, persikor, yoghurt', 'En läcker persikoglass gjord på färska persikor och yoghurt.');
INSERT INTO nonvegan(photo, name, category, type, price, ingredients, description) VALUES('thaisoppa.jpg', 'Thailändsk soppa', 'Soppa', 'ej vegan', 15, 'Kyckling, gul lök, vitlök, paprika, zucchini, majs', 'Thai nudelsoppa med röd curry. En underbar och välsmakande thailändsk nudelsoppa.');
INSERT INTO vegan(photo, name, category, type, price, ingredients, description) VALUES('vegocrepes.jpg', 'Veganska crepes', 'Varmrätt', 'vegan', 10, 'Vetemjöl, champinjoner, gul lök, vegansk ost, persilja', 'Veganska crepes med svamp- och lökfyllning. En underbar och mättande fransk vegansk rätt.');
INSERT INTO vegan(photo, name, category, type, price, ingredients, description) VALUES('rodbetssallad.jpg', 'Vegansk röbetssallad', 'Sallad', 'vegan', 10, 'Röbetor, gul lök, vitlök, fetaost, spenat, soltorkade tomater', 'Vegansk röbetssallad med fetaost, kikärtor och pumpafrön. Rödbetor är en stor favorit som är matigt och gott att göra en sallad på. Tillsammans med fetaost, kikärtor och pumpafrön blir det en riktigt smaskig sallad.');
INSERT INTO vegan(photo, name, category, type, price, ingredients, description) VALUES('rodbetssoppa.jpg', 'Rödbetssoppa', 'Soppa', 'vegan', 10, 'Rödbetor, potatis, gul lök, morötter, vitlök, palsternacka', 'Vegansk rödbetssoppa är en fyllig, billig, enkel och god rödbetssoppa. Serveras med färskt ciabattabröd.');
INSERT INTO vegan(photo, name, category, type, price, ingredients, description) VALUES('risotto.jpg', ' tomatrisotto', 'Varmrätt', 'vegan', 15, 'Ris, gul lök, vitlök, vegansk parmesan, tomater', 'Krämig vegansk risotto med tomater, vitlök och basilika.');
INSERT INTO hotbeverages(photo, name, category, type, price, ingredients, description) VALUES('caramelmacchiato.jpg', 'Caramel Macchiato', 'Kaffe', 'Alkoholfri', 5, 'Kaffe, mjölk, vaniljsirap, kolasås', 'Espresso toppat med vispgrädde och kolasås.');
INSERT INTO hotbeverages(photo, name, category, type, price, ingredients, description) VALUES('chailatte.jpg', 'Chai latte', ' Te', 'Alkoholfri', 5, 'Vatten, mjölk, kanel, kardemumma', 'Indisk tedryck bestående av svart te, kryddor och mjölk. Tedrycken sötas ordentligt så att man får ett varmt, sött och kryddigt mjölkte.');
INSERT INTO hotbeverages(photo, name, category, type, price, ingredients, description) VALUES('chokladkaffe.jpg', 'Chokladkaffe', 'Kakao', 'Alkoholfri', 5, 'Vatten, kakao, socker, kaffe, grädde', 'Chokladkaffe serveras med chokladgrädde och chokladsås.');
INSERT INTO hotbeverages(photo, name, category, type, price, ingredients, description) VALUES('moc.jpg', 'Mocaccino', 'Cappuccino', 'Alkoholfri', 5, 'Vatten, kaffe, choklad', 'Mocaccino är cappuccino med smak av choklad.');
INSERT INTO hotbeverages(photo, name, category, type, price, ingredients, description) VALUES('lattemac.jpg', 'Latte Macchiato', 'Kaffe', 'Alkoholfri', 10, 'Vatten, kaffe, mjölk', 'Latte macchiato är en espressodryck bestående av 2 delar mjölkskum och 7 delar varm mjölk som blandas med 1 del espresso.');
INSERT INTO hotbeverages(photo, name, category, type, price, ingredients, description) VALUES('macchiato.jpg', 'Caffe Macchiato', 'Kaffe', 'Alkoholfri', 10, 'Vatten, kaffe, mjölk', 'Caffe macchiato är en espressodryck bestående av 1 del mjölkskum och 1 del varm mjölk som blandas med 7 delar espresso.');
INSERT INTO vegan(photo, name, category, type, price, ingredients, description) VALUES('chokladmousse.jpg', 'Chokladmousse', 'Dessert', 'vegan', 10, 'Choklad, grädde, hallon, citronmeliss, vit choklad', 'Vegansk chokladmousse toppad med hallon, citronmeliss eller riven vit choklad.');
INSERT INTO coldbeverages(photo, name, category, type, price, ingredients, description) VALUES('pinotnoir.jpg', 'Imperial Pinot Noir', 'Rött vin', 'Alkohol', 10, 'Vindruvor', 'Rött vin från Tyskland med alkoholhalt på 13,0% vol.');
INSERT INTO coldbeverages(photo, name, category, type, price, ingredients, description) VALUES('altopina.jpg', 'Alto Pina', 'Rött vin', 'Alkohol', 5, 'Vindruvor', 'Rött vin från Portugal med alkoholhalt på 14,0% vol.');
INSERT INTO coldbeverages(photo, name, category, type, price, ingredients, description) VALUES('boisroyal.jpg', 'Bois Royal Bordeaux', 'Rött vin', 'Alkohol', 10, 'Vindruvor Merlot', 'Rött vin från Frankrike med alkoholhalt på 13,0% vol.');
INSERT INTO coldbeverages(photo, name, category, type, price, ingredients, description) VALUES('royal.jpg', 'Beaujolais Royal', 'Rött vin', 'Alkohol', 10, 'Vindruvor Merlot', 'Rött vin från Frankrike med alkoholhalt på 12,5% vol.');
INSERT INTO coldbeverages(photo, name, category, type, price, ingredients, description) VALUES('roisoleil.jpg', 'Le Roi Soleil', 'Rosévin', 'Alkohol', 5, 'Vindruvor', 'Rosévin från Frankrike med alkoholhalt på 13,0% vol.');
INSERT INTO coldbeverages(photo, name, category, type, price, ingredients, description) VALUES('moscato.jpg', 'Antico Moscato', 'Rosévin', 'Alkohol', 5, 'Vindruvor', 'Rosévin från Italien med alkoholhalt på 7,5% vol.');
INSERT INTO coldbeverages(photo, name, category, type, price, ingredients, description) VALUES('venus.jpg', 'Aqua di Venus', 'Rosévin', 'Alkohol', 5, 'Vindruvor', 'Rosévin från Italien med alkoholhalt på 12,5% vol.');
INSERT INTO hotbeverages(photo, name, category, type, price, ingredients, description) VALUES('twingreen.jpg', 'Twinings Green Tea', 'Grönt te', 'Alkoholfri', 5, 'Vatten, socker, grönt te', 'Twinings Green Tea med flera olika smaker. Serveras med socker, mynta, citron, honung eller mjölk.');
INSERT INTO hotbeverages(photo, name, category, type, price, ingredients, description) VALUES('twintea.jpg', 'Twinings English Breakfast', 'Te', 'Alkoholfri', 5, 'Vatten, socker, te', 'Twinings English Breakfast te serveras med socker, citron, honung eller mjölk.');
INSERT INTO hotbeverages(photo, name, category, type, price, ingredients, description) VALUES('kobbs.jpg', 'Kobbs Earl Green', 'Grönt te', 'Alkoholfri', 5, 'Vatten, socker, grönt te', 'Kobbs Earl Green grönt te med smak av citrus och bergamott.');
