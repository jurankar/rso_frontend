import {useEffect, useState} from "react";

const ApiResponseText = ({ text, api_link }) => {
  const [response, setResponse] = useState('no_data')

  const fetchApiData = async () => {
    const res = await fetch(api_link)
    const data = await res.text()

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
        <p>{text} {response}</p>
      </div>
  )
}


export default ApiResponseText
