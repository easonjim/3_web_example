/**
 * api接口地址
 */

!(function () {
	define('ApiUrl', function (require, exports, module) {
		var Model=function() {
			var _SiteModel = seajs.require('SiteModel');
			//扫码接口
			this.InfoUrl='http://'+window.location.host+'/api/orange/trace/query/info.json';
			//农事活动接口
			this.QueryUrl='http://'+window.location.host+'/api/base/farm/phenology/query.json';
			//评价接口
			this.ScoreUrl='http://'+window.location.host    +'/api/feed/score/insert/info.json';
			//评价状态接口
			this.ScoreInfoUrl='http://'+window.location.host+'/api/feed/score/get/info.json';
		
			this.Init=function(bool) {
				//if(window.location.href.indexOf('nongfuorange.nn.cagoe.com')!=-1){
	            	bool=true;
	    //}
				if(bool)this.InfoUrl='./testData/'+_SiteModel.Code.slice(0,1)+'.txt';
				if(bool)this.QueryUrl='./testData/fdata1.txt'//Math.random()>.5?'./testData/fdata1.txt':'./testData/fdata2.txt';

				if(bool)this.ScoreUrl='./testData/score.txt';
				if(bool)this.ScoreInfoUrl='./testData/fdata3.txt'//Math.random()>.5?'./testData/fdata1.txt':'./testData/fdata2.txt';
	           
			}
		}
        module.exports = new Model();
        
	})
})();