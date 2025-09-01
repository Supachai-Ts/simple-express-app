pipeline {
    agent any

    tools {
        nodejs 'node18'   // NodeJS tool ที่ config ไว้ใน Global Tool Configuration
    }

    environment {
        SONARQUBE = credentials('sonar-token') // ชื่อ Credential ของ Jenkins ที่เก็บ Token ของ SonarQube
    }

    stages {
        stage('Checkout') {
            steps {
                // ใช้ branch main ของ repo จริงของคุณ
                git branch: 'main', url: 'https://github.com/Supachai-Ts/simple-express-app.git'
            }
        }

        stage('Build') {
            steps {
                sh 'node -v'
                sh 'npm install'
            }
        }

        stage('SonarQube Scan') {
            steps {
                withSonarQubeEnv('Demo') {   // SonarQube installation ที่คุณตั้งชื่อไว้ว่า Demo
                    sh '''
                        npx sonar-scanner \
                          -Dsonar.projectKey=Demo \
                          -Dsonar.login=$SONARQUBE
                    '''
                }
            }
        }

        stage('Quality Gate') {
            steps {
                timeout(time: 1, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
    }
}
