import BasePage from './BasePage';

class PortfolioPage extends BasePage {

    portfolioUrl = 'https://demo-portfolio-seven-gamma.vercel.app/';

    navSelector = 'nav, header';

    navigateToPortfolio() {
        this.visit(this.portfolioUrl);
    }


    verifyPageLoaded() {
        cy.get('body').should('be.visible');
    }


    verifyPageTitle() {
        cy.title().should('not.be.empty');
    }


    verifyUrlCorrect() {
        cy.url()
          .should('include', 'demo-portfolio-seven-gamma.vercel.app');
    }


    verifyNavbarVisible() {
        cy.get(this.navSelector)
          .first()
          .should('be.visible');
    }


    getNavbarLinks() {
        return cy.get('nav a, header a');
    }


    verifyResponsiveLayout() {
        cy.get('button, a')
          .should('have.length.greaterThan', 0);
    }

}

export default new PortfolioPage();