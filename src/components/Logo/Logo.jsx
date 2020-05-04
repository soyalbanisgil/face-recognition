import React from 'react';
import Tilt from 'react-tilt';
import brain from './logo.png'
import './Logo.styles.css';

const Logo = () => {
    return (
        <div>
            <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 50, width: 150 }} >
                 <div className="Tilt-inner"><img src={brain} alt="logo"/> FaceRecognition</div>
            </Tilt>
        </div>
    )
}

export default Logo
