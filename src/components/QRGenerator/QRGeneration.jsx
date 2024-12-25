import { QRCodeSVG } from 'qrcode.react';
import "./QRGenerator.css"
import { useState } from 'react';
import { GENER_DATA } from '../const';

export const QRGeneration = () => {
    const [value, setValue] = useState('')
    const [result, setResalt] = useState('')

    const prevData = JSON.parse(localStorage.getItem(GENER_DATA) || '[]')


    const handleBtn = (e) => {
        setResalt(value)
        setValue('')
        localStorage.setItem(GENER_DATA, JSON.stringify([...prevData, value]))
    }

    const handleInput = (e) => {
        setValue(e.target.value);
        setResalt('')
    }



    return (
        <div className='container'>
            <input onChange={handleInput} placeholder='Введите текст...' value={value} type="text" />
            <button onClick={handleBtn} type="button">Сгенерировать QRcode</button>
            {result != '' && <QRCodeSVG className="qr" value={result} size={200} />}
        </div>
    )
}