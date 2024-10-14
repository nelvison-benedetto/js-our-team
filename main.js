const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./images/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./images/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./images/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./images/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./images/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./images/female3.png"
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

let totMarkup = "";
teamMembers.forEach( (item,index) => {
  const member = teamMembers[index];
  const murkup = generateTeam(member);
  totMarkup += murkup;
});
team.innerHTML = totMarkup ;
console.log(totMarkup);

