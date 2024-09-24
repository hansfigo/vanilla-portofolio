export const createNavbar = (id) => {
    const navbarContainer = document.getElementById(id);

    const navbarHTML = `
        <nav class="flex justify-between items-center w-full ">
            <p class="font-main text-2xl">hnzbyte</p>

            <div class="nav-links">
                <a href="#about" class="nav-link">About</a>
                <a href="#projects" class="nav-link">Projects</a>
                <a href="#footer" class="nav-link">Contact</a>
            </div>    
           
            <button class="hamburger-menu">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </button>
        </nav>
    `;

    navbarContainer.innerHTML = navbarHTML;
}


