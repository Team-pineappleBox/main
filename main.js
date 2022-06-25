let c = "";
function checkcode(){
    c = GetURLParameter("code")
    console.log(c)
    postdata()
}
function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}
function postdata()
{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://github.com/login/oauth/access_token?client_id=09dc826756f2ba7b2bdb&client_secret=" + process.env.client_secret + "&code=" + c);

    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Access-Control-Allow-Origin", "application/json")
    xhr.onload = () => console.log(xhr.responseText);

    let data = `{
    "client_id": "09dc826756f2ba7b2bdb",
    "client_secret": "d1eccc5528496dc5a946c4e84492718323314bc9",
    "code": ` + c + `,
    }`;

    xhr.send(data);
}