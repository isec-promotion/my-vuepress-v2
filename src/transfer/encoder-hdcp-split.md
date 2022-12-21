# HDCP 解除

![](./images/encoder-capture-image/001.jpg)

**目次**
[[toc]]

## はじめに

Chromecast のように常時 HDCP オンのデバイスを LAN-HD264E に直接接続すると HDCP（著作権保護機能）により真っ暗な画面が表示されます。

Chromecast は HDCP をオフにすることができないため、映像を伝送する場合は HDCP 解除できるスプリッターを経由させる必要があります。

今回使用したスプリッター
[https://item.rakuten.co.jp/ishin-r/10000036/](https://item.rakuten.co.jp/ishin-r/10000036/)

## HDCP 解除手順

Chromecast をスプリッターの HDMI IN に接続します。

![](./images/encoder-hdcp-split/001.jpg)

HDMI ケーブルを HDMI OUT に接続し、LAN-HD264E の HDMI IN に接続する。

![](./images/encoder-hdcp-split/002.jpg)

ライブビュー画面を確認し、真っ黒ではないことを確認します。

![](./images/encoder-hdcp-split/003.jpg)

## 映像が表示されない場合

映像が表示されない場合はライブビュー画面右上の Setup をクリックします。

![](./images/encoder-hdcp-split/004.jpg)

Video&Audio のビデオをクリックします。

![](./images/encoder-hdcp-split/005.jpg)

Input Auto Detect をクリックします。

![](./images/encoder-hdcp-split/006.jpg)

検出された解像度をクリックし、Refresh をクリックします。

![](./images/encoder-hdcp-split/007.jpg)

適用をクリックし、設定を保存します。

![](./images/encoder-hdcp-split/008.jpg)
