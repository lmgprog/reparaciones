

// Configuración de los copos de nieve
const snowContainer = document.querySelector('.snowfall');
const numSnowflakes = 100; // Número de copos

// Crear copos de nieve
for (let i = 0; i < numSnowflakes; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄'; // Icono del copo de nieve
    snowflake.style.left = Math.random() * 100 + 'vw'; // Posición horizontal aleatoria
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'; // Tamaño aleatorio
    snowflake.style.animationDuration = Math.random() * 5 + 5 + 's'; // Duración aleatoria de la caída
    snowflake.style.animationDelay = Math.random() * 5 + 's'; // Retraso aleatorio

    // Asignar la clase "shiny" aleatoriamente a algunos copos
    if (Math.random() < 0.2) { // 20% de probabilidad de ser brillante
        snowflake.classList.add('shiny');
    }

    snowContainer.appendChild(snowflake);
}


// Seleccionamos el botón de menú y la lista de navegación

    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    // Seleccionamos el icono de hamburguesa
    const hamburgerIcon = document.querySelector('.hamburger-icon');

    // Añadimos un evento para abrir/cerrar el menú al hacer clic en el botón
    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active'); // Muestra o esconde el menú
        hamburgerIcon.classList.toggle('active'); // Añade clase para animación del botón
    });



    

// apertura de los modales

        function openModal(id) {
            document.getElementById(id).style.display = 'block';
        }
        function closeModal(id) {
            document.getElementById(id).style.display = 'none';
        }










