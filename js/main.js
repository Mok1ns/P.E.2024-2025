const ctx = document.getElementById("internetChart").getContext("2d");

const data = {
    labels: ["USA", "Japon", "France", "Bangladesh", "Kenya", "Burundi"],
    datasets: [{
        label: "Accès à Internet (%)",
        data: [32, 19, 28, 12, 5, 2],
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
            index === selectedIndex ? "yellow" : "lightgray"
        );
        myChart.update();
    }
}

document.getElementById("pays").addEventListener("change", function () {
    highlightCountry(this.value);
});

document.getElementById("increase").addEventListener("click", () => {
    let pays = document.getElementById("pays").value.toLowerCase();
    let selectedIndex = myChart.data.labels.findIndex(label => label.toLowerCase() === pays);

    if (selectedIndex !== -1) {
        myChart.data.datasets[0].data[selectedIndex] = Math.min(myChart.data.datasets[0].data[selectedIndex] + 2, 100);
        myChart.update();
    }
});

document.getElementById("increase2").addEventListener("click", () => {
    let pays = document.getElementById("pays").value.toLowerCase();
    let selectedIndex = myChart.data.labels.findIndex(label => label.toLowerCase() === pays);

    if (selectedIndex !== -1) {
        myChart.data.datasets[0].data[selectedIndex] = Math.min(myChart.data.datasets[0].data[selectedIndex] + 3, 100);
        myChart.update();
    }
});

document.getElementById("increase3").addEventListener("click", () => {
    let pays = document.getElementById("pays").value.toLowerCase();
    let selectedIndex = myChart.data.labels.findIndex(label => label.toLowerCase() === pays);

    if (selectedIndex !== -1) {
        myChart.data.datasets[0].data[selectedIndex] = Math.min(myChart.data.datasets[0].data[selectedIndex] + 4, 100);
        myChart.update();
    }
});

document.getElementById("increase4").addEventListener("click", () => {
    let pays = document.getElementById("pays").value.toLowerCase();
    let selectedIndex = myChart.data.labels.findIndex(label => label.toLowerCase() === pays);

    if (selectedIndex !== -1) {
        myChart.data.datasets[0].data[selectedIndex] = Math.min(myChart.data.datasets[0].data[selectedIndex] + 5, 100);
        myChart.update();
    }
});

document.getElementById("increase5").addEventListener("click", () => {
    let pays = document.getElementById("pays").value.toLowerCase();
    let selectedIndex = myChart.data.labels.findIndex(label => label.toLowerCase() === pays);

    if (selectedIndex !== -1) {
        myChart.data.datasets[0].data[selectedIndex] = Math.min(myChart.data.datasets[0].data[selectedIndex] + 5, 100);
        myChart.update();
    }
});

document.getElementById("increase6").addEventListener("click", () => {
    let pays = document.getElementById("pays").value.toLowerCase();
    let selectedIndex = myChart.data.labels.findIndex(label => label.toLowerCase() === pays);

    if (selectedIndex !== -1) {
        myChart.data.datasets[0].data[selectedIndex] = Math.min(myChart.data.datasets[0].data[selectedIndex] + 5, 100);
        myChart.update();
    }
});

document.getElementById("increase7").addEventListener("click", () => {
    let pays = document.getElementById("pays").value.toLowerCase();
    let selectedIndex = myChart.data.labels.findIndex(label => label.toLowerCase() === pays);

    if (selectedIndex !== -1) {
        myChart.data.datasets[0].data[selectedIndex] = Math.min(myChart.data.datasets[0].data[selectedIndex] + 5, 100);
        myChart.update();
    }
});

document.getElementById("increase8").addEventListener("click", () => {
    let pays = document.getElementById("pays").value.toLowerCase();
    let selectedIndex = myChart.data.labels.findIndex(label => label.toLowerCase() === pays);

    if (selectedIndex !== -1) {
        myChart.data.datasets[0].data[selectedIndex] = Math.min(myChart.data.datasets[0].data[selectedIndex] + 5, 100);
        myChart.update();
    }
});

document.getElementById("increase9").addEventListener("click", () => {
    let pays = document.getElementById("pays").value.toLowerCase();
    let selectedIndex = myChart.data.labels.findIndex(label => label.toLowerCase() === pays);

    if (selectedIndex !== -1) {
        myChart.data.datasets[0].data[selectedIndex] = Math.min(myChart.data.datasets[0].data[selectedIndex] + 10, 100);
        myChart.update();
    }
});

document.getElementById("increase0").addEventListener("click", () => {
    let pays = document.getElementById("pays").value.toLowerCase();
    let selectedIndex = myChart.data.labels.findIndex(label => label.toLowerCase() === pays);

    if (selectedIndex !== -1) {
        myChart.data.datasets[0].data[selectedIndex] = Math.min(myChart.data.datasets[0].data[selectedIndex] + 10, 100);
        myChart.update();
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
        for (let i = 0; i < 4; i++) {
            let h5 = document.createElement("h5");
            content.appendChild(h5);
        }
        textes = content.querySelectorAll("h5");
    }

    let dataPays = {
        "usa": { img: "../image/USA.png", nom: "États-Unis", pib: "$21T", habitants: "331M" },
        "japon": { img: "../image/Japon.png", nom: "Japon", pib: "$5T", habitants: "126M" },
        "france": { img: "../image/France.png", nom: "France", pib: "$2.7T", habitants: "67M" },
        "bangladesh": { img: "../image/Bangladesh.png", nom: "Bangladesh", pib: "$0.4T", habitants: "166M" },
        "kenya": { img: "../image/Kenya.png", nom: "Kenya", pib: "$0.1T", habitants: "54M" },
        "burundi": { img: "../image/Burundi.png", nom: "Burundi", pib: "$3B", habitants: "12M" }
    };

    if (dataPays[pays]) {
        img.src = dataPays[pays].img;
        textes[0].textContent = `Nom du pays : ${dataPays[pays].nom}`;
        textes[1].textContent = `PIB : ${dataPays[pays].pib}`;
        textes[2].textContent = `Nombre d'habitants : ${dataPays[pays].habitants}`;
        textes[3].textContent = `Accès à Internet : ${myChart.data.datasets[0].data[selectedIndex]}%`;
    }
});
