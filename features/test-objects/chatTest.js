import {pages} from '../support/pages'
import {user1Name, user2Name} from './connectionTest'

let user1Message = "TestUser1 message!"
let user2Message = "TestUser2 message!"

export class ChatTest {

    firstUserSendMessage(){
        pages.user1.chatPage.getMessageInput().setValue(user1Message)
        pages.user1.chatPage.getMessageReplyButton().click()
    }
    
    secondUserRecieveMessage(){
        pages.user2.chatPage.getMessage(user1Name,user1Message).waitForDisplayed()
    }

    secondUserSendMessage(){
        pages.user2.chatPage.getMessageInput().setValue(user2Message)
        pages.user2.chatPage.getMessageReplyButton().click()
    }

    firstUserRecieveMessage(){
        pages.user1.chatPage.getMessage(user2Name,user2Message).waitForDisplayed()
    }
}