import { Routes, Route, BrowserRouter } from "react-router-dom"
import AppoitementPatient from "../../screens/connected/appoitementPatient"
import AppoitementTakePatient from "../../screens/connected/appoitementTakePatient"

export default function LoggedIn() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/AppoitementPatient" element={<AppoitementPatient/>}></Route>
            <Route path="/SearchAppoitementPatient" element={<AppoitementTakePatient/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

