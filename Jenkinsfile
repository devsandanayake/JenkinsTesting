pipeline {
    agent any

    environment {
        NODEJS_HOME = tool name: 'NodeJS 14', type: 'NodeJSInstallation' // Adjust the Node.js version as needed
        PATH = "${NODEJS_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Clone Repository') {
            steps {
                // Clone your Git repository
                git url: 'https://github.com/devsandanayake/JenkinsTesting.git', branch: 'main'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Install the app's dependencies
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                // Run your test suite
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                // Start the app using npm start
                sh '''
                # Stop the app if it's already running
                pkill -f 'node app.js' || true
                # Start the app
                npm start &
                '''
            }
        }
    }

    post {
        always {
            // Cleanup step if needed
            echo 'Cleaning up...'
        }
    }
}
