import React, { useEffect } from "react";
import { useState } from "react";


function CodePrice(props) {
    const [codeColor, setCodeColor] = useState("text-green");
    const [openColor, setOpenColor] = useState("text-green");
    const [changeColor, setChangeColor] = useState("text-green");
    const [pctChangeColor, setPctChangeColor] = useState("text-green");

    useEffect(() => {
        formatColor();
    }, [])

    const formatColor = () => {
        if(props.open < 0){
            setOpenColor("text-red");
        }
        if(props.change < 0){
            setChangeColor("text-red")
        }
        if( props.pctChange < 0 ){
            setPctChangeColor("text-red")
        }
    }

  return (
    <div className="bottom-row grid text-white">
      <div className={`1 ${codeColor}`}>{props.code}</div>
      <div className={`2 ${openColor}`}>{props.open}</div>
      <div className={`3 ${changeColor}`}>{props.change}</div>
      <div className={`4 ${pctChangeColor}`}>{props.pctChange}</div>
      <div className="5">{props.nmVolume}</div>
    </div>
  );
}

export default CodePrice;
