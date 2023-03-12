import logo from '../../assets/Logo.png'
import Nav from '../Navbar/navbar'

function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                <img src= {logo} alt="Logo" className="logo"></img>
            </div>
            <Nav />
        </header>
    )
}

export default Header