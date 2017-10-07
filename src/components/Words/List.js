import React from 'react'

const List = (props) => {
  const { words } = props

  if (!words.length) return null

  const listItems = words.map(word => {
    return (
      <li key={word._id}>{word.name}</li>
    )
  })

  return (
    <ul>{listItems}</ul>
  )
}

export default List
