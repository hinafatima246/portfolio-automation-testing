*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${URL}       https://www.saucedemo.com/
${BROWSER}   chrome

*** Test Cases ***
Successful Login Navigation Test
    Open Browser    ${URL}    ${BROWSER}
    Input Text      id:user-name    standard_user
    Input Text      id:password     secret_sauce
    Click Button    id:login-button
    Wait Until Page Contains Element    class:inventory_list    timeout=5s
    ${current_url}=    Get Location
    Log    Current URL: ${current_url}
    Should Contain    ${current_url}    inventory
    Log    ✅ Navigation Successful
    Close Browser