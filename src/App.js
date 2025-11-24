import React, { useState } from "react";
import Hatch from "./Hatch";
import "./App.css";

const videos = [
  "https://www.youtube.com/embed/ZZ5LpwO-An4?si=nSYrDukaUeId7IvU",
  "https://www.youtube.com/embed/IwLSrNu1ppI?si=iZYq2KKNqT5N49-A",
  "https://www.youtube.com/embed/v1zhFT_1wzM?si=6cBFGeKHa92yurkS",
  "https://www.youtube.com/embed/HhHwnrlZRus?si=lPjf55QNWc81tWo5",
  "https://www.youtube.com/embed/LnSYihRoGA4?si=07rrEkR6CTZQ5TOL",
  "https://www.youtube.com/embed/cE0wfjsybIQ?si=q6sj2Ti1EkdOX-9l",
  "https://www.youtube.com/embed/S8Ppyskw5Vw?si=kgY5XMcQEjVnLQZK",
  "https://www.youtube.com/embed/EIyixC9NsLI?si=auImN3OgGyw_Nc5c",
  "https://www.youtube.com/embed/X_FUixuTlf8?si=uWtViOA67lBTJqF6",
  "https://www.youtube.com/embed/6dMjCa0nqK0?si=k1FoGBnyAe5ev0n3",
  "https://www.youtube.com/embed/Ct6BUPvE2sM?si=ED4XqKKxNix84ke0",
  "https://www.youtube.com/embed/vMu9Itk2e6o?si=6vABoBuAEOS9KNsf",
  "https://www.youtube.com/embed/YlUKcNNmywk?si=XH2pcWz-QUXmpcBB",
  "https://www.youtube.com/embed/2atZyD3ECfg?si=NB_5pDNdDFydV_aA",
  "https://www.youtube.com/embed/yebNIHKAC4A?si=EQ8r6ec53nyiXfWD",
  "https://www.youtube.com/embed/HyHNuVaZJ-k?si=81Mb4JSJtbg9Fc9R",
  "https://www.youtube.com/embed/I_2D8Eo15wE?si=X2UsNj80zEvjmEmZ",
  "https://www.youtube.com/embed/79DijItQXMM?si=88BGaVK52xf-JX6e",
  "https://www.youtube.com/embed/jg348228FVs?si=UIJaWfpocYEHuxXX",
  "https://www.youtube.com/embed/KptHQVI8xr0?si=C3KE1fgUqhV0dVX7",
  "https://www.youtube.com/embed/MpFv3dzSWxQ?si=YAcu09zmn8Mdd_s4",
  "https://www.youtube.com/embed/YJ0o75YhEkg?si=6Vfo8eW-PGCDQ3RD",
  "https://www.youtube.com/embed/eNvUS-6PTbs?si=PAaqjrte9A4AJt_m",
  "https://www.youtube.com/embed/Dsas-7DcA6Q?si=fFEyPMeNVUW-48DR"
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
