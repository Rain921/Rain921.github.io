<!DOCTYPE html>
<html>
  <head>
    <title>newproj</title>
    <meta name="description" content="A description of the page">
    <meta charset="utf-8"/>
    <meta name="theme-color" content="#0122d3">
    <meta name="apple-mobile-web-app-status-bar-style" content="#0122d3">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
    <!--style-->
    <link rel="stylesheet" href="dist/css/app.min.css">
    <link rel="stylesheet" href="dist/css/hamburgers.min.css">
    <!--fonts-->
    <link rel="stylesheet" href="dist/fonts/fonts.css">
    <link rel="stylesheet" href="dist/css/icon-font.css">
    <link href="https://fonts.googleapis.com/css?family=PT+Sans:400i" rel="stylesheet">
    
  </head>
  <body>
    <div class="wrapper">
      <header>
        <div class="logo">
          <a href="#">
            <div class="logo__img">
              <img src="dist/img/header/Logo.png" alt="logo">
            </div>
            <div class="logo__text">
              <span>Logo<br>Company</span>
            </div>
          </a>
        </div>
        <!--Десктоп-->
        <div class="info">
          <nav>
            <ul>
              <li><a href="#">О нас</a></li>
              <li><a href="#">Услуги и цены</a></li>
              <li><a href="#">Фото работ</a></li>
              <li><a href="#">Контакты</a></li>
            </ul>
          </nav>
          <div class="info__callback">
            <div class="callback__phone">
              <p class="callback__phone--mobil">
                <img src="dist/img/header/Phone.png" alt="phone">
                <a href="tel:(044) 333-33-33">(044) 333-33-33</a></p>
                <p class="callback__phone--active">
                  <img src="dist/img/header/Callback_icon.png" alt="phone">
                  <a href="#">Заказать обратный звонок</a></p>
                </div>
                <div class="callback__phone">
                  <p>
                    <img src="dist/img/header/Mobile_1.png" alt="phone">
                    <a href="tel:(096) 111-11-11">(096) 111-11-11</a>
                  </p>
                  <p>
                    <img src="dist/img/header/Mobile_2.png" alt="phone">
                    <a href="tel:(066) 222-22-22">(066) 222-22-22</a>
                  </p>
                </div>
                <div class="callback__btn">
                  <button>Записаться на приём</button>
                </div>
              </div>
            </div>
            <!--мобил-->
            <div class="menu">
              <div class='navbar-toggle' title='Menu'>
                <div class='bar'>
                  <button class="hamburger hamburger--collapse" type="button" aria-label="Menu" aria-controls="navigation">
                  <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                  </span>
                  </button>
                </div>
              </div>
              <div class="navmobile">
                <nav id="navigation" class="nav-hide nav-open">
                  <div class="navmobile__vertical">
                    <ul>
                      <li><a href="#">О нас</a></li>
                      <li><a href="#">Услуги и цены</a></li>
                      <li><a href="#">Фото работ</a></li>
                      <li><a href="#">Контакты</a></li>
                    </ul>
                    <div class="navmobile__contact">
                      <div class="navmobile__item">
                        <p>
                          <img src="dist/img/header/Phone.png" alt="phone">
                          <a href="tel:(044) 333-33-33">(044) 333-33-33</a></p>
                          <p class="callback__phone--active">
                            <img src="dist/img/header/Callback_icon.png" alt="phone">
                            <a href="#">Заказать обратный звонок</a></p>
                          </div>
                          <div class="callback__phone">
                            <p>
                              <img src="dist/img/header/Mobile_1.png" alt="phone">
                              <a href="tel:(096) 111-11-11">(096) 111-11-11</a>
                            </p>
                            <p>
                              <img src="dist/img/header/Mobile_2.png" alt="phone">
                              <a href="tel:(066) 222-22-22">(066) 222-22-22</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
              </header>
            </div>
            <main>
              <div class="slider">
                <div class="slider__main">
                  <img src="dist/img/main/Sl_1.jpg" alt="slide">
                  <div class="wrapper">
                    <div class="slider__info">
                      <h2>Гигиена полости рта</h2>
                      <ul>
                        <li>ультразвуковая обработка</li>
                        <li>Air-Flow</li>
                        <li>полировка профессиональными пастами</li>
                        <li>глубокое фторирование эмали</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="slider__main">
                  <img src="dist/img/main/Sl_1.jpg" alt="slide">
                  <div class="wrapper">
                    <div class="slider__info">
                      <h2>Гигиена полости рта</h2>
                      <ul>
                        <li>ультразвуковая обработка</li>
                        <li>Air-Flow</li>
                        <li>полировка профессиональными пастами</li>
                        <li>глубокое фторирование эмали</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="service wrapper">
                <div class="service__block" style="background-color: #5bd077;">
                  <img src="dist/img/main/Icon_1.png" alt="img_block">
                  <h2>детская стоматология</h2>
                  <p>Раздел стоматологии, занимающийся изучением этиологии, диагностики, методов профилактики и лечения зубо-челюстных аномалий.</p>
                </div>
                <div class="service__block" style="background-color: #64dcb9;">
                  <img src="dist/img/main/Icon_2.png" alt="img_block">
                  <h2>терапия</h2>
                  <p>Задача терапевтической стоматологии заключается в диагностике и лечении заболеваний зубов и некоторых прилегающих областей.</p>
                </div>
                <div class="service__block" style="background-color: #63cecd;">
                  <img src="dist/img/main/Icon_3.png" alt="img_block">
                  <h2>Ортодонтия</h2>
                  <p>Раздел стоматологии, занимающийся изучением этиологии, диагностики, методов профилактики и лечения зубо-челюстных аномалий.</p>
                </div>
                <div class="service__block" style="background-color: #50aac7;">
                  <img src="dist/img/main/Icon_4.png" alt="img_block">
                  <h2>ортопедия</h2>
                  <p>Несъемное протезирование зубов предполагает изготовление и установку постоянных, стационарных зубных протезов.</p>
                </div>
                <div class="service__block" style="background-color: #4a99c2;">
                  <img src="dist/img/main/Icon_5.png" alt="img_block">
                  <h2>имплантация</h2>
                  <p>Это метод вживления искусственных опор для несъемных и съемных зубных протезов.</p>
                </div>
                <div class="service__block" style="background-color: #4a88c2;">
                  <img src="dist/img/main/Icon_6.png" alt="img_block">
                  <h2>хирургия</h2>
                  <p>Раздел стоматологии, практикующий такие методы лечения как: операции по удалению зубов, подсадка костной ткани и т.д.</p>
                </div>
                <div class="service__about">
                  <div class="about__text">
                    <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.</p>
                    <p>Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</p>
                  </div>
                  <div class="about__logo">
                    <span>У нас есть визиограф</span>
                    <p>Рентген на месте</p>
                    <img src="dist/img/main/Image.png" alt="logo">
                  </div>
                </div>
              </div>
              <section class="advantage" style="background-color: #e0f0ff;">
                <div class="advantage__info wrapper">
                  <div class="info__title">
                    <h1>наши преимущества</h1>
                  </div>
                  <div class="info__block">
                    <img src="dist/img/main/Doctor.png" alt="Doctor">
                    <p>Сертифицированые специалисты</p>
                  </div>
                  <div class="info__block">
                    <img src="dist/img/main/Services.png" alt="Services">
                    <p>Полный спектр услуг</p>
                  </div>
                  <div class="info__block">
                    <img src="dist/img/main/Technologies.png" alt="Technologies">
                    <p>Инновационные технологии</p>
                  </div>
                  <div class="info__block">
                    <img src="dist/img/main/Guarantee.png" alt="Guarantee">
                    <p>Гарантия качества</p>
                  </div>
                </div>
              </section>
              <section class="review">
                <div class="review__text">
                  <h2>отзывы пациентов</h2>
                </div>
                <div class="wrapper">
                  <div class="slider-review">
                    <div class="slider-review__item">
                      <div class="slider-review__text">
                        <span>
                        Дуже задоволена результатом відвідування Вашої клініки! Професіонали на найвищому рівні!! Рекомендую!! Дякую)дякую) дякую!!!</span>
                      </div>
                      <p>Светлана</p>
                    </div>
                    <div class="slider-review__item">
                      <div class="slider-review__text">
                        <span>
                        Прекрасна клініка. Завжди боявся стоматолога. Та з вашою клінікою відкрив для себе сучасну стоматологію.</span>
                      </div>
                      <p>Олексій Антонович</p>
                    </div>
                    <div class="slider-review__item">
                      <div class="slider-review__text">
                        <span>
                        Мне всегда больно у стоматолога, но не в этой клинике. Профессионализм на высшем уровне. Всем очень довольна. Особое спасибо Бессоновой Наталье Викторовне!</span>
                      </div>
                      <p>Ирина Вячеславовна</p>
                    </div>
                    <div class="slider-review__item">
                      <div class="slider-review__text">
                        <span>
                        Дуже задоволена результатом відвідування Вашої клініки! Професіонали на найвищому рівні!! Рекомендую!! Дякую)дякую) дякую!!!</span>
                      </div>
                      <p>Светлана</p>
                    </div>
                    <div class="slider-review__item">
                      <div class="slider-review__text">
                        <span>
                          Прекрасна клініка. Завжди боявся стоматолога. Та з вашою клінікою відкрив для себе сучасну стоматологію.
                          <span>
                          </div>
                          <p>Олексій Антонович</p>
                        </div>
                      </div>
                      <div class="review__more">
                        <button>Читать все отзывы</button>
                      </div>
                    </div>
                  </section>
                  <section class="form-section">
                    <h2>записаться на приём</h2>
                    <div class="form-block wrapper">
                      <form class="form" action="post">
                        <div class="form__input">
                          <input id="name" type="name" name="name">
                          <label for="name"><img src="dist/img/footer/Human_icon.png" alt="icon">Ваше имя<span>*</span></label>
                        </div>
                        <div class="form__input">
                          <input id="phone" type="text" name="phone">
                          <label for="phone"><img src="dist/img/footer/Phone_form.png" alt="icon">Номер телефона<span>*</span></label>
                        </div>
                        <div class="form__input form__data">
                          <input id="data" type="date" name="trip">
                          <label for="data">
                            <img src="dist/img/footer/Calendar_icon.png" alt="icon">
                            Дата посещения
                            <span>*</span>
                          </label>
                        </div>
                        <div class="form__input form__data">
                          <input type="time" id="time" name="time"
                          min="9:00" max="18:00">
                          <label for="time"><img src="dist/img/footer/Clock_icon.png" alt="icon">Время посещения<span>*</span></label>
                        </div>
                        <div class="form__textarea">
                          <textarea name="text" id="text" placeholder="Здесь можно указать причину обращения или ваши пожелания, если таковые имеются..."></textarea>
                        </div>
                        <div class="form__btn" >
                          <button type="submit" name="submit">Отправить заявку</button>
                        </div>
                      </form>
                      <div class="form-block__info">
                        <p>Чтобы записаться на приём к врачу заполните эту простую форму. Укажите удобные для вас дату и время посещения. После получения заявки мы перезвоним вам для уточнения, возможен ли приём в это время и если нет, согласуем другую подходящую дату.</p>
                        <p><span>*</span>Поля со звёздочкой обязательны для заполнения.
                        <img src="dist/img/main/Arrow_footer.png" alt="arrow">
                      </p>
                    </div>
                  </div>
                </section>
              </main>
              
              <footer>
                <div class="footer--line">
                  <div class="wrapper">
                    <nav>
                      <ul>
                        <li><a href="#">О нас</a></li>
                        <li><a href="#">Услуги и цены</a></li>
                        <li><a href="#">Фото работ</a></li>
                        <li><a href="#">Контакты</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div class="wrapper">
                  <div class="bottom">
                    <p class="bottom__info">Клиника семейной медицины<br>
                    ООО «Название компании»</p>
                    <div class="marat_logo">
                      <img src="dist/img/footer/Marat_logo.png" alt="logo">
                      <p>Разработка сайта — MARAT<span>TM</span><br>
                      © COPYRIGHT<br>
                      THE MARAT COMPANY<br>
                      2016 ALL RIGHTS RESERVED
                    </p>
                  </div>
                </div>
              </div>
            </footer>
            <script src="dist/js/app.min.js"></script>
          </body>
        </html>