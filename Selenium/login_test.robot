*** Settings ***
Library    SeleniumLibrary


*** Variables ***
${URL}    https://www.saucedemo.com/
${BROWSER}    Chrome


*** Test Cases ***
Successful Login Test

    Open Browser    ${URL}    ${BROWSER}

    Input Text    id:user-name    standard_user

    Input Password    id:password    secret_sauce

    Click Button    id:login-button

    Page Should Contain    Products

    Close Browser
