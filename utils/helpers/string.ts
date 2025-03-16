import {newLineRegexp, quoteRegex} from '../constants/regex';

export function quotingCsvString(string: string) {
    return string ? string.replace(quoteRegex, '""') : '';
}

export function removeNewLine(string: string, replaceString = ' ') {
    return string.replace(newLineRegexp, replaceString);
}

export function startsWithArray(str: string, strArr: string[]) {
    return strArr.some(subStr => str.toLowerCase().startsWith(subStr.toLowerCase()));
}
