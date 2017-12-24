node("master"){

    stage('SCM') {
        checkout scm
    }

    stage('Deploy'){
        withAWS(credentials:'aws', endpointUrl: 'http://tarikdjebien.com.s3-website.eu-west-2.amazonaws.com', region: 'EU (London)') {

        }

    }
}