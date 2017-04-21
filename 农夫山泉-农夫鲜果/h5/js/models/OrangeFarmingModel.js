!(function () {
	define('OrangeFarmingModel', function (require, exports, module) {
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
				_View.id='orangeFarming';
				_Self.View=_View=$(_View);
				_View.append(_Canvas);
			}
			var _Bool=false;
			/*开始加载模块的资源*/
			this.InitLoadAssets=function (){
				// log('OrangeFarmingModel LoadAssets')
				if(_Bool)return;
				_Bool=true;
				InitAjax();
				
				return;
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
			function InitAjax(){
				var _queryUrl=ApiUrl.QueryUrl
	            if(_queryUrl.indexOf('testData/')!=-1){
	            	$.ajax({
		            	url:_queryUrl,
						contentType: "application/json; charset=UTF-8",
						data: JSON.stringify(_params),
						success: function (result) {  
							result=JSON.parse(result);
							InitData(result.data)
						}
				 	})
	            }else{
	            	var _params = { "plantBaseCode": _MainModel.BaseData.plantBaseCode};
		            $.ajax({
		            	type:"POST",
		            	url:_queryUrl,
						contentType: "application/json; charset=UTF-8",
						dataType: "json",
						cache: false,
						data: JSON.stringify(_params),
						success: function (result) {  
							log(result)
							if (result.success) {
								InitData(result.data)
							}else{
								//errorShow();
							}
						},
						error: function(xhr, type){
						  // errorShow()
						}
				 	})
	            }
				
			};

/*
			var _PhenologyArr=[
				'花芽分化期',
				'春芽萌发期',
				'春梢抽生现蕾期',
				'开花期',
				'落花落果/夏梢萌发期',//
				'生理落果/夏梢发生期',//
				'夏梢生长/稳果期',///稳果期
				'秋梢生长/果实膨大期',//
				'果实膨大期',
				'果实膨大/果实转色期',///果实转色期
				'果实成熟/花芽分化期',///花芽分化期
				'花芽分化期'
			];*/


			var _PhenologyArr=[
				'花芽分化期',
				'春芽萌发与现蕾',
				'春芽萌发与现蕾',
				'开花期',
				'夏梢萌发期',//
				'生理落果',//
				'稳果期',///稳果期
				'稳果期',///稳果期
				'果实膨大期',//
				'果实转色期',
				'果实成熟期'
			];
			var _FarmingProject=[
				'清园',//清园\\防寒抗冻
				'早施春肥',
				'花前复剪',
				'保花保果',
				'保果肥',
				'抹除夏梢',//\\中耕除草
				'壮果攻梢肥',
				'放秋梢',//\\浇水抗旱
				'叶面施肥',
				'果实支撑',
				'果实采收',
				'施基肥'
			];
			/*
			_mData.month
			_mData.phenologyName
			_mData.phenologyTime
			_mData.phenologyNum
			_mData.phenologyInfo
			_mData.farmingName
			_mData.farmingTime
			_mData.farmingNum
			_mData.farmingInfo
			 */
			var _MDataArr;
			function InitData(data){
				log('OrangeFarmingModel InitData',data)
				_MDataArr=[];
				for (var i = 0; i < data.length; i++) {
					var _temp=data[i];
					var _item0=_temp.items[0]
					var _item1=_temp.items[1]
					var _mData={};
					_mData.month=Number(_temp.month);
					if(_mData.month<4){
						_mData.treeNum=0;
					}
					else if(_mData.month<6){
						_mData.treeNum=1;
					}
					else if(_mData.month<11){
						_mData.treeNum=2;
					}
					else{
						_mData.treeNum=3;
					}
					log('OrangeFarmingModel mData:',i)
					if(Number(_item0.type)==1){
						phenologyFun(_mData,_item0)
					}else{
						farmingProject(_mData,_item0)
					}

					if(Number(_item1.type)==1){
						phenologyFun(_mData,_item1)
					}else{
						farmingProject(_mData,_item1)
					}
					_MDataArr.push(_mData)
				}
				log('_MDataArr:',_MDataArr)
				//处理物候期
				function phenologyFun(mData,item){
					var _num=0;
					var _name=mData.phenologyName=item.activeName
					mData.phenologyTime=item.activeTime
					mData.phenologyInfo=item.descreption
					for (var i = 0; i < _PhenologyArr.length; i++) {
						if(_name==_PhenologyArr[i]){
							mData.phenologyNum=i;

							return;
						}
					}
				}
				//处理农事项目
				function farmingProject(mData,item){
					var _num=0;
					var _name=mData.farmingName=item.activeName
					mData.farmingTime=item.activeTime;
					mData.farmingInfo=item.descreption
					for (var i = 0; i < _FarmingProject.length; i++) {
						if(_name.indexOf(_FarmingProject[i])!=-1){
							mData.farmingNum=i;

							return;
						}
					}
				}
				InitUI();
			}
			var _MoviePanel,_Panel,_TimePanel,_UserPanel,_InfoPanel,_PageNum=-1;
			var _infoBox,_InfoElement;
			function InitUI(){
				if(_MoviePanel)return;
				_MoviePanel=new farmingLib.FarmingSkin();
				_CJSModel.Root.addChild(_MoviePanel);
				_Panel=_MoviePanel.panel;
				_UserPanel=_Panel.userPanel;
				_TimePanel=_Panel.timePanel;
				_InfoPanel=_Panel.infoPanel;

				_InfoBox=_UserPanel.mc.infoBox;
				_InfoElement=document.createElement('div');
				_InfoElement.id='oinfoElement';
				var _div=document.createElement('div');
				$(_div).addClass('info');
				$(_InfoElement).append($(_div));
				_InfoElement._div=_div;

				_View.append($(_InfoElement));
				var _domElement = new createjs.DOMElement(_InfoElement);
				_InfoBox.addChild(_domElement);

				var _name=_MainModel.BaseData.baseAdministrator;
				_Panel.label.text=_name;
				setTimeout(function(){
					_UserPanel.mc.adminImage.gotoAndStop(_name);
				},10);

				_Panel.btn0.on('click', function(){Previous()});
				_Panel.btn1.on('click', function(){Next()});
			

				touch.on(_Canvas, 'swipeleft',function(){Next()});
				touch.on(_Canvas, 'swiperight',function(){Previous()});
				_PageNum=-1;
				GotoPage(0)
			};
			var _time=new Date().getTime();
			function Next(){
				if(!_MDataArr)return;
				if(new Date().getTime()-_time<500){
					return;
				};
				var _num=_PageNum+1;
				if(_num>=_MDataArr.length)_num=0;
				GotoPage(_num);
			}
			function Previous(){
				if(!_MDataArr)return;
				if(new Date().getTime()-_time<500){
					return;
				};
				var _num=_PageNum-1;
				if(_num<0)_num=_MDataArr.length-1;
				GotoPage(_num);
			}
			
			function GotoPage(value){
				if(_PageNum==value)return;
				_time=new Date().getTime();
				_PageNum=value;
				_CJSModel.Root.removeAllChildren();
				_CJSModel.Root.addChild(_MoviePanel);


				/*
				_mData.month
				_mData.phenologyName
				_mData.phenologyTime
				_mData.phenologyNum
				_mData.phenologyInfo
				_mData.farmingName
				_mData.farmingTime
				_mData.farmingNum
				_mData.farmingInfo
				 */
				var _mData=_MDataArr[value];
				log(_mData)
				//月份
				_InfoPanel.gotoAndStop('state'+_mData.treeNum);
				//物候期
				_InfoPanel.mc0.gotoAndPlay(1);
				// _InfoPanel.mc0.mc.gotoAndStop(_mData.phenologyNum);
				_InfoPanel.mc0.mc.label.text=_mData.phenologyName
				_InfoPanel.mc0.mc1.gotoAndStop(_mData.month-1);
				//农事项目
				_InfoPanel.mc1.gotoAndPlay(1);
				// _InfoPanel.mc1.mc.gotoAndStop(_mData.farmingNum);
				_InfoPanel.mc1.mc.label.text=_mData.farmingName
				

				//管理员说农事项目描述
				_UserPanel.gotoAndPlay(1);
				_UserPanel.mc.time0.text=_mData.farmingTime
				_UserPanel.mc.time1.text=_mData.farmingTime
				// _UserPanel.mc.gotoAndStop(_mData.farmingNum);
				$(_InfoElement._div).html(_mData.farmingInfo)


				log('GotoPage ',value,_mData.month)
				setTimeout(function(){
					_TimePanel.gotoAndStop(_mData.month-1);
				},100)
				
				
			}
		};
		module.exports = new Model();
	});
})();