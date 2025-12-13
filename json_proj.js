const cardData = [
  {
    title: "Netflix Clone",
    description: "🎯 Project Objective  To create a visually appealing and responsive clone of the Netflix landing page with basic interactive features using core web development technologies – HTML, CSS, and JavaScript. The goal is to practice frontend skills and understand UI/UX patterns used by leading streaming platforms.",
    Features:` 🎬 Hero Section with background image and CTA buttons 🔍 Navigation Bar similar to Netflix with logo, links, and user icon 🎞️ Movie Slider/Carousel (Static or Scrollable) 📱 Fully Responsive Design for all screen sizes 🌓 Dark Theme UI mimicking the Netflix color palette ✨ Hover Effects & Smooth Transitions 🧪 Basic Modal Popup for Play or More Info actions (Optional)`,
    image: "./assets/Netflix.png"   ,
    link:'https://netfix-clone-git-main-ameys-projects-ec2c0e92.vercel.app/'
    
  },
  {
    title: "Employee Mangement System",
    description: "🎯 Project Objective To build a responsive and dynamic Employee Management System where users (e.g., HR or Admin) can add, view, edit, and delete employee records. This project helps in understanding React fundamentals, form handling, and component reusability while using Vite for fast and modern development.",
    Features:"➕ Add Employee – Form to input employee details (name, role, email, etc.)  📋 Employee List – Displays a table/grid of all employees 🛠️ Edit Employee – Update existing employee data ❌ Delete Employee – Remove an employee from the system 🔍 Search/Filter – Filter employee list by name, role, etc. (optional) ✅ Form Validation – Prevent incomplete form submission 💾 Data Persistence – Store data using LocalStorage / mock API",
    image: "./assets/employee mangement system.png",
     link:''

  }
  
  
];

const container = document.getElementById("cardContainer");

cardData.forEach(card => {
  const cardElement = document.createElement("div");
  cardElement.className = "card";
  cardElement.innerHTML = `
    <img src="${card.image}" alt="${card.title}" />
    <div class="card-content">
      <h3 class="card-title">${card.title}</h3>
     <p class="card-description">${card.description}</p>
     <p>🧩 Features Implemented</p>     
     <p class="card-Features">${card.Features}</p>
     <a href="${card.link}" target="_blank">
     <br>
    <button class="button" >Open Project</button>
    </a>
    
    </div>
  `;
  container.appendChild(cardElement);
});


