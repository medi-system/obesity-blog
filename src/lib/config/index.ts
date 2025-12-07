import type { Link } from "../types";

export const SITE = {
  title: "비만 관리를 위한 음식 가이드",
  description: "비만 관리에 필요한 음식별 칼로리, 포만감 정보",
  author: "MediInfo",
  url: "https://obesity.mediinfo.blog",
  locale: "ko-KR",
  dir: "ltr",
  charset: "UTF-8",
  basePath: "/",
  postsPerPage: 10,
};

export const NAVIGATION_LINKS: Link[] = [
  {
    href: "/",
    text: "홈",
  },
  {
    href: "/about",
    text: "소개",
  },
];

export const OTHER_LINKS: Link[] = [
  {
    href: "/about",
    text: "소개",
  },
];

export const SOCIAL_LINKS: Link[] = [];