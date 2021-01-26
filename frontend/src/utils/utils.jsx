export const toTitleCase = (word) => {
	let firstChar = word.slice(0, 1),
		remainder = word.slice(1);

	return `${firstChar.toUpperCase()}${remainder.toLowerCase()}`;
};
