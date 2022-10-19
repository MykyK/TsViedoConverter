"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamHandler = void 0;
var StreamHandler = /** @class */ (function () {
    function StreamHandler(logger) {
        this.logger = logger;
    }
    StreamHandler.prototype.processOutput = function (stream) {
        var _this = this;
        stream.stdout.on('data', function (data) {
            _this.logger.log(data);
        });
        stream.stderr.on('data', function (data) {
            _this.logger.error(data);
        });
        stream.stdout.on('close', function () {
            _this.logger.end();
        });
    };
    return StreamHandler;
}());
exports.StreamHandler = StreamHandler;
