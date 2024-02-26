const express = require("express");
//giong cau lenh import trong JS
const app = express();
const port = 3000;
app.set("views", "./views");
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index.pug", {
    title: "Trang chu",
    message: "Xin chao cac ban",
  });
});
// su dung routing co ban
app.get("/products", (req, res) => {
  res.send("<h1>Trang danh sach san pham</h1>");
});
app.get("/blog", (req, res) => {
  res.send("<h1>Trang danh sach bai viet</h1>");
});
app.get("/contact", (req, res) => {
  res.send("<h1>Trang lien he</h1>");
});
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
