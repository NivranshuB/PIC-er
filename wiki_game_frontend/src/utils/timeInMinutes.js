
const timeInMinutes = (time) => {
    let mins = (Math.floor(time / 60)).toString().padStart(2, '0');
    let seconds = ((time % 60).toString().padStart(2, '0'));

    return `${mins}:${seconds}`
}

export default timeInMinutes;