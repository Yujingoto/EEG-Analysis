---
title: 極座標ラプラシアン
layout: default
categories: [Notes, 4friends]
nav_order: 20
---

# 極座標ラプラシアン

この問題は全世界の物理系の学生にとって[学生時代の良い思い出ランキング第１位](https://www.youtube.com/watch?v=B3V_xmTJmz0) です．特に，2次元 (本稿) はまだ良いけど[3次元](https://w3e.kanazawa-it.ac.jp/math/category/bibun/henbibun/henkan-tex.cgi?target=/math/category/bibun/henbibun/rapurashian-3.html)は非常に面倒でハイな気分になれることで知られています．しかし今回は2次元しか説明しないので，残念ながら良い思い出にはならないかも知れません．


まずはラプラシアンを定義します．

<div class="box">
<div class="title">ラプラシアン</div>

ユークリッド空間での関数の勾配 (grad) の発散 (div) として与えられる微分作用素 $\nabla ^2$ あるいは $\Delta$ です．

n次元 $(x_1,x_2, .., x_n)$ 直交座標系の場合，

$$
\begin{align}
\Delta f = \sum_{i=1}^{n} \frac{\partial ^2}{\partial x_i^2}f
\end{align}
$$

で定義されます．中身としては $n$ 次元の各方向に対する二階微分，つまり変化量の変化量，の和にすぎないので，各方向に対して上に凸下に凸の判定をして，正味の凸方向を見ているようなものです．1次元の関数で二階微分が凸方向の判定に使えたことを思い出してください (参考: [微分](../Basic/calculus.md#微分))．2次元関数なら山の膨らみや 'たわみ' がどれだけ強いかを意味します．

</div>

ラプラシアンや勾配，発散，回転といったベクトル解析の知識は，何かしらの**場**を考えるときによく出てくるもので，我々の研究分野にも密接に関わっています．**場**とは，重力や電磁力，熱といった時空の各点で値を持つ量を指します．よって電磁場を扱う脳波や MRI について勉強する上でも頻出します．原理の理解で必須な上，応用面でも多用されます．具体的には，ラプラシアンであれば MRI では画像の先鋭化のために [Laplacian filter](https://re-imagej.blogspot.com/2015/09/143.html#google_vignette) をかける際に名前の通り中心的に使われます．脳波を使う人なら surface laplacian を使った [Current Source Density (CSD)](https://pmc.ncbi.nlm.nih.gov/articles/PMC4610715/) の名で聞き馴染みがあるかも知れません．

とりあえず2次元を頑張ります．
## 直交座標系での微分を極座標系で表記
ここから書くとさすがに面倒なので所与のものとし，

$$
\begin{align}
\frac{\partial}{\partial x} = \cos \theta \frac{\partial }{\partial r} - \frac{\sin \theta}{r}\frac{\partial}{\partial \theta}
\end{align}
$$
$$
\begin{align}
\frac{\partial}{\partial y} = \sin \theta \frac{\partial }{\partial r} + \frac{\cos \theta}{r}\frac{\partial}{\partial \theta}
\end{align}
$$

です．

## 2次元ラプラシアンの極座標表記
ということで，式 (2) (3)を用いて，極座標ラプラシアンを表すと

$$
\begin{align}
&\big( \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} \big) f
\nonumber\\
= &\big( \cos \theta \frac{\partial }{\partial r} - \frac{\sin \theta}{r}\frac{\partial}{\partial \theta}\big)\big( \cos \theta \frac{\partial f}{\partial r} - \frac{\sin \theta}{r}\frac{\partial f}{\partial \theta}\big) 
\nonumber\\
& +\big(\sin \theta \frac{\partial }{\partial r} + \frac{\cos \theta}{r}\frac{\partial}{\partial \theta}\big)\big(\sin \theta \frac{\partial f}{\partial r} + \frac{\cos \theta}{r}\frac{\partial f}{\partial \theta}\big)
\end{align}
$$

です．これはただの代入．ラプラシアンの計算が面倒なのは，この式が単純に長くなるからです．とりあえず各次元で別々に計算していきます．

### $x$ について
$f$ は最後にくっつけることにします．普通に展開すると

$$
\begin{align}
\frac{\partial^2}{\partial x^2}
=& \big( \cos \theta \frac{\partial }{\partial r} - \frac{\sin \theta}{r}\frac{\partial}{\partial \theta}\big)\big( \cos \theta \frac{\partial}{\partial r} - \frac{\sin \theta}{r}\frac{\partial}{\partial \theta}\big)
\\
=& \cos\theta \frac{\partial}{\partial r}\big( \cos \theta \frac{\partial}{\partial r} - \frac{\sin \theta}{r}\frac{\partial}{\partial \theta}\big)
\\
&- \frac{\sin \theta}{r} \frac{\partial}{\partial \theta}\big( \cos \theta \frac{\partial}{\partial r} - \frac{\sin \theta}{r}\frac{\partial}{\partial \theta}\big)
\end{align}
$$

となります．ここで，項 (6)は

$$
\begin{align}
&\cos\theta \cdot \frac{\partial}{\partial r}\big( \cos \theta \frac{\partial}{\partial r} - \frac{\sin \theta}{r}\frac{\partial}{\partial \theta}\big) 
\nonumber \\
=& \cos \theta  \cdot \big( 0 + \cos\theta \frac{\partial^2}{\partial r^2} +\frac{\sin \theta}{r^2} \frac{\partial}{\partial\theta} - \frac{\sin \theta}{r} \frac{\partial^2}{\partial \theta\partial r}\big)
\nonumber \\
=& \cos^2\theta \frac{\partial ^2}{\partial r^2} + \frac{\sin\theta\cos \theta}{r^2} \frac{\partial}{\partial \theta} - \frac{\sin\theta \cos \theta}{r}\frac{\partial^2}{\partial \theta \partial r}
\end{align}
$$

項 (7)は

$$
\begin{align}
&-\frac{\sin \theta}{r} \cdot \frac{\partial}{\partial \theta}\big( \cos \theta \frac{\partial}{\partial r} - \frac{\sin \theta}{r}\frac{\partial}{\partial \theta}\big)
\nonumber \\
=& -\frac{\sin \theta}{r} \cdot \big( -\sin \theta \frac{\partial}{\partial r} + \cos \theta \frac{\partial^2}{\partial\theta\partial r} -\frac{\cos \theta}{r}\frac{\partial}{\partial\theta}-\frac{\sin \theta}{r}\frac{\partial^2}{\partial \theta^2}\big)
\nonumber \\
=& \frac{\sin^2 \theta}{r}\frac{\partial}{\partial r}-\frac{\sin \theta \cos \theta}{r}\frac{\partial^2}{\partial\theta\partial r} + \frac{\sin\theta\cos\theta}{r^2}\frac{\partial}{\partial\theta} + \frac{\sin^2\theta}{r^2}\frac{\partial^2}{\partial \theta^2}
\end{align}
$$

と計算できるので，式 (5)は

$$
\begin{align}
\frac{\partial^2}{\partial x^2} =& \cos^2\theta \frac{\partial ^2}{\partial r^2} + \frac{\sin\theta \cos \theta}{r^2} \frac{\partial}{\partial \theta} - \frac{\sin\theta \cos \theta}{r}\frac{\partial^2}{\partial \theta \partial r} 
\nonumber \\
&+ \frac{\sin^2 \theta}{r}\frac{\partial}{\partial r}-\frac{\sin \theta \cos \theta}{r}\frac{\partial^2}{\partial\theta\partial r} + \frac{\sin\theta\cos\theta}{r^2}\frac{\partial}{\partial\theta} + \frac{\sin^2\theta}{r^2}\frac{\partial^2}{\partial \theta^2}
\nonumber \\
=&\cos^2\theta \frac{\partial ^2}{\partial r^2} + 2\frac{\sin\theta \cos \theta}{r^2} \frac{\partial}{\partial \theta} - 2\frac{\sin\theta \cos \theta}{r}\frac{\partial^2}{\partial \theta \partial r} 
\nonumber \\
&+\frac{\sin^2 \theta}{r}\frac{\partial}{\partial r}+ \frac{\sin^2\theta}{r^2}\frac{\partial^2}{\partial \theta^2}
\end{align}
$$

と求まります．

### $y$について
同様に $y$ について求めると，

$$
\begin{align}
\frac{\partial^2}{\partial y^2}
=& \big(\sin \theta \frac{\partial }{\partial r} + \frac{\cos \theta}{r}\frac{\partial}{\partial \theta}\big)\big(\sin \theta \frac{\partial}{\partial r} + \frac{\cos \theta}{r}\frac{\partial}{\partial \theta}\big)
\nonumber \\
=& \sin\theta \frac{\partial}{\partial r}\big(\sin \theta \frac{\partial}{\partial r} + \frac{\cos \theta}{r}\frac{\partial}{\partial \theta}\big)
\\
&+ \frac{\cos \theta}{r} \frac{\partial}{\partial \theta}\big(\sin \theta \frac{\partial}{\partial r} + \frac{\cos \theta}{r}\frac{\partial}{\partial \theta}\big)
\end{align}
$$

ここで，項 (11)は

$$
\begin{align}
&\sin\theta \frac{\partial}{\partial r}\big(\sin \theta \frac{\partial}{\partial r} + \frac{\cos \theta}{r}\frac{\partial}{\partial \theta}\big)
\nonumber \\
=& \sin \theta  \cdot \big( 0  + \sin \theta \frac{\partial^2}{\partial r^2} - \frac{\cos\theta}{r^2} \frac{\partial}{\partial\theta} + \frac{\cos\theta}{r}\frac{\partial^2}{\partial\theta \partial r}\big)
\nonumber \\
=& \sin^2\theta \frac{\partial ^2}{\partial r^2} - \frac{\sin\theta\cos \theta}{r^2} \frac{\partial}{\partial \theta} + \frac{\sin\theta \cos \theta}{r}\frac{\partial^2}{\partial \theta \partial r}
\end{align}
$$

項 (12)は

$$
\begin{align}
&\frac{\cos \theta}{r} \frac{\partial}{\partial \theta}\big(\sin \theta \frac{\partial}{\partial r} + \frac{\cos \theta}{r}\frac{\partial}{\partial \theta}\big)
\nonumber \\
=& \frac{\cos \theta}{r} \cdot \big( \cos \theta \frac{\partial}{\partial r} + \sin \theta \frac{\partial^2}{\partial\theta\partial r} -\frac{\sin \theta}{r}\frac{\partial}{\partial\theta}+\frac{\cos \theta}{r}\frac{\partial^2}{\partial \theta^2}\big)
\nonumber \\
=& \frac{\cos^2 \theta}{r}\frac{\partial}{\partial r}+\frac{\sin \theta \cos \theta}{r}\frac{\partial^2}{\partial\theta\partial r} - \frac{\sin\theta\cos\theta}{r^2}\frac{\partial}{\partial\theta} + \frac{\cos^2\theta}{r^2}\frac{\partial^2}{\partial \theta^2}
\end{align}
$$

と計算できるので，

$$
\begin{align}
\frac{\partial^2}{\partial y^2} =& \sin^2\theta \frac{\partial ^2}{\partial r^2} - \frac{\sin\theta\cos \theta}{r^2} \frac{\partial}{\partial \theta} + \frac{\sin\theta \cos \theta}{r}\frac{\partial^2}{\partial \theta \partial r}
\nonumber \\
&+ \frac{\cos^2 \theta}{r}\frac{\partial}{\partial r}+\frac{\sin \theta \cos \theta}{r}\frac{\partial^2}{\partial\theta\partial r} - \frac{\sin\theta\cos\theta}{r^2}\frac{\partial}{\partial\theta} + \frac{\cos^2\theta}{r^2}\frac{\partial^2}{\partial \theta^2}
\nonumber \\
=&\sin^2\theta \frac{\partial ^2}{\partial r^2} - 2\frac{\sin\theta\cos \theta}{r^2} \frac{\partial}{\partial \theta} + 2\frac{\sin\theta \cos \theta}{r}\frac{\partial^2}{\partial \theta \partial r}
\nonumber \\
&+ \frac{\cos^2 \theta}{r}\frac{\partial}{\partial r} + \frac{\cos^2\theta}{r^2}\frac{\partial^2}{\partial \theta^2}
\end{align}
$$

と求まります．


### アッセンブル
よって，式 (10,15)より2次元直交座標系におけるラプラシアンの極座標表示は

$$
\begin{align}
&\big( \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} \big) f 
\nonumber \\
=& \big( \cos^2\theta \frac{\partial ^2}{\partial r^2} + 2\frac{\sin\theta \cos \theta}{r^2} \frac{\partial}{\partial \theta} - 2\frac{\sin\theta \cos \theta}{r}\frac{\partial^2}{\partial \theta \partial r} +\frac{\sin^2 \theta}{r}\frac{\partial}{\partial r}
\nonumber \\
&+ \frac{\sin^2\theta}{r^2}\frac{\partial^2}{\partial \theta^2} + \sin^2\theta \frac{\partial ^2}{\partial r^2} - 2\frac{\sin\theta\cos \theta}{r^2} \frac{\partial}{\partial \theta} + 2\frac{\sin\theta \cos \theta}{r}\frac{\partial^2}{\partial \theta \partial r}
\nonumber \\
&+ \frac{\cos^2 \theta}{r}\frac{\partial}{\partial r} + \frac{\cos^2\theta}{r^2}\frac{\partial^2}{\partial \theta^2}
\big)f
\nonumber \\
=& \big( \frac{\partial^2}{\partial r^2} + \frac{1}{r}\frac{\partial}{\partial r} + \frac{1}{r^2}\frac{\partial^2}{\partial \theta^2} \big)f
\end{align}
$$

となります．最後に $f$ つけるの忘れないでね．3次元になると[解法]((https://w3e.kanazawa-it.ac.jp/math/category/bibun/henbibun/henkan-tex.cgi?target=/math/category/bibun/henbibun/rapurashian-3.html))がいろいろありますが，いずれにせよ頭がおかしくなるそうです．物理学科の人達はこの問を聞くだけで笑顔になる程みんな[大好き](https://www.youtube.com/watch?v=B3V_xmTJmz0)らしいです．

おつかれさまでした．
