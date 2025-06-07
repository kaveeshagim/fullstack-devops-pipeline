pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'kaveeshadev/devops-pipeline-app'
    }
    
    stages {

        stage('Build Docker Image') {
            steps {
                dir('app') {
                    script {
                        sh "docker build -t $DOCKER_IMAGE:latest ."
                    }
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    script {
                        sh "echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin"
                        sh "docker push $DOCKER_IMAGE:latest"
                    }
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f k8s/'
            }
        }
    }
}