<template>
<div class="wrapper">
    <div class="words word-1">
    <span>M</span>
    <span>Y</span>
    <span>A</span>
    <span>P</span>
    <span>P</span>
    </div>

    <div class="words word-2">
    <span>I</span>
    <span>S</span>
    </div>

    <div class="words word-3">
    <span>C</span>
    <span>O</span>
    <span>O</span>
    <span>L</span>
    </div>
</div>
</template>

<style scoped lang="scss">
.wrapper {
      font-family: "Archivo Black", sans-serif;
  background: #f4d03f;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 47px);
  justify-content: center;
  align-items: center;
}
body {
  font-family: "Archivo Black", sans-serif;
  background: #f4d03f;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

.words {
  color: #f4d03f;
  font-size: 0;
  line-height: 1.5;
}

.words span {
  font-size: 5rem;
  display: inline-block;
  animation: move 3s ease-in-out infinite;
}

@keyframes move {
  0% {
    transform: translate(-30%, 0);
  }
  50% {
    text-shadow: 0 25px 50px rgba(0, 0, 0, 0.75);
  }
  100% {
    transform: translate(30%, 0);
  }
}

.words span:nth-child(2) {
  animation-delay: 0.5s;
}

.words span:nth-child(3) {
  animation-delay: 1s;
}

.words span:nth-child(4) {
  animation-delay: 1.5s;
}

.words span:nth-child(5) {
  animation-delay: 2s;
}

.words span:nth-child(6) {
  animation-delay: 2.5s;
}

.words span:nth-child(7) {
  animation-delay: 3s;
}

</style>