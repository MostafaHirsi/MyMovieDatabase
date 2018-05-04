import { MyMovieDatabasePage } from './app.po';

describe('my-movie-database App', () => {
  let page: MyMovieDatabasePage;

  beforeEach(() => {
    page = new MyMovieDatabasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
