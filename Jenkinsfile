node("master"){

    properties([buildDiscarder(logRotator(numToKeepStr: '2'))])

    stage('SCM') {
        checkout scm
    }

    stage('Build') {
        //TODO Integrate build JS tool like Grunt or Gulp for minification and obfuscation of HTML5 resources
    }

    stage('Test') {
        //TODO Integrate Jasmine Unit Testing and Karma E2E Testing with AngularJS Protractor
    }

    stage('Deploy'){
        withAWS(credentials:'aws', endpointUrl: 'http://tarikdjebien.com.s3-website.eu-west-2.amazonaws.com', region: 'EU (London)') {
            //TODO https://github.com/jenkinsci/pipeline-aws-plugin
            s3Upload(file: 'README.md', bucket : 'tarikdjebien.com', path: '/test')
        }
    }
}