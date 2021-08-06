class Ball
{
    constructor(x, y, w, h)
    {
        let options = {
            restitution:0.8
        }
        this.r = 30
        this.body = Bodies.circle(x, y, this.r, options)
        World.add(world, this.body)
    }

    show() {
    var pos = this.body.position
    push()
    translate(pos.x, pos.y)
    fill("teal")
    ellipseMode(CENTER)
    rect(0, 0, this.width, this.height)
    pop()
    }
}