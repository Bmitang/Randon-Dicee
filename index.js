function randomDicee(Dicee) {
    var num = Math.floor(Math.random() * (6) + 1)
    var randomDiceImage = "dice" + num +".png"; //dice1.png - dice6.png
    var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - 
    var imgae = document.querySelectorAll("img")[Dicee]
    imgae.setAttribute("src",randomImageSource)

    return num
}
let num1 = randomDicee(0);
let num2 = randomDicee(1);
let num3 = randomDicee(2);


// if num1 > num2 say Play 1 Wins!
// if num2 > num1 say Play 2 Wins!
// if num2 = num1 say Draw!

if (num1 > num2 && num1 > num3) {
    document.querySelector("h1").innerHTML = "Play 1 Wins!"
}
else if (num2 > num1 && num2 > num3) {
    document.querySelector("h1").innerHTML = "Play 2 Wins!"
}
else if (num3 > num1 && num3 > num2) {
    document.querySelector("h1").innerHTML = "Play 3 Wins!"
}
else if (num1 > num3 && num2 > num3 && num1 == num2) {
    document.querySelector("h1").innerHTML = "Play 1 , 2 Wins!"
}
else if (num1 > num2 && num3 > num2 && num1 == num3) {
    document.querySelector("h1").innerHTML = "Play 1 , 3 Wins!"
}
else if (num2 > num1 && num3 > num1 && num2 == num3) {
    document.querySelector("h1").innerHTML = "Play 2 , 3 Wins!"
} else {
    document.querySelector("h1").innerHTML = "Draw!"
}
