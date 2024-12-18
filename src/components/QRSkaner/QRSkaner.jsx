import React from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

export const QRSkaner = () => {
    const [data, setData] = React.useState("Not Found");

    return (
        <>
            <BarcodeScannerComponent
                width={300}
                height={300}
                onUpdate={(err, result) => {
                    //console.log(err, result);
                    if (result) setData(result.text);


                    // else setData("Not Found");
                }}
            />
            <p>{data}</p>
        </>
    );
}

