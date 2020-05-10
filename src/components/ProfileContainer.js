import React from 'react'
import ProfileBox from './ProfileBox'
const ProfileContainer = ({ profiles }) => {
  return (
    <>
      {profiles.map((p) => (
        <ProfileBox key={p.profileId} profile={p.profile} />
      ))}
    </>
  )
}

export default ProfileContainer
