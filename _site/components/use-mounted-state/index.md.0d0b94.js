(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1178:function(n,s){n.exports={content:["article",["h2","何时使用"],["p","生命周期钩子提供检查组件的挂载状态的能力。"],["p","给出一个函数，如果组件被挂载，该函数将返回true，否则返回false。"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> useMountedState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@didi/dantd\'</span><span class="token punctuation">;</span>\n\n\n<span class="token keyword">const</span> Demo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> isMounted <span class="token operator">=</span> <span class="token function">useMountedState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  React<span class="token punctuation">.</span><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isMounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment" spellcheck="true">// ...</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token comment" spellcheck="true">// ...</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { useMountedState } from '@didi/dantd';\n\n\nconst Demo = () => {\n  const isMounted = useMountedState();\n\n  React.useEffect(() => {\n    setTimeout(() => {\n      if (isMounted()) {\n        // ...\n      } else {\n        // ...\n      }\n    }, 1000);\n  });\n};\n\nReactDOM.render(\n  <div>\n    <Demo />\n  </div>,\n  mountNode,\n);"]],["p","copy 自 ",["a",{title:null,href:"https://github.com/streamich/react-use/blob/master/docs/useMountedState.md"},"react-use"]]],meta:{category:"自定义Hook",cols:1,type:"hook",title:"useMountedState",subtitle:"Mounted",filename:"components/use-mounted-state/index.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]]]}}}]);