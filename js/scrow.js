
    document.addEventListener("DOMContentLoaded", function() {
        const services = document.querySelectorAll('.single_service_area');

        const options = {
            root: null, // Usar a viewport do navegador
            rootMargin: '0px',
            threshold: 0.1 // 10% do elemento visível para ativar a classe
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Para parar de observar após a animação
                }
            });
        }, options);

        services.forEach(service => {
            observer.observe(service); // Observa cada serviço
        });
    });

