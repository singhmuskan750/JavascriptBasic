const balls =  document.querySelectorAll('.ball')
const body = document.querySelector('body')


balls.forEach((ball, iteration) => {
    const value = iteration * 50
    ball.style = `transform:translateY(${value}px)`
})