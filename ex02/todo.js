let     i;
let     parent_div;

i = 0;
parent_div = document.getElementById("ft_list");

const add_new = () => {
    let newText = prompt("new TO DO: ");
    setElem(newText, -1);
}

setElem = (newText, idFromCookies) => {
    let newElem = document.createElement("div");
    newElem.setAttribute("onclick", "removeElem(this)");
    newElem.setAttribute("id", idFromCookies === -1 ? i : idFromCookies);
    newElem.appendChild(document.createTextNode(newText));
    parent_div.insertBefore(newElem, parent_div.childNodes[0]);
    if (idFromCookies === -1)
    document.cookie = `${i}=${newText}`;
    i += 1;
}

const deleteCookie = (cname) => {
    var d = new Date();
    d.setTime(d.getTime() - (1000*60*60*24));
    var expires = "expires=" + d.toGMTString();
    window.document.cookie = cname+"="+"; "+expires;
}

const removeElem = (w) => {
    if (confirm("Confirm removing TO DO")) {
        let id = w.getAttribute("id");
        w.parentNode.removeChild(w);
        deleteCookie(id);
    }
}

const cookStr = document.cookie;
const cookArr = cookStr.split('; ');
const mapCook = (q) => {
    const ck = q.split('=');
    if (ck[1]) {
        setElem(ck[1], ck[0]);
        if (Number(ck[0]) > i)
            i = Number(ck[0]) + 1;
    }
}
const cookObj = cookArr.map(mapCook);
