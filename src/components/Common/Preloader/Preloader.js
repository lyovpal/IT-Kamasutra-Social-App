import preloader from  "../../../assets/images/preloader.gif";
import React from "react"

const Preloader = () => {
  return (
    <div style={{ backgroudnColor: 'white' }}>
      <img src={preloader} alt=""/>
    </div>
  );
};

export default Preloader;
