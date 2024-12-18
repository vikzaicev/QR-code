import "./Nav.css"
import { NavLink } from "react-router";

export const Nav = () => {
    return (
        <div className="nav">
            <ul>
                <NavLink className="NavLink" to="/gener" end>сгенерировать QR</NavLink>
                <NavLink className="NavLink" to="/skan" end>отсканировать QR</NavLink>
                <NavLink className="NavLink" to="/hisgen" end>история сгенерированных QR</NavLink>
                <NavLink className="NavLink" to="/hisskan">история отсканированных QR</NavLink>
            </ul>
        </div>
    )
}