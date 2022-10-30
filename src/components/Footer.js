import React from "react";

class Footer extends React.Component{
    render(){
        return(
        <footer>
            <div className="f-feet">
                <div className="f-info">
                    <div className="f-me">
                        <div className="f-me-title">About Me</div>
                        <p className="name">Akhtar Alfarisi</p>
                        <p className="project">Netlab Bookstore</p>
                        <p className="nim">320200401002</p>
                    </div>
                    <div className="f-me">
                        <div className="f-me-title">Trivia</div>
                        <p className="name">Free</p>
                        <p className="project">Contact</p>
                        <p className="nim">QnA</p>
                    </div>
                </div>
                <section className="f-cr">
                    <img />
                    <p>Universitas Indonesia Depok, Jawa Barat &#169; 2022
                    </p>
                </section>
            </div>
        </footer>
        )
    }
}

export default Footer;