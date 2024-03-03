const answ = document.getElementById("answer");
const tempf = document.getElementById("temf");
const tempC = document.getElementById("temC");



function submit(){
    let number = document.getElementById("number").value;
    let num = Number(number);
    if(num === Number || tempf.checked ){
        let F = num * 1.8 + 32;
        answ.innerHTML = `Tempeture is ${F}°F`;
        console.log(F);
    }
    else if(num === Number || tempC.checked){
        let C = (num -32) /1.8;
        answ.innerHTML = `Temperature is ${C}°C`;

    }

       

      
    }
    
   
