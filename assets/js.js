snakes={}
ladder={}

count=0;
position=1;

function onReferesh()
{

    createSnakes()
    createLadders()
    
    for(key in ladder)
    {
        var b="box"+key;
        var b1="box"+ladder[key];
           
        //    console.log(b);
        document.getElementById(b).style.backgroundColor = "yellow";
        document.getElementById(b).style.color = "black";
        // document.getElementById(b1).style.backgroundColor = "orange";
        document.getElementById(b).innerHTML=document.getElementById(b).innerHTML + " ⇈ " +ladder[key] +"<br><span style='font-size:13px;'>LADDER</span>"
        
    }
    
    for(key in snakes)
    {
        var b="box"+key;
        var b1="box"+snakes[key];
           
        //    console.log(b);
        document.getElementById(b).style.backgroundColor = "red";
        document.getElementById(b).style.color = "black";
        // document.getElementById(b1).style.backgroundColor = "maroon";
        document.getElementById(b).innerHTML=document.getElementById(b).innerHTML + " ⇊ " +snakes[key] +"<br><span style='font-size:13px;'> &nbspSNAKE</span>"
        
    }
    

}
window.addEventListener('load', function () {
    onReferesh()
    document.getElementsByClassName("dot")[100-position].style.display="block";
    })


function createSnakes()
{
    console.log(document.getElementsByClassName("box").length)
    while(Object.keys(snakes).length !=6)
    {
        pos=Math.floor(Math.random()*100%80)+20
        moveTo=Math.floor(Math.random()*(100)%(pos-10))+2;
        snakes[pos]=moveTo;
    }
    console.log( snakes)
}
function createLadders()
{
    while(Object.keys(ladder).length !=6)
    {
        
        pos=Math.floor(Math.random()*100%50)+10
        moveTo=Math.floor(Math.random()%(pos))+(100-(pos))
        flag=true
        for (const [key, value] of Object.entries(snakes)) {
            if(key in snakes && ( key == pos || key==moveTo ))
            {
                flag=false;
                break;
            }
        }
        if(flag)
        {
            ladder[pos]=moveTo;
        }
    }
    console.log( ladder)
}




function rollDice(){

   document.getElementById("clickMe").hidden=true;
   
        var side=Math.floor(Math.random()*100%6)+1
        
        for (i=1;i<=6;i++)
        {
            if(i==side)
            {
            
                count++;
                document.getElementById("side"+i).style.display="flex"; 
                document.getElementById("side"+i).hidden=false;
                document.getElementById("dice").style.pointerEvents="none"
            }
            else{
                document.getElementById("side"+i).style.display="none"; 
                document.getElementById("side"+i).hidden=true;
               
            }
            console.log("side"+side+"---->"+document.getElementById("side"+side))
    
    
           
            setTimeout(()=>{
                for(i=1;i<=6;i++)
                {
                        document.getElementById("side"+i).style.display="none"; 
                        document.getElementById("side"+i).hidden=true;      
                }
                document.getElementById("clickMe").hidden=false;
                document.getElementById("dice").style.pointerEvents="auto"
                
    
    
            
            },1500)
        }
        document.getElementsByClassName("dot")[100-position].style.display="";
                
        if(position==1){
            position=position+side-1;
        }
        else{
            position=position+side
        }
        if(position>=100)
        {
            document.getElementById("dice").style.pointerEvents="none"
            document.getElementsByClassName("dot")[100-100+1].style.display="";
            setTimeout(()=>{
                document.getElementById("board").style.display="none"
                document.write("<div style=' font-size: 50px; margin-left:400px; margin-top:200px; background-color: mediumaquamarine;padding:30px 00px 30px 60px;'>Congratulations You Won in "+count+" Steps ! <br><span style='font-size:30px;'>Press F5 to  play again ! </span> </div>")    
            },1500)
        }
        else
        {
            ladderFlag=false;
            ladderMoveTo=0;
            snakeFalg=false;
            snakeMoveTo=0;
            for(keys in snakes)
            {
                if(keys==position)
                {
                    snakeFalg=true
                    snakeMoveTo=snakes[keys]
                    
                    console.log(keys +"--------> "+snakes[keys])
                    break;
                }
            }
            for(keys in ladder)
            {
                if(keys==position)
                {
                    ladderFlag=true
                    ladderMoveTo=ladder[keys]
                    console.log(keys +"--------> "+ladder[keys])
                    break;
                }
            }
            if(ladderFlag)
            {
             
                document.getElementsByClassName("dot")[100-position].style.display="block";
                setTimeout(()=>
                {
                    document.getElementsByClassName("dot")[100-position].style.display="";   
                    position=ladderMoveTo;
                    document.getElementsByClassName("dot")[100-position].style.display="block";
                },1000)
            
            }
            else if(snakeFalg)
            {
                document.getElementsByClassName("dot")[100-position].style.display="block";
                setTimeout(()=>
                {
                    document.getElementsByClassName("dot")[100-position].style.display="";   
                    position=snakeMoveTo;
                    document.getElementsByClassName("dot")[100-position].style.display="block";
                },1000)
           
            }
            else{  
                document.getElementsByClassName("dot")[100-position].style.display="block";
            }    
        }     
}