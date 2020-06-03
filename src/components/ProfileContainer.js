import React, { useState, useCallback } from "react";
import ProfileBox from "./ProfileBox";
import update from "immutability-helper";

const ProfileContainer = ({ profiles, setCurrentProfiles }) => {
  console.log("profilecontainer: ", profiles);

  const [cards, setCards] = useState([...profiles]);
  const [closeAll, setCloseAll] = useState(false);

  console.log("profileCard: ", cards);
  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = cards[dragIndex];
      setCards(
        update(cards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        })
      );
      setCurrentProfiles(
        update(cards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        })
      );
    },
    [cards, setCurrentProfiles]
  );
  const renderCard = (card, index) => {
    return (
      <ProfileBox
        key={card.id}
        index={index}
        id={card.id}
        profile={card.profile}
        moveCard={moveCard}
        order={card.profileId.substr(-1)}
        closeAll={closeAll}
        setCloseAll={setCloseAll}
      />
    );
  };

  return <>{cards.map((card, index) => renderCard(card, index))}</>;
};

export default ProfileContainer;
