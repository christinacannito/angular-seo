import { AngularSeoTestPage } from './app.po';

describe('angular-seo-test App', () => {
  let page: AngularSeoTestPage;

  beforeEach(() => {
    page = new AngularSeoTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
