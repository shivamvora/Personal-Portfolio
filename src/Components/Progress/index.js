import { useEffect, useState } from "react";
import './Progress.css'

function Progress({done}) {
    const [style, setStyle] = useState({});

	useEffect(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		setStyle(newStyle);
	}, [done])
	
	return (
		<div className="progress">
			<div className="progress-done" style={style}>
				{done}%
			</div>
		</div>
	)
}

export default Progress
