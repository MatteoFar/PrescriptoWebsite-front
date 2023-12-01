import { Routes, Route, BrowserRouter } from "react-router-dom"
import AppoitementPatient from "../../screens/connected/appoitementPatient"

export default function LoggedIn() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/AppoitementPatient" element={<AppoitementPatient/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

