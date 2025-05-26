#  Task Management API

A fully Dockerized, RESTful Task Management API built with **Node.js**, **Express**, and **MongoDB Atlas**. Designed with production-readiness, cloud deployment, and scalability in mind — deployed on **AWS EC2** using **Docker Compose**.

---

## Live Demo

**API Base URL:**  
`http://<your-ec2-public-ip>:8000/api/tasks`  
<sub>(Replace with your domain or EC2 IP)</sub>

---

##  Tech Stack

| Layer       | Technology                      |
|-------------|----------------------------------|
| **Backend** | Node.js, Express.js             |
| **Database**| MongoDB Atlas (Cloud-hosted)    |
| **Containerization** | Docker, Docker Compose |
| **Cloud Deployment** | AWS EC2 (Ubuntu)        |

---

##  Features

-  Secure and environment-variable-based DB connection (MongoDB Atlas)
-  Full CRUD API for managing tasks
-  Dockerized with production-ready `Dockerfile` and `docker-compose.yml`
-  Deployed on AWS EC2 for real-world hosting
-  Clean folder structure and modular code

---

## Project Structure
task-management-api/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── .env.
│ ├── Dockerfile
│ ├── package.json
│ └── app.js
├── docker-compose.yml


---

## Sample Endpoints

| Method | Endpoint             | Description             |
|--------|----------------------|-------------------------|
| GET    | `/api/tasks`         | Get all tasks           |
| POST   | `/api/tasks`         | Create a new task       |
| PUT    | `/api/tasks/:id`     | Update a specific task  |
| DELETE | `/api/tasks/:id`     | Delete a specific task  |

Use **Postman**, **cURL**, or **Insomnia** to test.

---

## Run Locally with Docker

### 1. Clone the repo
```bash
git clone https://github.com/Rishav-R03/task-management-api.git
cd task-management-api
```

###2 Create a .env file
MONGO_URI
PORT
JWT_SECRET 

###3 docker-compose up -d 
```
Start the containers 
```
## Deployment on AWS EC2
  Ubuntu-based EC2 instance
  Installed Docker & Docker Compose
  Opened port 8000 in security group
  Deployed using docker-compose up -d

## Skills Demonstrated
  RESTful API design
  MongoDB schema modeling with Mongoose
  Docker image/container lifecycle
  Secure .env management
  AWS infrastructure basics
  Docker Compose service orchestration

## Let's Connect
I'm actively seeking SDE and DevOps roles. If you're a recruiter or collaborator, feel free to connect!
 LinkedIn
 Portfolio
 Email: rishav042023@gmail.com

## Licence 
```
This project is open-source and available under the MIT License.
```
