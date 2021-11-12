import React from "react";

function Footer(){
    let year = new Date().getFullYear();
    
    return (
        <div id="footer" className="footer">
             HyperLoop &copy; @{ year } <br />
             Terms of Service | Privacy Policy
        </div>
    );
}

export default Footer;