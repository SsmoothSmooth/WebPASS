import React from 'react';

function Button(props) {
    // props => { className: "o que alguém passar" }
    return (
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    );
}

export default Button;