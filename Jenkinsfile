node("master"){

    stage('SCM') {
        checkout scm
    }

    stage('Deploy'){
        s3Upload("tarikdjebien.com")
    }
}