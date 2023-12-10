import { solicitarUsuario, solicitudHora } from "./apiScript.js";
import { generarPersona } from "./person.js";
import { generarTiempo } from "./time.js";

function generarHTML(personas,hora) {
    
    const divcontainer = document.querySelector('.container')

    divcontainer.innerHTML = '';

    let persondiv = document.createElement('div');
    persondiv.classList.add('person');

    let img =document.createElement('img')
    let name = document.createElement('p');
    let mail = document.createElement('p');
    let phone = document.createElement('p');
    let location = document.createElement('p');
    let time = document.createElement('p');

    img.src=`${personas.img}`
    name.innerHTML = `<strong>Name: </strong>${personas.name}`
    mail.innerHTML = `<strong>Mail: </strong>${personas.mail}`
    phone.innerHTML = `<strong>Phone: </strong>${personas.phone}`
    location.innerHTML = `<strong>Location: </strong>${personas.location}`
    time.innerHTML = `<strong>Time: </strong>${hora.hour}:${hora.minute}:${hora.second}`

    persondiv.appendChild(img);
    persondiv.appendChild(name)
    persondiv.appendChild(mail)
    persondiv.appendChild(phone)
    persondiv.appendChild(location)
    persondiv.appendChild(time)
    console.log(persondiv);
    divcontainer.appendChild(persondiv);
};

function generarHTMLVacio(){
    const divcontainer = document.querySelector('.container')

    divcontainer.innerHTML = '';

    let persondiv = document.createElement('div');
    persondiv.classList.add('person');

    let img=document.createElement('img')
    let name = document.createElement('p');
    let mail = document.createElement('p');
    let phone = document.createElement('p');
    let location = document.createElement('p');
    let time = document.createElement('p');

    img.src=("./user_nt_found.jpg")
    name.innerHTML = `<strong>Name: </strong>`
    mail.innerHTML = `<strong>Mail: </strong>`
    phone.innerHTML = `<strong>Phone: </strong>`
    location.innerHTML = `<strong>Location: </strong>`
    time.innerHTML = `<strong>Time: </strong>`

    persondiv.appendChild(img);
    persondiv.appendChild(name)
    persondiv.appendChild(mail)
    persondiv.appendChild(phone)
    persondiv.appendChild(location)
    persondiv.appendChild(time)
    console.log(persondiv);
    divcontainer.appendChild(persondiv);
}

let body = document.querySelector('body');

let divboton=document.createElement('div');
divboton.classList.add('divboton');
let boton = document.createElement('button');
divboton.appendChild(boton);
boton.textContent = 'Generar Usuario';
body.appendChild(divboton);


boton.addEventListener('click', async function () {
    const person = await solicitarUsuario();
    const hora = await solicitudHora();
    const timedata = await generarTiempo(hora);
    const persondata = await generarPersona(person);
    generarHTML(persondata,timedata);
})

const person = await solicitarUsuario();
const persondata = await generarPersona(person);
const hora = await solicitudHora();
const timedata = await generarTiempo(hora);
generarHTMLVacio();

//LE DEJO ESTOS CODIGO PARA QUE PUEDA VER LOS DATOS EN LA CONSOLA
console.log(persondata);
console.log(timedata);
console.log(body);