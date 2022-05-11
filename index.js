require('dotenv').config(); //Iniciar el paquete dotenv
const Discord=require('discord.js'); //importar la libreria discord.js
const client = new Discord.Client({
  intents: [ Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES ]
  }) //Crear el nuevo cliente

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
//asegurandonos de que esta sea la ultima linea
client.login(process.env.CLIENT_TOKEN); // el logueo del bot usando el token generado por discord


//client.on('message', msg => {
//  if (msg.content === 'ping') {
//    msg.reply('Pong!');
//  }
//});
