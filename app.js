// const fs = require('fs')

const yargs = require('yargs')
    .option('saludo',{type:'string'})
    .option('valor',{alias:'v', type:'number'})
    .check((argv,options)=>{
        if(argv.v > 0){
            return true
        }else if(isNaN(argv.v)){
            throw 'El valor deber ser numerico.'
        }
        else{
            throw 'El valor deber ser mayor a: 0 (Cero)'
        }
    })

console.log(yargs.argv)