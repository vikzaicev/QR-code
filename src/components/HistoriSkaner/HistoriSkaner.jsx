import { SCAN_DATA } from "../const"

export const HistoriSkaner = () => {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]")

    return (
        <div className="his__gen container">{data.map((text, index) => (
            <div key={index} className="block">{index + 1}. {text}</div>
        ))}</div>
    )
}