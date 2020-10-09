import React from 'react'
import '../css/Chinese.css'
import ReactPlayer from 'react-player/lazy'
 
const Chinese = () => {
    const chineseUrls = [
        "https://www.youtube.com/watch?v=OhOoGTuGfHE",
        "https://www.youtube.com/watch?v=1b6QWJjWAAg",
        "https://www.youtube.com/watch?v=OhOoGTuGfHE",
        "https://www.youtube.com/watch?v=1b6QWJjWAAg"
    ]
    return (
        <div>
            {chineseUrls.map((url) => (
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

export default Chinese
