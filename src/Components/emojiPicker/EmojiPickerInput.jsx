import { useRef } from "react"
import EmojiPicker from "./EmojiPicker"



export default function EmojiPickerinput() {
  const ref = useRef(null) 

  return (
    <>
      <input ref={ref} type="text" placeholder="Wenas" />
      <EmojiPicker ref={ref}></EmojiPicker>
    </>

  )
}
