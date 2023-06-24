const answers=document.querySelectorAll(".ans");
const questions=document.querySelectorAll(".inner");




questions[0].addEventListener("click",(e)=>{
   if(questions[0].querySelector("p").innerText=="x"){
       cancel(questions[0],answers[0]);
   }else{
   clean(questions[0],answers[0]);
}})

questions[2].addEventListener("click",(e)=>{
    if(questions[2].querySelector("p").innerText=="x"){
        cancel(questions[2],answers[2]);
    }
    else{
    clean(questions[2],answers[2]);
}})


questions[1].addEventListener("click",(e)=>{
    if(questions[1].querySelector("p").innerText=="x"){
        cancel(questions[1],answers[1]);
    }
    else{
    clean(questions[1],answers[1]);
}})


questions[3].addEventListener("click",(e)=>{
    if(questions[3].querySelector("p").innerText=="x"){
        cancel(questions[3],answers[3]);
    }
  else{
    clean(questions[3],answers[3]);
}})


questions[4].addEventListener("click",(e)=>{
    if(questions[4].querySelector("p").innerText=="x"){
        cancel(questions[4],answers[4]);
    }
    else{
    clean(questions[4],answers[4]);
}})


questions[5].addEventListener("click",(e)=>{
    if(questions[5].querySelector("p").innerText=="x"){
        cancel(questions[5],answers[5]);
    }else
    {    clean(questions[5],answers[5]);
}})



function clean(q,a){
    for(let i=0;i<a.length;i++){
        answers[i].style.display="none";
        questions[i].querySelector("p").innerText="+";
    }
    q.querySelector("p").innerText="x";

    a.style.display="block";
    a.classList.remove('ans-exact');
}

function cancel(q,a){
    q.querySelector("p").innerText="+";
    a.classList.add("ans-exact");
    setTimeout(()=>{
        a.style.display="none";
    },130)

}
