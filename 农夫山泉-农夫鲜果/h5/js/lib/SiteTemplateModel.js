/**
 * 创建一个可以横树立屏幕都支持的自适应网站模板1
 * 屏幕宽 高会根据横竖屏幕去切换 640  还是 1138宽;
 */
!(function () {
    window.cagoeAG=window.cagoeAG ||{};
    if(!cagoeAG.Eventer){
        console.error('Error No Has cagoeAG.Eventer')
        return;
    }
    if(!cagoeAG.Extend){
        console.error('Error No Has cagoeAG.Extend')
        return;
    }
    if(!window.log&&console){
        window.log=function(){console.log(arguments);}
    }
     //判断浏览器
    var _OS='ios'
    if(!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/))_OS = 'ios';
    else _OS= (navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Linux')) ? 'android' : 'pc';

    var SiteTemplateModel= function (param) { 
        var _Self = this;
        //对这个进行扩展
        cagoeAG.Extend(this, cagoeAG.Eventer);
       
        //设置场景
        var _Screen;
        //屏幕宽
        var _ScreenWidthData;
        //设置横竖屏，默认竖屏幕 'v' 'h' 'auto'
        var _ScreenType='v';
        //是否对CJSModel 进行自动适应屏幕尺寸计算，一般情况下会使用，特殊情况下。不需要自动适应 需要自己手动控制
        var _CJSAutoSize=true;
        /**
         *  进行模板初始化
         * @param {[Object]} param [创建设置模板的参数];
         * param.width              设置canvas宽 数值或者为空（默认设定640 param.canvas不为空，不会进行附值）；  如果是param.canvas与param.width都为空 一定会设置width。
         * param.height             设置canvas高 数值或者为空（默认设定1030 param.canvas不为空，不会进行附值）；  如果是param.canvas与param.height都为空 一定会设置height。
         * param.css                设置canvas的css样式 Object（空值null设定{position:'absolute',left:0,top:0}  空值undefined不做css变化);
         * param.screen             设置网站主画面DIV,这个网站使用适应屏幕的主div
         * param.screenType         设置横竖屏，默认竖屏幕 'v' 'h' 'auto'
         * param._ScreenWidthData   设置屏幕等比自动适应 使用的宽 默认[640,1138] 竖屏:640 或者 横屏1138
         * param.cjsAutoSize        是否对CJSModel 进行自动适应屏幕尺寸计算，一般情况下会使用，特殊情况下。不需要自动适应 需要自己手动控制,默认是true
         */
        this.InitSiteTL = function (param) {
            // log('InitSiteTL')
            //设置场景
            _Screen = param.screen ? param.screen : $('#screen')[0];
            if (typeof _Screen === 'string') _Screen = $(_Screen)[0];
            //是否竖屏
            _ScreenType = param.screenType!=undefined  ? param.screenType  : 'v';
            _ScreenWidthData=param.screenWidthData||[640,1138];
            _CJSAutoSize = param.cjsAutoSize==false ? false  : true;
         
        }
        //横竖屏幕提示框
        var _OrientationTip;
        /**
         * 初始化横屏提示
         */
        this.InitOrientationTip = function () {
            if (!_OrientationTip) {
                var html = ['<style type="text/css">', '@-webkit-keyframes orientRotation {', '    10% {', '        transform: rotate(90deg);', '        -webkit-transform: rotate(90deg)', '    }', '    50%, 60% {', '        transform: rotate(0deg);', '        -webkit-transform: rotate(0deg)', '    }', '    90% {', '        transform: rotate(90deg);', '        -webkit-transform: rotate(90deg)', '    }', '    100% {', '        transform: rotate(90deg);', '        -webkit-transform: rotate(90deg)', '    }', '}', '@keyframes orientRotation {', '    10% {', '        transform: rotate(90deg);', '        -webkit-transform: rotate(90deg)', '    }', '    50%, 60% {', '        transform: rotate(0deg);', '        -webkit-transform: rotate(0deg)', '    }', '    90% {', '        transform: rotate(90deg);', '        -webkit-transform: rotate(90deg)', '    }', '    100% {', '        transform: rotate(90deg);', '        -webkit-transform: rotate(90deg)', '    }', '}', '#orientLayer {', '    display: none;', '}', '@media screen and (min-aspect-ratio: 12/7) {', '    #orientLayer {', '        display: block;', '    }', '}', '.mod-orient-layer {', '    display: none;', '    position: fixed;', '    height: 100%;', '    width: 100%;', '    left: 0;', '    top: 0;', '    right: 0;', '    bottom: 0;', '    background: #333;', '    z-index: 9997', '}', '.mod-orient-layer__content {', '    position: absolute;', '    width: 100%;', '    top: 45%;', '    margin-top: -75px;', '    text-align: center;', '}', '.mod-orient-layer__icon-orient {', '    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAADaCAMAAABU68ovAAAAXVBMVEUAAAD29vb////x8fH////////x8fH5+fn29vby8vL////5+fn39/f6+vr////x8fH////////+/v7////09PT////x8fH39/f////////////////////x8fH///+WLTLGAAAAHXRSTlMAIpML+gb4ZhHWn1c2gvHBvq1uKJcC6k8b187lQ9yhhboAAAQYSURBVHja7d3blpowFIDhTUIAOchZDkre/zE7ycySrbUUpsRN2/1fzO18KzEqxEVgTiZNfgmmtxRc8iaR8HNe8x4BtjQePKayYCIoyBSgvNNE1AkNSHqZyLqk97EgUCCHBzZ5mkg7ScvIJuIyOyXBRFxgpqWZyGsAZLB1KjsJi8nutHU4JCRbFRH8tmirI9k8Jx2sqNs8K/m0LQkrktO2crgcgXGB4AiTEsB0hJfo9MGgX7CGcYiYwQxmMOOvZwRhBG8tCoMXjBDeXvWCEcHbi14wgCBmMIMZzGAGM5jxETNwzMAxA8cMHDNwzMAxA8cMHDNwzMAxA8cMHDNwzMAxY6E2rUQxnH2tz9cirlJFwFBJedaPnUv0M7++egPDE8iAJcIDmxwH5wwv9vUviw2kLbVO3TJU5uul/EyB0FoLp4x60PdGUd3qPurrWyjGGTc05u+1dcgI7/+tCCPARWGhH7o5Y7RCf+bH9ctXLp6v2BVDxfqz0oPXeSVaNtINo/1SXDv4dck8IIkbhtC2ol+iouEonTBCbYvVMnXOjxww6s/RFrBUpXHh/gw1rHj5d/qhYn9Gpk2FWh6xRBRX5Oj3Znh2Sq49/L6+y8pB26q9GbE2dbA2mVbx6I+7MfBglLCttm73ZQi7AD3iL4HqjFYJHSPRppqaUaJ3ATpGa+ckpGak2hRRMyqjGMkvl+xyFeSMwjAqcsZgGDdyhl0oNTnDN4yenJGZFGxNChP5/Y3efh6SM2rDOJMzboYxkDMqwyjIGcIw6F+io2FU1IxIm1JqRmgXSkvNKNCXeTpGrU0JNSO2c6LIGPgCS8AuDHz9ta0SXWDtxoDRH+MqlbC2Dt2G2JFRadtQZt2qq/orGowdGb2euxYiqWEpVWhTBnszoNAPdStuQwxqf0aocdWKW4Z+DfszIh8pxJqbuCE4YAC+4bm0evtipjpgJHeFnyyt1Ku2xa0bhjxr27p75rECNwyI9ZwvXkHq+7aTaMEV44YYy/spfgjgjNHaWW+GeUhGEX7tLlVinIFDDSgnOwhi1V6bU0b6tVS9eAERe863g4dRrtiHdc6o+nn5vtyVVgR79Cqt4uL6gfHPQyGqtP2vf7HADGbcYwaOGThm4JiBYwaOGThm4JiBYwaOGThm4JiBYwaOGThm4JiBYwaOGThm4JjhtOM+J/AgT008yDMkN/dPP9hzS8zAMQN3OEYeekp5YU7KOKXwVXqiY+QS7smcinGKABWdiBgpPJTSMHJ4KidhhPBUSMLw4CmPhKHgKUXCkHsygum71ftNSgCX6bsl8FQyfbcL5EdYsDk0R3j7aiA5wpt5AjKg/2gLJEBD/0Hf2OOf/vRrj6z/7GtP4B3nMKyjHA12kIPSjnJs3FEO0TvKkYJHOWCR+rjJH0Vn6fI5PjNbAAAAAElFTkSuQmCC");', '    display: inline-block;', '    width: 67px;', '    height: 109px;', '    transform: rotate(90deg);', '    -webkit-transform: rotate(90deg);', '    -webkit-animation: orientRotation infinite 1.5s ease-in-out;', '    animation: orientRotation infinite 1.5s ease-in-out;', '    -webkit-background-size: 67px;', '    background-size: 67px', '}', '.mod-orient-layer__desc {', '    margin-top: 20px;', '    font-size: 15px;', '    color: #fff', '}', '</style>', '<div id="orientLayer" class="mod-orient-layer">', '    <div class="mod-orient-layer__content">', '       <i class="icon mod-orient-layer__icon-orient"></i>', '        <div class="mod-orient-layer__desc">为了更好的体验，请使用竖屏浏览</div>', '    </div>', '</div>'].join("");
                _OrientationTip = $(html);
                // $('body').append(_OrientationTip);
                // return
            };
            if(_ScreenType=='auto'){
                _OrientationTip.remove();
            }else{
                $('body').append(_OrientationTip);
                 if (_ScreenType=='v') {
                    $('#orientLayer .mod-orient-layer__desc').text('为了更好的体验，请使用竖屏浏览');
                } else {
                    $('#orientLayer .mod-orient-layer__desc').text('为了更好的体验，请使用横屏浏览');
                }
            }
            return _OrientationTip;
        }
        /**
         * 进行自适应计算
         */
        this.InitResize = function () {
            $(window).resize(function () { _Self.ReSize() });
            //部分手机自适应会有问题
            setTimeout(function () { _Self.ReSize() }, 100);
            _Self.ReSize();
        }
        //自使用需相关参数
        var _Width, _Height,_ScreenWidth, _PageScale, _ActualH, _Horizontal = false, _IsInputState = false,_DensityDpi=1;
        /**
         * 一般不使用，只有需要强制执行时候使用
         * @type {[type]}
         */
        this.ReSize = function () {
            //如果在输入以后需要进行viewport改变重新计算设置viewport
            _DensityDpi=cagoeAG.SiteTemplateModel.InputEndResize();
            //计算当前viewport后自适应后的尺寸
            var _reSizeData=cagoeAG.SiteTemplateModel.GetReSizeData(_ScreenType);
            //获取屏幕宽高
            _Width = _reSizeData.width;//获取到window宽
            _Height = _reSizeData.height;//获取到window高;
            _IsInputState=_reSizeData.isInputState;
            _Horizontal=_reSizeData.horizontal;
            _PageScale=_reSizeData.pageScale;
            _ActualH=_reSizeData.actualH;
            _ScreenWidth=_reSizeData.screenWidth;
            //设置场景宽高
            if (_Screen) {
                $(_Screen).css(
                   {
                       "-webkit-transform-origin": '0 0'
                       , "transform-origin": '0 0'
                       , "-webkit-transform": "scale(" + _PageScale + ")"
                       , "transform": "scale(" + _PageScale + ")"
                       , "width": _ScreenWidth+ 'px'
                       , "height":_ActualH + 'px'
                   }
               );
            };
            //如果不是自动适应强制横屏项目
            if(_ScreenType!='auto'){
                //判断横屏或者竖屏时候提示 留着做写代码参考使用
                if (_OrientationTip) {
                    if (_ScreenType=='v') {
                        if (_Horizontal) $('#orientLayer').css({ 'display': 'block' });
                        else $('#orientLayer').css({ 'display': 'none' });
                    } else {
                        if (_Horizontal) $('#orientLayer').css({ 'display': 'none' });
                        else $('#orientLayer').css({ 'display': 'block' });
                    };
                };
            };
            // 用户自定义宽的比例
            _Self.Width = _Width;//获取到window宽
            _Self.Height = _Height;//获取到window高;
            _Self.ActualH = _ActualH;
            _Self.PageScale = _PageScale;
            _Self.IsInputState = _IsInputState;
            _Self.Horizontal = _Horizontal;
            _Self.ScreenWidth = _ScreenWidth;
            _Self.DensityDpi = _DensityDpi;
            _Self.ds('resize');
        };
    };
    /**
     * 进行自动适应屏幕尺寸算法计算宽高 实际宽高比
     * @param {[type]} screenType      [屏幕缩放方式考虑横竖屏幕情况 默认‘auto’ ]
     * @param {[type]} screenWidthData [横竖屏幕计算 默认[640,1138]]
     */
    SiteTemplateModel.GetReSizeData=function(screenType,screenWidthData){
        var _width, _height, _pageScale, _actualH, _horizontal = false, _isInputState = false;
        //获取屏幕宽高
        _width = window.innerWidth;//获取到window宽
        _height = window.innerHeight;//获取到window高;
        //计算是否横屏
        if (_width  > _height) _horizontal = true;
        else _horizontal = false;
        
        //判断输入框状态 与 输入框状态获取与横竖屏幕纠正;
        if (_width / _height > 3){
            //算出竖屏幕下输入框状态下比例
            _isInputState = true;
        }
        else if (_width / _height < 12 / 7 && _width / _height > 1){
            //算出竖屏幕下输入框状态下比例
            _isInputState = true;
            //说明这时候不会是横屏
            _horizontal=false;
        }
        else{
            //非输入状态
            _isInputState = false;
        }
        //按屏幕方式进行计算使用等比缩放使用的宽
        screenType=screenType||'auto';
        screenWidthData=screenWidthData||[640,1138];
        if(screenType=='auto'){

            if(_horizontal) _screenWidth=screenWidthData[1];
            else _screenWidth=screenWidthData[0];

        }else  if(screenType=='h'){
            _screenWidth=screenWidthData[1];

        }else{
            _screenWidth=screenWidthData[0];
        }
        //计算缩放比例
        _pageScale = _width / _screenWidth;
        //计算实际高度 
        _actualH = _height / _pageScale;


        return {
            width:_width,
            height:_height,
            horizontal:_horizontal,
            isInputState:_isInputState,
            pageScale:_pageScale,
            actualH:_actualH,
            screenWidth:_screenWidth,
        };

    };
    /**
     * 对viewport进行强制缩放，特别是对输入框
     */
    SiteTemplateModel.InputEndResize=function(){
         //判断浏览器类型
        var ua = navigator.userAgent.toLowerCase();
        var _isWeixin=false;
        if(ua.match(/MicroMessenger/i)=="micromessenger")_isWeixin= true;   

        var _viewport = document.querySelector("meta[name=viewport]");
        var _winWidth=$(window).width();
        var _densityDpi=640/_winWidth;
        _densityDpi= (_densityDpi>1?300*640*_densityDpi/640:_densityDpi)>>0;
        if(_isWeixin){
            if(_OS=='ios'){
                //_viewport.setAttribute('content', 'width=640, target-densityDpi='+_densityDpi+',initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
                _viewport.setAttribute('content', 'target-densityDpi='+_densityDpi+',initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
            }
            else{
               _viewport.setAttribute('content', 'target-densityDpi='+_densityDpi+',initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
            }
        }
        return _densityDpi;

    };
    window.cagoeAG = window.cagoeAG || {};
    window.cagoeAG.siteTL = window.cagoeAG.siteTL || {};
    window.cagoeAG.siteTL.SiteTemplateModel = SiteTemplateModel;
    window.cagoeAG.SiteTemplateModel = SiteTemplateModel;
})();

