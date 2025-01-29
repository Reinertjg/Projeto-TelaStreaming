
// Filme Section

const tituloFilme = document.getElementById("titulo__filme");
const imagensFilme = document.querySelectorAll(".filme__imagem");

const observerFilme = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            imagensFilme.forEach(imagem => {
                const delay = Math.random() * 1; // Atraso aleatório para cada imagem (em segundos)
                // Aplica o delay aleatório antes de adicionar a classe "visivel"
                setTimeout(() => {
                    imagem.classList.add("visivel");
                }, delay * 500  ); // Multiplica por 1000 para converter para milissegundos
            });
        }
    });
}, { threshold: 0.5 });

observerFilme.observe(tituloFilme);

// Serie Section

const tituloSerie = document.getElementById("titulo__serie");
const imagensSerie = document.querySelectorAll(".serie__imagem");

const observerSerie = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            imagensSerie.forEach(imagem => {
                const delay = Math.random() * 1; // Atraso aleatório para cada imagem (em segundos)
                // Aplica o delay aleatório antes de adicionar a classe "visivel"
                setTimeout(() => {
                    imagem.classList.add("visivel");
                }, delay * 500  ); // Multiplica por 1000 para converter para milissegundos
            });
        }
    });
}, { threshold: 0.5 });

observerSerie.observe(tituloSerie);

// Stream Section

const tituloStream = document.getElementById("titulo__stream");
const imagensStream = document.querySelectorAll(".stream__imagem");

const observerStream = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            imagensStream.forEach(imagem => {
                const delay = Math.random() * 1; // Atraso aleatório para cada imagem (em segundos)
                // Aplica o delay aleatório antes de adicionar a classe "visivel"
                setTimeout(() => {
                    imagem.classList.add("visivel");
                }, delay * 500  ); // Multiplica por 1000 para converter para milissegundos
            });
        }
    });
}, { threshold: 0.5 });

observerStream.observe(tituloStream);