import PortfolioPage from '../pages/PortfolioPage';


describe('Portfolio Website - Navbar Testing', () => {


    it('Verify navbar is visible and contains links', () => {


        PortfolioPage.navigateToPortfolio();


        PortfolioPage.verifyNavbarVisible();


        PortfolioPage.getNavbarLinks()
        .its('length')
        .should('be.greaterThan',0);


        cy.screenshot('navbar-visible');


    });


});