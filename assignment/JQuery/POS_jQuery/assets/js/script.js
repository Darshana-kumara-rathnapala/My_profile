document.querySelector("#sec2").style.display="none";
/*document.querySelector("#sec4").style.display="none";*/

document.querySelector("#cus").addEventListener("click",function (){
    document.querySelector("#sec2").style.display="block";
    /*document.querySelector("#sec4").style.display="block";*/
    document.querySelector("#sec1").style.display="none";
    /*document.querySelector("#sec2").style.display="none";*/
})

document.querySelector("#home").addEventListener("click",function (){
    document.querySelector("#sec2").style.display="none";
    /*document.querySelector("#sec4").style.display="none";*/
    document.querySelector("#sec1").style.display="block";
    /*document.querySelector("#sec2").style.display="block";*/
})