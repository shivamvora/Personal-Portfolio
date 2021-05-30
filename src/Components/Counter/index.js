import { useEffect, useState } from 'react'
import './Counter.css'
import Fade from 'react-reveal/Fade';

function Counter({ count, title, icon }) {
    const [counter, setCounter] = useState(0)

    const icons = {
        fire: {
            icon: 'flaticon-fire'
        },
        mug: {
            icon: 'flaticon-coffee-cup'
        },
        users: {
            icon: 'flaticon-user'
        },
        award: {
            icon: 'flaticon-medal'
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if(counter < count) setCounter(counter + 1)
        }, count > 1000 ? (count / 100000) * 2 : (count < 10 ? 600 : count))
        return () => clearInterval(interval)
    }, [counter, count])
    
    return (
        <Fade bottom>
            <div className="counter">
                <span className="counter__icon"><i class={icons[icon].icon}></i></span>
                <div className="counter__content">
                    <h3>{counter}</h3>
                    <p>{title}</p>
                </div>
            </div>
        </Fade>
    )
}

export default Counter
