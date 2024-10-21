// Hardcoded credentials stored in an array of objects
const users = [
    { username: "Mayank", password: "90889" },
    { username: "Anil", password: "61178" },
    { username: "Vishwajeet", password: "60875" },
    { username: "Kapoor", password: "60624" },
    { username: "Prakash", password: "60769" },
    { username: "Shudhanshu", password: "60726" },
    { username: "Snehal", password: "60830" },
    { username: "Krushna", password: "91637" },
    { username: "Aniket", password: "60847" },
    { username: "Abhijeet", password: "61306" },
    { username: "Prashant", password: "61310" },
    { username: "Gajanan", password: "61311" },
    { username: "Paritosh", password: "61366" },
    { username: "Umesh", password: "61355" },
    { username: "Nilesh", password: "61359" },
    { username: "Shubham", password: "60829" },
    { username: "Man Prasad", password: "61301" },
    { username: "Sushil", password: "60832" },
    { username: "Amit", password: "61426" },
];

// to login user
function loginUser() {
    const username = document.getElementById('loginUsername').value.trim().toLowerCase();
    const password = document.getElementById('loginPassword').value.trim(); 

    // Convert usernames to lowercase for case-insensitive comparison
    const user = users.find(user => user.username.toLowerCase() === username && user.password === password);

    if (user) {
        document.getElementById('userWelcome').innerText = user.username;
        showWelcomeSection(); // Show welcome section
    } else {
        alert("Invalid username or password.");
    }

    return false; 
}


function showLoginForm() {
    document.getElementById('loginForm').style.display = 'block'; 
}

function showWelcomeSection() {
    document.getElementById('loginForm').style.display = 'none'; 
    document.getElementById('welcomeSection').style.display = 'block'; 
}

//  to logout the user
function logout() {
    document.getElementById('welcomeSection').style.display = 'none'; 
    showLoginForm(); 
}

function accessFolder() {
    window.open("https://drive.google.com/drive/folders/1bDj3RRTE_rgXkut58AV6hy2YWF6Soaw1?usp=sharing", "_blank"); 
}
