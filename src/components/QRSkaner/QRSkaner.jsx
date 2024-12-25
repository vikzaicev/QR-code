import React from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { useState } from "react";

import { SCAN_DATA } from "../const"

export const QRSkaner = () => {
    const [data, setData] = React.useState("Not Found");




    return (
        <div className='container'>
            <BarcodeScannerComponent
                width={300}
                height={300}
                onUpdate={(err, result) => {
                    if (result) {
                        setData(result.text);
                        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')
                        if (prevData.includes(result.text)) return;
                        localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, result.text]))
                    }
                    // else setData("Not Found");
                }}
            />
            <p>{data}</p>
        </div>
    );


}

