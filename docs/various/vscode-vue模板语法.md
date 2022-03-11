## 在 vscode 中设置模板语法，可以直接使用“vue + 回车键”创 vue 文件中的 vue 内容

点击 vscode 左上角的文件-首选项-用户代码片段-输入框中搜索 vue.json-将以下代码复制到文件中即可在 vue 文件中使用

```
{
    "Print to console": {
        "prefix": "vue",
        "body": [
            "<template>",
            "    <div>\n",
            "    </div>",
            "</template>\n",
            "<script>",
            "export default {",
            "    data () {",
            "        return {\n",
            "        }",
            "    },",
            "    components: {\n",
            "    },",
            "    computed: {\n",
            "    },",
            "    mounted: {\n",
            "    },",
            "    methods: {\n",
            "    }",
            "}",
            "</script>\n",
            "    <style scoped>\n",
            " ",
            "    </style>",
            "$2"
        ],
        "description": "Log output to console"
    }
}
```
