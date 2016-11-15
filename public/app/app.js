/**
 * Created by anderslutz on 2016-11-15.
 */
import {keyValue} from "./modules/external.js";

console.log(keyValue);

let str = `
    <p>Finally I have my environment for ES6 and modules set up in the browser.</p>
    <p>For the moment I'm forced to use Traceur and System.js but I'm looking forward
    to full implementation of ES6 in modern browsers.</p>
    <i>/Luz</i>
`;

document.getElementById("content").innerHTML = str;