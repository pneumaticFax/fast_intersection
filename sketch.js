
let ray;
let bound;
let particle;

function setup() {
    createCanvas(800, 800);

    background(51);
    bound = new Boundary(500,200, 500, 500);
    ray = new Ray(createVector(300, 300), 0);
    ray.draw();
    // particle = new Particle();
    // particle.draw()
}

function draw(){
    background(51);
    // particle.update();
    bound.draw();
    // particle.draw();
    ray.draw();
    ray.setDir(mouseX, mouseY);
    let intersection = ray.cast(bound);
    if(intersection.length !== 0){
        drawPoint(intersection[0], intersection[1]);
    }

}

function drawPoint(x_coord, y_coord){
    push();
    stroke('lightblue');
    strokeWeight(10);
    point(x_coord, y_coord);

    strokeWeight(2);
    stroke(0);
    fill('lightblue');
    text("P*: (" + x_coord.toFixed(2) + ", " + y_coord.toFixed(2) + ")", x_coord+30, y_coord+30)

    pop();


}