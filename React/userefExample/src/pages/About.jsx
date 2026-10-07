import React, { useRef } from 'react'

const About = () => {

    let vdo = useRef(null)

    let playVdo =()=>{
        console.log(vdo.current)
        vdo.current.play()
    }
    
    let pauseVdo = ()=>{  
        console.log(vdo.current)
        vdo.current.pause()
    }
  return (
    <div className='about'>

        <div className="left">
             <h1>Video play and pause</h1>
        </div>

        <div className="right">
             
             <video src="https://www.w3schools.com/html/mov_bbb.mp4" ref={vdo}></video>

             <div className="buttons">
                 <button onClick={playVdo}>play</button>
                 <button onClick={pauseVdo}>pause</button>
             </div>
        </div>

    </div>
  )
}

export default About