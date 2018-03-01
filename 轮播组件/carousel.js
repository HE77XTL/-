
function Carousel($ct){
	this.$ct = $ct;
	this.init();
	this.bind();
}

Carousel.prototype.init = function(){
	var clock = this.clock;
	this.isAnimate = false;
	var timeoutID = this.timeoutID;
	this.curIdx = 1;
	var $bulletChildren =this.$bulletChildren = this.$ct.find('.bullet li')
	var $imgCt = this.$imgCt = this.$ct.find('.img-ct');
	var imgCount = this.imgCount = this.$ct.find('.img-ct').children().length
	var imgWidth = this.imgWidth = this.$ct.find('.first-img').width()
	var imgCtLength =this.imgCtLength = (imgCount+2)*imgWidth
	this.$imgCt.width(imgCtLength)
	var $firstImg = this.$firstImg = this.$ct.find('.first-img')
	var $lastImg = this.$lastImg = this.$ct.find('.last-img')
	$firstImg.clone().appendTo($imgCt)
	$lastImg.clone().prependTo($imgCt)

	this.$pre = this.$ct.find($('.pre'));
	this.$next = this.$ct.find($('.next'))
}

Carousel.prototype.bind = function(){
	var _this = this;
	this.$pre.on('click',function(){
		_this.play(_this.curIdx-1);
	})
	this.$next.on('click',function(){
		_this.play(_this.curIdx+1);
	})
	this.$bulletChildren.on('click',function(){
		$(this).index()
		console.log($(this).index()+1)
		_this.play($(this).index()+1)
	})
}

Carousel.prototype.play = function(index){
	var _this = this;
	// console.log("ok"+index)
	if(_this.isAnimate){
		return
	}
	_this.isAnimate = true

	_this.$imgCt.animate({
		left: -index*_this.imgWidth
	},function(){
		_this.curIdx = index;
		if(index == 0){
			_this.$imgCt.css({
				left: -(_this.imgCount)*_this.imgWidth
			})
			_this.curIdx = _this.imgCount
		}
		if(index == _this.imgCount+1){
			_this.$imgCt.css({
				left: -_this.imgWidth
			})
			_this.curIdx = 1
		}
		_this.bulletShow(_this.curIdx)
		_this.isAnimate = false
	})
}

Carousel.prototype.bulletShow = function (index){
	// console.log(index)
	this.$bulletChildren.removeClass('active')
	this.$bulletChildren.eq(index-1).addClass('active')
}




new Carousel($('.carousel').eq(0))
new Carousel($('.carousel').eq(1))













// var $bulletChildren = $('.bullet li')

// var $imgCt = $('.img-ct');
// var curIdx = 1;
// var imgCount = $('.img-ct').children().length
// var imgWidth = $('.first-img').width()
// var imgCtLength = (imgCount+2)*imgWidth
// var isAnimate = false
// var clock
// var timeoutID


// $('.img-ct').width(imgCtLength)
// // console.log(imgCount)
// // console.log(imgCtLength)


// $('.first-img').clone().appendTo($imgCt)
// $('.last-img').clone().prependTo($imgCt)



// $('.pre').on('click',function(){
// 	play(curIdx-1);
// })
// $('.next').on('click',function(){
// 	play(curIdx+1);
// })
// $bulletChildren.on('click',function(){
// 	$(this).index()
// 	console.log($(this).index()+1)
// 	play($(this).index()+1)
// })






// function play(index){
// 	// console.log("ok"+index)
// 	if(isAnimate){
// 		return
// 	}
// 	isAnimate = true

// 	$('.img-ct').animate({
// 		left: -index*imgWidth
// 	},function(){
// 		curIdx = index;
// 		if(index == 0){
// 			$('.img-ct').css({
// 				left: -(imgCount)*imgWidth
// 			})
// 			curIdx = imgCount
// 		}
// 		if(index == imgCount+1){
// 			$('.img-ct').css({
// 				left: -imgWidth
// 			})
// 			curIdx = 1
// 		}
// 		bulletShow(curIdx)
// 		isAnimate = false
// 	})

	
// }

// function bulletShow(index){
// 	// console.log(index)
// 	$bulletChildren.removeClass('active')
// 	$bulletChildren.eq(index-1).addClass('active')

// }

// $('#panel').on('mouseleave',function(){
// 	$('.btn').css({
// 		opacity:0
// 	})
// 	$('.bullet').css({
// 		opacity:0
// 	})
// 	clearInterval(clock)
// 	clearTimeout(timeoutID)
// 	timeoutID = setTimeout(autoPlay)

// })

// $('#panel').on('mouseenter',function(){
// 	$('.btn').css({
// 		opacity:0.8
// 	})
// 	$('.bullet').css({
// 		opacity:0.8
// 	})
// 	clearInterval(clock)

// })

// // $(window).load(function(){
// // 	console.log('kaka')
	
	
// // })


// $(window).on('load',function () {
//   	console.log('ok')
//   	autoPlay()
	
// });

// function autoPlay(){
// 	clearInterval(clock)
//     clock = setInterval(function(){
// 		play(curIdx+1);
// 	},2000)
// }
