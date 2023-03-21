import React from 'react'
import { Link } from 'react-router-dom'
import { tutorials, fixCamera } from '../../utils/data'

import './Home.css'

export default function Home() {

    return (
        <div className='home-container'>
            <div className='home-header'>
                <h1 className='home-heading'>Smart Yoga Instructor</h1>
                <Link to='/about'>
                    <button 
                        className="btn btn-secondary" 
                        id="about-btn"
                    >
                        About
                    </button>
                </Link>
            </div>

            <h2 className="description">A Yoga AI Trainer made by</h2>
            <h2 className="description">Mudit Gupta & Prathamesh Kodgire</h2>
           
            <div className="home-main">
            <div className="tutorials-container">
            <h1 className="tutorials-heading">Basic Tutorials</h1>
            <div className="tutorials-content-container">
                {tutorials.map((tutorial) => (
                    <p className="tutorials-content">{tutorial}</p>
                ))}
            </div>
            <h1 className="tutorials-heading">Camera Not Working?</h1>
            <div className="tutorials-content-container">
                {fixCamera.map((points) => (
                    <p className="tutorials-content">{points}</p>
                ))}
            </div>
            
        </div>
                <div className="btn-section">
                    
                    <Link to='/start'>
                        <button
                            className="btn start-btn"
                        >Let's Start</button>
                    </Link>
                    

                </div>
            </div>
        </div>
    )
}
