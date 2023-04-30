document.addEventListener('DOMContentLoaded', function() {
    const str = document.getElementById("str");
    const con = document.getElementById("con");
    const dex = document.getElementById("dex");
    const siz = document.getElementById("siz");
    const int = document.getElementById("int");
    const pow = document.getElementById("pow");
    const cha = document.getElementById("cha");
    const hitPoints = document.getElementById("hitPoints");
    
    document.addEventListener("input", function() {
        const strValue = parseInt(str.value) || 0;
        const conValue = parseInt(con.value) || 0;
        const dexValue = parseInt(dex.value) || 0;
        const sizValue = parseInt(siz.value) || 0;
        const intValue = parseInt(int.value) || 0;
        const powValue = parseInt(pow.value) || 0;
        const chaValue = parseInt(cha.value) || 0;
        hitPoints.textContent = strValue + sizValue;
        fatiguePoints.textContent = strValue + conValue;
        magicPoints.textContent = powValue;
        knowledge.textContent = intValue;
    });
});