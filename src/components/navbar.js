export const createNavbar = (id) => {
    const navbarContainer = document.getElementById(id);

    const navbarHTML = `
        <div class="flex justify-between items-center w-full ">
            <p class="font-main text-2xl">hnzbyte</p>
            <img src="static/ic_github.png" alt="github_ic">
        </div>
    `;

    // Tambahkan HTML navbar ke dalam container
    navbarContainer.innerHTML = navbarHTML;
}


