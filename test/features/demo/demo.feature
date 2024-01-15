Feature: Demo feature

    @demo
    Scenario Outline: Running a test to search
        Given I open google page
        When  Search with <SearchItem>
        Then  Click on the first occurrence result
        Then  URL should match <ExpectedURL>
        # Then  assert All
        Examples:
            | TestID     | SearchItem | ExpectedURL           |
            | DEMO_TC001 | wedriverio | https://webdriver.io/ |