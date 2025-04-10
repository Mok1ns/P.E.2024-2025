

const ctx = document.getElementById("internetChart").getContext("2d");



let WLC = {
    "usa": 130000,
    "japon": 80000,
    "france": 78000,
    "bangladesh": 22000,
    "kenya": 30000,
    "burundi": 18000
};
let data_centers = {
    "usa": 2000,  // Example value for USA
    "japon": 230,  // Example value for Japan
    "france": 300,  // Example value for France
    "bangladesh": 70,  // Example value for Bangladesh
    "kenya": 50,  // Example value for Kenya
    "burundi": 10  // Example value for Burundi
};


let routeurs = {
    "usa": 160000000,  // Updated from dataPays
    "japon": 50000000,  // Updated from dataPays
    "france": 40000000,  // Updated from dataPays
    "bangladesh": 10000000,  // Updated from dataPays
    "kenya": 4000000,  // Updated from dataPays
    "burundi": 1200000  // Updated from dataPays
};

let repeteurs = {
    "usa": 200000,  // Updated from dataPays
    "japon": 120000,  // Updated from dataPays
    "france": 135000,  // Updated from dataPays
    "bangladesh": 13000,  // Updated from dataPays
    "kenya": 20000,  // Updated from dataPays
    "burundi": 6000  // Updated from dataPays
};

let drones = {
    "usa": 100,  // Updated from dataPays
    "japon": 300,  // Updated from dataPays
    "france": 250,  // Updated from dataPays
    "bangladesh": 400,  // Updated from dataPays
    "kenya": 650,  // Updated from dataPays
    "burundi": 400  // Updated from dataPays
};

let ingenieurs = {
    "usa": 350000,  // Updated from dataPays
    "japon": 323000,  // Updated from dataPays
    "france": 187000,  // Updated from dataPays
    "bangladesh": 27000,  // Updated from dataPays
    "kenya": 14000,  // Updated from dataPays
    "burundi": 11500  // Updated from dataPays
};

let cybercafes = {
    "usa": 2000,  // Updated from dataPays
    "japon": 1200,  // Updated from dataPays
    "france": 600,  // Updated from dataPays
    "bangladesh": 80,  // Updated from dataPays
    "kenya": 90,  // Updated from dataPays
    "burundi": 70  // Updated from dataPays
};

let satellites = {
    "usa": 8500,  // Updated from dataPays
    "japon": 900,  // Updated from dataPays
    "france": 800,  // Updated from dataPays
    "bangladesh": 80,  // Updated from dataPays
    "kenya": 55,  // Updated from dataPays
    "burundi": 10  // Updated from dataPays
};

let fibre_optique = {
    "usa": 1,  // Updated from dataPays
    "japon": 1,  // Updated from dataPays
    "france": 1,  // Updated from dataPays
    "bangladesh": 1,  // Updated from dataPays
    "kenya": 1,  // Updated from dataPays
    "burundi": 0  // Updated from dataPays
};

let alacinqg = {
    "usa": 1,  // Updated from dataPays
    "japon": 1,  // Updated from dataPays
    "france": 1,  // Updated from dataPays
    "bangladesh": 0,  // Updated from dataPays
    "kenya": 1,  // Updated from dataPays
    "burundi": 0  // Updated from dataPays
};



const data = {
    labels: ["USA", "Japon", "France", "Bangladesh", "Kenya", "Burundi"],
    datasets: [{
        label: "Accès à Internet (%)",
        data: [97, 92, 88, 16, 15, 13],
        backgroundColor: ["blue", "red", "green", "orange", "purple", "grey"]
    }]
};


const config = {
    type: "bar",
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
};

let myChart = new Chart(ctx, config);

function highlightCountry(country) {
    let selectedIndex = myChart.data.labels.findIndex(label => label.toLowerCase() === country.toLowerCase());

    if (selectedIndex !== -1) {
        myChart.data.datasets[0].backgroundColor = myChart.data.labels.map((label, index) =>
            index === selectedIndex ? "cyan" : "lightgray"
        );
        myChart.update();
    }
}


document.getElementById("pays").addEventListener("change", function () {
    highlightCountry(this.value);
});

function updateInfo(country) {
    let pays = country.toLowerCase();
    let content = document.getElementById("content");
    let textes = content.querySelectorAll("h5");

    

    // Mise à jour du nombre de WLC
    if (WLC[pays] !== undefined) {
        let wlcElement = textes[3]; // Trouver l'élément pour WLC (par exemple, dans la première position)
        wlcElement.textContent = `Nombre de WLC : ${WLC[pays]}`;
    }

    // Mise à jour du nombre de data centers
    if (data_centers[pays] !== undefined) {
        let dataCentersElement = textes[4]; // Trouver l'élément pour data centers (par exemple, dans la cinquième position)
        dataCentersElement.textContent = `Nombre de data centers : ${data_centers[pays]}`;
    }

    // Mise à jour du nombre de routeurs
    if (routeurs[pays] !== undefined) {
        let routeursElement = textes[5]; // Trouver l'élément pour routeurs (par exemple, dans la deuxième position)
        routeursElement.textContent = `Nombre de routeurs : ${routeurs[pays]}`;
    }


    if (repeteurs[pays] !== undefined) {
        let repeteursElement = textes[6]; // Trouver l'élément pour ingénieurs (par exemple, dans la huitième position)
        repeteursElement.textContent = `Nombre de répéteurs : ${repeteurs[pays]}`;   
    }


    if (drones[pays] !== undefined) {
        let dronesElement = textes[7]; // Trouver l'élément pour drones (par exemple, dans la sixième position)
        dronesElement.textContent = `Nombre de drones : ${drones[pays]}`;
    }
    
    // Mise à jour du nombre d'ingénieurs
    if (ingenieurs[pays] !== undefined) {
        let ingenieursElement = textes[8]; // Trouver l'élément pour ingénieurs (par exemple, dans la huitième position)
        ingenieursElement.textContent = `Nombre d'ingénieurs : ${ingenieurs[pays]}`;
    } 

    // Mise à jour du nombre de cybercafés
    if (cybercafes[pays] !== undefined) {
        let cybercafesElement = textes[9]; // Trouver l'élément pour cybercafés (par exemple, dans la septième position)
        cybercafesElement.textContent = `Nombre de cybercafés : ${cybercafes[pays]}`;
    }

    

    // Mise à jour du nombre de satellites
    if (satellites[pays] !== undefined) {
        let satellitesElement = textes[10]; // Trouver l'élément pour satellites (par exemple, dans la quatrième position)
        satellitesElement.textContent = `Nombre de satellites : ${satellites[pays]}`;
    }

    if (fibre_optique[pays] !== undefined) {
        let fibre_optiqueElement = textes[11]; // Trouver l'élément pour ingénieurs (par exemple, dans la huitième position)
        fibre_optiqueElement.textContent = `Fibre Optique : ${fibre_optique[pays] === 1 ? "Oui" : "Non"}`;
    }

    if (alacinqg[pays] !== undefined) {
        let alacinqgElement = textes[12]; // Trouver l'élément pour ingénieurs (par exemple, dans la huitième position)
        alacinqgElement.textContent = `Alacinqg : ${alacinqg[pays] === 1 ? "Oui" : "Non"}`;
    }
    let score_cg = calculerX(pays);  
    let  pourcentage_brut= calculImage(score_cg); 
        
    let pourcentage_arrondi = pourcentage_brut.toFixed(2); 
    pourcentage_arrondi  = parseFloat(pourcentage_arrondi ); 
 
    if (pourcentage_arrondi !== undefined) {
        let cinqgElement = textes[13]; 
        cinqgElement.textContent = `Accès à Internet ${pourcentage_arrondi}%`;
    }
    disable_button(pays);
}

function disable_button(pays){
    if (alacinqg[pays]==0){
        document.getElementById("increase0").className = "";
        document.getElementById("increase0").disabled = false;
    }
    if (alacinqg[pays]==1){
        document.getElementById("increase0").classList.add("desactivated")
        document.getElementById("increase0").disabled = true;
    }
    if (fibre_optique[pays]==0){
        document.getElementById("increase9").className = "";
        document.getElementById("increase9").disabled = false;
    }
    if (fibre_optique[pays]==1){
        document.getElementById("increase9").classList.add("desactivated")
        document.getElementById("increase9").disabled = true;
    }
}


function calculerX(pays){
    pays = pays.toLowerCase();

    let x =
    400000 * (satellites[pays] || 0) +
    10 * (WLC[pays] || 0) +
    12 * (repeteurs[pays] || 0) +
    25 * (drones[pays] || 0) +
    100000 * (data_centers[pays] || 0) +
    15 * (ingenieurs[pays] || 0) +
    (routeurs[pays] || 0) +
    500 * (cybercafes[pays] || 0);

    if (fibre_optique[pays] === 1 && alacinqg[pays] === 1) {
        x *= 3; // Par exemple, si les deux sont à 1, on multiplie par 3
    }

    if (fibre_optique[pays] === 1 && alacinqg[pays] === 0) {
        x *= 2; // Par exemple, si les deux sont à 1, on multiplie par 3
    }

    if (fibre_optique[pays] === 0 && alacinqg[pays] === 1) {
        x *= 1,5; // Par exemple, si les deux sont à 1, on multiplie par 3
    }

    return x;
}

function calculImage(x) {
    // Calcul de l'image selon la formule fournie
    let result = 92 / (1 + Math.exp(-3.93 * Math.pow(10, -9) * (x - 604064887.4))) + 5;
    return result;
}

function increaseRessource(resourceName, country, amount) {
    let pays = country.toLowerCase();
    if (resourceName[pays] !== undefined) {
        resourceName[pays] += amount;
    }
    updateInfo(pays);
}
function actualize_graphic(button_selected,amount){
    let pays = document.getElementById("pays").value.toLowerCase();
    let selectedIndex = myChart.data.labels.findIndex(label => label.toLowerCase() === pays);

    if (selectedIndex !== -1) {
        
        increaseRessource(button_selected, pays, amount);
        // Recalculer le score et l'image
        let score_wlc = calculerX(pays);  // Recalculer la valeur de X après l'augmentation
        let pd_wlc = calculImage(score_wlc);  // Calculer l'image
        // Arrondir la valeur calculée au dixième près
        let pdArrondi_wlc = pd_wlc.toFixed(2);  // Arrondir à un chiffre après la virgule
        pdArrondi_wlc = parseFloat(pdArrondi_wlc); // Convertir la chaîne arrondie en nombre

        // Mettre à jour le graphique avec la nouvelle valeur arrondie
        myChart.data.datasets[0].data[selectedIndex] = pdArrondi_wlc; // Mettre à jour la valeur du dataset
        myChart.update();  // Mettre à jour le graphique
    }
}
document.getElementById("increase").addEventListener("click", () => {
    let button_selected = WLC;
    actualize_graphic(button_selected,100000);
});

document.getElementById("increase2").addEventListener("click", () => {
    let button_selected = data_centers;
    actualize_graphic(button_selected,50);
});

document.getElementById("increase3").addEventListener("click", () => {
    let button_selected = routeurs;
    actualize_graphic(button_selected,120000);
});

document.getElementById("increase4").addEventListener("click", () => {
    let button_selected = repeteurs;
    actualize_graphic(button_selected,150000);
});

document.getElementById("increase5").addEventListener("click", () => {
    let button_selected = drones;
    actualize_graphic(button_selected,800);
});

document.getElementById("increase6").addEventListener("click", () => {
    let button_selected = ingenieurs;
    actualize_graphic(button_selected,25000);
});

document.getElementById("increase7").addEventListener("click", () => {
    let button_selected = cybercafes;
    actualize_graphic(button_selected,1000);
});

document.getElementById("increase8").addEventListener("click", () => {
    let button_selected = satellites;
    actualize_graphic(button_selected,15);
});

document.getElementById("increase9").addEventListener("click", () => {
    let pays = document.getElementById("pays").value.toLowerCase();
    let button_selected = fibre_optique;
    if (button_selected[pays]==1){
        actualize_graphic(button_selected,0);
    }
    if (fibre_optique[pays]==0){
        actualize_graphic(button_selected,1);
        }
});

document.getElementById("increase0").addEventListener("click", () => {
    let pays = document.getElementById("pays").value.toLowerCase();
    let button_selected = alacinqg;
    console.log(alacinqg[pays]);
    if (alacinqg[pays]==1){
        actualize_graphic(button_selected,0);
    }
    if (alacinqg[pays]==0){
        actualize_graphic(button_selected,1);
    }
});

document.getElementById("toggle").addEventListener("click", () => {
    let content = document.getElementById("content");
    let pays = document.getElementById("pays").value.toLowerCase();
    if (!pays) return;
    let selectedIndex = myChart.data.labels.findIndex(label => label.toLowerCase() === pays);
    if (selectedIndex === -1) return;
    let img = content.querySelector("img");
    if (!img) {
        img = document.createElement("img");
        content.prepend(img);
    }
    img.style.width = "100px";
    img.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.5)";

    let textes = content.querySelectorAll("h5");
    if (textes.length === 0) {
        for (let i = 0; i < 14; i++) {
            let h5 = document.createElement("h5");
            content.appendChild(h5);
        }
        textes = content.querySelectorAll("h5");
    }
    disable_button(pays);

    let dataPays = {
        "usa": { 
            img: "../image/USA.png", 
            nom: "USA", 
            pib: "$27720000000", 
            habitants: "341000000", 
            routeurs: "160000000", 
            WLC: "130000", 
            data_centers: "2000", 
            repeteurs: "200000", 
            drones: "100", 
            cybercafes: "2000", 
            ingenieurs: "350000", 
            satellites: "8500", 
            fibre_optique: "Oui", 
            alacinqg: "Oui"
        },
        "japon": { 
            img: "../image/Japon.png", 
            nom: "Japon", 
            pib: "$4204000000", 
            habitants: "125000000", 
            routeurs: "50000000", 
            WLC: "80000", 
            data_centers: "230", 
            repeteurs: "120000", 
            drones: "300", 
            cybercafes: "1200", 
            ingenieurs: "323000", 
            satellites: "900", 
            fibre_optique: "Oui", 
            alacinqg: "Oui"
        },
        "france": { 
            img: "../image/France.png", 
            nom: "France", 
            pib: "$3052000000", 
            habitants: "68000000", 
            routeurs: "40000000", 
            WLC: "78000", 
            data_centers: "300", 
            repeteurs: "135000", 
            drones: "250", 
            cybercafes: "600", 
            ingenieurs: "187000", 
            satellites: "800", 
            fibre_optique: "Oui", 
            alacinqg: "Oui"
        },
        "bangladesh": { 
            img: "../image/Bangladesh.png", 
            nom: "Bangladesh", 
            pib: "$437000000", 
            habitants: "171000000", 
            routeurs: "10000000", 
            WLC: "22000", 
            data_centers: "70", 
            repeteurs: "13000",  
            drones: "400", 
            cybercafes: "80", 
            ingenieurs: "27000", 
            satellites: "80", 
            fibre_optique: "Oui", 
            alacinqg: "Non"
        },
        "kenya": { 
            img: "../image/Kenya.png", 
            nom: "Kenya", 
            pib: "$108000000", 
            habitants: "55340000", 
            routeurs: "4000000", 
            WLC: "30000", 
            data_centers: "50", 
            repeteurs: "20000", 
            drones: "650", 
            cybercafes: "90", 
            ingenieurs: "14000", 
            satellites: "55", 
            fibre_optique: "Oui", 
            alacinqg: "Oui"
        },
        "burundi": { 
            img: "../image/Burundi.png", 
            nom: "Burundi", 
            pib: "$2640000", 
            habitants: "13690000", 
            routeurs: "1200000", 
            WLC: "18000", 
            data_centers: "10", 
            repeteurs: "6000",  
            drones: "400", 
            cybercafes: "70", 
            ingenieurs: "11500", 
            satellites: "10", 
            fibre_optique: "Non", 
            alacinqg: "Non"
        }


    };
    if (dataPays[pays]) {
        img.src = dataPays[pays].img;
        textes[0].textContent = `Nom du pays : ${dataPays[pays].nom}`;
        textes[1].textContent = `PIB : ${dataPays[pays].pib}`;
        textes[2].textContent = `Nombre d'habitants : ${dataPays[pays].habitants}`;
        textes[3].textContent = `Nombre de WLC : ${dataPays[pays].WLC}`;
        textes[4].textContent = `Nombre de data centers : ${dataPays[pays].data_centers}`;
        textes[5].textContent = `Nombre de routeurs : ${dataPays[pays].routeurs}`;
        textes[6].textContent = `Nombre de répéteurs : ${dataPays[pays].repeteurs}`;
        textes[7].textContent = `Nombre de drones : ${dataPays[pays].drones}`;
        textes[9].textContent = `Nombre d'ingénieurs : ${dataPays[pays].ingenieurs}`;
        textes[8].textContent = `Nombre de cybercafés : ${dataPays[pays].cybercafes}`;
        textes[10].textContent = `Nombre de satellites : ${dataPays[pays].satellites}`;
        textes[11].textContent = `Fibre Optique : ${dataPays[pays].fibre_optique}`;
        textes[12].textContent = `Alacinqg : ${dataPays[pays].alacinqg}`;
        textes[13].textContent = `Accès à Internet : ${myChart.data.datasets[0].data[selectedIndex]}%`;
        updateInfo(pays);
    }

});