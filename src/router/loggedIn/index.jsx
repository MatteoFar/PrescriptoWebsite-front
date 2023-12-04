import { Routes, Route, BrowserRouter } from "react-router-dom"
import AppoitementPatient from "../../screens/connected/appoitementPatient"
import AppoitementTakePatient from "../../screens/connected/appoitementTakePatient"
import SearchResultPatient from "../../screens/connected/searchResultPatient"

export default function LoggedIn() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/AppoitementPatient" element={<AppoitementPatient/>}></Route>
            <Route path="/SearchAppoitementPatient" element={<AppoitementTakePatient/>}></Route>
            <Route path="/search/:type/:postal_code/:town" element={<SearchResultPatient/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

