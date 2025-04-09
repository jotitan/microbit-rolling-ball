class Point{
}

function showBall(){

}

let step = 4;
basic.forever(function () {
    showBall();
})

// To increase / decrease sensibility
input.onButtonPressed(Button.A, ()=>step -= 1)
input.onButtonPressed(Button.B, () => step += 1)
