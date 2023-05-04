// cách đổi background-image bên js - nhớ ghi đúng phần url
// document.getElementById('dish__img1').style.backgroundImage="url('images/Miquang02.jpg')"
// vì bên dưới là tag <a> nên ko có background-image dc, phải kiếm tới thuộc tính src của nó
//rồi ghi đè lên

function ChangeImg(hoverImg) {
    if (hoverImg === document.getElementById('dish__img1')) {
        document.getElementById('dish__img1').setAttribute('src', 'images/Miquang02.jpg')
    } else if (hoverImg === document.getElementById('dish__img2')) {
        document.getElementById('dish__img2').setAttribute('src', 'images/spingroll02.jpg')
    }
}