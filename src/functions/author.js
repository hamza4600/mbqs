export function hamza(n, e) {
    var r = [["#FFDA7A", "#FF6969"], ["#F29FFF", "#7C99FF"], ["#6491D6", "#43F0C7"]]
        , t = function () {
            return r[Math.floor(Math.random() * r.length)]
        }
        , o = function (n) {
            return "linear-gradient(90deg, ".concat(n[0], " 0%, ").concat(n[1], " 100%)")
        }
        , c = function (n) {
            return "background: ".concat(o(n), ";")
        };
    [].slice.call(document.querySelectorAll(".gg-symbol--gradient")).forEach((function (n) {
        n.style.background = o(t())
    }
    ));
    var u = "font-size: 10px; ";
    console.log(["", "%c              %c %c      ", "%c                  ", "%c    Hamza Khan ", "%c     hkhantanoli@gmail.com", "         ", "%c      %c %c             ", ""].join("\n"), u + c(t()), u + "background: none;", u + "background: #888;", u + c(t()), "color: #555; font-size: 25px;", u + c(t()), u + "background: #888;", u + "background: none;", u + c(t()))
}

