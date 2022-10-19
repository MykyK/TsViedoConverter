
import { FfmpegExecutor } from "./commands/ffmpeg/ffmpeg.exec"
import { Logger } from "./out/logger/logger"

export class App {
 async run() {
  new FfmpegExecutor(Logger.getInstance()).execute()
  }
}

const app = new App
app.run()
