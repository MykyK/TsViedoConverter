import { ILogger } from "../../core/handlers/stream-logger.interface";

//Singleton

export class Logger implements ILogger {
  private static instance: Logger

  public static getInstance(): Logger {
    if(!Logger.instance) {
      Logger.instance = new Logger()
    }
    return Logger.instance
  }

  log(...args: any[]): void {
    console.log(...args)
  }
  end(): void {
    console.log('End')
  }
  error(...args: any[]): void {
    console.log(...args, 'error')
  }

}

