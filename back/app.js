const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const TodoDatabase = require("./src/TodoDatabase");
var cors = require("cors");
const nodemailer = require("nodemailer");

app.use(cors());

app.use("/test/main.js", express.static(__dirname + "/test/main.js"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3006, () => {
  console.log("App listening on port 3006!");
});

const db = new TodoDatabase("todoapp");

app.get("/test", (req, res) => {
  res.sendFile(__dirname + "/test/main.html");
});

app.get("/todoapp", (req, res) => {
  const result = { success: true, data: db.getData() };
  res.json(result);
});

app.post("/login", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
  const { user_login, user_password } = req.body;

  if (user_login === "demo123" && user_password === "112") {
    return res.json({
      head: {
        success: true,
        message: "Данные извлечены",
        code: "200",
        isAuth: true,
        date: "22.05.2019 15:55"
      },
      body: {
        token: "a6c30296007ba5e7f575a2553549f253a64f83f2951f648c50cc428ef0cb6a3f",
      },
      html: null,
      statistics: {
        time: 0.106,
        memory: 0.237
      }
    });
  } else {
    return res.json({
      head: {
        success: false,
        message: "Логин или Пароль указан не верно!",
        code: "200",
        date: "13.05.2019 16:09"
      }
    });
  }
});

app.post("/dashboard", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
  const { token } = req.body;

  if (token) {
    return res.json({
      head: {
        success: true,
        message: "Данные извлечены",
        code: "200",
        date: "27.05.2019 17:50"
      },
      body: {

      },
      html: null,
      statistics: {
        time: 0.03,
        memory: 0.314
      }
    });
  }
});

app.post("/logout", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");

  return res.json({
    head: {
      success: true,
      message: "success",
      code: "100",
      isAuth: false,
      date: "13.05.2019 16:09"
    },
    body: {
      token: ""
    },
    html: [],
    statistics: {
      time: 0.073,
      memory: 0.218
    }
  });
});
