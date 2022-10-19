// Builder

interface IResolution {
  width: number
  height: number
}

export class FFmpegBuilder {
  private inputPath: string
  private options: Map<string, string> = new Map()

  constructor() {
    this.options.set('-c:v', 'libx264')
  }

  input(inputPath: string): FFmpegBuilder {
    this.inputPath = inputPath
    return this
  }

  setVideoSize(width: number, height: number): FFmpegBuilder {
    this.options.set('-s', `${width}x${height}`)
    return this
  }

  output(outputPath: string): string [] {
    if(!this.inputPath) {
      throw new Error('Input does not exists')
    }
    const args: string [] = ['-i', this.inputPath]
    this.options.forEach((value, key) => {
      args.push(key)
      args.push(value)
    })
    args.push(outputPath)
    return args
  }
}



