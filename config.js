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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_01_10_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTkwLFxuICAgICAgICA3NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQxLFxuICAgICAgICA0LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjIsXG4gICAgICAgIDkyLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDksXG4gICAgICAgIDc4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDYsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1LFxuICAgICAgICA2NixcbiAgICAgICAgMjAzLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTUxLFxuICAgICAgICA4NixcbiAgICAgICAgNjAsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNCxcbiAgICAgICAgMTE5LFxuICAgICAgICA0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQzLFxuICAgICAgICA5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQsXG4gICAgICAgIDEzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjksXG4gICAgICAgIDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODUsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDksXG4gICAgICAgIDU3LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjExLFxuICAgICAgICA3LFxuICAgICAgICAyMDksXG4gICAgICAgIDQyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTMsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTAxLFxuICAgICAgICA4MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDU0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMixcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjAzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODIsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDY1LFxuICAgICAgICA5OCxcbiAgICAgICAgOSxcbiAgICAgICAgODAsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjMxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDc2LFxuICAgICAgICA0MSxcbiAgICAgICAgODAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjUxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzcsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNixcbiAgICAgICAgOTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIyLFxuICAgICAgICA5NSxcbiAgICAgICAgNDksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDM2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTM2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJiSmZvOVhNOHQ4UVFNSUF3OTBqeEJETU0xMk1mREJFN3dXazZBeUpkZ3BBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJLTmN1Z0EwQ1RVT0xGbFNpTXNUYURRXCIsXG4gIFwicGhvbmVJZFwiOiBcImUxODYzYjRjLTNhMTctNDJiZS1hYTVmLTQ2N2ZmYjUwM2U4YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NixcbiAgICAgIDc4LFxuICAgICAgMjQwLFxuICAgICAgMTgxLFxuICAgICAgMTU1LFxuICAgICAgMTA4LFxuICAgICAgMTEzLFxuICAgICAgMTc2LFxuICAgICAgMTI3LFxuICAgICAgOSxcbiAgICAgIDE1OSxcbiAgICAgIDE4MyxcbiAgICAgIDM3LFxuICAgICAgMjQsXG4gICAgICAxOCxcbiAgICAgIDEyNCxcbiAgICAgIDc0LFxuICAgICAgMTA3LFxuICAgICAgNTcsXG4gICAgICAxN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDEsXG4gICAgICAxNTEsXG4gICAgICA3NSxcbiAgICAgIDEyMCxcbiAgICAgIDIyMCxcbiAgICAgIDYyLFxuICAgICAgMTA4LFxuICAgICAgMTM2LFxuICAgICAgMTA0LFxuICAgICAgMjI1LFxuICAgICAgNjUsXG4gICAgICA1NyxcbiAgICAgIDE3MSxcbiAgICAgIDgxLFxuICAgICAgMjIwLFxuICAgICAgMTA0LFxuICAgICAgNzQsXG4gICAgICAyMjUsXG4gICAgICAxMTMsXG4gICAgICAxMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQzhXSDFHUkZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzM0NjY5MDIzOTo3NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIm11c2thblwiLFxuICAgIFwibGlkXCI6IFwiMjYzNDg4MDczMTIxOTEwOjc2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pHVmg1b0RFSm5taTdrR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRjBnZ1l2d2p4amtQUEtZa0Z3ck16T2lHbjczZUxnSkc2bm5jMkZWdnNIWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI3QUZSZzY1alNCWnVnVlFGSUlMckhlVjR0YXZtTzQ1VTFPamZCRGJKZDVHemdRL3pGYnFCNHJaSHI5YVFuVXdGYVlyYnpiOTlTajlEcWZpN3FOZThBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJKeTFBRGZMbGVyUHUvUkhnSzg2OWtxMDgwLzV1bXpZbFBKbXZ0R2UyMThUNkt3UGQ2ai9uVnFOK1FuUVdjeDVZMDhVTTdRdDhkcmJhYk04OXVZUU5BZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMzNDY2OTAyMzk6NzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDM0MzcwOVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
