import { ILogger } from './../handlers/stream-logger.interface';
import { ChildProcessWithoutNullStreams, spawn } from 'child_process';
import { ICommandExec } from './command.types';

//Template pattern
export abstract class CommandExecutor<Input> {

  constructor(private logger: ILogger){}

  public async execute() {
    const input = await this.prompt();
    const command = await this.build(input);
    const stream = await this.spawn(command);
    this.processStream(stream, this.logger)
  }

  protected abstract prompt(): Promise<Input>
  protected abstract build(input: Input): ICommandExec
  protected abstract spawn(command: ICommandExec): ChildProcessWithoutNullStreams
  protected abstract processStream(stream: ChildProcessWithoutNullStreams, logger: ILogger): void
}

spawn('ffmpeg', )
