// All menu items stored in a simple array of objects
const menuItems = [
  { name: "Paneer Tikka",     category: "starters", price: 220, description: "Grilled paneer cubes marinated in spicy yogurt." },
  { name: "Veg Spring Rolls", category: "starters", price: 150, description: "Crispy rolls filled with fresh vegetables." },
  { name: "Hara Bhara Kebab", category: "starters", price: 180, description: "Spinach and green pea patties, pan fried." },

  { name: "Butter Chicken",   category: "main", price: 320, description: "Tender chicken in a creamy tomato gravy." },
  { name: "Dal Makhani",      category: "main", price: 240, description: "Black lentils slow cooked with butter and cream." },
  { name: "Veg Biryani",      category: "main", price: 260, description: "Fragrant basmati rice cooked with vegetables and spices." },

  { name: "Gulab Jamun",      category: "desserts", price: 90,  description: "Soft milk dumplings soaked in sugar syrup." },
  { name: "Chocolate Brownie",category: "desserts", price: 130, description: "Warm brownie served with vanilla ice cream." },
  { name: "Kulfi",            category: "desserts", price: 100, description: "Traditional Indian ice cream with pistachios." },

  { name: "Masala Chai",      category: "drinks", price: 50,  description: "Hot tea brewed with ginger and cardamom." },
  { name: "Sweet Lassi",      category: "drinks", price: 80,  description: "Chilled yogurt drink, thick and creamy." },
  { name: "Fresh Lime Soda",  category: "drinks", price: 70,  description: "Refreshing lime with soda, sweet or salty." }
];

// Get elements from the HTML page
const menuContainer = document.getElementById("menu");
const buttons = document.querySelectorAll(".filter-btn");

// Function to show items on the page
function showMenu(items) {
  menuContainer.innerHTML = ""; // clear old items

  items.forEach(function (item) {
    menuContainer.innerHTML += `
      <div class="menu-item">
        <div class="top">
          <h3>${item.name}</h3>
          <span class="price">₹${item.price}</span>
        </div>
        <p>${item.description}</p>
        <span class="tag">${item.category}</span>
      </div>
    `;
  });
}

// Filter items when a category button is clicked
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    // move the "active" style to the clicked button
    buttons.forEach(function (b) { b.classList.remove("active"); });
    button.classList.add("active");

    const category = button.dataset.category;

    if (category === "all") {
      showMenu(menuItems);
    } else {
      const filtered = menuItems.filter(function (item) {
        return item.category === category;
      });
      showMenu(filtered);
    }
  });
});

// Show all items when the page first loads
showMenu(menuItems);
