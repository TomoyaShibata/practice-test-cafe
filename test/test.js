import assert from 'assert'
import { Selector } from 'testcafe'
const getElementById = Selector(id => document.querySelector(`#${id}`));

fixture('Example page').page('http://devexpress.github.io/testcafe/example/')

test('Your name に入力した名前が完了画面で表示される', async t => {
    await t
        .typeText('#developer-name', 'Tomoya Shibata')
        .click('#submit-button');

    const articleHeader = await getElementById('article-header');
    const headerText = articleHeader.innerText;

    assert.equal(headerText, 'Thank you, Tomoya Shibata!');
});