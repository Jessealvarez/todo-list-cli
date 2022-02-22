const prompt = require('prompt-sync');

let todos = [''];
const iscomplete = [true, false]

    while (todos.length <=10) {
            for (let i=0; i<=todos.length; i++){
                console.log(todos[i]);
            }
        console.log('Input [1] to add items to your list and [2] to check items off:');
        let choicex = Number(prompt())
                if (choicex === 1){
                    let itemx = prompt('Add item to your to-do list:')
                    todos = itemx 
                }
                if (choicex === 2){
                    console.log('You have: ' +todos.length + 'to-dos left.')
                        
                    
                    let checkoff = Number(prompt('Input [1] to mark as completed or [2] to mark as incomplete.'))

                        for (let i = 0; i < todos.length; i++) {
                         todos = todos[i];
                         isComplete = checkoff[i];
                        }


            }


       

    }
// Start off your project by creating a loop that loops forever (use a while loop). Inside this loop you'll want to do three things:
// 1. Display content to the user
// 2. Prompt the user for an action
// 3. Handle that action accordingly
