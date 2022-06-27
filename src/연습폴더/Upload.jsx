import React from 'react'
import { useState } from 'react'

function Upload() {

    const [imgURL, setImgURL] = useState("")

    const handleImage = (e) => {
        console.log(e.target.files[0]);
        console.log(e.target.files);
        setImgURL(URL.createObjectURL(e.target.files[0]))
        URL.revokeObjectURL(e.target.files[0])
    }

    console.log(imgURL)


    return (
        <div>
            <input type="file" onChange={handleImage}/>
            <div>
                <img src={imgURL} alt="" />
            </div>
        </div>
    )
}

export default Upload
