class Header extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
           <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
           <!--Header-->
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
                        aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="#">Enchanted Realm</a>
            
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <a class="nav-link" href="Home.html">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="explore.html">Explore</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="Spells%20and%20Potions.html">Spells & Potions</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="Creatures.html">Creatures</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="explore.html">About</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                       <button class="btn btn-outline-success my-2 my-sm-0" type="submit" ><a href="magical%20word.html">Search</a></button> 
                    </form>
                </div>
            </nav>
<!--End of Header-->
        `;
    }
}

customElements.define('header-component', Header);