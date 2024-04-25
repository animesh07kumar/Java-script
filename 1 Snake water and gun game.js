let max = 4
let min = 1
let com_win_count = 0;
let player_win_count = 0;
let tie = 0;
let ask = true;
while(ask){
    let inputed = prompt("Enter your choice among Snake, Water and Gun ")
    let random_number = Math.floor(Math.random() * (max - min) + min)
random_number = Number.parseInt(random_number)
console.log(random_number)
let com = ""
switch(random_number){
    case 1:
        com = "Snake"
        break;
    case 2:
        com = "Water"
        break;
    case 3:
        com = "Gun"
        break;
    }
    if(com === "Snake" && inputed === "Water"){
        com_win_count++;
      }
    else if(com === "Snake" && inputed === "Gun"){
        player_win_count++;
      }
    else if(com === "Water" && inputed === "Snake"){
        player_win_count++;
      }
    else if(com === "Water" && inputed === "Gun"){
        com_win_count++;
      }
    else if(com === "Gun" && inputed === "Snake"){
        com_win_count++;
      }
    else if(com === "Gun" && inputed === "Water"){
        player_win_count++;
      }
    else{
        tie++;
      }
    alert(`Computer Choice is ${com}`)
    ask = confirm(`Current Soure Computer Wins ${com_win_count}, Player Wins ${player_win_count} and tie Count ${tie}. do you Want to play again`)
  }
  if(com_win_count > player_win_count){
    alert(`Computer is winner, Well Played try next time.`)
    alert(`Final Soure Computer Wins ${com_win_count}, Player Wins ${player_win_count} and tie ${tie}.`)
  }
  else if(com_win_count < player_win_count){
    alert(`Congratulations! You are winner, Well Played, Win again.`)
    alert(`Final Soure Computer Wins ${com_win_count}, Player Wins ${player_win_count} and tie ${tie}.`)
  }
  else{
    alert(`Nail biting match loved to play again with you.`)
    alert(`Final Soure Computer Wins ${com_win_count}, Player Wins ${player_win_count} and tie ${tie}.`)
  }
