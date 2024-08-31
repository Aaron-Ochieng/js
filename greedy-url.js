const valid_url = new RegExp(/\b(?:http|https)(:\)/)

function getURL(url){
    let res = []
    const urls = url.split(/\s+/) 
    console.log(urls)
}


getURL("qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you")