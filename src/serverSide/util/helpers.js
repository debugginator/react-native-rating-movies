/*************************************************************/
/************************** Functions ************************/
/*************************************************************/

function parseMovieInfoFromString(str) {
    if (!str) return '-';
    let info = str.match(": (.*)");
    return info ? info[1].trim() : '-';
}


/*************************************************************/
/************************** Exports **************************/
/*************************************************************/

module.exports = {
    parseMovieInfoFromString: parseMovieInfoFromString,
};