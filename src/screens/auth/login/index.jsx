import React, { useState } from 'react'
import ButtonLarge from '../../../components/ButtonLarge'
import { apiService } from '../../../apiService'
import {useNavigate} from "react-router-dom"
import {useAuth} from "../../../context/auth"

export default function Login() {
  const { isAuthenticated, login, logout } = useAuth();
  const [loginData, setLoginData] = useState({
    email:"",
    password:"",
})

let navigate = useNavigate()
console.log(loginData)

const handleLogin = async () => {
  try {
    const res = await apiService.login(loginData)
    if(res.status === 200) {
      console.log('bon code')
      localStorage.setItem('auth_token', res.data.token)
      login(res.data.token)
      navigate("/AppoitementPatient")
    }
  } catch (error) {
    console.log('err',error)
  }
}
  return (
    <div>
      <div>
      <h2>Prenez rendez-vous avec un practicien de santé</h2>
        <ul>
          <li>Prenez rendez-vous un practicien</li>
          <li>Gérer vos rendez-vous médecins</li>
        </ul>
      </div>
      <div>
        <h2>Connexion</h2>
        <input placeholder='email' value={loginData.email} onChange={(e) => setLoginData((prev) => ({...prev, email: e.target.value}))} type='email'/>
        <input placeholder='password' value={loginData.password} onChange={(e) => setLoginData((prev) => ({...prev, password: e.target.value}))} type='password'/>
        <ButtonLarge onClickFunction={handleLogin} />
        <a href='/register'>Pas de compte ? Inscrivez-vous</a>
      </div>
    </div>
  )
}
