import { OurparkPage } from './app.po';

describe('ourpark App', function() {
  let page: OurparkPage;

  beforeEach(() => {
    page = new OurparkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
