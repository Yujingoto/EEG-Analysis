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

<h1><span></span>独立成分分析</h1>

Independent Component Analysis (ICA) と呼ばれる多変量解析の手法です．だいたい90年代頃に確立されました．まずどういったものかと言うと，観測された信号を独立な複数の信号の線形な重ね合わせとして再表現するものです．

といってもよくわからないと思うので，我々も実は日頃からICAをやっていますよという話からしましょう．

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=4 orderedList=false} -->

<!-- code_chunk_output -->

- [お気持ち](#お気持ち)
- [求め方](#求め方)

<!-- /code_chunk_output -->


## お気持ち
皆さん毎日夜には駅前の居酒屋やバーで楽しくお酒を嗜んでいる事かと思いますが，実はこの時我々の脳は独立成分分析をしているのです．

飲み屋では多くの人間が同時に声を発し，食器の音やどこかのコールの音，厨房の音と無数の音が同時に我々の耳=脳に送られてきます．しかしどういうわけか，その音がどこの誰の声か，厨房の音なのか食器の音なのか判断できますよね．つまり，与えられた音の時系列データ(これは一つのデータに重ねられて聴こえてる) を複数の信号源に分解しているわけです．

我々は特に意識せずとも当たり前のように出来るこの作業ですが，実はPCにやらせるととんでもなく難しかったのです．それをどうにか実現しましょうという事で出来たのが現在の ICA です．

　脳波の研究に何の役に立つのかですが，端的に言えばノイズの除去や脳活動の特徴抽出です．脳波はだいたい 32 とか64ch の電極を使って計測するわけですが，そこには残念ながら眼球運動由来の電位や筋肉の電位など，脳波ではない成分も乗ってしまっています．これらは脳波に比べて電位も大きいので，脳波の解析の際に邪魔以外のなにものでもなく，親の仇のように憎むべき存在です．

もう分かるかと思いますが， "脳波" 信号を分解し，真の脳波信号と眼電，筋電，などに分解してあげるのに使えるのが独立成分分析です．実用では，こうして分解したデータのうち眼電や筋電由来と思われる成分だけ取り除いてあげれば綺麗に脳波だけ見れるわけですね．すくなくとも目的はそんなとこです．



## 求め方
　長くなりましたが日本語はこれくらいにして，早速数理に入りましょう．まず元の時系列信号を $\mathbf{x}(t)$ とします．これが，初めに仮定より線形な $(N \geq 2)$ 個の信号源 ($\mathbf{s}(t)=[s_i(t), s_2(t),...s_N(t)]$) からの信号の重ね合わせによってN個のセンサに観測されているとします．ここで信号源とセンサーの個数が一緒なのに違和感を覚える人もいると思いますが，とりあえず置いてください．実際脳波のICAも基本的にチャンネル数と同じ数に分解します．するとこの関係は

$$
\mathbf{x}(t) = A \mathbf{s}(t)^T
$$

と表せます．ここで A は $N\times N$ の係数行列で，$a_{ij}$ は $i$ 番目のセンサで観測される $j$ 番目の信号源からの信号の係数です．この値が大きいのは信号源の影響を強く受け，小さいのはあまり受けていない事を意味します．


　ではここで，今回の問題で求めたいのは $\mathbf{s}(t)$ ですよね．なので $\hat{\mathbf{s}}(t)$ 的な行列として $\mathbf{y}(t)$ を定義し，

$$
\mathbf{y}(t) = \mathbf{W} \mathbf{x}(t)
$$

という式をたてます．実数の分離行列$\mathbf{W}$を元信号にかけて $\mathbf{y}(t) = [y_1(t), y_2(t),...,y_N(t)]$ で表される分離信号に分解する事を考えます．分離行列も $N\times N$ の成分をもっていて，それぞれのセンサの値をどれだけ反映させて分離信号を生成するのか，を分離信信号の数だけ行います．この $\mathbf{y}(t)$ が綺麗に独立するように $\mathbf{W}$ を更新していくのが独立成分分析の手順です．

　ではその独立性をどう表すか，というところですが，$\mathbb{D}_{KL}$  を使います．正確には相互情報量です．相互情報量は，複数の変数があったときにその同時分布と周辺分布の積との間のKL距離を測るものでしたね．両者が全く同じ分布である時，0 になるものだったので，相互情報量が0になるときは変数が全て独立である，という事を表せるのでした．これを使います．

$$
p (\mathbf{y}) = p(y_1, y_2,...,y_N) \qquad \text{同時分布}\\
p (\mathbf{y}) = \Pi_{i=1}^N p(y_i) \qquad \text{周辺分布}
$$

こいつらのKL距離が相互情報量だから

$$
\mathbb{D}_{KL}(\mathbf{y}) = \int p(\mathbf{y}) \log \frac{p(\mathbf{y})}{\Pi_{i=1}^N p(y_i)} d\mathbf{y} \tag{1}
$$

と表せます．この時，式 (1) が0になるのは $p(y_1, y_2,...,y_N) =\Pi_{i=1}^N p(y_i) $ が成り立つ，つまり独立な信号源として仮定した$\mathbf{y}$がちゃんと独立である時になります．よって最小化しましょう．

$$
\mathbf{\hat W} = \argmin_{\mathbf{W}} \mathbb{D}_{KL}(\mathbf{y}|\mathbf{W}) \nonumber \\
= \argmin_{\mathbf{W}} \int p(\mathbf{y}|\mathbf{W}) \log \frac{p(\mathbf{y}|\mathbf{W})}{\Pi_{i=1}^N p(y_i|\mathbf{W})} d\mathbf{y} \tag{2}
$$

式(1)が0になるように分離行列$\mathbf{W}$を逐次更新していけばいいわけですね．最小化する逐次更新の仕方はいくつかあって，最有力?なのが勾配法を用いるものです．勾配法についてまだちゃんと勉強できていないので今は式だけ．

$$
\mathbf{W} \leftarrow \mathbf{W} - \eta \mathbf{E}[\phi (\mathbf{y})\mathbf{y}^T - I]\mathbf{W}^{-T} \tag{3}
$$

この更新式(2)に従って評価式 (1) を更新していけば相互情報量を最小化できて，無事に元の$\mathbf{x}(t)$を独立成分$\mathbf{y}(t)$を取り出すことが出来るわけですね．正直最後だけまだ分からん．でも最小化したいってのは分かるのでとりあえずヨシ！

<div style="text-align: center;">

【[ホーム](.././../index.html)】

</div>

| <details><summary> Math </summary><ul class="gnav"><li><a href="../../Math/Basic/basic.html">基礎数学編</a><ul class="index">     <li><a href="../../Math/Basic/calculus.html">掛け算</a></li>             <li><a href="../../Math/Basic/trigonometric.html">三角関数</a></li>      <li><a href="../../Basic/complex.html">複素数</a></li>             <li><a href="../../Math/Basic/calculus.html">微分・積分</a></li>       <li><a href="../../Math/Basic/basic.html">基礎統計</a></li>        </ul> <li><a href="../../Math/Analysis/Analysis.html">信号処理編</a><ul class="index"><li><a href="../../Math/Analysis/fourier.html">フーリエ変換</a></li>                                                  <li><a href="../../Math/Analysis/wavelet.html">wavelet変換</a></li>   <li><a href="../../Math/Analysis/hilbert.html">ヒルベルト変換</a></li>   <li><a href="../../Math/Analysis/eeg.html">基本の脳波解析</a></li>       <li><a href="../../Math/Analysis/phase_analysis.html">位相同期解析</a></li>        </ul>                                            <li><a href="../../Math/Statistics/Statistics.html">統計編</a><ul class="index"><li><a href="../../Math/Statistics/distribution.html">確率分布</a></li>                                                  <li><a href="../../Math/Statistics/central_limit_theorem.html">大数の法則と中心極限定理</a></li>                                     <li><a href="../../Math/Statistics/statistic.html">統計量と標本分布</a></li>                                                         <li><a href="../../Math/Statistics/test.html">統計的検定</a></li>       <li><a href="../../Math/Statistics/anova.html">分散分析</a></li>        </ul></details>  |                                    <details><summary> Analysis </summary><ul class="gnav"><li><a href="../../Analysis/eeglab/eeglab.html">EEGLAB</a><ul class="index">                                             <li><a href="../../Analysis/eeglab/setup.html">環境構築</a></li>                                                        <li><a href="../../Analysis/eeglab/import.html">データのインポート</a></li>                                                   <li><a href="../../Analysis/eeglab/prepro1.html">基本的な下処理</a></li>                                                     <li><a href="../../Analysis/eeglab/prepro2.html">発展的な下処理</a></li>                                                         <li><a href="../../Analysis/eeglab/analysis1.html">単被験者での解析</a></li>                                                      <li><a href="../../Analysis/eeglab/analysis2.html">被験者群での解析</a></li>   </ul> </details>   |                                    <details><summary> Experiment </summary><ul class="gnav">       </ul> </details> |                                      <details><summary> Simulations </summary><ul class="gnav"><li><a href="../../Simulation/Simulation.html">環境構築</a><ul class="index">                                             <li><a href="../../Simulation/Setup/environment.html">Python環境構築</a></li>                                                    <li><a href="../../Simulation/Setup/gpu.html">pythonでのGPUセットアップ</a></li>                                                     <li><a href="../../Simulation/Setup/jupyter.html">Jupyterセットアップ</a></li>                                                     <li><a href="../../Simulation/Setup/julia.html">Juliaセットアップ</a></li></ul><li><a href="../../Simulation/Simulation.html">非線形力学</a><ul class="index">                                             <li><a href="../../Simulation/NonlinearDynamics/Nonlinear-dynamics.html">非線形力学系とは</a></li>                                                    <li><a href="../../Simulation/NonlinearDynamics/stability.html">線形安定性解析</a></li>                                                     <li><a href="../../Simulation/NonlinearDynamics/stability_nonlinear.html">非線形系の安定性解析</a></li></ul></details> |                                     
| ----| ---- | ----|----|