// ボタン定義 //

const btn01 = document.getElementById('slideBtn01');
const btn02 = document.getElementById('slideBtn02');
const btn03 = document.getElementById('slideBtn03');
const btn04 = document.getElementById('slideBtn04');

// スライド画像定義 //

const photo01 = document.getElementsByClassName('slide01');
const photo02 = document.getElementsByClassName('slide02');
const photo03 = document.getElementsByClassName('slide03');
const photo04 = document.getElementsByClassName('slide04');

// ボタン挙動 //

btn01.onclick = function() {
  btn02,btn03,btn04.classList.remove('click');
  btn01.classList.add('click');
};

btn02.onclick = function() {
  btn01,btn03,btn04.classList.remove('click');
  btn02.classList.add('click');
};

btn03.onclick = function() {
  btn03.classList.add('click');
  btn01,btn02,btn04.classList.remove('click');
};

btn04.onclick = function() {
  btn04.classList.add('click');
  btn01,btn02,btn03.classList.remove('click');
};

// ホバー時の一時停止 //



// アニメーション設定 //

