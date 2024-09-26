  let box =document.querySelector("#wrapper");
  let start =document.querySelector("#start");
  let stop =document.querySelector("#stop");
  let reset =document.querySelector("#reset");
  let min =document.querySelector("#min");
  let sec =document.querySelector("#sec");
   let x=0
   let y=0
  start.addEventListener("click",function(e){
    e.preventDefault()
      let sTime =  setInterval(()=>{
            if(x>=59){
             x=0
              ++y 
              min.innerHTML=y;
            }else{
              x = ++x
              sec.innerHTML=x
            }
            // console.log(y)
            // console.log(x)

            stop.addEventListener("click", function(){
             clearInterval(sTime)
            })
            reset.addEventListener("click",function(e){
               e.preventDefault()
             clearInterval(sTime)
              x = 0;
              y = 0;
              sec.innerHTML = "00";
              min.innerHTML = "00"; 
            })
          },1000)
        })
        

     


  
