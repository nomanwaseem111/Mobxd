import React, { useEffect, useState } from "react";

const TopToBottomBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="bg-blue-500 p-2  rounded-full w-14 h-14 fixed  bottom-14 right-8 md:right-14">
          <div
            className="absolute top-4 left-4  text-[24px] text-white cursor-pointer"
            onClick={goToBtn}
          >
            <ion-icon name="arrow-up-outline"></ion-icon>
          </div>
        </div>
      )}
    </>
  );
};

export default TopToBottomBtn;
