//Função para ativação e desativação do dark mode
function toggleMode() {
  // Verificação do estado atual
  const body = document.body;
  const currentMode = body.classList.contains('dark-mode') ? 'dark' : 'light';

  //Inversão de estado
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
      // Printa o erro em caso de fracasso
      console.error('Erro ao compartilhar:', error.message);
    }
  })
}

// Configuração inicial do mapa
function initMap() {
  //opções base do mapa
  var mapOptions = {
      center: {lat: -8.284547, lng: -35.969863}, // Coordenadas de São Paulo, por exemplo
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
  };

  // Criação do mapa
  var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

  // Configuração da seta do mapa
  var marker = new google.maps.Marker({
      position: {lat: -8.284547, lng: -35.969863}, // Posição no globo
      map: map,
      title: 'Localização',
      icon: {
          path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW, // Ícone da seta
          scale: 5, // Zoom inicial
          fillColor: 'red', // Cor da seta
          fillOpacity: 1,
          strokeColor: 'black', // Cor da borda da seta
          strokeWeight: 1
      }
  })
}


// Index inicial do slide
let slideIndex = 0;
// Chamamento da função de apresentações dos slides
showSlides();


// Função de apresentações dos slides
function showSlides() {
  let i;
  // Aloca as imagens para serem apresentadas
  const slides = document.querySelectorAll('.fade');
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
  }
  // Aumenta o index até chegar ao fim do array, então reseta
  slideIndex++;
  if (slideIndex > slides.length) {
      slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 2000); // Muda a imagem a cada 2 segundos
}


// Funções relacionadas a newsletter
document.addEventListener('DOMContentLoaded', function () {
  // Verifica se o pop-up já foi exibido anteriormente (usando localStorage)
  if (!localStorage.getItem('popupShown')) {
    showPopup();
    localStorage.setItem('popupShown', 'true');
  }
})
  
// Função para apresentar o popup
function showPopup() {
  var popup = document.getElementById('newsletter-popup');
  popup.style.display = 'block';
}

// Função de fechamento do popup
function closePopup() {
  var popup = document.getElementById('newsletter-popup');
  popup.style.display = 'none';
}

// Função de envio do formulário do popup
function submitForm() {
  // Aqui você pode adicionar código para enviar o email para o seu arquivo PHP (newsletter.php)
  var email = document.querySelector('.email-input').value;
  console.log('Email enviado:', email);

  // Fechar o pop-up após enviar
  closePopup();
}


// Funções de apresentação e fechamento do modal, respectivamente
function showModal(modalId) {
  document.getElementById(modalId).style.display = 'block';
  document.getElementById('modalBackground').style.display = 'block';
}

// Funções de apresentação e fechamento do modal, respectivamente
function hideModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
  document.getElementById('modalBackground').style.display = 'none';
}
