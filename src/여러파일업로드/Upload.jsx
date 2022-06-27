import React from 'react'
import { useState } from 'react'

function Upload() {

    const [selectedImages, setSelectedImage] = useState([]);

    const imageHandleChange = (e) => {
        // console.log(e.target.files)
        if(e.target.files) {
            const fileArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
            console.log(fileArray)

            setSelectedImage((prevImages) => prevImages.concat(fileArray))
            Array.from(e.target.files).map((file) => 
                URL.revokeObjectURL(file)
            )
        }
    }

    const renderPhotos = (source) => {
        return source.map((photo) => {
            return <img src={photo} key={photo} />
        })
    }

    return (
        <div>
            <div>
                React Multiple Images Preview
            </div>
            <div>
                <label htmlFor="file"></label>
                <input type="file" id="file" multiple onChange={imageHandleChange}/>
            </div>
            <article>
                {renderPhotos(selectedImages)}
            </article>
        </div>
    )
}

export default Upload
