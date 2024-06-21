document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".login-form");
  const notes_info = document.querySelector(".notes-info");
  const home = document.querySelector(".home");
  const adminView = document.querySelector(".admin-view");
  const userEmailDisplay = document.getElementById("user-email");
  const notesDiv = document.getElementById("notes");
  const allNotesDiv = document.getElementById("all-notes");
  let currentUser = null;

  function displayNotes() {
    notesDiv.innerHTML = "";
    const notes = JSON.parse(localStorage.getItem(currentUser)) || [];
    notes.forEach((note) => {
      const noteDiv = document.createElement("div");
      noteDiv.className = "note";
      noteDiv.innerText = note;
      notesDiv.appendChild(noteDiv);
    });
  }

  function displayAllNotes() {
    allNotesDiv.innerHTML = "";
    for (let i = 0; i < localStorage.length; i++) {
      const user = localStorage.key(i);
      const notes = JSON.parse(localStorage.getItem(user)) || [];
      const userNotesDiv = document.createElement("div");
      userNotesDiv.className = "user-notes";
      const userTitle = document.createElement("h3");
      userTitle.innerText = user;
      userNotesDiv.appendChild(userTitle);
      notes.forEach((note) => {
        const noteDiv = document.createElement("div");
        noteDiv.className = "note";
        noteDiv.innerText = note;
        userNotesDiv.appendChild(noteDiv);
      });
      allNotesDiv.appendChild(userNotesDiv);
    }
  }

  document.getElementById("loginButton").onclick = function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "admin@notes.com") {
      currentUser = email;
      loginForm.style.display = "none";
      notes_info.style.display = "none";
      adminView.style.display = "block";
      displayAllNotes();
    } else if (email && password) {
      currentUser = email;
      userEmailDisplay.innerText = email;
      loginForm.style.display = "none";
      notes_info.style.display = "none";
      home.style.display = "block";
      displayNotes();
    } else {
      alert("Please enter a valid email and password.");
    }
  };

  document.getElementById("addNoteButton").onclick = function () {
    const noteText = document.getElementById("note").value;
    if (noteText) {
      const notes = JSON.parse(localStorage.getItem(currentUser)) || [];
      notes.push(noteText);
      localStorage.setItem(currentUser, JSON.stringify(notes));
      document.getElementById("note").value = "";
      displayNotes();
    } else {
      alert("Please enter a note.");
    }
  };

  document.getElementById("logoutButton").onclick = function () {
    currentUser = null;
    loginForm.style.display = "block";
    notes_info.style.display = "block";
    home.style.display = "none";
  };

  document.getElementById("adminLogoutButton").onclick = function () {
    currentUser = null;
    loginForm.style.display = "block";
    notes_info.style.display = "block";
    adminView.style.display = "none";
  };
});
