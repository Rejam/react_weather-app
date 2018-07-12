import React from 'react'

const City = ({ data }) => {
  const { name: city } = data.city
  const { temp, pressure, humidity } = data.list[0].main
  return <tr>
    <td>{ city }</td>
    <td>{ temp }</td>
    <td>{ pressure }</td>
    <td>{ humidity }</td>
  </tr>
}

export default City