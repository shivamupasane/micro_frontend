import faker from "faker";
const mount = (el) => {
    let cart = `<div>you have ${faker.random.number()} items in the cart</div>`;
    el.innerHTML = cart;
}
if(process.env.NODE_ENV === 'development'){
    const el = document.querySelector("#dev-cart" );
    if(el){
        mount(el);
    }
    
}
export {mount};