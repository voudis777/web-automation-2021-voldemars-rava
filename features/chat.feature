Feature: MQTT.Cool server 2 user chat feature

  Scenario: Chat with 2 users
    Given  I see both users have opened the page and connected to server
    When I see that both users enter the name
    And I see both user connect to the broker
    And I see that both users see each other
    And I see that user1 sends message
    And I see that user2 receive message
    And I see that user2 sends message
    Then I see that user1 receives the message
    And I see that both users can disconnect