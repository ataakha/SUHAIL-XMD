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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_36_10_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQyLFxuICAgICAgICA2MixcbiAgICAgICAgMjIzLFxuICAgICAgICAxODYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDU0LFxuICAgICAgICA4NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDkzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNixcbiAgICAgICAgMjcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjI5LFxuICAgICAgICA0MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTkxLFxuICAgICAgICA0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTcyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDUxLFxuICAgICAgICAxNixcbiAgICAgICAgNDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDk0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAzNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTgyLFxuICAgICAgICA5MyxcbiAgICAgICAgMixcbiAgICAgICAgMTIzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTkyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjU1LFxuICAgICAgICA0NCxcbiAgICAgICAgNzksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTMyLFxuICAgICAgICA4LFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDksXG4gICAgICAgIDQ0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDQsXG4gICAgICAgIDgwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjM5LFxuICAgICAgICA0MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDkwLFxuICAgICAgICA3MSxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICA4MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTksXG4gICAgICAgIDM1LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjUyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA3LFxuICAgICAgICA3NyxcbiAgICAgICAgMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM3LFxuICAgICAgICA3NyxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk1LFxuICAgICAgICA4OSxcbiAgICAgICAgODcsXG4gICAgICAgIDUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTkzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjAxLFxuICAgICAgICA1NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTYsXG4gICAgICAgIDMwLFxuICAgICAgICA1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjksXG4gICAgICAgIDk0LFxuICAgICAgICAyNDksXG4gICAgICAgIDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTkzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlZoSGFab0ZqL3JtQzM0eW4xVmpiRUx1WkdvNTV2WmxBcE85eEVyTG1iTDg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk9kMld4OXBEUWFtRjZiVllVNjJkbXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTBkMDA5NTgtNzM3My00Nzc5LTg3YzQtMDliMThiN2NjY2JiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYwLFxuICAgICAgMTUzLFxuICAgICAgMTc2LFxuICAgICAgMTE5LFxuICAgICAgNjUsXG4gICAgICAzMCxcbiAgICAgIDE5MyxcbiAgICAgIDIzNyxcbiAgICAgIDE3NCxcbiAgICAgIDE4MCxcbiAgICAgIDIwMCxcbiAgICAgIDIzNyxcbiAgICAgIDI1MyxcbiAgICAgIDE4NixcbiAgICAgIDU4LFxuICAgICAgMjIwLFxuICAgICAgMTI4LFxuICAgICAgMjEwLFxuICAgICAgMjQsXG4gICAgICA4NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDcsXG4gICAgICAyMjUsXG4gICAgICAyMDIsXG4gICAgICAxNDksXG4gICAgICA0NCxcbiAgICAgIDM2LFxuICAgICAgMjEsXG4gICAgICAxMTgsXG4gICAgICAyMjMsXG4gICAgICAxNDQsXG4gICAgICAyNDQsXG4gICAgICAxMTYsXG4gICAgICA3MyxcbiAgICAgIDIzOSxcbiAgICAgIDkzLFxuICAgICAgMTM1LFxuICAgICAgMTg5LFxuICAgICAgMTIwLFxuICAgICAgMTUzLFxuICAgICAgMTE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkRZRkwzMVgzXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzNDY2OTAyMzk6ODFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJtdXNrYW5cIixcbiAgICBcImxpZFwiOiBcIjI2MzQ4ODA3MzEyMTkxMDo4MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKR1ZoNW9ERUlpRGpia0dHQWtnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkYwZ2dZdndqeGprUFBLWWtGd3JNek9pR243M2VMZ0pHNm5uYzJGVnZzSFk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMGVZMW43N3dZTUZib0NJM1ZIUmhpbjZmMWp0eXIwRkhVSGRmZ0ZkaVZGdXkzNmlNVmZFL0ZSYUxWTElNNDZycVhuL250Mm5OcU43Nkw4c3NxTjQ2QWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQ1pTM28wZXJyZnp0SGlza1dHbU8xK1IwYnVZWWEzWmR4Z1ljbmd6bC9NRlVSZDhMY1d6K2dWNU1YRDdjL2xQU3VkeCtTUFhzTENrR3dXWENLbmRKQUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzQ2NjkwMjM5OjgxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzAzNjM3ODdcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
