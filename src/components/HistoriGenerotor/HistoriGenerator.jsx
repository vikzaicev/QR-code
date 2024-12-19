import { GENER_DATA } from "../const"
import { QRCodeSVG } from 'qrcode.react';
import "./HistoriGenerator.css"

export const HistoriGenerator = () => {
    const historiData = JSON.parse(localStorage.getItem(GENER_DATA) || '[]')
    return (
        <div className="his__gen">{
            historiData.map((text, index) => (
                <div className="block" key={index}>{index + 1}. {text}<QRCodeSVG className="qr" value={text} size={100} /></div>
            ))
        }</div>
    )
}