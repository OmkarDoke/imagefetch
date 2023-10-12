import React, { useEffect, useState } from "react";
// import {GlassMagnifier} from "react-image-magnifiers";
import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  PictureInPictureMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION
} from "react-image-magnifiers";
function ImageDemo({src}) {
  // const [ing, setIng] = useState("");
  // useEffect(() => {
  //   async function loadImg() {
  //     try {
  //       // let res = await axios(
  //       //   "https://apps.ceinsys.com:2443/survey_mobile_app/data/download/photo/5210418955563522090001_23092023_203925",

  //       //   {
  //       //     mode: "cors",
  //       //     headers: {
  //       //       userlogin: "Mahesh",
  //       //     },
  //       //   }
  //       // );
  //       // console.log(res);
  //       fetch(
  //         "https://apps.ceinsys.com:2443/survey_mobile_app/data/download/photo/5210418955563522090001_23092023_203925",
  //         { mode: "no-cors" },
  //         {
  //           headers: {
  //             userlogin: "Mahesh",
  //           },
  //         }
  //       ).then((res) => {
  //         console.log(res);
  //       });

  //       // console.log(res)
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   loadImg();
  // }, []);

  return <div >
    {/* <img src= {src} height={300} width={300}
    onError={()=>{alert("Image not found")}}
    alt="Not found"
    /> */}
    {/* <GlassMagnifier
  imageSrc={src}
  imageAlt="Example"
  largeImageSrc={src}
/> */}

<GlassMagnifier
  imageSrc={src}
  imageAlt="Example"
  largeImageSrc={src} // Optional
/>
 
<Magnifier
  imageSrc={src}
  imageAlt="Example"
  largeImageSrc={src} // Optional
  mouseActivation={MOUSE_ACTIVATION.DOUBLE_CLICK} // Optional
  touchActivation={TOUCH_ACTIVATION.DOUBLE_TAP} // Optional
  style={{ height: "300px" }}
/>
  </div>;
}

export default ImageDemo;
