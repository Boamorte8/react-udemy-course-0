import React from 'react';
import styles from '../styles/custom.module.css';
import './Person.css';
// import Radium from 'radium';

const person = (props) => {
    // return <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };
    // <div className="Person" style={style}>
    return (
        <div className="Person" >
            <p className={styles.paragraph} onClick={props.click}>I'm { props.name } and I am { props.age } years old!</p>
            <p>{ props.children }</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default person;
// export default Radium(person);