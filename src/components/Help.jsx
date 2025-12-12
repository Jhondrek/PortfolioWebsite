
import "./genericStyles.css"
import "./help.css"

export default function Help(){

   


    return( 

            <main className="contactCont">
                <h1><span className="hero__tittle-secondary-color">Contact</span> information:</h1>
                <p className="hero__tittle">Feel free to contact me through any of the following methods: </p>

                <section className="contactCont__linkSectionCont">
                    <a className="btn" target="_blank" href="mailto:jhondrek116@gmail.com">Send an Email</a>
                    <a  className="btn" target="_blank" href="https://www.linkedin.com/in/david-fern%C3%A1ndez-0b103611a/">Contact through Linkedin</a>
                    <a  className="btn" target="_blank" href="https://wa.me/+50670340543">Send a Whatsapp</a>
                </section>
            </main>
    )
}

