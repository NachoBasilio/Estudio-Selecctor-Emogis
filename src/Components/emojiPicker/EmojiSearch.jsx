import React from 'react'

export default function EmojiSearch({onSearch}) {
  return (
    <input onChange={onSearch}></input>
  )
}
