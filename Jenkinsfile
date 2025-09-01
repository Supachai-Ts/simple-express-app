pipeline {
    agent any

    tools {
        nodejs 'node18'  // ต้องตรงกับ Global Tool Configuration
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Supachai-Ts/simple-express-app.git'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                // รัน Jest หรือ test framework ที่มี coverage
                sh 'npm test -- --coverage || true'
            }
        }

        stage('SonarQube Scan') {
            steps {
                withSonarQubeEnv('Demo') {
                    sh '''
                      npx sonar-scanner \
                        -Dsonar.projectKey=Demo \
                        -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info
                    '''
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
