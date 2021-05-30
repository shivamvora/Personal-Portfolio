import ExpCardSingle from '../ExpCardSingle'
import './ExperienceCard.css'

function ExperienceCard({ work = false, study = false, items}) {
    return (
        <div className="experienceCard">
            {items && items.map(item => 
                <ExpCardSingle work={work} study={study} item={item} key={Math.random()}/>
            )} 
        </div>
    )
}

export default ExperienceCard
