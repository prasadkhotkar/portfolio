const tabs = document.querySelectorAll('.header-nav-tab');
const highlight = document.querySelector('.highlight');
const mobileNavBarIcon = document.getElementById("mobile-nav-bar-icon");
const headerNavList = document.getElementById("header-nav-list");
const linkedin=document.getElementById("linkedin");
const Twitter=document.getElementById("twitter");
const github=document.getElementById("github");
const discord=document.getElementById("discord");

const firstTab = tabs[0];
var icon =document.getElementById("mode-change");


// Calculate the position of the highlight element
const left = firstTab.offsetLeft;
const width = firstTab.offsetWidth;

// Set the default position of the highlight element
highlight.style.left = `${left}px`;
highlight.style.width = `${width}px`;

tabs.forEach(tab => {
  tab.addEventListener('click', function() {
    // Get the index of the selected tab
    const index = this.dataset.index;
    
    // Calculate the position of the highlight element
    const left = this.offsetLeft;
    const width = this.offsetWidth;
    
    // Update the position of the highlight element
    highlight.style.left = `${left}px`;
    highlight.style.width = `${width}px`;
    
    // Add active class to the selected tab
    tabs.forEach(tab => tab.classList.remove('active'));
    this.classList.add('active');
  });
});


linkedin.onclick=()=>
{
window.location.href="https://www.linkedin.com/in/prasad-khotkar";
}
Twitter.onclick=()=>
{
    window.location.href="https://twitter.com/PrasadKhotkar1"
}
github.onclick=()=>
{
    window.location.href="https://github.com/prasadkhotkar"
}
discord.onclick=()=>
{
    window.location.href="https://twitter.com/PrasadKhotkar1"
}

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(icon.className=="fa-solid fa-moon"){
        icon.className="fa-solid fa-sun"; 
    }else{
        icon.className="fa-solid fa-moon"; 
    }
}


mobileNavBarIcon.onclick = function() {
  if(mobileNavBarIcon.className=="fa-solid fa-bars"){
    mobileNavBarIcon.className="fa-solid fa-close";
    headerNavList.style.display = "flex";
    headerNavList.style.transform = "translateX(0)";
  }else{
    headerNavList.style.display = "none";
    mobileNavBarIcon.className="fa-solid fa-bars";
    headerNavList.style.transform = "translateX(200%)";
  }

}

// const linkedin=document.getElementById("linkedin");
// const Twitter=document.getElementById("twitter");
// const github=document.getElementById("github");
// const discord=document.getElementById("discord");