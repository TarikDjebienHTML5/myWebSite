/*
 * My Web Site Javascript function
 */
$(document).ready(function() {
    $("#crisiscore").hide();
	$("#sendEmail").click(function(){
	    if($("#qrcodeForm #subject").val() && $("#qrcodeForm #body").val()){
	        $("#qrcodeImg img").remove();
            		var subject = $("#qrcodeForm #subject").val();
            		var body = $("#qrcodeForm #body").val();
            		var message = "mailto:tarik.djebien@gmail.com?subject="+subject+"!&body="+body;
            		$("#qrcodeImg").qrcode({
            			render: 'image',
            			text: message
            		});
            $("#crisiscore").show();
	    }
	});
});