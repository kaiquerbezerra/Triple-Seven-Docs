<?php
// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Pega os dados digitados no formulário
  $email = test_input($_POST["email"]);

  $to = "kaiquerbezerra@gmail.com";  // Email ao qual serão enviadas as informações
  $subject = "Assinatura da Newsletter"; //Assunto do email

  $message .= "E-mail: $email\n";

  // Envio do email pela função mail
  mail($to, $subject, $message);

  // Redireciona para uma página de confirmação
  header("Location: ../html/obrigado.html"); 
  exit();
}

// Função para validar e limpar os dados do formulário
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>