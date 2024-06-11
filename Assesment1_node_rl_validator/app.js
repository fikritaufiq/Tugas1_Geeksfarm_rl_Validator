const readline = require('readline');
const validator = require('validator');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

  rl.question('Nama:', (nama) => {
    rl.question('Nomor Hp:', (nomor) => {
      if (!validator.isMobilePhone(nomor, 'id-ID')) {
        console.log('Nomor Hp tidak valid. Silakan coba lagi!');
        rl.close()
        return false;     
      } else {
        rl.question('email:', (email) => {
          if (!validator.isEmail(email)) {
            console.log('Email tidak valid. Silakan coba lagi!');
            rl.close()
            return false;     
          } else {
            console.log(
              `perkenalkan nama saya ${nama}, nomor hp saya adalah ${nomor}, dan email saya adalah ${email}`
            );
            rl.close()
            return true;
          }
        });
      } 
    });
  });

