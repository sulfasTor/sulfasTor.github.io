let type = !PIXI.utils.isWebGLSupported() ? "canvas" : "WebGL";
PIXI.utils.sayHello(type);
window.onload = main;

let Application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite,
    TextureCache = PIXI.utils.TextureCache,
    Rectangle = PIXI.Rectangle;

function main() {
    let app = new Application({
	width: window.innerWidth * 2,
	height: window.innerHeight,
	antialias: true,
	transparent: true
    });
    
    document.body.appendChild(app.view);
    
    loader
	.add("assets/img/ironman.png")
	.add("assets/img/trump_run.png")
	.add("assets/img/hell.png")
	.load(setup);

    function setup() {
	var texture = TextureCache["assets/img/trump_run.png"];
	var trump = new Sprite(texture);
	var x = 0;
	var y = 100;
	var locY = 0;
	var locX = 0;

	add_sprite("assets/img/hell.png", window.innerWidth, 300, 0, window.innerHeight/2);
	texture.frame = new Rectangle(0, 0, 100, 100);
	setInterval(() => {
	    if (x >= texture.width) {
		x = 0;
	    } else {
		x += 100;
	    }

	    if (locY >= window.innerHeight / 2) {
		locY = 0;
		locX = 0;
	    } else {
		locY+=8;
	    }

	    if (locX >= window.innerWidth / 2) {
		locX = 0;
		locY = 0;
	    } else {
		locX+=8;
	    }

	    trump.y = locY;
	    trump.x = locX;
	    trump.texture.frame = new Rectangle(x, y, 100, 100);
	    app.stage.addChild(trump);
	}, 100);	
    }

    var add_sprite = (resource_path, w, h, x, y) => {
	let sprite = new PIXI.Sprite(
	    resources[resource_path].texture
	);
	sprite.x = x;
	sprite.y = y;
	sprite.width = w;
	sprite.height = h;
	app.stage.addChild(sprite);
    };
}


