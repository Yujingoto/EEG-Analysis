---
html:
  embed_local_images: false
  embed_svg: true
  offline: false
  toc: true

print_background: false
export_on_save:
  html: true

toc:
  depth_from: 1
  depth_to: 6
  ordered: false
---

<div class="header">
  <table class="fixed-table">
    <thead>
      <tr>
        <th class="mokuji">目次</th>
        <th><details><summary> Math </summary><ul class="gnav"><details><summary>基礎数学編</summary>
        <ul class="index">
        <li><a href="../../Math/Basic/basic.html">ホーム</a></li> 
        <li><a href="../../Math/Basic/multiplication.html">掛け算</a></li>     
        <li><a href="../../Math/Basic/trigonometric.html">三角関数</a></li>
        <li><a href="../../Math/Basic/complex.html">複素数</a></li>
        <li><a href="../../Math/Basic/calculus.html">微分・積分</a></li>
        <li><a href="../../Math/Basic/linear_algebra.html">線形代数</a></li>
        <li><a href="../../Math/Basic/statistics.html">基礎統計</a></li>
        </ul></details>
        <ul class="gnav"><details><summary>信号処理編</summary>
        <ul class="index">
        <li><a href="../../Math/Analysis/Analysis.html">ホーム</a></li> 
        <li><a href="../../Math/Analysis/fourier.html">フーリエ変換</a></li>
        <li><a href="../../Math/Analysis/wavelet.html">wavelet変換</a></li>
        <li><a href="../../Math/Analysis/hilbert.html">ヒルベルト変換</a></li>
        <li><a href="../../Math/Analysis/eeg.html">基本の脳波解析</a></li> <li><a href="../../Math/Analysis/phase_analysis.html">位相同期解析</a></li>
        </ul></details>
        <ul class="gnav"><details><summary>統計編</summary>
        <ul class="index">
        <li><a href="../../Math/Statistics/Statistic.html">ホーム</a></li> 
        <li><a href="../../Math/Statistics/distribution.html">確率分布</a></li>
        <li><a href="../../Math/Statistics/central_limit_theorem.html">大数の法則と中心極限定理</a></li>
        <li><a href="../../Math/Statistics/statistic.html">統計量と標本分布</a></li>                                                         <li><a href="../../Math/Statistics/test.html">統計的検定</a></li>
        <li><a href="../../Math/Statistics/anova.html">分散分析</a></li>
        <li><a href="../../Math/Statistics/logistic_regression.html">ロジスティック回帰</a></li>
        </ul></details>
        <ul class="gnav"><details><summary>その他</summary>
        <ul class="index">
        <li><a href="../../Math/Others/Others.html">ホーム</a></li> 
        <li><a href="../../Math/Others/ICA.html">独立成分分析</a></li> 
        <li><a href="../../Math/Others/CCA.html">正準相関分析</a></li>
        <li><a href="../../Math/Others/lagrange.html">ラグランジュの未定乗数法</a></li>
        <li><a href="../../Math/Others/Entropy.html">エントロピーと分布間距離</a></li>
        <li><a href="../../Math/Others/signal_detection.html">信号検出理論</a></li>
        </ul></details>
        </details></th>
        <th><details><summary> Analysis </summary>
        <ul class="gnav"><details><summary>EEGLAB</summary>
        <ul class="index">       
        <li><a href="../../Analysis/eeglab/eeglab.html">ホーム</a></li>                           <li><a href="../../Analysis/eeglab/setup.html">環境構築</a></li>
        <li><a href="../../Analysis/eeglab/import.html">データのインポート</a></li>
        <li><a href="../../Analysis/eeglab/prepro1.html">基本的な下処理</a></li>
        <li><a href="../../Analysis/eeglab/prepro2.html">発展的な下処理</a></li>
        <li><a href="../../Analysis/eeglab/analysis1.html">単被験者での解析</a></li>
        <li><a href="../../Analysis/eeglab/analysis2.html">被験者群での解析</a></li>
        </ul></details>
        <ul class="gnav"><details><summary>MNE-python</summary>
        <ul class="index">
        <li><a href="../../Analysis/MNE/MNE.html">ホーム</a></li>
        <li><a href="../../Analysis/MNE/import.html">データのロード</a></li>
        <li><a href="../../Analysis/MNE/preprocessing.html">前処理</a></li>
        </ul> </details></details></th>
        <th><details><summary> Experiment </summary>
        <ul class="gnav">       </ul> </details></th>
        <th><details><summary> Simulations </summary>
        <ul class="gnav"><details><summary>環境構築</summary>
        <ul class="index">
         <li><a href="../../Simulation/Setup/Setup.html">ホーム</a></li>
        <li><a href="../../Simulation/Setup/environment.html">Python環境構築</a></li>
        <li><a href="../../Simulation/Setup/gpu.html">pythonでのGPUセットアップ</a></li>
        <li><a href="../../Simulation/Setup/jupyter.html">Jupyterセットアップ</a></li>
        <li><a href="../../Simulation/Setup/julia.html">Juliaセットアップ</a></li>
        </ul></details>
        <ul class="gnav"><details><summary>非線形力学</summary>
        <ul class="index">
        <li><a href="../../Simulation/NonlinearDynamics/Nonlinear-dynamics.html">ホーム</a></li>
        <li><a href="../../Simulation/NonlinearDynamics/dynamics.html">力学系とは</a></li>
        <li><a href="../../Simulation/NonlinearDynamics/stability.html">線形安定性解析</a></li>
        <li><a href="../../Simulation/NonlinearDynamics/stability_nonlinear.html">非線形系の安定性解析</a></li>
        </ul></details>
        </details></th>
      </tr>
    </thead>
  </table>
</div>

<h1><span>03</span>基本的な下処理</h1>

## 目次

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [目次](#目次)
- [下処理の必要性](#下処理の必要性)
- [リファレンスの再設定](#リファレンスの再設定)
  - [リファレンスとは](#リファレンスとは)
  - [全平均](#全平均)
  - [特定電極](#特定電極)
- [フィルタリング](#フィルタリング)
  - [フィルタとは](#フィルタとは)
  - [eegfilt](#eegfilt)
- [ラインノイズのフィルタ](#ラインノイズのフィルタ)
  - [Notch filter](#notch-filter)
  - [Cleanline](#cleanline)
  - [データセットの確認](#データセットの確認)
- [電極位置の読み込み](#電極位置の読み込み)
  - [電極位置の必要性](#電極位置の必要性)
  - [電極位置の読み込み](#電極位置の読み込み-1)
- [電極の除外](#電極の除外)
  - [電極を除外する理由](#電極を除外する理由)
  - [電極の除外](#電極の除外-1)
- [エポッキング](#エポッキング)
  - [エポッキングとは](#エポッキングとは)
  - [エポックの切り出し](#エポックの切り出し)
  - [ベースライン補正](#ベースライン補正)
- [エポックの除外](#エポックの除外)
  - [自動で除外](#自動で除外)
  - [統計的な方法](#統計的な方法)
- [ICA](#ica)
  - [ICAの計算](#icaの計算)
  - [Componentの手動選択](#componentの手動選択)
  - [Componentの自動選択(ICLabel)](#componentの自動選択iclabel)
  - [Componentの自動選択(ADJUST)](#componentの自動選択adjust)
  - [Componentの除去](#componentの除去)
- [データセットの保存](#データセットの保存)

<!-- /code_chunk_output -->

## 下処理の必要性


## リファレンスの再設定
### リファレンスとは

### 全平均
リファレンスの再設定をする場合
<center><img src="../figures/rereference.png" width=80%></center>

全電極の平均をReferenceとして使用する場合

<center><img src="../figures/average-ref.png" width=80%></center>

### 特定電極
特定電極の信号をreferenceとして使用する場合

<center><img src="../figures/reref.png" width=80%></center>

## フィルタリング
### フィルタとは

### eegfilt
<center><img src="../figures/filter1.png" width=80%></center>

<center><img src="../figures/filter2.png" width=80%></center>

<center><img src="../figures/filter3.png" width=80%></center>

<center><img src="../figures/filt4.png" width=80%></center>

## ラインノイズのフィルタ

### Notch filter
ノッチフィルタでもいいけど
<center><img src="../figures/notch.png" width=80%></center>

### Cleanline
なんかcleanlineの方が優秀らしい？
<center><img src="../figures/cleanline.png" width=80%></center>

色々設定

<center><img src="../figures/cleanline2.png" width=80%></center>

計算ちう

<center><img src="../figures/cleanline3.png" width=80%></center>

フィルタしてるだけだし名前はそのままにしよう

<center><img src="../figures/cleanline4.png" width=80%></center>

### データセットの確認
これはフィルタとは関係ないけどこのタイミングで

<center><img src="../figures/dataset.png" width=80%></center>

クリックで他のデータセットに戻れる

dataset sizeみてみるとめっちゃ減ってる

## 電極位置の読み込み
### 電極位置の必要性
### 電極位置の読み込み
計測した脳波データに対応する電極情報を読み込んでいきます．
> Edit -> Channel locations

をクリックします．
<center><img src="../figures/chanloc1.png" width=80%></center>

`Look up channel locations?`のウィンドウが開いたら，使用する電極配置のモデルを選択します．デフォルトではMNIなんとかが選ばれていると思いますが，基本はこれで大丈夫です．そのまま`Ok`を押します．

<center><img src="../figures/chanloc2.png" width=80%></center>

すると`Edit channel info`のウィンドウが表示されます．これは各チャンネルについて，読み込んだ頭部モデル上でのx,y,z座標や角度などなどの情報の一覧です．いじる必要は基本的にはないはずですが，一応，何も枠が埋まってないチャンネルがないかなどは確認すると良いかもしれません．

referenceのチャンネルやAUXポートの信号は当然座標がありませんが，それ以外の普通のEEG channelなら埋められているはずです．

確認が済んだら`Ok`を押してウィンドウを閉じます．また，ここで`Save(other type)`や`Sav(as .ced)`を選択することで，使用した脳波計用のlocationファイルを出力することもできます．

<center><img src="../figures/chanloc3.png" width=80%></center>

電極位置の読み込みが無事に終了していれば，メイン画面に戻ったときに`Channel locations`の内容が`No(labels only)`から`Yes`に変わっていると思います．変わっていなければ，何か操作をミスって読み込めてないのでもう一度確認してください．

<center><img src="../figures/chanloc4.png" width=80%></center>


## 電極の除外
### 電極を除外する理由
### 電極の除外

目視で削除することもできますが，その基準が恣意的になってしまうことは避けられません．そこで自動で異常な電極を検知してREJECT判定を出してくれる関数の紹介です．

> Tools -> Automatic channel rejection

を選択します．
<center><img src="../figures/ch-reject.png" width=80%></center>

`Reject channel`のウィンドウが表示されたら，対象とする電極と除外する基準を選択します．眼電や筋電は脳波に比べたら異質な信号であることは間違いないので対象から外した上で関数にかけます．そのため，たとえば今回筆者が用いたデータだと66ch中最後の2chは眼電だったりと脳波ではないので削って，`1:63`，つまり1から63の電極のみを対象にしました．

次の除外基準ですが，これは説明にやや統計?の知識が必要になるので省きます．とりあえずKurtosisで良いと思います．その下の数字もいじらなくていい．結果，電極の数字だけ調整すれば大丈夫です．`Ok`を押して関数を走らせます．


<center><img src="../figures/ch-reject2.png" width=80%></center>

すると数秒計算が走って，そのあと`Scroll componet activities`のウィンドウが開き，ノイズっぽいやばいチャンネルを赤く表示してくれた脳波データの一覧が...

<center><img src="../figures/ch-reject3_b.png" width=80%></center>


表示されます．赤くなってるのがたしかにやばそうな電極かどうか確認してみてください．納得したら右下の`REJECT`を押して，選択された電極を排除します．

<center><img src="../figures/ch-reject4_b.png" width=80%></center>

chを削ったので少し名前を変えてデータセットを保存してみました．ここで確認してみると，`Channels per frame`が今まで66だったのに65になりましたね．やばい電極を取り除いたからです．ちなみに，どの電極がどんな判定をされていたのかはコマンドウィンドウに表示されているはずです．
<center><img src="../figures/ch-reject5.png" width=50%></center>

今回使ったデータはP6が怒られたようですね．

## エポッキング
以上で，まず最初にやっておくべき下処理は終了です．ここから，少しずつデータに合わせた処理をしていきます．

### エポッキングとは
安静時脳波の計測実験でもない限り，基本的には脳波研究で行う実験はなんらかのタスクを数十から数百試行被験者に行ってもらうものになっていると思います．これら全体に共通する脳活動をなんらかの方法で抽出して議論するのが脳波解析の主な目的です．

脳波データは実験中常に計測しているため，休憩時間やタスク間の時間といった，解析には利用しないデータも多く含まれています．なので課題に関係のある部分だけを切り出す必要があり，この切り出したセグメントをエポックと言います．

### エポックの切り出し

では実際にエポックの切り出しをしてみます．
> Tools -> Extract epochs

をクリックします．

<center><img src="../figures/epoch0.png" width=80%></center>

`Extract data epochs`のウィンドウが表示されたら，エポックの切り出しに使うevent=トリガーの選択と，eventのタイミング前後それぞれ何秒の範囲で各エポックを切り出すのかを指定します．

トリガーの選択は右上の`...`から行います．S2やS4というのは実験時に出力していたトリガーによるので，これは実験次第で個数も表記も異なります．複数選択も可能です．選択したらOkを押しましょう．

次に時間の指定ですが，トリガー前はある程度の時間を確保しておいたほうが良いです．理由はあとで説明しますが，だいたい短くて0.5，長くて2秒もあれば良いかと思います．刺激後にどれだけの時間を切り出すかは実験次第です．解析したい対象の脳活動がどの時間幅で発生しているのかを考えましょう．

ただし，解析の都合上実際の試行時間よりも少し多めに時間窓を区切ることを推奨します．たとえば刺激の呈示が1.5秒で，解析に使いたいメインも1.5秒だったとしても，あえて2秒まで切り取るというようなことです．理由は解析の時に．

<center><img src="../figures/epoch1.png" width=80%></center>

エポックを切り出す時に選択するトリガーですが，最初は解析したい対象の全てを選んでおきましょう．この先も下処理を行うので，この段階で条件毎に分けて取り出していると，それぞれ同じ処理を繰り返す必要があり面倒です．自分は4条件の実験だったので4条件全てを取り出しました．

### ベースライン補正
<center><img src="../figures/rm-baseline.png" width=80%></center>

さて，切り出すエポックを選んでOKを押すと，`Baseline removal`というウィンドウが表示されると思います．これはエポックごとにベースラインを設定し，脳波データを補正するための機能です．

脳波は計測中，常に頭皮との接触部位で若干ずつ抵抗が変化したりすることで，何もしていなくても値がゆるやかに変化します．その変化とタスク由来の変化を区別するため，それぞれのエポックではタスク前数100ms~数1000msの時間で平均を取り，これをベースラインとしてエポック全体から引きます．こうすることで，タスク前の脳波からの変化分だけが残るため，エポック間での脳波を比較することが出来るようになるわけです．

ということで，そのためにエポックの切り出しはトリガーよりちょっと前の時間までで行いました．自分はトリガーが出される直前の1.5~2秒の間は注視点を見ているだけの時間なので，この1.5秒を使ってベースラインを計算させました．

実験デザインの時から，ここを上手く組み込んでおきましょう．このベースライン時間は脳活動に変化があってはいけないので，たとえば注視点の画面に切り替わるのが-1500msのタイミングだったとしたら，ベースラインに-1500から0を使ってしまうと注視点呈示によるERPが乗ってしまいよろしくありません．この場合は-1000からとかにしましょう．

さて，ベースライン補正も終わったのでＯｋを押します．

<center><img src="../figures/epoch2.png" width=80%></center>

メニューに戻ると，先程までと色々変わっています．epochの数，スタートと終わりの時間などの情報が追加されました．ここで，意図したエポックの数や長さがちゃんと切り出せているのか確認をしておきましょう．

## エポックの除外
ベースラインで補正していようと，ノイズまみれで使えない試行はやはり存在します．脳波に比べて筋電は圧倒的に大きな振幅をもった信号であることや，電極が動くことで生じた抵抗の変化による電圧(計測脳波)への影響などによって，タスク中に被験者がまばたきをしたり体を動かしたりしてしまった試行は汚くなってしまいがちです．

こうした試行は，解析しようにも脳波がノイズに埋もれてしまっているので意味をなさなく，むしろ試行で平均化してしまう脳波解析においては害悪でしかありません．よってそうした汚いエポックを解析対象から外しておく必要があります．

### 自動で除外
<center><img src="../figures/eprj1.png" width=80%></center>

> Tools -> Automatic epoch rejection

を選択します．
<center><img src="../figures/eprj2.png" width=80%></center>

除外するエポックの基準を設定します．脳波のスケールからして，1000μVを超える信号が取れるのはおかしいのでこれを基準(デフォルト設定)として，それよりもでかい信号が計測されているエポックは除外することにしてみます．

<center><img src="../figures/eprj3.png" width=80%></center>

`Ok`を押して計算させると，少したってからこのようなplotが表示されるはずです．試行区切りになった脳波データに対して，EEGLABがreject判定をしたエポックを確認できます．黄色になっているのが除外判定です．

<center><img src="../figures/eprj4.png" width=80%></center>

除外判定だけど残しておいて良いと思ったり，逆に残されているけど明らかに変なのなんかはエポックをクリックすると黄色がついたり外れたり，つまり除外マークのオンオフを切り替えられます．

全体を確認してＯＫそうだったら，右下の`REJECT`を押して黄色でマークされたエポックを除外しましょう．

<center><img src="../figures/eprj5.png" width=80%></center>

はい．

<center><img src="../figures/eprj6.png" width=80%></center>

結果です．先程までは80trialだったデータが66になりました．テスト用に自分が被験者になって取ったデータなんですけど，途中から気持ち悪くなってしまって動きまくっていたんですよね...多動気味な人には脳計測実験は辛いですよねえ．

### 統計的な方法
<center><img src="../figures/eprj7.png" width=80%></center>
他にも，半自動でやってくれるものとして

> Tools -> Reject data epochs -> Reject data (all methods)

があります．これは様々な指標（先程のように振幅の範囲や全試行の平均からの離れ具合など）を用いて，逸脱したエポックを除去するものです．が，自由度が高い分，よく分からないうちは変数の指定が大変でしょうし今は細かく解説しないことにします．

<center><img src="../figures/eprj8.png" width=80%></center>

## ICA
ICAはIndependent Component Analysis, 独立成分分析とよばれる手法で，簡単に言うと計測された信号をいくつかの成分，Componentに分解するものです．脳波の場合，脳波，筋電，眼電，計測機械由来のノイズ...などに分けられます．

与えられた脳波信号を数学的にあれこれしていろんな成分に分解してみて，その結果を眺めて「脳波っぽい」成分以外を削っていきます．早速やってましょう．

### ICAの計算

<center><img src="../figures/ica1.png" width=80%></center>

> Tools -> Decompose data by ICA

<center><img src="../figures/ica2.png" width=80%></center>

ICAの計算アルゴリズムはいくつかの種類があるので選択します．基本は`runica`で良いと思います．そのまま`Ok`を押します．

<center><img src="../figures/ica3.png" width=80%></center>

ICAの計算が始まりました．めっちゃ長いです．結構重めな計算なので，ノートPCなんかを使っている人は割と時間かかります．コーヒーでも入れてゆっくり待ちましょう．

途中でやめたい場合は`Interupt`を押しますが，まぁ辛抱強く待ってください．

<center><img src="../figures/ica4.png" width=100%></center>

完了すると，`Interupt`のウィンドウが閉じてコマンドウィンドウにDoneと表示されます．
この時，メニューを見てみると`ICA weights`がYesになっていれば無事にICAの計算が終わったことになります．

結果を見てみましょう．

### Componentの手動選択

ICAで分解した成分の中から，本来解析したい「脳波っぽい」成分だけを残し，他のいらない成分を消していきます．まずはICAの結果確認がてら，手動でやっていきましょう．

> Tools -> Reject data using ICA -> Reject components by map

を開きます．
<center><img src="../figures/ica5.png" width=80%></center>

EEGLABのICAは電極数と同じだけの成分に分解します．今回は65chのデータだったので，1-65のコンポーネントが選択されています．このまま`Ok`を押します．

<center><img src="../figures/ica6.png" width=80%></center>

時間をかけてゆっくりと，65個のコンポーネント，成分のトポマップが表示されます．トポマップとは頭上での電位分布です．上の出っ張ってるのが鼻で，頭を上から見ているイメージです．赤や青が±で強い電位が乗っている場所です．


<center><img src="../figures/ica7.png" width=80%></center>

さて，この65個の中から，「脳波っぽいデータ」「脳波っぽくないデータ」を判断し取り除いていく必要があります．どんな基準で見ていくのかと言うと，大きく

- 電位分布
- 周波数特性
- 試行特異性

になると思います．とりあえず，気になる成分の上の緑の□を押して詳細を見てみましょう．たとえば24個目だと

<center><img src="../figures/ica8.png" width=80%></center>

このような詳細が確認できます．左上が電位分布，右上が試行特異性およびERP，下が周波数特性です．

まずこのコンポーネントは分布的に明らかに右目に偏っているので，眼電と判定できそうです．

試行で見るとだいたい20~40トライアルのあたりでめちゃくちゃ出てます．きっとその時疲れて集中力が切れ，目を動かしまくっていたのでしょう．

さらに周波数で見ても怪しいです．脳波はBergerの報告以降一貫して，α波(10~15Hzあたり)あたりに強いピークを持つことが知られています．また解析の特性上，低周波ほどパワーが強く高周波になるにつれ弱くなる，右肩下がりの分布になるはずです．しかしこの成分は20Hz以上の高周波が強く，これは筋電が由来であると推定できます．

以上の理由からRejectです．真ん中下の`ACCEPT`をクリックすると，`REJECT`に変わります．Epoch rejectionの時同様，こうしてrejectする成分にマーカーをつけていき，あとでまとめて削除します．色を変えたら`Ok`を押してウィンドウを閉じ，この調子で他の成分も見ていきましょう．

<center><img src="../figures/ica9.png" width=80%></center>

てな具合でこいつらも怪しいので消していきます．

選び終わったら，右下の`Ok`を押して選択を終了します．

さて，明らかにノイジーなやつは良いですが，微妙なところにいるやつだと疑わしきは罰せよ派と，疑わしきは罰せず派がいるので難しいところです．更に「ここら辺の電極のデータを解析したいからなぁ...」なんて研究者の心の声までも聴こえてきたりしてしまうと，恣意的な下処理にならざるを得ません．そこで，やはりおすすめは自動化することです．

### Componentの自動選択(ICLabel)
自動で除去するコンポーネントを選択してくれる関数その1，ICLabelを利用する方法です．

> Tools -> Classify components using ICLabel -> Label components

<center><img src="../figures/ica10.png" width=80%></center>

出てきたポップアップでは

<center><img src="../figures/ica11.png" width=50%></center>

デフォルトを選択．

<center><img src="../figures/ica12.png" width=80%></center>

表示するのは全電極，周波数は見たい範囲でてきとうに．`Ok`

<center><img src="../figures/ica13.png" width=80%></center>

表示される結果は，先程みたICAのトポマップに加え，それぞれのコンポーネントの下に「なにっぽい成文か」の判定結果も表示されています．便利ですね．詳細を見てみましょう．

<center><img src="../figures/ica14.png" width=80%></center>

Eye:97%と，EEGLAB的にはどう見ても眼電だという結果になりました．このように，この関数は得られたコンポーネントが脳波，筋電，眼電，心拍，計測器由来のノイズ，その他のどれに見えるかの判定をしてくれます．あとはこれに従い，怪しいのを消していく作業をすればOKです．

### Componentの自動選択(ADJUST)
次も同じように，やはり自動でコンポーネントの中身を見て怪しい奴をマークしてくれるADJUST関数です．

> Tools -> ADJUST

<center><img src="../figures/ica15.png" width=80%></center>

ADJUSTは判断結果をテキストファイルとして別途出力します．( ~~別にいらないんだけど~~ )名前をてきとうに決めて`Ok`．


<center><img src="../figures/ica16.png" width=50%></center>

やはりトポマップで，削除すべきコンポーネントを選択してくれます．これは...結構ひどいデータですね．我ながら被験者がひどい．向いてないですね自分．


<center><img src="../figures/ica17.png" width=80%></center>

ともかく，赤くなっているのが削除すべきコンポーネントです．詳細をクリックして開いて，削除すべきと思ったら`ACCEPT`のボタンを押して`REJECT`に変えておきましょう．すると赤だったボタンがピンクになります．ピンクはREJECTマーカーです．どんどんやっていきましょう．

<center><img src="../figures/ica18.png" width=80%></center>

終わりました．18？ものコンポーネントを削ることになりましたが，まあやってみましょう．`Ok`を押して終了します．

### Componentの除去
いよいよ，手動なりICLabelなりADJUSTなりで選択した，削除すべきコンポーネント達を消す手順になります．

> Tools -> Remove components from data

すると，
<center><img src="../figures/ica19.png" width=80%></center>

選択されているコンポーネントの一覧の確認が出ます．

<center><img src="../figures/ica20.png" width=80%></center>

問題なければ`Yes`．

<center><img src="../figures/ica21.png" width=80%></center>

さらに念押しされます．大丈夫なら`Accept`します．
ここでかなり脅されていますが，やらかしたならデータセットから前のバージョンに戻れば良いだけです．気軽にアクセプトしましょう．(ちゃんと作業途中でデータセットを保存している人は，です．)

削除は一瞬で終わります．メニューを見てみると，分かりにくいですがデータ量がちょっと減っているはずです．

<center><img src="../figures/ica22.png" width=80%></center>


## データセットの保存
ここまでで，基礎的な下処理はひとまず終わりです．作業もひと段落なので，ここでデータセットを保存しておきましょう．

保存しておかないと，一度EEGLABを閉じてしまったらせっかく行っていた計算結果が消えてしまいます．忘れずに保存しましょう．

さて．データセットの保存は

> File -> Save current dataset

です．どちらでも良いです．

<center><img src="../figures/save.png" width=80%></center>

分かりやすく名前をつけておきましょう．

<center><img src="../figures/save2.png" width=80%></center>

豆知識ですけど，EEGLABのUIを使って解析とかをやる場合，_(アンダーバー)は下付き文字の記号として使われてしまうので名前に使うのは避けた方が良いです．癖で何回も同じミスして汚い図が出てます．(この記事も多分そう)


<div style="text-align: center;">

【[次へ](./prepro2.html)】

</div>