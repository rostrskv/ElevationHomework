import "./node_modules/jquery/dist/jquery.js"
const NBA_URL = "http://gist.githubusercontent.com/jhonatan89/ff44eb9b61dcfdf337adeaa53f19fe4e/raw/170b47fc12d4816a5d0e0baa16ecff7f80b26faf/nba-players.json"
//"http://data.nba.net/10s/prod/v1/2016/players.json"
const clickme = $("#clickme").on("click", async function () {    
    $(this).css("backgroundColor", "#f39c12")
    const players = JSON.parse(await $.get(NBA_URL))
    console.log(players)
})