const recentWorks = [
  {
    title: "Recent Work 1",
    desc: "You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made",
  },
  {
    title: "Work 2",
    desc: "You think water moves fast?",
  },
];

function getRecentWorkList(title, desc) {
  return `<div class="work-list">
              <h4>${title}</h4>
              <p>${desc}</p>
            </div>`;
}

y = document.getElementById("recent-work-container");
y.innerHTML = recentWorks
  .filter((item, idx) => idx < 5)
  .map((rwork) => getRecentWorkList(rwork.title, rwork.desc));
