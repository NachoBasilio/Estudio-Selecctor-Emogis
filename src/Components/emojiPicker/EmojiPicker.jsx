import { forwardRef, useState, useRef, useEffect } from 'react'
import EmojiButon from './EmojiBoton.jsx'
import data from './data.js'
import EmojiSearch from './EmojiSearch.jsx'

function EmojiPickerContainer({emojiList, setEmojiList, inputRef}){


  function handleSearch(e){
    e.preventDefault()
    const q = e.target.value.toLowerCase()
    if(q){
      const search = emojiList.filter((emoji)=>{
        return (emoji.keywords.toLowerCase().includes(q) || emoji.name.toLowerCase().includes(q))
      })

      setEmojiList(search)      
    }else{
      setEmojiList(data)
    }
  }

  function handleOnClickEmoji(emoji){
    const cursorPosition = inputRef.current.selectionStart
    const text = inputRef.current.value
    const newText = text.slice(0, cursorPosition) + emoji.symbol + text.slice(cursorPosition)
    inputRef.current.value = newText

    inputRef.current.selectionStart = cursorPosition + emoji.symbol.length
    inputRef.current.selectionEnd = cursorPosition + emoji.symbol.length
    inputRef.current.focus()  
  }

  return (
  <div >
    <EmojiSearch onSearch={handleSearch}type="text" />
    <div  >
      {emojiList.map((emoji, index) => {
        return (
          <div key={index}>
            <EmojiButon emoji={emoji} onClick={handleOnClickEmoji}></EmojiButon>
          </div>
        )
      })}
    </div>
  </div>
  )
}

export function EmojiPicker(props, inputRef) {
  const [isOpen , setIsOpen] = useState(false)
  const [emojiList, setEmojiList] = useState(data)



  const containerRef = useRef(null)

  useEffect(()=>{
    window.addEventListener('click', e=>{
      if(!containerRef.current.contains(e.target)){
        setIsOpen(false)
        setEmojiList(data)
      }
    })
  },[])

  function handleClickOpen(e){
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <div ref={containerRef}>
    <button onClick={(e)=>{
     handleClickOpen(e)
    }}>😀</button>
    {isOpen && <EmojiPickerContainer inputRef={inputRef} emojiList={emojiList} setEmojiList={setEmojiList}></EmojiPickerContainer>}
    </div>
  )
}


export default forwardRef(EmojiPicker) 
