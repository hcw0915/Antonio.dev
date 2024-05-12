const IndexJs = `
console.log('hello')
`;

const StylesCss = `/* Custom styles for your React previews here */
.result-container {
  position: relative;
  width: 1970px;
  height: 965px;
/*   background-color: red; */
}


/* Card Result */
.wrapper {
  filter: drop-shadow(0rem 0.75rem 0.25rem rgba(50, 50, 0, 0.5));
  z-index: 1;
}

.game-result {
  position: relative; 
  background-color: #53B1FD;
  width: 710px;
  height: 355px;
  clip-path: polygon(7.746% 0, 92.254% 0, 100% 15.49%, 100% 84.51%, 92.254% 100%, 7.746% 100%, 0 84.51%, 0 15.49%);
}

.game-result::before{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 7rem;
  
  content: '-'; /* attr(data-result) */
  position: absolute;
  background-color: #022249;
  top: 0;
  left: 0;
  width: 710px;
  height: 355px;
  
  clip-path: polygon(
    8% 1.5%, 66% 1.5%, 
    68% 6%, 88.5% 6%, 
    96.5% 22%, 99.5% 22%, 
    99.5% 84%, 92% 99%, 
    40% 99%, 38% 94.5%, 
    15% 94.5%, 0.8% 65%, 
    0.8% 16%);
    
}


.card-result {
  position: absolute;
  right:0;
  bottom:0;
  width: 1920px;
  height: 830px;
  background-color: #4386E3;
  z-index: -1;
  
  clip-path: polygon(
    /*  左上角    */
    0.75% 20%, 0 20%, 0 1%, 9.375% 1%, 9.375% 3%, 
    /*  右上角    */
    90.625% 3%, 90.625% 2%, 99.75% 2%, 99.75% 21.686%, 99.5% 21.686%, 
    /*  右下角    */
    99.5% 80%, 100% 80%, 100% 99%, 90.625% 99%, 90.625% 97%,  
    /*  中下位置    */
    61% 97%, 61.5% 98%, 36.5% 98%, 37% 97%,
    /*  左下角  */
    9.375% 97%, 9.375% 99%, 0 99%, 0 80%, 0.75% 80%
  );
  mask-image: 
    /* 左上三角 */
    linear-gradient(
      135deg, #4386E3 0, #4386E3 1.75rem, transparent 0, transparent 2.25rem, #4386E3 0
    ),
    /* 右上三角 */
    linear-gradient(
      -135deg, #4386E3 0, #4386E3 2.2rem, transparent 0, transparent 2.7rem, #4386E3 0
    ),    
    /* 左下三角 */
    linear-gradient(
      45deg, #4386E3 0, #4386E3 1.75rem, transparent 0, transparent 2.25rem, #4386E3 0
    ),
    /* 右下三角 */
    linear-gradient(
      -45deg, #4386E3 0, #4386E3 1.75rem, transparent 0, transparent 2.25rem, #4386E3 0
    );
  mask-position: 0 0, 100% 0, 0 100%, 100% 100%;
  mask-repeat: no-repeat;
  /* 分成四等份 */
  mask-size: 50% 50%;
}

.card-result::before{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 7rem;
  
  content: '閒1'; /* attr(data-result) */
  background-color: #013C8E;
  width: 1920px;
  height: 830px;
  clip-path: polygon(
    /* 左上角 */
    1% 8%, 2.75% 3.75%, 
    /* 右上角 */
    90.7% 3.75%, 90.7% 4.2%, 97.4% 4.2%, 99% 8%, 99% 21.625%, 99.25% 21.625%, 
    /* 右中間區塊 */
    99.25% 40%, 98.1% 43%, 98.1% 77.25%, 99.25% 80.25%,
    /* 右下角 */
    99% 80.25%, 99% 93%, 97.5% 96.25%,
    /* 中下區塊 */
    60.7% 96.25%, 59.85% 94.5%, 38% 94.5%, 37.3% 96.25%,
    /* 左下角 */
    2.75% 96.25%, 1% 92.5%,
    /* 左中間區塊 */
    1% 80%, 2% 77%, 2% 44%, 1% 41%
  );
}

.decorate {
  position: absolute;
  top: 4.5rem;
  left: 41.5rem;
  width: 557.5px;
  height: 62.25px;
  background: linear-gradient(
    60deg,
    #4386E3 7%, #4386E3 10%,
    transparent 10%, transparent 12.5%,
    #4386E3 12.5%, #4386E3 15%,
    transparent 15%, transparent 17.5%,
    #4386E3 17.5%, #4386E3 20%,
    transparent 20%, transparent 22.5%,
    #4386E3 22.5%, #4386E3 25%,
    transparent 25%, transparent 27.5%,
    #4386E3 27.5%, #4386E3 30%,
    transparent 30%, transparent 32.5%,
    #4386E3 32.5%, #4386E3 35%,
    transparent 35%, transparent 37.5%,
    #4386E3 37.5%, #4386E3 40%,
    transparent 40%, transparent 42.5%,
    #4386E3 42.5%, #4386E3 45%,
    transparent 45%, transparent 47.5%,
    #4386E3 47.5%, #4386E3 50%,
    transparent 50%, transparent 52.5%,
    #4386E3 52.5%, #4386E3 55%,
    transparent 55%, transparent 57.5%,
    #4386E3 57.5%, #4386E3 60%,
    transparent 60%, transparent 62.5%,
    #4386E3 62.5%, #4386E3 65%,
    transparent 65%,transparent 67.5%,
    #4386E3 67.5%,#4386E3 70%,
    transparent 70%, transparent 72.5%,
    #4386E3 72.5%, #4386E3 75%,
    transparent 75%, transparent 77.5%,
    #4386E3 77.5%, #4386E3 80%,
    transparent 80%, transparent 82.5%
  );

}

.player {
  position: absolute;
  top: 6rem;
  right: 9rem;
  font-size: 4.5rem;
}

.card-wrapper {
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1710px;
  height: 453.95px;
}

.empty-card {
  width: 310px;
  height: 453.95px;
  background-color: #0E121E;
  border: 0.25rem solid #4386E3;
  border-radius: 20px;
  box-shadow: inset 0px 0px 2rem #4386E3;
}

`;

const IndexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="styles.css">
  <title>React app</title>
</head>
<body>
  <!--  Combination  -->
  <div class="result-container">
    <!--  左上角  -->
    <div class="wrapper">
      <div class="game-result"></div>
    </div>
    <div class="card-result">
    <!--  主體  -->
      <div class="decorate"></div>
      <div class="player"> 閒1 </div>
      <div class="card-wrapper">
        <div class='empty-card'></div>
        <div class='empty-card'></div>
        <div class='empty-card'></div>
        <div class='empty-card'></div>
        <div class='empty-card'></div>
      </div>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>
`;

const setupFiles = {
  "/index.html": {
    code: IndexHtml,
    hidden: false,
  },
  "/styles.css": {
    code: StylesCss,
    hidden: false,
  },
  "/script.js": {
    code: IndexJs,
    hidden: false,
  },
};

export default setupFiles;
