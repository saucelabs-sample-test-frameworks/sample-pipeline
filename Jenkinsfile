pipeline {
    agent any

    stages {
    	stage('Build Angular App'){
            steps {
	        sh "npm install"
	    }
	}
        stage('Run Static Code Analysis') {
            steps {
                sh './node_modules/jshint/bin/jshint app/ --exclude app/bower_components'
            }
        }
        stage('Run Unit Tests') {
            steps {
                echo "run unit tests"
            }
        }
        stage('Deploy Application') {
            steps {
            	sh 'npm run'
            }
        }
        stage('Run Functional Tests') {
            steps {
                sh 'npm run protractor'
            }
        }
    }
}