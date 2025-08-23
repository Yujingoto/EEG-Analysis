---
title: md2htmlテンプレ
layout: default
sitemap: false
search: false
---

---
title: just spacing
layout: default
categories: [Experiments]
nav_order: 20
---

# メインタイトル
aaaaaaa
(この後に目次が入る)

## 目次に入る奴ら
bbbbbb


<div class="box" markdown="1">
<div class="title">定義</div>
集合 $G$ と二項演算 $\cdot$ について… <span class="em-red">ペア $(G,\cdot)$ を群という。</span>
- 箇条書きも普通に書ける
- divは改行し，spanは埋め込む
</div>

<div class="box note" markdown="1">
> 注意書きボックス
</div>

<div class="box tip" markdown="1">
> ヒントボックス
</div>

### 数式
横スクロールが効くようになってる

$$
\begin{align}
  PSI(t) = |\frac{\sum_{k=1}^K exp(i (\phi_{k1}^f(t) -\phi_{k2}^f(t) ) )}{K}||\frac{\sum_{k=1}^K exp(i (\phi_{k1}^f(t) -\phi_{k2}^f(t) ) )}{K}||\frac{\sum_{k=1}^K exp(i (\phi_{k1}^f(t) -\phi_{k2}^f(t) ) )}{K}||\frac{\sum_{k=1}^K exp(i (\phi_{k1}^f(t) -\phi_{k2}^f(t) ) )}{K}||\frac{\sum_{k=1}^K exp(i (\phi_{k1}^f(t) -\phi_{k2}^f(t) ) )}{K}||\frac{\sum_{k=1}^K exp(i (\phi_{k1}^f(t) -\phi_{k2}^f(t) ) )}{K}||\frac{\sum_{k=1}^K exp(i (\phi_{k1}^f(t) -\phi_{k2}^f(t) ) )}{K}||\frac{\sum_{k=1}^K exp(i (\phi_{k1}^f(t) -\phi_{k2}^f(t) ) )}{K}|
\end{align}
$$


### code block

<details markdown="1">
<summary>Preview</summary>

```python
print('hello')
```
</details>