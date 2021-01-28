import IsAuthenticated from '../../service/isAuth.js';
import baseURL from '../../service/baseURL.js'


const RequestDataAccount = async () => {

    let dataUser = JSON.parse(localStorage.getItem('userDataAccount'))
    
    let { token, usuario: { login }} = dataUser

    console.log(dataUser)
    
    let headersDefault = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    }
    
    const response = await axios.get(`${baseURL}lancamentos/planos-conta?login=${login}`, headersDefault)
    const allData = response.data
    console.log(allData)
    return allData
}

let Dash = {
    render: async () => {
        let view = `
        <div>
            <h1> Bem vindo  </h1>        
        </div>
        `
        return view
    },

    after_render: async () => {


    }
}

export default Dash;