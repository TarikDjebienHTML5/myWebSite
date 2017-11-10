/**
 * Clock JS NameSpace
 * Author : Djebien tarik
 * version : 01/08/2013
 */
var clock = {
		
		currentYear : new Date().getFullYear(),
		
		init : function() {
			$("#currentTime").toggle(700);
			$("#currentYear").html(this.currentYear);
		},
		
		// Create a calendar
		refresh : function() {
			var objToday = new Date(),
			weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			dayOfWeek = weekday[objToday.getDay()],
			domEnder = ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'],
			dayOfMonth = today + (objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder[objToday.getDate()] : objToday.getDate() + domEnder[parseFloat(("" + objToday.getDate()).substr(("" + objToday.getDate()).length - 1))],
					months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
					curMonth = months[objToday.getMonth()],
					curYear = objToday.getFullYear(),
					curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
							curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
									curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
											curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
											var today = curHour + ":" + curMinute + "." + curSeconds +" "+ curMeridiem + " " + dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;
											$('#currentTime').html(today);
		},
		
		// Start clock
		start : function() {
			setInterval(this.refresh,1000);
			$("#headerMenuClock").on("click",function () {
			    $("#currentTime").toggle(700);
			});
		}
		
};