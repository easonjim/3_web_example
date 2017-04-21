
!(function () {
	define('QueryCodeError', function (require, exports, module) {
		var Model=function(){

			var _Self = this;
            var _SiteModel = seajs.require('SiteModel');
            var _MainModel=seajs.require('MainModel');
            var _SiteTL=_SiteModel.SiteTL;
			var _View
			this.View;
			var _OrangeInfro;
			Init();
			function Init(){
				_View=document.createElement('div');
				_View.id='queryCodeError';
				_Self.View=_View=$(_View);
				
			}

			this.InitLoadAssets=InitLoadAssets
			function InitLoadAssets(){
				if(_Element)return;
				var _queueArr=[
'./images/queryCodeError/btn.png',
'./images/queryCodeError/error.png',
'./images/queryCodeError/info.png',
'./images/queryCodeError/more.png',
'./images/queryCodeError/title.png',
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
				require.async(['./html/QueryCodeError.html'],function(html){
					_Element=$(html);
					_View.append($(_Element));
					_Element.find('.btn');

					_Element.find('.more').on('click',function(){
						ShowList();
					})
					if(_MainModel.PageLabel=='QueryCodeError')_Self.MovieIn();

					_Element.find('.downPanel .btn').on('click',function () {
						_MainModel.ShowQRPanel();
					})
				});
			}
			function ShowList() {
				_Element.find('.more').hide();
				$(_Element.find('.historyPanel')).addClass('historyPanelShow')
			
				$(_Element.find('.historyPanel')).css({height:''});
				$(_Element.find('.historyPanel .panel')).css({height:''});
				_MainModel.IScroller.refresh();
			}
			function HitList() {
				if(!_Element)return;
				_Element.find('.more').show();
				_Element.find('.historyPanel').removeClass('historyPanelShow');

				$(_Element.find('.historyPanel')).css({height:320});
				$(_Element.find('.historyPanel .panel')).css({height:200});
				
			}

			var _list
			function UpData() {
				var _urlElement=_Element.find('.historyPanel .panel ul');
				_urlElement.empty();
				var _arr=_MainModel.BaseData.traceInfoList;
				_list=_arr;
				for (var i = 0; i < _arr.length; i++) {
					var _obj= _arr[i];
					var _info='<li>第'+(i+1)+'次 '+_obj.timeStr+' '+_obj.address+'</li>';
					_urlElement.append($(_info));
				};
				_Element.find('.product .panel .code').html(_MainModel.Code)
				
			}
			this.MovieIn=function(){
				log('QueryCodeError MovieIn',_MainModel.IsBox);
				if(!_Element){
					InitUI();
					return;
				}
				if(_MainModel.IsBox){
					$('#queryCodeError .product .box').show()
					$('#queryCodeError .product .orange').hide();
				}else{
					$('#queryCodeError .product .box').hide()
					$('#queryCodeError .product .orange').show();
				}
				JT.set(_View[0],{	opacity: 0})
				JT.to(_View[0],1,{	opacity: 1});
				
				UpData();
				if(_list.length<5){
					ShowList();
				}else{
					HitList();
				}

				_MainModel.IScroller.refresh();
				var _obj={v:0}
				JT.to(_obj,1,{delay:0.5,v:-350,onUpdate:function(){
					// log('onUpdate',_MainModel.PageLabel)
					if(_MainModel.PageLabel!='QueryCodeError')return;
					_MainModel.IScroller.scrollTo(0,_obj.v);
				}})
				
				
			};
		};
		module.exports = new Model();
	});
})();