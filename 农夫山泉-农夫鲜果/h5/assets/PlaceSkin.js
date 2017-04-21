(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"PlaceSkin_atlas_P_", frames: [[490,538,360,22],[831,404,106,111],[0,481,488,155],[543,0,134,134],[679,0,134,134],[815,0,134,134],[677,404,152,81],[852,517,93,50],[951,0,61,39],[951,41,40,59],[543,136,132,132],[543,270,132,132],[543,404,132,132],[0,0,541,479],[677,136,132,132],[677,270,132,132],[811,270,132,132],[811,136,132,132]]}
];


// symbols:



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["PlaceSkin_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.libs_img_000001 = function() {
	this.spriteSheet = ss["PlaceSkin_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.libs_img_000003 = function() {
	this.spriteSheet = ss["PlaceSkin_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.libs_img_000004 = function() {
	this.spriteSheet = ss["PlaceSkin_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.libs_img_000005 = function() {
	this.spriteSheet = ss["PlaceSkin_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.libs_img_000006 = function() {
	this.spriteSheet = ss["PlaceSkin_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.libs_img_000007 = function() {
	this.spriteSheet = ss["PlaceSkin_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.libs_img_000008 = function() {
	this.spriteSheet = ss["PlaceSkin_atlas_P_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.libs_img_000009 = function() {
	this.spriteSheet = ss["PlaceSkin_atlas_P_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.libs_img_000010 = function() {
	this.spriteSheet = ss["PlaceSkin_atlas_P_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.侯延彪 = function() {
	this.spriteSheet = ss["PlaceSkin_atlas_P_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.唐荣华 = function() {
	this.spriteSheet = ss["PlaceSkin_atlas_P_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.唐青 = function() {
	this.spriteSheet = ss["PlaceSkin_atlas_P_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.图层819 = function() {
	this.spriteSheet = ss["PlaceSkin_atlas_P_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.肖凡 = function() {
	this.spriteSheet = ss["PlaceSkin_atlas_P_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.赖定华 = function() {
	this.spriteSheet = ss["PlaceSkin_atlas_P_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.钟志宏 = function() {
	this.spriteSheet = ss["PlaceSkin_atlas_P_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.陈林旺 = function() {
	this.spriteSheet = ss["PlaceSkin_atlas_P_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.UserImages = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{肖凡:1,唐荣华:2,唐青:3,赖定华:4,侯延彪:5,陈林旺:6,钟志宏:7});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

	// 图层 1
	this.instance = new lib.libs_img_000001();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(7));

	// 肖凡.png
	this.instance_1 = new lib.肖凡();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-12,-16);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(6));

	// 唐荣华.png
	this.instance_2 = new lib.唐荣华();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-12,-16);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},1).wait(5));

	// 唐青.png
	this.instance_3 = new lib.唐青();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-12,-16);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({_off:true},1).wait(4));

	// 赖定华.png
	this.instance_4 = new lib.赖定华();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-12,-16);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({_off:true},1).wait(3));

	// 侯延彪.png
	this.instance_5 = new lib.侯延彪();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-12,-16);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).to({_off:true},1).wait(2));

	// 陈林旺.png
	this.instance_6 = new lib.陈林旺();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-12,-16);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({_off:false},0).to({_off:true},1).wait(1));

	// 钟志宏.png
	this.instance_7 = new lib.钟志宏();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-12,-16);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(7).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,111);


(lib.libs_mc_000016 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 819.png
	this.instance = new lib.图层819();
	this.instance.parent = this;
	this.instance.setTransform(-119,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.libs_mc_000016, new cjs.Rectangle(-119,10,541,479), null);


(lib.libs_mc_000015 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.libs_img_000010();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.libs_mc_000015, new cjs.Rectangle(0,0,40,59), null);


(lib.libs_mc_000014 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.libs_img_000009();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.libs_mc_000014, new cjs.Rectangle(0,0,61,39), null);


(lib.libs_mc_000012 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.libs_img_000008();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.libs_mc_000012, new cjs.Rectangle(0,0,93,50), null);


(lib.libs_mc_000011 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.libs_img_000007();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.libs_mc_000011, new cjs.Rectangle(0,0,152,81), null);


(lib.libs_mc_000008 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.libs_img_000003();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.libs_mc_000008, new cjs.Rectangle(0,0,488,155), null);


(lib.libs_mc_000007 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.libs_img_000006();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.libs_mc_000007, new cjs.Rectangle(0,0,134,134), null);


(lib.libs_mc_000006 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.libs_img_000005();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.libs_mc_000006, new cjs.Rectangle(0,0,134,134), null);


(lib.libs_mc_000005 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.libs_img_000004();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.libs_mc_000005, new cjs.Rectangle(0,0,134,134), null);


(lib.libs_mc_000010 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 曲线 84 拷贝
	this.instance = new lib.libs_mc_000012();
	this.instance.parent = this;
	this.instance.setTransform(362.5,128,1,1,0,0,0,46.5,25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({x:362.6},0).wait(1).to({x:362.7},0).wait(1).to({x:362.8},0).wait(1).to({x:362.9},0).wait(1).to({x:363.1},0).wait(1).to({x:363.3},0).wait(1).to({x:363.5},0).wait(1).to({x:363.8},0).wait(1).to({x:364},0).wait(1).to({x:364.3},0).wait(1).to({x:364.7},0).wait(1).to({x:365},0).wait(1).to({x:365.4},0).wait(1).to({x:365.8},0).wait(1).to({x:366.3},0).wait(1).to({x:366.8},0).wait(1).to({x:367.3},0).wait(1).to({x:367.8},0).wait(1).to({x:368.4},0).wait(1).to({x:369},0).wait(1).to({x:369.6},0).wait(1).to({x:370.2},0).wait(1).to({x:370.9},0).wait(1).to({x:371.6},0).wait(1).to({x:372.3},0).wait(1).to({x:373.1},0).wait(1).to({x:373.9},0).wait(1).to({x:374.7},0).wait(1).to({x:375.5},0).wait(1).to({x:376.3},0).wait(1).to({x:377.2},0).wait(1).to({x:378},0).wait(1).to({x:378.9},0).wait(1).to({x:379.8},0).wait(1).to({x:380.8},0).wait(1).to({x:381.7},0).wait(1).to({x:382.6},0).wait(1).to({x:383.5},0).wait(1).to({x:384.5},0).wait(1).to({x:385.4},0).wait(1).to({x:386.3},0).wait(1).to({x:387.2},0).wait(1).to({x:388.1},0).wait(1).to({x:389},0).wait(1).to({x:389.9},0).wait(1).to({x:390.8},0).wait(1).to({x:391.6},0).wait(1).to({x:392.4},0).wait(1).to({x:393.2},0).wait(1).to({x:394},0).wait(1).to({x:394.7},0).wait(1).to({x:395.4},0).wait(1).to({x:396.1},0).wait(1).to({x:396.8},0).wait(1).to({x:397.4},0).wait(1).to({x:398},0).wait(1).to({x:398.5},0).wait(1).to({x:399.1},0).wait(1).to({x:399.5},0).wait(1).to({x:400},0).wait(1).to({x:400.4},0).wait(1).to({x:400.8},0).wait(1).to({x:401.1},0).wait(1).to({x:401.4},0).wait(1).to({x:401.7},0).wait(1).to({x:401.9},0).wait(1).to({x:402.1},0).wait(1).to({x:402.2},0).wait(1).to({x:402.3},0).wait(1).to({x:402.4},0).wait(1).to({x:402.5},0).wait(18).to({x:402.4},0).wait(1).to({x:402.3},0).wait(1).to({x:402.2},0).wait(1).to({x:402.1},0).wait(1).to({x:401.9},0).wait(1).to({x:401.8},0).wait(1).to({x:401.6},0).wait(1).to({x:401.3},0).wait(1).to({x:401.1},0).wait(1).to({x:400.8},0).wait(1).to({x:400.4},0).wait(1).to({x:400.1},0).wait(1).to({x:399.7},0).wait(1).to({x:399.3},0).wait(1).to({x:398.8},0).wait(1).to({x:398.3},0).wait(1).to({x:397.8},0).wait(1).to({x:397.2},0).wait(1).to({x:396.6},0).wait(1).to({x:396},0).wait(1).to({x:395.3},0).wait(1).to({x:394.6},0).wait(1).to({x:393.8},0).wait(1).to({x:393.1},0).wait(1).to({x:392.2},0).wait(1).to({x:391.4},0).wait(1).to({x:390.5},0).wait(1).to({x:389.6},0).wait(1).to({x:388.7},0).wait(1).to({x:387.7},0).wait(1).to({x:386.7},0).wait(1).to({x:385.7},0).wait(1).to({x:384.7},0).wait(1).to({x:383.7},0).wait(1).to({x:382.7},0).wait(1).to({x:381.6},0).wait(1).to({x:380.6},0).wait(1).to({x:379.6},0).wait(1).to({x:378.6},0).wait(1).to({x:377.6},0).wait(1).to({x:376.7},0).wait(1).to({x:375.7},0).wait(1).to({x:374.8},0).wait(1).to({x:373.9},0).wait(1).to({x:373.1},0).wait(1).to({x:372.3},0).wait(1).to({x:371.5},0).wait(1).to({x:370.7},0).wait(1).to({x:370},0).wait(1).to({x:369.3},0).wait(1).to({x:368.7},0).wait(1).to({x:368.1},0).wait(1).to({x:367.5},0).wait(1).to({x:367},0).wait(1).to({x:366.5},0).wait(1).to({x:366},0).wait(1).to({x:365.6},0).wait(1).to({x:365.2},0).wait(1).to({x:364.8},0).wait(1).to({x:364.5},0).wait(1).to({x:364.2},0).wait(1).to({x:363.9},0).wait(1).to({x:363.6},0).wait(1).to({x:363.4},0).wait(1).to({x:363.2},0).wait(1).to({x:363},0).wait(1).to({x:362.9},0).wait(1).to({x:362.8},0).wait(1).to({x:362.7},0).wait(1).to({x:362.6},0).wait(1).to({x:362.5},0).wait(25));

	// 曲线 84
	this.instance_1 = new lib.libs_mc_000011();
	this.instance_1.parent = this;
	this.instance_1.setTransform(54,337.5,1,1,0,0,0,76,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({x:53.9},0).wait(1).to({x:53.8},0).wait(1).to({x:53.7},0).wait(1).to({x:53.6},0).wait(1).to({x:53.4},0).wait(1).to({x:53.3},0).wait(1).to({x:53.1},0).wait(1).to({x:52.9},0).wait(1).to({x:52.7},0).wait(1).to({x:52.4},0).wait(1).to({x:52.2},0).wait(1).to({x:51.9},0).wait(1).to({x:51.5},0).wait(1).to({x:51.2},0).wait(1).to({x:50.9},0).wait(1).to({x:50.5},0).wait(1).to({x:50.1},0).wait(1).to({x:49.7},0).wait(1).to({x:49.2},0).wait(1).to({x:48.7},0).wait(1).to({x:48.3},0).wait(1).to({x:47.8},0).wait(1).to({x:47.2},0).wait(1).to({x:46.7},0).wait(1).to({x:46.1},0).wait(1).to({x:45.5},0).wait(1).to({x:44.9},0).wait(1).to({x:44.3},0).wait(1).to({x:43.7},0).wait(1).to({x:43},0).wait(1).to({x:42.4},0).wait(1).to({x:41.7},0).wait(1).to({x:41},0).wait(1).to({x:40.4},0).wait(1).to({x:39.7},0).wait(1).to({x:39},0).wait(1).to({x:38.3},0).wait(1).to({x:37.6},0).wait(1).to({x:36.9},0).wait(1).to({x:36.2},0).wait(1).to({x:35.5},0).wait(1).to({x:34.8},0).wait(1).to({x:34.2},0).wait(1).to({x:33.5},0).wait(1).to({x:32.9},0).wait(1).to({x:32.2},0).wait(1).to({x:31.6},0).wait(1).to({x:31},0).wait(1).to({x:30.4},0).wait(1).to({x:29.9},0).wait(1).to({x:29.3},0).wait(1).to({x:28.8},0).wait(1).to({x:28.3},0).wait(1).to({x:27.9},0).wait(1).to({x:27.4},0).wait(1).to({x:27},0).wait(1).to({x:26.6},0).wait(1).to({x:26.3},0).wait(1).to({x:25.9},0).wait(1).to({x:25.6},0).wait(1).to({x:25.4},0).wait(1).to({x:25.1},0).wait(1).to({x:24.9},0).wait(1).to({x:24.7},0).wait(1).to({x:24.5},0).wait(1).to({x:24.4},0).wait(1).to({x:24.3},0).wait(1).to({x:24.2},0).wait(1).to({x:24.1},0).wait(2).to({x:24},0).wait(15).to({x:24.1},0).wait(3).to({x:24.2},0).wait(1).to({x:24.3},0).wait(1).to({x:24.4},0).wait(1).to({x:24.5},0).wait(1).to({x:24.6},0).wait(1).to({x:24.8},0).wait(1).to({x:24.9},0).wait(1).to({x:25.1},0).wait(1).to({x:25.4},0).wait(1).to({x:25.6},0).wait(1).to({x:25.9},0).wait(1).to({x:26.2},0).wait(1).to({x:26.5},0).wait(1).to({x:26.8},0).wait(1).to({x:27.2},0).wait(1).to({x:27.6},0).wait(1).to({x:28},0).wait(1).to({x:28.5},0).wait(1).to({x:28.9},0).wait(1).to({x:29.5},0).wait(1).to({x:30},0).wait(1).to({x:30.5},0).wait(1).to({x:31.1},0).wait(1).to({x:31.7},0).wait(1).to({x:32.4},0).wait(1).to({x:33},0).wait(1).to({x:33.7},0).wait(1).to({x:34.4},0).wait(1).to({x:35.2},0).wait(1).to({x:35.9},0).wait(1).to({x:36.6},0).wait(1).to({x:37.4},0).wait(1).to({x:38.2},0).wait(1).to({x:38.9},0).wait(1).to({x:39.7},0).wait(1).to({x:40.5},0).wait(1).to({x:41.2},0).wait(1).to({x:42},0).wait(1).to({x:42.7},0).wait(1).to({x:43.4},0).wait(1).to({x:44.1},0).wait(1).to({x:44.8},0).wait(1).to({x:45.5},0).wait(1).to({x:46.1},0).wait(1).to({x:46.7},0).wait(1).to({x:47.3},0).wait(1).to({x:47.9},0).wait(1).to({x:48.4},0).wait(1).to({x:48.9},0).wait(1).to({x:49.4},0).wait(1).to({x:49.9},0).wait(1).to({x:50.3},0).wait(1).to({x:50.7},0).wait(1).to({x:51.1},0).wait(1).to({x:51.4},0).wait(1).to({x:51.7},0).wait(1).to({x:52},0).wait(1).to({x:52.3},0).wait(1).to({x:52.6},0).wait(1).to({x:52.8},0).wait(1).to({x:53},0).wait(1).to({x:53.2},0).wait(1).to({x:53.4},0).wait(1).to({x:53.5},0).wait(1).to({x:53.7},0).wait(1).to({x:53.8},0).wait(1).to({x:53.9},0).wait(2).to({x:54},0).wait(26));

	// 图层 1
	this.instance_2 = new lib.libs_mc_000016();
	this.instance_2.parent = this;
	this.instance_2.setTransform(236.5,246,1,1,0,0,0,185.5,238);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(186));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,18,541,479);


(lib.libs_mc_000009 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图
	this.instance = new lib.libs_mc_000006();
	this.instance.parent = this;
	this.instance.setTransform(397,67,1,1,0,0,0,67,67);

	this.instance_1 = new lib.libs_mc_000007();
	this.instance_1.parent = this;
	this.instance_1.setTransform(248,67,1,1,0,0,0,67,67);

	this.instance_2 = new lib.libs_mc_000005();
	this.instance_2.parent = this;
	this.instance_2.setTransform(99,67,1,1,0,0,0,67,67);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// 分选流水线 农夫山泉信丰工厂第4条生产线
	this.label1 = new cjs.Text("江西省赣州市寻乌县片区", "20px 'SimHei'", "#F38C34");
	this.label1.name = "label1";
	this.label1.textAlign = "center";
	this.label1.lineHeight = 30;
	this.label1.lineWidth = 384;
	this.label1.parent = this;
	this.label1.setTransform(243.1,175);

	this.instance_3 = new lib.Bitmap1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(61,147);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.label1}]}).wait(1));

	// “圆角矩形 15”的内描边
	this.instance_4 = new lib.libs_mc_000008();
	this.instance_4.parent = this;
	this.instance_4.setTransform(244,110.5,1,1,0,0,0,244,77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.libs_mc_000009, new cjs.Rectangle(0,0,488,197.1), null);


(lib.libs_mc_000003 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	//  江西省赣州市寻乌县片区 
	this.label0 = new cjs.Text("赖洪义", "20px 'SimHei'", "#79BC1F");
	this.label0.name = "label0";
	this.label0.textAlign = "center";
	this.label0.lineHeight = 22;
	this.label0.lineWidth = 62;
	this.label0.parent = this;
	this.label0.setTransform(310.5,23.5);

	this.label1 = new cjs.Text("江西省赣州市寻乌县片区", "20px 'SimHei'", "#79BC1F");
	this.label1.name = "label1";
	this.label1.textAlign = "center";
	this.label1.lineHeight = 30;
	this.label1.lineWidth = 329;
	this.label1.parent = this;
	this.label1.setTransform(280.5,54.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.label1},{t:this.label0}]}).wait(1));

	// 图层 759 拷贝 2
	this.adminImage = new lib.UserImages();
	this.adminImage.parent = this;
	this.adminImage.setTransform(53,55.5,1,1,0,0,0,53,55.5);

	this.timeline.addTween(cjs.Tween.get(this.adminImage).wait(1));

	// 来自基地管理员赖洪义管理片区 
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#434343").s().p("AhRBQIAAifIChAAIAAAPIiTAAIAACDICVAAIAAANgAg0A1IgGgGQAPgKAOgMIAbgZIgxgsIAJgKIAcAYIAVAUIAVgXIASgYIANAJQgaAhgPAPIAyAtIgNANQgfgggRgQIgZAaQgOANgPALg");
	this.shape.setTransform(414.7,33.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#434343").s().p("AhUBVIgFgGQAQgOAHgXQAIgWgCgdIAAhOIAPAAIAAAzIBFAAIAAg3IAPAAIAAA3IAzAAIAAANIiHAAIAAANIAAAUIBbAAIAABSIgOAAIAAhEIhOAAQgCATgIARQgHASgPAOg");
	this.shape_1.setTransform(394.1,33.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#434343").s().p("AghBUIAAgOIA5AAIAAgZIguAAIAAgNIAuAAIAAgXIgrAAIAAhcIBmAAIAABcIgsAAIAAAXIAvAAIAAANIgvAAIAAAZIA4AAIAAAOgAAngBIAeAAIAAgdIgeAAgAgEgBIAcAAIAAgdIgcAAgAAngqIAeAAIAAgcIgeAAgAgEgqIAcAAIAAgcIgcAAgAheA9IAdgHIAAg2IgYAAIAAgMIAYAAIAAgyIgbAAIAAgOIBBAAIAAAOIgYAAIAAAyIAXAAIAAAMIgXAAIAAAyIAXgHIACAPIgJACQglAKgRAFg");
	this.shape_2.setTransform(373.4,33.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#434343").s().p("AA1BdIAAgIIhnAAIAAAIIgNAAIAAhmIB+AAIAAAnIhxAAIAAAOIB1AAIAAAxgAgyBJIBnAAIAAgSIhnAAgAgyATIBjAAIAAgSIhjAAgABIgGIAAgSIiQAAIAAASIgNAAIAAgdIBQAAIgGgMIAMgFIAHAOIACADIBMAAIAAAdgAAvgpIgNgPIAJgGIgQAAQgFAKgHAHIgLgJQAHgJAFgJQAGgJAEgLIAQABIgGANIgDAFIA9AAIAAALIgxAAIAJAKIAHAHIgLAJgAgmgmIgOgRIAJgHIgQAAQgQASgIAHIgKgLQAMgKAJgLQAJgKAHgNIAPABIgKASIA3AAIAAALIgtAAIALALIAFAGIgLAJg");
	this.shape_3.setTransform(353.1,33.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#434343").s().p("AhcBLQAsgHAVgPQAWgOgCgVIAAgSIAOAAIAAAUIgDAPIAWAKIBDAbIgIAOIglgRIgwgWQgHANgVAKQgVALgkAIQgCgHgFgHgAhJAzIAAhFICTAAIAABDIgOAAIAAg3Ih2AAIAAA5gAg+gkIAAg0IB+AAIAAA0gAgvgwIBgAAIAAgbIhgAAg");
	this.shape_4.setTransform(268.5,33.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#434343").s().p("AgiBUIAAgOIA7AAIAAgZIgvAAIAAgNIAvAAIAAgXIgsAAIAAhcIBlAAIAABcIgrAAIAAAXIAwAAIAAANIgwAAIAAAZIA4AAIAAAOgAAngBIAeAAIAAgdIgeAAgAgEgBIAdAAIAAgdIgdAAgAAngqIAeAAIAAgcIgeAAgAgEgqIAdAAIAAgcIgdAAgAheA9IAdgHIAAg2IgYAAIAAgMIAYAAIAAgyIgaAAIAAgOIBAAAIAAAOIgZAAIAAAyIAYAAIAAAMIgYAAIAAAyIAYgHIACAPIgJACQglAKgRAFg");
	this.shape_5.setTransform(248.1,33.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#434343").s().p("AA1BdIAAgIIhnAAIAAAIIgNAAIAAhmIB+AAIAAAnIhxAAIAAAOIB1AAIAAAxgAgyBJIBnAAIAAgSIhnAAgAgyATIBjAAIAAgSIhjAAgABIgGIAAgSIiQAAIAAASIgNAAIAAgdIBQAAIgGgMIAMgFIAHAOIACADIBMAAIAAAdgAAvgpIgNgPIAJgGIgQAAQgFAKgHAHIgLgJQAHgJAFgJQAGgJAEgLIAQABIgGANIgDAFIA9AAIAAALIgxAAIAJAKIAHAHIgLAJgAgmgmIgOgRIAJgHIgQAAQgQASgIAHIgKgMQAMgIAJgMQAJgLAHgMIAPABIgKASIA3AAIAAALIgtAAIALALIAFAGIgLAJg");
	this.shape_6.setTransform(227.8,33.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#434343").s().p("AA6BYIgxAAQgOABgIgHQgHgHAAgNIAAg+IgOAGIgCgNIAQgHIAAg0IAPAAIAAAuIAcgKIAAg6IAPAAIAAA0IAugSIgBAUIgBAmQAAAegYgCIgOABQAAgHgDgJIAHAAIAJABQAFAAADgDQACgEABgIIABgmIgfANIAABOIgPAAIAAhJIgcAMIAABAQAAAIAFAEQADAEAJgBIAqAAQAKABAGgEQAGgDAAgHIAEgcIAQAFQgCASgEANQgBAKgIAFQgIAFgNAAIgCgBgAhfA+IAUgGIAHgDIAAhLIgYAAIAAgNIAYAAIAAg0IAOAAIAAA0IAXAAIAAANIgXAAIAABHIAOgFIALgEIABAOQghANgcAIg");
	this.shape_7.setTransform(207.4,33.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#434343").s().p("AhRBYIAAgNIBKAAIAAgSIgsAAIAAgJQgVAOgMAHIgJgMQASgJANgJQAOgJALgJIg3AAIAAgMIAmAAIAAg/IgfAAIAAgLIAfAAIAAgWIAPAAIAAAWIBPAAIAAgWIAOAAIAAAWIAgAAIAAALIggAAIAAA/IAlAAIAAAMIg3AAQAJAJAPAHQAOAJAUAHIgKANQgYgMgJgGIAAAJIgtAAIAAASIBLAAIAAANgAAGAbIAAASIAoAAIgOgLIgNgNIgnAAQgSASgJAGIAoAAIAAgSgAgnAJIBPAAIAAgNIhPAAgAgngQIBPAAIAAgNIhPAAgAgngpIBPAAIAAgNIhPAAg");
	this.shape_8.setTransform(187,32.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#434343").s().p("AA6BcIAAgMIhzAAIAAAMIgPAAIAAidIAzAAIADgPIABgLIAQACIgFAYIBPAAIAACdgAg5BFIBzAAIAAggIhzAAgAg5AXIBzAAIAAgeIhzAAgAg5gUIBzAAIAAgfIhzAAg");
	this.shape_9.setTransform(166.6,33.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#434343").s().p("AgGBdIAAhNQgOATgUAQQgTARgZAMIgJgMQAWgLAUgPQATgNAPgSIhKAAIAAgMIBVAAIAAgyIhKAAIAAgOIBKAAIAAgbIANAAIAAAbIBKAAIAAAOIhKAAIAAAyIBVAAIAAAMIhMAAQAPASAUANQATAOAZAJIgKANQgZgKgTgPQgTgPgPgWIAABNgAAagOIAEgFQAPgQAIgMIANAKQgVAYgJAIgAg/glIALgKIAaAfIgMAKQgIgLgRgUg");
	this.shape_10.setTransform(146.2,33.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.libs_mc_000003, new cjs.Rectangle(0,0,447,111), null);


(lib.libs_mc_000002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.libs_mc_000015();
	this.instance.parent = this;
	this.instance.setTransform(0,13.8,1,1,0,0,0,20,29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.libs_mc_000002, new cjs.Rectangle(-20,-15.7,40,59), null);


(lib.libs_mc_000001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.label = new cjs.Text("赣州", "30px 'SimHei'", "#FFFFFF");
	this.label.name = "label";
	this.label.textAlign = "center";
	this.label.lineHeight = 20;
	this.label.lineWidth = 388;
	this.label.parent = this;
	this.label.setTransform(-11.5,-53.7,0.605,0.605);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(20));

	// 元件 2
	this.instance = new lib.libs_mc_000002();
	this.instance.parent = this;
	this.instance.setTransform(-11.5,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:13.8,y:1.1},0).wait(1).to({y:1.8},0).wait(1).to({y:2.9},0).wait(1).to({y:4.3},0).wait(1).to({y:5.9},0).wait(1).to({y:7.5},0).wait(1).to({y:8.9},0).wait(1).to({y:10},0).wait(1).to({y:10.6},0).wait(1).to({regY:0,y:-3},0).wait(1).to({regY:13.8,y:10.2},0).wait(1).to({y:9.2},0).wait(1).to({y:7.8},0).wait(1).to({y:6.2},0).wait(1).to({y:4.6},0).wait(1).to({y:3.1},0).wait(1).to({y:1.9},0).wait(1).to({y:1.2},0).wait(1).to({regY:0,y:-13},0).wait(1));

	// 椭圆 22 拷贝 2
	this.instance_1 = new lib.libs_mc_000014();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-11,40.8,0.91,0.91,0,0,0,18.5,33.5);
	this.instance_1.alpha = 0.59;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:30.5,regY:19.5,scaleX:0.91,scaleY:0.91,x:0,y:28,alpha:0.602},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:0.1,y:27.9,alpha:0.629},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:0.2,y:27.8,alpha:0.673},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:0.3,y:27.6,alpha:0.731},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:0.5,y:27.4,alpha:0.798},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:0.7,y:27.2,alpha:0.865},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:0.9,y:27,alpha:0.922},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:26.9,alpha:0.964},0).wait(1).to({scaleX:1,scaleY:1,x:1,y:26.8,alpha:0.99},0).wait(1).to({regX:18.5,regY:33.5,scaleX:1,scaleY:1,x:-11,y:40.8,alpha:1},0).wait(1).to({regX:30.5,regY:19.5,scaleX:0.99,scaleY:0.99,x:1,y:26.9,alpha:0.974},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:0.9,y:27,alpha:0.931},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:0.7,y:27.2,alpha:0.875},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:0.6,y:27.4,alpha:0.809},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:0.4,y:27.6,alpha:0.742},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:0.2,y:27.8,alpha:0.682},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:0.1,y:27.9,alpha:0.634},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:0,y:28,alpha:0.603},0).wait(1).to({regX:18.5,regY:33.5,scaleX:0.91,scaleY:0.91,x:-11,y:40.8,alpha:0.59},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130,-54.9,237.1,100.7);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.tip = new lib.libs_mc_000001();
	this.tip.parent = this;
	this.tip.setTransform(341.5,332.7);

	this.instance = new lib.libs_mc_000010();
	this.instance.parent = this;
	this.instance.setTransform(211.5,247.6,1,1,0,0,0,189.5,255.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.tip}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-46,10,541,479), null);


(lib.libs_mc_000013 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 标题
	this.labelPanel = new lib.libs_mc_000003();
	this.labelPanel.parent = this;
	this.labelPanel.setTransform(245.7,72.9,1,1,0,0,0,224.7,72.9);

	this.timeline.addTween(cjs.Tween.get(this.labelPanel).wait(1));

	// 图层 5
	this.map = new lib.Symbol1();
	this.map.parent = this;
	this.map.setTransform(234,378,1,1,0,0,0,222,238);

	this.timeline.addTween(cjs.Tween.get(this.map).wait(1));

	// 生产线
	this.panel1 = new lib.libs_mc_000009();
	this.panel1.parent = this;
	this.panel1.setTransform(244,705,1,1,0,0,0,244,100);

	this.timeline.addTween(cjs.Tween.get(this.panel1).wait(1));

}).prototype = getMCSymbolPrototype(lib.libs_mc_000013, new cjs.Rectangle(-34,0,541,802.1), null);


// stage content:
(lib.PlaceSkin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 产地+管理员
	this.panel = new lib.libs_mc_000013();
	this.panel.parent = this;
	this.panel.setTransform(321,528.5,1,1,0,0,0,244,402.5);

	this.timeline.addTween(cjs.Tween.get(this.panel).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(363,646,541,802.1);
// library properties:
lib.properties = {
	width: 640,
	height: 1040,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/place/PlaceSkin_atlas_P_.png?1479199605843", id:"PlaceSkin_atlas_P_"}
	],
	preloads: []
};




})(placeLib = placeLib||{}, placeImages = placeImages||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var placeLib, placeImages, createjs, ss, AdobeAn;