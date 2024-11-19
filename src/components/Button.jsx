import React from 'react'
import { useState } from 'react'

// export default class Button extends Component {
//   render() {
//     const [clickState, setClickState] = useState(true);
//     const handleClick = () => {
//         if (clickState) {
//             setClickState(false)
//             return true
//         } else {
//             setClickState(true)
//             return false
//         }
//     } 
//     /*
//     So... apparently you can't call hooks inside of a class component so I have to figure that out
//     I'm trying to make a state for the button to be disabled after you click it
//     */
//     return (
//       <button>{this.props.buttonText}</button>
//     )
//   }
// }

export default function Button(props) {
  const {buttonText = "Button"} = props

  const [clickState, setClickState] = useState(true);
    const handleClick = () => {
        if (clickState) {
            setClickState(false)
            return true
        } else {
            setClickState(true)
            return false
        }
    } 
  return (
    <button disabled={handleClick}>{buttonText}</button>
  )
}

