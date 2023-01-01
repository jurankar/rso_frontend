import {useEffect, useState} from "react";
import React, { Component } from 'react';




const ApiResponseJson = ({ text, api_link }) => {
  const [response, setResponse] = useState('no_data')

  const fetchApiData = async () => {
    const res = await fetch(api_link)
    const data = await res.json()

    return data
  }

  useEffect(() => {
    const getResponse = async () => {
      const responseFromServer = await fetchApiData()
      setResponse(responseFromServer)
    }

    getResponse()
  }, [])


  return (
      <div className='api_div'>
        <p>{text}</p>
        <p>{response}</p>
      </div>
  )
}


export default ApiResponseJson
