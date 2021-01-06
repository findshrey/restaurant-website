import React from 'react'
import { Image, CloudinaryContext } from 'cloudinary-react'

const Gallery = () => (
   <section id="gallery" className="gallery">
      <header className="head-red">
         <h3>Delightful Experience</h3>
         <h2>Gallery</h2>
      </header>
      <CloudinaryContext cloudName="dg4arvkpw" className="gallery-inner">
         <Image
            publicId="exotica-restaurant/gallery/gallery_1_tdx9gf.jpg"
            loading="lazy"
            srcSet="
                  https://res.cloudinary.com/dg4arvkpw/image/upload/w_500/exotica-restaurant/gallery/gallery_1_tdx9gf.jpg 500w,
                  https://res.cloudinary.com/dg4arvkpw/image/upload/w_900/exotica-restaurant/gallery/gallery_1_tdx9gf.jpg 900w"
            sizes="(max-width: 800px) 100vw, 35vw"
         />
         <Image
            publicId="exotica-restaurant/gallery/gallery_2_rzmf15.jpg"
            loading="lazy"
            srcSet="
                  https://res.cloudinary.com/dg4arvkpw/image/upload/w_500/exotica-restaurant/gallery/gallery_2_rzmf15.jpg 500w,
                  https://res.cloudinary.com/dg4arvkpw/image/upload/w_900/exotica-restaurant/gallery/gallery_2_rzmf15.jpg 900w"
            sizes="(max-width: 800px) 100vw, 35vw"
         />
         <Image
            publicId="exotica-restaurant/gallery/gallery_3_r5l94p.jpg"
            loading="lazy"
            srcSet="
                  https://res.cloudinary.com/dg4arvkpw/image/upload/w_500/exotica-restaurant/gallery/gallery_3_r5l94p.jpg 500w,
                  https://res.cloudinary.com/dg4arvkpw/image/upload/w_900/exotica-restaurant/gallery/gallery_3_r5l94p.jpg 900w"
            sizes="(max-width: 800px) 100vw, 35vw"
         />
         <Image
            publicId="exotica-restaurant/gallery/gallery_4_f46wjr.jpg"
            loading="lazy"
            srcSet="
                  https://res.cloudinary.com/dg4arvkpw/image/upload/w_500/exotica-restaurant/gallery/gallery_4_f46wjr.jpg 500w,
                  https://res.cloudinary.com/dg4arvkpw/image/upload/w_900/exotica-restaurant/gallery/gallery_4_f46wjr.jpg 900w"
            sizes="(max-width: 800px) 100vw, 35vw"
         />
         <Image
            publicId="exotica-restaurant/gallery/gallery_5_lhx8du.jpg"
            loading="lazy"
            srcSet="
                  https://res.cloudinary.com/dg4arvkpw/image/upload/w_500/exotica-restaurant/gallery/gallery_5_lhx8du.jpg 500w,
                  https://res.cloudinary.com/dg4arvkpw/image/upload/w_900/exotica-restaurant/gallery/gallery_5_lhx8du.jpg 900w"
            sizes="(max-width: 800px) 100vw, 35vw"
         />
         <Image
            publicId="exotica-restaurant/gallery/gallery_6_b4k1fn.jpg"
            loading="lazy"
            srcSet="
                  https://res.cloudinary.com/dg4arvkpw/image/upload/w_500/exotica-restaurant/gallery/gallery_6_b4k1fn.jpg 500w,
                  https://res.cloudinary.com/dg4arvkpw/image/upload/w_900/exotica-restaurant/gallery/gallery_6_b4k1fn.jpg 900w"
            sizes="(max-width: 800px) 100vw, 35vw"
         />
         <Image
            publicId="exotica-restaurant/gallery/gallery_7_nlnuvl.jpg"
            loading="lazy"
            srcSet="
                  https://res.cloudinary.com/dg4arvkpw/image/upload/w_500/exotica-restaurant/gallery/gallery_7_nlnuvl.jpg 500w,
                  https://res.cloudinary.com/dg4arvkpw/image/upload/w_900/exotica-restaurant/gallery/gallery_7_nlnuvl.jpg 900w"
            sizes="(max-width: 800px) 100vw, 35vw"
         />
         <Image
            publicId="exotica-restaurant/gallery/gallery_8_jgm4kc.jpg"
            loading="lazy"
            srcSet="
                  https://res.cloudinary.com/dg4arvkpw/image/upload/w_500/exotica-restaurant/gallery/gallery_8_jgm4kc.jpg 500w,
                  https://res.cloudinary.com/dg4arvkpw/image/upload/w_900/exotica-restaurant/gallery/gallery_8_jgm4kc.jpg 900w"
            sizes="(max-width: 800px) 100vw, 35vw"
         />
         <Image
            publicId="exotica-restaurant/gallery/gallery_9_rprahw.jpg"
            loading="lazy"
            srcSet="
                  https://res.cloudinary.com/dg4arvkpw/image/upload/w_500/exotica-restaurant/gallery/gallery_9_rprahw.jpg 500w,
                  https://res.cloudinary.com/dg4arvkpw/image/upload/w_900/exotica-restaurant/gallery/gallery_9_rprahw.jpg 900w"
            sizes="(max-width: 800px) 100vw, 35vw"
         />
      </CloudinaryContext>
   </section>
)

export default Gallery