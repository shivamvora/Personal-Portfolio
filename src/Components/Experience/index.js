import ExperienceCard from '../ExperienceCard'
import './Experience.css'
import Fade from 'react-reveal/Fade';

function Experience({ data }) {
    return (
        <div className="experience" id="experience">
            <div className="row">
            <Fade right><h1 className="section_header">Experience</h1></Fade>
            <Fade bottom>
                <div className="experience__content">
                    <ExperienceCard study items={data.education} />
                    <ExperienceCard work items={data.work} />
                </div>
            </Fade> 
            </div>
        </div>
    )
}

export default Experience
