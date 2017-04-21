/**
* 网站模块主入口
* 因为采用分模块开发，所以这个js内尽量不做与项目逻辑项目操作。
* 入口主要完成框架的搭建、资源加载处理、加载资源表现控制、模块加载控制。
*/
!(function () {
	//判断是否有log
	if(!window.log&&console){window.log=function(){console.log(arguments);}};
    //进debug
	var __debug=false;
	//进行判断是否进行debug的判断
	if(window.location.href.indexOf(':8001')!=-1)__debug=true;
	define('SiteModel', function (require, exports, module) {module.exports = new SiteModel(require);});
	/**
	* 网站模块
	*/
	function SiteModel(require) {
		//判断浏览器类型
		var _OS='ios'
		if(!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/))_OS = 'ios';
		else _OS= (navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Linux')) ? 'android' : '';
		//这个类支持事件扩展
		cagoeAG.Extend(this, cagoeAG.Eventer);
		//SiteModel类作用域内对自己快速索引
		var _Self=this;
		//是否有debug
		this.Debug=__debug;
		//Site Template
		var _SiteTL;
		// require.async(['./js/lib/SiteTemplateModel.js','./js/lib/layer.js','./js/lib/iscroll-lite.min.js'],function(){
		require.async(['./js/lib/SiteTemplateModel.js','./js/lib/layer.js','./js/lib/iscroll-lite.min.js','./js/lib/cjs.0.8.1.min.js'],function(){
			Init();
		});
		var _OrientationTip;
		//是否是箱子的二维码
		this.IsBox=false;
		//二维码对应编号
		this.Code='';
		//是否是错误连接
		this.CodeError=false;
		/**
		 * SiteModel 初始化
		 */
		function Init(){
			console.log('SiteModel init');
			_SiteTL=new cagoeAG.siteTL.SiteTemplateModel();
			//初始化网站项目模板
			_SiteTL.InitSiteTL({
				//主场景div#screen  {position: absolute;left: 0;top: 0;width: 100%;height: 100%;overflow: hidden;}
				screen:'#screen'
				//竖屏				
				,screenType:'v'									
				//canvas的css设置，默认一般我会这么设置，或者null等同此设置
				,css:{position:'absolute',left:0,top:0}						
			});
			_OrientationTip=_SiteTL.InitOrientationTip();
			//监听场景自适应
			_SiteTL.on('resize', Resize);
			//开始进行初始化场景自适应
			_SiteTL.InitResize();
			//获取
			InitGetCode();
		};
		function InitGetCode(){
			//http://t.nfsq.com.cn/h5/index.html?traceCode=00000000E124B6
			//http://t.nfsq.com.cn/h5/index.html?boxCode=00000000E124B6
			_Self.CodeError=false;
			if(window.location.href.indexOf('?traceCode=')>0){
                var _code=window.location.href.split('?traceCode=')[1];
                if(_code.indexOf('&')!=-1)_code=_code.split('&')[0];
                if(_code.indexOf('#')!=-1)_code=_code.split('#')[0];
                _Self.Code=_code;
                _Self.IsBox=false;
            }else if(window.location.href.indexOf('?boxCode=')>0){
            	var _code=window.location.href.split('?boxCode=')[1];
            	if(_code.indexOf('&')!=-1)_code=_code.split('&')[0];
                if(_code.indexOf('#')!=-1)_code=_code.split('#')[0];
                _Self.Code=_code;
            	_Self.IsBox=true;
            }else{
            	_Self.CodeError=true;
            }
            if(_Self.CodeError){
            	//不符合规定二维码是否让用户查看，不做多余页面加载
            	// alert('二维码不符合规定!');
				layer.open({
					content: '二维码不符合规定!'
					,btn:['确定', '取消']
					,yes:function(index){layer.close(index);}
					,no:function(index){layer.close(index);}
				});
            }else{
            	//加载模块
				LoadModels();
            };

            
		}
		/**
		 * 加载模块代码
		 */
		function LoadModels(){
			//使用seajs 进行构建模块
			var _models=[
				'./js/models/ApiUrl.js',
				'./js/models/MainModel.js',
				'./js/models/MenuModel.js',
				'./js/models/BoxModel.js',
				'./js/models/BuyModel.js',
				'./js/models/ContactUs.js',
				'./js/models/OrangeModel.js',
				'./js/models/OrangeInfroModel.js',
				'./js/models/OrangePlaceModel.js',
				'./js/models/OrangeFarmInfoModel.js',
				'./js/models/OrangeFarmingModel.js',
				'./js/models/QueryCodeError.js',
				'./js/models/TracingFlowModel.js',
			];
			require.async(_models,function(){
				InitMainUI();
			});

		}
		function InitMainUI(){
			//数据接口
			window.ApiUrl=seajs.require('ApiUrl');
			window.ApiUrl.Init(_Self.Debug)
			
			//导航模块
			var _MenuModel=seajs.require('MenuModel');
			_Self.MenuModel=_MenuModel;
			//主模块
			var _MainModel=seajs.require('MainModel');
			_Self.MainModel=_MainModel;
			
		}
		//自适应计算相关
		var _Width,_Height,_PageScale,_ActualH,_Horizontal=false,_IsInputState=false,_ScreenWidth,_DensityDpi;
		function Resize(){

			_Width=window.innerWidth;//获取到window宽
            _Height=window.innerHeight;//获取到window高;
			_ActualH= _SiteTL.ActualH;//真实高度
            _PageScale=_SiteTL.PageScale;//页面上场景缩放比例 
            _IsInputState=_SiteTL.IsInputState;//是否输入状态下
            _Horizontal=_SiteTL.Horizontal;//是否选择屏幕状态
            _ScreenWidth=_SiteTL.ScreenWidth;//当前屏幕尺寸计算用宽
            _DensityDpi=_SiteTL.DensityDpi;//当前屏幕尺寸计算用宽

            _Self.Width = _Width;
            _Self.Height = _Height;
            _Self.ActualH = _ActualH;
            _Self.PageScale = _PageScale;
            _Self.IsInputState = _IsInputState;
            _Self.Horizontal = _Horizontal;
            _Self.ScreenWidth = _ScreenWidth;
            _Self.DensityDpi = _DensityDpi;
            // 注意这里不使用reize 使用Reize愿意是 zepto 下事件保护名
           	_Self.ds('Reize');
		};
		
		
	}

	window.SiteModel=SiteModel;
})();
