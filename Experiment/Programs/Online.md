---
title: オンラインクラウド実験
layout: default
categories: [Experiment, Programs]
nav_order: 20
---


# オンラインクラウド実験
ここでは，PsychoPy + Pavlovia + クラウドワークスを用いたオンラインクラウド実験の方法についてまとめます．

## 環境の準備
まずは各種サービスのアカウント登録などが必要です．

### PsychoPy
Standaloneの [PsychoPy](https://www.psychopy.org/download.html?utm_source=chatgpt.com) を入れます．PsychoPy は Python を用いた心理学実験用のツールです．今回は実験プログラムのメインはこれで実装します．

ダウンロードできたら，`PsychoPy Builder` を起動してみます．

<center><img src="../figures/psychopy.png"></center>
人生に気付きを与えてくれるでしょう．


### Git
Git については細かく説明しませんが， Pavlovia は Git を使って環境の Sync を行うので PC に Git がないと同期エラーが出ます．整えておいてください．

### Pavlovia
オンライン実験を行うためのサービスです．ファイルサイズが大きい実験でもダウンロードのストレスなど低く出来るという長所があります．

まずは [Pavlovia](https://pavlovia.org/) でアカウントの登録 (Register) をします．

<center><img src="../figures/pavlovia0.png"></center>

<center><img src="../figures/pavlovia1.png"></center>

大学などの研究用アカウントが必要です．ない場合は課金．Corfirmation を終えたら，ログインしてみてください．問題なければこのようにアカウント設定ができます．

<center><img src="../figures/pavlovia2.png"></center>


### Pavlovia と PsychoPyの連携
PsychoPy Builderを開き， `Pavlovia,org` メニューの `User`，`Log into Pavlovia` を開き，自分の Pavlovia アカウントでログインします．

<center><img src="../figures/psychopy_pavlovia1.png"></center>

上手くログインできました．

<center><img src="../figures/psychopy_pavlovia2.png"></center>

そしたら一度 Pavlovia windowは閉じ，
<center><img src="../figures/psychopy_pavlovia3.png"></center>

`Sync` を試します．まだ何も Git のrepository設定をしていない場合，下記メッセージが出ます．そのまま作成しましょう．

<center><img src="../figures/psychopy_pavlovia4.png"></center>

すると下のメニューが表示されるので，任意のProject nameとフォルダの選択をします．フォルダは Git 管理するフォルダなので，この実験プロジェクトの親フォルダにしてください．（実験のメインプログラム(`.psyexp`)，刺激セット，その他ファイルが全て格納されるように．ただし他の関係ないのは含まれないように．たとえば `Desktop` は広すぎ．`Stimuli` は狭すぎです．）

<center><img src="../figures/psychopy_pavlovia5.png"></center>

上手くGit連携ができていれば，次のような `PsychoPy Runner` の画面がでます．

<center><img src="../figures/psychopy_pavlovia6.png"></center>

今回は `MyTest` というフォルダを設定しました．上手くmaster branch が作られたのが分かります．いったん Builder の方に戻り，`Experiment settings` を開きます．

<center><img src="../figures/psychopy_pavlovia7.png"></center>

`Online` タブを見るとこのようになっているはずです．

<center><img src="../figures/psychopy_pavlovia8.png"></center>

ほとんど空欄ですが，`Export HTML` が on Sync なことを確認してください．これは Git の Push 字に自動で HTML/JS を書きだす設定です．実験終了時の `End message` くらいは好きに変えてよいでしょう．

`Additional resources` や `Completed URL` は後ほど重要ですが一旦放置．

実験用に表示するwebページ (HTML) を作成するため，`File -> Export HTML` を実行します．
<center><img src="../figures/psychopy_pavlovia10.png"></center>

ローカルにhtmlやjsが生成されたことを確認してください．
<center><img src="../figures/psychopy_pavlovia11.png"></center>

できていれば，`Pavlovia.org-> Sync`をします．PsychoPy 側で何かを変えたら，その都度こうやって同期をしましょう．上手くいけば，ブラウザで Pavlovia プロジェクトを確認しても今追加したファイルが反映されているはずです．Git になれていない人にはややこしいかもしれませんが，とりあえず Sync しまくってください．変なファイルあげちゃって取り消したければ，ローカルでそのファイルを消してからSyncしてしまえば，ひとまずはOKです．

<center><img src="../figures/psychopy_pavlovia12.png"></center>

## 動作確認
では，準備が出来たので Online 実験の動作確認をしていきます．まず，今回は`PsychoPy`で特に実験プログラムを作らずデフォルトのままで進めていたので大した実験はできませんが，ちゃんとブラウザで今回作成したプロジェクトの HTML が表示されるのかを確認します．

Runner の方で先程出たメッセージの一番下の url をブラウザに入力しましょう．建てた Project のページが開くはずです．最初は下の写真でいう左下の Status がInactiveなはずですが，左下の Status を`Piloting` にしましょう．すると1時間有効な Pilot のトークン付きURL が発行されます．

<center><img src="../figures/psychopy_pavlovia9.png"></center>

すると右上の赤丸，`Pilot`が押せるようになっているはずなので押します．すると，別タブで `init...` みたいなメッセージが出てこんな画面になるはずです．PsychoPyの実装次第なので若干個人差出るかも．

<center><img src="../figures/psychopy_pavlovia13.png"></center>

ここで，`Participant` には実験案内の時点で被験者に「CrowdWorksのID(あるいはこちら指定のID)を入力してOKを押してください」等と指示すると，後の照合がやりやすくなります．こうした入力を被験者にやらせたくなければ後ほど `Experiment info` から消すこともできます．とりあえずここではてきとうな文字列を入れて `OK`.

<center><img src="../figures/psychopy_pavlovia14.png"></center>

上手くいけば，何やら別ウィンドウが開いて一瞬何かが表示され，感謝されます．これは実験の中身をまだ何も書いていないからで，正常です．

Pavloviaのページ下部で，Resultsのカウントが `submitted:1`になっていることを確認してください．

<center><img src="../figures/psychopy_pavlovia15.png"></center>

なっていれば，被験者のローカル実験->提出->Pavloviaでの結果記録のループが正常に出来たことになります．また，今は Pilot モードなのでデータはここには格納されず，実験終了時にローカルに吐き出される設定になっています．`RUNNING` にするとサーバーに上がりますが，クレジットを消費してしまうので今はやめておきます．

では次はいよいよ，実験データの中身をちゃんと取得できるかもうちょいまともな実験コードでチェックしていきます．

### 実装
多分将来的にはどこかでまとめますが，PsychoPy Builder での実験プログラムのGUI実装について簡単にまとめます．まずは Builder の画面（下記）の見方からです．

<center><img src="../figures/psychopy3.png"></center>

まず，**赤の領域**は「いま編集している Routine」のタブです．PsychoPy Builder では実験は複数の Routine (開始画面，試行，ITIなど) の組み合わせで作ります．ここに並んでいるのはそれぞれの部品の一覧で，クリックするとその Routine の編集画面（オレンジ・青）に切り替わります．どの Routine がどういった順番で実行されるのかはここではなく，後述の黄色領域で設定します．

**オレンジの領域**は，選択中の Routine の時間軸表示です．左側にその Routine を構成する要素（表示，再生する素材）が並び，右の棒がそれぞれの開始や終了タイミングを表します．バーの初めと終わりが Start/Stop に対応しています．この画面では，0秒で始まり無限に続く (回答待ち) 状態です．たとえば「注視点はずっと出し，キー入力は1.0秒から1.5秒の間だけ受け付ける」などの使い分けが見れます．

**青の領域**は，Routine の構成要素のパレットです．好きな要素をここから選んで追加していきます．クリックすると，それぞれの設定ウィンドウが開かれます．たとえば `text` なら表示するテキストの内容や色，大きさ，位置，表示時間などです．

最後に黄色の領域は全体の流れ (Flow) です．ここまでで設定した Routine をどういった順番やループで表示するかを設定します．この画面だと，まず `Start` を行い，その後は `trial`, `post`, `iti` がループで回るようになっています．`Insert Routine` で作成済みの Routine を選び，矢印の中で適切な位置にマウスで挿入します．`Insert Loop` は，ループ構造の導入です．基本的には実験はstart->loop->endの構成になるはずです．

今回はてきとうに Reaction time 課題を作ってみました．内容は下に列挙します．

<details markdown="1">
<summary>実装</summary>

とりあえず，デフォルトだと背景がグレーで嫌なので `Experiment settings` の `Screen` タブから `Background colour` を選び，black にしました．お好みです．

**Routine**: start, trial, post, iti

1. Start
まず `Insert routine` で (new) から `start` のRoutineを作成．パレットから text を選び，"Press SPACE to start" と内容を入れる．次に keyboard を追加し，Aloowed keys:space, Force end of Routine: ON, Store first keyなどの設定を行う（これは結構どうでもいい）

2. trial
実験の核．Insert routine で trial を追加し，textとして'Now!', あとキー入力の受付用にkeyboard を追加．
<center><img src="../figures/psychopy4.png"></center>

text color=whiteとし，それぞれstart=0, duration=''として無限に応答待ちにする．Keyboardの方は別途
- Allowed keys: space（テストなのでspaceでOK. 2択なら f,j 等）
- Store: first key
- Store RT: ON
- Force end of Routine: ON

<center><img src="../figures/psychopy5.png"></center>
としておく．

3. post
回答受付の合図．
- Insert Routine → post
- post に Text（名前 fix_green）
- Text: +
- Color: green
- Start: 0
- Stop: 0.2（例：200 ms）
- post の Routine settings で Duration を 0.2s にしてもOK

4. 
試行と試行の間の休憩．
- Insert Routine → iti
- iti に Text（名前 fix_grey）
- Text: +
- Color: grey
- Start: 0
- Stop: 0.5（例：500 ms）

として，最後にFlowを下記に整える．
<center><img src="../figures/psychopy6.png"></center>
</details>


完成したら Pavlovian と Sync させて，もう一度 Pilot を立てます．すると実装した内容が反映されて，実験ぽい画面がちゃんと表示されるはずです．Syncの際，前回から時間がたっていると Pavlovia との連携が切れているかもなので再ログインが必要なこともあるので注意してください．

<video src="../figures/first_demo.MP4" autoplay muted playsinline loop></video>

うまくいけばこんな感じ．