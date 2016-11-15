/**
 * Created by anderslutz on 2016-11-15.
 */
import {keyValue} from "./modules/external.js";

console.log(keyValue);

let staticintro = `
    <p>
        This is my experiment-site while trying to create a SPA using Node.js,
        Express.js, MongoDB and ES6. No frameworks, JQuery or Bootstrap ;-)</p>
    <p>
        It's just a hobby-project for my own learning.
        I will retire in a few month
        and don't need to earn any more money so productivity isn't important at all :-)
    </p>
    <p>
        I only test things in Google Chrome Version 54.0.2840.71 (64-bit) and
        node.js v6.7.0.
    </p>
    <p><a href="https://github.com/airman59/DIY" target="_blank">Project on GitHub</a>.</p>    
`;

let str = `
    <p>Finally I have my environment for ES6 and modules set up in the browser.</p>
    <p>For the moment I'm forced to use Traceur and System.js but I'm looking forward
    to full implementation of ES6 in modern browsers.</p>
    <i>/Luz</i>
`;

document.getElementById("staticintro").innerHTML = staticintro;
document.getElementById("content").innerHTML = str;