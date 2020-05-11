/*const randomDamage = () => {
    return Math.floor(Math.random() * (10 - 1) + 1);
}

const chooseOption = (opt1, opt2) => {
    let randNum = Math.round(Math.random() * (1 - 0) + 0);
    return (randNum === 0 ? opt1 : opt2)
}

const attackPlayer = (health) => {
    let remainingHealth = health - randomDamage();
    return remainingHealth;
}

const logHealth = (player, health) => {
    console.log(`${player}'s health: ${health}`)
}

const logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser}`)
}

const isDead = (health) => {
    return (health <= 0 ? true : false)
}

function fight(player1, player2, player1Health, player2Health) {
    while (fight = true) {
    let attacker = chooseOption(player1, player2);
    if (attacker === player1) {
        player2Health = attackPlayer(player2Health);
        logHealth(player2, player2Health);
        if (isDead(player2Health) === true) {
            logDeath(player1, player2)
            break;
        }
    } else {
        player1Health = attackPlayer(player1Health);
        logHealth(player1, player1Health);
        if (isDead(player1Health) === true) {
            logDeath(player2, player1)
            break;
        }
    }
}
}

console.log(fight('Garrett', 'Player2', 100, 100));*/


/*function tower(n){
  for(let i = 1; i <= n ; i++){
   console.log('***');
  }
}

tower();*/

function mountain(n) {
    for(let i = 0; i <= n; i++) {
        let build = '*'.repeat(i + 1);
        console.log(build);
    }
}

mountain(3);