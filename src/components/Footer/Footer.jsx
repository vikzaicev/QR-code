import "./Footer.css"
export const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <div className="footer">{year}</div>
    )
}