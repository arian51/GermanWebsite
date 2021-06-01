function OccNumber(array) { // -- Returns Number Of Occurance Of each value in array
    let json = _.countBy(array);
    return json;
}

function findValue(json) { // -- Returns values of the Json
    let array = _.values(json);
    return array;
}

function findKey(array) {

	let data = [];
	_.uniq(_.map(data, 'usernames'))
    console.log(data)

}