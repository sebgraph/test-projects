// Animación iconos

const iconoJuega = document.getElementsByClassName("icono-juega"),
      iconoAprende = document.getElementsByClassName("icono-aprende"),
      iconoPrueba = document.getElementsByClassName("icono-prueba");            


function animacionJuega(iconoJuega){
    const animation = bodymovin.loadAnimation({
        container: iconoJuega,
        renderer: 'svg',
        loop: 2,
        autoplay: true,
        path: './assets/icono_juega.json'
        });

    iconoJuega.addEventListener("mouseenter", function() {
        animation.play();
      });
      iconoJuega.addEventListener("mouseleave", function() {
        animation.stop();
      });
     }

function animacionAprende(iconoAprende){
        const animation = bodymovin.loadAnimation({
            container: iconoAprende,
            renderer: 'svg',
            loop: 2,
            autoplay: true,
            path: './assets/icono_aprende.json'
            });
        iconoAprende.addEventListener("mouseenter", function() {
            animation.play();
          });
          iconoAprende.addEventListener("mouseleave", function() {
            animation.stop();
          });
    }

function animacionPrueba(iconoPrueba){
        const animation = bodymovin.loadAnimation({
            container: iconoPrueba,
            renderer: 'svg',
            loop: 2,
            autoplay: true,
            path: './assets/icono_prueba.json'
            });
        iconoPrueba.addEventListener("mouseenter", function() {
            animation.play();
          });
          iconoPrueba.addEventListener("mouseleave", function() {
            animation.stop();
          });
    }



     for (let i = 0; i < iconoJuega.length; i++) {
     animacionJuega(iconoJuega[i]);
     animacionAprende(iconoAprende[i]);
     animacionPrueba(iconoPrueba[i]);
     }



      
