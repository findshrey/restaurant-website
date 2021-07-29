import React, { useState, useEffect } from "react"
import { Image, CloudinaryContext } from "cloudinary-react"

import firebase from "./../../firebase/firebase"

const Gallery = () => {
   const [galleryImages, setGalleryImages] = useState([])

   // Get images from firebase and set state
   useEffect(() => {
      let data = []

      firebase
         .firestore()
         .collection("gallery")
         .orderBy("id", "asc")
         .get()
         .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
               data = [...data, doc.data()]
            })

            setGalleryImages(data)
         })
   }, [])

   return (
      <section id="gallery" className="gallery section-fade-in">
         <header className="head-black">
            <h3>Delightful Experience</h3>
            <h2>Gallery</h2>
         </header>
         <CloudinaryContext cloudName="dg4arvkpw" className="gallery-inner">
            {galleryImages.map((image) => (
               <div key={image.id} className="gallery-img">
                  <Image
                     publicId={image.id}
                     loading="lazy"
                     srcSet={`${image.sm} 600w, ${image.md} 1200w`}
                     sizes="(max-width: 800px) 100vw, 35vw"
                  />
               </div>
            ))}
         </CloudinaryContext>
      </section>
   )
}

export default Gallery
