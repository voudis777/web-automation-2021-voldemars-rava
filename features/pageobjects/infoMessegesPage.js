import {Page} from "./basePage"

export class infoMessegesPage extends Page {
    
    getConectToServerMessage(connectMessage){
        return this.browser.$('div=' + connectMessage)
    }

    getConnectToBrokerMessage(brokerMessage){
        return this.browser.$('div='+ brokerMessage)
    }

    getDisconnectMessage(dissconectMessage){
        return this.browser.$('div=' + dissconectMessage)
    }

}