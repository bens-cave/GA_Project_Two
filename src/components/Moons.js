import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Moons = ({ planet }) => {

  const [moons, setMoons] = useState([])
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    const getMoons = async () => {
      try {
        const { data } = await axios.get(`/rest/bodies?filter[]=aroundPlanet,eq,${planet.id}`)
        console.log(data.bodies)
        setMoons(data.bodies)
      } catch (err) {
        console.log(err)
        setErrors(true)
      }
    }
    getMoons()
  }, [planet])

  return (
    <div className='body-list'>
      {
        !errors
          ?
          moons.map(moon => {
            const { id, englishName, discoveredBy, discoveryDate, avgTemp, massValue, gravity, meanRadius } = moon
            return (
              <div className='body-list-item' key={id}>
                <h2>{englishName}</h2>
                <div>
                  <div className='record'>
                    <p className='label'>🕵️ Discovered by: </p>
                    <p className='data'>{discoveredBy}</p>
                  </div>
                  <div className='record'>
                    <p className='label'>📅 Discovered: </p>
                    <p className='data'>{discoveryDate}</p>
                  </div>
                  <div className='record'>
                    <p className='label'>🌡 Average Temperature: </p>
                    <p className='data'>{avgTemp} in Kelvin</p>
                  </div>
                  <div className='record'>
                    <p className='label'>🏋️ Mass: </p>
                    <p className='data'>{massValue} in 10^24 kg</p>
                  </div>
                  <div className='record'>
                    <p className='label'>🪶 Surface gravity: </p>
                    <p className='data'>{gravity} in m.s^-2</p>
                  </div>
                  <div className='record'>
                    <p className='label'>📏 Radius: </p>
                    <p className='data'>{meanRadius} in km</p>
                  </div>
                </div>
              </div>
            )
          })
          :
          <div>This planet has no moons 😥</div>
      }
    </div>
  )
}

export default Moons