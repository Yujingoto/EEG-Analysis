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

<h1><span>05</span>被験者群での解析</h1>

## 目次

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [目次](#目次)
- [STUDYの作成](#studyの作成)
- [ERP](#erp)
- [ERSP](#ersp)
- [ITC](#itc)

<!-- /code_chunk_output -->


## STUDYの作成
STUDYを作成するためのデータセットの用意が出来たら，実際にSTUDYを作成していきます．

<center><img src="../figures/study1.5.png" width=80%></center>

はじめに，STUDYのために設定を少しいじります．
> File -> Preferences

を開き，STUDY and file options の1つ目のチェックボックスにチェックをいれます．STUDYを作る際に計算量を節約するための設定のようなものです．

そのままOkを押して保存します．

<center><img src="../figures/study0.png" width=80%></center>

ではSTUDYファイルを作成していきましょう．まず，STUDYにまとめるためのセットファイルを読み込みます．

> File -> load existing dataset

で，下処理をして保存しておいた被験者分のセットファイルを読み込みます．

<center><img src="../figures/study1.png" width=80%></center>

選択して開きます．

<center><img src="../figures/study2.png" width=80%></center>



<center><img src="../figures/study3.png" width=80%></center>

読み込めました．ここまでの画面は今までと何も変わりません．では次に，読み込んだセットファイルをSTUDYにまとめます．

> File -> Create study -> Using all loaded datasets

<center><img src="../figures/study3.5.png" width=80%></center>

を押し，`Create a new study set`のウィンドウをだします．あるいは，

> File -> Create study -> Browse for datasets

で最初からデータセットをこのタイミングで引っ張ってきても良いです．

<center><img src="../figures/study4.png" width=80%></center>

ここで，読み込みたかったデータセットが左のリストにいることを確認します．Pageを次に送ればさらに10人ずつ表示されているはずです．今回はテストなので2人分表示しています．

まずは一番上のランで，studyの名前を決めます．ここでは`test`としました．タスク名だとかは使ったことがまだないです．

次に，各データセットに最低限必要な，`subject`欄を埋めていきます．s01とかsub1とかといった命名が多いと思いますがなんでも良いです．

他にもセッションの番号だとかrunだとかgroupだとかがありますが，これは必須ではなく実験によって，研究によって埋めたり埋めなかったり，というか埋めると便利な使い方が出来たりといったものです．今回は入れません．

データセットの確認と，命名が済んだら`Ok`を押しウィンドウを閉じます．

<center><img src="../figures/study8.png" width=80%></center>


すると画面が変わり，先程まではデータセット用のメニューというかメイン画面だったのがSTUDY用に変わります．

基本は見れば分かると思うので項目の説明は省略．

まずは作成したSTUDYの設定を行っていきます．

> Study -> Select/Edit study design(s)

でウィンドウを開きます．
<center><img src="../figures/study5.png" width=80%></center>
<center><img src="../figures/study6.png" width=80%></center>

`Edit STUDY design`では，STUDYファイルでどんな比較というか，全条件全被験者のデータに対してどのような要因の解析をしていくのかの設定を行います．

下の`Edit the independent variables`の欄で`New`を選択，`Add variable`のウィンドウでは，トリガーを使った条件間比較の実験なら`type`を選択し，読み込みたいトリガー情報を全て選択します．

<center><img src="../figures/study7.png" width=80%></center>

選択したら完成なので`Ok`でウィンドウを閉じます．

最後に，STUDYファイルに読み込んだセットファイル達を解析にかけます．EEGLAB側で用意してくれている解析だけですが，一通りの基本の解析はこれでやってくれます．そこがEEGLABの便利なところです．

> Study -> Precompute channel measures

をクリックして計算の設定を行います．

<center><img src="../figures/a.png" width=80%></center>

計算には結構時間が係ると思います．ここら辺まで来るとマシンスペックの影響をかなりうけるので，人によっては何時間もかかったりするかもしれません．

あまりにも長い場合には，根気強く待つか，諦めて計算を軽くするために設定を弄りなおすかが必要です．コマンドウィンドウに`Done`と表示されたら計算が終了で，次のステップに進めます．

<center><img src="../figures/study9.png" width=80%></center>

いよいよ解析結果とご対面が出来ます．

> Study -> Plot channel measures

から，`View and edit current channels`のウィンドウを開きます．

<center><img src="../figures/study10.png" width=80%></center>

ここでちょっとパラメータをいじって，下の`Plot ***`を押せば解析結果が表示されます．その際，`Select channel to plot`と`Select subject to plot`から任意の対象を選ぶことで，特定チャンネルのみだったり，特定被験者のみの結果をplotする事も出来ますし，`Sel all`を押しておくことで全ての結果を表示することも選べます．

とりあえず今は，全電極全被験者を選択して進めます．

## ERP
まずは王道，ERPから見ていきます．
<center><img src="../figures/study10.png" width=80%></center>

`Plot ERPs`の前に，表示するERPについてオプションの設定を行います．
`Plot ERPs`の間に挟まれた`Params`をクリックして開きます．

<center><img src="../figures/study11.png" width=80%></center>

`ERP plotting options`で，表示するERPの時間窓やリミット，フィルタの設定が出来ます．時間窓は最初エポックを切り出すときにはベースラインの計算だったりのためにトリガー前もかなり長め(自分の場合は500ms)で取っていましたが，そこは変化がない時間なのでplotの時には興味ありません．てきとうに削ってplotします．

リミットは別にいらないと思います．特殊な要求の時だけかな．フィルタについても同様で，元々下処理の際にフィルタをかけていると思うのでそんなに気にする必要はありません．ということで時間窓だけ入力して`Ok`を押します．

ではERPを表示しましょう．左の`Plot ERPs`を押します．
少し時間がかかって，下のように条件の数だけトポマップが表示されるはずです．

自分は4条件だったので4つのトポマップが表示委されました．それぞれ，全電極のERPがびっしり描画されています．

<center><img src="../figures/erp1.png" width=80%></center>

てきとうに1つ選んでクリックしてみればその条件その電極のERPのみの詳細が表示されます．

<center><img src="../figures/erp2.png" width=80%></center>


この時，視覚実験なら後頭，聴覚実験なら側頭といった対応する領域に，下の画像のように特徴的な反応が見られなかったら，タスクが悪いか下処理が悪いか，いずれにせよ喜ばしくありません．よほど特殊な課題でもない限り，刺激直後(100-500ms)のあたりに強く上下に揺れが見られるはずです．

見られない場合には下処理で変なことをしてないかもう一度確認し，異常がないようなら実験が悪いです．やり直しを検討しましょう．大体の場合はトリガーのタイミングが上手くいっていません．機械の不調とかで無ければ実験デザインの変更が必要かもしれません．

さて，この状態でもERPの結果を確認することは可能ですが，条件間での比較をしようと思うと条件ごとにplotをしないといけないため，面倒です．
(余談ですがEEGLABのこの電極を選ぶ操作，電極が密集している上にメニューバー的なものまで表示されるせいですごいやりにくくて嫌いです．)

そのため，1つのトポマップに条件毎の波形をまとめて表示してみます．

設定を変えましょう．

<center><img src="../figures/erp3.png" width=80%></center>

ERP plotting formatの1つ目(あるいはデザインによっては2つ目)のチェックボックスにチェックを入れ，再度plotしてみます．

<center><img src="../figures/erp4.png" width=80%></center>

1つのトポマップにまとまりました．詳細表示してみても

<center><img src="../figures/erp5.png" width=80%></center>

こんな感じに条件ごとの波形が重なって見えます．`S2`とかの表示はトリガーの名前ですね．多分どうにかしたらいじれるはずです(figの凡例をクリックして強引に修正する方法もあります)．

これで，ROIが決まっていた場合は対象の電極のERPで条件間比較をしてやればERP解析ですね．

他にも，左ではなく右側のメニューでall subjectsを選択して`Plot ERP(s)`を実行すると，それぞれの被験者で計算したERPと，被験者平均のERPを同時に出力するといったことも可能です．
<center><img src="../figures/erp6.png" width=80%></center>
<center><img src="../figures/erp7.png" width=80%></center>

電極1個見てみるとこんな感じ．

<center><img src="../figures/erp8.png" width=80%></center>

あるいは全被験者ではなく被験者単体を選んで実行することで，1人分だけでplotもできます．

<center><img src="../figures/erp9.png" width=80%></center>
<center><img src="../figures/erp10.png" width=80%></center>


## ERSP
次は時間周波数解析です．同じ画面の下の方にいます．ERSPと，次にやるITCは同じ計算というか処理の結果として算出される解析手法なので，パラメータはまとめて調節します．見てみましょう．

<center><img src="../figures/itc1.png" width=80%></center>

まずERP同様に時間窓です．これも，本来のベースラインである必要はありません．(一個注意点というか，解析の数学上の罠があるのですが最初はあえて嵌りに行きます．)

次に周波数のレンジ．これは見たい範囲をそのまま入れましょう．ただし下処理でフィルタにかけているなら，必ずその範囲内に収まるようにplotしてください．つまり4から40Hzとかってフィルタかけたのに1から70Hzでplotするとかはだめです．多分結果自体は出るのですが，その結果に意味はありません．

あとはパワーに制限をかけることが出来ますがこれは特にやりません．
ではplotしましょう．まずは`Plot ERSPs`を押します．


<center><img src="../figures/ersp1.png" width=80%></center>

結果が表示されました．ERP同様，各条件につき全電極の時間周波数plotが表示されています．ではてきとうな電極を選んで詳細を確認してみましょう．

<center><img src="../figures/ersp0-1.png" width=80%></center>

変ですね．やたら横に間延びしているなぁと思ったら，時間窓が150くらいから850くらいの狭い範囲に限局されてしまっています．plotのパラメータは先程設定した-500から1500なので，バグを疑ってしまうわけですが，これには訳があり，解析の落とし穴があります．

<center><img src="../figures/ersp0-0.png" width=80%></center>

pre-computeの際，上記のように1から70Hzの波を，サイクル3の波で解析させています．この詳細は数学の方に投げますが，簡単に言うと周波数解析の計算の際には，ある程度の周期の信号が必要になります．周期の長さは周波数に依存して，低周波なら長く，高周波なら短い時間の信号を使って計算することになります．

今回自分は1~70Hzの波で計算させましたので，低周波(1Hz)はだいたい1500msに1回くらい計算ができるという計算になります．これのせいで，plotしようにも前後の1500msはそもそもデータがないことになるので，このようなplotになってしまうわけです．

ということで，計算をやり直してみます．1Hzじゃなく3Hzを下限にします．そうすると必要な長さも1/3になるので，-500-1500 msは十分に計算されて使える範囲の窓ということになります．



<center><img src="../figures/ersp0-2.png" width=80%></center>

計算させなおしてplotし直し．

<center><img src="../figures/ersp0-3.png" width=80%></center>

無事に求めていた範囲のplotが出せました！
てきとうにだした写真なので結果の良し悪しは許してください．



## ITC
Inter trial Coherence，ITPCとかPhase Locking Factorとかいろんな呼び方されますが，試行間位相ロッキングを見る解析です．

plotの設定はERSpの時と同様です．
<center><img src="../figures/itc1.png" width=80%></center>

これ．ただし1からだと上手くいかなくて計算しなおしをしているので，ここでも周波数のレンジはそれに合わせたものにする必要があります．

また，ITC1の上限値の設定ですが，これも普通に使う事を考えれば弄る必要はありません．`Plot ITCs`でplotします．

<center><img src="../figures/itc2.png" width=80%></center>
<center><img src="../figures/itc3.png" width=80%></center>

<div style="text-align: center;">

【[次へ](./analysis1.html)】

</div>