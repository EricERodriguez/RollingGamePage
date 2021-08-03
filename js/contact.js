let cargaRegion = document.getElementById("region");
let cargaPais = document.getElementById("pais");
let stringSearch = document.getElementById("field-search");

let region = ["África", "América", "Asia", "Europa"];
let pais = [
    { nombre: "Argentina", region: "América" },
    { nombre: "Brasil", region: "América" },
    { nombre: "Chile", region: "América" },
    { nombre: "Estados Unidos", region: "América" },
    { nombre: "México", region: "América" },
    { nombre: "Uruguay", region: "América" },
    { nombre: "Paraguay", region: "América" },
    { nombre: "Nigeria", region: "África" },
    { nombre: "Sudáfrica", region: "África" },
    { nombre: "Argelia", region: "África" },
    { nombre: "Egipto", region: "África" },
    { nombre: "Austria", region: "Europa" },
    { nombre: "España", region: "Europa" },
    { nombre: "Francia", region: "Europa" },
    { nombre: "Italia", region: "Europa" },
    { nombre: "Portugal", region: "Europa" },
    { nombre: "China", region: "Asia" },
    { nombre: "Japón", region: "Asia" },
    { nombre: "India", region: "Asia" },
    { nombre: "Tailandia", region: "Asia" },
];

var sucursales = [{
        nombre: "First Office RG",
        direccion: "Piedras 303, C1070 CABA",
        numero: "+541170780731",
        ubicacion: "Argentina",
    },
    {
        nombre: "RG Boxes",
        direccion: "Av. San Juan 2168, C1222 CABA",
        numero: "+541149426228",
        ubicacion: "Argentina",
    },
    {
        nombre: "RollingGames Pitch",
        direccion: "Av. Brasil 1401-1499, C1154AAY, C1154AAY CABA",
        numero: "+541143050231",
        ubicacion: "Argentina",
    },
    {
        nombre: "RollingGames Pitch Plus",
        direccion: "Dr. Enrique Finochietto 849, C1272 CABA",
        numero: "+541143071445",
        ubicacion: "Argentina",
    },

    {
        nombre: "Office RG Br",
        direccion: "St. de Administração Federal Sul Q 7 - Guará, Brasília - DF, 70297-400, Brasil",
        numero: "+556130307000",
        ubicacion: "Brasil",
    },
    {
        nombre: "Salao 7 de Setembro",
        direccion: "Trecho 1, Conjunto 36, Lote 24 S/n - Asa Norte, Brasília - DF, 70800-110, Brasil",
        numero: "+556138781100",
        ubicacion: "Brasil",
    },
    {
        nombre: "RollingGames Sede Nacional",
        direccion: "SHCS SQS 302 - Asa Sul, Brasilia - Federal District, 70297-400, Brasil",
        numero: "+556130395593",
        ubicacion: "Brasil",
    },
    {
        nombre: "Saldao Mano RG",
        direccion: "St. de Clubes Esportivos Sul Trecho 2 - Asa Sul, Brasília - DF, 70200-002, Brasil",
        numero: "+556132512121",
        ubicacion: "Brasil",
    },

    {
        nombre: "E-Commercial RG",
        direccion: "Matucana 501, Santiago, Región Metropolitana, Chile",
        numero: "+56942918742",
        ubicacion: "Chile",
    },
    {
        nombre: "RG Olimpia",
        direccion: "Portales 3530, Santiago, Estación Central, Región Metropolitana, Chile",
        numero: "+56226818656",
        ubicacion: "Chile",
    },
    {
        nombre: "RollingGames Pitch Ch",
        direccion: "Santiago, Peñalolén, Región Metropolitana, Chile",
        numero: "+56229397301",
        ubicacion: "Chile",
    },
    {
        nombre: "Champion Games",
        direccion: "Juan de Dios Vial Correa 4490, Penalolen, Peñalolén, Región Metropolitana, Chile",
        numero: "+56222988277",
        ubicacion: "Chile",
    },

    {
        nombre: "La Grande RG",
        direccion: "1837 M St NW, Washington, DC 20036, Estados Unidos",
        numero: "+12025589545",
        ubicacion: "Estados Unidos",
    },
    {
        nombre: "Rag and Bone",
        direccion: "101 N St NW, Washington, DC 20001, Estados Unidos",
        numero: "+12026983762",
        ubicacion: "Estados Unidos",
    },
    {
        nombre: "Luxembourg Pitch",
        direccion: "6400 Chillum Pl NW, Washington, DC 20012, Estados Unidos",
        numero: "+12028473755",
        ubicacion: "Estados Unidos",
    },
    {
        nombre: "RollingGames Central",
        direccion: "3408 Janet Rd, Silver Spring, MD 20906, Estados Unidos",
        numero: "+12406205492",
        ubicacion: "Estados Unidos",
    },

    {
        nombre: "Mesones Rolling",
        direccion: "Dr. Lavista 189, Doctores, Cuauhtémoc, 06720 Ciudad de México, CDMX, México",
        numero: "+525555880266",
        ubicacion: "México",
    },
    {
        nombre: "E-Vip",
        direccion: "C. Gral. Anaya 75, La Merced, Merced Balbuena, Venustiano Carranza, 15100 Ciudad de México, CDMX, México",
        numero: "+525557410002",
        ubicacion: "México",
    },
    {
        nombre: "Topacio Pitch",
        direccion: "Av. Circunvalación 1, Morelos, Venustiano Carranza, 15270 Ciudad de México, CDMX, México",
        numero: "+525557417506",
        ubicacion: "México",
    },
    {
        nombre: "Topacio Pitch Plus",
        direccion: "20 de Noviembre, Vista Hermosa, 54414 Villa Nicolás Romero, Méx., México",
        numero: "+525589929997",
        ubicacion: "México",
    },

    {
        nombre: "Color Text",
        direccion: "Obligado 1317, 11300 Montevideo, Departamento de Montevideo, Uruguay",
        numero: "+59891284724",
        ubicacion: "Uruguay",
    },
    {
        nombre: "Second Office RG",
        direccion: "Pte. Gral. Oscar Gestido 2576, 11300 Montevideo, Departamento de Montevideo, Uruguay",
        numero: "+59827080059",
        ubicacion: "Uruguay",
    },
    {
        nombre: "KFE E-Commerce",
        direccion: "Porongos 2351, 11800 Montevideo, Departamento de Montevideo, Uruguay",
        numero: "+59822064025",
        ubicacion: "Uruguay",
    },
    {
        nombre: "Topacio Pitch Uru",
        direccion: "Nueva Palmira 1905, 11800 Montevideo, Departamento de Montevideo, Uruguay",
        numero: "+59822094894",
        ubicacion: "Uruguay",
    },

    {
        nombre: "Galería Bonanza",
        direccion: "Av. Sta. Teresa 1827, Asunción, Paraguay",
        numero: "+595216594000",
        ubicacion: "Paraguay",
    },
    {
        nombre: "RimEc",
        direccion: "Avda. Santísima Trinidad 3164 esq. Bogota, Av Santísima Trinidad 3164, Asunción, Paraguay",
        numero: "+59521280212",
        ubicacion: "Paraguay",
    },
    {
        nombre: "Topacio Pitch Py",
        direccion: "PCMM+375, Asunción, Paraguay",
        numero: "+595981484038",
        ubicacion: "Paraguay",
    },
    {
        nombre: "E-Biggie",
        direccion: "2 de febrero, Luque, Paraguay",
        numero: "+595991822000",
        ubicacion: "Paraguay",
    },
    {
        nombre: "Taj Limited",
        direccion: "1 Memorial Drive, Central Business District 900211, Abuja, Nigeria",
        numero: "+2349038853059",
        ubicacion: "Nigeria",
    },
    {
        nombre: "Cedi Abuja Rolling",
        direccion: "suit 105, Durban Mall, Bangui St, Wuse 2 904101, Abuja, Nigeria",
        numero: "+2349076432290",
        ubicacion: "Nigeria",
    },
    {
        nombre: "Third Office RG",
        direccion: "2GWR+33R, 900103, Abuja, Nigeria",
        numero: "+2347030313244",
        ubicacion: "Nigeria",
    },
    {
        nombre: "Royal Devices",
        direccion: "Plot FH08, Karu Site AMAC, 900110, Abuja, Nigeria",
        numero: "+2347025089781",
        ubicacion: "Nigeria",
    },

    {
        nombre: "Programming Collage",
        direccion: "186 Lower Main Rd, Observatory, Cape Town, 7925, Sudáfrica",
        numero: "+27663363944",
        ubicacion: "Sudáfrica",
    },
    {
        nombre: "Huis Boxes",
        direccion: "Brooklyn, Cdad. del Cabo, 7441, Sudáfrica",
        numero: "+27219756794",
        ubicacion: "Sudáfrica",
    },
    {
        nombre: "Play Pitch",
        direccion: "Windermere, Cdad. del Cabo, 7405, Sudáfrica",
        numero: "+27215933050",
        ubicacion: "Sudáfrica",
    },
    {
        nombre: "SouthBit Data",
        direccion: "31 Batavia Rd, Ruyterwacht, Cape Town, 8001, Sudáfrica",
        numero: "+27215345340",
        ubicacion: "Sudáfrica",
    },

    {
        nombre: "King Baby Algerie",
        direccion: "1 Ave Rabia Mohamed, Kouba 16050, Argelia",
        numero: "+21323718542",
        ubicacion: "Argelia",
    },
    {
        nombre: "Data Belogbi",
        direccion: "lot j30 panorama Basri, Rue Hacéne El Basri, Hussein Dey 16000, Argelia",
        numero: "+21323767343",
        ubicacion: "Argelia",
    },
    {
        nombre: "S3D Ecole",
        direccion: "Rue Haouas Chabane, Algiers, Argelia",
        numero: "+213555559390",
        ubicacion: "Argelia",
    },
    {
        nombre: "ASMOS Consulting",
        direccion: "Route nationale n°05 cinq maisons، Mohammadia 16058, Argelia",
        numero: "+21321823838",
        ubicacion: "Argelia",
    },

    {
        nombre: "Beggah",
        direccion: "ميدان لاظوغلى، السيدة زينب،، Cairo Governorate, Egipto",
        numero: "+20225777444",
        ubicacion: "Egipto",
    },
    {
        nombre: "El Masry Vip",
        direccion: "Mamdouh Salem, Gazirat Embabah, Imbaba, Giza Governorate, Egipto",
        numero: "+20233129490",
        ubicacion: "Egipto",
    },
    {
        nombre: "Nile City",
        direccion: "River Street - Zamalek القاهرة, 11432, Egipto",
        numero: "+201112246256",
        ubicacion: "Egipto",
    },
    {
        nombre: "Semsema Pitch",
        direccion: "289 شارع السودان، Mit Akaba, Agouza, Giza Governorate, Egipto",
        numero: "+20233021929",
        ubicacion: "Egipto",
    },
    {
        nombre: "Scotch Club",
        direccion: "Parkring 10, 1010 Wien, Austria",
        numero: "+436767607955",
        ubicacion: "Austria",
    },
    {
        nombre: "Steffl Viena",
        direccion: "Friedrichstraße 12, 1010 Wien, Austria",
        numero: "+4315875307",
        ubicacion: "Austria",
    },
    {
        nombre: "Kaisergruft Pitch",
        direccion: "Tegetthoffstraße 2",
        numero: "+431512685388",
        ubicacion: "Austria",
    },
    {
        nombre: "Kaisergruft Pitch Plus",
        direccion: "Kärntner Str. 33, 1010 Wien, Austria",
        numero: "+431533041629",
        ubicacion: "Austria",
    },
    {
        nombre: "Paredes REC",
        direccion: "C. de Atocha, 30, 28012 Madrid, España",
        numero: "+34914296663",
        ubicacion: "España",
    },
    {
        nombre: "Citynizer Plaza",
        direccion: "Calle de Juanelo, 17, 28012 Madrid, España",
        numero: "+34915395630",
        ubicacion: "España",
    },
    {
        nombre: "TASCHEN",
        direccion: "Calle del Barquillo, 30, 28004 Madrid, España",
        numero: "+34916033042",
        ubicacion: "España",
    },
    {
        nombre: "Veinti7 E-Commerce",
        direccion: "Calle de San Mateo, 26, 28004 Madrid, España",
        numero: "+34692348284",
        ubicacion: "España",
    },
    {
        nombre: "FREE-P-STAR",
        direccion: "61 Rue de la Verrerie, 75004 Paris, Francia",
        numero: "+33142780076",
        ubicacion: "Francia",
    },
    {
        nombre: "Tabac de Rivoli",
        direccion: "44 Rue de Rivoli, 75004 Paris, Francia",
        numero: "+33972226596",
        ubicacion: "Francia",
    },
    {
        nombre: "Odeón",
        direccion: "104 Bd Saint-Germain, 75006 Paris, Francia",
        numero: "+33187760330",
        ubicacion: "Francia",
    },
    {
        nombre: "Zadkine Pitch",
        direccion: "100bis Rue d-Assas, 75006 Paris, Francia",
        numero: "+33155427720",
        ubicacion: "Francia",
    },
    {
        nombre: "TheCourt",
        direccion: "Via Labicana, 125, 00184 Roma RM, Italia",
        numero: "+390669354581",
        ubicacion: "Italia",
    },
    {
        nombre: "AMA Data",
        direccion: "Via Marco Aurelio, 40, 00184 Roma RM, Italia",
        numero: "+390670450630",
        ubicacion: "Italia",
    },
    {
        nombre: "Arco di Dolabella",
        direccion: "Via di S. Paolo della Croce, 00184 Roma RM, Italia",
        numero: "+39060608",
        ubicacion: "Italia",
    },
    {
        nombre: "Grandi Scuole RG",
        direccion: "Via della Ferratella in Laterano, 25, 00184 Roma RM, Italia",
        numero: "+390670495114",
        ubicacion: "Italia",
    },
    {
        nombre: "Port Office RG",
        direccion: "Rua do Zaire 40B, 1170-096 Lisboa, Portugal",
        numero: "+351212412542",
        ubicacion: "Portugal",
    },
    {
        nombre: "Quionga",
        direccion: "R. Heróis de Quionga 69, 1170-191 Lisboa, Portugal",
        numero: "+351218148541",
        ubicacion: "Portugal",
    },
    {
        nombre: "Radical Pitch",
        direccion: "Av. Gen. Roçadas 48A, 1170-158 Lisboa, Portugal",
        numero: "+351218145210",
        ubicacion: "Portugal",
    },
    {
        nombre: "Anjos70",
        direccion: "Regueirão Anjos 70, 1150-020 Lisboa, Portugal",
        numero: "+354258145652",
        ubicacion: "Portugal",
    },
    {
        nombre: "Ping An Financer",
        direccion: "Futian CBD, Futian, Shenzhen, China",
        numero: "0644841245415",
        ubicacion: "China",
    },
    {
        nombre: "Polison RG",
        direccion: "Xinwen Rd, Futian District, Shenzhen, Guangdong Province, China",
        numero: "102412454",
        ubicacion: "China",
    },
    {
        nombre: "Aiziji",
        direccion: "Shennan Ave, Xiangmihu, Futian District, Shenzhen, Guangdong Province, China",
        numero: "0454561651",
        ubicacion: "China",
    },
    {
        nombre: "Baoji",
        direccion: "Meihua Rd, Meilin, Futian District, Shenzhen, Guangdong Province, China",
        numero: "03546516",
        ubicacion: "China",
    },
    {
        nombre: "Kids Osaka",
        direccion: "2 Chome-1-7 Ogimachi, Kita Ward, Osaka, 530-0025, Japón",
        numero: "+81663116601",
        ubicacion: "Japón",
    },
    {
        nombre: "Mirinomiya RG",
        direccion: "2 Chome-1-88 Morinomiya, Joto Ward, Osaka, 536-0025, Japón",
        numero: "+81669690111",
        ubicacion: "Japón",
    },
    {
        nombre: "Kōkoku High",
        direccion: "1 Chome-4-26 Teradacho, Tennoji Ward, Osaka, 543-0045, Japón",
        numero: "+81667798151",
        ubicacion: "Japón",
    },
    {
        nombre: "Osaka Shiritsu Tajima Junior",
        direccion: "5 Chome-23-7 Tajima, Ikuno Ward, Osaka, 544-0011, Japón",
        numero: "+81667581021",
        ubicacion: "Japón",
    },
    {
        nombre: "Asia House",
        direccion: "KG Marg, 1688 Barracks, New Delhi, Delhi 110001, India",
        numero: "+911123385466",
        ubicacion: "India",
    },
    {
        nombre: "Shangri-La",
        direccion: "19, Ashoka Rd, Janpath, Connaught Place, New Delhi, Delhi 110001, India",
        numero: "+911141191919",
        ubicacion: "India",
    },
    {
        nombre: "Paharganj",
        direccion: "Multani Dhanda, Paharganj, New Delhi, Delhi 110055, India",
        numero: "+914251191719",
        ubicacion: "India",
    },
    {
        nombre: "National Archives",
        direccion: "Janpath Road, Opposite Indira Gandhi National Centre for the Arts, near Shastri Bhavan, New Delhi, Delhi 110001, India",
        numero: "+911123384797",
        ubicacion: "India",
    },
    {
        nombre: "Wat Arun",
        direccion: "158 Thanon Wang Doem, Wat Arun, Bangkok Yai, Bangkok 10600, Tailandia",
        numero: "+6628912185",
        ubicacion: "Tailandia",
    },
    {
        nombre: "Nan Ah Pitch",
        direccion: "323 Prachathipok Road 323 Somdet Chaopraya Klongsan Bangkok 10600, Tailandia",
        numero: "+6624395100",
        ubicacion: "Tailandia",
    },
    {
        nombre: "Tha Din Daeng",
        direccion: "163 Tha Din Daeng Rd, Khwaeng Somdet Chao Phraya, Khlong San, Bangkok 10600, Tailandia",
        numero: "+6624383738",
        ubicacion: "Tailandia",
    },
    {
        nombre: "Pra Dipat",
        direccion: "1444 97 Thanon Nakhon Chaisi Rd, Thanon Nakhon Chai Si, Dusit District, Bangkok 10300, Tailandia",
        numero: "+6626692291",
        ubicacion: "Tailandia",
    },
];

console.log(sucursales[0].nombre);

cargaPais.addEventListener("change", function() {
    let valorSucur = cargaPais.value;
    console.log(valorSucur);
    let sucur = filtrarSucursalPorPais(valorSucur);
    console.log(sucur);
    var lista = document.getElementById("frame1");
    lista.innerHTML = "";
    console.log(lista);
    sucur.forEach(function(data, index) {
        var linew = document.createElement("p");
        var espacio = document.createElement("br");
        var espacio2 = document.createElement("br");
        var textSpanSucu = document.createTextNode(
            "Sucursal: " + data.nombre
        )
        var textSpanDirec = document.createTextNode(
            "Dirección: " + data.direccion
        )
        var contenido = document.createTextNode(
            "Teléfono: " +
            data.numero
        );
        linew.appendChild(textSpanSucu);
        linew.appendChild(espacio);
        linew.appendChild(textSpanDirec);
        linew.appendChild(espacio2);
        lista.appendChild(linew);
        linew.appendChild(contenido);
    });
});

cargarRegion();

stringSearch.addEventListener("change", function() {
    let sucur = filtrarPorTexto(stringSearch.value);
    console.log(sucur);
    var lista = document.getElementById("frame1");
    lista.innerHTML = "";
    console.log(lista);
    sucur.forEach(function(data, index) {
        var linew = document.createElement("p");
        var espacio = document.createElement("br");
        var espacio2 = document.createElement("br");
        var textSpanSucu = document.createTextNode(
            "Sucursal: " + data.nombre
        )
        var textSpanDirec = document.createTextNode(
            "Dirección: " + data.direccion
        )
        var contenido = document.createTextNode(
            "Teléfono: " +
            data.numero
        );
        linew.appendChild(textSpanSucu);
        linew.appendChild(espacio);
        linew.appendChild(textSpanDirec);
        linew.appendChild(espacio2);
        lista.appendChild(linew);
        linew.appendChild(contenido);
    });
});

cargaRegion.addEventListener("change", function() {
    let valor = cargaRegion.value;
    let paises = filtrarPaisPorRegion(valor);
    let elementos = "<option selected value='0'>--Seleccione--</option>";
    for (let i = 0; i < paises.length; i++) {
        elementos +=
            '<option value="' +
            paises[i].nombre +
            '">' +
            paises[i].nombre +
            "</option>";
    }
    let comboPais = document.getElementById("pais");
    comboPais.innerHTML = elementos;
});

function filtrarPaisPorRegion(nombreReg) {
    let paises = pais.filter((paises) => paises.region == nombreReg);
    return paises;
}

function filtrarSucursalPorPais(sucur) {
    let negocios = sucursales.filter((c) => c.ubicacion == sucur);
    return negocios;
}

function filtrarPorTexto(texto) {
    let negocios = sucursales.filter((c) => c.nombre.includes(texto));
    console.log(negocios);
    return negocios;
}

function cargarRegion() {
    let continentes = document.getElementById("region");
    let elementos = "<option selected value='0'>--Seleccione--</option>";
    for (i = 0; i < region.length; i++) {
        elementos += '<option value="' + region[i] + '">' + region[i] + "</option>";
    }
    continentes.innerHTML = elementos;
}