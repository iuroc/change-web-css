// ==UserScript==
// @name         修改网页字体和其他 CSS 属性值
// @namespace    apee.top
// @version      1.0
// @description  修改网页字体，支持不同网站不同规则
// @author       github@oyps
// @match        *://flowus.cn/*
// @match        *://*.wolai.com/*
// @match        *://www.baidu.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=flowus.cn
// @grant        none
// ==/UserScript==

(function () {
    /** 默认字体 */
    let defaultFont = '仓耳渔阳体'
    type cssSetting = { [cssKey in keyof CSSStyleDeclaration]?: string }
    /** 自定义字体设置规则，第一项是 `location` 对象的属性名，第二项是字符串或正则对象，第三项为 CSS `font-family` 值 */
    const rules: [string, string | RegExp, string | cssSetting][] = [
        ['host', 'flowus.cn', defaultFont],
        ['href', /^http.*?wolai.com/, '微软雅黑'],
        // ['host', 'www.baidu.com', {
        //     color: 'red',
        //     fontSize: '20px'
        // }]
    ]
    let dom = document.body
    const changeCss = (dom: HTMLElement, data: string | cssSetting) => {
        if (typeof data == 'object')
            for (let key in data)
                dom.style[key] = data[key] as string
        else
            dom.style.fontFamily = data
    }
    for (let i = 0; i < rules.length; i++) {
        const rule = rules[i]
        let text = location[rule[0]]
        let pattern = rule[1]
        if (typeof pattern == 'string' && text == pattern)
            return changeCss(dom, rule[2])
        else if (pattern instanceof RegExp && text.match(pattern))
            return changeCss(dom, rule[2])
    }
    return changeCss(dom, defaultFont)
})()