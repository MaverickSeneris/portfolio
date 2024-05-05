import FooterLinks from "./components/FooterLinks"

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer bg-dark">
            <div className="footer-grid-container container">
                <a href="#">
                    <div className="footer-title text-center">
                        <h3 className="ff-accent">Mav Seneris</h3>
                    </div>
                </a>
               <FooterLinks/>
                <small className="text-center">Copyright {currentYear}&#169; Maverick Seneris</small>

            </div>
        </div>
    )
}