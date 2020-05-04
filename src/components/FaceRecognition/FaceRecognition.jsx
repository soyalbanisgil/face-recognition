import React from 'react';
import './FaceRecognition.styles.css';

const FaceRecognition = ({ imgURL, box}) => {
    return (
        <div className="center mt-4">
            <div className="wrap">
            <img id="inputimage" src={imgURL} alt="" width='500px' height='auto'/>
            <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    )
}

export default FaceRecognition;
