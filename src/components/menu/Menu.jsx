import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={()=> setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
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
                    <a href="www.linkedin.com/in/latifa-el-bargui">Resume</a>
                </li>
                <li>
                    <a href="mailto:elbargui.latifa@gmail.com">Mail</a>   
                </li>     
            </ul>
        </div>
    )
}
