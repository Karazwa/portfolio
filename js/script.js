let drop=document.getElementById('drop-btn')
let dropdown=document.getElementById('dropdown')
let li1=document.getElementById('li1')
let li2=document.getElementById('li2')
let li3=document.getElementById('li3')
let li4=document.getElementById('li4')
let li5=document.getElementById('li5')
let li6=document.getElementById('li6')
let li7=document.getElementById('li7')

let down=true;

drop.addEventListener('click',function(){
if(down===true){
    dropdown.classList='dropdown1'
    li1.classList='li-show'
    li2.classList='li-show'
    li3.classList='li-show'
    li4.classList='li-show'
    li5.classList='li-show'
    li6.classList='li-show'
    li7.classList='li-show'
    down=false;
}else{
    dropdown.classList='dropdown'
    li1.classList='li'
    li2.classList='li'
    li3.classList='li'
    li4.classList='li'
    li5.classList='li'
    li6.classList='li'
    li7.classList='li'
    down=true;
}

})