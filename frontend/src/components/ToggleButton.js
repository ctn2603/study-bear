import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

let counter = 0;
const ToggleButton = (props) => {

    const [toggle, setToggle] = useState(false);
    const { defaultChecked, disabled, className } = props;
    
    

    useEffect(() => {
      if (defaultChecked) {
          setToggle(defaultChecked);
       }
    }, [defaultChecked]);

    function isOdd(num) { return num % 2;}

    const triggerToggle = () => {

        if ( disabled ) { return; }
        setToggle( !toggle )
      
        console.log("changed"); //keeping track of status (inperson/virtual)
        
        counter++;
        if (isOdd(counter)){
            console.log("virtual " + counter);
        } else {
            console.log("in-person " + counter);
        }
    }

    const toggleClasses = classNames('wrg-toggle', {
        'wrg-toggle--checked': toggle,
        'wrg-toggle--disabled': disabled
    }, className);

    return(
        <div onClick={triggerToggle} className={toggleClasses}>
            <div className="wrg-toggle-container">
                <div className="wrg-toggle-check">
                    <span>🧑‍💻</span>
                </div>
                <div className="wrg-toggle-uncheck">
                    <span>🧑‍🏫</span>
                </div>
            </div>
            <div className="wrg-toggle-circle"></div>
            <input className="wrg-toggle-input" type="checkbox" aria-label="Toggle Button" />
        </div>
    )
}

ToggleButton.propTypes = {
    disabled: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    className: PropTypes.string,
    onChange: PropTypes.func,
    icons: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            checked: PropTypes.node,
            unchecked: PropTypes.node
        })
    ])
};

export default ToggleButton;