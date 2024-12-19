import { SCAN_DATA } from "../const"
//import "./components/HistoriGenerator/HistoriGenerator.css"

export const HistoriSkaner = () => {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]")
    console.log(data);

    return (
        <div className="his__gen">{data.map((text, index) => (
            <div key={index} className="">{index + 1}. {text}</div>
        ))}</div>
    )
}