# Next Destination  
A full-stack Airbnb clone with CRUD operations, user authentication, and data validation. Integrated **Mapbox** for location services and **Cloudinary** for image management.  
---

## 🎯 Objective  
The objective of **Next Destination** is to create a scalable and secure platform where users can:  
- List, explore, and book accommodations.  
- Interact with dynamic maps for location-based services.  
- Upload and manage property images efficiently in the cloud.  
- Experience seamless authentication and session handling.  

---

## 📌 Use Cases  
- **Travelers** can search for destinations, check details, and read reviews before booking.  
- **Hosts** can list new properties with images and precise geolocation.  
- **Reviewers** can share authentic feedback with location integration.  
- **Admins/Developers** can scale the platform easily with MongoDB Atlas and Cloudinary.  

---

## 👨‍💻 Authors  
- Rohit Agarwal  

---

## 🛠️ Technologies Used  
- JavaScript (Node.js)  
- Express.js  
- MongoDB + Mongoose  
- Bootstrap  
- Passport.js  
- Mapbox  
- Cloudinary  
- EJS  
- Joi  

---

## ✨ Features  

### 🔐 User Authentication and Security  
- Passport.js integration for sign-up and login.  
- Express sessions stored in MongoDB Atlas.  

### 🏘️ Dynamic Listing Creation  
- Cloudinary image uploads (PNG, JPG, JPEG up to 500KB).  
- Joi validation for secure listing creation.  

### 🗺️ Interactive Maps and Geolocation  
- Mapbox integration with zoom and full-screen features.  
- Geocoding for converting text locations into coordinates.  

### 📋 Comprehensive Listing Details  
- Detailed information (name, location, price, reviews).  
- Embedded Mapbox maps in each listing.  

### 💬 Reviews and Community  
- Users can post detailed reviews.  
- Reviews enhanced with map/geolocation data.  

### 📱 Responsive Design  
- Consistent UI across desktop, tablet, and mobile.  

### ⚙️ Backend Architecture  
- Express.js with MVC pattern for scalability.  
- Middleware for authentication and request handling.  

### ☁️ Cloud Integration  
- Cloudinary for media storage.  
- MongoDB Atlas for scalable data storage.  

---

## 🔧 Environment Variables  

```javascript
CLOUD_NAME=
CLOUD_API_KEY=
CLOUD_API_SECRET= 
MAP_TOKEN= 
ATLASDB_URL= 
SECRET= 

