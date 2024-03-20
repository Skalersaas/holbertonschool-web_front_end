function createElement(data){
    let paragraph = document.createElement('P');
    paragraph.textContent = data;
    document.body.appendChild(paragraph);
}
function queryWikipedia(callback){
    const xhttp = new XMLHttpRequest();
    const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';

    xhttp.open("GET",url,true);
    xhttp.onload = function(){
        if(xhttp.status === 200)
        {
            const response = JSON.parse(xhttp.responseText);
            const pages = response.query.pages;
            const extract = pages[Object.keys(pages)[0]].extract;
            callback(extract);
        }
    }
    xhttp.send();
}
queryWikipedia(createElement);