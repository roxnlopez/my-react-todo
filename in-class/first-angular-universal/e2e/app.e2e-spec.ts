import { FirstAngularUniversalPage } from './app.po';

describe('first-angular-universal App', () => {
  let page: FirstAngularUniversalPage;

  beforeEach(() => {
    page = new FirstAngularUniversalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
