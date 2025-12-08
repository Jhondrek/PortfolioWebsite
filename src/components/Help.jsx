
import "./genericStyles.css"
import "./help.css"

export default function Help(){

   


    return( 

            <main className="contactCont">
                <h1><span className="hero__tittle-secondary-color">Contact</span> information:</h1>
                <p className="hero__tittle">Feel free to contact me through any of the following methods: </p>

                <section className="contactCont__linkSectionCont">
                    <a className="btn" href="mailto:recipient@example.com">Send an Email</a>
                    <a  className="btn" href="mailto:recipient@example.com">Contact through Linkedin</a>
                    <a  className="btn" href="https://wa.me/+50670340543">Send a Whatsapp</a>
                </section>
            </main>
    )
}

