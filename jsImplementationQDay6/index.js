
//Q.1  Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button


    function addtext(){

        let button = document.getElementsByTagName("button")[0];
        let h =document.getElementsByTagName("h1")[0];
            h.innerText="MERN stack"
}

//Q.2 Write code to get 1st H1 element from a webpage using DOM

let h =document.getElementsByTagName("h1")[0];



// Q.3 Write code to implement timer clock using JS -- display HH:MM:SS -- the time should 
// keep updating every second

function timer(){
    let timer=document.getElementById("timer")
    let time = new Date();
    let hour = time.getHours();
    let min  = time.getMinutes();
    let sec  = time.getSeconds();
    
    timer.innerText= hour +":"+ min +":" + sec 
}
setInterval(timer,1000)



// Q.4 Create an HTML page having content as Hello world and a button named Replace Text. 
// When user will click on this button page content should be changed to "Welcome to Elevation academy"

function change(){
    let replace =document.getElementById("replace");
    let btn2 = document.getElementById("btn2");


    
    replace.innerText=("Welcome to Elevation academy")
}


// Q.5 Create an HTML page having content as Hello world and a button named "Hide Text."
//  When user will click on this button hide the "Hello World" text

function hide(){
    let hide = document.getElementById("hide");

    hide.innerText=" "
}

