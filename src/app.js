// import api from './service/api.js'
// import { init } from 'browser-sync'
//componentes default
import Nav from './views/componentes/Nav.js'
import Footer from './views/componentes/Footer.js'

//componentes 
import Home from './views/pages/Home.js'
import Dash from './views/pages/Dash.js'
import Login from './views/pages/Login.js'
import Sign from './views/pages/Sign.js'
import Error from './views/pages/Error.js'


// /utils 
import Utils from './service/Utils.js'

let routes = {
    '/': Home,
    '/signup': Sign,
    '/login': Login,
    '/dashboard': Dash
}


// codigo do roteador. pegar url e verificar na nossa rota e renderizar 

const router = async () =>{

    //selects
    const contentHeader = null || document.getElementById('header');
    const content = null || document.getElementById('container');
    const contentFooter = null || document.getElementById('footer') 

    contentHeader.innerHTML = await Nav.render();
    await Nav.after_render();

    // content.innerHTML = Home.render();
    contentFooter.innerHTML = await Footer.render();
    await Footer.after_render();
     
    let request = Utils.parseRequestURL();
    let parseURL =   (request.resource ?  '/' + request.resource : '/') + (request.verb ? '/' + request.verb : '')
    let page  = routes[parseURL] ? routes[parseURL] : Error

    content.innerHTML = await page.render();
    await page.after_render();
}



// observar as mudanças na url 
window.addEventListener('hashchange', router);

// carregamento de pagina 
 window.addEventListener('load', router);
