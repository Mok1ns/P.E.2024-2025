        // Données du graphique
        const data = {
            labels: ["France", "USA", "Brésil", "Inde", "Nigeria"],
            datasets: [{
                label: "Accès à Internet (%)",
                data: [92, 89, 78, 52, 45], // Pourcentages fictifs
                backgroundColor: ["blue", "red", "green", "orange", "purple"]
            }]
        };

        // Configuration du graphique
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

        // Affichage du graphique
        new Chart(document.getElementById("internetChart"), config);