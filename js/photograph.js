// スライド画像定義 //

const photo01 = document.getElementById('slide01');
const photo02 = document.getElementById('slide02');
const photo03 = document.getElementById('slide03');
const photo04 = document.getElementById('slide04');
const photoSp01 = document.getElementById('slideSp01');
const photoSp02 = document.getElementById('slideSp02');
const photoSp03 = document.getElementById('slideSp03');
const photoSp04 = document.getElementById('slideSp04');

// ホバー時の一時停止 //

// アニメーション設定 //

photo01.animate (
  {
    opacity: [1,0,0,0,0,0,1]
  },
  { 
    delay: 1000,
    duration: 26000,
    iterations: Infinity
  }
);

photo02.animate (
  {
    opacity: [0,1,1,1,0,0,0]
  },
  {
    delay: 1000,
    duration: 26000,
    iterations: Infinity
  }
);

photo03.animate (
  {
    opacity: [0,0,0,1,1,1,0]
  },
  {
    delay: 1000,
    duration: 26000,
    iterations: Infinity
  }
);

photo04.animate (
  {
    opacity: [0,0,0,0,1,1,0]
  },
  {
    delay: 1000,
    duration: 26000,
    iterations: Infinity
  }
);

photoSp01.animate (
  {
    opacity: [1,0,0,0,0,0,1]
  },
  { 
    delay: 1000,
    duration: 26000,
    iterations: Infinity
  }
);

photoSp02.animate (
  {
    opacity: [0,1,1,1,0,0,0]
  },
  {
    delay: 1000,
    duration: 26000,
    iterations: Infinity
  }
);

photoSp03.animate (
  {
    opacity: [0,0,0,1,1,1,0]
  },
  {
    delay: 1000,
    duration: 26000,
    iterations: Infinity
  }
);

photoSp04.animate (
  {
    opacity: [0,0,0,0,1,1,0]
  },
  {
    delay: 1000,
    duration: 26000,
    iterations: Infinity
  }
);


