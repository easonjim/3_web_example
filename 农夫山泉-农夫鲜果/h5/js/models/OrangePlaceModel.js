!(function () {
	define('OrangePlaceModel', function (require, exports, module) {
		var Model=function(){
			var _Self = this;
			//创建canvas对象模块
			var _CJSModel=_Self.CJSModel = ccjs.CCJSModel.Create({width:640,height:1100,fps:30});
			var _Canvas=_CJSModel.Canvas;
            var _SiteModel = seajs.require('SiteModel');
            var _MainModel=seajs.require('MainModel');
            var _SiteTL=_SiteModel.SiteTL;
			var _View
			this.View;
			Init();
			function Init(){
				_View=document.createElement('div');
				_View.id='orangePlace';
				_Self.View=_View=$(_View);
				_View.append(_Canvas);
			}

			/*开始加载模块的资源*/
			this.InitLoadAssets=function (){
				// log('OrangePlaceModel LoadAssets')
				InitUI();
				return;
				//创建一个加载loading的对象，这个对象具体参数设置请查看ccjs.LoadCJSAssets方法（在createjs核心库里面有）
				var loadObj={
					basePath:'./assets/'
					//js路径
					,jsUrl:'PlaceSkin.js'
					//注意：spritesheet 资源列表  cc 2016.2以后不需要json进行解析额了
					// ,ssList:[
					// 	{src:"images/load/loadPanel_atlas_P_.json", type:"spritesheet", id:"loadPanel_atlas_P_"}
					// ]
					//输出js的命名空间 用来加载除spritesheet资源外的其他图片资源 空值默认lib
					,jsNS:'placeLib'
					//输出images的命名空间 用来加载除spritesheet资源外的其他图片资源 空值默认images
					,imgNS:'placeImages'
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
			var _MoviePanel,_Panel;
			function InitUI(){
				if(_MoviePanel)return;
				_CJSModel.Root.removeAllChildren();
				_MoviePanel=new placeLib.PlaceSkin();
				_CJSModel.Root.addChild(_MoviePanel);

				_Panel=_MoviePanel.panel;
				//名字
				var _name=_MainModel.BaseData.baseAdministrator;
				_Panel.labelPanel.label0.text=_name;
				//管理员头像
				setTimeout(function(){
					_Panel.labelPanel.adminImage.gotoAndStop(_name);
				},10);
				//基地信息
				_Panel.labelPanel.label1.text=_MainModel.BaseData.baseAddress;
				_Panel.map.tip.label.text=_MainModel.BaseData.plantBaseName;

				
				//管理员头像  目前未提供
				var _num=0;
				_Panel.labelPanel.adminImage.gotoAndStop(_num);
				//流水线
				_Panel.panel1.label1.text=_MainModel.BaseData.factoryName+_MainModel.BaseData.assemblyLine
				
			}
		};
		module.exports = new Model();
		
	});
})();