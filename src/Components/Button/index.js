import './Button.css'

function Button({ title, onClick, link = '#', ...otherProps }) {
    return (
        <a className="appButton" onClick={onClick} href={link} {...otherProps}>
            {title}
        </a>
    )
}

export default Button
