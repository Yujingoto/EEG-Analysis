---
html:
  embed_local_images: false
  embed_svg: true
  offline: false
  toc: true

print_background: false

export_on_save:
  html: true
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

<h1><span>00</span>非線形力学とは</h1>

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=4 orderedList=false} -->

<!-- code_chunk_output -->

- [力学系とは](#力学系とは)
- [線形と非線形](#線形と非線形)
- [線形力学系と非線形力学系](#線形力学系と非線形力学系)
- [非線形力学系と神経科学](#非線形力学系と神経科学)

<!-- /code_chunk_output -->


##　力学系とは
まず初めに，線形とか非線形とかの前に力学系とは何かについて定義を与えます．筆者は個人的に，高校で物理を習った際に「力学」と聞いても，「力の学...？別に自分は壁を押すとかボールを投げるとか，そんなことに興味ないし...」と思っていました．

事実，授業で扱うのはそういった話ばかりで，全く興味をそそられなかった経緯があります．しかしこれはナンセンスで，科学のあらゆる分野に関係するトピックであったということにずっと後になって気付きました．まずはその心を共有しようと思います．

力学系は英語では，**Dynamical system**と言います．力学は**Dynamics**．

なんのことはない，英語を聞くだけで自分の認識の大きな間違いに気付きます．力学は別にボールは投げたら落ちるとかそんな何百年から知られている常識を擦り続ける暇な学問ではなく，ダイナミクスを扱う分野だったのです．

ダイナミクスと言うと聞いたことがある人も多いと思いますが，要は時間発展のことです．**力学系とは，ある規則に従って値が時間発展していく変数(量)の集合のこと**です．もちろん，この規則は確率的だったり，決定論的だったりします．確率的な方はちょっと難しいので，今回は決定論的な力学系についてのみまとめていきます．

また，ある規則，というのはもちろん数式で記述されます．

## 線形と非線形
力学系の意味が確認できたところで，次は線形と非線形の違いについてです．といっても非線形の定義は，線形ではないもの，です．なので線形についてメインで考えます．

系が従う規則が，「係数×入出力(の微分)」の項のみで表すことができる場合を線形な関数と言います．たとえば，入力を$x$, 出力を$y$とした場合は

$$
y = Ax\\
$$

と出来るのが線形で，

$$
y = x^2 \\
y = \log{x}\\
y = e^x + \sin{x}
$$

などは全て非線形な関数です．もう少し正確に見ていくと，ある関数$f$が線形であるとは

#####
- 加法性： 任意の$x,y$に対して，$f(x+y) = f(x) + f(y)$
- 斉次性： 任意の$x$，任意のスカラー$k$に対して，$f(kx) = kf(x)$
#####

が成り立つということです．

たとえば，$f(x) = 2x$は$ f(1+2) = 2+4 = f(3)$で，かつ$3\times f(2) = 12 = f(3\times 2)$なので，加法性も斉次性も満たす線形な関数ですが，$f(x) = e^x$などはこれを満たしません．

## 線形力学系と非線形力学系
と，ここまで確認すると，線形力学系と非線形力学系の意味が分かります．線形力学系は線形な規則で時間発展する変数の集合で，非線形力学系は非線形な規則にしたがうものです．

時間発展の仕方は，物理では時間に関する微分方程式で記述されます．線形力学系と非線形力学系の違いは，この微分方程式が線形か非線形か，という問題だとも言い換えられます．

たとえば，バネの運動方程式

$$
m\frac{dt^2}{d^2x} = -kx
$$

は一次の項だけ，つまり非線形な項が出てこないので，線形系です．一方で振り子の運動方程式

$$
m\frac{dt^2}{d^2x} = -k \sin x
$$

はsinが非線形なので，非線形です．

一般的に，周期運動をするような単純なものでもない限り非線形力学系について解を求めたり議論するのは難しいです．従って多くの場合，基礎教養では線形系や一部の特殊な非線形系ばかりを扱います．




## 非線形力学系と神経科学
なかなか扱いにくい点を置いておけば，非線形力学系では様々な興味深い現象が生じます．これは線形な系では決して見られないことですが，実は自然界にありふれた極めて重要な現象であることも多いです．
　たとえば，**パターン形成，リズム現象，同期現象，カオス，分岐**といったトピックが代表的です．



リズムと同期は特に，マクロな神経科学にはダイレクトにつながる内容となります．このページの最初に，脳波解析などの背景には非線形力学系の考え方があるといったのはこれに由来します．



カオスも脳とよく関わる議論がなされる内容で，特にカオスの淵と呼ばれる特殊な領域で脳は駆動していると考えるような学説は今でもまぁまぁ強く，自分も2023年現在はそんな考え方の元に研究を進めています．

さて，そんな重要な非線形力学系ですが，先程も触れたように扱いが難しいという難点があります．そこで1900年代以降，いくつかの工夫をこらしてどうにか議論を適用する手法が編み出されています．
　
次回は，そんな手法の一つである線形安定性解析について解説します．


<div style="text-align: center;">

【[線形安定性解析へ](./stability.html)】

</div>