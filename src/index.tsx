import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import * as serviceWorker from './serviceWorker';
// 顶部进度条
import nProgress from "nprogress";
// 富文本编辑器
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
// emoji
import { Picker } from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'
// 高德地图
import { Map } from 'react-amap';
// 右键菜单
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
// markdown编辑器
const ReactMarkdown = require('react-markdown')

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
