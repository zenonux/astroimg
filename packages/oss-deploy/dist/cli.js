#! /usr/bin/env node
"use strict";
function _async_iterator(iterable) {
    var method, async, sync, retry = 2;
    for("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;){
        if (async && null != (method = iterable[async])) return method.call(iterable);
        if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable));
        async = "@@asyncIterator", sync = "@@iterator";
    }
    throw new TypeError("Object is not async iterable");
}
function AsyncFromSyncIterator(s) {
    function AsyncFromSyncIteratorContinuation(r) {
        if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object."));
        var done = r.done;
        return Promise.resolve(r.value).then(function(value) {
            return {
                value: value,
                done: done
            };
        });
    }
    return AsyncFromSyncIterator = function(s) {
        this.s = s, this.n = s.next;
    }, AsyncFromSyncIterator.prototype = {
        s: null,
        n: null,
        next: function() {
            return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));
        },
        return: function(value) {
            var ret = this.s.return;
            return void 0 === ret ? Promise.resolve({
                value: value,
                done: !0
            }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments));
        },
        throw: function(value) {
            var thr = this.s.return;
            return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments));
        }
    }, new AsyncFromSyncIterator(s);
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = function(to, from, except, desc) {
    if (from && (typeof from === "undefined" ? "undefined" : _type_of(from)) === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
// src/cli.ts
var import_commander = require("commander");
// src/bucket.ts
var import_fs = __toESM(require("fs"));
var import_cos_nodejs_sdk_v5 = __toESM(require("cos-nodejs-sdk-v5"));
var import_path = __toESM(require("path"));
var import_readdirp = __toESM(require("readdirp"));
var import_p_limit = __toESM(require("p-limit"));
var limit = (0, import_p_limit.default)(3);
var CosBucketManager = /*#__PURE__*/ function() {
    function CosBucketManager(options) {
        _class_call_check(this, CosBucketManager);
        this._options = options;
        this._client = new import_cos_nodejs_sdk_v5.default({
            SecretId: options.secretId,
            SecretKey: options.secretKey
        });
    }
    _create_class(CosBucketManager, [
        {
            key: "uploadLocalFile",
            value: function uploadLocalFile(prefixPath, filePath) {
                var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                var _this = this;
                return _async_to_generator(function() {
                    var res, e;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_this._client) {
                                    return [
                                        2
                                    ];
                                }
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    3,
                                    ,
                                    4
                                ]);
                                return [
                                    4,
                                    _this._client.putObject(_object_spread({
                                        Bucket: _this._options.bucket,
                                        Region: _this._options.region,
                                        Key: prefixPath,
                                        Body: import_fs.default.createReadStream(filePath)
                                    }, options))
                                ];
                            case 2:
                                res = _state.sent();
                                console.info("Upload ".concat(prefixPath, " success."));
                                return [
                                    2,
                                    res
                                ];
                            case 3:
                                e = _state.sent();
                                console.error("Upload ".concat(prefixPath, " failed."));
                                throw new Error(e);
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "checkDirectoryExists",
            value: function checkDirectoryExists(prefix) {
                var _this = this;
                return _async_to_generator(function() {
                    var result, err;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_this._client) {
                                    return [
                                        2,
                                        false
                                    ];
                                }
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    3,
                                    ,
                                    4
                                ]);
                                return [
                                    4,
                                    _this._client.getBucket({
                                        Bucket: _this._options.bucket,
                                        Region: _this._options.region,
                                        Prefix: prefix.endsWith("/") ? prefix : prefix + "/",
                                        MaxKeys: 1
                                    })
                                ];
                            case 2:
                                result = _state.sent();
                                if (result.Contents.length > 0) {
                                    return [
                                        2,
                                        true
                                    ];
                                } else {
                                    return [
                                        2,
                                        false
                                    ];
                                }
                                return [
                                    3,
                                    4
                                ];
                            case 3:
                                err = _state.sent();
                                return [
                                    2,
                                    false
                                ];
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "uploadLocalDirectory",
            value: function uploadLocalDirectory(prefix, dirPath, options) {
                var _this = this;
                return _async_to_generator(function() {
                    var input, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step, err;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                dirPath = import_path.default.resolve(dirPath);
                                input = [];
                                _iteratorAbruptCompletion = false, _didIteratorError = false;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    6,
                                    7,
                                    12
                                ]);
                                _loop = function() {
                                    var _value = _step.value;
                                    var entry = _value;
                                    var fullPath = entry.fullPath;
                                    var relativePath = import_path.default.relative(dirPath, fullPath);
                                    var prefixPath = (prefix + relativePath).replace("\\", "/");
                                    input.push(limit(function() {
                                        return _this.uploadLocalFile(prefixPath, fullPath, options.cacheControl ? {
                                            CacheControl: options.cacheControl
                                        } : {});
                                    }));
                                };
                                _iterator = _async_iterator((0, import_readdirp.default)(dirPath, options.filter));
                                _state.label = 2;
                            case 2:
                                return [
                                    4,
                                    _iterator.next()
                                ];
                            case 3:
                                if (!(_iteratorAbruptCompletion = !(_step = _state.sent()).done)) return [
                                    3,
                                    5
                                ];
                                _loop();
                                _state.label = 4;
                            case 4:
                                _iteratorAbruptCompletion = false;
                                return [
                                    3,
                                    2
                                ];
                            case 5:
                                return [
                                    3,
                                    12
                                ];
                            case 6:
                                err = _state.sent();
                                _didIteratorError = true;
                                _iteratorError = err;
                                return [
                                    3,
                                    12
                                ];
                            case 7:
                                _state.trys.push([
                                    7,
                                    ,
                                    10,
                                    11
                                ]);
                                if (!(_iteratorAbruptCompletion && _iterator.return != null)) return [
                                    3,
                                    9
                                ];
                                return [
                                    4,
                                    _iterator.return()
                                ];
                            case 8:
                                _state.sent();
                                _state.label = 9;
                            case 9:
                                return [
                                    3,
                                    11
                                ];
                            case 10:
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                                return [
                                    7
                                ];
                            case 11:
                                return [
                                    7
                                ];
                            case 12:
                                return [
                                    4,
                                    Promise.all(input)
                                ];
                            case 13:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return CosBucketManager;
}();
var BucketManagerFactory = /*#__PURE__*/ function() {
    function BucketManagerFactory() {
        _class_call_check(this, BucketManagerFactory);
    }
    _create_class(BucketManagerFactory, null, [
        {
            key: "create",
            value: function create(config) {
                return new CosBucketManager(config);
            }
        }
    ]);
    return BucketManagerFactory;
}();
// src/utils.ts
var import_fs2 = __toESM(require("fs"));
var import_path2 = __toESM(require("path"));
var import_yaml = require("yaml");
var parseYamlEnvVar = function(json) {
    var envReg = /\${\s?env.(\w+)}/;
    for(var i in json){
        var field = json[i];
        if (_instanceof(field, Object)) {
            parseYamlEnvVar(field);
        } else if (_instanceof(field, Array)) {
            for(var i2 = 0; i2 < field.length; i2++){
                if (_instanceof(field[i2], Object)) {
                    parseYamlEnvVar(field[i2]);
                }
            }
        } else {
            if (envReg.test(field)) {
                var envVar = field.match(envReg)[1];
                json[i] = process.env[envVar];
            }
        }
    }
};
var readYamlFile = function(file, root) {
    var filePath = import_path2.default.resolve(root || process.cwd(), file);
    var json = (0, import_yaml.parse)(import_fs2.default.readFileSync(filePath, "utf-8"));
    parseYamlEnvVar(json);
    return json;
};
var rules = {
    required: function(field, label) {
        if (field === "" || field === void 0 || field === null) {
            throw new Error("".concat(label, " is required."));
        }
    },
    prefix: function(value) {
        if (!value) {
            throw new Error("prefix is not correct. example:oss-deploy");
        }
    }
};
var formatTargetOptions = function(opts) {
    var cacheControl = opts.cacheControl;
    var prefix = opts.prefix;
    rules.prefix(prefix);
    if (prefix.charAt(0) === "/") {
        prefix = prefix.substring(1);
    }
    if (prefix.charAt(prefix.length - 1) !== "/") {
        prefix = prefix + "/";
    }
    return {
        prefix: prefix,
        cacheControl: cacheControl
    };
};
var formatOssOptions = function(opts) {
    rules.required(opts.secretId, "secretId");
    rules.required(opts.secretKey, "secretKey");
    rules.required(opts.region, "region");
    rules.required(opts.bucket, "bucket");
    return opts;
};
var formatLocalOptions = function(opts) {
    rules.required(opts.dist, "dist");
    return opts;
};
// src/index.ts
var OssDeploy = /*#__PURE__*/ function() {
    function OssDeploy(options) {
        _class_call_check(this, OssDeploy);
        var ossOptions = formatOssOptions(options);
        this._bucket = BucketManagerFactory.create(ossOptions);
    }
    _create_class(OssDeploy, [
        {
            key: "checkDirectoryExists",
            value: function checkDirectoryExists(prefix) {
                return this._bucket.checkDirectoryExists(prefix);
            }
        },
        {
            key: "uploadAssets",
            value: function uploadAssets(local, target) {
                var _this = this;
                return _async_to_generator(function() {
                    var _formatLocalOptions, dist, filter, _formatTargetOptions, prefix, cacheControl;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _formatLocalOptions = formatLocalOptions(local), dist = _formatLocalOptions.dist, filter = _formatLocalOptions.filter;
                                _formatTargetOptions = formatTargetOptions(target), prefix = _formatTargetOptions.prefix, cacheControl = _formatTargetOptions.cacheControl;
                                return [
                                    4,
                                    _this._bucket.uploadLocalDirectory(prefix, dist, {
                                        filter: filter,
                                        cacheControl: cacheControl
                                    })
                                ];
                            case 1:
                                _state.sent();
                                console.info("upload ".concat(prefix, " success."));
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return OssDeploy;
}();
// src/cli.ts
var program = new import_commander.Command();
main();
function main() {
    return _main.apply(this, arguments);
}
function _main() {
    _main = _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    program.command("upload").requiredOption("-c, --config <file>", "deploy config file", "./oss-deploy.yaml").description("upload assets to cos").action(uploadAction);
                    return [
                        4,
                        program.parseAsync(process.argv)
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return _main.apply(this, arguments);
}
function uploadAction(opts) {
    return _uploadAction.apply(this, arguments);
}
function _uploadAction() {
    _uploadAction = _async_to_generator(function(opts) {
        var _readYamlFile, local, target, oss, client;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _readYamlFile = readYamlFile(opts.config), local = _readYamlFile.local, target = _readYamlFile.target, oss = _readYamlFile.oss;
                    client = new OssDeploy(oss);
                    return [
                        4,
                        client.uploadAssets(local, target)
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return _uploadAction.apply(this, arguments);
}
