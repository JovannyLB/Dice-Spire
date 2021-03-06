import "./Header.scss";

function Header(props) {
    if (props.generator) {
        return (
            <div className="header-container">
                <div className="headertitle">Dice Spire</div>
                <div className="logo-container" onClick={() => window.open("/", "_self")}>
                    <img className="logoImg" src="logo.svg" alt="20 Sided Dice" />
                    <div className="logoDice">{Math.floor(Math.random() * 20) + 1}</div>
                </div>
                <div className="headerbuttons-container">
                    <div className="headerbutton" onClick={() => window.open("/about", "_self")}>About</div>
                    <div className="headerbutton" onClick={() => window.open("/faq", "_self")}>FAQ</div>
                    <div className="headerbutton" onClick={() => window.open("/suggestions", "_self")}>Suggestions</div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="header-page-container">
                <div className="logo-container" onClick={() => window.open("/", "_self")}>
                    <img className="logoImg" src="logo.svg" alt="20 Sided Dice" />
                    <div className="logoDice">{Math.floor(Math.random() * 20) + 1}</div>
                </div>
                <div className="headertitle">Dice Spire</div>
            </div>
        )
    }
}

export default Header;