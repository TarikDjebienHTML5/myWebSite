/*
 * My Web Site Javascript function linked to https://bramp.github.io/js-sequence-diagrams/
 */
$(document).ready(function() {
	var education = "Title: Technical Architecture - My Web Site - Draft\n"
	+"participant Tarik DJEBIEN\n"
    +"participant IntelliJ\n"
    +"participant Github\n"
    +"participant Jenkins\n"
    +"participant AWS S3\n"
    +"participant AWS Route53\n"
    +"participant www.tarikdjebien.com\n"
    +"participant Visitor\n"
    +"Note over Tarik DJEBIEN,Jenkins : DEV\n"
    +"Note over Jenkins,www.tarikdjebien.com : OPS\n"
    +"Note over Github,www.tarikdjebien.com : Continuous Integration, Delivery and Deployment\n"
    +"Tarik DJEBIEN->IntelliJ: New Feature\n"
    +"IntelliJ->Github: commit and push\n"
    +"Github->Jenkins: webhook pipeline\n"
    +"Jenkins-->Github: Checkout SCM\n"
    +"Jenkins->AWS S3: Build & Deploy\n"
    +"Jenkins-->Github: Notify Build status\n"
    +"AWS Route53->AWS S3: Redirect\n"
    +"www.tarikdjebien.com->AWS Route53: UDP/TCP\n"
    +"Visitor->www.tarikdjebien.com: HTTP\n"
    +"Visitor-->>Tarik DJEBIEN: Continuous Feedbacks\n"
	var diagram = Diagram.parse(education);
	diagram.drawSVG("diagram", {theme: 'hand'});
});