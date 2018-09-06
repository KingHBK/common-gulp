## 目录结构规范
```
└── demo/                        // 活动
    ├── dest/                    // 输出目录
    │   ├── assets/      
    │   │   ├── js       
    │   │   ├── images       
    │   │   └── css           
    ├── src/                     // 源码目录
    │   ├── assets/              // 资源目录
    │   │   ├── js               // js
    │   │   ├── images           // 图片 
    │   │   └── css              // 样式（less）
    ├── index.html
    ├── .gitignore           
    ├── .eslintrc                // eslint规则配置
    ├── package.json
    └── gulpfile.babel.js              //gulp配置
```
---
### 代码规范
* 使用gulp构建
    * npm run dev (本地测试)
    * npm run build-dev (测试环境构建)
    * npm run build-pro (生产环境构建)
* gulpfile配置，如想修改或疑问，麻烦与本公司联系
* js需符合本公司eslint规范（可以参考：[传送门](https://blog.csdn.net/haoshidai/article/details/52833377)）
* css命名需符合BEM规范
    * BEM的意思是块（block）、元素（element）、修饰符（modifier）
    * 命名约定的模式如下
        * ```.block{}```
        * ```.block__element{}```
        * ```.block__element_modifier{} ```
        * ```.block_modifier{}```

* js、css不能直接写到html里面，要放放到对应的目录
* 移动端使用**Flexible**适配（这个必须要注意）
    * src文件里需要写px,gulp会自动转化为rem
    * 建议出设计图750宽的标准设计，这样可以按设计稿像素写CSS，比如10像素就是10px
    * 如没使用过可以看下相关资料：[传送门](https://www.w3cplus.com/mobile/lib-flexible-for-html5-layout.html)
* pc端需要兼容IE8，jquery(1.11.2)
* 移动端需要适配主流android、ios设备

---