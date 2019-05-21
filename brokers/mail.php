<?php
    //асинхронная отправка сообщения
    if($_POST['send']){
        $res = send_mail();
        exit($res);
    }
    //асинхронная отправка сообщения
    if($_POST['callback']){
        $res = callback();
        exit($res);
    }

/**
* отправка письма из первой формы
* @return string
**/
function send_mail(){
    $error = null;
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $message = trim($_POST['message']);
    
    if(empty($name)) $error .= "Введите имя";
    //if(empty($message)) $error .= "Введите номер телефона";
    if(empty($email)) $error .= "Введите ваше сообщение";
    
    if(!empty($error)){
        return false;
    }else{
        $name = strip_tags($name);
        if(!empty($message)){
            $message = strip_tags($message);
        }
        $email = strip_tags($email);
        // тема письма
        $subject = "Обратный звонок с сайта " . $_SERVER['SERVER_NAME'];
        // заголовки
        $headers .= "Content-type: text/plain; charset=utf-8\r\n";
        $headers .= "From: " . $_SERVER['SERVER_NAME'];
        //текст сообщения
        $mail_body .= "Пользователь сайта по имени $name хочет пообщаться с вами\r\n\r\n";
        if(!empty($message)){
            $mail_body .= "Обращение пользователя: $message\r\n";
        }
        $mail_body .= "E-mail: $email\r\n";
        $mail_body .= "Время подачи заявки: ".date('Y-m-d H:i');
        mail('partner@brokers-kazan.ru', $subject, $mail_body, $headers);
        
        return true;
    }
}

function callback(){
    $error = null;
    $name = trim($_POST['name']);
    $phone = trim($_POST['phone']);
    
    if(empty($name)) $error .= "Введите имя";
    if(empty($phone)) $error .= "Введите номер телефона";
    
    if(!empty($error)){
        return false;
    }else{
        $name = strip_tags($name);
        $phone = strip_tags($phone);
        // тема письма
        $subject = "Обратный звонок с сайта " . $_SERVER['SERVER_NAME'];
        // заголовки
        $headers .= "Content-type: text/plain; charset=utf-8\r\n";
        $headers .= "From: " . $_SERVER['SERVER_NAME'];
        //текст сообщения
        $mail_body .= "Пользователь сайта по имени $name хочет пообщаться с вами\r\n\r\n";
        $mail_body .= "Телефон: $phone\r\n";
        $mail_body .= "Время подачи заявки: ".date('Y-m-d H:i');
        mail('partner@brokers-kazan.ru', $subject, $mail_body, $headers);
        
        return true;
    }
}
?>