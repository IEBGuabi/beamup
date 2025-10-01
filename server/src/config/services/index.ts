import { Server } from "./server"
import { Logger } from "@infra/utils/logger/Logger"

(async () => {
    const serverInitialized = Server.getInstance().inititalize()
    if(!serverInitialized) {
        Logger.error({
            message: '[APP] - Server initialization failed',
        })
        process.exit()
    }
})()