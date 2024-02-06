const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const body = document.body;
const audio1 = $('#audio');

const buttonToCountDown = () => {
  const countDown = `
	<div class="demo">
  <div class="demo__colored-blocks">
    <div class="demo__colored-blocks-rotater">
      <div class="demo__colored-block"></div>
      <div class="demo__colored-block"></div>
      <div class="demo__colored-block"></div>
    </div>
    <div class="demo__colored-blocks-inner"></div>
    <div class="demo__text">Ready</div>
  </div>
  <div class="demo__inner">
    <svg class="demo__numbers" viewBox="0 0 100 100">
      <defs>
        <path class="demo__num-path-1" d="M40,28 55,22 55,78"/>
        <path class="demo__num-join-1-2" d="M55,78 55,83 a17,17 0 1,0 34,0 a20,10 0 0,0 -20,-10"/>
        <path class="demo__num-path-2" d="M69,73 l-35,0 l30,-30 a16,16 0 0,0 -22.6,-22.6 l-7,7"/>
        <path class="demo__num-join-2-3" d="M28,69 Q25,44 34.4,27.4"/>
        <path class="demo__num-path-3" d="M30,20 60,20 40,50 a18,15 0 1,1 -12,19"/>
      </defs>
      <path class="demo__numbers-path" 
            d="M-10,20 60,20 40,50 a18,15 0 1,1 -12,19 
               Q25,44 34.4,27.4
               l7,-7 a16,16 0 0,1 22.6,22.6 l-30,30 l35,0 L69,73 
               a20,10 0 0,1 20,10 a17,17 0 0,1 -34,0 L55,83 
               l0,-61 L40,28" />
    </svg>
  </div>
</div>

<audio id="audio" src="./assets/audio/Count_down_Sound.mp3"></audio>

	`
  body.innerHTML = countDown;
  const linkElement = document.querySelector('link[href="./assets/css/button.css"]');
  const audio2 = $('#audio');
  audio2.play();
  // Replace the href attribute with the new link
  linkElement.href = "./assets/css/count_down.css";
}

const countDownToMoving = () => {
  const moving = `
  <div class="happy">Happy New Year</div>
  <div class="sec1">
      <span class="default">202</span>
      <span class="current">3</span>
      <span class="next">4</span>
      <div class="sec2"></div>
  </div>

  <div class="fire">
  <div class="f1">
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
  </div>
  <div class="f2">
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
  </div>
  <div class="f3">
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
  </div>
  <div class="f4">
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
  </div>
</div>

<button class="button-71" role="button">Click me!</button>

<audio id="audio" src="./assets/audio/Happy_New_Year_ABBA.mp3"></audio>
	`
  body.innerHTML = moving;
  const linkElement = document.querySelector('link[href="./assets/css/count_down.css"]');

  // Replace the href attribute with the new link
  linkElement.href = "./assets/css/moving.css";
  audio1.play();
}

const movingToGift = () => {
  const btn71 = $('.button-71');
  btn71.onclick = () => {
    const gift = `
  <div class="container hide">
        <div class="envelope-wrapper">
            <div class="envelope">
                <div class="letter">
                    <div class="text">
                        <strong>Hello bạn,</strong>
                        <p>
                            Nhân dịp năm mới 2024, mình xin chúc bạn và gia đình một năm mới vui vẻ
                            và thành đạt.
                        </p>
                    </div>
                </div>
            </div>

            <div class="heart"></div>
        </div>
    </div>

    <div class="gift-container">
        <div class="shadow shadowAnimation"></div>

        <div class="gift-box boxAnimation ">
            <div class="click"></div>   
        </div>
    </div>
  `
    body.innerHTML = gift;

    const linkElement = document.querySelector('link[href="./assets/css/moving.css"]');
    linkElement.href = "./assets/css/gift.css";

    //---------GIFT-------------
    const box = $('.gift-container');
    box.onclick = () => {
      const lid = $('.click');
      const giftBox = $('.gift-box');
      lid.classList.add('open');
      giftBox.classList.add('no-shadow');
      giftBox.classList.remove('boxAnimation');
      const shadow = $('.shadow');
      shadow.classList.remove('shadowAnimation');
      const envelope = $('.container');
      envelope.classList.remove('hide');
      envelope.classList.add('containerAnimation');
    }

    const envelope = document.querySelector('.envelope-wrapper');
    envelope.addEventListener('click', () => {
      envelope.classList.toggle('flap');
    });
  }
}
const countDownBtn = $('.countDownBtn');
countDownBtn.onclick = () => {
  buttonToCountDown();
  setTimeout(countDownToMoving, 9000);
  setTimeout(movingToGift, 15000);
}
// we have not put the gift script in the right position



