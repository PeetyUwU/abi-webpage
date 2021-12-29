const http = require("http")
const fs = require("fs")
const url = require("url")
const express = require("express")
const app = express()
const favicon = require("serve-favicon")
const path = require("path")
const crypto = require("crypto")
const requestIp = require("request-ip")



exports.zpracovaniPozadavku = async function (req, par, res) {
    if(req.url.startsWith("/lgi/login")) {
        let password = par.password;
        let user = par.user;
        let ip = requestIp.getClientIp(req);
        let LoginTime = Date.now();
        let pfp = req.pfp;
    }
}