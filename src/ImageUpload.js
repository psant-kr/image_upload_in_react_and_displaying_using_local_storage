import React, { useState, useEffect } from 'react';

const ImageUpload = () => {
    const [selectedImage, setSelectedImage] = useState(null);

   

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        localStorage.setItem('uploadedImage', imageUrl);
        // setSelectedImage(imageUrl);
    };
    useEffect(() => {
        const imageUrl = localStorage.getItem('uploadedImage');
        if (imageUrl) {
            setSelectedImage(imageUrl);
        }
    }, [handleFileChange]);

    return (
        <div>
            <div>
                <input type="file" accept="image/*" onChange={handleFileChange} />
            </div>
            {selectedImage &&
                <div><img src={selectedImage} alt="Uploaded" /></div>

            }
        </div>
    );
};

export default ImageUpload;
