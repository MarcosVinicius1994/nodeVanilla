import baseURL from '../../service/baseURL.js'

let Sign = {
    render: async () => {
        let view = `
        <div class="container">
        <body class="text-center">
        <form class="form-signin">
          <h1 class="h3 mb-3 font-weight-normal"> Sign in</h1>
          <label for="inputcpf"  class="sr-only">CPF:</label>
          <input type="text" id="cpf" class="form-control" placeholder="Insira seu CPF"required="" autofocus="">
          <label for="inputName"  class="sr-only">Name:</label>
          <input type="text" id="username" class="form-control" placeholder="Insira seu nome"required="" autofocus="">
          <label for="inputEmail"  class="sr-only">Email:</label>
          <input type="mail" id="fname" class="form-control" placeholder="Insira seu email"required="" autofocus="">
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" id="password" class="form-control" placeholder="Password" required="">
          <label for="inputRemenberPassword" class="sr-only">Remember Password</label>
          <input type="password" id="re_password" class="form-control" placeholder="re_password" required="">
          <div class="checkbox mb-3">
          </div>
          <button class="btn btn-lg btn-primary btn-block" id ="submit_new_register"type="submit">Sign in</button>
        </form>
        </body>       
        </div>
        `
        return view
    },

    after_render: async () => {
      document.getElementById('submit_new_register').addEventListener('click', () => {
          let nameVal = document.getElementById('fname').value,
              userMail = document.getElementById('username').value,
              passwordVal = document.getElementById('password').value,
              RepasswordVal = document.getElementById('re_password').value,
              CPF = document.getElementById('cpf').value.replace(/[^\d]/g, "")
              console.log(CPF)
          
          if ( passwordVal === RepasswordVal ){

              axios.post(`${baseURL}usuarios`, {
                  cpf: CPF,
                  login: userMail,
                  nome: nameVal,
                  senha: passwordVal
              },
               {
                  headers: {
                      'Content-Type': 'application/json'
                  }
              })
              .then( res => {
                  if ( res.status === 200 ){
                      window.location.replace('#/login')
                      // localStorage.setItem('@token',res.data.token)
                      // document.userDatAccount = res.data
                  }
              })

          } else {
              alert('confira sua senha!')
          }
      })
  }
}

export default Sign;