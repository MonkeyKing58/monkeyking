<!DOCTYPE html>
<HTML>
<HEAD>

    <title>Контакты - Создание сайтов в Пензе</title>
    <meta name="description" content="Контактная информация компании Monkey King. Адреса  в Пензе, телефон, email для связи нашей веб-студии.">
	<meta name="keywords" content="создание сайтов, пенза, разработка, цены, продвижение, раскрутка, стоимость">

	<meta property="og:url" content="monkey-king.ru">
	<meta property="og:title" content="Контакты - Создание сайтов в Пензе">
	<meta property="og:description" content="Контактная информация компании Monkey King. Адреса  в Пензе, телефон, email для связи нашей веб-студии	">
	<meta property="og:image" content="https://monkey-king.ru/images/MK_LOGO-s.png">

	<meta charset="utf-8">
	<link href="css/styles.css" rel="stylesheet">
	<link href="css/media.css" rel="stylesheet">
	<script type="text/javascript" src="js/jQuery.js"></script>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">

	<link rel="preconnect" href="https://fonts.gstatic.com">
	<? include('head.html');?>
</HEAD>

<BODY>

	<section class="content" id="main-bg">
		<span id="main-bg-lower-right"></span>
		<span id="main-bg-lower-left"></span>
		<span id="main-bg-upper-left"></span>
		<div id="main-bg-stars"></div>
		<span id="main-bg-upper-center"></span>
	</section>

	<section id="wrapper">

		<div id="contacts-desc-img">
			<div id="contacts-desc-img-wrapper"></div><!-- сияние -->

			<div id="contacts-desc-img-map">
				<div class="contacts-desc-img-map-1"></div>
				<svg class="contact-shadow" viewBox="0 0 100 100">
					<path class="contact-shadow-path" d='
														M50,0
														C100,0 102,50 100,50
														C102,50 98.5,99 50,100
														C85,100 85,0 50,0' />
				</svg>
			</div>

			<div id="contacts-hand">
				<div id="moon-wrapper">
					<div id="moon-map"></div>
					<svg class="contact-shadow-moon" viewBox="0 0 100 100">
						<path class="contact-shadow-path" d='
															M50,0
															C100,0 102,50 100,50
															C102,50 98.5,99 50,100
															C85,100 85,0 50,0' />
					</svg>
				</div>
			</div>
		</div>

		<div class="content hide" id="contacts">
			<h1>КОНТАКТЫ</h1>
			<h3>Мы всегда на связи</h3>

			<div id="contacts-buttons" class="desktop">
				<a class="changer">
					<div>
						<div class="contacts-text-switcher">
							<div style="background-image:url(images/icon/footer-call.png);"></div>
							<div>З В О Н И Т Е</div>
						</div>
						<div class="contacts-text-switcher" style="border:Solid .2rem #fff;">
							<div style="background-image:url(images/icon/footer-call.png);"></div>
							<div>+7 (927) 373 - 00 - 75</div>
						</div>
					</div>
				</a>
				<a class="changer">
					<div>
						<div class="contacts-text-switcher">
							<div style="background-image:url(images/icon/footer-mail.png);"></div>
							<div>П И Ш И Т Е</div>
						</div>
						<div class="contacts-text-switcher" style="border:Solid .2rem #fff;">
							<div style="background-image:url(images/icon/footer-mail.png);"></div>
							<div>INFO@MONKEY-KING.ru</div>
						</div>
					</div>
				</a>
			</div>

			<div id="contacts-buttons-mobile" class="mobile">
				<a href="tel:89273730075" style="background-image:url(images/icon/footer-call.png);">+7 (927) - 373 - 00 - 75</a>
				<a href="mailto:INFO@MONKEY-KING.ru" style="background-image:url(images/icon/footer-mail.png);">INFO@MONKEY-KING.ru</a>
			</div>
		</div>

		<div id="menu">
			<?php include('header.html'); ?>
		</div>
	</section>

	<?php include('mobile-switcher.html'); ?>

</BODY>
</HTML>



<script type="text/javascript">

	$(document).ready(function(){
		$('#contacts').removeClass('hide');
	});

</script>