import React, { useState } from 'react'

function ClickablePicture(props) {
    const [isClickImage, setClickImage] = useState(false);
    const handleClickImage = () => {
        setClickImage(!isClickImage)
        console.log(isClickImage)
    }

  return (
    <div>
        <h3>Clickable Picture</h3>
        <img src={isClickImage ? props.imgClicked : props.img} onClick={handleClickImage} width={200}/>
    </div>
  )
}

export default ClickablePicture