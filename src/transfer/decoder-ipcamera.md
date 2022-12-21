
# IPカメラの映像をモニタに出力
![](./images/decoder-ipcamera/000.jpg)


LAN-HD264Dのデコーダー機能を使用する事でIPカメラの映像をHDMI出力に変換する事ができます。

[[toc]]

## 設定画面を開く

1. LAN-HD264Dの設定画面を開きます。設定画面を開く方法は[こちら](./decoder-264d-setup.html#%E3%82%A6%E3%82%A7%E3%83%95%E3%82%99%E8%A8%AD%E5%AE%9A%E7%94%BB%E9%9D%A2%E3%81%AB%E3%83%AD%E3%82%AF%E3%82%99%E3%82%A4%E3%83%B3)参照してください。
   
右上の「Setup」をクリックします。

![](./images/decoder-ipcamera/005.jpg)

2. 「ネットワーク」＞「リモート」をクリックし、リモート設定画面に行きます。

![](./images/decoder-ipcamera/006.jpg)

3. 「Web Display」から「Live View」画面で表示したい画面を選びます。表示したい画面の設定は下の「リモート#〇」をクリックします。

![](./images/decoder-ipcamera/007.jpg)

## RTSPで接続する

4. IPカメラの設定は以下の通りです。（RTSPの場合

|  設定項目   |  意味/推奨設定   |
| ---- | ---- |
|  Remote Type   |  「RTSP」  |
|  メディアプロトコル   |  「TCP」  |
|  アドレス   |  rtsp://IPカメラのID:IPカメラのパスワード@IPカメラのIPアドレス/**1/stream1(～3)**  |
|  ポート   |  「IPカメラのHTTPポート」 |
|  Overlapped Connection   |  「有効」 |

IPアドレス例：rtsp://admin:password@192.168.0.100/1/stream1(～3)
（**太字部分**はIPカメラのメーカによって異なるためIPカメラメーカにご確認下さい。）
（アイゼック製のIPカメラは/**1/stream1～3**となり、stream3がアナログ出力用となります。）

![](./images/decoder-ipcamera/008.jpg)

## ONVIFで接続する

5. IPカメラの設定は以下の通りです。（ONVIFの場合）

|  設定項目   |  意味/推奨設定   |
| ---- | ---- |
|  Remote Type   |  「ONVIF」  |
|  メディアプロトコル   |  「TCP」  |
|  アドレス   |  「IPカメラのIPアドレス」  |
|  ポート   |  「IPカメラのHTTPポート」 |
|  ID   |  「IPカメラのID」  |
|  パスワード   |  「IPカメラのパスワード」  |
| Profile  |  右下の「Get Profile List」をクリックし、自動取得します。  |
|  Overlapped Connection   |  「有効」 |


![](./images/decoder-ipcamera/009a.jpg)

6. 設定が完了したら「適用」をクリックし、右上の「Live」をクリックし、映像を確認します。

![](./images/decoder-ipcamera/010.jpg)

7. IPカメラの映像を確認できます。

![](./images/decoder-ipcamera/011.jpg)




**H.２６５圧縮形式対応 最新の画像伝送装置はこちら▼**
- [【映像、音声、シリアルの3種類の信号を同時に伝送】エンコーダ、デコーダ兼用機 製品ページ](https://isecj.jp/transfer/lan-uhd265ed)

- [【4台のIPカメラの映像をモニタ表示】デコーダ 製品ページ](https://isecj.jp/transfer/lan-uhd265d-1)

- [【HDMIパススルー出力可能】エンコーダ 製品ページ（今冬販売開始予定）]()