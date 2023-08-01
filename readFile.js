const fs = require("fs");

const textFile = fs.createReadStream("data.txt");

const getWordCount = async (textFile) => {
  const promise = new Promise((resolve, reject) => {
    try {
      let wordCount = 0;
      let dataBuffer = "";

      textFile.on("data", (chunk) => {
        dataBuffer += chunk;
        const words = dataBuffer.split(/\s+/);
        wordCount = words.length - 1;
      });

      textFile.on("end", () => {
        resolve(wordCount);
      });

      textFile.on("error", (error) => {
        reject(error);
      });
    } catch (error) {
      reject(error);
    }
  });

  return promise;
};

getWordCount(textFile)
  .then((wordCount) => {
    console.log(wordCount);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
