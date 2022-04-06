<!DOCTYPE html>
<HTML>
<HEAD>

	<title>Примеры работ - Создание сайтов | Портфолио сайтов</title>
    <meta property="description" content="Примеры сайтов любой сложности, выполненные в веб-студии Monkey King. Посмотреть портфолио по созданию и разработке сайтов.">
	<meta name="keywords" content="Создание сайтов, Пенза, Интернет, продвижение сайта, контекстная реклама в интернете, веб-сайт, интернет-реклама, создать сайт, разработка сайта">

	<meta property="og:url" content="monkey-king.ru">
	<meta property="og:title" content="Примеры работ - Создание сайтов|Портфолио сайтов">
	<meta property="og:description" content="Примеры сайтов любой сложности, выполненные в веб-студии MonkeyKing. Посмотреть портфолио по созданию и разработке сайтов.">
	<meta property="og:image" content="https://monkey-king.ru/images/MK_LOGO-s.png">



	<meta charset="utf-8">
	<link href="css/styles.css" rel="stylesheet">
	<link href="css/works.css" rel="stylesheet">
	<link href="css/media.css" rel="stylesheet">
	<script type="text/javascript" src="js/jQuery.js"></script>
	<script type="text/javascript" src="js/slider.js"></script>
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

		<div class="content" id="works">
			<h1 style="transition-duration: .5s; align-self:flex-start;">НАШИ РАБОТЫ</h1>
			<h3 style="transition-duration: .5s; align-self:flex-start;">Вдохновляйтесь готовыми проектами и делитесь своими идеями</h3>

			<div id="works-wrapper" class="desktop hide">
				<div id="works-contaner">


				<?php

					include('lock/connect.php');

					$QR_SELECT = "SELECT * FROM projects ORDER BY `NUM`";
					$result = mysqli_query($connect_to_db,$QR_SELECT);
					$result_m = mysqli_query($connect_to_db,$QR_SELECT);

					while($data = mysqli_fetch_assoc($result)){

						echo'
						<div class="works-item" data-num="',$data['NUM'],'" style="background-image:url(images/works/',$data['BG'],');">
							<div class="works-item-cover">
								<div class="works-item-cover-logo" style="background-image:url(images/works/',$data['LOGO'],'); ',$data['LOGO_STYLES'],'"></div>
								<div class="works-item-cover-title">',$data['TITLE'],'</div>
								<div class="works-item-cover-text">',$data['SHORT'],'</div>
							</div>
						</div>';

					}
				?>

				</div>
			</div>

			<div id="works-mobile" class="mobile">

				<?php

					while($data_m = mysqli_fetch_assoc($result_m)){
						?>
						<div class="works-mobile-item max-height-25vw">
							<div class="works-mobile-row">
								<div class="works-mobile-item-icon"
									style="<?php echo 'background-image:url(images/works/',$data_m['LOGO'],');',$data_m['LOGO_STYLES']; ?>"></div>
								<div class="works-mobile-item-title"><?php echo $data_m['TITLE']; ?></div>
								<div class="works-mobile-item-arrow"></div>
							</div>
							<img src="images/works/<?php echo $data_m['BG']; ?>">
							<div class="works-mobile-button" data-num="<?php echo $data_m['NUM']; ?>">ПОДРОБНЕЕ</div>
						</div>
						<?php
					}

				?>

			</div>

			<div id="works-desc" class="hide"><h2 style="display:flex; color:var(--blue); height:100%; background-color:#fff; align-items:center; text-shadow:none;">ПОДОЖДИТЕ ...</h2></div>

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
		$('#works-wrapper').removeClass('hide');
	});

	$('.works-item').click(function(){
		$('#works-wrapper').addClass('hide');
		$('h1').addClass('hide');
		$('h3').addClass('hide');

		$('#works-desc').load('works-desc.php?num='+$(this).attr('data-num'));

		setTimeout(() => {
			$('#works-desc').removeClass('hide');
		}, 500);
	})

	$('.works-mobile-button').click(function(){
		$('#works-mobile').addClass('hide');
		$('h1').addClass('hide');
		$('h3').addClass('hide');

		$('#menu-switcher-mobile').addClass('hide');

		$('#works-desc').load('works-desc.php?num='+$(this).attr('data-num'));

		setTimeout(() => {
			$('#works-desc').removeClass('hide');
		}, 500);
	})

	$('.works-mobile-row').click(function(){

		if($(this).parent().hasClass('max-height-25vw'))
			$(this).parent().removeClass('max-height-25vw');
		else
			$(this).parent().addClass('max-height-25vw');
	})

</script>