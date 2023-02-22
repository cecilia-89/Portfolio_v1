import './projects.scss'
import omni from './images/omnii.png'

const Projects = () => {
    return (
        <section className="projects">
            <div>My Recent Projects</div>
            <div className="project-wrapper">
                <div>
                    <h4> OMNI</h4>
                    <span>A movie streaming service for Nigerian Movies</span>
                    <div>
                        <img src={omni} alt='movie site for Nigerian movies'/>
                    </div>
                </div>

                <div>
                    <h4> OMNI</h4>
                    <span>A movie streaming service for Nigerian Movies</span>
                    <div>
                        <img src={omni} alt='movie site for Nigerian movies'/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;