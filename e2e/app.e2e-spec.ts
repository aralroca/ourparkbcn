import { OurparkbcnPage } from './app.po';

describe('ourparkbcn App', function() {
  let page: OurparkbcnPage;

  beforeEach(() => {
    page = new OurparkbcnPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
