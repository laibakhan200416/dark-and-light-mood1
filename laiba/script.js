let toggleModeBtn = document.getElementById("toggleModeBtn");

toggleModeBtn.onclick = () =>{

if(document.body.style.backgroundColor==='white'){


document.body.style.backgroundColor='black';

document.body.style.color="white";

toggleModeBtn.textContent="Switch to Light Mode";

}

else{

document.body.style.backgroundColor='white';

document.body.style.color="black";

toggleModeBtn.textContent="Switch to Dark Mode";

}
    
}




