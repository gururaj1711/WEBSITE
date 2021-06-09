import { getRecentWorkList } from "../components/getComponents.js";
import { recentWorks } from "../../store/worksData.js";

const y = document.getElementById("recent-work-container");
if (y) {
  y.innerHTML = recentWorks
    .reverse()
    .filter((item, idx) => idx < 4)
    .map((rwork) => getRecentWorkList(rwork.title, rwork.desc))
    .join("");
}
