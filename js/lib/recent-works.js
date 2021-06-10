import {
  getRecentWorkList,
  getCardWithThumb,
  getBlockWithImage,
  getBlockWithoutImage,
} from "../components/getComponents.js";
import { recentWorks } from "../../store/worksData.js";

const y = document.getElementById("recent-work-container");
if (y) {
  y.innerHTML = recentWorks
    .reverse()
    .filter((item, idx) => idx < 4)
    .map((rwork) =>
      rwork.img
        ? getCardWithThumb(rwork.title, rwork.desc, rwork.img)
        : getRecentWorkList(rwork.title, rwork.desc)
    )
    .join("");
}

const z = document.getElementById("work-list");
if (z) {
  z.innerHTML = recentWorks
    .reverse()
    .map((rwork) =>
      rwork.img
        ? getBlockWithImage(rwork.title, rwork.desc, rwork.img)
        : getBlockWithoutImage(rwork.title, rwork.desc)
    );
}
