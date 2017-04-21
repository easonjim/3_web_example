!(function () {
	define('OrangeFarmInfoModel', function (require, exports, module) {
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
				_View.id='orangeFarmInfo';
				_Self.View=_View=$(_View);
				_View.append(_Canvas);
			}
			/*开始加载模块的资源*/
			this.InitLoadAssets=function (){
				// log('OrangeFarmInfoModel LoadAssets')
				InitUI();
				return;
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
			var _MoviePanel,_Panel,_PageNum=-1;
			function InitUI(){
				if(_MoviePanel)return;
				_MoviePanel=new farmInfoLib.FarmInfoSkin();
				_CJSModel.Root.addChild(_MoviePanel);
				_Panel=_MoviePanel.panel;
				//地区介绍  应该是片区 但目前没有这个字段
				
				_Panel.label.text=_MainModel.BaseData.plantBaseName+'介绍'
				
				//管理员头像
				var _name=_MainModel.BaseData.baseAdministrator;
				setTimeout(function(){
					_Panel.adminImage.gotoAndStop(_name);
				},10);
				
				//管理员说的话
				_Panel.adminText.text=_MainModel.BaseData.baseDescription//'“我管理的这个片区是赣南最早开始种植脐橙的，\n这里种出来的果子相当甜!”';

				//多少树木
				
				//树木数量
				_Panel.panel0.mc.label.text=ThousandBits(_MainModel.BaseData.amount+'');
				//平均气温
				_MainModel.BaseData.averageTemperature=Number(_MainModel.BaseData.averageTemperature.split('℃')[0])
				var _val=_MainModel.BaseData.averageTemperature;
				_Panel.panel1.mc0.label.text=_val+'';
				//温差
				if(_MainModel.BaseData.mostDiffTemperature.indexOf('-')!=-1){
					var _val=_MainModel.BaseData.mostDiffTemperature.split('-')[1];
				}
				else{
					_val=_MainModel.BaseData.mostDiffTemperature;
				}
				
				_val=Number(_val.split('℃')[0]);
				_MainModel.BaseData.mostDiffTemperature=_val;
				var _val=_val;
				_Panel.panel1.mc1.label.text=_val+'';
				//日照长度
				var  _val=_MainModel.BaseData.averageSunshineLenght.split('小时')[0]
				_MainModel.BaseData.averageSunshineLenght=Number(_val)
				_Panel.panel2.mc0.label.text=_MainModel.BaseData.averageSunshineLenght;
				//降雨量
				if(_MainModel.BaseData.averageRainfall.indexOf('-')!=-1){
					var  _arr=_MainModel.BaseData.averageRainfall.split('-');
					var  _val=Number(_arr[0])+(Number(_arr[1].split('毫米')[0])-Number(_arr[0]))/2;
				}else{
					var  _val=Number(_MainModel.BaseData.averageRainfall.split('毫米')[0])
				}
				_MainModel.BaseData.averageRainfall=_val;
				_Panel.panel2.mc1.label.text=_val;

				for (var i = 0; i < 3; i++) {
					var _btn=_Panel['mcBtn'+i];
					_btn.id=i;
					ccjs.SetButton(_btn);
					_btn.on('click',function(e){
						var _mc=e.target;
						GotoPage(_mc.id);
					})
				};

				_InfoBox=_Panel.infoBox;
				_InfoElement=document.createElement('div');
				_InfoElement.id='oinfo2Element';

				var _div=document.createElement('div');
				$(_div).addClass('info');
				$(_InfoElement).append($(_div));
				_InfoElement._div=_div;

				_View.append($(_InfoElement));

				var _domElement = new createjs.DOMElement(_InfoElement);
				_InfoBox.addChild(_domElement);

				$(_div).html(_MainModel.BaseData.baseDescription)

				touch.on( _Canvas, 'swipeleft',function(){Next()});
				touch.on( _Canvas, 'swiperight',function(){Previous()});
				_Panel.btn0.on('click',function(){Previous()})
				_Panel.btn1.on('click',function(){Next()});

				GotoPage(0);
			}
			function Next(){
				var _num=_PageNum+1;
				if(_num>=3)_num=0;
				GotoPage(_num);
			}
			function Previous(){
				var _num=_PageNum-1;
				if(_num<0)_num=2;
				GotoPage(_num);
			}
			function GotoPage(value){
				if(_PageNum==value)return;
				_PageNum=value;
				_CJSModel.Root.removeAllChildren();
				_CJSModel.Root.addChild(_MoviePanel);
				_Panel.gotoAndStop(value);

				if(value==0){
					log('GotoPage',value)
					var _temp0={v:0};
					var _val0=Number(_MainModel.BaseData.amount);
					JT.to(_temp0,1,{delay:.5,v:_val0,onUpdate:function(){
						var _vl=_temp0.v>>0;
						_Panel.panel0.mc.label.text=ThousandBits(_vl);
					}});
				}

				if(value==1){
					var _temp0={v:0};
					var _val0=_MainModel.BaseData.averageTemperature
					JT.to(_temp0,1,{delay:.5,v:_val0,onUpdate:function(){
						var _vl=_temp0.v>>0;
						_Panel.panel1.mc0.label.text=_vl+'';
					}});

					var _temp1={v:0};
					var _val1=_MainModel.BaseData.mostDiffTemperature;
					JT.to(_temp1,1,{delay:1.8,v:_val1,onUpdate:function(){
						var _vl=_temp1.v>>0;
						_Panel.panel1.mc1.label.text=_vl+'';
					}});
				}

				if(value==2){
					var _temp0={v:0};
					var _val0=_MainModel.BaseData.averageSunshineLenght;
					JT.to(_temp0,1,{delay:.5,v:_val0,onUpdate:function(){
						var _vl=_temp0.v>>0;
						_Panel.panel2.mc0.label.text=_vl+'';
					}});

					var _temp1={v:0};
					var _val1=_MainModel.BaseData.averageRainfall;
					JT.to(_temp1,1,{delay:1,v:_val1,onUpdate:function(){
						var _vl=_temp1.v>>0;
						_Panel.panel2.mc1.label.text=_vl+'';
					}});
				}
			}
			//添加千位符
			function ThousandBits(value){  
				var _str=value.toString();  
				var _length=_str.length;
				var _r='';
				for (var i = 0; i < _str.length; i++) {
					var _num=_str.length-i-1;
					if(_num%3==0&&i!=_str.length-1)_r=','+_str[_num]+_r;
					else _r=_str[_num]+_r;
				}
				return _r;  
			} 
		};
		module.exports = new Model();
		
	});
})();