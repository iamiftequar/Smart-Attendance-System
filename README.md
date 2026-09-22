# Smart Attendance System

A web-based Smart Attendance System designed to simplify attendance management using camera-based face verification, location verification, attendance tracking, and an admin dashboard.

## 🚀 Features

- Student login and dashboard
- Admin/Teacher dashboard
- Camera access for face verification
- Location verification using GPS
- Geofencing with an allowed attendance radius
- Automatic attendance percentage calculation
- Attendance history
- Subject-wise attendance tracking
- Calendar view
- Student profile management
- Duplicate attendance prevention
- Admin student search
- CSV attendance export
- Responsive design for desktop and mobile
- Dark mode
- Local data storage using browser LocalStorage

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- Browser Camera API
- Geolocation API
- LocalStorage
- VS Code
- Git & GitHub

## 📍 How Attendance Works

The attendance process follows these steps:

1. Student logs into the system.
2. Student opens the attendance section.
3. Camera access is requested for face verification.
4. The student's location is obtained using the browser Geolocation API.
5. The distance from the college location is calculated.
6. The system checks whether the student is within the permitted attendance radius.
7. If the required verification conditions are satisfied, attendance is marked.
8. Attendance information is stored locally and displayed in the attendance history.

## 📊 Attendance Calculation

Attendance percentage is calculated using:

**Attendance Percentage = (Present Classes / Total Classes) × 100**

## 🗺️ Location Verification

The system uses latitude and longitude coordinates to calculate the distance between the student's current location and the configured college location.

A permitted radius is used to determine whether attendance can be marked.

## 📷 Face Verification

The project uses the browser camera to capture/access the student's camera feed.

The current version demonstrates the face-verification interface and camera access as a frontend prototype. Production-level facial recognition would require a dedicated biometric/face-recognition system and backend validation.

## 👨‍💻 My Contribution

My primary responsibility was frontend development.

I worked on:

- User interface design
- Student dashboard
- Attendance interface
- Camera verification interface
- Location verification interface
- Attendance history
- Responsive UI
- Client-side JavaScript functionality
- Integration of the overall frontend flow

## ▶️ How to Run

### Option 1: VS Code Live Server

1. Clone or download the repository.
2. Open the project in VS Code.
3. Install the **Live Server** extension.
4. Right-click `index.html`.
5. Select **Open with Live Server**.
6. Open the application in your browser.

### Option 2: Open Locally

Open `index.html` in a modern web browser.

For camera and location features, running through a local development server such as Live Server is recommended.

## 📁 Project Structure

```text
Smart-Attendance-System/
│
├── index.html
├── dashboard.html
├── face-verification.html
├── script.js
├── style.css
└── README.md