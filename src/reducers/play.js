const play = (state = null, action) => {
    let timeout = 1000;
    if (window.pageYOffset === 0) timeout = 0;

    switch(action.type) {
        case "PLAY":
            return setTimeout(() => {
                action.payload.play()
            }, timeout)

        default:
            return state
    }
}
export default play;