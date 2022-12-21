import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/camera/": [
    {
      icon: "discover",
      text: "商品の基本操作",
      prefix: "",
      link: "",
      collapsible: true,
      children: [
        "camera-plugin",
        "camera-face-comparison",
        "camera-face-capture",
        "camera-muilti-target",
        "camera-line-crossing",
        "camera-area-detection",
        "camera-linkage-methods",
        "camera-queue-management",
        "camera-ddns",
        "camera-wifi-setup",
        "camera-sd-monitor",
        "camera-ipv6-setup",
        "camera-p2p-connect",
      ],
    },
  ],
  "/recorder/": [
    {
      icon: "discover",
      text: "使い方",
      prefix: "",
      link: "",
      collapsible: true,
      children: [
        "recorder-basic-overview",
        {
          text: "１初めの操作",
          icon: "discover",
          children: ["recorder-first-operation"],
        },
        {
          text: "２リアルタイムでの監視",
          icon: "discover",
          children: ["recorder-monitor-realtime"],
        },
        {
          text: "３録画方法の選択",
          icon: "discover",
          children: [
            "record01-introduce",
            "record02-sensor",
            "record03-motion",
            "record04-schedule",
            "record05-manual",
          ],
        },
        {
          text: "４録画の再生",
          icon: "discover",
          children: ["recorder-play-overview", "recorder-play02-howto"],
        },
        {
          text: "５録画のバックアップ",
          icon: "discover",
          children: ["backup02-hdd", "backup03-usb"],
        },
        {
          text: "６メンテナンス",
          icon: "discover",
          children: [
            "recorder-ntp-adjust",
            "faq04-ntp",
            "faq-upgrade-firmware",
          ],
        },
      ],
    },
    {
      icon: "discover",
      text: "シーン別便利機能",
      collapsible: true,
      children: [
        "recorder-password-off",
        {
          text: "遠隔監視",
          icon: "discover",
          children: [
            "faq05-remote-viewer",
            "function-ip-connection",
            "recorder-p2p",
            "recorder-dijital-zoom",
            "function-spot-monitoring",
          ],
        },
        {
          text: "便利機能（通知など）",
          icon: "discover",
          children: [
            "function05-sound",
            "function02-ios",
            "recorder-system-event",
            "recorder-event-log",
          ],
        },
        {
          text: "メンテナンス",
          icon: "discover",
          children: ["recorder-log-message", "recorder-mail-notification"],
        },
      ],
    },
    {
      icon: "discover",
      text: "よくある質問",
      collapsible: true,
      children: [
        "faq03-language",
        "faq04-ntp",
        "recorder-ums-event-message",
        "recorder-ums-update",
        "recorder-password-remote",
        {
          text: "お問い合わせ時に必要な情報を知りたい",
          icon: "discover",
          children: ["faq02-serial"],
        },
        {
          text: "各部の名称と働き",
          icon: "discover",
          children: ["recorder-names-functions"],
        },
        {
          text: "保障・アフターサービス",
          icon: "discover",
          children: ["recorder-warranty-after-sales"],
        },
      ],
    },
  ],
  "/transfer/": [
    {
      icon: "discover",
      text: "全機種共通",
      prefix: "",
      link: "",
      collapsible: true,
      children: [
        "common-basic-overview",
        "common-setup",
        "common-firmware-update",
        "common-config-download",
        "common-usb-record",
        "common-snmp",
        "common-srt",
        "common-transfer",
      ],
    },
    {
      icon: "discover",
      text: "LAN-HD264E",
      collapsible: true,
      children: [
        "encoder-instruction",
        "encoder-264e-setup",
        "encoder-remote",
        "encoder-vlc",
        "encoder-streaming",
        "encoder-capture-image",
        "encoder-hdcp-split",
      ],
    },
    {
      icon: "discover",
      text: "LAN-HD264D",
      collapsible: true,
      children: [
        "decoder-instruction",
        "decoder-264d-setup",
        "decoder-rtsp",
        "decoder-ipcamera",
        "decoder-output-change",
        "decoder-multiple",
      ],
    },
  ],
  "/software/": [
    {
      icon: "discover",
      text: "PC（UMS、UMS-M）",
      prefix: "",
      link: "",
      collapsible: true,
      children: [
        "pc-connect-recorder",
        "pc-ums-add-list",
        "pc-ums-backup",
        "pc-ums-capture",
      ],
    },
    {
      icon: "discover",
      text: "スマホ（iUMS、iUMS+）",
      collapsible: true,
      children: ["mobile-ums-readme", "mobile-ums-android"],
    },
  ],
});
