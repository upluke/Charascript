import React from 'react'
import CollectionBox from './CollectionBox'
const CollectionContainer = ({ characters }) => {
  return (
    <>
      {characters.map((c) => (
        <CollectionBox key={c.nameId} />
      ))}
    </>
  )
}

export default CollectionContainer
