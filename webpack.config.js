const path = require('path'); // Trabalhar com caminhos node
module.exports ={
    entry: path.resolve(__dirname, 'src', 'index.js'), // Arquivo de entrada

    

    output:{ // Arquivo de saída
        path: path.resolve(__dirname, 'public'), 
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: './public',
    },


    module: { //Module configs 
        /**
         * Rules of readed js files 
         * 
         * babel-loader -> Javascript
         */
        rules: [ 
            {
                test: /\.js$/, // Execute only that .js extension 
                exclude: /node_modules/, //Quando trazer arquivos js do node modules, não passar eles pelo babel
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    }
}