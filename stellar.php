<!DOCTYPE html>
<HTML>
<HEAD>

	<title>О нас. Компания MonkeyKing. | Разработка сайтов под ключ</title>
	<meta name="description" content="Почему выбираю компанию по разраотке сайтов MonkeyKing. Заказать сайт ☎ +7 (929) 766-00-75 ">
	<meta name="keywords" content="создание сайтов, пенза, разработка, цены, продвижение, раскрутка, стоимость">
	<meta charset="utf-8">

	<meta property="og:url" content="monkey-king.ru/stellar.php">
	<meta property="og:title" content="О нас. Компания MonkeyKing. | Разработка сайтов под ключ">
	<meta property="og:description" content="Почему выбираю компанию по разраотке сайтов MonkeyKing. Заказать сайт ☎ +7 (929) 766-00-75 ">
	<meta property="og:image" content="https://monkey-king.ru/images/MK_LOGO-s.png">

	<link href="css/styles.css" rel="stylesheet">
	<link href="css/media.css" rel="stylesheet">
	<link href="css/stellar.css" rel="stylesheet">
	<script src="js/jQuery.js"></script>
	<script src="js/swipe-bar.js"></script>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">

	<link rel="preconnect" href="https://fonts.gstatic.com">
	<?php include('head.html');?>

</HEAD>

<BODY>

	<section id="wrapper">
        <div class="content" id="stellar-contaner" style="height:100vh;">

            <div id="video_poly" v-cloak>
                <svg viewBox="0 0 100 100">

					<path id="motionPath" fill="none" stroke="transparent" stroke-width=".1" stroke-miterlimit="10"
						:d="path.d"/>

					<circle v-for="circle in circles" :id="circle.id" :r="circle.r" :fill="circle.fill" :cx="circle.dx" :cy="circle.dy"/>

					<animateMotion
						v-for="circle in circles"
						:xlink:href="circle.idd"
						:dur="circle.speed"
						:begin="circle.delay"
						repeatCount="indefinite"
					>
						<mpath xlink:href="#motionPath" />
					</animateMotion>
                </svg>

                <!--<span id="axe-g"></span>
				<span id="axe-v"></span>-->

				<div id="stellar-text">
					<h1 id="stellar-h1">О НАС</h1>
					<div id="stellar-content">
					  <h2 id="stellar-h2">{{currentTitle}}</h2>
					  <div>{{currentText}}</div>
					</div>
					<div id="stellar-controller">
						<button @click="changeImage(0);" id="stellar-left"></button>
						<button @click="changeImage(1);" id="stellar-right"></button>
					</div>
				</div>
            </div>

		</div>

		<div id="menu">
			<?php include('header.html'); ?>
		</div>
	</section>

	<?php include('mobile-switcher.html'); ?>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.5/TweenLite.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
    <script src="js/stellar.js"></script>

</BODY>
</HTML>

<script>

</script>