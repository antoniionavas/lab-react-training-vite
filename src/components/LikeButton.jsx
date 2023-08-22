import React, { useState } from 'react'

function LikeButton() {
    const [likes, setLikes] = useState(0); //creamos el estado inicializado al valor 0
    const handleLikes = () => {
        setLikes (likes + 1)
    }

  return (
    <div>
        <button onClick={handleLikes}> {likes} {likes === 1 ? 'Like' : 'Likes'}</button>
    </div>
  )
}

export default LikeButton