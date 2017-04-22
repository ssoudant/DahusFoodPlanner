import { DahusFoodPlannerFrontPage } from './app.po';

describe('dahus-food-planner-front App', () => {
  let page: DahusFoodPlannerFrontPage;

  beforeEach(() => {
    page = new DahusFoodPlannerFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
