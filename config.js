const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923346690239";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_45_11_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDU5LFxuICAgICAgICAxODUsXG4gICAgICAgIDQ4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTk4LFxuICAgICAgICA3LFxuICAgICAgICA4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0LFxuICAgICAgICAyNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDY4LFxuICAgICAgICAyLFxuICAgICAgICA5NSxcbiAgICAgICAgNjksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDg3LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDExLFxuICAgICAgICAyNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQxLFxuICAgICAgICA2MixcbiAgICAgICAgNDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI4LFxuICAgICAgICAxODEsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODIsXG4gICAgICAgIDM3LFxuICAgICAgICAwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDk4LFxuICAgICAgICA2MyxcbiAgICAgICAgODAsXG4gICAgICAgIDg1LFxuICAgICAgICAxODYsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgODIsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDUwLFxuICAgICAgICA0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzMsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTM0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDksXG4gICAgICAgIDU4LFxuICAgICAgICA4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjE0LFxuICAgICAgICA0NSxcbiAgICAgICAgNixcbiAgICAgICAgMjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjIyLFxuICAgICAgICA3NixcbiAgICAgICAgNDEsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5LFxuICAgICAgICA3OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwLFxuICAgICAgICAzNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMixcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTkyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODksXG4gICAgICAgIDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjksXG4gICAgICAgIDExNixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExNixcbiAgICAgICAgODYsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAzN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDk3LFxuICAgICAgICA5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODksXG4gICAgICAgIDE3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAzNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAzOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjksXG4gICAgICAgIDcxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNixcbiAgICAgICAgODIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTExLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUjhJc2FzOGRFam5sVkNOSlRDb0pkMWxlRlFJWllodjExNVE1WTRTZEdXOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVkZLQVN3dWFUTks4Q2FZQlFHdFYwd1wiLFxuICBcInBob25lSWRcIjogXCJiYTgxOTc0Ny1kNjQxLTRmMGQtODIxZC0xYjhiNzM5YWJlZDVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA3LFxuICAgICAgNTgsXG4gICAgICAwLFxuICAgICAgOTIsXG4gICAgICA1MCxcbiAgICAgIDE2NixcbiAgICAgIDE0OCxcbiAgICAgIDE1MyxcbiAgICAgIDIwOCxcbiAgICAgIDQsXG4gICAgICAzMSxcbiAgICAgIDI1LFxuICAgICAgNCxcbiAgICAgIDIxMCxcbiAgICAgIDgyLFxuICAgICAgMjE2LFxuICAgICAgMjA5LFxuICAgICAgNzIsXG4gICAgICAyMjUsXG4gICAgICAxOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTMsXG4gICAgICAxMzIsXG4gICAgICAyMDEsXG4gICAgICAwLFxuICAgICAgMTI3LFxuICAgICAgMTc4LFxuICAgICAgMTk0LFxuICAgICAgMjMzLFxuICAgICAgNixcbiAgICAgIDE5MixcbiAgICAgIDIzNSxcbiAgICAgIDMsXG4gICAgICAyOCxcbiAgICAgIDEzNyxcbiAgICAgIDI2LFxuICAgICAgMTEyLFxuICAgICAgMTAxLFxuICAgICAgMjQzLFxuICAgICAgMTU0LFxuICAgICAgMjUxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdXMzRMQjRBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzNDY2OTAyMzk6MzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNdXNrYW5cIixcbiAgICBcImxpZFwiOiBcIjI2MzQ4ODA3MzEyMTkxMDozOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKL3RuWjhFRU9TVXlMa0dHQk1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkNzTDBwY05OeFRtbjNNWkdtMDlEZEZUUnlSdlV0OEttNDBmZW4rSTQ2WGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRmkxSHZqa1FYbWJLVDUvcnBHdGVySXkrZVJYaWFKTk44azhTYWVvRGdRVnU0S1oxZXB1SjkwV2RMOVhlZVBXZFVrSGdYTzFsVVA4WGMwa29QeFZYQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRlQ5NnBEcEdXaTVESzNmODdjMUc5NlJ1NGRkWTR3RlQwOGF5c0JjeG5heTJudUhmS0NiNHJMTS85Tkh1bUpQUEpxZTl3aGcyWGlVc3IydDZ4UDM1aWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzQ2NjkwMjM5OjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzEzMzI3MTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBWGxcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFYbC5qc29uIjogIntcImtleURhdGFcIjpcInFWbGhLblgxekp4QXRqUnFmYmtEWndxT2hPZVpVcm9xME5nTWxDNWdaazQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTEzOTI0MjY1NSxcImN1cnJlbnRJbmRleFwiOjE0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDExLDEyLDE0XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "fe",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
