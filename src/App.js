import React, { useState } from "react";
import Hatch from "./Hatch";
import "./App.css";

const videos = [
  "https://www.youtube.com/embed/U-b5gDWVnps?si=my8A7nfiVu2OaJUQ",
  "https://www.youtube.com/embed/YnopHCL1Jk8?si=CJpho6h9KCIDGwRY",
  "https://www.youtube.com/embed/q0hyYWKXF0Q?si=qL77-dKaJJCr0r5U",
  "https://www.youtube.com/embed/WcmXktFrlmE?si=aG6OJD12vRuY7RN1",
  "https://www.youtube.com/embed/Hy8kmNEo1i8?si=ygI2kjNH-Fmzdisd",
  "https://www.youtube.com/embed/68ugkg9RePc?si=7iFuRiWkEQQCie-i",
  "https://www.youtube.com/embed/Hrph2EW9VjY?si=sEv1S0SNCEXo1Ed1",
  "https://www.youtube.com/embed/_J3ewiYdm6U?si=uWmUVF2f84Di57mh",
  "https://www.youtube.com/embed/fFIIB3Fvqjo?si=ukSC1gBPd6s5NDOy",
  "https://www.youtube.com/embed/B-RR9wsa12Q?si=354epE2azj9fr5dF",
  "https://www.youtube.com/embed/vdVnbHjb8Cs?si=m3f--Dh1627M9LjA",
  "https://www.youtube.com/embed/cvvd-9azD1M?si=mBmstLm3SjGigpDb",
  "https://www.youtube.com/embed/Ropn_kwpFDU?si=2nwU77PU3jiKyBsO",
  "https://www.youtube.com/embed/ZyhrYis509A?si=T8BeYnKKACTyChK0",
  "https://www.youtube.com/embed/vnwSeQKkyiE?si=pCjbSik9HMwMyWRB",
  "https://www.youtube.com/embed/h7D97mZ-ZsQ?si=_VTPCbKD-7DVtF6U",
  "https://www.youtube.com/embed/lyuFLU2Zqz0?si=voE2MK3fMZzegl6M",
  "https://www.youtube.com/embed/gnwywMpPbjg?si=bsQEPWwAIOp79f4R",
  "https://www.youtube.com/embed/k85mRPqvMbE?si=_RxjnP7p0GH6tEqt",
  "https://www.youtube.com/embed/-7aL7oQbfxk?si=dZERi7eNH_1kzBpC",
  "https://www.youtube.com/embed/i74tlP7G8_I?si=pAZjSUtG_Xv74WA8",
  "https://www.youtube.com/embed/QFFykQIrPCk?si=qoAE9sZCZn1JpoPY",
  "https://www.youtube.com/embed/9FgCNV2yYOk?si=5_uY03cYTSi9pwMw",
  "https://www.youtube.com/embed/-elaTwPtRvI?si=Wnt2PNs-zcDv6a6g",
];

const backgrounds = [
  "images/ben-den-engelsen-4_pzO3SzDCo-unsplash.jpg",
  "images/daria-glakteeva-UN9tChPV__0-unsplash.jpg",
  "images/earl-wilcox-hZS83qaZqa8-unsplash.jpg",
  "images/eugene-zhyvchik-0O58LvoYdHk-unsplash.jpg",
  "images/humphrey-muleba-w4h99Af51Lg-unsplash.jpg",
  "images/ian-stauffer-U18rvrmRV8Q-unsplash.jpg",
  "images/irena-carpaccio-6zz5nDuGEk8-unsplash.jpg",
  "images/jennifer-bonauer-vnIxbfat7DM-unsplash.jpg",
  "images/jez-timms-cOE85BJq33c-unsplash.jpg",
  "images/joe-green-LKwo0PfwSTs-unsplash.jpg",
  "images/juliana-barquero-E4sLmF9FnVo-unsplash.jpg",
  "images/lydia-matzal-sn1n0LS5FvY-unsplash.jpg",
  "images/markus-spiske-4uPM6GSX0P0-unsplash.jpg",
  "images/markus-spiske-AF_4tBQjdtc-unsplash.jpg",
  "images/markus-spiske-WUsrcGukaQM-unsplash.jpg",
  "images/nathan-dumlao-jyDnMKoeK4U-unsplash.jpg",
  "images/toa-heftiba-BoyJpFL-wU4-unsplash.jpg",
  "images/annie-spratt-cS4fiNSK2c4-unsplash.jpg",
  "images/josh-harrison-jY_fTS7ZE98-unsplash.jpg",
  "images/erin-mckenna-kFbSKhukfIQ-unsplash.jpg",
  "images/mel-poole-LUPXhXj2ip0-unsplash.jpg",
  "images/toa-heftiba-WsDF95mSUsI-unsplash.jpg",
  "images/monika-grabkowska-yuAEcsAe4lk-unsplash.jpg",
  "images/pukki.jpg",
];

function App() {
  const [openedHatches, setOpenedHatches] = useState([]);

  // Get the current date
  const getAvailableHatchIndex = () => {
    const today = new Date();
    const dayOfMonth = today.getDate(); // e.g., 17 for November 17th
    return dayOfMonth - 1; // Convert to zero-based index
  };
  const openHatch = (index) => {
    const availableHatchIndex = getAvailableHatchIndex();

    if (index <= availableHatchIndex && !openedHatches.includes(index)) {
      setOpenedHatches([...openedHatches, index]);
    } else {
      alert("Int öppna i förtid, busungar!");
    }
  };

  return (
    <div className="calendar">
      {Array.from({ length: 24 }).map((_, index) => (
        <Hatch
          key={index}
          index={index}
          video={videos[index]}
          isOpen={openedHatches.includes(index)}
          openHatch={openHatch}
          backgroundImage={backgrounds[index]}
        />
      ))}
    </div>
  );
}

export default App;
