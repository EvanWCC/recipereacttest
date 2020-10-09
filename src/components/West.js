import React from 'react'
import '../css/West.css'
import ReactPlayer from 'react-player/lazy'
const West = () => {
    const westUrls = [
        "https://www.youtube.com/watch?v=iZc5ZhqMfAc",
        "https://www.youtube.com/watch?v=Lw7EixBGu60",
        "https://www.youtube.com/watch?v=OhOoGTuGfHE",
        "https://www.youtube.com/watch?v=1b6QWJjWAAg"
    ]
    return (
        <div>
            {westUrls.map((url) => (
                <div className='player-wrapper'>
                    <ReactPlayer
                    className='react-player'
                    url={url}
                    width='100%'
                    height='100%'
                    />
              </div>
            ))}
        </div>
    )
}

export default West
