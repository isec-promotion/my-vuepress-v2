# 映像をVLCで見る

![](./images/encoder-vlc/000.jpg)

## はじめに

LAN-HD264Eの映像をVLCプレーヤーでRTSP接続にて閲覧が可能です。

[[toc]]

## VLCでの閲覧手順【RTSP】
RTSPで接続する際の手順は以下の通りです。

1. まずVLCプレーヤーを立ち上げます。
（VLCプレーヤーとはオープンソースのプレーヤーでほぼ全てのコーデックに対応した非常に便利なプレーヤーです。[こちら](https://www.videolan.org/vlc/index.ja.html)よりダウンロードが可能です）

![](./images/encoder-vlc/001.jpg)

2. 次にメニューバーの「メディア」⇒「ネットワークストリームを開く」を選択致します。

![](./images/encoder-vlc/002.jpg)

3. ポップアップ画面が出てきますので「ネットワークプロコトル」の中にRTSPアドレスを入力します。

LAN-HD264EのRTSPアドレスは以下の通りです。

rtsp://LAN-HD264EのID:パスワード@IPアドレス/video1+audio1

例：rtsp://admin:password@192.168.0.100/video1+audio1

![](./images/encoder-vlc/003.jpg)

**H.２６５圧縮形式対応 最新の画像伝送装置はこちら▼**
- [【映像、音声、シリアルの3種類の信号を同時に伝送】エンコーダ、デコーダ兼用機 製品ページ](https://isecj.jp/transfer/lan-uhd265ed)

- [【4台のIPカメラの映像をモニタ表示】デコーダ 製品ページ](https://isecj.jp/transfer/lan-uhd265d-1)

- [【HDMIパススルー出力可能】エンコーダ 製品ページ（今冬販売開始予定）]()