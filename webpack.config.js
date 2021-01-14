const path = require('path');

module.exports = {
    name : 'wordrelay-setting',
    mode : 'development', // 실서비스 _ production
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry : {
        app: ['./client'],


    },//입력  client.jsx 랑 WordRelay.jsx 를 하나의 app.js로 만들기
    //client 에서 wordrelay불러오기 때문에 wordRelay는 쓸필요 없다.
    //resolve쓰면 확장자도 안써도된다. 알아서 찾아준다.
    //app: ['./client.jsx', 'WordRelay.jsx'] 

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets : ['@babel/preset-env', '@babel/preset-react'],
                plugins : ['@babel/plugin-proposal-class-properties'],
            },
            
        }],

    },

    output : {
        path: path.join(__dirname, 'dist'),  
        //dist 폴더 경로   [__dirname 현재폴더 ]안의 dist를 의미함
        filename : 'app.js'
    },//출력  app.js

};