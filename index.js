document.addEventListener("DOMContentLoaded", () => {
    var gmailadress = "danielpetcov.work@gmail.com";
    var copyButton = document.getElementById("gmail");

    copyButton.addEventListener("click", () => {
       navigator.clipboard.writeText(gmailadress).then(() => {
            const copied = document.getElementById("copied");
            copied.classList.add('show');

            setTimeout(() => {
                copied.classList.remove('show');
            }, 2000)
       })
    })




    const width = window.innerWidth;
    if(width <= 700){
        let state = 0
        const menu_icon = document.getElementById("menu-icon");
        menu_icon.addEventListener('click', () => {
            const navbar = document.getElementById("navbar");
            if(state === 0){
                let menu_element = document.querySelectorAll("#menu-links");
                menu_element.forEach(x => {
                    x.style.opacity = 1;
                    x.style.visibility = "visible";
                    navbar.style.backgroundColor = "#f5f5dc";
                    navbar.style.color = "000";
                    // const head = document.getElementById("menu-home");
                    // head.style.margin = 0;
                })
                state = 1;
            } else{
                let menu_element = document.querySelectorAll("#menu-links");
                menu_element.forEach(x => {
                    x.style.opacity = 0;
                    x.style.visibility = 'hidden';
                    navbar.style.backgroundColor = "transparent";
                    navbar.style.color = "000";
                    // const head = document.getElementById("menu-home");
                    // head.style.margin = '0 0 1em 0';
                })
                state = 0;
            }
            
        })
    }

})