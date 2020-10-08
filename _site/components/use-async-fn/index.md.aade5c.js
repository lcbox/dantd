(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1170:function(n,s){n.exports={content:["article",["h2","何时使用"],["p","这个 ",["code","Hook"]," 用于解析 async 函数或返回 promise 的函数。"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> useAsyncFn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@didi/dantd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> Demo <span class="token operator">=</span> <span class="token punctuation">(</span>url<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> fetch<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useAsyncFn</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> result\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>url<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token punctuation">{</span>state<span class="token punctuation">.</span>loading\n        <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Loading<span class="token operator">...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">:</span> state<span class="token punctuation">.</span>error\n          <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Error<span class="token punctuation">:</span> <span class="token punctuation">{</span>state<span class="token punctuation">.</span>error<span class="token punctuation">.</span>message<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">:</span> state<span class="token punctuation">.</span>value <span class="token operator">&amp;&amp;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Value<span class="token punctuation">:</span> <span class="token punctuation">{</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Start loading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { useAsyncFn } from '@didi/dantd';\n\nconst Demo = (url) => {\n  const [state, fetch] = useAsyncFn(async () => {\n    const response = await fetch(url);\n    const result = await response.text();\n    return result\n  }, [url]);\n\n  return (\n    <div>\n      {state.loading\n        ? <div>Loading...</div>\n        : state.error\n          ? <div>Error: {state.error.message}</div>\n          : state.value && <div>Value: {state.value}</div>\n      }\n      <button onClick={() => fetch()}>Start loading</button>\n    </div>\n  );\n};\n\nReactDOM.render(\n  <div>\n    <Demo />\n  </div>,\n  mountNode,\n);"]],["p","copy 自 ",["a",{title:null,href:"https://github.com/streamich/react-use/blob/master/docs/useAsync.md"},"react-use"]]],meta:{category:"自定义Hook",cols:1,type:"hook",title:"useAsyncFn",subtitle:"函数请求",filename:"components/use-async-fn/index.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]]]}}}]);