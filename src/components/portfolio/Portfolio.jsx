import './portfolio.scss'

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            {/* <h1>Projects</h1> */}
            <div className="container">
                <div className="item">
                    <a href ="" ><img src="../../assets/HappyWorks.png" alt="" /></a>
                    <h3>HappyWorks</h3>
                </div>
                <div className="item">
                    <a href ="" ><img src="../../assets/BodyLoft.png" alt="" /></a>
                    <h3>BodyLoft</h3>
                </div>
                <div className="item">
                    <a href ="" ><img src="../../assets/MondialPC.png" alt="" /></a>
                    <h3>Mondial PC</h3>
                </div>
                <div className="item">
                    <a href ="" ><img src="../../assets/IRESEN.png" alt="" /></a>
                    <h3>IRESEN</h3>
                </div>
            </div>
            <div className="copyright">
                <p>© 2021 Made with <span className="love">LOVE</span> by Latifa</p>
            </div>
        </div>
    )
}

