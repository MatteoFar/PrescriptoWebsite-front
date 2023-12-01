import { Routes, Route, BrowserRouter } from "react-router-dom"
import Login from "../../screens/auth/login"
import Register from "../../screens/auth/register"

export default function LoggedOut() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

