import './portfolio.scss'

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            {/* <h1>Projects</h1> */}
            <div className="container">
                <div className="item">
                    <img src="../../assets/HappyWorks.png" alt="" />
                    <h3>HappyWorks</h3>
                </div>
                <div className="item">
                    <img src="../../assets/BodyLoft.png" alt="" />
                    <h3>BodyLoft</h3>
                </div>
                <div className="item">
                    <img src="../../assets/MondialPC.png" alt="" />
                    <h3>Mondial PC</h3>
                </div>
                <div className="item">
                    <img src="../../assets/IRESEN.png" alt="" />
                    <h3>IRESEN</h3>
                </div>
            </div>
            <div className="copyright">
                <p>© 2021 Made with <span className="love">LOVE</span> by Latifa</p>
            </div>
        </div>
    )
}

