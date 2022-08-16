import React from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { publicRequest } from '../requestMethode'
const ActivationAccount = () => {
    const {validationCode} = useParams()
    publicRequest.post(`/verify/verifyaccount/${validationCode}`)
  return (
    <div>
        ActivationPage

    </div>
  )
}

export default ActivationAccount