import React from "react";

class Footer extends React.Component{
    render(){
        return(
        <footer>
            <div className="f-feet">
                <div className="f-info">
                    <div className="f-me">
                        <div className="f-me-title">About Me</div>
                        <p className="name">Other Project</p>
                        <p className="project">Social media</p>
                        <p className="nim">Recent movement</p>
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