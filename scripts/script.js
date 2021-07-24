let backgroundImage = document.getElementById('changer');
let left = document.getElementById('left');
let right = document.getElementById('right');

let cls = 'img1';

function images(value) {
    let reg = /\d/;
    let temp = 0;

    for (let el of cls) {
        if (reg.test(el)) {
            let tmp = parseInt(el);
            if (value === 1) {
                if (tmp < 7) {
                    temp = tmp + 1;
                } else {
                    temp = 1;
                }
            } else if (value === -1) {
                if (tmp > 1) {
                    temp = tmp - 1;
                } else {
                    temp = 7;
                }
            }
        }
    }
  
    cls = 'img' + temp;
};

function changing() {
    $(document).ready(() => {
        $(backgroundImage).removeClass();
        $(backgroundImage).addClass(cls);
    });
};

function forward() {
	changing();
    images(1);
};

function backward() {
    changing();
    images(-1);
};


left.addEventListener('click', backward);
right.addEventListener('click', forward);