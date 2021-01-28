// const contentNav = null || document.getElementById('header')


let Nav = {
  render: async () => {
      let view = `<nav class="navbar navbar-expand-lg navbar-light fixed-top" style="background-color: aliceblue;">

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">

            <a class="navbar-brand" href="/#/login" style="color:black;" type="button">
              Entrar
              <span class="fas fa-sign-in-alt px-2">
              </span>
            </a>

          </li>
          <li class="nav-item">

            <a class="navbar-brand" href="/#/signup" style="color: black;" type="button">Criar uma conta
              <span class="fas fa-user-plus px-2"></span>
            </a>

          </li>

        </ul>
      </div>
    </nav>`
      
      return view
  },

  after_render: async () => {


  }
}

export default Nav;