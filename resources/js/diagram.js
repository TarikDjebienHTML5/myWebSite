/*
 * My Web Site Javascript function linked to https://bramp.github.io/js-sequence-diagrams/
 */
$(document).ready(function() {
	var education = "Title: Technical Architecture - Draft\n"
	+"participant Tarik DJEBIEN\n"
    +"participant IntelliJ\n"
    +"participant Github\n"
    +"participant Jenkins\n"
    +"participant AWS S3\n"
    +"participant AWS Route53\n"
    +"participant DNS\n"
    +"participant Visitor\n"
    +"Note over Tarik DJEBIEN,Jenkins : DEV\n"
    +"Note over Jenkins,DNS : OPS\n"
    +"Note over Tarik DJEBIEN,DNS : Continuous Integration, Delivery and Deployment\n"
    +"Tarik DJEBIEN->IntelliJ: New Feature\n"
    +"IntelliJ->Github: commit and push\n"
    +"Github->Jenkins: webhook pipeline\n"
    +"Jenkins-->Github: SCM\n"
    +"Jenkins->AWS S3: Build,Deploy\n"
    +"AWS Route53->AWS S3: Redirect\n"
    +"DNS->AWS Route53: Production\n"
    +"Visitor->DNS: HTTP\n"
    +"Visitor-->>Tarik DJEBIEN: Continuous Feedbacks\n"
	var diagram = Diagram.parse(education);
	diagram.drawSVG("diagram", {theme: 'hand'});
});