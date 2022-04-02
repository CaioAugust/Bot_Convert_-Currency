const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');

console.log('------------------------------------');
console.log('---  Bem vindo ao Bot conversor  ---');
console.log('------------------------------------');

async function robo() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const moedaBase = readlineSync.question('Informe uma moeda Primaria: ');
  const moedaFinal = readlineSync.question('Informe uma moeda Secundaria: ');
  console.log('------------------------------------');

  const Url = `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}&oq`;
  await page.goto(Url);
 
  const resultado = await page.evaluate(() => {
    return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;
  });

  console.log(`O valor de 1 ${moedaBase} em ${moedaFinal} é ${resultado}`)
  await browser.close();
}

robo();