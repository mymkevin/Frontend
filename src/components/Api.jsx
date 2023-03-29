import React, {useState, useEffect} from 'react'
const API = "https://backend-futbol.onrender.com/api/jugadores/messi"

const Api = () => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const getdataAPI = async () =>{
try {
  const response = await fetch(API)
  const data = await response.json()
  setData(data)
  console.log(data)
  setIsLoaded(true)
} catch (error) {
  console.log(error)
}
  }
useEffect( () =>{
  getdataAPI()
}, [])


  return (
    <>
    {
      isLoaded ? (
        data.map((informacion)=>{
          return (
          <div key={informacion.id}>
            <h3>{informacion.name}</h3>
          </div>
          )
})
      ) : (<h1>Cargando informacion</h1>
      )
    }
    
    </>
  )
}

export default Api