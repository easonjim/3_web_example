/**
 * 网站核心模块控制
 * 模块显示切换
 * @return {[type]} [description]
 */
!(function () {
	define('MainModel', function (require, exports, module) {
		var Model = function () {
            var _Self = this;
            var _SiteModel = seajs.require('SiteModel');
            var _SiteTL=_SiteModel.SiteTL;
            //这个类支持事件扩展
			cagoeAG.Extend(this, cagoeAG.Eventer);
			//所有基础数据
			this.BaseData;
			//追寻码
			this.Code;
			//是否是箱子
			this.IsBox;
			//是否码错误
			this.CodeError;
			this.IScroller

			var _OrangeModel,_BoxModel,_BuyModel,_TracingFlowModel,_QueryCodeError,_ContactUs;
			var _ContentBox;
		

			this.Init=function (){
				log('MainVM Init');
				_ContentBox=$('#contentBox .scrollBox')
				_SiteModel.on('Reize',Resize);
				_myScroll = new IScroll($('#contentBox')[0],
			 	{
			 		scrollX: false
				 	,scrollY: true
					,click:true
				 	,scrollbars: false 
				 	// ,interactiveScrollbars: true
				 	,useTransform: false
				 	,useTransition: false
				 	,probeType:3
			 	});
				this.IScroller=_myScroll;

				//橙子模块
				_OrangeModel=seajs.require('OrangeModel');
				//箱子模块
				_BoxModel=seajs.require('BoxModel');
				//购买模块
				 _BuyModel=seajs.require('BuyModel');
				//追溯流程模块
				_TracingFlowModel=seajs.require('TracingFlowModel');
				//查询错误模块
				_QueryCodeError=seajs.require('QueryCodeError');
				//联系我们
				_ContactUs=seajs.require('ContactUs');
				

				/*头部导航*/
				var _topHtml=[	'<div id="top">',
								'   <div class="logo1"></div>',
								'    <div class="logo2"></div>',
								'</div>'].join("");
				$('#screen').append($(_topHtml));


				$('#qrPanel .bg').on('click',function(){
					_Self.HitQRPanel();
				});


				//获取数据
				_Self.InitAjax();
			};
			/*进行初始化数据请求*/
			this.InitAjax=function(){
				var _infoUrl=ApiUrl.InfoUrl
	            if(_infoUrl.indexOf('testData/')!=-1){
	            	$.ajax({
		            	url:_infoUrl,
						contentType: "application/json; charset=UTF-8",
						data: JSON.stringify(_params),
						success: function (result) {  
							result=JSON.parse(result);
							_Self.Success=result.success;
							if (result.success) {
								_Self.SetInitData(result.data);
							}else{
								_Self.SetInitData(result.data);
								// errorShow();
							}
						}
				 	})
	            }else{
	            	var _params = { "traceCode": _SiteModel.Code};
		            $.ajax({
		            	type:"POST",
		            	url:_infoUrl,
						contentType: "application/json; charset=UTF-8",
						dataType: "json",
						cache: false,
						data: JSON.stringify(_params),
						success: function (result) {  
							log(result)
							_Self.Success=result.success;
							if (result.success) {
								_Self.SetInitData(result.data);
							}else{
								_Self.SetInitData(result.data);
							}
						},
						error: function(xhr, type){
						   errorShow()
						}
				 	})
	            }
	            function errorShow(){
					layer.open({
						content: '获取数据错误'
						,btn:['刷新', '取消']
						,yes:function(index){
							 location.reload();
							layer.close(index);
						}
						,no:function(index){layer.close(index);}
					});
	            }
			}
			
			/**
			 * 设置初始化数据
			 * @param {[type]} data [description]
			 */
			this.SetInitData=function (data){
				log('SetInitData:',data)
				
				this.BaseData=data;
				this.BaseData.success=_Self.Success;
				this.Code=					data.traceCode;
				this.IsBox=					data.codeLevel==2?true:false;
				this.CodeError=				data.isValid==0?true:false;
				this.CodeLevel=				data.codeLevel;
				this.ActivationCode=		data.categoryCode=="0001"?false:true;

				this.WhetherScore=true;

				log('SetInitData:',this.IsBox,this.CodeError)
				//查询错误
				//
				if(this.IsBox){
					this.GotoPage('BoxModel');
					siteModel.MenuModel.Open(true);
					siteModel.MenuModel.ShowError(false);
					siteModel.MenuModel.SelectMenu(0);
				}
				else{
					this.GotoPage('OrangeModel');
					siteModel.MenuModel.ShowError(false);
					siteModel.MenuModel.SelectMenu(0);
					// if(this.CodeError){
					// 	siteModel.MenuModel.ShowError(true);
					// }
				}

				if(!_Self.Success&&_Self.BaseData.codeLevel==0){
					this.MenuError=true
					siteModel.MenuModel.ShowError(true);
				}
				else{
					this.MenuError=false
					siteModel.MenuModel.ShowError(false);
				}

				if(!_Self.Success){
					this.WhetherScore=false;
				}
				else if(data.categoryCode=="0001"){
					this.WhetherScore=false;
				}
				

			}
			this.ShowQRPanel=function(){
				$('#qrPanel').show();
			}
			this.HitQRPanel=function(){
				$('#qrPanel').hide();
			}
			this.PageLabel='';
			/**
			 * 进行页面模块切换
			 */
			this.GotoPage=function(value){
				if(this.PageLabel==value)return;
				log('GotoPage:',value)
				this.PageLabel=value;
				this.HitQRPanel();
				_ContentBox.empty()
				if(value=='OrangeModel'){
					_ContentBox.append(_OrangeModel.View);
					_OrangeModel.MovieIn();
				}else{
					//关闭canvas渲染节省性能
					_OrangeModel.SetTickEnabled(false);
				}
				if(value=='BoxModel'){
					_ContentBox.append(_BoxModel.View);
					if(_BoxModel.MovieIn)_BoxModel.MovieIn();
				}
				if(value=='BuyModel'){
					_ContentBox.append(_BuyModel.View);
					if(_BuyModel.MovieIn)_BuyModel.MovieIn();
				}
				if(value=='TracingFlowModel'){
					_ContentBox.append(_TracingFlowModel.View);
					if(_TracingFlowModel.MovieIn)_TracingFlowModel.MovieIn();
				}else{
					// log(_TracingFlowModel);
					if(_TracingFlowModel.CloseTickEnabled)_TracingFlowModel.CloseTickEnabled();
				}

				if(value=='QueryCodeError'){
					_ContentBox.append(_QueryCodeError.View);
					if(_QueryCodeError.MovieIn)_QueryCodeError.MovieIn();
				}
				if(value=='ContactUs'){
					_ContentBox.append(_ContactUs.View);
					if(_ContactUs.MovieIn)_ContactUs.MovieIn();
				}
			}
				
			var _LoadOther=false;
			 /**
			  * [LoadOtherAssets description]
			  */
			this.LoadOtherAssets=function () {
				if(_LoadOther)return;
				_LoadOther=true;
				log('LoadOtherAssets')
				//箱子模块
				if(_BoxModel.InitLoadAssets)_BoxModel.InitLoadAssets();
				//购买模块
				if(_BuyModel.InitLoadAssets)_BuyModel.InitLoadAssets();
				//追溯流程模块
				if(_TracingFlowModel.InitLoadAssets)_TracingFlowModel.InitLoadAssets();
				//查询错误模块
				if(_QueryCodeError.InitLoadAssets)_QueryCodeError.InitLoadAssets();
				//联系我们
				if(_ContactUs.InitLoadAssets)_ContactUs.InitLoadAssets();
			}
			//自适应计算相关
			var _Width,_Height,_PageScale,_ActualH,_Horizontal=false,_IsInputState=false,_ScreenWidth;
			function Resize(){
				log('MainModel Resize');
				
				_Width=_SiteModel.innerWidth;//获取到window宽
	            _Height=_SiteModel.innerHeight;//获取到window高;
				_ActualH= _SiteModel.ActualH;//真实高度
	            _PageScale=_SiteModel.PageScale;//页面上场景缩放比例 
	            _IsInputState=_SiteModel.IsInputState;//是否输入状态下
	            _Horizontal=_SiteModel.Horizontal;//是否选择屏幕状态
	            _ScreenWidth=_SiteModel.ScreenWidth;//当前屏幕尺寸计算用宽

	           	$('#contentBox').css({height:_ActualH})
	           	if(_Self.IScroller)_Self.IScroller.refresh();

			}
        }
        module.exports = new Model();
        module.exports.Init();
	})
})();