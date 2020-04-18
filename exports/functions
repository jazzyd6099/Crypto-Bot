function Funcs(message) {

  this.send = (textToSend, x, timeToDelete) => {
    message.channel.send(`**__${textToSend}__**`).then(m => {
      if (x === true) {
        m.react("❌");
      } else if (x === false) {
        m.react("✅");
      } else {
        
      }
      if (timeToDelete >= 1) {
        m.delete(timeToDelete);
      }
    });
  };
  
  }

module.exports = Funcs;
