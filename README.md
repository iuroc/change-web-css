# 网页字体和 CSS 属性值修改

## 使用方法

1. 设置脚本对网页的匹配

    ```js
    // @match        *://flowus.cn/*
    // @match        *://*.baidu.com*.cn/*
    ```
2. 设置 CSS 设置规则

    数组项依次是：
    1. location 对象的属性名
    2. 匹配规则，可以是字符串或正则对象
    3. 字体名称字符串或 CSS 样式对象

    ```js
    var rules = [
        ['host', 'flowus.cn', defaultFont],
        ['href', /^http.*?wolai.com/, '微软雅黑'],
        ['host', 'www.baidu.com', {
            color: 'red',
            fontSize: '20px'
        }]
    ]
    ```