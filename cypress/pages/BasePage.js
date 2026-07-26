class BasePage {

    visit(url) {
        cy.visit(url);
    }

    getTitle() {
        return cy.title();
    }

    getElement(selector) {
        return cy.get(selector);
    }

}

export default BasePage;