import './ExpCardSingle.css'
import Slide from 'react-reveal/Slide';

function ExpCardSingle({icon, item, work, study}) {
    const icons = {
        study: {
            icon: 'flaticon-book'
        },
        work: {
            icon: 'flaticon-suitcase'
        }
    }
        
    const selectIcon = () => {
        if(work) return icons.work.icon
        if(study) return icons.study.icon
    }

    return (
        <div className="experienceCard__single">
            <div className="experienceCard__single_icon">
                <i className={selectIcon()}></i>
            </div>
            <div className="experienceCard__single_content">
                {work && (
                    <Slide bottom cascade>
                        <span><b>{item.company}</b> - ({item.years})</span>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </Slide>
                )}
                {study && (
                    <Slide bottom cascade>
                        <span><b>{item.school}</b> - {item.graduated}</span>
                        <h3>{item.degree}</h3>
                        <p>{item.description}</p>
                    </Slide>
                )}
            </div>
        </div>
    )
}

export default ExpCardSingle
