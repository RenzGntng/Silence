let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
	
let teks = ' '
const sections = [
   {
	title: `${htjava} OWNER –––––––––·•`,
	rows: [
	{title: "•~ Smileyヅ", rowId: ".owner2"},
	{title: "•~ KyamiCyx", rowId: ".owner3"},
	{title: "•~ Dzox", rowId: ".owner4"},
	]
    },{
	title: `${htjava} SUPPORT OWNER –––––––·•`,
	rows: [
	    {title: "• Donasi", rowId: ".donasi"},
	{title: "• Sewa BOT", rowId: ".sewa"},
	{title: "• Up Premium", rowId: ".premium"},
	]
  },{
	title: `${htjava} BACK TO–––––––·•`,
	rows: [
	    {title: "• Menu", rowId: ".menu"},
	{title: "• RPG", rowId: ".? rpg"},
	{title: "• Cek Profilmu", rowId: ".profile"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: wm,
  title: `━━━━━━▢ *OWNER* ▢━━━━━━\n\n*_Selengkapnya dari para Owner😁_*`,
  buttonText: "Click Here !",
  sections
}
    return await conn.sendMessage(m.chat, listMessage, { quoted: m, contextInfo: { mentionedJid: [m.sender] }})
}
handler.help = ['owner']
handler.tags = ['main', 'info']
handler.command = ['owner']

export default handler