!(function () {
	define('ContactUs', function (require, exports, module) {
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
				_View.id='contactUs';
				_Self.View=_View=$(_View);
				
			}
			this.InitLoadAssets=InitLoadAssets
			function InitLoadAssets(){
				if(_Element)return;
				var _queueArr=[
					'./images/judge/btn.png',
					'./images/judge/info0.png',
					'./images/judge/info1.png',
					'./images/judge/p.png',
					'./images/judge/qrBtn.png',
					'./images/judge/star0.png',
					'./images/judge/star1.png',
				];
				var _queue = new createjs.LoadQueue(true);
				_queue.addEventListener("complete", queueComplete);
				_queue.loadManifest(_queueArr);
				function queueComplete(e) {
					InitUI();
				}
			}
			var _GetScoreDataBool=false;
			var _GetScoreData
			/**
			 * 
			 */
			function  GetScoreData() {

				var _scoreUrl=ApiUrl.ScoreInfoUrl
	            if(_scoreUrl.indexOf('testData/')!=-1){
	            	$.ajax({
		            	url:_scoreUrl,
						contentType: "application/json; charset=UTF-8",
						data: JSON.stringify(_params),
						success: function (result) {  
							result=JSON.parse(result);
							if (result.success){
								_GetScoreData=result.data;
								_GetScoreDataBool=true;
								if(_GetScoreData.isFeedBack){

									ShowStart(Number(_GetScoreData.score)-1);
									_View.find('.postPanel .post').hide();
									_View.find('.postPanel .result').show();
									_PostBool=true;
								}else{
									ShowStart(-1)
								}
							}
						}
				 	})
	            }else{
	            	var _params = { "traceCode":_MainModel.Code};
		            $.ajax({
		            	type:"POST",
		            	url:_scoreUrl,
						contentType: "application/json; charset=UTF-8",
						dataType: "json",
						cache: false,
						data: JSON.stringify(_params),
						success: function (result) {  
							if (result.success) {
								_GetScoreData=result.data;
								_GetScoreDataBool=true;
								if(result.data.isFeedBack){

									ShowStart(Number(_GetScoreData.score)-1);
									_View.find('.postPanel .post').hide();
									_View.find('.postPanel .result').show();
									_PostBool=true;
								}else{
									ShowStart(-1)
								}
						
							}else{
								_GetScoreDataBool=true;
								ShowStart(-1)
								errorShow();
							}
						},
						error: function(xhr, type){
							_GetScoreDataBool=true;
							ShowStart(-1)
						    errorShow()
						}
				 	})
	            }
	            function errorShow(){
					
	            }
			}

			var _Element,_StarArr,_PostBool=false,_Score=4;
			function InitUI() {
				if(_Element)return;
				require.async(['./html/ContactUs.html'],function(html){
					_Element=$(html);
					_View.append($(_Element));

					_StarArr=[];
					for (var i = 0; i < 5; i++) {
						var _star=_View.find('.starPanel .star')[i];
						_star.cid=i;
						_StarArr.push(_star);
						$(_star).on('click',function (e) {
							ShowStart(this.cid);
						})
					}

					_View.find('.post .btn').on('click',function () {
						if(_PostBool)return;
						var _temp=this;
						JT.fromTo(_temp,.5,{opacity:0,scaleX:.8,scaleY:.8},{opacity:1,scaleX:1,scaleY:1,ease:JT.Circ.InOut});
						PostData();
					})

					_View.find('.qrBtn').on('click',function(){
						_MainModel.ShowQRPanel();
					});

					_View.find('.postPanel').hide();

					GetScoreData();

					ShowStart(-1)

					if(_MainModel.PageLabel=='ContactUs')_Self.MovieIn();
				});
			}
			var _InfoArr=[
				'不满意，味道不咋样',
				'较不满意，没想象中好吃',
				'一般，需要改善',
				'较满意，但仍可改善',
				'非常满意，无可挑剔',
			];
			function ShowStart(value){
				if(_PostBool)return;
				if(_Score==value)return;
				_Score=value;
				log('ShowStart',value)
				for (var i = 0; i < _StarArr.length; i++) {
					var _star=_StarArr[i];
					if(i<=value){
						$(_star).addClass('select');
						var _temp=$(_star).children()[0];
						JT.fromTo(_temp,.5,{opacity:0,scaleX:1.5,scaleY:1.5},{opacity:1,scaleX:1,scaleY:1,ease:JT.Circ.InOut});
					}
					else{
						$(_star).removeClass('select')
					}
				}
				if(value<0){
					if(_MainModel.IsBox)_View.find('.post .info').html('请对这箱橙子进行打分!');
					else _View.find('.post .info').html('请对这颗橙子的风味打分!');
				}
				else _View.find('.post .info').html(_InfoArr[value]);
				var _temp=_View.find('.post .info')[0];
				JT.fromTo(_temp,.5,{opacity:0,scaleX:1.5,scaleY:1.5},{opacity:1,scaleX:1,scaleY:1,ease:JT.Circ.InOut});
			}


			function  PostData() {
				if(_Score<0){
					layer.open({
						content: '请对这颗橙子的风味打分!'
						,btn:['确定', '取消']
						,yes:function(index){
							layer.close(index);
						}
						,no:function(index){layer.close(index);}
					});
					return;
				}
				if(_PostBool)return;
				_PostBool=true;
				var _scoreUrl=ApiUrl.ScoreUrl
	            if(_scoreUrl.indexOf('testData/')!=-1){
	            	$.ajax({
		            	url:_scoreUrl,
						contentType: "application/json; charset=UTF-8",
						data: JSON.stringify(_params),
						success: function (result) {  
							result=JSON.parse(result);
							if (result.success){
								layer.open({
									content: '提交评分成功!'
								});
								_View.find('.postPanel .post').hide();
								_View.find('.postPanel .result').show();
							}
						}
				 	})
	            }else{
	            	var _params = { "traceCode":_MainModel.Code,"score":(_Score+1)};
		            $.ajax({
		            	type:"POST",
		            	url:_scoreUrl,
						contentType: "application/json; charset=UTF-8",
						dataType: "json",
						cache: false,
						data: JSON.stringify(_params),
						success: function (result) {  
							log(result)
							if (result.success) {

							}else{
								errorShow();
								_PostBool=false;
							}
						},
						error: function(xhr, type){
						   errorShow()
						   _PostBool=false;
						}
				 	})
	            }
	            function errorShow(){
					layer.open({
						content: '提交评分错误!'
						,btn:['重新提交', '取消']
						,yes:function(index){
							PostData();
							layer.close(index);
						}
						,no:function(index){layer.close(index);}
					});
	            }
			}

			this.MovieIn=function(){
				log('BuyModel MovieIn');
				if(!_Element){
					InitUI();
					return;
				}
				log('_MainModel.IsBox:',_MainModel.IsBox);
				if(_GetScoreData){
						if(_GetScoreData.isFeedBack){
							ShowStart(Number(_GetScoreData.score)-1);
							_View.find('.postPanel .post').hide();
							_View.find('.postPanel .result').show();
						}
				}

				if(_MainModel.WhetherScore){
					if(_MainModel.IsBox){
						_View.find('.product').show();
						_View.find('.postPanel').hide();
						_View.find('.cPanel').css({'marginTop':280})
					}else{
						_View.find('.product .box').hide();
						_View.find('.postPanel').show();
						_View.find('.product .orange').show();
					}
					
				}else{
					_View.find('.postPanel').show();
					if(_MainModel.IsBox){
						_View.find('.product .box').show();
						_View.find('.product .orange').hide();
						
						var _levelNum='a';
						if(_MainModel.BaseData.startLevel.indexOf('铂金')!=-1)_levelNum='a';
						if(_MainModel.BaseData.startLevel.indexOf('钻石')!=-1)_levelNum='b';
						if(_MainModel.BaseData.startLevel.indexOf('黄金')!=-1)_levelNum='c';
						var _knum='3';
						if(_MainModel.BaseData.weight.indexOf('3kg')!=-1)_knum='3';
						if(_MainModel.BaseData.weight.indexOf('5kg')!=-1)_knum='5';
						if(_MainModel.BaseData.weight.indexOf('7.5kg')!=-1)_knum='7.5';
						if(_MainModel.BaseData.weight.indexOf('10kg')!=-1)_knum='10';
						if(_MainModel.BaseData.weight.indexOf('15kg')!=-1)_knum='15';

						var _imgPath='./images/product/'+_levelNum+_knum+'.png';
						var _img=_Element.find('.product .box')[0]
						_img.src=_imgPath;

					}
					else{
						_View.find('.product .box').hide();
						_View.find('.product .orange').show();
					}
				}

				var _temp=_View.find('.product ');
				JT.fromTo(_temp,.5,{opacity:0,y:-30},{opacity:1,y:0});

				var _temp=_View.find('.cPanel');
				JT.fromTo(_temp,.5,{opacity:0,y:130},{delay:.4,opacity:1,y:0});


				_MainModel.IScroller.scrollTo(0,0);
				_MainModel.IScroller.refresh();
			}
			function UpData() {
				
			}
		};
		module.exports = new Model();
	});
})();