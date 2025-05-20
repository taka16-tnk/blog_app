const express = require("express");
const path = require("path");

const app = express();
const posts = []; // 投稿の仮データ

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// トップページ表示
app.get("/", (req, res) => {
  res.render("index", { posts });
});

// 投稿フォーム
app.post("/post", (req, res) => {
  const { title, content } = req.body;

  if (title && content) {
    posts.push({
      id: Date.now().toString(),
      title,
      content
    });
  }

  res.redirect("/");
});

// サーバー起動
app.listen(3000, () => {
  console.log("http://localhost:3000 で起動中");
});