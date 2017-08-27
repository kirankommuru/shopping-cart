import { ShopCartPage } from './app.po';

describe('shop-cart App', () => {
  let page: ShopCartPage;

  beforeEach(() => {
    page = new ShopCartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
