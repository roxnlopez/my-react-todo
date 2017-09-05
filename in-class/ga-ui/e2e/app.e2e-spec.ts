import { GaUiPage } from './app.po';

describe('ga-ui App', () => {
  let page: GaUiPage;

  beforeEach(() => {
    page = new GaUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
