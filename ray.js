class Ray{
    constructor(position, angle){
        this.position = position;
        this.direction = p5.Vector.fromAngle(angle);
    }

    draw = function(){
        let p1x = this.position.x;
        let p1y = this.position.y;

        let p2x = this.position.x + this.direction.x;
        let p2y = this.position.y + this.direction.y;

        push();

        strokeWeight(2);
        stroke(0);
        fill('pink');
        text("P3: (" + p1x + ", " + p1y + ")", this.position.x+15, this.position.y+15)
        text("P4: (" + p2x + ", " + p2y+ ")", this.direction.x+ this.position.x+15, this.direction.y + this.position.y+15)

        stroke('pink');
        strokeWeight(1);
        translate(this.position.x, this.position.y)
        line(0,0,this.direction.x, this.direction.y);

        pop();
    }


    cast = function(boundary) {
        let intersection = fastIntersection(
            boundary.point1.x,
            boundary.point1.y,
            boundary.point2.x,
            boundary.point2.y,
            this.position.x,
            this.position.y,
            this.position.x + this.direction.x,
            this.position.y + this.direction.y
        )
        console.log(intersection);
        return intersection;
    }

    setDir = function(x,y){
        this.direction.x = x - this.position.x;
        this.direction.y = y - this.position.y
        // this.direction.normalize();
    }
}

