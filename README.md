DevOps_Project_2

A complete AWS DevOps project with:

Frontend hosted on Amazon S3
Backend deployed on ECS Fargate
PostgreSQL database on Amazon RDS
CI/CD pipeline using AWS CodeBuild
Dockerized Node.js backend
Infrastructure managed using Terraform
Secrets managed using AWS SSM Parameter Store
Project Architecture
Frontend → Amazon S3 Static Hosting
Backend → ECS Fargate
Load Balancer → Application Load Balancer (ALB)
Database → Amazon RDS PostgreSQL
Container Registry → Amazon ECR
CI/CD → AWS CodeBuild
Secrets Management → AWS SSM Parameter Store
Infrastructure as Code → Terraform
Project Structure
Root Folder
Backend/
Node.js backend application
Dockerized Express server
PostgreSQL integration
Frontend/
Frontend application files
Static hosting deployment to S3
Backend
Backend Features
Express.js API server
PostgreSQL database connectivity
Docker support
Health check APIs
ECS Fargate deployment
Environment variables from AWS SSM
Backend APIs
Health Check API
GET /api/v1/health

Response:

{
  "status": "healthy",
  "message": "Backend and PostgreSQL connected"
}
Users API
GET /api/v1/users

Response:

{
  "users": [
    {
      "id": 1,
      "name": "Swati",
      "role": "DevOps Engineer"
    }
  ]
}
Frontend
Frontend Features
Static frontend application
Hosted using Amazon S3
Connected to backend APIs
Simple deployment process
Docker Setup
Backend Dockerfile

Features included:

Node.js 20
PostgreSQL package support
LibreOffice
FFmpeg
Dockerized backend deployment

Docker build:

docker build -t demo-backend-prod .

Docker run:

docker run -p 8080:8080 demo-backend-prod
AWS Services Used
Amazon ECS Fargate

Used for:

Running backend containers
Auto deployment
Scalable container hosting
Amazon ECR

Used for:

Storing Docker images
Backend image versioning
Amazon RDS PostgreSQL

Used for:

Database hosting
User data storage
Backend connectivity
Amazon S3

Used for:

Frontend static website hosting
AWS CodeBuild

Used for:

CI/CD pipeline
Docker image build
ECR image push
ECS deployment
AWS SSM Parameter Store

Used for storing:

Database credentials
Backend environment variables
Terraform variables
Environment Variables
Backend Environment Variables
PORT=8080
DB_HOST=<RDS_ENDPOINT>
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=*******
DB_NAME=devopsdb
AWS SSM Parameters

Example parameters:

/terraform/PORT
/terraform/DB_HOST
/terraform/DB_PORT
/terraform/DB_USER
/terraform/DB_PASSWORD
/terraform/DB_NAME
CI/CD Flow
Deployment Workflow
Code pushed to GitHub
AWS CodeBuild triggered
Dependencies installed
Docker image built
Docker image pushed to Amazon ECR
ECS service updated
New task deployed automatically
Database Setup
PostgreSQL Commands

Create database:

CREATE DATABASE devopsdb;

Connect database:

\c devopsdb

Create table:

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  role VARCHAR(100)
);

Insert sample data:

INSERT INTO users(name, role)
VALUES ('Swati', 'DevOps Engineer');
Health Check Configuration
ALB Health Check
Path: /api/v1/health
Protocol: HTTP
Port: 8080
Success Code: 200
ECS Deployment
ECS Task Features
Fargate launch type
CloudWatch logging
Environment variables from SSM
ALB integration
Health checks enabled
Security
Security Features
Secrets stored in AWS SSM
SecureString for passwords
ECS security groups
ALB routing
Private database access
How to Run Locally
Backend
cd Backend

npm install

npm start
Frontend
cd Frontend

npm install

npm start
Future Improvements
HTTPS using ACM certificate
Custom domain integration
CloudFront setup
Auto scaling improvements
Monitoring using CloudWatch dashboards
Terraform modularization
GitHub Actions integration
Author
Swati Gadagi

AWS DevOps Engineer

Skills:

AWS
Terraform
Docker
ECS Fargate
Kubernetes
Jenkins
CI/CD
Linux
PostgreSQL
Node.js
