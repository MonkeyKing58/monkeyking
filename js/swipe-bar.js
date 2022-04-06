
function setListeners(WRAPPER_ID, WRAPPER_PARENT, DREM){

	var wr = document.getElementById(WRAPPER_ID);
	var x1 = 0;
    var old_x = 0;

	wr.addEventListener("touchstart", wrStart, false);
	wr.addEventListener("touchmove", wrMove, false);
    wr.addEventListener("touchend", wrEnd, false);

    wr.WRAPPER_ID       = WRAPPER_ID;
    wr.WRAPPER_PARENT   = WRAPPER_PARENT;
    wr.DREM             = DREM;

}

function wrStart(e){
	x1 = e.changedTouches[0].screenX;
    old_x = $('#'+e.currentTarget.WRAPPER_ID).position().left;
}

function wrMove(e){

	let x2 = e.changedTouches[0].screenX;

	let dx = old_x + x2 - x1;

	$('#'+e.currentTarget.WRAPPER_ID).css({
		'transform':'translateX('+dx+'px)',
		'transition-duration':'0'
	});

}

function wrEnd(e){

    let ID = '#'+e.currentTarget.WRAPPER_ID;

	let window_width = $(window).width();
	let wr_width 	 = $(ID).width();
	let wr_pos   	 = $(ID).css('transform');

	var n = wr_pos.indexOf(",", 16);
	var m = wr_pos.indexOf(",", 20);

	var pos = parseInt(wr_pos.slice(n+2,m));

	let drem = $('#'+e.currentTarget.WRAPPER_PARENT).height()/e.currentTarget.DREM;

	if(pos>0){
		$(ID).css({
			'transform':'translateX(0)',
			'transition-duration':'.5s'
		});
		setTimeout(() => {
			$((ID)).css({
				'transition-duration':'0s'
			})
		}, 500);
	}

	if((wr_width + 	pos) < (window_width - drem)){
		$(ID).css({
			'transform':'translateX(-'+(wr_width-window_width+drem)+'px)',
			'transition-duration':'.5s'
		});
		setTimeout(() => {
			$(ID).css({
				'transition-duration':'0s'
			})
		}, 500);
	}
}


function move_swiper(DIRECTION, ID, SWIPER_ITEM_ID){

	let wr_pos   	 = $(ID).css('transform');
	let wr_wdth   	 =parseInt( $(ID).css('width'));
	let win_wdth   	 =$(window).width();

	if(wr_pos === 'none')
		pos = 0;
	else{
		var n = wr_pos.indexOf(",", 16);
		var m = wr_pos.indexOf(",", 20);
		var pos = parseInt(wr_pos.slice(n+2,m));
	}


	let dm = $(SWIPER_ITEM_ID).css('margin-left');
		dm = parseInt(dm);
	let dx = $(SWIPER_ITEM_ID).css('width');
		dx = (parseInt(dx) + dm) / 2 * DIRECTION;

	let move = pos+dx;


	if(move > 0) move = 0;

	if( (0 - move) > (wr_wdth-win_wdth)) move = 0-wr_wdth+win_wdth-dm;

	$(ID).css({
		'transform':'translateX('+move+'px)',
		'transition-duration':'.5s'
	});

	setTimeout(() => {
		$(ID).css({
			'transition-duration':'0s'
		})
	}, 500);
}

