import React, { useState, useEffect } from 'react'
import LoggedOut from "./loggedOut"
import Navbar from "../components/Navbar"
import LoggedIn from './loggedIn';
import { useAuth } from '../context/auth';


export default function Router() {
  const { isAuthenticated } = useAuth();

  const [token, setToken] = useState("")

  function getToken() {
    let token = localStorage.getItem("auth_token")
    setToken(token)
  }

  useEffect(() => {
    getToken()
    console.log('GROSTEST')
  }, [isAuthenticated])
  
  return (
    <>
    <Navbar/>
    {!token ? <LoggedOut/>  : <LoggedIn/> }
    </>
  )
}

