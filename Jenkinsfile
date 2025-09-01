pipeline {
    agent {
        docker { image 'node:18' }
    }

    stages {
        stage('Build') {
            steps {
                // git 'https://github.com/Supachai-Ts/simple-express-app.git'
                sh 'node -v'
                sh "npm install"
            }
        }

        stage('Scan') {
            steps {
                withSonarQubeEnv(installationName: 'sq1') {
                    sh "npm install sonar-scanner"
                    sh 'npx sonar-scanner -X -X -Dsonar.projectKey=mywebapp'
                }
            }
        }
    }
}
