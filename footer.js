class Footer extends HTMLElement {

    connectedCallback() {
        this.innerHTML =`
           <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
            <footer class="py-3 my-4">
                <ul class="nav justify-content-center border-bottom pb-3 mb-3  navbar-dark bg-dark">
                    <li className="nav-item"><a href="Home.html" className="nav-link px-2 text-muted">Home</a></li>
                    <li className="nav-item"><a href="Link.html" className="nav-link px-2 text-muted">Store</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Other Details</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
                </ul>
                <nav className="text-center text-muted">© 2022 Company, Inc</nav>
            </footer>
        `;
    }
}

customElements.define('footer-component', Footer);
