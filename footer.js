class Footer extends HTMLElement {

    connectedCallback() {
        this.innerHTML =`
           <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
            <footer class="py-3 my-4">
                <ul class="nav justify-content-center border-bottom pb-3 mb-3  navbar-dark bg-dark">
                    <li class="nav-item"><a href="Home.html" class="nav-link px-2 text-muted">Home</a></li>
                    <li class="nav-item"><a href="explore.html" class="nav-link px-2 text-muted">Explore</a></li>
                    <li class="nav-item"><a href="Spells%20and%20Potions.html" class="nav-link px-2 text-muted">Spells & Potions</a></li>
                    <li class="nav-item"><a href="Creatures.html" class="nav-link px-2 text-muted">Creatures</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
                </ul>
                <nav class="text-center text-muted">© D-Binara</nav>
            </footer>
        `;
    }
}

customElements.define('footer-component', Footer);
