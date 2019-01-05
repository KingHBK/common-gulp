let form

layui.use([ 'form' ], () => {
  form = layui.form
  form.render()
})

let showAddAddress = () => {
  layer.open({
    type: 1,
    title: false,
    closeBtn: 0,
    area: '700px',
    shadeClose: true,
    content: 
    `<form class="layui-form add-address-model">
      <div class="add-address-title">添加收货地址</div>
      <div class="add-address-desc">以下均为必填项，请认真填写，避免收货时发生意外。</div>
      <div class="add-address-entry">
        <div class="line">
          <div class="title"><span>*</span>所在地区：</div>
          <div class="entry-175 margin-10">
            <select name="city" lay-verify="required">
              <option value="">省</option>
              <option value="a">111</option>
              <option value="b">222</option>
              <option value="c">333</option>
            </select>
          </div>
          <div class="entry-175 margin-10">
            <select name="city" lay-verify="required">
              <option value="">市</option>
              <option value="a">111</option>
              <option value="b">222</option>
              <option value="c">333</option>
            </select>
          </div>
          <div class="entry-175">
            <select name="city" lay-verify="required">
              <option value="">区</option>
              <option value="a">111</option>
              <option value="b">222</option>
              <option value="c">333</option>
            </select>
          </div>
        </div>
        <div class="line">
          <div class="title"><span>*</span>详细地址：</div>
          <div class="entry-545">
            <textarea name="" lay-verify="required" placeholder="请输入" class="layui-textarea"></textarea>
          </div>
        </div>
      </div>
      <div class="add-address-title">添加收货人信息</div>
      <div class="add-address-entry margin-top-20">
        <div class="line">
          <div class="title"><span>*</span>收货人：</div>
          <div class="entry-200 margin-55">
            <input type="text" name="" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input" />
          </div>
          <div class="title"><span>*</span>手机号码：</div>
          <div class="entry-200">
            <input type="text" name="" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input" />
          </div>
        </div>
      </div>
      <div class="add-address-submit">
        <button lay-submit class="layui-btn">确认</button>
      </div>
    </form>`
  })
  form.render()
}
