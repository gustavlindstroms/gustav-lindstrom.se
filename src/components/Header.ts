import active from 'svelte-spa-router/active';

function downloadResume(data){
    var MIME_TYPE = "text/csv";

    var blob = new Blob([data], {type: MIME_TYPE});
    window.location.href = window.URL.createObjectURL(blob);
}

export const name = "";
const hej = "hejsan"
