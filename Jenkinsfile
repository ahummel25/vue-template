pipeline {
  agent {
    docker {
      label 'swarm'
      image 'wwt/jenkins/nodejs:release'
    }
  }
  stages {
    stage('Install Dependencies') {
      steps {
        sh 'ci init'
        sh 'npm install'
      }
    }
    stage('Package') {
      steps {
        sh '''npm run build
mkdir -p $WORKSPACE/target
rm -f $WORKSPACE/target/*
cp cloudfoundry/manifest.yml dist
cp cloudfoundry/nginx.conf dist
cp cloudfoundry/Staticfile dist
cd $WORKSPACE/dist
zip -r $WORKSPACE/target/lab-services-ui.zip *'''
      }
    }
    stage('Test') {
      steps {
        parallel(
          "run lint": {
            sh 'npm run lint'
          },
          "run test": {
            sh 'npm test'
          }
        )
      }
    }
    stage('Publish') {
      when {
        branch 'master'
      }
      steps {
        withCredentials([usernamePassword(credentialsId: 'artifactory_deployer',
                   usernameVariable: 'ARTIFACTORY_USERNAME', passwordVariable: 'ARTIFACTORY_PASSWORD')]) {
          sh 'ci commit'
        }
      }
    }
    stage('Deploy') {
      when {
        branch 'master'
      }
      steps {
        milestone(10)
        lock(resource: "$JOB_NAME-deploy", inversePrecedence: true) {
          milestone(20)
          withCredentials([usernamePassword(credentialsId: 'scout_deployer',
                   usernameVariable: 'SCOUT_USERNAME', passwordVariable: 'SCOUT_PASSWORD')]) {
            sh 'ci deploy'
          }
        }
      }
    }
  }
  post {
    always {
      deleteDir()
    }
    failure {
      emailext (
        subject: '${DEFAULT_SUBJECT}',
        body: '${DEFAULT_CONTENT}',
        recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'CulpritsRecipientProvider'], [$class: 'RequesterRecipientProvider']]
      )
    }
  }
}

