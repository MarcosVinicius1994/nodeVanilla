import baseURL from '../../service/baseURL.js'
import IsAuthenticated from '../../service/isAuth.js'

let Login = {
    render : async () => {
        let IsAuth = await IsAuthenticated(localStorage.getItem('@token'), 'dashboard');
        let view = `
        <div class="container">   
        <body class="text-center">
        <form class="form-signin">
          <h1 class="h3 mb-3 font-weight-normal">Login</h1>
          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="mail" id="username" class="form-control" placeholder="Email address" required="" autofocus="">
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" id="passlogin" class="form-control" placeholder="Password" required="">
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"> Remember me
            </label>
          </div>
          <button class="btn btn-lg btn-primary btn-block" id="login_start" type="submit">Login</button>
        </form>
         </body>       
        </div>
        `
        return view
    },

    after_render: async () => {
      document.getElementById('login_start').addEventListener('click', () => {
          let nameUser = document.getElementById('username').value,
              userPass = document.getElementById('passlogin').value
          
          if ( nameUser.length >= 4 && userPass.length >= 4 ){

              axios.post(`${baseURL}login`, {
                  usuario: nameUser,
                  senha: userPass,
              })
              .then( res => {
                      if ( res.status === 200 ){
                          window.location.replace('#/dashboard')
                          localStorage.setItem('@token',res.data.token)
                        //   localStorage.setItem('userDataAccount', JSON.stringify(res.data))
                      } 
                  
              }).catch((err) => {
                  alert( err.response.data.error)
                  window.location.replace('#/signup') 
              })

          } else {
              alert('Quantidade de caracteres inferior ao permitido')
          }
      })

  }
}

export default Login;