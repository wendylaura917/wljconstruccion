function mostrarContenido(seccion) {
    let contenido = '';

    // Definir el contenido según la sección seleccionada
    switch (seccion) {
        case 'quienesSomos':
            contenido = '<h1>Quienes Somos</h1><p>Contenido de la sección Quienes Somos.</p>';
            break;
        case 'mision':
            contenido = '<h1>Misión</h1><p>Contenido de la sección Misión.</p>';
            break;
        case 'vision':
            contenido = '<h1>Visión</h1><p>Contenido de la sección Visión.</p>';
            break;
        case 'proposito':
            contenido = '<h1>Nuestro Propósito</h1><p>Contenido de la sección Nuestro Propósito.</p>';
            break;
        case 'valores':
            contenido = '<h1>Valores</h1><p>Contenido de la sección Valores.</p>';
            break;
        default:
            contenido = '<p>Por favor, selecciona una opción.</p>';
    }

    // Cambiar el contenido del div con id 'contenido'
    document.getElementById('contenido').innerHTML = contenido;
}

function calcularCosto() {
    const materiales = parseFloat(document.getElementById('materiales').value) || 0;
    const manoObra = parseFloat(document.getElementById('manoObra').value) || 0;
    const otros = parseFloat(document.getElementById('otros').value) || 0;
    const contingencia = parseFloat(document.getElementById('contingencia').value) || 0;

    const subtotal = materiales + manoObra + otros;
    const extra = subtotal * (contingencia / 100);
    const total = subtotal + extra;

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.style.display = "block";
    resultadoDiv.innerHTML = `
        <strong>Resumen del Costo:</strong><br>
        Materiales: $${materiales.toFixed(2)}<br>
        Mano de Obra: $${manoObra.toFixed(2)}<br>
        Otros Gastos: $${otros.toFixed(2)}<br>
        Contingencia (${contingencia}%): $${extra.toFixed(2)}<br>
        <hr>
        <strong>Total Estimado: $${total.toFixed(2)}</strong>`;
}


// Gráfico de líneas - Crecimiento anual
new Chart(document.getElementById("lineChart"), {
    type: "line",
    data: {
        labels: [2018, 2019, 2020, 2021, 2022, 2023],
        datasets: [{
            label: "Crecimiento (%)",
            data: [3.5, 4.0, 2.8, 5.2, 6.0, 6.8],
            borderColor: "blue",
            backgroundColor: "rgba(0, 0, 255, 0.1)",
            fill: true,
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Gráfico de barras - Proyectos por municipio
new Chart(document.getElementById("barChart"), {
    type: "bar",
    data: {
        labels: ["Armenia", "Calarcá", "La Tebaida", "Montenegro", "Quimbaya"],
        datasets: [{
            label: "Proyectos",
            data: [120, 80, 45, 60, 40],
            backgroundColor: "green"
        }]
    },
    options: {
        responsive: true,
        indexAxis: 'y',
        scales: {
            x: {
                beginAtZero: true
            }
        }
    }
});

// Gráfico circular - Tipos de construcción
new Chart(document.getElementById("pieChart"), {
    type: "pie",
    data: {
        labels: ["Vivienda", "Comercial", "Industrial", "Infraestructura"],
        datasets: [{
            data: [60, 20, 10, 10],
            backgroundColor: ["#ff9999", "#66b3ff", "#99ff99", "#ffcc99"]
        }]
    },
    options: {
        responsive: true
    }
});




