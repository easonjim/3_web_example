!(function () {
	define('TracingFlowModel', function (require, exports, module) {
		var Model=function(){
			var _Self = this;
            var _SiteModel = seajs.require('SiteModel');
            var _MainModel=seajs.require('MainModel');
            var _CJSModel=_Self.CJSModel = ccjs.CCJSModel.Create({width:640,height:1100,fps:30});
			var _Canvas=_CJSModel.Canvas;
            var _SiteTL=_SiteModel.SiteTL;
			var _View
			this.View;
			Init();
			function Init(){
				_View=document.createElement('div');
				_View.id='tracingFlow';
				_Self.View=_View=$(_View);
				_View.append(_Canvas);
				_CJSModel.Stage.tickEnabled =false;
			};
			/*var _Element
			function InitUI() {
				if(_Element)return;
				require.async(['./html/tracingFlow.html'],function(html){
					_Element=$(html);
					_View.append($(_Element));
				
					_Self.MovieIn();
				});
			}*/
			/*开始加载模块的资源*/
			this.InitLoadAssets=InitLoadAssets
			function InitLoadAssets(){
				log('TracingFlowModel LoadAssets')
				//创建一个加载loading的对象，这个对象具体参数设置请查看ccjs.LoadCJSAssets方法（在createjs核心库里面有）
				var loadObj={
					basePath:'./assets/'
					//js路径
					,jsUrl:'tracingFlow.js'
					//注意：spritesheet 资源列表  cc 2016.2以后不需要json进行解析额了
					// ,ssList:[
					// 	{src:"images/load/loadPanel_atlas_P_.json", type:"spritesheet", id:"loadPanel_atlas_P_"}
					// ]
					//输出js的命名空间 用来加载除spritesheet资源外的其他图片资源 空值默认lib
					,jsNS:'tracingFlowLib'
					//输出images的命名空间 用来加载除spritesheet资源外的其他图片资源 空值默认images
					,imgNS:'tracingFlowImages'
					//加载完成后调用的方法
					,complete:onComplete
					//加载进行调用的方法
					,progress:onProgress
					//加载方式 初始化LoadQueue的crossOrigin参数
					,loadType:false
				}
				//loading加载完成后的方法处理
				function onComplete(e){
					InitUI();
				};
				//loading加载过程中方法处理
				function onProgress(e){var progress=e.target.progress;};
				//开始加载loading的资源
				ccjs.LoadCJSAssets(loadObj);
			};
			var _BPanel,_OPanel;
			function InitUI(){
				
				_BPanel=new tracingFlowLib.BPanel();
				_OPanel=new tracingFlowLib.OPanel();
				log('InitUI:',_MainModel.PageLabel);
				if(_MainModel.PageLabel=='TracingFlowModel')_Self.MovieIn();
				
			}
			this.MovieIn=function(){
				log('TracingFlowModel MovieIn',_MainModel.IsBox,_BPanel);
				if(!_BPanel){
					InitLoadAssets();
					return;
				}
				_CJSModel.Stage.tickEnabled =true;
				_CJSModel.Root.removeAllChildren();
				if(_MainModel.IsBox){
					_CJSModel.Root.addChild(_BPanel);
					_BPanel.gotoAndPlay(1);
				}
				else{
					_CJSModel.Root.addChild(_OPanel);
					_OPanel.gotoAndPlay(1);
				}
				_MainModel.IScroller.scrollTo(0,0);
				_MainModel.IScroller.refresh();

				
			}
			this.CloseTickEnabled=function(){
				_CJSModel.Stage.tickEnabled =false;
			}
		};
		module.exports = new Model();
	});
})();