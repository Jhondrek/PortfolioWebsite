import { projects } from "../components/projects";
import gitImg from "../assets/github-icon-1.svg"
import { NavLink } from "react-router-dom";

function getTechnologiesJsx(project){
    const technologiesJsx = project.technologies.map((technology)=>
                    
                    <li className="projectArticle__technology">{technology.name} </li>
            )
    return technologiesJsx
}

function generateTechnologiesImgsJsx(project){
    const technologiesJsx = project.technologies.map((technology)=>
                    
                    <img src={technology.image} alt={`${technology.name} logo`} className="projectArticleProfile__technologyImg"/>
            )
    return technologiesJsx
}

export function generateProjectsJsx(numberOfProjectsToDisplay=projects.length+1){
    numberOfProjectsToDisplay--
    const projectsJsx = projects.map((project, index)=>{

        if(numberOfProjectsToDisplay >= index){

            const technologiesJsx = getTechnologiesJsx(project)

            console.log(technologiesJsx)

            const newJsx = 
            <article className="projectArticle">
                <NavLink className="navLink" to={`/examples/${project.id}`}>

                    <div className="projectArticle__projectInfo">
                        <h2>{project.title}</h2>
                        <p className="">{project.description}</p>
                        <ul className="projectArticle__TechnologyList">
                            {technologiesJsx}
                        </ul>
                        <p className="projectArticle__hiddenText">Click to view project details</p>
                    </div>
                    <img className="projectMainImg" src={project.imgUrl} alt={`Screenshot of the ${project.title} project`} />
                </NavLink>
                    <div className="links__container">{project.completed ? <a className="liveSiteAnchor" href={project.liveProject} target="_blank" >Live site →</a> : <p className="Links__container__warningP">Currently under development</p>}
                        
                        <a className="gitAnchor" href={project.gitHub} target="_blank"><img  src={gitImg} alt="git logo" /></a>
                    </div>
            </article>

            return newJsx
        
        }else{
            return 
        }

    })

    return projectsJsx


}

export function generateProjectJsx(id){
    
   const selectedProject = projects.find((project)=> project.id == id)
    console.log(selectedProject)

    const projectJsx = <article className="projectArticle projectProfileArticle">

                    <div className="projectArticle__projectInfo-profile">
                        <h2>{selectedProject.title}</h2>
                        <p className="projectArticle_longDescription">{selectedProject.longDescription}</p>
                        <p>Technologies:</p>
                        <div className="projectArticle__TechnologyList--profile">
                            {generateTechnologiesImgsJsx(selectedProject)}
                        </div>
                        
                    </div>
                    <img className="projectProfileMainImg" src={selectedProject.imgUrl} alt={`Screenshot of the ${selectedProject.title} project`} />
                    <div className="links__container--profile">
                        { selectedProject.completed ?
                        <a className="liveSiteAnchor" href={selectedProject.liveProject} target="_blank" >→ Live site </a> : <p className="Links__container__warningP">Currently under development</p>}
                        <a href={selectedProject.gitHub} target="_blank"><img  src={gitImg} alt="git logo" /></a>
                    </div>
            </article>

            return projectJsx
}

