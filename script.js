
(function(){

    let screen=document.querySelector(".screen");
    let buttons=document.querySelectorAll(".btn");
    let equal=document.querySelector(".equal-btn");
    let clear=document.querySelector(".clear-btn");
    
    buttons.forEach(function(button){
        
        button.addEventListener('click',function(){
            console.log(button.textContent);
            let val=button.textContent;
            screen.value+=val;
        })
    })

    equal.addEventListener("click",function(){
        
        if(screen.value===""){
            screen.value="";
        }else{
            let ans=eval(screen.value);
            screen.value=ans;
        }
    })

    clear.addEventListener("click",function(){
        screen.value="";
    })

})();