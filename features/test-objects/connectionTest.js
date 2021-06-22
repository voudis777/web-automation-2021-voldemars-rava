import {pages} from '../support/pages'
    let user1Name = "TestUser1"
    let user2Name = "TestUser2"

class ConnectionTest {
    UsersOpenPageAndSeeConnectMessage(){
        pages.user1.chatPage.openPage()
        pages.user2.chatPage.openPage()

        pages.user1.infoMessegesPage.getConectToServerMessage('Connected to the MQTT.Cool server').waitForDisplayed()
        pages.user2.infoMessegesPage.getConectToServerMessage('Connected to the MQTT.Cool server').waitForDisplayed()
    }

    UsersInputUserNames(){
        pages.user1.chatPage.getNameInput().setValue(user1Name)
        pages.user2.chatPage.getNameInput().setValue(user2Name)
    }

    UsersConnectBroker(){
        pages.user1.chatPage.getConnectButton().click()
        pages.user2.chatPage.getConnectButton().click()

        pages.user1.infoMessegesPage.getConnectToBrokerMessage('Connected to the MQTT broker at tcp://broker.mqtt.cool:1883').waitForDisplayed()
        pages.user2.infoMessegesPage.getConnectToBrokerMessage('Connected to the MQTT broker at tcp://broker.mqtt.cool:1883').waitForDisplayed()
    }

    UsersCheckEachOther(){
        pages.user1.chatPage.getChannelUser(user1Name +' (you)').waitForDisplayed()
        pages.user2.chatPage.getChannelUser(user2Name +' (you)').waitForDisplayed()
        
        pages.user1.chatPage.getChannelUser(user2Name).waitForDisplayed()
        pages.user2.chatPage.getChannelUser(user1Name).waitForDisplayed()
    }

}
module.exports={ConnectionTest,user1Name, user2Name}