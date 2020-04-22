<?php 
if (!empty($_POST['name']) AND !empty($_POST['email']) AND !empty($_POST['message'])){
  
  $headers = 'From: Кротов Роман\r\n'.
             'Reply-To: v.struk19@gmail.com\r\n'.
              'X-Mailer: PHP/'. phpversion();
             
  $theme = 'Нове повідомлення';

  $letter = 'Повідомлення:\r\n';
  $letter .='Імя: '.$_POST['name'].'\r\n';
  $letter .='Email: '.$_POST['email'].'\r\n';
  $letter .='Телефон: '.$_POST['phone'].'\r\n';
  $letter .='Повідомлення: '.$_POST['message'].'\r\n';
  
  if (mail('vexavator@meta.ua', $theme, $letter, $headers)){
    header ('Location:/thankyou.html');
  } else {
   echo ('ERROR');
  }
} else {
  echo "Ошибка: Заполните все поля!";
}