---
title: 変分ベイズ推定
layout: default
categories: [Math, Others]
nav_order: 20
---

# 変分ベイズ推定

[EMアルゴリズム](../Others/EM.html) は隠れ変数として $z$ がいる時，変分下界を使ってパラメータ $\theta$ を点推定する最尤法の解法でした．が，これにはいくつか課題点があります．

- $\theta$ の分布がなだらかだったり多峰の時うまくいかない
- 隠れ変数が1層 $z$ の時しか使えない
- 過学習してしまう

だそうです．結構つらいですよね．とりあえず解決法として考えられるのは点での推定じゃなくて確率分布にしちゃうことと，なんらかの形で正則化して過学習を防ぐことでしょうか．後者はともかく，前者は簡単です．ベイズ推定を使えばいいですよね．


## 変分ベイズ推定
[最尤推定](../Statistics/estimation.html#最尤推定)と[MAP推定](../Statistics/estimation.html#最大事後確率推定(MAP推定))，[ベイズ推定](../Statistics/estimation.html#ベイズ推定)については統計編にまとめていますが，最尤法は尤度が最大になる $\theta$ を，最大事後確率推定は事後確率が最大になる $\theta$ を点推定する手法なのに対し，ベイズ推定は事後分布自体を使う手法でした．

そのベイズの考え方をいれた EM アルゴリズムが変分ベイズ EM アルゴリズム? VB-EM アルゴリズムです．最尤法の時の EM アルゴリズムでは $z$ は確率変数だったけど $\theta$ は最大化できる特定の値でしたね．これも確率変数にしちゃうのがこれからやることです．

まず，やりたいのはこれまでに得られたデータ集合 $X$ の確率，$p(X)$を最大化するパラメータの事後分布を考えることです．これはベイズモデルが持ってる，推定の根拠となるものなのでモデルエビデンスなんて言います．


$$
\begin{align}
  p(X) = \iint p(X,z,\theta)dzd\theta
\end{align}
$$

を最大化するんですね．

最尤法の時同様，確率分布qを導入して，この式の最大化に必要な変分下界を求めます．

$$
\begin{align}
  \log p(X) &= \log \iint p(X,z,\theta)dzd\theta\\
  &=\log \iint q(z,\theta|X)\frac{p(X,z,\theta)}{q(z,\theta|X)}dzd\theta \geq \iint q(z,\theta|X) \log \frac{p(X,z,\theta)}{q(z,\theta|X)}dzd\theta = L(q(z,\theta))
\end{align}
$$

ということで，変分下界 $L(q(z,\theta))$ が求まりました．が，問題なのは推定したい $q(z,\theta)$ が同時分布の形をとっていることです．それぞれの全ての組み合わせを考慮しているわけですね．これだと面倒なので，変分ベイズ推定では $q$ の変数間に独立性を仮定します．つまり

$$
\begin{align}
  q(z,\theta) = q(z)q(\theta)
\end{align}
$$

ですね．このように各確率変数に独立性の仮定を置いて推定したい $q(z,θ)$ を複数の確率分布の積で表現することを平均場近似と言います．なので平均場近似をやると

$$
\begin{align}
  \log p(X) &
  \geq \iint q(z,\theta|X) \log \frac{p(X,z,\theta)}{q(z,\theta|X)}dzd\theta\nonumber\\
  &= \iint q(z)q(\theta) \log \frac{p(X,z,\theta)}{q(z)q(\theta)}dzd\theta\nonumber\\
  &= L(q(z,\theta))
\end{align}
$$

と置き換えることができ，解く事のできる形に $L$ を変形できます．このLが変分自由エネルギーと呼ばれる量です．自由エネルギー原理にでてきますよね，変分自由エネルギー．

ともかく，こうして変数 $z,\theta$ を分離することが出来たのでそれぞれを逐次更新して $L$ を最大化していきます．

面倒なので $z,\theta$ をまとめ(隠れ変数が1層以上であることも考慮して)，$Z$を定義します．

$$
\begin{align}
  q(Z) = \prod_{i=1}^M q_i(Z_i), \qquad Z_i(i=1,...,M)
\end{align}
$$

で，この $q(Z)$ の中で $L$ を最大にするものを探します．式5を書き直すと

$$
\begin{align}
  L(q) &= \int q(Z)\log \frac{p(X,Z)}{q(Z)}dZ\\
  &= \int q(Z)(\log p(X,Z)-\log q(Z))dZ\\
  &= \int \prod_i q_i(Z_i)(\log p(X,Z)- \sum_i \log q_i(Z_i))dZ\\
  &= \int \prod_i q_i \log p(X,Z)dZ - \int \prod_i q_i\sum_i \log q_i dZ
\end{align}
$$

となります．2 行目から 3 行目の変形に式6を使っています．log の中身はかけざんが足し算になるとこに注意ですね．

ここでちょっと面白いことをします．今 $L$ は $q_i(Z_i)$ で書かれていますが，こいつをさらに $q_j(Z_j)$ を使って整理してみます．すると

$$
\begin{align}
  L(q) &= \int \prod_i q_i \log p(X,Z)dZ - \int \prod_i q_i\sum_i \log q_i dZ\\
  &=\iint q_j\prod_i q_i (\log p(X,Z) - \sum_i \log q_i) dZ_{i \neq j}dZ_j
\end{align}
$$

となります．これは元々 $Z$ にいれていた変数が $z,\theta$ で，二重積分だったことを思い出せば大丈夫だと思います．こいつをさらに変形していくと

$$
\begin{align}
  L(q) &= \int \prod_i q_i \log p(X,Z)dZ - \int \prod_i q_i\sum_i \log q_i dZ\\
  &=\iint q_j\prod_{i\neq j} q_i (\log p(X,Z) - \sum_i \log q_i) dZ_{i \neq j}dZ_j\\
  &=\int q_j \int \prod_{i\neq j}
\end{align}
$$
