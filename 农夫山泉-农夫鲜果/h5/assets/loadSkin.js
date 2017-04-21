(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"loadSkin_atlas_", frames: [[0,0,390,439],[0,441,365,420]]}
];


// symbols:



(lib.libs_img_000008 = function() {
	this.spriteSheet = ss["loadSkin_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.libs_img_000009 = function() {
	this.spriteSheet = ss["loadSkin_atlas_"];
	this.gotoAndStop(1);
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


(lib.libs_mc_000015 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.libs_img_000009();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.libs_mc_000015, new cjs.Rectangle(0,0,365,420), null);


(lib.libs_mc_000013 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.libs_img_000008();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.libs_mc_000013, new cjs.Rectangle(0,0,390,439), null);


(lib.libs_graphic_000012 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.label = new cjs.Text("", "18px 'Arial'", "#79BC1F");
	this.label.name = "label";
	this.label.lineHeight = 24;
	this.label.lineWidth = 37;
	this.label.parent = this;
	this.label.setTransform(6.6,6.6,3.307,3.307);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137.1,80.4);


(lib.libs_graphic_000011 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#595959").s().p("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");
	this.shape.setTransform(45.2,25.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.9,3.7,82.7,43.6);


(lib.libs_mc_000014 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_30 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(1));

	// 图层 4 拷贝
	this.instance = new lib.libs_mc_000015();
	this.instance.parent = this;
	this.instance.setTransform(203.5,-474,1,1,0,0,0,182.5,210);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:246},12,cjs.Ease.get(1)).to({y:210},18,cjs.Ease.get(1)).wait(1));

	// “图层 4”的投影
	this.instance_1 = new lib.libs_mc_000013();
	this.instance_1.parent = this;
	this.instance_1.setTransform(195,-458.5,1,1,0,0,0,195,219.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:261.5},12,cjs.Ease.get(1)).to({y:225.5},18,cjs.Ease.get(1)).wait(1));

	// 00%
	this.mc = new lib.libs_graphic_000012();
	this.mc.parent = this;
	this.mc.setTransform(262.7,600,1,1,0,0,0,56.3,41.6);
	this.mc.alpha = 0;
	this.mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(6).to({_off:false},0).to({y:558.6,alpha:1},9,cjs.Ease.get(1)).to({y:564},5).wait(11));

	// 检测中 Detecting
	this.instance_2 = new lib.libs_graphic_000011("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(153.1,599.8,1,1,0,0,0,45.1,24.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({y:558.4,alpha:1},9,cjs.Ease.get(1)).to({y:563.8},6).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-684,390,445);


// stage content:
(lib.loadSkin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.loadPanel = new lib.libs_mc_000014();
	this.loadPanel.parent = this;
	this.loadPanel.setTransform(317,582.4,1,1,0,0,0,195,355.4);

	this.timeline.addTween(cjs.Tween.get(this.loadPanel).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(442,63,390,445);
// library properties:
lib.properties = {
	width: 640,
	height: 1040,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/loading/loadSkin_atlas_.png?1478958789700", id:"loadSkin_atlas_"}
	],
	preloads: []
};




})(loadLib = loadLib||{}, loadImages = loadImages||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var loadLib, loadImages, createjs, ss, AdobeAn;