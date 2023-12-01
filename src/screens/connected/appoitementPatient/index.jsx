import React, { useEffect, useState } from 'react'
import { apiService } from '../../../apiService'
import { useNavigate } from 'react-router-dom'

export default function AppoitementPatient() {
  const [incomingAppoitementData, setIncomingAppoitementData] = useState({})
  const [appoitementHistoryPatient, setAppoitementHistoryPatient] = useState({}) // voir pour utiliser use ref

  let navigate = useNavigate()


  async function handleGetAllAppoitementPatient() {
    const resApi = await apiService.getAllAppoitementPatient()
    setIncomingAppoitementData(resApi.data.result)
  }

  async function handleGetAllHistoryAppoitementPatient() {
    const resApi = await apiService.getAllHistoryAppoitementPatient()
    setAppoitementHistoryPatient(resApi.data.result)
  }

  useEffect(() => {
    handleGetAllAppoitementPatient()
    handleGetAllHistoryAppoitementPatient()
  }, [])

  return (
    <div>
      <h2>Appoitement Patient</h2>
      <div>
        <h2>Historique rendez-vous</h2>
        {appoitementHistoryPatient.length === 0 ? <h2>Vous n'avez pas eu de rendez-vous</h2> : "test" } 
      </div>

      <div>
        {incomingAppoitementData.length === 0 ? <h2>Vous n'avez pas de rendez-vous à venir. Prenez un rendez-vous ici <button onClick={() => navigate("/SearchAppoitementPatient") }> Prendre rendez-vous</button> </h2> : "test" } 
      </div> 
    </div>
  )
}
