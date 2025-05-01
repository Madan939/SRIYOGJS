import React, { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import ImageReact from '../components/ImageReact';

import Lightbox from 'yet-another-react-lightbox';
import { Zoom, Fullscreen, Slideshow, Thumbnails, Captions, Counter } from 'yet-another-react-lightbox/plugins';
import GalleryImage from '../components/Gallery';
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";

const Certificate = () => {
  const name = "Certifications";
  const [index, setIndex] = useState(-1);

  const slides = GalleryImage.map(item => ({ src: item.image }));
  useEffect(()=>{
    document.title="SRIYOG Certificate | Professional Marketplace";
  },[]);

  return (
    <>
      <Breadcrumb name={name} des={undefined} />
      <>
        <ImageReact
          data={GalleryImage}
          onClick={(currentIndex) => setIndex(currentIndex)}
        />
        <Lightbox

          plugins={[Counter, Zoom, Slideshow, Fullscreen, Thumbnails]}
          slides={slides}
          index={index}
          open={index >= 0}
          close={() => setIndex(-1)}
        />
      </>
    </>
  );
};

export default Certificate;
