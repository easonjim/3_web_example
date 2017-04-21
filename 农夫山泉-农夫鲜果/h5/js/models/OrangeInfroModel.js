/**
 * 橙子验证动画模块
 * 1、橙子验证动画
 * 2、橙子资源加载动画
 * @return {[type]} [description]
 */
!(function () {
	define('OrangeInfroModel', function (require, exports, module) {
		var Model=function(){
			//一个loading的动画 UI
		
			var _Self = this;
			//创建canvas对象模块
			var _CJSModel=_Self.CJSModel = ccjs.CCJSModel.Create({width:640,height:1200,fps:30});
			var _Canvas=_CJSModel.Canvas;
			var _Root=_CJSModel.Root;
            var _SiteModel = seajs.require('SiteModel');
            var _MainModel=seajs.require('MainModel');
            var _SiteTL=_SiteModel.SiteTL;
			var _View
			this.View;
			Init();
			function Init(){
				_View=document.createElement('div');
				_View.id='orangeInfro';
				_Self.View=_View=$(_View);
				_View.append(_Canvas);
			}
			var _LoadPanel;
			/*初始化LoadPanel*/
			function InitLoadPanel(){
				log('OrangeInfroModel loading')
				//创建一个加载loading的对象，这个对象具体参数设置请查看ccjs.LoadCJSAssets方法（在createjs核心库里面有）
				var loadObj={
					basePath:'./assets/'
					//js路径
					,jsUrl:'loadSkin.js'
					//注意：spritesheet 资源列表  cc 2016.2以后不需要json进行解析额了
					// ,ssList:[
					// 	{src:"images/load/loadPanel_atlas_P_.json", type:"spritesheet", id:"loadPanel_atlas_P_"}
					// ]
					//输出js的命名空间 用来加载除spritesheet资源外的其他图片资源 空值默认lib
					,jsNS:'loadLib'
					//输出images的命名空间 用来加载除spritesheet资源外的其他图片资源 空值默认images
					,imgNS:'loadImages'
					//加载完成后调用的方法
					,complete:onComplete
					//加载进行调用的方法
					,progress:onProgress
					//加载方式 初始化LoadQueue的crossOrigin参数
					,loadType:false
				}
				//loading加载完成后的方法处理
				function onComplete(e){
					_LoadPanel=new loadLib.loadSkin();
					_CJSModel.Root.addChild(_LoadPanel);
					InitHomePanel();
				};
				//loading加载过程中方法处理
				function onProgress(e){var progress=e.target.progress;};
				//开始加载loading的资源
				ccjs.LoadCJSAssets(loadObj);
			};
			function InitHomePanel(){
				log('OrangeInfroModel load HomePanel')
				//创建一个加载loading的对象，这个对象具体参数设置请查看ccjs.LoadCJSAssets方法（在createjs核心库里面有）
				var loadObj={
					basePath:'./assets/'
					//js路径
					,jsUrl:'HomeSkin.js'
					//注意：spritesheet 资源列表  cc 2016.2以后不需要json进行解析额了
					// ,ssList:[
					// 	{src:"images/load/loadPanel_atlas_P_.json", type:"spritesheet", id:"loadPanel_atlas_P_"}
					// ]
					//输出js的命名空间 用来加载除spritesheet资源外的其他图片资源 空值默认lib
					// ,jsNS:'loadLib'
					//输出images的命名空间 用来加载除spritesheet资源外的其他图片资源 空值默认images
					// ,imgNS:'loadImages'
					//加载完成后调用的方法
					,complete:onComplete
					//加载进行调用的方法
					,progress:onProgress
					//加载方式 初始化LoadQueue的crossOrigin参数
					,loadType:true
				}
				//loading加载完成后的方法处理
				function onComplete(e){
					if(_MainModel.CodeError){
						_Self.LoadEndMovieIn();
					}else{
						//二维码正确
						// if(_OrangePlace.InitLoadAssets)_OrangePlace.InitLoadAssets();
						// if(_OrangeFarmInfo.InitLoadAssets)_OrangeFarmInfo.InitLoadAssets();
						// if(_OrangeFarming.InitLoadAssets)_OrangeFarming.InitLoadAssets();
						PlaceSkinLoadAssets();
					}
					
				};
				//loading加载过程中方法处理
				function onProgress(e){
					var progress=e.target.progress;
					_LoadPanel.loadPanel.mc.label.text=(10*progress>>0)+'%'
				};
				//开始加载loading的资源
				ccjs.LoadCJSAssets(loadObj);
			};
			/*开始加载模块的资源*/
			function PlaceSkinLoadAssets(){
				log('OrangePlaceModel LoadAssets')
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
					,loadType:true
				}
				//loading加载完成后的方法处理
				function onComplete(e){
					FarmInfoSkinLoadAssets();
				};
				//loading加载过程中方法处理
				function onProgress(e){
					var progress=e.target.progress;
					_LoadPanel.loadPanel.mc.label.text=(10+(10*progress>>0))+'%'
				};
				//开始加载loading的资源
				ccjs.LoadCJSAssets(loadObj);
			};
			/*开始加载模块的资源*/
			function FarmInfoSkinLoadAssets(){
				log('OrangeFarmInfoModel LoadAssets')
				//创建一个加载loading的对象，这个对象具体参数设置请查看ccjs.LoadCJSAssets方法（在createjs核心库里面有）
				var loadObj={
					basePath:'./assets/'
					//js路径
					,jsUrl:'FarmInfoSkin.js'
					//注意：spritesheet 资源列表  cc 2016.2以后不需要json进行解析额了
					// ,ssList:[
					// 	{src:"images/load/loadPanel_atlas_P_.json", type:"spritesheet", id:"loadPanel_atlas_P_"}
					// ]
					//输出js的命名空间 用来加载除spritesheet资源外的其他图片资源 空值默认lib
					,jsNS:'farmInfoLib'
					//输出images的命名空间 用来加载除spritesheet资源外的其他图片资源 空值默认images
					,imgNS:'farmInfoImages'
					//加载完成后调用的方法
					,complete:onComplete
					//加载进行调用的方法
					,progress:onProgress
					//加载方式 初始化LoadQueue的crossOrigin参数
					,loadType:true
				}
				//loading加载完成后的方法处理
				function onComplete(e){
					FarmingSkinLoadAssets();
				};
				//loading加载过程中方法处理
				function onProgress(e){
					var progress=e.target.progress;
					_LoadPanel.loadPanel.mc.label.text=(20+(10*progress>>0))+'%';
				};
				//开始加载loading的资源
				ccjs.LoadCJSAssets(loadObj);
			};
			/*开始加载模块的资源*/
			function FarmingSkinLoadAssets(){
				log('OrangeFarmingModel LoadAssets')
				//创建一个加载loading的对象，这个对象具体参数设置请查看ccjs.LoadCJSAssets方法（在createjs核心库里面有）
				var loadObj={
					basePath:'./assets/'
					//js路径
					,jsUrl:'FarmingSkin.js'
					//注意：spritesheet 资源列表  cc 2016.2以后不需要json进行解析额了
					// ,ssList:[
					// 	{src:"images/load/loadPanel_atlas_P_.json", type:"spritesheet", id:"loadPanel_atlas_P_"}
					// ]
					//输出js的命名空间 用来加载除spritesheet资源外的其他图片资源 空值默认lib
					,jsNS:'farmingLib'
					//输出images的命名空间 用来加载除spritesheet资源外的其他图片资源 空值默认images
					,imgNS:'farmingImages'
					//加载完成后调用的方法
					,complete:onComplete
					//加载进行调用的方法
					,progress:onProgress
					//加载方式 初始化LoadQueue的crossOrigin参数
					,loadType:true
				}
				//loading加载完成后的方法处理
				function onComplete(e){
					if(_MainModel.CodeError){
						
					}else{
						//二维码正确
						_Self.LoadEndMovieIn();
					};
					
				};
				//loading加载过程中方法处理
				function onProgress(e){
					var progress=e.target.progress;
					_LoadPanel.loadPanel.mc.label.text=(30+(10*progress>>0))+'%';
				};
				//开始加载loading的资源
				ccjs.LoadCJSAssets(loadObj);
			};


			var _HomePanel,_HomeMovie;
			this.LoadEndMovieIn=function(){
				log('homeMovie Start')
				_CJSModel.Root.removeAllChildren();
				if(_LoadPanel.parent)_LoadPanel.parent.removeChild(_LoadPanel)
					
				_HomePanel=new lib.HomeSkin();
				_HomeMovie=_HomePanel.homeMovie;
				window._HomeMovie=_HomeMovie;
				_Root.removeAllChildren();
				// _Root.removeAllChildren();
				_Root.addChild(_HomePanel);



				

				var _levelNum=0;
				if(_MainModel.BaseData.startLevel){
					if(_MainModel.BaseData.startLevel.indexOf('黄金')!=-1)_levelNum=0;
					if(_MainModel.BaseData.startLevel.indexOf('铂金')!=-1)_levelNum=1;
					if(_MainModel.BaseData.startLevel.indexOf('钻石')!=-1)_levelNum=2;
				}
				

				// log('ccc:',_MainModel.BaseData.startLevel,_levelNum,_HomeMovie.tiebiao)
				
				_HomeMovie.on('tie1',function(){
					_HomeMovie.tiebiao.gotoAndStop(_levelNum);
				})
				_HomeMovie.on('tie2',function(){
					_HomeMovie.tiebiaoBox.tiebiao.gotoAndStop(_levelNum);
				});



				if(_MainModel.ActivationCode&&_MainModel.Success&&!_MainModel.CodeError){
					//让其他橙子模块也开始加载
					seajs.require('OrangeModel').LoadOtherModelLoadAssets();
					_MainModel.LoadOtherAssets();
				}
				if(!_MainModel.Success||!_MainModel.ActivationCode)_HomeMovie.tip1.visible=false;
				
				

				// if(_SiteModel.Debug){
				// 	setTimeout(function(){
				// 		ToCorrectOrError();
				// 		HomeEnd();
				// 		_MainModel.IScroller.scrollTo(0,-1200-1100+100);
				// 	},10);
				// }else{
					setTimeout(function(){
						_HomeMovie.play();
					},10);

					var _obj={value:10};
					if(_MainModel.CodeError){
						_obj.value=10;
					}else{
						_obj.value=40;
					};
					JT.to(_obj,5,{value:100,
						onUpdate:function(){
							_HomeMovie.labelMc.label.text=(_obj.value>>0)+'%';
						},
						onEnd:function(){
							ToCorrectOrError();
						}
					});
				// }
			};
			function ToCorrectOrError(){
				_HomeMovie.codePanel0.label.text=_MainModel.Code||window.siteModel.Code;
				_HomeMovie.codelabel.text=_MainModel.Code||window.siteModel.Code;

				//正确
				if(_MainModel.Success&&_MainModel.CodeLevel==1&&!_MainModel.CodeError&&_MainModel.ActivationCode){
					_HomeMovie.gotoAndStop('correct');
					_HomeMovie.codePanel0.gotoAndStop(0);
					_HomeMovie.play();
				}
				//非法情况
				else if(!_MainModel.Success&&_MainModel.CodeLevel==0){
					_HomeMovie.gotoAndStop('correct');
					_HomeMovie.codePanel0.gotoAndStop(2);
					_HomeMovie.play();
				}
				//跳转到橙子扫码记录页面
				else if(_MainModel.Success&&_MainModel.CodeError){
					_HomeMovie.gotoAndStop('error');
					_HomeMovie.play();
				}
				//跳转橙码未激活页面
				else if(_MainModel.Success&&!_MainModel.ActivationCode&&_MainModel.CodeLevel==1){
					_HomeMovie.gotoAndStop('correct');
					_HomeMovie.codePanel0.gotoAndStop(1);
					_HomeMovie.play();
				}
				//跳转橙码未激活页面
				else if(!_MainModel.Success&&_MainModel.CodeLevel==1){
					_HomeMovie.gotoAndStop('correct');
					_HomeMovie.codePanel0.gotoAndStop(1);
					_HomeMovie.play();
				}

				if(_MainModel.BaseData.startLevel)_HomeMovie.dataMc.label0.text=_MainModel.BaseData.startLevel;
				if(_MainModel.BaseData.categoryName)_HomeMovie.dataMc.label1.text=_MainModel.BaseData.categoryName;
				
				_HomeMovie.on('correctEnd',correctEnd);
				_HomeMovie.on('errorEnd',errorEnd);
				_HomeMovie.on('homeEnd',HomeEnd);

				function correctEnd(){
					log('correctEnd:',_MainModel.ActivationCode);

					//正确
					if(_MainModel.Success&&_MainModel.CodeLevel==1&&!_MainModel.CodeError&&_MainModel.ActivationCode){
						_HomeMovie.codePanel0.gotoAndStop(0);
					}

					//非法情况
					else if(!_MainModel.Success&&_MainModel.CodeLevel==0){
						_HomeMovie.codePanel0.gotoAndStop(2);
						// seajs.require('OrangeModel').SetScrollBool(true);
						seajs.require('MenuModel').Open(true)
						return;
					}
					//跳转橙码未激活页面
					else if(_MainModel.Success&&!_MainModel.ActivationCode&&_MainModel.CodeLevel==1){
						_HomeMovie.codePanel0.gotoAndStop(1);
						// seajs.require('OrangeModel').SetScrollBool(true);
						seajs.require('MenuModel').Open(true)
						return;
					}
					//跳转橙码未激活页面
					else if(!_MainModel.Success&&_MainModel.CodeLevel==1){
						_HomeMovie.codePanel0.gotoAndStop(1);
						// seajs.require('OrangeModel').SetScrollBool(true);
						seajs.require('MenuModel').Open(true)
						return;
					}

					/*//如果编码错误，那我们不做滑动操作
					if(!_MainModel.ActivationCode&&_MainModel.Success){
						_HomeMovie.lingtMC.visible=false;
						_HomeMovie.codePanel0.gotoAndStop(1);
						seajs.require('OrangeModel').SetScrollBool(true);
						seajs.require('MenuModel').Open(true)
						return;
					}
					else if(!_MainModel.Success){
						_HomeMovie.lingtMC.visible=false;
						_HomeMovie.codePanel0.gotoAndStop(2)
						// _HomeMovie.tip1.visible=false;
						seajs.require('OrangeModel').SetScrollBool(true);
						seajs.require('MenuModel').Open(true)
						return;
					}*/
					_HomeMovie.codePanel0.gotoAndStop(0)
					touch.on( _Canvas, 'swipeup',toHome);
					function toHome(){
						if(_MainModel.PageLabel!='OrangeModel')return;
						touch.off( _Canvas, 'swipeup', toHome);
						_HomeMovie.gotoAndStop('home');
						_HomeMovie.play();
					};
				}
				function errorEnd(){
					touch.on( _Canvas, 'swipeup',toError);
					function toError(){
						if(_MainModel.PageLabel!='OrangeModel')return;
						touch.off( _Canvas, 'swipeup', toError);
						ErrorEnd();
					}
				}
			}
			function HomeEnd(){
				if(_MainModel.PageLabel!='OrangeModel')return;
				log('HomeEnd')
				// _MainModel.IScroller.refresh();
				seajs.require('OrangeModel').SetScrollBool(true);
				seajs.require('MenuModel').Open(true)
				// if(!_SiteModel.Debug){
					var _obj={v:0}
					JT.to(_obj,2,{delay:2,v:-1200,onUpdate:function(){
						if(_MainModel.PageLabel!='OrangeModel')return;
						_MainModel.IScroller.scrollTo(0,_obj.v);
					}})
				// }
				
				
			}
			function ErrorEnd(){
				log('ErrorEnd');
				_HomeMovie.tip2.visible=false;
				seajs.require('OrangeModel').SetScrollBool(true)
				seajs.require('MenuModel').Open(true)
				//到显示查询错误
				_MainModel.GotoPage('QueryCodeError');
			}

			this.MovieIn=function (){
				if(!_LoadPanel){
					InitLoadPanel();
					return;
				};
				
			};
		};
		module.exports = new Model();
	});
})();