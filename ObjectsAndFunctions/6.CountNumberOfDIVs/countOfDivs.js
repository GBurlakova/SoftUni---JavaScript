function getDocHTMLAsStr(){
    var html = document.documentElement.innerHTML.toLowerCase();
    return html;
};


function countDivs(html) {
    var divs = html.match(/<(\s*)div(.*?)(>*)/g);
    var output = divs.length;
    return output;
}

console.log(countDivs(getDocHTMLAsStr()));


