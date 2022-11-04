function hello() {
    alert("hello");
}

function sketch_idnameofdiv(p) {
    p.setup = function () {
        p.createCanvas(400, 400);
        p.background(200);
        p.noLoop();

    }

    p.draw = function () {
        // stuff to draw
        p.circle(50, 50, 20, 20);
    }
}
new p5(sketch_idnameofdiv, 'canvas')