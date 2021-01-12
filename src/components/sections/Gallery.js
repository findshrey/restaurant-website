import React from 'react'
import { Image, CloudinaryContext } from 'cloudinary-react'

const Gallery = () => (
   <section id="gallery" className="gallery section-fade-in">
      <header className="head-black">
         <h3>Delightful Experience</h3>
         <h2>Gallery</h2>
      </header>
      <CloudinaryContext cloudName="dg4arvkpw" className="gallery-inner">
         <div className="gallery-img">
            <Image
               publicId="la-casetta/gallery/gallery_1_wesuin.jpg"
               loading="lazy"
               srcSet="
                  https://res.cloudinary.com/dg4arvkpw/image/upload/w_600/la-casetta/gallery/gallery_1_wesuin.jpg 600w,
                  https://res.cloudinary.com/dg4arvkpw/image/upload/w_1200/la-casetta/gallery/gallery_1_wesuin.jpg 1200w"
               sizes="(max-width: 800px) 100vw, 35vw"
            />
         </div>
         <div className="gallery-img">
            <Image
               publicId="la-casetta/gallery/gallery_2_g7boi8.jpg"
               loading="lazy"
               srcSet="
                  https://res.cloudinary.com/dg4arvkpw/image/upload/w_600/la-casetta/gallery/gallery_2_g7boi8.jpg 600w,
                  https://res.cloudinary.com/dg4arvkpw/image/upload/w_900/la-casetta/gallery/gallery_2_g7boi8.jpg 900w"
               sizes="(max-width: 800px) 100vw, 35vw"
            />
         </div>
         <div className="gallery-img">
            <Image
               publicId="la-casetta/gallery/gallery_3_jbmt2c.jpg"
               loading="lazy"
               srcSet="
                  https://res.cloudinary.com/dg4arvkpw/image/upload/w_600/la-casetta/gallery/gallery_3_jbmt2c.jpg 600w,
                  https://res.cloudinary.com/dg4arvkpw/image/upload/w_900/la-casetta/gallery/gallery_3_jbmt2c.jpg 900w"
               sizes="(max-width: 800px) 100vw, 35vw"
            />
         </div>
         <div className="gallery-img">
            <Image
               publicId="la-casetta/gallery/gallery_4_lc8a9l.jpg"
               loading="lazy"
               srcSet="
                  https://res.cloudinary.com/dg4arvkpw/image/upload/w_600/la-casetta/gallery/gallery_4_lc8a9l.jpg 600w,
                  https://res.cloudinary.com/dg4arvkpw/image/upload/w_1200/la-casetta/gallery/gallery_4_lc8a9l.jpg 1200w"
               sizes="(max-width: 800px) 100vw, 35vw"
            />
         </div>
         <div className="gallery-img">
            <Image
               publicId="la-casetta/gallery/gallery_5_okn1wf.jpg"
               loading="lazy"
               srcSet="
                  https://res.cloudinary.com/dg4arvkpw/image/upload/w_600/la-casetta/gallery/gallery_5_okn1wf.jpg 600w,
                  https://res.cloudinary.com/dg4arvkpw/image/upload/w_1200/la-casetta/gallery/gallery_5_okn1wf.jpg 1200w"
               sizes="(max-width: 800px) 100vw, 35vw"
            />
         </div>
         <div className="gallery-img">
            <Image
               publicId="la-casetta/gallery/gallery_6_ao1qfc.jpg"
               loading="lazy"
               srcSet="
                  https://res.cloudinary.com/dg4arvkpw/image/upload/w_600/la-casetta/gallery/gallery_6_ao1qfc.jpg 600w,
                  https://res.cloudinary.com/dg4arvkpw/image/upload/w_900/la-casetta/gallery/gallery_6_ao1qfc.jpg 900w"
               sizes="(max-width: 800px) 100vw, 35vw"
            />
         </div>
         <div className="gallery-img">
            <Image
               publicId="la-casetta/gallery/gallery_7_o2eqeq.jpg"
               loading="lazy"
               srcSet="
                  https://res.cloudinary.com/dg4arvkpw/image/upload/w_600/la-casetta/gallery/gallery_7_o2eqeq.jpg 600w,
                  https://res.cloudinary.com/dg4arvkpw/image/upload/w_900/la-casetta/gallery/gallery_7_o2eqeq.jpg 900w"
               sizes="(max-width: 800px) 100vw, 35vw"
            />
         </div>
         <div className="gallery-img">
            <Image
               publicId="la-casetta/gallery/gallery_8_rnd9qe.jpg"
               loading="lazy"
               srcSet="
                  https://res.cloudinary.com/dg4arvkpw/image/upload/w_600/la-casetta/gallery/gallery_8_rnd9qe.jpg 600w,
                  https://res.cloudinary.com/dg4arvkpw/image/upload/w_1200/la-casetta/gallery/gallery_8_rnd9qe.jpg 1200w"
               sizes="(max-width: 800px) 100vw, 35vw"
            />
         </div>

         <div className="gallery-img">
            <Image
               publicId="la-casetta/gallery/gallery_9_cr9iow.jpg"
               loading="lazy"
               srcSet="
                  https://res.cloudinary.com/dg4arvkpw/image/upload/w_600/la-casetta/gallery/gallery_9_cr9iow.jpg 600w,
                  https://res.cloudinary.com/dg4arvkpw/image/upload/w_900/la-casetta/gallery/gallery_9_cr9iow.jpg 900w"
               sizes="(max-width: 800px) 100vw, 35vw"
            />
         </div>
      </CloudinaryContext>
   </section>
)

export default Gallery