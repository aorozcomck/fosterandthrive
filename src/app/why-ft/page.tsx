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
      <div className="wrapper">
        <Carousel Images={["https://mcco02mstrub73kprod.dxcloud.episerver.net/globalassets/fosterthrive_aiden_bubbles_081-whyft_v1.png", "https://mcco02mstrub73kprod.dxcloud.episerver.net/globalassets/fosterthrive_aiden_bubbles_081-whyft_v1.png", "https://mcco02mstrub73kprod.dxcloud.episerver.net/globalassets/fosterthrive_aiden_bubbles_081-whyft_v1.png"]} />
      </div>
    </>
  );
}
export default FTComponent;
