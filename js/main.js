window.onload = () => {
    "use strict";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.redister("./sw.js")
    }
}