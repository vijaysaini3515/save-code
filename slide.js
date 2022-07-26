
let flag = 0;

slidShow(flag)
function slidShow(num){
    var data = document.getElementsByClassName('slide');
    if(num == data.length){
        flag = 0;
        num = 0;
    }
    if(num < 0 ){
        flag = data.length -1;
        num = data.length -1;
    }

    for(let y of data){
        y.style.display = "none"
    }
    data[num].style.display = "block";
}

function controller(clk){
    flag = flag + clk ;
    slidShow(flag)
}


