import { ImperialStarfleetPage } from './app.po';

describe('imperial-starfleet App', () => {
  let page: ImperialStarfleetPage;

  beforeEach(() => {
    page = new ImperialStarfleetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
