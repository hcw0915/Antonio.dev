# [筆記] useState (二)

關於 `useState` 的 `setState`, 更新必須是與原陣列不同 `reference` ,也就是 `址`

某個需求需要依照進來的 id 去創建對應的 {}

```jsx
const onClick = (id: number) => {
  setState(prev => {
    if (number in prev) {
      ...
    } else {
      ...
    }
    return prev
  })

  console.log(state) // 有值
}

console.log(state) // 沒值
```

在這個情況下外面的 `onClick` 裡面是可以獲取到值, 但外面是沒值的, 主要就是因為 `reference` 並未在這次更新改變
而平常的寫法主要會是以 `[...prev, xxx]`, `{...prev, xxx}` 的這類方式去做處理, 所以重點是應該要建立一個新的 `reference` 使 `setState` 感知內部變化進而觸發改變

不外乎是 `clone`, 只要是實際建立新的 `reference` 都可以.

最喜歡 `structureClone()` 原生, 粗暴, 語意好用!
