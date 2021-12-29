let hypixelData
let nameSearch

function onLoad() {

}
async function NameMc() {
    let name = document.getElementById("nameSearch").value
    let gameCh = document.getElementById("gameCh").value

    if (name == nameSearch && hypixelData) {
        if (gameCh == "Bedwars") {
            try {
                let bedwarsLevel = hypixelData.hypixel.player.achievements.bedwars_level;
                let bedwarsFinals = hypixelData.hypixel.player.stats.Bedwars.final_kills_bedwars;
                let bedwarsBeds = hypixelData.hypixel.player.stats.Bedwars.beds_broken_bedwars;
                let bedwarsCoins = hypixelData.hypixel.player.stats.Bedwars.coins;

                document.getElementById("hypixelStats").innerHTML = "Stats for " + "<b>" + name + "</b>" + "<br>" + "Bedwars level: " + bedwarsLevel + "<br>" + "Bedwars final kills: " + bedwarsFinals + "<br>" + "Bedwars beds broken: " + bedwarsBeds + "<br>" + "Bedwars coins: " + bedwarsCoins;
            } catch (e) {
                console.log(e)
            }
        }
        if (gameCh == "UHC") {
            try {
                let UHCwins = hypixelData.hypixel.player.stats.UHC.wins;
                let UHCkills = hypixelData.hypixel.player.stats.UHC.kills;
                let UHCcoins = hypixelData.hypixel.player.stats.UHC.coins

                document.getElementById("hypixelStats").innerHTML = "UHC wins: " + UHCwins + "<br>" + "UHC kills: " + UHCkills + "<br>" + "UHC coins: " + UHCcoins;
            } catch (e) {
                console.log(e)
            }
        } else if (gameCh == "Skywars") {
            let SkywarsWinsSolo = hypixelData.hypixel.player.achievements.skywars_wins_solo
            let SkywarsWinsTeam = hypixelData.hypixel.player.achievements.skywars_wins_team;
            let SkywarsKillsSolo = hypixelData.hypixel.player.achievements.skywars_kills_solo;
            let SkywarsKillsTeam = hypixelData.hypixel.player.achievements.skywars_kills_team;

            document.getElementById("hypixelStats").innerHTML = "Stats for " + "<b>" + name + "</b>" + "<br>" + "Skywars wins solo: " + SkywarsWinsSolo + "<br>" + "Skywars wins team: " + SkywarsWinsTeam + "<br>" + "Skywars kills solo: " + SkywarsKillsSolo + "<br>" + "Skywars kills team: " + SkywarsKillsTeam;
        }
        return
    } else {
        let url = location.href + "hypixel/stats"
        let body = {}
        body.name = name
        let response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(body)
        })
        hypixelData = await response.json()


        nameSearch = name;

        if (response.status == "409") {
            let hypixelStats = document.getElementById("hypixelStats").innerHTML
            let s = hypixelStats + "<br>" + hypixelData.err
            document.getElementById("hypixelStats").innerHTML = s
            return
        }



        if (gameCh == "Bedwars") {
            try {
                let bedwarsLevel = hypixelData.hypixel.player.achievements.bedwars_level;
                let bedwarsFinals = hypixelData.hypixel.player.stats.Bedwars.final_kills_bedwars;
                let bedwarsBeds = hypixelData.hypixel.player.stats.Bedwars.beds_broken_bedwars;
                let bedwarsCoins = hypixelData.hypixel.player.stats.Bedwars.coins;

                document.getElementById("hypixelStats").innerHTML = "Stats for " + "<b>" + name + "</b>" + "<br>" + "Bedwars level: " + bedwarsLevel + "<br>" + "Bedwars final kills: " + bedwarsFinals + "<br>" + "Bedwars beds broken: " + bedwarsBeds + "<br>" + "Bedwars coins: " + bedwarsCoins;
            } catch (e) {
                console.log(e)
            }
        }
        if (gameCh == "UHC") {
            try {
                let UHCwins = hypixelData.hypixel.player.stats.UHC.wins;
                let UHCkills = hypixelData.hypixel.player.stats.UHC.kills;
                let UHCcoins = hypixelData.hypixel.player.stats.UHC.coins

                document.getElementById("hypixelStats").innerHTML = "Stats for " + "<b>" + name + "</b>" + "<br>" + "UHC wins: " + UHCwins + "<br>" + "UHC kills: " + UHCkills + "<br>" + "UHC coins: " + UHCcoins;
            } catch (e) {
                console.log(e)
            }
        } else if (gameCh == "Skywars") {
            let SkywarsWinsSolo = hypixelData.hypixel.player.achievements.skywars_wins_solo;
            let SkywarsWinsTeam = hypixelData.hypixel.player.achievements.skywars_wins_team;
            let SkywarsKillsSolo = hypixelData.hypixel.player.achievements.skywars_kils_solo;
            let SkywarsKillsTeam = hypixelData.hypixel.player.achievements.skywars_kils_team;

            document.getElementById("hypixelStats").innerHTML = "Stats for " + "<b>" + name + "</b>" + "<br>" + "Skywars wins solo: " + SkywarsWinsSolo + "<br>" + "Skywars wins team: " + SkywarsWinsTeam + "<br>" + "Skywars kills solo: " + SkywarsKillsSolo + "<br>" + "Skywars kills team: " + SkywarsKillsTeam;
        }
    }



}