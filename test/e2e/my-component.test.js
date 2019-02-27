const showroom = require('showroom/puppeteer')();
const path = require('path');

describe('My awesome component', async () => {

  beforeAll(async () => {
    await showroom.start();
    await showroom.page.addScriptTag({
      path: path.join(process.cwd(), 'node_modules/query-selector-shadow-dom/dist/querySelectorShadowDom.js')
    })
  });

  beforeEach(async () => {
    await showroom.utils.setTestSubject('my-component');
   //await new Promise(resolve => setTimeout(() => resolve(), 10)); //Workaround to fix fluffy showroom.utils.trigger()
  });

  afterAll(async () => {
    await showroom.stop();
  });

  test('test 1', async () => {
    await showroom.utils.trigger('initData');
    const expectedData = ['hello','world'];

    const result = await showroom.page.evaluate(() => querySelectorShadowDom.querySelectorAllDeep('my-component  li').map(item => item.innerText));
    expect(result).toEqual(expectedData);

  });

  test('test 2', async () => {
    await showroom.utils.trigger('initData');
    const expectedData = ['hello','world'];

    const result = await showroom.page.evaluate(() => querySelectorShadowDom.querySelectorAllDeep('my-component  li').map(item => item.innerText));
    expect(result).toEqual(expectedData);

  });

  test('test 2', async () => {
    await showroom.utils.trigger('initData');
    const expectedData = ['hello','world'];

    const result = await showroom.page.evaluate(() => querySelectorShadowDom.querySelectorAllDeep('my-component  li').map(item => item.innerText));
    expect(result).toEqual(expectedData);

  });


});


