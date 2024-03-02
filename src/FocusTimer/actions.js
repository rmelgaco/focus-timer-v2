import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning(){
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()
}

export function reset(){
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}

export function increaseMinutes(){
    if (state.isRunning){
        return
    }

    let minutes = Number(el.minutes.textContent)

    minutes = minutes + 5

    if(minutes > 60){
        return
    }

    timer.updateDisplay(minutes)
}

export function decreaseMinutes(){
    if (state.isRunning){
        return
    }

    let minutes = Number(el.minutes.textContent)

    minutes = minutes - 5

    if(minutes < 0){
        return
    }

    timer.updateDisplay(minutes)
}

export function toggleSelectedSound(selectedSound){

    pauseAllSounds()

    switch (selectedSound) {
        case 'forestSound':
           sounds.forestSound.play();
            break;
        case 'rainSound':
            sounds.rainSound.play();
            break;
        case 'marketSound':
            sounds.marketSound.play();
            break;
        case 'flameSound':
            sounds.flameSound.play();
            break
    }  

}


export function pauseAllSounds(){
    const bgSounds = [sounds.forestSound, sounds.rainSound, sounds.marketSound, sounds.flameSound]
    
    bgSounds.forEach(sound => {
        sound.pause()
    });
}

// export function toggleMusic(){
//     state.isMute = document.documentElement.classList.toggle('music-on')

//     if(state.isMute){
//         sounds.bgAudio.play()
//         return
//     }

//     sounds.bgAudio.pause()
// }