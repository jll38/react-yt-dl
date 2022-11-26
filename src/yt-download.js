import React from 'react';
import ReactDOM from 'react-dom';

export default function handleSubmit(urlInput){
    if(isValidURL(urlInput)){
        alert("Please enter a valid Youtube URL!");
    }
}

//Checks if the URL input is valid
function isValidURL(s){
    console.log(`Validating URL: ${s}`)
    try{
        new URL(s);
        console.log('Valid!');
        return true;
    } catch(err){
        console.log('Nah fam')
        return false;
    }
}