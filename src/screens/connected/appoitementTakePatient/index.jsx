import React, { useState } from 'react'
import ButtonLarge from '../../../components/ButtonLarge'
import { apiService } from '../../../apiService'
import {useNavigate} from "react-router-dom"
import {useAuth} from "../../../context/auth"

export default function AppoitementTakePatient() {
  const [searchData, setSearchData] = useState({ // tester avec use Ref
    domain:"",
    postalCode:"",
})

async function handleSearchDoctor() {
    try {
        
    } catch (error) {
        
    }
}



  return (
    <div>
      <div>
        <h2>Trouvez un rendez-vous pres de chez vous</h2>
        <input placeholder='Spécialité' value={searchData.domain} onChange={(e) => setSearchData((prev) => ({...prev, domain: e.target.value}))} type='text'/>
        <input placeholder='Où' value={searchData.postalCode} onChange={(e) => setSearchData((prev) => ({...prev, postalCode: e.target.value}))} type='text'/>

        <button>Rechercher</button>

      </div>
    </div>
  )
}