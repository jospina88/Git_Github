import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


function SpecialButton({text}){
  return(
    <button>{text}</button>
  )
}

function SpecialImage({image}){
  return(
    <img src={image} alt='imagen'></img>
  )
}

function SpecialText({text}){
  return(
    <p>{text}</p>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SpecialImage image={"https://i.ebayimg.com/images/g/Jr4AAOSwMB5nRUF-/s-l400.jpg"}></SpecialImage>
    <SpecialText text={"Mathew Staford"}></SpecialText>
    <SpecialButton text={"Click1"}></SpecialButton>
    <SpecialImage image={"https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/Patrick_Mahomes_%2851616333995%29.jpg/250px-Patrick_Mahomes_%2851616333995%29.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"}></SpecialImage>
    <SpecialText text={"Parick Mahomes"}></SpecialText>
    <SpecialButton text={"Click2"}></SpecialButton>
    <SpecialImage image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwbcSX09VJihzVv6buSu0gQp8BUXKB1Dt1hudKHfBrYQ&s=10"}></SpecialImage>
    <SpecialText text={"Josh Allen"}></SpecialText>
    <SpecialButton text={"Click3"}></SpecialButton>
  </StrictMode>
)
