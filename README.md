# 📚 Bookify

🔗 **Live Site:** https://bookify-next-app.vercel.app/

---

## 📌 Project Overview

**Bookify** is a modern book discovery and management web application built with Next.js. It allows users to explore books, filter them by categories, view detailed information, and manage their profile with a smooth and interactive user experience.

The application focuses on clean UI, dynamic navigation, authentication, and user-friendly book browsing.

---

## 🛠️ Technologies Used

* **Next.js (App Router)**
* **React.js**
* **HTML5**
* **CSS3**
* **JavaScript (ES6+)**
* **React Fast Marquee**
* **React Toastify**
* **Swiper JS**
* **Better Auth**

---

## 🚀 Key Features

### 1. 🔐 Authentication System

* Users can **Register** with:

  * Name, Email, Photo URL, Password
* Users can **Login** using:

  * Email & Password
  * Google Authentication
* After login:

  * Navbar updates to show **Hello, Username 👋**
  * Logout
* Before login:

  * Login button is visible

---

### 2. 🏠 Modern Home Page UI

#### 🔹 Navbar

* Logo (click → Home)
* NavLinks:

  * Home
  * All Books
  * My Profile
* Right Side:

  * Login / User Info + Logout

#### 🔹 Banner Section

* Text: **"Find your next read"**
* Button: **Browse Now** → Redirects to All Books
* Right side image for visual appeal

#### 🔹 New Arrivals

* Built with **React Fast Marquee**
* Auto-scrolling books with image & title

#### 🔹 Featured Books

* Built using **Swiper JS**
* Displays **10 scrollable book cards**
* Each card includes a **View Details button**

#### 🔹 Book Genres

* Categories:

  * Thriller
  * History
  * Programming
* Each category shows:

  * 2 preview books
  * **See All button** → View all books in that category

#### 🔹 Quotes Section

* Displays 3 inspirational quotes about books

#### 🔹 Footer

* Contains essential links and information

---

### 3. 📖 All Books Page

* Left Sidebar:

  * Category list
* Right Side:

  * All book cards

#### Features:

* Category-based filtering
* Dynamic UI updates
* Click on a card → Book Details Page

---

### 4. 📘 Book Details Page

* Displays:

  * Book Image
  * Title
  * Author
  * Description
  * Quantity
  * Category
  * Published Date

#### Action:

* **Borrow This Book Button**

  * Shows toast notification:
    👉 *"BookName Borrowed successfully"*

---

### 5. 👤 My Profile

* Displays:

  * User Image
  * Name
  * Email

#### Feature:

* **Update Your Info**

  * Update Name
  * Update Profile Image

---

### 6. 🔒 Private Routes & Security

* **Book Details Page** and **My Profile Page** are protected routes
* Users must be logged in to access these pages
* Implemented using **Proxy-based route protection**
* Unauthorized users are redirected to the login page

---

## 🎯 Purpose

Bookify is designed to provide a smooth and engaging platform for users to discover books, explore categories, and interact with book content in a modern web environment.

---

## 💡 Future Improvements

* 🔍 Advanced Search & Filtering
* ❤️ Wishlist System
* 🛒 Book Purchase / E-commerce Integration
* 🌙 Dark Mode
* ⭐ Ratings & Reviews

---

## 👨‍💻 Author

Developed by **Md Fardin Faruk**

---

## ⭐ Support

If you like this project, don’t forget to give it a ⭐ on GitHub!
