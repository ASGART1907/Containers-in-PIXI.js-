const app = new PIXI.Application({width:this.innerWidth,height:this.innerHeight});

document.body.append(app.view);

const WIDTH = app.view.width;
const HEIGHT = app.view.height;

const container = new PIXI.Container();

let i,j;
for(i = 0; i<5; i++){
    
    for(j = 0; j<5; j++){
        const img = new PIXI.Sprite.from("./Assets/owl.png");
        img.scale.set(0.5,0.5);
        img.anchor.set(0.5);
        img.position.set(i * 50,j * 50);
        container.addChild(img);
    }

}

container.position.set(
    WIDTH / 2 - container.width / 2,
    HEIGHT / 2 - container.height / 2
);

app.ticker.add(() => {
    container.children.forEach(child => {
        child.rotation += 0.1;
    })
})

app.stage.addChild(container);