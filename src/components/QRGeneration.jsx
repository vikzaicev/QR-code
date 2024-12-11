import { QRCodeSVG } from 'qrcode.react';

export const QRGeneration = () => {
    return (
        <div>
            <QRCodeSVG value="https://reactjs.org/" />
            <input type="text" />
            <button type="button">Сгенерировать QR</button>
        </div>
    )
}