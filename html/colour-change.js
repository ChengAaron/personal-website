var root = document.querySelector(":root");
let jsondata;

fetch('https://gist.githubusercontent.com/ChengAaron/b61c74930ae0cedb6b4cb83308ed6203/raw/abe0a2dbef90aefe9cda96d48f72500529e732ac/themes.json').then(function(response){
    return response.json();
}).then(function(obj) {
    jsondata = obj;
}).catch(function(error){
    console.log("error lmao");
    console.error()
});

function changeTheme(theme) {
    var element = document.getElementById("colour-changer");
    element.innerHTML = theme;
    root.style.setProperty('--mods', jsondata[theme].mods);
    root.style.setProperty('--modtext', jsondata[theme].modtext);
    root.style.setProperty('--alphas', jsondata[theme].alphas);
    root.style.setProperty('--alphatext', jsondata[theme].alphatext);
    root.style.setProperty('--link1', jsondata[theme].link1);
    root.style.setProperty('--link2', jsondata[theme].link2);
    root.style.setProperty('--link3', jsondata[theme].link3);
    root.style.setProperty('--link4', jsondata[theme].link4);
}




