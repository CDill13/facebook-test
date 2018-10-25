import React from 'react';

export default function FBLogin(){
    return(
            <div 
                className="fb-login-button" 
                data-max-rows="1" data-size="large" 
                data-button-type="continue_with" 
                data-show-faces="false" 
                data-auto-logout-link="false" 
                data-use-continue-as="true"
            ></div>
    )
}