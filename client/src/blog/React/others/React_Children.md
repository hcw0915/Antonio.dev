# [筆記] React Children 使用

`Children` 屬性在官網有很多方法以及案例說明

> https://react.dev/reference/react/Children

這次在實際運用過程中主要使配合 `swiper-slider` 套件去做包裝

```typescript
<Swiper
  spaceBetween={30}
  centeredSlides={true}
  autoplay={{
    delay: 5000,
    disableOnInteraction: false,
  }}
  loop={true}
  modules={[Autoplay]}
  className="mySwiper"
>
  {featureGameItem.map((item, idx) => (
    <SwiperSlide key={idx}>
      <SlotGameItem
        id={item.id}
        displayName={item.display_name}
        platform={item.platform?.display_name}
        gameCode={item.name}
        gameUnionType={item.tags[0]?.name}
        placeholderSrc={item.descriptions[0]?.images[1]?.url}
        tags={item.tags}
      />
    </SwiperSlide>
  ))}
</Swiper>
```

```typescript
<Swiper
  spaceBetween={spaceBetween}
  centeredSlides={true}
  autoplay={
    autoPlay && {
      delay: duration,
      disableOnInteraction: false,
    }
  }
  modules={[Autoplay]}
  className="mySwiper"
>
  {Children.map(children, (child, i) => {
    return <SwiperSlide key={i}>{child}</SwiperSlide>;
  })}
</Swiper>
```

```typescript
<SwiperSlideContainer>
  {featureGameItem.map((item) => (
    <SlotGameItem
      key={item.id}
      id={item.id}
      displayName={item.display_name}
      platform={item.platform?.display_name}
      gameCode={item.name}
      gameUnionType={item.tags[0]?.name}
      placeholderSrc={item.images[1]?.url}
      tags={item.tags}
    />
  ))}
</SwiperSlideContainer>
```
