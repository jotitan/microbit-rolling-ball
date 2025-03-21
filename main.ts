class Point{
    constructor(public x :number = 0, public y: number=0){}
}

let previous :Point; 
let step = 4;
basic.forever(function () {
    let x = input.rotation(Rotation.Roll)
    let y = input.rotation(Rotation.Pitch)
    
    x = Math.min(Math.max(x, -step), step)
    y = Math.min(Math.max(y, -step), step)
    
    x = (x + step) / (step / 2);
    y = (y + step) / (step / 2);
    if (previous != null){
        led.unplot(previous.x, previous.y);
    }
    previous = new Point(x, y)
    led.plot(previous.x, previous.y)
})

input.onButtonPressed(Button.A, ()=>step-=1)
input.onButtonPressed(Button.B, () => step += 1)
