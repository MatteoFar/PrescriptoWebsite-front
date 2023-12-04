import React, { useState, useEffect } from 'react'
import { apiService } from '../../../apiService'
import {useNavigate} from "react-router-dom"
import axios from 'axios';

export default function AppoitementTakePatient() {
  const [searchData, setSearchData] = useState({ // tester avec use Ref
    domain:"",
    postalCode:"",
})
const [villeInfo, setVilleInfo] = useState([]);
const [search, setSearch] = useState("")

let navigate = useNavigate()

async function handleSearchDoctor(dataSearch, town) {
    try {
      const resApi = await apiService.getDoctorByTown(dataSearch,town)
      console.log('resApi', resApi.data)
    } catch (error) {
        console.error(error)
    }
}

const fetchTownInfo = async () => {
  try {
    const response = await axios.get(`http://api.geonames.org/postalCodeSearchJSON?postalcode=${searchData.postalCode}&country=FR&maxRows=3&username=prescripto`);
    const data = response.data.postalCodes;
    console.log("data",response.data.postalCodes)
    setVilleInfo(data);
  } catch (error) {
    console.error('Erreur lors de la recherche de la ville:', error);
  }
};

function handleNavigateToSearch() {
  const { domain, postalCode } = searchData
  const t = postalCode.split(" ")
  navigate(`/search/${domain}/${t[0]}/${t[1]}`)
}

useEffect(() => {
  setTimeout((e) => {
    if(searchData.postalCode !== "") {
      fetchTownInfo()
    }

    if(searchData.postalCode === "") {
      setVilleInfo([])
    }
  }, 1000)
}, [searchData.postalCode])


console.log(search)
  return (
    <div>
      <div>
        <h2>Trouvez un rendez-vous pres de chez vous</h2>
        <input placeholder='Spécialité' value={searchData.domain} onChange={(e) => setSearchData((prev) => ({...prev, domain: e.target.value}))} type='text'/>
        <input placeholder='Où' value={searchData.postalCode} onChange={(e) => setSearchData((prev) => ({...prev, postalCode: e.target.value}))} type='text'/>
        <p>{searchData.postal !== "" ? villeInfo.map((e, index) => <p index={index} onClick={() => setSearchData((prev) => ({...prev, postalCode:`${searchData.postalCode} ${e.placeName}`}))} >{e.placeName}</p>) : ""}</p>
        <button onClick={() => handleNavigateToSearch()}>Rechercher</button>

      </div>
    </div>
  )
}