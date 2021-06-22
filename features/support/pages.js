import {chatPage} from '../pageobjects/chatPage'
import {infoMessegesPage} from '../pageobjects/infoMessegesPage'

class Pages {
    constructor() {
        this.user1 = {
            chatPage: new chatPage('user1'),
            infoMessegesPage: new infoMessegesPage('user1')
        }
        this.user2 = {
            chatPage: new chatPage('user2'),
            infoMessegesPage: new infoMessegesPage('user2')
        }
    }
}

const pages = new Pages()
export {pages}