node("master"){

    stage('SCM') {
        checkout scm
    }

    stage('Deploy'){
        withAWS(credentials:'aws'){
            s3Upload("tarikdjebien.com")
        }
    }
}