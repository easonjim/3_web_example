!(function () {
	define('MenuModel', function (require, exports, module) {
		var Model=function(){
			var _Self = this;
			var _SiteModel = seajs.require('SiteModel');
            var _MainModel=seajs.require('MainModel');
            var _SiteTL=_SiteModel.SiteTL;
            var _View
			this.View;
			Init();
			function Init(){
				_View=$('#menu')
				_Self.View=_View;
				var _arr=$('#menu .menuBtn')
				for (var i = 0; i < 4; i++) {
					var _btn=_arr[i];
					_btn.cid=i;
					$(_btn).on('click',function(e) {
						if(this.cid==0){
							if(_MainModel.MenuError)return;
							if(_MainModel.IsBox){
								//箱子
								_MainModel.GotoPage('BoxModel');
							}else{
								//橙子
								_MainModel.GotoPage('OrangeModel');
							}
							_Self.SelectMenu(0)
						}
						if(this.cid==1){
							if(_MainModel.MenuError)return;
							_MainModel.GotoPage('TracingFlowModel')
							_Self.SelectMenu(1)
						}
						if(this.cid==2){
							_MainModel.GotoPage('BuyModel')
							_Self.SelectMenu(2)
						}
						if(this.cid==3){
							if(_MainModel.MenuError)return;
							_MainModel.GotoPage('ContactUs')
							_Self.SelectMenu(3)
						}
					});
				}
			};
			this.SelectMenu=function (value) {
			
				if(value==0||value==1){
					if(_MainModel.CodeError)return;
				}
				var _arr=$('#menu .menuBtn')
				for (var i = 0; i < _arr.length; i++) {
					var _btn=_arr[i];
					$(_btn).removeClass('Select');
				}
				_btn=_arr[value];
				$(_btn).addClass('Select');

			}

			this.Open=function(bool){
				if(bool){
					_View.show();
					JT.set(_View[0],{y:100})
					JT.to(_View[0],.5,{y:0})
				}
				else _View.hide();
			}

			this.ShowError=function(bool){
				if(bool){
					$($('#menu .menuBtn')[0]).addClass('Disable')
					$($('#menu .menuBtn')[1]).addClass('Disable')
					$($('#menu .menuBtn')[3]).addClass('Disable')
				}
				else{
					$($('#menu .menuBtn')[0]).removeClass('Disable')
					$($('#menu .menuBtn')[1]).removeClass('Disable')
					$($('#menu .menuBtn')[3]).removeClass('Disable')
				}
				
			}


		};
		module.exports = new Model();

	});
})();