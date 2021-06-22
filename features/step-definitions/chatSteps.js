import {Given,When,Then} from '@cucumber/cucumber';
import {tests} from '../support/tests'


Given("I see both users have opened the page and connected to server", function() {
    tests.connectionTest.UsersOpenPageAndSeeConnectMessage()
})

When("I see that both users enter the name", function(){
    tests.connectionTest.UsersInputUserNames()
})

When("I see both user connect to the broker", function(){
    tests.connectionTest.UsersConnectBroker()
})

When("I see that both users see each other", function(){
    tests.connectionTest.UsersCheckEachOther()
})

When("I see that user1 sends message", function(){
    tests.chatTest.firstUserSendMessage()
})

When("I see that user2 receive message", function(){
    tests.chatTest.secondUserRecieveMessage()
})

When("I see that user2 sends message", function(){
    tests.chatTest.secondUserSendMessage()
})

Then("I see that user1 receives the message", function(){
    tests.chatTest.firstUserRecieveMessage()
})

Then("I see that both users can disconnect", function(){
    tests.disconnectionTest.UsersDisconnect()
})