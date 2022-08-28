
const qrc = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');

const client = new Client({clientId: 'project' });
client.initialize();

client.on('qr', (qr) => {
    // NOTE: This event will not be fired if a session is specified.
    qrc.generate(qr, {small: true});
});

client.on('authenticated', (sessions) => {
    console.log('AUTHENTICATED', sessions);
});

client.on('auth_failure', msg => {
    // Fired if session restore was unsuccessfull
    console.error('AUTHENTICATION FAILURE', msg);
});

client.on('ready', () => {
    console.log('READY');
});

client.on('message', async msg => {
    console.log('MESSAGE RECEIVED', msg);
});

client.on('message_create', (msg) => {
    // Fired on all message creations, including your own
    if (msg.fromMe) {
        console.log(msg)
    }
});