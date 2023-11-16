module.exports = function (title,array){

    //trasformo argomento in stringa
    if(typeof title !== "string"){
        titleStr = title.toString()
    } else{
        titleStr = title
    }

    //trasformo in lowercase
    titleLowerCase = titleStr.toLowerCase()

    //sostituisco trattini agli spazi vuoti, elimino caratteri speciali e sostituisco accenti

    let toReturn = titleLowerCase.trim();

    slug = toReturn
      .split("").map((char) => {
        const invalidChars = "!\"£$%&_'/()=?^*§°ç@#[]{}|\\";
        const replaceMap = {
          à: "a",
          è: "e",
          é: "e",
          ì: "i",
          ò: "o",
          ù: "u",
        };
        if (char === " ") {
          return "-";
        }
        if (invalidChars.includes(char)) {
          return "";
        }
        if (replaceMap.hasOwnProperty(char)) {
          return replaceMap[char];
        }
        return char;
      })
      .join("")


       //aggiungo numero se slug già presente in un db

       let counter = 1
       let slugToCheck = slug

       while (array.find((elem) => elem.slug === slugToCheck)) {
        slugToCheck = `${this.slug}${this.counter}` ;
        
         counter += 1;
       }


       return slugToCheck

}




