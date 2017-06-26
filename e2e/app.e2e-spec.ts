import { NewNGPage } from './app.po';

describe('new-ng App', () => {
  let page: NewNGPage;

  beforeEach(() => {
    page = new NewNGPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
