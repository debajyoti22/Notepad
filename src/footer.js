import React from "react";
var f = new Date().getFullYear();
function Footer(){
    return <footer><p>
        Copyright © {f}
    </p></footer>
}

export default Footer;