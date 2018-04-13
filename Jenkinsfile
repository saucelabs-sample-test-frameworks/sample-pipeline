pipeline {
    agent any

    stages {
        stage('Run Static Code Analysis') {
            steps {
                sh "apt-get install python3"
                sh "pip3 install -r requirements.txt"
                sh "flake8 ."
            }
        }
        stage('Run Unit Tests') {
            steps {
                sh "pytest test_unit.py"
            }
        }
        stage('Deploy Application') {
            steps {
            	echo 'TBD'
            }
        }
        stage('Run Functional Tests') {
            steps {
                sh "pytest test_functional.py"
            }
        }
    }
}