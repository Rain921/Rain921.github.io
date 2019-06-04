import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

ReactDOM.render(<App />, document.getElementById('root'));



// асинхроный  вариант 

/*const getResource = async (url) => {
const ress = await fetch(url);
if (!ress.ok) {
    throw new Error(`Could not fetch ${url}`+
    `, received ${res.status}`)
}

    return await ress.json();

};
getResource('https://swapi.co/api/people/1/')
.then((body) => {
    console.log(body); 
}).catch((err) => {
    console.error('could not fetch', err);
    
});*/

/*
fetch('https://swapi.co/api/people/1/')
.then((ress)=>{
return ress.json();// получаем через json
})
.then((bodyy)=>{
    console.log(bodyy); //выводим через зен
})
*/