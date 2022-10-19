"use strict";
// Builder
Object.defineProperty(exports, "__esModule", { value: true });
exports.FFmpegBuilder = void 0;
var FFmpegBuilder = /** @class */ (function () {
    function FFmpegBuilder() {
        this.options = new Map();
        this.options.set('-c:v', 'libx264');
    }
    FFmpegBuilder.prototype.input = function (inputPath) {
        this.inputPath = inputPath;
        return this;
    };
    FFmpegBuilder.prototype.setVideoSize = function (width, height) {
        this.options.set('-s', width + "x" + height);
        return this;
    };
    FFmpegBuilder.prototype.output = function (outputPath) {
        if (!this.inputPath) {
            throw new Error('Input does not exists');
        }
        var args = ['-i', this.inputPath];
        this.options.forEach(function (value, key) {
            args.push(key);
            args.push(value);
        });
        args.push(outputPath);
        return args;
    };
    return FFmpegBuilder;
}());
exports.FFmpegBuilder = FFmpegBuilder;
