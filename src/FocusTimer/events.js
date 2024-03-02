import state from "./state.js";
import * as actions from "./actions.js"
import * as el from './elements.js'
import { updateDisplay } from "./timer.js";

export function registerControls (){
    el.controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if (typeof actions[action] != "function"){
            return
        }

        actions[action]()
    })
} 


export function selectSound(){
    el.buttonsSounds.addEventListener('click', (event) => {
        if(event.target.classList.contains('sound-button')){
            
            const toggledButtons = document.querySelectorAll('.selected-button')
                    
            if(event.target.classList.contains('selected-button')){
                event.target.classList.remove('selected-button')
                actions.pauseAllSounds()
                return
            }
            
            toggledButtons.forEach(button => {
                button.classList.remove('selected-button')
            });

            event.target.classList.add('selected-button')
            
            actions.toggleSelectedSound(event.target.dataset.action)

        }
    })
}