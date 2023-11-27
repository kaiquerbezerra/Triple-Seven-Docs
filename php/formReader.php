<?php
// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Pega os dados digitados no formulário
  $nome = test_input($_POST["nome"]);
  $email = test_input($_POST["email"]);
  $mensagem = test_input($_POST["mensagem"]);

  $to = "kaiquerbezerra@gmail.com";  // Email ao qual serão enviadas as informações
  $subject = "Nova Mensagem do Formulário"; //Assunto do email

  // Cria o corpo do e-mail
  $message = "Nome: $nome\n";
  $message .= "E-mail: $email\n";
  $message .= "Mensagem:\n$mensagem";

  // Envio do email pela função mail
  mail($to, $subject, $message);

  // Redireciona para uma página de confirmação
  header("Location: ../html/obrigado.html"); 
  exit();
}

// Função para validar as entradas e impedir caracteres especiais
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>