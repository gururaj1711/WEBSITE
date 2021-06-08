const recentWorks = [
  {
    title: "Analysis of Drug Classification using Mechanism of Action",
    desc: "HL Gururaj, GR Puneeth, SR Mahesh, H Adithya, Sharma J Bhargava, HA Chaya Kumari, Lin Hong, Journal of Physics: Conference Series",
  },
  {
    title: "An Efficient Approach For COVID-19 Using Machine Learning Techniques",
    desc: "HL Gururaj, Anusha P Dongade, Prathiksha S Murthy, Sunil Kumar BR, Mudassir Azeez Khan, Hong Lin, “Available at SSRN 3833700” ",
  },
  {
    title:
      "Applications of Machine Learning in Biomedical Text Processing and Food Industry",
    desc: "HL Gururaj, K Paramesha, Om Prakash Jena, “Machine Learning for Healthcare Applications” John Wiley & Sons, Inc.",
  },
  {
    title: "Big Data and Big Data Analytics: A Review of Tools and its Application",
    desc: "HL Gururaj, Sam Goundar, Akashdeep Bhardwaj, Shavindar Singh, Mandeep Singh, “IGI Global” ",
  },
  {
    title: "Industrial Internet of Things 4.0: Foundations, Challenges, and Applications–A Review",
    desc: "HL Gururaj, DB Vishwas, M Gowtham, Sam Goundar, IGI Global",
  },
  {
    title: "Internet of Things for High Performance Net Zero Energy Buildings",
    desc: "HL Gururaj, BL Abhilash, Vijayalakshmi Akella, Sam Goundar, “IGI Global” ",
  },
  {
    title:
      "Peer-to-Peer Distributed Storage Using InterPlanetary File System",
    desc: "HL Gururaj, A Manoj Athreya, Ashwin A Kumar, SM Nagarajath, V Ravi Kumar, DN Sachin, KR Rakesh “Springer, Singapore” ,
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
