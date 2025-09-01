pipeline {
    agent any

 tools {
        nodejs 'node18'  // <-- Use the exact name from Global Tool Configuration
    }


    stages {
        stage('Checkout') {
            steps {
                git branch: 'feature/lab', url: 'https://github.com/Supachai-Ts/simple-express-app.git'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('SonarQube Scan') {
            steps {
                withSonarQubeEnv('Demo') {
                    sh 'npx sonar-scanner -Dsonar.projectKey=Demo'
                }
            }
        }

        stage('Quality Gate') {
            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
    }
}
