# LAN-HD264Dセットアップ

![](./images/decoder-264d-setup/000.jpg)

[[toc]]

## はじめに

この記事ではLAN-HD264DにIPアドレスを割り当て、LAN-HD264Eの映像を中継する手順を説明します。

## LAN-HD264Dのセットアップ

LAN-HD264Dを取り出したらLANケーブルを接続します。本機はPoE対応のため、PoEハブからLANケーブルを接続すると電源が供給されます。

![](./images/decoder-264d-setup/001.jpg)

PoE非対応のハブを使用する場合は電源ケーブルを本体に接続してください。

**PoE給電と電源ケーブルの両方を接続すると故障しますので絶対に両方を接続しないよう注意ください**

![](./images/decoder-264d-setup/002.jpg)

## IPアドレス変更

本機のデフォルトのIPアドレスは192.168.10.100です。ローカルネットワークのIPアドレスが192.168.10.XXXではない場合はTrue Managerを使ってIPアドレスを変更します。

True Managerは[こちら](https://isecj.jp/download/?category=%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2&product=TrueManager)からダウンロードして、インストールしてください。

True Managerを立ち上げたらServer＞IP Discoveryをクリックします。

![](./images/decoder-264d-setup/003.jpg)

ネットワーク内のデバイスが検出されます。IPアドレスが192.168.10.100のデバイスを選択し、IP Changeをクリックします。

![](./images/decoder-264d-setup/004.jpg)

IPアドレスを変更したらブラウザを立ち上げアドレスバーにIPアドレスを入力します。
入力が完了したらChangeをクリックします。

### 固定IPでの接続方法

- IP Mode：Fixed IP（固定IP）を選択します。
- IP Address：IPアドレスを入力します。
- Subnet Mask：255.255.255.0を入力します。
- Gateway：ゲートウェイ（ルーター）のIPアドレスを入力します。
- Base Port：初期値は2222です。
- HTTP Port：初期値は80です。

![](./images/decoder-264d-setup/005.jpg)

### DHCPでの接続方法

- IP Mode：DHCP（動的IP）を選択します。
- IP Address：入力不要です。
- Subnet Mask：入力不要です。
- Gateway：入力不要です。
- Base Port：初期値は2222です。
- HTTP Port：初期値は80です。

![](./images/decoder-264d-setup/005b.jpg)


IPアドレスを変更してから数十秒後にDiscoverをクリックするとIPアドレス変更後の端末が一覧に表示されます。

![](./images/decoder-264d-setup/006b.jpg)

追加するサーバーにチェックを入れ、Add Serverをクリックします。

![](./images/decoder-264d-setup/006.jpg)

各種項目を入力し、Addをクリックします。

- Server Name：名前を入力します。
- Address：IP Changeで入力した値が入力済です。
- Port：IP Changeで入力した値が入力済です。
- HTTP Port：IP Changeで入力した値が入力済です。
- ID：adminが入力済です。
- Password：パスワードを入力します。

![](./images/decoder-264d-setup/007.jpg)

## ウェブ設定画面にログイン

追加したサーバーにチェックを入れます。

![](./images/decoder-264d-setup/008.jpg)

IDとパスワードが正しい場合、ステータスが「Connected」になります。

![](./images/decoder-264d-setup/009.jpg)

右クリックしてWeb Setupをクリックします。

![](./images/decoder-264d-setup/010.jpg)

ブラウザが立ち上がるのでIDとパスワードを入力し、ログインをクリックします。
※Edgeで設定画面を見る場合、映像プレビューが見れません。Internet Explorer を使用してください。

![](./images/decoder-264d-setup/011.jpg)

ログインに成功すると設定画面が表示されます。
Network＞Remoteをクリックします。

![](./images/decoder-264d-setup/012.jpg)

Remote#〇 にLAN-HD264EやIPカメラのIPアドレスやポート番号を入力し、Applyをクリックします。

### LAN-HD264Eと接続する場合

- Remote Type：Normalを選択します。
- Media Protocol：TCPを選択します。
- Address：LAN-HD264EのIPアドレスを入力します。
- Port：LAN-HD264Eのポート番号を入力します。
- Remote Channel：Channel#1を選択します。
- Use Streaming Server：Off
- SS IP Address：初期値0.0.0.0。設定しません。
- SS Port：初期値2222。設定しません。
- ID：adminを入力します。
- Password：LAN-HD264Eのパスワードを入力します。
- Overlapped Connection：Disableを選択します。

![](./images/decoder-264d-setup/013.jpg)

### RTSPでIPカメラと接続する場合

- Remote Type：RTSPを選択します。
- Media Protocol：TCPかUDPを選択します。
- Address：rtsp://IPカメラのID:IPカメラのパスワード@IPカメラのIPアドレス/**1/stream1**を入力します。

例：rtsp://admin:password@192.168.0.90/1/stream1

**太字部分**はIPカメラのメーカーによって異なります。
- Port：RTSPポート（554）を入力します。
- Overlapped Connection：EnableまたはDisableを選択します。

![](./images/decoder-264d-setup/013b.jpg)

### ONVIFでIPカメラと接続する場合

- Remote Type：ONVIFを選択します。
- Media Protocol：TCPかUDPを選択します。
- Address：IPカメラのIPアドレスを入力します。
- Port：IPカメラのHTTPポートを入力します。
- ID：IPカメラのIDを入力します。
- Password：IPカメラのパスワードを入力します。
- Profile：設定画面右下のGet Profile Listをクリックし、プロファイルを取得します。
- Overlapped Connection：EnableまたはDisableを選択します。

IPカメラのHTTPポートはメーカーによって初期値が異なりますが
80,8000,8080が初期値として設定されていることが多いです。

![](./images/decoder-264d-setup/013c.jpg)


接続が成功するとVideo＆MediaのInformation画面に中継中の映像のビットレートやfpsが表示されます。

![](./images/decoder-264d-setup/014.jpg)

画面右上のLiveをクリックすると、ライブ映像が表示されます。

![](./images/decoder-264d-setup/015.jpg)

![](./images/decoder-264d-setup/016.jpg)

これでセットアップは完了です。


**H.２６５圧縮形式対応 最新の画像伝送装置はこちら▼**
- [【映像、音声、シリアルの3種類の信号を同時に伝送】エンコーダ、デコーダ兼用機 製品ページ](https://isecj.jp/transfer/lan-uhd265ed)

- [【4台のIPカメラの映像をモニタ表示】デコーダ 製品ページ](https://isecj.jp/transfer/lan-uhd265d-1)

- [【HDMIパススルー出力可能】エンコーダ 製品ページ（今冬販売開始予定）]()