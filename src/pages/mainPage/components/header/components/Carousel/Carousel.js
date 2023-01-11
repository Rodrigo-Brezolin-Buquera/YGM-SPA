import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";


const photoList = [
  require("../../../../../../assets/photos/Carousel1.png"),
  require("../../../../../../assets/photos/Carousel2.png"),
  require("../../../../../../assets/photos/Carousel3.png"),
  require("../../../../../../assets/photos/Carousel4.png"),
  require("../../../../../../assets/photos/Carousel5.png"),
]

export default () => (
  <Carousel autoPlay showThumbs={false} infiniteLoop={true}>

    {photoList.map(photo => (
      <div key={photo}>
        <Image

          alt="Carrossel de fotos" src={photo} />
      </div>
    ))}

  </Carousel>
);