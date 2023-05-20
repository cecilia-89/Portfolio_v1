const animate = (state = false, action) => {
    switch(action.type) {
        case "ANIMATE":
            return !state

        default:
            return state
    }
}

export default animate;