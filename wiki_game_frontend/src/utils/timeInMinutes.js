
/**
 * Converts time seconds time value into minutes and seconds with leading zeros
 * @param {*} time time value in seconds to be converted
 * @returns String of minutes and seconds e.g. '04:38'
 */
const timeInMinutes = (time) => {
    let mins = (Math.floor(time / 60)).toString().padStart(2, '0');
    let seconds = ((time % 60).toString().padStart(2, '0'));

    return `${mins}:${seconds}`
}

export default timeInMinutes;