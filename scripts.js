const line = document.querySelector('.line');
const circle = document.querySelectorAll('.circle');
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')


let activeNow = 1;

if (activeNow == 1){
    prev.disabled = true;
} else if (activeNow == 4){
    next.disabled = true;
}

function updateActiveLine() {
    const progress = (activeNow - 1) / 3 * 100;
    line.style.background = `linear-gradient(to right, #3498db ${progress}%, #e0e0e0 ${progress}%)`;    
}

function update(status){
    if (status){
        activeNow++;
        console.log(activeNow)
        if (activeNow > 4){
            return
        }
        prev.disabled = false;
        switch (activeNow){
            case 2:
                var curCircle = document.querySelector('.two');
                curCircle.classList.add('activeBtn');
                break;
            case 3:
                var curCircle = document.querySelector('.three');
                curCircle.classList.add('activeBtn');
                break;
            case 4:
                var curCircle = document.querySelector('.four');
                curCircle.classList.add('activeBtn');
                next.disabled = true;
                break;
        }
    } else {
        activeNow--;
        console.log(activeNow)
        if (activeNow <= 0) return;
        
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
    updateActiveLine()
}

