   let menu = document.getElementById("menu");
    function navbar() {
       if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
       }else{
         menu.classList.add('hidden');
       }
    }