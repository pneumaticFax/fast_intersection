class Boundary{
    constructor(x1, y1, x2, y2){
        this.point1 = createVector(x1, y1);
        this.point2 = createVector(x2, y2);

    }

    draw(){
        push();
        strokeWeight(1);

        stroke('lightgreen');
        line(this.point1.x, this.point1.y, this.point2.x, this.point2.y);

        strokeWeight(2);
        stroke(0);
        fill('lightgreen');
        text("P1: (" + this.point1.x + ", " + this.point1.y + ")", this.point1.x+15, this.point1.y+15)
        text("P2: (" + this.point2.x + ", " + this.point2.y+ ")", this.point2.x+15, this.point2.y+15)


        pop();
    }
}