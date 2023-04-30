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
    hitPoints.textContent = strValue + conValue;
  });
});