const messages = ["Oscar", "Ana", "Nikolai", "Diego", "Laura", "Lautaro", "Nicolas", "Paola", "Mario", "Renata"];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = { randomMsg };