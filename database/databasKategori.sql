CREATE TABLE vegan(
id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
photo varchar(100) DEFAULT 'default.jpg',
name varchar(100) NOT NULL,
category varchar(100) NOT NULL,
type varchar(100) NOT NULL,
price INTEGER NOT NULL,
ingredients text NOT NULL,
description text NOT NULL
);

CREATE TABLE nonvegan(
id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
photo varchar(100) DEFAULT 'default.jpg',
name varchar(100) NOT NULL,
category varchar(100) NOT NULL,
type varchar(100) NOT NULL,
price INTEGER NOT NULL,
ingredients text NOT NULL,
description text NOT NULL
);

CREATE TABLE coldbeverages(
id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
photo varchar(100) DEFAULT 'default.jpg',
name varchar(100) NOT NULL,
category varchar(100) NOT NULL,
type varchar(100) NOT NULL,
price INTEGER NOT NULL,
ingredients text NOT NULL,
description text NOT NULL
);

CREATE TABLE hotbeverages(
id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
photo varchar(100) DEFAULT 'default.jpg',
name varchar(100) NOT NULL,
category varchar(100) NOT NULL,
type varchar(100) NOT NULL,
price INTEGER NOT NULL,
ingredients text NOT NULL,
description text NOT NULL
);


INSERT INTO nonvegan(photo, name, category, type, price, ingredients, description) VALUES('kottsoppa.jpg', 'Klassisk köttsoppa', 'Soppa', 'ej vegan', 30, 'Nötkött, potatis, morötter, tomater, lök', 'En värmande och härlig klassisk köttsoppa. Serveras med bröd.');

INSERT INTO nonvegan(photo, name, category, type, price, ingredients, description) VALUES('mousse.jpg', 'Chokladmousse med hasselnötter', 'Dessert', 'ej vegan', 20, 'Choklad, mascarponeost, hasselnötter, grädde, socker', 'Utsökt chokladmousse med hasselnötter och äkta grädde med 35%-fetthalt');

INSERT INTO nonvegan(photo, name, category, type, price, ingredients, description) VALUES('wellington.jpg', 'Biff Wellington', 'Varmrätt', 'ej vegan', 30, 'Nötkött, potatis, champinjoner, lök', 'Biff Wellington med svampfyllning. Serveras med potatis och rödvinssås.');

INSERT INTO nonvegan(photo, name, category, type, price, ingredients, description) VALUES('kottbullar.jpg', 'Köttbullar med pasta', 'Varmrätt', 'ej vegan', 25, 'Nötfärs, gul lök, vitlök, tomater, persilja, svartpeppar, parmesan', 'Köttbullar med stjärnanis i mustig tomatsås. Serveras med nykokt pasta, riven parmesan, nymald svartpeppar och ruccolasallad.');
INSERT INTO nonvegan(photo, name, category, type, price, ingredients, description) VALUES('laxrora.jpg', 'Varmrökt laxröra', 'Förrätt', 'ej vegan', 20, 'Varmrökt lax, färskost, vispgrädde, citronsaft, rågbröd', 'Varmrökt laxröra på rågbröd. Serveras med gräslök och citronbitar. Kombinationen färskost och rökt lax är synnerligen lyckad.');

INSERT INTO nonvegan(photo, name, category, type, price, ingredients, description) VALUES('rulltarta.jpg', 'Rulltårta', 'Bakverk', 'ej vegan', 10, 'Ägg, strösocker, vetemjöl, hallonsylt, grädde', 'En smarrig och riktigt god rulltårta med vispad grädde och hallonsylt');
INSERT INTO nonvegan(photo, name, category, type, price, ingredients, description) VALUES('kyckling.jpg', 'Chilibräserad kyckling', 'Varmrätt', 'ej vegan', 20, 'Kyckling, gul lök, vitlök, rosmarin, tomatpure, chilipeppar', 'Chilibräserad kyckling är en perfekt varmrätt att serveras vid finare tillfällen. Enkel och god rätt med mycket smak. Serveras med ris, potatis eller pasta.');


INSERT INTO vegan(photo, name, category, type, price, ingredients, description) VALUES('cheesecake.jpg', 'Jordgubbscheesecake', 'Dessert',  'vegan', 20, 'Jordgubbar, vit choklad, mynta, citron', 'Vegansk jordgubbscheesecake med vit choklad och botten gjord av digestive kex och en magiskt krämig fyllning med vit choklad och en hint av citron.');
INSERT INTO vegan(photo, name, category, type, price, ingredients, description) VALUES('pumpasoppa.jpg', 'Pumpasoppa', 'Soppa',  'vegan', 20, 'Pumpa, gul lök, vitlök, olivolja, kokosmjölk, timjan', 'Denna veganska krämiga pumpasoppa med kokosmjölk och rostad vitlök passar perfekt till kyliga höst- och vinterdagar.');


INSERT INTO vegan(photo, name, category, type, price, ingredients, description) VALUES('kokospannacotta.jpg', 'Vegansk pannacotta', 'Dessert',  'vegan', 25, 'Kokosmjölk, passionsfrukt, citronjuice', 'Vegansk pannacotta med kokosmjölk och passionsfrukt. En gräddig vegansk efterrätt till alla högtider!');
INSERT INTO vegan(photo, name, category, type, price, ingredients, description) VALUES('fetasallad.jpg', 'Sallad med fetaost', 'Sallad',  'vegan', 35, 'Sötpotatis, kikärtor, vitlök, olivolja, paprika', 'Fräsch sallad med vegansk fetaost, tomater, ugnsbakade paprikor och grekiska oliver. Salladen serveras med sötpotatis och kikärtor kryddade med vitlök och sesampasta.');

INSERT INTO nonvegan(photo, name, category, type, price, ingredients, description) VALUES('laxsallad.jpg', 'Sallad med varmrökt lax', 'Sallad', 'ej vegan', 20, 'Lax, sparris, avokado, rädisor, gurka', 'Sallad med varmrökt lax, avokado och sparris. En snabb, enkel och god sallad med varmrökt lax, sparris, rädisa, gurka och avokado som blandas med en dressing på färska kryddor och citron.');


INSERT INTO coldbeverages(photo, name, category, type, price, ingredients, description) VALUES('loka.jpg', 'Loka Crush', 'Vatten', 'Alkoholfri', 15, 'Vatten, fruktjuice', 'Loka Crush har fyra olika smaker: citron, päron, hallon och jordgubb. Loka Crush har inga konserveringsmedel, färgämnen eller sötningsmedel.');
INSERT INTO coldbeverages(photo, name, category, type, price, ingredients, description) VALUES('ramlosa.jpg', 'Ramlösa', 'Vatten', 'Alkoholfri', 15, 'Vatten, fruktjuice', 'Ramlösa har flera olika smaker: citrus, päron, mango, ananas, granatäpple, hallon, kiwi och svarta vinbär');