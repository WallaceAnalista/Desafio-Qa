const { expect, test } = require("@playwright/test");
const utils = require('../../utils');
const { faker } = require('@faker-js/faker');



test('Processo de cadastramento de usuário no Aplicativo Coco Bambu ', async ({ page, context }) => {
    test.setTimeout(1000000);


    //PASSO 1 - Acessando a Url do Aplicativo Coco Bambu
    await page.goto('https://app.cocobambu.com/delivery', { timeout: 10000 })
    await utils.sleep(2000)

    //PASSO 2 - Clicando em "Entrar"
    await page.getByText('Entrar').click();
    await utils.sleep(3000)


    //PASSO 3 - Clicando em 'Cadastre-se'
    await page.getByText('Cadastre-se').click();
    await utils.sleep(3000)

    //PASSO 4 - Preenchendo as informações 'Nome Completo'
    await page.getByRole('textbox', { name: 'Nome completo' }).click();
    await page.getByRole('textbox', { name: 'Nome completo' }).fill('Desafio QA Coco Bambu');
    await utils.sleep(3000)

    //PASSO 5 - Preenchendo as informações 'E-mail'
    await page.locator('#formRegisterUser').getByRole('textbox', { name: 'E-mail' }).click();
    await page.locator('#formRegisterUser').getByRole('textbox', { name: 'E-mail' }).fill(faker.internet.email());
    await utils.sleep(3000)

    //PASSO 6 - Preenchendo as informações 'Senha'
    await page.locator('#formRegisterUser').getByRole('textbox', { name: 'Senha', exact: true }).click();
    await page.locator('#formRegisterUser').getByRole('textbox', { name: 'Senha', exact: true }).fill('Partner01!');
    await utils.sleep(3000)

    //PASSO 7 - Preenchendo as informações 'Confirmar senha'
    await page.getByRole('textbox', { name: 'Confirmar senha' }).click();
    await page.getByRole('textbox', { name: 'Confirmar senha' }).fill('Partner01!');
    await utils.sleep(3000)

    //PASSO 8 - Preenchendo as informações 'Selecione seu Estado'
    await page.locator('#ion-sel-0-lbl').click();
    await page.getByRole('button', { name: 'Distrito Federal' }).click();
    await utils.sleep(3000)

    //PASSO 9- Marcando checkbox 'Desejo receber notificações personalizadas.'
    await page.locator('label').filter({ hasText: 'Desejo receber notificações personalizadas.' }).click();
    await utils.sleep(3000)

    //PASSO 10 - Marcando checkbox 'Ao clicar em caadastrar você concorda com nossos termos e condições de uso.'
    await page.getByRole('checkbox', { name: 'Ao clicar em você concorda com nossos .' }).getByText('Ao clicar em cadastrar você concorda com nossos termos e condições de uso.').click();
    await utils.sleep(3000)    

    //PASSO 11 - Clicando no botão 'ACEITAR'
    await page.getByRole('button', { name: 'ACEITAR' }).click();
    await utils.sleep(3000)

    //PASSO 12 - Clicando no Botão 'Cadastrar'
    await page.getByRole('button', { name: 'CADASTRAR' }).click();
    await utils.sleep(10000)


    //PASSO 13 - Verificando o código recebido no e-mail    
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

    //Clicando no e-mail recebido "Coco Bambu"
    await page.getByRole('tab', { name: 'Outros Outros' }).click();
    await utils.sleep(3000)
    await page.getByText('noreply@cocobambu.com').click();

    //Coletando código de acesso
    const criou = await page.textContent('div > .x_container > .x_content > .x_code > .x_code-content')
    const codigo = criou.slice(7)
    await utils.sleep(3000)
    await page.close
    await utils.sleep(3000)
    await page.bringToFront()
    await utils.sleep(3000)

    //PASSO 14 - Clicando em FECHAR
    await page.getByRole('button', { name: 'FECHAR' }).click();
    await utils.sleep(5000)

    //PASSO 15 - Preenchendo autenticação com o codigo coletado no e-mail
    await page.locator('section').nth(2).click();
    await page.locator('section').nth(2).fill(codigo);

    //PASSO 16 - Cicando no botão ACESSAR
    await page.getByRole('button', { name: 'ACESSAR' }).click();
    await utils.sleep(3000)




    
















})




