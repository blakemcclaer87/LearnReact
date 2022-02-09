import './Card.css';

const Card = (props) => {

    //ensures we add classes from chid components
    const classes = 'card ' + props.className;

    return<div className={classes}> { props.children }</div>
}

export default Card;