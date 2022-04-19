const startBattle = () => {
    const pruebaDiv$$ = document.createElement("div");
    const h1Player1$$ = document.createElement("h1");
    const h1Player2$$ = document.createElement("h1");
  
    pruebaDiv$$.appendChild(h1Player1$$);
    pruebaDiv$$.appendChild(h1Player2$$);
    divBattle$$.appendChild(pruebaDiv$$);
  
    for (let i = 0; i < arrayPlayers.length; i++) {
      console.log(arrayPlayers[i].name + " tiene estos dados: " + arrayPlayers[i].damage);  
      let totalScore = 0;
      for (let totalDamage of arrayPlayers[i].damage) {      
        let arrayDice = totalDamage.replace(/d/g, ",");
        arrayDice = JSON.parse("[" + arrayDice + "]");
        let numDados = arrayDice[0];
        let numCaras = arrayDice[1];
        let singleScore = 0;
        for (let i = 0; i < numDados; i++) {
          singleScore = numDados * Math.floor(Math.random() * (numCaras - 1) + 1);
        }
        totalScore = singleScore + totalScore;
        console.log(arrayPlayers[i].name, singleScore, "puntos de tirada de dado");
      }
      console.log(arrayPlayers[i].name, totalScore, "puntos totales");
      h1Player1$$.innerHTML = `${arrayPlayers[i].name} tiene ${totalScore} puntos totales`;
     
    }
  };