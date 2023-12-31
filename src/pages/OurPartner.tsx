import { Hero, ImageCard } from "../paths";
import {  hero_images, } from "../assets/utlity";

const OurPartner = () => {
  return (
    <div>
      <Hero
        animationImage="none"
        backgroundImage={hero_images.joint_ventures_hero} title={""} button={""} height="h-[40vh]"     />
      <div className=" flex flex-wrap gap-4 justify-center my-10 ">
        {/* {jointVentures?.map(({  image, title }, index) => ( */}
        <ImageCard 
            key={""}
            fullName={""}
            position={""}
            image={"./img/ourClients/kpbp-logo.png"}
            title={"kpbpenawar"}
            styles=" object-contain h-[300px] w-[300px] object-cover" group={"px-4 w-full lg:w-[450px] shadow-3xl"} icon={[]} download={false}          />
        {/* ))} */}
      </div>
    </div>
  );
};

export default OurPartner;
