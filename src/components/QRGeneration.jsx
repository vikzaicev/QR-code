import { QRCodeSVG } from 'qrcode.react';
import "./QRGenerator.css"
import { useState } from 'react';

export const QRGeneration = () => {
    const [value, setValue] = useState('Привет')
    const [result, setResalt] = useState('')

    const handleBtn = (e) => {
        setResalt(value)
        setValue('')
    }

    const handleInput = (e) => {
        setValue(e.target.value);
        setResalt('')
    }
    return (
        <div className='container'>
            <input onChange={handleInput} value={value} type="text" />
            <button onClick={handleBtn} type="button">Сгенерировать QR</button>
            {result != '' && <QRCodeSVG className="qr" value={result} />}
        </div>
    )
}