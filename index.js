const http = require("http")
const fs = require("fs")
const url = require("url")
const express = require("express")
const app = express()
const favicon = require("serve-favicon")
const path = require("path")
const crypto = require("crypto")
const requestIp = require("request-ip")
const zpracovaniUzivatele = require("./js/sluzbaU.js").zpracovaniPozadavku
const nameMcApi = require("./js/mcApi.js").zpracovaniPozadavku
require("dotenv").config();

console.log(process.env.HYPIXEL_KEY)

console.log("Server is ready")

function zpracovaniPozadavku(req, res) {
    console.log(req.url);

    if (req.method === "POST") {
        let data = "";
        req.on('data', function (kusDat) {
            data += kusDat;
        })
        req.on('end', function () {
            if (data) {
                let par = JSON.parse(data);
                console.log(par);
                console.log(data);
                if (req.url.startsWith("/lgi")) {
                    zpracovaniUzivatele(req, par, res)
                } else if (req.url.startsWith("/hypixel")) {
                    nameMcApi(req, par, res)
                } else { //not found
                    res.writeHead(404);
                    res.end();
                }
            } else {
                //TODO
            }
        })
    } else if (req.method == 'GET') {
        if (req.url == "/") {
            res.writeHead(200, {
                "Content-type": "text/html"
            })
            let s = fs.readFileSync("index.html").toString();
            res.end(s)
        } else if (req.url.endsWith("css")) {
            res.writeHead(200, {
                "Content-type": "text/css"
            })
            let s = fs.readFileSync("./css" + req.url).toString();
            res.end(s)
        } else if (req.url == "/script.js") {
            res.writeHead(200, {
                'Content-type': 'application/json'
            });
            s = fs.readFileSync("./js/script.js").toString();
            res.end(s);
        } else if (req.url == "/background.jpg") {
            res.writeHead(200, {
                "Content-type": "icon/png"
            })
            let s = fs.readFileSync("./img/background.jpg")
            res.end(s)
        } else if (req.url == "/favicon.ico") {
            res.writeHead(200, {
                "Content-type": "icon/png"
            })
            let s = fs.readFileSync("./background.jpg")
            res.end(s)
        } else if (req.url.startsWith("/hypixel/409")) {
            res.writeHead(200, {
                "Content-type": "text/html"
            })
            let s = fs.readFileSync("./html/409.html").toString();
            res.end(s)
        } else {
            res.writeHead(404)
        }
    }
}
let srv = http.createServer(zpracovaniPozadavku)
srv.listen(8080)