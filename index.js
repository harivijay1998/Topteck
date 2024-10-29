const optbtn= document.getElementById('option_bar');
const navmenu= document.getElementById('mt');

optbtn.addEventListener('click',()=>{
    if(navmenu.style.display==='block'){
        navmenu.style.display ='none';
    }
    else{
        navmenu.style.display='block'
    }
})