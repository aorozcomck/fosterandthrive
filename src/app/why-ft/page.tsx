'use client'

import Carousel from "@/components/ui/carousel";
import { list } from "postcss";
import { useEffect } from "react";

// import WhyFTComponent from "@/components/why_FT/WhyFTComponent";
interface page {
  Title: string;
  Images: string[];
}

function FTComponent() {

  useEffect(() => {
  


  }, []);

  return (
    <>
      <div className="pt-10">
        <Carousel Images={[{
          url: "https://mcco02mstrub73kprod.dxcloud.episerver.net/globalassets/fosterthrive_aiden_bubbles_081-whyft_v1.png", 
          title: "Foster & Thrive",
          backgrounColor: undefined,
          description: "With you for Life"
        },
        {
          url: "https://mcco02mstrub73kprod.dxcloud.episerver.net/globalassets/fosterthrive_aiden_bubbles_081-whyft_v1.png", 
          title: "Foster & Thrive",
          backgrounColor: undefined,
          description: "With you for Life"
        }]} />
      </div>
    </>
  );
}
export default FTComponent;
