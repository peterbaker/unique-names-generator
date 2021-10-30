var fs = require('fs');
var firstNameArray = fs.readFileSync('firstnames-crypto-american.txt').toString().split("\n");
var lastNameArray = fs.readFileSync('lastname-meats.txt').toString().split("\n");

const firstNames = firstNameArray;
const lastNames = lastNameArray;

const { uniqueNamesGenerator, adjectives, names } = require('unique-names-generator');


const randomName = uniqueNamesGenerator({ dictionaries: [adjectives, names, lastNames] }); // big_red_donkey

var howMany = 6969;


var logger = fs.createWriteStream('names.txt', {
  flags: 'a' // 'a' means appending (old data will be preserved)
})


for (let i = 0; i < howMany; i++) {

  const shortName = uniqueNamesGenerator({
    dictionaries: [firstNames, lastNames], // colors can be omitted here as not used
    length: 2,
    separator: " "
  }); // big-donkey

  logger.write(shortName + "\n");

}


logger.end();
