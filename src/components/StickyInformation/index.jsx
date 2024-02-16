import { useEffect, useState } from "react";
import "./stickyinfo.css";

export default function StickyInformation() {
 


  return (
    <div className="sticky_info_container">
      <button><img src="https://cdn.pegasus.imarticus.org/imarticus_2/phoneloggreen.svg" alt="call" loading="lazy" />Request a Callback</button>
      <button><img src="https://cdn.pegasus.imarticus.org/imarticus_2/whatsappicon2.svg" alt="call" loading="lazy" />Say Hi! on Whatsapp</button>
    </div>
  );
}
