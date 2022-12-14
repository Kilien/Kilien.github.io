import { defineClientConfig } from "@vuepress/client";
import { addIcons } from "oh-vue-icons";
import ITalk from "./components/Talk.vue";
import {
  FaFortAwesome,
  FaSatelliteDish,
  FaTag,
  OiRocket,
  RiLinkM,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiFacebookBoxFill,
  RiTwitterFill,
  RiZhihuLine,
  HiMail,
  FaPaw,
  AiCv,
  BiInstagram,
  AiGoogleScholarSquare,
} from "oh-vue-icons/icons";

addIcons(
  FaFortAwesome,
  FaSatelliteDish,
  FaTag,
  OiRocket,
  RiLinkM,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiFacebookBoxFill,
  RiTwitterFill,
  RiZhihuLine,
  HiMail,
  FaPaw,
  AiCv,
  BiInstagram,
  AiGoogleScholarSquare
);

export default defineClientConfig({
  enhance({ app }) {
    app.component("ITalk", ITalk);
  },
});
