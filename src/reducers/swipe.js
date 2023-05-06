const Swipe = (state = false, action) => {
    switch(action.type) {
        case "SWIPE":
            return !state

        default:
            return state
    }
}

export default Swipe;