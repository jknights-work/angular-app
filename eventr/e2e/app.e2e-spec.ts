import { NarratonesPage } from './app.po';

describe('narratones App', function() {
  let page: NarratonesPage;

  beforeEach(() => {
    page = new NarratonesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
