console.log("login Connected");
// const uname = document.getElementById("user");
// const upass = document.getElementById("password");
let login = document.getElementById("loginBtn");
// console.log(uname, upass);

login.addEventListener("click", () => {
  // let username = name.value;
  const uname = document.getElementById("user").value;
  const upass = document.getElementById("password").value;
  if (uname == "root" && upass == "root") {
    localStorage.setItem("username", uname);
    window.location.href = "http://127.0.0.1:5500/index.html";
  } else {
    alert("Only root login");
    console.log("only root");
  }
});
