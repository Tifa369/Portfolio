import './topbar.scss'


export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                    <img src="../../assets/latifa.png" alt="" /></a>
                </div>
                
                <div className="right">
                    <div className="navbar">
                        <ul>
                            <li onClick={()=> setMenuOpen(false)}>
                                <a href="#portfolio">Projects</a>
                            </li>
                            <li>
                                <a href="www.linkedin.com/in/latifa-el-bargui">LinkedIn</a>
                            </li>
                            <li>
                                <a href="https://github.com/Tifa369">Github</a>
                            </li>
                            <li>
                                <a href="../../../public/assets/cv.pdf" target="_blank">Resume</a>
                            </li>
                            <li>
                                <a href="mailto:elbargui.latifa@gmail.com">Mail</a>   
                            </li>   
                        </ul>     
                    </div>

                    {/* Hamburger Menu */}
                    <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>

                </div>
            </div>
        </div>
    )
}
