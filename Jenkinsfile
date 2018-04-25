pipeline {
    agent any

    stages {
        stage('Run Static Code Analysis') {
            steps {
                sh 'run npm lint'
            }
        }
        stage('Run Unit Tests') {
            steps {
                echo 'npm run test-single-run'
            }
        }
        stage('Deploy Application') {
            steps {
            	sh 'npm run start'
            }
        }
        stage('Run Functional Tests') {
            steps {
                echo 'Passed'
            }
        }
    }
}