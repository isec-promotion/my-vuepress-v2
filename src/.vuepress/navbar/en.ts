import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "監視カメラ",
    icon: "camera",
    prefix: "/camera/",
    children: [
      {
        text: "トップページ",
        icon: "home",
        link: "",
      },
      {
        text: "商品の基本操作",
        icon: "book",
        link: "camera-plugin",
      },
    ],
  },
  {
    text: "レコーダー",
    icon: "server",
    prefix: "/recorder/",
    children: [
      {
        text: "トップページ",
        icon: "home",
        link: "",
      },
      {
        text: "レコーダーの使い方",
        icon: "book",
        link: "recorder-basic-overview",
      },
      {
        text: "シーン別便利機能",
        icon: "wrench",
        link: "recorder-password-off",
      },
      {
        text: "よくある質問",
        icon: "hammer",
        link: "faq03-language",
      },
    ],
  },
  {
    text: "映像伝送装置",
    icon: "hard-drive",
    prefix: "/transfer/",
    children: [
      {
        text: "トップページ",
        icon: "home",
        link: "",
      },
      {
        text: "全機種共通",
        icon: "book",
        link: "common-basic-overview",
      },
      {
        text: "LAN-HD264E",
        icon: "wrench",
        link: "encoder-instruction",
      },
      {
        text: "LAN-HD264D",
        icon: "hammer",
        link: "decoder-instruction",
      },
    ],
  },
  {
    text: "ソフトウェア",
    icon: "icons",
    prefix: "/software/",
    children: [
      {
        text: "トップページ",
        icon: "home",
        link: "",
      },
      {
        text: "PC（UMS、UMS-M）",
        icon: "desktop",
        link: "pc-connect-recorder",
      },
      {
        text: "スマホ（iUMS、iUMS+）",
        icon: "mobile",
        link: "mobile-ums-readme",
      },
    ],
  },
  {
    text: "会社HP",
    icon: "building",
    link: "https://isecj.jp/",
  },
]);
