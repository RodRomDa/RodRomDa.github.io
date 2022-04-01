export function stringCut(str, num) {
    return str.length <= num ? str : str.slice(0, num) + '...';
}

Date.prototype.addDays = function(noOfDays){
    var tmpDate = new Date(this.valueOf());
    tmpDate.setDate(tmpDate.getDate() + noOfDays);
    return tmpDate;
}

Date.prototype.toDateFormat = function() {
    var tmpDate = new Date(this.valueOf());
    return `${String(tmpDate.getDate()).padStart(2, '0')}.${String(tmpDate.getMonth()+1).padStart(2, '0')}.${tmpDate.getFullYear()}`
}

Date.parseDate = function(str) {
    return new Date(Date.parse(str));
}