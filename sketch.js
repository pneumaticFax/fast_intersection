
let ray;
let bound;
let bound2;
let particle;

function setup() {
    createCanvas(800, 800);

    background(51);
    bound = new Boundary(500,200, 500, 500);
    bound2 = new Boundary(100,200, 100, 500);
    bound3 = new Boundary(100,100, 500, 100);
    bound4 = new Boundary(100,600, 500, 600);
    ray = new Ray(createVector(300, 300), 0);
    ray.draw();

}

function draw(){
    background(51);
    bound.draw();
    bound2.draw();
    bound3.draw();
    bound4.draw();
    ray.draw();
    ray.setDir(mouseX, mouseY);

    let intersection = ray.cast(bound);
    if(intersection.length !== 0){
        drawPoint(intersection[0], intersection[1]);
    }

    let intersection2 = ray.cast(bound2);
    if(intersection2.length !== 0){
        drawPoint(intersection2[0], intersection2[1]);
    }

    let intersection3 = ray.cast(bound3);
    if(intersection3.length !== 0){
        drawPoint(intersection3[0], intersection3[1]);
    }

    let intersection4 = ray.cast(bound4);
    if(intersection4.length !== 0){
        drawPoint(intersection4[0], intersection4[1]);
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