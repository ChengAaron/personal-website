var root = document.querySelector(":root");
let jsondata;

fetch('https://gist.githubusercontent.com/ChengAaron/b61c74930ae0cedb6b4cb83308ed6203/raw/376818beccbb4a0c38d2262a34483a565d99063f/themes.json').then(function(response){
    return response.json();
}).then(function(obj) {
    jsondata = obj;
}).catch(function(error){
    console.log("error lmao");
    console.error()
});

function changeTheme() {
    var theme = prompt("wut dis? ")
    root.style.setProperty('--mods', jsondata[theme].mods);
    root.style.setProperty('--modtext', jsondata[theme].modtext);
    root.style.setProperty('--alphas', jsondata[theme].alphas);
    root.style.setProperty('--alphatext', jsondata[theme].alphatext);
    root.style.setProperty('--link1', jsondata[theme].link1);
    root.style.setProperty('--link2', jsondata[theme].link2);
    root.style.setProperty('--link3', jsondata[theme].link3);
    root.style.setProperty('--link4', jsondata[theme].link4);
}
