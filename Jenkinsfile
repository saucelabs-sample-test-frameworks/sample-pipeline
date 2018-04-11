pipeline {
    agent any

    stages {
        stage('Run Static Code Analysis') {
            steps {
                sh "node greeting.js"
            }
        }
        stage('Deploy Application') {
            steps {
            	echo 'Passed'
            }
        }
        stage('Run Functional Tests') {
            steps {
                echo 'Passed'
            }
        }
    }
}