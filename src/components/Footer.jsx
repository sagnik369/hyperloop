import React from "react";

function Footer(){
    let year = new Date().getFullYear();
    
    return (
        <div id="footer">
            Copyright @{ year }
        </div>
    );
}

export default Footer;