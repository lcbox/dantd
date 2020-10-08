(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1148:function(t,d){t.exports={content:["section",["h2","何时使用"],["ul",["li",["p","当需要前端分页，更加自由的数据处理时；"]],["li",["p","当需要更加",["strong","便捷"],"的「排序、搜索、过滤」等行为，以及「快速筛选区」时；"]],["li",["p","当需要一个默认的分页等表格信息配置时；"]],["li",["p","当有大量结构化的数据需要展现时；"]],["li",["p","当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。"]]]],meta:{category:"组件",cols:1,type:"数据展示",title:"BasicTable",subtitle:"表格",filename:"components/basic-table/index.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["h3","BasicTable"],["p","封装",["code","ant-v3"],"的 ",["a",{title:null,href:"https://3x.ant.design/components/table-cn/"},"Table 组件"]," ，助力业务开发。"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","dataSource"],["td","数据数组"],["td","any[]"],["td","-"]],["tr",["td","columns"],["td","表格列的配置描述，具体项见下表"],["td",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/e4c72cf6f553376dbef6746bd0a74966152494fe/components/table/interface.tsx#L32"},"ColumnProps"],"[]"],["td","-"]],["tr",["td","queryFormColumns"],["td","查询表单的配置描述，详见 ",["code","QueryForm"]," 组件的文档"],["td",["a",{title:null,href:"http://dantd.intra.xiaojukeji.com/components/query-form/#Columns"},"QueryColumnProps"],"[]"],["td","-"]],["tr",["td","loading"],["td","加载数据时的状态"],["td","boolean"],["td","false"]],["tr",["td","onChange"],["td","分页、排序、筛选变化时触发"],["td","Function(pagination, filters, sorter, extra: { currentDataSource: [] })"],["td","-"]],["tr",["td","rowSelection"],["td","表格行是否可选择，",["a",{title:null,href:"https://3x.ant.design/components/table-cn/#rowSelection"},"配置项"]],["td","object"],["td","null"]],["tr",["td","tableTitle"],["td","表格的标题"],["td","string"],["td","-"]],["tr",["td","leftHeader"],["td","表头，可以放按钮，标题信息等"],["td","Descriptions.Item[]"],["td","-"]],["tr",["td","customHeader"],["td","自定义筛选头"],["td","React.ReactNode"],["td","-"]],["tr",["td","onReload"],["td","点击刷新时的回调"],["td","function() {}"],["td","-"]],["tr",["td","showReloadBtn"],["td","是否展示刷新 ",["code","Icon"]],["td","boolean"],["td","true"]],["tr",["td","reloadBtnPos"],["td","刷新按钮的位置"],["td",["code","'left'"]," ","|"," ",["code","'right'"]],["td",["code","'right'"]]],["tr",["td","reloadBtnType"],["td","刷新按钮的类型"],["td",["code","'btn'"]," ","|"," ",["code","'icon'"]],["td",["code","'icon'"]]],["tr",["td","showFilter"],["td","是否展示快速筛选区"],["td","boolean"],["td","true"]],["tr",["td","filterType"],["td","快速筛选区的展示类型，",["code","'half'"]," 表示只占右边一半，",["code","'none'"]," 不展示，",["code","'line'"]," 表示一整行"],["td",["code","'line'"]," ","|"," ",["code","'half'"],"|"," ",["code","'none'"]],["td",["code","'half'"]]],["tr",["td","showSearch"],["td","是否模糊搜索框"],["td","boolean"],["td","true"]],["tr",["td","searchPos"],["td","模糊搜索框的位置"],["td",["code","'full'"]," ","|"," ",["code","'right'"]],["td",["code","'full'"]]],["tr",["td","onSearch"],["td","组件默认会过滤数据，也可以自定义过滤函数"],["td","function(query) {}"],["td","true"]],["tr",["td","searchPlaceholder"],["td","过滤输入框的占位信息"],["td","string"],["td",["code","'模糊搜索表格内容(多个关键词请用空格分隔。如：key1 key2)'"]]],["tr",["td","showBodyBg"],["td","会给表格增加白色背景和 ",["code","padding"]],["td","boolean"],["td","false"]],["tr",["td","showQueryOptionBtns"],["td","是否展示 ",["code","QueryForm"]," 的右下角的「查询」「重置」按钮，以及「展开」「收起」"],["td","boolean"],["td","true"]],["tr",["td","showQueryCollapseButton"],["td","是否展示 ",["code","QueryForm"]," 的「展开」「收起」"],["td","boolean"],["td","true"]],["tr",["td","isQuerySearchOnChange"],["td",["code","QueryForm"],"表单值变化时，是否更新Table数据"],["td","boolean"],["td","true"]],["tr",["td","queryFormProps"],["td","查询表单的",["code","props"],"，，详见 ",["code","QueryForm"]," 组件的文档"],["td","object"],["td","-"]],["tr",["td","queryMode"],["td","query 的展现类型"],["td",["code","'default'"]," ","|"," ",["code","'compact'"]],["td",["code","'default'"]]],["tr",["td","hideContentBorder"],["td","是否隐藏表格四周的边框"],["td","boolean"],["td","false"]],["tr",["td","antProps"],["td",["code","ant-v3"]," 的表格属性，设置了之后，会覆盖现有的属性"],["td",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/e4c72cf6f553376dbef6746bd0a74966152494fe/components/table/interface.tsx#L164"},"TableProps"]],["td","-"]],["tr",["td","antConfig"],["td","使用 ",["code","Antd ConfigProvider"]," 进行的全局配置，需要通过这个属性传进来"],["td",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/components/config-provider/index.tsx"},"ConfigProviderProps"]],["td","-"]]]],["h3","Columns"],["p","列描述数据对象，是 columns 中的一项，Column 使用相同的 API。这里还提供了更加",["strong","便捷"],"的「排序、搜索、过滤」等属性的设置。"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","commonFilter"],["td","开启表格通用过滤"],["td","boolean"],["td","false"]],["tr",["td","commonSorter"],["td","开启表格通用排序"],["td","boolean"],["td","false"]],["tr",["td","commonSearch"],["td","开启表格通用搜索"],["td","boolean"],["td","false"]],["tr",["td","searchRender"],["td","（commonSearch 未开启时，无效）search 功能可以高亮被搜索的信息，但是会覆盖 render 方法。如果你希望保持 search 的所有功能，并自定义 render 方法，请使用 searchRender 代替"],["td","Function(text, record, index, highlightNode) {return React.ReactNode}"],["td","-"]],["tr",["td","align"],["td","设置列的对齐方式"],["td",["code","left"]," ","|"," ",["code","right"]," ","|"," ",["code","center"]],["td",["code","left"]]],["tr",["td","ellipsis"],["td","超过宽度将自动省略，暂不支持和排序筛选一起使用。",["br"],"设置为 ",["code","true"]," 时，表格布局将变成 ",["code",'tableLayout="fixed"'],"。"],["td","boolean"],["td","false"]],["tr",["td","className"],["td","列样式类名"],["td","string"],["td","-"]],["tr",["td","colSpan"],["td","表头列合并,设置为 0 时，不渲染"],["td","number"],["td","-"]],["tr",["td","dataIndex"],["td","列数据在数据项中对应的路径，支持通过数组查询嵌套路径"],["td","string ","|"," string","[","]"],["td","-"]],["tr",["td","defaultFilteredValue"],["td","默认筛选值"],["td","string","[","]"],["td","-"]],["tr",["td","defaultSortOrder"],["td","默认排序顺序"],["td",["code","ascend"]," ","|"," ",["code","descend"]],["td","-"]],["tr",["td","filterDropdown"],["td","可以自定义筛选菜单，此函数只负责渲染图层，需要自行编写各种交互"],["td","React.ReactNode ","|"," (props: ",["a",{title:null,href:"https://git.io/fjP5h"},"FilterDropdownProps"],") => React.ReactNode"],["td","-"]],["tr",["td","filterDropdownVisible"],["td","用于控制自定义筛选菜单是否可见"],["td","boolean"],["td","-"]],["tr",["td","filtered"],["td","标识数据是否经过过滤，筛选图标会高亮"],["td","boolean"],["td","false"]],["tr",["td","filteredValue"],["td","筛选的受控属性，外界可用此控制列的筛选状态，值为已筛选的 value 数组"],["td","string","[","]"],["td","-"]],["tr",["td","filterIcon"],["td","自定义 filter 图标。"],["td","ReactNode","|","(filtered: boolean) => ReactNode"],["td","false"]],["tr",["td","filterMultiple"],["td","是否多选"],["td","boolean"],["td","true"]],["tr",["td","filters"],["td","表头的筛选菜单项"],["td","object","[","]"],["td","-"]],["tr",["td","fixed"],["td","（IE 下无效）列是否固定，可选 ",["code","true"],"(等效于 left) ",["code","'left'"]," ",["code","'right'"]],["td","boolean","|","string"],["td","false"]],["tr",["td","key"],["td","React 需要的 key，如果已经设置了唯一的 ",["code","dataIndex"],"，可以忽略这个属性"],["td","string"],["td","-"]],["tr",["td","render"],["td","生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，@return 里面可以设置表格",["a",{title:null,href:"#components-table-demo-colspan-rowspan"},"行/列合并"]],["td","Function(text, record, index) {}"],["td","-"]],["tr",["td","sorter"],["td","排序函数，本地排序使用一个函数(参考 ",["a",{title:null,href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"},"Array.sort"]," 的 compareFunction)，需要服务端排序可设为 true"],["td","Function","|","boolean"],["td","-"]],["tr",["td","sortOrder"],["td","排序的受控属性，外界可用此控制列的排序，可设置为 ",["code","'ascend'"]," ",["code","'descend'"]," ",["code","false"]],["td","boolean","|","string"],["td","-"]],["tr",["td","sortDirections"],["td","支持的排序方式，取值为 ",["code","'ascend'"]," ",["code","'descend'"]],["td","Array"],["td",["code","['ascend', 'descend']"]]],["tr",["td","title"],["td","列头显示文字（函数用法 ",["code","3.10.0"]," 后支持）"],["td","ReactNode","|","({ sortOrder, sortColumn, filters }) => ReactNode"],["td","-"]],["tr",["td","width"],["td","列宽度（",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/13825#issuecomment-449889241"},"指定了也不生效？"],"）"],["td","string","|","number"],["td","-"]],["tr",["td","onCell"],["td","设置单元格属性"],["td","Function(record, rowIndex)"],["td","-"]],["tr",["td","onFilter"],["td","本地模式下，确定筛选的运行函数"],["td","Function"],["td","-"]],["tr",["td","onFilterDropdownVisibleChange"],["td","自定义筛选菜单可见变化时调用"],["td","function(visible) {}"],["td","-"]],["tr",["td","onHeaderCell"],["td","设置头部单元格属性"],["td","Function(column)"],["td","-"]]]]]}}}]);