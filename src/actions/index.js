export const swipe = () => {
    return {
        type: 'SWIPE'
    }
}

export const play = () => {
    const audio = new Audio('mixkit-paper-slide-1530.wav')
    audio.volume = 0.3

    return {
        type: 'PLAY',
        payload: audio
    }
}

export const animate = () => {
    return {
        type: 'ANIMATE'
    }
}