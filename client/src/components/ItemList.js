import React from 'react'
import styled from 'styled-components'

export const ItemListWrapper = styled.ul`
  height: auto;
  min-height: 100vh;
  width: 100vw;
  max-width: 600px;
  border: 1px solid #252525;
  list-style: none;
  display: flex;
  flex-direction: column;

  .oneItem {
    display: flex;
    align-items: center;
    &:nth-child(even) {
      background-color: lavender;
    }
  }

  .oneItem-details {
    flex: 1 1 70%;
    display: flex;
    list-style: none;
    flex-direction: column;
  }
`

const dummy = {
  "bitterling": {
    "id": 1,
    "file-name": "bitterling",
    "name": {
        "name-USen": "bitterling",
        "name-EUen": "bitterling",
        "name-EUde": "Bitterling",
        "name-EUes": "amarguillo",
        "name-USes": "amarguillo",
        "name-EUfr": "bouvière",
        "name-USfr": "bouvière",
        "name-EUit": "rodeo",
        "name-EUnl": "bittervoorn",
        "name-CNzh": "红目鲫",
        "name-TWzh": "紅目鯽",
        "name-JPja": "タナゴ",
        "name-KRko": "납줄개",
        "name-EUru": "горчак"
    },
    "availability": {
        "month-northern": "11-3",
        "month-southern": "5-9",
        "time": "",
        "isAllDay": true,
        "isAllYear": false,
        "location": "River",
        "rarity": "Common",
        "month-array-northern": [11, 12, 1, 2, 3],
        "month-array-southern": [5, 6, 7, 8, 9],
        "time-array": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
    },
    "shadow": "Smallest (1)",
    "price": 900,
    "price-cj": 1350,
    "catch-phrase": "I caught a bitterling! It's mad at me, but only a little.",
    "museum-phrase": "Bitterlings hide their eggs inside large bivalves—like clams—where the young can stay safe until grown. The bitterling isn't being sneaky. No, their young help keep the bivalve healthy by eating invading parasites! It's a wonderful bit of evolutionary deal making, don't you think? Each one keeping the other safe... Though eating parasites does not sound like a happy childhood... Is that why the fish is so bitter?",
    "image_uri": "https://acnhapi.com/v1/images/fish/1",
    "icon_uri": "https://acnhapi.com/v1/icons/fish/1"
},
}

export default function ItemList() {
  return (
    <ItemListWrapper>
      <li className="oneItem">
        <div>
          <img src={dummy.bitterling.icon_uri} alt="Bitterling"/>
        </div>
        <ul className="oneItem-details">
          <li>Name: {dummy.bitterling.name['name-USen']} ({dummy.bitterling.name['name-KRko']})</li>
          <li>Rarity: {dummy.bitterling.availability.rarity}</li>
          <li>Price: {dummy.bitterling.price}</li>
          <li>Location: {dummy.bitterling.availability.location}</li>
        </ul>
      </li>
    </ItemListWrapper>
  )
}
