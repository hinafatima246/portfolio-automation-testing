import PortfolioPage from '../pages/PortfolioPage';


describe('Portfolio Website - Page Load Testing', () => {


    it('Verify website loads correctly and title exists', () => {


        PortfolioPage.navigateToPortfolio();


        PortfolioPage.verifyPageLoaded();


        PortfolioPage.verifyUrlCorrect();


        PortfolioPage.verifyPageTitle();


        cy.screenshot('homepage-loaded');


    });


});