const password = document.getElementById('password');
const background = document.getElementById('background');
const progress = document.getElementById('progress');
const button = document.getElementById('button');

password.addEventListener('input', (e) => {
    const input = e.target.value
    const length = input.length
    const blurValue = 20 - length * 2
    background.style.filter = `blur(${blurValue}px)`
    const progressValue = 0 + length * 10
    progress.style.width = `${progressValue}%`
    if(progressValue >= 100) {
        button.style.backgroundColor = `#39A0E1`;
        progress.style.backgroundColor = `#39A0E1`;
    } else {
        button.style.backgroundColor = `#B6B6B6`
    }
})