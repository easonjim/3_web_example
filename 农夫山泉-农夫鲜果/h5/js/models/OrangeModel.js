/*
追溯橙子模块
*/
!(function () {
	define('OrangeModel', function (require, exports, module) {
		var Model=function(){
			var _Self = this;
            var _SiteModel = seajs.require('SiteModel');
            var _MainModel=seajs.require('MainModel');
            var _SiteTL=_SiteModel.SiteTL;
			var _View
			this.View;
			Init();
			function Init(){
				log('OrangeModel Init')
				_View=document.createElement('div');
				_View.id='orangeView';
				_Self.View=_View=$(_View);
			};
			/*
			初始化子模块
			 */
			var _OrangeInfro,_OrangePlace,_OrangeFarmInfo,_OrangeFarming;
			var _QueryCodeError;
			function InitModel(){
				if(_OrangeInfro)return;
				_OrangeInfro=seajs.require('OrangeInfroModel');
				_OrangePlace=seajs.require('OrangePlaceModel');
				_OrangeFarmInfo=seajs.require('OrangeFarmInfoModel');
				_OrangeFarming=seajs.require('OrangeFarmingModel');

				_QueryCodeError=seajs.require('QueryCodeError');

				_View.append(_OrangeInfro.View);
				if(_MainModel.CodeError){
					// _View.append(_QueryCodeError.View);
				}
				else{
					_View.append(_OrangePlace.View);
					_View.append(_OrangeFarmInfo.View);
					_View.append(_OrangeFarming.View);
				}
				//更新是否滚动
				_Self.SetScrollBool(false);
				//开始进场
				_Self.MovieIn();

				var _myScroll=_MainModel.IScroller;
				
				_myScroll.on('scrollStart', function(){
					// log('scrollStart');
					_Self.SetTickEnabled(false);
				});
				
				_myScroll.on('scroll', function(){
					// log('scroll')
				})
				_myScroll.on('scrollEnd', function(){
					log('scrollEnd',_myScroll.y);
					// _Self.SetTickEnabled(true);
					UpStageTick();
				});

				
			}
			/*优化性能 多个canvas不要同时渲染*/
			function UpStageTick(){
				if(!_OrangeInfro)return;
				var _myScroll=_MainModel.IScroller;
				if(_myScroll.y<=-1300){
					_OrangeInfro.CJSModel.Stage.tickEnabled=false;
				}else{
					_OrangeInfro.CJSModel.Stage.tickEnabled=true;
				}

				if(_myScroll.y<=-2130||_myScroll.y>=-200){
					_OrangePlace.CJSModel.Stage.tickEnabled=false;
				}else{
					_OrangePlace.CJSModel.Stage.tickEnabled=true;
				}
				// log('_OrangeFarmInfo:',(_myScroll.y>=-3100&&_myScroll.y<=-1500))
				if(_myScroll.y>=-3100&&_myScroll.y<=-1500){
					_OrangeFarmInfo.CJSModel.Stage.tickEnabled=true;
				}else{
					_OrangeFarmInfo.CJSModel.Stage.tickEnabled=false;
				}

				if(_myScroll.y>=-2587){
					_OrangeFarming.CJSModel.Stage.tickEnabled=false;
				}else{
					_OrangeFarming.CJSModel.Stage.tickEnabled=true;
				}
			}
			/**
			 * canvas渲染开关，滚动时候的性能优化
			 * @param {[type]} bool [description]
			 */
			this.SetTickEnabled=function(bool){
				// return;
				if(!_OrangeInfro)return;
				if(_OrangeInfro.CJSModel)_OrangeInfro.CJSModel.Stage.tickEnabled =bool;
				if(_OrangePlace.CJSModel)_OrangePlace.CJSModel.Stage.tickEnabled =bool;
				if(_OrangeFarmInfo.CJSModel)_OrangeFarmInfo.CJSModel.Stage.tickEnabled =bool;
				if(_OrangeFarming.CJSModel)_OrangeFarming.CJSModel.Stage.tickEnabled =bool;
			}
			/*开始加载其他模块资源*/
			this.LoadOtherModelLoadAssets=function(){
				//二维码错误
				if(_MainModel.CodeError){
					// if(_QueryCodeError.InitLoadAssets)_QueryCodeError.InitLoadAssets();
				}else{
				//二维码正确
					if(_OrangePlace.InitLoadAssets)_OrangePlace.InitLoadAssets();
					if(_OrangeFarmInfo.InitLoadAssets)_OrangeFarmInfo.InitLoadAssets();
					if(_OrangeFarming.InitLoadAssets)_OrangeFarming.InitLoadAssets();
				}
			}
			/**
			 *  查询错误模块显示
			 */
			this.ShowQueryCodeError=function(){
				 _View.append(_QueryCodeError.View);
			}
			/*设置模块是否可以滚动*/
			this.SetScrollBool=function(bool){
				if(bool){
					_View.css({height:''})
				}
				else{
					_View.css({height:0});
				}
				_MainModel.IScroller.refresh();
			};
			/*模块进场*/
			this.MovieIn=function(){
				//第一次创建模块
				// if(!_OrangeInfro){
				// 	require.async(['./js/lib/cjs.0.8.1.min.js'],function(){
				// 		InitModel();
				// 	});
				// 	return;
				// }
				if(!_OrangeInfro){
					InitModel();
				}
				_OrangeInfro.MovieIn();
				_MainModel.IScroller.refresh();
				this.SetTickEnabled(true)
			};
			
		};
		module.exports = new Model();
	
	});
})();