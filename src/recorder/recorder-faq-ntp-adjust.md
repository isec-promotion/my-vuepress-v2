# NTPによる時刻補正が行われない

レコーダーでNTP補正する場合、レコーダーの時間が実際の時間よりも進み方向にズレている場合、ずれが9秒以内であれば補正しますがそれ以上にズレていると補正しません。

理由は下記図の通りで、進み方向にずれてしまうと時刻を補正した際に被る部分（下記図の黄色部分）のデータを上書きし以前の録画データが消えてしまう為です。

![](./images/recorder-ntp-adjust/008.jpg)

この為、進み方向に９秒以上ずれていた場合NTPで自動補正は行われず手動で補正する必要があります。

また9秒以内の場合NTPにより自動で補正されますが、その間のデータは消えずにレコーダーのメモリ内に保存されます。

保存されたデータはウェブブラウザのアドレス欄に下記の通り打ち込むと閲覧ができます。

http://<レコーダーのIPアドレス:レコーダーのwebポート/cgi-bin/timedup.cgi

実際に閲覧するまでの動画をご参照ください。

<iframe width="740" height="416" src="https://www.youtube.com/embed/Gk4lwWHG-_Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[Youtubeで見る](https://www.youtube.com/watch?v=Gk4lwWHG-_Y)

なおレコーダーの時刻が遅れる方向にずれていてそれを修正する場合はデータの上書きの心配がない為、制限はございません。


**アイゼック最新のレコーダーはこちら▼**
- [【16ch同時再生, 4K対応機種】ANEモデル 製品ページ](https://isecj.jp/recorder/recorder-ane)

**レコーダーの導入事例を確認する▼**
- [多機能なデジタルレコーダーを使った導入事例](https://isecj.jp/case/security-enhancement)
- [マルチクライアントソフトの導入事例](https://isecj.jp/case/netcafe-camera)
- [レコーダー・センサー・警報機を連携した独自システムの構築事例](https://isecj.jp/case/system-design)