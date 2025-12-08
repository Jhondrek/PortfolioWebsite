import { useParams } from "react-router-dom"
import { generateProjectJsx } from "../utils/renderUtils"
import "./projectProfile.css"

export default function ProjectProfile(){
    const params = useParams()
    console.log(params.id)

    console.log(generateProjectJsx(params.id))
    return(

        <main>
        {generateProjectJsx(params.id)}
        </main>
    )
        
    
}