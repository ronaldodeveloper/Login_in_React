import React,{ useEffect, useState } from 'react'
import './login.css'

function Form(){
const [addUser, setAddUser]= useState()
const [addPassword, setAddPassword]= useState()

const iconUser={
    backgroundImage: 'url(assets/user.svg)',
    backgroundPosition: '3px 4px',
    backgroundSize: '14px 20px',
    backgroundRepeat: 'no-repeat',
}  
const iconPassword={
    backgroundImage: 'url(assets/password.svg)',
    backgroundPosition: '3px 4px',
    backgroundSize: '14px 20px',
    backgroundRepeat: 'no-repeat'
}

const sendData= async (User) => {
    try{
        const url= "http://localhost:5000/user"
        const setHeaders =  
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=utf-8'},
            body: JSON.stringify(User)
        }

        const response= await fetch(url, setHeaders)
        const data = await response.json()
        console.log(
            JSON.parse(
                JSON.stringify(
                    Object.assign(data)
        )))
    }catch(error){
        console.log(`API not connect!`)
        console.log(error)
      }   
    }

const valueInput = (event)=>{
    event.preventDefault();
    const getUserData={
        'user': addUser,
        'password': addPassword
    }
    
     sendData(getUserData)
}

return(
    <form action="index.html" className="formContainer" onSubmit={valueInput}>
        <h2>User</h2>
        <fieldset className="formBox">
            <input
            value={addUser}
            style={iconUser}
            className="user"
            type="text" 
            required
            placeholder="user:"
            onChange={e=>setAddUser(e.target.value)}/>    

            <input 
            value={addPassword}
            style={iconPassword}
            className="password"
            type="password"
            required
            placeholder="password:"
            onChange={e=>setAddPassword(e.target.value)}/>

            <input 
            className="btnLogin"
            type="submit" 
            value="LOGIN" />
        </fieldset>
    </form>
 )
}

function SocialMedia(){  
const iconFacebook= {
    backgroundImage: 'url(assets/facebook.svg)',
    backgroundRepeat:'no-repeat',
    backgroundPosition: 'center',
    backgroundSize:'contain'
}
const iconInstagram= {
    backgroundImage: 'url(assets/instagram.svg)',
    backgroundRepeat:'no-repeat',
    backgroundPosition: 'center',
    backgroundSize:'contain'
}
const iconYoutube= {
    backgroundImage: 'url(assets/youtube.svg)',
    backgroundRepeat:'no-repeat',
    backgroundPosition: 'center',
    backgroundSize:'contain'
}
return (
   <nav className="socialMedia">
    <a link=""><div style={iconFacebook} className="iconPatter"></div></a>
    <a link=""><div style={iconInstagram} className="iconPatter"></div></a>
    <a link=""><div style={iconYoutube} className="iconPatter"></div></a>
   </nav>
 )
}

function Login(){
 const bgLogin= {
    backgroundImage: 'url(assets/bg.jpg)',
    backgroundRepeat:'no-repeat',
    backgroundPosition: 'center',
    backgroundSize:'180% 100%' 
 }
return(
    <main className="mainContainer">
        <section className="infoLogin" style={bgLogin}>
        <h1>Access Ccount</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi similique recusandae itaque sapiente odio animi ipsam delectus cum magnam, totam cupiditate eligendi aperiam ipsum! Autem quibusdam incidunt minima voluptatem
            </p>
        </section>
        <section className="secForm">
          <Form />
           <a href="https://www.youtube.com/watch?v=j0wCewl87ec" className="linkCcount">create ccount</a>
          <SocialMedia />  
        </section>
    </main>
    )
}
export default Login;
