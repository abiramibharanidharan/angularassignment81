import { AAssignment811Page } from './app.po';

describe('a-assignment811 App', function() {
  let page: AAssignment811Page;

  beforeEach(() => {
    page = new AAssignment811Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
