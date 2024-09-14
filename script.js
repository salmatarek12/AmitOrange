//2 
// function getNumber(){
//     console.log("in function")
//     console.log(document.getElementById('numberInput').value)
//     var x = document.getElementById('numberInput').value
//     if(x%3 == 0){
//         window.alert('Yes');
//         //document.write('Yes')
//     }
//     else{
//         window.alert('No');
//         //document.write('No')
//     }
// }

// 5 6 9 
// function getMaxAndMin(){
//     var n1 = document.getElementById('numberInput1').value
//     var n2 = document.getElementById('numberInput2').value
//     var n3 = document.getElementById('numberInput3').value
//     window.alert("max element = ",Math.max(n1,n2,n3))
//     window.alert("max element = ",Math.min(n1,n2,n3))
// }

//Chicken Task
// var bullet = document.querySelector('.m')
// window.addEventListener('keyup',function(e){
//     bullet.style.dispaly= 'block'
//     console.log(e);   
// })

var rocket = document.querySelector('.rm')
var container = document.querySelector('body')
var containerSize = container.getBoundingClientRect() /** gbna byanat el container width w height w others*/

console.log(containerSize)

var positionY = 0
var positionX = 0
window.addEventListener('keydown', function(e){
    if(e.code === 'ArrowLeft'){
        positionX += 10
        rocket.style.right = positionX + 'px' /*lazem n4t8l 3ala 7aga wa7da l2ema right l2ema left 34an minot4 m3aya*/
        if(positionX >= containerSize.width - 100){
            positionX = containerSize - 100
        }
    }
    else if(e.code === 'ArrowRight'){
        positionX -= 10
        rocket.style.right = positionX + 'px'
        if(positionX <= 10){
            positionX = 10
        }
    }
    else if(e.code === 'ArrowUp'){
        positionY += 10
        rocket.style.bottom = positionY + 'px'
        console.log(positionY)
        if(positionY >= containerSize.height - 105){
            positionY = containerSize.height - 105
        }
    }
    else if(e.code === 'ArrowDown'){
        positionY -= 10
        rocket.style.bottom = positionY + 'px'
        if(positionY <= 10){
            positionY = 10 
        }
    }

    if(e.code === 'Space'){
        var bullet = document.createElement('img')
        bullet.classList.add('bullet')
        bullet.src = './Images/Bullet.png'
        rocket.append(bullet)
        var bulletPosition = 0

        var bulletInterval = setInterval(function(){
            bulletPosition += 10
            bullet.style.bottom = bulletPosition + 'px'

            if(bulletPosition > 1000){
                clearInterval(bulletInterval)
                rocket.removeChild(bullet) /**men 8erha hifdl y7ot fe swr bullet million mara */
            }
        },10)
    }
    //console.log(e);
})

