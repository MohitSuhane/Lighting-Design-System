import { DemoLdsAppPage } from './app.po';

describe('demo-lds-app App', function() {
  let page: DemoLdsAppPage;

  beforeEach(() => {
    page = new DemoLdsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
