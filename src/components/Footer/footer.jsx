import logoFooter from '../../assets/LogoFooter.png'

function Footer () {
    return (
        <footer>
            <div className="titleFooter">
                <img src= {logoFooter} alt="Logo" className="logoFooter"></img>
            </div>
            <div className="copyright">
                <p className="textFooter">© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer