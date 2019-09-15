

// returns loaciton

const treasureNumber = Math.floor(Math.random() * 9);
const bombNumber = Math.floor(Math.random() * 9);
var counter = 2;

function rainbowTreasure(loc) {
    if(loc === treasureNumber) {
        document.getElementById('table').innerHTML = "<img src = https://live.staticflickr.com/193/442965594_f1ba641913_z.jpg>"
        setTimeout(function(){ alert("Congratulations, you found the treasure!!"); }, 500);
        setTimeout(function(){ alert("Click 'Restart' to play again."); }, 550)
    } else if(loc !== treasureNumber && loc !== bombNumber) {
        document.getElementById(loc).innerHTML = "Try again"
    } else if(loc === bombNumber){
        document.getElementById('table').innerHTML = "<img src = https://cdn.pixabay.com/photo/2018/04/16/09/12/trash-3323974_960_720.png>"
        setTimeout(function(){ alert("Oops, you found the trash can."); }, 500);
        setTimeout(function(){ alert("Click 'Restart' to play again."); }, 550)
    } else if(loc === treasureNumber && loc === bombNumber) {
        alert("You're treasure exploded");
    }
        counter = counter -1;
        console.log(counter);
        document.getElementById('myCounter').innerHTML = `Counter: ${counter}`;

        if (counter === 0) {
            document.getElementById('table').innerHTML = "<img src = https://cdn.pixabay.com/photo/2012/12/17/19/15/ad-70507_960_720.jpg>"
            setTimeout(function(){ alert("Oops, you ran out of turns."); }, 500);
            setTimeout(function(){ alert("Click 'Restart' to play again."); }, 550)
        }
    }
