const { defineConfig } = require('@vue/cli-service')
const path = require("path");

const name = "my study vue"; // page title

module.exports = defineConfig({
    transpileDependencies: true,
    // lintOnSave: false,
    configureWebpack: {
        name: name,
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src")
            },
            extensions: [".ts", ".tsx", ".js", ".json", ".vue"]
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    exclude: /node_modules/,
                    enforce: 'pre',
                    loader: 'eslint-loader'
                },
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                    options: {
                        appendTsSuffixTo: [/\.vue$/],
                    }
                }
            ]
        }
    },
    // ...其他配置项
    chainWebpack: config => {
        config.resolve.extensions.add(".ts").add(".tsx");
        config.entry("app").clear().add(path.resolve(__dirname, "src/main.ts"));
    }
})
