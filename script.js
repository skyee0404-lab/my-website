// PANG-MOBILE MENU
function toggleMenu() {
  const menu = document.getElementById("navMenu");
  menu.classList.toggle("show");
}

// TABS PARA SA PROGRAMS
function showProgram(programId) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.program').forEach(prog => prog.classList.remove('active'));

  document.querySelector(`[onclick="showProgram('${programId}')"]`).classList.add('active');
  document.getElementById(programId).classList.add('active');
}

// SCROLLSPY (Nagpapalipat ng gold line sa nav menu kapag nag-scroll)
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  let scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute("id");

    const navLink = document.querySelector('nav a[href*=' + sectionId + ']');
    
    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add("active-link");
      } else {
        navLink.classList.remove("active-link");
      }
    }
  });
}
// SMOOTH REVEAL ON SCROLL
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// PANG-SEARCH SA TOP PASSERS TABLE
function filterPassers() {
  const input = document.getElementById("passerSearch");
  const filter = input.value.toUpperCase();
  const table = document.getElementById("passersTable");
  const tr = table.getElementsByTagName("tr");

  for (let i = 1; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td");
    let match = false;
    for (let j = 0; j < td.length; j++) {
      if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
        match = true;
      }
    }
    tr[i].style.display = match ? "" : "none";
  }
}
