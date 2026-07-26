import PortfolioPage from '../pages/PortfolioPage';


describe('Portfolio Website - Responsive Testing', () => {


    it('Verify website works on different screen sizes', () => {


        // Desktop
        cy.viewport(1280,900);

        PortfolioPage.navigateToPortfolio();

        PortfolioPage.verifyResponsiveLayout();

        cy.screenshot('desktop-view');



        // Tablet
        cy.viewport(768,1024);

        PortfolioPage.verifyResponsiveLayout();

        cy.screenshot('tablet-view');



        // Mobile
        cy.viewport(390,844);

        PortfolioPage.verifyResponsiveLayout();

        cy.screenshot('mobile-view');


    });


});