import Image from "next/image"

const DevImg = ({constainerStyles, imgSrc}) => {

return (
     <div className={`${constainerStyles}`}>
          <Image src= {imgSrc} fill priority alt = '' />
          </div> 
     );
     };

export default DevImg;