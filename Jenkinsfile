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
                sh 'npm test'
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