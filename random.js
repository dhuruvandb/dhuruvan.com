document.getElementById("Welcome").style="display:block"
document.getElementById("buttons").style="display:none"
document.getElementById("level").style="display:none"
document.getElementById("pause").style="display:none"



function Newgame(){
    document.getElementById("buttons").style="display:none"
    document.getElementById("level").style="display:block"
    document.getElementById("Welcome").style="display:none"
    document.getElementById("pause").style="display:none"
}

function Easy(){
    var Buttons = document.querySelectorAll(".button")
    document.getElementById("restart_easy").style="display:none"  
    var time = 10;
    setInterval(function(){
        
        if (time<=0){
            document.getElementById("timer").innerHTML="Time is over"
            document.getElementById("pause").style="display:none"
            document.getElementById("restart_easy").style="display:block" 
            for(j=0;j<3;j++)
            {
                Buttons[j].style="display:none"
            }
            
        }
        else{
            //document.getElementById("timer").innerHTML=time
            for(j=0;j<3;j++)
            {
                document.getElementById("restart_easy").style="display:none"  
                document.getElementById("pause").style="display:block"   
                Buttons[j].style="display:block"
                var random_number = Math.round(Math.random()*20);
                var random_number_1 = Math.round(Math.random()*20);
                var random_number_2 = Math.round(Math.random()*20);
                //var random_number_3 = Math.round(Math.random()*20);
                Buttons[0].innerHTML=random_number
                Buttons[1].innerHTML=random_number_1
                Buttons[2].innerHTML=random_number_2
                //Buttons[3].innerHTML=random_number_3 
                
            }
        }
        time--;
    },1000);

    
    document.getElementById("level").style="display:none"
    document.getElementById("Welcome").style="display:none"
    document.getElementById("buttons").style="display:block"
    
    

   

    for(j=3;j<Buttons.length;j++){
        Buttons[j].style="display:none"
    }

}

function Medium(){
//var random_number_1 = Math.round(Math.random()*50)+1;
var Buttons = document.querySelectorAll(".button")
 
   

    var time = 10;
    setInterval(function(){
        document.getElementById("pause").style="display:block"
        if (time<=0){
            document.getElementById("timer").innerHTML="Time is over"
        }
        else{
            //document.getElementById("timer").innerHTML=time
            let r1 = Math.round(Math.random()*50);
            for(j=0;j<5;j++){
                Buttons[j].style="display:block"
                var random_number = r1
                var random_number_1 = Math.round(Math.random()*50);
                var random_number_2 = Math.round(Math.random()*50);
                var random_number_3 = Math.round(Math.random()*50);
                var random_number_4 = Math.round(Math.random()*50);
                //var random_number_5 = Math.round(Math.random()*50);
                Buttons[0].innerHTML=random_number
                Buttons[1].innerHTML=random_number_1
                Buttons[2].innerHTML=random_number_2
                Buttons[3].innerHTML=random_number_3 
                Buttons[4].innerHTML=random_number_4 
                //Buttons[5].innerHTML=random_number_5 
                
            }
        }
        time--;
    },1000);

    
    document.getElementById("level").style="display:none"
    document.getElementById("Welcome").style="display:none"
    document.getElementById("buttons").style="display:block"
    
    Buttons[5].style="display:none"
    Buttons[6].style="display:none"
   

    
}
function Hard()
{
//var random_number_2 = Math.round(Math.random()*100)+1;
var Buttons = document.querySelectorAll(".button")
 
   

    var time = 10;
    setInterval(function(){
        if (time<=0){
            document.getElementById("timer").innerHTML="Time is over"
        }
        else{
            //document.getElementById("timer").innerHTML=time
            for(j=0;j<Buttons.length;j++){
                Buttons[j].style="display:block"
                var random_number = Math.round(Math.random()*100);
                var random_number_1 = Math.round(Math.random()*100);
                var random_number_2 = Math.round(Math.random()*100);
                var random_number_3 = Math.round(Math.random()*100);
                var random_number_4 = Math.round(Math.random()*100);
                var random_number_5 = Math.round(Math.random()*100);
                var random_number_6 = Math.round(Math.random()*100);
                Buttons[0].innerHTML=random_number
                Buttons[1].innerHTML=random_number_1
                Buttons[2].innerHTML=random_number_2
                Buttons[3].innerHTML=random_number_3 
                Buttons[4].innerHTML=random_number_4
                Buttons[5].innerHTML=random_number_5
                Buttons[6].innerHTML=random_number_6 
                
            }
        }
        time--;
    },1000);

    
    document.getElementById("level").style="display:none"
    document.getElementById("Welcome").style="display:none"
    document.getElementById("buttons").style="display:block"
    
    

   

   
}
function exit()
{
        var Val = confirm("Do you want to Exit the game ?");
        if( Val == true )
        {
            window.close();
        }
 
}

window.addEventListener('beforeunload',function(e){
    e.preventDefault();
    e.returnValue='';
    //this.alert("Are you sure want to close")
})

function pause(){
    alert("Click ok to continue the game");
    
}



document.getElementById("restart_easy").addEventListener("click",()=>{
    Easy();
})