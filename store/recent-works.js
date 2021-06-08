const recentWorks = [
  {
    title: "Source Code Block to Bring Down Phishing Attacks",
    desc: "Somraj Chowdhury, H. L. Gururaj, 'Source Code Block to Bring Down Phishing Attacks' , CiiT Journal of Biometrics and Bioinformatics, Vol 10 , No-5 (2018)",
  },
  {
    title: "Computer Locking Using Bluetooth Device Proximity",
    desc: "Sumanth Hegde, B. S. Sachin, H. L. Gururaj, “Computer Locking Using Bluetooth Device Proximity”, CiiT Journal of Biometrics and Bioinformatics, Vol 10 , No-5 (2018)",
  },
  {
    title:
      "A Critical Analysis on Network Layer Attacks in Wireless Sensor Network",
    desc: "Swathi B.H, Gururaj H.L “A Critical Analysis on Network Layer Attacks in Wireless Sensor Network” International Research Journal of Engineering and Technology (IRJET) e-ISSN: 2395-0056 Volume: 05 Issue: 02 | Feb-2018",
  },
  {
    title: "Portable H2O Quality Monitoring and Cloud Reporting System",
    desc: "Shraddha Shetty, Shriya Srinivasan, Sindhu S,Veena K P, Gururaj H L “Portable H2O Quality Monitoring and Cloud Reporting System”, International Journal of Scientific Research in Computer Science, Engineering and Information Technology © 2018 IJSRCSEIT | Volume 4 | Issue 6 | ISSN : 2456-3307",
  },
];

function getRecentWorkList(title, desc) {
  return `<div class="work-list">
              <h6>${title}</h6>
              <p>${desc}</p>
            </div>`;
}

y = document.getElementById("recent-work-container");
y.innerHTML = recentWorks
  .reverse()
  .filter((item, idx) => idx < 4)
  .map((rwork) => getRecentWorkList(rwork.title, rwork.desc))
  .join("");
