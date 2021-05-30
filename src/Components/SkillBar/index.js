import { useEffect, useState } from 'react'
import Progress from '../Progress'
import './SkillBar.css'

function SkillBar({ skill }) {
    const [done, setDone] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            if(skill.level > done) setDone(done + 1)
        }, 20)
    }, [done, skill.level])

    return (
        <div className="skillBar">
            <span className="skillBar__name">{skill.name}</span>
            <Progress done={done} />
        </div>
    )
}

export default SkillBar;
