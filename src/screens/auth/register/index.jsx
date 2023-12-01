import React, { useState } from 'react'
import ButtonLarge from '../../../components/ButtonLarge'
import { apiService } from '../../../apiService'

export default function Register() {
    const [registerData, setRegisterData] = useState({
        firstname:"",
        name:"",
        phone:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const handlePostUser = async () => {
        console.log('test')
        console.log(registerData)
        const res = await apiService.postUser(registerData)
        console.log("grostest",res.data)
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
        <input placeholder='email' value={registerData.email} onChange={(e) => setRegisterData((prev) => ({...prev, email: e.target.value }))} type='email'/>
        <input placeholder='password' value={registerData.password} onChange={(e) => setRegisterData((prev) => ({...prev, password: e.target.value }))} type='password'/>
        <input placeholder='confirmpassword' value={registerData.confirmPassword} onChange={(e) => setRegisterData((prev) => ({...prev, confirmPassword: e.target.value }))} type='password'/>
        <input placeholder='name' value={registerData.name} onChange={(e) => setRegisterData((prev) => ({...prev, name: e.target.value }))} type='text'/>
        <input placeholder='firstname' value={registerData.firstname} onChange={(e) => setRegisterData((prev) => ({...prev, firstname: e.target.value }))} type='text'/>
        <input placeholder='phone' value={registerData.phone} onChange={(e) => setRegisterData((prev) => ({...prev, phone: e.target.value }))} type='text'/>
        <ButtonLarge onClickFunction={handlePostUser}/>
        <a href='/login'>Déjà un compte ? Connectez-vous</a>
      </div>
    </div>
  )
}
