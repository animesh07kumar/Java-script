const joke_array = [`How do trees get on the Internet?

                   They log in.`,

                   `What do computers like to eat?

                   Chips.`,

                   `What do you call a space magician?

                   A flying saucerer.`,

                   `What is a computer’s first sign of old age?

                   Loss of memory.`,

                   `What does a baby computer call his father?

                   Instead of Da-da it says “Da-ta.”`,

                   `What is an astronaut’s favorite control on the computer keyboard?

                   The space bar.`,

                   `What happened when the computer fell on the floor?

                   It slipped a disk.`,

                   `How does a boy cell phone propose to his girlfriend?

                   He gives her a ring, of course.`,

                   `Why was there a bug in the computer?

                   It was looking for a byte to eat.`,

                   `What is a computer virus?

                   A terminal illness.`,

                   `How did the mouse get out of the Roman Cathedral?

                   He clicked on an icon and opened a window.`,

                   `What kind of doctor fixes broken websites?

                   A URLologist.`,

                   `Have you heard about the Disney virus?

                   It makes everything on your computer go Goofy.`,

                   `What happened when a dragon breathed on several Macintosh computers?

                   He wound up with baked Apples!`,

                   `Why did the chicken cross the Web?

                   To get to the other site.`,

                   `Why did the computer go to a doctor?

                   It thought it had a terminal illness`]

let JOKE_count = 0;
Array.from(joke_array).forEach(() =>{
  JOKE_count++;
})
let joke_count = 0;
let repet = true;
while(repet){
  
    if(a === "Yes"){
      max = JOKE_count
      min = 0
      let randVal = Math.floor(Math.random() *(max - min) + min)
      alert(`Your Joke is: \n ${joke_array[randVal]}`)
      joke_count++;
      joke_array.slice(randVal,1)
      repet = confirm(`Do you want you want joke again`)
    }
  else{
    repet = false;
  }
}
alert(`No of joke you heard ${joke_count} and you need to pay ₹${10*joke_count} amount to website`)
