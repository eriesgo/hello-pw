Feature: Are we using Playwright
  Everybody wants to know if Playwright works with Cucumber

  Scenario: We use Playwright
    Given Bob opens Playwright website
    When Bob goes to Get started
    Then Bob sees Installation
