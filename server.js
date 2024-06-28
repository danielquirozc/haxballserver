const { OperationType, VariableType, ConnectionState, AllowFlags, Direction, CollisionFlags, CameraFollow, BackgroundType, GamePlayState, BanEntryType, Callback, Utils, Room, Replay, Query, Library, RoomConfig, Plugin, Renderer, Errors, Language, EventFactory, Impl } = require("node-haxball")();
const dotenv = require("dotenv");

dotenv.config();

Room.create({
  name: "AmChiwa Server MIAMI", 
  showInRoomList: true, 
  maxPlayerCount: 8,
  token: process.env.HAXBALL_TOKEN,
  geo: {"lat":18.9133,"lon":-70.7498,"code":"do"}
}, {
  storage: {
    player_name: "ChiwaBOT",
    avatar: "👽"
  }, 
  onSuccess: (room)=>{
    room.sendChat("Hello " + room.name);
    room.onAfterRoomLink = (roomLink)=>{
      console.log("room link:", roomLink);
    };
    room.onAfterPlayerJoin = (player) => {
      setTimeout(() => {
        room.sendChat(`¡Bienvenido ${player.name}!`);
      }, 1000)
      if (player.name === "𝘼𝙢𝘾𝙝𝙞𝙬𝙖") {
        player.isAdmin = true;
      }
    };
  },
});
