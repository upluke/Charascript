import React from 'react'
import ProfileBox from './ProfileBox'
const ProfileContainer = ({ profiles }) => {
  return (
    <>
      {profiles.map((p, index) => (
        <ProfileBox key={p.profileId} profile={p.profile} index={index} />
      ))}
    </>
  )
}

export default ProfileContainer
