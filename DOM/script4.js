function getAttributes() {
    const href = document.querySelector('a').href;
    const hreflang = document.querySelector('a').hreflang;
    const rel = document.querySelector('a').rel;
    const target = document.querySelector('a').target;
    const type = document.querySelector('a').type;


    console.log(href);
    console.log(hreflang);
    console.log(rel);
    console.log(target);
    console.log(type);
}