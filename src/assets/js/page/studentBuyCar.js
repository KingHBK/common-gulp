$(function(){
  const regPhone = /^[1][3,4,5,7,8][0-9]{9}$/

  $('img.lazy').lazyload()
  $('.flexslider').flexslider()

  layui.use([ 'carousel', 'element', 'form', 'flow' ], () => {

    let carousel = layui.carousel
    let element = layui.element
    let form = layui.form
    let flow = layui.flow
  
    // carousel.render({
    //   elem: '#showCar1',
    //   width: '100%',
    //   height: '485px',
    //   indicator: 'none',
    //   arrow: 'always'
    // })
    // carousel.render({
    //   elem: '#showCar2',
    //   width: '100%',
    //   height: '485px',
    //   indicator: 'none',
    //   arrow: 'always'
    // })
  
    form.verify({
      checkPhone(value, item) {
        if (!regPhone.test(value)) return '请输入正确的手机号'
      }
    })
  
    // flow.lazyimg()
  })
})