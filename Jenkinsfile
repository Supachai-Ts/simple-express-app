pipeline {
    agent any
    tools {
        nodejs 'node18'   // ต้องตรงกับชื่อที่ config ใน Global Tool Configuration
    }

    stages {
        stage('Build') {
            steps {
                sh 'node -v'
                sh 'npm install'
            }
        }

        stage('Scan') {
            steps {
                withSonarQubeEnv('Demo') {
                    sh 'npm install sonar-scanner'
                    sh 'npx sonar-scanner -Dsonar.projectKey=Demo'
                }
            }
        }
    }
}
