const progress = document.querySelector('.line');
const circle = document.querySelectorAll('.circle');
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')


let activeNow = 1;

if (activeNow == 1){
    prev.disabled = true;
} else if (activeNow == 4){
    next.disabled = true;
}

function update(status){
    if (status){
        activeNow++;
        console.log(activeNow)
        if (activeNow <= 4){
            switch (activeNow){
                case 2:
                    var curCircle = document.querySelector('.two');
                    curCircle.classList.add('activeBtn');
                    prev.disabled = false;
                    break;
                case 3:
                    var curCircle = document.querySelector('.three');
                    curCircle.classList.add('activeBtn');
                    prev.disabled = false;
                    break;
                case 4:
                    var curCircle = document.querySelector('.four');
                    curCircle.classList.add('activeBtn');
                    next.disabled = true;
                    prev.disabled = false;
                    break;
            }
        }
    } else {
        activeNow--;
        console.log(activeNow)
        if (activeNow > 0){
            switch (activeNow){
                case 2:
                    var curCircle = document.querySelector('.three');
                    curCircle.classList.remove('activeBtn');
                    break;
                case 3:
                    var curCircle = document.querySelector('.four');
                    curCircle.classList.remove('activeBtn');
                    next.disabled = false;
                    break;
                case 1:
                    var curCircle = document.querySelector('.two');
                    curCircle.classList.remove('activeBtn');
                    prev.disabled = true;
                    next.disabled = false;
                    break;
            }
        }
    }
    
}

