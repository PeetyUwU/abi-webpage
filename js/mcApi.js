const http = require("http")
const https = require("https")
const fs = require("fs")
const url = require("url")
const express = require("express")
const app = express()
const favicon = require("serve-favicon")
const path = require("path")
const crypto = require("crypto")
const requestIp = require("request-ip")
const MojangAPI = require("mojang-api")
require('dotenv').config();

exports.zpracovaniPozadavku = async function (req, par, res) {
    if (req.url.startsWith("/hypixel/stats")) {
        let name = par.name
        let hypixelPlayer = `https://api.hypixel.net/player?key=${process.env.HYPIXEL_KEY}&name=` + name
        https.get(hypixelPlayer, (resp) => {
            let data = '';

            // A chunk of data has been received.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                let owo = JSON.parse(data);
                if(owo.success == true) {
                    res.writeHead(200, {
                'Content-type': 'application/json'
                });
                let o = {};
                o.stav = 'ok';
                o.hypixel = owo
                res.end(JSON.stringify(o));
                return
                }
                else {
                    res.writeHead(409, {
                        'Content-type': 'application/json'
                        });
                        let o = {};
                        o.stav = 'not ok';
                        o.err = owo.cause
                        res.end(JSON.stringify(o));
                        return
                }
                
            });

        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });
    }
}