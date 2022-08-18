import React from "react";
import PropTypes from 'prop-types';

export default function Letter(props) {
    return (
        <div className={"letter "+props.correctness}>
            {props.letter}
        </div>
    )
}

Letter.propTypes = {
    letter: PropTypes.string,
    correctness: PropTypes.string
    //correctness should be either of these 3:
    // "incorrect" "correctLetter" "correct"
}