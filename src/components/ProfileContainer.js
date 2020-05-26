import React, { useState, useCallback } from 'react'
import ProfileBox from './ProfileBox'
import update from 'immutability-helper'
import { Card } from '@material-ui/core'
const ProfileContainer = ({ profiles }) => {
  console.log(profiles)

  const [cards, setCards] = useState([...profiles])

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = cards[dragIndex]
      setCards(
        update(cards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        })
      )
    },
    [cards]
  )
  const renderCard = (card, index) => {
    return (
      <ProfileBox
        key={card.id}
        index={index}
        id={card.id}
        profile={card.profile}
        moveCard={moveCard}
        order={card.profileId.substr(-1)}
      />
    )
  }

  return <>{cards.map((card, index) => renderCard(card, index))}</>
}

export default ProfileContainer
