import React from 'react'

export default function EmojiBoton({emoji, onClick}) {

    function handleClick(e){
        e.preventDefault()
        onClick(emoji)
    }

  return (
    <button onClick={handleClick}>{emoji.symbol}</button>
  )
}
