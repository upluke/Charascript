import { sourceData } from './sourceData'

const getRegCollections = (collections) => {
  return collections.map((collection, collectionIndex) => {
    return {
      collectionId: `col-${collectionIndex}`,
      collectionName: collection.collectionName,
      characters: collection.characters.map((character, index) => {
        return {
          name: {
            nameId: `col-${collectionIndex}-name-${index}`,
            name: character.name,
            profileId: `col-${collectionIndex}-profile-${index}`,
          },
          profile: {
            profileId: `col-${collectionIndex}-profile-${index}`,
            profile: character.profile,
            nameId: `col-${collectionIndex}-name-${index}`,
          },
        }
      }),
    }
  })
}

const getCollections = (data) => {
  return data.map((collection) => {
    const characters = collection.characters.map((el) => {
      return el.profile.profileId
    })
    return {
      collectionId: collection.collectionId,
      collectionName: collection.collectionName,
      characters: characters,
    }
  })
}

const getNames = (data) => {
  let names = []
  data.forEach((collection) => {
    collection.characters.forEach((el) => {
      names.push(el.name)
    })
  })
  return names
}

const getProfiles = (data) => {
  let profiles = []
  data.forEach((collection) => {
    collection.characters.forEach((el) => {
      profiles.push(el.profile)
    })
  })
  return profiles
}

const regCollections = getRegCollections(sourceData)

const collections = getCollections(regCollections)
const names = getNames(regCollections)
const profiles = getProfiles(regCollections)

export default { collections, names, profiles }
