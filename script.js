$('#heading').click(function() {
    $('#heading').css({
        'color': 'red',
        'font-size':'100px',
        'background-color': 'green'
    });
});




var imageData= ['images/img1.jpg','images/img2.jpg','images/img3.jpg','images/img4.jpg'];
var index=0;
function changeImage() {
    var mainImage = document.getElementById('mainImage');
    mainImage.setAttribute('src',imageData[index]);
    index++;
    if (index >= imageData.length) {
        index=0;
    }
}

setInterval(changeImage,2000);


var mainImg = document.getElementById('mainImage');
var img1 =document.getElementById('img1');

img1.onclick = function () {

    var img1 =img1.getAttribute('src');
    mainImg.setAttribute('src',img1);


};


var img2 =document.getElementById('img2');

img2.onclick = function () {

    var img2 =document.getElementById('img2').getAttribute('src');
    mainImg.setAttribute('src',img2);


}

var img3 =document.getElementById('img3');

img3.onclick = function () {

    var img3 =document.getElementById('img3').getAttribute('src');
    mainImg.setAttribute('src',img3);


};

var img4 =document.getElementById('img4');

img4.onclick = function () {

    var img4 =document.getElementById('img4').getAttribute('src');
    mainImg.setAttribute('src',img4);

};

setInterval ('img1','img2',1);
// var clock=document.getElementById('watch');
//
// var clock=document.write=function () {
//     var dateTime = new Date();
//     var hours = dateTime.getHours();
//     var minutes = dateTime.getMinutes();
//     var seconds = dateTime.getSeconds();
//
//     var clock = document.getElementById('watch').innerHTML = hours + ': ' + minutes + ' :' + seconds;
// // function demo () {
// //     alert('Hello World');
// // };
// //
// };
// document.write('watch')
// setInterval(clock,1);