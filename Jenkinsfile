node("master"){

    stage('SCM') {
        checkout scm
    }

    stage('Deploy'){
        withAWS("aws"){
            s3Upload("tarikdjebien.com")
        }
    }
}