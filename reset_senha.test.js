const { expect, test } = require("@playwright/test");
const utils = require('../../utils');

const { defineConfig } = require ('@playwright/test');
export default defineConfig({
  use: {
    video: 'on-first-retry',
  },
});



test('Processo de resetar senha do usuário no Aplicativo do Coco Bambu ', async ({ page, context }) => {
    test.setTimeout(1000000);


    //PASSO 1 - Acessando a Url do Aplicativo Coco Bambu
    await page.goto('https://app.cocobambu.com/delivery', { timeout: 10000 })
    await utils.sleep(2000)

    //PASSO 2 - Clicando em "Entrar"
    await page.getByText('Entrar').click();
    await utils.sleep(3000)

    //PASSO 3 - Clicando em Resetar senha
    await page.getByText('Resetar senha').click();

    //PASSO 4 - Preenchendo modal Recuperar senha com e-mail
    await page.getByRole('textbox', { name: 'E-mail' }).click();
    await page.getByRole('textbox', { name: 'E-mail' }).fill('desafioqa2cocobambu@outlook.com');
    await utils.sleep(3000)

    //PASSO 5 - Clicando em Recuperar (sera aberto modal informando que foi enviado e-mail de recuperação de senha)
    await page.getByRole('button', { name: 'Recuperar' }).click();
    await utils.sleep(3000)

    //PASSO 6 - Clicando em OK
    await page.getByRole('button', { name: 'OK' }).click();
    await utils.sleep(3000)

    //PASSO 7 - Acessar e-mail de Cadastro
    await page.goto('https://outlook.office.com/mail/');
    await utils.sleep(3000)
    //Usuario
    await page.click('#i0116')
    await page.type('#i0116', 'desafioqa2cocobambu@outlook.com')
    await utils.sleep(3000)
    await page.click('#idSIButton9')
    await utils.sleep(3000)
    //Senha
    await page.click('#i0118')
    await page.type('#i0118', 'Partner01!')
    await utils.sleep(3000)
    await page.click('#idSIButton9')
    await utils.sleep(3000)
    await page.click('#idBtn_Back')
    await utils.sleep(3000)    

    //PASSO 8 - Clicando no e-mail noreply@cocobambu.com
    await page.getByRole('tab', { name: 'Outros Outros' }).click();
    await utils.sleep(3000)
    await page.getByText('Redefinição de senha - Coco Bambu').click();
    await utils.sleep(3000)

    //PASSO 9 - Clicar na tag (REDEFINIR MINHA SENHA) será aberto pagina de redefinição de senha
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'REDEFINIR MINHA SENHA' }).click();
    const page1 = await page1Promise;
    await utils.sleep(3000)

    //PASSO 10 - Digitando uma nova senha
    await page1.getByLabel('Digite uma nova senha').click();    
    await page1.getByLabel('Digite uma nova senha').fill('Parceiro01!');
    await utils.sleep(3000)

    //PASSO 11 - Repetindo a nova senha
    await page1.getByLabel('Repita a nova senha').click();
    await page1.getByLabel('Repita a nova senha').fill('Parceiro01!');
    await utils.sleep(3000)

    //PASSO 12 - Clicando em ALTERAR MINHA SENHA, será aberto página informando que a senha foi alterada
    await page1.getByRole('button', { name: 'ALTERAR MINHA SENHA' }).click();
    await utils.sleep(3000)












})