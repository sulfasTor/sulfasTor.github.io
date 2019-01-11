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
	.add("assets/img/topview.png")
	.load(setup);

    function setup() {
	let topView = new Sprite(
	    resources["assets/img/topview.png"].texture
	);
	topView.x = 0;
	topView.y = 0;
	app.stage.addChild(topView);

	let sprite = new Sprite(
	    resources["assets/img/ironman.png"].texture
	);
	sprite.x = topView.width / 2;
	sprite.y = topView.height / 2;
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


