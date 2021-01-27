let Home = {
    render: async () => {
        let view = `
            <div class="row content-flex content-default" >
            <div class="col-sm>
            <a class="navbar-brand" href="/#/login" style="color:black;" type="button">
            teste
            <span class="fas fa-sign-in-alt px-2">
            </span>
          </a>
            <div class="card" style="width: 18rem; text-aligh: center">
            <img src="" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Bem vindo</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/#/login" class="btn btn-primary">Go somewhere</a>
            </div>
            </div> 
            </div>
            </div>      
        `
        return view
    },

    after_render: async () => {


    }
}

export default Home;