# HNG Stage 1: API Deployment with Nginx Reverse Proxy

This project is a lightweight Node.js/Express API deployed on a Linux VPS. It is kept alive persistently using PM2 and served to the public via an Nginx reverse proxy.

## 🚀 Live Deployment
- **Live URL:** `https://yourdomain.com` *(Replace with your actual domain/IP)*

## 🛠 Technologies Used
- **Backend:** Node.js, Express.js
- **Process Manager:** PM2
- **Web Server / Proxy:** Nginx
- **OS:** Ubuntu Linux

## 📥 How to Run Locally

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/hng-stage1-api.git
    cd hng-stage1-api
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the server:
    ```bash
    node index.js
    ```

The API will be available at `http://localhost:3000`.

## 📡 Endpoints

### 1. Root Endpoint
- **URL:** `/`
- **Method:** `GET`
- **Response (200 OK):**
  ```json
  {
     "message": "API is running"
  }
  ```

### 2. Health Check
- **URL:** `/health`
- **Method:** `GET`
- **Response (200 OK):**
  ```json
  {
     "message": "healthy"
  }
  ```

### 3. User Info
- **URL:** `/me`
- **Method:** `GET`
- **Response (200 OK):**
  ```json
  {
     "name": "Your Full Name",
     "email": "you@example.com",
     "github": "https://github.com/yourusername"
  }
  ```
