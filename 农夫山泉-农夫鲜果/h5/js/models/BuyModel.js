!(function () {
	define('BuyModel', function (require, exports, module) {
		var Model=function(){
			var _Self = this;
            var _SiteModel = seajs.require('SiteModel');
            var _MainModel=seajs.require('MainModel');
            var _SiteTL=_SiteModel.SiteTL;
			var _View
			this.View;
			Init();
			function Init(){
				_View=document.createElement('div');
				_View.id='buyModel';
				_Self.View=_View=$(_View);
				
			}
			this.InitLoadAssets=InitLoadAssets
			function InitLoadAssets(){
				if(_Element)return;
				var _queueArr=[
'./images/buy/btn0.png',
'./images/buy/btn1.png',
'./images/buy/btn2.png',
'./images/buy/p0.png',
'./images/buy/pinfo0.png',
'./images/buy/pinfo1.png',
'./images/buy/title.png',
				];
				var _queue = new createjs.LoadQueue(true);
				_queue.addEventListener("complete", queueComplete);
				_queue.loadManifest(_queueArr);
				function queueComplete(e) {
					InitUI();
				}
			}
			var _Element
			function InitUI() {
				if(_Element)return;
				require.async(['./html/BuyModel.html'],function(html){
					_Element=$(html);
					_View.append($(_Element));

					for (var i = 0; i < 3; i++) {
						var _btn=_View.find('.buyPanel .panel .btn'+i)[0];
						_btn.cid=i;
						$(_btn).on('click',function(e){
							// log(this.cid);
							if(this.cid==0)window.location.href='https://item.jd.com/4090242.html'
							if(this.cid==1)window.location.href='https://detail.tmall.com/item.htm?id=540857832486'
							if(this.cid==2)window.location.href='http://www.huaguoshan.com/Product/11244.html'
							JT.fromTo(this,.4,{scaleX:.8,scaleY:.8},{scaleX:1,scaleY:1,ease:JT.Circ.InOut});
						});
					}
					if(_MainModel.PageLabel=='BoxModel')_Self.MovieIn();
				});
			}
			this.MovieIn=function(){
				log('BuyModel MovieIn');
				if(!_Element){
					InitUI();
					return;
				}
				
				var _temp=_View.find('.product .img');
				JT.fromTo(_temp,.5,{opacity:0,y:30},{opacity:1,y:0});
				_temp=_View.find('.product .pinfo0');
				JT.fromTo(_temp,.5,{opacity:0,y:30},{delay:.2,opacity:1,y:0});
				_temp=_View.find('.product .pinfo1');
				JT.fromTo(_temp,.3,{opacity:0,y:30},{delay:.4,opacity:1,y:0});

				_temp=_View.find('.buyPanel .title');
				JT.fromTo(_temp,.5,{opacity:0},{delay:.6,opacity:1});
				for (var i = 0; i < 3; i++) {
					_temp=_View.find('.buyPanel .panel .btn'+i);
					JT.fromTo(_temp,.4,{opacity:0,scaleX:.2,scaleY:.2},{delay:.8+.2*i,opacity:1,scaleX:1,scaleY:1,ease:JT.Circ.InOut});
				}
				
				
				UpData();
				
				_MainModel.IScroller.scrollTo(0,0);
				_MainModel.IScroller.refresh();

			};

			function UpData() {
				
			}
		};
		module.exports = new Model();
	});
})();