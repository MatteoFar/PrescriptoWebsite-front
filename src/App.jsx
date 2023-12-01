import { Routes, Route, BrowserRouter } from "react-router-dom"
import './App.css'
import Router from "./router"
import Navbar from "./components/Navbar"
import { AuthProvider } from "./context/auth"
import { useEffect } from "react"
import { verifyToken } from "./utils/verifyToken"

function App() {

  return (
      <AuthProvider>
        {/* // navbar */}
        <Router/>
      </AuthProvider>
  )
}

export default App;
