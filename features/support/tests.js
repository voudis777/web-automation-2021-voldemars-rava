import { ConnectionTest } from '../test-objects/connectionTest'
import { ChatTest } from '../test-objects/chatTest'
import { DisconnectionTest } from '../test-objects/disconnectionTest'

import {pages} from './pages'

export class Tests {
    constructor(pages) {
        this.connectionTest = new ConnectionTest(pages)
        this.chatTest = new ChatTest(pages)
        this.disconnectionTest = new DisconnectionTest(pages)
    }
}

const tests = new Tests(pages)
export {tests}