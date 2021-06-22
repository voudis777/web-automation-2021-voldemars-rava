import {Page} from "./basePage"

export class chatPage extends Page {
    openPage() {        
        this.browser.url('https://demos.mqtt.cool/chat/')
        this.browser.pause(2000)
        this.browser.execute(() => {
            const elemToRemove = document.querySelector('img[alt="Fork me on GitHub"]');
            elemToRemove.remove();
        });
    }

    getNameInput(){
        return this.browser.$('#user')
    }

    getConnectButton(){
        return this.browser.$('#connectBtn')
    }

    getChannelUser(userName){
        return this.browser.$('li=' + userName)
    }

    getMessage(userName, userMessage){       
        return this.browser.$('div=' + userName +': ' + userMessage)
    }

    getMessageInput(){
        return this.browser.$('#sendMessage')
    }

    getMessageReplyButton(){
        return this.browser.$('#replyBtn')
    }

    getDisconnectButton(){
        return this.browser.$('#disconnectBtn')
    }
    
}