<?php

    include('lock/connect.php');

    $QR_SELECT = "SELECT * FROM projects WHERE `NUM` = '{$_GET['num']}'";
    $result = mysqli_query($connect_to_db,$QR_SELECT);

    $data = mysqli_fetch_assoc($result);

    $dir = $data['DIR']

?>

<div>

    <div id="works-desc-slider">
        <div id="works-desc-slider-wrapper">
            <div id="works-desc-slider-contaner">
                <img src="images/works/<?php echo $dir; ?>/sl-1.jpg" class="works-desc-slider-item active-slide">
                <img src="images/works/<?php echo $dir; ?>/sl-2.jpg" class="works-desc-slider-item active-slide">
                <img src="images/works/<?php echo $dir; ?>/sl-3.jpg" class="works-desc-slider-item active-slide">
                <img src="images/works/<?php echo $dir; ?>/sl-4.jpg" class="works-desc-slider-item active-slide">
                <img src="images/works/<?php echo $dir; ?>/sl-5.jpg" class="works-desc-slider-item active-slide">
            </div>
        </div>
        <div id="works-desc-slider-controller">
            <div id="works-desc-slider-controller-left" style="background-image:url(../images/icon/menu-arrow.png)"></div>

            <div id="works-desc-slider-controller-center">
                <div id="works-desc-controller-contaner">
                    <div style="background-image:url(images/works/<?php echo $dir; ?>/sl-1.jpg);" class="opacity-1 works-desc-controller-item"></div>
                    <div style="background-image:url(images/works/<?php echo $dir; ?>/sl-2.jpg);" class="works-desc-controller-item"></div>
                    <div style="background-image:url(images/works/<?php echo $dir; ?>/sl-3.jpg);" class="works-desc-controller-item"></div>
                    <div style="background-image:url(images/works/<?php echo $dir; ?>/sl-4.jpg);" class="works-desc-controller-item"></div>
                    <div style="background-image:url(images/works/<?php echo $dir; ?>/sl-5.jpg);" class="works-desc-controller-item"></div>
                </div>
            </div>

            <div id="works-desc-slider-controller-right" style="background-image:url(../images/icon/menu-arrow-r.png)"></div>
        </div>
    </div>

    <div id="works-desc-text">

        <div class="works-text-pretitle">ПРОЕКТ</div>
        <div id="works-text-title"><?php echo $data['TITLE']; ?></div>
        <div class="works-text-pretitle">ОПИСАНИЕ</div>

        <div id="works-text-about">
            <?php echo $data['LONG']; ?>
        </div>

        <div id="works-text-button-bar">

        <?php

            if($data['LINK'])
            {?>
            <a href="<?php echo $data['LINK']; ?>" target="_blank" style="margin-right:.5rem;" class="changer">
                <div>
                    <div class="works-text-switcher">
                        <div style="background-image:url(images/icon/link.png);"></div>
                        <div>САЙТ</div>
                    </div>
                    <div style="background-color:#aaa;" class="works-text-switcher">
                        <div style="background-image:url(images/icon/link.png);"></div>
                        <div>САЙТ</div>
                    </div>
                </div>
            </a>

            <?php
            }
            ?>

            <a id="works-desc-close" style="margin-left:.5vw;" class="changer">
                <div>
                    <div style="background-color:#777;" class="works-text-switcher">
                        <div style="background-image:url(images/icon/menu-arrow.png);"></div>
                        <div>НАЗАД</div>
                    </div>
                    <div style="background-color:#aaa;" class="works-text-switcher">
                        <div style="background-image:url(images/icon/menu-arrow.png);"></div>
                        <div>НАЗАД</div>
                    </div>
                </div>
            </a>
        </div>

    </div>

</div>


<script type="text/javascript">



    $('#works-desc-slider-controller-left').click(function(){

        let SLIDE_KOL = $('.works-desc-slider-item').length;
        let TRANSLATE = 100 / SLIDE_KOL;
        let activeSLIDE = $('.active-slide');

        CURRENT_SLIDE =  parseInt($('.works-desc-slider-item').index(activeSLIDE)) + 1;

        $('.works-desc-controller-item:nth-of-type('+CURRENT_SLIDE+')').removeClass('opacity-1');

        if (CURRENT_SLIDE == SLIDE_KOL) CURRENT_SLIDE = 0;

        $('#works-desc-slider-contaner').css({
            'transform':'translateX(calc( -100% * ' + CURRENT_SLIDE + '))'
        })

        let CTRL_w = $('#works-desc-slider-controller-center').width();
        let CTRL_l = $('.works-desc-controller-item').width() * (-1) * CURRENT_SLIDE;
        let CTRL_c = $('#works-desc-controller-contaner').width();

        if((CTRL_w-CTRL_l) > CTRL_c)
            $('#works-desc-controller-contaner').css({
                'transform':'translateX(-'+(CTRL_c - CTRL_w)+'px)'
            });
        else
            $('#works-desc-controller-contaner').css({
                'transform':'translateX(calc( -'+TRANSLATE+'% * ' + CURRENT_SLIDE + '))'
            });

        CURRENT_SLIDE+=1;

        $('.active-slide').removeClass('active-slide');
        $('.works-desc-slider-item:nth-of-type('+CURRENT_SLIDE+')').addClass('active-slide');
        $('.works-desc-controller-item:nth-of-type('+CURRENT_SLIDE+')').addClass('opacity-1');
    })

    $('#works-desc-slider-controller-right').click(function(){

        let SLIDE_KOL = $('.works-desc-slider-item').length;
        let TRANSLATE = 100 / SLIDE_KOL;
        let activeSLIDE = $('.active-slide');

        CURRENT_SLIDE =  parseInt($('.works-desc-slider-item').index(activeSLIDE)) - 1;

        $('.works-desc-controller-item').removeClass('opacity-1');

        if (CURRENT_SLIDE == -1) CURRENT_SLIDE = SLIDE_KOL - 1;

        $('#works-desc-slider-contaner').css({
            'transform':'translateX(calc( -100% * ' + CURRENT_SLIDE + '))'
        })

        let CTRL_w = $('#works-desc-slider-controller-center').width();
        let CTRL_l = $('.works-desc-controller-item').width() * (-1) * CURRENT_SLIDE;
        let CTRL_c = $('#works-desc-controller-contaner').width();

        if((CTRL_w-CTRL_l) > CTRL_c)
            $('#works-desc-controller-contaner').css({
                'transform':'translateX(-'+(CTRL_c - CTRL_w)+'px)'
            });
        else
            $('#works-desc-controller-contaner').css({
                'transform':'translateX(calc( -'+TRANSLATE+'% * ' + CURRENT_SLIDE + '))'
            });

        CURRENT_SLIDE+=1;

        $('.active-slide').removeClass('active-slide');
        $('.works-desc-slider-item:nth-of-type('+CURRENT_SLIDE+')').addClass('active-slide');
        $('.works-desc-controller-item:nth-of-type('+CURRENT_SLIDE+')').addClass('opacity-1');
    })

    $('.works-desc-controller-item').click(function(){

        let SLIDE_KOL = $('.works-desc-slider-item').length;
        let TRANSLATE = 100 / SLIDE_KOL;
        CURRENT_SLIDE = parseInt($('.works-desc-controller-item').index($(this)));

        $('.works-desc-controller-item').removeClass('opacity-1');

        $('#works-desc-slider-contaner').css({
            'transform':'translateX(calc( -100% * ' + CURRENT_SLIDE + '))'
        })


        let CTRL_w = $('#works-desc-slider-controller-center').width();
        let CTRL_l = $('.works-desc-controller-item').width() * (-1) * CURRENT_SLIDE;
        let CTRL_c = $('#works-desc-controller-contaner').width();

        if((CTRL_w-CTRL_l) > CTRL_c)
            $('#works-desc-controller-contaner').css({
                'transform':'translateX(-'+(CTRL_c - CTRL_w)+'px)'
            });
        else
            $('#works-desc-controller-contaner').css({
                'transform':'translateX(calc( -'+TRANSLATE+'% * ' + CURRENT_SLIDE + '))'
            });

        CURRENT_SLIDE += 1;
        $('.active-slide').removeClass('active-slide');
        $('.works-desc-slider-item:nth-of-type('+CURRENT_SLIDE+')').addClass('active-slide');
        $('.works-desc-controller-item:nth-of-type('+CURRENT_SLIDE+')').addClass('opacity-1');

    })

    $('#works-desc-close').click(function(){
        $('#works-desc').addClass('hide');

        setTimeout(() => {
            $('#works-wrapper').removeClass('hide');
            $('#works-mobile').removeClass('hide');
            $('h1').removeClass('hide');
            $('h3').removeClass('hide');

            if( $(window).width() < $(window).height())
                $('#menu-switcher-mobile').removeClass('hide');

        }, 750);
    })


</script>
