import { DougHousePage } from './app.po';

describe('doug-house App', () => {
  let page: DougHousePage;

  beforeEach(() => {
    page = new DougHousePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
