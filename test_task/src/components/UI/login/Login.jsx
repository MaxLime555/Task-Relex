import React, { useState } from "react";
import MyButton from "../button/MyButton";
import MyInput from "../input/MyInput";
import cl from "./Login.module.css";

const Login = ({vis, setVis}) => {
    const rootClasses = [cl.myLogin]
    const [login, setLogin] = useState({log: ''})
    const [password, setPassword] = useState({pass: ''})

    if(vis){
        rootClasses.push(cl.active);
    }

    const enterWeb = (e) => {
        e.preventDefault()
        if((String(login.log) == "Administrator") && (password.pass == '12345')){
            setVis(false)
        }
      }

    return(
        <div className={rootClasses.join(' ')}>
            <form className={cl.myLoginContent}>
                <MyInput 
                    value={login.log}
                    onChange={e => setLogin({...login, log: e.target.value})}
                    type="text"  
                    placeholder="Введите логин"
                />
                <MyInput 
                    value={password.pass}
                    onChange={e => setPassword({...password, pass: e.target.value})}
                    type="text" 
                    placeholder="Введите пароль"
                />
                <MyButton onClick={enterWeb}>Войти</MyButton>
            </form>
        </div>
    )
}

export default Login;