import {
  getBlockWithImage,
  getCardWithThumb,
} from "../components/getComponents.js";

import { recentConferences } from "../../store/conferencesData.js";

const x = document.getElementById("conf-box-container");
if (x) {
  x.innerHTML = recentConferences
    .reverse()
    .filter((item, idx) => idx < 4)
    .map((rconf) => getCardWithThumb(rconf.title, rconf.desc, rconf.confImg))
    .join("");
}

const y = document.getElementById("journal");
if (y) {
  y.innerHTML = recentConferences
    .reverse()
    .map((rconf) => getBlockWithImage(rconf.title, rconf.desc, rconf.confImg))
    .join("");
}
