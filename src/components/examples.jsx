import { useEffect, useState } from "react"
import "./genericStyles.css"
import "./examples.css"
import { generateProjectsJsx } from "../utils/renderUtils"

export default function Examples(){

   
    return(
        <main className="example__container">
            {generateProjectsJsx()}
        </main>
    )
}