const venom = require('venom-bot');

client.close().then((closed) => {

  try {
 
    venom
    .create({
      session: 'session-name', //name of session
      multidevice: true // for version not multidevice use false.(default: true)
    })
    .then((client) => start(client))
    .catch((erro) => {
      console.log(erro);
    });
  
  function start(client) {
    client.onMessage((message) => {
      if (message.body === 'te quierooo <3' && message.isGroupMsg === false) {
        client
          .sendText(message.from, 'yo tambien te quiero mi niña <33')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
      }
    });
  }

  process.on('SIGINT', function() {
      client.close();
    });

 } catch (error) {
    client.close();
 }

});

