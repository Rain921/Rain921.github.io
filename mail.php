<?php
//Принимаем постовые данные
$name=$_POST['name'];
$phone=$_POST['email'];
$message=$_POST['message'];

//Тут указываем на какой ящик посылать письмо
$to = "vitaxa03@yandex.ru";
//Далее идет тема и само сообщение
// Тема письма
$subject = "Заявка с сайта";
// Сообщение письма
$message = "
Имя пользователя: ".htmlspecialchars($name)."<br />
email: ".htmlspecialchars($email)."<br />
email: ".htmlspecialchars($message);

// Отправляем письмо при помощи функции mail();
$headers = "From: home.sl <mail@home.sl>\r\nContent-type: text/html; charset=UTF-8 \r\n";
mail ($to, $subject, $message, $headers);
// Перенаправляем человека на страницу благодарности и завершаем скрипт
header('Location: thanks.html');
exit();
?>