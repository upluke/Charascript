import React from 'react'
import NameBox from './NameBox'

const NameContainer = ({ characters }) => {
  return (
    <>
      {characters.map((c) => (
        <NameBox key={c.nameId} name={c.name} />
      ))}
    </>
  )
}

export default NameContainer
