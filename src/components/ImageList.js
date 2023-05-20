import React from 'react'
import ImageShow from "./ImageShow"
import "./ImageList.css"
function ImageList({images}) {
  const renderedImages = images.map((image)=>{
    return <ImageShow key={image.id} image={image}  />
    
  })
  console.log(images);
  return (
    <div className='image-list'>{renderedImages}</div>
    
  )
}

export default ImageList