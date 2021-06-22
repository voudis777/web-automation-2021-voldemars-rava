import {pages} from '../support/pages'

export class DisconnectionTest {
    UsersDisconnect(){
        pages.user1.chatPage.getDisconnectButton().click()
        pages.user2.chatPage.getDisconnectButton().click()

        pages.user1.infoMessegesPage.getDisconnectMessage('Connection to tcp://broker.mqtt.cool:1883 lost').waitForDisplayed()
        pages.user2.infoMessegesPage.getDisconnectMessage('Connection to tcp://broker.mqtt.cool:1883 lost').waitForDisplayed()
    }
}