import React from 'react';
// import {fadeIn, bounce} from 'react-animations';
import {Spring} from 'react-spring/renderprops'



function ResponsiveSVGtest1(){
    return(
        <Spring
            from={{opacity: 0, marginTop: -500, }}
            to={{opacity: 1, marginTop: 0,}}

        >
            {props => (
                <div style={props}>
                    <div style={c1Style}>
                        <h2>Target 1</h2>
                        <p>Consectetur pariatur do sunt ullamco eu eu irure ipsum. 
                            Consectetur commodo do velit pariatur exercitation est ad quis magna tempor. 
                            Consectetur ad ipsum consequat enim dolor dolore enim. 
                            Laboris in commodo veniam duis mollit qui adipisicing.
                        </p>
                    </div>
                </div>
            )}
        </Spring>
    );
}
const c1Style = {
    background : "tomato",
    color: "white",
    padding : "1.5em"

}
export default ResponsiveSVGtest1;