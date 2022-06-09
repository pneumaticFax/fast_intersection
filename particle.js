class Particle{
    constructor(){
        this.position = createVector(width/2, height/2);
        this.rays = [];

        for(let i = 0; i < 360; i+=5){
            this.rays.push(new Ray(this.position, radians(i)))
        }
    }
    update(){
        this.position.x = mouseX;
        this.position.y = mouseY;
    }

    draw = function(){
        push();
        stroke(51);
        // ellipse(this.position.x, this.position.y, 2, 2)
        strokeWeight(1);
        fill(255);
        for(let ray of this.rays){
            ray.draw()
        }
        pop();
    }

}
