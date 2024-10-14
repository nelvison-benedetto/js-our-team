const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./assets/images/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./assets/images/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./assets/images/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./assets/images/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./assets/images/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./assets/images/female3.png"
  }
];


function generateTeam(member){
  const {name,role,email,img} = member;

  return `
  <div class="col">
    <div class="card text-center">
        <img src="${img}" alt="" class="card-img-top">
        <div class="card-body">
            <h3>${name}</h3>
            <span>${role}</span>
            <small class="text-muted">${email}</small>
        </div>
    </div>
  </div>`;
}

const team = document.getElementById("team");

let totMarkup = "";  //append as str every div for col
teamMembers.forEach( (item,index) => {
  const member = teamMembers[index];
  const murkup = generateTeam(member);
  totMarkup += murkup;
});
team.innerHTML = totMarkup;  //insert in div id="team" as html code all the str totMarkup
console.log(totMarkup);

const formEl = document.getElementById('form');
formEl.addEventListener('submit',function(e){
  e.preventDefault();
  let name = e.target.name.value;
  let role = e.target.role.value;
  let email = e.target.email.value;
  let img = e.target.img.value;
  const member = {name,role,email,img};
  const murkup = generateTeam(member);
  totMarkup += murkup;
  team.innerHTML = totMarkup;
  //console.log(member);
});