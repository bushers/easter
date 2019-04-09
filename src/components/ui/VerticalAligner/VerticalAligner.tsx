import * as React from 'react'; 

function VerticalAligner(props) {
    return (
        <div className="va-container">
            <div className="va-content">
                { props.children }
            </div>
        </div>
    )
}

export default VerticalAligner;