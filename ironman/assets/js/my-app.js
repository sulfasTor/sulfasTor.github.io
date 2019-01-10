let type = !PIXI.utils.isWebGLSupported() ? "canvas" : "WebGL";
PIXI.utils.sayHello(type);
window.onload = main;

let Application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite;

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
	.load(setup);

    function setup() {
	let sprite = new PIXI.Sprite(
	    resources["assets/img/ironman.png"].texture
	);
	sprite.x = window.innerWidth / 2;
	sprite.y = window.innerHeight / 2;
	sprite.width = 10;
	sprite.height = 10;

	app.ticker.add(() => {
	    sprite.rotation += 0.01;
	    if (sprite.width > window.innerWidth) {
		sprite.width = 10;
		sprite.height = 10;
	    } else {
		sprite.width += 1;
		sprite.height += 1;
	    }
	});
	app.stage.addChild(sprite);
    }
}


