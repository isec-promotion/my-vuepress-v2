import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "監視カメラ",
    icon: "launch",
    prefix: "/camera/",
    children: [
      {
        text: "トップページ",
        icon: "discover",
        link: "",
      },
      {
        text: "商品の基本操作",
        icon: "discover",
        link: "camera-plugin",
      },
    ],
  },
  {
    text: "レコーダー",
    icon: "discover",
    prefix: "/recorder/",
    children: [
      {
        text: "トップページ",
        icon: "discover",
        link: "",
      },
      {
        text: "レコーダーの使い方",
        icon: "discover",
        link: "recorder-basic-overview",
      },
      {
        text: "シーン別便利機能",
        icon: "discover",
        link: "recorder-password-off",
      },
      {
        text: "よくある質問",
        icon: "discover",
        link: "faq03-language",
      },
    ],
  },
  {
    text: "映像伝送装置",
    icon: "discover",
    prefix: "/transfer/",
    children: [
      {
        text: "トップページ",
        icon: "discover",
        link: "",
      },
      {
        text: "全機種共通",
        icon: "discover",
        link: "common-basic-overview",
      },
      {
        text: "LAN-HD264E",
        icon: "discover",
        link: "encoder-instruction",
      },
      {
        text: "LAN-HD264D",
        icon: "discover",
        link: "decoder-instruction",
      },
    ],
  },
  {
    text: "ソフトウェア",
    icon: "discover",
    prefix: "/software/",
    children: [
      {
        text: "トップページ",
        icon: "discover",
        link: "",
      },
      {
        text: "PC（UMS、UMS-M）",
        icon: "discover",
        link: "pc-connect-recorder",
      },
      {
        text: "スマホ（iUMS、iUMS+）",
        icon: "discover",
        link: "mobile-ums-readme",
      },
    ],
  },
  {
    text: "会社HP",
    icon: "note",
    link: "https://isecj.jp/",
  },
]);
