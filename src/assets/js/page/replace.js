const regPhone = /^[1][3,4,5,7,8][0-9]{9}$/
let countdown = ''

layui.use([ 'form' ], () => {
  let form = layui.form
  form.verify({
    checkPhone(value, item) {
      if (!regPhone.test(value)) return '请输入正确的手机号'
    }
  })
})

let getVerfiyCode = () => {
  console.log(countdown)
  if (countdown) return
  console.log(countdown)
  let mobile = document.getElementById('mobile').value
  let verifyBtn = document.getElementById('verfiyCodeBtn')
  if (!regPhone.test(mobile)) {
    layer.msg('请输入正确的手机号')
    return
  }
  addClass(verifyBtn, 'act')
  addClass(verifyBtn, 'layui-btn-disabled')
  let count = 60
  verifyBtn.innerHTML = `重新发送(${count})`
  countdown = setInterval(() => {
    if (count > 0) {
      count--
      verifyBtn.innerHTML = `重新发送(${count})`
    } else {
      clearInterval(countdown)
      countdown = ''
      verifyBtn.innerHTML = `获取验证码`
      removeClass(verifyBtn, 'act')
      removeClass(verifyBtn, 'layui-btn-disabled')
    }
  }, 1000)
}

let hasClass = (elements, cName) => {
  return !!elements.className.match(new RegExp('(\\s|^)' + cName + '(\\s|$)'))
}
let addClass = (elements, cName) => {
  if (!hasClass(elements, cName)) {
    elements.className += ' ' + cName
  }
}
let removeClass = (elements, cName) => {
  if (hasClass(elements, cName)) {
    elements.className = elements.className.replace(new RegExp('(\\s|^)' + cName + '(\\s|$)'), ' ')
  }
}