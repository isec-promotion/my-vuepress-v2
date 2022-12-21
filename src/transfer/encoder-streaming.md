# YouTube Liveでストリーミングする

![](./images/encoder-streaming/000.jpg)

## はじめに

LAN-HD264Eの映像をYouTube Live等の映像配信サービスでストリーミングするにはPCと配信ソフト OBSが必要です。
[[toc]]



## 配信ソフト OBSのインストール

OBSをインストールします。

ダウンロード先↓

[https://obsproject.com/ja/download](https://obsproject.com/ja/download)

[![](./images/encoder-streaming/001.jpg)](https://obsproject.com/ja/download)


## 映像の取り込み方法

インストール完了後、OBSを立ち上げ、ソースの「＋」をクリックし、「メディアソース」を選択します。

![](./images/encoder-streaming/002.jpg)

「新規作成」を選択し、「OK」をクリック。

![](./images/encoder-streaming/003.jpg)


「ローカルファイル」のチェックを外し、入力にyoutube配信したいカメラのRTSPコードを入力し、「OK」をクリックします。

LAN-HD264Eの場合

- rtsp://ID:PASS@IPadress/video1+audio1

- 例（rtsp://admin:password@192.168.0.90/video1+audio1)

![](./images/encoder-streaming/004.jpg)

## ストリームキーの取得

配信用URLが正しく入力されている場合、ダッシュボードにIPカメラの映像が映ります。

Youtube等の動画配信サイトで配信を行うにはストリームキーを取得する必要があります。

「設定」をクリックします。

![](./images/encoder-streaming/005.jpg)


配信タブ＞サービス「Youtube/ Youtube Gaming」を選択し、「ストリームキーを取得」をクリックします。

ブラウザが開き、Youtube Liveのダッシュボードが表示されます。

![](./images/encoder-streaming/006.jpg)


ブラウザからYoutubeのストリームキーを取得できます。

ストリーミングソフトウェアを選択します。

ストリームキーの取得には**Youtubeアカウント**と**電話番号**が必要です。

電話でライブ配信用のアカウントの取得申請を行い。24時間後にストリームキーが取得できるようになります。

![](./images/encoder-streaming/007.jpg)

エンコーダー配信タブを選択し、ストリームキーのコピーボタンをクリックします。

![](./images/encoder-streaming/008.jpg)

OBSに戻り、ストリームキー入力後、OKをクリックします。

![](./images/encoder-streaming/009.jpg)


配信開始をクリックするとライブ配信が始まります。

![](./images/encoder-streaming/010.jpg)


- 配信のエンコーダや画質、ビットレートを変更したい場合は「出力タブ」
- 配信の解像度とfpsを変更したい場合は「映像タブ」

![](./images/encoder-streaming/011.jpg)

の設定を変更してください。

**H.２６５圧縮形式対応 最新の画像伝送装置はこちら▼**
- [【映像、音声、シリアルの3種類の信号を同時に伝送】エンコーダ、デコーダ兼用機 製品ページ](https://isecj.jp/transfer/lan-uhd265ed)

- [【4台のIPカメラの映像をモニタ表示】デコーダ 製品ページ](https://isecj.jp/transfer/lan-uhd265d-1)

- [【HDMIパススルー出力可能】エンコーダ 製品ページ（今冬販売開始予定）]()