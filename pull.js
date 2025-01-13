let floatIntervals = {}; // 存储每个卡片的浮动定时器

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startFloating(card, direction) {
    let position = 10;
    const interval = setInterval(() => {
        position += 0.02 * direction;
        if (position > 12 || position < 8) {
            direction *= -1; // 反向移动
        }
        card.style.top = position + '%';
    }, 10);
    floatIntervals[card.id] = interval;
}
for (let k = 1; k <= 2; k++) {
document.getElementById(`start${k}`).addEventListener("click", function() {
    document.getElementById("pull").style.display = "block";
    document.getElementById("start1").style.display = "none";
    document.getElementById("bg2").style.display = "none"; 
    document.getElementById("bg3").style.display = "none"; 
    document.getElementById("title1").style.display = "none"; 
    document.getElementById("change").style.display = "none";
    let direction1 = 1;
    let direction2 = -1;
    startFloating(document.getElementById("card1"), direction1);
    startFloating(document.getElementById("card2"), direction2);
    startFloating(document.getElementById("card3"), direction1);
    startFloating(document.getElementById("card4"), direction2);
    startFloating(document.getElementById("card5"), direction1);
    startFloating(document.getElementById("card6"), direction2);
    startFloating(document.getElementById("card7"), direction1);
    startFloating(document.getElementById("card8"), direction2);
});

function rotateCard(card) {
    card.style.transform = "rotateY(360deg)";
    card.style.opacity = "1";
    const kind=getRandomInt(1,10);
    let star;
    let num;
    if(kind===1)
        {
            star=6;
        }
    else if(kind>7)
        {
            star = 5;
        }
    else
        {
            star = getRandomInt(3, 4);
        }
    if(star === 3)
    {
        num = getRandomInt(1, 8);
    }
    else if(star === 4)
    {
        num = getRandomInt(1, 14);
    }
    else if(star === 5)
    {
        num = getRandomInt(1, 30);
    }
    else if(star === 6)
    {
        num = getRandomInt(1, 30);
    }
    showStar(star, card);
    card.style.backgroundImage = "url('./立绘/" + star + "/" +  num + ".png')";
}

function showStar(star, card) {
    switch (star) {
        case 3:
            card.style.backgroundColor = "white";
            card.style.border = "2px solid white";
            card.style.boxShadow = "10px 10px 10px white";
            break;
        case 4:
            card.style.backgroundColor = "purple";
            card.style.border = "2px solid purple";
            card.style.boxShadow = "10px 10px 30px purple";
            break;
        case 5:
            card.style.backgroundColor = "yellow";
            card.style.border = "2px solid yellow";
            card.style.boxShadow = "20px 20px 50px yellow";
            break;
        case 6:
            card.style.backgroundColor = "orange";
            card.style.border = "2px solid orange";
            card.style.boxShadow = "20px 20px 60px orange";
            break;
    }
}
var myflag= [0,0,0,0,0,0,0,0];
for (let i = 1; i <= 8; i++) 
{
    document.getElementById(`card${i}`).addEventListener("click", function() {
        if(myflag[i-1]===0)
        {
            myflag[i-1]=1;
            rotateCard(this);
        }    
    });
}
document.getElementById("pass").addEventListener("click", function() {
    for(let i=0;i<8;i++)
        {
            if(myflag[i]===0)
            {
                rotateCard(document.getElementById(`card${i+1}`));
                myflag[i]=1;
            }
        }
});
document.getElementById("closeReset").addEventListener("click", function() {
    document.getElementById("pull").style.display = "none"; // 关闭 cardcontainer
    document.getElementById("start1").style.display = "block"; // 显示开始按钮
    document.getElementById("bg2").style.display = "block"; 
    document.getElementById("bg3").style.display = "block"; 
    document.getElementById("title1").style.display = "block"; 
    document.getElementById("change").style.display = "block";
    // 重置卡片内容
    for (let i = 1; i <= 8; i++) {
        let card = document.getElementById(`card${i}`);
        card.style.backgroundImage = "url('')"; // 清除背景图片
        card.style.backgroundColor = "rgba(202, 201, 201, 0.961)"; // 恢复默认背景颜色
        card.style.border = "2px solid rgba(202, 201, 201, 0.961)"; // 恢复默认边框颜色
        card.style.boxShadow = "10px 10px 10px rgba(202, 201, 201, 0.961)"; // 恢复默认阴影
        card.style.opacity = "0.5"; // 恢复默认透明度
        card.style.transform = "rotateY(0deg)"; // 重置旋转
        card.style.top = "10%"; 
        myflag[i-1]=0;
        if (floatIntervals[card.id]) {
            clearInterval(floatIntervals[card.id]);
            delete floatIntervals[card.id];
        }
    }
});
}