function Exposure($ct){
	this.clock = false;
	this.$ct = $ct;
	this.loadImg();
	this.bind()
}

Exposure.prototype.bind = function(){
	var _this = this
	$(window).on('scroll',function(){
		if(_this.clock){
			clearTimeout(_this.clock)
		}
		_this.clock = setTimeout(function(){
			_this.loadImg()
		},200)
	})
}

Exposure.prototype.loadImg = function(){
	var _this = this
	var $li = _this.$ct.find('li')
	// console.log($li)
	$li.not('.isLoad').each(function (){
		var $this = $(this)
        // console.log($this)
        // console.log(isVisible($this))
		if(_this.isVisible($this)){
			$this.addClass('isLoad')
			$this.find('img').attr('src', $this.find('img').attr('data-img'))
		}
	})
}

Exposure.prototype.isVisible = function($node){
	var a = $($node).offset().top;
    var b= $(window).scrollTop();
    var c = $(window).height()
    if(a>b&&a<(b+c)){
        return true
    }else{
        return false
    }
}

new Exposure($('.exposure'))







// loadImg() 

// var clock = false
// $(window).on('scroll',function(){
// 	if(clock){
// 		clearTimeout(clock)
// 	}
// 	clock = setTimeout(function(){
// 		loadImg()
// 	},200)
// })




// // $(window).on('scroll',loadImg)


// function loadImg(){
// 	var $li = $('ul li')
// 	// console.log($li)
// 	$li.not('.isLoad').each(function (){
// 		var $this = $(this)
//         // console.log($this)
//         // console.log(isVisible($this))
// 		if(isVisible($this)){
// 			$this.addClass('isLoad')
// 			$this.find('img').attr('src', $this.find('img').attr('data-img'))
// 		}
// 	})
// }


//  function isVisible($node){
//     var a = $($node).offset().top;
//     var b= $(window).scrollTop();
//     var c = $(window).height()
//     if(a>b&&a<(b+c)){
//         return true
//     }else{
//         return false
//     }
//  }