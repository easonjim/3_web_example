!(function () {
	define('BoxModel', function (require, exports, module) {
		var Model=function(){
			var _Self = this;
            var _SiteModel = seajs.require('SiteModel');
            var _MainModel=seajs.require('MainModel');
            var _SiteTL=_SiteModel.SiteTL;
			var _View
			this.View;
			Init();
			function Init(){
				_View=document.createElement('div');
				_View.id='boxModel';
				_Self.View=_View=$(_View);
				
			}
			this.InitLoadAssets=InitLoadAssets
			function InitLoadAssets(){
				if(_Element)return;
				var _queueArr=[
					'./images/box/admin.png',
					'./images/box/factory0.png',
					'./images/box/error0.png',
					'./images/box/error1.png',
					'./images/box/error2.png',
					'./images/box/ico0.png',
					'./images/box/ico1.png',
					'./images/box/ico2.png',
					'./images/box/infoBg.png',
					'./images/box/line.png',
					'./images/box/tip0.png',
					'./images/box/tip1.png',
				];
				var _queue = new createjs.LoadQueue(true);
				_queue.addEventListener("complete", queueComplete);
				_queue.loadManifest(_queueArr);
				function queueComplete(e) {
					InitUI();
				}
			}
			var _Element
			function InitUI() {
				if(_Element)return;
				require.async(['./html/BoxCode.html'],function(html){
					_Element=$(html);
					_View.append($(_Element));


					
					if(_MainModel.PageLabel=='BoxModel')_Self.MovieIn();
				});
			}
			this.MovieIn=function(){
				log('BoxModel MovieIn',_MainModel.ActivationCode);
				if(!_Element){
					InitUI();
					return;
				}
			
				JT.set(_View[0], {	opacity: 0})
				JT.to(_View[0],1,{	opacity: 1});
				
				log('BoxModel MovieIn',_MainModel.ActivationCode)


				// if(_MainModel.ActivationCode){
				// 	_Element.find('.activation').show();
				// 	_Element.find('.panel1_0').hide();
					
				// }else{
				// 	_Element.find('product .panel0 .code').html(_MainModel.Code)
				// 	_Element.find('.activation').hide();
				// 	_Element.find('.panel1_0').show();
					

				// }
				if(!_MainModel.Success){

					_Element.find('.product .panel0 .code').html(window.siteModel.Code)
					_Element.find('.activation').hide();
					_Element.find('.panel1_0').show();
					_Element.find('.panel1_0 .title0').show();
					_Element.find('.panel1_0 .title1').show();
					_Element.find('.panel1_0 .title2').hide();
					UpData2();
					
				}else{
					_Element.find('product .panel0 .code').html(_MainModel.Code)
					_Element.find('.activation').show();
					_Element.find('.panel1_0').hide();

					UpData();
				}
				
				_MainModel.IScroller.scrollTo(0,0);
				_MainModel.IScroller.refresh();
				
			};
			function UpData2(){
				log('BoxModel UpData2',window.siteModel.Code);
				_Element.find('.product .panel0 .code').html(window.siteModel.Code);
				var _levelNum='a';
				var _knum='3';
				var _imgPath='./images/product/'+_levelNum+_knum+'.png';
				var _img=_Element.find('.productImg .box')[0]
				_img.src=_imgPath;

				_img.onload=function(){
					JT.set(_img, {	opacity: 0,y:-30})
					JT.to(_img,1,{	opacity: 1,y:0});
				}


			}

			function UpData() {
				log('BoxModel UpData')
				_Element.find('.product .panel0 .code').html(_MainModel.Code)

				var _levelNum='a';
				var _knum='3';
				if(_MainModel.BaseData.startLevel){
					if(_MainModel.BaseData.startLevel.indexOf('铂金')!=-1)_levelNum='a';
					if(_MainModel.BaseData.startLevel.indexOf('钻石')!=-1)_levelNum='b';
					if(_MainModel.BaseData.startLevel.indexOf('黄金')!=-1)_levelNum='c';
					
					if(_MainModel.BaseData.weight.indexOf('7.5')!=-1){_knum='7.5';}
					else if(_MainModel.BaseData.weight.indexOf('15')!=-1){_knum='15';}
					else if(_MainModel.BaseData.weight.indexOf('3')!=-1){_knum='3';}
					else if(_MainModel.BaseData.weight.indexOf('10')!=-1){_knum='10';}
					else if(_MainModel.BaseData.weight.indexOf('5')!=-1){_knum='5';}
				}
				
				
				
				
				

				var _imgPath='./images/product/'+_levelNum+_knum+'.png';
				var _img=_Element.find('.productImg .box')[0]
				_img.src=_imgPath;

				_img.onload=function(){
					JT.set(_img, {	opacity: 0,y:-30})
					JT.to(_img,1,{	opacity: 1,y:0});
				}

				if(!_MainModel.ActivationCode)return;

				if(_MainModel.BaseData.factoryName=='安远工厂'){
					_Element.find('.panel2 .factory')[0].src='./images/box/factory1.png';
				}else{
					_Element.find('.panel2 .factory')[0].src='./images/box/factory0.png';
				}

				_Element.find('.panel1 .label0').html(_MainModel.BaseData.startLevel);
				_Element.find('.panel1 .label1').html(_MainModel.BaseData.weight);
				_Element.find('.panel1 .label2').html(_MainModel.BaseData.standard);

				_Element.find('.panel2 .label0').html(_MainModel.BaseData.factoryName);

				_Element.find('.panel3 .adminPanel .adminName').html(_MainModel.BaseData.inspector);
				_Element.find('.panel3 .factoryPanel .info').html(_MainModel.BaseData.factoryName+_MainModel.BaseData.assemblyLine);
			}
		};
		module.exports = new Model();
	});
})();