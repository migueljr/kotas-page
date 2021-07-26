document.addEventListener('scroll', function(e) {
   if(window.scrollY>=55){
       document.querySelector('.bill-box-fixed').style = 'margin-top:-55px; position:fixed; width: '+document.querySelector('.width-fixed').offsetWidth+'px !important;';
   }else{
       document.querySelector('.bill-box-fixed').style = '';
   }
});

window.addEventListener('resize', function(e) {
    if(window.scrollY>=55){
        document.querySelector('.bill-box-fixed').style = 'margin-top:-55px; position:fixed; width: '+document.querySelector('.width-fixed').offsetWidth+'px !important;';
    }else{
        document.querySelector('.bill-box-fixed').style = '';
    }
});





const slider = document.querySelector('.multibox');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    //console.log(walk);
});



var app = new Vue({
    el: '.app',
    data: {
        quantity_kotas: 1
    },
    methods:{
        changeQuantityKotas(opc){
            if(opc=='+') this.quantity_kotas += 1
            if(opc=='-' && this.quantity_kotas >=2) this.quantity_kotas -= 1
        }
    }
})