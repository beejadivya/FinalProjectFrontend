import React from 'react';
// import '../Css/Home.css';

function Gallery({ gallery,addToCart }) {
    return (
        <div className='flex'>
            {
                gallery.map((galleryItem, galleryIndex) => {
                    return (
                        <div style={{ width: '33%' }}>
                            <div className='gallery-item'>
                                <img src={galleryItem.url} width="100%" />
                                <p>{galleryItem.name} | {galleryItem.category} </p>
                                <p> {galleryItem.seller} </p>
                                <p> Rs. {galleryItem.price} /-</p>
                                <button
                                    onClick={() => addToCart(galleryItem)}
                                >Add To Cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Gallery;