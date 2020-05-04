import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit}) => {
    return (
        <section className="container text-center text-white mt-4 search-box">
            <p>This brain will detect faces in your pictures.</p>
            <form className="form-group my-2 my-lg-0 find-face w-100" onSubmit={onButtonSubmit}>
        <input onChange={onInputChange} className="form-control" type="search" placeholder="Detect Face" />
        </form>
        </section>
    )
}

export default ImageLinkForm;