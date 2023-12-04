import React, { useState, useEffect } from 'react'
import { apiService } from '../../../apiService'
import {useNavigate, useParams} from "react-router-dom"
import axios from 'axios';

export default function SearchResultPatient() {
const [villeInfo, setVilleInfo] = useState([]);
const [search, setSearch] = useState("")

const { type, postal_code, town } = useParams()

async function handleSearchDoctor() {
    try {
        const resApi = await apiService.getDoctorByTown(type, postal_code ,town)
        console.log('resApi', resApi.data)
    } catch (error) {
        console.error(error)
    }
}


useEffect(() => {
    handleSearchDoctor()
}, [])


console.log(search)
  return (
    <div>
      <div>
        <h2>Trouvez un rendez-vous pres de chez vous</h2>
      </div>
    </div>
  )
}