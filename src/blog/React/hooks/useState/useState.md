## useState

#### CodeSandBox 參考連結

https://codesandbox.io/s/usestate-0oqsm0?file=/src/App.js:0-714

下方的範例是一個大家在網路教學上常常看到`useState`的範例，按鈕綁定一個事件，然而事件內的 `setCount` 會有這兩種寫法。

- `setCount((pre) => pre + 1);`
- `setCount(count + 1);`

```javascript
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    // 寫法 1
    setCount((pre) => pre + 1);
    // 寫法 2
    setCount(count + 1);
  };

  return (
    <div className="App">
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}
```

### 只放一個 => 正常

> 下方基本狀況下，只放一個其實都是可以使 `count` 正常的 `+1`

```javascript
setCount((prev) => prev + 1);
setCount(count + 1);
```

---

### 放了兩個 => 開始不正常

#### `setCount((prev) => prev + 1) \* 2`

> 放兩個的情況下，數字 +2 +2 往上跳
>
> ![](/src/blog/React/hooks/useState/useState-1.gif)

---

#### setCount(count + 1) \* 2

> 放兩個的情況下，數字 +1 +1 往上跳 (恩?? 怎麼跟想像的不一樣!)
>
> ![](/src/blog/React/hooks/useState/useState-2.gif)

---

### 我們多加個 setTimeout 試試看 看會不會有更奇怪的事情

#### setTimeout + setCount((pre) => pre + 1)

> 首先是第一種，為了更明顯區別，我在執行前再多放個 `setCount((pre) => pre + 1)`

```javascript
const increment = () => {
  setCount((pre) => pre + 1);
  setTimeout(() => {
    setCount((pre) => pre + 1);
  }, 2000);
};
```

> 先是 1,2,3,4,5 過兩秒之後 6,7,8,9,10
>
> ![](/src/blog/React/hooks/useState/useState-3.gif)

#### setTimeout + setCount(count + 1);

> 再來是第二種，我把裡面的換成 `count + 1`

```javascript
const increment = () => {
  setCount((pre) => pre + 1);
  setTimeout(() => {
    setCount(count + 1);
  }, 2000);
};
```

> 先是 1,2,3,4,5 過兩秒之後又是 1,2,3,4,5
>
> ![](/src/blog/React/hooks/useState/useState-4.gif)

### 觀察後結論

看了這四個例子，應該可以發現，`count + 1` 加總的狀態總不是我們所想要的
但是如果只單純寫一個卻有沒甚麼問題。
反觀 `setCount((pre) => pre + 1)` 卻是乖乖的依我們先想的去跑。

依現象來說，其實只是在於捕捉當下的狀態不同而已。

我用最後一個來說明一下好了。

```javascript
const increment = () => {
  setCount((pre) => pre + 1);
  setTimeout(() => {
    setCount(count + 1);
  }, 2000);
};
```

:::success

#### 初始值 => `count = 0`

- 進入函數後，`pre` 捕捉到當下的 `count = 0`，然後執行 `+1` =>>>> 此時 `count = 1`
- 進入 `setTimeout` 執行 `count+1`， 她捕捉到的 `count` 也是最開始的 `0`
- 過了兩秒，`setTimeout` 開始執行 `callback`, 但是在最初執行整個函數時 她就把 `0` 存在 `count` 裡面，所以她最後出來的值是 `1`。
  :::
  可以看成 count+1 會直接把函數執行前的 count 值記錄下來，不管同一個函式裡面是不是有其他的 setCount 影響她。只要 count 存下來的就是 0，她就會從 0 開始。

所以到底要用哪個呢?!

基本上只要用 `prev => prev + 1` 這個是可以完全照預期狀況運作。 `count+1` 放兩個到底要幹嘛，這我真的想不到。
至於 `setTimeout` 裡面放 `count+1` ，可能真的存在著這種需求吧... 希望不會有這種甲方爸爸出現。
