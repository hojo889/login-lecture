"use strict";

const id = document.querySelector("#id"),
     psw = document.querySelector('#psw'),
     loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login(){
    const req ={
      id: id.value,
      psw: psw.value,
    };//오브젝트 형태로 설정
    
    // fetch(경로, value);
    fetch("/login", {
        mathod: "POST",
        headers:{
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(req),
    });
}