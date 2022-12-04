/* Magazine sample */

(function($) {

var sampleName = 'magazine7',
	samplePath = 'samples/magazine7/';

function addPage(page, book) {

	var id, pages = book.turn('pages');

	var element = $('<div />', {});

	if (book.turn('addPage', element, page)) {
		element.html('<div class="gradient"></div><div class="loader"></div>');
		loadPage(page);
	}
}

function loadPage(page) {

	var img = $('<img />');
	img.load(function() {
		var container = $('.magazine7 .p'+page);
		img.css({width: '100%', height: '100%'});
		img.appendTo($('.magazine7 .p'+page));
		container.find('.loader').remove();
	});

	img.attr('src', samplePath + 'pages/' +  page + '.jpg');

}

function loadLargePage(page, pageElement) {
	
	var img = $('<img />');

	img.load(function() {

		var prevImg = pageElement.find('img');
		$(this).css({width: '100%', height: '100%'});
		$(this).appendTo(pageElement);
		prevImg.remove();
		
	});

	img.attr('src', samplePath + 'pages/' +  page + '-large.jpg');
}

function loadSmallPage(page, pageElement) {
	
	var img = pageElement.find('img');

	img.css({width: '100%', height: '100%'});

	img.unbind('load');

	img.attr('src', samplePath + 'pages/' +  page + '.jpg');
}

function zoomTo(event) {

	if ($(this).zoom('value')==1)
		$(this).zoom('zoomIn', event);
	else
		$(this).zoom('zoomOut');

}


function loadFlipbook(flipbook) {

	if (flipbook.width()===0) {

		if (bookshelf.currentSampleName()==sampleName) {
			setTimeout(function() {
				loadFlipbook(flipbook);
			}, 10);
		}

		return;
	}

	flipbook.turn({
		acceleration: !isChrome(),
		gradients: true,
		autoCenter: true,
		duration: 1000,
		pages: 7,
		when: {

		turning: function(e, page, view) {
			
			var book = $(this),
			currentPage = book.turn('page'),
			pages = book.turn('pages');
			
			if (!$('.splash .bookshelf').is(':visible'))
				Hash.go('samples/' + sampleName+'/'+page).update();

			
			if (page==1)
				$('.previous-button').hide();
			else
				$('.previous-button').show();
				
			
			if (page==pages)
				$('.next-button').hide();
			else
				$('.next-button').show();

		},

		turned: function(e, page, view) {

			var book = $(this);

			book.turn('center');

		},

		start: function(e, pageObj) {
	
			bookshelf.moveBar(true);

		},

		end: function(e, pageObj) {
		
			var book = $(this);

			

			bookshelf.moveBar(false);

		},

		missing: function (e, pages) {

			for (var i = 0; i < pages.length; i++)
				addPage(pages[i], $(this));

		}
	}
});

	// Zoom

	$('.splash').zoom({
		flipbook: flipbook,

		max: function() {

			return 2.4;

		},

		when: {
			resize: function(event, scale, page, pageElement) {

				if (scale==1)
					loadSmallPage(page, pageElement);
				else
					loadLargePage(page, pageElement);

			},

			change: function(event, scale) {

				if (scale==1) {

					$('.splash').addClass('no-transition').height('');
					$('body > :not(.splash)').show();
					$('.bar').css({visibility:'visible'});
					bookshelf.zoomOutButton(false);

				} else {

					$('.magazine7').removeClass('animated').addClass('zoom-in');
					$('.splash').addClass('no-transition').height($(window).height());
					$('body > :not(.splash)').hide();

				}

			},

			zoomIn: function () {

				$('.bar').css({visibility:'hidden'});
				bookshelf.zoomOutButton(true);

			},

			zoomOut: function () {
		
				setTimeout(function(){
					$('.magazine7').addClass('animated').removeClass('zoom-in');
				}, 0);

			},

			swipeLeft: function() {

				$('.magazine7').turn('next');

			},

			swipeRight: function() {
				
				$('.magazine7').turn('previous');

			}
		}
	});

	if ($.isTouch)
		$('.splash').bind('zoom.doubleTap', zoomTo);
	else
		$('.splash').bind('zoom.tap', zoomTo);



	flipbook.addClass('animated');
	bookshelf.showSample();

}

////////////

bookshelf.loadSample(sampleName, function(action) {

	var sample = this;

	bookshelf.preloadImgs(['1.jpg'], samplePath + 'pages/',
	function() {

	bookshelf.loaded(sampleName);

	if (action=='preload') {
		return;
	}

	sample.previewWidth = 112;
	sample.previewHeight = 73;
	sample.previewSrc = samplePath + 'pics/preview.jpg';
	sample.tableContents = 3;
	sample.shareLink = 'http://' + location.host + '/#'+samplePath;
	sample.shareText = 'Turn.js: Make a flipbook with HTML5 via @turnjs';


	// Report that the flipbook is loaded

	if (!sample.flipbook) {

		var bookClass = (Modernizr.csstransforms) ?
			'mag1-transform magazine7' :
			'magazine7';

		sample.flipbook = $('<div />', {'class': bookClass}).
			html('<div ignore="1" class="next-button"></div> <div ignore="1" class="previous-button"></div>').
			appendTo($('#book-zoom'));
		
	
		sample.flipbook.find('.next-button').mouseover(function() {
			$(this).addClass('next-button-hover');
		}).mouseout(function() {
			$(this).removeClass('next-button-hover');
		}).mousedown(function() {
			$(this).addClass('next-button-down');
			return false;
		}).mouseup(function() {
			$(this).removeClass('next-button-down');
		}).click(function() {
			sample.flipbook.turn('next');
		});
	
		sample.flipbook.find('.previous-button').mouseover(function() {
			$(this).addClass('previous-button-hover');
		}).mouseout(function() {
			$(this).removeClass('previous-button-hover');
		}).mousedown(function() {
			$(this).addClass('previous-button-down');
			return false;
		}).mouseup(function() {
			$(this).removeClass('previous-button-down');
		}).click(function() {
			sample.flipbook.turn('previous');
		});

		loadFlipbook(sample.flipbook);

	} else {
			
		bookshelf.showSample();

	}

	});

});

})(jQuery);