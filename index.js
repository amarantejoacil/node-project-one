import chalk from 'chalk';
import fs from 'fs';

function tratarErro(err){
  throw new Error(chalk.red(err.code, 'erro diretorio incorreto!'));
}

const encoding = 'utf-8'

//Primeira forma de trabalha de forma assincrona/promessas - THEN
/*
function pegarArquivo(caminho){
  const encoding = 'utf-8'
  fs.promises
  .readFile(caminho, encoding)
  .then((texto) => chalk.green(console.log(texto)))
  .catch((err) => tratarErro(err))


}  */

async function pegarArquivo(caminho){
  const encoding = 'utf-8'
  try{
  const texto = await fs.promises.readFile(caminho, encoding)
  console.log(chalk.green(texto))
  }catch(err){
  tratarErro(err)
  }finally{
    console.log('operacao concluida com sucesso!!!')

}

}


/*
function pegarArquivo(caminho){
  fs.readFile(caminho, encoding, (err,texto) => {
    if(err){
      tratarErro(err)
    }else{
      console.log(chalk.blue(texto));
    }
  })
}
*/

//pegarArquivo('texto12.md'); //simulando erro
pegarArquivo('texto1.md');





