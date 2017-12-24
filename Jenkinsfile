pipeline {
  agent any
  stages {
    stage('SCM') {
      steps {
        git(url: 'https://github.com/TarikDjebienHTML5/myWebSite.git', branch: 'master', changelog: true, credentialsId: 'TarikDjebien')
      }
    }
  }
}