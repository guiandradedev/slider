let indexImg = 0
function slider() {

    const imgList = ["img/a1.jpg", "img/a2.jpg", "img/a3.jpg", "img/a4.jpg", "img/a5.jpg"]
    const img = document.querySelector("img")
    const btnLeft = document.getElementById("leftImg")
    const btnRight = document.getElementById("rightImg")
    const imgLeft = document.getElementById("imgLeft")
    const imgRight = document.getElementById("imgRight")
    const btnRightDiv = document.getElementById("btnRightDiv")
    const btnLeftDiv = document.getElementById("btnLeftDiv")

    img.src = imgList[indexImg]
    imgRight.src = imgList[indexImg + 1]
    imgLeft.src = imgList[imgList.length - 1]

    btnRight.addEventListener('click', nextImg)
    btnLeft.addEventListener('click', previousImg)

    function verifyIndex() {
        if (indexImg >= imgList.length) {
            indexImg = 0
        }
    }

    function nextImgMiniature() {
        if (indexImg + 1 >= imgList.length) {
            indexImg = -1
        }
        imgRight.src = imgList[indexImg + 1]
    }
    function previousImgMiniature() {
        if (indexImg - 1 <= 0) {
            indexImg = imgList.length - 1
        }
        imgLeft.src = imgList[indexImg - 1]
    }

    function nextImg() {
        indexImg++
        verifyIndex()
        img.src = imgList[indexImg]
        nextImgMiniature()
    }

    function previousImg() {
        indexImg--
        if (indexImg < 0) {
            indexImg = imgList.length - 1
        }
        img.src = imgList[indexImg]
        previousImgMiniature()
    }

    setInterval(function sliderAuto() {
        indexImg++;
        verifyIndex()
        img.src = imgList[indexImg]
        previousImgMiniature()
        nextImgMiniature()
    }, 2000)

    //hover btn right
    btnRightDiv.addEventListener("mouseover", event => {
        imgRight.style.display = "block";
    });
    btnRightDiv.addEventListener("mouseout", event => {
        imgRight.style.display = "none";
    });

    // hover btn left
    btnLeftDiv.addEventListener("mouseover", event => {
        imgLeft.style.display = "block";
    });
    btnLeftDiv.addEventListener("mouseout", event => {
        imgLeft.style.display = "none";
    });
}