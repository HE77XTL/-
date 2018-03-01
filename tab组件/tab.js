function Tab(ct){
    var _this = this
    this.ct = ct
    this.header = this.ct.querySelector('.header');
    this.ctn = this.ct.querySelectorAll('.content>li');
    this.headerLis = this.ct.querySelectorAll('.header>li');
    this.bind()
}

Tab.prototype.bind = function(){
    var _this = this
    this.header.addEventListener('click',Active,false);
    function Active(event){
        var liNode = event.target;
        if(liNode.tagName.toLowerCase()==='li'){
            for(var i=0; i<_this.headerLis.length;i++){
                _this.headerLis[i].classList.remove('active');
            }
            liNode.classList.add('active');

            for(var j=0; j<_this.headerLis.length; j++){
                if(_this.headerLis[j] === liNode){
                    var index = j;
                }
            }

            for(var k=0; k<_this.ctn.length; k++){
                _this.ctn[k].classList.remove('show');
            }
            _this.ctn[index].classList.add('show');
        }
    }   
}

var tab1 = new Tab(document.querySelectorAll('.panel')[0])
var tab2 = new Tab(document.querySelectorAll('.panel')[1])

