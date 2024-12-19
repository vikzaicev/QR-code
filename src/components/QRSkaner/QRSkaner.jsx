import React from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { useState } from "react";

import { SCAN_DATA } from "../const"

export const QRSkaner = () => {
    const [data, setData] = React.useState("Not Found");




    return (
        <>
            <BarcodeScannerComponent
                width={300}
                height={300}
                onUpdate={(err, result) => {

                    if (result) {
                        setData(result.text);
                        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')
                        localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, result.text]))
                    }
                    // else setData("Not Found");



                }}
            />
            <p>{data}</p>
        </>
    );


}

