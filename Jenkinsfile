pipeline {
    agent any

    stages {
        stage('Run Static Code Analysis') {
            steps {
                sh 'npm run lint'
            }
        }
        stage('Run Unit Tests') {
            steps {
                echo 'npm run test-single-run'
            }
        }
        stage('Deploy Application') {
            steps {
            	echo 'deploy app'
            }
        }
        stage('Run Functional Tests') {
            steps {
                sh './node_modules/protractor/bin/protractor e2e-tests/protractor.conf.js'
            }
        }
    }
}