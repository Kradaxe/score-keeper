const one = document.querySelector('#buttonone');
const two = document.querySelector('#buttontwo');
const resetgame = document.querySelector('#reset');
const p1score = document.querySelector('#p1');
const p2score = document.querySelector('#p2');
let scoreone = 0;
let scoretwo = 0;

let themax = document.querySelector('#max');
let maxscore = 3;


one.addEventListener('click', function(){

    if (!(scoreone===maxscore || scoretwo===maxscore)){

    scoreone++;
    
    p1score.textContent = scoreone;

    }

    if(scoreone===maxscore){

        p1score.classList.add('has-text-success');
        p2score.classList.add('has-text-danger');
        one.disabled = true;
        two.disabled = true;
    }

})
two.addEventListener('click', function(){

    if (!(scoreone===maxscore || scoretwo===maxscore)){

    scoretwo++;
    
    p2score.textContent = scoretwo;

    }

    if(scoretwo===maxscore){

        p2score.classList.add('has-text-success');
        p1score.classList.add('has-text-danger');
        one.disabled = true;
        two.disabled = true;

    }

  

    
})

resetgame.addEventListener('click',function(){

    scoreone=0;
    scoretwo=0;
    p1score.textContent=0;
    p2score.textContent=0;
    p1score.classList.remove('has-text-success','has-text-danger');
    p2score.classList.remove('has-text-success','has-text-danger');
    one.disabled = false;
    two.disabled = false;

})

themax.addEventListener('change', function(){

    maxscore=parseInt(themax.value);

})


