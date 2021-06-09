import {
  getConferenceBlock,
  getRecentConferenceCard,
} from "../js/getComponents.js";

const recentConferences = [
  {
    title: "Machine Learning and its Applications in Food Engineering",
    desc: "Update-2020, Prague, Europe",
    confImg: "./img/unow.jpg",
  },
  {
    title: "ACM DSP Talk",
    desc: "NIT Surat-2020",
    confImg:
      "./img/SAGE.jpg",
  },
  {
    title: "ACM DSP Talk",
    desc: "SAGE University, Bhopal",
    confImg:
      "./img/NIT%20Surat%20(1).jpg",
  },
 ];

// const getRecentConferenceCard = (title, desc, confImg) => {
//   return `<div class="conf-box">
//                   <img class="recent-conf" src="${confImg}" alt="">
//                   <div class="conf-box-details">
//                     <h4 class="conf-box-title">${title}</h4>
//                     <p class="conf-box-desc">${desc}</p>
//                   </div>
//                 </div>`;
// };

// const getConferenceBlock = (title, confImg) => {
//   return `
//     <div class="col-md-12">
//       <div class="post-box">
//         <div id="conferenceblock">
//           <blockquote class="blockquote">
//             <p class="mb-0"><b>${title}</b></p>
//           </blockquote>
//           <div class="article-content">
//             <img class="conferenceblock-img" src="${confImg}" alt="" srcset="">
//           </div>
//         </div>
//       </div>
//     </div>`;
// };

const x = document.getElementById("conf-box-container");
x.innerHTML = recentConferences
  .reverse()
  .filter((item, idx) => idx < 4)
  .map((rconf) =>
    getRecentConferenceCard(rconf.title, rconf.desc, rconf.confImg)
  )
  .join("");
