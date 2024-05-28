document.addEventListener("DOMContentLoaded", function() {
    var video1 = document.getElementById("background-video-1");
    var video2 = document.getElementById("background-video-2");
    var video3 = document.getElementById("background-video-3");

    // Crear el botón para reproducir el video 1
    var playButton1 = createPlayButton("video-container-1", "background-video-1");

    // Crear el botón para reproducir el video 2
    var playButton2 = createPlayButton("video-container-2", "background-video-2");

    // Crear el botón para reproducir el video 3
    var playButton3 = createPlayButton("video-container-3", "background-video-3");

    // Event listener para reproducir el video 1 al hacer clic en el botón
    playButton1.addEventListener("click", function() {
        video1.play();
        playButton1.style.display = "none"; // Ocultar el botón después de hacer clic
    });

    // Event listener para reproducir el video 2 al hacer clic en el botón
    playButton2.addEventListener("click", function() {
        video2.play();
        playButton2.style.display = "none"; // Ocultar el botón después de hacer clic
    });

    // Event listener para reproducir el video 3 al hacer clic en el botón
    playButton3.addEventListener("click", function() {
        video3.play();
        playButton3.style.display = "none"; // Ocultar el botón después de hacer clic
    });

    // Pausar el video 1 al hacer scroll
    window.addEventListener("scroll", function() {
        if (!isInViewport(video1)) {
            video1.pause();
            playButton1.style.display = "block"; // Mostrar el botón si el video sale de la vista
        }
    });

    // Pausar el video 2 al hacer scroll
    window.addEventListener("scroll", function() {
        if (!isInViewport(video2)) {
            video2.pause();
            playButton2.style.display = "block"; // Mostrar el botón si el video sale de la vista
        }
    });

    // Pausar el video 3 al hacer scroll
    window.addEventListener("scroll", function() {
        if (!isInViewport(video3)) {
            video3.pause();
            playButton3.style.display = "block"; // Mostrar el botón si el video sale de la vista
        }
    });

    // Función para crear el botón de reproducción
    function createPlayButton(containerId, videoId) {
        var container = document.getElementById(containerId);
        var playButton = document.createElement("button");
        playButton.textContent = "Reproducir Video";
        playButton.classList.add("play-button");
        container.appendChild(playButton);
        return playButton;
    }

    // Función para verificar si el elemento está en la vista
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});
