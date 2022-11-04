function ResetCanvas() {
    const p5Canvas = document.querySelector("#canvas canvas");
    const context = p5Canvas.getContext('2d');
    context.clearRect(0, 0, p5Canvas.width, p5Canvas.height);
}

function sketch_idnameofdiv(p) {
    var width = 400;
    var height = 400;
    p.setup = function () {
        p.createCanvas(width, height);
        p.noStroke();
    }

    p.draw = function () {
        // stuff to draw
        p.background(0,0,0,10);
        p.fill(p.random(0, 255), p.random(0, 255), p.random(0, 255), 200);
        p.circle(p.random(0, width), p.random(0, height), 20, 20);
    }
}

new p5(sketch_idnameofdiv, 'canvas');