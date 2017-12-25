/*
 * My Web Site Javascript function
 */
$(document).ready(function() {
	clock.init();
	clock.start();
	$("#sendEmail").click(function(){
		$("#qrcodeImg img").remove();
		var subject = $("#qrcodeForm #subject").val();
		var body = $("#qrcodeForm #body").val();
		var message = "mailto:tarik.djebien@gmail.com?subject="+subject+"!&body="+body;
		$("#qrcodeImg").qrcode({
			render: 'image',
			text: message
		});
	});
});