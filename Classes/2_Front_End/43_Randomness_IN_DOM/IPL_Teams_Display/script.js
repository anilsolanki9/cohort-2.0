let teams = [
  {
    team: "CSK",
    fullName: "Chennai Super Kings",
    primary: "#f5c900",
    secondary: "#003472",
    trophies: 5,
    captain: "Mahendra Singh Dhoni",
    bgImgURL: "./assets/1CSK.jpeg",
    watermark: "Whistle Podu",
  },
  {
    team: "MI",
    fullName: "Mumbai Indians",
    primary: "#004BA0",
    secondary: "#D4AF37",
    trophies: 5,
    captain: "Hardik Pandya",
    bgImgURL: "./assets/2MI.jpeg",
    watermark: "Duniya Hila Denge",
  },
  {
    team: "KKR",
    fullName: "Kolkata Knight Riders",
    primary: "#3A225D",
    secondary: "#D4AF37",
    trophies: 3,
    captain: "Ajinkya Rahane",
    bgImgURL: "./assets/3KKR.jpeg",
    watermark: "Korbo Lorbo Jeetbo",
  },
  {
    team: "GT",
    fullName: "Gujarat Titans",
    primary: "#1C2B5E",
    secondary: "#C0C0C0",
    trophies: 1,
    captain: "Shubman Gill",
    bgImgURL: "./assets/4GT.jpeg",
    watermark: "Aa Aa Aa",
  },
  {
    team: "RR",
    fullName: "Rajasthan Royals",
    primary: "#E8197D",
    secondary: "#1a1a1a",
    trophies: 1,
    captain: "Sanju Samson",
    bgImgURL: "./assets/5RR.jpeg",
    watermark: "Halla Bol",
  },
  {
    team: "SRH",
    fullName: "Sunrisers Hyderabad",
    primary: "#F26522",
    secondary: "#1a1a1a",
    trophies: 1,
    captain: "Pat Cummins",
    bgImgURL: "./assets/6SRH.jpeg",
    watermark: "Rise Up",
  },
  {
    team: "RCB",
    fullName: "Royal Challengers Bengaluru",
    primary: "#CC0000",
    secondary: "#1a1a1a",
    trophies: 1,
    captain: "Rajat Patidar",
    bgImgURL: "./assets/7RCB.jpeg",
    watermark: "Ee Sala Cup Namde",
  },
  {
    team: "DC",
    fullName: "Delhi Capitals",
    primary: "#0057A8",
    secondary: "#ffffff",
    trophies: 0,
    captain: "Axar Patel",
    bgImgURL: "./assets/8DC.jpeg",
    watermark: "Roar Maacha",
  },
  {
    team: "PBKS",
    fullName: "Punjab Kings",
    primary: "#DD1F2D",
    secondary: "#C0C0C0",
    trophies: 0,
    captain: "Shreyas Iyer",
    bgImgURL: "./assets/9PBKS.jpeg",
    watermark: "Sher Punjab Da",
  },
  {
    team: "LSG",
    fullName: "Lucknow Super Giants",
    primary: "#A4C8E1",
    secondary: "#ffffff",
    trophies: 0,
    captain: "Rishabh Pant",
    bgImgURL: "./assets/10LSG.jpeg",
    watermark: "Lucknow Hai Tayyar",
  },
];

let page = document.querySelector(".page");
let root = document.documentElement;

window.addEventListener("keydown", (dets) => {
  if (dets.key === "ArrowRight" || dets.key === "ArrowLeft") {
    loadRandomTeam();
  }
});

function loadRandomTeam() {
  let x = Math.floor(Math.random() * teams.length);
  let team = teams[x];
  root.style.setProperty("--primary", team.primary);
  root.style.setProperty("--secondary", team.secondary);
  root.style.setProperty("--img-url", `url(${team.bgImgURL})`);
  page.innerHTML = `<div class="bg"></div>
        <div class="noise"></div>
        <div class="stripe"></div>
        <div class="corner-deco"></div>

        <div class="content">
          <!-- TOP -->
          <div class="top-bar">
            <div class="ipl-badge">
              <span class="label">Indian Premier League</span>
              <span class="season">IPL 2026</span>
            </div>
            <div class="trophy-count">
              <span class="trophies">${"🏆".repeat(team.trophies) || "..."}</span>
              <span class="trophy-label">Championships Won</span>
            </div>
          </div>

          <!-- MIDDLE -->
          <div class="main">
            <div class="team-abbr">${team.team}</div>
            <div class="team-full">${team.fullName}</div>
            <div class="divider"></div>
            <div class="captain-block">
              <span class="captain-label">Captain</span>
              <span class="captain-name">${team.captain}</span>
            </div>
          </div>

          <!-- BOTTOM -->
          <div class="bottom-row">
            <div class="color-palette">
              <div class="color-swatch primary-swatch"></div>
              <div class="color-swatch secondary-swatch"></div>
              <span class="palette-label">Team Colors</span>
            </div>
            <span class="watermark">${team.watermark}</span>
          </div>
        </div>`;
}
