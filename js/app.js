function toggleMode() {
    const body = document.body;
    const currentMode = body.classList.contains('dark-mode') ? 'dark' : 'light';

    if (currentMode === 'dark') {
        body.classList.remove('dark-mode');
        document.querySelector('.mode-switch').innerHTML = '🌙';
    } else {
        body.classList.add('dark-mode');
        document.querySelector('.mode-switch').innerHTML = '☀️';
    }
}
// Verifica se o navegador suporta a API Web Share
const shareLink = document.getElementById('shareLink');
if (shareLink) {
    shareLink.addEventListener('click', async () => {
        try {
            // Chama a API Web Share para compartilhar o conteúdo da página
            await navigator.share({
                title: document.title,
                text: 'Confira este conteúdo interessante!',
                url: window.location.href
            });
        } catch (error) {
            console.error('Erro ao compartilhar:', error.message);
        }
    });
}

function initMap() {
// Configuração inicial do mapa
var mapOptions = {
    center: {lat: -8.284547, lng: -35.969863}, // Coordenadas de São Paulo, por exemplo
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true
};

// Criação do mapa
var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

// Adiciona um marcador com uma seta
var marker = new google.maps.Marker({
    position: {lat: -8.284547, lng: -35.969863},
    map: map,
    title: 'Localização',
    icon: {
        path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
        scale: 5, // Ajuste o tamanho da seta conforme necessário
        fillColor: 'red', // Cor da seta
        fillOpacity: 1,
        strokeColor: 'black', // Cor da borda da seta
        strokeWeight: 1
    }
});
}

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.querySelectorAll('.fade');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 2000); // Muda a imagem a cada 2 segundos
}


document.addEventListener('DOMContentLoaded', function () {
    // Verifique se o pop-up já foi exibido anteriormente (usando localStorage)
    if (!localStorage.getItem('popupShown')) {
      showPopup();
      localStorage.setItem('popupShown', 'true');
    }
  });
  
  function showPopup() {
    var popup = document.getElementById('newsletter-popup');
    popup.style.display = 'block';
  }
  
  function closePopup() {
    var popup = document.getElementById('newsletter-popup');
    popup.style.display = 'none';
  }
  
  function submitForm() {
    // Aqui você pode adicionar código para enviar o email para o seu arquivo PHP (newsletter.php)
    var email = document.querySelector('.email-input').value;
    console.log('Email enviado:', email);
  
    // Fechar o pop-up após enviar
    closePopup();
  }
  

  