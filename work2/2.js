function typeYear(year) {
    return ((year % 4 == 0) && ((year % 100 != 0) || (year % 400 == 0))) ? true : false;
}

function Calendar(year, month, divId) {
	var month = month - 1;
    var days = 0;
    var date = new Date(year, month, 1);
    var day = date.getDay();
    switch(month) {
        case 1: {
            days = (typeYear(year)) ? 29 : 28;
            break;
        } 
        case 0: {}
        case 2: {}
        case 4: {}
        case 6: {}
        case 7: {}
        case 9: {}
        case 11: {
            days = 31;
            break;
        }
        default: {
            days = 30;
        }
    }
    var dayWeek = "<table border=1><tr><th>ПН</th><th>ВТ</th><th>СР</th><th>ЧТ</th><th>ПТ</th><th>СБ</th><th>ВС</th></tr><tr>";
    for(var i = 1; i <= (day + 6) % 7; i++) {
        dayWeek += "<td>&nbsp;</td>";
    }
    for(var i = 1; i <= days; i++) {
        if(day == 1) dayWeek += "</tr><tr>";
        dayWeek += "<td>" + i + "</td>";
        day = (day + 1) % 7;
    }
    if(day != 1) {
        for(var i = (day + 6) % 7; i < 7; i++) {
            dayWeek += "<td>&nbsp;</td>";
        }
    }
    dayWeek += "</tr></table>";
    document.getElementById(divId).innerHTML += dayWeek;
}
Calendar(2018, 4, "breadcrumb");