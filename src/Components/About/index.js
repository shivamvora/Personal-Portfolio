import Button from '../Button';
import Counter from '../Counter';
import SkillBar from '../SkillBar';
import './About.css'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

function AboutNew({ data, skills, counter }) {

    return (
        <div className="aboutNew" id="about">
            <div className="row">
                <Fade right><h1 className="section_header">About me</h1></Fade>
                <div className="aboutNew__content">
                    <Zoom>
                        <div className="aboutNew__content_avatar">
                            <img loading="lazy" src={"images/" + data.image} alt="Avatar Placeholder" />
                        </div>
                    </Zoom>
                    <div className="aboutNew__content_details">
                        <div className="aboutNew__content_details_data">
                            <Fade cascade><p>{data.bio}</p></Fade>
                            <Fade bottom>
                                <Button title="Download Resume" link={data.resumedownload} />
                            </Fade>
                        </div>
                        <div className="aboutNew__content_details_skills">
                            {skills && skills.map(skill => (
                                <Fade bottom key={Math.random()}>
                                    <SkillBar key={Math.random()} skill={skill} />
                                </Fade>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="aboutNew__counter">
                    {counter && counter.map(item => (
                        <Counter key={Math.random()} title={item.title} count={item.count} icon={item.icon} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AboutNew
