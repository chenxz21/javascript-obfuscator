/*!
Copyright (C) 2016-2020 Timofey Kachalov <sanex3339@yandex.ru>

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright
    notice, this list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the
    documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

require("source-map-support").install();


module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const JavaScriptObfuscatorFacade_1 = __webpack_require__(/*! ./src/JavaScriptObfuscatorFacade */ "./src/JavaScriptObfuscatorFacade.ts");
module.exports = JavaScriptObfuscatorFacade_1.JavaScriptObfuscator;


/***/ }),

/***/ "./src/ASTParserFacade.ts":
/*!********************************!*\
  !*** ./src/ASTParserFacade.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ASTParserFacade = void 0;
const acorn = __importStar(__webpack_require__(/*! acorn */ "acorn"));
const chalk_1 = __importDefault(__webpack_require__(/*! chalk */ "chalk"));
class ASTParserFacade {
    static parse(sourceCode, config) {
        const sourceTypeLength = ASTParserFacade.sourceTypes.length;
        for (let i = 0; i < sourceTypeLength; i++) {
            try {
                return ASTParserFacade.parseType(sourceCode, config, ASTParserFacade.sourceTypes[i]);
            }
            catch (error) {
                if (i < sourceTypeLength - 1) {
                    continue;
                }
                throw new Error(ASTParserFacade.processParsingError(sourceCode, error.message, error.loc));
            }
        }
        throw new Error('Acorn parsing error');
    }
    static parseType(sourceCode, inputConfig, sourceType) {
        const comments = [];
        const config = Object.assign(Object.assign({}, inputConfig), { onComment: comments, sourceType });
        const program = acorn
            .parse(sourceCode, config);
        if (comments.length) {
            program.comments = comments;
        }
        return program;
    }
    static processParsingError(sourceCode, errorMessage, position) {
        if (!position || !position.line || !position.column) {
            throw new Error(errorMessage);
        }
        const sourceCodeLines = sourceCode.split(/\r?\n/);
        const errorLine = sourceCodeLines[position.line - 1];
        if (!errorLine) {
            throw new Error(errorMessage);
        }
        const startErrorIndex = Math.max(0, position.column - ASTParserFacade.nearestSymbolsCount);
        const endErrorIndex = Math.min(errorLine.length, position.column + ASTParserFacade.nearestSymbolsCount);
        const formattedPointer = ASTParserFacade.colorError('>');
        const formattedCodeSlice = `...${errorLine.substring(startErrorIndex, endErrorIndex).replace(/^\s+/, '')}...`;
        throw new Error(`ERROR at line ${position.line}: ${errorMessage}\n${formattedPointer} ${formattedCodeSlice}`);
    }
}
exports.ASTParserFacade = ASTParserFacade;
ASTParserFacade.colorError = chalk_1.default.red;
ASTParserFacade.nearestSymbolsCount = 15;
ASTParserFacade.sourceTypes = [
    'script',
    'module'
];


/***/ }),

/***/ "./src/JavaScriptObfuscator.ts":
/*!*************************************!*\
  !*** ./src/JavaScriptObfuscator.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var JavaScriptObfuscator_1, _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JavaScriptObfuscator = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ./container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const escodegen = __importStar(__webpack_require__(/*! escodegen */ "escodegen"));
const TObfuscatedCodeFactory_1 = __webpack_require__(/*! ./types/container/source-code/TObfuscatedCodeFactory */ "./src/types/container/source-code/TObfuscatedCodeFactory.ts");
const ICodeTransformersRunner_1 = __webpack_require__(/*! ./interfaces/code-transformers/ICodeTransformersRunner */ "./src/interfaces/code-transformers/ICodeTransformersRunner.ts");
const ILogger_1 = __webpack_require__(/*! ./interfaces/logger/ILogger */ "./src/interfaces/logger/ILogger.ts");
const IOptions_1 = __webpack_require__(/*! ./interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ./interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const INodeTransformersRunner_1 = __webpack_require__(/*! ./interfaces/node-transformers/INodeTransformersRunner */ "./src/interfaces/node-transformers/INodeTransformersRunner.ts");
const CodeTransformer_1 = __webpack_require__(/*! ./enums/code-transformers/CodeTransformer */ "./src/enums/code-transformers/CodeTransformer.ts");
const CodeTransformationStage_1 = __webpack_require__(/*! ./enums/code-transformers/CodeTransformationStage */ "./src/enums/code-transformers/CodeTransformationStage.ts");
const LoggingMessage_1 = __webpack_require__(/*! ./enums/logger/LoggingMessage */ "./src/enums/logger/LoggingMessage.ts");
const NodeTransformer_1 = __webpack_require__(/*! ./enums/node-transformers/NodeTransformer */ "./src/enums/node-transformers/NodeTransformer.ts");
const NodeTransformationStage_1 = __webpack_require__(/*! ./enums/node-transformers/NodeTransformationStage */ "./src/enums/node-transformers/NodeTransformationStage.ts");
const EcmaVersion_1 = __webpack_require__(/*! ./constants/EcmaVersion */ "./src/constants/EcmaVersion.ts");
const ASTParserFacade_1 = __webpack_require__(/*! ./ASTParserFacade */ "./src/ASTParserFacade.ts");
const NodeGuards_1 = __webpack_require__(/*! ./node/NodeGuards */ "./src/node/NodeGuards.ts");
const Utils_1 = __webpack_require__(/*! ./utils/Utils */ "./src/utils/Utils.ts");
let JavaScriptObfuscator = JavaScriptObfuscator_1 = class JavaScriptObfuscator {
    constructor(codeTransformersRunner, nodeTransformersRunner, randomGenerator, obfuscatedCodeFactory, logger, options) {
        this.codeTransformersRunner = codeTransformersRunner;
        this.nodeTransformersRunner = nodeTransformersRunner;
        this.randomGenerator = randomGenerator;
        this.obfuscatedCodeFactory = obfuscatedCodeFactory;
        this.logger = logger;
        this.options = options;
    }
    obfuscate(sourceCode) {
        if (typeof sourceCode !== 'string') {
            sourceCode = '';
        }
        const timeStart = Date.now();
        this.logger.info(LoggingMessage_1.LoggingMessage.Version, Utils_1.Utils.buildVersionMessage("1.0.1", 1591383009702));
        this.logger.info(LoggingMessage_1.LoggingMessage.ObfuscationStarted);
        this.logger.info(LoggingMessage_1.LoggingMessage.RandomGeneratorSeed, this.randomGenerator.getInputSeed());
        sourceCode = this.runCodeTransformationStage(sourceCode, CodeTransformationStage_1.CodeTransformationStage.PreparingTransformers);
        const astTree = this.parseCode(sourceCode);
        const obfuscatedAstTree = this.transformAstTree(astTree);
        const generatorOutput = this.generateCode(sourceCode, obfuscatedAstTree);
        generatorOutput.code = this.runCodeTransformationStage(generatorOutput.code, CodeTransformationStage_1.CodeTransformationStage.FinalizingTransformers);
        const obfuscationTime = (Date.now() - timeStart) / 1000;
        this.logger.success(LoggingMessage_1.LoggingMessage.ObfuscationCompleted, obfuscationTime);
        return this.getObfuscatedCode(generatorOutput);
    }
    parseCode(sourceCode) {
        return ASTParserFacade_1.ASTParserFacade.parse(sourceCode, JavaScriptObfuscator_1.parseOptions);
    }
    transformAstTree(astTree) {
        astTree = this.runNodeTransformationStage(astTree, NodeTransformationStage_1.NodeTransformationStage.Initializing);
        const isEmptyAstTree = NodeGuards_1.NodeGuards.isProgramNode(astTree)
            && !astTree.body.length
            && !astTree.leadingComments
            && !astTree.trailingComments;
        if (isEmptyAstTree) {
            this.logger.warn(LoggingMessage_1.LoggingMessage.EmptySourceCode);
            return astTree;
        }
        astTree = this.runNodeTransformationStage(astTree, NodeTransformationStage_1.NodeTransformationStage.Preparing);
        if (this.options.deadCodeInjection) {
            astTree = this.runNodeTransformationStage(astTree, NodeTransformationStage_1.NodeTransformationStage.DeadCodeInjection);
        }
        if (this.options.controlFlowFlattening) {
            astTree = this.runNodeTransformationStage(astTree, NodeTransformationStage_1.NodeTransformationStage.ControlFlowFlattening);
        }
        astTree = this.runNodeTransformationStage(astTree, NodeTransformationStage_1.NodeTransformationStage.MangleProperties);
        astTree = this.runNodeTransformationStage(astTree, NodeTransformationStage_1.NodeTransformationStage.Converting);
        astTree = this.runNodeTransformationStage(astTree, NodeTransformationStage_1.NodeTransformationStage.Obfuscating);
        astTree = this.runNodeTransformationStage(astTree, NodeTransformationStage_1.NodeTransformationStage.Finalizing);
        return astTree;
    }
    generateCode(sourceCode, astTree) {
        const escodegenParams = Object.assign({}, JavaScriptObfuscator_1.escodegenParams);
        if (this.options.sourceMap) {
            escodegenParams.sourceMap = this.options.inputFileName || 'sourceMap';
            escodegenParams.sourceContent = sourceCode;
        }
        const generatorOutput = escodegen.generate(astTree, Object.assign(Object.assign({}, escodegenParams), { format: {
                compact: this.options.compact
            } }));
        generatorOutput.map = generatorOutput.map ? generatorOutput.map.toString() : '';
        return generatorOutput;
    }
    getObfuscatedCode(generatorOutput) {
        return this.obfuscatedCodeFactory(generatorOutput.code, generatorOutput.map);
    }
    runCodeTransformationStage(code, codeTransformationStage) {
        this.logger.info(LoggingMessage_1.LoggingMessage.CodeTransformationStage, codeTransformationStage);
        return this.codeTransformersRunner.transform(code, JavaScriptObfuscator_1.codeTransformersList, codeTransformationStage);
    }
    runNodeTransformationStage(astTree, nodeTransformationStage) {
        this.logger.info(LoggingMessage_1.LoggingMessage.NodeTransformationStage, nodeTransformationStage);
        return this.nodeTransformersRunner.transform(astTree, JavaScriptObfuscator_1.nodeTransformersList, nodeTransformationStage);
    }
};
JavaScriptObfuscator.parseOptions = {
    ecmaVersion: EcmaVersion_1.ecmaVersion,
    allowHashBang: true,
    allowImportExportEverywhere: true,
    allowReturnOutsideFunction: true,
    locations: true,
    ranges: true
};
JavaScriptObfuscator.escodegenParams = {
    comment: true,
    verbatim: 'x-verbatim-property',
    sourceMapWithCode: true
};
JavaScriptObfuscator.codeTransformersList = [
    CodeTransformer_1.CodeTransformer.HashbangOperatorTransformer
];
JavaScriptObfuscator.nodeTransformersList = [
    NodeTransformer_1.NodeTransformer.BlockStatementControlFlowTransformer,
    NodeTransformer_1.NodeTransformer.CommentsTransformer,
    NodeTransformer_1.NodeTransformer.CustomCodeHelpersTransformer,
    NodeTransformer_1.NodeTransformer.DeadCodeInjectionTransformer,
    NodeTransformer_1.NodeTransformer.EvalCallExpressionTransformer,
    NodeTransformer_1.NodeTransformer.FunctionControlFlowTransformer,
    NodeTransformer_1.NodeTransformer.LabeledStatementTransformer,
    NodeTransformer_1.NodeTransformer.LiteralTransformer,
    NodeTransformer_1.NodeTransformer.ManglePropertiesTransformer,
    NodeTransformer_1.NodeTransformer.MemberExpressionTransformer,
    NodeTransformer_1.NodeTransformer.MetadataTransformer,
    NodeTransformer_1.NodeTransformer.MethodDefinitionTransformer,
    NodeTransformer_1.NodeTransformer.ObfuscatingGuardsTransformer,
    NodeTransformer_1.NodeTransformer.ObjectExpressionKeysTransformer,
    NodeTransformer_1.NodeTransformer.ObjectExpressionTransformer,
    NodeTransformer_1.NodeTransformer.ParentificationTransformer,
    NodeTransformer_1.NodeTransformer.ScopeIdentifiersTransformer,
    NodeTransformer_1.NodeTransformer.SplitStringTransformer,
    NodeTransformer_1.NodeTransformer.TemplateLiteralTransformer,
    NodeTransformer_1.NodeTransformer.VariablePreserveTransformer
];
JavaScriptObfuscator = JavaScriptObfuscator_1 = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ICodeTransformersRunner)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.INodeTransformersRunner)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(3, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IObfuscatedCode)),
    __param(4, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ILogger)),
    __param(5, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof ICodeTransformersRunner_1.ICodeTransformersRunner !== "undefined" && ICodeTransformersRunner_1.ICodeTransformersRunner) === "function" ? _a : Object, typeof (_b = typeof INodeTransformersRunner_1.INodeTransformersRunner !== "undefined" && INodeTransformersRunner_1.INodeTransformersRunner) === "function" ? _b : Object, typeof (_c = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _c : Object, typeof (_d = typeof TObfuscatedCodeFactory_1.TObfuscatedCodeFactory !== "undefined" && TObfuscatedCodeFactory_1.TObfuscatedCodeFactory) === "function" ? _d : Object, typeof (_e = typeof ILogger_1.ILogger !== "undefined" && ILogger_1.ILogger) === "function" ? _e : Object, typeof (_f = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _f : Object])
], JavaScriptObfuscator);
exports.JavaScriptObfuscator = JavaScriptObfuscator;


/***/ }),

/***/ "./src/JavaScriptObfuscatorFacade.ts":
/*!*******************************************!*\
  !*** ./src/JavaScriptObfuscatorFacade.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JavaScriptObfuscator = void 0;
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
const ServiceIdentifiers_1 = __webpack_require__(/*! ./container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const InversifyContainerFacade_1 = __webpack_require__(/*! ./container/InversifyContainerFacade */ "./src/container/InversifyContainerFacade.ts");
const Utils_1 = __webpack_require__(/*! ./utils/Utils */ "./src/utils/Utils.ts");
class JavaScriptObfuscatorFacade {
    static obfuscate(sourceCode, inputOptions = {}) {
        const inversifyContainerFacade = new InversifyContainerFacade_1.InversifyContainerFacade();
        inversifyContainerFacade.load(sourceCode, '', inputOptions);
        const javaScriptObfuscator = inversifyContainerFacade
            .get(ServiceIdentifiers_1.ServiceIdentifiers.IJavaScriptObfuscator);
        const obfuscatedCode = javaScriptObfuscator.obfuscate(sourceCode);
        inversifyContainerFacade.unload();
        return obfuscatedCode;
    }
    static obfuscateMultiple(sourceCodesObject, inputOptions = {}) {
        if (typeof sourceCodesObject !== 'object') {
            throw new Error('Source codes object should be a plain object');
        }
        return Object
            .keys(sourceCodesObject)
            .reduce((acc, sourceCodeIdentifier, index) => {
            const identifiersPrefix = Utils_1.Utils.getIdentifiersPrefixForMultipleSources(inputOptions.identifiersPrefix, index);
            const sourceCode = sourceCodesObject[sourceCodeIdentifier];
            const sourceCodeOptions = Object.assign(Object.assign({}, inputOptions), { identifiersPrefix });
            return Object.assign(Object.assign({}, acc), { [sourceCodeIdentifier]: JavaScriptObfuscatorFacade.obfuscate(sourceCode, sourceCodeOptions) });
        }, {});
    }
}
exports.JavaScriptObfuscator = JavaScriptObfuscatorFacade;
JavaScriptObfuscatorFacade.version = (_a = "1.0.1") !== null && _a !== void 0 ? _a : 'unknown';


/***/ }),

/***/ "./src/analyzers/calls-graph-analyzer/CallsGraphAnalyzer.ts":
/*!******************************************************************!*\
  !*** ./src/analyzers/calls-graph-analyzer/CallsGraphAnalyzer.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var CallsGraphAnalyzer_1, _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallsGraphAnalyzer = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const estraverse = __importStar(__webpack_require__(/*! estraverse */ "estraverse"));
const TCalleeDataExtractorFactory_1 = __webpack_require__(/*! ../../types/container/calls-graph-analyzer/TCalleeDataExtractorFactory */ "./src/types/container/calls-graph-analyzer/TCalleeDataExtractorFactory.ts");
const CalleeDataExtractor_1 = __webpack_require__(/*! ../../enums/analyzers/calls-graph-analyzer/CalleeDataExtractor */ "./src/enums/analyzers/calls-graph-analyzer/CalleeDataExtractor.ts");
const NodeGuards_1 = __webpack_require__(/*! ../../node/NodeGuards */ "./src/node/NodeGuards.ts");
const NodeStatementUtils_1 = __webpack_require__(/*! ../../node/NodeStatementUtils */ "./src/node/NodeStatementUtils.ts");
let CallsGraphAnalyzer = CallsGraphAnalyzer_1 = class CallsGraphAnalyzer {
    constructor(calleeDataExtractorFactory) {
        this.calleeDataExtractorFactory = calleeDataExtractorFactory;
    }
    static getLimitIndex(blockScopeBodyLength) {
        const lastIndex = blockScopeBodyLength - 1;
        const limitThresholdActivationIndex = CallsGraphAnalyzer_1.limitThresholdActivationLength - 1;
        let limitIndex = lastIndex;
        if (lastIndex > limitThresholdActivationIndex) {
            limitIndex = Math.round(limitThresholdActivationIndex + (lastIndex * CallsGraphAnalyzer_1.limitThreshold));
            if (limitIndex > lastIndex) {
                limitIndex = lastIndex;
            }
        }
        return limitIndex;
    }
    analyze(astTree) {
        return this.analyzeRecursive(astTree.body);
    }
    analyzeRecursive(blockScopeBody) {
        const limitIndex = CallsGraphAnalyzer_1.getLimitIndex(blockScopeBody.length);
        const callsGraphData = [];
        const blockScopeBodyLength = blockScopeBody.length;
        for (let index = 0; index < blockScopeBodyLength; index++) {
            if (index > limitIndex) {
                break;
            }
            const blockScopeBodyNode = blockScopeBody[index];
            estraverse.traverse(blockScopeBodyNode, {
                enter: (node) => {
                    if (!NodeGuards_1.NodeGuards.isCallExpressionNode(node)) {
                        return;
                    }
                    if (blockScopeBodyNode.parentNode !== NodeStatementUtils_1.NodeStatementUtils.getParentNodeWithStatements(node)) {
                        return estraverse.VisitorOption.Skip;
                    }
                    this.analyzeCallExpressionNode(callsGraphData, blockScopeBody, node);
                }
            });
        }
        return callsGraphData;
    }
    analyzeCallExpressionNode(callsGraphData, blockScopeBody, callExpressionNode) {
        CallsGraphAnalyzer_1.calleeDataExtractorsList.forEach((calleeDataExtractorName) => {
            const calleeData = this.calleeDataExtractorFactory(calleeDataExtractorName)
                .extract(blockScopeBody, callExpressionNode.callee);
            if (!calleeData) {
                return;
            }
            callsGraphData.push(Object.assign(Object.assign({}, calleeData), { callsGraph: this.analyzeRecursive(calleeData.callee.body) }));
        });
    }
};
CallsGraphAnalyzer.calleeDataExtractorsList = [
    CalleeDataExtractor_1.CalleeDataExtractor.FunctionDeclarationCalleeDataExtractor,
    CalleeDataExtractor_1.CalleeDataExtractor.FunctionExpressionCalleeDataExtractor,
    CalleeDataExtractor_1.CalleeDataExtractor.ObjectExpressionCalleeDataExtractor
];
CallsGraphAnalyzer.limitThresholdActivationLength = 25;
CallsGraphAnalyzer.limitThreshold = 0.002;
CallsGraphAnalyzer = CallsGraphAnalyzer_1 = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__ICalleeDataExtractor)),
    __metadata("design:paramtypes", [typeof (_a = typeof TCalleeDataExtractorFactory_1.TCalleeDataExtractorFactory !== "undefined" && TCalleeDataExtractorFactory_1.TCalleeDataExtractorFactory) === "function" ? _a : Object])
], CallsGraphAnalyzer);
exports.CallsGraphAnalyzer = CallsGraphAnalyzer;


/***/ }),

/***/ "./src/analyzers/calls-graph-analyzer/callee-data-extractors/AbstractCalleeDataExtractor.ts":
/*!**************************************************************************************************!*\
  !*** ./src/analyzers/calls-graph-analyzer/callee-data-extractors/AbstractCalleeDataExtractor.ts ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractCalleeDataExtractor = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
let AbstractCalleeDataExtractor = class AbstractCalleeDataExtractor {
};
AbstractCalleeDataExtractor = __decorate([
    inversify_1.injectable()
], AbstractCalleeDataExtractor);
exports.AbstractCalleeDataExtractor = AbstractCalleeDataExtractor;


/***/ }),

/***/ "./src/analyzers/calls-graph-analyzer/callee-data-extractors/FunctionDeclarationCalleeDataExtractor.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/analyzers/calls-graph-analyzer/callee-data-extractors/FunctionDeclarationCalleeDataExtractor.ts ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionDeclarationCalleeDataExtractor = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const estraverse = __importStar(__webpack_require__(/*! estraverse */ "estraverse"));
const AbstractCalleeDataExtractor_1 = __webpack_require__(/*! ./AbstractCalleeDataExtractor */ "./src/analyzers/calls-graph-analyzer/callee-data-extractors/AbstractCalleeDataExtractor.ts");
const NodeGuards_1 = __webpack_require__(/*! ../../../node/NodeGuards */ "./src/node/NodeGuards.ts");
const NodeStatementUtils_1 = __webpack_require__(/*! ../../../node/NodeStatementUtils */ "./src/node/NodeStatementUtils.ts");
let FunctionDeclarationCalleeDataExtractor = class FunctionDeclarationCalleeDataExtractor extends AbstractCalleeDataExtractor_1.AbstractCalleeDataExtractor {
    extract(blockScopeBody, callee) {
        if (!NodeGuards_1.NodeGuards.isIdentifierNode(callee)) {
            return null;
        }
        const calleeBlockStatement = this.getCalleeBlockStatement(NodeStatementUtils_1.NodeStatementUtils.getParentNodeWithStatements(blockScopeBody[0]), callee.name);
        if (!calleeBlockStatement) {
            return null;
        }
        return {
            callee: calleeBlockStatement,
            name: callee.name
        };
    }
    getCalleeBlockStatement(targetNode, name) {
        let calleeBlockStatement = null;
        estraverse.traverse(targetNode, {
            enter: (node) => {
                if (NodeGuards_1.NodeGuards.isFunctionDeclarationNode(node) && node.id.name === name) {
                    calleeBlockStatement = node.body;
                    return estraverse.VisitorOption.Break;
                }
            }
        });
        return calleeBlockStatement;
    }
};
FunctionDeclarationCalleeDataExtractor = __decorate([
    inversify_1.injectable()
], FunctionDeclarationCalleeDataExtractor);
exports.FunctionDeclarationCalleeDataExtractor = FunctionDeclarationCalleeDataExtractor;


/***/ }),

/***/ "./src/analyzers/calls-graph-analyzer/callee-data-extractors/FunctionExpressionCalleeDataExtractor.ts":
/*!************************************************************************************************************!*\
  !*** ./src/analyzers/calls-graph-analyzer/callee-data-extractors/FunctionExpressionCalleeDataExtractor.ts ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionExpressionCalleeDataExtractor = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const estraverse = __importStar(__webpack_require__(/*! estraverse */ "estraverse"));
const AbstractCalleeDataExtractor_1 = __webpack_require__(/*! ./AbstractCalleeDataExtractor */ "./src/analyzers/calls-graph-analyzer/callee-data-extractors/AbstractCalleeDataExtractor.ts");
const NodeGuards_1 = __webpack_require__(/*! ../../../node/NodeGuards */ "./src/node/NodeGuards.ts");
const NodeStatementUtils_1 = __webpack_require__(/*! ../../../node/NodeStatementUtils */ "./src/node/NodeStatementUtils.ts");
let FunctionExpressionCalleeDataExtractor = class FunctionExpressionCalleeDataExtractor extends AbstractCalleeDataExtractor_1.AbstractCalleeDataExtractor {
    extract(blockScopeBody, callee) {
        let calleeName = null;
        let calleeBlockStatement = null;
        if (NodeGuards_1.NodeGuards.isIdentifierNode(callee)) {
            calleeName = callee.name;
            calleeBlockStatement = this.getCalleeBlockStatement(NodeStatementUtils_1.NodeStatementUtils.getParentNodeWithStatements(blockScopeBody[0]), callee.name);
        }
        else if (NodeGuards_1.NodeGuards.isFunctionExpressionNode(callee)) {
            calleeName = null;
            calleeBlockStatement = callee.body;
        }
        if (!calleeBlockStatement) {
            return null;
        }
        return {
            callee: calleeBlockStatement,
            name: calleeName
        };
    }
    getCalleeBlockStatement(targetNode, name) {
        let calleeBlockStatement = null;
        estraverse.traverse(targetNode, {
            enter: (node, parentNode) => {
                if (NodeGuards_1.NodeGuards.isFunctionExpressionNode(node) &&
                    parentNode &&
                    NodeGuards_1.NodeGuards.isVariableDeclaratorNode(parentNode) &&
                    NodeGuards_1.NodeGuards.isIdentifierNode(parentNode.id) &&
                    parentNode.id.name === name) {
                    calleeBlockStatement = node.body;
                    return estraverse.VisitorOption.Break;
                }
            }
        });
        return calleeBlockStatement;
    }
};
FunctionExpressionCalleeDataExtractor = __decorate([
    inversify_1.injectable()
], FunctionExpressionCalleeDataExtractor);
exports.FunctionExpressionCalleeDataExtractor = FunctionExpressionCalleeDataExtractor;


/***/ }),

/***/ "./src/analyzers/calls-graph-analyzer/callee-data-extractors/ObjectExpressionCalleeDataExtractor.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/analyzers/calls-graph-analyzer/callee-data-extractors/ObjectExpressionCalleeDataExtractor.ts ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var ObjectExpressionCalleeDataExtractor_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectExpressionCalleeDataExtractor = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const estraverse = __importStar(__webpack_require__(/*! estraverse */ "estraverse"));
const AbstractCalleeDataExtractor_1 = __webpack_require__(/*! ./AbstractCalleeDataExtractor */ "./src/analyzers/calls-graph-analyzer/callee-data-extractors/AbstractCalleeDataExtractor.ts");
const NodeGuards_1 = __webpack_require__(/*! ../../../node/NodeGuards */ "./src/node/NodeGuards.ts");
const NodeStatementUtils_1 = __webpack_require__(/*! ../../../node/NodeStatementUtils */ "./src/node/NodeStatementUtils.ts");
let ObjectExpressionCalleeDataExtractor = ObjectExpressionCalleeDataExtractor_1 = class ObjectExpressionCalleeDataExtractor extends AbstractCalleeDataExtractor_1.AbstractCalleeDataExtractor {
    static isValidTargetPropertyNode(propertyNode, nextItemInCallsChain) {
        if (!propertyNode.key) {
            return false;
        }
        const isTargetPropertyNodeWithIdentifierKey = NodeGuards_1.NodeGuards.isIdentifierNode(propertyNode.key) && propertyNode.key.name === nextItemInCallsChain;
        const isTargetPropertyNodeWithLiteralKey = NodeGuards_1.NodeGuards.isLiteralNode(propertyNode.key) &&
            Boolean(propertyNode.key.value) &&
            propertyNode.key.value === nextItemInCallsChain;
        return isTargetPropertyNodeWithIdentifierKey || isTargetPropertyNodeWithLiteralKey;
    }
    extract(blockScopeBody, callee) {
        if (!NodeGuards_1.NodeGuards.isMemberExpressionNode(callee)) {
            return null;
        }
        const objectMembersCallsChain = this.createObjectMembersCallsChain([], callee);
        if (!objectMembersCallsChain.length) {
            return null;
        }
        const functionExpressionName = objectMembersCallsChain[objectMembersCallsChain.length - 1];
        const calleeBlockStatement = this.getCalleeBlockStatement(NodeStatementUtils_1.NodeStatementUtils.getParentNodeWithStatements(blockScopeBody[0]), objectMembersCallsChain);
        if (!calleeBlockStatement) {
            return null;
        }
        return {
            callee: calleeBlockStatement,
            name: functionExpressionName
        };
    }
    createObjectMembersCallsChain(currentChain, memberExpression) {
        if (NodeGuards_1.NodeGuards.isIdentifierNode(memberExpression.property) && !memberExpression.computed) {
            currentChain.unshift(memberExpression.property.name);
        }
        else if (NodeGuards_1.NodeGuards.isLiteralNode(memberExpression.property) &&
            (typeof memberExpression.property.value === 'string' ||
                typeof memberExpression.property.value === 'number')) {
            currentChain.unshift(memberExpression.property.value);
        }
        else {
            return currentChain;
        }
        if (NodeGuards_1.NodeGuards.isMemberExpressionNode(memberExpression.object)) {
            return this.createObjectMembersCallsChain(currentChain, memberExpression.object);
        }
        else if (NodeGuards_1.NodeGuards.isIdentifierNode(memberExpression.object)) {
            currentChain.unshift(memberExpression.object.name);
        }
        return currentChain;
    }
    getCalleeBlockStatement(targetNode, objectMembersCallsChain) {
        const objectName = objectMembersCallsChain.shift();
        if (!objectName) {
            return null;
        }
        let calleeBlockStatement = null;
        estraverse.traverse(targetNode, {
            enter: (node) => {
                if (NodeGuards_1.NodeGuards.isVariableDeclaratorNode(node) &&
                    NodeGuards_1.NodeGuards.isIdentifierNode(node.id) &&
                    node.init &&
                    NodeGuards_1.NodeGuards.isObjectExpressionNode(node.init) &&
                    node.id.name === objectName) {
                    calleeBlockStatement = this.findCalleeBlockStatement(node.init.properties, objectMembersCallsChain);
                    return estraverse.VisitorOption.Break;
                }
            }
        });
        return calleeBlockStatement;
    }
    findCalleeBlockStatement(objectExpressionProperties, objectMembersCallsChain) {
        const nextItemInCallsChain = objectMembersCallsChain.shift();
        if (!nextItemInCallsChain) {
            return null;
        }
        for (const propertyNode of objectExpressionProperties) {
            if (!NodeGuards_1.NodeGuards.isPropertyNode(propertyNode)) {
                continue;
            }
            if (!ObjectExpressionCalleeDataExtractor_1.isValidTargetPropertyNode(propertyNode, nextItemInCallsChain)) {
                continue;
            }
            if (NodeGuards_1.NodeGuards.isObjectExpressionNode(propertyNode.value)) {
                return this.findCalleeBlockStatement(propertyNode.value.properties, objectMembersCallsChain);
            }
            if (NodeGuards_1.NodeGuards.isFunctionExpressionNode(propertyNode.value)) {
                return propertyNode.value.body;
            }
        }
        return null;
    }
};
ObjectExpressionCalleeDataExtractor = ObjectExpressionCalleeDataExtractor_1 = __decorate([
    inversify_1.injectable()
], ObjectExpressionCalleeDataExtractor);
exports.ObjectExpressionCalleeDataExtractor = ObjectExpressionCalleeDataExtractor;


/***/ }),

/***/ "./src/analyzers/prevailing-kind-of-variables-analyzer/PrevailingKindOfVariablesAnalyzer.ts":
/*!**************************************************************************************************!*\
  !*** ./src/analyzers/prevailing-kind-of-variables-analyzer/PrevailingKindOfVariablesAnalyzer.ts ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var PrevailingKindOfVariablesAnalyzer_1, _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrevailingKindOfVariablesAnalyzer = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const estraverse = __importStar(__webpack_require__(/*! estraverse */ "estraverse"));
const IArrayUtils_1 = __webpack_require__(/*! ../../interfaces/utils/IArrayUtils */ "./src/interfaces/utils/IArrayUtils.ts");
const NodeGuards_1 = __webpack_require__(/*! ../../node/NodeGuards */ "./src/node/NodeGuards.ts");
let PrevailingKindOfVariablesAnalyzer = PrevailingKindOfVariablesAnalyzer_1 = class PrevailingKindOfVariablesAnalyzer {
    constructor(arrayUtils) {
        this.prevailingKindOfVariables = PrevailingKindOfVariablesAnalyzer_1.defaultKindOfVariables;
        this.arrayUtils = arrayUtils;
    }
    analyze(astTree) {
        var _a;
        const variableKinds = [];
        estraverse.traverse(astTree, {
            enter: (node) => {
                if (!NodeGuards_1.NodeGuards.isVariableDeclarationNode(node)) {
                    return;
                }
                variableKinds.push(node.kind);
            }
        });
        this.prevailingKindOfVariables = (_a = this.arrayUtils.findMostOccurringElement(variableKinds)) !== null && _a !== void 0 ? _a : PrevailingKindOfVariablesAnalyzer_1.defaultKindOfVariables;
    }
    getPrevailingKind() {
        return this.prevailingKindOfVariables;
    }
};
PrevailingKindOfVariablesAnalyzer.defaultKindOfVariables = 'var';
PrevailingKindOfVariablesAnalyzer = PrevailingKindOfVariablesAnalyzer_1 = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IArrayUtils)),
    __metadata("design:paramtypes", [typeof (_a = typeof IArrayUtils_1.IArrayUtils !== "undefined" && IArrayUtils_1.IArrayUtils) === "function" ? _a : Object])
], PrevailingKindOfVariablesAnalyzer);
exports.PrevailingKindOfVariablesAnalyzer = PrevailingKindOfVariablesAnalyzer;


/***/ }),

/***/ "./src/analyzers/scope-analyzer/ScopeAnalyzer.ts":
/*!*******************************************************!*\
  !*** ./src/analyzers/scope-analyzer/ScopeAnalyzer.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var ScopeAnalyzer_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScopeAnalyzer = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const eslintScope = __importStar(__webpack_require__(/*! eslint-scope */ "eslint-scope"));
const estraverse = __importStar(__webpack_require__(/*! estraverse */ "estraverse"));
const EcmaVersion_1 = __webpack_require__(/*! ../../constants/EcmaVersion */ "./src/constants/EcmaVersion.ts");
const NodeGuards_1 = __webpack_require__(/*! ../../node/NodeGuards */ "./src/node/NodeGuards.ts");
let ScopeAnalyzer = ScopeAnalyzer_1 = class ScopeAnalyzer {
    constructor() {
        this.scopeManager = null;
    }
    static attachMissingRanges(astTree) {
        estraverse.replace(astTree, {
            enter: (node) => {
                var _a, _b, _c, _d, _e, _f;
                if (!node.range) {
                    node.range = [
                        (_c = (_b = (_a = node.parentNode) === null || _a === void 0 ? void 0 : _a.range) === null || _b === void 0 ? void 0 : _b[0]) !== null && _c !== void 0 ? _c : ScopeAnalyzer_1.emptyRangeValue,
                        (_f = (_e = (_d = node.parentNode) === null || _d === void 0 ? void 0 : _d.range) === null || _e === void 0 ? void 0 : _e[1]) !== null && _f !== void 0 ? _f : ScopeAnalyzer_1.emptyRangeValue
                    ];
                }
                return node;
            }
        });
    }
    static isRootNode(node) {
        return NodeGuards_1.NodeGuards.isProgramNode(node) || node.parentNode === node;
    }
    analyze(astTree) {
        const sourceTypeLength = ScopeAnalyzer_1.sourceTypes.length;
        ScopeAnalyzer_1.attachMissingRanges(astTree);
        for (let i = 0; i < sourceTypeLength; i++) {
            try {
                this.scopeManager = eslintScope.analyze(astTree, Object.assign(Object.assign({}, ScopeAnalyzer_1.eslintScopeOptions), { sourceType: ScopeAnalyzer_1.sourceTypes[i] }));
                return;
            }
            catch (error) {
                if (i < sourceTypeLength - 1) {
                    continue;
                }
                throw new Error(error);
            }
        }
        throw new Error('Scope analyzing error');
    }
    acquireScope(node) {
        if (!this.scopeManager) {
            throw new Error('Scope manager is not defined');
        }
        const scope = this.scopeManager.acquire(node, ScopeAnalyzer_1.isRootNode(node));
        if (!scope) {
            throw new Error('Cannot acquire scope for node');
        }
        this.sanitizeScopes(scope);
        return scope;
    }
    sanitizeScopes(scope) {
        scope.childScopes.forEach((childScope) => {
            if (childScope.type === 'class' && childScope.upper) {
                if (!childScope.variables.length) {
                    return;
                }
                const classNameVariable = childScope.variables[0];
                const upperVariable = childScope.upper.variables
                    .find((variable) => {
                    const isValidClassNameVariable = classNameVariable.defs
                        .some((definition) => definition.type === 'ClassName');
                    return isValidClassNameVariable && variable.name === classNameVariable.name;
                });
                upperVariable === null || upperVariable === void 0 ? void 0 : upperVariable.references.push(...childScope.variables[0].references);
            }
        });
        for (const childScope of scope.childScopes) {
            this.sanitizeScopes(childScope);
        }
    }
};
ScopeAnalyzer.eslintScopeOptions = {
    ecmaVersion: EcmaVersion_1.ecmaVersion,
    optimistic: true
};
ScopeAnalyzer.sourceTypes = [
    'script',
    'module'
];
ScopeAnalyzer.emptyRangeValue = 0;
ScopeAnalyzer = ScopeAnalyzer_1 = __decorate([
    inversify_1.injectable()
], ScopeAnalyzer);
exports.ScopeAnalyzer = ScopeAnalyzer;


/***/ }),

/***/ "./src/analyzers/string-array-storage-analyzer/StringArrayStorageAnalyzer.ts":
/*!***********************************************************************************!*\
  !*** ./src/analyzers/string-array-storage-analyzer/StringArrayStorageAnalyzer.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var StringArrayStorageAnalyzer_1, _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringArrayStorageAnalyzer = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const estraverse = __importStar(__webpack_require__(/*! estraverse */ "estraverse"));
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const IStringArrayStorage_1 = __webpack_require__(/*! ../../interfaces/storages/string-array-storage/IStringArrayStorage */ "./src/interfaces/storages/string-array-storage/IStringArrayStorage.ts");
const NodeGuards_1 = __webpack_require__(/*! ../../node/NodeGuards */ "./src/node/NodeGuards.ts");
const NodeMetadata_1 = __webpack_require__(/*! ../../node/NodeMetadata */ "./src/node/NodeMetadata.ts");
const NodeLiteralUtils_1 = __webpack_require__(/*! ../../node/NodeLiteralUtils */ "./src/node/NodeLiteralUtils.ts");
let StringArrayStorageAnalyzer = StringArrayStorageAnalyzer_1 = class StringArrayStorageAnalyzer {
    constructor(stringArrayStorage, randomGenerator, options) {
        this.stringArrayStorageData = new Map();
        this.stringArrayStorage = stringArrayStorage;
        this.randomGenerator = randomGenerator;
        this.options = options;
    }
    analyze(astTree) {
        if (!this.options.stringArray) {
            return;
        }
        estraverse.traverse(astTree, {
            enter: (node, parentNode) => {
                if (!parentNode) {
                    return;
                }
                if (NodeMetadata_1.NodeMetadata.isIgnoredNode(node)) {
                    return estraverse.VisitorOption.Skip;
                }
                if (!NodeGuards_1.NodeGuards.isLiteralNode(node)) {
                    return;
                }
                this.analyzeLiteralNode(node, parentNode);
            }
        });
    }
    getItemDataForLiteralNode(literalNode) {
        return this.stringArrayStorageData.get(literalNode);
    }
    analyzeLiteralNode(literalNode, parentNode) {
        if (typeof literalNode.value !== 'string') {
            return;
        }
        if (NodeLiteralUtils_1.NodeLiteralUtils.isProhibitedLiteralNode(literalNode, parentNode)) {
            return;
        }
        if (!this.shouldAddValueToStringArray(literalNode.value)) {
            return;
        }
        this.stringArrayStorageData.set(literalNode, this.stringArrayStorage.getOrThrow(literalNode.value));
    }
    shouldAddValueToStringArray(value) {
        return value.length >= StringArrayStorageAnalyzer_1.minimumLengthForStringArray
            && this.randomGenerator.getMathRandom() <= this.options.stringArrayThreshold;
    }
};
StringArrayStorageAnalyzer.minimumLengthForStringArray = 3;
StringArrayStorageAnalyzer = StringArrayStorageAnalyzer_1 = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IStringArrayStorage)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof IStringArrayStorage_1.IStringArrayStorage !== "undefined" && IStringArrayStorage_1.IStringArrayStorage) === "function" ? _a : Object, typeof (_b = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _b : Object, typeof (_c = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _c : Object])
], StringArrayStorageAnalyzer);
exports.StringArrayStorageAnalyzer = StringArrayStorageAnalyzer;


/***/ }),

/***/ "./src/code-transformers/AbstractCodeTransformer.ts":
/*!**********************************************************!*\
  !*** ./src/code-transformers/AbstractCodeTransformer.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractCodeTransformer = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const IOptions_1 = __webpack_require__(/*! ../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
let AbstractCodeTransformer = class AbstractCodeTransformer {
    constructor(randomGenerator, options) {
        this.randomGenerator = randomGenerator;
        this.options = options;
    }
};
AbstractCodeTransformer = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _a : Object, typeof (_b = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _b : Object])
], AbstractCodeTransformer);
exports.AbstractCodeTransformer = AbstractCodeTransformer;


/***/ }),

/***/ "./src/code-transformers/CodeTransformerNamesGroupsBuilder.ts":
/*!********************************************************************!*\
  !*** ./src/code-transformers/CodeTransformerNamesGroupsBuilder.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeTransformerNamesGroupsBuilder = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const AbstractTransformerNamesGroupsBuilder_1 = __webpack_require__(/*! ../utils/AbstractTransformerNamesGroupsBuilder */ "./src/utils/AbstractTransformerNamesGroupsBuilder.ts");
let CodeTransformerNamesGroupsBuilder = class CodeTransformerNamesGroupsBuilder extends AbstractTransformerNamesGroupsBuilder_1.AbstractTransformerNamesGroupsBuilder {
};
CodeTransformerNamesGroupsBuilder = __decorate([
    inversify_1.injectable()
], CodeTransformerNamesGroupsBuilder);
exports.CodeTransformerNamesGroupsBuilder = CodeTransformerNamesGroupsBuilder;


/***/ }),

/***/ "./src/code-transformers/CodeTransformersRunner.ts":
/*!*********************************************************!*\
  !*** ./src/code-transformers/CodeTransformersRunner.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeTransformersRunner = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TCodeTransformerFactory_1 = __webpack_require__(/*! ../types/container/code-transformers/TCodeTransformerFactory */ "./src/types/container/code-transformers/TCodeTransformerFactory.ts");
const ITransformerNamesGroupsBuilder_1 = __webpack_require__(/*! ../interfaces/utils/ITransformerNamesGroupsBuilder */ "./src/interfaces/utils/ITransformerNamesGroupsBuilder.ts");
let CodeTransformersRunner = class CodeTransformersRunner {
    constructor(codeTransformerFactory, codeTransformerNamesGroupsBuilder) {
        this.codeTransformerFactory = codeTransformerFactory;
        this.codeTransformerNamesGroupsBuilder = codeTransformerNamesGroupsBuilder;
    }
    transform(code, codeTransformerNames, codeTransformationStage) {
        if (!codeTransformerNames.length) {
            return code;
        }
        const normalizedCodeTransformers = this.buildNormalizedCodeTransformers(codeTransformerNames, codeTransformationStage);
        const codeTransformerNamesGroups = this.codeTransformerNamesGroupsBuilder.build(normalizedCodeTransformers);
        for (const nodeTransformerNamesGroup of codeTransformerNamesGroups) {
            for (const nodeTransformerName of nodeTransformerNamesGroup) {
                const codeTransformer = normalizedCodeTransformers[nodeTransformerName];
                code = codeTransformer.transformCode(code, codeTransformationStage);
            }
        }
        return code;
    }
    buildNormalizedCodeTransformers(codeTransformerNames, codeTransformationStage) {
        return codeTransformerNames
            .reduce((acc, codeTransformerName) => {
            const codeTransformer = this.codeTransformerFactory(codeTransformerName);
            return Object.assign(Object.assign({}, acc), { [codeTransformerName]: codeTransformer });
        }, {});
    }
};
CodeTransformersRunner = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__ICodeTransformer)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ICodeTransformerNamesGroupsBuilder)),
    __metadata("design:paramtypes", [typeof (_a = typeof TCodeTransformerFactory_1.TCodeTransformerFactory !== "undefined" && TCodeTransformerFactory_1.TCodeTransformerFactory) === "function" ? _a : Object, typeof (_b = typeof ITransformerNamesGroupsBuilder_1.ITransformerNamesGroupsBuilder !== "undefined" && ITransformerNamesGroupsBuilder_1.ITransformerNamesGroupsBuilder) === "function" ? _b : Object])
], CodeTransformersRunner);
exports.CodeTransformersRunner = CodeTransformersRunner;


/***/ }),

/***/ "./src/code-transformers/preparing-transformers/HashbangOperatorTransformer.ts":
/*!*************************************************************************************!*\
  !*** ./src/code-transformers/preparing-transformers/HashbangOperatorTransformer.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashbangOperatorTransformer = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const CodeTransformationStage_1 = __webpack_require__(/*! ../../enums/code-transformers/CodeTransformationStage */ "./src/enums/code-transformers/CodeTransformationStage.ts");
const AbstractCodeTransformer_1 = __webpack_require__(/*! ../AbstractCodeTransformer */ "./src/code-transformers/AbstractCodeTransformer.ts");
let HashbangOperatorTransformer = class HashbangOperatorTransformer extends AbstractCodeTransformer_1.AbstractCodeTransformer {
    constructor(randomGenerator, options) {
        super(randomGenerator, options);
        this.hashbangOperatorLine = null;
    }
    transformCode(code, codeTransformationStage) {
        switch (codeTransformationStage) {
            case CodeTransformationStage_1.CodeTransformationStage.PreparingTransformers:
                return this.removeAndSaveHashbangOperatorLine(code);
            case CodeTransformationStage_1.CodeTransformationStage.FinalizingTransformers:
                return this.appendSavedHashbangOperatorLine(code);
            default:
                return code;
        }
    }
    removeAndSaveHashbangOperatorLine(code) {
        return code
            .replace(/^#!.*$(\r?\n)*/m, (substring) => {
            if (substring) {
                this.hashbangOperatorLine = substring;
            }
            return '';
        })
            .trim();
    }
    appendSavedHashbangOperatorLine(code) {
        var _a;
        return `${(_a = this.hashbangOperatorLine) !== null && _a !== void 0 ? _a : ''}${code}`;
    }
};
HashbangOperatorTransformer = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _a : Object, typeof (_b = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _b : Object])
], HashbangOperatorTransformer);
exports.HashbangOperatorTransformer = HashbangOperatorTransformer;


/***/ }),

/***/ "./src/constants/EcmaVersion.ts":
/*!**************************************!*\
  !*** ./src/constants/EcmaVersion.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ecmaVersion = void 0;
exports.ecmaVersion = 11;


/***/ }),

/***/ "./src/constants/ReservedDomProperties.ts":
/*!************************************************!*\
  !*** ./src/constants/ReservedDomProperties.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservedDomProperties = void 0;
exports.ReservedDomProperties = [
    '$&',
    '$\'',
    '$*',
    '$+',
    '$1',
    '$2',
    '$3',
    '$4',
    '$5',
    '$6',
    '$7',
    '$8',
    '$9',
    '$_',
    '$`',
    '$input',
    '@@iterator',
    'ABORT_ERR',
    'ACTIVE',
    'ACTIVE_ATTRIBUTES',
    'ACTIVE_TEXTURE',
    'ACTIVE_UNIFORMS',
    'ADDITION',
    'ALIASED_LINE_WIDTH_RANGE',
    'ALIASED_POINT_SIZE_RANGE',
    'ALLOW_KEYBOARD_INPUT',
    'ALLPASS',
    'ALPHA',
    'ALPHA_BITS',
    'ALT_MASK',
    'ALWAYS',
    'ANY_TYPE',
    'ANY_UNORDERED_NODE_TYPE',
    'ARRAY_BUFFER',
    'ARRAY_BUFFER_BINDING',
    'ATTACHED_SHADERS',
    'ATTRIBUTE_NODE',
    'AT_TARGET',
    'AddSearchProvider',
    'AnalyserNode',
    'AnimationEvent',
    'AnonXMLHttpRequest',
    'ApplicationCache',
    'ApplicationCacheErrorEvent',
    'Array',
    'ArrayBuffer',
    'Attr',
    'Audio',
    'AudioBuffer',
    'AudioBufferSourceNode',
    'AudioContext',
    'AudioDestinationNode',
    'AudioListener',
    'AudioNode',
    'AudioParam',
    'AudioProcessingEvent',
    'AudioStreamTrack',
    'AutocompleteErrorEvent',
    'BACK',
    'BAD_BOUNDARYPOINTS_ERR',
    'BANDPASS',
    'BLEND',
    'BLEND_COLOR',
    'BLEND_DST_ALPHA',
    'BLEND_DST_RGB',
    'BLEND_EQUATION',
    'BLEND_EQUATION_ALPHA',
    'BLEND_EQUATION_RGB',
    'BLEND_SRC_ALPHA',
    'BLEND_SRC_RGB',
    'BLUE_BITS',
    'BLUR',
    'BOOL',
    'BOOLEAN_TYPE',
    'BOOL_VEC2',
    'BOOL_VEC3',
    'BOOL_VEC4',
    'BOTH',
    'BROWSER_DEFAULT_WEBGL',
    'BUBBLING_PHASE',
    'BUFFER_SIZE',
    'BUFFER_USAGE',
    'BYTE',
    'BYTES_PER_ELEMENT',
    'BarProp',
    'BaseHref',
    'BatteryManager',
    'BeforeLoadEvent',
    'BeforeUnloadEvent',
    'BiquadFilterNode',
    'Blob',
    'BlobEvent',
    'Boolean',
    'CAPTURING_PHASE',
    'CCW',
    'CDATASection',
    'CDATA_SECTION_NODE',
    'CHANGE',
    'CHARSET_RULE',
    'CHECKING',
    'CLAMP_TO_EDGE',
    'CLICK',
    'CLOSED',
    'CLOSING',
    'COLOR_ATTACHMENT0',
    'COLOR_BUFFER_BIT',
    'COLOR_CLEAR_VALUE',
    'COLOR_WRITEMASK',
    'COMMENT_NODE',
    'COMPILE_STATUS',
    'COMPRESSED_RGBA_S3TC_DXT1_EXT',
    'COMPRESSED_RGBA_S3TC_DXT3_EXT',
    'COMPRESSED_RGBA_S3TC_DXT5_EXT',
    'COMPRESSED_RGB_S3TC_DXT1_EXT',
    'COMPRESSED_TEXTURE_FORMATS',
    'CONNECTING',
    'CONSTANT_ALPHA',
    'CONSTANT_COLOR',
    'CONSTRAINT_ERR',
    'CONTEXT_LOST_WEBGL',
    'CONTROL_MASK',
    'COUNTER_STYLE_RULE',
    'CSS',
    'CSS2Properties',
    'CSSCharsetRule',
    'CSSConditionRule',
    'CSSCounterStyleRule',
    'CSSFontFaceRule',
    'CSSFontFeatureValuesRule',
    'CSSGroupingRule',
    'CSSImportRule',
    'CSSKeyframeRule',
    'CSSKeyframesRule',
    'CSSMediaRule',
    'CSSMozDocumentRule',
    'CSSNameSpaceRule',
    'CSSPageRule',
    'CSSPrimitiveValue',
    'CSSRule',
    'CSSRuleList',
    'CSSStyleDeclaration',
    'CSSStyleRule',
    'CSSStyleSheet',
    'CSSSupportsRule',
    'CSSUnknownRule',
    'CSSValue',
    'CSSValueList',
    'CSSVariablesDeclaration',
    'CSSVariablesRule',
    'CSSViewportRule',
    'CSS_ATTR',
    'CSS_CM',
    'CSS_COUNTER',
    'CSS_CUSTOM',
    'CSS_DEG',
    'CSS_DIMENSION',
    'CSS_EMS',
    'CSS_EXS',
    'CSS_FILTER_BLUR',
    'CSS_FILTER_BRIGHTNESS',
    'CSS_FILTER_CONTRAST',
    'CSS_FILTER_CUSTOM',
    'CSS_FILTER_DROP_SHADOW',
    'CSS_FILTER_GRAYSCALE',
    'CSS_FILTER_HUE_ROTATE',
    'CSS_FILTER_INVERT',
    'CSS_FILTER_OPACITY',
    'CSS_FILTER_REFERENCE',
    'CSS_FILTER_SATURATE',
    'CSS_FILTER_SEPIA',
    'CSS_GRAD',
    'CSS_HZ',
    'CSS_IDENT',
    'CSS_IN',
    'CSS_INHERIT',
    'CSS_KHZ',
    'CSS_MATRIX',
    'CSS_MATRIX3D',
    'CSS_MM',
    'CSS_MS',
    'CSS_NUMBER',
    'CSS_PC',
    'CSS_PERCENTAGE',
    'CSS_PERSPECTIVE',
    'CSS_PRIMITIVE_VALUE',
    'CSS_PT',
    'CSS_PX',
    'CSS_RAD',
    'CSS_RECT',
    'CSS_RGBCOLOR',
    'CSS_ROTATE',
    'CSS_ROTATE3D',
    'CSS_ROTATEX',
    'CSS_ROTATEY',
    'CSS_ROTATEZ',
    'CSS_S',
    'CSS_SCALE',
    'CSS_SCALE3D',
    'CSS_SCALEX',
    'CSS_SCALEY',
    'CSS_SCALEZ',
    'CSS_SKEW',
    'CSS_SKEWX',
    'CSS_SKEWY',
    'CSS_STRING',
    'CSS_TRANSLATE',
    'CSS_TRANSLATE3D',
    'CSS_TRANSLATEX',
    'CSS_TRANSLATEY',
    'CSS_TRANSLATEZ',
    'CSS_UNKNOWN',
    'CSS_URI',
    'CSS_VALUE_LIST',
    'CSS_VH',
    'CSS_VMAX',
    'CSS_VMIN',
    'CSS_VW',
    'CULL_FACE',
    'CULL_FACE_MODE',
    'CURRENT_PROGRAM',
    'CURRENT_VERTEX_ATTRIB',
    'CUSTOM',
    'CW',
    'CanvasGradient',
    'CanvasPattern',
    'CanvasRenderingContext2D',
    'CaretPosition',
    'ChannelMergerNode',
    'ChannelSplitterNode',
    'CharacterData',
    'ClientRect',
    'ClientRectList',
    'Clipboard',
    'ClipboardEvent',
    'CloseEvent',
    'Collator',
    'CommandEvent',
    'Comment',
    'CompositionEvent',
    'Console',
    'Controllers',
    'ConvolverNode',
    'Counter',
    'Crypto',
    'CryptoKey',
    'CustomEvent',
    'DATABASE_ERR',
    'DATA_CLONE_ERR',
    'DATA_ERR',
    'DBLCLICK',
    'DECR',
    'DECR_WRAP',
    'DELETE_STATUS',
    'DEPTH_ATTACHMENT',
    'DEPTH_BITS',
    'DEPTH_BUFFER_BIT',
    'DEPTH_CLEAR_VALUE',
    'DEPTH_COMPONENT',
    'DEPTH_COMPONENT16',
    'DEPTH_FUNC',
    'DEPTH_RANGE',
    'DEPTH_STENCIL',
    'DEPTH_STENCIL_ATTACHMENT',
    'DEPTH_TEST',
    'DEPTH_WRITEMASK',
    'DIRECTION_DOWN',
    'DIRECTION_LEFT',
    'DIRECTION_RIGHT',
    'DIRECTION_UP',
    'DISABLED',
    'DISPATCH_REQUEST_ERR',
    'DITHER',
    'DOCUMENT_FRAGMENT_NODE',
    'DOCUMENT_NODE',
    'DOCUMENT_POSITION_CONTAINED_BY',
    'DOCUMENT_POSITION_CONTAINS',
    'DOCUMENT_POSITION_DISCONNECTED',
    'DOCUMENT_POSITION_FOLLOWING',
    'DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC',
    'DOCUMENT_POSITION_PRECEDING',
    'DOCUMENT_TYPE_NODE',
    'DOMCursor',
    'DOMError',
    'DOMException',
    'DOMImplementation',
    'DOMImplementationLS',
    'DOMMatrix',
    'DOMMatrixReadOnly',
    'DOMParser',
    'DOMPoint',
    'DOMPointReadOnly',
    'DOMQuad',
    'DOMRect',
    'DOMRectList',
    'DOMRectReadOnly',
    'DOMRequest',
    'DOMSTRING_SIZE_ERR',
    'DOMSettableTokenList',
    'DOMStringList',
    'DOMStringMap',
    'DOMTokenList',
    'DOMTransactionEvent',
    'DOM_DELTA_LINE',
    'DOM_DELTA_PAGE',
    'DOM_DELTA_PIXEL',
    'DOM_INPUT_METHOD_DROP',
    'DOM_INPUT_METHOD_HANDWRITING',
    'DOM_INPUT_METHOD_IME',
    'DOM_INPUT_METHOD_KEYBOARD',
    'DOM_INPUT_METHOD_MULTIMODAL',
    'DOM_INPUT_METHOD_OPTION',
    'DOM_INPUT_METHOD_PASTE',
    'DOM_INPUT_METHOD_SCRIPT',
    'DOM_INPUT_METHOD_UNKNOWN',
    'DOM_INPUT_METHOD_VOICE',
    'DOM_KEY_LOCATION_JOYSTICK',
    'DOM_KEY_LOCATION_LEFT',
    'DOM_KEY_LOCATION_MOBILE',
    'DOM_KEY_LOCATION_NUMPAD',
    'DOM_KEY_LOCATION_RIGHT',
    'DOM_KEY_LOCATION_STANDARD',
    'DOM_VK_0',
    'DOM_VK_1',
    'DOM_VK_2',
    'DOM_VK_3',
    'DOM_VK_4',
    'DOM_VK_5',
    'DOM_VK_6',
    'DOM_VK_7',
    'DOM_VK_8',
    'DOM_VK_9',
    'DOM_VK_A',
    'DOM_VK_ACCEPT',
    'DOM_VK_ADD',
    'DOM_VK_ALT',
    'DOM_VK_ALTGR',
    'DOM_VK_AMPERSAND',
    'DOM_VK_ASTERISK',
    'DOM_VK_AT',
    'DOM_VK_ATTN',
    'DOM_VK_B',
    'DOM_VK_BACKSPACE',
    'DOM_VK_BACK_QUOTE',
    'DOM_VK_BACK_SLASH',
    'DOM_VK_BACK_SPACE',
    'DOM_VK_C',
    'DOM_VK_CANCEL',
    'DOM_VK_CAPS_LOCK',
    'DOM_VK_CIRCUMFLEX',
    'DOM_VK_CLEAR',
    'DOM_VK_CLOSE_BRACKET',
    'DOM_VK_CLOSE_CURLY_BRACKET',
    'DOM_VK_CLOSE_PAREN',
    'DOM_VK_COLON',
    'DOM_VK_COMMA',
    'DOM_VK_CONTEXT_MENU',
    'DOM_VK_CONTROL',
    'DOM_VK_CONVERT',
    'DOM_VK_CRSEL',
    'DOM_VK_CTRL',
    'DOM_VK_D',
    'DOM_VK_DECIMAL',
    'DOM_VK_DELETE',
    'DOM_VK_DIVIDE',
    'DOM_VK_DOLLAR',
    'DOM_VK_DOUBLE_QUOTE',
    'DOM_VK_DOWN',
    'DOM_VK_E',
    'DOM_VK_EISU',
    'DOM_VK_END',
    'DOM_VK_ENTER',
    'DOM_VK_EQUALS',
    'DOM_VK_EREOF',
    'DOM_VK_ESCAPE',
    'DOM_VK_EXCLAMATION',
    'DOM_VK_EXECUTE',
    'DOM_VK_EXSEL',
    'DOM_VK_F',
    'DOM_VK_F1',
    'DOM_VK_F10',
    'DOM_VK_F11',
    'DOM_VK_F12',
    'DOM_VK_F13',
    'DOM_VK_F14',
    'DOM_VK_F15',
    'DOM_VK_F16',
    'DOM_VK_F17',
    'DOM_VK_F18',
    'DOM_VK_F19',
    'DOM_VK_F2',
    'DOM_VK_F20',
    'DOM_VK_F21',
    'DOM_VK_F22',
    'DOM_VK_F23',
    'DOM_VK_F24',
    'DOM_VK_F25',
    'DOM_VK_F26',
    'DOM_VK_F27',
    'DOM_VK_F28',
    'DOM_VK_F29',
    'DOM_VK_F3',
    'DOM_VK_F30',
    'DOM_VK_F31',
    'DOM_VK_F32',
    'DOM_VK_F33',
    'DOM_VK_F34',
    'DOM_VK_F35',
    'DOM_VK_F36',
    'DOM_VK_F4',
    'DOM_VK_F5',
    'DOM_VK_F6',
    'DOM_VK_F7',
    'DOM_VK_F8',
    'DOM_VK_F9',
    'DOM_VK_FINAL',
    'DOM_VK_FRONT',
    'DOM_VK_G',
    'DOM_VK_GREATER_THAN',
    'DOM_VK_H',
    'DOM_VK_HANGUL',
    'DOM_VK_HANJA',
    'DOM_VK_HASH',
    'DOM_VK_HELP',
    'DOM_VK_HK_TOGGLE',
    'DOM_VK_HOME',
    'DOM_VK_HYPHEN_MINUS',
    'DOM_VK_I',
    'DOM_VK_INSERT',
    'DOM_VK_J',
    'DOM_VK_JUNJA',
    'DOM_VK_K',
    'DOM_VK_KANA',
    'DOM_VK_KANJI',
    'DOM_VK_L',
    'DOM_VK_LEFT',
    'DOM_VK_LEFT_TAB',
    'DOM_VK_LESS_THAN',
    'DOM_VK_M',
    'DOM_VK_META',
    'DOM_VK_MODECHANGE',
    'DOM_VK_MULTIPLY',
    'DOM_VK_N',
    'DOM_VK_NONCONVERT',
    'DOM_VK_NUMPAD0',
    'DOM_VK_NUMPAD1',
    'DOM_VK_NUMPAD2',
    'DOM_VK_NUMPAD3',
    'DOM_VK_NUMPAD4',
    'DOM_VK_NUMPAD5',
    'DOM_VK_NUMPAD6',
    'DOM_VK_NUMPAD7',
    'DOM_VK_NUMPAD8',
    'DOM_VK_NUMPAD9',
    'DOM_VK_NUM_LOCK',
    'DOM_VK_O',
    'DOM_VK_OEM_1',
    'DOM_VK_OEM_102',
    'DOM_VK_OEM_2',
    'DOM_VK_OEM_3',
    'DOM_VK_OEM_4',
    'DOM_VK_OEM_5',
    'DOM_VK_OEM_6',
    'DOM_VK_OEM_7',
    'DOM_VK_OEM_8',
    'DOM_VK_OEM_COMMA',
    'DOM_VK_OEM_MINUS',
    'DOM_VK_OEM_PERIOD',
    'DOM_VK_OEM_PLUS',
    'DOM_VK_OPEN_BRACKET',
    'DOM_VK_OPEN_CURLY_BRACKET',
    'DOM_VK_OPEN_PAREN',
    'DOM_VK_P',
    'DOM_VK_PA1',
    'DOM_VK_PAGEDOWN',
    'DOM_VK_PAGEUP',
    'DOM_VK_PAGE_DOWN',
    'DOM_VK_PAGE_UP',
    'DOM_VK_PAUSE',
    'DOM_VK_PERCENT',
    'DOM_VK_PERIOD',
    'DOM_VK_PIPE',
    'DOM_VK_PLAY',
    'DOM_VK_PLUS',
    'DOM_VK_PRINT',
    'DOM_VK_PRINTSCREEN',
    'DOM_VK_PROCESSKEY',
    'DOM_VK_PROPERITES',
    'DOM_VK_Q',
    'DOM_VK_QUESTION_MARK',
    'DOM_VK_QUOTE',
    'DOM_VK_R',
    'DOM_VK_REDO',
    'DOM_VK_RETURN',
    'DOM_VK_RIGHT',
    'DOM_VK_S',
    'DOM_VK_SCROLL_LOCK',
    'DOM_VK_SELECT',
    'DOM_VK_SEMICOLON',
    'DOM_VK_SEPARATOR',
    'DOM_VK_SHIFT',
    'DOM_VK_SLASH',
    'DOM_VK_SLEEP',
    'DOM_VK_SPACE',
    'DOM_VK_SUBTRACT',
    'DOM_VK_T',
    'DOM_VK_TAB',
    'DOM_VK_TILDE',
    'DOM_VK_U',
    'DOM_VK_UNDERSCORE',
    'DOM_VK_UNDO',
    'DOM_VK_UNICODE',
    'DOM_VK_UP',
    'DOM_VK_V',
    'DOM_VK_VOLUME_DOWN',
    'DOM_VK_VOLUME_MUTE',
    'DOM_VK_VOLUME_UP',
    'DOM_VK_W',
    'DOM_VK_WIN',
    'DOM_VK_WINDOW',
    'DOM_VK_WIN_ICO_00',
    'DOM_VK_WIN_ICO_CLEAR',
    'DOM_VK_WIN_ICO_HELP',
    'DOM_VK_WIN_OEM_ATTN',
    'DOM_VK_WIN_OEM_AUTO',
    'DOM_VK_WIN_OEM_BACKTAB',
    'DOM_VK_WIN_OEM_CLEAR',
    'DOM_VK_WIN_OEM_COPY',
    'DOM_VK_WIN_OEM_CUSEL',
    'DOM_VK_WIN_OEM_ENLW',
    'DOM_VK_WIN_OEM_FINISH',
    'DOM_VK_WIN_OEM_FJ_JISHO',
    'DOM_VK_WIN_OEM_FJ_LOYA',
    'DOM_VK_WIN_OEM_FJ_MASSHOU',
    'DOM_VK_WIN_OEM_FJ_ROYA',
    'DOM_VK_WIN_OEM_FJ_TOUROKU',
    'DOM_VK_WIN_OEM_JUMP',
    'DOM_VK_WIN_OEM_PA1',
    'DOM_VK_WIN_OEM_PA2',
    'DOM_VK_WIN_OEM_PA3',
    'DOM_VK_WIN_OEM_RESET',
    'DOM_VK_WIN_OEM_WSCTRL',
    'DOM_VK_X',
    'DOM_VK_XF86XK_ADD_FAVORITE',
    'DOM_VK_XF86XK_APPLICATION_LEFT',
    'DOM_VK_XF86XK_APPLICATION_RIGHT',
    'DOM_VK_XF86XK_AUDIO_CYCLE_TRACK',
    'DOM_VK_XF86XK_AUDIO_FORWARD',
    'DOM_VK_XF86XK_AUDIO_LOWER_VOLUME',
    'DOM_VK_XF86XK_AUDIO_MEDIA',
    'DOM_VK_XF86XK_AUDIO_MUTE',
    'DOM_VK_XF86XK_AUDIO_NEXT',
    'DOM_VK_XF86XK_AUDIO_PAUSE',
    'DOM_VK_XF86XK_AUDIO_PLAY',
    'DOM_VK_XF86XK_AUDIO_PREV',
    'DOM_VK_XF86XK_AUDIO_RAISE_VOLUME',
    'DOM_VK_XF86XK_AUDIO_RANDOM_PLAY',
    'DOM_VK_XF86XK_AUDIO_RECORD',
    'DOM_VK_XF86XK_AUDIO_REPEAT',
    'DOM_VK_XF86XK_AUDIO_REWIND',
    'DOM_VK_XF86XK_AUDIO_STOP',
    'DOM_VK_XF86XK_AWAY',
    'DOM_VK_XF86XK_BACK',
    'DOM_VK_XF86XK_BACK_FORWARD',
    'DOM_VK_XF86XK_BATTERY',
    'DOM_VK_XF86XK_BLUE',
    'DOM_VK_XF86XK_BLUETOOTH',
    'DOM_VK_XF86XK_BOOK',
    'DOM_VK_XF86XK_BRIGHTNESS_ADJUST',
    'DOM_VK_XF86XK_CALCULATOR',
    'DOM_VK_XF86XK_CALENDAR',
    'DOM_VK_XF86XK_CD',
    'DOM_VK_XF86XK_CLOSE',
    'DOM_VK_XF86XK_COMMUNITY',
    'DOM_VK_XF86XK_CONTRAST_ADJUST',
    'DOM_VK_XF86XK_COPY',
    'DOM_VK_XF86XK_CUT',
    'DOM_VK_XF86XK_CYCLE_ANGLE',
    'DOM_VK_XF86XK_DISPLAY',
    'DOM_VK_XF86XK_DOCUMENTS',
    'DOM_VK_XF86XK_DOS',
    'DOM_VK_XF86XK_EJECT',
    'DOM_VK_XF86XK_EXCEL',
    'DOM_VK_XF86XK_EXPLORER',
    'DOM_VK_XF86XK_FAVORITES',
    'DOM_VK_XF86XK_FINANCE',
    'DOM_VK_XF86XK_FORWARD',
    'DOM_VK_XF86XK_FRAME_BACK',
    'DOM_VK_XF86XK_FRAME_FORWARD',
    'DOM_VK_XF86XK_GAME',
    'DOM_VK_XF86XK_GO',
    'DOM_VK_XF86XK_GREEN',
    'DOM_VK_XF86XK_HIBERNATE',
    'DOM_VK_XF86XK_HISTORY',
    'DOM_VK_XF86XK_HOME_PAGE',
    'DOM_VK_XF86XK_HOT_LINKS',
    'DOM_VK_XF86XK_I_TOUCH',
    'DOM_VK_XF86XK_KBD_BRIGHTNESS_DOWN',
    'DOM_VK_XF86XK_KBD_BRIGHTNESS_UP',
    'DOM_VK_XF86XK_KBD_LIGHT_ON_OFF',
    'DOM_VK_XF86XK_LAUNCH0',
    'DOM_VK_XF86XK_LAUNCH1',
    'DOM_VK_XF86XK_LAUNCH2',
    'DOM_VK_XF86XK_LAUNCH3',
    'DOM_VK_XF86XK_LAUNCH4',
    'DOM_VK_XF86XK_LAUNCH5',
    'DOM_VK_XF86XK_LAUNCH6',
    'DOM_VK_XF86XK_LAUNCH7',
    'DOM_VK_XF86XK_LAUNCH8',
    'DOM_VK_XF86XK_LAUNCH9',
    'DOM_VK_XF86XK_LAUNCH_A',
    'DOM_VK_XF86XK_LAUNCH_B',
    'DOM_VK_XF86XK_LAUNCH_C',
    'DOM_VK_XF86XK_LAUNCH_D',
    'DOM_VK_XF86XK_LAUNCH_E',
    'DOM_VK_XF86XK_LAUNCH_F',
    'DOM_VK_XF86XK_LIGHT_BULB',
    'DOM_VK_XF86XK_LOG_OFF',
    'DOM_VK_XF86XK_MAIL',
    'DOM_VK_XF86XK_MAIL_FORWARD',
    'DOM_VK_XF86XK_MARKET',
    'DOM_VK_XF86XK_MEETING',
    'DOM_VK_XF86XK_MEMO',
    'DOM_VK_XF86XK_MENU_KB',
    'DOM_VK_XF86XK_MENU_PB',
    'DOM_VK_XF86XK_MESSENGER',
    'DOM_VK_XF86XK_MON_BRIGHTNESS_DOWN',
    'DOM_VK_XF86XK_MON_BRIGHTNESS_UP',
    'DOM_VK_XF86XK_MUSIC',
    'DOM_VK_XF86XK_MY_COMPUTER',
    'DOM_VK_XF86XK_MY_SITES',
    'DOM_VK_XF86XK_NEW',
    'DOM_VK_XF86XK_NEWS',
    'DOM_VK_XF86XK_OFFICE_HOME',
    'DOM_VK_XF86XK_OPEN',
    'DOM_VK_XF86XK_OPEN_URL',
    'DOM_VK_XF86XK_OPTION',
    'DOM_VK_XF86XK_PASTE',
    'DOM_VK_XF86XK_PHONE',
    'DOM_VK_XF86XK_PICTURES',
    'DOM_VK_XF86XK_POWER_DOWN',
    'DOM_VK_XF86XK_POWER_OFF',
    'DOM_VK_XF86XK_RED',
    'DOM_VK_XF86XK_REFRESH',
    'DOM_VK_XF86XK_RELOAD',
    'DOM_VK_XF86XK_REPLY',
    'DOM_VK_XF86XK_ROCKER_DOWN',
    'DOM_VK_XF86XK_ROCKER_ENTER',
    'DOM_VK_XF86XK_ROCKER_UP',
    'DOM_VK_XF86XK_ROTATE_WINDOWS',
    'DOM_VK_XF86XK_ROTATION_KB',
    'DOM_VK_XF86XK_ROTATION_PB',
    'DOM_VK_XF86XK_SAVE',
    'DOM_VK_XF86XK_SCREEN_SAVER',
    'DOM_VK_XF86XK_SCROLL_CLICK',
    'DOM_VK_XF86XK_SCROLL_DOWN',
    'DOM_VK_XF86XK_SCROLL_UP',
    'DOM_VK_XF86XK_SEARCH',
    'DOM_VK_XF86XK_SEND',
    'DOM_VK_XF86XK_SHOP',
    'DOM_VK_XF86XK_SPELL',
    'DOM_VK_XF86XK_SPLIT_SCREEN',
    'DOM_VK_XF86XK_STANDBY',
    'DOM_VK_XF86XK_START',
    'DOM_VK_XF86XK_STOP',
    'DOM_VK_XF86XK_SUBTITLE',
    'DOM_VK_XF86XK_SUPPORT',
    'DOM_VK_XF86XK_SUSPEND',
    'DOM_VK_XF86XK_TASK_PANE',
    'DOM_VK_XF86XK_TERMINAL',
    'DOM_VK_XF86XK_TIME',
    'DOM_VK_XF86XK_TOOLS',
    'DOM_VK_XF86XK_TOP_MENU',
    'DOM_VK_XF86XK_TO_DO_LIST',
    'DOM_VK_XF86XK_TRAVEL',
    'DOM_VK_XF86XK_USER1KB',
    'DOM_VK_XF86XK_USER2KB',
    'DOM_VK_XF86XK_USER_PB',
    'DOM_VK_XF86XK_UWB',
    'DOM_VK_XF86XK_VENDOR_HOME',
    'DOM_VK_XF86XK_VIDEO',
    'DOM_VK_XF86XK_VIEW',
    'DOM_VK_XF86XK_WAKE_UP',
    'DOM_VK_XF86XK_WEB_CAM',
    'DOM_VK_XF86XK_WHEEL_BUTTON',
    'DOM_VK_XF86XK_WLAN',
    'DOM_VK_XF86XK_WORD',
    'DOM_VK_XF86XK_WWW',
    'DOM_VK_XF86XK_XFER',
    'DOM_VK_XF86XK_YELLOW',
    'DOM_VK_XF86XK_ZOOM_IN',
    'DOM_VK_XF86XK_ZOOM_OUT',
    'DOM_VK_Y',
    'DOM_VK_Z',
    'DOM_VK_ZOOM',
    'DONE',
    'DONT_CARE',
    'DOWNLOADING',
    'DRAGDROP',
    'DST_ALPHA',
    'DST_COLOR',
    'DYNAMIC_DRAW',
    'DataChannel',
    'DataTransfer',
    'DataTransferItem',
    'DataTransferItemList',
    'DataView',
    'Date',
    'DateTimeFormat',
    'DelayNode',
    'DesktopNotification',
    'DesktopNotificationCenter',
    'DeviceLightEvent',
    'DeviceMotionEvent',
    'DeviceOrientationEvent',
    'DeviceProximityEvent',
    'DeviceStorage',
    'DeviceStorageChangeEvent',
    'Document',
    'DocumentFragment',
    'DocumentType',
    'DragEvent',
    'DynamicsCompressorNode',
    'E',
    'ELEMENT_ARRAY_BUFFER',
    'ELEMENT_ARRAY_BUFFER_BINDING',
    'ELEMENT_NODE',
    'EMPTY',
    'ENCODING_ERR',
    'ENDED',
    'END_TO_END',
    'END_TO_START',
    'ENTITY_NODE',
    'ENTITY_REFERENCE_NODE',
    'EPSILON',
    'EQUAL',
    'EQUALPOWER',
    'ERROR',
    'EXPONENTIAL_DISTANCE',
    'Element',
    'ElementQuery',
    'Entity',
    'EntityReference',
    'Error',
    'ErrorEvent',
    'EvalError',
    'Event',
    'EventException',
    'EventSource',
    'EventTarget',
    'External',
    'FASTEST',
    'FIDOSDK',
    'FILTER_ACCEPT',
    'FILTER_INTERRUPT',
    'FILTER_REJECT',
    'FILTER_SKIP',
    'FINISHED_STATE',
    'FIRST_ORDERED_NODE_TYPE',
    'FLOAT',
    'FLOAT_MAT2',
    'FLOAT_MAT3',
    'FLOAT_MAT4',
    'FLOAT_VEC2',
    'FLOAT_VEC3',
    'FLOAT_VEC4',
    'FOCUS',
    'FONT_FACE_RULE',
    'FONT_FEATURE_VALUES_RULE',
    'FRAGMENT_SHADER',
    'FRAGMENT_SHADER_DERIVATIVE_HINT_OES',
    'FRAMEBUFFER',
    'FRAMEBUFFER_ATTACHMENT_OBJECT_NAME',
    'FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE',
    'FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE',
    'FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL',
    'FRAMEBUFFER_BINDING',
    'FRAMEBUFFER_COMPLETE',
    'FRAMEBUFFER_INCOMPLETE_ATTACHMENT',
    'FRAMEBUFFER_INCOMPLETE_DIMENSIONS',
    'FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT',
    'FRAMEBUFFER_UNSUPPORTED',
    'FRONT',
    'FRONT_AND_BACK',
    'FRONT_FACE',
    'FUNC_ADD',
    'FUNC_REVERSE_SUBTRACT',
    'FUNC_SUBTRACT',
    'Feed',
    'FeedEntry',
    'File',
    'FileError',
    'FileList',
    'FileReader',
    'FindInPage',
    'Float32Array',
    'Float64Array',
    'FocusEvent',
    'FontFace',
    'FormData',
    'Function',
    'GENERATE_MIPMAP_HINT',
    'GEQUAL',
    'GREATER',
    'GREEN_BITS',
    'GainNode',
    'Gamepad',
    'GamepadButton',
    'GamepadEvent',
    'GestureEvent',
    'HAVE_CURRENT_DATA',
    'HAVE_ENOUGH_DATA',
    'HAVE_FUTURE_DATA',
    'HAVE_METADATA',
    'HAVE_NOTHING',
    'HEADERS_RECEIVED',
    'HIDDEN',
    'HIERARCHY_REQUEST_ERR',
    'HIGHPASS',
    'HIGHSHELF',
    'HIGH_FLOAT',
    'HIGH_INT',
    'HORIZONTAL',
    'HORIZONTAL_AXIS',
    'HRTF',
    'HTMLAllCollection',
    'HTMLAnchorElement',
    'HTMLAppletElement',
    'HTMLAreaElement',
    'HTMLAudioElement',
    'HTMLBRElement',
    'HTMLBaseElement',
    'HTMLBaseFontElement',
    'HTMLBlockquoteElement',
    'HTMLBodyElement',
    'HTMLButtonElement',
    'HTMLCanvasElement',
    'HTMLCollection',
    'HTMLCommandElement',
    'HTMLContentElement',
    'HTMLDListElement',
    'HTMLDataElement',
    'HTMLDataListElement',
    'HTMLDetailsElement',
    'HTMLDialogElement',
    'HTMLDirectoryElement',
    'HTMLDivElement',
    'HTMLDocument',
    'HTMLElement',
    'HTMLEmbedElement',
    'HTMLFieldSetElement',
    'HTMLFontElement',
    'HTMLFormControlsCollection',
    'HTMLFormElement',
    'HTMLFrameElement',
    'HTMLFrameSetElement',
    'HTMLHRElement',
    'HTMLHeadElement',
    'HTMLHeadingElement',
    'HTMLHtmlElement',
    'HTMLIFrameElement',
    'HTMLImageElement',
    'HTMLInputElement',
    'HTMLIsIndexElement',
    'HTMLKeygenElement',
    'HTMLLIElement',
    'HTMLLabelElement',
    'HTMLLegendElement',
    'HTMLLinkElement',
    'HTMLMapElement',
    'HTMLMarqueeElement',
    'HTMLMediaElement',
    'HTMLMenuElement',
    'HTMLMenuItemElement',
    'HTMLMetaElement',
    'HTMLMeterElement',
    'HTMLModElement',
    'HTMLOListElement',
    'HTMLObjectElement',
    'HTMLOptGroupElement',
    'HTMLOptionElement',
    'HTMLOptionsCollection',
    'HTMLOutputElement',
    'HTMLParagraphElement',
    'HTMLParamElement',
    'HTMLPictureElement',
    'HTMLPreElement',
    'HTMLProgressElement',
    'HTMLPropertiesCollection',
    'HTMLQuoteElement',
    'HTMLScriptElement',
    'HTMLSelectElement',
    'HTMLShadowElement',
    'HTMLSourceElement',
    'HTMLSpanElement',
    'HTMLStyleElement',
    'HTMLTableCaptionElement',
    'HTMLTableCellElement',
    'HTMLTableColElement',
    'HTMLTableElement',
    'HTMLTableRowElement',
    'HTMLTableSectionElement',
    'HTMLTemplateElement',
    'HTMLTextAreaElement',
    'HTMLTimeElement',
    'HTMLTitleElement',
    'HTMLTrackElement',
    'HTMLUListElement',
    'HTMLUnknownElement',
    'HTMLVideoElement',
    'HashChangeEvent',
    'Headers',
    'History',
    'ICE_CHECKING',
    'ICE_CLOSED',
    'ICE_COMPLETED',
    'ICE_CONNECTED',
    'ICE_FAILED',
    'ICE_GATHERING',
    'ICE_WAITING',
    'IDBCursor',
    'IDBCursorWithValue',
    'IDBDatabase',
    'IDBDatabaseException',
    'IDBFactory',
    'IDBFileHandle',
    'IDBFileRequest',
    'IDBIndex',
    'IDBKeyRange',
    'IDBMutableFile',
    'IDBObjectStore',
    'IDBOpenDBRequest',
    'IDBRequest',
    'IDBTransaction',
    'IDBVersionChangeEvent',
    'IDLE',
    'IMPLEMENTATION_COLOR_READ_FORMAT',
    'IMPLEMENTATION_COLOR_READ_TYPE',
    'IMPORT_RULE',
    'INCR',
    'INCR_WRAP',
    'INDEX_SIZE_ERR',
    'INT',
    'INT_VEC2',
    'INT_VEC3',
    'INT_VEC4',
    'INUSE_ATTRIBUTE_ERR',
    'INVALID_ACCESS_ERR',
    'INVALID_CHARACTER_ERR',
    'INVALID_ENUM',
    'INVALID_EXPRESSION_ERR',
    'INVALID_FRAMEBUFFER_OPERATION',
    'INVALID_MODIFICATION_ERR',
    'INVALID_NODE_TYPE_ERR',
    'INVALID_OPERATION',
    'INVALID_STATE_ERR',
    'INVALID_VALUE',
    'INVERSE_DISTANCE',
    'INVERT',
    'IceCandidate',
    'Image',
    'ImageBitmap',
    'ImageData',
    'Infinity',
    'InputEvent',
    'InputMethodContext',
    'InstallTrigger',
    'Int16Array',
    'Int32Array',
    'Int8Array',
    'Intent',
    'InternalError',
    'Intl',
    'IsSearchProviderInstalled',
    'Iterator',
    'JSON',
    'KEEP',
    'KEYDOWN',
    'KEYFRAMES_RULE',
    'KEYFRAME_RULE',
    'KEYPRESS',
    'KEYUP',
    'KeyEvent',
    'KeyboardEvent',
    'LENGTHADJUST_SPACING',
    'LENGTHADJUST_SPACINGANDGLYPHS',
    'LENGTHADJUST_UNKNOWN',
    'LEQUAL',
    'LESS',
    'LINEAR',
    'LINEAR_DISTANCE',
    'LINEAR_MIPMAP_LINEAR',
    'LINEAR_MIPMAP_NEAREST',
    'LINES',
    'LINE_LOOP',
    'LINE_STRIP',
    'LINE_WIDTH',
    'LINK_STATUS',
    'LIVE',
    'LN10',
    'LN2',
    'LOADED',
    'LOADING',
    'LOG10E',
    'LOG2E',
    'LOWPASS',
    'LOWSHELF',
    'LOW_FLOAT',
    'LOW_INT',
    'LSException',
    'LSParserFilter',
    'LUMINANCE',
    'LUMINANCE_ALPHA',
    'LocalMediaStream',
    'Location',
    'MAX_COMBINED_TEXTURE_IMAGE_UNITS',
    'MAX_CUBE_MAP_TEXTURE_SIZE',
    'MAX_FRAGMENT_UNIFORM_VECTORS',
    'MAX_RENDERBUFFER_SIZE',
    'MAX_SAFE_INTEGER',
    'MAX_TEXTURE_IMAGE_UNITS',
    'MAX_TEXTURE_MAX_ANISOTROPY_EXT',
    'MAX_TEXTURE_SIZE',
    'MAX_VALUE',
    'MAX_VARYING_VECTORS',
    'MAX_VERTEX_ATTRIBS',
    'MAX_VERTEX_TEXTURE_IMAGE_UNITS',
    'MAX_VERTEX_UNIFORM_VECTORS',
    'MAX_VIEWPORT_DIMS',
    'MEDIA_ERR_ABORTED',
    'MEDIA_ERR_DECODE',
    'MEDIA_ERR_ENCRYPTED',
    'MEDIA_ERR_NETWORK',
    'MEDIA_ERR_SRC_NOT_SUPPORTED',
    'MEDIA_KEYERR_CLIENT',
    'MEDIA_KEYERR_DOMAIN',
    'MEDIA_KEYERR_HARDWARECHANGE',
    'MEDIA_KEYERR_OUTPUT',
    'MEDIA_KEYERR_SERVICE',
    'MEDIA_KEYERR_UNKNOWN',
    'MEDIA_RULE',
    'MEDIUM_FLOAT',
    'MEDIUM_INT',
    'META_MASK',
    'MIN_SAFE_INTEGER',
    'MIN_VALUE',
    'MIRRORED_REPEAT',
    'MODE_ASYNCHRONOUS',
    'MODE_SYNCHRONOUS',
    'MODIFICATION',
    'MOUSEDOWN',
    'MOUSEDRAG',
    'MOUSEMOVE',
    'MOUSEOUT',
    'MOUSEOVER',
    'MOUSEUP',
    'MOZ_KEYFRAMES_RULE',
    'MOZ_KEYFRAME_RULE',
    'MOZ_SOURCE_CURSOR',
    'MOZ_SOURCE_ERASER',
    'MOZ_SOURCE_KEYBOARD',
    'MOZ_SOURCE_MOUSE',
    'MOZ_SOURCE_PEN',
    'MOZ_SOURCE_TOUCH',
    'MOZ_SOURCE_UNKNOWN',
    'MSGESTURE_FLAG_BEGIN',
    'MSGESTURE_FLAG_CANCEL',
    'MSGESTURE_FLAG_END',
    'MSGESTURE_FLAG_INERTIA',
    'MSGESTURE_FLAG_NONE',
    'MSPOINTER_TYPE_MOUSE',
    'MSPOINTER_TYPE_PEN',
    'MSPOINTER_TYPE_TOUCH',
    'MS_ASYNC_CALLBACK_STATUS_ASSIGN_DELEGATE',
    'MS_ASYNC_CALLBACK_STATUS_CANCEL',
    'MS_ASYNC_CALLBACK_STATUS_CHOOSEANY',
    'MS_ASYNC_CALLBACK_STATUS_ERROR',
    'MS_ASYNC_CALLBACK_STATUS_JOIN',
    'MS_ASYNC_OP_STATUS_CANCELED',
    'MS_ASYNC_OP_STATUS_ERROR',
    'MS_ASYNC_OP_STATUS_SUCCESS',
    'MS_MANIPULATION_STATE_ACTIVE',
    'MS_MANIPULATION_STATE_CANCELLED',
    'MS_MANIPULATION_STATE_COMMITTED',
    'MS_MANIPULATION_STATE_DRAGGING',
    'MS_MANIPULATION_STATE_INERTIA',
    'MS_MANIPULATION_STATE_PRESELECT',
    'MS_MANIPULATION_STATE_SELECTING',
    'MS_MANIPULATION_STATE_STOPPED',
    'MS_MEDIA_ERR_ENCRYPTED',
    'MS_MEDIA_KEYERR_CLIENT',
    'MS_MEDIA_KEYERR_DOMAIN',
    'MS_MEDIA_KEYERR_HARDWARECHANGE',
    'MS_MEDIA_KEYERR_OUTPUT',
    'MS_MEDIA_KEYERR_SERVICE',
    'MS_MEDIA_KEYERR_UNKNOWN',
    'Map',
    'Math',
    'MediaController',
    'MediaDevices',
    'MediaElementAudioSourceNode',
    'MediaEncryptedEvent',
    'MediaError',
    'MediaKeyError',
    'MediaKeyEvent',
    'MediaKeyMessageEvent',
    'MediaKeyNeededEvent',
    'MediaKeySession',
    'MediaKeyStatusMap',
    'MediaKeySystemAccess',
    'MediaKeys',
    'MediaList',
    'MediaQueryList',
    'MediaQueryListEvent',
    'MediaRecorder',
    'MediaSource',
    'MediaStream',
    'MediaStreamAudioDestinationNode',
    'MediaStreamAudioSourceNode',
    'MediaStreamEvent',
    'MediaStreamTrack',
    'MediaStreamTrackEvent',
    'MessageChannel',
    'MessageEvent',
    'MessagePort',
    'Methods',
    'MimeType',
    'MimeTypeArray',
    'MouseEvent',
    'MouseScrollEvent',
    'MozAnimation',
    'MozAnimationDelay',
    'MozAnimationDirection',
    'MozAnimationDuration',
    'MozAnimationFillMode',
    'MozAnimationIterationCount',
    'MozAnimationName',
    'MozAnimationPlayState',
    'MozAnimationTimingFunction',
    'MozAppearance',
    'MozBackfaceVisibility',
    'MozBinding',
    'MozBorderBottomColors',
    'MozBorderEnd',
    'MozBorderEndColor',
    'MozBorderEndStyle',
    'MozBorderEndWidth',
    'MozBorderImage',
    'MozBorderLeftColors',
    'MozBorderRightColors',
    'MozBorderStart',
    'MozBorderStartColor',
    'MozBorderStartStyle',
    'MozBorderStartWidth',
    'MozBorderTopColors',
    'MozBoxAlign',
    'MozBoxDirection',
    'MozBoxFlex',
    'MozBoxOrdinalGroup',
    'MozBoxOrient',
    'MozBoxPack',
    'MozBoxSizing',
    'MozCSSKeyframeRule',
    'MozCSSKeyframesRule',
    'MozColumnCount',
    'MozColumnFill',
    'MozColumnGap',
    'MozColumnRule',
    'MozColumnRuleColor',
    'MozColumnRuleStyle',
    'MozColumnRuleWidth',
    'MozColumnWidth',
    'MozColumns',
    'MozContactChangeEvent',
    'MozFloatEdge',
    'MozFontFeatureSettings',
    'MozFontLanguageOverride',
    'MozForceBrokenImageIcon',
    'MozHyphens',
    'MozImageRegion',
    'MozMarginEnd',
    'MozMarginStart',
    'MozMmsEvent',
    'MozMmsMessage',
    'MozMobileMessageThread',
    'MozOSXFontSmoothing',
    'MozOrient',
    'MozOutlineRadius',
    'MozOutlineRadiusBottomleft',
    'MozOutlineRadiusBottomright',
    'MozOutlineRadiusTopleft',
    'MozOutlineRadiusTopright',
    'MozPaddingEnd',
    'MozPaddingStart',
    'MozPerspective',
    'MozPerspectiveOrigin',
    'MozPowerManager',
    'MozSettingsEvent',
    'MozSmsEvent',
    'MozSmsMessage',
    'MozStackSizing',
    'MozTabSize',
    'MozTextAlignLast',
    'MozTextDecorationColor',
    'MozTextDecorationLine',
    'MozTextDecorationStyle',
    'MozTextSizeAdjust',
    'MozTransform',
    'MozTransformOrigin',
    'MozTransformStyle',
    'MozTransition',
    'MozTransitionDelay',
    'MozTransitionDuration',
    'MozTransitionProperty',
    'MozTransitionTimingFunction',
    'MozUserFocus',
    'MozUserInput',
    'MozUserModify',
    'MozUserSelect',
    'MozWindowDragging',
    'MozWindowShadow',
    'MutationEvent',
    'MutationObserver',
    'MutationRecord',
    'NAMESPACE_ERR',
    'NAMESPACE_RULE',
    'NEAREST',
    'NEAREST_MIPMAP_LINEAR',
    'NEAREST_MIPMAP_NEAREST',
    'NEGATIVE_INFINITY',
    'NETWORK_EMPTY',
    'NETWORK_ERR',
    'NETWORK_IDLE',
    'NETWORK_LOADED',
    'NETWORK_LOADING',
    'NETWORK_NO_SOURCE',
    'NEVER',
    'NEW',
    'NEXT',
    'NEXT_NO_DUPLICATE',
    'NICEST',
    'NODE_AFTER',
    'NODE_BEFORE',
    'NODE_BEFORE_AND_AFTER',
    'NODE_INSIDE',
    'NONE',
    'NON_TRANSIENT_ERR',
    'NOTATION_NODE',
    'NOTCH',
    'NOTEQUAL',
    'NOT_ALLOWED_ERR',
    'NOT_FOUND_ERR',
    'NOT_READABLE_ERR',
    'NOT_SUPPORTED_ERR',
    'NO_DATA_ALLOWED_ERR',
    'NO_ERR',
    'NO_ERROR',
    'NO_MODIFICATION_ALLOWED_ERR',
    'NUMBER_TYPE',
    'NUM_COMPRESSED_TEXTURE_FORMATS',
    'NaN',
    'NamedNodeMap',
    'Navigator',
    'NearbyLinks',
    'NetworkInformation',
    'Node',
    'NodeFilter',
    'NodeIterator',
    'NodeList',
    'Notation',
    'Notification',
    'NotifyPaintEvent',
    'Number',
    'NumberFormat',
    'OBSOLETE',
    'ONE',
    'ONE_MINUS_CONSTANT_ALPHA',
    'ONE_MINUS_CONSTANT_COLOR',
    'ONE_MINUS_DST_ALPHA',
    'ONE_MINUS_DST_COLOR',
    'ONE_MINUS_SRC_ALPHA',
    'ONE_MINUS_SRC_COLOR',
    'OPEN',
    'OPENED',
    'OPENING',
    'ORDERED_NODE_ITERATOR_TYPE',
    'ORDERED_NODE_SNAPSHOT_TYPE',
    'OUT_OF_MEMORY',
    'Object',
    'OfflineAudioCompletionEvent',
    'OfflineAudioContext',
    'OfflineResourceList',
    'Option',
    'OscillatorNode',
    'OverflowEvent',
    'PACK_ALIGNMENT',
    'PAGE_RULE',
    'PARSE_ERR',
    'PATHSEG_ARC_ABS',
    'PATHSEG_ARC_REL',
    'PATHSEG_CLOSEPATH',
    'PATHSEG_CURVETO_CUBIC_ABS',
    'PATHSEG_CURVETO_CUBIC_REL',
    'PATHSEG_CURVETO_CUBIC_SMOOTH_ABS',
    'PATHSEG_CURVETO_CUBIC_SMOOTH_REL',
    'PATHSEG_CURVETO_QUADRATIC_ABS',
    'PATHSEG_CURVETO_QUADRATIC_REL',
    'PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS',
    'PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL',
    'PATHSEG_LINETO_ABS',
    'PATHSEG_LINETO_HORIZONTAL_ABS',
    'PATHSEG_LINETO_HORIZONTAL_REL',
    'PATHSEG_LINETO_REL',
    'PATHSEG_LINETO_VERTICAL_ABS',
    'PATHSEG_LINETO_VERTICAL_REL',
    'PATHSEG_MOVETO_ABS',
    'PATHSEG_MOVETO_REL',
    'PATHSEG_UNKNOWN',
    'PATH_EXISTS_ERR',
    'PEAKING',
    'PERMISSION_DENIED',
    'PERSISTENT',
    'PI',
    'PLAYING_STATE',
    'POINTS',
    'POLYGON_OFFSET_FACTOR',
    'POLYGON_OFFSET_FILL',
    'POLYGON_OFFSET_UNITS',
    'POSITION_UNAVAILABLE',
    'POSITIVE_INFINITY',
    'PREV',
    'PREV_NO_DUPLICATE',
    'PROCESSING_INSTRUCTION_NODE',
    'PageChangeEvent',
    'PageTransitionEvent',
    'PaintRequest',
    'PaintRequestList',
    'PannerNode',
    'Path2D',
    'Performance',
    'PerformanceEntry',
    'PerformanceMark',
    'PerformanceMeasure',
    'PerformanceNavigation',
    'PerformanceResourceTiming',
    'PerformanceTiming',
    'PeriodicWave',
    'Plugin',
    'PluginArray',
    'PopStateEvent',
    'PopupBlockedEvent',
    'ProcessingInstruction',
    'ProgressEvent',
    'Promise',
    'PropertyNodeList',
    'Proxy',
    'PushManager',
    'PushSubscription',
    'Q',
    'QUOTA_ERR',
    'QUOTA_EXCEEDED_ERR',
    'QueryInterface',
    'READ_ONLY',
    'READ_ONLY_ERR',
    'READ_WRITE',
    'RED_BITS',
    'REMOVAL',
    'RENDERBUFFER',
    'RENDERBUFFER_ALPHA_SIZE',
    'RENDERBUFFER_BINDING',
    'RENDERBUFFER_BLUE_SIZE',
    'RENDERBUFFER_DEPTH_SIZE',
    'RENDERBUFFER_GREEN_SIZE',
    'RENDERBUFFER_HEIGHT',
    'RENDERBUFFER_INTERNAL_FORMAT',
    'RENDERBUFFER_RED_SIZE',
    'RENDERBUFFER_STENCIL_SIZE',
    'RENDERBUFFER_WIDTH',
    'RENDERER',
    'RENDERING_INTENT_ABSOLUTE_COLORIMETRIC',
    'RENDERING_INTENT_AUTO',
    'RENDERING_INTENT_PERCEPTUAL',
    'RENDERING_INTENT_RELATIVE_COLORIMETRIC',
    'RENDERING_INTENT_SATURATION',
    'RENDERING_INTENT_UNKNOWN',
    'REPEAT',
    'REPLACE',
    'RGB',
    'RGB565',
    'RGB5_A1',
    'RGBA',
    'RGBA4',
    'RGBColor',
    'ROTATION_CLOCKWISE',
    'ROTATION_COUNTERCLOCKWISE',
    'RTCDataChannelEvent',
    'RTCIceCandidate',
    'RTCPeerConnectionIceEvent',
    'RTCRtpReceiver',
    'RTCRtpSender',
    'RTCSessionDescription',
    'RTCStatsReport',
    'RadioNodeList',
    'Range',
    'RangeError',
    'RangeException',
    'RecordErrorEvent',
    'Rect',
    'ReferenceError',
    'RegExp',
    'Request',
    'Response',
    'SAMPLER_2D',
    'SAMPLER_CUBE',
    'SAMPLES',
    'SAMPLE_ALPHA_TO_COVERAGE',
    'SAMPLE_BUFFERS',
    'SAMPLE_COVERAGE',
    'SAMPLE_COVERAGE_INVERT',
    'SAMPLE_COVERAGE_VALUE',
    'SAWTOOTH',
    'SCHEDULED_STATE',
    'SCISSOR_BOX',
    'SCISSOR_TEST',
    'SCROLL_PAGE_DOWN',
    'SCROLL_PAGE_UP',
    'SDP_ANSWER',
    'SDP_OFFER',
    'SDP_PRANSWER',
    'SECURITY_ERR',
    'SELECT',
    'SERIALIZE_ERR',
    'SEVERITY_ERROR',
    'SEVERITY_FATAL_ERROR',
    'SEVERITY_WARNING',
    'SHADER_COMPILER',
    'SHADER_TYPE',
    'SHADING_LANGUAGE_VERSION',
    'SHIFT_MASK',
    'SHORT',
    'SHOWING',
    'SHOW_ALL',
    'SHOW_ATTRIBUTE',
    'SHOW_CDATA_SECTION',
    'SHOW_COMMENT',
    'SHOW_DOCUMENT',
    'SHOW_DOCUMENT_FRAGMENT',
    'SHOW_DOCUMENT_TYPE',
    'SHOW_ELEMENT',
    'SHOW_ENTITY',
    'SHOW_ENTITY_REFERENCE',
    'SHOW_NOTATION',
    'SHOW_PROCESSING_INSTRUCTION',
    'SHOW_TEXT',
    'SINE',
    'SOUNDFIELD',
    'SQLException',
    'SQRT1_2',
    'SQRT2',
    'SQUARE',
    'SRC_ALPHA',
    'SRC_ALPHA_SATURATE',
    'SRC_COLOR',
    'START_TO_END',
    'START_TO_START',
    'STATIC_DRAW',
    'STENCIL_ATTACHMENT',
    'STENCIL_BACK_FAIL',
    'STENCIL_BACK_FUNC',
    'STENCIL_BACK_PASS_DEPTH_FAIL',
    'STENCIL_BACK_PASS_DEPTH_PASS',
    'STENCIL_BACK_REF',
    'STENCIL_BACK_VALUE_MASK',
    'STENCIL_BACK_WRITEMASK',
    'STENCIL_BITS',
    'STENCIL_BUFFER_BIT',
    'STENCIL_CLEAR_VALUE',
    'STENCIL_FAIL',
    'STENCIL_FUNC',
    'STENCIL_INDEX',
    'STENCIL_INDEX8',
    'STENCIL_PASS_DEPTH_FAIL',
    'STENCIL_PASS_DEPTH_PASS',
    'STENCIL_REF',
    'STENCIL_TEST',
    'STENCIL_VALUE_MASK',
    'STENCIL_WRITEMASK',
    'STREAM_DRAW',
    'STRING_TYPE',
    'STYLE_RULE',
    'SUBPIXEL_BITS',
    'SUPPORTS_RULE',
    'SVGAElement',
    'SVGAltGlyphDefElement',
    'SVGAltGlyphElement',
    'SVGAltGlyphItemElement',
    'SVGAngle',
    'SVGAnimateColorElement',
    'SVGAnimateElement',
    'SVGAnimateMotionElement',
    'SVGAnimateTransformElement',
    'SVGAnimatedAngle',
    'SVGAnimatedBoolean',
    'SVGAnimatedEnumeration',
    'SVGAnimatedInteger',
    'SVGAnimatedLength',
    'SVGAnimatedLengthList',
    'SVGAnimatedNumber',
    'SVGAnimatedNumberList',
    'SVGAnimatedPreserveAspectRatio',
    'SVGAnimatedRect',
    'SVGAnimatedString',
    'SVGAnimatedTransformList',
    'SVGAnimationElement',
    'SVGCircleElement',
    'SVGClipPathElement',
    'SVGColor',
    'SVGComponentTransferFunctionElement',
    'SVGCursorElement',
    'SVGDefsElement',
    'SVGDescElement',
    'SVGDiscardElement',
    'SVGDocument',
    'SVGElement',
    'SVGElementInstance',
    'SVGElementInstanceList',
    'SVGEllipseElement',
    'SVGException',
    'SVGFEBlendElement',
    'SVGFEColorMatrixElement',
    'SVGFEComponentTransferElement',
    'SVGFECompositeElement',
    'SVGFEConvolveMatrixElement',
    'SVGFEDiffuseLightingElement',
    'SVGFEDisplacementMapElement',
    'SVGFEDistantLightElement',
    'SVGFEDropShadowElement',
    'SVGFEFloodElement',
    'SVGFEFuncAElement',
    'SVGFEFuncBElement',
    'SVGFEFuncGElement',
    'SVGFEFuncRElement',
    'SVGFEGaussianBlurElement',
    'SVGFEImageElement',
    'SVGFEMergeElement',
    'SVGFEMergeNodeElement',
    'SVGFEMorphologyElement',
    'SVGFEOffsetElement',
    'SVGFEPointLightElement',
    'SVGFESpecularLightingElement',
    'SVGFESpotLightElement',
    'SVGFETileElement',
    'SVGFETurbulenceElement',
    'SVGFilterElement',
    'SVGFontElement',
    'SVGFontFaceElement',
    'SVGFontFaceFormatElement',
    'SVGFontFaceNameElement',
    'SVGFontFaceSrcElement',
    'SVGFontFaceUriElement',
    'SVGForeignObjectElement',
    'SVGGElement',
    'SVGGeometryElement',
    'SVGGlyphElement',
    'SVGGlyphRefElement',
    'SVGGradientElement',
    'SVGGraphicsElement',
    'SVGHKernElement',
    'SVGImageElement',
    'SVGLength',
    'SVGLengthList',
    'SVGLineElement',
    'SVGLinearGradientElement',
    'SVGMPathElement',
    'SVGMarkerElement',
    'SVGMaskElement',
    'SVGMatrix',
    'SVGMetadataElement',
    'SVGMissingGlyphElement',
    'SVGNumber',
    'SVGNumberList',
    'SVGPaint',
    'SVGPathElement',
    'SVGPathSeg',
    'SVGPathSegArcAbs',
    'SVGPathSegArcRel',
    'SVGPathSegClosePath',
    'SVGPathSegCurvetoCubicAbs',
    'SVGPathSegCurvetoCubicRel',
    'SVGPathSegCurvetoCubicSmoothAbs',
    'SVGPathSegCurvetoCubicSmoothRel',
    'SVGPathSegCurvetoQuadraticAbs',
    'SVGPathSegCurvetoQuadraticRel',
    'SVGPathSegCurvetoQuadraticSmoothAbs',
    'SVGPathSegCurvetoQuadraticSmoothRel',
    'SVGPathSegLinetoAbs',
    'SVGPathSegLinetoHorizontalAbs',
    'SVGPathSegLinetoHorizontalRel',
    'SVGPathSegLinetoRel',
    'SVGPathSegLinetoVerticalAbs',
    'SVGPathSegLinetoVerticalRel',
    'SVGPathSegList',
    'SVGPathSegMovetoAbs',
    'SVGPathSegMovetoRel',
    'SVGPatternElement',
    'SVGPoint',
    'SVGPointList',
    'SVGPolygonElement',
    'SVGPolylineElement',
    'SVGPreserveAspectRatio',
    'SVGRadialGradientElement',
    'SVGRect',
    'SVGRectElement',
    'SVGRenderingIntent',
    'SVGSVGElement',
    'SVGScriptElement',
    'SVGSetElement',
    'SVGStopElement',
    'SVGStringList',
    'SVGStyleElement',
    'SVGSwitchElement',
    'SVGSymbolElement',
    'SVGTRefElement',
    'SVGTSpanElement',
    'SVGTextContentElement',
    'SVGTextElement',
    'SVGTextPathElement',
    'SVGTextPositioningElement',
    'SVGTitleElement',
    'SVGTransform',
    'SVGTransformList',
    'SVGUnitTypes',
    'SVGUseElement',
    'SVGVKernElement',
    'SVGViewElement',
    'SVGViewSpec',
    'SVGZoomAndPan',
    'SVGZoomEvent',
    'SVG_ANGLETYPE_DEG',
    'SVG_ANGLETYPE_GRAD',
    'SVG_ANGLETYPE_RAD',
    'SVG_ANGLETYPE_UNKNOWN',
    'SVG_ANGLETYPE_UNSPECIFIED',
    'SVG_CHANNEL_A',
    'SVG_CHANNEL_B',
    'SVG_CHANNEL_G',
    'SVG_CHANNEL_R',
    'SVG_CHANNEL_UNKNOWN',
    'SVG_COLORTYPE_CURRENTCOLOR',
    'SVG_COLORTYPE_RGBCOLOR',
    'SVG_COLORTYPE_RGBCOLOR_ICCCOLOR',
    'SVG_COLORTYPE_UNKNOWN',
    'SVG_EDGEMODE_DUPLICATE',
    'SVG_EDGEMODE_NONE',
    'SVG_EDGEMODE_UNKNOWN',
    'SVG_EDGEMODE_WRAP',
    'SVG_FEBLEND_MODE_COLOR',
    'SVG_FEBLEND_MODE_COLOR_BURN',
    'SVG_FEBLEND_MODE_COLOR_DODGE',
    'SVG_FEBLEND_MODE_DARKEN',
    'SVG_FEBLEND_MODE_DIFFERENCE',
    'SVG_FEBLEND_MODE_EXCLUSION',
    'SVG_FEBLEND_MODE_HARD_LIGHT',
    'SVG_FEBLEND_MODE_HUE',
    'SVG_FEBLEND_MODE_LIGHTEN',
    'SVG_FEBLEND_MODE_LUMINOSITY',
    'SVG_FEBLEND_MODE_MULTIPLY',
    'SVG_FEBLEND_MODE_NORMAL',
    'SVG_FEBLEND_MODE_OVERLAY',
    'SVG_FEBLEND_MODE_SATURATION',
    'SVG_FEBLEND_MODE_SCREEN',
    'SVG_FEBLEND_MODE_SOFT_LIGHT',
    'SVG_FEBLEND_MODE_UNKNOWN',
    'SVG_FECOLORMATRIX_TYPE_HUEROTATE',
    'SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA',
    'SVG_FECOLORMATRIX_TYPE_MATRIX',
    'SVG_FECOLORMATRIX_TYPE_SATURATE',
    'SVG_FECOLORMATRIX_TYPE_UNKNOWN',
    'SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE',
    'SVG_FECOMPONENTTRANSFER_TYPE_GAMMA',
    'SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY',
    'SVG_FECOMPONENTTRANSFER_TYPE_LINEAR',
    'SVG_FECOMPONENTTRANSFER_TYPE_TABLE',
    'SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN',
    'SVG_FECOMPOSITE_OPERATOR_ARITHMETIC',
    'SVG_FECOMPOSITE_OPERATOR_ATOP',
    'SVG_FECOMPOSITE_OPERATOR_IN',
    'SVG_FECOMPOSITE_OPERATOR_OUT',
    'SVG_FECOMPOSITE_OPERATOR_OVER',
    'SVG_FECOMPOSITE_OPERATOR_UNKNOWN',
    'SVG_FECOMPOSITE_OPERATOR_XOR',
    'SVG_INVALID_VALUE_ERR',
    'SVG_LENGTHTYPE_CM',
    'SVG_LENGTHTYPE_EMS',
    'SVG_LENGTHTYPE_EXS',
    'SVG_LENGTHTYPE_IN',
    'SVG_LENGTHTYPE_MM',
    'SVG_LENGTHTYPE_NUMBER',
    'SVG_LENGTHTYPE_PC',
    'SVG_LENGTHTYPE_PERCENTAGE',
    'SVG_LENGTHTYPE_PT',
    'SVG_LENGTHTYPE_PX',
    'SVG_LENGTHTYPE_UNKNOWN',
    'SVG_MARKERUNITS_STROKEWIDTH',
    'SVG_MARKERUNITS_UNKNOWN',
    'SVG_MARKERUNITS_USERSPACEONUSE',
    'SVG_MARKER_ORIENT_ANGLE',
    'SVG_MARKER_ORIENT_AUTO',
    'SVG_MARKER_ORIENT_UNKNOWN',
    'SVG_MASKTYPE_ALPHA',
    'SVG_MASKTYPE_LUMINANCE',
    'SVG_MATRIX_NOT_INVERTABLE',
    'SVG_MEETORSLICE_MEET',
    'SVG_MEETORSLICE_SLICE',
    'SVG_MEETORSLICE_UNKNOWN',
    'SVG_MORPHOLOGY_OPERATOR_DILATE',
    'SVG_MORPHOLOGY_OPERATOR_ERODE',
    'SVG_MORPHOLOGY_OPERATOR_UNKNOWN',
    'SVG_PAINTTYPE_CURRENTCOLOR',
    'SVG_PAINTTYPE_NONE',
    'SVG_PAINTTYPE_RGBCOLOR',
    'SVG_PAINTTYPE_RGBCOLOR_ICCCOLOR',
    'SVG_PAINTTYPE_UNKNOWN',
    'SVG_PAINTTYPE_URI',
    'SVG_PAINTTYPE_URI_CURRENTCOLOR',
    'SVG_PAINTTYPE_URI_NONE',
    'SVG_PAINTTYPE_URI_RGBCOLOR',
    'SVG_PAINTTYPE_URI_RGBCOLOR_ICCCOLOR',
    'SVG_PRESERVEASPECTRATIO_NONE',
    'SVG_PRESERVEASPECTRATIO_UNKNOWN',
    'SVG_PRESERVEASPECTRATIO_XMAXYMAX',
    'SVG_PRESERVEASPECTRATIO_XMAXYMID',
    'SVG_PRESERVEASPECTRATIO_XMAXYMIN',
    'SVG_PRESERVEASPECTRATIO_XMIDYMAX',
    'SVG_PRESERVEASPECTRATIO_XMIDYMID',
    'SVG_PRESERVEASPECTRATIO_XMIDYMIN',
    'SVG_PRESERVEASPECTRATIO_XMINYMAX',
    'SVG_PRESERVEASPECTRATIO_XMINYMID',
    'SVG_PRESERVEASPECTRATIO_XMINYMIN',
    'SVG_SPREADMETHOD_PAD',
    'SVG_SPREADMETHOD_REFLECT',
    'SVG_SPREADMETHOD_REPEAT',
    'SVG_SPREADMETHOD_UNKNOWN',
    'SVG_STITCHTYPE_NOSTITCH',
    'SVG_STITCHTYPE_STITCH',
    'SVG_STITCHTYPE_UNKNOWN',
    'SVG_TRANSFORM_MATRIX',
    'SVG_TRANSFORM_ROTATE',
    'SVG_TRANSFORM_SCALE',
    'SVG_TRANSFORM_SKEWX',
    'SVG_TRANSFORM_SKEWY',
    'SVG_TRANSFORM_TRANSLATE',
    'SVG_TRANSFORM_UNKNOWN',
    'SVG_TURBULENCE_TYPE_FRACTALNOISE',
    'SVG_TURBULENCE_TYPE_TURBULENCE',
    'SVG_TURBULENCE_TYPE_UNKNOWN',
    'SVG_UNIT_TYPE_OBJECTBOUNDINGBOX',
    'SVG_UNIT_TYPE_UNKNOWN',
    'SVG_UNIT_TYPE_USERSPACEONUSE',
    'SVG_WRONG_TYPE_ERR',
    'SVG_ZOOMANDPAN_DISABLE',
    'SVG_ZOOMANDPAN_MAGNIFY',
    'SVG_ZOOMANDPAN_UNKNOWN',
    'SYNTAX_ERR',
    'SavedPages',
    'Screen',
    'ScreenOrientation',
    'Script',
    'ScriptProcessorNode',
    'ScrollAreaEvent',
    'SecurityPolicyViolationEvent',
    'Selection',
    'ServiceWorker',
    'ServiceWorkerContainer',
    'ServiceWorkerRegistration',
    'SessionDescription',
    'Set',
    'ShadowRoot',
    'SharedWorker',
    'SimpleGestureEvent',
    'SpeechSynthesisEvent',
    'SpeechSynthesisUtterance',
    'StopIteration',
    'Storage',
    'StorageEvent',
    'String',
    'StyleSheet',
    'StyleSheetList',
    'SubtleCrypto',
    'Symbol',
    'SyntaxError',
    'TEMPORARY',
    'TEXTPATH_METHODTYPE_ALIGN',
    'TEXTPATH_METHODTYPE_STRETCH',
    'TEXTPATH_METHODTYPE_UNKNOWN',
    'TEXTPATH_SPACINGTYPE_AUTO',
    'TEXTPATH_SPACINGTYPE_EXACT',
    'TEXTPATH_SPACINGTYPE_UNKNOWN',
    'TEXTURE',
    'TEXTURE0',
    'TEXTURE1',
    'TEXTURE10',
    'TEXTURE11',
    'TEXTURE12',
    'TEXTURE13',
    'TEXTURE14',
    'TEXTURE15',
    'TEXTURE16',
    'TEXTURE17',
    'TEXTURE18',
    'TEXTURE19',
    'TEXTURE2',
    'TEXTURE20',
    'TEXTURE21',
    'TEXTURE22',
    'TEXTURE23',
    'TEXTURE24',
    'TEXTURE25',
    'TEXTURE26',
    'TEXTURE27',
    'TEXTURE28',
    'TEXTURE29',
    'TEXTURE3',
    'TEXTURE30',
    'TEXTURE31',
    'TEXTURE4',
    'TEXTURE5',
    'TEXTURE6',
    'TEXTURE7',
    'TEXTURE8',
    'TEXTURE9',
    'TEXTURE_2D',
    'TEXTURE_BINDING_2D',
    'TEXTURE_BINDING_CUBE_MAP',
    'TEXTURE_CUBE_MAP',
    'TEXTURE_CUBE_MAP_NEGATIVE_X',
    'TEXTURE_CUBE_MAP_NEGATIVE_Y',
    'TEXTURE_CUBE_MAP_NEGATIVE_Z',
    'TEXTURE_CUBE_MAP_POSITIVE_X',
    'TEXTURE_CUBE_MAP_POSITIVE_Y',
    'TEXTURE_CUBE_MAP_POSITIVE_Z',
    'TEXTURE_MAG_FILTER',
    'TEXTURE_MAX_ANISOTROPY_EXT',
    'TEXTURE_MIN_FILTER',
    'TEXTURE_WRAP_S',
    'TEXTURE_WRAP_T',
    'TEXT_NODE',
    'TIMEOUT',
    'TIMEOUT_ERR',
    'TOO_LARGE_ERR',
    'TRANSACTION_INACTIVE_ERR',
    'TRIANGLE',
    'TRIANGLES',
    'TRIANGLE_FAN',
    'TRIANGLE_STRIP',
    'TYPE_BACK_FORWARD',
    'TYPE_ERR',
    'TYPE_MISMATCH_ERR',
    'TYPE_NAVIGATE',
    'TYPE_RELOAD',
    'TYPE_RESERVED',
    'Text',
    'TextDecoder',
    'TextEncoder',
    'TextEvent',
    'TextMetrics',
    'TextTrack',
    'TextTrackCue',
    'TextTrackCueList',
    'TextTrackList',
    'TimeEvent',
    'TimeRanges',
    'Touch',
    'TouchEvent',
    'TouchList',
    'TrackEvent',
    'TransitionEvent',
    'TreeWalker',
    'TypeError',
    'UIEvent',
    'UNCACHED',
    'UNKNOWN_ERR',
    'UNKNOWN_RULE',
    'UNMASKED_RENDERER_WEBGL',
    'UNMASKED_VENDOR_WEBGL',
    'UNORDERED_NODE_ITERATOR_TYPE',
    'UNORDERED_NODE_SNAPSHOT_TYPE',
    'UNPACK_ALIGNMENT',
    'UNPACK_COLORSPACE_CONVERSION_WEBGL',
    'UNPACK_FLIP_Y_WEBGL',
    'UNPACK_PREMULTIPLY_ALPHA_WEBGL',
    'UNSCHEDULED_STATE',
    'UNSENT',
    'UNSIGNED_BYTE',
    'UNSIGNED_INT',
    'UNSIGNED_SHORT',
    'UNSIGNED_SHORT_4_4_4_4',
    'UNSIGNED_SHORT_5_5_5_1',
    'UNSIGNED_SHORT_5_6_5',
    'UNSPECIFIED_EVENT_TYPE_ERR',
    'UPDATEREADY',
    'URIError',
    'URL',
    'URLSearchParams',
    'URLUnencoded',
    'URL_MISMATCH_ERR',
    'UTC',
    'Uint16Array',
    'Uint32Array',
    'Uint8Array',
    'Uint8ClampedArray',
    'UserMessageHandler',
    'UserMessageHandlersNamespace',
    'UserProximityEvent',
    'VALIDATE_STATUS',
    'VALIDATION_ERR',
    'VARIABLES_RULE',
    'VENDOR',
    'VERSION',
    'VERSION_CHANGE',
    'VERSION_ERR',
    'VERTEX_ATTRIB_ARRAY_BUFFER_BINDING',
    'VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE',
    'VERTEX_ATTRIB_ARRAY_ENABLED',
    'VERTEX_ATTRIB_ARRAY_NORMALIZED',
    'VERTEX_ATTRIB_ARRAY_POINTER',
    'VERTEX_ATTRIB_ARRAY_SIZE',
    'VERTEX_ATTRIB_ARRAY_STRIDE',
    'VERTEX_ATTRIB_ARRAY_TYPE',
    'VERTEX_SHADER',
    'VERTICAL',
    'VERTICAL_AXIS',
    'VER_ERR',
    'VIEWPORT',
    'VIEWPORT_RULE',
    'VTTCue',
    'VTTRegion',
    'ValidityState',
    'VideoStreamTrack',
    'WEBKIT_FILTER_RULE',
    'WEBKIT_KEYFRAMES_RULE',
    'WEBKIT_KEYFRAME_RULE',
    'WEBKIT_REGION_RULE',
    'WRONG_DOCUMENT_ERR',
    'WaveShaperNode',
    'WeakMap',
    'WeakSet',
    'WebGLActiveInfo',
    'WebGLBuffer',
    'WebGLContextEvent',
    'WebGLFramebuffer',
    'WebGLProgram',
    'WebGLRenderbuffer',
    'WebGLRenderingContext',
    'WebGLShader',
    'WebGLShaderPrecisionFormat',
    'WebGLTexture',
    'WebGLUniformLocation',
    'WebGLVertexArray',
    'WebKitAnimationEvent',
    'WebKitBlobBuilder',
    'WebKitCSSFilterRule',
    'WebKitCSSFilterValue',
    'WebKitCSSKeyframeRule',
    'WebKitCSSKeyframesRule',
    'WebKitCSSMatrix',
    'WebKitCSSRegionRule',
    'WebKitCSSTransformValue',
    'WebKitDataCue',
    'WebKitGamepad',
    'WebKitMediaKeyError',
    'WebKitMediaKeyMessageEvent',
    'WebKitMediaKeySession',
    'WebKitMediaKeys',
    'WebKitMediaSource',
    'WebKitMutationObserver',
    'WebKitNamespace',
    'WebKitPlaybackTargetAvailabilityEvent',
    'WebKitPoint',
    'WebKitShadowRoot',
    'WebKitSourceBuffer',
    'WebKitSourceBufferList',
    'WebKitTransitionEvent',
    'WebSocket',
    'WheelEvent',
    'Window',
    'Worker',
    'XMLDocument',
    'XMLHttpRequest',
    'XMLHttpRequestEventTarget',
    'XMLHttpRequestException',
    'XMLHttpRequestProgressEvent',
    'XMLHttpRequestUpload',
    'XMLSerializer',
    'XMLStylesheetProcessingInstruction',
    'XPathEvaluator',
    'XPathException',
    'XPathExpression',
    'XPathNSResolver',
    'XPathResult',
    'XSLTProcessor',
    'ZERO',
    '_XD0M_',
    '_YD0M_',
    '__defineGetter__',
    '__defineSetter__',
    '__lookupGetter__',
    '__lookupSetter__',
    '__opera',
    '__proto__',
    '_browserjsran',
    'a',
    'aLink',
    'abbr',
    'abort',
    'abs',
    'absolute',
    'acceleration',
    'accelerationIncludingGravity',
    'accelerator',
    'accept',
    'acceptCharset',
    'acceptNode',
    'accessKey',
    'accessKeyLabel',
    'accuracy',
    'acos',
    'acosh',
    'action',
    'actionURL',
    'active',
    'activeCues',
    'activeElement',
    'activeSourceBuffers',
    'activeSourceCount',
    'activeTexture',
    'add',
    'addBehavior',
    'addCandidate',
    'addColorStop',
    'addCue',
    'addElement',
    'addEventListener',
    'addFilter',
    'addFromString',
    'addFromUri',
    'addIceCandidate',
    'addImport',
    'addListener',
    'addNamed',
    'addPageRule',
    'addPath',
    'addPointer',
    'addRange',
    'addRegion',
    'addRule',
    'addSearchEngine',
    'addSourceBuffer',
    'addStream',
    'addTextTrack',
    'addTrack',
    'addWakeLockListener',
    'addedNodes',
    'additionalName',
    'additiveSymbols',
    'addons',
    'adoptNode',
    'adr',
    'advance',
    'alert',
    'algorithm',
    'align',
    'align-content',
    'align-items',
    'align-self',
    'alignContent',
    'alignItems',
    'alignSelf',
    'alignmentBaseline',
    'alinkColor',
    'all',
    'allSettled',
    'allowFullscreen',
    'allowedDirections',
    'alpha',
    'alt',
    'altGraphKey',
    'altHtml',
    'altKey',
    'altLeft',
    'altitude',
    'altitudeAccuracy',
    'amplitude',
    'ancestorOrigins',
    'anchor',
    'anchorNode',
    'anchorOffset',
    'anchors',
    'angle',
    'animVal',
    'animate',
    'animatedInstanceRoot',
    'animatedNormalizedPathSegList',
    'animatedPathSegList',
    'animatedPoints',
    'animation',
    'animation-delay',
    'animation-direction',
    'animation-duration',
    'animation-fill-mode',
    'animation-iteration-count',
    'animation-name',
    'animation-play-state',
    'animation-timing-function',
    'animationDelay',
    'animationDirection',
    'animationDuration',
    'animationFillMode',
    'animationIterationCount',
    'animationName',
    'animationPlayState',
    'animationStartTime',
    'animationTimingFunction',
    'animationsPaused',
    'anniversary',
    'any',
    'app',
    'appCodeName',
    'appMinorVersion',
    'appName',
    'appNotifications',
    'appVersion',
    'append',
    'appendBuffer',
    'appendChild',
    'appendData',
    'appendItem',
    'appendMedium',
    'appendNamed',
    'appendRule',
    'appendStream',
    'appendWindowEnd',
    'appendWindowStart',
    'applets',
    'applicationCache',
    'apply',
    'applyElement',
    'arc',
    'arcTo',
    'archive',
    'areas',
    'arguments',
    'arrayBuffer',
    'asin',
    'asinh',
    'assert',
    'assign',
    'async',
    'atEnd',
    'atan',
    'atan2',
    'atanh',
    'atob',
    'attachEvent',
    'attachShader',
    'attachShadow',
    'attachments',
    'attack',
    'attrChange',
    'attrName',
    'attributeFilter',
    'attributeName',
    'attributeNamespace',
    'attributeOldValue',
    'attributes',
    'audioTracks',
    'autoIncrement',
    'autobuffer',
    'autocapitalize',
    'autocomplete',
    'autocorrect',
    'autofocus',
    'autoplay',
    'availHeight',
    'availLeft',
    'availTop',
    'availWidth',
    'availability',
    'available',
    'aversion',
    'axes',
    'axis',
    'azimuth',
    'b',
    'back',
    'backface-visibility',
    'backfaceVisibility',
    'background',
    'background-attachment',
    'background-blend-mode',
    'background-clip',
    'background-color',
    'background-image',
    'background-origin',
    'background-position',
    'background-repeat',
    'background-size',
    'backgroundAttachment',
    'backgroundBlendMode',
    'backgroundClip',
    'backgroundColor',
    'backgroundImage',
    'backgroundOrigin',
    'backgroundPosition',
    'backgroundPositionX',
    'backgroundPositionY',
    'backgroundRepeat',
    'backgroundSize',
    'badInput',
    'balance',
    'baseFrequencyX',
    'baseFrequencyY',
    'baseNode',
    'baseOffset',
    'baseURI',
    'baseVal',
    'baselineShift',
    'battery',
    'bday',
    'beginElement',
    'beginElementAt',
    'beginPath',
    'behavior',
    'behaviorCookie',
    'behaviorPart',
    'behaviorUrns',
    'beta',
    'bezierCurveTo',
    'bgColor',
    'bgProperties',
    'bias',
    'big',
    'binaryType',
    'bind',
    'bindAttribLocation',
    'bindBuffer',
    'bindFramebuffer',
    'bindRenderbuffer',
    'bindTexture',
    'blendColor',
    'blendEquation',
    'blendEquationSeparate',
    'blendFunc',
    'blendFuncSeparate',
    'blink',
    'blob',
    'blockDirection',
    'blue',
    'blur',
    'body',
    'bodyUsed',
    'bold',
    'bookmarks',
    'booleanValue',
    'border',
    'border-bottom',
    'border-bottom-color',
    'border-bottom-left-radius',
    'border-bottom-right-radius',
    'border-bottom-style',
    'border-bottom-width',
    'border-collapse',
    'border-color',
    'border-image',
    'border-image-outset',
    'border-image-repeat',
    'border-image-slice',
    'border-image-source',
    'border-image-width',
    'border-left',
    'border-left-color',
    'border-left-style',
    'border-left-width',
    'border-radius',
    'border-right',
    'border-right-color',
    'border-right-style',
    'border-right-width',
    'border-spacing',
    'border-style',
    'border-top',
    'border-top-color',
    'border-top-left-radius',
    'border-top-right-radius',
    'border-top-style',
    'border-top-width',
    'border-width',
    'borderBottom',
    'borderBottomColor',
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
    'borderBottomStyle',
    'borderBottomWidth',
    'borderCollapse',
    'borderColor',
    'borderColorDark',
    'borderColorLight',
    'borderImage',
    'borderImageOutset',
    'borderImageRepeat',
    'borderImageSlice',
    'borderImageSource',
    'borderImageWidth',
    'borderLeft',
    'borderLeftColor',
    'borderLeftStyle',
    'borderLeftWidth',
    'borderRadius',
    'borderRight',
    'borderRightColor',
    'borderRightStyle',
    'borderRightWidth',
    'borderSpacing',
    'borderStyle',
    'borderTop',
    'borderTopColor',
    'borderTopLeftRadius',
    'borderTopRightRadius',
    'borderTopStyle',
    'borderTopWidth',
    'borderWidth',
    'bottom',
    'bottomMargin',
    'bound',
    'boundElements',
    'boundingClientRect',
    'boundingHeight',
    'boundingLeft',
    'boundingTop',
    'boundingWidth',
    'bounds',
    'box-decoration-break',
    'box-shadow',
    'box-sizing',
    'boxDecorationBreak',
    'boxShadow',
    'boxSizing',
    'breakAfter',
    'breakBefore',
    'breakInside',
    'browserLanguage',
    'btoa',
    'bubbles',
    'buffer',
    'bufferData',
    'bufferDepth',
    'bufferSize',
    'bufferSubData',
    'buffered',
    'bufferedAmount',
    'buildID',
    'buildNumber',
    'button',
    'buttonID',
    'buttons',
    'byteLength',
    'byteOffset',
    'c',
    'call',
    'caller',
    'canBeFormatted',
    'canBeMounted',
    'canBeShared',
    'canHaveChildren',
    'canHaveHTML',
    'canPlayType',
    'cancel',
    'cancelAnimationFrame',
    'cancelBubble',
    'cancelScheduledValues',
    'cancelable',
    'candidate',
    'canvas',
    'caption',
    'caption-side',
    'captionSide',
    'capture',
    'captureEvents',
    'captureStackTrace',
    'caretPositionFromPoint',
    'caretRangeFromPoint',
    'cast',
    'catch',
    'category',
    'cbrt',
    'cd',
    'ceil',
    'cellIndex',
    'cellPadding',
    'cellSpacing',
    'cells',
    'ch',
    'chOff',
    'chain',
    'challenge',
    'changedTouches',
    'channel',
    'channelCount',
    'channelCountMode',
    'channelInterpretation',
    'char',
    'charAt',
    'charCode',
    'charCodeAt',
    'charIndex',
    'characterData',
    'characterDataOldValue',
    'characterSet',
    'charging',
    'chargingTime',
    'charset',
    'checkEnclosure',
    'checkFramebufferStatus',
    'checkIntersection',
    'checkValidity',
    'checked',
    'childElementCount',
    'childList',
    'childNodes',
    'children',
    'chrome',
    'ciphertext',
    'cite',
    'classList',
    'className',
    'classid',
    'clear',
    'clearAttributes',
    'clearColor',
    'clearData',
    'clearDepth',
    'clearImmediate',
    'clearInterval',
    'clearMarks',
    'clearMeasures',
    'clearParameters',
    'clearRect',
    'clearResourceTimings',
    'clearShadow',
    'clearStencil',
    'clearTimeout',
    'clearWatch',
    'click',
    'clickCount',
    'clientHeight',
    'clientInformation',
    'clientLeft',
    'clientRect',
    'clientRects',
    'clientTop',
    'clientWidth',
    'clientX',
    'clientY',
    'clip',
    'clip-path',
    'clip-rule',
    'clipBottom',
    'clipLeft',
    'clipPath',
    'clipPathUnits',
    'clipRight',
    'clipRule',
    'clipTop',
    'clipboardData',
    'clone',
    'cloneContents',
    'cloneNode',
    'cloneRange',
    'close',
    'closePath',
    'closed',
    'closest',
    'clz',
    'clz32',
    'cmp',
    'code',
    'codeBase',
    'codePointAt',
    'codeType',
    'colSpan',
    'collapse',
    'collapseToEnd',
    'collapseToStart',
    'collapsed',
    'collect',
    'colno',
    'color',
    'color-interpolation',
    'color-interpolation-filters',
    'colorDepth',
    'colorInterpolation',
    'colorInterpolationFilters',
    'colorMask',
    'colorType',
    'cols',
    'columnCount',
    'columnFill',
    'columnGap',
    'columnNumber',
    'columnRule',
    'columnRuleColor',
    'columnRuleStyle',
    'columnRuleWidth',
    'columnSpan',
    'columnWidth',
    'columns',
    'command',
    'commitPreferences',
    'commonAncestorContainer',
    'compact',
    'compareBoundaryPoints',
    'compareDocumentPosition',
    'compareEndPoints',
    'compareNode',
    'comparePoint',
    'compatMode',
    'compatible',
    'compile',
    'compileShader',
    'complete',
    'componentFromPoint',
    'compositionEndOffset',
    'compositionStartOffset',
    'compressedTexImage2D',
    'compressedTexSubImage2D',
    'concat',
    'conditionText',
    'coneInnerAngle',
    'coneOuterAngle',
    'coneOuterGain',
    'confirm',
    'confirmComposition',
    'confirmSiteSpecificTrackingException',
    'confirmWebWideTrackingException',
    'connect',
    'connectEnd',
    'connectStart',
    'connected',
    'connection',
    'connectionSpeed',
    'console',
    'consolidate',
    'constrictionActive',
    'constructor',
    'contactID',
    'contains',
    'containsNode',
    'content',
    'contentDocument',
    'contentEditable',
    'contentOverflow',
    'contentScriptType',
    'contentStyleType',
    'contentType',
    'contentWindow',
    'context',
    'contextMenu',
    'contextmenu',
    'continue',
    'continuous',
    'control',
    'controller',
    'controls',
    'convertToSpecifiedUnits',
    'cookie',
    'cookieEnabled',
    'coords',
    'copyFromChannel',
    'copyTexImage2D',
    'copyTexSubImage2D',
    'copyToChannel',
    'copyWithin',
    'correspondingElement',
    'correspondingUseElement',
    'cos',
    'cosh',
    'count',
    'counter-increment',
    'counter-reset',
    'counterIncrement',
    'counterReset',
    'cpuClass',
    'cpuSleepAllowed',
    'create',
    'createAnalyser',
    'createAnswer',
    'createAttribute',
    'createAttributeNS',
    'createBiquadFilter',
    'createBuffer',
    'createBufferSource',
    'createCDATASection',
    'createCSSStyleSheet',
    'createCaption',
    'createChannelMerger',
    'createChannelSplitter',
    'createComment',
    'createContextualFragment',
    'createControlRange',
    'createConvolver',
    'createDTMFSender',
    'createDataChannel',
    'createDelay',
    'createDelayNode',
    'createDocument',
    'createDocumentFragment',
    'createDocumentType',
    'createDynamicsCompressor',
    'createElement',
    'createElementNS',
    'createEntityReference',
    'createEvent',
    'createEventObject',
    'createExpression',
    'createFramebuffer',
    'createFunction',
    'createGain',
    'createGainNode',
    'createHTMLDocument',
    'createImageBitmap',
    'createImageData',
    'createIndex',
    'createJavaScriptNode',
    'createLinearGradient',
    'createMediaElementSource',
    'createMediaKeys',
    'createMediaStreamDestination',
    'createMediaStreamSource',
    'createMutableFile',
    'createNSResolver',
    'createNodeIterator',
    'createNotification',
    'createObjectStore',
    'createObjectURL',
    'createOffer',
    'createOscillator',
    'createPanner',
    'createPattern',
    'createPeriodicWave',
    'createPopup',
    'createProcessingInstruction',
    'createProgram',
    'createRadialGradient',
    'createRange',
    'createRangeCollection',
    'createRenderbuffer',
    'createSVGAngle',
    'createSVGLength',
    'createSVGMatrix',
    'createSVGNumber',
    'createSVGPathSegArcAbs',
    'createSVGPathSegArcRel',
    'createSVGPathSegClosePath',
    'createSVGPathSegCurvetoCubicAbs',
    'createSVGPathSegCurvetoCubicRel',
    'createSVGPathSegCurvetoCubicSmoothAbs',
    'createSVGPathSegCurvetoCubicSmoothRel',
    'createSVGPathSegCurvetoQuadraticAbs',
    'createSVGPathSegCurvetoQuadraticRel',
    'createSVGPathSegCurvetoQuadraticSmoothAbs',
    'createSVGPathSegCurvetoQuadraticSmoothRel',
    'createSVGPathSegLinetoAbs',
    'createSVGPathSegLinetoHorizontalAbs',
    'createSVGPathSegLinetoHorizontalRel',
    'createSVGPathSegLinetoRel',
    'createSVGPathSegLinetoVerticalAbs',
    'createSVGPathSegLinetoVerticalRel',
    'createSVGPathSegMovetoAbs',
    'createSVGPathSegMovetoRel',
    'createSVGPoint',
    'createSVGRect',
    'createSVGTransform',
    'createSVGTransformFromMatrix',
    'createScriptProcessor',
    'createSession',
    'createShader',
    'createShadowRoot',
    'createStereoPanner',
    'createStyleSheet',
    'createTBody',
    'createTFoot',
    'createTHead',
    'createTextNode',
    'createTextRange',
    'createTexture',
    'createTouch',
    'createTouchList',
    'createTreeWalker',
    'createWaveShaper',
    'creationTime',
    'crossOrigin',
    'crypto',
    'csi',
    'cssFloat',
    'cssRules',
    'cssText',
    'cssValueType',
    'ctrlKey',
    'ctrlLeft',
    'cues',
    'cullFace',
    'currentNode',
    'currentPage',
    'currentScale',
    'currentScript',
    'currentSrc',
    'currentState',
    'currentStyle',
    'currentTarget',
    'currentTime',
    'currentTranslate',
    'currentView',
    'cursor',
    'curve',
    'customError',
    'cx',
    'cy',
    'd',
    'data',
    'dataFld',
    'dataFormatAs',
    'dataPageSize',
    'dataSrc',
    'dataTransfer',
    'database',
    'dataset',
    'dateTime',
    'db',
    'debug',
    'debuggerEnabled',
    'declare',
    'decode',
    'decodeAudioData',
    'decodeURI',
    'decodeURIComponent',
    'decodingInfo',
    'decrypt',
    'default',
    'defaultCharset',
    'defaultChecked',
    'defaultMuted',
    'defaultPlaybackRate',
    'defaultPrevented',
    'defaultSelected',
    'defaultStatus',
    'defaultURL',
    'defaultValue',
    'defaultView',
    'defaultstatus',
    'defer',
    'defineMagicFunction',
    'defineMagicVariable',
    'defineProperties',
    'defineProperty',
    'delayTime',
    'delete',
    'deleteBuffer',
    'deleteCaption',
    'deleteCell',
    'deleteContents',
    'deleteData',
    'deleteDatabase',
    'deleteFramebuffer',
    'deleteFromDocument',
    'deleteIndex',
    'deleteMedium',
    'deleteObjectStore',
    'deleteProgram',
    'deleteRenderbuffer',
    'deleteRow',
    'deleteRule',
    'deleteShader',
    'deleteTFoot',
    'deleteTHead',
    'deleteTexture',
    'deliverChangeRecords',
    'delivery',
    'deliveryInfo',
    'deliveryStatus',
    'deliveryTimestamp',
    'delta',
    'deltaMode',
    'deltaX',
    'deltaY',
    'deltaZ',
    'depthFunc',
    'depthMask',
    'depthRange',
    'deriveBits',
    'deriveKey',
    'description',
    'deselectAll',
    'designMode',
    'destination',
    'destinationURL',
    'detach',
    'detachEvent',
    'detachShader',
    'detail',
    'detune',
    'devicePixelRatio',
    'deviceXDPI',
    'deviceYDPI',
    'diffuseConstant',
    'digest',
    'dimensions',
    'dir',
    'dirName',
    'direction',
    'dirxml',
    'disable',
    'disableVertexAttribArray',
    'disabled',
    'dischargingTime',
    'disconnect',
    'dispatchEvent',
    'display',
    'distanceModel',
    'divisor',
    'djsapi',
    'djsproxy',
    'doImport',
    'doNotTrack',
    'doScroll',
    'doctype',
    'document',
    'documentElement',
    'documentMode',
    'documentURI',
    'dolphin',
    'dolphinGameCenter',
    'dolphininfo',
    'dolphinmeta',
    'domComplete',
    'domContentLoadedEventEnd',
    'domContentLoadedEventStart',
    'domInteractive',
    'domLoading',
    'domain',
    'domainLookupEnd',
    'domainLookupStart',
    'dominant-baseline',
    'dominantBaseline',
    'done',
    'dopplerFactor',
    'download',
    'dragDrop',
    'draggable',
    'drawArrays',
    'drawArraysInstancedANGLE',
    'drawCustomFocusRing',
    'drawElements',
    'drawElementsInstancedANGLE',
    'drawFocusIfNeeded',
    'drawImage',
    'drawImageFromRect',
    'drawSystemFocusRing',
    'drawingBufferHeight',
    'drawingBufferWidth',
    'dropEffect',
    'droppedVideoFrames',
    'dropzone',
    'dump',
    'duplicate',
    'duration',
    'dvname',
    'dvnum',
    'dx',
    'dy',
    'dynsrc',
    'e',
    'edgeMode',
    'effectAllowed',
    'elapsedTime',
    'elementFromPoint',
    'elements',
    'elevation',
    'ellipse',
    'email',
    'embeds',
    'empty',
    'empty-cells',
    'emptyCells',
    'enable',
    'enableBackground',
    'enableStyleSheetsForSet',
    'enableVertexAttribArray',
    'enabled',
    'enabledPlugin',
    'encode',
    'encodeURI',
    'encodeURIComponent',
    'encoding',
    'encrypt',
    'enctype',
    'end',
    'endContainer',
    'endElement',
    'endElementAt',
    'endOfStream',
    'endOffset',
    'endTime',
    'ended',
    'endsWith',
    'entities',
    'entries',
    'entryType',
    'enumerate',
    'enumerateEditable',
    'error',
    'errorCode',
    'escape',
    'eval',
    'evaluate',
    'event',
    'eventPhase',
    'every',
    'exception',
    'exec',
    'execCommand',
    'execCommandShowHelp',
    'execScript',
    'exitFullscreen',
    'exitPointerLock',
    'exp',
    'expand',
    'expandEntityReferences',
    'expando',
    'expansion',
    'expiryDate',
    'explicitOriginalTarget',
    'expm1',
    'exponent',
    'exponentialRampToValueAtTime',
    'exportKey',
    'extend',
    'extensions',
    'extentNode',
    'extentOffset',
    'external',
    'externalResourcesRequired',
    'extractContents',
    'extractable',
    'f',
    'face',
    'factoryReset',
    'fallback',
    'familyName',
    'farthestViewportElement',
    'fastSeek',
    'fatal',
    'fetch',
    'fetchStart',
    'fftSize',
    'fgColor',
    'fileCreatedDate',
    'fileHandle',
    'fileModifiedDate',
    'fileName',
    'fileSize',
    'fileUpdatedDate',
    'filename',
    'files',
    'fill',
    'fill-opacity',
    'fill-rule',
    'fillOpacity',
    'fillRect',
    'fillRule',
    'fillStyle',
    'fillText',
    'filter',
    'filterResX',
    'filterResY',
    'filterUnits',
    'filters',
    'finally',
    'find',
    'findIndex',
    'findRule',
    'findText',
    'finish',
    'fireEvent',
    'firstChild',
    'firstElementChild',
    'firstPage',
    'fixed',
    'flex',
    'flex-basis',
    'flex-direction',
    'flex-flow',
    'flex-grow',
    'flex-shrink',
    'flex-wrap',
    'flexBasis',
    'flexDirection',
    'flexFlow',
    'flexGrow',
    'flexShrink',
    'flexWrap',
    'flipX',
    'flipY',
    'float',
    'flood-color',
    'flood-opacity',
    'floodColor',
    'floodOpacity',
    'floor',
    'flush',
    'focus',
    'focusNode',
    'focusOffset',
    'font',
    'font-family',
    'font-feature-settings',
    'font-kerning',
    'font-language-override',
    'font-size',
    'font-size-adjust',
    'font-stretch',
    'font-style',
    'font-synthesis',
    'font-variant',
    'font-variant-alternates',
    'font-variant-caps',
    'font-variant-east-asian',
    'font-variant-ligatures',
    'font-variant-numeric',
    'font-variant-position',
    'font-weight',
    'fontFamily',
    'fontFeatureSettings',
    'fontKerning',
    'fontLanguageOverride',
    'fontSize',
    'fontSizeAdjust',
    'fontSmoothingEnabled',
    'fontStretch',
    'fontStyle',
    'fontSynthesis',
    'fontVariant',
    'fontVariantAlternates',
    'fontVariantCaps',
    'fontVariantEastAsian',
    'fontVariantLigatures',
    'fontVariantNumeric',
    'fontVariantPosition',
    'fontWeight',
    'fontcolor',
    'fonts',
    'fontsize',
    'for',
    'forEach',
    'forceRedraw',
    'form',
    'formAction',
    'formEnctype',
    'formMethod',
    'formNoValidate',
    'formTarget',
    'format',
    'formatToParts',
    'forms',
    'forward',
    'fr',
    'frame',
    'frameBorder',
    'frameElement',
    'frameSpacing',
    'framebufferRenderbuffer',
    'framebufferTexture2D',
    'frames',
    'freeSpace',
    'freeze',
    'frequency',
    'frequencyBinCount',
    'from',
    'fromCharCode',
    'fromCodePoint',
    'fromElement',
    'frontFace',
    'fround',
    'fullScreen',
    'fullscreenElement',
    'fullscreenEnabled',
    'fx',
    'fy',
    'gain',
    'gamepad',
    'gamma',
    'genderIdentity',
    'generateKey',
    'generateMipmap',
    'generateRequest',
    'geolocation',
    'gestureObject',
    'get',
    'getActiveAttrib',
    'getActiveUniform',
    'getAdjacentText',
    'getAll',
    'getAllResponseHeaders',
    'getAsFile',
    'getAsString',
    'getAttachedShaders',
    'getAttribLocation',
    'getAttribute',
    'getAttributeNS',
    'getAttributeNode',
    'getAttributeNodeNS',
    'getAudioTracks',
    'getBBox',
    'getBattery',
    'getBlob',
    'getBookmark',
    'getBoundingClientRect',
    'getBufferParameter',
    'getByteFrequencyData',
    'getByteTimeDomainData',
    'getCSSCanvasContext',
    'getCTM',
    'getCandidateWindowClientRect',
    'getChannelData',
    'getCharNumAtPosition',
    'getClientRect',
    'getClientRects',
    'getCompositionAlternatives',
    'getComputedStyle',
    'getComputedTextLength',
    'getConfiguration',
    'getContext',
    'getContextAttributes',
    'getCounterValue',
    'getCueAsHTML',
    'getCueById',
    'getCurrentPosition',
    'getCurrentTime',
    'getData',
    'getDatabaseNames',
    'getDate',
    'getDay',
    'getDefaultComputedStyle',
    'getDestinationInsertionPoints',
    'getDistributedNodes',
    'getEditable',
    'getElementById',
    'getElementsByClassName',
    'getElementsByName',
    'getElementsByTagName',
    'getElementsByTagNameNS',
    'getEnclosureList',
    'getEndPositionOfChar',
    'getEntries',
    'getEntriesByName',
    'getEntriesByType',
    'getError',
    'getExtension',
    'getExtentOfChar',
    'getFeature',
    'getFile',
    'getFloat32',
    'getFloat64',
    'getFloatFrequencyData',
    'getFloatTimeDomainData',
    'getFloatValue',
    'getFramebufferAttachmentParameter',
    'getFrequencyResponse',
    'getFullYear',
    'getGamepads',
    'getHours',
    'getImageData',
    'getInt16',
    'getInt32',
    'getInt8',
    'getIntersectionList',
    'getItem',
    'getItems',
    'getKey',
    'getLineDash',
    'getLocalStreams',
    'getMarks',
    'getMatchedCSSRules',
    'getMeasures',
    'getMetadata',
    'getMilliseconds',
    'getMinutes',
    'getModifierState',
    'getMonth',
    'getNamedItem',
    'getNamedItemNS',
    'getNotifier',
    'getNumberOfChars',
    'getOverrideHistoryNavigationMode',
    'getOverrideStyle',
    'getOwnPropertyDescriptor',
    'getOwnPropertyNames',
    'getOwnPropertySymbols',
    'getParameter',
    'getPathSegAtLength',
    'getPointAtLength',
    'getPreference',
    'getPreferenceDefault',
    'getPresentationAttribute',
    'getPreventDefault',
    'getProgramInfoLog',
    'getProgramParameter',
    'getPropertyCSSValue',
    'getPropertyPriority',
    'getPropertyShorthand',
    'getPropertyValue',
    'getPrototypeOf',
    'getRGBColorValue',
    'getRandomValues',
    'getRangeAt',
    'getReceivers',
    'getRectValue',
    'getRegistration',
    'getRemoteStreams',
    'getRenderbufferParameter',
    'getResponseHeader',
    'getRoot',
    'getRotationOfChar',
    'getSVGDocument',
    'getScreenCTM',
    'getSeconds',
    'getSelection',
    'getSenders',
    'getShaderInfoLog',
    'getShaderParameter',
    'getShaderPrecisionFormat',
    'getShaderSource',
    'getSimpleDuration',
    'getSiteIcons',
    'getSources',
    'getSpeculativeParserUrls',
    'getStartPositionOfChar',
    'getStartTime',
    'getStats',
    'getStorageUpdates',
    'getStreamById',
    'getStringValue',
    'getSubStringLength',
    'getSubscription',
    'getSupportedExtensions',
    'getTexParameter',
    'getTime',
    'getTimezoneOffset',
    'getTotalLength',
    'getTrackById',
    'getTracks',
    'getTransformToElement',
    'getUTCDate',
    'getUTCDay',
    'getUTCFullYear',
    'getUTCHours',
    'getUTCMilliseconds',
    'getUTCMinutes',
    'getUTCMonth',
    'getUTCSeconds',
    'getUint16',
    'getUint32',
    'getUint8',
    'getUniform',
    'getUniformLocation',
    'getUserMedia',
    'getValues',
    'getVarDate',
    'getVariableValue',
    'getVertexAttrib',
    'getVertexAttribOffset',
    'getVideoPlaybackQuality',
    'getVideoTracks',
    'getWakeLockState',
    'getYear',
    'givenName',
    'global',
    'globalAlpha',
    'globalCompositeOperation',
    'glyphOrientationHorizontal',
    'glyphOrientationVertical',
    'glyphRef',
    'go',
    'gradientTransform',
    'gradientUnits',
    'grammars',
    'green',
    'group',
    'groupCollapsed',
    'groupEnd',
    'hardwareConcurrency',
    'has',
    'hasAttribute',
    'hasAttributeNS',
    'hasAttributes',
    'hasChildNodes',
    'hasComposition',
    'hasExtension',
    'hasFeature',
    'hasFocus',
    'hasLayout',
    'hasOwnProperty',
    'hash',
    'head',
    'headers',
    'heading',
    'height',
    'hidden',
    'hide',
    'hideFocus',
    'high',
    'hint',
    'history',
    'honorificPrefix',
    'honorificSuffix',
    'horizontalOverflow',
    'host',
    'hostname',
    'href',
    'hreflang',
    'hspace',
    'html5TagCheckInerface',
    'htmlFor',
    'htmlText',
    'httpEquiv',
    'hwTimestamp',
    'hypot',
    'iccId',
    'iceConnectionState',
    'iceGatheringState',
    'icon',
    'id',
    'identifier',
    'identity',
    'ignoreBOM',
    'ignoreCase',
    'image-orientation',
    'image-rendering',
    'imageOrientation',
    'imageRendering',
    'images',
    'ime-mode',
    'imeMode',
    'implementation',
    'importKey',
    'importNode',
    'importStylesheet',
    'imports',
    'impp',
    'imul',
    'in1',
    'in2',
    'inBandMetadataTrackDispatchType',
    'inRange',
    'includes',
    'incremental',
    'indeterminate',
    'index',
    'indexNames',
    'indexOf',
    'indexedDB',
    'inertiaDestinationX',
    'inertiaDestinationY',
    'info',
    'init',
    'initAnimationEvent',
    'initBeforeLoadEvent',
    'initClipboardEvent',
    'initCloseEvent',
    'initCommandEvent',
    'initCompositionEvent',
    'initCustomEvent',
    'initData',
    'initDeviceMotionEvent',
    'initDeviceOrientationEvent',
    'initDragEvent',
    'initErrorEvent',
    'initEvent',
    'initFocusEvent',
    'initGestureEvent',
    'initHashChangeEvent',
    'initKeyEvent',
    'initKeyboardEvent',
    'initMSManipulationEvent',
    'initMessageEvent',
    'initMouseEvent',
    'initMouseScrollEvent',
    'initMouseWheelEvent',
    'initMutationEvent',
    'initNSMouseEvent',
    'initOverflowEvent',
    'initPageEvent',
    'initPageTransitionEvent',
    'initPointerEvent',
    'initPopStateEvent',
    'initProgressEvent',
    'initScrollAreaEvent',
    'initSimpleGestureEvent',
    'initStorageEvent',
    'initTextEvent',
    'initTimeEvent',
    'initTouchEvent',
    'initTransitionEvent',
    'initUIEvent',
    'initWebKitAnimationEvent',
    'initWebKitTransitionEvent',
    'initWebKitWheelEvent',
    'initWheelEvent',
    'initialTime',
    'initialize',
    'initiatorType',
    'inner',
    'innerHTML',
    'innerHeight',
    'innerText',
    'innerWidth',
    'input',
    'inputBuffer',
    'inputEncoding',
    'inputMethod',
    'insertAdjacentElement',
    'insertAdjacentHTML',
    'insertAdjacentText',
    'insertBefore',
    'insertCell',
    'insertData',
    'insertItemBefore',
    'insertNode',
    'insertRow',
    'insertRule',
    'instanceRoot',
    'intercept',
    'interimResults',
    'internalSubset',
    'intersectsNode',
    'interval',
    'invalidIteratorState',
    'inverse',
    'invertSelf',
    'is',
    'is2D',
    'isAlternate',
    'isArray',
    'isBingCurrentSearchDefault',
    'isBuffer',
    'isCandidateWindowVisible',
    'isChar',
    'isCollapsed',
    'isComposing',
    'isContentEditable',
    'isContentHandlerRegistered',
    'isContextLost',
    'isDefaultNamespace',
    'isDisabled',
    'isEnabled',
    'isEqual',
    'isEqualNode',
    'isExtensible',
    'isFinite',
    'isFramebuffer',
    'isFrozen',
    'isGenerator',
    'isId',
    'isInjected',
    'isInteger',
    'isMap',
    'isMultiLine',
    'isNaN',
    'isOpen',
    'isPointInFill',
    'isPointInPath',
    'isPointInRange',
    'isPointInStroke',
    'isPrefAlternate',
    'isPrimary',
    'isProgram',
    'isPropertyImplicit',
    'isProtocolHandlerRegistered',
    'isPrototypeOf',
    'isRenderbuffer',
    'isSafeInteger',
    'isSameNode',
    'isSealed',
    'isShader',
    'isSupported',
    'isTextEdit',
    'isTexture',
    'isTrusted',
    'isTypeSupported',
    'isView',
    'isolation',
    'italics',
    'item',
    'itemId',
    'itemProp',
    'itemRef',
    'itemScope',
    'itemType',
    'itemValue',
    'iterateNext',
    'iterator',
    'javaEnabled',
    'jobTitle',
    'join',
    'json',
    'justify-content',
    'justifyContent',
    'k1',
    'k2',
    'k3',
    'k4',
    'kernelMatrix',
    'kernelUnitLengthX',
    'kernelUnitLengthY',
    'kerning',
    'key',
    'keyCode',
    'keyFor',
    'keyIdentifier',
    'keyLightEnabled',
    'keyLocation',
    'keyPath',
    'keySystem',
    'keyText',
    'keyUsage',
    'keys',
    'keytype',
    'kind',
    'knee',
    'label',
    'labels',
    'lang',
    'language',
    'languages',
    'largeArcFlag',
    'lastChild',
    'lastElementChild',
    'lastEventId',
    'lastIndex',
    'lastIndexOf',
    'lastMatch',
    'lastMessageSubject',
    'lastMessageType',
    'lastModified',
    'lastModifiedDate',
    'lastPage',
    'lastParen',
    'lastState',
    'lastStyleSheetSet',
    'latitude',
    'layerX',
    'layerY',
    'layoutFlow',
    'layoutGrid',
    'layoutGridChar',
    'layoutGridLine',
    'layoutGridMode',
    'layoutGridType',
    'lbound',
    'left',
    'leftContext',
    'leftMargin',
    'length',
    'lengthAdjust',
    'lengthComputable',
    'letter-spacing',
    'letterSpacing',
    'level',
    'lighting-color',
    'lightingColor',
    'limitingConeAngle',
    'line',
    'line-height',
    'lineAlign',
    'lineBreak',
    'lineCap',
    'lineDashOffset',
    'lineHeight',
    'lineJoin',
    'lineNumber',
    'lineTo',
    'lineWidth',
    'linearRampToValueAtTime',
    'lineno',
    'link',
    'linkColor',
    'linkProgram',
    'links',
    'list',
    'list-style',
    'list-style-image',
    'list-style-position',
    'list-style-type',
    'listStyle',
    'listStyleImage',
    'listStylePosition',
    'listStyleType',
    'listener',
    'load',
    'loadEventEnd',
    'loadEventStart',
    'loadTimes',
    'loaded',
    'localDescription',
    'localName',
    'localStorage',
    'locale',
    'localeCompare',
    'location',
    'locationbar',
    'lock',
    'lockedFile',
    'log',
    'log10',
    'log1p',
    'log2',
    'logicalXDPI',
    'logicalYDPI',
    'longDesc',
    'longitude',
    'lookupNamespaceURI',
    'lookupPrefix',
    'loop',
    'loopEnd',
    'loopStart',
    'looping',
    'low',
    'lower',
    'lowerBound',
    'lowerOpen',
    'lowsrc',
    'm11',
    'm12',
    'm13',
    'm14',
    'm21',
    'm22',
    'm23',
    'm24',
    'm31',
    'm32',
    'm33',
    'm34',
    'm41',
    'm42',
    'm43',
    'm44',
    'manifest',
    'map',
    'mapping',
    'margin',
    'margin-bottom',
    'margin-left',
    'margin-right',
    'margin-top',
    'marginBottom',
    'marginHeight',
    'marginLeft',
    'marginRight',
    'marginTop',
    'marginWidth',
    'mark',
    'marker',
    'marker-end',
    'marker-mid',
    'marker-offset',
    'marker-start',
    'markerEnd',
    'markerHeight',
    'markerMid',
    'markerOffset',
    'markerStart',
    'markerUnits',
    'markerWidth',
    'marks',
    'mask',
    'mask-type',
    'maskContentUnits',
    'maskType',
    'maskUnits',
    'match',
    'matchMedia',
    'matchMedium',
    'matches',
    'matrix',
    'matrixTransform',
    'max',
    'max-height',
    'max-width',
    'maxAlternatives',
    'maxChannelCount',
    'maxConnectionsPerServer',
    'maxDecibels',
    'maxDistance',
    'maxHeight',
    'maxLength',
    'maxTouchPoints',
    'maxValue',
    'maxWidth',
    'measure',
    'measureText',
    'media',
    'mediaCapabilities',
    'mediaDevices',
    'mediaElement',
    'mediaGroup',
    'mediaKeys',
    'mediaText',
    'meetOrSlice',
    'memory',
    'menubar',
    'mergeAttributes',
    'message',
    'messageClass',
    'messageHandlers',
    'metaKey',
    'method',
    'mimeType',
    'mimeTypes',
    'min',
    'min-height',
    'min-width',
    'minDecibels',
    'minHeight',
    'minValue',
    'minWidth',
    'miterLimit',
    'mix-blend-mode',
    'mixBlendMode',
    'mode',
    'modify',
    'mount',
    'move',
    'moveBy',
    'moveEnd',
    'moveFirst',
    'moveFocusDown',
    'moveFocusLeft',
    'moveFocusRight',
    'moveFocusUp',
    'moveNext',
    'moveRow',
    'moveStart',
    'moveTo',
    'moveToBookmark',
    'moveToElementText',
    'moveToPoint',
    'mozAdd',
    'mozAnimationStartTime',
    'mozAnon',
    'mozApps',
    'mozAudioCaptured',
    'mozAudioChannelType',
    'mozAutoplayEnabled',
    'mozCancelAnimationFrame',
    'mozCancelFullScreen',
    'mozCancelRequestAnimationFrame',
    'mozCaptureStream',
    'mozCaptureStreamUntilEnded',
    'mozClearDataAt',
    'mozContact',
    'mozContacts',
    'mozCreateFileHandle',
    'mozCurrentTransform',
    'mozCurrentTransformInverse',
    'mozCursor',
    'mozDash',
    'mozDashOffset',
    'mozDecodedFrames',
    'mozExitPointerLock',
    'mozFillRule',
    'mozFragmentEnd',
    'mozFrameDelay',
    'mozFullScreen',
    'mozFullScreenElement',
    'mozFullScreenEnabled',
    'mozGetAll',
    'mozGetAllKeys',
    'mozGetAsFile',
    'mozGetDataAt',
    'mozGetMetadata',
    'mozGetUserMedia',
    'mozHasAudio',
    'mozHasItem',
    'mozHidden',
    'mozImageSmoothingEnabled',
    'mozIndexedDB',
    'mozInnerScreenX',
    'mozInnerScreenY',
    'mozInputSource',
    'mozIsTextField',
    'mozItem',
    'mozItemCount',
    'mozItems',
    'mozLength',
    'mozLockOrientation',
    'mozMatchesSelector',
    'mozMovementX',
    'mozMovementY',
    'mozOpaque',
    'mozOrientation',
    'mozPaintCount',
    'mozPaintedFrames',
    'mozParsedFrames',
    'mozPay',
    'mozPointerLockElement',
    'mozPresentedFrames',
    'mozPreservesPitch',
    'mozPressure',
    'mozPrintCallback',
    'mozRTCIceCandidate',
    'mozRTCPeerConnection',
    'mozRTCSessionDescription',
    'mozRemove',
    'mozRequestAnimationFrame',
    'mozRequestFullScreen',
    'mozRequestPointerLock',
    'mozSetDataAt',
    'mozSetImageElement',
    'mozSourceNode',
    'mozSrcObject',
    'mozSystem',
    'mozTCPSocket',
    'mozTextStyle',
    'mozTypesAt',
    'mozUnlockOrientation',
    'mozUserCancelled',
    'mozVisibilityState',
    'msAnimation',
    'msAnimationDelay',
    'msAnimationDirection',
    'msAnimationDuration',
    'msAnimationFillMode',
    'msAnimationIterationCount',
    'msAnimationName',
    'msAnimationPlayState',
    'msAnimationStartTime',
    'msAnimationTimingFunction',
    'msBackfaceVisibility',
    'msBlockProgression',
    'msCSSOMElementFloatMetrics',
    'msCaching',
    'msCachingEnabled',
    'msCancelRequestAnimationFrame',
    'msCapsLockWarningOff',
    'msClearImmediate',
    'msClose',
    'msContentZoomChaining',
    'msContentZoomFactor',
    'msContentZoomLimit',
    'msContentZoomLimitMax',
    'msContentZoomLimitMin',
    'msContentZoomSnap',
    'msContentZoomSnapPoints',
    'msContentZoomSnapType',
    'msContentZooming',
    'msConvertURL',
    'msCrypto',
    'msDoNotTrack',
    'msElementsFromPoint',
    'msElementsFromRect',
    'msExitFullscreen',
    'msExtendedCode',
    'msFillRule',
    'msFirstPaint',
    'msFlex',
    'msFlexAlign',
    'msFlexDirection',
    'msFlexFlow',
    'msFlexItemAlign',
    'msFlexLinePack',
    'msFlexNegative',
    'msFlexOrder',
    'msFlexPack',
    'msFlexPositive',
    'msFlexPreferredSize',
    'msFlexWrap',
    'msFlowFrom',
    'msFlowInto',
    'msFontFeatureSettings',
    'msFullscreenElement',
    'msFullscreenEnabled',
    'msGetInputContext',
    'msGetRegionContent',
    'msGetUntransformedBounds',
    'msGraphicsTrustStatus',
    'msGridColumn',
    'msGridColumnAlign',
    'msGridColumnSpan',
    'msGridColumns',
    'msGridRow',
    'msGridRowAlign',
    'msGridRowSpan',
    'msGridRows',
    'msHidden',
    'msHighContrastAdjust',
    'msHyphenateLimitChars',
    'msHyphenateLimitLines',
    'msHyphenateLimitZone',
    'msHyphens',
    'msImageSmoothingEnabled',
    'msImeAlign',
    'msIndexedDB',
    'msInterpolationMode',
    'msIsStaticHTML',
    'msKeySystem',
    'msKeys',
    'msLaunchUri',
    'msLockOrientation',
    'msManipulationViewsEnabled',
    'msMatchMedia',
    'msMatchesSelector',
    'msMaxTouchPoints',
    'msOrientation',
    'msOverflowStyle',
    'msPerspective',
    'msPerspectiveOrigin',
    'msPlayToDisabled',
    'msPlayToPreferredSourceUri',
    'msPlayToPrimary',
    'msPointerEnabled',
    'msRegionOverflow',
    'msReleasePointerCapture',
    'msRequestAnimationFrame',
    'msRequestFullscreen',
    'msSaveBlob',
    'msSaveOrOpenBlob',
    'msScrollChaining',
    'msScrollLimit',
    'msScrollLimitXMax',
    'msScrollLimitXMin',
    'msScrollLimitYMax',
    'msScrollLimitYMin',
    'msScrollRails',
    'msScrollSnapPointsX',
    'msScrollSnapPointsY',
    'msScrollSnapType',
    'msScrollSnapX',
    'msScrollSnapY',
    'msScrollTranslation',
    'msSetImmediate',
    'msSetMediaKeys',
    'msSetPointerCapture',
    'msTextCombineHorizontal',
    'msTextSizeAdjust',
    'msToBlob',
    'msTouchAction',
    'msTouchSelect',
    'msTraceAsyncCallbackCompleted',
    'msTraceAsyncCallbackStarting',
    'msTraceAsyncOperationCompleted',
    'msTraceAsyncOperationStarting',
    'msTransform',
    'msTransformOrigin',
    'msTransformStyle',
    'msTransition',
    'msTransitionDelay',
    'msTransitionDuration',
    'msTransitionProperty',
    'msTransitionTimingFunction',
    'msUnlockOrientation',
    'msUpdateAsyncCallbackRelation',
    'msUserSelect',
    'msVisibilityState',
    'msWrapFlow',
    'msWrapMargin',
    'msWrapThrough',
    'msWriteProfilerMark',
    'msZoom',
    'msZoomTo',
    'mt',
    'multiEntry',
    'multiSelectionObj',
    'multiline',
    'multiple',
    'multiply',
    'multiplySelf',
    'mutableFile',
    'muted',
    'n',
    'name',
    'nameProp',
    'namedItem',
    'namedRecordset',
    'names',
    'namespaceURI',
    'namespaces',
    'naturalHeight',
    'naturalWidth',
    'navigate',
    'navigation',
    'navigationMode',
    'navigationStart',
    'navigator',
    'near',
    'nearestViewportElement',
    'negative',
    'netscape',
    'networkState',
    'newScale',
    'newTranslate',
    'newURL',
    'newValue',
    'newValueSpecifiedUnits',
    'newVersion',
    'newhome',
    'next',
    'nextElementSibling',
    'nextNode',
    'nextPage',
    'nextSibling',
    'nickname',
    'noHref',
    'noResize',
    'noShade',
    'noValidate',
    'noWrap',
    'nodeName',
    'nodeType',
    'nodeValue',
    'normalize',
    'normalizedPathSegList',
    'notationName',
    'notations',
    'note',
    'noteGrainOn',
    'noteOff',
    'noteOn',
    'now',
    'numOctaves',
    'number',
    'numberOfChannels',
    'numberOfInputs',
    'numberOfItems',
    'numberOfOutputs',
    'numberValue',
    'oMatchesSelector',
    'object',
    'object-fit',
    'object-position',
    'objectFit',
    'objectPosition',
    'objectStore',
    'objectStoreNames',
    'observe',
    'of',
    'offscreenBuffering',
    'offset',
    'offsetHeight',
    'offsetLeft',
    'offsetNode',
    'offsetParent',
    'offsetTop',
    'offsetWidth',
    'offsetX',
    'offsetY',
    'ok',
    'oldURL',
    'oldValue',
    'oldVersion',
    'olderShadowRoot',
    'onLine',
    'onabort',
    'onactivate',
    'onactive',
    'onaddstream',
    'onaddtrack',
    'onafterprint',
    'onafterscriptexecute',
    'onafterupdate',
    'onaudioend',
    'onaudioprocess',
    'onaudiostart',
    'onautocomplete',
    'onautocompleteerror',
    'onbeforeactivate',
    'onbeforecopy',
    'onbeforecut',
    'onbeforedeactivate',
    'onbeforeeditfocus',
    'onbeforepaste',
    'onbeforeprint',
    'onbeforescriptexecute',
    'onbeforeunload',
    'onbeforeupdate',
    'onblocked',
    'onblur',
    'onbounce',
    'onboundary',
    'oncached',
    'oncancel',
    'oncandidatewindowhide',
    'oncandidatewindowshow',
    'oncandidatewindowupdate',
    'oncanplay',
    'oncanplaythrough',
    'once',
    'oncellchange',
    'onchange',
    'onchargingchange',
    'onchargingtimechange',
    'onchecking',
    'onclick',
    'onclose',
    'oncompassneedscalibration',
    'oncomplete',
    'oncontextmenu',
    'oncontrolselect',
    'oncopy',
    'oncuechange',
    'oncut',
    'ondataavailable',
    'ondatachannel',
    'ondatasetchanged',
    'ondatasetcomplete',
    'ondblclick',
    'ondeactivate',
    'ondevicelight',
    'ondevicemotion',
    'ondeviceorientation',
    'ondeviceproximity',
    'ondischargingtimechange',
    'ondisplay',
    'ondownloading',
    'ondrag',
    'ondragend',
    'ondragenter',
    'ondragleave',
    'ondragover',
    'ondragstart',
    'ondrop',
    'ondurationchange',
    'onemptied',
    'onencrypted',
    'onend',
    'onended',
    'onenter',
    'onerror',
    'onerrorupdate',
    'onexit',
    'onfilterchange',
    'onfinish',
    'onfocus',
    'onfocusin',
    'onfocusout',
    'onfullscreenchange',
    'onfullscreenerror',
    'ongesturechange',
    'ongestureend',
    'ongesturestart',
    'ongotpointercapture',
    'onhashchange',
    'onhelp',
    'onicecandidate',
    'oniceconnectionstatechange',
    'oninactive',
    'oninput',
    'oninvalid',
    'onkeydown',
    'onkeypress',
    'onkeyup',
    'onlanguagechange',
    'onlayoutcomplete',
    'onlevelchange',
    'onload',
    'onloadeddata',
    'onloadedmetadata',
    'onloadend',
    'onloadstart',
    'onlosecapture',
    'onlostpointercapture',
    'only',
    'onmark',
    'onmessage',
    'onmousedown',
    'onmouseenter',
    'onmouseleave',
    'onmousemove',
    'onmouseout',
    'onmouseover',
    'onmouseup',
    'onmousewheel',
    'onmove',
    'onmoveend',
    'onmovestart',
    'onmozfullscreenchange',
    'onmozfullscreenerror',
    'onmozorientationchange',
    'onmozpointerlockchange',
    'onmozpointerlockerror',
    'onmscontentzoom',
    'onmsfullscreenchange',
    'onmsfullscreenerror',
    'onmsgesturechange',
    'onmsgesturedoubletap',
    'onmsgestureend',
    'onmsgesturehold',
    'onmsgesturestart',
    'onmsgesturetap',
    'onmsgotpointercapture',
    'onmsinertiastart',
    'onmslostpointercapture',
    'onmsmanipulationstatechanged',
    'onmsneedkey',
    'onmsorientationchange',
    'onmspointercancel',
    'onmspointerdown',
    'onmspointerenter',
    'onmspointerhover',
    'onmspointerleave',
    'onmspointermove',
    'onmspointerout',
    'onmspointerover',
    'onmspointerup',
    'onmssitemodejumplistitemremoved',
    'onmsthumbnailclick',
    'onnegotiationneeded',
    'onnomatch',
    'onnoupdate',
    'onobsolete',
    'onoffline',
    'ononline',
    'onopen',
    'onorientationchange',
    'onpagechange',
    'onpagehide',
    'onpageshow',
    'onpaste',
    'onpause',
    'onplay',
    'onplaying',
    'onpluginstreamstart',
    'onpointercancel',
    'onpointerdown',
    'onpointerenter',
    'onpointerleave',
    'onpointerlockchange',
    'onpointerlockerror',
    'onpointermove',
    'onpointerout',
    'onpointerover',
    'onpointerup',
    'onpopstate',
    'onprogress',
    'onpropertychange',
    'onratechange',
    'onreadystatechange',
    'onremovestream',
    'onremovetrack',
    'onreset',
    'onresize',
    'onresizeend',
    'onresizestart',
    'onresourcetimingbufferfull',
    'onresult',
    'onresume',
    'onrowenter',
    'onrowexit',
    'onrowsdelete',
    'onrowsinserted',
    'onscroll',
    'onsearch',
    'onseeked',
    'onseeking',
    'onselect',
    'onselectionchange',
    'onselectstart',
    'onshow',
    'onsignalingstatechange',
    'onsoundend',
    'onsoundstart',
    'onspeechend',
    'onspeechstart',
    'onstalled',
    'onstart',
    'onstatechange',
    'onstop',
    'onstorage',
    'onstoragecommit',
    'onsubmit',
    'onsuccess',
    'onsuspend',
    'ontextinput',
    'ontimeout',
    'ontimeupdate',
    'ontoggle',
    'ontouchcancel',
    'ontouchend',
    'ontouchmove',
    'ontouchstart',
    'ontransitionend',
    'onunload',
    'onupdateready',
    'onupgradeneeded',
    'onuserproximity',
    'onversionchange',
    'onvoiceschanged',
    'onvolumechange',
    'onwaiting',
    'onwarning',
    'onwebkitanimationend',
    'onwebkitanimationiteration',
    'onwebkitanimationstart',
    'onwebkitcurrentplaybacktargetiswirelesschanged',
    'onwebkitfullscreenchange',
    'onwebkitfullscreenerror',
    'onwebkitkeyadded',
    'onwebkitkeyerror',
    'onwebkitkeymessage',
    'onwebkitneedkey',
    'onwebkitorientationchange',
    'onwebkitplaybacktargetavailabilitychanged',
    'onwebkitpointerlockchange',
    'onwebkitpointerlockerror',
    'onwebkitresourcetimingbufferfull',
    'onwebkittransitionend',
    'onwheel',
    'onzoom',
    'opacity',
    'open',
    'openCursor',
    'openDatabase',
    'openKeyCursor',
    'opener',
    'opera',
    'operationType',
    'operator',
    'opr',
    'optimum',
    'options',
    'order',
    'orderX',
    'orderY',
    'ordered',
    'org',
    'orient',
    'orientAngle',
    'orientType',
    'orientation',
    'origin',
    'originalTarget',
    'orphans',
    'oscpu',
    'outerHTML',
    'outerHeight',
    'outerText',
    'outerWidth',
    'outline',
    'outline-color',
    'outline-offset',
    'outline-style',
    'outline-width',
    'outlineColor',
    'outlineOffset',
    'outlineStyle',
    'outlineWidth',
    'outputBuffer',
    'overflow',
    'overflow-x',
    'overflow-y',
    'overflowX',
    'overflowY',
    'overrideMimeType',
    'oversample',
    'ownerDocument',
    'ownerElement',
    'ownerNode',
    'ownerRule',
    'ownerSVGElement',
    'owningElement',
    'p1',
    'p2',
    'p3',
    'p4',
    'pad',
    'padding',
    'padding-bottom',
    'padding-left',
    'padding-right',
    'padding-top',
    'paddingBottom',
    'paddingLeft',
    'paddingRight',
    'paddingTop',
    'page',
    'page-break-after',
    'page-break-before',
    'page-break-inside',
    'pageBreakAfter',
    'pageBreakBefore',
    'pageBreakInside',
    'pageCount',
    'pageX',
    'pageXOffset',
    'pageY',
    'pageYOffset',
    'pages',
    'paint-order',
    'paintOrder',
    'paintRequests',
    'paintType',
    'palette',
    'panningModel',
    'parent',
    'parentElement',
    'parentNode',
    'parentRule',
    'parentStyleSheet',
    'parentTextEdit',
    'parentWindow',
    'parse',
    'parseFloat',
    'parseFromString',
    'parseInt',
    'participants',
    'passive',
    'password',
    'pasteHTML',
    'path',
    'pathLength',
    'pathSegList',
    'pathSegType',
    'pathSegTypeAsLetter',
    'pathname',
    'pattern',
    'patternContentUnits',
    'patternMismatch',
    'patternTransform',
    'patternUnits',
    'pause',
    'pauseAnimations',
    'pauseOnExit',
    'paused',
    'pending',
    'performance',
    'permission',
    'persisted',
    'personalbar',
    'perspective',
    'perspective-origin',
    'perspectiveOrigin',
    'phoneticFamilyName',
    'phoneticGivenName',
    'photo',
    'ping',
    'pitch',
    'pixelBottom',
    'pixelDepth',
    'pixelHeight',
    'pixelLeft',
    'pixelRight',
    'pixelStorei',
    'pixelTop',
    'pixelUnitToMillimeterX',
    'pixelUnitToMillimeterY',
    'pixelWidth',
    'placeholder',
    'platform',
    'play',
    'playbackRate',
    'playbackState',
    'playbackTime',
    'played',
    'plugins',
    'pluginspage',
    'pname',
    'pointer-events',
    'pointerBeforeReferenceNode',
    'pointerEnabled',
    'pointerEvents',
    'pointerId',
    'pointerLockElement',
    'pointerType',
    'points',
    'pointsAtX',
    'pointsAtY',
    'pointsAtZ',
    'polygonOffset',
    'pop',
    'popupWindowFeatures',
    'popupWindowName',
    'popupWindowURI',
    'port',
    'port1',
    'port2',
    'ports',
    'posBottom',
    'posHeight',
    'posLeft',
    'posRight',
    'posTop',
    'posWidth',
    'position',
    'positionAlign',
    'postError',
    'postMessage',
    'poster',
    'pow',
    'powerOff',
    'preMultiplySelf',
    'precision',
    'preferredStyleSheetSet',
    'preferredStylesheetSet',
    'prefix',
    'preload',
    'prepend',
    'preserveAlpha',
    'preserveAspectRatio',
    'preserveAspectRatioString',
    'pressed',
    'pressure',
    'prevValue',
    'preventDefault',
    'preventExtensions',
    'previousElementSibling',
    'previousNode',
    'previousPage',
    'previousScale',
    'previousSibling',
    'previousTranslate',
    'primaryKey',
    'primitiveType',
    'primitiveUnits',
    'principals',
    'print',
    'privateKey',
    'probablySupportsContext',
    'process',
    'processIceMessage',
    'product',
    'productSub',
    'profile',
    'profileEnd',
    'profiles',
    'prompt',
    'properties',
    'propertyIsEnumerable',
    'propertyName',
    'protocol',
    'protocolLong',
    'prototype',
    'pseudoClass',
    'pseudoElement',
    'publicId',
    'publicKey',
    'published',
    'push',
    'pushNotification',
    'pushState',
    'put',
    'putImageData',
    'quadraticCurveTo',
    'qualifier',
    'queryCommandEnabled',
    'queryCommandIndeterm',
    'queryCommandState',
    'queryCommandSupported',
    'queryCommandText',
    'queryCommandValue',
    'querySelector',
    'querySelectorAll',
    'quote',
    'quotes',
    'r',
    'r1',
    'r2',
    'race',
    'radiogroup',
    'radiusX',
    'radiusY',
    'random',
    'range',
    'rangeCount',
    'rangeMax',
    'rangeMin',
    'rangeOffset',
    'rangeOverflow',
    'rangeParent',
    'rangeUnderflow',
    'rate',
    'ratio',
    'raw',
    'read',
    'readAsArrayBuffer',
    'readAsBinaryString',
    'readAsBlob',
    'readAsDataURL',
    'readAsText',
    'readOnly',
    'readPixels',
    'readReportRequested',
    'readyState',
    'reason',
    'reboot',
    'receiver',
    'receivers',
    'recordNumber',
    'recordset',
    'rect',
    'red',
    'redirectCount',
    'redirectEnd',
    'redirectStart',
    'reduce',
    'reduceRight',
    'reduction',
    'refDistance',
    'refX',
    'refY',
    'referenceNode',
    'referrer',
    'refresh',
    'region',
    'regionAnchorX',
    'regionAnchorY',
    'regionId',
    'regions',
    'register',
    'registerContentHandler',
    'registerElement',
    'registerProtocolHandler',
    'reject',
    'rel',
    'relList',
    'relatedNode',
    'relatedTarget',
    'release',
    'releaseCapture',
    'releaseEvents',
    'releasePointerCapture',
    'releaseShaderCompiler',
    'reliable',
    'reload',
    'remainingSpace',
    'remoteDescription',
    'remove',
    'removeAllRanges',
    'removeAttribute',
    'removeAttributeNS',
    'removeAttributeNode',
    'removeBehavior',
    'removeChild',
    'removeCue',
    'removeEventListener',
    'removeFilter',
    'removeImport',
    'removeItem',
    'removeListener',
    'removeNamedItem',
    'removeNamedItemNS',
    'removeNode',
    'removeParameter',
    'removeProperty',
    'removeRange',
    'removeRegion',
    'removeRule',
    'removeSiteSpecificTrackingException',
    'removeSourceBuffer',
    'removeStream',
    'removeTrack',
    'removeVariable',
    'removeWakeLockListener',
    'removeWebWideTrackingException',
    'removedNodes',
    'renderbufferStorage',
    'renderedBuffer',
    'renderingMode',
    'repeat',
    'replace',
    'replaceAdjacentText',
    'replaceChild',
    'replaceData',
    'replaceId',
    'replaceItem',
    'replaceNode',
    'replaceState',
    'replaceTrack',
    'replaceWholeText',
    'reportValidity',
    'requestAnimationFrame',
    'requestAutocomplete',
    'requestData',
    'requestFullscreen',
    'requestMediaKeySystemAccess',
    'requestPermission',
    'requestPointerLock',
    'requestStart',
    'requestingWindow',
    'required',
    'requiredExtensions',
    'requiredFeatures',
    'reset',
    'resetTransform',
    'resize',
    'resizeBy',
    'resizeTo',
    'resolve',
    'response',
    'responseBody',
    'responseEnd',
    'responseStart',
    'responseText',
    'responseType',
    'responseURL',
    'responseXML',
    'restore',
    'result',
    'resultType',
    'resume',
    'returnValue',
    'rev',
    'reverse',
    'reversed',
    'revocable',
    'revokeObjectURL',
    'rgbColor',
    'right',
    'rightContext',
    'rightMargin',
    'rolloffFactor',
    'root',
    'rootElement',
    'rotate',
    'rotateAxisAngle',
    'rotateAxisAngleSelf',
    'rotateFromVector',
    'rotateFromVectorSelf',
    'rotateSelf',
    'rotation',
    'rotationRate',
    'round',
    'rowIndex',
    'rowSpan',
    'rows',
    'rubyAlign',
    'rubyOverhang',
    'rubyPosition',
    'rules',
    'runtime',
    'runtimeStyle',
    'rx',
    'ry',
    'safari',
    'sampleCoverage',
    'sampleRate',
    'sandbox',
    'save',
    'scale',
    'scale3d',
    'scale3dSelf',
    'scaleNonUniform',
    'scaleNonUniformSelf',
    'scaleSelf',
    'scheme',
    'scissor',
    'scope',
    'scopeName',
    'scoped',
    'screen',
    'screenBrightness',
    'screenEnabled',
    'screenLeft',
    'screenPixelToMillimeterX',
    'screenPixelToMillimeterY',
    'screenTop',
    'screenX',
    'screenY',
    'scripts',
    'scroll',
    'scroll-behavior',
    'scrollAmount',
    'scrollBehavior',
    'scrollBy',
    'scrollByLines',
    'scrollByPages',
    'scrollDelay',
    'scrollHeight',
    'scrollIntoView',
    'scrollIntoViewIfNeeded',
    'scrollLeft',
    'scrollLeftMax',
    'scrollMaxX',
    'scrollMaxY',
    'scrollTo',
    'scrollTop',
    'scrollTopMax',
    'scrollWidth',
    'scrollX',
    'scrollY',
    'scrollbar3dLightColor',
    'scrollbarArrowColor',
    'scrollbarBaseColor',
    'scrollbarDarkShadowColor',
    'scrollbarFaceColor',
    'scrollbarHighlightColor',
    'scrollbarShadowColor',
    'scrollbarTrackColor',
    'scrollbars',
    'scrolling',
    'sdp',
    'sdpMLineIndex',
    'sdpMid',
    'seal',
    'search',
    'searchBox',
    'searchBoxJavaBridge_',
    'searchParams',
    'sectionRowIndex',
    'secureConnectionStart',
    'security',
    'seed',
    'seekable',
    'seeking',
    'select',
    'selectAllChildren',
    'selectNode',
    'selectNodeContents',
    'selectNodes',
    'selectSingleNode',
    'selectSubString',
    'selected',
    'selectedIndex',
    'selectedOptions',
    'selectedStyleSheetSet',
    'selectedStylesheetSet',
    'selection',
    'selectionDirection',
    'selectionEnd',
    'selectionStart',
    'selector',
    'selectorText',
    'self',
    'send',
    'sendAsBinary',
    'sendBeacon',
    'sender',
    'sentTimestamp',
    'separator',
    'serializeToString',
    'serviceWorker',
    'sessionId',
    'sessionStorage',
    'set',
    'setActive',
    'setAlpha',
    'setAttribute',
    'setAttributeNS',
    'setAttributeNode',
    'setAttributeNodeNS',
    'setBaseAndExtent',
    'setBingCurrentSearchDefault',
    'setCapture',
    'setColor',
    'setCompositeOperation',
    'setCurrentTime',
    'setCustomValidity',
    'setData',
    'setDate',
    'setDragImage',
    'setEnd',
    'setEndAfter',
    'setEndBefore',
    'setEndPoint',
    'setFillColor',
    'setFilterRes',
    'setFloat32',
    'setFloat64',
    'setFloatValue',
    'setFullYear',
    'setHours',
    'setImmediate',
    'setInt16',
    'setInt32',
    'setInt8',
    'setInterval',
    'setItem',
    'setLineCap',
    'setLineDash',
    'setLineJoin',
    'setLineWidth',
    'setLocalDescription',
    'setMatrix',
    'setMatrixValue',
    'setMediaKeys',
    'setMilliseconds',
    'setMinutes',
    'setMiterLimit',
    'setMonth',
    'setNamedItem',
    'setNamedItemNS',
    'setNonUserCodeExceptions',
    'setOrientToAngle',
    'setOrientToAuto',
    'setOrientation',
    'setOverrideHistoryNavigationMode',
    'setPaint',
    'setParameter',
    'setPeriodicWave',
    'setPointerCapture',
    'setPosition',
    'setPreference',
    'setProperty',
    'setPrototypeOf',
    'setRGBColor',
    'setRGBColorICCColor',
    'setRadius',
    'setRangeText',
    'setRemoteDescription',
    'setRequestHeader',
    'setResizable',
    'setResourceTimingBufferSize',
    'setRotate',
    'setScale',
    'setSeconds',
    'setSelectionRange',
    'setServerCertificate',
    'setShadow',
    'setSkewX',
    'setSkewY',
    'setStart',
    'setStartAfter',
    'setStartBefore',
    'setStdDeviation',
    'setStringValue',
    'setStrokeColor',
    'setSuggestResult',
    'setTargetAtTime',
    'setTargetValueAtTime',
    'setTime',
    'setTimeout',
    'setTransform',
    'setTranslate',
    'setUTCDate',
    'setUTCFullYear',
    'setUTCHours',
    'setUTCMilliseconds',
    'setUTCMinutes',
    'setUTCMonth',
    'setUTCSeconds',
    'setUint16',
    'setUint32',
    'setUint8',
    'setUri',
    'setValueAtTime',
    'setValueCurveAtTime',
    'setVariable',
    'setVelocity',
    'setVersion',
    'setYear',
    'settingName',
    'settingValue',
    'sex',
    'shaderSource',
    'shadowBlur',
    'shadowColor',
    'shadowOffsetX',
    'shadowOffsetY',
    'shadowRoot',
    'shape',
    'shape-rendering',
    'shapeRendering',
    'sheet',
    'shift',
    'shiftKey',
    'shiftLeft',
    'show',
    'showHelp',
    'showModal',
    'showModalDialog',
    'showModelessDialog',
    'showNotification',
    'sidebar',
    'sign',
    'signalingState',
    'sin',
    'singleNodeValue',
    'sinh',
    'size',
    'sizeToContent',
    'sizes',
    'skewX',
    'skewXSelf',
    'skewY',
    'skewYSelf',
    'slice',
    'slope',
    'small',
    'smil',
    'smooth',
    'smoothingTimeConstant',
    'snapToLines',
    'snapshotItem',
    'snapshotLength',
    'some',
    'sort',
    'source',
    'sourceBuffer',
    'sourceBuffers',
    'sourceIndex',
    'spacing',
    'span',
    'speakAs',
    'speaking',
    'specified',
    'specularConstant',
    'specularExponent',
    'speechSynthesis',
    'speed',
    'speedOfSound',
    'spellcheck',
    'splice',
    'split',
    'splitText',
    'spreadMethod',
    'sqrt',
    'src',
    'srcElement',
    'srcFilter',
    'srcUrn',
    'srcdoc',
    'srclang',
    'srcset',
    'stack',
    'stackTraceLimit',
    'stacktrace',
    'standalone',
    'standby',
    'start',
    'startContainer',
    'startIce',
    'startOffset',
    'startRendering',
    'startTime',
    'startsWith',
    'state',
    'status',
    'statusMessage',
    'statusText',
    'statusbar',
    'stdDeviationX',
    'stdDeviationY',
    'stencilFunc',
    'stencilFuncSeparate',
    'stencilMask',
    'stencilMaskSeparate',
    'stencilOp',
    'stencilOpSeparate',
    'step',
    'stepDown',
    'stepMismatch',
    'stepUp',
    'sticky',
    'stitchTiles',
    'stop',
    'stop-color',
    'stop-opacity',
    'stopColor',
    'stopImmediatePropagation',
    'stopOpacity',
    'stopPropagation',
    'storageArea',
    'storageName',
    'storageStatus',
    'storeSiteSpecificTrackingException',
    'storeWebWideTrackingException',
    'stpVersion',
    'stream',
    'strike',
    'stringValue',
    'stringify',
    'stroke',
    'stroke-dasharray',
    'stroke-dashoffset',
    'stroke-linecap',
    'stroke-linejoin',
    'stroke-miterlimit',
    'stroke-opacity',
    'stroke-width',
    'strokeDasharray',
    'strokeDashoffset',
    'strokeLinecap',
    'strokeLinejoin',
    'strokeMiterlimit',
    'strokeOpacity',
    'strokeRect',
    'strokeStyle',
    'strokeText',
    'strokeWidth',
    'style',
    'styleFloat',
    'styleMedia',
    'styleSheet',
    'styleSheetSets',
    'styleSheets',
    'sub',
    'subarray',
    'subject',
    'submit',
    'subscribe',
    'substr',
    'substring',
    'substringData',
    'subtle',
    'subtree',
    'suffix',
    'suffixes',
    'summary',
    'sup',
    'supports',
    'surfaceScale',
    'surroundContents',
    'suspend',
    'suspendRedraw',
    'swapCache',
    'swapNode',
    'sweepFlag',
    'symbols',
    'system',
    'systemCode',
    'systemId',
    'systemLanguage',
    'systemXDPI',
    'systemYDPI',
    'tBodies',
    'tFoot',
    'tHead',
    'tabIndex',
    'table',
    'table-layout',
    'tableLayout',
    'tableValues',
    'tag',
    'tagName',
    'tagUrn',
    'tags',
    'taintEnabled',
    'takeRecords',
    'tan',
    'tanh',
    'target',
    'targetElement',
    'targetTouches',
    'targetX',
    'targetY',
    'tel',
    'terminate',
    'test',
    'texImage2D',
    'texParameterf',
    'texParameteri',
    'texSubImage2D',
    'text',
    'text-align',
    'text-anchor',
    'text-decoration',
    'text-decoration-color',
    'text-decoration-line',
    'text-decoration-style',
    'text-indent',
    'text-overflow',
    'text-rendering',
    'text-shadow',
    'text-transform',
    'textAlign',
    'textAlignLast',
    'textAnchor',
    'textAutospace',
    'textBaseline',
    'textContent',
    'textDecoration',
    'textDecorationBlink',
    'textDecorationColor',
    'textDecorationLine',
    'textDecorationLineThrough',
    'textDecorationNone',
    'textDecorationOverline',
    'textDecorationStyle',
    'textDecorationUnderline',
    'textIndent',
    'textJustify',
    'textJustifyTrim',
    'textKashida',
    'textKashidaSpace',
    'textLength',
    'textOverflow',
    'textRendering',
    'textShadow',
    'textTracks',
    'textTransform',
    'textUnderlinePosition',
    'then',
    'threadId',
    'threshold',
    'tiltX',
    'tiltY',
    'time',
    'timeEnd',
    'timeStamp',
    'timeout',
    'timestamp',
    'timestampOffset',
    'timing',
    'title',
    'toArray',
    'toBlob',
    'toDataURL',
    'toDateString',
    'toElement',
    'toExponential',
    'toFixed',
    'toFloat32Array',
    'toFloat64Array',
    'toGMTString',
    'toISOString',
    'toJSON',
    'toLocaleDateString',
    'toLocaleFormat',
    'toLocaleLowerCase',
    'toLocaleString',
    'toLocaleTimeString',
    'toLocaleUpperCase',
    'toLowerCase',
    'toMethod',
    'toPrecision',
    'toSdp',
    'toSource',
    'toStaticHTML',
    'toString',
    'toStringTag',
    'toTimeString',
    'toUTCString',
    'toUpperCase',
    'toggle',
    'toggleLongPressEnabled',
    'tooLong',
    'toolbar',
    'top',
    'topMargin',
    'total',
    'totalFrameDelay',
    'totalVideoFrames',
    'touchAction',
    'touches',
    'trace',
    'track',
    'transaction',
    'transactions',
    'transform',
    'transform-origin',
    'transform-style',
    'transformOrigin',
    'transformPoint',
    'transformString',
    'transformStyle',
    'transformToDocument',
    'transformToFragment',
    'transition',
    'transition-delay',
    'transition-duration',
    'transition-property',
    'transition-timing-function',
    'transitionDelay',
    'transitionDuration',
    'transitionProperty',
    'transitionTimingFunction',
    'translate',
    'translateSelf',
    'translationX',
    'translationY',
    'trim',
    'trimLeft',
    'trimRight',
    'trueSpeed',
    'trunc',
    'truncate',
    'type',
    'typeDetail',
    'typeMismatch',
    'typeMustMatch',
    'types',
    'ubound',
    'undefined',
    'unescape',
    'uneval',
    'unicode-bidi',
    'unicodeBidi',
    'uniform1f',
    'uniform1fv',
    'uniform1i',
    'uniform1iv',
    'uniform2f',
    'uniform2fv',
    'uniform2i',
    'uniform2iv',
    'uniform3f',
    'uniform3fv',
    'uniform3i',
    'uniform3iv',
    'uniform4f',
    'uniform4fv',
    'uniform4i',
    'uniform4iv',
    'uniformMatrix2fv',
    'uniformMatrix3fv',
    'uniformMatrix4fv',
    'unique',
    'uniqueID',
    'uniqueNumber',
    'unitType',
    'units',
    'unloadEventEnd',
    'unloadEventStart',
    'unlock',
    'unmount',
    'unobserve',
    'unpause',
    'unpauseAnimations',
    'unreadCount',
    'unregister',
    'unregisterContentHandler',
    'unregisterProtocolHandler',
    'unscopables',
    'unselectable',
    'unshift',
    'unsubscribe',
    'unsuspendRedraw',
    'unsuspendRedrawAll',
    'unwatch',
    'unwrapKey',
    'update',
    'updateCommands',
    'updateIce',
    'updateInterval',
    'updateSettings',
    'updated',
    'updating',
    'upload',
    'upper',
    'upperBound',
    'upperOpen',
    'uri',
    'url',
    'urn',
    'urns',
    'usages',
    'useCurrentView',
    'useMap',
    'useProgram',
    'usedSpace',
    'userAgent',
    'userLanguage',
    'username',
    'v8BreakIterator',
    'vAlign',
    'vLink',
    'valid',
    'validateProgram',
    'validationMessage',
    'validity',
    'value',
    'valueAsDate',
    'valueAsNumber',
    'valueAsString',
    'valueInSpecifiedUnits',
    'valueMissing',
    'valueOf',
    'valueText',
    'valueType',
    'values',
    'vector-effect',
    'vectorEffect',
    'velocityAngular',
    'velocityExpansion',
    'velocityX',
    'velocityY',
    'vendor',
    'vendorSub',
    'verify',
    'version',
    'vertexAttrib1f',
    'vertexAttrib1fv',
    'vertexAttrib2f',
    'vertexAttrib2fv',
    'vertexAttrib3f',
    'vertexAttrib3fv',
    'vertexAttrib4f',
    'vertexAttrib4fv',
    'vertexAttribDivisorANGLE',
    'vertexAttribPointer',
    'vertical',
    'vertical-align',
    'verticalAlign',
    'verticalOverflow',
    'vibrate',
    'videoHeight',
    'videoTracks',
    'videoWidth',
    'view',
    'viewBox',
    'viewBoxString',
    'viewTarget',
    'viewTargetString',
    'viewport',
    'viewportAnchorX',
    'viewportAnchorY',
    'viewportElement',
    'visibility',
    'visibilityState',
    'visible',
    'vlinkColor',
    'voice',
    'volume',
    'vrml',
    'vspace',
    'w',
    'wand',
    'warn',
    'wasClean',
    'watch',
    'watchPosition',
    'webdriver',
    'webkitAddKey',
    'webkitAnimation',
    'webkitAnimationDelay',
    'webkitAnimationDirection',
    'webkitAnimationDuration',
    'webkitAnimationFillMode',
    'webkitAnimationIterationCount',
    'webkitAnimationName',
    'webkitAnimationPlayState',
    'webkitAnimationTimingFunction',
    'webkitAppearance',
    'webkitAudioContext',
    'webkitAudioDecodedByteCount',
    'webkitAudioPannerNode',
    'webkitBackfaceVisibility',
    'webkitBackground',
    'webkitBackgroundAttachment',
    'webkitBackgroundClip',
    'webkitBackgroundColor',
    'webkitBackgroundImage',
    'webkitBackgroundOrigin',
    'webkitBackgroundPosition',
    'webkitBackgroundPositionX',
    'webkitBackgroundPositionY',
    'webkitBackgroundRepeat',
    'webkitBackgroundSize',
    'webkitBackingStorePixelRatio',
    'webkitBorderImage',
    'webkitBorderImageOutset',
    'webkitBorderImageRepeat',
    'webkitBorderImageSlice',
    'webkitBorderImageSource',
    'webkitBorderImageWidth',
    'webkitBoxAlign',
    'webkitBoxDirection',
    'webkitBoxFlex',
    'webkitBoxOrdinalGroup',
    'webkitBoxOrient',
    'webkitBoxPack',
    'webkitBoxSizing',
    'webkitCancelAnimationFrame',
    'webkitCancelFullScreen',
    'webkitCancelKeyRequest',
    'webkitCancelRequestAnimationFrame',
    'webkitClearResourceTimings',
    'webkitClosedCaptionsVisible',
    'webkitConvertPointFromNodeToPage',
    'webkitConvertPointFromPageToNode',
    'webkitCreateShadowRoot',
    'webkitCurrentFullScreenElement',
    'webkitCurrentPlaybackTargetIsWireless',
    'webkitDirectionInvertedFromDevice',
    'webkitDisplayingFullscreen',
    'webkitEnterFullScreen',
    'webkitEnterFullscreen',
    'webkitExitFullScreen',
    'webkitExitFullscreen',
    'webkitExitPointerLock',
    'webkitFullScreenKeyboardInputAllowed',
    'webkitFullscreenElement',
    'webkitFullscreenEnabled',
    'webkitGenerateKeyRequest',
    'webkitGetAsEntry',
    'webkitGetDatabaseNames',
    'webkitGetEntries',
    'webkitGetEntriesByName',
    'webkitGetEntriesByType',
    'webkitGetFlowByName',
    'webkitGetGamepads',
    'webkitGetImageDataHD',
    'webkitGetNamedFlows',
    'webkitGetRegionFlowRanges',
    'webkitGetUserMedia',
    'webkitHasClosedCaptions',
    'webkitHidden',
    'webkitIDBCursor',
    'webkitIDBDatabase',
    'webkitIDBDatabaseError',
    'webkitIDBDatabaseException',
    'webkitIDBFactory',
    'webkitIDBIndex',
    'webkitIDBKeyRange',
    'webkitIDBObjectStore',
    'webkitIDBRequest',
    'webkitIDBTransaction',
    'webkitImageSmoothingEnabled',
    'webkitIndexedDB',
    'webkitInitMessageEvent',
    'webkitIsFullScreen',
    'webkitKeys',
    'webkitLineDashOffset',
    'webkitLockOrientation',
    'webkitMatchesSelector',
    'webkitMediaStream',
    'webkitNotifications',
    'webkitOfflineAudioContext',
    'webkitOrientation',
    'webkitPeerConnection00',
    'webkitPersistentStorage',
    'webkitPointerLockElement',
    'webkitPostMessage',
    'webkitPreservesPitch',
    'webkitPutImageDataHD',
    'webkitRTCPeerConnection',
    'webkitRegionOverset',
    'webkitRequestAnimationFrame',
    'webkitRequestFileSystem',
    'webkitRequestFullScreen',
    'webkitRequestFullscreen',
    'webkitRequestPointerLock',
    'webkitResolveLocalFileSystemURL',
    'webkitSetMediaKeys',
    'webkitSetResourceTimingBufferSize',
    'webkitShadowRoot',
    'webkitShowPlaybackTargetPicker',
    'webkitSlice',
    'webkitSpeechGrammar',
    'webkitSpeechGrammarList',
    'webkitSpeechRecognition',
    'webkitSpeechRecognitionError',
    'webkitSpeechRecognitionEvent',
    'webkitStorageInfo',
    'webkitSupportsFullscreen',
    'webkitTemporaryStorage',
    'webkitTextSizeAdjust',
    'webkitTransform',
    'webkitTransformOrigin',
    'webkitTransition',
    'webkitTransitionDelay',
    'webkitTransitionDuration',
    'webkitTransitionProperty',
    'webkitTransitionTimingFunction',
    'webkitURL',
    'webkitUnlockOrientation',
    'webkitUserSelect',
    'webkitVideoDecodedByteCount',
    'webkitVisibilityState',
    'webkitWirelessVideoPlaybackDisabled',
    'webkitdropzone',
    'webstore',
    'weight',
    'whatToShow',
    'wheelDelta',
    'wheelDeltaX',
    'wheelDeltaY',
    'which',
    'white-space',
    'whiteSpace',
    'wholeText',
    'widows',
    'width',
    'will-change',
    'willChange',
    'willValidate',
    'window',
    'withCredentials',
    'word-break',
    'word-spacing',
    'word-wrap',
    'wordBreak',
    'wordSpacing',
    'wordWrap',
    'wrap',
    'wrapKey',
    'write',
    'writeln',
    'writingMode',
    'x',
    'x1',
    'x2',
    'xChannelSelector',
    'xmlEncoding',
    'xmlStandalone',
    'xmlVersion',
    'xmlbase',
    'xmllang',
    'xmlspace',
    'y',
    'y1',
    'y2',
    'yChannelSelector',
    'yandex',
    'z',
    'z-index',
    'zIndex',
    'zoom',
    'zoomAndPan',
    'zoomRectScreen'
];


/***/ }),

/***/ "./src/container/InversifyContainerFacade.ts":
/*!***************************************************!*\
  !*** ./src/container/InversifyContainerFacade.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InversifyContainerFacade = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ./ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const AnalyzersModule_1 = __webpack_require__(/*! ./modules/analyzers/AnalyzersModule */ "./src/container/modules/analyzers/AnalyzersModule.ts");
const CodeTransformersModule_1 = __webpack_require__(/*! ./modules/code-transformers/CodeTransformersModule */ "./src/container/modules/code-transformers/CodeTransformersModule.ts");
const ControlFlowTransformersModule_1 = __webpack_require__(/*! ./modules/node-transformers/ControlFlowTransformersModule */ "./src/container/modules/node-transformers/ControlFlowTransformersModule.ts");
const ConvertingTransformersModule_1 = __webpack_require__(/*! ./modules/node-transformers/ConvertingTransformersModule */ "./src/container/modules/node-transformers/ConvertingTransformersModule.ts");
const CustomCodeHelpersModule_1 = __webpack_require__(/*! ./modules/custom-code-helpers/CustomCodeHelpersModule */ "./src/container/modules/custom-code-helpers/CustomCodeHelpersModule.ts");
const CustomNodesModule_1 = __webpack_require__(/*! ./modules/custom-nodes/CustomNodesModule */ "./src/container/modules/custom-nodes/CustomNodesModule.ts");
const FinalizingTransformersModule_1 = __webpack_require__(/*! ./modules/node-transformers/FinalizingTransformersModule */ "./src/container/modules/node-transformers/FinalizingTransformersModule.ts");
const GeneratorsModule_1 = __webpack_require__(/*! ./modules/generators/GeneratorsModule */ "./src/container/modules/generators/GeneratorsModule.ts");
const InitializingTransformersModule_1 = __webpack_require__(/*! ./modules/node-transformers/InitializingTransformersModule */ "./src/container/modules/node-transformers/InitializingTransformersModule.ts");
const ManglePropertiesTransformersModule_1 = __webpack_require__(/*! ./modules/node-transformers/ManglePropertiesTransformersModule */ "./src/container/modules/node-transformers/ManglePropertiesTransformersModule.ts");
const NodeModule_1 = __webpack_require__(/*! ./modules/node/NodeModule */ "./src/container/modules/node/NodeModule.ts");
const NodeTransformersModule_1 = __webpack_require__(/*! ./modules/node-transformers/NodeTransformersModule */ "./src/container/modules/node-transformers/NodeTransformersModule.ts");
const ObfuscatingTransformersModule_1 = __webpack_require__(/*! ./modules/node-transformers/ObfuscatingTransformersModule */ "./src/container/modules/node-transformers/ObfuscatingTransformersModule.ts");
const OptionsModule_1 = __webpack_require__(/*! ./modules/options/OptionsModule */ "./src/container/modules/options/OptionsModule.ts");
const PreparingTransformersModule_1 = __webpack_require__(/*! ./modules/node-transformers/PreparingTransformersModule */ "./src/container/modules/node-transformers/PreparingTransformersModule.ts");
const StoragesModule_1 = __webpack_require__(/*! ./modules/storages/StoragesModule */ "./src/container/modules/storages/StoragesModule.ts");
const UtilsModule_1 = __webpack_require__(/*! ./modules/utils/UtilsModule */ "./src/container/modules/utils/UtilsModule.ts");
const CodeTransformersRunner_1 = __webpack_require__(/*! ../code-transformers/CodeTransformersRunner */ "./src/code-transformers/CodeTransformersRunner.ts");
const JavaScriptObfuscator_1 = __webpack_require__(/*! ../JavaScriptObfuscator */ "./src/JavaScriptObfuscator.ts");
const Logger_1 = __webpack_require__(/*! ../logger/Logger */ "./src/logger/Logger.ts");
const NodeTransformersRunner_1 = __webpack_require__(/*! ../node-transformers/NodeTransformersRunner */ "./src/node-transformers/NodeTransformersRunner.ts");
const ObfuscationEventEmitter_1 = __webpack_require__(/*! ../event-emitters/ObfuscationEventEmitter */ "./src/event-emitters/ObfuscationEventEmitter.ts");
const ObfuscatedCode_1 = __webpack_require__(/*! ../source-code/ObfuscatedCode */ "./src/source-code/ObfuscatedCode.ts");
const SourceCode_1 = __webpack_require__(/*! ../source-code/SourceCode */ "./src/source-code/SourceCode.ts");
class InversifyContainerFacade {
    constructor() {
        this.container = new inversify_1.Container();
    }
    static getFactory(serviceIdentifier) {
        return (context) => {
            return (bindingName) => {
                return context.container.getNamed(serviceIdentifier, bindingName);
            };
        };
    }
    static getCacheFactory(serviceIdentifier) {
        return (context) => {
            const cache = new Map();
            return (bindingName) => {
                if (cache.has(bindingName)) {
                    return cache.get(bindingName);
                }
                const object = context.container.getNamed(serviceIdentifier, bindingName);
                cache.set(bindingName, object);
                return object;
            };
        };
    }
    static getConstructorFactory(serviceIdentifier, ...dependencies) {
        return (context) => {
            const cache = new Map();
            const cachedDependencies = [];
            return (bindingName) => {
                dependencies.forEach((dependency, index) => {
                    if (!cachedDependencies[index]) {
                        cachedDependencies[index] = context.container.get(dependency);
                    }
                });
                if (cache.has(bindingName)) {
                    return new (cache.get(bindingName))(...cachedDependencies);
                }
                const constructor = context.container
                    .getNamed(serviceIdentifier, bindingName);
                cache.set(bindingName, constructor);
                return new constructor(...cachedDependencies);
            };
        };
    }
    get(serviceIdentifier) {
        return this.container.get(serviceIdentifier);
    }
    getNamed(serviceIdentifier, named) {
        return this.container.getNamed(serviceIdentifier, named);
    }
    load(sourceCode, sourceMap, options) {
        this.container
            .bind(ServiceIdentifiers_1.ServiceIdentifiers.ISourceCode)
            .toDynamicValue(() => new SourceCode_1.SourceCode(sourceCode, sourceMap))
            .inSingletonScope();
        this.container
            .bind(ServiceIdentifiers_1.ServiceIdentifiers.TInputOptions)
            .toDynamicValue(() => options)
            .inSingletonScope();
        this.container
            .bind(ServiceIdentifiers_1.ServiceIdentifiers.ILogger)
            .to(Logger_1.Logger)
            .inSingletonScope();
        this.container
            .bind(ServiceIdentifiers_1.ServiceIdentifiers.IJavaScriptObfuscator)
            .to(JavaScriptObfuscator_1.JavaScriptObfuscator)
            .inSingletonScope();
        this.container
            .bind(ServiceIdentifiers_1.ServiceIdentifiers.ICodeTransformersRunner)
            .to(CodeTransformersRunner_1.CodeTransformersRunner)
            .inSingletonScope();
        this.container
            .bind(ServiceIdentifiers_1.ServiceIdentifiers.INodeTransformersRunner)
            .to(NodeTransformersRunner_1.NodeTransformersRunner)
            .inSingletonScope();
        this.container
            .bind(ServiceIdentifiers_1.ServiceIdentifiers.IObfuscatedCode)
            .to(ObfuscatedCode_1.ObfuscatedCode);
        this.container
            .bind(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IObfuscatedCode)
            .toFactory((context) => {
            return (obfuscatedCodeAsString, sourceMapAsString) => {
                const obfuscatedCode = context.container
                    .get(ServiceIdentifiers_1.ServiceIdentifiers.IObfuscatedCode);
                obfuscatedCode.initialize(obfuscatedCodeAsString, sourceMapAsString);
                return obfuscatedCode;
            };
        });
        this.container
            .bind(ServiceIdentifiers_1.ServiceIdentifiers.IObfuscationEventEmitter)
            .to(ObfuscationEventEmitter_1.ObfuscationEventEmitter)
            .inSingletonScope();
        this.container.load(AnalyzersModule_1.analyzersModule);
        this.container.load(CodeTransformersModule_1.codeTransformersModule);
        this.container.load(ControlFlowTransformersModule_1.controlFlowTransformersModule);
        this.container.load(ConvertingTransformersModule_1.convertingTransformersModule);
        this.container.load(CustomCodeHelpersModule_1.customCodeHelpersModule);
        this.container.load(CustomNodesModule_1.customNodesModule);
        this.container.load(FinalizingTransformersModule_1.finalizingTransformersModule);
        this.container.load(GeneratorsModule_1.generatorsModule);
        this.container.load(InitializingTransformersModule_1.initializingTransformersModule);
        this.container.load(ManglePropertiesTransformersModule_1.manglePropertiesTransformersModule);
        this.container.load(NodeModule_1.nodeModule);
        this.container.load(NodeTransformersModule_1.nodeTransformersModule);
        this.container.load(ObfuscatingTransformersModule_1.obfuscatingTransformersModule);
        this.container.load(OptionsModule_1.optionsModule);
        this.container.load(PreparingTransformersModule_1.preparingTransformersModule);
        this.container.load(StoragesModule_1.storagesModule);
        this.container.load(UtilsModule_1.utilsModule);
    }
    unload() {
        this.container.unbindAll();
    }
}
exports.InversifyContainerFacade = InversifyContainerFacade;


/***/ }),

/***/ "./src/container/ServiceIdentifiers.ts":
/*!*********************************************!*\
  !*** ./src/container/ServiceIdentifiers.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceIdentifiers = void 0;
var ServiceIdentifiers;
(function (ServiceIdentifiers) {
    ServiceIdentifiers["Factory__ICalleeDataExtractor"] = "Factory<ICalleeDataExtractor>";
    ServiceIdentifiers["Factory__ICodeTransformer"] = "Factory<ICodeTransformer[]>";
    ServiceIdentifiers["Factory__IControlFlowCustomNode"] = "Factory<IControlFlowCustomNode>";
    ServiceIdentifiers["Factory__IControlFlowReplacer"] = "Factory<IControlFlowReplacer>";
    ServiceIdentifiers["Factory__ICustomCodeHelper"] = "Factory<ICustomCodeHelper>";
    ServiceIdentifiers["Factory__ICustomCodeHelperGroup"] = "Factory<ICustomCodeHelperGroup>";
    ServiceIdentifiers["Factory__IDeadCodeInjectionCustomNode"] = "Factory<IDeadCodeInjectionCustomNode>";
    ServiceIdentifiers["Factory__IIdentifierNamesGenerator"] = "Factory<IIdentifierNamesGenerator>";
    ServiceIdentifiers["Factory__IIdentifierObfuscatingReplacer"] = "Factory<IIdentifierObfuscatingReplacer>";
    ServiceIdentifiers["Factory__INodeGuard"] = "Factory<INodeGuard>";
    ServiceIdentifiers["Factory__INodeTransformer"] = "Factory<INodeTransformer[]>";
    ServiceIdentifiers["Factory__IObfuscatedCode"] = "Factory<IObfuscatedCode>";
    ServiceIdentifiers["Factory__IObfuscatingReplacer"] = "Factory<IObfuscatingReplacer>";
    ServiceIdentifiers["Factory__IObjectExpressionKeysTransformerCustomNode"] = "Factory<IObjectExpressionKeysTransformerCustomNode>";
    ServiceIdentifiers["Factory__IObjectExpressionExtractor"] = "Factory<IObjectExpressionExtractor>";
    ServiceIdentifiers["Factory__TControlFlowStorage"] = "Factory<TControlFlowStorage>";
    ServiceIdentifiers["IArrayUtils"] = "IArrayUtils";
    ServiceIdentifiers["ICalleeDataExtractor"] = "ICalleeDataExtractor";
    ServiceIdentifiers["ICallsGraphAnalyzer"] = "ICallsGraphAnalyzer";
    ServiceIdentifiers["ICodeTransformer"] = "ICodeTransformer";
    ServiceIdentifiers["ICodeTransformerNamesGroupsBuilder"] = "ICodeTransformerNamesGroupsBuilder";
    ServiceIdentifiers["ICodeTransformersRunner"] = "ICodeTransformersRunner";
    ServiceIdentifiers["ICryptUtils"] = "ICryptUtils";
    ServiceIdentifiers["ICustomCodeHelper"] = "ICustomCodeHelper";
    ServiceIdentifiers["ICustomCodeHelperGroup"] = "ICustomCodeHelperGroup";
    ServiceIdentifiers["IControlFlowReplacer"] = "IControlFlowReplacer";
    ServiceIdentifiers["ICustomCodeHelperFormatter"] = "ICustomCodeHelperFormatter";
    ServiceIdentifiers["ICustomCodeHelperObfuscator"] = "ICustomCodeHelperObfuscator";
    ServiceIdentifiers["IEscapeSequenceEncoder"] = "IEscapeSequenceEncoder";
    ServiceIdentifiers["IIdentifierNamesGenerator"] = "IIdentifierNamesGenerator";
    ServiceIdentifiers["IIdentifierObfuscatingReplacer"] = "IIdentifierObfuscatingReplacer";
    ServiceIdentifiers["IJavaScriptObfuscator"] = "IJavaScriptObfuscator";
    ServiceIdentifiers["ILevelledTopologicalSorter"] = "ILevelledTopologicalSorter";
    ServiceIdentifiers["ILogger"] = "ILogger";
    ServiceIdentifiers["IManglePropertiesObfuscatingReplacer"] = "IManglePropertiesObfuscatingReplacer";
    ServiceIdentifiers["INodeGuard"] = "INodeGuard";
    ServiceIdentifiers["INodeTransformer"] = "INodeTransformer";
    ServiceIdentifiers["INodeTransformerNamesGroupsBuilder"] = "INodeTransformerNamesGroupsBuilder";
    ServiceIdentifiers["IObfuscationEventEmitter"] = "IObfuscationEventEmitter";
    ServiceIdentifiers["IObfuscatedCode"] = "IObfuscatedCode";
    ServiceIdentifiers["IOptions"] = "IOptions";
    ServiceIdentifiers["IOptionsNormalizer"] = "IOptionsNormalizer";
    ServiceIdentifiers["IObfuscatingReplacer"] = "IObfuscatingReplacer";
    ServiceIdentifiers["IPrevailingKindOfVariablesAnalyzer"] = "IPrevailingKindOfVariablesAnalyzer";
    ServiceIdentifiers["IObjectExpressionExtractor"] = "IObjectExpressionExtractor";
    ServiceIdentifiers["IRandomGenerator"] = "IRandomGenerator";
    ServiceIdentifiers["IScopeIdentifiersTraverser"] = "IScopeIdentifiersTraverser";
    ServiceIdentifiers["ISourceCode"] = "ISourceCode";
    ServiceIdentifiers["IScopeAnalyzer"] = "IScopeAnalyzer";
    ServiceIdentifiers["IStringArrayStorage"] = "IStringArrayStorage";
    ServiceIdentifiers["IStringArrayStorageAnalyzer"] = "IStringArrayStorageAnalyzer";
    ServiceIdentifiers["INodeTransformersRunner"] = "INodeTransformersRunner";
    ServiceIdentifiers["Newable__ICustomNode"] = "Newable<ICustomNode>";
    ServiceIdentifiers["Newable__TControlFlowStorage"] = "Newable<TControlFlowStorage>";
    ServiceIdentifiers["TCustomNodeGroupStorage"] = "TCustomNodeGroupStorage";
    ServiceIdentifiers["TInputOptions"] = "TInputOptions";
})(ServiceIdentifiers = exports.ServiceIdentifiers || (exports.ServiceIdentifiers = {}));


/***/ }),

/***/ "./src/container/modules/analyzers/AnalyzersModule.ts":
/*!************************************************************!*\
  !*** ./src/container/modules/analyzers/AnalyzersModule.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzersModule = void 0;
const InversifyContainerFacade_1 = __webpack_require__(/*! ../../InversifyContainerFacade */ "./src/container/InversifyContainerFacade.ts");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const CalleeDataExtractor_1 = __webpack_require__(/*! ../../../enums/analyzers/calls-graph-analyzer/CalleeDataExtractor */ "./src/enums/analyzers/calls-graph-analyzer/CalleeDataExtractor.ts");
const CallsGraphAnalyzer_1 = __webpack_require__(/*! ../../../analyzers/calls-graph-analyzer/CallsGraphAnalyzer */ "./src/analyzers/calls-graph-analyzer/CallsGraphAnalyzer.ts");
const FunctionDeclarationCalleeDataExtractor_1 = __webpack_require__(/*! ../../../analyzers/calls-graph-analyzer/callee-data-extractors/FunctionDeclarationCalleeDataExtractor */ "./src/analyzers/calls-graph-analyzer/callee-data-extractors/FunctionDeclarationCalleeDataExtractor.ts");
const FunctionExpressionCalleeDataExtractor_1 = __webpack_require__(/*! ../../../analyzers/calls-graph-analyzer/callee-data-extractors/FunctionExpressionCalleeDataExtractor */ "./src/analyzers/calls-graph-analyzer/callee-data-extractors/FunctionExpressionCalleeDataExtractor.ts");
const ObjectExpressionCalleeDataExtractor_1 = __webpack_require__(/*! ../../../analyzers/calls-graph-analyzer/callee-data-extractors/ObjectExpressionCalleeDataExtractor */ "./src/analyzers/calls-graph-analyzer/callee-data-extractors/ObjectExpressionCalleeDataExtractor.ts");
const PrevailingKindOfVariablesAnalyzer_1 = __webpack_require__(/*! ../../../analyzers/prevailing-kind-of-variables-analyzer/PrevailingKindOfVariablesAnalyzer */ "./src/analyzers/prevailing-kind-of-variables-analyzer/PrevailingKindOfVariablesAnalyzer.ts");
const ScopeAnalyzer_1 = __webpack_require__(/*! ../../../analyzers/scope-analyzer/ScopeAnalyzer */ "./src/analyzers/scope-analyzer/ScopeAnalyzer.ts");
const StringArrayStorageAnalyzer_1 = __webpack_require__(/*! ../../../analyzers/string-array-storage-analyzer/StringArrayStorageAnalyzer */ "./src/analyzers/string-array-storage-analyzer/StringArrayStorageAnalyzer.ts");
exports.analyzersModule = new inversify_1.ContainerModule((bind) => {
    bind(ServiceIdentifiers_1.ServiceIdentifiers.ICallsGraphAnalyzer)
        .to(CallsGraphAnalyzer_1.CallsGraphAnalyzer)
        .inSingletonScope();
    bind(ServiceIdentifiers_1.ServiceIdentifiers.IPrevailingKindOfVariablesAnalyzer)
        .to(PrevailingKindOfVariablesAnalyzer_1.PrevailingKindOfVariablesAnalyzer)
        .inSingletonScope();
    bind(ServiceIdentifiers_1.ServiceIdentifiers.IScopeAnalyzer)
        .to(ScopeAnalyzer_1.ScopeAnalyzer)
        .inSingletonScope();
    bind(ServiceIdentifiers_1.ServiceIdentifiers.IStringArrayStorageAnalyzer)
        .to(StringArrayStorageAnalyzer_1.StringArrayStorageAnalyzer)
        .inSingletonScope();
    bind(ServiceIdentifiers_1.ServiceIdentifiers.ICalleeDataExtractor)
        .to(FunctionDeclarationCalleeDataExtractor_1.FunctionDeclarationCalleeDataExtractor)
        .whenTargetNamed(CalleeDataExtractor_1.CalleeDataExtractor.FunctionDeclarationCalleeDataExtractor);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.ICalleeDataExtractor)
        .to(FunctionExpressionCalleeDataExtractor_1.FunctionExpressionCalleeDataExtractor)
        .whenTargetNamed(CalleeDataExtractor_1.CalleeDataExtractor.FunctionExpressionCalleeDataExtractor);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.ICalleeDataExtractor)
        .to(ObjectExpressionCalleeDataExtractor_1.ObjectExpressionCalleeDataExtractor)
        .whenTargetNamed(CalleeDataExtractor_1.CalleeDataExtractor.ObjectExpressionCalleeDataExtractor);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.Factory__ICalleeDataExtractor)
        .toFactory(InversifyContainerFacade_1.InversifyContainerFacade
        .getCacheFactory(ServiceIdentifiers_1.ServiceIdentifiers.ICalleeDataExtractor));
});


/***/ }),

/***/ "./src/container/modules/code-transformers/CodeTransformersModule.ts":
/*!***************************************************************************!*\
  !*** ./src/container/modules/code-transformers/CodeTransformersModule.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.codeTransformersModule = void 0;
const InversifyContainerFacade_1 = __webpack_require__(/*! ../../InversifyContainerFacade */ "./src/container/InversifyContainerFacade.ts");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const CodeTransformer_1 = __webpack_require__(/*! ../../../enums/code-transformers/CodeTransformer */ "./src/enums/code-transformers/CodeTransformer.ts");
const CodeTransformerNamesGroupsBuilder_1 = __webpack_require__(/*! ../../../code-transformers/CodeTransformerNamesGroupsBuilder */ "./src/code-transformers/CodeTransformerNamesGroupsBuilder.ts");
const HashbangOperatorTransformer_1 = __webpack_require__(/*! ../../../code-transformers/preparing-transformers/HashbangOperatorTransformer */ "./src/code-transformers/preparing-transformers/HashbangOperatorTransformer.ts");
exports.codeTransformersModule = new inversify_1.ContainerModule((bind) => {
    bind(ServiceIdentifiers_1.ServiceIdentifiers.Factory__ICodeTransformer)
        .toFactory(InversifyContainerFacade_1.InversifyContainerFacade
        .getCacheFactory(ServiceIdentifiers_1.ServiceIdentifiers.ICodeTransformer));
    bind(ServiceIdentifiers_1.ServiceIdentifiers.ICodeTransformerNamesGroupsBuilder)
        .to(CodeTransformerNamesGroupsBuilder_1.CodeTransformerNamesGroupsBuilder)
        .inSingletonScope();
    bind(ServiceIdentifiers_1.ServiceIdentifiers.ICodeTransformer)
        .to(HashbangOperatorTransformer_1.HashbangOperatorTransformer)
        .whenTargetNamed(CodeTransformer_1.CodeTransformer.HashbangOperatorTransformer);
});


/***/ }),

/***/ "./src/container/modules/custom-code-helpers/CustomCodeHelpersModule.ts":
/*!******************************************************************************!*\
  !*** ./src/container/modules/custom-code-helpers/CustomCodeHelpersModule.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.customCodeHelpersModule = void 0;
const InversifyContainerFacade_1 = __webpack_require__(/*! ../../InversifyContainerFacade */ "./src/container/InversifyContainerFacade.ts");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const CustomCodeHelper_1 = __webpack_require__(/*! ../../../enums/custom-code-helpers/CustomCodeHelper */ "./src/enums/custom-code-helpers/CustomCodeHelper.ts");
const CustomCodeHelperGroup_1 = __webpack_require__(/*! ../../../enums/custom-code-helpers/CustomCodeHelperGroup */ "./src/enums/custom-code-helpers/CustomCodeHelperGroup.ts");
const ConsoleOutputCodeHelperGroup_1 = __webpack_require__(/*! ../../../custom-code-helpers/console-output/group/ConsoleOutputCodeHelperGroup */ "./src/custom-code-helpers/console-output/group/ConsoleOutputCodeHelperGroup.ts");
const DebugProtectionCodeHelperGroup_1 = __webpack_require__(/*! ../../../custom-code-helpers/debug-protection/group/DebugProtectionCodeHelperGroup */ "./src/custom-code-helpers/debug-protection/group/DebugProtectionCodeHelperGroup.ts");
const DomainLockCustomCodeHelperGroup_1 = __webpack_require__(/*! ../../../custom-code-helpers/domain-lock/group/DomainLockCustomCodeHelperGroup */ "./src/custom-code-helpers/domain-lock/group/DomainLockCustomCodeHelperGroup.ts");
const SelfDefendingCodeHelperGroup_1 = __webpack_require__(/*! ../../../custom-code-helpers/self-defending/group/SelfDefendingCodeHelperGroup */ "./src/custom-code-helpers/self-defending/group/SelfDefendingCodeHelperGroup.ts");
const StringArrayCodeHelperGroup_1 = __webpack_require__(/*! ../../../custom-code-helpers/string-array/group/StringArrayCodeHelperGroup */ "./src/custom-code-helpers/string-array/group/StringArrayCodeHelperGroup.ts");
const ConsoleOutputDisableCodeHelper_1 = __webpack_require__(/*! ../../../custom-code-helpers/console-output/ConsoleOutputDisableCodeHelper */ "./src/custom-code-helpers/console-output/ConsoleOutputDisableCodeHelper.ts");
const CustomCodeHelperFormatter_1 = __webpack_require__(/*! ../../../custom-code-helpers/CustomCodeHelperFormatter */ "./src/custom-code-helpers/CustomCodeHelperFormatter.ts");
const CustomCodeHelperObfuscator_1 = __webpack_require__(/*! ../../../custom-code-helpers/CustomCodeHelperObfuscator */ "./src/custom-code-helpers/CustomCodeHelperObfuscator.ts");
const DebugProtectionFunctionCallCodeHelper_1 = __webpack_require__(/*! ../../../custom-code-helpers/debug-protection/DebugProtectionFunctionCallCodeHelper */ "./src/custom-code-helpers/debug-protection/DebugProtectionFunctionCallCodeHelper.ts");
const DebugProtectionFunctionIntervalCodeHelper_1 = __webpack_require__(/*! ../../../custom-code-helpers/debug-protection/DebugProtectionFunctionIntervalCodeHelper */ "./src/custom-code-helpers/debug-protection/DebugProtectionFunctionIntervalCodeHelper.ts");
const DebugProtectionFunctionCodeHelper_1 = __webpack_require__(/*! ../../../custom-code-helpers/debug-protection/DebugProtectionFunctionCodeHelper */ "./src/custom-code-helpers/debug-protection/DebugProtectionFunctionCodeHelper.ts");
const DomainLockCodeHelper_1 = __webpack_require__(/*! ../../../custom-code-helpers/domain-lock/DomainLockCodeHelper */ "./src/custom-code-helpers/domain-lock/DomainLockCodeHelper.ts");
const CallsControllerFunctionCodeHelper_1 = __webpack_require__(/*! ../../../custom-code-helpers/calls-controller/CallsControllerFunctionCodeHelper */ "./src/custom-code-helpers/calls-controller/CallsControllerFunctionCodeHelper.ts");
const SelfDefendingUnicodeCodeHelper_1 = __webpack_require__(/*! ../../../custom-code-helpers/self-defending/SelfDefendingUnicodeCodeHelper */ "./src/custom-code-helpers/self-defending/SelfDefendingUnicodeCodeHelper.ts");
const StringArrayCallsWrapperCodeHelper_1 = __webpack_require__(/*! ../../../custom-code-helpers/string-array/StringArrayCallsWrapperCodeHelper */ "./src/custom-code-helpers/string-array/StringArrayCallsWrapperCodeHelper.ts");
const StringArrayCodeHelper_1 = __webpack_require__(/*! ../../../custom-code-helpers/string-array/StringArrayCodeHelper */ "./src/custom-code-helpers/string-array/StringArrayCodeHelper.ts");
const StringArrayRotateFunctionCodeHelper_1 = __webpack_require__(/*! ../../../custom-code-helpers/string-array/StringArrayRotateFunctionCodeHelper */ "./src/custom-code-helpers/string-array/StringArrayRotateFunctionCodeHelper.ts");
exports.customCodeHelpersModule = new inversify_1.ContainerModule((bind) => {
    bind(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelper)
        .to(ConsoleOutputDisableCodeHelper_1.ConsoleOutputDisableCodeHelper)
        .whenTargetNamed(CustomCodeHelper_1.CustomCodeHelper.ConsoleOutputDisable);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelper)
        .to(DebugProtectionFunctionCallCodeHelper_1.DebugProtectionFunctionCallCodeHelper)
        .whenTargetNamed(CustomCodeHelper_1.CustomCodeHelper.DebugProtectionFunctionCall);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelper)
        .to(DebugProtectionFunctionIntervalCodeHelper_1.DebugProtectionFunctionIntervalCodeHelper)
        .whenTargetNamed(CustomCodeHelper_1.CustomCodeHelper.DebugProtectionFunctionInterval);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelper)
        .to(DebugProtectionFunctionCodeHelper_1.DebugProtectionFunctionCodeHelper)
        .whenTargetNamed(CustomCodeHelper_1.CustomCodeHelper.DebugProtectionFunction);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelper)
        .to(DomainLockCodeHelper_1.DomainLockCodeHelper)
        .whenTargetNamed(CustomCodeHelper_1.CustomCodeHelper.DomainLock);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelper)
        .to(CallsControllerFunctionCodeHelper_1.CallsControllerFunctionCodeHelper)
        .whenTargetNamed(CustomCodeHelper_1.CustomCodeHelper.CallsControllerFunction);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelper)
        .to(SelfDefendingUnicodeCodeHelper_1.SelfDefendingUnicodeCodeHelper)
        .whenTargetNamed(CustomCodeHelper_1.CustomCodeHelper.SelfDefendingUnicode);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelper)
        .to(StringArrayCallsWrapperCodeHelper_1.StringArrayCallsWrapperCodeHelper)
        .whenTargetNamed(CustomCodeHelper_1.CustomCodeHelper.StringArrayCallsWrapper);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelper)
        .to(StringArrayCodeHelper_1.StringArrayCodeHelper)
        .whenTargetNamed(CustomCodeHelper_1.CustomCodeHelper.StringArray);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelper)
        .to(StringArrayRotateFunctionCodeHelper_1.StringArrayRotateFunctionCodeHelper)
        .whenTargetNamed(CustomCodeHelper_1.CustomCodeHelper.StringArrayRotateFunction);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperGroup)
        .to(ConsoleOutputCodeHelperGroup_1.ConsoleOutputCodeHelperGroup)
        .whenTargetNamed(CustomCodeHelperGroup_1.CustomCodeHelperGroup.ConsoleOutput);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperGroup)
        .to(DebugProtectionCodeHelperGroup_1.DebugProtectionCodeHelperGroup)
        .whenTargetNamed(CustomCodeHelperGroup_1.CustomCodeHelperGroup.DebugProtection);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperGroup)
        .to(DomainLockCustomCodeHelperGroup_1.DomainLockCustomCodeHelperGroup)
        .whenTargetNamed(CustomCodeHelperGroup_1.CustomCodeHelperGroup.DomainLock);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperGroup)
        .to(SelfDefendingCodeHelperGroup_1.SelfDefendingCodeHelperGroup)
        .whenTargetNamed(CustomCodeHelperGroup_1.CustomCodeHelperGroup.SelfDefending);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperGroup)
        .to(StringArrayCodeHelperGroup_1.StringArrayCodeHelperGroup)
        .whenTargetNamed(CustomCodeHelperGroup_1.CustomCodeHelperGroup.StringArray);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.Factory__ICustomCodeHelper)
        .toFactory(InversifyContainerFacade_1.InversifyContainerFacade
        .getFactory(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelper));
    bind(ServiceIdentifiers_1.ServiceIdentifiers.Factory__ICustomCodeHelperGroup)
        .toFactory(InversifyContainerFacade_1.InversifyContainerFacade
        .getFactory(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperGroup));
    bind(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperFormatter)
        .to(CustomCodeHelperFormatter_1.CustomCodeHelperFormatter)
        .inSingletonScope();
    bind(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperObfuscator)
        .to(CustomCodeHelperObfuscator_1.CustomCodeHelperObfuscator)
        .inSingletonScope();
});


/***/ }),

/***/ "./src/container/modules/custom-nodes/CustomNodesModule.ts":
/*!*****************************************************************!*\
  !*** ./src/container/modules/custom-nodes/CustomNodesModule.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.customNodesModule = void 0;
const InversifyContainerFacade_1 = __webpack_require__(/*! ../../InversifyContainerFacade */ "./src/container/InversifyContainerFacade.ts");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const ControlFlowCustomNode_1 = __webpack_require__(/*! ../../../enums/custom-nodes/ControlFlowCustomNode */ "./src/enums/custom-nodes/ControlFlowCustomNode.ts");
const DeadCodeInjectionCustomNode_1 = __webpack_require__(/*! ../../../enums/custom-nodes/DeadCodeInjectionCustomNode */ "./src/enums/custom-nodes/DeadCodeInjectionCustomNode.ts");
const ObjectExpressionKeysTransformerCustomNode_1 = __webpack_require__(/*! ../../../enums/custom-nodes/ObjectExpressionKeysTransformerCustomNode */ "./src/enums/custom-nodes/ObjectExpressionKeysTransformerCustomNode.ts");
const ObjectExpressionVariableDeclarationHostNode_1 = __webpack_require__(/*! ../../../custom-nodes/object-expression-keys-transformer-nodes/ObjectExpressionVariableDeclarationHostNode */ "./src/custom-nodes/object-expression-keys-transformer-nodes/ObjectExpressionVariableDeclarationHostNode.ts");
const BinaryExpressionFunctionNode_1 = __webpack_require__(/*! ../../../custom-nodes/control-flow-flattening-nodes/BinaryExpressionFunctionNode */ "./src/custom-nodes/control-flow-flattening-nodes/BinaryExpressionFunctionNode.ts");
const BlockStatementControlFlowFlatteningNode_1 = __webpack_require__(/*! ../../../custom-nodes/control-flow-flattening-nodes/BlockStatementControlFlowFlatteningNode */ "./src/custom-nodes/control-flow-flattening-nodes/BlockStatementControlFlowFlatteningNode.ts");
const BlockStatementDeadCodeInjectionNode_1 = __webpack_require__(/*! ../../../custom-nodes/dead-code-injection-nodes/BlockStatementDeadCodeInjectionNode */ "./src/custom-nodes/dead-code-injection-nodes/BlockStatementDeadCodeInjectionNode.ts");
const CallExpressionControlFlowStorageCallNode_1 = __webpack_require__(/*! ../../../custom-nodes/control-flow-flattening-nodes/control-flow-storage-nodes/CallExpressionControlFlowStorageCallNode */ "./src/custom-nodes/control-flow-flattening-nodes/control-flow-storage-nodes/CallExpressionControlFlowStorageCallNode.ts");
const CallExpressionFunctionNode_1 = __webpack_require__(/*! ../../../custom-nodes/control-flow-flattening-nodes/CallExpressionFunctionNode */ "./src/custom-nodes/control-flow-flattening-nodes/CallExpressionFunctionNode.ts");
const ControlFlowStorageNode_1 = __webpack_require__(/*! ../../../custom-nodes/control-flow-flattening-nodes/control-flow-storage-nodes/ControlFlowStorageNode */ "./src/custom-nodes/control-flow-flattening-nodes/control-flow-storage-nodes/ControlFlowStorageNode.ts");
const ExpressionWithOperatorControlFlowStorageCallNode_1 = __webpack_require__(/*! ../../../custom-nodes/control-flow-flattening-nodes/control-flow-storage-nodes/ExpressionWithOperatorControlFlowStorageCallNode */ "./src/custom-nodes/control-flow-flattening-nodes/control-flow-storage-nodes/ExpressionWithOperatorControlFlowStorageCallNode.ts");
const LogicalExpressionFunctionNode_1 = __webpack_require__(/*! ../../../custom-nodes/control-flow-flattening-nodes/LogicalExpressionFunctionNode */ "./src/custom-nodes/control-flow-flattening-nodes/LogicalExpressionFunctionNode.ts");
const StringLiteralControlFlowStorageCallNode_1 = __webpack_require__(/*! ../../../custom-nodes/control-flow-flattening-nodes/control-flow-storage-nodes/StringLiteralControlFlowStorageCallNode */ "./src/custom-nodes/control-flow-flattening-nodes/control-flow-storage-nodes/StringLiteralControlFlowStorageCallNode.ts");
const StringLiteralNode_1 = __webpack_require__(/*! ../../../custom-nodes/control-flow-flattening-nodes/StringLiteralNode */ "./src/custom-nodes/control-flow-flattening-nodes/StringLiteralNode.ts");
exports.customNodesModule = new inversify_1.ContainerModule((bind) => {
    bind(ServiceIdentifiers_1.ServiceIdentifiers.Newable__ICustomNode)
        .toConstructor(BinaryExpressionFunctionNode_1.BinaryExpressionFunctionNode)
        .whenTargetNamed(ControlFlowCustomNode_1.ControlFlowCustomNode.BinaryExpressionFunctionNode);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.Newable__ICustomNode)
        .toConstructor(BlockStatementControlFlowFlatteningNode_1.BlockStatementControlFlowFlatteningNode)
        .whenTargetNamed(ControlFlowCustomNode_1.ControlFlowCustomNode.BlockStatementControlFlowFlatteningNode);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.Newable__ICustomNode)
        .toConstructor(CallExpressionControlFlowStorageCallNode_1.CallExpressionControlFlowStorageCallNode)
        .whenTargetNamed(ControlFlowCustomNode_1.ControlFlowCustomNode.CallExpressionControlFlowStorageCallNode);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.Newable__ICustomNode)
        .toConstructor(CallExpressionFunctionNode_1.CallExpressionFunctionNode)
        .whenTargetNamed(ControlFlowCustomNode_1.ControlFlowCustomNode.CallExpressionFunctionNode);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.Newable__ICustomNode)
        .toConstructor(ControlFlowStorageNode_1.ControlFlowStorageNode)
        .whenTargetNamed(ControlFlowCustomNode_1.ControlFlowCustomNode.ControlFlowStorageNode);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.Newable__ICustomNode)
        .toConstructor(ExpressionWithOperatorControlFlowStorageCallNode_1.ExpressionWithOperatorControlFlowStorageCallNode)
        .whenTargetNamed(ControlFlowCustomNode_1.ControlFlowCustomNode.ExpressionWithOperatorControlFlowStorageCallNode);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.Newable__ICustomNode)
        .toConstructor(LogicalExpressionFunctionNode_1.LogicalExpressionFunctionNode)
        .whenTargetNamed(ControlFlowCustomNode_1.ControlFlowCustomNode.LogicalExpressionFunctionNode);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.Newable__ICustomNode)
        .toConstructor(StringLiteralNode_1.StringLiteralNode)
        .whenTargetNamed(ControlFlowCustomNode_1.ControlFlowCustomNode.StringLiteralNode);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.Newable__ICustomNode)
        .toConstructor(StringLiteralControlFlowStorageCallNode_1.StringLiteralControlFlowStorageCallNode)
        .whenTargetNamed(ControlFlowCustomNode_1.ControlFlowCustomNode.StringLiteralControlFlowStorageCallNode);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.Newable__ICustomNode)
        .toConstructor(BlockStatementDeadCodeInjectionNode_1.BlockStatementDeadCodeInjectionNode)
        .whenTargetNamed(DeadCodeInjectionCustomNode_1.DeadCodeInjectionCustomNode.BlockStatementDeadCodeInjectionNode);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.Newable__ICustomNode)
        .toConstructor(ObjectExpressionVariableDeclarationHostNode_1.ObjectExpressionVariableDeclarationHostNode)
        .whenTargetNamed(ObjectExpressionKeysTransformerCustomNode_1.ObjectExpressionKeysTransformerCustomNode.ObjectExpressionVariableDeclarationHostNode);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IControlFlowCustomNode)
        .toFactory(InversifyContainerFacade_1.InversifyContainerFacade
        .getConstructorFactory(ServiceIdentifiers_1.ServiceIdentifiers.Newable__ICustomNode, ServiceIdentifiers_1.ServiceIdentifiers.Factory__IIdentifierNamesGenerator, ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperFormatter, ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator, ServiceIdentifiers_1.ServiceIdentifiers.IOptions, ServiceIdentifiers_1.ServiceIdentifiers.IPrevailingKindOfVariablesAnalyzer));
    bind(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IDeadCodeInjectionCustomNode)
        .toFactory(InversifyContainerFacade_1.InversifyContainerFacade
        .getConstructorFactory(ServiceIdentifiers_1.ServiceIdentifiers.Newable__ICustomNode, ServiceIdentifiers_1.ServiceIdentifiers.Factory__IIdentifierNamesGenerator, ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperFormatter, ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator, ServiceIdentifiers_1.ServiceIdentifiers.IOptions));
    bind(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IObjectExpressionKeysTransformerCustomNode)
        .toFactory(InversifyContainerFacade_1.InversifyContainerFacade
        .getConstructorFactory(ServiceIdentifiers_1.ServiceIdentifiers.Newable__ICustomNode, ServiceIdentifiers_1.ServiceIdentifiers.Factory__IIdentifierNamesGenerator, ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperFormatter, ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator, ServiceIdentifiers_1.ServiceIdentifiers.IOptions, ServiceIdentifiers_1.ServiceIdentifiers.IPrevailingKindOfVariablesAnalyzer));
});


/***/ }),

/***/ "./src/container/modules/generators/GeneratorsModule.ts":
/*!**************************************************************!*\
  !*** ./src/container/modules/generators/GeneratorsModule.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.generatorsModule = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const IdentifierNamesGenerator_1 = __webpack_require__(/*! ../../../enums/generators/identifier-names-generators/IdentifierNamesGenerator */ "./src/enums/generators/identifier-names-generators/IdentifierNamesGenerator.ts");
const DictionaryIdentifierNamesGenerator_1 = __webpack_require__(/*! ../../../generators/identifier-names-generators/DictionaryIdentifierNamesGenerator */ "./src/generators/identifier-names-generators/DictionaryIdentifierNamesGenerator.ts");
const HexadecimalIdentifierNamesGenerator_1 = __webpack_require__(/*! ../../../generators/identifier-names-generators/HexadecimalIdentifierNamesGenerator */ "./src/generators/identifier-names-generators/HexadecimalIdentifierNamesGenerator.ts");
const MangledIdentifierNamesGenerator_1 = __webpack_require__(/*! ../../../generators/identifier-names-generators/MangledIdentifierNamesGenerator */ "./src/generators/identifier-names-generators/MangledIdentifierNamesGenerator.ts");
exports.generatorsModule = new inversify_1.ContainerModule((bind) => {
    bind(ServiceIdentifiers_1.ServiceIdentifiers.IIdentifierNamesGenerator)
        .to(DictionaryIdentifierNamesGenerator_1.DictionaryIdentifierNamesGenerator)
        .inSingletonScope()
        .whenTargetNamed(IdentifierNamesGenerator_1.IdentifierNamesGenerator.DictionaryIdentifierNamesGenerator);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.IIdentifierNamesGenerator)
        .to(HexadecimalIdentifierNamesGenerator_1.HexadecimalIdentifierNamesGenerator)
        .inSingletonScope()
        .whenTargetNamed(IdentifierNamesGenerator_1.IdentifierNamesGenerator.HexadecimalIdentifierNamesGenerator);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.IIdentifierNamesGenerator)
        .to(MangledIdentifierNamesGenerator_1.MangledIdentifierNamesGenerator)
        .inSingletonScope()
        .whenTargetNamed(IdentifierNamesGenerator_1.IdentifierNamesGenerator.MangledIdentifierNamesGenerator);
    function identifierNameGeneratorFactory() {
        let cachedIdentifierNamesGenerator = null;
        return (context) => (options) => {
            if (cachedIdentifierNamesGenerator) {
                return cachedIdentifierNamesGenerator;
            }
            let identifierNamesGenerator;
            switch (options.identifierNamesGenerator) {
                case IdentifierNamesGenerator_1.IdentifierNamesGenerator.DictionaryIdentifierNamesGenerator:
                    identifierNamesGenerator = context.container.getNamed(ServiceIdentifiers_1.ServiceIdentifiers.IIdentifierNamesGenerator, IdentifierNamesGenerator_1.IdentifierNamesGenerator.DictionaryIdentifierNamesGenerator);
                    break;
                case IdentifierNamesGenerator_1.IdentifierNamesGenerator.MangledIdentifierNamesGenerator:
                    identifierNamesGenerator = context.container.getNamed(ServiceIdentifiers_1.ServiceIdentifiers.IIdentifierNamesGenerator, IdentifierNamesGenerator_1.IdentifierNamesGenerator.MangledIdentifierNamesGenerator);
                    break;
                case IdentifierNamesGenerator_1.IdentifierNamesGenerator.HexadecimalIdentifierNamesGenerator:
                default:
                    identifierNamesGenerator = context.container.getNamed(ServiceIdentifiers_1.ServiceIdentifiers.IIdentifierNamesGenerator, IdentifierNamesGenerator_1.IdentifierNamesGenerator.HexadecimalIdentifierNamesGenerator);
            }
            cachedIdentifierNamesGenerator = identifierNamesGenerator;
            return identifierNamesGenerator;
        };
    }
    bind(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)
        .toFactory(identifierNameGeneratorFactory());
});


/***/ }),

/***/ "./src/container/modules/node-transformers/ControlFlowTransformersModule.ts":
/*!**********************************************************************************!*\
  !*** ./src/container/modules/node-transformers/ControlFlowTransformersModule.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.controlFlowTransformersModule = void 0;
const InversifyContainerFacade_1 = __webpack_require__(/*! ../../InversifyContainerFacade */ "./src/container/InversifyContainerFacade.ts");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const ControlFlowReplacer_1 = __webpack_require__(/*! ../../../enums/node-transformers/obfuscating-transformers/obfuscating-replacers/ControlFlowReplacer */ "./src/enums/node-transformers/obfuscating-transformers/obfuscating-replacers/ControlFlowReplacer.ts");
const NodeTransformer_1 = __webpack_require__(/*! ../../../enums/node-transformers/NodeTransformer */ "./src/enums/node-transformers/NodeTransformer.ts");
const BinaryExpressionControlFlowReplacer_1 = __webpack_require__(/*! ../../../node-transformers/control-flow-transformers/control-flow-replacers/BinaryExpressionControlFlowReplacer */ "./src/node-transformers/control-flow-transformers/control-flow-replacers/BinaryExpressionControlFlowReplacer.ts");
const BlockStatementControlFlowTransformer_1 = __webpack_require__(/*! ../../../node-transformers/control-flow-transformers/BlockStatementControlFlowTransformer */ "./src/node-transformers/control-flow-transformers/BlockStatementControlFlowTransformer.ts");
const CallExpressionControlFlowReplacer_1 = __webpack_require__(/*! ../../../node-transformers/control-flow-transformers/control-flow-replacers/CallExpressionControlFlowReplacer */ "./src/node-transformers/control-flow-transformers/control-flow-replacers/CallExpressionControlFlowReplacer.ts");
const DeadCodeInjectionTransformer_1 = __webpack_require__(/*! ../../../node-transformers/dead-code-injection-transformers/DeadCodeInjectionTransformer */ "./src/node-transformers/dead-code-injection-transformers/DeadCodeInjectionTransformer.ts");
const FunctionControlFlowTransformer_1 = __webpack_require__(/*! ../../../node-transformers/control-flow-transformers/FunctionControlFlowTransformer */ "./src/node-transformers/control-flow-transformers/FunctionControlFlowTransformer.ts");
const LogicalExpressionControlFlowReplacer_1 = __webpack_require__(/*! ../../../node-transformers/control-flow-transformers/control-flow-replacers/LogicalExpressionControlFlowReplacer */ "./src/node-transformers/control-flow-transformers/control-flow-replacers/LogicalExpressionControlFlowReplacer.ts");
const StringLiteralControlFlowReplacer_1 = __webpack_require__(/*! ../../../node-transformers/control-flow-transformers/control-flow-replacers/StringLiteralControlFlowReplacer */ "./src/node-transformers/control-flow-transformers/control-flow-replacers/StringLiteralControlFlowReplacer.ts");
exports.controlFlowTransformersModule = new inversify_1.ContainerModule((bind) => {
    bind(ServiceIdentifiers_1.ServiceIdentifiers.INodeTransformer)
        .to(BlockStatementControlFlowTransformer_1.BlockStatementControlFlowTransformer)
        .whenTargetNamed(NodeTransformer_1.NodeTransformer.BlockStatementControlFlowTransformer);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.INodeTransformer)
        .to(DeadCodeInjectionTransformer_1.DeadCodeInjectionTransformer)
        .whenTargetNamed(NodeTransformer_1.NodeTransformer.DeadCodeInjectionTransformer);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.INodeTransformer)
        .to(FunctionControlFlowTransformer_1.FunctionControlFlowTransformer)
        .whenTargetNamed(NodeTransformer_1.NodeTransformer.FunctionControlFlowTransformer);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.IControlFlowReplacer)
        .to(BinaryExpressionControlFlowReplacer_1.BinaryExpressionControlFlowReplacer)
        .whenTargetNamed(ControlFlowReplacer_1.ControlFlowReplacer.BinaryExpressionControlFlowReplacer);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.IControlFlowReplacer)
        .to(CallExpressionControlFlowReplacer_1.CallExpressionControlFlowReplacer)
        .whenTargetNamed(ControlFlowReplacer_1.ControlFlowReplacer.CallExpressionControlFlowReplacer);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.IControlFlowReplacer)
        .to(LogicalExpressionControlFlowReplacer_1.LogicalExpressionControlFlowReplacer)
        .whenTargetNamed(ControlFlowReplacer_1.ControlFlowReplacer.LogicalExpressionControlFlowReplacer);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.IControlFlowReplacer)
        .to(StringLiteralControlFlowReplacer_1.StringLiteralControlFlowReplacer)
        .whenTargetNamed(ControlFlowReplacer_1.ControlFlowReplacer.StringLiteralControlFlowReplacer);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IControlFlowReplacer)
        .toFactory(InversifyContainerFacade_1.InversifyContainerFacade
        .getCacheFactory(ServiceIdentifiers_1.ServiceIdentifiers.IControlFlowReplacer));
});


/***/ }),

/***/ "./src/container/modules/node-transformers/ConvertingTransformersModule.ts":
/*!*********************************************************************************!*\
  !*** ./src/container/modules/node-transformers/ConvertingTransformersModule.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.convertingTransformersModule = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const InversifyContainerFacade_1 = __webpack_require__(/*! ../../InversifyContainerFacade */ "./src/container/InversifyContainerFacade.ts");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const NodeTransformer_1 = __webpack_require__(/*! ../../../enums/node-transformers/NodeTransformer */ "./src/enums/node-transformers/NodeTransformer.ts");
const ObjectExpressionExtractor_1 = __webpack_require__(/*! ../../../enums/node-transformers/converting-transformers/properties-extractors/ObjectExpressionExtractor */ "./src/enums/node-transformers/converting-transformers/properties-extractors/ObjectExpressionExtractor.ts");
const ObjectExpressionToVariableDeclarationExtractor_1 = __webpack_require__(/*! ../../../node-transformers/converting-transformers/object-expression-extractors/ObjectExpressionToVariableDeclarationExtractor */ "./src/node-transformers/converting-transformers/object-expression-extractors/ObjectExpressionToVariableDeclarationExtractor.ts");
const MemberExpressionTransformer_1 = __webpack_require__(/*! ../../../node-transformers/converting-transformers/MemberExpressionTransformer */ "./src/node-transformers/converting-transformers/MemberExpressionTransformer.ts");
const MethodDefinitionTransformer_1 = __webpack_require__(/*! ../../../node-transformers/converting-transformers/MethodDefinitionTransformer */ "./src/node-transformers/converting-transformers/MethodDefinitionTransformer.ts");
const ObjectExpressionKeysTransformer_1 = __webpack_require__(/*! ../../../node-transformers/converting-transformers/ObjectExpressionKeysTransformer */ "./src/node-transformers/converting-transformers/ObjectExpressionKeysTransformer.ts");
const ObjectExpressionTransformer_1 = __webpack_require__(/*! ../../../node-transformers/converting-transformers/ObjectExpressionTransformer */ "./src/node-transformers/converting-transformers/ObjectExpressionTransformer.ts");
const SplitStringTransformer_1 = __webpack_require__(/*! ../../../node-transformers/converting-transformers/SplitStringTransformer */ "./src/node-transformers/converting-transformers/SplitStringTransformer.ts");
const TemplateLiteralTransformer_1 = __webpack_require__(/*! ../../../node-transformers/converting-transformers/TemplateLiteralTransformer */ "./src/node-transformers/converting-transformers/TemplateLiteralTransformer.ts");
const BasePropertiesExtractor_1 = __webpack_require__(/*! ../../../node-transformers/converting-transformers/object-expression-extractors/BasePropertiesExtractor */ "./src/node-transformers/converting-transformers/object-expression-extractors/BasePropertiesExtractor.ts");
exports.convertingTransformersModule = new inversify_1.ContainerModule((bind) => {
    bind(ServiceIdentifiers_1.ServiceIdentifiers.INodeTransformer)
        .to(MemberExpressionTransformer_1.MemberExpressionTransformer)
        .whenTargetNamed(NodeTransformer_1.NodeTransformer.MemberExpressionTransformer);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.INodeTransformer)
        .to(MethodDefinitionTransformer_1.MethodDefinitionTransformer)
        .whenTargetNamed(NodeTransformer_1.NodeTransformer.MethodDefinitionTransformer);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.INodeTransformer)
        .to(ObjectExpressionKeysTransformer_1.ObjectExpressionKeysTransformer)
        .whenTargetNamed(NodeTransformer_1.NodeTransformer.ObjectExpressionKeysTransformer);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.INodeTransformer)
        .to(ObjectExpressionTransformer_1.ObjectExpressionTransformer)
        .whenTargetNamed(NodeTransformer_1.NodeTransformer.ObjectExpressionTransformer);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.INodeTransformer)
        .to(SplitStringTransformer_1.SplitStringTransformer)
        .whenTargetNamed(NodeTransformer_1.NodeTransformer.SplitStringTransformer);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.INodeTransformer)
        .to(TemplateLiteralTransformer_1.TemplateLiteralTransformer)
        .whenTargetNamed(NodeTransformer_1.NodeTransformer.TemplateLiteralTransformer);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.IObjectExpressionExtractor)
        .to(ObjectExpressionToVariableDeclarationExtractor_1.ObjectExpressionToVariableDeclarationExtractor)
        .whenTargetNamed(ObjectExpressionExtractor_1.ObjectExpressionExtractor.ObjectExpressionToVariableDeclarationExtractor);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.IObjectExpressionExtractor)
        .to(BasePropertiesExtractor_1.BasePropertiesExtractor)
        .whenTargetNamed(ObjectExpressionExtractor_1.ObjectExpressionExtractor.BasePropertiesExtractor);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IObjectExpressionExtractor)
        .toFactory(InversifyContainerFacade_1.InversifyContainerFacade
        .getCacheFactory(ServiceIdentifiers_1.ServiceIdentifiers.IObjectExpressionExtractor));
});


/***/ }),

/***/ "./src/container/modules/node-transformers/FinalizingTransformersModule.ts":
/*!*********************************************************************************!*\
  !*** ./src/container/modules/node-transformers/FinalizingTransformersModule.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.finalizingTransformersModule = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
exports.finalizingTransformersModule = new inversify_1.ContainerModule((bind) => {
});


/***/ }),

/***/ "./src/container/modules/node-transformers/InitializingTransformersModule.ts":
/*!***********************************************************************************!*\
  !*** ./src/container/modules/node-transformers/InitializingTransformersModule.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.initializingTransformersModule = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const NodeTransformer_1 = __webpack_require__(/*! ../../../enums/node-transformers/NodeTransformer */ "./src/enums/node-transformers/NodeTransformer.ts");
const CommentsTransformer_1 = __webpack_require__(/*! ../../../node-transformers/initializing-transformers/CommentsTransformer */ "./src/node-transformers/initializing-transformers/CommentsTransformer.ts");
exports.initializingTransformersModule = new inversify_1.ContainerModule((bind) => {
    bind(ServiceIdentifiers_1.ServiceIdentifiers.INodeTransformer)
        .to(CommentsTransformer_1.CommentsTransformer)
        .whenTargetNamed(NodeTransformer_1.NodeTransformer.CommentsTransformer);
});


/***/ }),

/***/ "./src/container/modules/node-transformers/ManglePropertiesTransformersModule.ts":
/*!***************************************************************************************!*\
  !*** ./src/container/modules/node-transformers/ManglePropertiesTransformersModule.ts ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.manglePropertiesTransformersModule = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const NodeTransformer_1 = __webpack_require__(/*! ../../../enums/node-transformers/NodeTransformer */ "./src/enums/node-transformers/NodeTransformer.ts");
const ManglePropertiesReplacer_1 = __webpack_require__(/*! ../../../node-transformers/mangle-properties-transformers/replacer/ManglePropertiesReplacer */ "./src/node-transformers/mangle-properties-transformers/replacer/ManglePropertiesReplacer.ts");
const ManglePropertiesTransformer_1 = __webpack_require__(/*! ../../../node-transformers/mangle-properties-transformers/ManglePropertiesTransformer */ "./src/node-transformers/mangle-properties-transformers/ManglePropertiesTransformer.ts");
exports.manglePropertiesTransformersModule = new inversify_1.ContainerModule((bind) => {
    bind(ServiceIdentifiers_1.ServiceIdentifiers.INodeTransformer)
        .to(ManglePropertiesTransformer_1.ManglePropertiesTransformer)
        .whenTargetNamed(NodeTransformer_1.NodeTransformer.ManglePropertiesTransformer);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.IManglePropertiesObfuscatingReplacer)
        .to(ManglePropertiesReplacer_1.ManglePropertiesReplacer);
});


/***/ }),

/***/ "./src/container/modules/node-transformers/NodeTransformersModule.ts":
/*!***************************************************************************!*\
  !*** ./src/container/modules/node-transformers/NodeTransformersModule.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeTransformersModule = void 0;
const InversifyContainerFacade_1 = __webpack_require__(/*! ../../InversifyContainerFacade */ "./src/container/InversifyContainerFacade.ts");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const NodeTransformerNamesGroupsBuilder_1 = __webpack_require__(/*! ../../../node-transformers/NodeTransformerNamesGroupsBuilder */ "./src/node-transformers/NodeTransformerNamesGroupsBuilder.ts");
exports.nodeTransformersModule = new inversify_1.ContainerModule((bind) => {
    bind(ServiceIdentifiers_1.ServiceIdentifiers.Factory__INodeTransformer)
        .toFactory(InversifyContainerFacade_1.InversifyContainerFacade
        .getCacheFactory(ServiceIdentifiers_1.ServiceIdentifiers.INodeTransformer));
    bind(ServiceIdentifiers_1.ServiceIdentifiers.INodeTransformerNamesGroupsBuilder)
        .to(NodeTransformerNamesGroupsBuilder_1.NodeTransformerNamesGroupsBuilder)
        .inSingletonScope();
});


/***/ }),

/***/ "./src/container/modules/node-transformers/ObfuscatingTransformersModule.ts":
/*!**********************************************************************************!*\
  !*** ./src/container/modules/node-transformers/ObfuscatingTransformersModule.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.obfuscatingTransformersModule = void 0;
const InversifyContainerFacade_1 = __webpack_require__(/*! ../../InversifyContainerFacade */ "./src/container/InversifyContainerFacade.ts");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const IdentifierObfuscatingReplacer_1 = __webpack_require__(/*! ../../../enums/node-transformers/obfuscating-transformers/obfuscating-replacers/IdentifierObfuscatingReplacer */ "./src/enums/node-transformers/obfuscating-transformers/obfuscating-replacers/IdentifierObfuscatingReplacer.ts");
const LiteralObfuscatingReplacer_1 = __webpack_require__(/*! ../../../enums/node-transformers/obfuscating-transformers/obfuscating-replacers/LiteralObfuscatingReplacer */ "./src/enums/node-transformers/obfuscating-transformers/obfuscating-replacers/LiteralObfuscatingReplacer.ts");
const NodeTransformer_1 = __webpack_require__(/*! ../../../enums/node-transformers/NodeTransformer */ "./src/enums/node-transformers/NodeTransformer.ts");
const BaseIdentifierObfuscatingReplacer_1 = __webpack_require__(/*! ../../../node-transformers/obfuscating-transformers/obfuscating-replacers/identifier-obfuscating-replacers/BaseIdentifierObfuscatingReplacer */ "./src/node-transformers/obfuscating-transformers/obfuscating-replacers/identifier-obfuscating-replacers/BaseIdentifierObfuscatingReplacer.ts");
const BooleanLiteralObfuscatingReplacer_1 = __webpack_require__(/*! ../../../node-transformers/obfuscating-transformers/obfuscating-replacers/literal-obfuscating-replacers/BooleanLiteralObfuscatingReplacer */ "./src/node-transformers/obfuscating-transformers/obfuscating-replacers/literal-obfuscating-replacers/BooleanLiteralObfuscatingReplacer.ts");
const LabeledStatementTransformer_1 = __webpack_require__(/*! ../../../node-transformers/obfuscating-transformers/LabeledStatementTransformer */ "./src/node-transformers/obfuscating-transformers/LabeledStatementTransformer.ts");
const LiteralTransformer_1 = __webpack_require__(/*! ../../../node-transformers/obfuscating-transformers/LiteralTransformer */ "./src/node-transformers/obfuscating-transformers/LiteralTransformer.ts");
const NumberLiteralObfuscatingReplacer_1 = __webpack_require__(/*! ../../../node-transformers/obfuscating-transformers/obfuscating-replacers/literal-obfuscating-replacers/NumberLiteralObfuscatingReplacer */ "./src/node-transformers/obfuscating-transformers/obfuscating-replacers/literal-obfuscating-replacers/NumberLiteralObfuscatingReplacer.ts");
const StringLiteralObfuscatingReplacer_1 = __webpack_require__(/*! ../../../node-transformers/obfuscating-transformers/obfuscating-replacers/literal-obfuscating-replacers/StringLiteralObfuscatingReplacer */ "./src/node-transformers/obfuscating-transformers/obfuscating-replacers/literal-obfuscating-replacers/StringLiteralObfuscatingReplacer.ts");
const ScopeIdentifiersTransformer_1 = __webpack_require__(/*! ../../../node-transformers/obfuscating-transformers/ScopeIdentifiersTransformer */ "./src/node-transformers/obfuscating-transformers/ScopeIdentifiersTransformer.ts");
exports.obfuscatingTransformersModule = new inversify_1.ContainerModule((bind) => {
    bind(ServiceIdentifiers_1.ServiceIdentifiers.INodeTransformer)
        .to(LabeledStatementTransformer_1.LabeledStatementTransformer)
        .whenTargetNamed(NodeTransformer_1.NodeTransformer.LabeledStatementTransformer);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.INodeTransformer)
        .to(LiteralTransformer_1.LiteralTransformer)
        .whenTargetNamed(NodeTransformer_1.NodeTransformer.LiteralTransformer);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.INodeTransformer)
        .to(ScopeIdentifiersTransformer_1.ScopeIdentifiersTransformer)
        .whenTargetNamed(NodeTransformer_1.NodeTransformer.ScopeIdentifiersTransformer);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.IObfuscatingReplacer)
        .to(BooleanLiteralObfuscatingReplacer_1.BooleanLiteralObfuscatingReplacer)
        .whenTargetNamed(LiteralObfuscatingReplacer_1.LiteralObfuscatingReplacer.BooleanLiteralObfuscatingReplacer);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.IObfuscatingReplacer)
        .to(NumberLiteralObfuscatingReplacer_1.NumberLiteralObfuscatingReplacer)
        .whenTargetNamed(LiteralObfuscatingReplacer_1.LiteralObfuscatingReplacer.NumberLiteralObfuscatingReplacer);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.IObfuscatingReplacer)
        .to(StringLiteralObfuscatingReplacer_1.StringLiteralObfuscatingReplacer)
        .whenTargetNamed(LiteralObfuscatingReplacer_1.LiteralObfuscatingReplacer.StringLiteralObfuscatingReplacer);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.IIdentifierObfuscatingReplacer)
        .to(BaseIdentifierObfuscatingReplacer_1.BaseIdentifierObfuscatingReplacer)
        .whenTargetNamed(IdentifierObfuscatingReplacer_1.IdentifierObfuscatingReplacer.BaseIdentifierObfuscatingReplacer);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IObfuscatingReplacer)
        .toFactory(InversifyContainerFacade_1.InversifyContainerFacade
        .getCacheFactory(ServiceIdentifiers_1.ServiceIdentifiers.IObfuscatingReplacer));
    bind(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IIdentifierObfuscatingReplacer)
        .toFactory(InversifyContainerFacade_1.InversifyContainerFacade
        .getCacheFactory(ServiceIdentifiers_1.ServiceIdentifiers.IIdentifierObfuscatingReplacer));
});


/***/ }),

/***/ "./src/container/modules/node-transformers/PreparingTransformersModule.ts":
/*!********************************************************************************!*\
  !*** ./src/container/modules/node-transformers/PreparingTransformersModule.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.preparingTransformersModule = void 0;
const InversifyContainerFacade_1 = __webpack_require__(/*! ../../InversifyContainerFacade */ "./src/container/InversifyContainerFacade.ts");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const NodeTransformer_1 = __webpack_require__(/*! ../../../enums/node-transformers/NodeTransformer */ "./src/enums/node-transformers/NodeTransformer.ts");
const ObfuscatingGuard_1 = __webpack_require__(/*! ../../../enums/node-transformers/preparing-transformers/obfuscating-guards/ObfuscatingGuard */ "./src/enums/node-transformers/preparing-transformers/obfuscating-guards/ObfuscatingGuard.ts");
const BlackListObfuscatingGuard_1 = __webpack_require__(/*! ../../../node-transformers/preparing-transformers/obfuscating-guards/BlackListObfuscatingGuard */ "./src/node-transformers/preparing-transformers/obfuscating-guards/BlackListObfuscatingGuard.ts");
const ConditionalCommentObfuscatingGuard_1 = __webpack_require__(/*! ../../../node-transformers/preparing-transformers/obfuscating-guards/ConditionalCommentObfuscatingGuard */ "./src/node-transformers/preparing-transformers/obfuscating-guards/ConditionalCommentObfuscatingGuard.ts");
const CustomCodeHelpersTransformer_1 = __webpack_require__(/*! ../../../node-transformers/preparing-transformers/CustomCodeHelpersTransformer */ "./src/node-transformers/preparing-transformers/CustomCodeHelpersTransformer.ts");
const EvalCallExpressionTransformer_1 = __webpack_require__(/*! ../../../node-transformers/preparing-transformers/EvalCallExpressionTransformer */ "./src/node-transformers/preparing-transformers/EvalCallExpressionTransformer.ts");
const MetadataTransformer_1 = __webpack_require__(/*! ../../../node-transformers/preparing-transformers/MetadataTransformer */ "./src/node-transformers/preparing-transformers/MetadataTransformer.ts");
const ObfuscatingGuardsTransformer_1 = __webpack_require__(/*! ../../../node-transformers/preparing-transformers/ObfuscatingGuardsTransformer */ "./src/node-transformers/preparing-transformers/ObfuscatingGuardsTransformer.ts");
const ParentificationTransformer_1 = __webpack_require__(/*! ../../../node-transformers/preparing-transformers/ParentificationTransformer */ "./src/node-transformers/preparing-transformers/ParentificationTransformer.ts");
const ReservedStringObfuscatingGuard_1 = __webpack_require__(/*! ../../../node-transformers/preparing-transformers/obfuscating-guards/ReservedStringObfuscatingGuard */ "./src/node-transformers/preparing-transformers/obfuscating-guards/ReservedStringObfuscatingGuard.ts");
const VariablePreserveTransformer_1 = __webpack_require__(/*! ../../../node-transformers/preparing-transformers/VariablePreserveTransformer */ "./src/node-transformers/preparing-transformers/VariablePreserveTransformer.ts");
exports.preparingTransformersModule = new inversify_1.ContainerModule((bind) => {
    bind(ServiceIdentifiers_1.ServiceIdentifiers.INodeTransformer)
        .to(CustomCodeHelpersTransformer_1.CustomCodeHelpersTransformer)
        .whenTargetNamed(NodeTransformer_1.NodeTransformer.CustomCodeHelpersTransformer);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.INodeTransformer)
        .to(EvalCallExpressionTransformer_1.EvalCallExpressionTransformer)
        .whenTargetNamed(NodeTransformer_1.NodeTransformer.EvalCallExpressionTransformer);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.INodeTransformer)
        .to(MetadataTransformer_1.MetadataTransformer)
        .whenTargetNamed(NodeTransformer_1.NodeTransformer.MetadataTransformer);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.INodeTransformer)
        .to(ObfuscatingGuardsTransformer_1.ObfuscatingGuardsTransformer)
        .whenTargetNamed(NodeTransformer_1.NodeTransformer.ObfuscatingGuardsTransformer);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.INodeTransformer)
        .to(ParentificationTransformer_1.ParentificationTransformer)
        .whenTargetNamed(NodeTransformer_1.NodeTransformer.ParentificationTransformer);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.INodeGuard)
        .to(BlackListObfuscatingGuard_1.BlackListObfuscatingGuard)
        .inSingletonScope()
        .whenTargetNamed(ObfuscatingGuard_1.ObfuscatingGuard.BlackListObfuscatingGuard);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.INodeGuard)
        .to(ConditionalCommentObfuscatingGuard_1.ConditionalCommentObfuscatingGuard)
        .inSingletonScope()
        .whenTargetNamed(ObfuscatingGuard_1.ObfuscatingGuard.ConditionalCommentObfuscatingGuard);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.INodeGuard)
        .to(ReservedStringObfuscatingGuard_1.ReservedStringObfuscatingGuard)
        .inSingletonScope()
        .whenTargetNamed(ObfuscatingGuard_1.ObfuscatingGuard.ReservedStringObfuscatingGuard);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.INodeTransformer)
        .to(VariablePreserveTransformer_1.VariablePreserveTransformer)
        .whenTargetNamed(NodeTransformer_1.NodeTransformer.VariablePreserveTransformer);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.Factory__INodeGuard)
        .toFactory(InversifyContainerFacade_1.InversifyContainerFacade
        .getCacheFactory(ServiceIdentifiers_1.ServiceIdentifiers.INodeGuard));
});


/***/ }),

/***/ "./src/container/modules/node/NodeModule.ts":
/*!**************************************************!*\
  !*** ./src/container/modules/node/NodeModule.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeModule = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const ScopeIdentifiersTraverser_1 = __webpack_require__(/*! ../../../node/ScopeIdentifiersTraverser */ "./src/node/ScopeIdentifiersTraverser.ts");
exports.nodeModule = new inversify_1.ContainerModule((bind) => {
    bind(ServiceIdentifiers_1.ServiceIdentifiers.IScopeIdentifiersTraverser)
        .to(ScopeIdentifiersTraverser_1.ScopeIdentifiersTraverser)
        .inSingletonScope();
});


/***/ }),

/***/ "./src/container/modules/options/OptionsModule.ts":
/*!********************************************************!*\
  !*** ./src/container/modules/options/OptionsModule.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.optionsModule = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const Options_1 = __webpack_require__(/*! ../../../options/Options */ "./src/options/Options.ts");
const OptionsNormalizer_1 = __webpack_require__(/*! ../../../options/OptionsNormalizer */ "./src/options/OptionsNormalizer.ts");
exports.optionsModule = new inversify_1.ContainerModule((bind) => {
    bind(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)
        .to(Options_1.Options)
        .inSingletonScope();
    bind(ServiceIdentifiers_1.ServiceIdentifiers.IOptionsNormalizer)
        .to(OptionsNormalizer_1.OptionsNormalizer)
        .inSingletonScope();
});


/***/ }),

/***/ "./src/container/modules/storages/StoragesModule.ts":
/*!**********************************************************!*\
  !*** ./src/container/modules/storages/StoragesModule.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.storagesModule = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const ControlFlowStorage_1 = __webpack_require__(/*! ../../../storages/custom-nodes/ControlFlowStorage */ "./src/storages/custom-nodes/ControlFlowStorage.ts");
const CustomCodeHelperGroupStorage_1 = __webpack_require__(/*! ../../../storages/custom-code-helpers/CustomCodeHelperGroupStorage */ "./src/storages/custom-code-helpers/CustomCodeHelperGroupStorage.ts");
const StringArrayStorage_1 = __webpack_require__(/*! ../../../storages/string-array/StringArrayStorage */ "./src/storages/string-array/StringArrayStorage.ts");
exports.storagesModule = new inversify_1.ContainerModule((bind) => {
    bind(ServiceIdentifiers_1.ServiceIdentifiers.TCustomNodeGroupStorage)
        .to(CustomCodeHelperGroupStorage_1.CustomCodeHelperGroupStorage)
        .inSingletonScope();
    bind(ServiceIdentifiers_1.ServiceIdentifiers.IStringArrayStorage)
        .to(StringArrayStorage_1.StringArrayStorage)
        .inSingletonScope();
    bind(ServiceIdentifiers_1.ServiceIdentifiers.Newable__TControlFlowStorage)
        .toConstructor(ControlFlowStorage_1.ControlFlowStorage);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.Factory__TControlFlowStorage)
        .toFactory((context) => {
        return () => {
            const constructor = context.container
                .get(ServiceIdentifiers_1.ServiceIdentifiers.Newable__TControlFlowStorage);
            const randomGenerator = context.container
                .get(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator);
            const options = context.container
                .get(ServiceIdentifiers_1.ServiceIdentifiers.IOptions);
            const storage = new constructor(randomGenerator, options);
            storage.initialize();
            return storage;
        };
    });
});


/***/ }),

/***/ "./src/container/modules/utils/UtilsModule.ts":
/*!****************************************************!*\
  !*** ./src/container/modules/utils/UtilsModule.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.utilsModule = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const ArrayUtils_1 = __webpack_require__(/*! ../../../utils/ArrayUtils */ "./src/utils/ArrayUtils.ts");
const CryptUtils_1 = __webpack_require__(/*! ../../../utils/CryptUtils */ "./src/utils/CryptUtils.ts");
const EscapeSequenceEncoder_1 = __webpack_require__(/*! ../../../utils/EscapeSequenceEncoder */ "./src/utils/EscapeSequenceEncoder.ts");
const LevelledTopologicalSorter_1 = __webpack_require__(/*! ../../../utils/LevelledTopologicalSorter */ "./src/utils/LevelledTopologicalSorter.ts");
const RandomGenerator_1 = __webpack_require__(/*! ../../../utils/RandomGenerator */ "./src/utils/RandomGenerator.ts");
exports.utilsModule = new inversify_1.ContainerModule((bind) => {
    bind(ServiceIdentifiers_1.ServiceIdentifiers.IArrayUtils)
        .to(ArrayUtils_1.ArrayUtils)
        .inSingletonScope();
    bind(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)
        .to(RandomGenerator_1.RandomGenerator)
        .inSingletonScope();
    bind(ServiceIdentifiers_1.ServiceIdentifiers.ICryptUtils)
        .to(CryptUtils_1.CryptUtils)
        .inSingletonScope();
    bind(ServiceIdentifiers_1.ServiceIdentifiers.IEscapeSequenceEncoder)
        .to(EscapeSequenceEncoder_1.EscapeSequenceEncoder)
        .inSingletonScope();
    bind(ServiceIdentifiers_1.ServiceIdentifiers.ILevelledTopologicalSorter)
        .to(LevelledTopologicalSorter_1.LevelledTopologicalSorter);
});


/***/ }),

/***/ "./src/custom-code-helpers/AbstractCustomCodeHelper.ts":
/*!*************************************************************!*\
  !*** ./src/custom-code-helpers/AbstractCustomCodeHelper.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var AbstractCustomCodeHelper_1, _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractCustomCodeHelper = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TIdentifierNamesGeneratorFactory_1 = __webpack_require__(/*! ../types/container/generators/TIdentifierNamesGeneratorFactory */ "./src/types/container/generators/TIdentifierNamesGeneratorFactory.ts");
const ICustomCodeHelperFormatter_1 = __webpack_require__(/*! ../interfaces/custom-code-helpers/ICustomCodeHelperFormatter */ "./src/interfaces/custom-code-helpers/ICustomCodeHelperFormatter.ts");
const ICustomCodeHelperObfuscator_1 = __webpack_require__(/*! ../interfaces/custom-code-helpers/ICustomCodeHelperObfuscator */ "./src/interfaces/custom-code-helpers/ICustomCodeHelperObfuscator.ts");
const IOptions_1 = __webpack_require__(/*! ../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const GlobalVariableTemplate1_1 = __webpack_require__(/*! ./common/templates/GlobalVariableTemplate1 */ "./src/custom-code-helpers/common/templates/GlobalVariableTemplate1.ts");
const GlobalVariableTemplate2_1 = __webpack_require__(/*! ./common/templates/GlobalVariableTemplate2 */ "./src/custom-code-helpers/common/templates/GlobalVariableTemplate2.ts");
let AbstractCustomCodeHelper = AbstractCustomCodeHelper_1 = class AbstractCustomCodeHelper {
    constructor(identifierNamesGeneratorFactory, customCodeHelperFormatter, customCodeHelperObfuscator, randomGenerator, options) {
        this.cachedNode = null;
        this.identifierNamesGenerator = identifierNamesGeneratorFactory(options);
        this.customCodeHelperFormatter = customCodeHelperFormatter;
        this.customCodeHelperObfuscator = customCodeHelperObfuscator;
        this.randomGenerator = randomGenerator;
        this.options = options;
    }
    getNode() {
        if (!this.cachedNode) {
            const codeHelperTemplate = this.getCodeHelperTemplate();
            this.cachedNode = this.customCodeHelperFormatter.formatStructure(this.getNodeStructure(codeHelperTemplate));
        }
        return this.cachedNode;
    }
    getGlobalVariableTemplate() {
        return this.randomGenerator
            .getRandomGenerator()
            .pickone(AbstractCustomCodeHelper_1.globalVariableTemplateFunctions);
    }
    getCodeHelperTemplate() {
        return '';
    }
};
AbstractCustomCodeHelper.globalVariableTemplateFunctions = [
    GlobalVariableTemplate1_1.GlobalVariableTemplate1(),
    GlobalVariableTemplate2_1.GlobalVariableTemplate2()
];
AbstractCustomCodeHelper = AbstractCustomCodeHelper_1 = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperFormatter)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperObfuscator)),
    __param(3, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(4, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory !== "undefined" && TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory) === "function" ? _a : Object, typeof (_b = typeof ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter !== "undefined" && ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter) === "function" ? _b : Object, typeof (_c = typeof ICustomCodeHelperObfuscator_1.ICustomCodeHelperObfuscator !== "undefined" && ICustomCodeHelperObfuscator_1.ICustomCodeHelperObfuscator) === "function" ? _c : Object, typeof (_d = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _d : Object, typeof (_e = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _e : Object])
], AbstractCustomCodeHelper);
exports.AbstractCustomCodeHelper = AbstractCustomCodeHelper;


/***/ }),

/***/ "./src/custom-code-helpers/AbstractCustomCodeHelperGroup.ts":
/*!******************************************************************!*\
  !*** ./src/custom-code-helpers/AbstractCustomCodeHelperGroup.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractCustomCodeHelperGroup = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TIdentifierNamesGeneratorFactory_1 = __webpack_require__(/*! ../types/container/generators/TIdentifierNamesGeneratorFactory */ "./src/types/container/generators/TIdentifierNamesGeneratorFactory.ts");
const IOptions_1 = __webpack_require__(/*! ../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
let AbstractCustomCodeHelperGroup = class AbstractCustomCodeHelperGroup {
    constructor(identifierNamesGeneratorFactory, randomGenerator, options) {
        this.identifierNamesGenerator = identifierNamesGeneratorFactory(options);
        this.randomGenerator = randomGenerator;
        this.options = options;
    }
    getAppendEvent() {
        return this.appendEvent;
    }
    getCustomCodeHelpers() {
        return this.customCodeHelpers;
    }
    appendCustomNodeIfExist(customCodeHelperName, callback) {
        const customCodeHelper = this.customCodeHelpers.get(customCodeHelperName);
        if (!customCodeHelper) {
            return;
        }
        callback(customCodeHelper);
    }
    getRandomCallsGraphIndex(callsGraphLength) {
        return this.randomGenerator.getRandomInteger(0, Math.max(0, Math.round(callsGraphLength - 1)));
    }
};
AbstractCustomCodeHelperGroup = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory !== "undefined" && TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory) === "function" ? _a : Object, typeof (_b = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _b : Object, typeof (_c = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _c : Object])
], AbstractCustomCodeHelperGroup);
exports.AbstractCustomCodeHelperGroup = AbstractCustomCodeHelperGroup;


/***/ }),

/***/ "./src/custom-code-helpers/CustomCodeHelperFormatter.ts":
/*!**************************************************************!*\
  !*** ./src/custom-code-helpers/CustomCodeHelperFormatter.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomCodeHelperFormatter = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const estraverse = __importStar(__webpack_require__(/*! estraverse */ "estraverse"));
const string_template_1 = __importDefault(__webpack_require__(/*! string-template */ "string-template"));
const IPrevailingKindOfVariablesAnalyzer_1 = __webpack_require__(/*! ../interfaces/analyzers/calls-graph-analyzer/IPrevailingKindOfVariablesAnalyzer */ "./src/interfaces/analyzers/calls-graph-analyzer/IPrevailingKindOfVariablesAnalyzer.ts");
const NodeGuards_1 = __webpack_require__(/*! ../node/NodeGuards */ "./src/node/NodeGuards.ts");
let CustomCodeHelperFormatter = class CustomCodeHelperFormatter {
    constructor(prevailingKindOfVariablesAnalyzer) {
        this.prevailingKindOfVariables = prevailingKindOfVariablesAnalyzer.getPrevailingKind();
    }
    formatTemplate(template, mapping) {
        return string_template_1.default(template, mapping);
    }
    formatStructure(statements) {
        for (const statement of statements) {
            estraverse.replace(statement, {
                enter: (node) => {
                    if (!NodeGuards_1.NodeGuards.isVariableDeclarationNode(node)) {
                        return;
                    }
                    if (this.prevailingKindOfVariables === 'var') {
                        node.kind = 'var';
                    }
                    return node;
                }
            });
        }
        return statements;
    }
};
CustomCodeHelperFormatter = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IPrevailingKindOfVariablesAnalyzer)),
    __metadata("design:paramtypes", [typeof (_a = typeof IPrevailingKindOfVariablesAnalyzer_1.IPrevailingKindOfVariablesAnalyzer !== "undefined" && IPrevailingKindOfVariablesAnalyzer_1.IPrevailingKindOfVariablesAnalyzer) === "function" ? _a : Object])
], CustomCodeHelperFormatter);
exports.CustomCodeHelperFormatter = CustomCodeHelperFormatter;


/***/ }),

/***/ "./src/custom-code-helpers/CustomCodeHelperObfuscator.ts":
/*!***************************************************************!*\
  !*** ./src/custom-code-helpers/CustomCodeHelperObfuscator.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomCodeHelperObfuscator = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const IOptions_1 = __webpack_require__(/*! ../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const NoCustomNodes_1 = __webpack_require__(/*! ../options/presets/NoCustomNodes */ "./src/options/presets/NoCustomNodes.ts");
const JavaScriptObfuscatorFacade_1 = __webpack_require__(/*! ../JavaScriptObfuscatorFacade */ "./src/JavaScriptObfuscatorFacade.ts");
let CustomCodeHelperObfuscator = class CustomCodeHelperObfuscator {
    constructor(randomGenerator, options) {
        this.randomGenerator = randomGenerator;
        this.options = options;
    }
    obfuscateTemplate(template, additionalOptions = {}) {
        return JavaScriptObfuscatorFacade_1.JavaScriptObfuscator.obfuscate(template, Object.assign(Object.assign(Object.assign({}, NoCustomNodes_1.NO_ADDITIONAL_NODES_PRESET), { identifierNamesGenerator: this.options.identifierNamesGenerator, identifiersDictionary: this.options.identifiersDictionary, seed: this.randomGenerator.getRawSeed() }), additionalOptions)).getObfuscatedCode();
    }
};
CustomCodeHelperObfuscator = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _a : Object, typeof (_b = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _b : Object])
], CustomCodeHelperObfuscator);
exports.CustomCodeHelperObfuscator = CustomCodeHelperObfuscator;


/***/ }),

/***/ "./src/custom-code-helpers/calls-controller/CallsControllerFunctionCodeHelper.ts":
/*!***************************************************************************************!*\
  !*** ./src/custom-code-helpers/calls-controller/CallsControllerFunctionCodeHelper.ts ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallsControllerFunctionCodeHelper = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TIdentifierNamesGeneratorFactory_1 = __webpack_require__(/*! ../../types/container/generators/TIdentifierNamesGeneratorFactory */ "./src/types/container/generators/TIdentifierNamesGeneratorFactory.ts");
const ICustomCodeHelperObfuscator_1 = __webpack_require__(/*! ../../interfaces/custom-code-helpers/ICustomCodeHelperObfuscator */ "./src/interfaces/custom-code-helpers/ICustomCodeHelperObfuscator.ts");
const ICustomCodeHelperFormatter_1 = __webpack_require__(/*! ../../interfaces/custom-code-helpers/ICustomCodeHelperFormatter */ "./src/interfaces/custom-code-helpers/ICustomCodeHelperFormatter.ts");
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const ObfuscationEvent_1 = __webpack_require__(/*! ../../enums/event-emitters/ObfuscationEvent */ "./src/enums/event-emitters/ObfuscationEvent.ts");
const Initializable_1 = __webpack_require__(/*! ../../decorators/Initializable */ "./src/decorators/Initializable.ts");
const SingleCallControllerTemplate_1 = __webpack_require__(/*! ../common/templates/SingleCallControllerTemplate */ "./src/custom-code-helpers/common/templates/SingleCallControllerTemplate.ts");
const AbstractCustomCodeHelper_1 = __webpack_require__(/*! ../AbstractCustomCodeHelper */ "./src/custom-code-helpers/AbstractCustomCodeHelper.ts");
const NodeUtils_1 = __webpack_require__(/*! ../../node/NodeUtils */ "./src/node/NodeUtils.ts");
let CallsControllerFunctionCodeHelper = class CallsControllerFunctionCodeHelper extends AbstractCustomCodeHelper_1.AbstractCustomCodeHelper {
    constructor(identifierNamesGeneratorFactory, customCodeHelperFormatter, customCodeHelperObfuscator, randomGenerator, options) {
        super(identifierNamesGeneratorFactory, customCodeHelperFormatter, customCodeHelperObfuscator, randomGenerator, options);
    }
    initialize(appendEvent, callsControllerFunctionName) {
        this.appendEvent = appendEvent;
        this.callsControllerFunctionName = callsControllerFunctionName;
    }
    getNodeStructure(codeHelperTemplate) {
        return NodeUtils_1.NodeUtils.convertCodeToStructure(codeHelperTemplate);
    }
    getCodeHelperTemplate() {
        if (this.appendEvent === ObfuscationEvent_1.ObfuscationEvent.AfterObfuscation) {
            return this.customCodeHelperObfuscator.obfuscateTemplate(this.customCodeHelperFormatter.formatTemplate(SingleCallControllerTemplate_1.SingleCallControllerTemplate(), {
                callControllerFunctionName: this.callsControllerFunctionName
            }));
        }
        return this.customCodeHelperFormatter.formatTemplate(SingleCallControllerTemplate_1.SingleCallControllerTemplate(), {
            callControllerFunctionName: this.callsControllerFunctionName
        });
    }
};
__decorate([
    Initializable_1.initializable(),
    __metadata("design:type", String)
], CallsControllerFunctionCodeHelper.prototype, "callsControllerFunctionName", void 0);
__decorate([
    Initializable_1.initializable(),
    __metadata("design:type", typeof (_a = typeof ObfuscationEvent_1.ObfuscationEvent !== "undefined" && ObfuscationEvent_1.ObfuscationEvent) === "function" ? _a : Object)
], CallsControllerFunctionCodeHelper.prototype, "appendEvent", void 0);
CallsControllerFunctionCodeHelper = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperFormatter)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperObfuscator)),
    __param(3, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(4, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_b = typeof TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory !== "undefined" && TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory) === "function" ? _b : Object, typeof (_c = typeof ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter !== "undefined" && ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter) === "function" ? _c : Object, typeof (_d = typeof ICustomCodeHelperObfuscator_1.ICustomCodeHelperObfuscator !== "undefined" && ICustomCodeHelperObfuscator_1.ICustomCodeHelperObfuscator) === "function" ? _d : Object, typeof (_e = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _e : Object, typeof (_f = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _f : Object])
], CallsControllerFunctionCodeHelper);
exports.CallsControllerFunctionCodeHelper = CallsControllerFunctionCodeHelper;


/***/ }),

/***/ "./src/custom-code-helpers/common/templates/GlobalVariableNoEvalTemplate.ts":
/*!**********************************************************************************!*\
  !*** ./src/custom-code-helpers/common/templates/GlobalVariableNoEvalTemplate.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalVariableNoEvalTemplate = void 0;
function GlobalVariableNoEvalTemplate() {
    return `
        const that = (typeof window !== 'undefined'
           ? window
           : (typeof process === 'object' &&
              typeof require === 'function' &&
              typeof global === 'object')
             ? global
             : this);
    `;
}
exports.GlobalVariableNoEvalTemplate = GlobalVariableNoEvalTemplate;


/***/ }),

/***/ "./src/custom-code-helpers/common/templates/GlobalVariableTemplate1.ts":
/*!*****************************************************************************!*\
  !*** ./src/custom-code-helpers/common/templates/GlobalVariableTemplate1.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalVariableTemplate1 = void 0;
function GlobalVariableTemplate1() {
    return `
        let that;
        
        try {
            const getGlobal = Function('return (function() ' + '{}.constructor("return this")( )' + ');');
            
            that = getGlobal();
        } catch (e) {
            that = window;
        }
    `;
}
exports.GlobalVariableTemplate1 = GlobalVariableTemplate1;


/***/ }),

/***/ "./src/custom-code-helpers/common/templates/GlobalVariableTemplate2.ts":
/*!*****************************************************************************!*\
  !*** ./src/custom-code-helpers/common/templates/GlobalVariableTemplate2.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalVariableTemplate2 = void 0;
function GlobalVariableTemplate2() {
    return `
        const getGlobal = function () {
            let globalObject;
        
            try {
                globalObject = Function('return (function() ' + '{}.constructor("return this")( )' + ');')();
            } catch (e) {
                globalObject = window;
            }
            
            return globalObject;
        };
        const that = getGlobal();
    `;
}
exports.GlobalVariableTemplate2 = GlobalVariableTemplate2;


/***/ }),

/***/ "./src/custom-code-helpers/common/templates/SingleCallControllerTemplate.ts":
/*!**********************************************************************************!*\
  !*** ./src/custom-code-helpers/common/templates/SingleCallControllerTemplate.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleCallControllerTemplate = void 0;
function SingleCallControllerTemplate() {
    return `
        const {callControllerFunctionName} = (function(){
            let firstCall = true;
            
            return function (context, fn){
                const rfn = firstCall ? function(){
                    if(fn){
                        const res = fn.apply(context, arguments);
                        fn = null;
                        return res;
                    }
                } : function(){}
                
                firstCall = false;
                
                return rfn;
            }
        })();
    `;
}
exports.SingleCallControllerTemplate = SingleCallControllerTemplate;


/***/ }),

/***/ "./src/custom-code-helpers/console-output/ConsoleOutputDisableCodeHelper.ts":
/*!**********************************************************************************!*\
  !*** ./src/custom-code-helpers/console-output/ConsoleOutputDisableCodeHelper.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleOutputDisableCodeHelper = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TIdentifierNamesGeneratorFactory_1 = __webpack_require__(/*! ../../types/container/generators/TIdentifierNamesGeneratorFactory */ "./src/types/container/generators/TIdentifierNamesGeneratorFactory.ts");
const ICustomCodeHelperFormatter_1 = __webpack_require__(/*! ../../interfaces/custom-code-helpers/ICustomCodeHelperFormatter */ "./src/interfaces/custom-code-helpers/ICustomCodeHelperFormatter.ts");
const ICustomCodeHelperObfuscator_1 = __webpack_require__(/*! ../../interfaces/custom-code-helpers/ICustomCodeHelperObfuscator */ "./src/interfaces/custom-code-helpers/ICustomCodeHelperObfuscator.ts");
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const ObfuscationTarget_1 = __webpack_require__(/*! ../../enums/ObfuscationTarget */ "./src/enums/ObfuscationTarget.ts");
const ConsoleOutputDisableExpressionTemplate_1 = __webpack_require__(/*! ./templates/ConsoleOutputDisableExpressionTemplate */ "./src/custom-code-helpers/console-output/templates/ConsoleOutputDisableExpressionTemplate.ts");
const GlobalVariableNoEvalTemplate_1 = __webpack_require__(/*! ../common/templates/GlobalVariableNoEvalTemplate */ "./src/custom-code-helpers/common/templates/GlobalVariableNoEvalTemplate.ts");
const Initializable_1 = __webpack_require__(/*! ../../decorators/Initializable */ "./src/decorators/Initializable.ts");
const AbstractCustomCodeHelper_1 = __webpack_require__(/*! ../AbstractCustomCodeHelper */ "./src/custom-code-helpers/AbstractCustomCodeHelper.ts");
const NodeUtils_1 = __webpack_require__(/*! ../../node/NodeUtils */ "./src/node/NodeUtils.ts");
let ConsoleOutputDisableCodeHelper = class ConsoleOutputDisableCodeHelper extends AbstractCustomCodeHelper_1.AbstractCustomCodeHelper {
    constructor(identifierNamesGeneratorFactory, customCodeHelperFormatter, customCodeHelperObfuscator, randomGenerator, options) {
        super(identifierNamesGeneratorFactory, customCodeHelperFormatter, customCodeHelperObfuscator, randomGenerator, options);
    }
    initialize(callsControllerFunctionName, consoleOutputDisableFunctionName) {
        this.callsControllerFunctionName = callsControllerFunctionName;
        this.consoleOutputDisableFunctionName = consoleOutputDisableFunctionName;
    }
    getNodeStructure(codeHelperTemplate) {
        return NodeUtils_1.NodeUtils.convertCodeToStructure(codeHelperTemplate);
    }
    getCodeHelperTemplate() {
        const globalVariableTemplate = this.options.target !== ObfuscationTarget_1.ObfuscationTarget.BrowserNoEval
            ? this.getGlobalVariableTemplate()
            : GlobalVariableNoEvalTemplate_1.GlobalVariableNoEvalTemplate();
        return this.customCodeHelperFormatter.formatTemplate(ConsoleOutputDisableExpressionTemplate_1.ConsoleOutputDisableExpressionTemplate(), {
            callControllerFunctionName: this.callsControllerFunctionName,
            consoleLogDisableFunctionName: this.consoleOutputDisableFunctionName,
            globalVariableTemplate
        });
    }
};
__decorate([
    Initializable_1.initializable(),
    __metadata("design:type", String)
], ConsoleOutputDisableCodeHelper.prototype, "callsControllerFunctionName", void 0);
__decorate([
    Initializable_1.initializable(),
    __metadata("design:type", String)
], ConsoleOutputDisableCodeHelper.prototype, "consoleOutputDisableFunctionName", void 0);
ConsoleOutputDisableCodeHelper = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperFormatter)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperObfuscator)),
    __param(3, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(4, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory !== "undefined" && TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory) === "function" ? _a : Object, typeof (_b = typeof ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter !== "undefined" && ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter) === "function" ? _b : Object, typeof (_c = typeof ICustomCodeHelperObfuscator_1.ICustomCodeHelperObfuscator !== "undefined" && ICustomCodeHelperObfuscator_1.ICustomCodeHelperObfuscator) === "function" ? _c : Object, typeof (_d = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _d : Object, typeof (_e = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _e : Object])
], ConsoleOutputDisableCodeHelper);
exports.ConsoleOutputDisableCodeHelper = ConsoleOutputDisableCodeHelper;


/***/ }),

/***/ "./src/custom-code-helpers/console-output/group/ConsoleOutputCodeHelperGroup.ts":
/*!**************************************************************************************!*\
  !*** ./src/custom-code-helpers/console-output/group/ConsoleOutputCodeHelperGroup.ts ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleOutputCodeHelperGroup = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TCustomCodeHelperFactory_1 = __webpack_require__(/*! ../../../types/container/custom-code-helpers/TCustomCodeHelperFactory */ "./src/types/container/custom-code-helpers/TCustomCodeHelperFactory.ts");
const TIdentifierNamesGeneratorFactory_1 = __webpack_require__(/*! ../../../types/container/generators/TIdentifierNamesGeneratorFactory */ "./src/types/container/generators/TIdentifierNamesGeneratorFactory.ts");
const IOptions_1 = __webpack_require__(/*! ../../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const Initializable_1 = __webpack_require__(/*! ../../../decorators/Initializable */ "./src/decorators/Initializable.ts");
const CustomCodeHelper_1 = __webpack_require__(/*! ../../../enums/custom-code-helpers/CustomCodeHelper */ "./src/enums/custom-code-helpers/CustomCodeHelper.ts");
const ObfuscationEvent_1 = __webpack_require__(/*! ../../../enums/event-emitters/ObfuscationEvent */ "./src/enums/event-emitters/ObfuscationEvent.ts");
const AbstractCustomCodeHelperGroup_1 = __webpack_require__(/*! ../../AbstractCustomCodeHelperGroup */ "./src/custom-code-helpers/AbstractCustomCodeHelperGroup.ts");
const NodeAppender_1 = __webpack_require__(/*! ../../../node/NodeAppender */ "./src/node/NodeAppender.ts");
const NodeLexicalScopeUtils_1 = __webpack_require__(/*! ../../../node/NodeLexicalScopeUtils */ "./src/node/NodeLexicalScopeUtils.ts");
const NodeGuards_1 = __webpack_require__(/*! ../../../node/NodeGuards */ "./src/node/NodeGuards.ts");
let ConsoleOutputCodeHelperGroup = class ConsoleOutputCodeHelperGroup extends AbstractCustomCodeHelperGroup_1.AbstractCustomCodeHelperGroup {
    constructor(customCodeHelperFactory, identifierNamesGeneratorFactory, randomGenerator, options) {
        super(identifierNamesGeneratorFactory, randomGenerator, options);
        this.appendEvent = ObfuscationEvent_1.ObfuscationEvent.BeforeObfuscation;
        this.customCodeHelperFactory = customCodeHelperFactory;
    }
    appendNodes(nodeWithStatements, callsGraphData) {
        var _a;
        if (!this.options.disableConsoleOutput) {
            return;
        }
        const randomCallsGraphIndex = this.getRandomCallsGraphIndex(callsGraphData.length);
        const consoleOutputDisableHostNode = callsGraphData.length
            ? NodeAppender_1.NodeAppender.getOptimalBlockScope(callsGraphData, randomCallsGraphIndex)
            : nodeWithStatements;
        const callsControllerHostNode = callsGraphData.length
            ? NodeAppender_1.NodeAppender.getOptimalBlockScope(callsGraphData, randomCallsGraphIndex, 1)
            : nodeWithStatements;
        const consoleOutputDisableLexicalScopeNode = (_a = NodeLexicalScopeUtils_1.NodeLexicalScopeUtils
            .getLexicalScope(consoleOutputDisableHostNode)) !== null && _a !== void 0 ? _a : null;
        const consoleOutputDisableFunctionName = consoleOutputDisableLexicalScopeNode
            && NodeGuards_1.NodeGuards.isProgramNode(consoleOutputDisableLexicalScopeNode)
            ? this.identifierNamesGenerator.generate(consoleOutputDisableLexicalScopeNode)
            : this.randomGenerator.getRandomString(5);
        const callsControllerFunctionName = consoleOutputDisableLexicalScopeNode
            && NodeGuards_1.NodeGuards.isProgramNode(consoleOutputDisableLexicalScopeNode)
            ? this.identifierNamesGenerator.generate(consoleOutputDisableLexicalScopeNode)
            : this.randomGenerator.getRandomString(5);
        this.appendCustomNodeIfExist(CustomCodeHelper_1.CustomCodeHelper.ConsoleOutputDisable, (customCodeHelper) => {
            customCodeHelper.initialize(callsControllerFunctionName, consoleOutputDisableFunctionName);
            NodeAppender_1.NodeAppender.prepend(consoleOutputDisableHostNode, customCodeHelper.getNode());
        });
        this.appendCustomNodeIfExist(CustomCodeHelper_1.CustomCodeHelper.CallsControllerFunction, (customCodeHelper) => {
            customCodeHelper.initialize(this.appendEvent, callsControllerFunctionName);
            NodeAppender_1.NodeAppender.prepend(callsControllerHostNode, customCodeHelper.getNode());
        });
    }
    initialize() {
        this.customCodeHelpers = new Map();
        if (!this.options.disableConsoleOutput) {
            return;
        }
        const consoleOutputDisableExpressionCodeHelper = this.customCodeHelperFactory(CustomCodeHelper_1.CustomCodeHelper.ConsoleOutputDisable);
        const callsControllerFunctionCodeHelper = this.customCodeHelperFactory(CustomCodeHelper_1.CustomCodeHelper.CallsControllerFunction);
        this.customCodeHelpers.set(CustomCodeHelper_1.CustomCodeHelper.ConsoleOutputDisable, consoleOutputDisableExpressionCodeHelper);
        this.customCodeHelpers.set(CustomCodeHelper_1.CustomCodeHelper.CallsControllerFunction, callsControllerFunctionCodeHelper);
    }
};
__decorate([
    Initializable_1.initializable(),
    __metadata("design:type", typeof (_a = typeof Map !== "undefined" && Map) === "function" ? _a : Object)
], ConsoleOutputCodeHelperGroup.prototype, "customCodeHelpers", void 0);
ConsoleOutputCodeHelperGroup = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__ICustomCodeHelper)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(3, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_b = typeof TCustomCodeHelperFactory_1.TCustomCodeHelperFactory !== "undefined" && TCustomCodeHelperFactory_1.TCustomCodeHelperFactory) === "function" ? _b : Object, typeof (_c = typeof TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory !== "undefined" && TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory) === "function" ? _c : Object, typeof (_d = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _d : Object, typeof (_e = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _e : Object])
], ConsoleOutputCodeHelperGroup);
exports.ConsoleOutputCodeHelperGroup = ConsoleOutputCodeHelperGroup;


/***/ }),

/***/ "./src/custom-code-helpers/console-output/templates/ConsoleOutputDisableExpressionTemplate.ts":
/*!****************************************************************************************************!*\
  !*** ./src/custom-code-helpers/console-output/templates/ConsoleOutputDisableExpressionTemplate.ts ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleOutputDisableExpressionTemplate = void 0;
function ConsoleOutputDisableExpressionTemplate() {
    return `
        const {consoleLogDisableFunctionName} = {callControllerFunctionName}(this, function () {
            const func = function () {};
            
            {globalVariableTemplate}
                        
            if (!that.console) {
                that.console = (function (func){
                    const c = {};
                    
                    c.log = func;
                    c.warn = func;
                    c.debug = func;
                    c.info = func;
                    c.error = func;
                    c.exception = func;
                    c.table = func;
                    c.trace = func;
                    
                    return c;
                })(func);
            } else {
                that.console.log = func;
                that.console.warn = func;
                that.console.debug = func;
                that.console.info = func;
                that.console.error = func;
                that.console.exception = func;
                that.console.table = func;
                that.console.trace = func;
            }
        });
        
        {consoleLogDisableFunctionName}();
    `;
}
exports.ConsoleOutputDisableExpressionTemplate = ConsoleOutputDisableExpressionTemplate;


/***/ }),

/***/ "./src/custom-code-helpers/debug-protection/DebugProtectionFunctionCallCodeHelper.ts":
/*!*******************************************************************************************!*\
  !*** ./src/custom-code-helpers/debug-protection/DebugProtectionFunctionCallCodeHelper.ts ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebugProtectionFunctionCallCodeHelper = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TIdentifierNamesGeneratorFactory_1 = __webpack_require__(/*! ../../types/container/generators/TIdentifierNamesGeneratorFactory */ "./src/types/container/generators/TIdentifierNamesGeneratorFactory.ts");
const ICustomCodeHelperFormatter_1 = __webpack_require__(/*! ../../interfaces/custom-code-helpers/ICustomCodeHelperFormatter */ "./src/interfaces/custom-code-helpers/ICustomCodeHelperFormatter.ts");
const ICustomCodeHelperObfuscator_1 = __webpack_require__(/*! ../../interfaces/custom-code-helpers/ICustomCodeHelperObfuscator */ "./src/interfaces/custom-code-helpers/ICustomCodeHelperObfuscator.ts");
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const Initializable_1 = __webpack_require__(/*! ../../decorators/Initializable */ "./src/decorators/Initializable.ts");
const DebugProtectionFunctionCallTemplate_1 = __webpack_require__(/*! ./templates/debug-protection-function-call/DebugProtectionFunctionCallTemplate */ "./src/custom-code-helpers/debug-protection/templates/debug-protection-function-call/DebugProtectionFunctionCallTemplate.ts");
const AbstractCustomCodeHelper_1 = __webpack_require__(/*! ../AbstractCustomCodeHelper */ "./src/custom-code-helpers/AbstractCustomCodeHelper.ts");
const NodeUtils_1 = __webpack_require__(/*! ../../node/NodeUtils */ "./src/node/NodeUtils.ts");
let DebugProtectionFunctionCallCodeHelper = class DebugProtectionFunctionCallCodeHelper extends AbstractCustomCodeHelper_1.AbstractCustomCodeHelper {
    constructor(identifierNamesGeneratorFactory, customCodeHelperFormatter, customCodeHelperObfuscator, randomGenerator, options) {
        super(identifierNamesGeneratorFactory, customCodeHelperFormatter, customCodeHelperObfuscator, randomGenerator, options);
    }
    initialize(debugProtectionFunctionName, callsControllerFunctionName) {
        this.debugProtectionFunctionName = debugProtectionFunctionName;
        this.callsControllerFunctionName = callsControllerFunctionName;
    }
    getNodeStructure(codeHelperTemplate) {
        return NodeUtils_1.NodeUtils.convertCodeToStructure(codeHelperTemplate);
    }
    getCodeHelperTemplate() {
        return this.customCodeHelperFormatter.formatTemplate(DebugProtectionFunctionCallTemplate_1.DebugProtectionFunctionCallTemplate(), {
            debugProtectionFunctionName: this.debugProtectionFunctionName,
            callControllerFunctionName: this.callsControllerFunctionName
        });
    }
};
__decorate([
    Initializable_1.initializable(),
    __metadata("design:type", String)
], DebugProtectionFunctionCallCodeHelper.prototype, "callsControllerFunctionName", void 0);
__decorate([
    Initializable_1.initializable(),
    __metadata("design:type", String)
], DebugProtectionFunctionCallCodeHelper.prototype, "debugProtectionFunctionName", void 0);
DebugProtectionFunctionCallCodeHelper = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperFormatter)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperObfuscator)),
    __param(3, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(4, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory !== "undefined" && TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory) === "function" ? _a : Object, typeof (_b = typeof ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter !== "undefined" && ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter) === "function" ? _b : Object, typeof (_c = typeof ICustomCodeHelperObfuscator_1.ICustomCodeHelperObfuscator !== "undefined" && ICustomCodeHelperObfuscator_1.ICustomCodeHelperObfuscator) === "function" ? _c : Object, typeof (_d = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _d : Object, typeof (_e = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _e : Object])
], DebugProtectionFunctionCallCodeHelper);
exports.DebugProtectionFunctionCallCodeHelper = DebugProtectionFunctionCallCodeHelper;


/***/ }),

/***/ "./src/custom-code-helpers/debug-protection/DebugProtectionFunctionCodeHelper.ts":
/*!***************************************************************************************!*\
  !*** ./src/custom-code-helpers/debug-protection/DebugProtectionFunctionCodeHelper.ts ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebugProtectionFunctionCodeHelper = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TIdentifierNamesGeneratorFactory_1 = __webpack_require__(/*! ../../types/container/generators/TIdentifierNamesGeneratorFactory */ "./src/types/container/generators/TIdentifierNamesGeneratorFactory.ts");
const ICustomCodeHelperFormatter_1 = __webpack_require__(/*! ../../interfaces/custom-code-helpers/ICustomCodeHelperFormatter */ "./src/interfaces/custom-code-helpers/ICustomCodeHelperFormatter.ts");
const ICustomCodeHelperObfuscator_1 = __webpack_require__(/*! ../../interfaces/custom-code-helpers/ICustomCodeHelperObfuscator */ "./src/interfaces/custom-code-helpers/ICustomCodeHelperObfuscator.ts");
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const ObfuscationTarget_1 = __webpack_require__(/*! ../../enums/ObfuscationTarget */ "./src/enums/ObfuscationTarget.ts");
const Initializable_1 = __webpack_require__(/*! ../../decorators/Initializable */ "./src/decorators/Initializable.ts");
const DebuggerTemplate_1 = __webpack_require__(/*! ./templates/debug-protection-function/DebuggerTemplate */ "./src/custom-code-helpers/debug-protection/templates/debug-protection-function/DebuggerTemplate.ts");
const DebuggerTemplateNoEval_1 = __webpack_require__(/*! ./templates/debug-protection-function/DebuggerTemplateNoEval */ "./src/custom-code-helpers/debug-protection/templates/debug-protection-function/DebuggerTemplateNoEval.ts");
const DebugProtectionFunctionTemplate_1 = __webpack_require__(/*! ./templates/debug-protection-function/DebugProtectionFunctionTemplate */ "./src/custom-code-helpers/debug-protection/templates/debug-protection-function/DebugProtectionFunctionTemplate.ts");
const AbstractCustomCodeHelper_1 = __webpack_require__(/*! ../AbstractCustomCodeHelper */ "./src/custom-code-helpers/AbstractCustomCodeHelper.ts");
const NodeUtils_1 = __webpack_require__(/*! ../../node/NodeUtils */ "./src/node/NodeUtils.ts");
let DebugProtectionFunctionCodeHelper = class DebugProtectionFunctionCodeHelper extends AbstractCustomCodeHelper_1.AbstractCustomCodeHelper {
    constructor(identifierNamesGeneratorFactory, customCodeHelperFormatter, customCodeHelperObfuscator, randomGenerator, options) {
        super(identifierNamesGeneratorFactory, customCodeHelperFormatter, customCodeHelperObfuscator, randomGenerator, options);
    }
    initialize(debugProtectionFunctionName) {
        this.debugProtectionFunctionName = debugProtectionFunctionName;
    }
    getNodeStructure(codeHelperTemplate) {
        return NodeUtils_1.NodeUtils.convertCodeToStructure(codeHelperTemplate);
    }
    getCodeHelperTemplate() {
        const debuggerTemplate = this.options.target !== ObfuscationTarget_1.ObfuscationTarget.BrowserNoEval
            ? DebuggerTemplate_1.DebuggerTemplate()
            : DebuggerTemplateNoEval_1.DebuggerTemplateNoEval();
        return this.customCodeHelperFormatter.formatTemplate(DebugProtectionFunctionTemplate_1.DebugProtectionFunctionTemplate(), {
            debuggerTemplate,
            debugProtectionFunctionName: this.debugProtectionFunctionName
        });
    }
};
__decorate([
    Initializable_1.initializable(),
    __metadata("design:type", String)
], DebugProtectionFunctionCodeHelper.prototype, "debugProtectionFunctionName", void 0);
DebugProtectionFunctionCodeHelper = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperFormatter)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperObfuscator)),
    __param(3, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(4, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory !== "undefined" && TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory) === "function" ? _a : Object, typeof (_b = typeof ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter !== "undefined" && ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter) === "function" ? _b : Object, typeof (_c = typeof ICustomCodeHelperObfuscator_1.ICustomCodeHelperObfuscator !== "undefined" && ICustomCodeHelperObfuscator_1.ICustomCodeHelperObfuscator) === "function" ? _c : Object, typeof (_d = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _d : Object, typeof (_e = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _e : Object])
], DebugProtectionFunctionCodeHelper);
exports.DebugProtectionFunctionCodeHelper = DebugProtectionFunctionCodeHelper;


/***/ }),

/***/ "./src/custom-code-helpers/debug-protection/DebugProtectionFunctionIntervalCodeHelper.ts":
/*!***********************************************************************************************!*\
  !*** ./src/custom-code-helpers/debug-protection/DebugProtectionFunctionIntervalCodeHelper.ts ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebugProtectionFunctionIntervalCodeHelper = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TIdentifierNamesGeneratorFactory_1 = __webpack_require__(/*! ../../types/container/generators/TIdentifierNamesGeneratorFactory */ "./src/types/container/generators/TIdentifierNamesGeneratorFactory.ts");
const ICustomCodeHelperFormatter_1 = __webpack_require__(/*! ../../interfaces/custom-code-helpers/ICustomCodeHelperFormatter */ "./src/interfaces/custom-code-helpers/ICustomCodeHelperFormatter.ts");
const ICustomCodeHelperObfuscator_1 = __webpack_require__(/*! ../../interfaces/custom-code-helpers/ICustomCodeHelperObfuscator */ "./src/interfaces/custom-code-helpers/ICustomCodeHelperObfuscator.ts");
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const Initializable_1 = __webpack_require__(/*! ../../decorators/Initializable */ "./src/decorators/Initializable.ts");
const DebugProtectionFunctionIntervalTemplate_1 = __webpack_require__(/*! ./templates/debug-protection-function-interval/DebugProtectionFunctionIntervalTemplate */ "./src/custom-code-helpers/debug-protection/templates/debug-protection-function-interval/DebugProtectionFunctionIntervalTemplate.ts");
const AbstractCustomCodeHelper_1 = __webpack_require__(/*! ../AbstractCustomCodeHelper */ "./src/custom-code-helpers/AbstractCustomCodeHelper.ts");
const NodeUtils_1 = __webpack_require__(/*! ../../node/NodeUtils */ "./src/node/NodeUtils.ts");
let DebugProtectionFunctionIntervalCodeHelper = class DebugProtectionFunctionIntervalCodeHelper extends AbstractCustomCodeHelper_1.AbstractCustomCodeHelper {
    constructor(identifierNamesGeneratorFactory, customCodeHelperFormatter, customCodeHelperObfuscator, randomGenerator, options) {
        super(identifierNamesGeneratorFactory, customCodeHelperFormatter, customCodeHelperObfuscator, randomGenerator, options);
    }
    initialize(debugProtectionFunctionName) {
        this.debugProtectionFunctionName = debugProtectionFunctionName;
    }
    getNodeStructure(codeHelperTemplate) {
        return NodeUtils_1.NodeUtils.convertCodeToStructure(codeHelperTemplate);
    }
    getCodeHelperTemplate() {
        return this.customCodeHelperFormatter.formatTemplate(DebugProtectionFunctionIntervalTemplate_1.DebugProtectionFunctionIntervalTemplate(), {
            debugProtectionFunctionName: this.debugProtectionFunctionName
        });
    }
};
__decorate([
    Initializable_1.initializable(),
    __metadata("design:type", String)
], DebugProtectionFunctionIntervalCodeHelper.prototype, "debugProtectionFunctionName", void 0);
DebugProtectionFunctionIntervalCodeHelper = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperFormatter)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperObfuscator)),
    __param(3, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(4, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory !== "undefined" && TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory) === "function" ? _a : Object, typeof (_b = typeof ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter !== "undefined" && ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter) === "function" ? _b : Object, typeof (_c = typeof ICustomCodeHelperObfuscator_1.ICustomCodeHelperObfuscator !== "undefined" && ICustomCodeHelperObfuscator_1.ICustomCodeHelperObfuscator) === "function" ? _c : Object, typeof (_d = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _d : Object, typeof (_e = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _e : Object])
], DebugProtectionFunctionIntervalCodeHelper);
exports.DebugProtectionFunctionIntervalCodeHelper = DebugProtectionFunctionIntervalCodeHelper;


/***/ }),

/***/ "./src/custom-code-helpers/debug-protection/group/DebugProtectionCodeHelperGroup.ts":
/*!******************************************************************************************!*\
  !*** ./src/custom-code-helpers/debug-protection/group/DebugProtectionCodeHelperGroup.ts ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebugProtectionCodeHelperGroup = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TCustomCodeHelperFactory_1 = __webpack_require__(/*! ../../../types/container/custom-code-helpers/TCustomCodeHelperFactory */ "./src/types/container/custom-code-helpers/TCustomCodeHelperFactory.ts");
const TIdentifierNamesGeneratorFactory_1 = __webpack_require__(/*! ../../../types/container/generators/TIdentifierNamesGeneratorFactory */ "./src/types/container/generators/TIdentifierNamesGeneratorFactory.ts");
const IOptions_1 = __webpack_require__(/*! ../../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const Initializable_1 = __webpack_require__(/*! ../../../decorators/Initializable */ "./src/decorators/Initializable.ts");
const CustomCodeHelper_1 = __webpack_require__(/*! ../../../enums/custom-code-helpers/CustomCodeHelper */ "./src/enums/custom-code-helpers/CustomCodeHelper.ts");
const ObfuscationEvent_1 = __webpack_require__(/*! ../../../enums/event-emitters/ObfuscationEvent */ "./src/enums/event-emitters/ObfuscationEvent.ts");
const AbstractCustomCodeHelperGroup_1 = __webpack_require__(/*! ../../AbstractCustomCodeHelperGroup */ "./src/custom-code-helpers/AbstractCustomCodeHelperGroup.ts");
const NodeAppender_1 = __webpack_require__(/*! ../../../node/NodeAppender */ "./src/node/NodeAppender.ts");
const NodeGuards_1 = __webpack_require__(/*! ../../../node/NodeGuards */ "./src/node/NodeGuards.ts");
const NodeLexicalScopeUtils_1 = __webpack_require__(/*! ../../../node/NodeLexicalScopeUtils */ "./src/node/NodeLexicalScopeUtils.ts");
let DebugProtectionCodeHelperGroup = class DebugProtectionCodeHelperGroup extends AbstractCustomCodeHelperGroup_1.AbstractCustomCodeHelperGroup {
    constructor(customCodeHelperFactory, identifierNamesGeneratorFactory, randomGenerator, options) {
        super(identifierNamesGeneratorFactory, randomGenerator, options);
        this.appendEvent = ObfuscationEvent_1.ObfuscationEvent.BeforeObfuscation;
        this.customCodeHelperFactory = customCodeHelperFactory;
    }
    appendNodes(nodeWithStatements, callsGraphData) {
        var _a;
        if (!this.options.debugProtection) {
            return;
        }
        const randomCallsGraphIndex = this.getRandomCallsGraphIndex(callsGraphData.length);
        const debugProtectionFunctionCallHostNode = callsGraphData.length
            ? NodeAppender_1.NodeAppender.getOptimalBlockScope(callsGraphData, randomCallsGraphIndex)
            : nodeWithStatements;
        const callsControllerHostNode = callsGraphData.length
            ? NodeAppender_1.NodeAppender.getOptimalBlockScope(callsGraphData, randomCallsGraphIndex, 1)
            : nodeWithStatements;
        const debugProtectionFunctionCallScopeNode = (_a = NodeLexicalScopeUtils_1.NodeLexicalScopeUtils
            .getLexicalScope(debugProtectionFunctionCallHostNode)) !== null && _a !== void 0 ? _a : null;
        const debugProtectionFunctionName = debugProtectionFunctionCallScopeNode
            && NodeGuards_1.NodeGuards.isProgramNode(debugProtectionFunctionCallScopeNode)
            ? this.identifierNamesGenerator.generate(debugProtectionFunctionCallScopeNode)
            : this.randomGenerator.getRandomString(5);
        const callsControllerFunctionName = debugProtectionFunctionCallScopeNode
            && NodeGuards_1.NodeGuards.isProgramNode(debugProtectionFunctionCallScopeNode)
            ? this.identifierNamesGenerator.generate(debugProtectionFunctionCallScopeNode)
            : this.randomGenerator.getRandomString(5);
        this.appendCustomNodeIfExist(CustomCodeHelper_1.CustomCodeHelper.DebugProtectionFunctionCall, (customCodeHelper) => {
            customCodeHelper.initialize(debugProtectionFunctionName, callsControllerFunctionName);
            NodeAppender_1.NodeAppender.prepend(debugProtectionFunctionCallHostNode, customCodeHelper.getNode());
        });
        this.appendCustomNodeIfExist(CustomCodeHelper_1.CustomCodeHelper.CallsControllerFunction, (customCodeHelper) => {
            customCodeHelper.initialize(this.appendEvent, callsControllerFunctionName);
            NodeAppender_1.NodeAppender.prepend(callsControllerHostNode, customCodeHelper.getNode());
        });
        this.appendCustomNodeIfExist(CustomCodeHelper_1.CustomCodeHelper.DebugProtectionFunction, (customCodeHelper) => {
            customCodeHelper.initialize(debugProtectionFunctionName);
            NodeAppender_1.NodeAppender.append(nodeWithStatements, customCodeHelper.getNode());
        });
        this.appendCustomNodeIfExist(CustomCodeHelper_1.CustomCodeHelper.DebugProtectionFunctionInterval, (customCodeHelper) => {
            const programBodyLength = NodeGuards_1.NodeGuards.isSwitchCaseNode(nodeWithStatements)
                ? nodeWithStatements.consequent.length
                : nodeWithStatements.body.length;
            const randomIndex = this.randomGenerator.getRandomInteger(0, programBodyLength);
            customCodeHelper.initialize(debugProtectionFunctionName);
            NodeAppender_1.NodeAppender.insertAtIndex(nodeWithStatements, customCodeHelper.getNode(), randomIndex);
        });
    }
    initialize() {
        this.customCodeHelpers = new Map();
        if (!this.options.debugProtection) {
            return;
        }
        const debugProtectionFunctionCodeHelper = this.customCodeHelperFactory(CustomCodeHelper_1.CustomCodeHelper.DebugProtectionFunction);
        const debugProtectionFunctionCallCodeHelper = this.customCodeHelperFactory(CustomCodeHelper_1.CustomCodeHelper.DebugProtectionFunctionCall);
        const debugProtectionFunctionIntervalCodeHelper = this.customCodeHelperFactory(CustomCodeHelper_1.CustomCodeHelper.DebugProtectionFunctionInterval);
        const callsControllerFunctionCodeHelper = this.customCodeHelperFactory(CustomCodeHelper_1.CustomCodeHelper.CallsControllerFunction);
        this.customCodeHelpers.set(CustomCodeHelper_1.CustomCodeHelper.DebugProtectionFunction, debugProtectionFunctionCodeHelper);
        this.customCodeHelpers.set(CustomCodeHelper_1.CustomCodeHelper.DebugProtectionFunctionCall, debugProtectionFunctionCallCodeHelper);
        if (this.options.debugProtectionInterval) {
            this.customCodeHelpers.set(CustomCodeHelper_1.CustomCodeHelper.DebugProtectionFunctionInterval, debugProtectionFunctionIntervalCodeHelper);
        }
        this.customCodeHelpers.set(CustomCodeHelper_1.CustomCodeHelper.CallsControllerFunction, callsControllerFunctionCodeHelper);
    }
};
__decorate([
    Initializable_1.initializable(),
    __metadata("design:type", typeof (_a = typeof Map !== "undefined" && Map) === "function" ? _a : Object)
], DebugProtectionCodeHelperGroup.prototype, "customCodeHelpers", void 0);
DebugProtectionCodeHelperGroup = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__ICustomCodeHelper)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(3, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_b = typeof TCustomCodeHelperFactory_1.TCustomCodeHelperFactory !== "undefined" && TCustomCodeHelperFactory_1.TCustomCodeHelperFactory) === "function" ? _b : Object, typeof (_c = typeof TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory !== "undefined" && TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory) === "function" ? _c : Object, typeof (_d = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _d : Object, typeof (_e = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _e : Object])
], DebugProtectionCodeHelperGroup);
exports.DebugProtectionCodeHelperGroup = DebugProtectionCodeHelperGroup;


/***/ }),

/***/ "./src/custom-code-helpers/debug-protection/templates/debug-protection-function-call/DebugProtectionFunctionCallTemplate.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/custom-code-helpers/debug-protection/templates/debug-protection-function-call/DebugProtectionFunctionCallTemplate.ts ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DebugProtectionFunctionCallTemplate = void 0;
function DebugProtectionFunctionCallTemplate() {
    return `
        (function () {
            {callControllerFunctionName}(
                this,
                function () {
                    const regExp1 = new RegExp('function *\\\\( *\\\\)');
                    const regExp2 = new RegExp('\\\\+\\\\+ *\\(?:[a-zA-Z_$][0-9a-zA-Z_$]*\\)', 'i');
           
                    const result = {debugProtectionFunctionName}('init');
                    
                    if (!regExp1.test(result + 'chain') || !regExp2.test(result + 'input')) {
                        result('0');
                    } else {
                        {debugProtectionFunctionName}();
                    }
                }
            )();
        })();
    `;
}
exports.DebugProtectionFunctionCallTemplate = DebugProtectionFunctionCallTemplate;


/***/ }),

/***/ "./src/custom-code-helpers/debug-protection/templates/debug-protection-function-interval/DebugProtectionFunctionIntervalTemplate.ts":
/*!******************************************************************************************************************************************!*\
  !*** ./src/custom-code-helpers/debug-protection/templates/debug-protection-function-interval/DebugProtectionFunctionIntervalTemplate.ts ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DebugProtectionFunctionIntervalTemplate = void 0;
function DebugProtectionFunctionIntervalTemplate() {
    return `
        setInterval(function () {
            {debugProtectionFunctionName}();
        }, 4000);
    `;
}
exports.DebugProtectionFunctionIntervalTemplate = DebugProtectionFunctionIntervalTemplate;


/***/ }),

/***/ "./src/custom-code-helpers/debug-protection/templates/debug-protection-function/DebugProtectionFunctionTemplate.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/custom-code-helpers/debug-protection/templates/debug-protection-function/DebugProtectionFunctionTemplate.ts ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DebugProtectionFunctionTemplate = void 0;
function DebugProtectionFunctionTemplate() {
    return `
        function {debugProtectionFunctionName} (ret) {
            function debuggerProtection (counter) {
            
                {debuggerTemplate}
                
                debuggerProtection(++counter);
            }
            
            try {
                if (ret) {
                    return debuggerProtection;
                } else {
                    debuggerProtection(0);
                }
            } catch (y) {}
        }
    `;
}
exports.DebugProtectionFunctionTemplate = DebugProtectionFunctionTemplate;


/***/ }),

/***/ "./src/custom-code-helpers/debug-protection/templates/debug-protection-function/DebuggerTemplate.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/custom-code-helpers/debug-protection/templates/debug-protection-function/DebuggerTemplate.ts ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DebuggerTemplate = void 0;
function DebuggerTemplate() {
    return `
        if (typeof counter === 'string') {
            return (function (arg) {}.constructor('while (true) {}').apply('counter'));
        } else {
            if (('' + counter / counter)['length'] !== 1 || counter % 20 === 0) {
                (function () {return true;}.constructor('debu' + 'gger').call('action'));
            } else {
                (function () {return false;}.constructor('debu' + 'gger').apply('stateObject'));
            }
            
        }
    `;
}
exports.DebuggerTemplate = DebuggerTemplate;


/***/ }),

/***/ "./src/custom-code-helpers/debug-protection/templates/debug-protection-function/DebuggerTemplateNoEval.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/custom-code-helpers/debug-protection/templates/debug-protection-function/DebuggerTemplateNoEval.ts ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DebuggerTemplateNoEval = void 0;
function DebuggerTemplateNoEval() {
    return `
        if (typeof counter === 'string') {
            const func = function () {
                while (true) {}
            };
            
            return func();
        } else {
            if (('' + counter / counter)['length'] !== 1 || counter % 20 === 0) {
                debugger;
            } else {
                debugger;
            }
            
        }
    `;
}
exports.DebuggerTemplateNoEval = DebuggerTemplateNoEval;


/***/ }),

/***/ "./src/custom-code-helpers/domain-lock/DomainLockCodeHelper.ts":
/*!*********************************************************************!*\
  !*** ./src/custom-code-helpers/domain-lock/DomainLockCodeHelper.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainLockCodeHelper = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TIdentifierNamesGeneratorFactory_1 = __webpack_require__(/*! ../../types/container/generators/TIdentifierNamesGeneratorFactory */ "./src/types/container/generators/TIdentifierNamesGeneratorFactory.ts");
const ICustomCodeHelperFormatter_1 = __webpack_require__(/*! ../../interfaces/custom-code-helpers/ICustomCodeHelperFormatter */ "./src/interfaces/custom-code-helpers/ICustomCodeHelperFormatter.ts");
const ICustomCodeHelperObfuscator_1 = __webpack_require__(/*! ../../interfaces/custom-code-helpers/ICustomCodeHelperObfuscator */ "./src/interfaces/custom-code-helpers/ICustomCodeHelperObfuscator.ts");
const ICryptUtils_1 = __webpack_require__(/*! ../../interfaces/utils/ICryptUtils */ "./src/interfaces/utils/ICryptUtils.ts");
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const ObfuscationTarget_1 = __webpack_require__(/*! ../../enums/ObfuscationTarget */ "./src/enums/ObfuscationTarget.ts");
const Initializable_1 = __webpack_require__(/*! ../../decorators/Initializable */ "./src/decorators/Initializable.ts");
const DomainLockTemplate_1 = __webpack_require__(/*! ./templates/DomainLockTemplate */ "./src/custom-code-helpers/domain-lock/templates/DomainLockTemplate.ts");
const GlobalVariableNoEvalTemplate_1 = __webpack_require__(/*! ../common/templates/GlobalVariableNoEvalTemplate */ "./src/custom-code-helpers/common/templates/GlobalVariableNoEvalTemplate.ts");
const AbstractCustomCodeHelper_1 = __webpack_require__(/*! ../AbstractCustomCodeHelper */ "./src/custom-code-helpers/AbstractCustomCodeHelper.ts");
const NodeUtils_1 = __webpack_require__(/*! ../../node/NodeUtils */ "./src/node/NodeUtils.ts");
let DomainLockCodeHelper = class DomainLockCodeHelper extends AbstractCustomCodeHelper_1.AbstractCustomCodeHelper {
    constructor(identifierNamesGeneratorFactory, customCodeHelperFormatter, customCodeHelperObfuscator, randomGenerator, options, cryptUtils) {
        super(identifierNamesGeneratorFactory, customCodeHelperFormatter, customCodeHelperObfuscator, randomGenerator, options);
        this.cryptUtils = cryptUtils;
    }
    initialize(callsControllerFunctionName, domainLockFunctionName) {
        this.callsControllerFunctionName = callsControllerFunctionName;
        this.domainLockFunctionName = domainLockFunctionName;
    }
    getNodeStructure(codeHelperTemplate) {
        return NodeUtils_1.NodeUtils.convertCodeToStructure(codeHelperTemplate);
    }
    getCodeHelperTemplate() {
        const domainsString = this.options.domainLock.join(';');
        const [hiddenDomainsString, diff] = this.cryptUtils.hideString(domainsString, domainsString.length * 3);
        const globalVariableTemplate = this.options.target !== ObfuscationTarget_1.ObfuscationTarget.BrowserNoEval
            ? this.getGlobalVariableTemplate()
            : GlobalVariableNoEvalTemplate_1.GlobalVariableNoEvalTemplate();
        return this.customCodeHelperFormatter.formatTemplate(DomainLockTemplate_1.DomainLockTemplate(), {
            callControllerFunctionName: this.callsControllerFunctionName,
            domainLockFunctionName: this.domainLockFunctionName,
            diff,
            domains: hiddenDomainsString,
            globalVariableTemplate
        });
    }
};
__decorate([
    Initializable_1.initializable(),
    __metadata("design:type", String)
], DomainLockCodeHelper.prototype, "callsControllerFunctionName", void 0);
__decorate([
    Initializable_1.initializable(),
    __metadata("design:type", String)
], DomainLockCodeHelper.prototype, "domainLockFunctionName", void 0);
DomainLockCodeHelper = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperFormatter)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperObfuscator)),
    __param(3, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(4, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __param(5, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ICryptUtils)),
    __metadata("design:paramtypes", [typeof (_a = typeof TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory !== "undefined" && TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory) === "function" ? _a : Object, typeof (_b = typeof ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter !== "undefined" && ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter) === "function" ? _b : Object, typeof (_c = typeof ICustomCodeHelperObfuscator_1.ICustomCodeHelperObfuscator !== "undefined" && ICustomCodeHelperObfuscator_1.ICustomCodeHelperObfuscator) === "function" ? _c : Object, typeof (_d = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _d : Object, typeof (_e = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _e : Object, typeof (_f = typeof ICryptUtils_1.ICryptUtils !== "undefined" && ICryptUtils_1.ICryptUtils) === "function" ? _f : Object])
], DomainLockCodeHelper);
exports.DomainLockCodeHelper = DomainLockCodeHelper;


/***/ }),

/***/ "./src/custom-code-helpers/domain-lock/group/DomainLockCustomCodeHelperGroup.ts":
/*!**************************************************************************************!*\
  !*** ./src/custom-code-helpers/domain-lock/group/DomainLockCustomCodeHelperGroup.ts ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainLockCustomCodeHelperGroup = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TCustomCodeHelperFactory_1 = __webpack_require__(/*! ../../../types/container/custom-code-helpers/TCustomCodeHelperFactory */ "./src/types/container/custom-code-helpers/TCustomCodeHelperFactory.ts");
const TIdentifierNamesGeneratorFactory_1 = __webpack_require__(/*! ../../../types/container/generators/TIdentifierNamesGeneratorFactory */ "./src/types/container/generators/TIdentifierNamesGeneratorFactory.ts");
const IOptions_1 = __webpack_require__(/*! ../../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const Initializable_1 = __webpack_require__(/*! ../../../decorators/Initializable */ "./src/decorators/Initializable.ts");
const CustomCodeHelper_1 = __webpack_require__(/*! ../../../enums/custom-code-helpers/CustomCodeHelper */ "./src/enums/custom-code-helpers/CustomCodeHelper.ts");
const ObfuscationEvent_1 = __webpack_require__(/*! ../../../enums/event-emitters/ObfuscationEvent */ "./src/enums/event-emitters/ObfuscationEvent.ts");
const AbstractCustomCodeHelperGroup_1 = __webpack_require__(/*! ../../AbstractCustomCodeHelperGroup */ "./src/custom-code-helpers/AbstractCustomCodeHelperGroup.ts");
const NodeAppender_1 = __webpack_require__(/*! ../../../node/NodeAppender */ "./src/node/NodeAppender.ts");
const NodeLexicalScopeUtils_1 = __webpack_require__(/*! ../../../node/NodeLexicalScopeUtils */ "./src/node/NodeLexicalScopeUtils.ts");
const NodeGuards_1 = __webpack_require__(/*! ../../../node/NodeGuards */ "./src/node/NodeGuards.ts");
let DomainLockCustomCodeHelperGroup = class DomainLockCustomCodeHelperGroup extends AbstractCustomCodeHelperGroup_1.AbstractCustomCodeHelperGroup {
    constructor(customCodeHelperFactory, identifierNamesGeneratorFactory, randomGenerator, options) {
        super(identifierNamesGeneratorFactory, randomGenerator, options);
        this.appendEvent = ObfuscationEvent_1.ObfuscationEvent.BeforeObfuscation;
        this.customCodeHelperFactory = customCodeHelperFactory;
    }
    appendNodes(nodeWithStatements, callsGraphData) {
        var _a;
        if (!this.options.domainLock.length) {
            return;
        }
        const randomCallsGraphIndex = this.getRandomCallsGraphIndex(callsGraphData.length);
        const domainLockFunctionHostNode = callsGraphData.length
            ? NodeAppender_1.NodeAppender.getOptimalBlockScope(callsGraphData, randomCallsGraphIndex)
            : nodeWithStatements;
        const callsControllerHostNode = callsGraphData.length
            ? NodeAppender_1.NodeAppender.getOptimalBlockScope(callsGraphData, randomCallsGraphIndex, 1)
            : nodeWithStatements;
        const domainLockFunctionLexicalScopeNode = (_a = NodeLexicalScopeUtils_1.NodeLexicalScopeUtils
            .getLexicalScope(domainLockFunctionHostNode)) !== null && _a !== void 0 ? _a : null;
        const domainLockFunctionName = domainLockFunctionLexicalScopeNode
            && NodeGuards_1.NodeGuards.isProgramNode(domainLockFunctionLexicalScopeNode)
            ? this.identifierNamesGenerator.generate(domainLockFunctionLexicalScopeNode)
            : this.identifierNamesGenerator.generateNext();
        const callsControllerFunctionName = domainLockFunctionLexicalScopeNode
            && NodeGuards_1.NodeGuards.isProgramNode(domainLockFunctionLexicalScopeNode)
            ? this.identifierNamesGenerator.generate(domainLockFunctionLexicalScopeNode)
            : this.identifierNamesGenerator.generateNext();
        this.appendCustomNodeIfExist(CustomCodeHelper_1.CustomCodeHelper.DomainLock, (customCodeHelper) => {
            customCodeHelper.initialize(callsControllerFunctionName, domainLockFunctionName);
            NodeAppender_1.NodeAppender.prepend(domainLockFunctionHostNode, customCodeHelper.getNode());
        });
        this.appendCustomNodeIfExist(CustomCodeHelper_1.CustomCodeHelper.CallsControllerFunction, (customCodeHelper) => {
            customCodeHelper.initialize(this.appendEvent, callsControllerFunctionName);
            NodeAppender_1.NodeAppender.prepend(callsControllerHostNode, customCodeHelper.getNode());
        });
    }
    initialize() {
        this.customCodeHelpers = new Map();
        if (!this.options.domainLock.length) {
            return;
        }
        const domainLockCodeHelper = this.customCodeHelperFactory(CustomCodeHelper_1.CustomCodeHelper.DomainLock);
        const callsControllerFunctionCodeHelper = this.customCodeHelperFactory(CustomCodeHelper_1.CustomCodeHelper.CallsControllerFunction);
        this.customCodeHelpers.set(CustomCodeHelper_1.CustomCodeHelper.DomainLock, domainLockCodeHelper);
        this.customCodeHelpers.set(CustomCodeHelper_1.CustomCodeHelper.CallsControllerFunction, callsControllerFunctionCodeHelper);
    }
};
__decorate([
    Initializable_1.initializable(),
    __metadata("design:type", typeof (_a = typeof Map !== "undefined" && Map) === "function" ? _a : Object)
], DomainLockCustomCodeHelperGroup.prototype, "customCodeHelpers", void 0);
DomainLockCustomCodeHelperGroup = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__ICustomCodeHelper)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(3, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_b = typeof TCustomCodeHelperFactory_1.TCustomCodeHelperFactory !== "undefined" && TCustomCodeHelperFactory_1.TCustomCodeHelperFactory) === "function" ? _b : Object, typeof (_c = typeof TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory !== "undefined" && TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory) === "function" ? _c : Object, typeof (_d = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _d : Object, typeof (_e = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _e : Object])
], DomainLockCustomCodeHelperGroup);
exports.DomainLockCustomCodeHelperGroup = DomainLockCustomCodeHelperGroup;


/***/ }),

/***/ "./src/custom-code-helpers/domain-lock/templates/DomainLockTemplate.ts":
/*!*****************************************************************************!*\
  !*** ./src/custom-code-helpers/domain-lock/templates/DomainLockTemplate.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainLockTemplate = void 0;
function DomainLockTemplate() {
    return `
        const {domainLockFunctionName} = {callControllerFunctionName}(this, function () {
            
            {globalVariableTemplate}
            
            const func = function () {
                return {
                    key: 'item',
                    value: 'attribute',
                    getAttribute: function () {
                        for (let i = 0; i < 1000; i--) {
                            const isPositive = i > 0;
                            
                            switch (isPositive) {
                                case true:
                                    return this.item + '_' + this.value + '_' + i;
                                default:
                                    this.item + '_' + this.value;
                            }
                        }
                    }()
                };
            };
                        
            const regExp = new RegExp("[{diff}]", "g");
            const domains = "{domains}".replace(regExp, "").split(";");
            let document;
            let domain;
            let location;
            let hostname;

            for (let d in that) {
                if (d.length == 8 && d.charCodeAt(7) == 116 && d.charCodeAt(5) == 101 && d.charCodeAt(3) == 117 && d.charCodeAt(0) == 100) {
                    document = d;
                
                    break;
                }
            }

            for (let d1 in that[document]) {
                if (d1.length == 6 && d1.charCodeAt(5) == 110 && d1.charCodeAt(0) == 100) {
                    domain = d1;
                    
                    break;
                }
            }

            if (!("~" > domain)) {
                for (let d2 in that[document]) {
                    if (d2.length == 8 && d2.charCodeAt(7) == 110 && d2.charCodeAt(0) == 108) {
                        location = d2;
                        
                        break;
                    }
                }

                for (let d3 in that[document][location]) {
                    if (d3.length == 8 && d3.charCodeAt(7) == 101 && d3.charCodeAt(0) == 104) {
                        hostname = d3;
                        
                        break;
                    }
                }
            }
            
            if (!document || !that[document]) {
                return;
            }
            
            const documentDomain = that[document][domain];
            const documentLocationHostName = !!that[document][location] && that[document][location][hostname];
            const currentDomain = documentDomain || documentLocationHostName;
          
            if (!currentDomain) {
                return;
            }
          
            let ok = false;
                        
            for (let i = 0; i < domains.length; i++) {
                const domain = domains[i];
                const position = currentDomain.length - domain.length;
                const lastIndex = currentDomain.indexOf(domain, position);
                const endsWith = lastIndex !== -1 && lastIndex === position;
                
                if (endsWith) {
                    if (currentDomain.length == domain.length || domain.indexOf(".") === 0) {
                        ok = true;
                    }
                }
            }
               
            if (!ok) {
                data;
            } else {
                return;
            }
            
            func();
        });

        {domainLockFunctionName}();
    `;
}
exports.DomainLockTemplate = DomainLockTemplate;


/***/ }),

/***/ "./src/custom-code-helpers/self-defending/SelfDefendingUnicodeCodeHelper.ts":
/*!**********************************************************************************!*\
  !*** ./src/custom-code-helpers/self-defending/SelfDefendingUnicodeCodeHelper.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelfDefendingUnicodeCodeHelper = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TIdentifierNamesGeneratorFactory_1 = __webpack_require__(/*! ../../types/container/generators/TIdentifierNamesGeneratorFactory */ "./src/types/container/generators/TIdentifierNamesGeneratorFactory.ts");
const ICustomCodeHelperFormatter_1 = __webpack_require__(/*! ../../interfaces/custom-code-helpers/ICustomCodeHelperFormatter */ "./src/interfaces/custom-code-helpers/ICustomCodeHelperFormatter.ts");
const ICustomCodeHelperObfuscator_1 = __webpack_require__(/*! ../../interfaces/custom-code-helpers/ICustomCodeHelperObfuscator */ "./src/interfaces/custom-code-helpers/ICustomCodeHelperObfuscator.ts");
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const ObfuscationTarget_1 = __webpack_require__(/*! ../../enums/ObfuscationTarget */ "./src/enums/ObfuscationTarget.ts");
const Initializable_1 = __webpack_require__(/*! ../../decorators/Initializable */ "./src/decorators/Initializable.ts");
const SelfDefendingTemplate_1 = __webpack_require__(/*! ./templates/SelfDefendingTemplate */ "./src/custom-code-helpers/self-defending/templates/SelfDefendingTemplate.ts");
const SelfDefendingNoEvalTemplate_1 = __webpack_require__(/*! ./templates/SelfDefendingNoEvalTemplate */ "./src/custom-code-helpers/self-defending/templates/SelfDefendingNoEvalTemplate.ts");
const AbstractCustomCodeHelper_1 = __webpack_require__(/*! ../AbstractCustomCodeHelper */ "./src/custom-code-helpers/AbstractCustomCodeHelper.ts");
const NodeUtils_1 = __webpack_require__(/*! ../../node/NodeUtils */ "./src/node/NodeUtils.ts");
const GlobalVariableNoEvalTemplate_1 = __webpack_require__(/*! ../common/templates/GlobalVariableNoEvalTemplate */ "./src/custom-code-helpers/common/templates/GlobalVariableNoEvalTemplate.ts");
let SelfDefendingUnicodeCodeHelper = class SelfDefendingUnicodeCodeHelper extends AbstractCustomCodeHelper_1.AbstractCustomCodeHelper {
    constructor(identifierNamesGeneratorFactory, customCodeHelperFormatter, customCodeHelperObfuscator, randomGenerator, options) {
        super(identifierNamesGeneratorFactory, customCodeHelperFormatter, customCodeHelperObfuscator, randomGenerator, options);
    }
    initialize(callsControllerFunctionName, selfDefendingFunctionName) {
        this.callsControllerFunctionName = callsControllerFunctionName;
        this.selfDefendingFunctionName = selfDefendingFunctionName;
    }
    getNodeStructure(codeHelperTemplate) {
        return NodeUtils_1.NodeUtils.convertCodeToStructure(codeHelperTemplate);
    }
    getCodeHelperTemplate() {
        const globalVariableTemplate = this.options.target !== ObfuscationTarget_1.ObfuscationTarget.BrowserNoEval
            ? this.getGlobalVariableTemplate()
            : GlobalVariableNoEvalTemplate_1.GlobalVariableNoEvalTemplate();
        const selfDefendingTemplate = this.options.target !== ObfuscationTarget_1.ObfuscationTarget.BrowserNoEval
            ? SelfDefendingTemplate_1.SelfDefendingTemplate()
            : SelfDefendingNoEvalTemplate_1.SelfDefendingNoEvalTemplate();
        return this.customCodeHelperFormatter.formatTemplate(selfDefendingTemplate, {
            callControllerFunctionName: this.callsControllerFunctionName,
            selfDefendingFunctionName: this.selfDefendingFunctionName,
            globalVariableTemplate
        });
    }
};
__decorate([
    Initializable_1.initializable(),
    __metadata("design:type", String)
], SelfDefendingUnicodeCodeHelper.prototype, "callsControllerFunctionName", void 0);
__decorate([
    Initializable_1.initializable(),
    __metadata("design:type", String)
], SelfDefendingUnicodeCodeHelper.prototype, "selfDefendingFunctionName", void 0);
SelfDefendingUnicodeCodeHelper = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperFormatter)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperObfuscator)),
    __param(3, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(4, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory !== "undefined" && TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory) === "function" ? _a : Object, typeof (_b = typeof ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter !== "undefined" && ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter) === "function" ? _b : Object, typeof (_c = typeof ICustomCodeHelperObfuscator_1.ICustomCodeHelperObfuscator !== "undefined" && ICustomCodeHelperObfuscator_1.ICustomCodeHelperObfuscator) === "function" ? _c : Object, typeof (_d = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _d : Object, typeof (_e = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _e : Object])
], SelfDefendingUnicodeCodeHelper);
exports.SelfDefendingUnicodeCodeHelper = SelfDefendingUnicodeCodeHelper;


/***/ }),

/***/ "./src/custom-code-helpers/self-defending/group/SelfDefendingCodeHelperGroup.ts":
/*!**************************************************************************************!*\
  !*** ./src/custom-code-helpers/self-defending/group/SelfDefendingCodeHelperGroup.ts ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelfDefendingCodeHelperGroup = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TCustomCodeHelperFactory_1 = __webpack_require__(/*! ../../../types/container/custom-code-helpers/TCustomCodeHelperFactory */ "./src/types/container/custom-code-helpers/TCustomCodeHelperFactory.ts");
const TIdentifierNamesGeneratorFactory_1 = __webpack_require__(/*! ../../../types/container/generators/TIdentifierNamesGeneratorFactory */ "./src/types/container/generators/TIdentifierNamesGeneratorFactory.ts");
const IOptions_1 = __webpack_require__(/*! ../../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const Initializable_1 = __webpack_require__(/*! ../../../decorators/Initializable */ "./src/decorators/Initializable.ts");
const CustomCodeHelper_1 = __webpack_require__(/*! ../../../enums/custom-code-helpers/CustomCodeHelper */ "./src/enums/custom-code-helpers/CustomCodeHelper.ts");
const ObfuscationEvent_1 = __webpack_require__(/*! ../../../enums/event-emitters/ObfuscationEvent */ "./src/enums/event-emitters/ObfuscationEvent.ts");
const AbstractCustomCodeHelperGroup_1 = __webpack_require__(/*! ../../AbstractCustomCodeHelperGroup */ "./src/custom-code-helpers/AbstractCustomCodeHelperGroup.ts");
const NodeAppender_1 = __webpack_require__(/*! ../../../node/NodeAppender */ "./src/node/NodeAppender.ts");
const NodeLexicalScopeUtils_1 = __webpack_require__(/*! ../../../node/NodeLexicalScopeUtils */ "./src/node/NodeLexicalScopeUtils.ts");
let SelfDefendingCodeHelperGroup = class SelfDefendingCodeHelperGroup extends AbstractCustomCodeHelperGroup_1.AbstractCustomCodeHelperGroup {
    constructor(customCodeHelperFactory, identifierNamesGeneratorFactory, randomGenerator, options) {
        super(identifierNamesGeneratorFactory, randomGenerator, options);
        this.appendEvent = ObfuscationEvent_1.ObfuscationEvent.BeforeObfuscation;
        this.customCodeHelperFactory = customCodeHelperFactory;
    }
    appendNodes(nodeWithStatements, callsGraphData) {
        var _a;
        if (!this.options.selfDefending) {
            return;
        }
        const randomCallsGraphIndex = this.getRandomCallsGraphIndex(callsGraphData.length);
        const selfDefendingFunctionHostNode = callsGraphData.length
            ? NodeAppender_1.NodeAppender.getOptimalBlockScope(callsGraphData, randomCallsGraphIndex)
            : nodeWithStatements;
        const callsControllerHostNode = callsGraphData.length
            ? NodeAppender_1.NodeAppender.getOptimalBlockScope(callsGraphData, randomCallsGraphIndex, 1)
            : nodeWithStatements;
        const selfDefendingFunctionLexicalScopeNode = (_a = NodeLexicalScopeUtils_1.NodeLexicalScopeUtils
            .getLexicalScope(selfDefendingFunctionHostNode)) !== null && _a !== void 0 ? _a : null;
        const selfDefendingFunctionName = selfDefendingFunctionLexicalScopeNode
            ? this.identifierNamesGenerator.generate(selfDefendingFunctionLexicalScopeNode)
            : this.identifierNamesGenerator.generateNext();
        const callsControllerFunctionName = selfDefendingFunctionLexicalScopeNode
            ? this.identifierNamesGenerator.generate(selfDefendingFunctionLexicalScopeNode)
            : this.identifierNamesGenerator.generateNext();
        this.appendCustomNodeIfExist(CustomCodeHelper_1.CustomCodeHelper.SelfDefendingUnicode, (customCodeHelper) => {
            customCodeHelper.initialize(callsControllerFunctionName, selfDefendingFunctionName);
            NodeAppender_1.NodeAppender.prepend(selfDefendingFunctionHostNode, customCodeHelper.getNode());
        });
        this.appendCustomNodeIfExist(CustomCodeHelper_1.CustomCodeHelper.CallsControllerFunction, (customCodeHelper) => {
            customCodeHelper.initialize(this.appendEvent, callsControllerFunctionName);
            NodeAppender_1.NodeAppender.prepend(callsControllerHostNode, customCodeHelper.getNode());
        });
    }
    initialize() {
        this.customCodeHelpers = new Map();
        if (!this.options.selfDefending) {
            return;
        }
        const selfDefendingUnicodeCodeHelper = this.customCodeHelperFactory(CustomCodeHelper_1.CustomCodeHelper.SelfDefendingUnicode);
        const callsControllerFunctionCodeHelper = this.customCodeHelperFactory(CustomCodeHelper_1.CustomCodeHelper.CallsControllerFunction);
        this.customCodeHelpers.set(CustomCodeHelper_1.CustomCodeHelper.SelfDefendingUnicode, selfDefendingUnicodeCodeHelper);
        this.customCodeHelpers.set(CustomCodeHelper_1.CustomCodeHelper.CallsControllerFunction, callsControllerFunctionCodeHelper);
    }
};
__decorate([
    Initializable_1.initializable(),
    __metadata("design:type", typeof (_a = typeof Map !== "undefined" && Map) === "function" ? _a : Object)
], SelfDefendingCodeHelperGroup.prototype, "customCodeHelpers", void 0);
SelfDefendingCodeHelperGroup = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__ICustomCodeHelper)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(3, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_b = typeof TCustomCodeHelperFactory_1.TCustomCodeHelperFactory !== "undefined" && TCustomCodeHelperFactory_1.TCustomCodeHelperFactory) === "function" ? _b : Object, typeof (_c = typeof TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory !== "undefined" && TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory) === "function" ? _c : Object, typeof (_d = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _d : Object, typeof (_e = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _e : Object])
], SelfDefendingCodeHelperGroup);
exports.SelfDefendingCodeHelperGroup = SelfDefendingCodeHelperGroup;


/***/ }),

/***/ "./src/custom-code-helpers/self-defending/templates/SelfDefendingNoEvalTemplate.ts":
/*!*****************************************************************************************!*\
  !*** ./src/custom-code-helpers/self-defending/templates/SelfDefendingNoEvalTemplate.ts ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SelfDefendingNoEvalTemplate = void 0;
function SelfDefendingNoEvalTemplate() {
    return `
        const {selfDefendingFunctionName} = {callControllerFunctionName}(this, function () {
            {globalVariableTemplate}
        
            const test = function () {
                const regExp = new that.RegExp('^([^ ]+( +[^ ]+)+)+[^ ]}');
                
                return !regExp.test({selfDefendingFunctionName});
            };
            
            return test();
        });
        
        {selfDefendingFunctionName}();
    `;
}
exports.SelfDefendingNoEvalTemplate = SelfDefendingNoEvalTemplate;


/***/ }),

/***/ "./src/custom-code-helpers/self-defending/templates/SelfDefendingTemplate.ts":
/*!***********************************************************************************!*\
  !*** ./src/custom-code-helpers/self-defending/templates/SelfDefendingTemplate.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SelfDefendingTemplate = void 0;
function SelfDefendingTemplate() {
    return `
        const {selfDefendingFunctionName} = {callControllerFunctionName}(this, function () {
            const test = function () {
                const regExp = test
                    .constructor('return /" + this + "/')()
                    .compile('^([^ ]+( +[^ ]+)+)+[^ ]}');
                
                return !regExp.test({selfDefendingFunctionName});
            };
            
            return test();
        });
        
        {selfDefendingFunctionName}();
    `;
}
exports.SelfDefendingTemplate = SelfDefendingTemplate;


/***/ }),

/***/ "./src/custom-code-helpers/string-array/StringArrayCallsWrapperCodeHelper.ts":
/*!***********************************************************************************!*\
  !*** ./src/custom-code-helpers/string-array/StringArrayCallsWrapperCodeHelper.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringArrayCallsWrapperCodeHelper = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TIdentifierNamesGeneratorFactory_1 = __webpack_require__(/*! ../../types/container/generators/TIdentifierNamesGeneratorFactory */ "./src/types/container/generators/TIdentifierNamesGeneratorFactory.ts");
const ICustomCodeHelperFormatter_1 = __webpack_require__(/*! ../../interfaces/custom-code-helpers/ICustomCodeHelperFormatter */ "./src/interfaces/custom-code-helpers/ICustomCodeHelperFormatter.ts");
const ICustomCodeHelperObfuscator_1 = __webpack_require__(/*! ../../interfaces/custom-code-helpers/ICustomCodeHelperObfuscator */ "./src/interfaces/custom-code-helpers/ICustomCodeHelperObfuscator.ts");
const IEscapeSequenceEncoder_1 = __webpack_require__(/*! ../../interfaces/utils/IEscapeSequenceEncoder */ "./src/interfaces/utils/IEscapeSequenceEncoder.ts");
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const ObfuscationTarget_1 = __webpack_require__(/*! ../../enums/ObfuscationTarget */ "./src/enums/ObfuscationTarget.ts");
const StringArrayEncoding_1 = __webpack_require__(/*! ../../enums/StringArrayEncoding */ "./src/enums/StringArrayEncoding.ts");
const Initializable_1 = __webpack_require__(/*! ../../decorators/Initializable */ "./src/decorators/Initializable.ts");
const AtobTemplate_1 = __webpack_require__(/*! ./templates/string-array-calls-wrapper/AtobTemplate */ "./src/custom-code-helpers/string-array/templates/string-array-calls-wrapper/AtobTemplate.ts");
const GlobalVariableNoEvalTemplate_1 = __webpack_require__(/*! ../common/templates/GlobalVariableNoEvalTemplate */ "./src/custom-code-helpers/common/templates/GlobalVariableNoEvalTemplate.ts");
const Rc4Template_1 = __webpack_require__(/*! ./templates/string-array-calls-wrapper/Rc4Template */ "./src/custom-code-helpers/string-array/templates/string-array-calls-wrapper/Rc4Template.ts");
const SelfDefendingTemplate_1 = __webpack_require__(/*! ./templates/string-array-calls-wrapper/SelfDefendingTemplate */ "./src/custom-code-helpers/string-array/templates/string-array-calls-wrapper/SelfDefendingTemplate.ts");
const StringArrayBase64DecodeTemplate_1 = __webpack_require__(/*! ./templates/string-array-calls-wrapper/StringArrayBase64DecodeTemplate */ "./src/custom-code-helpers/string-array/templates/string-array-calls-wrapper/StringArrayBase64DecodeTemplate.ts");
const StringArrayCallsWrapperTemplate_1 = __webpack_require__(/*! ./templates/string-array-calls-wrapper/StringArrayCallsWrapperTemplate */ "./src/custom-code-helpers/string-array/templates/string-array-calls-wrapper/StringArrayCallsWrapperTemplate.ts");
const StringArrayRC4DecodeTemplate_1 = __webpack_require__(/*! ./templates/string-array-calls-wrapper/StringArrayRC4DecodeTemplate */ "./src/custom-code-helpers/string-array/templates/string-array-calls-wrapper/StringArrayRC4DecodeTemplate.ts");
const AbstractCustomCodeHelper_1 = __webpack_require__(/*! ../AbstractCustomCodeHelper */ "./src/custom-code-helpers/AbstractCustomCodeHelper.ts");
const NodeUtils_1 = __webpack_require__(/*! ../../node/NodeUtils */ "./src/node/NodeUtils.ts");
let StringArrayCallsWrapperCodeHelper = class StringArrayCallsWrapperCodeHelper extends AbstractCustomCodeHelper_1.AbstractCustomCodeHelper {
    constructor(identifierNamesGeneratorFactory, customCodeHelperFormatter, customCodeHelperObfuscator, randomGenerator, options, escapeSequenceEncoder) {
        super(identifierNamesGeneratorFactory, customCodeHelperFormatter, customCodeHelperObfuscator, randomGenerator, options);
        this.escapeSequenceEncoder = escapeSequenceEncoder;
    }
    initialize(stringArrayName, stringArrayCallsWrapperName) {
        this.stringArrayName = stringArrayName;
        this.stringArrayCallsWrapperName = stringArrayCallsWrapperName;
    }
    getNodeStructure(codeHelperTemplate) {
        return NodeUtils_1.NodeUtils.convertCodeToStructure(codeHelperTemplate);
    }
    getCodeHelperTemplate() {
        const decodeCodeHelperTemplate = this.getDecodeStringArrayTemplate();
        const preservedNames = [`^${this.stringArrayName}$`];
        return this.customCodeHelperObfuscator.obfuscateTemplate(this.customCodeHelperFormatter.formatTemplate(StringArrayCallsWrapperTemplate_1.StringArrayCallsWrapperTemplate(), {
            decodeCodeHelperTemplate,
            stringArrayCallsWrapperName: this.stringArrayCallsWrapperName,
            stringArrayName: this.stringArrayName
        }), {
            reservedNames: preservedNames
        });
    }
    getDecodeStringArrayTemplate() {
        const globalVariableTemplate = this.options.target !== ObfuscationTarget_1.ObfuscationTarget.BrowserNoEval
            ? this.getGlobalVariableTemplate()
            : GlobalVariableNoEvalTemplate_1.GlobalVariableNoEvalTemplate();
        const atobPolyfill = this.customCodeHelperFormatter.formatTemplate(AtobTemplate_1.AtobTemplate(), { globalVariableTemplate });
        let decodeStringArrayTemplate = '';
        let selfDefendingCode = '';
        if (this.options.selfDefending) {
            selfDefendingCode = this.customCodeHelperFormatter.formatTemplate(SelfDefendingTemplate_1.SelfDefendingTemplate(this.randomGenerator, this.escapeSequenceEncoder), {
                stringArrayCallsWrapperName: this.stringArrayCallsWrapperName,
                stringArrayName: this.stringArrayName
            });
        }
        switch (this.options.stringArrayEncoding) {
            case StringArrayEncoding_1.StringArrayEncoding.Rc4:
                decodeStringArrayTemplate = this.customCodeHelperFormatter.formatTemplate(StringArrayRC4DecodeTemplate_1.StringArrayRC4DecodeTemplate(this.randomGenerator), {
                    atobPolyfill,
                    selfDefendingCode,
                    rc4Polyfill: Rc4Template_1.Rc4Template(),
                    stringArrayCallsWrapperName: this.stringArrayCallsWrapperName
                });
                break;
            case StringArrayEncoding_1.StringArrayEncoding.Base64:
                decodeStringArrayTemplate = this.customCodeHelperFormatter.formatTemplate(StringArrayBase64DecodeTemplate_1.StringArrayBase64DecodeTemplate(this.randomGenerator), {
                    atobPolyfill,
                    selfDefendingCode,
                    stringArrayCallsWrapperName: this.stringArrayCallsWrapperName
                });
        }
        return decodeStringArrayTemplate;
    }
};
__decorate([
    Initializable_1.initializable(),
    __metadata("design:type", String)
], StringArrayCallsWrapperCodeHelper.prototype, "stringArrayName", void 0);
__decorate([
    Initializable_1.initializable(),
    __metadata("design:type", String)
], StringArrayCallsWrapperCodeHelper.prototype, "stringArrayCallsWrapperName", void 0);
StringArrayCallsWrapperCodeHelper = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperFormatter)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperObfuscator)),
    __param(3, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(4, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __param(5, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IEscapeSequenceEncoder)),
    __metadata("design:paramtypes", [typeof (_a = typeof TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory !== "undefined" && TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory) === "function" ? _a : Object, typeof (_b = typeof ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter !== "undefined" && ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter) === "function" ? _b : Object, typeof (_c = typeof ICustomCodeHelperObfuscator_1.ICustomCodeHelperObfuscator !== "undefined" && ICustomCodeHelperObfuscator_1.ICustomCodeHelperObfuscator) === "function" ? _c : Object, typeof (_d = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _d : Object, typeof (_e = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _e : Object, typeof (_f = typeof IEscapeSequenceEncoder_1.IEscapeSequenceEncoder !== "undefined" && IEscapeSequenceEncoder_1.IEscapeSequenceEncoder) === "function" ? _f : Object])
], StringArrayCallsWrapperCodeHelper);
exports.StringArrayCallsWrapperCodeHelper = StringArrayCallsWrapperCodeHelper;


/***/ }),

/***/ "./src/custom-code-helpers/string-array/StringArrayCodeHelper.ts":
/*!***********************************************************************!*\
  !*** ./src/custom-code-helpers/string-array/StringArrayCodeHelper.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringArrayCodeHelper = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TIdentifierNamesGeneratorFactory_1 = __webpack_require__(/*! ../../types/container/generators/TIdentifierNamesGeneratorFactory */ "./src/types/container/generators/TIdentifierNamesGeneratorFactory.ts");
const ICustomCodeHelperFormatter_1 = __webpack_require__(/*! ../../interfaces/custom-code-helpers/ICustomCodeHelperFormatter */ "./src/interfaces/custom-code-helpers/ICustomCodeHelperFormatter.ts");
const ICustomCodeHelperObfuscator_1 = __webpack_require__(/*! ../../interfaces/custom-code-helpers/ICustomCodeHelperObfuscator */ "./src/interfaces/custom-code-helpers/ICustomCodeHelperObfuscator.ts");
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const IStringArrayStorage_1 = __webpack_require__(/*! ../../interfaces/storages/string-array-storage/IStringArrayStorage */ "./src/interfaces/storages/string-array-storage/IStringArrayStorage.ts");
const Initializable_1 = __webpack_require__(/*! ../../decorators/Initializable */ "./src/decorators/Initializable.ts");
const StringArrayTemplate_1 = __webpack_require__(/*! ./templates/string-array/StringArrayTemplate */ "./src/custom-code-helpers/string-array/templates/string-array/StringArrayTemplate.ts");
const AbstractCustomCodeHelper_1 = __webpack_require__(/*! ../AbstractCustomCodeHelper */ "./src/custom-code-helpers/AbstractCustomCodeHelper.ts");
const NodeUtils_1 = __webpack_require__(/*! ../../node/NodeUtils */ "./src/node/NodeUtils.ts");
let StringArrayCodeHelper = class StringArrayCodeHelper extends AbstractCustomCodeHelper_1.AbstractCustomCodeHelper {
    constructor(identifierNamesGeneratorFactory, customCodeHelperFormatter, customCodeHelperObfuscator, randomGenerator, options) {
        super(identifierNamesGeneratorFactory, customCodeHelperFormatter, customCodeHelperObfuscator, randomGenerator, options);
    }
    initialize(stringArrayStorage, stringArrayName) {
        this.stringArrayStorage = stringArrayStorage;
        this.stringArrayName = stringArrayName;
    }
    getNodeStructure(codeHelperTemplate) {
        return NodeUtils_1.NodeUtils.convertCodeToStructure(codeHelperTemplate);
    }
    getCodeHelperTemplate() {
        return this.customCodeHelperFormatter.formatTemplate(StringArrayTemplate_1.StringArrayTemplate(), {
            stringArrayName: this.stringArrayName,
            stringArray: this.stringArrayStorage.toString()
        });
    }
};
__decorate([
    Initializable_1.initializable(),
    __metadata("design:type", typeof (_a = typeof IStringArrayStorage_1.IStringArrayStorage !== "undefined" && IStringArrayStorage_1.IStringArrayStorage) === "function" ? _a : Object)
], StringArrayCodeHelper.prototype, "stringArrayStorage", void 0);
__decorate([
    Initializable_1.initializable(),
    __metadata("design:type", String)
], StringArrayCodeHelper.prototype, "stringArrayName", void 0);
StringArrayCodeHelper = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperFormatter)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperObfuscator)),
    __param(3, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(4, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_b = typeof TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory !== "undefined" && TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory) === "function" ? _b : Object, typeof (_c = typeof ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter !== "undefined" && ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter) === "function" ? _c : Object, typeof (_d = typeof ICustomCodeHelperObfuscator_1.ICustomCodeHelperObfuscator !== "undefined" && ICustomCodeHelperObfuscator_1.ICustomCodeHelperObfuscator) === "function" ? _d : Object, typeof (_e = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _e : Object, typeof (_f = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _f : Object])
], StringArrayCodeHelper);
exports.StringArrayCodeHelper = StringArrayCodeHelper;


/***/ }),

/***/ "./src/custom-code-helpers/string-array/StringArrayRotateFunctionCodeHelper.ts":
/*!*************************************************************************************!*\
  !*** ./src/custom-code-helpers/string-array/StringArrayRotateFunctionCodeHelper.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringArrayRotateFunctionCodeHelper = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TIdentifierNamesGeneratorFactory_1 = __webpack_require__(/*! ../../types/container/generators/TIdentifierNamesGeneratorFactory */ "./src/types/container/generators/TIdentifierNamesGeneratorFactory.ts");
const ICustomCodeHelperFormatter_1 = __webpack_require__(/*! ../../interfaces/custom-code-helpers/ICustomCodeHelperFormatter */ "./src/interfaces/custom-code-helpers/ICustomCodeHelperFormatter.ts");
const ICustomCodeHelperObfuscator_1 = __webpack_require__(/*! ../../interfaces/custom-code-helpers/ICustomCodeHelperObfuscator */ "./src/interfaces/custom-code-helpers/ICustomCodeHelperObfuscator.ts");
const IEscapeSequenceEncoder_1 = __webpack_require__(/*! ../../interfaces/utils/IEscapeSequenceEncoder */ "./src/interfaces/utils/IEscapeSequenceEncoder.ts");
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const Initializable_1 = __webpack_require__(/*! ../../decorators/Initializable */ "./src/decorators/Initializable.ts");
const SelfDefendingTemplate_1 = __webpack_require__(/*! ./templates/string-array-rotate-function/SelfDefendingTemplate */ "./src/custom-code-helpers/string-array/templates/string-array-rotate-function/SelfDefendingTemplate.ts");
const StringArrayRotateFunctionTemplate_1 = __webpack_require__(/*! ./templates/string-array-rotate-function/StringArrayRotateFunctionTemplate */ "./src/custom-code-helpers/string-array/templates/string-array-rotate-function/StringArrayRotateFunctionTemplate.ts");
const AbstractCustomCodeHelper_1 = __webpack_require__(/*! ../AbstractCustomCodeHelper */ "./src/custom-code-helpers/AbstractCustomCodeHelper.ts");
const NodeUtils_1 = __webpack_require__(/*! ../../node/NodeUtils */ "./src/node/NodeUtils.ts");
const NumberUtils_1 = __webpack_require__(/*! ../../utils/NumberUtils */ "./src/utils/NumberUtils.ts");
let StringArrayRotateFunctionCodeHelper = class StringArrayRotateFunctionCodeHelper extends AbstractCustomCodeHelper_1.AbstractCustomCodeHelper {
    constructor(identifierNamesGeneratorFactory, customCodeHelperFormatter, customCodeHelperObfuscator, randomGenerator, options, escapeSequenceEncoder) {
        super(identifierNamesGeneratorFactory, customCodeHelperFormatter, customCodeHelperObfuscator, randomGenerator, options);
        this.escapeSequenceEncoder = escapeSequenceEncoder;
    }
    initialize(stringArrayName, stringArrayRotationAmount) {
        this.stringArrayName = stringArrayName;
        this.stringArrayRotationAmount = stringArrayRotationAmount;
    }
    getNodeStructure(codeHelperTemplate) {
        return NodeUtils_1.NodeUtils.convertCodeToStructure(codeHelperTemplate);
    }
    getCodeHelperTemplate() {
        const timesName = this.identifierNamesGenerator.generateNext();
        const whileFunctionName = this.identifierNamesGenerator.generateNext();
        const preservedNames = [`^${this.stringArrayName}$`];
        let code = '';
        if (this.options.selfDefending) {
            code = this.customCodeHelperFormatter.formatTemplate(SelfDefendingTemplate_1.SelfDefendingTemplate(this.escapeSequenceEncoder), {
                timesName,
                whileFunctionName
            });
        }
        else {
            code = `${whileFunctionName}(++${timesName})`;
        }
        return this.customCodeHelperObfuscator.obfuscateTemplate(this.customCodeHelperFormatter.formatTemplate(StringArrayRotateFunctionTemplate_1.StringArrayRotateFunctionTemplate(), {
            code,
            timesName,
            whileFunctionName,
            stringArrayName: this.stringArrayName,
            stringArrayRotationAmount: NumberUtils_1.NumberUtils.toHex(this.stringArrayRotationAmount)
        }), {
            reservedNames: preservedNames
        });
    }
};
__decorate([
    Initializable_1.initializable(),
    __metadata("design:type", String)
], StringArrayRotateFunctionCodeHelper.prototype, "stringArrayName", void 0);
__decorate([
    Initializable_1.initializable(),
    __metadata("design:type", Number)
], StringArrayRotateFunctionCodeHelper.prototype, "stringArrayRotationAmount", void 0);
StringArrayRotateFunctionCodeHelper = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperFormatter)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperObfuscator)),
    __param(3, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(4, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __param(5, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IEscapeSequenceEncoder)),
    __metadata("design:paramtypes", [typeof (_a = typeof TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory !== "undefined" && TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory) === "function" ? _a : Object, typeof (_b = typeof ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter !== "undefined" && ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter) === "function" ? _b : Object, typeof (_c = typeof ICustomCodeHelperObfuscator_1.ICustomCodeHelperObfuscator !== "undefined" && ICustomCodeHelperObfuscator_1.ICustomCodeHelperObfuscator) === "function" ? _c : Object, typeof (_d = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _d : Object, typeof (_e = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _e : Object, typeof (_f = typeof IEscapeSequenceEncoder_1.IEscapeSequenceEncoder !== "undefined" && IEscapeSequenceEncoder_1.IEscapeSequenceEncoder) === "function" ? _f : Object])
], StringArrayRotateFunctionCodeHelper);
exports.StringArrayRotateFunctionCodeHelper = StringArrayRotateFunctionCodeHelper;


/***/ }),

/***/ "./src/custom-code-helpers/string-array/group/StringArrayCodeHelperGroup.ts":
/*!**********************************************************************************!*\
  !*** ./src/custom-code-helpers/string-array/group/StringArrayCodeHelperGroup.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringArrayCodeHelperGroup = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TCustomCodeHelperFactory_1 = __webpack_require__(/*! ../../../types/container/custom-code-helpers/TCustomCodeHelperFactory */ "./src/types/container/custom-code-helpers/TCustomCodeHelperFactory.ts");
const TIdentifierNamesGeneratorFactory_1 = __webpack_require__(/*! ../../../types/container/generators/TIdentifierNamesGeneratorFactory */ "./src/types/container/generators/TIdentifierNamesGeneratorFactory.ts");
const IOptions_1 = __webpack_require__(/*! ../../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const IStringArrayStorage_1 = __webpack_require__(/*! ../../../interfaces/storages/string-array-storage/IStringArrayStorage */ "./src/interfaces/storages/string-array-storage/IStringArrayStorage.ts");
const Initializable_1 = __webpack_require__(/*! ../../../decorators/Initializable */ "./src/decorators/Initializable.ts");
const CustomCodeHelper_1 = __webpack_require__(/*! ../../../enums/custom-code-helpers/CustomCodeHelper */ "./src/enums/custom-code-helpers/CustomCodeHelper.ts");
const ObfuscationEvent_1 = __webpack_require__(/*! ../../../enums/event-emitters/ObfuscationEvent */ "./src/enums/event-emitters/ObfuscationEvent.ts");
const AbstractCustomCodeHelperGroup_1 = __webpack_require__(/*! ../../AbstractCustomCodeHelperGroup */ "./src/custom-code-helpers/AbstractCustomCodeHelperGroup.ts");
const NodeAppender_1 = __webpack_require__(/*! ../../../node/NodeAppender */ "./src/node/NodeAppender.ts");
let StringArrayCodeHelperGroup = class StringArrayCodeHelperGroup extends AbstractCustomCodeHelperGroup_1.AbstractCustomCodeHelperGroup {
    constructor(customCodeHelperFactory, stringArrayStorage, identifierNamesGeneratorFactory, randomGenerator, options) {
        super(identifierNamesGeneratorFactory, randomGenerator, options);
        this.appendEvent = ObfuscationEvent_1.ObfuscationEvent.AfterObfuscation;
        this.customCodeHelperFactory = customCodeHelperFactory;
        this.stringArrayStorage = stringArrayStorage;
    }
    appendNodes(nodeWithStatements, callsGraphData) {
        if (!this.stringArrayStorage.getLength()) {
            return;
        }
        this.appendCustomNodeIfExist(CustomCodeHelper_1.CustomCodeHelper.StringArray, (customCodeHelper) => {
            NodeAppender_1.NodeAppender.prepend(nodeWithStatements, customCodeHelper.getNode());
        });
        this.appendCustomNodeIfExist(CustomCodeHelper_1.CustomCodeHelper.StringArrayCallsWrapper, (customCodeHelper) => {
            NodeAppender_1.NodeAppender.insertAtIndex(nodeWithStatements, customCodeHelper.getNode(), 1);
        });
        this.appendCustomNodeIfExist(CustomCodeHelper_1.CustomCodeHelper.StringArrayRotateFunction, (customCodeHelper) => {
            NodeAppender_1.NodeAppender.insertAtIndex(nodeWithStatements, customCodeHelper.getNode(), 1);
        });
    }
    initialize() {
        this.customCodeHelpers = new Map();
        if (!this.options.stringArray) {
            return;
        }
        const stringArrayCodeHelper = this.customCodeHelperFactory(CustomCodeHelper_1.CustomCodeHelper.StringArray);
        const stringArrayCallsWrapperCodeHelper = this.customCodeHelperFactory(CustomCodeHelper_1.CustomCodeHelper.StringArrayCallsWrapper);
        const stringArrayRotateFunctionCodeHelper = this.customCodeHelperFactory(CustomCodeHelper_1.CustomCodeHelper.StringArrayRotateFunction);
        const stringArrayName = this.stringArrayStorage.getStorageName();
        const stringArrayCallsWrapperName = this.stringArrayStorage.getStorageCallsWrapperName();
        const stringArrayRotationAmount = this.stringArrayStorage.getRotationAmount();
        stringArrayCodeHelper.initialize(this.stringArrayStorage, stringArrayName);
        stringArrayCallsWrapperCodeHelper.initialize(stringArrayName, stringArrayCallsWrapperName);
        stringArrayRotateFunctionCodeHelper.initialize(stringArrayName, stringArrayRotationAmount);
        this.customCodeHelpers.set(CustomCodeHelper_1.CustomCodeHelper.StringArray, stringArrayCodeHelper);
        this.customCodeHelpers.set(CustomCodeHelper_1.CustomCodeHelper.StringArrayCallsWrapper, stringArrayCallsWrapperCodeHelper);
        if (this.options.rotateStringArray) {
            this.customCodeHelpers.set(CustomCodeHelper_1.CustomCodeHelper.StringArrayRotateFunction, stringArrayRotateFunctionCodeHelper);
        }
    }
};
__decorate([
    Initializable_1.initializable(),
    __metadata("design:type", typeof (_a = typeof Map !== "undefined" && Map) === "function" ? _a : Object)
], StringArrayCodeHelperGroup.prototype, "customCodeHelpers", void 0);
StringArrayCodeHelperGroup = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__ICustomCodeHelper)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IStringArrayStorage)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)),
    __param(3, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(4, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_b = typeof TCustomCodeHelperFactory_1.TCustomCodeHelperFactory !== "undefined" && TCustomCodeHelperFactory_1.TCustomCodeHelperFactory) === "function" ? _b : Object, typeof (_c = typeof IStringArrayStorage_1.IStringArrayStorage !== "undefined" && IStringArrayStorage_1.IStringArrayStorage) === "function" ? _c : Object, typeof (_d = typeof TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory !== "undefined" && TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory) === "function" ? _d : Object, typeof (_e = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _e : Object, typeof (_f = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _f : Object])
], StringArrayCodeHelperGroup);
exports.StringArrayCodeHelperGroup = StringArrayCodeHelperGroup;


/***/ }),

/***/ "./src/custom-code-helpers/string-array/templates/string-array-calls-wrapper/AtobTemplate.ts":
/*!***************************************************************************************************!*\
  !*** ./src/custom-code-helpers/string-array/templates/string-array-calls-wrapper/AtobTemplate.ts ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AtobTemplate = void 0;
function AtobTemplate() {
    return `
        (function () {
            {globalVariableTemplate}
            
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

            that.atob || (
                that.atob = function(input) {
                    const str = String(input).replace(/=+$/, '');
                    let output = '';
                    for (
                        let bc = 0, bs, buffer, idx = 0;
                        buffer = str.charAt(idx++);
                        ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
                            bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
                    ) {
                        buffer = chars.indexOf(buffer);
                    }
                    return output;
                }
            );
        })();
    `;
}
exports.AtobTemplate = AtobTemplate;


/***/ }),

/***/ "./src/custom-code-helpers/string-array/templates/string-array-calls-wrapper/Rc4Template.ts":
/*!**************************************************************************************************!*\
  !*** ./src/custom-code-helpers/string-array/templates/string-array-calls-wrapper/Rc4Template.ts ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Rc4Template = void 0;
function Rc4Template() {
    return `
        const rc4 = function (str, key) {
            let s = [], j = 0, x, res = '', newStr = '';
           
            str = atob(str);
                
            for (let k = 0, length = str.length; k < length; k++) {
                newStr += '%' + ('00' + str.charCodeAt(k).toString(16)).slice(-2);
            }
        
            str = decodeURIComponent(newStr);
                    	     
            let i;
                    	        
	        for (i = 0; i < 256; i++) {
                s[i] = i;
            }
 
            for (i = 0; i < 256; i++) {
                j = (j + s[i] + key.charCodeAt(i % key.length)) % 256;
                x = s[i];
                s[i] = s[j];
                s[j] = x;
            }
            
            i = 0;
            j = 0;
            
            for (let y = 0; y < str.length; y++) {
                i = (i + 1) % 256;
                j = (j + s[i]) % 256;
                x = s[i];
                s[i] = s[j];
                s[j] = x;
                res += String.fromCharCode(str.charCodeAt(y) ^ s[(s[i] + s[j]) % 256]);
            }
                      
            return res;
        }
    `;
}
exports.Rc4Template = Rc4Template;


/***/ }),

/***/ "./src/custom-code-helpers/string-array/templates/string-array-calls-wrapper/SelfDefendingTemplate.ts":
/*!************************************************************************************************************!*\
  !*** ./src/custom-code-helpers/string-array/templates/string-array-calls-wrapper/SelfDefendingTemplate.ts ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SelfDefendingTemplate = void 0;
function SelfDefendingTemplate(randomGenerator, escapeSequenceEncoder) {
    const identifierLength = 6;
    const rc4BytesIdentifier = randomGenerator.getRandomString(identifierLength);
    const statesIdentifier = randomGenerator.getRandomString(identifierLength);
    const newStateIdentifier = randomGenerator.getRandomString(identifierLength);
    const firstStateIdentifier = randomGenerator.getRandomString(identifierLength);
    const secondStateIdentifier = randomGenerator.getRandomString(identifierLength);
    const checkStateIdentifier = randomGenerator.getRandomString(identifierLength);
    const runStateIdentifier = randomGenerator.getRandomString(identifierLength);
    const getStateIdentifier = randomGenerator.getRandomString(identifierLength);
    const stateResultIdentifier = randomGenerator.getRandomString(identifierLength);
    return `
        const StatesClass = function (${rc4BytesIdentifier}) {
            this.${rc4BytesIdentifier} = ${rc4BytesIdentifier};
            this.${statesIdentifier} = [1, 0, 0];
            this.${newStateIdentifier} = function(){return 'newState';};
            this.${firstStateIdentifier} = '${escapeSequenceEncoder.encode('\\w+ *\\(\\) *{\\w+ *', true)}';
            this.${secondStateIdentifier} = '${escapeSequenceEncoder.encode('[\'|"].+[\'|"];? *}', true)}';
        };
        
        StatesClass.prototype.${checkStateIdentifier} = function () {
            const regExp = new RegExp(this.${firstStateIdentifier} + this.${secondStateIdentifier});
            const expression = regExp.test(this.${newStateIdentifier}.toString())
                ? --this.${statesIdentifier}[1]
                : --this.${statesIdentifier}[0];
            
            return this.${runStateIdentifier}(expression);
        };
        
        StatesClass.prototype.${runStateIdentifier} = function (${stateResultIdentifier}) {
            if (!Boolean(~${stateResultIdentifier})) {
                return ${stateResultIdentifier};
            }
            
            return this.${getStateIdentifier}(this.${rc4BytesIdentifier});
        };

        StatesClass.prototype.${getStateIdentifier} = function (${rc4BytesIdentifier}) {
            for (let i = 0, len = this.${statesIdentifier}.length; i < len; i++) {
                this.${statesIdentifier}.push(Math.round(Math.random()));
                len = this.${statesIdentifier}.length;
            }
            
            return ${rc4BytesIdentifier}(this.${statesIdentifier}[0]);
        };

        new StatesClass({stringArrayCallsWrapperName}).${checkStateIdentifier}();
    `;
}
exports.SelfDefendingTemplate = SelfDefendingTemplate;


/***/ }),

/***/ "./src/custom-code-helpers/string-array/templates/string-array-calls-wrapper/StringArrayBase64DecodeTemplate.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/custom-code-helpers/string-array/templates/string-array-calls-wrapper/StringArrayBase64DecodeTemplate.ts ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StringArrayBase64DecodeTemplate = void 0;
function StringArrayBase64DecodeTemplate(randomGenerator) {
    const identifierLength = 6;
    const initializedIdentifier = randomGenerator.getRandomString(identifierLength);
    const base64DecodeFunctionIdentifier = randomGenerator.getRandomString(identifierLength);
    const dataIdentifier = randomGenerator.getRandomString(identifierLength);
    return `
        if ({stringArrayCallsWrapperName}.${initializedIdentifier} === undefined) {
            {atobPolyfill}
            
            {stringArrayCallsWrapperName}.${base64DecodeFunctionIdentifier} = function (str) {
                const string = atob(str);
                let newStringChars = [];
                
                for (let i = 0, length = string.length; i < length; i++) {
                    newStringChars += '%' + ('00' + string.charCodeAt(i).toString(16)).slice(-2);
                }
                
                return decodeURIComponent(newStringChars);
            };
            
            {stringArrayCallsWrapperName}.${dataIdentifier} = {};
            
            {stringArrayCallsWrapperName}.${initializedIdentifier} = true;
        }
                  
        const cachedValue = {stringArrayCallsWrapperName}.${dataIdentifier}[index];
                        
        if (cachedValue === undefined) {
            {selfDefendingCode}
            
            value = {stringArrayCallsWrapperName}.${base64DecodeFunctionIdentifier}(value);
            {stringArrayCallsWrapperName}.${dataIdentifier}[index] = value;
        } else {
            value = cachedValue;
        }
    `;
}
exports.StringArrayBase64DecodeTemplate = StringArrayBase64DecodeTemplate;


/***/ }),

/***/ "./src/custom-code-helpers/string-array/templates/string-array-calls-wrapper/StringArrayCallsWrapperTemplate.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/custom-code-helpers/string-array/templates/string-array-calls-wrapper/StringArrayCallsWrapperTemplate.ts ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StringArrayCallsWrapperTemplate = void 0;
function StringArrayCallsWrapperTemplate() {
    return `
        const {stringArrayCallsWrapperName} = function (index, key) {
            index = index - 0;
            
            let value = {stringArrayName}[index];
            
            {decodeCodeHelperTemplate}
        
            return value;
        };
    `;
}
exports.StringArrayCallsWrapperTemplate = StringArrayCallsWrapperTemplate;


/***/ }),

/***/ "./src/custom-code-helpers/string-array/templates/string-array-calls-wrapper/StringArrayRC4DecodeTemplate.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/custom-code-helpers/string-array/templates/string-array-calls-wrapper/StringArrayRC4DecodeTemplate.ts ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StringArrayRC4DecodeTemplate = void 0;
function StringArrayRC4DecodeTemplate(randomGenerator) {
    const identifierLength = 6;
    const initializedIdentifier = randomGenerator.getRandomString(identifierLength);
    const rc4Identifier = randomGenerator.getRandomString(identifierLength);
    const dataIdentifier = randomGenerator.getRandomString(identifierLength);
    const onceIdentifier = randomGenerator.getRandomString(identifierLength);
    return `
        if ({stringArrayCallsWrapperName}.${initializedIdentifier} === undefined) {
            {atobPolyfill}
            
            {rc4Polyfill}
            {stringArrayCallsWrapperName}.${rc4Identifier} = rc4;
            
            {stringArrayCallsWrapperName}.${dataIdentifier} = {};
            
            {stringArrayCallsWrapperName}.${initializedIdentifier} = true;
        }
  
        const cachedValue = {stringArrayCallsWrapperName}.${dataIdentifier}[index];

        if (cachedValue === undefined) {
            if ({stringArrayCallsWrapperName}.${onceIdentifier} === undefined) {
                {selfDefendingCode}
                
                {stringArrayCallsWrapperName}.${onceIdentifier} = true;
            }
            
            value = {stringArrayCallsWrapperName}.${rc4Identifier}(value, key);
            {stringArrayCallsWrapperName}.${dataIdentifier}[index] = value;
        } else {
            value = cachedValue;
        }
    `;
}
exports.StringArrayRC4DecodeTemplate = StringArrayRC4DecodeTemplate;


/***/ }),

/***/ "./src/custom-code-helpers/string-array/templates/string-array-rotate-function/SelfDefendingTemplate.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/custom-code-helpers/string-array/templates/string-array-rotate-function/SelfDefendingTemplate.ts ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SelfDefendingTemplate = void 0;
function SelfDefendingTemplate(escapeSequenceEncoder) {
    return `
        const selfDefendingFunc = function () {
            const object = {
                data: {
                    key: 'cookie',
                    value: 'timeout'
                },
                setCookie: function (options, name, value, document) {
                    document = document || {};
                    
                    let updatedCookie = name + "=" + value;
                    let i = 0;
                                                            
                    for (let i = 0, len = options.length; i < len; i++) {
                        const propName = options[i];
                                     
                        updatedCookie += "; " + propName;
                        
                        const propValue = options[propName];
                        
                        options.push(propValue);
                        len = options.length;
                                                                        
                        if (propValue !== true) {
                            updatedCookie += "=" + propValue;
                        }
                    }

                    document['cookie'] = updatedCookie;
                },
                removeCookie: function(){return 'dev';},
                getCookie: function (document, name) {
                    document = document || function (value) { return value };
                    const matches = document(new RegExp(
                        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
                    ));
                    
                    const func = function (param1, param2) {
                        param1(++param2);
                    };
                    
                    func({whileFunctionName}, {timesName});
                                        
                    return matches ? decodeURIComponent(matches[1]) : undefined;
                }
            };
            
            const test1 = function () {
                const regExp = new RegExp('${escapeSequenceEncoder.encode('\\w+ *\\(\\) *{\\w+ *[\'|"].+[\'|"];? *}', true)}');
                
                return regExp.test(object.removeCookie.toString());
            };
            
            object['updateCookie'] = test1;
            
            let cookie = '';
            const result = object['updateCookie']();
                                    
            if (!result) {
                object['setCookie'](['*'], 'counter', 1);
            } else if (result) {
                cookie = object['getCookie'](null, 'counter');
            } else {
                object['removeCookie']();
            }
        };
        
        selfDefendingFunc();
    `;
}
exports.SelfDefendingTemplate = SelfDefendingTemplate;


/***/ }),

/***/ "./src/custom-code-helpers/string-array/templates/string-array-rotate-function/StringArrayRotateFunctionTemplate.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/custom-code-helpers/string-array/templates/string-array-rotate-function/StringArrayRotateFunctionTemplate.ts ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StringArrayRotateFunctionTemplate = void 0;
function StringArrayRotateFunctionTemplate() {
    return `
        (function (array, {timesName}) {
            const {whileFunctionName} = function (times) {
                while (--times) {
                    array['push'](array['shift']());
                }
            };
            
            {code}
        })({stringArrayName}, {stringArrayRotationAmount});
    `;
}
exports.StringArrayRotateFunctionTemplate = StringArrayRotateFunctionTemplate;


/***/ }),

/***/ "./src/custom-code-helpers/string-array/templates/string-array/StringArrayTemplate.ts":
/*!********************************************************************************************!*\
  !*** ./src/custom-code-helpers/string-array/templates/string-array/StringArrayTemplate.ts ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StringArrayTemplate = void 0;
function StringArrayTemplate() {
    return `
        const {stringArrayName} = [{stringArray}];
    `;
}
exports.StringArrayTemplate = StringArrayTemplate;


/***/ }),

/***/ "./src/custom-nodes/AbstractCustomNode.ts":
/*!************************************************!*\
  !*** ./src/custom-nodes/AbstractCustomNode.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractCustomNode = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TIdentifierNamesGeneratorFactory_1 = __webpack_require__(/*! ../types/container/generators/TIdentifierNamesGeneratorFactory */ "./src/types/container/generators/TIdentifierNamesGeneratorFactory.ts");
const ICustomCodeHelperFormatter_1 = __webpack_require__(/*! ../interfaces/custom-code-helpers/ICustomCodeHelperFormatter */ "./src/interfaces/custom-code-helpers/ICustomCodeHelperFormatter.ts");
const IOptions_1 = __webpack_require__(/*! ../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
let AbstractCustomNode = class AbstractCustomNode {
    constructor(identifierNamesGeneratorFactory, customCodeHelperFormatter, randomGenerator, options) {
        this.cachedNode = null;
        this.identifierNamesGenerator = identifierNamesGeneratorFactory(options);
        this.customCodeHelperFormatter = customCodeHelperFormatter;
        this.randomGenerator = randomGenerator;
        this.options = options;
    }
    getNode() {
        if (!this.cachedNode) {
            this.cachedNode = this.customCodeHelperFormatter.formatStructure(this.getNodeStructure());
        }
        return this.cachedNode;
    }
};
AbstractCustomNode = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperFormatter)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(3, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory !== "undefined" && TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory) === "function" ? _a : Object, typeof (_b = typeof ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter !== "undefined" && ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter) === "function" ? _b : Object, typeof (_c = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _c : Object, typeof (_d = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _d : Object])
], AbstractCustomNode);
exports.AbstractCustomNode = AbstractCustomNode;


/***/ }),

/***/ "./src/custom-nodes/control-flow-flattening-nodes/BinaryExpressionFunctionNode.ts":
/*!****************************************************************************************!*\
  !*** ./src/custom-nodes/control-flow-flattening-nodes/BinaryExpressionFunctionNode.ts ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryExpressionFunctionNode = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TIdentifierNamesGeneratorFactory_1 = __webpack_require__(/*! ../../types/container/generators/TIdentifierNamesGeneratorFactory */ "./src/types/container/generators/TIdentifierNamesGeneratorFactory.ts");
const ICustomCodeHelperFormatter_1 = __webpack_require__(/*! ../../interfaces/custom-code-helpers/ICustomCodeHelperFormatter */ "./src/interfaces/custom-code-helpers/ICustomCodeHelperFormatter.ts");
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const AbstractCustomNode_1 = __webpack_require__(/*! ../AbstractCustomNode */ "./src/custom-nodes/AbstractCustomNode.ts");
const NodeFactory_1 = __webpack_require__(/*! ../../node/NodeFactory */ "./src/node/NodeFactory.ts");
const NodeUtils_1 = __webpack_require__(/*! ../../node/NodeUtils */ "./src/node/NodeUtils.ts");
let BinaryExpressionFunctionNode = class BinaryExpressionFunctionNode extends AbstractCustomNode_1.AbstractCustomNode {
    constructor(identifierNamesGeneratorFactory, customCodeHelperFormatter, randomGenerator, options) {
        super(identifierNamesGeneratorFactory, customCodeHelperFormatter, randomGenerator, options);
    }
    initialize(operator) {
        this.operator = operator;
    }
    getNodeStructure() {
        const structure = NodeFactory_1.NodeFactory.expressionStatementNode(NodeFactory_1.NodeFactory.functionExpressionNode([
            NodeFactory_1.NodeFactory.identifierNode('x'),
            NodeFactory_1.NodeFactory.identifierNode('y')
        ], NodeFactory_1.NodeFactory.blockStatementNode([
            NodeFactory_1.NodeFactory.returnStatementNode(NodeFactory_1.NodeFactory.binaryExpressionNode(this.operator, NodeFactory_1.NodeFactory.identifierNode('x'), NodeFactory_1.NodeFactory.identifierNode('y')))
        ])));
        NodeUtils_1.NodeUtils.parentizeAst(structure);
        return [structure];
    }
};
BinaryExpressionFunctionNode = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperFormatter)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(3, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory !== "undefined" && TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory) === "function" ? _a : Object, typeof (_b = typeof ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter !== "undefined" && ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter) === "function" ? _b : Object, typeof (_c = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _c : Object, typeof (_d = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _d : Object])
], BinaryExpressionFunctionNode);
exports.BinaryExpressionFunctionNode = BinaryExpressionFunctionNode;


/***/ }),

/***/ "./src/custom-nodes/control-flow-flattening-nodes/BlockStatementControlFlowFlatteningNode.ts":
/*!***************************************************************************************************!*\
  !*** ./src/custom-nodes/control-flow-flattening-nodes/BlockStatementControlFlowFlatteningNode.ts ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockStatementControlFlowFlatteningNode = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TIdentifierNamesGeneratorFactory_1 = __webpack_require__(/*! ../../types/container/generators/TIdentifierNamesGeneratorFactory */ "./src/types/container/generators/TIdentifierNamesGeneratorFactory.ts");
const ICustomCodeHelperFormatter_1 = __webpack_require__(/*! ../../interfaces/custom-code-helpers/ICustomCodeHelperFormatter */ "./src/interfaces/custom-code-helpers/ICustomCodeHelperFormatter.ts");
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const Initializable_1 = __webpack_require__(/*! ../../decorators/Initializable */ "./src/decorators/Initializable.ts");
const AbstractCustomNode_1 = __webpack_require__(/*! ../AbstractCustomNode */ "./src/custom-nodes/AbstractCustomNode.ts");
const NodeFactory_1 = __webpack_require__(/*! ../../node/NodeFactory */ "./src/node/NodeFactory.ts");
const NodeGuards_1 = __webpack_require__(/*! ../../node/NodeGuards */ "./src/node/NodeGuards.ts");
const NodeUtils_1 = __webpack_require__(/*! ../../node/NodeUtils */ "./src/node/NodeUtils.ts");
let BlockStatementControlFlowFlatteningNode = class BlockStatementControlFlowFlatteningNode extends AbstractCustomNode_1.AbstractCustomNode {
    constructor(identifierNamesGeneratorFactory, customCodeHelperFormatter, randomGenerator, options) {
        super(identifierNamesGeneratorFactory, customCodeHelperFormatter, randomGenerator, options);
    }
    initialize(blockStatementBody, shuffledKeys, originalKeysIndexesInShuffledArray) {
        this.blockStatementBody = blockStatementBody;
        this.shuffledKeys = shuffledKeys;
        this.originalKeysIndexesInShuffledArray = originalKeysIndexesInShuffledArray;
    }
    getNodeStructure() {
        const controllerIdentifierName = this.randomGenerator.getRandomString(6);
        const indexIdentifierName = this.randomGenerator.getRandomString(6);
        const structure = NodeFactory_1.NodeFactory.blockStatementNode([
            NodeFactory_1.NodeFactory.variableDeclarationNode([
                NodeFactory_1.NodeFactory.variableDeclaratorNode(NodeFactory_1.NodeFactory.identifierNode(controllerIdentifierName), NodeFactory_1.NodeFactory.callExpressionNode(NodeFactory_1.NodeFactory.memberExpressionNode(NodeFactory_1.NodeFactory.literalNode(this.originalKeysIndexesInShuffledArray.join('|')), NodeFactory_1.NodeFactory.identifierNode('split')), [
                    NodeFactory_1.NodeFactory.literalNode('|')
                ]))
            ], 'const'),
            NodeFactory_1.NodeFactory.variableDeclarationNode([
                NodeFactory_1.NodeFactory.variableDeclaratorNode(NodeFactory_1.NodeFactory.identifierNode(indexIdentifierName), NodeFactory_1.NodeFactory.literalNode(0))
            ], 'let'),
            NodeFactory_1.NodeFactory.whileStatementNode(NodeFactory_1.NodeFactory.literalNode(true), NodeFactory_1.NodeFactory.blockStatementNode([
                NodeFactory_1.NodeFactory.switchStatementNode(NodeFactory_1.NodeFactory.memberExpressionNode(NodeFactory_1.NodeFactory.identifierNode(controllerIdentifierName), NodeFactory_1.NodeFactory.updateExpressionNode('++', NodeFactory_1.NodeFactory.identifierNode(indexIdentifierName)), true), this.shuffledKeys.map((key, index) => {
                    const statement = this.blockStatementBody[key];
                    const consequent = [statement];
                    if (!NodeGuards_1.NodeGuards.isReturnStatementNode(statement)) {
                        consequent.push(NodeFactory_1.NodeFactory.continueStatement());
                    }
                    return NodeFactory_1.NodeFactory.switchCaseNode(NodeFactory_1.NodeFactory.literalNode(String(index)), consequent);
                })),
                NodeFactory_1.NodeFactory.breakStatement()
            ]))
        ]);
        NodeUtils_1.NodeUtils.parentizeAst(structure);
        return [structure];
    }
};
__decorate([
    Initializable_1.initializable(),
    __metadata("design:type", Array)
], BlockStatementControlFlowFlatteningNode.prototype, "blockStatementBody", void 0);
__decorate([
    Initializable_1.initializable(),
    __metadata("design:type", Array)
], BlockStatementControlFlowFlatteningNode.prototype, "originalKeysIndexesInShuffledArray", void 0);
__decorate([
    Initializable_1.initializable(),
    __metadata("design:type", Array)
], BlockStatementControlFlowFlatteningNode.prototype, "shuffledKeys", void 0);
BlockStatementControlFlowFlatteningNode = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperFormatter)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(3, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory !== "undefined" && TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory) === "function" ? _a : Object, typeof (_b = typeof ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter !== "undefined" && ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter) === "function" ? _b : Object, typeof (_c = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _c : Object, typeof (_d = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _d : Object])
], BlockStatementControlFlowFlatteningNode);
exports.BlockStatementControlFlowFlatteningNode = BlockStatementControlFlowFlatteningNode;


/***/ }),

/***/ "./src/custom-nodes/control-flow-flattening-nodes/CallExpressionFunctionNode.ts":
/*!**************************************************************************************!*\
  !*** ./src/custom-nodes/control-flow-flattening-nodes/CallExpressionFunctionNode.ts ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallExpressionFunctionNode = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TIdentifierNamesGeneratorFactory_1 = __webpack_require__(/*! ../../types/container/generators/TIdentifierNamesGeneratorFactory */ "./src/types/container/generators/TIdentifierNamesGeneratorFactory.ts");
const ICustomCodeHelperFormatter_1 = __webpack_require__(/*! ../../interfaces/custom-code-helpers/ICustomCodeHelperFormatter */ "./src/interfaces/custom-code-helpers/ICustomCodeHelperFormatter.ts");
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const Initializable_1 = __webpack_require__(/*! ../../decorators/Initializable */ "./src/decorators/Initializable.ts");
const AbstractCustomNode_1 = __webpack_require__(/*! ../AbstractCustomNode */ "./src/custom-nodes/AbstractCustomNode.ts");
const NodeFactory_1 = __webpack_require__(/*! ../../node/NodeFactory */ "./src/node/NodeFactory.ts");
const NodeUtils_1 = __webpack_require__(/*! ../../node/NodeUtils */ "./src/node/NodeUtils.ts");
let CallExpressionFunctionNode = class CallExpressionFunctionNode extends AbstractCustomNode_1.AbstractCustomNode {
    constructor(identifierNamesGeneratorFactory, customCodeHelperFormatter, randomGenerator, options) {
        super(identifierNamesGeneratorFactory, customCodeHelperFormatter, randomGenerator, options);
    }
    initialize(expressionArguments) {
        this.expressionArguments = expressionArguments;
    }
    getNodeStructure() {
        const calleeIdentifier = NodeFactory_1.NodeFactory.identifierNode('callee');
        const params = [];
        const argumentsLength = this.expressionArguments.length;
        for (let i = 0; i < argumentsLength; i++) {
            params.push(NodeFactory_1.NodeFactory.identifierNode(`param${i + 1}`));
        }
        const structure = NodeFactory_1.NodeFactory.expressionStatementNode(NodeFactory_1.NodeFactory.functionExpressionNode([
            calleeIdentifier,
            ...params
        ], NodeFactory_1.NodeFactory.blockStatementNode([
            NodeFactory_1.NodeFactory.returnStatementNode(NodeFactory_1.NodeFactory.callExpressionNode(calleeIdentifier, params))
        ])));
        NodeUtils_1.NodeUtils.parentizeAst(structure);
        return [structure];
    }
};
__decorate([
    Initializable_1.initializable(),
    __metadata("design:type", Array)
], CallExpressionFunctionNode.prototype, "expressionArguments", void 0);
CallExpressionFunctionNode = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperFormatter)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(3, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory !== "undefined" && TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory) === "function" ? _a : Object, typeof (_b = typeof ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter !== "undefined" && ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter) === "function" ? _b : Object, typeof (_c = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _c : Object, typeof (_d = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _d : Object])
], CallExpressionFunctionNode);
exports.CallExpressionFunctionNode = CallExpressionFunctionNode;


/***/ }),

/***/ "./src/custom-nodes/control-flow-flattening-nodes/LogicalExpressionFunctionNode.ts":
/*!*****************************************************************************************!*\
  !*** ./src/custom-nodes/control-flow-flattening-nodes/LogicalExpressionFunctionNode.ts ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogicalExpressionFunctionNode = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TIdentifierNamesGeneratorFactory_1 = __webpack_require__(/*! ../../types/container/generators/TIdentifierNamesGeneratorFactory */ "./src/types/container/generators/TIdentifierNamesGeneratorFactory.ts");
const ICustomCodeHelperFormatter_1 = __webpack_require__(/*! ../../interfaces/custom-code-helpers/ICustomCodeHelperFormatter */ "./src/interfaces/custom-code-helpers/ICustomCodeHelperFormatter.ts");
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const AbstractCustomNode_1 = __webpack_require__(/*! ../AbstractCustomNode */ "./src/custom-nodes/AbstractCustomNode.ts");
const NodeFactory_1 = __webpack_require__(/*! ../../node/NodeFactory */ "./src/node/NodeFactory.ts");
const NodeUtils_1 = __webpack_require__(/*! ../../node/NodeUtils */ "./src/node/NodeUtils.ts");
let LogicalExpressionFunctionNode = class LogicalExpressionFunctionNode extends AbstractCustomNode_1.AbstractCustomNode {
    constructor(identifierNamesGeneratorFactory, customCodeHelperFormatter, randomGenerator, options) {
        super(identifierNamesGeneratorFactory, customCodeHelperFormatter, randomGenerator, options);
    }
    initialize(operator) {
        this.operator = operator;
    }
    getNodeStructure() {
        const structure = NodeFactory_1.NodeFactory.expressionStatementNode(NodeFactory_1.NodeFactory.functionExpressionNode([
            NodeFactory_1.NodeFactory.identifierNode('x'),
            NodeFactory_1.NodeFactory.identifierNode('y')
        ], NodeFactory_1.NodeFactory.blockStatementNode([
            NodeFactory_1.NodeFactory.returnStatementNode(NodeFactory_1.NodeFactory.logicalExpressionNode(this.operator, NodeFactory_1.NodeFactory.identifierNode('x'), NodeFactory_1.NodeFactory.identifierNode('y')))
        ])));
        NodeUtils_1.NodeUtils.parentizeAst(structure);
        return [structure];
    }
};
LogicalExpressionFunctionNode = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperFormatter)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(3, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory !== "undefined" && TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory) === "function" ? _a : Object, typeof (_b = typeof ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter !== "undefined" && ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter) === "function" ? _b : Object, typeof (_c = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _c : Object, typeof (_d = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _d : Object])
], LogicalExpressionFunctionNode);
exports.LogicalExpressionFunctionNode = LogicalExpressionFunctionNode;


/***/ }),

/***/ "./src/custom-nodes/control-flow-flattening-nodes/StringLiteralNode.ts":
/*!*****************************************************************************!*\
  !*** ./src/custom-nodes/control-flow-flattening-nodes/StringLiteralNode.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringLiteralNode = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TIdentifierNamesGeneratorFactory_1 = __webpack_require__(/*! ../../types/container/generators/TIdentifierNamesGeneratorFactory */ "./src/types/container/generators/TIdentifierNamesGeneratorFactory.ts");
const ICustomCodeHelperFormatter_1 = __webpack_require__(/*! ../../interfaces/custom-code-helpers/ICustomCodeHelperFormatter */ "./src/interfaces/custom-code-helpers/ICustomCodeHelperFormatter.ts");
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const Initializable_1 = __webpack_require__(/*! ../../decorators/Initializable */ "./src/decorators/Initializable.ts");
const AbstractCustomNode_1 = __webpack_require__(/*! ../AbstractCustomNode */ "./src/custom-nodes/AbstractCustomNode.ts");
const NodeFactory_1 = __webpack_require__(/*! ../../node/NodeFactory */ "./src/node/NodeFactory.ts");
let StringLiteralNode = class StringLiteralNode extends AbstractCustomNode_1.AbstractCustomNode {
    constructor(identifierNamesGeneratorFactory, customCodeHelperFormatter, randomGenerator, options) {
        super(identifierNamesGeneratorFactory, customCodeHelperFormatter, randomGenerator, options);
    }
    initialize(literalValue) {
        this.literalValue = literalValue;
    }
    getNodeStructure() {
        const structure = NodeFactory_1.NodeFactory.expressionStatementNode(NodeFactory_1.NodeFactory.literalNode(this.literalValue));
        return [structure];
    }
};
__decorate([
    Initializable_1.initializable(),
    __metadata("design:type", String)
], StringLiteralNode.prototype, "literalValue", void 0);
StringLiteralNode = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperFormatter)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(3, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory !== "undefined" && TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory) === "function" ? _a : Object, typeof (_b = typeof ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter !== "undefined" && ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter) === "function" ? _b : Object, typeof (_c = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _c : Object, typeof (_d = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _d : Object])
], StringLiteralNode);
exports.StringLiteralNode = StringLiteralNode;


/***/ }),

/***/ "./src/custom-nodes/control-flow-flattening-nodes/control-flow-storage-nodes/CallExpressionControlFlowStorageCallNode.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/custom-nodes/control-flow-flattening-nodes/control-flow-storage-nodes/CallExpressionControlFlowStorageCallNode.ts ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallExpressionControlFlowStorageCallNode = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TIdentifierNamesGeneratorFactory_1 = __webpack_require__(/*! ../../../types/container/generators/TIdentifierNamesGeneratorFactory */ "./src/types/container/generators/TIdentifierNamesGeneratorFactory.ts");
const ICustomCodeHelperFormatter_1 = __webpack_require__(/*! ../../../interfaces/custom-code-helpers/ICustomCodeHelperFormatter */ "./src/interfaces/custom-code-helpers/ICustomCodeHelperFormatter.ts");
const IOptions_1 = __webpack_require__(/*! ../../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const Initializable_1 = __webpack_require__(/*! ../../../decorators/Initializable */ "./src/decorators/Initializable.ts");
const AbstractCustomNode_1 = __webpack_require__(/*! ../../AbstractCustomNode */ "./src/custom-nodes/AbstractCustomNode.ts");
const NodeFactory_1 = __webpack_require__(/*! ../../../node/NodeFactory */ "./src/node/NodeFactory.ts");
const NodeUtils_1 = __webpack_require__(/*! ../../../node/NodeUtils */ "./src/node/NodeUtils.ts");
let CallExpressionControlFlowStorageCallNode = class CallExpressionControlFlowStorageCallNode extends AbstractCustomNode_1.AbstractCustomNode {
    constructor(identifierNamesGeneratorFactory, customCodeHelperFormatter, randomGenerator, options) {
        super(identifierNamesGeneratorFactory, customCodeHelperFormatter, randomGenerator, options);
    }
    initialize(controlFlowStorageName, controlFlowStorageKey, callee, expressionArguments) {
        this.controlFlowStorageName = controlFlowStorageName;
        this.controlFlowStorageKey = controlFlowStorageKey;
        this.callee = callee;
        this.expressionArguments = expressionArguments;
    }
    getNodeStructure() {
        const structure = NodeFactory_1.NodeFactory.expressionStatementNode(NodeFactory_1.NodeFactory.callExpressionNode(NodeFactory_1.NodeFactory.memberExpressionNode(NodeFactory_1.NodeFactory.identifierNode(this.controlFlowStorageName), NodeFactory_1.NodeFactory.identifierNode(this.controlFlowStorageKey)), [
            this.callee,
            ...this.expressionArguments
        ]));
        NodeUtils_1.NodeUtils.parentizeAst(structure);
        return [structure];
    }
};
__decorate([
    Initializable_1.initializable(),
    __metadata("design:type", typeof (_a = typeof ESTree !== "undefined" && ESTree.Expression) === "function" ? _a : Object)
], CallExpressionControlFlowStorageCallNode.prototype, "callee", void 0);
__decorate([
    Initializable_1.initializable(),
    __metadata("design:type", String)
], CallExpressionControlFlowStorageCallNode.prototype, "controlFlowStorageKey", void 0);
__decorate([
    Initializable_1.initializable(),
    __metadata("design:type", String)
], CallExpressionControlFlowStorageCallNode.prototype, "controlFlowStorageName", void 0);
__decorate([
    Initializable_1.initializable(),
    __metadata("design:type", Array)
], CallExpressionControlFlowStorageCallNode.prototype, "expressionArguments", void 0);
CallExpressionControlFlowStorageCallNode = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperFormatter)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(3, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_b = typeof TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory !== "undefined" && TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory) === "function" ? _b : Object, typeof (_c = typeof ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter !== "undefined" && ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter) === "function" ? _c : Object, typeof (_d = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _d : Object, typeof (_e = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _e : Object])
], CallExpressionControlFlowStorageCallNode);
exports.CallExpressionControlFlowStorageCallNode = CallExpressionControlFlowStorageCallNode;


/***/ }),

/***/ "./src/custom-nodes/control-flow-flattening-nodes/control-flow-storage-nodes/ControlFlowStorageNode.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/custom-nodes/control-flow-flattening-nodes/control-flow-storage-nodes/ControlFlowStorageNode.ts ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlFlowStorageNode = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TControlFlowStorage_1 = __webpack_require__(/*! ../../../types/storages/TControlFlowStorage */ "./src/types/storages/TControlFlowStorage.ts");
const TIdentifierNamesGeneratorFactory_1 = __webpack_require__(/*! ../../../types/container/generators/TIdentifierNamesGeneratorFactory */ "./src/types/container/generators/TIdentifierNamesGeneratorFactory.ts");
const ICustomCodeHelperFormatter_1 = __webpack_require__(/*! ../../../interfaces/custom-code-helpers/ICustomCodeHelperFormatter */ "./src/interfaces/custom-code-helpers/ICustomCodeHelperFormatter.ts");
const IOptions_1 = __webpack_require__(/*! ../../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const Initializable_1 = __webpack_require__(/*! ../../../decorators/Initializable */ "./src/decorators/Initializable.ts");
const AbstractCustomNode_1 = __webpack_require__(/*! ../../AbstractCustomNode */ "./src/custom-nodes/AbstractCustomNode.ts");
const NodeFactory_1 = __webpack_require__(/*! ../../../node/NodeFactory */ "./src/node/NodeFactory.ts");
const NodeGuards_1 = __webpack_require__(/*! ../../../node/NodeGuards */ "./src/node/NodeGuards.ts");
const NodeUtils_1 = __webpack_require__(/*! ../../../node/NodeUtils */ "./src/node/NodeUtils.ts");
let ControlFlowStorageNode = class ControlFlowStorageNode extends AbstractCustomNode_1.AbstractCustomNode {
    constructor(identifierNamesGeneratorFactory, customCodeHelperFormatter, randomGenerator, options) {
        super(identifierNamesGeneratorFactory, customCodeHelperFormatter, randomGenerator, options);
    }
    initialize(controlFlowStorage) {
        this.controlFlowStorage = controlFlowStorage;
    }
    getNodeStructure() {
        const propertyNodes = Array
            .from(this.controlFlowStorage.getStorage())
            .map(([key, value]) => {
            const node = value.getNode()[0];
            if (!NodeGuards_1.NodeGuards.isExpressionStatementNode(node)) {
                throw new Error('Function node for control flow storage object should be passed inside the `ExpressionStatement` node!');
            }
            return NodeFactory_1.NodeFactory.propertyNode(NodeFactory_1.NodeFactory.identifierNode(key), node.expression);
        });
        let structure = NodeFactory_1.NodeFactory.variableDeclarationNode([
            NodeFactory_1.NodeFactory.variableDeclaratorNode(NodeFactory_1.NodeFactory.identifierNode(this.controlFlowStorage.getStorageId()), NodeFactory_1.NodeFactory.objectExpressionNode(propertyNodes))
        ], 'const');
        structure = NodeUtils_1.NodeUtils.parentizeAst(structure);
        return [structure];
    }
};
__decorate([
    Initializable_1.initializable(),
    __metadata("design:type", typeof (_a = typeof TControlFlowStorage_1.TControlFlowStorage !== "undefined" && TControlFlowStorage_1.TControlFlowStorage) === "function" ? _a : Object)
], ControlFlowStorageNode.prototype, "controlFlowStorage", void 0);
ControlFlowStorageNode = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperFormatter)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(3, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_b = typeof TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory !== "undefined" && TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory) === "function" ? _b : Object, typeof (_c = typeof ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter !== "undefined" && ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter) === "function" ? _c : Object, typeof (_d = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _d : Object, typeof (_e = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _e : Object])
], ControlFlowStorageNode);
exports.ControlFlowStorageNode = ControlFlowStorageNode;


/***/ }),

/***/ "./src/custom-nodes/control-flow-flattening-nodes/control-flow-storage-nodes/ExpressionWithOperatorControlFlowStorageCallNode.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./src/custom-nodes/control-flow-flattening-nodes/control-flow-storage-nodes/ExpressionWithOperatorControlFlowStorageCallNode.ts ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressionWithOperatorControlFlowStorageCallNode = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TIdentifierNamesGeneratorFactory_1 = __webpack_require__(/*! ../../../types/container/generators/TIdentifierNamesGeneratorFactory */ "./src/types/container/generators/TIdentifierNamesGeneratorFactory.ts");
const ICustomCodeHelperFormatter_1 = __webpack_require__(/*! ../../../interfaces/custom-code-helpers/ICustomCodeHelperFormatter */ "./src/interfaces/custom-code-helpers/ICustomCodeHelperFormatter.ts");
const IOptions_1 = __webpack_require__(/*! ../../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const Initializable_1 = __webpack_require__(/*! ../../../decorators/Initializable */ "./src/decorators/Initializable.ts");
const AbstractCustomNode_1 = __webpack_require__(/*! ../../AbstractCustomNode */ "./src/custom-nodes/AbstractCustomNode.ts");
const NodeFactory_1 = __webpack_require__(/*! ../../../node/NodeFactory */ "./src/node/NodeFactory.ts");
const NodeUtils_1 = __webpack_require__(/*! ../../../node/NodeUtils */ "./src/node/NodeUtils.ts");
let ExpressionWithOperatorControlFlowStorageCallNode = class ExpressionWithOperatorControlFlowStorageCallNode extends AbstractCustomNode_1.AbstractCustomNode {
    constructor(identifierNamesGeneratorFactory, customCodeHelperFormatter, randomGenerator, options) {
        super(identifierNamesGeneratorFactory, customCodeHelperFormatter, randomGenerator, options);
    }
    initialize(controlFlowStorageName, controlFlowStorageKey, leftValue, rightValue) {
        this.controlFlowStorageName = controlFlowStorageName;
        this.controlFlowStorageKey = controlFlowStorageKey;
        this.leftValue = leftValue;
        this.rightValue = rightValue;
    }
    getNodeStructure() {
        const structure = NodeFactory_1.NodeFactory.expressionStatementNode(NodeFactory_1.NodeFactory.callExpressionNode(NodeFactory_1.NodeFactory.memberExpressionNode(NodeFactory_1.NodeFactory.identifierNode(this.controlFlowStorageName), NodeFactory_1.NodeFactory.identifierNode(this.controlFlowStorageKey)), [
            this.leftValue,
            this.rightValue
        ]));
        NodeUtils_1.NodeUtils.parentizeAst(structure);
        return [structure];
    }
};
__decorate([
    Initializable_1.initializable(),
    __metadata("design:type", String)
], ExpressionWithOperatorControlFlowStorageCallNode.prototype, "controlFlowStorageKey", void 0);
__decorate([
    Initializable_1.initializable(),
    __metadata("design:type", String)
], ExpressionWithOperatorControlFlowStorageCallNode.prototype, "controlFlowStorageName", void 0);
ExpressionWithOperatorControlFlowStorageCallNode = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperFormatter)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(3, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory !== "undefined" && TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory) === "function" ? _a : Object, typeof (_b = typeof ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter !== "undefined" && ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter) === "function" ? _b : Object, typeof (_c = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _c : Object, typeof (_d = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _d : Object])
], ExpressionWithOperatorControlFlowStorageCallNode);
exports.ExpressionWithOperatorControlFlowStorageCallNode = ExpressionWithOperatorControlFlowStorageCallNode;


/***/ }),

/***/ "./src/custom-nodes/control-flow-flattening-nodes/control-flow-storage-nodes/StringLiteralControlFlowStorageCallNode.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/custom-nodes/control-flow-flattening-nodes/control-flow-storage-nodes/StringLiteralControlFlowStorageCallNode.ts ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringLiteralControlFlowStorageCallNode = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TIdentifierNamesGeneratorFactory_1 = __webpack_require__(/*! ../../../types/container/generators/TIdentifierNamesGeneratorFactory */ "./src/types/container/generators/TIdentifierNamesGeneratorFactory.ts");
const ICustomCodeHelperFormatter_1 = __webpack_require__(/*! ../../../interfaces/custom-code-helpers/ICustomCodeHelperFormatter */ "./src/interfaces/custom-code-helpers/ICustomCodeHelperFormatter.ts");
const IOptions_1 = __webpack_require__(/*! ../../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const Initializable_1 = __webpack_require__(/*! ../../../decorators/Initializable */ "./src/decorators/Initializable.ts");
const AbstractCustomNode_1 = __webpack_require__(/*! ../../AbstractCustomNode */ "./src/custom-nodes/AbstractCustomNode.ts");
const NodeFactory_1 = __webpack_require__(/*! ../../../node/NodeFactory */ "./src/node/NodeFactory.ts");
const NodeUtils_1 = __webpack_require__(/*! ../../../node/NodeUtils */ "./src/node/NodeUtils.ts");
let StringLiteralControlFlowStorageCallNode = class StringLiteralControlFlowStorageCallNode extends AbstractCustomNode_1.AbstractCustomNode {
    constructor(identifierNamesGeneratorFactory, customCodeHelperFormatter, randomGenerator, options) {
        super(identifierNamesGeneratorFactory, customCodeHelperFormatter, randomGenerator, options);
    }
    initialize(controlFlowStorageName, controlFlowStorageKey) {
        this.controlFlowStorageName = controlFlowStorageName;
        this.controlFlowStorageKey = controlFlowStorageKey;
    }
    getNodeStructure() {
        const structure = NodeFactory_1.NodeFactory.expressionStatementNode(NodeFactory_1.NodeFactory.memberExpressionNode(NodeFactory_1.NodeFactory.identifierNode(this.controlFlowStorageName), NodeFactory_1.NodeFactory.identifierNode(this.controlFlowStorageKey)));
        NodeUtils_1.NodeUtils.parentizeAst(structure);
        return [structure];
    }
};
__decorate([
    Initializable_1.initializable(),
    __metadata("design:type", String)
], StringLiteralControlFlowStorageCallNode.prototype, "controlFlowStorageKey", void 0);
__decorate([
    Initializable_1.initializable(),
    __metadata("design:type", String)
], StringLiteralControlFlowStorageCallNode.prototype, "controlFlowStorageName", void 0);
StringLiteralControlFlowStorageCallNode = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperFormatter)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(3, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory !== "undefined" && TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory) === "function" ? _a : Object, typeof (_b = typeof ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter !== "undefined" && ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter) === "function" ? _b : Object, typeof (_c = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _c : Object, typeof (_d = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _d : Object])
], StringLiteralControlFlowStorageCallNode);
exports.StringLiteralControlFlowStorageCallNode = StringLiteralControlFlowStorageCallNode;


/***/ }),

/***/ "./src/custom-nodes/dead-code-injection-nodes/BlockStatementDeadCodeInjectionNode.ts":
/*!*******************************************************************************************!*\
  !*** ./src/custom-nodes/dead-code-injection-nodes/BlockStatementDeadCodeInjectionNode.ts ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockStatementDeadCodeInjectionNode = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TIdentifierNamesGeneratorFactory_1 = __webpack_require__(/*! ../../types/container/generators/TIdentifierNamesGeneratorFactory */ "./src/types/container/generators/TIdentifierNamesGeneratorFactory.ts");
const ICustomCodeHelperFormatter_1 = __webpack_require__(/*! ../../interfaces/custom-code-helpers/ICustomCodeHelperFormatter */ "./src/interfaces/custom-code-helpers/ICustomCodeHelperFormatter.ts");
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const AbstractCustomNode_1 = __webpack_require__(/*! ../AbstractCustomNode */ "./src/custom-nodes/AbstractCustomNode.ts");
const NodeFactory_1 = __webpack_require__(/*! ../../node/NodeFactory */ "./src/node/NodeFactory.ts");
const NodeUtils_1 = __webpack_require__(/*! ../../node/NodeUtils */ "./src/node/NodeUtils.ts");
let BlockStatementDeadCodeInjectionNode = class BlockStatementDeadCodeInjectionNode extends AbstractCustomNode_1.AbstractCustomNode {
    constructor(identifierNamesGeneratorFactory, customCodeHelperFormatter, randomGenerator, options) {
        super(identifierNamesGeneratorFactory, customCodeHelperFormatter, randomGenerator, options);
    }
    initialize(blockStatementNode, deadCodeInjectionRootAstHostNode) {
        this.blockStatementNode = blockStatementNode;
        this.deadCodeInjectionRootAstHostNode = deadCodeInjectionRootAstHostNode;
    }
    getNode() {
        return this.getNodeStructure();
    }
    getNodeStructure() {
        const random1 = this.randomGenerator.getMathRandom() > 0.5;
        const random2 = this.randomGenerator.getMathRandom() > 0.5;
        const operator = random1 ? '===' : '!==';
        const leftString = this.randomGenerator.getRandomString(5);
        const rightString = random2 ? leftString : this.randomGenerator.getRandomString(5);
        const [consequent, alternate] = random1 === random2
            ? [this.blockStatementNode, this.deadCodeInjectionRootAstHostNode]
            : [this.deadCodeInjectionRootAstHostNode, this.blockStatementNode];
        const structure = NodeFactory_1.NodeFactory.blockStatementNode([
            NodeFactory_1.NodeFactory.ifStatementNode(NodeFactory_1.NodeFactory.binaryExpressionNode(operator, NodeFactory_1.NodeFactory.literalNode(leftString), NodeFactory_1.NodeFactory.literalNode(rightString)), consequent, alternate)
        ]);
        NodeUtils_1.NodeUtils.parentizeAst(structure);
        return [structure];
    }
};
BlockStatementDeadCodeInjectionNode = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperFormatter)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(3, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory !== "undefined" && TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory) === "function" ? _a : Object, typeof (_b = typeof ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter !== "undefined" && ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter) === "function" ? _b : Object, typeof (_c = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _c : Object, typeof (_d = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _d : Object])
], BlockStatementDeadCodeInjectionNode);
exports.BlockStatementDeadCodeInjectionNode = BlockStatementDeadCodeInjectionNode;


/***/ }),

/***/ "./src/custom-nodes/object-expression-keys-transformer-nodes/ObjectExpressionVariableDeclarationHostNode.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/custom-nodes/object-expression-keys-transformer-nodes/ObjectExpressionVariableDeclarationHostNode.ts ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectExpressionVariableDeclarationHostNode = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TIdentifierNamesGeneratorFactory_1 = __webpack_require__(/*! ../../types/container/generators/TIdentifierNamesGeneratorFactory */ "./src/types/container/generators/TIdentifierNamesGeneratorFactory.ts");
const ICustomCodeHelperFormatter_1 = __webpack_require__(/*! ../../interfaces/custom-code-helpers/ICustomCodeHelperFormatter */ "./src/interfaces/custom-code-helpers/ICustomCodeHelperFormatter.ts");
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const AbstractCustomNode_1 = __webpack_require__(/*! ../AbstractCustomNode */ "./src/custom-nodes/AbstractCustomNode.ts");
const NodeFactory_1 = __webpack_require__(/*! ../../node/NodeFactory */ "./src/node/NodeFactory.ts");
const NodeGuards_1 = __webpack_require__(/*! ../../node/NodeGuards */ "./src/node/NodeGuards.ts");
let ObjectExpressionVariableDeclarationHostNode = class ObjectExpressionVariableDeclarationHostNode extends AbstractCustomNode_1.AbstractCustomNode {
    constructor(identifierNamesGeneratorFactory, customCodeHelperFormatter, randomGenerator, options) {
        super(identifierNamesGeneratorFactory, customCodeHelperFormatter, randomGenerator, options);
    }
    initialize(lexicalScopeNode, properties) {
        this.lexicalScopeNode = lexicalScopeNode;
        this.properties = properties;
    }
    getNodeStructure() {
        const variableDeclarationName = NodeGuards_1.NodeGuards.isProgramNode(this.lexicalScopeNode)
            ? this.identifierNamesGenerator.generateForGlobalScope()
            : this.identifierNamesGenerator.generateForLexicalScope(this.lexicalScopeNode);
        const structure = NodeFactory_1.NodeFactory.variableDeclarationNode([
            NodeFactory_1.NodeFactory.variableDeclaratorNode(NodeFactory_1.NodeFactory.identifierNode(variableDeclarationName), NodeFactory_1.NodeFactory.objectExpressionNode(this.properties))
        ], 'const');
        return [structure];
    }
};
ObjectExpressionVariableDeclarationHostNode = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ICustomCodeHelperFormatter)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(3, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory !== "undefined" && TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory) === "function" ? _a : Object, typeof (_b = typeof ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter !== "undefined" && ICustomCodeHelperFormatter_1.ICustomCodeHelperFormatter) === "function" ? _b : Object, typeof (_c = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _c : Object, typeof (_d = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _d : Object])
], ObjectExpressionVariableDeclarationHostNode);
exports.ObjectExpressionVariableDeclarationHostNode = ObjectExpressionVariableDeclarationHostNode;


/***/ }),

/***/ "./src/decorators/Initializable.ts":
/*!*****************************************!*\
  !*** ./src/decorators/Initializable.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.initializable = void 0;
const defaultDescriptor = {
    configurable: true,
    enumerable: true
};
const initializedTargetMetadataKey = '_initialized';
const initializablePropertiesSetMetadataKey = '_initializablePropertiesSet';
const wrappedMethodsSetMetadataKey = '_wrappedMethodsSet';
const constructorMethodName = 'constructor';
function initializable(initializeMethodName = 'initialize') {
    const decoratorName = Object.keys(this)[0];
    return (target, propertyKey) => {
        const initializeMethod = target[initializeMethodName];
        if (!initializeMethod || typeof initializeMethod !== 'function') {
            throw new Error(`\`${initializeMethodName}\` method with initialization logic not ` +
                `found. \`@${decoratorName}\` decorator requires \`${initializeMethodName}\` method`);
        }
        initializeTargetMetadata(initializedTargetMetadataKey, false, target);
        initializeTargetMetadata(initializablePropertiesSetMetadataKey, new Set(), target);
        initializeTargetMetadata(wrappedMethodsSetMetadataKey, new Set(), target);
        wrapTargetMethodsInInitializedCheck(target, initializeMethodName);
        wrapInitializeMethodInInitializeCheck(target, initializeMethodName, propertyKey);
        return wrapInitializableProperty(target, propertyKey);
    };
}
exports.initializable = initializable;
function initializeTargetMetadata(metadataKey, metadataValue, target) {
    const hasInitializedMetadata = Reflect.hasMetadata(metadataKey, target);
    if (!hasInitializedMetadata) {
        Reflect.defineMetadata(metadataKey, metadataValue, target);
    }
}
function wrapTargetMethodsInInitializedCheck(target, initializeMethodName) {
    const ownPropertyNames = Object.getOwnPropertyNames(target);
    const prohibitedPropertyNames = [initializeMethodName, constructorMethodName];
    ownPropertyNames.forEach((propertyName) => {
        var _a;
        const initializablePropertiesSet = Reflect
            .getMetadata(initializablePropertiesSetMetadataKey, target);
        const wrappedMethodsSet = Reflect
            .getMetadata(wrappedMethodsSetMetadataKey, target);
        const isProhibitedPropertyName = prohibitedPropertyNames.includes(propertyName)
            || initializablePropertiesSet.has(propertyName)
            || wrappedMethodsSet.has(propertyName);
        if (isProhibitedPropertyName) {
            return;
        }
        const targetProperty = target[propertyName];
        if (typeof targetProperty !== 'function') {
            return;
        }
        const methodDescriptor = (_a = Object
            .getOwnPropertyDescriptor(target, propertyName)) !== null && _a !== void 0 ? _a : defaultDescriptor;
        const originalMethod = methodDescriptor.value;
        Object.defineProperty(target, propertyName, Object.assign(Object.assign({}, methodDescriptor), { value() {
                if (!Reflect.getMetadata(initializedTargetMetadataKey, this)) {
                    throw new Error(`Class should be initialized with \`${initializeMethodName}()\` method`);
                }
                return originalMethod.apply(this, arguments);
            } }));
        wrappedMethodsSet.add(propertyName);
    });
}
function wrapInitializeMethodInInitializeCheck(target, initializeMethodName, propertyKey) {
    var _a;
    const methodDescriptor = (_a = Object
        .getOwnPropertyDescriptor(target, initializeMethodName)) !== null && _a !== void 0 ? _a : defaultDescriptor;
    const originalMethod = methodDescriptor.value;
    Object.defineProperty(target, initializeMethodName, Object.assign(Object.assign({}, methodDescriptor), { value: function () {
            Reflect.defineMetadata(initializedTargetMetadataKey, true, this);
            const result = originalMethod.apply(this, arguments);
            if (this[propertyKey]) { }
            return result;
        } }));
}
function wrapInitializableProperty(target, propertyKey) {
    var _a;
    const initializablePropertiesSet = Reflect
        .getMetadata(initializablePropertiesSetMetadataKey, target);
    initializablePropertiesSet.add(propertyKey);
    const initializablePropertyMetadataKey = `_${propertyKey.toString()}`;
    const propertyDescriptor = (_a = Object
        .getOwnPropertyDescriptor(target, initializablePropertyMetadataKey)) !== null && _a !== void 0 ? _a : defaultDescriptor;
    Object.defineProperty(target, propertyKey, Object.assign(Object.assign({}, propertyDescriptor), { get: function () {
            if (this[initializablePropertyMetadataKey] === undefined) {
                throw new Error(`Property \`${propertyKey.toString()}\` is not initialized! Initialize it first!`);
            }
            return this[initializablePropertyMetadataKey];
        }, set: function (newVal) {
            this[initializablePropertyMetadataKey] = newVal;
        } }));
    return propertyDescriptor;
}


/***/ }),

/***/ "./src/enums/ObfuscationTarget.ts":
/*!****************************************!*\
  !*** ./src/enums/ObfuscationTarget.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ObfuscationTarget = void 0;
const tsenum_1 = __webpack_require__(/*! @gradecam/tsenum */ "@gradecam/tsenum");
exports.ObfuscationTarget = tsenum_1.MakeEnum({
    Browser: 'browser',
    BrowserNoEval: 'browser-no-eval',
    Node: 'node'
});


/***/ }),

/***/ "./src/enums/StringArrayEncoding.ts":
/*!******************************************!*\
  !*** ./src/enums/StringArrayEncoding.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StringArrayEncoding = void 0;
const tsenum_1 = __webpack_require__(/*! @gradecam/tsenum */ "@gradecam/tsenum");
exports.StringArrayEncoding = tsenum_1.MakeEnum({
    Base64: 'base64',
    Rc4: 'rc4'
});


/***/ }),

/***/ "./src/enums/StringSeparator.ts":
/*!**************************************!*\
  !*** ./src/enums/StringSeparator.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StringSeparator = void 0;
var StringSeparator;
(function (StringSeparator) {
    StringSeparator["Dot"] = ".";
    StringSeparator["Comma"] = ",";
})(StringSeparator = exports.StringSeparator || (exports.StringSeparator = {}));


/***/ }),

/***/ "./src/enums/analyzers/calls-graph-analyzer/CalleeDataExtractor.ts":
/*!*************************************************************************!*\
  !*** ./src/enums/analyzers/calls-graph-analyzer/CalleeDataExtractor.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CalleeDataExtractor = void 0;
var CalleeDataExtractor;
(function (CalleeDataExtractor) {
    CalleeDataExtractor["FunctionDeclarationCalleeDataExtractor"] = "FunctionDeclarationCalleeDataExtractor";
    CalleeDataExtractor["FunctionExpressionCalleeDataExtractor"] = "FunctionExpressionCalleeDataExtractor";
    CalleeDataExtractor["ObjectExpressionCalleeDataExtractor"] = "ObjectExpressionCalleeDataExtractor";
})(CalleeDataExtractor = exports.CalleeDataExtractor || (exports.CalleeDataExtractor = {}));


/***/ }),

/***/ "./src/enums/code-transformers/CodeTransformationStage.ts":
/*!****************************************************************!*\
  !*** ./src/enums/code-transformers/CodeTransformationStage.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeTransformationStage = void 0;
var CodeTransformationStage;
(function (CodeTransformationStage) {
    CodeTransformationStage["PreparingTransformers"] = "PreparingTransformers";
    CodeTransformationStage["FinalizingTransformers"] = "FinalizingTransformers";
})(CodeTransformationStage = exports.CodeTransformationStage || (exports.CodeTransformationStage = {}));


/***/ }),

/***/ "./src/enums/code-transformers/CodeTransformer.ts":
/*!********************************************************!*\
  !*** ./src/enums/code-transformers/CodeTransformer.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeTransformer = void 0;
var CodeTransformer;
(function (CodeTransformer) {
    CodeTransformer["HashbangOperatorTransformer"] = "HashbangOperatorTransformer";
})(CodeTransformer = exports.CodeTransformer || (exports.CodeTransformer = {}));


/***/ }),

/***/ "./src/enums/custom-code-helpers/CustomCodeHelper.ts":
/*!***********************************************************!*\
  !*** ./src/enums/custom-code-helpers/CustomCodeHelper.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomCodeHelper = void 0;
var CustomCodeHelper;
(function (CustomCodeHelper) {
    CustomCodeHelper["CallsControllerFunction"] = "CallsControllerFunction";
    CustomCodeHelper["ConsoleOutputDisable"] = "ConsoleOutputDisable";
    CustomCodeHelper["DebugProtectionFunctionCall"] = "DebugProtectionFunctionCall";
    CustomCodeHelper["DebugProtectionFunctionInterval"] = "DebugProtectionFunctionInterval";
    CustomCodeHelper["DebugProtectionFunction"] = "DebugProtectionFunction";
    CustomCodeHelper["DomainLock"] = "DomainLock";
    CustomCodeHelper["SelfDefendingUnicode"] = "SelfDefendingUnicode";
    CustomCodeHelper["StringArrayCallsWrapper"] = "StringArrayCallsWrapper";
    CustomCodeHelper["StringArray"] = "StringArray";
    CustomCodeHelper["StringArrayRotateFunction"] = "StringArrayRotateFunction";
})(CustomCodeHelper = exports.CustomCodeHelper || (exports.CustomCodeHelper = {}));


/***/ }),

/***/ "./src/enums/custom-code-helpers/CustomCodeHelperGroup.ts":
/*!****************************************************************!*\
  !*** ./src/enums/custom-code-helpers/CustomCodeHelperGroup.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomCodeHelperGroup = void 0;
var CustomCodeHelperGroup;
(function (CustomCodeHelperGroup) {
    CustomCodeHelperGroup["ConsoleOutput"] = "ConsoleOutput";
    CustomCodeHelperGroup["DebugProtection"] = "DebugProtection";
    CustomCodeHelperGroup["DomainLock"] = "DomainLock";
    CustomCodeHelperGroup["SelfDefending"] = "SelfDefending";
    CustomCodeHelperGroup["StringArray"] = "StringArray";
})(CustomCodeHelperGroup = exports.CustomCodeHelperGroup || (exports.CustomCodeHelperGroup = {}));


/***/ }),

/***/ "./src/enums/custom-nodes/ControlFlowCustomNode.ts":
/*!*********************************************************!*\
  !*** ./src/enums/custom-nodes/ControlFlowCustomNode.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlFlowCustomNode = void 0;
var ControlFlowCustomNode;
(function (ControlFlowCustomNode) {
    ControlFlowCustomNode["BinaryExpressionFunctionNode"] = "BinaryExpressionFunctionNode";
    ControlFlowCustomNode["BlockStatementControlFlowFlatteningNode"] = "BlockStatementControlFlowFlatteningNode";
    ControlFlowCustomNode["CallExpressionControlFlowStorageCallNode"] = "CallExpressionControlFlowStorageCallNode";
    ControlFlowCustomNode["CallExpressionFunctionNode"] = "CallExpressionFunctionNode";
    ControlFlowCustomNode["ControlFlowStorageNode"] = "ControlFlowStorageNode";
    ControlFlowCustomNode["ExpressionWithOperatorControlFlowStorageCallNode"] = "ExpressionWithOperatorControlFlowStorageCallNode";
    ControlFlowCustomNode["LogicalExpressionFunctionNode"] = "LogicalExpressionFunctionNode";
    ControlFlowCustomNode["StringLiteralControlFlowStorageCallNode"] = "StringLiteralControlFlowStorageCallNode";
    ControlFlowCustomNode["StringLiteralNode"] = "StringLiteralNode";
})(ControlFlowCustomNode = exports.ControlFlowCustomNode || (exports.ControlFlowCustomNode = {}));


/***/ }),

/***/ "./src/enums/custom-nodes/DeadCodeInjectionCustomNode.ts":
/*!***************************************************************!*\
  !*** ./src/enums/custom-nodes/DeadCodeInjectionCustomNode.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DeadCodeInjectionCustomNode = void 0;
var DeadCodeInjectionCustomNode;
(function (DeadCodeInjectionCustomNode) {
    DeadCodeInjectionCustomNode["BlockStatementDeadCodeInjectionNode"] = "BlockStatementDeadCodeInjectionNode";
})(DeadCodeInjectionCustomNode = exports.DeadCodeInjectionCustomNode || (exports.DeadCodeInjectionCustomNode = {}));


/***/ }),

/***/ "./src/enums/custom-nodes/ObjectExpressionKeysTransformerCustomNode.ts":
/*!*****************************************************************************!*\
  !*** ./src/enums/custom-nodes/ObjectExpressionKeysTransformerCustomNode.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectExpressionKeysTransformerCustomNode = void 0;
var ObjectExpressionKeysTransformerCustomNode;
(function (ObjectExpressionKeysTransformerCustomNode) {
    ObjectExpressionKeysTransformerCustomNode["ObjectExpressionVariableDeclarationHostNode"] = "ObjectExpressionVariableDeclarationHostNode";
})(ObjectExpressionKeysTransformerCustomNode = exports.ObjectExpressionKeysTransformerCustomNode || (exports.ObjectExpressionKeysTransformerCustomNode = {}));


/***/ }),

/***/ "./src/enums/event-emitters/ObfuscationEvent.ts":
/*!******************************************************!*\
  !*** ./src/enums/event-emitters/ObfuscationEvent.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ObfuscationEvent = void 0;
var ObfuscationEvent;
(function (ObfuscationEvent) {
    ObfuscationEvent["AfterObfuscation"] = "afterObfuscation";
    ObfuscationEvent["BeforeObfuscation"] = "beforeObfuscation";
})(ObfuscationEvent = exports.ObfuscationEvent || (exports.ObfuscationEvent = {}));


/***/ }),

/***/ "./src/enums/generators/identifier-names-generators/IdentifierNamesGenerator.ts":
/*!**************************************************************************************!*\
  !*** ./src/enums/generators/identifier-names-generators/IdentifierNamesGenerator.ts ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentifierNamesGenerator = void 0;
const tsenum_1 = __webpack_require__(/*! @gradecam/tsenum */ "@gradecam/tsenum");
exports.IdentifierNamesGenerator = tsenum_1.MakeEnum({
    DictionaryIdentifierNamesGenerator: 'dictionary',
    HexadecimalIdentifierNamesGenerator: 'hexadecimal',
    MangledIdentifierNamesGenerator: 'mangled'
});


/***/ }),

/***/ "./src/enums/logger/LoggingMessage.ts":
/*!********************************************!*\
  !*** ./src/enums/logger/LoggingMessage.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingMessage = void 0;
var LoggingMessage;
(function (LoggingMessage) {
    LoggingMessage["EmptySourceCode"] = "Empty source code. Obfuscation canceled...";
    LoggingMessage["ObfuscationCompleted"] = "Obfuscation completed. Total time: %s sec.";
    LoggingMessage["ObfuscationStarted"] = "Obfuscation started...";
    LoggingMessage["RandomGeneratorSeed"] = "Random generator seed: %s...";
    LoggingMessage["CodeTransformationStage"] = "Code transformation stage: %s...";
    LoggingMessage["NodeTransformationStage"] = "AST transformation stage: %s...";
    LoggingMessage["Version"] = "Version: %s";
})(LoggingMessage = exports.LoggingMessage || (exports.LoggingMessage = {}));


/***/ }),

/***/ "./src/enums/logger/LoggingPrefix.ts":
/*!*******************************************!*\
  !*** ./src/enums/logger/LoggingPrefix.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingPrefix = void 0;
var LoggingPrefix;
(function (LoggingPrefix) {
    LoggingPrefix["Base"] = "[javascript-obfuscator]";
    LoggingPrefix["CLI"] = "[javascript-obfuscator-cli]";
})(LoggingPrefix = exports.LoggingPrefix || (exports.LoggingPrefix = {}));


/***/ }),

/***/ "./src/enums/node-transformers/NodeTransformationStage.ts":
/*!****************************************************************!*\
  !*** ./src/enums/node-transformers/NodeTransformationStage.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeTransformationStage = void 0;
var NodeTransformationStage;
(function (NodeTransformationStage) {
    NodeTransformationStage["Initializing"] = "Initializing";
    NodeTransformationStage["Preparing"] = "Preparing";
    NodeTransformationStage["MangleProperties"] = "MangleProperties";
    NodeTransformationStage["DeadCodeInjection"] = "DeadCodeInjection";
    NodeTransformationStage["ControlFlowFlattening"] = "ControlFlowFlattening";
    NodeTransformationStage["Converting"] = "Converting";
    NodeTransformationStage["Obfuscating"] = "Obfuscating";
    NodeTransformationStage["Finalizing"] = "Finalizing";
})(NodeTransformationStage = exports.NodeTransformationStage || (exports.NodeTransformationStage = {}));


/***/ }),

/***/ "./src/enums/node-transformers/NodeTransformer.ts":
/*!********************************************************!*\
  !*** ./src/enums/node-transformers/NodeTransformer.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeTransformer = void 0;
var NodeTransformer;
(function (NodeTransformer) {
    NodeTransformer["BlockStatementControlFlowTransformer"] = "BlockStatementControlFlowTransformer";
    NodeTransformer["CommentsTransformer"] = "CommentsTransformer";
    NodeTransformer["CustomCodeHelpersTransformer"] = "CustomCodeHelpersTransformer";
    NodeTransformer["DeadCodeInjectionTransformer"] = "DeadCodeInjectionTransformer";
    NodeTransformer["EvalCallExpressionTransformer"] = "EvalCallExpressionTransformer";
    NodeTransformer["FunctionControlFlowTransformer"] = "FunctionControlFlowTransformer";
    NodeTransformer["LabeledStatementTransformer"] = "LabeledStatementTransformer";
    NodeTransformer["LiteralTransformer"] = "LiteralTransformer";
    NodeTransformer["ManglePropertiesTransformer"] = "ManglePropertiesTransformer";
    NodeTransformer["MemberExpressionTransformer"] = "MemberExpressionTransformer";
    NodeTransformer["MetadataTransformer"] = "MetadataTransformer";
    NodeTransformer["MethodDefinitionTransformer"] = "MethodDefinitionTransformer";
    NodeTransformer["ObfuscatingGuardsTransformer"] = "ObfuscatingGuardsTransformer";
    NodeTransformer["ObjectExpressionKeysTransformer"] = "ObjectExpressionKeysTransformer";
    NodeTransformer["ObjectExpressionTransformer"] = "ObjectExpressionTransformer";
    NodeTransformer["ParentificationTransformer"] = "ParentificationTransformer";
    NodeTransformer["ScopeIdentifiersTransformer"] = "ScopeIdentifiersTransformer";
    NodeTransformer["SplitStringTransformer"] = "SplitStringTransformer";
    NodeTransformer["TemplateLiteralTransformer"] = "TemplateLiteralTransformer";
    NodeTransformer["VariablePreserveTransformer"] = "VariablePreserveTransformer";
})(NodeTransformer = exports.NodeTransformer || (exports.NodeTransformer = {}));


/***/ }),

/***/ "./src/enums/node-transformers/VisitorDirection.ts":
/*!*********************************************************!*\
  !*** ./src/enums/node-transformers/VisitorDirection.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitorDirection = void 0;
var VisitorDirection;
(function (VisitorDirection) {
    VisitorDirection["Enter"] = "enter";
    VisitorDirection["Leave"] = "leave";
})(VisitorDirection = exports.VisitorDirection || (exports.VisitorDirection = {}));


/***/ }),

/***/ "./src/enums/node-transformers/converting-transformers/properties-extractors/ObjectExpressionExtractor.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/enums/node-transformers/converting-transformers/properties-extractors/ObjectExpressionExtractor.ts ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectExpressionExtractor = void 0;
var ObjectExpressionExtractor;
(function (ObjectExpressionExtractor) {
    ObjectExpressionExtractor["BasePropertiesExtractor"] = "BasePropertiesExtractor";
    ObjectExpressionExtractor["ObjectExpressionToVariableDeclarationExtractor"] = "ObjectExpressionToVariableDeclarationExtractor";
})(ObjectExpressionExtractor = exports.ObjectExpressionExtractor || (exports.ObjectExpressionExtractor = {}));


/***/ }),

/***/ "./src/enums/node-transformers/obfuscating-transformers/obfuscating-replacers/ControlFlowReplacer.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/enums/node-transformers/obfuscating-transformers/obfuscating-replacers/ControlFlowReplacer.ts ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlFlowReplacer = void 0;
var ControlFlowReplacer;
(function (ControlFlowReplacer) {
    ControlFlowReplacer["BinaryExpressionControlFlowReplacer"] = "BinaryExpressionControlFlowReplacer";
    ControlFlowReplacer["CallExpressionControlFlowReplacer"] = "CallExpressionControlFlowReplacer";
    ControlFlowReplacer["LogicalExpressionControlFlowReplacer"] = "LogicalExpressionControlFlowReplacer";
    ControlFlowReplacer["StringLiteralControlFlowReplacer"] = "StringLiteralControlFlowReplacer";
})(ControlFlowReplacer = exports.ControlFlowReplacer || (exports.ControlFlowReplacer = {}));


/***/ }),

/***/ "./src/enums/node-transformers/obfuscating-transformers/obfuscating-replacers/IdentifierObfuscatingReplacer.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/enums/node-transformers/obfuscating-transformers/obfuscating-replacers/IdentifierObfuscatingReplacer.ts ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentifierObfuscatingReplacer = void 0;
var IdentifierObfuscatingReplacer;
(function (IdentifierObfuscatingReplacer) {
    IdentifierObfuscatingReplacer["BaseIdentifierObfuscatingReplacer"] = "BaseIdentifierObfuscatingReplacer";
})(IdentifierObfuscatingReplacer = exports.IdentifierObfuscatingReplacer || (exports.IdentifierObfuscatingReplacer = {}));


/***/ }),

/***/ "./src/enums/node-transformers/obfuscating-transformers/obfuscating-replacers/LiteralObfuscatingReplacer.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/enums/node-transformers/obfuscating-transformers/obfuscating-replacers/LiteralObfuscatingReplacer.ts ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LiteralObfuscatingReplacer = void 0;
var LiteralObfuscatingReplacer;
(function (LiteralObfuscatingReplacer) {
    LiteralObfuscatingReplacer["BooleanLiteralObfuscatingReplacer"] = "BooleanLiteralObfuscatingReplacer";
    LiteralObfuscatingReplacer["NumberLiteralObfuscatingReplacer"] = "NumberLiteralObfuscatingReplacer";
    LiteralObfuscatingReplacer["StringLiteralObfuscatingReplacer"] = "StringLiteralObfuscatingReplacer";
})(LiteralObfuscatingReplacer = exports.LiteralObfuscatingReplacer || (exports.LiteralObfuscatingReplacer = {}));


/***/ }),

/***/ "./src/enums/node-transformers/preparing-transformers/obfuscating-guards/ObfuscatingGuard.ts":
/*!***************************************************************************************************!*\
  !*** ./src/enums/node-transformers/preparing-transformers/obfuscating-guards/ObfuscatingGuard.ts ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ObfuscatingGuard = void 0;
var ObfuscatingGuard;
(function (ObfuscatingGuard) {
    ObfuscatingGuard["BlackListObfuscatingGuard"] = "BlackListObfuscatingGuard";
    ObfuscatingGuard["ConditionalCommentObfuscatingGuard"] = "ConditionalCommentObfuscatingGuard";
    ObfuscatingGuard["ReservedStringObfuscatingGuard"] = "ReservedStringObfuscatingGuard";
})(ObfuscatingGuard = exports.ObfuscatingGuard || (exports.ObfuscatingGuard = {}));


/***/ }),

/***/ "./src/enums/node/NodeType.ts":
/*!************************************!*\
  !*** ./src/enums/node/NodeType.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeType = void 0;
var NodeType;
(function (NodeType) {
    NodeType["ArrayExpression"] = "ArrayExpression";
    NodeType["ArrayPattern"] = "ArrayPattern";
    NodeType["ArrowFunctionExpression"] = "ArrowFunctionExpression";
    NodeType["AssignmentExpression"] = "AssignmentExpression";
    NodeType["AssignmentPattern"] = "AssignmentPattern";
    NodeType["AwaitExpression"] = "AwaitExpression";
    NodeType["BinaryExpression"] = "BinaryExpression";
    NodeType["BlockStatement"] = "BlockStatement";
    NodeType["BreakStatement"] = "BreakStatement";
    NodeType["CallExpression"] = "CallExpression";
    NodeType["CatchClause"] = "CatchClause";
    NodeType["ClassDeclaration"] = "ClassDeclaration";
    NodeType["ConditionalExpression"] = "ConditionalExpression";
    NodeType["ContinueStatement"] = "ContinueStatement";
    NodeType["ExportNamedDeclaration"] = "ExportNamedDeclaration";
    NodeType["ExpressionStatement"] = "ExpressionStatement";
    NodeType["ForStatement"] = "ForStatement";
    NodeType["ForInStatement"] = "ForInStatement";
    NodeType["ForOfStatement"] = "ForOfStatement";
    NodeType["FunctionDeclaration"] = "FunctionDeclaration";
    NodeType["FunctionExpression"] = "FunctionExpression";
    NodeType["Identifier"] = "Identifier";
    NodeType["IfStatement"] = "IfStatement";
    NodeType["ImportDeclaration"] = "ImportDeclaration";
    NodeType["ImportDefaultSpecifier"] = "ImportDefaultSpecifier";
    NodeType["ImportNamespaceSpecifier"] = "ImportNamespaceSpecifier";
    NodeType["ImportSpecifier"] = "ImportSpecifier";
    NodeType["LabeledStatement"] = "LabeledStatement";
    NodeType["Literal"] = "Literal";
    NodeType["LogicalExpression"] = "LogicalExpression";
    NodeType["MemberExpression"] = "MemberExpression";
    NodeType["MethodDefinition"] = "MethodDefinition";
    NodeType["ObjectExpression"] = "ObjectExpression";
    NodeType["ObjectPattern"] = "ObjectPattern";
    NodeType["Program"] = "Program";
    NodeType["Property"] = "Property";
    NodeType["RestElement"] = "RestElement";
    NodeType["ReturnStatement"] = "ReturnStatement";
    NodeType["SequenceExpression"] = "SequenceExpression";
    NodeType["Super"] = "Super";
    NodeType["SwitchCase"] = "SwitchCase";
    NodeType["SwitchStatement"] = "SwitchStatement";
    NodeType["TaggedTemplateExpression"] = "TaggedTemplateExpression";
    NodeType["TemplateLiteral"] = "TemplateLiteral";
    NodeType["TryStatement"] = "TryStatement";
    NodeType["UnaryExpression"] = "UnaryExpression";
    NodeType["UpdateExpression"] = "UpdateExpression";
    NodeType["VariableDeclaration"] = "VariableDeclaration";
    NodeType["VariableDeclarator"] = "VariableDeclarator";
    NodeType["WhileStatement"] = "WhileStatement";
})(NodeType = exports.NodeType || (exports.NodeType = {}));


/***/ }),

/***/ "./src/enums/source-map/SourceMapMode.ts":
/*!***********************************************!*\
  !*** ./src/enums/source-map/SourceMapMode.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceMapMode = void 0;
const tsenum_1 = __webpack_require__(/*! @gradecam/tsenum */ "@gradecam/tsenum");
exports.SourceMapMode = tsenum_1.MakeEnum({
    Inline: 'inline',
    Separate: 'separate'
});


/***/ }),

/***/ "./src/event-emitters/ObfuscationEventEmitter.ts":
/*!*******************************************************!*\
  !*** ./src/event-emitters/ObfuscationEventEmitter.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObfuscationEventEmitter = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const eventemitter3_1 = __importDefault(__webpack_require__(/*! eventemitter3 */ "eventemitter3"));
inversify_1.decorate(inversify_1.injectable(), eventemitter3_1.default);
let ObfuscationEventEmitter = class ObfuscationEventEmitter extends eventemitter3_1.default {
};
ObfuscationEventEmitter = __decorate([
    inversify_1.injectable()
], ObfuscationEventEmitter);
exports.ObfuscationEventEmitter = ObfuscationEventEmitter;


/***/ }),

/***/ "./src/generators/identifier-names-generators/AbstractIdentifierNamesGenerator.ts":
/*!****************************************************************************************!*\
  !*** ./src/generators/identifier-names-generators/AbstractIdentifierNamesGenerator.ts ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractIdentifierNamesGenerator = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const NodeGuards_1 = __webpack_require__(/*! ../../node/NodeGuards */ "./src/node/NodeGuards.ts");
let AbstractIdentifierNamesGenerator = class AbstractIdentifierNamesGenerator {
    constructor(randomGenerator, options) {
        this.preservedNamesSet = new Set();
        this.lexicalScopesPreservedNamesMap = new Map();
        this.randomGenerator = randomGenerator;
        this.options = options;
    }
    generate(lexicalScopeNode, nameLength) {
        return NodeGuards_1.NodeGuards.isProgramNode(lexicalScopeNode)
            ? this.generateForGlobalScope()
            : this.generateForLexicalScope(lexicalScopeNode);
    }
    preserveName(name) {
        this.preservedNamesSet.add(name);
    }
    preserveNameForLexicalScope(name, lexicalScopeNode) {
        var _a;
        const preservedNamesForLexicalScopeSet = (_a = this.lexicalScopesPreservedNamesMap.get(lexicalScopeNode)) !== null && _a !== void 0 ? _a : new Set();
        preservedNamesForLexicalScopeSet.add(name);
        this.lexicalScopesPreservedNamesMap.set(lexicalScopeNode, preservedNamesForLexicalScopeSet);
    }
    isValidIdentifierName(name) {
        return this.notReservedName(name) && !this.preservedNamesSet.has(name);
    }
    isValidIdentifierNameInLexicalScopes(name, lexicalScopeNodes) {
        var _a;
        if (!this.isValidIdentifierName(name)) {
            return false;
        }
        for (const lexicalScope of lexicalScopeNodes) {
            const preservedNamesForLexicalScopeSet = (_a = this.lexicalScopesPreservedNamesMap.get(lexicalScope)) !== null && _a !== void 0 ? _a : null;
            if (!preservedNamesForLexicalScopeSet) {
                continue;
            }
            if (preservedNamesForLexicalScopeSet.has(name)) {
                return false;
            }
        }
        return true;
    }
    notReservedName(name) {
        return this.options.reservedNames.length
            ? !this.options.reservedNames.some((reservedName) => new RegExp(reservedName, 'g').exec(name) !== null)
            : true;
    }
};
AbstractIdentifierNamesGenerator = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _a : Object, typeof (_b = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _b : Object])
], AbstractIdentifierNamesGenerator);
exports.AbstractIdentifierNamesGenerator = AbstractIdentifierNamesGenerator;


/***/ }),

/***/ "./src/generators/identifier-names-generators/DictionaryIdentifierNamesGenerator.ts":
/*!******************************************************************************************!*\
  !*** ./src/generators/identifier-names-generators/DictionaryIdentifierNamesGenerator.ts ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var DictionaryIdentifierNamesGenerator_1, _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DictionaryIdentifierNamesGenerator = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const IArrayUtils_1 = __webpack_require__(/*! ../../interfaces/utils/IArrayUtils */ "./src/interfaces/utils/IArrayUtils.ts");
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const AbstractIdentifierNamesGenerator_1 = __webpack_require__(/*! ./AbstractIdentifierNamesGenerator */ "./src/generators/identifier-names-generators/AbstractIdentifierNamesGenerator.ts");
const NodeLexicalScopeUtils_1 = __webpack_require__(/*! ../../node/NodeLexicalScopeUtils */ "./src/node/NodeLexicalScopeUtils.ts");
let DictionaryIdentifierNamesGenerator = DictionaryIdentifierNamesGenerator_1 = class DictionaryIdentifierNamesGenerator extends AbstractIdentifierNamesGenerator_1.AbstractIdentifierNamesGenerator {
    constructor(randomGenerator, options, arrayUtils) {
        super(randomGenerator, options);
        this.arrayUtils = arrayUtils;
        this.identifierNamesSet = new Set(this.getInitialIdentifierNames(this.options.identifiersDictionary));
        this.identifiersIterator = this.identifierNamesSet.values();
    }
    static incrementIdentifierName(identifierName) {
        let newIdentifierName = '';
        let isSuccess = false;
        for (const character of identifierName) {
            if (!isSuccess && character === character.toUpperCase()) {
                newIdentifierName += character.toLowerCase();
            }
            else if (!isSuccess && character === character.toLowerCase()) {
                newIdentifierName += character.toUpperCase();
                isSuccess = true;
            }
            else {
                newIdentifierName += character;
            }
        }
        if (isSuccess) {
            return newIdentifierName;
        }
        return null;
    }
    generateNext() {
        const identifierName = this.generateNewDictionaryName();
        this.preserveName(identifierName);
        return identifierName;
    }
    generateForGlobalScope() {
        const prefix = this.options.identifiersPrefix ?
            `${this.options.identifiersPrefix}`
            : '';
        const identifierName = this.generateNewDictionaryName();
        const identifierNameWithPrefix = `${prefix}${identifierName}`;
        if (!this.isValidIdentifierName(identifierNameWithPrefix)) {
            return this.generateForGlobalScope();
        }
        this.preserveName(identifierNameWithPrefix);
        return identifierNameWithPrefix;
    }
    generateForLexicalScope(lexicalScopeNode) {
        const lexicalScopes = [
            lexicalScopeNode,
            ...NodeLexicalScopeUtils_1.NodeLexicalScopeUtils.getLexicalScopes(lexicalScopeNode)
        ];
        const identifierName = this.generateNewDictionaryName();
        if (!this.isValidIdentifierNameInLexicalScopes(identifierName, lexicalScopes)) {
            return this.generateForLexicalScope(lexicalScopeNode);
        }
        this.preserveNameForLexicalScope(identifierName, lexicalScopeNode);
        return identifierName;
    }
    generateNewDictionaryName() {
        if (!this.identifierNamesSet.size) {
            throw new Error('Too many identifiers in the code, add more words to identifiers dictionary');
        }
        const iteratorResult = this.identifiersIterator.next();
        if (!iteratorResult.done) {
            const identifierName = iteratorResult.value;
            if (!this.isValidIdentifierName(identifierName)) {
                return this.generateNewDictionaryName();
            }
            return iteratorResult.value;
        }
        this.identifierNamesSet = new Set(this.getIncrementedIdentifierNames([...this.identifierNamesSet]));
        this.identifiersIterator = this.identifierNamesSet.values();
        return this.generateNewDictionaryName();
    }
    getInitialIdentifierNames(identifierNames) {
        const formattedIdentifierNames = identifierNames
            .filter(Boolean)
            .map((identifierName) => identifierName.toLowerCase());
        return this.arrayUtils.shuffle(formattedIdentifierNames);
    }
    getIncrementedIdentifierNames(identifierNames) {
        const formattedIdentifierNames = [];
        for (const identifierName of identifierNames) {
            const newIdentifierName = DictionaryIdentifierNamesGenerator_1
                .incrementIdentifierName(identifierName);
            if (newIdentifierName) {
                formattedIdentifierNames.push(newIdentifierName);
            }
        }
        return this.arrayUtils.shuffle(formattedIdentifierNames);
    }
};
DictionaryIdentifierNamesGenerator = DictionaryIdentifierNamesGenerator_1 = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IArrayUtils)),
    __metadata("design:paramtypes", [typeof (_a = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _a : Object, typeof (_b = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _b : Object, typeof (_c = typeof IArrayUtils_1.IArrayUtils !== "undefined" && IArrayUtils_1.IArrayUtils) === "function" ? _c : Object])
], DictionaryIdentifierNamesGenerator);
exports.DictionaryIdentifierNamesGenerator = DictionaryIdentifierNamesGenerator;


/***/ }),

/***/ "./src/generators/identifier-names-generators/HexadecimalIdentifierNamesGenerator.ts":
/*!*******************************************************************************************!*\
  !*** ./src/generators/identifier-names-generators/HexadecimalIdentifierNamesGenerator.ts ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var HexadecimalIdentifierNamesGenerator_1, _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HexadecimalIdentifierNamesGenerator = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const AbstractIdentifierNamesGenerator_1 = __webpack_require__(/*! ./AbstractIdentifierNamesGenerator */ "./src/generators/identifier-names-generators/AbstractIdentifierNamesGenerator.ts");
const NumberUtils_1 = __webpack_require__(/*! ../../utils/NumberUtils */ "./src/utils/NumberUtils.ts");
const Utils_1 = __webpack_require__(/*! ../../utils/Utils */ "./src/utils/Utils.ts");
let HexadecimalIdentifierNamesGenerator = HexadecimalIdentifierNamesGenerator_1 = class HexadecimalIdentifierNamesGenerator extends AbstractIdentifierNamesGenerator_1.AbstractIdentifierNamesGenerator {
    constructor(randomGenerator, options) {
        super(randomGenerator, options);
    }
    generateNext(nameLength) {
        const rangeMinInteger = 10000;
        const rangeMaxInteger = 99999999;
        const randomInteger = this.randomGenerator.getRandomInteger(rangeMinInteger, rangeMaxInteger);
        const hexadecimalNumber = NumberUtils_1.NumberUtils.toHex(randomInteger);
        const prefixLength = Utils_1.Utils.hexadecimalPrefix.length;
        const baseNameLength = (nameLength !== null && nameLength !== void 0 ? nameLength : HexadecimalIdentifierNamesGenerator_1.baseIdentifierNameLength)
            + prefixLength;
        const baseIdentifierName = hexadecimalNumber.substr(0, baseNameLength);
        const identifierName = `_${baseIdentifierName}`;
        if (!this.isValidIdentifierName(identifierName)) {
            return this.generateNext(nameLength);
        }
        this.preserveName(identifierName);
        return identifierName;
    }
    generateForGlobalScope(nameLength) {
        const identifierName = this.generateNext(nameLength);
        return `${this.options.identifiersPrefix}${identifierName}`.replace('__', '_');
    }
    generateForLexicalScope(lexicalScopeNode, nameLength) {
        return this.generateNext(nameLength);
    }
};
HexadecimalIdentifierNamesGenerator.baseIdentifierNameLength = 6;
HexadecimalIdentifierNamesGenerator = HexadecimalIdentifierNamesGenerator_1 = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _a : Object, typeof (_b = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _b : Object])
], HexadecimalIdentifierNamesGenerator);
exports.HexadecimalIdentifierNamesGenerator = HexadecimalIdentifierNamesGenerator;


/***/ }),

/***/ "./src/generators/identifier-names-generators/MangledIdentifierNamesGenerator.ts":
/*!***************************************************************************************!*\
  !*** ./src/generators/identifier-names-generators/MangledIdentifierNamesGenerator.ts ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var MangledIdentifierNamesGenerator_1, _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MangledIdentifierNamesGenerator = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const AbstractIdentifierNamesGenerator_1 = __webpack_require__(/*! ./AbstractIdentifierNamesGenerator */ "./src/generators/identifier-names-generators/AbstractIdentifierNamesGenerator.ts");
const NodeLexicalScopeUtils_1 = __webpack_require__(/*! ../../node/NodeLexicalScopeUtils */ "./src/node/NodeLexicalScopeUtils.ts");
let MangledIdentifierNamesGenerator = MangledIdentifierNamesGenerator_1 = class MangledIdentifierNamesGenerator extends AbstractIdentifierNamesGenerator_1.AbstractIdentifierNamesGenerator {
    constructor(randomGenerator, options) {
        super(randomGenerator, options);
        this.previousMangledName = MangledIdentifierNamesGenerator_1.initMangledNameCharacter;
    }
    generateNext(nameLength) {
        const identifierName = this.generateNewMangledName(this.previousMangledName);
        this.previousMangledName = identifierName;
        this.preserveName(identifierName);
        return identifierName;
    }
    generateForGlobalScope(nameLength) {
        const prefix = this.options.identifiersPrefix ?
            `${this.options.identifiersPrefix}`
            : '';
        const identifierName = this.generateNewMangledName(this.previousMangledName);
        const identifierNameWithPrefix = `${prefix}${identifierName}`;
        this.previousMangledName = identifierName;
        if (!this.isValidIdentifierName(identifierNameWithPrefix)) {
            return this.generateForGlobalScope(nameLength);
        }
        this.preserveName(identifierNameWithPrefix);
        return identifierNameWithPrefix;
    }
    generateForLexicalScope(lexicalScopeNode, nameLength) {
        const lexicalScopes = [
            lexicalScopeNode,
            ...NodeLexicalScopeUtils_1.NodeLexicalScopeUtils.getLexicalScopes(lexicalScopeNode)
        ];
        const lastMangledNameForScope = this.getLastMangledNameForScopes(lexicalScopes);
        let identifierName = lastMangledNameForScope;
        do {
            identifierName = this.generateNewMangledName(identifierName);
        } while (!this.isValidIdentifierNameInLexicalScopes(identifierName, lexicalScopes));
        MangledIdentifierNamesGenerator_1.lastMangledNameInScopeMap.set(lexicalScopeNode, identifierName);
        this.preserveNameForLexicalScope(identifierName, lexicalScopeNode);
        return identifierName;
    }
    isValidIdentifierName(mangledName) {
        return super.isValidIdentifierName(mangledName)
            && !MangledIdentifierNamesGenerator_1.reservedNamesSet.has(mangledName);
    }
    generateNewMangledName(previousMangledName) {
        const generateNewMangledName = (name) => {
            const nameSequence = MangledIdentifierNamesGenerator_1.nameSequence;
            const nameSequenceLength = nameSequence.length;
            const nameLength = name.length;
            const zeroSequence = (num) => {
                return '0'.repeat(num);
            };
            let index = nameLength - 1;
            do {
                const character = name[index];
                const indexInSequence = nameSequence.indexOf(character);
                const lastNameSequenceIndex = nameSequenceLength - 1;
                if (indexInSequence !== lastNameSequenceIndex) {
                    const previousNamePart = name.substring(0, index);
                    const nextCharacter = nameSequence[indexInSequence + 1];
                    const zeroSequenceLength = nameLength - (index + 1);
                    const zeroSequenceCharacters = zeroSequence(zeroSequenceLength);
                    return previousNamePart + nextCharacter + zeroSequenceCharacters;
                }
                --index;
            } while (index >= 0);
            return `a${zeroSequence(nameLength)}`;
        };
        let newMangledName = generateNewMangledName(previousMangledName);
        if (!this.isValidIdentifierName(newMangledName)) {
            newMangledName = this.generateNewMangledName(newMangledName);
        }
        return newMangledName;
    }
    getLastMangledNameForScopes(lexicalScopeNodes) {
        var _a;
        for (const lexicalScope of lexicalScopeNodes) {
            const lastMangledName = (_a = MangledIdentifierNamesGenerator_1.lastMangledNameInScopeMap
                .get(lexicalScope)) !== null && _a !== void 0 ? _a : null;
            if (!lastMangledName) {
                continue;
            }
            return lastMangledName;
        }
        return MangledIdentifierNamesGenerator_1.initMangledNameCharacter;
    }
};
MangledIdentifierNamesGenerator.initMangledNameCharacter = '9';
MangledIdentifierNamesGenerator.lastMangledNameInScopeMap = new WeakMap();
MangledIdentifierNamesGenerator.nameSequence = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
MangledIdentifierNamesGenerator.reservedNamesSet = new Set([
    'byte', 'case', 'char', 'do', 'else', 'enum', 'eval', 'for', 'goto',
    'if', 'in', 'int', 'let', 'long', 'new', 'null', 'this', 'true', 'try',
    'var', 'void', 'with'
]);
MangledIdentifierNamesGenerator = MangledIdentifierNamesGenerator_1 = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _a : Object, typeof (_b = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _b : Object])
], MangledIdentifierNamesGenerator);
exports.MangledIdentifierNamesGenerator = MangledIdentifierNamesGenerator;


/***/ }),

/***/ "./src/interfaces/analyzers/calls-graph-analyzer/ICallsGraphAnalyzer.ts":
/*!******************************************************************************!*\
  !*** ./src/interfaces/analyzers/calls-graph-analyzer/ICallsGraphAnalyzer.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/interfaces/analyzers/calls-graph-analyzer/IPrevailingKindOfVariablesAnalyzer.ts":
/*!*********************************************************************************************!*\
  !*** ./src/interfaces/analyzers/calls-graph-analyzer/IPrevailingKindOfVariablesAnalyzer.ts ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/interfaces/analyzers/scope-analyzer/IScopeAnalyzer.ts":
/*!*******************************************************************!*\
  !*** ./src/interfaces/analyzers/scope-analyzer/IScopeAnalyzer.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/interfaces/analyzers/string-array-storage-analyzer/IStringArrayStorageAnalyzer.ts":
/*!***********************************************************************************************!*\
  !*** ./src/interfaces/analyzers/string-array-storage-analyzer/IStringArrayStorageAnalyzer.ts ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/interfaces/code-transformers/ICodeTransformersRunner.ts":
/*!*********************************************************************!*\
  !*** ./src/interfaces/code-transformers/ICodeTransformersRunner.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/interfaces/custom-code-helpers/ICustomCodeHelperFormatter.ts":
/*!**************************************************************************!*\
  !*** ./src/interfaces/custom-code-helpers/ICustomCodeHelperFormatter.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/interfaces/custom-code-helpers/ICustomCodeHelperObfuscator.ts":
/*!***************************************************************************!*\
  !*** ./src/interfaces/custom-code-helpers/ICustomCodeHelperObfuscator.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/interfaces/event-emitters/IObfuscationEventEmitter.ts":
/*!*******************************************************************!*\
  !*** ./src/interfaces/event-emitters/IObfuscationEventEmitter.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/interfaces/logger/ILogger.ts":
/*!******************************************!*\
  !*** ./src/interfaces/logger/ILogger.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/interfaces/node-transformers/INodeTransformersRunner.ts":
/*!*********************************************************************!*\
  !*** ./src/interfaces/node-transformers/INodeTransformersRunner.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/interfaces/node-transformers/mangle-properties-transformers/replacer/IManglePropertiesReplacer.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/interfaces/node-transformers/mangle-properties-transformers/replacer/IManglePropertiesReplacer.ts ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/interfaces/node/IScopeIdentifiersTraverser.ts":
/*!***********************************************************!*\
  !*** ./src/interfaces/node/IScopeIdentifiersTraverser.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/interfaces/options/IOptions.ts":
/*!********************************************!*\
  !*** ./src/interfaces/options/IOptions.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/interfaces/options/IOptionsNormalizer.ts":
/*!******************************************************!*\
  !*** ./src/interfaces/options/IOptionsNormalizer.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/interfaces/source-code/ISourceCode.ts":
/*!***************************************************!*\
  !*** ./src/interfaces/source-code/ISourceCode.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/interfaces/storages/string-array-storage/IStringArrayStorage.ts":
/*!*****************************************************************************!*\
  !*** ./src/interfaces/storages/string-array-storage/IStringArrayStorage.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/interfaces/utils/IArrayUtils.ts":
/*!*********************************************!*\
  !*** ./src/interfaces/utils/IArrayUtils.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/interfaces/utils/ICryptUtils.ts":
/*!*********************************************!*\
  !*** ./src/interfaces/utils/ICryptUtils.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/interfaces/utils/IEscapeSequenceEncoder.ts":
/*!********************************************************!*\
  !*** ./src/interfaces/utils/IEscapeSequenceEncoder.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/interfaces/utils/ILevelledTopologicalSorter.ts":
/*!************************************************************!*\
  !*** ./src/interfaces/utils/ILevelledTopologicalSorter.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/interfaces/utils/IRandomGenerator.ts":
/*!**************************************************!*\
  !*** ./src/interfaces/utils/IRandomGenerator.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/interfaces/utils/ITransformerNamesGroupsBuilder.ts":
/*!****************************************************************!*\
  !*** ./src/interfaces/utils/ITransformerNamesGroupsBuilder.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/logger/Logger.ts":
/*!******************************!*\
  !*** ./src/logger/Logger.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Logger_1, _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const chalk_1 = __importDefault(__webpack_require__(/*! chalk */ "chalk"));
const IOptions_1 = __webpack_require__(/*! ../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const LoggingPrefix_1 = __webpack_require__(/*! ../enums/logger/LoggingPrefix */ "./src/enums/logger/LoggingPrefix.ts");
let Logger = Logger_1 = class Logger {
    constructor(options) {
        this.options = options;
    }
    static log(loggingLevelColor, loggingPrefix, loggingMessage, value) {
        const processedMessage = loggingLevelColor(`\n${loggingPrefix} ${loggingMessage}`);
        console.log(processedMessage, value !== null && value !== void 0 ? value : '');
    }
    info(loggingMessage, value) {
        if (!this.options.log) {
            return;
        }
        Logger_1.log(Logger_1.colorInfo, LoggingPrefix_1.LoggingPrefix.Base, loggingMessage, value);
    }
    success(loggingMessage, value) {
        if (!this.options.log) {
            return;
        }
        Logger_1.log(Logger_1.colorSuccess, LoggingPrefix_1.LoggingPrefix.Base, loggingMessage, value);
    }
    warn(loggingMessage, value) {
        if (!this.options.log) {
            return;
        }
        Logger_1.log(Logger_1.colorWarn, LoggingPrefix_1.LoggingPrefix.Base, loggingMessage, value);
    }
};
Logger.colorInfo = chalk_1.default.cyan;
Logger.colorSuccess = chalk_1.default.green;
Logger.colorWarn = chalk_1.default.yellow;
Logger = Logger_1 = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _a : Object])
], Logger);
exports.Logger = Logger;


/***/ }),

/***/ "./src/node-transformers/AbstractNodeTransformer.ts":
/*!**********************************************************!*\
  !*** ./src/node-transformers/AbstractNodeTransformer.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractNodeTransformer = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const IOptions_1 = __webpack_require__(/*! ../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
let AbstractNodeTransformer = class AbstractNodeTransformer {
    constructor(randomGenerator, options) {
        this.randomGenerator = randomGenerator;
        this.options = options;
    }
};
AbstractNodeTransformer = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _a : Object, typeof (_b = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _b : Object])
], AbstractNodeTransformer);
exports.AbstractNodeTransformer = AbstractNodeTransformer;


/***/ }),

/***/ "./src/node-transformers/NodeTransformerNamesGroupsBuilder.ts":
/*!********************************************************************!*\
  !*** ./src/node-transformers/NodeTransformerNamesGroupsBuilder.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeTransformerNamesGroupsBuilder = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const AbstractTransformerNamesGroupsBuilder_1 = __webpack_require__(/*! ../utils/AbstractTransformerNamesGroupsBuilder */ "./src/utils/AbstractTransformerNamesGroupsBuilder.ts");
let NodeTransformerNamesGroupsBuilder = class NodeTransformerNamesGroupsBuilder extends AbstractTransformerNamesGroupsBuilder_1.AbstractTransformerNamesGroupsBuilder {
};
NodeTransformerNamesGroupsBuilder = __decorate([
    inversify_1.injectable()
], NodeTransformerNamesGroupsBuilder);
exports.NodeTransformerNamesGroupsBuilder = NodeTransformerNamesGroupsBuilder;


/***/ }),

/***/ "./src/node-transformers/NodeTransformersRunner.ts":
/*!*********************************************************!*\
  !*** ./src/node-transformers/NodeTransformersRunner.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeTransformersRunner = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const estraverse = __importStar(__webpack_require__(/*! estraverse */ "estraverse"));
const TNodeTransformerFactory_1 = __webpack_require__(/*! ../types/container/node-transformers/TNodeTransformerFactory */ "./src/types/container/node-transformers/TNodeTransformerFactory.ts");
const ITransformerNamesGroupsBuilder_1 = __webpack_require__(/*! ../interfaces/utils/ITransformerNamesGroupsBuilder */ "./src/interfaces/utils/ITransformerNamesGroupsBuilder.ts");
const VisitorDirection_1 = __webpack_require__(/*! ../enums/node-transformers/VisitorDirection */ "./src/enums/node-transformers/VisitorDirection.ts");
const NodeGuards_1 = __webpack_require__(/*! ../node/NodeGuards */ "./src/node/NodeGuards.ts");
const NodeMetadata_1 = __webpack_require__(/*! ../node/NodeMetadata */ "./src/node/NodeMetadata.ts");
let NodeTransformersRunner = class NodeTransformersRunner {
    constructor(nodeTransformerFactory, nodeTransformerNamesGroupsBuilder) {
        this.nodeTransformerFactory = nodeTransformerFactory;
        this.nodeTransformerNamesGroupsBuilder = nodeTransformerNamesGroupsBuilder;
    }
    transform(astTree, nodeTransformerNames, nodeTransformationStage) {
        if (!nodeTransformerNames.length) {
            return astTree;
        }
        const normalizedNodeTransformers = this.buildNormalizedNodeTransformers(nodeTransformerNames, nodeTransformationStage);
        const nodeTransformerNamesGroups = this.nodeTransformerNamesGroupsBuilder.build(normalizedNodeTransformers);
        for (const nodeTransformerNamesGroup of nodeTransformerNamesGroups) {
            const enterVisitors = [];
            const leaveVisitors = [];
            for (const nodeTransformerName of nodeTransformerNamesGroup) {
                const nodeTransformer = normalizedNodeTransformers[nodeTransformerName];
                const visitor = nodeTransformer.getVisitor(nodeTransformationStage);
                if (!visitor) {
                    continue;
                }
                if (visitor.enter) {
                    enterVisitors.push({ enter: visitor.enter });
                }
                if (visitor.leave) {
                    leaveVisitors.push({ leave: visitor.leave });
                }
            }
            if (!enterVisitors.length && !leaveVisitors.length) {
                continue;
            }
            estraverse.replace(astTree, {
                enter: this.mergeVisitorsForDirection(enterVisitors, VisitorDirection_1.VisitorDirection.Enter),
                leave: this.mergeVisitorsForDirection(leaveVisitors, VisitorDirection_1.VisitorDirection.Leave)
            });
        }
        return astTree;
    }
    buildNormalizedNodeTransformers(nodeTransformerNames, nodeTransformationStage) {
        return nodeTransformerNames
            .reduce((acc, nodeTransformerName) => {
            const nodeTransformer = this.nodeTransformerFactory(nodeTransformerName);
            if (!nodeTransformer.getVisitor(nodeTransformationStage)) {
                return acc;
            }
            return Object.assign(Object.assign({}, acc), { [nodeTransformerName]: nodeTransformer });
        }, {});
    }
    mergeVisitorsForDirection(visitors, direction) {
        const visitorsLength = visitors.length;
        if (!visitorsLength) {
            return (node, parentNode) => node;
        }
        return (node, parentNode) => {
            if (NodeMetadata_1.NodeMetadata.isIgnoredNode(node)) {
                return estraverse.VisitorOption.Skip;
            }
            for (let i = 0; i < visitorsLength; i++) {
                const visitorFunction = visitors[i][direction];
                if (!visitorFunction) {
                    continue;
                }
                const visitorResult = visitorFunction(node, parentNode);
                if (!visitorResult || !NodeGuards_1.NodeGuards.isNode(visitorResult)) {
                    continue;
                }
                node = visitorResult;
            }
            return node;
        };
    }
};
NodeTransformersRunner = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__INodeTransformer)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.INodeTransformerNamesGroupsBuilder)),
    __metadata("design:paramtypes", [typeof (_a = typeof TNodeTransformerFactory_1.TNodeTransformerFactory !== "undefined" && TNodeTransformerFactory_1.TNodeTransformerFactory) === "function" ? _a : Object, typeof (_b = typeof ITransformerNamesGroupsBuilder_1.ITransformerNamesGroupsBuilder !== "undefined" && ITransformerNamesGroupsBuilder_1.ITransformerNamesGroupsBuilder) === "function" ? _b : Object])
], NodeTransformersRunner);
exports.NodeTransformersRunner = NodeTransformersRunner;


/***/ }),

/***/ "./src/node-transformers/control-flow-transformers/BlockStatementControlFlowTransformer.ts":
/*!*************************************************************************************************!*\
  !*** ./src/node-transformers/control-flow-transformers/BlockStatementControlFlowTransformer.ts ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var BlockStatementControlFlowTransformer_1, _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockStatementControlFlowTransformer = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const estraverse = __importStar(__webpack_require__(/*! estraverse */ "estraverse"));
const TControlFlowCustomNodeFactory_1 = __webpack_require__(/*! ../../types/container/custom-nodes/TControlFlowCustomNodeFactory */ "./src/types/container/custom-nodes/TControlFlowCustomNodeFactory.ts");
const IArrayUtils_1 = __webpack_require__(/*! ../../interfaces/utils/IArrayUtils */ "./src/interfaces/utils/IArrayUtils.ts");
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const ControlFlowCustomNode_1 = __webpack_require__(/*! ../../enums/custom-nodes/ControlFlowCustomNode */ "./src/enums/custom-nodes/ControlFlowCustomNode.ts");
const NodeTransformationStage_1 = __webpack_require__(/*! ../../enums/node-transformers/NodeTransformationStage */ "./src/enums/node-transformers/NodeTransformationStage.ts");
const AbstractNodeTransformer_1 = __webpack_require__(/*! ../AbstractNodeTransformer */ "./src/node-transformers/AbstractNodeTransformer.ts");
const NodeGuards_1 = __webpack_require__(/*! ../../node/NodeGuards */ "./src/node/NodeGuards.ts");
const NodeUtils_1 = __webpack_require__(/*! ../../node/NodeUtils */ "./src/node/NodeUtils.ts");
let BlockStatementControlFlowTransformer = BlockStatementControlFlowTransformer_1 = class BlockStatementControlFlowTransformer extends AbstractNodeTransformer_1.AbstractNodeTransformer {
    constructor(controlFlowCustomNodeFactory, arrayUtils, randomGenerator, options) {
        super(randomGenerator, options);
        this.controlFlowCustomNodeFactory = controlFlowCustomNodeFactory;
        this.arrayUtils = arrayUtils;
    }
    static isProhibitedStatementNode(node) {
        const isBreakOrContinueStatement = NodeGuards_1.NodeGuards.isBreakStatementNode(node)
            || NodeGuards_1.NodeGuards.isContinueStatementNode(node);
        const isVariableDeclarationWithLetOrConstKind = NodeGuards_1.NodeGuards.isVariableDeclarationNode(node)
            && (node.kind === 'const' || node.kind === 'let');
        const isClassDeclaration = NodeGuards_1.NodeGuards.isClassDeclarationNode(node);
        return NodeGuards_1.NodeGuards.isFunctionDeclarationNode(node)
            || isBreakOrContinueStatement
            || isVariableDeclarationWithLetOrConstKind
            || isClassDeclaration;
    }
    static canTransformBlockStatementNode(blockStatementNode) {
        let canTransform = true;
        estraverse.traverse(blockStatementNode, {
            enter: (node) => {
                if (NodeGuards_1.NodeGuards.isWhileStatementNode(node)) {
                    return estraverse.VisitorOption.Skip;
                }
                if (BlockStatementControlFlowTransformer_1.isProhibitedStatementNode(node)) {
                    canTransform = false;
                }
            }
        });
        if (blockStatementNode.body.length <= 4) {
            canTransform = false;
        }
        return canTransform;
    }
    getVisitor(nodeTransformationStage) {
        switch (nodeTransformationStage) {
            case NodeTransformationStage_1.NodeTransformationStage.ControlFlowFlattening:
                return {
                    leave: (node, parentNode) => {
                        if (parentNode && NodeGuards_1.NodeGuards.isBlockStatementNode(node)) {
                            return this.transformNode(node, parentNode);
                        }
                    }
                };
            default:
                return null;
        }
    }
    transformNode(blockStatementNode, parentNode) {
        if (this.randomGenerator.getMathRandom() > this.options.controlFlowFlatteningThreshold ||
            !BlockStatementControlFlowTransformer_1.canTransformBlockStatementNode(blockStatementNode)) {
            return blockStatementNode;
        }
        const blockStatementBody = blockStatementNode.body;
        const originalKeys = this.arrayUtils.createWithRange(blockStatementBody.length);
        const shuffledKeys = this.arrayUtils.shuffle(originalKeys);
        const originalKeysIndexesInShuffledArray = originalKeys.map((key) => shuffledKeys.indexOf(key));
        const blockStatementControlFlowFlatteningCustomNode = this.controlFlowCustomNodeFactory(ControlFlowCustomNode_1.ControlFlowCustomNode.BlockStatementControlFlowFlatteningNode);
        blockStatementControlFlowFlatteningCustomNode.initialize(blockStatementBody, shuffledKeys, originalKeysIndexesInShuffledArray);
        const newBlockStatementNode = blockStatementControlFlowFlatteningCustomNode.getNode()[0];
        NodeUtils_1.NodeUtils.parentizeNode(newBlockStatementNode, parentNode);
        return newBlockStatementNode;
    }
};
BlockStatementControlFlowTransformer = BlockStatementControlFlowTransformer_1 = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IControlFlowCustomNode)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IArrayUtils)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(3, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof TControlFlowCustomNodeFactory_1.TControlFlowCustomNodeFactory !== "undefined" && TControlFlowCustomNodeFactory_1.TControlFlowCustomNodeFactory) === "function" ? _a : Object, typeof (_b = typeof IArrayUtils_1.IArrayUtils !== "undefined" && IArrayUtils_1.IArrayUtils) === "function" ? _b : Object, typeof (_c = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _c : Object, typeof (_d = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _d : Object])
], BlockStatementControlFlowTransformer);
exports.BlockStatementControlFlowTransformer = BlockStatementControlFlowTransformer;


/***/ }),

/***/ "./src/node-transformers/control-flow-transformers/FunctionControlFlowTransformer.ts":
/*!*******************************************************************************************!*\
  !*** ./src/node-transformers/control-flow-transformers/FunctionControlFlowTransformer.ts ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var FunctionControlFlowTransformer_1, _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionControlFlowTransformer = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const estraverse = __importStar(__webpack_require__(/*! estraverse */ "estraverse"));
const TControlFlowCustomNodeFactory_1 = __webpack_require__(/*! ../../types/container/custom-nodes/TControlFlowCustomNodeFactory */ "./src/types/container/custom-nodes/TControlFlowCustomNodeFactory.ts");
const TControlFlowReplacerFactory_1 = __webpack_require__(/*! ../../types/container/node-transformers/TControlFlowReplacerFactory */ "./src/types/container/node-transformers/TControlFlowReplacerFactory.ts");
const TControlFlowStorageFactory_1 = __webpack_require__(/*! ../../types/container/node-transformers/TControlFlowStorageFactory */ "./src/types/container/node-transformers/TControlFlowStorageFactory.ts");
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const ControlFlowCustomNode_1 = __webpack_require__(/*! ../../enums/custom-nodes/ControlFlowCustomNode */ "./src/enums/custom-nodes/ControlFlowCustomNode.ts");
const ControlFlowReplacer_1 = __webpack_require__(/*! ../../enums/node-transformers/obfuscating-transformers/obfuscating-replacers/ControlFlowReplacer */ "./src/enums/node-transformers/obfuscating-transformers/obfuscating-replacers/ControlFlowReplacer.ts");
const NodeType_1 = __webpack_require__(/*! ../../enums/node/NodeType */ "./src/enums/node/NodeType.ts");
const NodeTransformationStage_1 = __webpack_require__(/*! ../../enums/node-transformers/NodeTransformationStage */ "./src/enums/node-transformers/NodeTransformationStage.ts");
const AbstractNodeTransformer_1 = __webpack_require__(/*! ../AbstractNodeTransformer */ "./src/node-transformers/AbstractNodeTransformer.ts");
const NodeAppender_1 = __webpack_require__(/*! ../../node/NodeAppender */ "./src/node/NodeAppender.ts");
const NodeGuards_1 = __webpack_require__(/*! ../../node/NodeGuards */ "./src/node/NodeGuards.ts");
const NodeMetadata_1 = __webpack_require__(/*! ../../node/NodeMetadata */ "./src/node/NodeMetadata.ts");
const NodeStatementUtils_1 = __webpack_require__(/*! ../../node/NodeStatementUtils */ "./src/node/NodeStatementUtils.ts");
const NodeUtils_1 = __webpack_require__(/*! ../../node/NodeUtils */ "./src/node/NodeUtils.ts");
let FunctionControlFlowTransformer = FunctionControlFlowTransformer_1 = class FunctionControlFlowTransformer extends AbstractNodeTransformer_1.AbstractNodeTransformer {
    constructor(controlFlowStorageFactory, controlFlowReplacerFactory, controlFlowCustomNodeFactory, randomGenerator, options) {
        super(randomGenerator, options);
        this.controlFlowData = new Map();
        this.visitedFunctionNodes = new Set();
        this.hostNodesWithControlFlowNode = new Set();
        this.controlFlowStorageFactory = controlFlowStorageFactory;
        this.controlFlowReplacerFactory = controlFlowReplacerFactory;
        this.controlFlowCustomNodeFactory = controlFlowCustomNodeFactory;
    }
    getVisitor(nodeTransformationStage) {
        switch (nodeTransformationStage) {
            case NodeTransformationStage_1.NodeTransformationStage.ControlFlowFlattening:
                return {
                    leave: (node, parentNode) => {
                        if (parentNode && (NodeGuards_1.NodeGuards.isFunctionDeclarationNode(node) ||
                            NodeGuards_1.NodeGuards.isFunctionExpressionNode(node) ||
                            NodeGuards_1.NodeGuards.isArrowFunctionExpressionNode(node))) {
                            return this.transformNode(node, parentNode);
                        }
                    }
                };
            default:
                return null;
        }
    }
    transformNode(functionNode, parentNode) {
        this.visitedFunctionNodes.add(functionNode);
        if (!NodeGuards_1.NodeGuards.isBlockStatementNode(functionNode.body)) {
            return functionNode;
        }
        const hostNode = this.getHostNode(functionNode.body);
        const controlFlowStorage = this.getControlFlowStorage(hostNode);
        this.controlFlowData.set(hostNode, controlFlowStorage);
        this.transformFunctionBody(functionNode.body, controlFlowStorage);
        if (!controlFlowStorage.getLength()) {
            return functionNode;
        }
        const controlFlowStorageCustomNode = this.controlFlowCustomNodeFactory(ControlFlowCustomNode_1.ControlFlowCustomNode.ControlFlowStorageNode);
        controlFlowStorageCustomNode.initialize(controlFlowStorage);
        NodeAppender_1.NodeAppender.prepend(hostNode, controlFlowStorageCustomNode.getNode());
        this.hostNodesWithControlFlowNode.add(hostNode);
        NodeUtils_1.NodeUtils.parentizeAst(functionNode);
        return functionNode;
    }
    getControlFlowStorage(hostNode) {
        const controlFlowStorage = this.controlFlowStorageFactory();
        if (this.controlFlowData.has(hostNode)) {
            if (this.hostNodesWithControlFlowNode.has(hostNode)) {
                if (NodeGuards_1.NodeGuards.isSwitchCaseNode(hostNode)) {
                    hostNode.consequent.shift();
                }
                else {
                    hostNode.body.shift();
                }
            }
            const hostControlFlowStorage = this.controlFlowData.get(hostNode);
            controlFlowStorage.mergeWith(hostControlFlowStorage, true);
        }
        return controlFlowStorage;
    }
    getHostNode(functionNodeBody) {
        const blockScopesOfNode = NodeStatementUtils_1.NodeStatementUtils.getParentNodesWithStatements(functionNodeBody);
        if (blockScopesOfNode.length === 1) {
            return functionNodeBody;
        }
        else {
            blockScopesOfNode.pop();
        }
        if (blockScopesOfNode.length > FunctionControlFlowTransformer_1.hostNodeSearchMinDepth) {
            blockScopesOfNode.splice(0, FunctionControlFlowTransformer_1.hostNodeSearchMinDepth);
        }
        if (blockScopesOfNode.length > FunctionControlFlowTransformer_1.hostNodeSearchMaxDepth) {
            blockScopesOfNode.length = FunctionControlFlowTransformer_1.hostNodeSearchMaxDepth;
        }
        return this.randomGenerator.getRandomGenerator().pickone(blockScopesOfNode);
    }
    isVisitedFunctionNode(node) {
        return (NodeGuards_1.NodeGuards.isFunctionDeclarationNode(node) ||
            NodeGuards_1.NodeGuards.isFunctionExpressionNode(node) ||
            NodeGuards_1.NodeGuards.isArrowFunctionExpressionNode(node)) && this.visitedFunctionNodes.has(node);
    }
    transformFunctionBody(functionNodeBody, controlFlowStorage) {
        estraverse.replace(functionNodeBody, {
            enter: (node, parentNode) => {
                if (NodeMetadata_1.NodeMetadata.isIgnoredNode(node)) {
                    return estraverse.VisitorOption.Skip;
                }
                if (this.isVisitedFunctionNode(node) || !parentNode) {
                    return estraverse.VisitorOption.Skip;
                }
                if (!FunctionControlFlowTransformer_1.controlFlowReplacersMap.has(node.type)) {
                    return node;
                }
                if (this.randomGenerator.getMathRandom() > this.options.controlFlowFlatteningThreshold) {
                    return node;
                }
                const controlFlowReplacerName = FunctionControlFlowTransformer_1
                    .controlFlowReplacersMap.get(node.type);
                if (controlFlowReplacerName === undefined) {
                    return node;
                }
                return Object.assign(Object.assign({}, this.controlFlowReplacerFactory(controlFlowReplacerName).replace(node, parentNode, controlFlowStorage)), { parentNode });
            }
        });
    }
};
FunctionControlFlowTransformer.controlFlowReplacersMap = new Map([
    [NodeType_1.NodeType.BinaryExpression, ControlFlowReplacer_1.ControlFlowReplacer.BinaryExpressionControlFlowReplacer],
    [NodeType_1.NodeType.CallExpression, ControlFlowReplacer_1.ControlFlowReplacer.CallExpressionControlFlowReplacer],
    [NodeType_1.NodeType.LogicalExpression, ControlFlowReplacer_1.ControlFlowReplacer.LogicalExpressionControlFlowReplacer],
    [NodeType_1.NodeType.Literal, ControlFlowReplacer_1.ControlFlowReplacer.StringLiteralControlFlowReplacer]
]);
FunctionControlFlowTransformer.hostNodeSearchMinDepth = 0;
FunctionControlFlowTransformer.hostNodeSearchMaxDepth = 2;
FunctionControlFlowTransformer = FunctionControlFlowTransformer_1 = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__TControlFlowStorage)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IControlFlowReplacer)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IControlFlowCustomNode)),
    __param(3, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(4, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof TControlFlowStorageFactory_1.TControlFlowStorageFactory !== "undefined" && TControlFlowStorageFactory_1.TControlFlowStorageFactory) === "function" ? _a : Object, typeof (_b = typeof TControlFlowReplacerFactory_1.TControlFlowReplacerFactory !== "undefined" && TControlFlowReplacerFactory_1.TControlFlowReplacerFactory) === "function" ? _b : Object, typeof (_c = typeof TControlFlowCustomNodeFactory_1.TControlFlowCustomNodeFactory !== "undefined" && TControlFlowCustomNodeFactory_1.TControlFlowCustomNodeFactory) === "function" ? _c : Object, typeof (_d = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _d : Object, typeof (_e = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _e : Object])
], FunctionControlFlowTransformer);
exports.FunctionControlFlowTransformer = FunctionControlFlowTransformer;


/***/ }),

/***/ "./src/node-transformers/control-flow-transformers/control-flow-replacers/AbstractControlFlowReplacer.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/node-transformers/control-flow-transformers/control-flow-replacers/AbstractControlFlowReplacer.ts ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var AbstractControlFlowReplacer_1, _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractControlFlowReplacer = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TControlFlowCustomNodeFactory_1 = __webpack_require__(/*! ../../../types/container/custom-nodes/TControlFlowCustomNodeFactory */ "./src/types/container/custom-nodes/TControlFlowCustomNodeFactory.ts");
const IOptions_1 = __webpack_require__(/*! ../../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
let AbstractControlFlowReplacer = AbstractControlFlowReplacer_1 = class AbstractControlFlowReplacer {
    constructor(controlFlowCustomNodeFactory, randomGenerator, options) {
        this.replacerDataByControlFlowStorageId = new Map();
        this.controlFlowCustomNodeFactory = controlFlowCustomNodeFactory;
        this.randomGenerator = randomGenerator;
        this.options = options;
    }
    static getStorageKeysByIdForCurrentStorage(identifierDataByControlFlowStorageId, controlFlowStorageId) {
        let storageKeysById;
        if (identifierDataByControlFlowStorageId.has(controlFlowStorageId)) {
            storageKeysById = identifierDataByControlFlowStorageId.get(controlFlowStorageId);
        }
        else {
            storageKeysById = new Map();
        }
        return storageKeysById;
    }
    insertCustomNodeToControlFlowStorage(customNode, controlFlowStorage, replacerId, usingExistingIdentifierChance) {
        const controlFlowStorageId = controlFlowStorage.getStorageId();
        const storageKeysById = AbstractControlFlowReplacer_1
            .getStorageKeysByIdForCurrentStorage(this.replacerDataByControlFlowStorageId, controlFlowStorageId);
        const storageKeysForCurrentId = storageKeysById.get(replacerId);
        if (this.randomGenerator.getMathRandom() < usingExistingIdentifierChance &&
            storageKeysForCurrentId &&
            storageKeysForCurrentId.length) {
            return this.randomGenerator.getRandomGenerator().pickone(storageKeysForCurrentId);
        }
        const generateStorageKey = (length) => {
            const key = this.randomGenerator.getRandomString(length);
            if (controlFlowStorage.getStorage().has(key)) {
                return generateStorageKey(length);
            }
            return key;
        };
        const storageKey = generateStorageKey(5);
        storageKeysById.set(replacerId, [storageKey]);
        this.replacerDataByControlFlowStorageId.set(controlFlowStorageId, storageKeysById);
        controlFlowStorage.set(storageKey, customNode);
        return storageKey;
    }
};
AbstractControlFlowReplacer = AbstractControlFlowReplacer_1 = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IControlFlowCustomNode)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof TControlFlowCustomNodeFactory_1.TControlFlowCustomNodeFactory !== "undefined" && TControlFlowCustomNodeFactory_1.TControlFlowCustomNodeFactory) === "function" ? _a : Object, typeof (_b = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _b : Object, typeof (_c = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _c : Object])
], AbstractControlFlowReplacer);
exports.AbstractControlFlowReplacer = AbstractControlFlowReplacer;


/***/ }),

/***/ "./src/node-transformers/control-flow-transformers/control-flow-replacers/BinaryExpressionControlFlowReplacer.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/node-transformers/control-flow-transformers/control-flow-replacers/BinaryExpressionControlFlowReplacer.ts ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var BinaryExpressionControlFlowReplacer_1, _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryExpressionControlFlowReplacer = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TControlFlowCustomNodeFactory_1 = __webpack_require__(/*! ../../../types/container/custom-nodes/TControlFlowCustomNodeFactory */ "./src/types/container/custom-nodes/TControlFlowCustomNodeFactory.ts");
const IOptions_1 = __webpack_require__(/*! ../../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const ControlFlowCustomNode_1 = __webpack_require__(/*! ../../../enums/custom-nodes/ControlFlowCustomNode */ "./src/enums/custom-nodes/ControlFlowCustomNode.ts");
const ExpressionWithOperatorControlFlowReplacer_1 = __webpack_require__(/*! ./ExpressionWithOperatorControlFlowReplacer */ "./src/node-transformers/control-flow-transformers/control-flow-replacers/ExpressionWithOperatorControlFlowReplacer.ts");
let BinaryExpressionControlFlowReplacer = BinaryExpressionControlFlowReplacer_1 = class BinaryExpressionControlFlowReplacer extends ExpressionWithOperatorControlFlowReplacer_1.ExpressionWithOperatorControlFlowReplacer {
    constructor(controlFlowCustomNodeFactory, randomGenerator, options) {
        super(controlFlowCustomNodeFactory, randomGenerator, options);
    }
    replace(binaryExpressionNode, parentNode, controlFlowStorage) {
        const operator = binaryExpressionNode.operator;
        const binaryExpressionFunctionCustomNode = this.controlFlowCustomNodeFactory(ControlFlowCustomNode_1.ControlFlowCustomNode.BinaryExpressionFunctionNode);
        binaryExpressionFunctionCustomNode.initialize(operator);
        const storageKey = this.insertCustomNodeToControlFlowStorage(binaryExpressionFunctionCustomNode, controlFlowStorage, operator, BinaryExpressionControlFlowReplacer_1.usingExistingIdentifierChance);
        return this.getControlFlowStorageCallNode(controlFlowStorage.getStorageId(), storageKey, binaryExpressionNode.left, binaryExpressionNode.right);
    }
};
BinaryExpressionControlFlowReplacer.usingExistingIdentifierChance = 0.5;
BinaryExpressionControlFlowReplacer = BinaryExpressionControlFlowReplacer_1 = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IControlFlowCustomNode)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof TControlFlowCustomNodeFactory_1.TControlFlowCustomNodeFactory !== "undefined" && TControlFlowCustomNodeFactory_1.TControlFlowCustomNodeFactory) === "function" ? _a : Object, typeof (_b = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _b : Object, typeof (_c = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _c : Object])
], BinaryExpressionControlFlowReplacer);
exports.BinaryExpressionControlFlowReplacer = BinaryExpressionControlFlowReplacer;


/***/ }),

/***/ "./src/node-transformers/control-flow-transformers/control-flow-replacers/CallExpressionControlFlowReplacer.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/node-transformers/control-flow-transformers/control-flow-replacers/CallExpressionControlFlowReplacer.ts ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var CallExpressionControlFlowReplacer_1, _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallExpressionControlFlowReplacer = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TControlFlowCustomNodeFactory_1 = __webpack_require__(/*! ../../../types/container/custom-nodes/TControlFlowCustomNodeFactory */ "./src/types/container/custom-nodes/TControlFlowCustomNodeFactory.ts");
const IOptions_1 = __webpack_require__(/*! ../../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const ControlFlowCustomNode_1 = __webpack_require__(/*! ../../../enums/custom-nodes/ControlFlowCustomNode */ "./src/enums/custom-nodes/ControlFlowCustomNode.ts");
const AbstractControlFlowReplacer_1 = __webpack_require__(/*! ./AbstractControlFlowReplacer */ "./src/node-transformers/control-flow-transformers/control-flow-replacers/AbstractControlFlowReplacer.ts");
const NodeGuards_1 = __webpack_require__(/*! ../../../node/NodeGuards */ "./src/node/NodeGuards.ts");
let CallExpressionControlFlowReplacer = CallExpressionControlFlowReplacer_1 = class CallExpressionControlFlowReplacer extends AbstractControlFlowReplacer_1.AbstractControlFlowReplacer {
    constructor(controlFlowCustomNodeFactory, randomGenerator, options) {
        super(controlFlowCustomNodeFactory, randomGenerator, options);
    }
    replace(callExpressionNode, parentNode, controlFlowStorage) {
        const callee = callExpressionNode.callee;
        if (!NodeGuards_1.NodeGuards.isIdentifierNode(callee)) {
            return callExpressionNode;
        }
        const replacerId = String(callExpressionNode.arguments.length);
        const callExpressionFunctionCustomNode = this.controlFlowCustomNodeFactory(ControlFlowCustomNode_1.ControlFlowCustomNode.CallExpressionFunctionNode);
        const expressionArguments = callExpressionNode.arguments;
        callExpressionFunctionCustomNode.initialize(expressionArguments);
        const storageKey = this.insertCustomNodeToControlFlowStorage(callExpressionFunctionCustomNode, controlFlowStorage, replacerId, CallExpressionControlFlowReplacer_1.usingExistingIdentifierChance);
        return this.getControlFlowStorageCallNode(controlFlowStorage.getStorageId(), storageKey, callee, expressionArguments);
    }
    getControlFlowStorageCallNode(controlFlowStorageId, storageKey, callee, expressionArguments) {
        const controlFlowStorageCallCustomNode = this.controlFlowCustomNodeFactory(ControlFlowCustomNode_1.ControlFlowCustomNode.CallExpressionControlFlowStorageCallNode);
        controlFlowStorageCallCustomNode.initialize(controlFlowStorageId, storageKey, callee, expressionArguments);
        const statementNode = controlFlowStorageCallCustomNode.getNode()[0];
        if (!statementNode || !NodeGuards_1.NodeGuards.isExpressionStatementNode(statementNode)) {
            throw new Error('`controlFlowStorageCallCustomNode.getNode()[0]` should returns array with `ExpressionStatement` node');
        }
        return statementNode.expression;
    }
};
CallExpressionControlFlowReplacer.usingExistingIdentifierChance = 0.5;
CallExpressionControlFlowReplacer = CallExpressionControlFlowReplacer_1 = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IControlFlowCustomNode)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof TControlFlowCustomNodeFactory_1.TControlFlowCustomNodeFactory !== "undefined" && TControlFlowCustomNodeFactory_1.TControlFlowCustomNodeFactory) === "function" ? _a : Object, typeof (_b = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _b : Object, typeof (_c = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _c : Object])
], CallExpressionControlFlowReplacer);
exports.CallExpressionControlFlowReplacer = CallExpressionControlFlowReplacer;


/***/ }),

/***/ "./src/node-transformers/control-flow-transformers/control-flow-replacers/ExpressionWithOperatorControlFlowReplacer.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/node-transformers/control-flow-transformers/control-flow-replacers/ExpressionWithOperatorControlFlowReplacer.ts ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressionWithOperatorControlFlowReplacer = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TControlFlowCustomNodeFactory_1 = __webpack_require__(/*! ../../../types/container/custom-nodes/TControlFlowCustomNodeFactory */ "./src/types/container/custom-nodes/TControlFlowCustomNodeFactory.ts");
const IOptions_1 = __webpack_require__(/*! ../../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const ControlFlowCustomNode_1 = __webpack_require__(/*! ../../../enums/custom-nodes/ControlFlowCustomNode */ "./src/enums/custom-nodes/ControlFlowCustomNode.ts");
const AbstractControlFlowReplacer_1 = __webpack_require__(/*! ./AbstractControlFlowReplacer */ "./src/node-transformers/control-flow-transformers/control-flow-replacers/AbstractControlFlowReplacer.ts");
const NodeGuards_1 = __webpack_require__(/*! ../../../node/NodeGuards */ "./src/node/NodeGuards.ts");
let ExpressionWithOperatorControlFlowReplacer = class ExpressionWithOperatorControlFlowReplacer extends AbstractControlFlowReplacer_1.AbstractControlFlowReplacer {
    constructor(controlFlowCustomNodeFactory, randomGenerator, options) {
        super(controlFlowCustomNodeFactory, randomGenerator, options);
    }
    getControlFlowStorageCallNode(controlFlowStorageId, storageKey, leftExpression, rightExpression) {
        const controlFlowStorageCallCustomNode = this.controlFlowCustomNodeFactory(ControlFlowCustomNode_1.ControlFlowCustomNode.ExpressionWithOperatorControlFlowStorageCallNode);
        controlFlowStorageCallCustomNode.initialize(controlFlowStorageId, storageKey, leftExpression, rightExpression);
        const statementNode = controlFlowStorageCallCustomNode.getNode()[0];
        if (!statementNode || !NodeGuards_1.NodeGuards.isExpressionStatementNode(statementNode)) {
            throw new Error('`controlFlowStorageCallCustomNode.getNode()[0]` should returns array with `ExpressionStatement` node');
        }
        return statementNode.expression;
    }
};
ExpressionWithOperatorControlFlowReplacer = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IControlFlowCustomNode)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof TControlFlowCustomNodeFactory_1.TControlFlowCustomNodeFactory !== "undefined" && TControlFlowCustomNodeFactory_1.TControlFlowCustomNodeFactory) === "function" ? _a : Object, typeof (_b = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _b : Object, typeof (_c = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _c : Object])
], ExpressionWithOperatorControlFlowReplacer);
exports.ExpressionWithOperatorControlFlowReplacer = ExpressionWithOperatorControlFlowReplacer;


/***/ }),

/***/ "./src/node-transformers/control-flow-transformers/control-flow-replacers/LogicalExpressionControlFlowReplacer.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/node-transformers/control-flow-transformers/control-flow-replacers/LogicalExpressionControlFlowReplacer.ts ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var LogicalExpressionControlFlowReplacer_1, _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogicalExpressionControlFlowReplacer = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TControlFlowCustomNodeFactory_1 = __webpack_require__(/*! ../../../types/container/custom-nodes/TControlFlowCustomNodeFactory */ "./src/types/container/custom-nodes/TControlFlowCustomNodeFactory.ts");
const IOptions_1 = __webpack_require__(/*! ../../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const ControlFlowCustomNode_1 = __webpack_require__(/*! ../../../enums/custom-nodes/ControlFlowCustomNode */ "./src/enums/custom-nodes/ControlFlowCustomNode.ts");
const ExpressionWithOperatorControlFlowReplacer_1 = __webpack_require__(/*! ./ExpressionWithOperatorControlFlowReplacer */ "./src/node-transformers/control-flow-transformers/control-flow-replacers/ExpressionWithOperatorControlFlowReplacer.ts");
const NodeGuards_1 = __webpack_require__(/*! ../../../node/NodeGuards */ "./src/node/NodeGuards.ts");
const NodeUtils_1 = __webpack_require__(/*! ../../../node/NodeUtils */ "./src/node/NodeUtils.ts");
let LogicalExpressionControlFlowReplacer = LogicalExpressionControlFlowReplacer_1 = class LogicalExpressionControlFlowReplacer extends ExpressionWithOperatorControlFlowReplacer_1.ExpressionWithOperatorControlFlowReplacer {
    constructor(controlFlowCustomNodeFactory, randomGenerator, options) {
        super(controlFlowCustomNodeFactory, randomGenerator, options);
    }
    replace(logicalExpressionNode, parentNode, controlFlowStorage) {
        if (this.checkForProhibitedExpressions(logicalExpressionNode.left, logicalExpressionNode.right)) {
            return logicalExpressionNode;
        }
        const operator = logicalExpressionNode.operator;
        const logicalExpressionFunctionCustomNode = this.controlFlowCustomNodeFactory(ControlFlowCustomNode_1.ControlFlowCustomNode.LogicalExpressionFunctionNode);
        logicalExpressionFunctionCustomNode.initialize(operator);
        const storageKey = this.insertCustomNodeToControlFlowStorage(logicalExpressionFunctionCustomNode, controlFlowStorage, operator, LogicalExpressionControlFlowReplacer_1.usingExistingIdentifierChance);
        return this.getControlFlowStorageCallNode(controlFlowStorage.getStorageId(), storageKey, logicalExpressionNode.left, logicalExpressionNode.right);
    }
    checkForProhibitedExpressions(leftExpression, rightExpression) {
        return [leftExpression, rightExpression].some((expressionNode) => {
            let nodeForCheck;
            if (!NodeGuards_1.NodeGuards.isUnaryExpressionNode(expressionNode)) {
                nodeForCheck = expressionNode;
            }
            else {
                nodeForCheck = NodeUtils_1.NodeUtils.getUnaryExpressionArgumentNode(expressionNode);
            }
            return !NodeGuards_1.NodeGuards.isLiteralNode(nodeForCheck) &&
                !NodeGuards_1.NodeGuards.isIdentifierNode(nodeForCheck) &&
                !NodeGuards_1.NodeGuards.isObjectExpressionNode(nodeForCheck) &&
                !NodeGuards_1.NodeGuards.isExpressionStatementNode(nodeForCheck);
        });
    }
};
LogicalExpressionControlFlowReplacer.usingExistingIdentifierChance = 0.5;
LogicalExpressionControlFlowReplacer = LogicalExpressionControlFlowReplacer_1 = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IControlFlowCustomNode)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof TControlFlowCustomNodeFactory_1.TControlFlowCustomNodeFactory !== "undefined" && TControlFlowCustomNodeFactory_1.TControlFlowCustomNodeFactory) === "function" ? _a : Object, typeof (_b = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _b : Object, typeof (_c = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _c : Object])
], LogicalExpressionControlFlowReplacer);
exports.LogicalExpressionControlFlowReplacer = LogicalExpressionControlFlowReplacer;


/***/ }),

/***/ "./src/node-transformers/control-flow-transformers/control-flow-replacers/StringLiteralControlFlowReplacer.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/node-transformers/control-flow-transformers/control-flow-replacers/StringLiteralControlFlowReplacer.ts ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var StringLiteralControlFlowReplacer_1, _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringLiteralControlFlowReplacer = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TControlFlowCustomNodeFactory_1 = __webpack_require__(/*! ../../../types/container/custom-nodes/TControlFlowCustomNodeFactory */ "./src/types/container/custom-nodes/TControlFlowCustomNodeFactory.ts");
const IOptions_1 = __webpack_require__(/*! ../../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const ControlFlowCustomNode_1 = __webpack_require__(/*! ../../../enums/custom-nodes/ControlFlowCustomNode */ "./src/enums/custom-nodes/ControlFlowCustomNode.ts");
const AbstractControlFlowReplacer_1 = __webpack_require__(/*! ./AbstractControlFlowReplacer */ "./src/node-transformers/control-flow-transformers/control-flow-replacers/AbstractControlFlowReplacer.ts");
const NodeGuards_1 = __webpack_require__(/*! ../../../node/NodeGuards */ "./src/node/NodeGuards.ts");
let StringLiteralControlFlowReplacer = StringLiteralControlFlowReplacer_1 = class StringLiteralControlFlowReplacer extends AbstractControlFlowReplacer_1.AbstractControlFlowReplacer {
    constructor(controlFlowCustomNodeFactory, randomGenerator, options) {
        super(controlFlowCustomNodeFactory, randomGenerator, options);
    }
    replace(literalNode, parentNode, controlFlowStorage) {
        if (NodeGuards_1.NodeGuards.isPropertyNode(parentNode) && parentNode.key === literalNode) {
            return literalNode;
        }
        if (typeof literalNode.value !== 'string' || literalNode.value.length < 3) {
            return literalNode;
        }
        const replacerId = String(literalNode.value);
        const literalFunctionCustomNode = this.controlFlowCustomNodeFactory(ControlFlowCustomNode_1.ControlFlowCustomNode.StringLiteralNode);
        literalFunctionCustomNode.initialize(literalNode.value);
        const storageKey = this.insertCustomNodeToControlFlowStorage(literalFunctionCustomNode, controlFlowStorage, replacerId, StringLiteralControlFlowReplacer_1.usingExistingIdentifierChance);
        return this.getControlFlowStorageCallNode(controlFlowStorage.getStorageId(), storageKey);
    }
    getControlFlowStorageCallNode(controlFlowStorageId, storageKey) {
        const controlFlowStorageCallCustomNode = this.controlFlowCustomNodeFactory(ControlFlowCustomNode_1.ControlFlowCustomNode.StringLiteralControlFlowStorageCallNode);
        controlFlowStorageCallCustomNode.initialize(controlFlowStorageId, storageKey);
        const statementNode = controlFlowStorageCallCustomNode.getNode()[0];
        if (!statementNode || !NodeGuards_1.NodeGuards.isExpressionStatementNode(statementNode)) {
            throw new Error('`controlFlowStorageCallCustomNode.getNode()[0]` should returns array with `ExpressionStatement` node');
        }
        return statementNode.expression;
    }
};
StringLiteralControlFlowReplacer.usingExistingIdentifierChance = 1;
StringLiteralControlFlowReplacer = StringLiteralControlFlowReplacer_1 = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IControlFlowCustomNode)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof TControlFlowCustomNodeFactory_1.TControlFlowCustomNodeFactory !== "undefined" && TControlFlowCustomNodeFactory_1.TControlFlowCustomNodeFactory) === "function" ? _a : Object, typeof (_b = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _b : Object, typeof (_c = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _c : Object])
], StringLiteralControlFlowReplacer);
exports.StringLiteralControlFlowReplacer = StringLiteralControlFlowReplacer;


/***/ }),

/***/ "./src/node-transformers/converting-transformers/MemberExpressionTransformer.ts":
/*!**************************************************************************************!*\
  !*** ./src/node-transformers/converting-transformers/MemberExpressionTransformer.ts ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberExpressionTransformer = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const NodeTransformationStage_1 = __webpack_require__(/*! ../../enums/node-transformers/NodeTransformationStage */ "./src/enums/node-transformers/NodeTransformationStage.ts");
const AbstractNodeTransformer_1 = __webpack_require__(/*! ../AbstractNodeTransformer */ "./src/node-transformers/AbstractNodeTransformer.ts");
const NodeFactory_1 = __webpack_require__(/*! ../../node/NodeFactory */ "./src/node/NodeFactory.ts");
const NodeGuards_1 = __webpack_require__(/*! ../../node/NodeGuards */ "./src/node/NodeGuards.ts");
let MemberExpressionTransformer = class MemberExpressionTransformer extends AbstractNodeTransformer_1.AbstractNodeTransformer {
    constructor(randomGenerator, options) {
        super(randomGenerator, options);
    }
    getVisitor(nodeTransformationStage) {
        switch (nodeTransformationStage) {
            case NodeTransformationStage_1.NodeTransformationStage.Converting:
                return {
                    enter: (node, parentNode) => {
                        if (parentNode && NodeGuards_1.NodeGuards.isMemberExpressionNode(node)) {
                            return this.transformNode(node, parentNode);
                        }
                    }
                };
            default:
                return null;
        }
    }
    transformNode(memberExpressionNode, parentNode) {
        if (NodeGuards_1.NodeGuards.isIdentifierNode(memberExpressionNode.property)) {
            if (memberExpressionNode.computed) {
                return memberExpressionNode;
            }
            memberExpressionNode.computed = true;
            memberExpressionNode.property = NodeFactory_1.NodeFactory.literalNode(memberExpressionNode.property.name);
        }
        return memberExpressionNode;
    }
};
MemberExpressionTransformer = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _a : Object, typeof (_b = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _b : Object])
], MemberExpressionTransformer);
exports.MemberExpressionTransformer = MemberExpressionTransformer;


/***/ }),

/***/ "./src/node-transformers/converting-transformers/MethodDefinitionTransformer.ts":
/*!**************************************************************************************!*\
  !*** ./src/node-transformers/converting-transformers/MethodDefinitionTransformer.ts ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var MethodDefinitionTransformer_1, _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MethodDefinitionTransformer = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const NodeTransformationStage_1 = __webpack_require__(/*! ../../enums/node-transformers/NodeTransformationStage */ "./src/enums/node-transformers/NodeTransformationStage.ts");
const AbstractNodeTransformer_1 = __webpack_require__(/*! ../AbstractNodeTransformer */ "./src/node-transformers/AbstractNodeTransformer.ts");
const NodeFactory_1 = __webpack_require__(/*! ../../node/NodeFactory */ "./src/node/NodeFactory.ts");
const NodeGuards_1 = __webpack_require__(/*! ../../node/NodeGuards */ "./src/node/NodeGuards.ts");
let MethodDefinitionTransformer = MethodDefinitionTransformer_1 = class MethodDefinitionTransformer extends AbstractNodeTransformer_1.AbstractNodeTransformer {
    constructor(randomGenerator, options) {
        super(randomGenerator, options);
    }
    getVisitor(nodeTransformationStage) {
        switch (nodeTransformationStage) {
            case NodeTransformationStage_1.NodeTransformationStage.Converting:
                return {
                    enter: (node, parentNode) => {
                        if (parentNode && NodeGuards_1.NodeGuards.isMethodDefinitionNode(node)) {
                            return this.transformNode(node, parentNode);
                        }
                    }
                };
            default:
                return null;
        }
    }
    transformNode(methodDefinitionNode, parentNode) {
        if (NodeGuards_1.NodeGuards.isIdentifierNode(methodDefinitionNode.key)) {
            return this.replaceIdentifierKey(methodDefinitionNode, methodDefinitionNode.key);
        }
        if (NodeGuards_1.NodeGuards.isLiteralNode(methodDefinitionNode.key)) {
            return this.replaceLiteralKey(methodDefinitionNode, methodDefinitionNode.key);
        }
        return methodDefinitionNode;
    }
    replaceIdentifierKey(methodDefinitionNode, keyNode) {
        if (!MethodDefinitionTransformer_1.ignoredNames.includes(keyNode.name)
            && !methodDefinitionNode.computed) {
            methodDefinitionNode.computed = true;
            methodDefinitionNode.key = NodeFactory_1.NodeFactory.literalNode(keyNode.name);
        }
        return methodDefinitionNode;
    }
    replaceLiteralKey(methodDefinitionNode, keyNode) {
        if (typeof keyNode.value === 'string'
            && !MethodDefinitionTransformer_1.ignoredNames.includes(keyNode.value)
            && !methodDefinitionNode.computed) {
            methodDefinitionNode.computed = true;
        }
        return methodDefinitionNode;
    }
};
MethodDefinitionTransformer.ignoredNames = ['constructor'];
MethodDefinitionTransformer = MethodDefinitionTransformer_1 = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _a : Object, typeof (_b = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _b : Object])
], MethodDefinitionTransformer);
exports.MethodDefinitionTransformer = MethodDefinitionTransformer;


/***/ }),

/***/ "./src/node-transformers/converting-transformers/ObjectExpressionKeysTransformer.ts":
/*!******************************************************************************************!*\
  !*** ./src/node-transformers/converting-transformers/ObjectExpressionKeysTransformer.ts ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var ObjectExpressionKeysTransformer_1, _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectExpressionKeysTransformer = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const estraverse = __importStar(__webpack_require__(/*! estraverse */ "estraverse"));
const TObjectExpressionExtractorFactory_1 = __webpack_require__(/*! ../../types/container/node-transformers/TObjectExpressionExtractorFactory */ "./src/types/container/node-transformers/TObjectExpressionExtractorFactory.ts");
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const NodeTransformationStage_1 = __webpack_require__(/*! ../../enums/node-transformers/NodeTransformationStage */ "./src/enums/node-transformers/NodeTransformationStage.ts");
const AbstractNodeTransformer_1 = __webpack_require__(/*! ../AbstractNodeTransformer */ "./src/node-transformers/AbstractNodeTransformer.ts");
const NodeGuards_1 = __webpack_require__(/*! ../../node/NodeGuards */ "./src/node/NodeGuards.ts");
const NodeStatementUtils_1 = __webpack_require__(/*! ../../node/NodeStatementUtils */ "./src/node/NodeStatementUtils.ts");
const ObjectExpressionExtractor_1 = __webpack_require__(/*! ../../enums/node-transformers/converting-transformers/properties-extractors/ObjectExpressionExtractor */ "./src/enums/node-transformers/converting-transformers/properties-extractors/ObjectExpressionExtractor.ts");
let ObjectExpressionKeysTransformer = ObjectExpressionKeysTransformer_1 = class ObjectExpressionKeysTransformer extends AbstractNodeTransformer_1.AbstractNodeTransformer {
    constructor(objectExpressionExtractorFactory, randomGenerator, options) {
        super(randomGenerator, options);
        this.objectExpressionExtractorFactory = objectExpressionExtractorFactory;
    }
    static isProhibitedHostStatement(objectExpressionNode, hostStatement) {
        return ObjectExpressionKeysTransformer_1.isReferencedIdentifierName(objectExpressionNode, hostStatement)
            || ObjectExpressionKeysTransformer_1.isProhibitedSequenceExpression(objectExpressionNode, hostStatement);
    }
    static isReferencedIdentifierName(objectExpressionNode, hostNode) {
        const identifierNamesSet = [];
        let isReferencedIdentifierName = false;
        let isCurrentNode = false;
        estraverse.traverse(hostNode, {
            enter: (node) => {
                if (node === objectExpressionNode) {
                    isCurrentNode = true;
                }
                if (!NodeGuards_1.NodeGuards.isIdentifierNode(node)) {
                    return;
                }
                if (!isCurrentNode) {
                    identifierNamesSet.push(node.name);
                    return;
                }
                if (identifierNamesSet.includes(node.name)) {
                    isReferencedIdentifierName = true;
                }
            },
            leave: (node) => {
                if (node === objectExpressionNode) {
                    isCurrentNode = false;
                    return estraverse.VisitorOption.Break;
                }
            }
        });
        return isReferencedIdentifierName;
    }
    static isProhibitedSequenceExpression(objectExpressionNode, hostNode) {
        return NodeGuards_1.NodeGuards.isExpressionStatementNode(hostNode)
            && NodeGuards_1.NodeGuards.isSequenceExpressionNode(hostNode.expression)
            && hostNode.expression.expressions.some((expressionNode) => NodeGuards_1.NodeGuards.isCallExpressionNode(expressionNode)
                && NodeGuards_1.NodeGuards.isSuperNode(expressionNode.callee));
    }
    getVisitor(nodeTransformationStage) {
        if (!this.options.transformObjectKeys) {
            return null;
        }
        switch (nodeTransformationStage) {
            case NodeTransformationStage_1.NodeTransformationStage.Converting:
                return {
                    leave: (node, parentNode) => {
                        if (parentNode
                            && NodeGuards_1.NodeGuards.isObjectExpressionNode(node)) {
                            return this.transformNode(node, parentNode);
                        }
                    }
                };
            default:
                return null;
        }
    }
    transformNode(objectExpressionNode, parentNode) {
        if (!objectExpressionNode.properties.length) {
            return objectExpressionNode;
        }
        const hostStatement = NodeStatementUtils_1.NodeStatementUtils.getRootStatementOfNode(objectExpressionNode);
        if (ObjectExpressionKeysTransformer_1.isProhibitedHostStatement(objectExpressionNode, hostStatement)) {
            return objectExpressionNode;
        }
        return this.applyObjectExpressionKeysExtractorsRecursive(ObjectExpressionKeysTransformer_1.objectExpressionExtractorNames, objectExpressionNode, hostStatement);
    }
    applyObjectExpressionKeysExtractorsRecursive(objectExpressionExtractorNames, objectExpressionNode, hostStatement) {
        const newObjectExpressionExtractorNames = [...objectExpressionExtractorNames];
        const objectExpressionExtractor = newObjectExpressionExtractorNames.shift();
        if (!objectExpressionExtractor) {
            return objectExpressionNode;
        }
        const { nodeToReplace, objectExpressionHostStatement: newObjectExpressionHostStatement, objectExpressionNode: newObjectExpressionNode } = this.objectExpressionExtractorFactory(objectExpressionExtractor)
            .extract(objectExpressionNode, hostStatement);
        this.applyObjectExpressionKeysExtractorsRecursive(newObjectExpressionExtractorNames, newObjectExpressionNode, newObjectExpressionHostStatement);
        return nodeToReplace;
    }
};
ObjectExpressionKeysTransformer.objectExpressionExtractorNames = [
    ObjectExpressionExtractor_1.ObjectExpressionExtractor.ObjectExpressionToVariableDeclarationExtractor,
    ObjectExpressionExtractor_1.ObjectExpressionExtractor.BasePropertiesExtractor
];
ObjectExpressionKeysTransformer = ObjectExpressionKeysTransformer_1 = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IObjectExpressionExtractor)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof TObjectExpressionExtractorFactory_1.TObjectExpressionExtractorFactory !== "undefined" && TObjectExpressionExtractorFactory_1.TObjectExpressionExtractorFactory) === "function" ? _a : Object, typeof (_b = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _b : Object, typeof (_c = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _c : Object])
], ObjectExpressionKeysTransformer);
exports.ObjectExpressionKeysTransformer = ObjectExpressionKeysTransformer;


/***/ }),

/***/ "./src/node-transformers/converting-transformers/ObjectExpressionTransformer.ts":
/*!**************************************************************************************!*\
  !*** ./src/node-transformers/converting-transformers/ObjectExpressionTransformer.ts ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectExpressionTransformer = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const NodeTransformationStage_1 = __webpack_require__(/*! ../../enums/node-transformers/NodeTransformationStage */ "./src/enums/node-transformers/NodeTransformationStage.ts");
const AbstractNodeTransformer_1 = __webpack_require__(/*! ../AbstractNodeTransformer */ "./src/node-transformers/AbstractNodeTransformer.ts");
const NodeFactory_1 = __webpack_require__(/*! ../../node/NodeFactory */ "./src/node/NodeFactory.ts");
const NodeGuards_1 = __webpack_require__(/*! ../../node/NodeGuards */ "./src/node/NodeGuards.ts");
let ObjectExpressionTransformer = class ObjectExpressionTransformer extends AbstractNodeTransformer_1.AbstractNodeTransformer {
    constructor(randomGenerator, options) {
        super(randomGenerator, options);
    }
    getVisitor(nodeTransformationStage) {
        switch (nodeTransformationStage) {
            case NodeTransformationStage_1.NodeTransformationStage.Converting:
                return {
                    enter: (node, parentNode) => {
                        if (parentNode && NodeGuards_1.NodeGuards.isObjectExpressionNode(node)) {
                            return this.transformNode(node, parentNode);
                        }
                    }
                };
            default:
                return null;
        }
    }
    transformNode(objectExpressionNode, parentNode) {
        objectExpressionNode.properties
            .forEach((property) => {
            if (!NodeGuards_1.NodeGuards.isPropertyNode(property)) {
                return;
            }
            if (!property.key) {
                return;
            }
            if (property.computed) {
                this.transformComputedProperty(property);
            }
            else {
                this.transformBaseProperty(property);
            }
        });
        return objectExpressionNode;
    }
    transformComputedProperty(property) {
        if (!NodeGuards_1.NodeGuards.isLiteralNode(property.key) || !(typeof property.key.value === 'string')) {
            return;
        }
        property.key = NodeFactory_1.NodeFactory.literalNode(property.key.value);
    }
    transformBaseProperty(property) {
        if (property.shorthand) {
            property.shorthand = false;
        }
        if (!NodeGuards_1.NodeGuards.isIdentifierNode(property.key)) {
            return;
        }
        property.key = NodeFactory_1.NodeFactory.literalNode(property.key.name);
    }
};
ObjectExpressionTransformer = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _a : Object, typeof (_b = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _b : Object])
], ObjectExpressionTransformer);
exports.ObjectExpressionTransformer = ObjectExpressionTransformer;


/***/ }),

/***/ "./src/node-transformers/converting-transformers/SplitStringTransformer.ts":
/*!*********************************************************************************!*\
  !*** ./src/node-transformers/converting-transformers/SplitStringTransformer.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var SplitStringTransformer_1, _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplitStringTransformer = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const estraverse = __importStar(__webpack_require__(/*! estraverse */ "estraverse"));
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const NodeTransformer_1 = __webpack_require__(/*! ../../enums/node-transformers/NodeTransformer */ "./src/enums/node-transformers/NodeTransformer.ts");
const NodeTransformationStage_1 = __webpack_require__(/*! ../../enums/node-transformers/NodeTransformationStage */ "./src/enums/node-transformers/NodeTransformationStage.ts");
const AbstractNodeTransformer_1 = __webpack_require__(/*! ../AbstractNodeTransformer */ "./src/node-transformers/AbstractNodeTransformer.ts");
const NodeFactory_1 = __webpack_require__(/*! ../../node/NodeFactory */ "./src/node/NodeFactory.ts");
const NodeGuards_1 = __webpack_require__(/*! ../../node/NodeGuards */ "./src/node/NodeGuards.ts");
const NodeLiteralUtils_1 = __webpack_require__(/*! ../../node/NodeLiteralUtils */ "./src/node/NodeLiteralUtils.ts");
const NodeUtils_1 = __webpack_require__(/*! ../../node/NodeUtils */ "./src/node/NodeUtils.ts");
let SplitStringTransformer = SplitStringTransformer_1 = class SplitStringTransformer extends AbstractNodeTransformer_1.AbstractNodeTransformer {
    constructor(randomGenerator, options) {
        super(randomGenerator, options);
        this.runAfter = [
            NodeTransformer_1.NodeTransformer.ObjectExpressionKeysTransformer,
            NodeTransformer_1.NodeTransformer.TemplateLiteralTransformer
        ];
    }
    static chunkString(string, chunkSize) {
        const chunksCount = Math.ceil(string.length / chunkSize);
        const chunks = [];
        let nextChunkStartIndex = 0;
        for (let chunkIndex = 0; chunkIndex < chunksCount; ++chunkIndex, nextChunkStartIndex += chunkSize) {
            chunks[chunkIndex] = string.substr(nextChunkStartIndex, chunkSize);
        }
        return chunks;
    }
    getVisitor(nodeTransformationStage) {
        switch (nodeTransformationStage) {
            case NodeTransformationStage_1.NodeTransformationStage.Converting:
                return {
                    enter: (node, parentNode) => {
                        if (!this.options.splitStrings) {
                            return;
                        }
                        if (parentNode && NodeGuards_1.NodeGuards.isLiteralNode(node)) {
                            return this.transformNode(node, parentNode);
                        }
                    }
                };
            default:
                return null;
        }
    }
    transformNode(literalNode, parentNode) {
        if (NodeLiteralUtils_1.NodeLiteralUtils.isProhibitedLiteralNode(literalNode, parentNode)) {
            return literalNode;
        }
        const firstPassChunksNode = this.transformLiteralNodeByChunkLength(literalNode, parentNode, SplitStringTransformer_1.firstPassChunkLength);
        const secondPassChunksNode = estraverse.replace(firstPassChunksNode, {
            enter: (node, parentNode) => {
                if (parentNode && NodeGuards_1.NodeGuards.isLiteralNode(node)) {
                    return this.transformLiteralNodeByChunkLength(node, parentNode, this.options.splitStringsChunkLength);
                }
            }
        });
        return secondPassChunksNode;
    }
    transformLiteralNodeByChunkLength(literalNode, parentNode, chunkLength) {
        if (typeof literalNode.value !== 'string') {
            return literalNode;
        }
        if (chunkLength >= literalNode.value.length) {
            return literalNode;
        }
        const stringChunks = SplitStringTransformer_1.chunkString(literalNode.value, chunkLength);
        const binaryExpressionNode = this.transformStringChunksToBinaryExpressionNode(stringChunks);
        NodeUtils_1.NodeUtils.parentizeAst(binaryExpressionNode);
        NodeUtils_1.NodeUtils.parentizeNode(binaryExpressionNode, parentNode);
        return binaryExpressionNode;
    }
    transformStringChunksToBinaryExpressionNode(chunks) {
        const firstChunk = chunks.shift();
        const secondChunk = chunks.shift();
        if (!firstChunk || !secondChunk) {
            throw new Error('First and second chunks values should not be empty');
        }
        const initialBinaryExpressionNode = NodeFactory_1.NodeFactory.binaryExpressionNode('+', NodeFactory_1.NodeFactory.literalNode(firstChunk), NodeFactory_1.NodeFactory.literalNode(secondChunk));
        return chunks.reduce((binaryExpressionNode, chunk) => {
            const chunkLiteralNode = NodeFactory_1.NodeFactory.literalNode(chunk);
            return NodeFactory_1.NodeFactory.binaryExpressionNode('+', binaryExpressionNode, chunkLiteralNode);
        }, initialBinaryExpressionNode);
    }
};
SplitStringTransformer.firstPassChunkLength = 1000;
SplitStringTransformer = SplitStringTransformer_1 = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _a : Object, typeof (_b = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _b : Object])
], SplitStringTransformer);
exports.SplitStringTransformer = SplitStringTransformer;


/***/ }),

/***/ "./src/node-transformers/converting-transformers/TemplateLiteralTransformer.ts":
/*!*************************************************************************************!*\
  !*** ./src/node-transformers/converting-transformers/TemplateLiteralTransformer.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var TemplateLiteralTransformer_1, _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateLiteralTransformer = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const NodeTransformationStage_1 = __webpack_require__(/*! ../../enums/node-transformers/NodeTransformationStage */ "./src/enums/node-transformers/NodeTransformationStage.ts");
const AbstractNodeTransformer_1 = __webpack_require__(/*! ../AbstractNodeTransformer */ "./src/node-transformers/AbstractNodeTransformer.ts");
const NodeFactory_1 = __webpack_require__(/*! ../../node/NodeFactory */ "./src/node/NodeFactory.ts");
const NodeGuards_1 = __webpack_require__(/*! ../../node/NodeGuards */ "./src/node/NodeGuards.ts");
const NodeUtils_1 = __webpack_require__(/*! ../../node/NodeUtils */ "./src/node/NodeUtils.ts");
let TemplateLiteralTransformer = TemplateLiteralTransformer_1 = class TemplateLiteralTransformer extends AbstractNodeTransformer_1.AbstractNodeTransformer {
    constructor(randomGenerator, options) {
        super(randomGenerator, options);
    }
    static isLiteralNodeWithStringValue(node) {
        return !!node && NodeGuards_1.NodeGuards.isLiteralNode(node) && typeof node.value === 'string';
    }
    static isValidTemplateLiteralNode(node, parentNode) {
        return NodeGuards_1.NodeGuards.isTemplateLiteralNode(node) && !NodeGuards_1.NodeGuards.isTaggedTemplateExpressionNode(parentNode);
    }
    getVisitor(nodeTransformationStage) {
        switch (nodeTransformationStage) {
            case NodeTransformationStage_1.NodeTransformationStage.Converting:
                return {
                    enter: (node, parentNode) => {
                        if (parentNode && TemplateLiteralTransformer_1.isValidTemplateLiteralNode(node, parentNode)) {
                            return this.transformNode(node, parentNode);
                        }
                    }
                };
            default:
                return null;
        }
    }
    transformNode(templateLiteralNode, parentNode) {
        const templateLiteralExpressions = templateLiteralNode.expressions;
        let nodes = [];
        templateLiteralNode.quasis.forEach((templateElement) => {
            nodes.push(NodeFactory_1.NodeFactory.literalNode(templateElement.value.cooked));
            const expression = templateLiteralExpressions.shift();
            if (!expression) {
                return;
            }
            nodes.push(expression);
        });
        nodes = nodes.filter((node) => {
            return !(NodeGuards_1.NodeGuards.isLiteralNode(node) && node.value === '');
        });
        if (!TemplateLiteralTransformer_1.isLiteralNodeWithStringValue(nodes[0]) &&
            !TemplateLiteralTransformer_1.isLiteralNodeWithStringValue(nodes[1])) {
            nodes.unshift(NodeFactory_1.NodeFactory.literalNode(''));
        }
        let transformedNode;
        if (nodes.length > 1) {
            let root = NodeFactory_1.NodeFactory.binaryExpressionNode('+', nodes.shift(), nodes.shift());
            nodes.forEach((node) => {
                root = NodeFactory_1.NodeFactory.binaryExpressionNode('+', root, node);
            });
            transformedNode = root;
        }
        else {
            transformedNode = nodes[0];
        }
        NodeUtils_1.NodeUtils.parentizeAst(transformedNode);
        NodeUtils_1.NodeUtils.parentizeNode(transformedNode, parentNode);
        return transformedNode;
    }
};
TemplateLiteralTransformer = TemplateLiteralTransformer_1 = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _a : Object, typeof (_b = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _b : Object])
], TemplateLiteralTransformer);
exports.TemplateLiteralTransformer = TemplateLiteralTransformer;


/***/ }),

/***/ "./src/node-transformers/converting-transformers/object-expression-extractors/BasePropertiesExtractor.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/node-transformers/converting-transformers/object-expression-extractors/BasePropertiesExtractor.ts ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var BasePropertiesExtractor_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePropertiesExtractor = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const NodeAppender_1 = __webpack_require__(/*! ../../../node/NodeAppender */ "./src/node/NodeAppender.ts");
const NodeFactory_1 = __webpack_require__(/*! ../../../node/NodeFactory */ "./src/node/NodeFactory.ts");
const NodeGuards_1 = __webpack_require__(/*! ../../../node/NodeGuards */ "./src/node/NodeGuards.ts");
const NodeStatementUtils_1 = __webpack_require__(/*! ../../../node/NodeStatementUtils */ "./src/node/NodeStatementUtils.ts");
const NodeUtils_1 = __webpack_require__(/*! ../../../node/NodeUtils */ "./src/node/NodeUtils.ts");
let BasePropertiesExtractor = BasePropertiesExtractor_1 = class BasePropertiesExtractor {
    static getPropertyNodeKeyName(propertyNode) {
        const propertyKeyNode = propertyNode.key;
        if (NodeGuards_1.NodeGuards.isLiteralNode(propertyKeyNode)
            && (typeof propertyKeyNode.value === 'string'
                || typeof propertyKeyNode.value === 'number')) {
            return propertyKeyNode.value.toString();
        }
        if (NodeGuards_1.NodeGuards.isIdentifierNode(propertyKeyNode)) {
            return propertyKeyNode.name;
        }
        return null;
    }
    static isProhibitedPattern(node) {
        return !node
            || NodeGuards_1.NodeGuards.isObjectPatternNode(node)
            || NodeGuards_1.NodeGuards.isArrayPatternNode(node)
            || NodeGuards_1.NodeGuards.isAssignmentPatternNode(node)
            || NodeGuards_1.NodeGuards.isRestElementNode(node);
    }
    extract(objectExpressionNode, hostStatement) {
        const hostNode = objectExpressionNode.parentNode;
        if (hostNode
            && NodeGuards_1.NodeGuards.isVariableDeclaratorNode(hostNode)
            && NodeGuards_1.NodeGuards.isIdentifierNode(hostNode.id)) {
            return this.transformObjectExpressionNode(objectExpressionNode, hostStatement, hostNode.id);
        }
        return {
            nodeToReplace: objectExpressionNode,
            objectExpressionHostStatement: hostStatement,
            objectExpressionNode: objectExpressionNode
        };
    }
    transformObjectExpressionNode(objectExpressionNode, hostStatement, memberExpressionHostNode) {
        const properties = objectExpressionNode.properties;
        const [expressionStatements, removablePropertyIds] = this
            .extractPropertiesToExpressionStatements(properties, hostStatement, memberExpressionHostNode);
        const hostNodeWithStatements = NodeStatementUtils_1.NodeStatementUtils.getScopeOfNode(hostStatement);
        this.filterExtractedObjectExpressionProperties(objectExpressionNode, removablePropertyIds);
        NodeAppender_1.NodeAppender.insertAfter(hostNodeWithStatements, expressionStatements, hostStatement);
        NodeUtils_1.NodeUtils.parentizeAst(hostNodeWithStatements);
        return {
            nodeToReplace: objectExpressionNode,
            objectExpressionHostStatement: hostStatement,
            objectExpressionNode: objectExpressionNode
        };
    }
    extractPropertiesToExpressionStatements(properties, hostStatement, memberExpressionHostNode) {
        const propertiesLength = properties.length;
        const expressionStatements = [];
        const removablePropertyIds = [];
        for (let i = 0; i < propertiesLength; i++) {
            const property = properties[i];
            if (!NodeGuards_1.NodeGuards.isPropertyNode(property)) {
                continue;
            }
            const propertyValue = property.value;
            if (BasePropertiesExtractor_1.isProhibitedPattern(propertyValue)) {
                continue;
            }
            const propertyKeyName = BasePropertiesExtractor_1.getPropertyNodeKeyName(property);
            if (!propertyKeyName) {
                continue;
            }
            const shouldCreateLiteralNode = !property.computed
                || (property.computed && !!property.key && NodeGuards_1.NodeGuards.isLiteralNode(property.key));
            const memberExpressionProperty = shouldCreateLiteralNode
                ? NodeFactory_1.NodeFactory.literalNode(propertyKeyName)
                : NodeFactory_1.NodeFactory.identifierNode(propertyKeyName);
            const memberExpressionNode = NodeFactory_1.NodeFactory
                .memberExpressionNode(memberExpressionHostNode, memberExpressionProperty, true);
            const expressionStatementNode = NodeFactory_1.NodeFactory.expressionStatementNode(NodeFactory_1.NodeFactory.assignmentExpressionNode('=', memberExpressionNode, propertyValue));
            if (NodeGuards_1.NodeGuards.isObjectExpressionNode(property.value)) {
                this.transformObjectExpressionNode(property.value, hostStatement, memberExpressionNode);
            }
            expressionStatements.push(expressionStatementNode);
            removablePropertyIds.push(i);
        }
        return [expressionStatements, removablePropertyIds];
    }
    filterExtractedObjectExpressionProperties(objectExpressionNode, removablePropertyIds) {
        objectExpressionNode.properties = objectExpressionNode.properties
            .filter((property, index) => !removablePropertyIds.includes(index));
    }
};
BasePropertiesExtractor = BasePropertiesExtractor_1 = __decorate([
    inversify_1.injectable()
], BasePropertiesExtractor);
exports.BasePropertiesExtractor = BasePropertiesExtractor;


/***/ }),

/***/ "./src/node-transformers/converting-transformers/object-expression-extractors/ObjectExpressionToVariableDeclarationExtractor.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/node-transformers/converting-transformers/object-expression-extractors/ObjectExpressionToVariableDeclarationExtractor.ts ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectExpressionToVariableDeclarationExtractor = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TObjectExpressionKeysTransformerCustomNodeFactory_1 = __webpack_require__(/*! ../../../types/container/custom-nodes/TObjectExpressionKeysTransformerCustomNodeFactory */ "./src/types/container/custom-nodes/TObjectExpressionKeysTransformerCustomNodeFactory.ts");
const ObjectExpressionKeysTransformerCustomNode_1 = __webpack_require__(/*! ../../../enums/custom-nodes/ObjectExpressionKeysTransformerCustomNode */ "./src/enums/custom-nodes/ObjectExpressionKeysTransformerCustomNode.ts");
const NodeAppender_1 = __webpack_require__(/*! ../../../node/NodeAppender */ "./src/node/NodeAppender.ts");
const NodeGuards_1 = __webpack_require__(/*! ../../../node/NodeGuards */ "./src/node/NodeGuards.ts");
const NodeStatementUtils_1 = __webpack_require__(/*! ../../../node/NodeStatementUtils */ "./src/node/NodeStatementUtils.ts");
const NodeUtils_1 = __webpack_require__(/*! ../../../node/NodeUtils */ "./src/node/NodeUtils.ts");
const NodeLexicalScopeUtils_1 = __webpack_require__(/*! ../../../node/NodeLexicalScopeUtils */ "./src/node/NodeLexicalScopeUtils.ts");
let ObjectExpressionToVariableDeclarationExtractor = class ObjectExpressionToVariableDeclarationExtractor {
    constructor(objectExpressionKeysTransformerCustomNodeFactory) {
        this.objectExpressionKeysTransformerCustomNodeFactory = objectExpressionKeysTransformerCustomNodeFactory;
    }
    extract(objectExpressionNode, hostStatement) {
        return this.transformObjectExpressionToVariableDeclaration(objectExpressionNode, hostStatement);
    }
    transformObjectExpressionToVariableDeclaration(objectExpressionNode, hostStatement) {
        var _a;
        const hostNodeWithStatements = NodeStatementUtils_1.NodeStatementUtils.getScopeOfNode(hostStatement);
        const lexicalScopeNode = NodeGuards_1.NodeGuards.isNodeWithLexicalScope(hostNodeWithStatements)
            ? hostNodeWithStatements
            : (_a = NodeLexicalScopeUtils_1.NodeLexicalScopeUtils.getLexicalScope(hostNodeWithStatements)) !== null && _a !== void 0 ? _a : null;
        if (!lexicalScopeNode) {
            throw new Error('Cannot find lexical scope node for the host statement node');
        }
        const properties = objectExpressionNode.properties;
        const newObjectExpressionHostStatement = this.getObjectExpressionHostNode(lexicalScopeNode, properties);
        const statementsToInsert = [newObjectExpressionHostStatement];
        NodeAppender_1.NodeAppender.insertBefore(hostNodeWithStatements, statementsToInsert, hostStatement);
        NodeUtils_1.NodeUtils.parentizeAst(newObjectExpressionHostStatement);
        NodeUtils_1.NodeUtils.parentizeNode(newObjectExpressionHostStatement, hostNodeWithStatements);
        const newObjectExpressionIdentifier = this.getObjectExpressionIdentifierNode(newObjectExpressionHostStatement);
        const newObjectExpressionNode = this.getObjectExpressionNode(newObjectExpressionHostStatement);
        return {
            nodeToReplace: newObjectExpressionIdentifier,
            objectExpressionHostStatement: newObjectExpressionHostStatement,
            objectExpressionNode: newObjectExpressionNode
        };
    }
    getObjectExpressionHostNode(lexicalScopeNode, properties) {
        const variableDeclarationHostNodeCustomNode = this.objectExpressionKeysTransformerCustomNodeFactory(ObjectExpressionKeysTransformerCustomNode_1.ObjectExpressionKeysTransformerCustomNode.ObjectExpressionVariableDeclarationHostNode);
        variableDeclarationHostNodeCustomNode.initialize(lexicalScopeNode, properties);
        const statementNode = variableDeclarationHostNodeCustomNode.getNode()[0];
        if (!statementNode
            || !NodeGuards_1.NodeGuards.isVariableDeclarationNode(statementNode)) {
            throw new Error('`objectExpressionHostCustomNode.getNode()[0]` should returns array with `VariableDeclaration` node');
        }
        return statementNode;
    }
    getObjectExpressionIdentifierNode(objectExpressionHostNode) {
        const newObjectExpressionIdentifierNode = objectExpressionHostNode.declarations[0].id;
        if (!NodeGuards_1.NodeGuards.isIdentifierNode(newObjectExpressionIdentifierNode)) {
            throw new Error('`objectExpressionHostNode` should contain `VariableDeclarator` node with `Identifier` id property');
        }
        return newObjectExpressionIdentifierNode;
    }
    getObjectExpressionNode(objectExpressionHostNode) {
        var _a;
        const newObjectExpressionNode = (_a = objectExpressionHostNode.declarations[0].init) !== null && _a !== void 0 ? _a : null;
        if (!newObjectExpressionNode || !NodeGuards_1.NodeGuards.isObjectExpressionNode(newObjectExpressionNode)) {
            throw new Error('`objectExpressionHostNode` should contain `VariableDeclarator` node with `ObjectExpression` init property');
        }
        return newObjectExpressionNode;
    }
};
ObjectExpressionToVariableDeclarationExtractor = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IObjectExpressionKeysTransformerCustomNode)),
    __metadata("design:paramtypes", [typeof (_a = typeof TObjectExpressionKeysTransformerCustomNodeFactory_1.TObjectExpressionKeysTransformerCustomNodeFactory !== "undefined" && TObjectExpressionKeysTransformerCustomNodeFactory_1.TObjectExpressionKeysTransformerCustomNodeFactory) === "function" ? _a : Object])
], ObjectExpressionToVariableDeclarationExtractor);
exports.ObjectExpressionToVariableDeclarationExtractor = ObjectExpressionToVariableDeclarationExtractor;


/***/ }),

/***/ "./src/node-transformers/dead-code-injection-transformers/DeadCodeInjectionTransformer.ts":
/*!************************************************************************************************!*\
  !*** ./src/node-transformers/dead-code-injection-transformers/DeadCodeInjectionTransformer.ts ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var DeadCodeInjectionTransformer_1, _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeadCodeInjectionTransformer = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const estraverse = __importStar(__webpack_require__(/*! estraverse */ "estraverse"));
const TDeadNodeInjectionCustomNodeFactory_1 = __webpack_require__(/*! ../../types/container/custom-nodes/TDeadNodeInjectionCustomNodeFactory */ "./src/types/container/custom-nodes/TDeadNodeInjectionCustomNodeFactory.ts");
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const INodeTransformersRunner_1 = __webpack_require__(/*! ../../interfaces/node-transformers/INodeTransformersRunner */ "./src/interfaces/node-transformers/INodeTransformersRunner.ts");
const DeadCodeInjectionCustomNode_1 = __webpack_require__(/*! ../../enums/custom-nodes/DeadCodeInjectionCustomNode */ "./src/enums/custom-nodes/DeadCodeInjectionCustomNode.ts");
const NodeTransformer_1 = __webpack_require__(/*! ../../enums/node-transformers/NodeTransformer */ "./src/enums/node-transformers/NodeTransformer.ts");
const NodeType_1 = __webpack_require__(/*! ../../enums/node/NodeType */ "./src/enums/node/NodeType.ts");
const NodeTransformationStage_1 = __webpack_require__(/*! ../../enums/node-transformers/NodeTransformationStage */ "./src/enums/node-transformers/NodeTransformationStage.ts");
const AbstractNodeTransformer_1 = __webpack_require__(/*! ../AbstractNodeTransformer */ "./src/node-transformers/AbstractNodeTransformer.ts");
const NodeFactory_1 = __webpack_require__(/*! ../../node/NodeFactory */ "./src/node/NodeFactory.ts");
const NodeGuards_1 = __webpack_require__(/*! ../../node/NodeGuards */ "./src/node/NodeGuards.ts");
const NodeStatementUtils_1 = __webpack_require__(/*! ../../node/NodeStatementUtils */ "./src/node/NodeStatementUtils.ts");
const NodeUtils_1 = __webpack_require__(/*! ../../node/NodeUtils */ "./src/node/NodeUtils.ts");
let DeadCodeInjectionTransformer = DeadCodeInjectionTransformer_1 = class DeadCodeInjectionTransformer extends AbstractNodeTransformer_1.AbstractNodeTransformer {
    constructor(deadCodeInjectionCustomNodeFactory, transformersRunner, randomGenerator, options) {
        super(randomGenerator, options);
        this.deadCodeInjectionRootAstHostNodeSet = new Set();
        this.collectedBlockStatements = [];
        this.collectedBlockStatementsTotalLength = 0;
        this.deadCodeInjectionCustomNodeFactory = deadCodeInjectionCustomNodeFactory;
        this.transformersRunner = transformersRunner;
    }
    static isProhibitedNodeInsideCollectedBlockStatement(targetNode) {
        return NodeGuards_1.NodeGuards.isBreakStatementNode(targetNode)
            || NodeGuards_1.NodeGuards.isContinueStatementNode(targetNode)
            || NodeGuards_1.NodeGuards.isAwaitExpressionNode(targetNode)
            || NodeGuards_1.NodeGuards.isSuperNode(targetNode);
    }
    static isScopeHoistingFunctionDeclaration(targetNode) {
        if (!NodeGuards_1.NodeGuards.isFunctionDeclarationNode(targetNode)) {
            return false;
        }
        const scopeNode = NodeStatementUtils_1.NodeStatementUtils.getScopeOfNode(targetNode);
        const scopeBody = !NodeGuards_1.NodeGuards.isSwitchCaseNode(scopeNode)
            ? scopeNode.body
            : scopeNode.consequent;
        const indexInScope = scopeBody.indexOf(targetNode);
        if (indexInScope === 0) {
            return false;
        }
        const slicedBody = scopeBody.slice(0, indexInScope);
        const hostBlockStatementNode = NodeFactory_1.NodeFactory.blockStatementNode(slicedBody);
        const functionDeclarationName = targetNode.id.name;
        let isScopeHoistedFunctionDeclaration = false;
        estraverse.traverse(hostBlockStatementNode, {
            enter: (node) => {
                if (NodeGuards_1.NodeGuards.isIdentifierNode(node) && node.name === functionDeclarationName) {
                    isScopeHoistedFunctionDeclaration = true;
                    return estraverse.VisitorOption.Break;
                }
            }
        });
        return isScopeHoistedFunctionDeclaration;
    }
    static isValidCollectedBlockStatementNode(blockStatementNode) {
        if (!blockStatementNode.body.length) {
            return false;
        }
        let nestedBlockStatementsCount = 0;
        let isValidBlockStatementNode = true;
        estraverse.traverse(blockStatementNode, {
            enter: (node) => {
                if (NodeGuards_1.NodeGuards.isBlockStatementNode(node)) {
                    nestedBlockStatementsCount++;
                }
                if (nestedBlockStatementsCount > DeadCodeInjectionTransformer_1.maxNestedBlockStatementsCount
                    || DeadCodeInjectionTransformer_1.isProhibitedNodeInsideCollectedBlockStatement(node)
                    || DeadCodeInjectionTransformer_1.isScopeHoistingFunctionDeclaration(node)) {
                    isValidBlockStatementNode = false;
                    return estraverse.VisitorOption.Break;
                }
            }
        });
        return isValidBlockStatementNode;
    }
    static isValidWrappedBlockStatementNode(blockStatementNode) {
        if (!blockStatementNode.body.length) {
            return false;
        }
        let isValidBlockStatementNode = true;
        estraverse.traverse(blockStatementNode, {
            enter: (node) => {
                if (DeadCodeInjectionTransformer_1.isScopeHoistingFunctionDeclaration(node)) {
                    isValidBlockStatementNode = false;
                    return estraverse.VisitorOption.Break;
                }
            }
        });
        if (!isValidBlockStatementNode) {
            return false;
        }
        const parentNodeWithStatements = NodeStatementUtils_1.NodeStatementUtils
            .getParentNodeWithStatements(blockStatementNode);
        return parentNodeWithStatements.type !== NodeType_1.NodeType.Program;
    }
    getVisitor(nodeTransformationStage) {
        switch (nodeTransformationStage) {
            case NodeTransformationStage_1.NodeTransformationStage.DeadCodeInjection:
                return {
                    enter: (node, parentNode) => {
                        if (parentNode && NodeGuards_1.NodeGuards.isProgramNode(node)) {
                            this.analyzeNode(node, parentNode);
                            return node;
                        }
                    },
                    leave: (node, parentNode) => {
                        if (parentNode && NodeGuards_1.NodeGuards.isBlockStatementNode(node)) {
                            return this.transformNode(node, parentNode);
                        }
                    }
                };
            case NodeTransformationStage_1.NodeTransformationStage.Finalizing:
                if (!this.deadCodeInjectionRootAstHostNodeSet.size) {
                    return null;
                }
                return {
                    enter: (node, parentNode) => {
                        if (parentNode && this.isDeadCodeInjectionRootAstHostNode(node)) {
                            return this.restoreNode(node, parentNode);
                        }
                    }
                };
            default:
                return null;
        }
    }
    analyzeNode(programNode, parentNode) {
        estraverse.traverse(programNode, {
            enter: (node) => {
                if (!NodeGuards_1.NodeGuards.isBlockStatementNode(node)) {
                    return;
                }
                const clonedBlockStatementNode = NodeUtils_1.NodeUtils.clone(node);
                if (!DeadCodeInjectionTransformer_1.isValidCollectedBlockStatementNode(clonedBlockStatementNode)) {
                    return;
                }
                const transformedBlockStatementNode = this.makeClonedBlockStatementNodeUnique(clonedBlockStatementNode);
                this.collectedBlockStatements.push(transformedBlockStatementNode);
            }
        });
        this.collectedBlockStatementsTotalLength = this.collectedBlockStatements.length;
    }
    transformNode(blockStatementNode, parentNode) {
        const canBreakTraverse = !this.collectedBlockStatements.length
            || this.collectedBlockStatementsTotalLength < DeadCodeInjectionTransformer_1.minCollectedBlockStatementsCount;
        if (canBreakTraverse) {
            return estraverse.VisitorOption.Break;
        }
        if (this.randomGenerator.getMathRandom() > this.options.deadCodeInjectionThreshold
            || !DeadCodeInjectionTransformer_1.isValidWrappedBlockStatementNode(blockStatementNode)) {
            return blockStatementNode;
        }
        const minInteger = 0;
        const maxInteger = this.collectedBlockStatements.length - 1;
        const randomIndex = this.randomGenerator.getRandomInteger(minInteger, maxInteger);
        const randomBlockStatementNode = this.collectedBlockStatements.splice(randomIndex, 1)[0];
        const isDuplicateBlockStatementNodes = randomBlockStatementNode === blockStatementNode;
        if (isDuplicateBlockStatementNodes) {
            return blockStatementNode;
        }
        return this.replaceBlockStatementNode(blockStatementNode, randomBlockStatementNode, parentNode);
    }
    restoreNode(deadCodeInjectionRootAstHostNode, parentNode) {
        const hostNodeFirstStatement = deadCodeInjectionRootAstHostNode.body[0];
        if (!NodeGuards_1.NodeGuards.isFunctionDeclarationNode(hostNodeFirstStatement)) {
            throw new Error('Wrong dead code injection root AST host node. Host node should contain `FunctionDeclaration` node');
        }
        return hostNodeFirstStatement.body;
    }
    isDeadCodeInjectionRootAstHostNode(node) {
        return NodeGuards_1.NodeGuards.isBlockStatementNode(node) && this.deadCodeInjectionRootAstHostNodeSet.has(node);
    }
    makeClonedBlockStatementNodeUnique(clonedBlockStatementNode) {
        const hostNode = NodeFactory_1.NodeFactory.programNode([
            NodeFactory_1.NodeFactory.expressionStatementNode(NodeFactory_1.NodeFactory.functionExpressionNode([], clonedBlockStatementNode))
        ]);
        NodeUtils_1.NodeUtils.parentizeAst(hostNode);
        NodeUtils_1.NodeUtils.parentizeNode(hostNode, hostNode);
        this.transformersRunner.transform(hostNode, DeadCodeInjectionTransformer_1.transformersToRenameBlockScopeIdentifiers, NodeTransformationStage_1.NodeTransformationStage.Obfuscating);
        return clonedBlockStatementNode;
    }
    replaceBlockStatementNode(blockStatementNode, randomBlockStatementNode, parentNode) {
        const deadCodeInjectionRootAstHostNode = NodeFactory_1.NodeFactory.blockStatementNode([
            NodeFactory_1.NodeFactory.functionDeclarationNode(DeadCodeInjectionTransformer_1.deadCodeInjectionRootAstHostNodeName, [], randomBlockStatementNode)
        ]);
        this.deadCodeInjectionRootAstHostNodeSet.add(deadCodeInjectionRootAstHostNode);
        const blockStatementDeadCodeInjectionCustomNode = this.deadCodeInjectionCustomNodeFactory(DeadCodeInjectionCustomNode_1.DeadCodeInjectionCustomNode.BlockStatementDeadCodeInjectionNode);
        blockStatementDeadCodeInjectionCustomNode.initialize(blockStatementNode, deadCodeInjectionRootAstHostNode);
        const newBlockStatementNode = blockStatementDeadCodeInjectionCustomNode.getNode()[0];
        NodeUtils_1.NodeUtils.parentizeNode(newBlockStatementNode, parentNode);
        return newBlockStatementNode;
    }
};
DeadCodeInjectionTransformer.deadCodeInjectionRootAstHostNodeName = 'deadCodeInjectionRootAstHostNode';
DeadCodeInjectionTransformer.maxNestedBlockStatementsCount = 4;
DeadCodeInjectionTransformer.minCollectedBlockStatementsCount = 5;
DeadCodeInjectionTransformer.transformersToRenameBlockScopeIdentifiers = [
    NodeTransformer_1.NodeTransformer.LabeledStatementTransformer,
    NodeTransformer_1.NodeTransformer.ScopeIdentifiersTransformer
];
DeadCodeInjectionTransformer = DeadCodeInjectionTransformer_1 = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IDeadCodeInjectionCustomNode)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.INodeTransformersRunner)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(3, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof TDeadNodeInjectionCustomNodeFactory_1.TDeadNodeInjectionCustomNodeFactory !== "undefined" && TDeadNodeInjectionCustomNodeFactory_1.TDeadNodeInjectionCustomNodeFactory) === "function" ? _a : Object, typeof (_b = typeof INodeTransformersRunner_1.INodeTransformersRunner !== "undefined" && INodeTransformersRunner_1.INodeTransformersRunner) === "function" ? _b : Object, typeof (_c = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _c : Object, typeof (_d = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _d : Object])
], DeadCodeInjectionTransformer);
exports.DeadCodeInjectionTransformer = DeadCodeInjectionTransformer;


/***/ }),

/***/ "./src/node-transformers/initializing-transformers/CommentsTransformer.ts":
/*!********************************************************************************!*\
  !*** ./src/node-transformers/initializing-transformers/CommentsTransformer.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var CommentsTransformer_1, _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsTransformer = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const estraverse = __importStar(__webpack_require__(/*! estraverse */ "estraverse"));
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const NodeTransformationStage_1 = __webpack_require__(/*! ../../enums/node-transformers/NodeTransformationStage */ "./src/enums/node-transformers/NodeTransformationStage.ts");
const AbstractNodeTransformer_1 = __webpack_require__(/*! ../AbstractNodeTransformer */ "./src/node-transformers/AbstractNodeTransformer.ts");
const ConditionalCommentObfuscatingGuard_1 = __webpack_require__(/*! ../preparing-transformers/obfuscating-guards/ConditionalCommentObfuscatingGuard */ "./src/node-transformers/preparing-transformers/obfuscating-guards/ConditionalCommentObfuscatingGuard.ts");
const NodeGuards_1 = __webpack_require__(/*! ../../node/NodeGuards */ "./src/node/NodeGuards.ts");
let CommentsTransformer = CommentsTransformer_1 = class CommentsTransformer extends AbstractNodeTransformer_1.AbstractNodeTransformer {
    constructor(randomGenerator, options) {
        super(randomGenerator, options);
    }
    getVisitor(nodeTransformationStage) {
        switch (nodeTransformationStage) {
            case NodeTransformationStage_1.NodeTransformationStage.Initializing:
                return {
                    leave: (node) => {
                        if (NodeGuards_1.NodeGuards.isProgramNode(node)) {
                            return this.transformNode(node);
                        }
                    }
                };
            default:
                return null;
        }
    }
    transformNode(rootNode) {
        if (!rootNode.comments || !rootNode.comments.length) {
            return rootNode;
        }
        const comments = this.transformComments(rootNode.comments);
        if (comments.length === 0) {
            return rootNode;
        }
        if (!rootNode.body.length) {
            rootNode.leadingComments = comments;
            return rootNode;
        }
        let isFirstNode = true;
        estraverse.traverse(rootNode, {
            enter: (node) => {
                if (node === rootNode) {
                    return;
                }
                const commentIdx = comments.findIndex((comment) => comment.range && node.range && comment.range[0] < node.range[0]);
                if (commentIdx >= 0) {
                    (isFirstNode ? rootNode : node).leadingComments =
                        comments.splice(commentIdx, comments.length - commentIdx).reverse();
                }
                isFirstNode = false;
            }
        });
        if (comments.length > 0) {
            rootNode.trailingComments = comments.reverse();
        }
        return rootNode;
    }
    transformComments(comments) {
        return comments.filter((comment) => CommentsTransformer_1.preservedWords
            .some((preservedWord) => comment.value.includes(preservedWord)) ||
            ConditionalCommentObfuscatingGuard_1.ConditionalCommentObfuscatingGuard.isConditionalComment(comment)).reverse();
    }
};
CommentsTransformer.preservedWords = [
    '@license',
    '@preserve'
];
CommentsTransformer = CommentsTransformer_1 = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _a : Object, typeof (_b = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _b : Object])
], CommentsTransformer);
exports.CommentsTransformer = CommentsTransformer;


/***/ }),

/***/ "./src/node-transformers/mangle-properties-transformers/ManglePropertiesTransformer.ts":
/*!*********************************************************************************************!*\
  !*** ./src/node-transformers/mangle-properties-transformers/ManglePropertiesTransformer.ts ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var ManglePropertiesTransformer_1, _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManglePropertiesTransformer = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const IManglePropertiesReplacer_1 = __webpack_require__(/*! ../../interfaces/node-transformers/mangle-properties-transformers/replacer/IManglePropertiesReplacer */ "./src/interfaces/node-transformers/mangle-properties-transformers/replacer/IManglePropertiesReplacer.ts");
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const NodeTransformationStage_1 = __webpack_require__(/*! ../../enums/node-transformers/NodeTransformationStage */ "./src/enums/node-transformers/NodeTransformationStage.ts");
const AbstractNodeTransformer_1 = __webpack_require__(/*! ../AbstractNodeTransformer */ "./src/node-transformers/AbstractNodeTransformer.ts");
const NodeGuards_1 = __webpack_require__(/*! ../../node/NodeGuards */ "./src/node/NodeGuards.ts");
let ManglePropertiesTransformer = ManglePropertiesTransformer_1 = class ManglePropertiesTransformer extends AbstractNodeTransformer_1.AbstractNodeTransformer {
    constructor(manglePropertiesObfuscatingReplacer, randomGenerator, options) {
        super(randomGenerator, options);
        this.manglePropertiesObfuscatingReplacer = manglePropertiesObfuscatingReplacer;
    }
    static isValidPropertyNode(propertyNode, propertyKeyNode) {
        if (NodeGuards_1.NodeGuards.isIdentifierNode(propertyKeyNode) && propertyNode.computed) {
            return false;
        }
        return NodeGuards_1.NodeGuards.isIdentifierNode(propertyKeyNode) || NodeGuards_1.NodeGuards.isLiteralNode(propertyKeyNode);
    }
    getVisitor(nodeTransformationStage) {
        switch (nodeTransformationStage) {
            case NodeTransformationStage_1.NodeTransformationStage.MangleProperties:
                return {
                    enter: (node, parentNode) => {
                        if (parentNode) {
                            return this.transformNode(node, parentNode);
                        }
                        return node;
                    }
                };
            default:
                return null;
        }
    }
    transformNode(node, parentNode) {
        if (NodeGuards_1.NodeGuards.isPropertyNode(node)) {
            return this.transformPropertyNode(node);
        }
        if (NodeGuards_1.NodeGuards.isMemberExpressionNode(node)) {
            return this.transformMemberExpressionNode(node);
        }
        if (NodeGuards_1.NodeGuards.isMethodDefinitionNode(node)) {
            return this.transformMethodDefinitionNode(node);
        }
        return node;
    }
    transformPropertyNode(propertyNode) {
        const propertyKeyNode = propertyNode.key;
        if (ManglePropertiesTransformer_1.isValidPropertyNode(propertyNode, propertyKeyNode)) {
            propertyNode.key = this.manglePropertiesObfuscatingReplacer.replace(propertyKeyNode);
            propertyNode.shorthand = false;
        }
        return propertyNode;
    }
    transformMemberExpressionNode(memberExpressionNode) {
        const propertyKeyNode = memberExpressionNode.property;
        if (ManglePropertiesTransformer_1.isValidPropertyNode(memberExpressionNode, propertyKeyNode)) {
            memberExpressionNode.property = this.manglePropertiesObfuscatingReplacer.replace(propertyKeyNode);
        }
        return memberExpressionNode;
    }
    transformMethodDefinitionNode(methodDefinitionNode) {
        const propertyKeyNode = methodDefinitionNode.key;
        if (ManglePropertiesTransformer_1.isValidPropertyNode(methodDefinitionNode, propertyKeyNode)) {
            methodDefinitionNode.key = this.manglePropertiesObfuscatingReplacer.replace(propertyKeyNode);
        }
        return methodDefinitionNode;
    }
};
ManglePropertiesTransformer = ManglePropertiesTransformer_1 = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IManglePropertiesObfuscatingReplacer)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof IManglePropertiesReplacer_1.IManglePropertiesReplacer !== "undefined" && IManglePropertiesReplacer_1.IManglePropertiesReplacer) === "function" ? _a : Object, typeof (_b = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _b : Object, typeof (_c = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _c : Object])
], ManglePropertiesTransformer);
exports.ManglePropertiesTransformer = ManglePropertiesTransformer;


/***/ }),

/***/ "./src/node-transformers/mangle-properties-transformers/replacer/ManglePropertiesReplacer.ts":
/*!***************************************************************************************************!*\
  !*** ./src/node-transformers/mangle-properties-transformers/replacer/ManglePropertiesReplacer.ts ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManglePropertiesReplacer = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TIdentifierNamesGeneratorFactory_1 = __webpack_require__(/*! ../../../types/container/generators/TIdentifierNamesGeneratorFactory */ "./src/types/container/generators/TIdentifierNamesGeneratorFactory.ts");
const IOptions_1 = __webpack_require__(/*! ../../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const ReservedDomProperties_1 = __webpack_require__(/*! ../../../constants/ReservedDomProperties */ "./src/constants/ReservedDomProperties.ts");
const NodeGuards_1 = __webpack_require__(/*! ../../../node/NodeGuards */ "./src/node/NodeGuards.ts");
const NodeFactory_1 = __webpack_require__(/*! ../../../node/NodeFactory */ "./src/node/NodeFactory.ts");
let ManglePropertiesReplacer = class ManglePropertiesReplacer {
    constructor(identifierNamesGeneratorFactory, options) {
        this.mangledPropertyNamesMap = new Map();
        this.reservedDomPropertiesList = new Set(ReservedDomProperties_1.ReservedDomProperties);
        this.identifierNamesGenerator = identifierNamesGeneratorFactory(options);
        this.options = options;
    }
    replace(node) {
        if (NodeGuards_1.NodeGuards.isIdentifierNode(node)) {
            return NodeFactory_1.NodeFactory.identifierNode(this.replacePropertyName(node.name));
        }
        if (NodeGuards_1.NodeGuards.isLiteralNode(node) && typeof node.value === 'string') {
            return NodeFactory_1.NodeFactory.literalNode(this.replacePropertyName(node.value));
        }
        return node;
    }
    replacePropertyName(propertyName) {
        var _a;
        if (this.isReservedName(propertyName)) {
            return propertyName;
        }
        let mangledPropertyName = (_a = this.mangledPropertyNamesMap.get(propertyName)) !== null && _a !== void 0 ? _a : null;
        if (mangledPropertyName !== null) {
            return mangledPropertyName;
        }
        mangledPropertyName = this.identifierNamesGenerator.generateNext();
        this.mangledPropertyNamesMap.set(propertyName, mangledPropertyName);
        return mangledPropertyName;
    }
    isReservedName(name) {
        return this.isReservedOptionName(name)
            || this.isReservedDomPropertyName(name);
    }
    isReservedOptionName(name) {
        if (!this.options.reservedNames.length) {
            return false;
        }
        return this.options.reservedNames
            .some((reservedName) => {
            return new RegExp(reservedName, 'g').exec(name) !== null;
        });
    }
    isReservedDomPropertyName(name) {
        return this.reservedDomPropertiesList.has(name);
    }
};
ManglePropertiesReplacer = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory !== "undefined" && TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory) === "function" ? _a : Object, typeof (_b = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _b : Object])
], ManglePropertiesReplacer);
exports.ManglePropertiesReplacer = ManglePropertiesReplacer;


/***/ }),

/***/ "./src/node-transformers/obfuscating-transformers/LabeledStatementTransformer.ts":
/*!***************************************************************************************!*\
  !*** ./src/node-transformers/obfuscating-transformers/LabeledStatementTransformer.ts ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabeledStatementTransformer = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const estraverse = __importStar(__webpack_require__(/*! estraverse */ "estraverse"));
const TIdentifierObfuscatingReplacerFactory_1 = __webpack_require__(/*! ../../types/container/node-transformers/TIdentifierObfuscatingReplacerFactory */ "./src/types/container/node-transformers/TIdentifierObfuscatingReplacerFactory.ts");
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const IdentifierObfuscatingReplacer_1 = __webpack_require__(/*! ../../enums/node-transformers/obfuscating-transformers/obfuscating-replacers/IdentifierObfuscatingReplacer */ "./src/enums/node-transformers/obfuscating-transformers/obfuscating-replacers/IdentifierObfuscatingReplacer.ts");
const NodeTransformationStage_1 = __webpack_require__(/*! ../../enums/node-transformers/NodeTransformationStage */ "./src/enums/node-transformers/NodeTransformationStage.ts");
const AbstractNodeTransformer_1 = __webpack_require__(/*! ../AbstractNodeTransformer */ "./src/node-transformers/AbstractNodeTransformer.ts");
const NodeGuards_1 = __webpack_require__(/*! ../../node/NodeGuards */ "./src/node/NodeGuards.ts");
const NodeLexicalScopeUtils_1 = __webpack_require__(/*! ../../node/NodeLexicalScopeUtils */ "./src/node/NodeLexicalScopeUtils.ts");
let LabeledStatementTransformer = class LabeledStatementTransformer extends AbstractNodeTransformer_1.AbstractNodeTransformer {
    constructor(identifierObfuscatingReplacerFactory, randomGenerator, options) {
        super(randomGenerator, options);
        this.identifierObfuscatingReplacer = identifierObfuscatingReplacerFactory(IdentifierObfuscatingReplacer_1.IdentifierObfuscatingReplacer.BaseIdentifierObfuscatingReplacer);
    }
    getVisitor(nodeTransformationStage) {
        switch (nodeTransformationStage) {
            case NodeTransformationStage_1.NodeTransformationStage.Obfuscating:
                return {
                    enter: (node, parentNode) => {
                        if (parentNode && NodeGuards_1.NodeGuards.isLabeledStatementNode(node)) {
                            return this.transformNode(node, parentNode);
                        }
                    }
                };
            default:
                return null;
        }
    }
    transformNode(labeledStatementNode, parentNode) {
        const lexicalScopeNode = NodeLexicalScopeUtils_1.NodeLexicalScopeUtils.getLexicalScope(labeledStatementNode);
        if (!lexicalScopeNode) {
            return labeledStatementNode;
        }
        this.storeLabeledStatementName(labeledStatementNode, lexicalScopeNode);
        this.replaceLabeledStatementName(labeledStatementNode, lexicalScopeNode);
        return labeledStatementNode;
    }
    storeLabeledStatementName(labeledStatementNode, lexicalScopeNode) {
        this.identifierObfuscatingReplacer.storeLocalName(labeledStatementNode.label, lexicalScopeNode);
    }
    replaceLabeledStatementName(labeledStatementNode, lexicalScopeNode) {
        estraverse.replace(labeledStatementNode, {
            enter: (node, parentNode) => {
                if (parentNode && NodeGuards_1.NodeGuards.isLabelIdentifierNode(node, parentNode)) {
                    const newIdentifier = this.identifierObfuscatingReplacer
                        .replace(node, lexicalScopeNode);
                    node.name = newIdentifier.name;
                }
            }
        });
    }
};
LabeledStatementTransformer = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IIdentifierObfuscatingReplacer)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof TIdentifierObfuscatingReplacerFactory_1.TIdentifierObfuscatingReplacerFactory !== "undefined" && TIdentifierObfuscatingReplacerFactory_1.TIdentifierObfuscatingReplacerFactory) === "function" ? _a : Object, typeof (_b = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _b : Object, typeof (_c = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _c : Object])
], LabeledStatementTransformer);
exports.LabeledStatementTransformer = LabeledStatementTransformer;


/***/ }),

/***/ "./src/node-transformers/obfuscating-transformers/LiteralTransformer.ts":
/*!******************************************************************************!*\
  !*** ./src/node-transformers/obfuscating-transformers/LiteralTransformer.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiteralTransformer = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TLiteralObfuscatingReplacerFactory_1 = __webpack_require__(/*! ../../types/container/node-transformers/TLiteralObfuscatingReplacerFactory */ "./src/types/container/node-transformers/TLiteralObfuscatingReplacerFactory.ts");
const IEscapeSequenceEncoder_1 = __webpack_require__(/*! ../../interfaces/utils/IEscapeSequenceEncoder */ "./src/interfaces/utils/IEscapeSequenceEncoder.ts");
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const IStringArrayStorageAnalyzer_1 = __webpack_require__(/*! ../../interfaces/analyzers/string-array-storage-analyzer/IStringArrayStorageAnalyzer */ "./src/interfaces/analyzers/string-array-storage-analyzer/IStringArrayStorageAnalyzer.ts");
const LiteralObfuscatingReplacer_1 = __webpack_require__(/*! ../../enums/node-transformers/obfuscating-transformers/obfuscating-replacers/LiteralObfuscatingReplacer */ "./src/enums/node-transformers/obfuscating-transformers/obfuscating-replacers/LiteralObfuscatingReplacer.ts");
const NodeTransformationStage_1 = __webpack_require__(/*! ../../enums/node-transformers/NodeTransformationStage */ "./src/enums/node-transformers/NodeTransformationStage.ts");
const AbstractNodeTransformer_1 = __webpack_require__(/*! ../AbstractNodeTransformer */ "./src/node-transformers/AbstractNodeTransformer.ts");
const NodeFactory_1 = __webpack_require__(/*! ../../node/NodeFactory */ "./src/node/NodeFactory.ts");
const NodeGuards_1 = __webpack_require__(/*! ../../node/NodeGuards */ "./src/node/NodeGuards.ts");
const NodeLiteralUtils_1 = __webpack_require__(/*! ../../node/NodeLiteralUtils */ "./src/node/NodeLiteralUtils.ts");
const NodeMetadata_1 = __webpack_require__(/*! ../../node/NodeMetadata */ "./src/node/NodeMetadata.ts");
const NodeUtils_1 = __webpack_require__(/*! ../../node/NodeUtils */ "./src/node/NodeUtils.ts");
let LiteralTransformer = class LiteralTransformer extends AbstractNodeTransformer_1.AbstractNodeTransformer {
    constructor(literalObfuscatingReplacerFactory, randomGenerator, options, stringArrayStorageAnalyzer, escapeSequenceEncoder) {
        super(randomGenerator, options);
        this.literalObfuscatingReplacerFactory = literalObfuscatingReplacerFactory;
        this.stringArrayStorageAnalyzer = stringArrayStorageAnalyzer;
        this.escapeSequenceEncoder = escapeSequenceEncoder;
    }
    getVisitor(nodeTransformationStage) {
        switch (nodeTransformationStage) {
            case NodeTransformationStage_1.NodeTransformationStage.Obfuscating:
                return {
                    enter: (node, parentNode) => {
                        if (NodeGuards_1.NodeGuards.isProgramNode(node)) {
                            this.analyzeNode(node);
                        }
                        if (parentNode && NodeGuards_1.NodeGuards.isLiteralNode(node) && !NodeMetadata_1.NodeMetadata.isReplacedLiteral(node)) {
                            return this.transformNode(node, parentNode);
                        }
                    }
                };
            case NodeTransformationStage_1.NodeTransformationStage.Finalizing:
                return {
                    enter: (node, parentNode) => {
                        if (parentNode && NodeGuards_1.NodeGuards.isLiteralNode(node)) {
                            return this.encodeLiteralNodeToEscapeSequence(node, parentNode);
                        }
                    }
                };
            default:
                return null;
        }
    }
    analyzeNode(programNode) {
        this.stringArrayStorageAnalyzer.analyze(programNode);
    }
    transformNode(literalNode, parentNode) {
        if (NodeLiteralUtils_1.NodeLiteralUtils.isProhibitedLiteralNode(literalNode, parentNode)) {
            return literalNode;
        }
        let newLiteralNode;
        switch (typeof literalNode.value) {
            case 'boolean':
                newLiteralNode = this.literalObfuscatingReplacerFactory(LiteralObfuscatingReplacer_1.LiteralObfuscatingReplacer.BooleanLiteralObfuscatingReplacer).replace(literalNode);
                break;
            case 'number':
            case 'bigint':
                newLiteralNode = this.literalObfuscatingReplacerFactory(LiteralObfuscatingReplacer_1.LiteralObfuscatingReplacer.NumberLiteralObfuscatingReplacer).replace(literalNode);
                break;
            case 'string':
                newLiteralNode = this.literalObfuscatingReplacerFactory(LiteralObfuscatingReplacer_1.LiteralObfuscatingReplacer.StringLiteralObfuscatingReplacer).replace(literalNode);
                break;
            default:
                newLiteralNode = literalNode;
        }
        NodeUtils_1.NodeUtils.parentizeNode(newLiteralNode, parentNode);
        return newLiteralNode;
    }
    encodeLiteralNodeToEscapeSequence(literalNode, parentNode) {
        if (typeof literalNode.value !== 'string') {
            return literalNode;
        }
        return NodeFactory_1.NodeFactory.literalNode(this.escapeSequenceEncoder.encode(literalNode.value, this.options.unicodeEscapeSequence));
    }
};
LiteralTransformer = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IObfuscatingReplacer)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __param(3, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IStringArrayStorageAnalyzer)),
    __param(4, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IEscapeSequenceEncoder)),
    __metadata("design:paramtypes", [typeof (_a = typeof TLiteralObfuscatingReplacerFactory_1.TLiteralObfuscatingReplacerFactory !== "undefined" && TLiteralObfuscatingReplacerFactory_1.TLiteralObfuscatingReplacerFactory) === "function" ? _a : Object, typeof (_b = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _b : Object, typeof (_c = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _c : Object, typeof (_d = typeof IStringArrayStorageAnalyzer_1.IStringArrayStorageAnalyzer !== "undefined" && IStringArrayStorageAnalyzer_1.IStringArrayStorageAnalyzer) === "function" ? _d : Object, typeof (_e = typeof IEscapeSequenceEncoder_1.IEscapeSequenceEncoder !== "undefined" && IEscapeSequenceEncoder_1.IEscapeSequenceEncoder) === "function" ? _e : Object])
], LiteralTransformer);
exports.LiteralTransformer = LiteralTransformer;


/***/ }),

/***/ "./src/node-transformers/obfuscating-transformers/ScopeIdentifiersTransformer.ts":
/*!***************************************************************************************!*\
  !*** ./src/node-transformers/obfuscating-transformers/ScopeIdentifiersTransformer.ts ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScopeIdentifiersTransformer = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const estraverse = __importStar(__webpack_require__(/*! estraverse */ "estraverse"));
const TIdentifierObfuscatingReplacerFactory_1 = __webpack_require__(/*! ../../types/container/node-transformers/TIdentifierObfuscatingReplacerFactory */ "./src/types/container/node-transformers/TIdentifierObfuscatingReplacerFactory.ts");
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const IScopeIdentifiersTraverser_1 = __webpack_require__(/*! ../../interfaces/node/IScopeIdentifiersTraverser */ "./src/interfaces/node/IScopeIdentifiersTraverser.ts");
const IdentifierObfuscatingReplacer_1 = __webpack_require__(/*! ../../enums/node-transformers/obfuscating-transformers/obfuscating-replacers/IdentifierObfuscatingReplacer */ "./src/enums/node-transformers/obfuscating-transformers/obfuscating-replacers/IdentifierObfuscatingReplacer.ts");
const NodeTransformationStage_1 = __webpack_require__(/*! ../../enums/node-transformers/NodeTransformationStage */ "./src/enums/node-transformers/NodeTransformationStage.ts");
const AbstractNodeTransformer_1 = __webpack_require__(/*! ../AbstractNodeTransformer */ "./src/node-transformers/AbstractNodeTransformer.ts");
const NodeGuards_1 = __webpack_require__(/*! ../../node/NodeGuards */ "./src/node/NodeGuards.ts");
const NodeMetadata_1 = __webpack_require__(/*! ../../node/NodeMetadata */ "./src/node/NodeMetadata.ts");
let ScopeIdentifiersTransformer = class ScopeIdentifiersTransformer extends AbstractNodeTransformer_1.AbstractNodeTransformer {
    constructor(identifierObfuscatingReplacerFactory, randomGenerator, options, scopeIdentifiersTraverser) {
        super(randomGenerator, options);
        this.lexicalScopesWithObjectPatternWithoutDeclarationMap = new Map();
        this.identifierObfuscatingReplacer = identifierObfuscatingReplacerFactory(IdentifierObfuscatingReplacer_1.IdentifierObfuscatingReplacer.BaseIdentifierObfuscatingReplacer);
        this.scopeIdentifiersTraverser = scopeIdentifiersTraverser;
    }
    getVisitor(nodeTransformationStage) {
        switch (nodeTransformationStage) {
            case NodeTransformationStage_1.NodeTransformationStage.Obfuscating:
                return {
                    enter: (node, parentNode) => {
                        if (parentNode && NodeGuards_1.NodeGuards.isProgramNode(node)) {
                            return this.transformNode(node, parentNode);
                        }
                    }
                };
            default:
                return null;
        }
    }
    transformNode(programNode, parentNode) {
        this.scopeIdentifiersTraverser.traverse(programNode, parentNode, (data) => {
            const { isGlobalDeclaration, variable, variableLexicalScopeNode } = data;
            if (!this.options.renameGlobals && isGlobalDeclaration) {
                const isImportBindingOrCatchClauseIdentifier = variable.defs
                    .every((definition) => definition.type === 'ImportBinding'
                    || definition.type === 'CatchClause');
                if (!isImportBindingOrCatchClauseIdentifier) {
                    return;
                }
            }
            this.transformScopeVariableIdentifiers(variable, variableLexicalScopeNode, isGlobalDeclaration);
        });
        return programNode;
    }
    transformScopeVariableIdentifiers(variable, lexicalScopeNode, isGlobalDeclaration) {
        var _a;
        const firstIdentifier = (_a = variable.identifiers[0]) !== null && _a !== void 0 ? _a : null;
        if (!firstIdentifier) {
            return;
        }
        if (!this.isReplaceableIdentifierNode(firstIdentifier, lexicalScopeNode, variable)) {
            return;
        }
        this.storeIdentifierName(firstIdentifier, lexicalScopeNode, isGlobalDeclaration);
        this.replaceIdentifierName(firstIdentifier, lexicalScopeNode, variable);
    }
    storeIdentifierName(identifierNode, lexicalScopeNode, isGlobalDeclaration) {
        if (isGlobalDeclaration) {
            this.identifierObfuscatingReplacer.storeGlobalName(identifierNode, lexicalScopeNode);
        }
        else {
            this.identifierObfuscatingReplacer.storeLocalName(identifierNode, lexicalScopeNode);
        }
    }
    replaceIdentifierName(identifierNode, lexicalScopeNode, variable) {
        const newIdentifier = this.identifierObfuscatingReplacer
            .replace(identifierNode, lexicalScopeNode);
        variable.identifiers.forEach((identifier) => {
            identifier.name = newIdentifier.name;
        });
        variable.references.forEach((reference) => {
            reference.identifier.name = identifierNode.name;
        });
    }
    isReplaceableIdentifierNode(identifierNode, lexicalScopeNode, variable) {
        const parentNode = identifierNode.parentNode;
        return !!parentNode
            && !NodeMetadata_1.NodeMetadata.isIgnoredNode(identifierNode)
            && !this.isProhibitedPropertyNode(identifierNode, parentNode)
            && !this.isProhibitedClassDeclarationNameIdentifierNode(variable, identifierNode, parentNode)
            && !this.isProhibitedExportNamedClassDeclarationIdentifierNode(identifierNode, parentNode)
            && !this.isProhibitedExportNamedFunctionDeclarationIdentifierNode(identifierNode, parentNode)
            && !this.isProhibitedExportNamedVariableDeclarationIdentifierNode(identifierNode, parentNode)
            && !this.isProhibitedImportSpecifierNode(identifierNode, parentNode)
            && !this.isProhibitedVariableNameUsedInObjectPatternNode(variable, identifierNode, lexicalScopeNode)
            && !NodeGuards_1.NodeGuards.isLabelIdentifierNode(identifierNode, parentNode);
    }
    isProhibitedClassDeclarationNameIdentifierNode(variable, identifierNode, parentNode) {
        return NodeGuards_1.NodeGuards.isClassDeclarationNode(variable.scope.block)
            && NodeGuards_1.NodeGuards.isClassDeclarationNode(parentNode)
            && parentNode.id === identifierNode;
    }
    isProhibitedExportNamedClassDeclarationIdentifierNode(identifierNode, parentNode) {
        return NodeGuards_1.NodeGuards.isClassDeclarationNode(parentNode)
            && parentNode.id === identifierNode
            && !!parentNode.parentNode
            && NodeGuards_1.NodeGuards.isExportNamedDeclarationNode(parentNode.parentNode);
    }
    isProhibitedExportNamedFunctionDeclarationIdentifierNode(identifierNode, parentNode) {
        return NodeGuards_1.NodeGuards.isFunctionDeclarationNode(parentNode)
            && parentNode.id === identifierNode
            && !!parentNode.parentNode
            && NodeGuards_1.NodeGuards.isExportNamedDeclarationNode(parentNode.parentNode);
    }
    isProhibitedExportNamedVariableDeclarationIdentifierNode(identifierNode, parentNode) {
        return NodeGuards_1.NodeGuards.isVariableDeclaratorNode(parentNode)
            && parentNode.id === identifierNode
            && !!parentNode.parentNode
            && NodeGuards_1.NodeGuards.isVariableDeclarationNode(parentNode.parentNode)
            && !!parentNode.parentNode.parentNode
            && NodeGuards_1.NodeGuards.isExportNamedDeclarationNode(parentNode.parentNode.parentNode);
    }
    isProhibitedImportSpecifierNode(identifierNode, parentNode) {
        return NodeGuards_1.NodeGuards.isImportSpecifierNode(parentNode)
            && parentNode.imported.name === parentNode.local.name;
    }
    isProhibitedPropertyNode(node, parentNode) {
        const isProhibitedPropertyIdentifier = NodeGuards_1.NodeGuards.isPropertyNode(parentNode)
            && !parentNode.computed
            && parentNode.key === node;
        const isProhibitedPropertyAssignmentPatternIdentifier = NodeGuards_1.NodeGuards.isAssignmentPatternNode(parentNode)
            && parentNode.left === node
            && !!parentNode.parentNode
            && NodeGuards_1.NodeGuards.isPropertyNode(parentNode.parentNode)
            && parentNode.left === parentNode.parentNode.key;
        return isProhibitedPropertyIdentifier
            || isProhibitedPropertyAssignmentPatternIdentifier;
    }
    isProhibitedVariableNameUsedInObjectPatternNode(variable, identifierNode, lexicalScopeNode) {
        let isLexicalScopeHasObjectPatternWithoutDeclaration = this.lexicalScopesWithObjectPatternWithoutDeclarationMap.get(lexicalScopeNode);
        if (isLexicalScopeHasObjectPatternWithoutDeclaration === false) {
            return false;
        }
        const hasVarDefinitions = variable.defs.some((definition) => definition.kind === 'var');
        if (!hasVarDefinitions) {
            return false;
        }
        let isProhibitedVariableDeclaration = false;
        estraverse.traverse(lexicalScopeNode, {
            enter: (node, parentNode) => {
                if (NodeGuards_1.NodeGuards.isObjectPatternNode(node)
                    && parentNode
                    && NodeGuards_1.NodeGuards.isAssignmentExpressionNode(parentNode)) {
                    isLexicalScopeHasObjectPatternWithoutDeclaration = true;
                    const properties = node.properties;
                    for (const property of properties) {
                        if (!NodeGuards_1.NodeGuards.isPropertyNode(property)) {
                            continue;
                        }
                        if (property.computed || !property.shorthand) {
                            continue;
                        }
                        if (!NodeGuards_1.NodeGuards.isIdentifierNode(property.key)) {
                            continue;
                        }
                        if (identifierNode.name !== property.key.name) {
                            continue;
                        }
                        isProhibitedVariableDeclaration = true;
                        return estraverse.VisitorOption.Break;
                    }
                }
            }
        });
        this.lexicalScopesWithObjectPatternWithoutDeclarationMap.set(lexicalScopeNode, isLexicalScopeHasObjectPatternWithoutDeclaration !== null && isLexicalScopeHasObjectPatternWithoutDeclaration !== void 0 ? isLexicalScopeHasObjectPatternWithoutDeclaration : false);
        return isProhibitedVariableDeclaration;
    }
};
ScopeIdentifiersTransformer = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IIdentifierObfuscatingReplacer)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __param(3, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IScopeIdentifiersTraverser)),
    __metadata("design:paramtypes", [typeof (_a = typeof TIdentifierObfuscatingReplacerFactory_1.TIdentifierObfuscatingReplacerFactory !== "undefined" && TIdentifierObfuscatingReplacerFactory_1.TIdentifierObfuscatingReplacerFactory) === "function" ? _a : Object, typeof (_b = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _b : Object, typeof (_c = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _c : Object, typeof (_d = typeof IScopeIdentifiersTraverser_1.IScopeIdentifiersTraverser !== "undefined" && IScopeIdentifiersTraverser_1.IScopeIdentifiersTraverser) === "function" ? _d : Object])
], ScopeIdentifiersTransformer);
exports.ScopeIdentifiersTransformer = ScopeIdentifiersTransformer;


/***/ }),

/***/ "./src/node-transformers/obfuscating-transformers/obfuscating-replacers/AbstractObfuscatingReplacer.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/node-transformers/obfuscating-transformers/obfuscating-replacers/AbstractObfuscatingReplacer.ts ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractObfuscatingReplacer = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const IOptions_1 = __webpack_require__(/*! ../../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
let AbstractObfuscatingReplacer = class AbstractObfuscatingReplacer {
    constructor(options) {
        this.options = options;
    }
};
AbstractObfuscatingReplacer = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _a : Object])
], AbstractObfuscatingReplacer);
exports.AbstractObfuscatingReplacer = AbstractObfuscatingReplacer;


/***/ }),

/***/ "./src/node-transformers/obfuscating-transformers/obfuscating-replacers/identifier-obfuscating-replacers/BaseIdentifierObfuscatingReplacer.ts":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/node-transformers/obfuscating-transformers/obfuscating-replacers/identifier-obfuscating-replacers/BaseIdentifierObfuscatingReplacer.ts ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseIdentifierObfuscatingReplacer = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TIdentifierNamesGeneratorFactory_1 = __webpack_require__(/*! ../../../../types/container/generators/TIdentifierNamesGeneratorFactory */ "./src/types/container/generators/TIdentifierNamesGeneratorFactory.ts");
const IOptions_1 = __webpack_require__(/*! ../../../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const AbstractObfuscatingReplacer_1 = __webpack_require__(/*! ../AbstractObfuscatingReplacer */ "./src/node-transformers/obfuscating-transformers/obfuscating-replacers/AbstractObfuscatingReplacer.ts");
const NodeFactory_1 = __webpack_require__(/*! ../../../../node/NodeFactory */ "./src/node/NodeFactory.ts");
let BaseIdentifierObfuscatingReplacer = class BaseIdentifierObfuscatingReplacer extends AbstractObfuscatingReplacer_1.AbstractObfuscatingReplacer {
    constructor(identifierNamesGeneratorFactory, options) {
        super(options);
        this.blockScopesMap = new Map();
        this.identifierNamesGenerator = identifierNamesGeneratorFactory(options);
    }
    replace(identifierNode, lexicalScopeNode) {
        let identifierName = identifierNode.name;
        if (this.blockScopesMap.has(lexicalScopeNode)) {
            const namesMap = this.blockScopesMap.get(lexicalScopeNode);
            if (namesMap.has(identifierName)) {
                identifierName = namesMap.get(identifierName);
            }
        }
        return NodeFactory_1.NodeFactory.identifierNode(identifierName);
    }
    storeGlobalName(identifierNode, lexicalScopeNode) {
        const identifierName = identifierNode.name;
        if (this.isReservedName(identifierName)) {
            return;
        }
        const newIdentifierName = this.identifierNamesGenerator.generateForGlobalScope();
        if (!this.blockScopesMap.has(lexicalScopeNode)) {
            this.blockScopesMap.set(lexicalScopeNode, new Map());
        }
        const namesMap = this.blockScopesMap.get(lexicalScopeNode);
        namesMap.set(identifierName, newIdentifierName);
    }
    storeLocalName(identifierNode, lexicalScopeNode) {
        const identifierName = identifierNode.name;
        if (this.isReservedName(identifierName)) {
            return;
        }
        const newIdentifierName = this.identifierNamesGenerator.generateForLexicalScope(lexicalScopeNode);
        if (!this.blockScopesMap.has(lexicalScopeNode)) {
            this.blockScopesMap.set(lexicalScopeNode, new Map());
        }
        const namesMap = this.blockScopesMap.get(lexicalScopeNode);
        namesMap.set(identifierName, newIdentifierName);
    }
    preserveName(identifierNode) {
        this.identifierNamesGenerator.preserveName(identifierNode.name);
    }
    preserveNameForLexicalScope(identifierNode, lexicalScopeNode) {
        this.identifierNamesGenerator.preserveNameForLexicalScope(identifierNode.name, lexicalScopeNode);
    }
    isReservedName(name) {
        if (!this.options.reservedNames.length) {
            return false;
        }
        return this.options.reservedNames
            .some((reservedName) => {
            return new RegExp(reservedName, 'g').exec(name) !== null;
        });
    }
};
BaseIdentifierObfuscatingReplacer = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory !== "undefined" && TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory) === "function" ? _a : Object, typeof (_b = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _b : Object])
], BaseIdentifierObfuscatingReplacer);
exports.BaseIdentifierObfuscatingReplacer = BaseIdentifierObfuscatingReplacer;


/***/ }),

/***/ "./src/node-transformers/obfuscating-transformers/obfuscating-replacers/literal-obfuscating-replacers/BooleanLiteralObfuscatingReplacer.ts":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/node-transformers/obfuscating-transformers/obfuscating-replacers/literal-obfuscating-replacers/BooleanLiteralObfuscatingReplacer.ts ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var BooleanLiteralObfuscatingReplacer_1, _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooleanLiteralObfuscatingReplacer = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const IOptions_1 = __webpack_require__(/*! ../../../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const AbstractObfuscatingReplacer_1 = __webpack_require__(/*! ../AbstractObfuscatingReplacer */ "./src/node-transformers/obfuscating-transformers/obfuscating-replacers/AbstractObfuscatingReplacer.ts");
const NodeFactory_1 = __webpack_require__(/*! ../../../../node/NodeFactory */ "./src/node/NodeFactory.ts");
let BooleanLiteralObfuscatingReplacer = BooleanLiteralObfuscatingReplacer_1 = class BooleanLiteralObfuscatingReplacer extends AbstractObfuscatingReplacer_1.AbstractObfuscatingReplacer {
    constructor(options) {
        super(options);
    }
    static getTrueUnaryExpressionNode() {
        return NodeFactory_1.NodeFactory.unaryExpressionNode('!', BooleanLiteralObfuscatingReplacer_1.getFalseUnaryExpressionNode());
    }
    static getFalseUnaryExpressionNode() {
        return NodeFactory_1.NodeFactory.unaryExpressionNode('!', NodeFactory_1.NodeFactory.arrayExpressionNode());
    }
    replace(literalNode) {
        const literalValue = literalNode.value;
        if (typeof literalValue !== 'boolean') {
            throw new Error('`BooleanLiteralObfuscatingReplacer` should accept only literals with `boolean` value');
        }
        return literalValue
            ? BooleanLiteralObfuscatingReplacer_1.getTrueUnaryExpressionNode()
            : BooleanLiteralObfuscatingReplacer_1.getFalseUnaryExpressionNode();
    }
};
BooleanLiteralObfuscatingReplacer = BooleanLiteralObfuscatingReplacer_1 = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _a : Object])
], BooleanLiteralObfuscatingReplacer);
exports.BooleanLiteralObfuscatingReplacer = BooleanLiteralObfuscatingReplacer;


/***/ }),

/***/ "./src/node-transformers/obfuscating-transformers/obfuscating-replacers/literal-obfuscating-replacers/NumberLiteralObfuscatingReplacer.ts":
/*!************************************************************************************************************************************************!*\
  !*** ./src/node-transformers/obfuscating-transformers/obfuscating-replacers/literal-obfuscating-replacers/NumberLiteralObfuscatingReplacer.ts ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberLiteralObfuscatingReplacer = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const IOptions_1 = __webpack_require__(/*! ../../../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const AbstractObfuscatingReplacer_1 = __webpack_require__(/*! ../AbstractObfuscatingReplacer */ "./src/node-transformers/obfuscating-transformers/obfuscating-replacers/AbstractObfuscatingReplacer.ts");
const NodeFactory_1 = __webpack_require__(/*! ../../../../node/NodeFactory */ "./src/node/NodeFactory.ts");
const NumberUtils_1 = __webpack_require__(/*! ../../../../utils/NumberUtils */ "./src/utils/NumberUtils.ts");
let NumberLiteralObfuscatingReplacer = class NumberLiteralObfuscatingReplacer extends AbstractObfuscatingReplacer_1.AbstractObfuscatingReplacer {
    constructor(options) {
        super(options);
        this.numberLiteralCache = new Map();
    }
    replace(literalNode) {
        const literalValue = literalNode.value;
        if (typeof literalValue !== 'number' && typeof literalValue !== 'bigint') {
            throw new Error('`NumberLiteralObfuscatingReplacer` should accept only literals with `number` and `bigint` value');
        }
        let rawValue;
        if (this.numberLiteralCache.has(literalValue)) {
            rawValue = this.numberLiteralCache.get(literalValue);
        }
        else {
            if (NumberUtils_1.NumberUtils.isCeil(literalValue)) {
                rawValue = NumberUtils_1.NumberUtils.toHex(literalValue);
            }
            else {
                rawValue = String(literalValue);
            }
            this.numberLiteralCache.set(literalValue, rawValue);
        }
        return NodeFactory_1.NodeFactory.literalNode(literalValue, rawValue);
    }
};
NumberLiteralObfuscatingReplacer = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _a : Object])
], NumberLiteralObfuscatingReplacer);
exports.NumberLiteralObfuscatingReplacer = NumberLiteralObfuscatingReplacer;


/***/ }),

/***/ "./src/node-transformers/obfuscating-transformers/obfuscating-replacers/literal-obfuscating-replacers/StringLiteralObfuscatingReplacer.ts":
/*!************************************************************************************************************************************************!*\
  !*** ./src/node-transformers/obfuscating-transformers/obfuscating-replacers/literal-obfuscating-replacers/StringLiteralObfuscatingReplacer.ts ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var StringLiteralObfuscatingReplacer_1, _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringLiteralObfuscatingReplacer = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const IOptions_1 = __webpack_require__(/*! ../../../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IStringArrayStorage_1 = __webpack_require__(/*! ../../../../interfaces/storages/string-array-storage/IStringArrayStorage */ "./src/interfaces/storages/string-array-storage/IStringArrayStorage.ts");
const IStringArrayStorageAnalyzer_1 = __webpack_require__(/*! ../../../../interfaces/analyzers/string-array-storage-analyzer/IStringArrayStorageAnalyzer */ "./src/interfaces/analyzers/string-array-storage-analyzer/IStringArrayStorageAnalyzer.ts");
const StringArrayEncoding_1 = __webpack_require__(/*! ../../../../enums/StringArrayEncoding */ "./src/enums/StringArrayEncoding.ts");
const AbstractObfuscatingReplacer_1 = __webpack_require__(/*! ../AbstractObfuscatingReplacer */ "./src/node-transformers/obfuscating-transformers/obfuscating-replacers/AbstractObfuscatingReplacer.ts");
const NodeMetadata_1 = __webpack_require__(/*! ../../../../node/NodeMetadata */ "./src/node/NodeMetadata.ts");
const NodeFactory_1 = __webpack_require__(/*! ../../../../node/NodeFactory */ "./src/node/NodeFactory.ts");
const NumberUtils_1 = __webpack_require__(/*! ../../../../utils/NumberUtils */ "./src/utils/NumberUtils.ts");
let StringLiteralObfuscatingReplacer = StringLiteralObfuscatingReplacer_1 = class StringLiteralObfuscatingReplacer extends AbstractObfuscatingReplacer_1.AbstractObfuscatingReplacer {
    constructor(stringArrayStorage, stringArrayStorageAnalyzer, options) {
        super(options);
        this.nodesCache = new Map();
        this.stringArrayStorage = stringArrayStorage;
        this.stringArrayStorageAnalyzer = stringArrayStorageAnalyzer;
    }
    static getHexadecimalLiteralNode(hexadecimalIndex) {
        const hexadecimalLiteralNode = NodeFactory_1.NodeFactory.literalNode(hexadecimalIndex);
        NodeMetadata_1.NodeMetadata.set(hexadecimalLiteralNode, { replacedLiteral: true });
        return hexadecimalLiteralNode;
    }
    static getRc4KeyLiteralNode(literalValue) {
        const rc4KeyLiteralNode = NodeFactory_1.NodeFactory.literalNode(literalValue);
        NodeMetadata_1.NodeMetadata.set(rc4KeyLiteralNode, { replacedLiteral: true });
        return rc4KeyLiteralNode;
    }
    initialize() {
        if (this.options.shuffleStringArray) {
            this.stringArrayStorage.shuffleStorage();
        }
        if (this.options.rotateStringArray) {
            this.stringArrayStorage.rotateStorage();
        }
    }
    replace(literalNode) {
        const literalValue = literalNode.value;
        if (typeof literalValue !== 'string') {
            throw new Error('`StringLiteralObfuscatingReplacer` should accept only literals with `string` value');
        }
        const stringArrayStorageItemData = this.stringArrayStorageAnalyzer
            .getItemDataForLiteralNode(literalNode);
        const cacheKey = `${literalValue}-${Boolean(stringArrayStorageItemData)}`;
        const useCachedValue = this.nodesCache.has(cacheKey) && this.options.stringArrayEncoding !== StringArrayEncoding_1.StringArrayEncoding.Rc4;
        if (useCachedValue) {
            return this.nodesCache.get(cacheKey);
        }
        const resultNode = stringArrayStorageItemData
            ? this.replaceWithStringArrayCallNode(stringArrayStorageItemData)
            : this.replaceWithLiteralNode(literalValue);
        this.nodesCache.set(cacheKey, resultNode);
        return resultNode;
    }
    replaceWithLiteralNode(value) {
        return NodeFactory_1.NodeFactory.literalNode(value);
    }
    replaceWithStringArrayCallNode(stringArrayStorageItemData) {
        const { index, decodeKey } = stringArrayStorageItemData;
        const hexadecimalIndex = NumberUtils_1.NumberUtils.toHex(index);
        const callExpressionArgs = [
            StringLiteralObfuscatingReplacer_1.getHexadecimalLiteralNode(hexadecimalIndex)
        ];
        if (decodeKey) {
            callExpressionArgs.push(StringLiteralObfuscatingReplacer_1.getRc4KeyLiteralNode(decodeKey));
        }
        const stringArrayIdentifierNode = NodeFactory_1.NodeFactory.identifierNode(this.stringArrayStorage.getStorageCallsWrapperName());
        return NodeFactory_1.NodeFactory.callExpressionNode(stringArrayIdentifierNode, callExpressionArgs);
    }
};
__decorate([
    inversify_1.postConstruct(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StringLiteralObfuscatingReplacer.prototype, "initialize", null);
StringLiteralObfuscatingReplacer = StringLiteralObfuscatingReplacer_1 = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IStringArrayStorage)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IStringArrayStorageAnalyzer)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof IStringArrayStorage_1.IStringArrayStorage !== "undefined" && IStringArrayStorage_1.IStringArrayStorage) === "function" ? _a : Object, typeof (_b = typeof IStringArrayStorageAnalyzer_1.IStringArrayStorageAnalyzer !== "undefined" && IStringArrayStorageAnalyzer_1.IStringArrayStorageAnalyzer) === "function" ? _b : Object, typeof (_c = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _c : Object])
], StringLiteralObfuscatingReplacer);
exports.StringLiteralObfuscatingReplacer = StringLiteralObfuscatingReplacer;


/***/ }),

/***/ "./src/node-transformers/preparing-transformers/CustomCodeHelpersTransformer.ts":
/*!**************************************************************************************!*\
  !*** ./src/node-transformers/preparing-transformers/CustomCodeHelpersTransformer.ts ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomCodeHelpersTransformer = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TCustomCodeHelperGroupStorage_1 = __webpack_require__(/*! ../../types/storages/TCustomCodeHelperGroupStorage */ "./src/types/storages/TCustomCodeHelperGroupStorage.ts");
const IObfuscationEventEmitter_1 = __webpack_require__(/*! ../../interfaces/event-emitters/IObfuscationEventEmitter */ "./src/interfaces/event-emitters/IObfuscationEventEmitter.ts");
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const ICallsGraphAnalyzer_1 = __webpack_require__(/*! ../../interfaces/analyzers/calls-graph-analyzer/ICallsGraphAnalyzer */ "./src/interfaces/analyzers/calls-graph-analyzer/ICallsGraphAnalyzer.ts");
const IPrevailingKindOfVariablesAnalyzer_1 = __webpack_require__(/*! ../../interfaces/analyzers/calls-graph-analyzer/IPrevailingKindOfVariablesAnalyzer */ "./src/interfaces/analyzers/calls-graph-analyzer/IPrevailingKindOfVariablesAnalyzer.ts");
const NodeTransformer_1 = __webpack_require__(/*! ../../enums/node-transformers/NodeTransformer */ "./src/enums/node-transformers/NodeTransformer.ts");
const ObfuscationEvent_1 = __webpack_require__(/*! ../../enums/event-emitters/ObfuscationEvent */ "./src/enums/event-emitters/ObfuscationEvent.ts");
const NodeTransformationStage_1 = __webpack_require__(/*! ../../enums/node-transformers/NodeTransformationStage */ "./src/enums/node-transformers/NodeTransformationStage.ts");
const AbstractNodeTransformer_1 = __webpack_require__(/*! ../AbstractNodeTransformer */ "./src/node-transformers/AbstractNodeTransformer.ts");
const NodeGuards_1 = __webpack_require__(/*! ../../node/NodeGuards */ "./src/node/NodeGuards.ts");
let CustomCodeHelpersTransformer = class CustomCodeHelpersTransformer extends AbstractNodeTransformer_1.AbstractNodeTransformer {
    constructor(callsGraphAnalyzer, prevailingKindOfVariablesAnalyzer, obfuscationEventEmitter, customCodeHelperGroupStorage, randomGenerator, options) {
        super(randomGenerator, options);
        this.runAfter = [
            NodeTransformer_1.NodeTransformer.ParentificationTransformer,
            NodeTransformer_1.NodeTransformer.VariablePreserveTransformer
        ];
        this.callsGraphData = [];
        this.callsGraphAnalyzer = callsGraphAnalyzer;
        this.prevailingKindOfVariablesAnalyzer = prevailingKindOfVariablesAnalyzer;
        this.obfuscationEventEmitter = obfuscationEventEmitter;
        this.customCodeHelperGroupStorage = customCodeHelperGroupStorage;
    }
    getVisitor(nodeTransformationStage) {
        switch (nodeTransformationStage) {
            case NodeTransformationStage_1.NodeTransformationStage.Preparing:
                return {
                    leave: (node, parentNode) => {
                        if (NodeGuards_1.NodeGuards.isProgramNode(node)) {
                            this.analyzeNode(node, parentNode);
                            this.appendCustomNodesBeforeObfuscation(node, parentNode);
                            return this.transformNode(node, parentNode);
                        }
                    }
                };
            case NodeTransformationStage_1.NodeTransformationStage.Finalizing:
                return {
                    leave: (node, parentNode) => {
                        if (NodeGuards_1.NodeGuards.isProgramNode(node)) {
                            this.appendCustomNodesAfterObfuscation(node, parentNode);
                        }
                    }
                };
            default:
                return null;
        }
    }
    analyzeNode(node, parentNode) {
        this.callsGraphData = this.callsGraphAnalyzer.analyze(node);
        this.prevailingKindOfVariablesAnalyzer.analyze(node);
    }
    transformNode(node, parentNode) {
        return node;
    }
    appendCustomNodesBeforeObfuscation(node, parentNode) {
        this.customCodeHelperGroupStorage
            .getStorage()
            .forEach((customCodeHelperGroup) => {
            customCodeHelperGroup.initialize();
            this.obfuscationEventEmitter.once(customCodeHelperGroup.getAppendEvent(), customCodeHelperGroup.appendNodes.bind(customCodeHelperGroup));
        });
        this.obfuscationEventEmitter.emit(ObfuscationEvent_1.ObfuscationEvent.BeforeObfuscation, node, this.callsGraphData);
    }
    appendCustomNodesAfterObfuscation(node, parentNode) {
        this.obfuscationEventEmitter.emit(ObfuscationEvent_1.ObfuscationEvent.AfterObfuscation, node, this.callsGraphData);
    }
};
CustomCodeHelpersTransformer = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ICallsGraphAnalyzer)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IPrevailingKindOfVariablesAnalyzer)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IObfuscationEventEmitter)),
    __param(3, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.TCustomNodeGroupStorage)),
    __param(4, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(5, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof ICallsGraphAnalyzer_1.ICallsGraphAnalyzer !== "undefined" && ICallsGraphAnalyzer_1.ICallsGraphAnalyzer) === "function" ? _a : Object, typeof (_b = typeof IPrevailingKindOfVariablesAnalyzer_1.IPrevailingKindOfVariablesAnalyzer !== "undefined" && IPrevailingKindOfVariablesAnalyzer_1.IPrevailingKindOfVariablesAnalyzer) === "function" ? _b : Object, typeof (_c = typeof IObfuscationEventEmitter_1.IObfuscationEventEmitter !== "undefined" && IObfuscationEventEmitter_1.IObfuscationEventEmitter) === "function" ? _c : Object, typeof (_d = typeof TCustomCodeHelperGroupStorage_1.TCustomCodeHelperGroupStorage !== "undefined" && TCustomCodeHelperGroupStorage_1.TCustomCodeHelperGroupStorage) === "function" ? _d : Object, typeof (_e = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _e : Object, typeof (_f = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _f : Object])
], CustomCodeHelpersTransformer);
exports.CustomCodeHelpersTransformer = CustomCodeHelpersTransformer;


/***/ }),

/***/ "./src/node-transformers/preparing-transformers/EvalCallExpressionTransformer.ts":
/*!***************************************************************************************!*\
  !*** ./src/node-transformers/preparing-transformers/EvalCallExpressionTransformer.ts ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var EvalCallExpressionTransformer_1, _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvalCallExpressionTransformer = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const js_string_escape_1 = __importDefault(__webpack_require__(/*! js-string-escape */ "js-string-escape"));
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const NodeTransformer_1 = __webpack_require__(/*! ../../enums/node-transformers/NodeTransformer */ "./src/enums/node-transformers/NodeTransformer.ts");
const NodeTransformationStage_1 = __webpack_require__(/*! ../../enums/node-transformers/NodeTransformationStage */ "./src/enums/node-transformers/NodeTransformationStage.ts");
const AbstractNodeTransformer_1 = __webpack_require__(/*! ../AbstractNodeTransformer */ "./src/node-transformers/AbstractNodeTransformer.ts");
const NodeFactory_1 = __webpack_require__(/*! ../../node/NodeFactory */ "./src/node/NodeFactory.ts");
const NodeGuards_1 = __webpack_require__(/*! ../../node/NodeGuards */ "./src/node/NodeGuards.ts");
const NodeUtils_1 = __webpack_require__(/*! ../../node/NodeUtils */ "./src/node/NodeUtils.ts");
let EvalCallExpressionTransformer = EvalCallExpressionTransformer_1 = class EvalCallExpressionTransformer extends AbstractNodeTransformer_1.AbstractNodeTransformer {
    constructor(randomGenerator, options) {
        super(randomGenerator, options);
        this.runAfter = [
            NodeTransformer_1.NodeTransformer.ParentificationTransformer,
            NodeTransformer_1.NodeTransformer.VariablePreserveTransformer
        ];
        this.evalRootAstHostNodeSet = new Set();
    }
    static extractEvalStringFromCallExpressionArgument(node) {
        if (NodeGuards_1.NodeGuards.isLiteralNode(node)) {
            return EvalCallExpressionTransformer_1
                .extractEvalStringFromLiteralNode(node);
        }
        if (NodeGuards_1.NodeGuards.isTemplateLiteralNode(node)) {
            return EvalCallExpressionTransformer_1
                .extractEvalStringFromTemplateLiteralNode(node);
        }
        return null;
    }
    static extractEvalStringFromLiteralNode(node) {
        return typeof node.value === 'string' ? node.value : null;
    }
    static extractEvalStringFromTemplateLiteralNode(node) {
        const quasis = node.quasis;
        const allowedQuasisLength = 1;
        if (quasis.length !== allowedQuasisLength || node.expressions.length) {
            return null;
        }
        return quasis[0].value.cooked;
    }
    getVisitor(nodeTransformationStage) {
        switch (nodeTransformationStage) {
            case NodeTransformationStage_1.NodeTransformationStage.Preparing:
                return {
                    enter: (node, parentNode) => {
                        if (parentNode
                            && NodeGuards_1.NodeGuards.isCallExpressionNode(node)
                            && NodeGuards_1.NodeGuards.isIdentifierNode(node.callee)
                            && node.callee.name === 'eval') {
                            return this.transformNode(node, parentNode);
                        }
                    }
                };
            case NodeTransformationStage_1.NodeTransformationStage.Finalizing:
                if (!this.evalRootAstHostNodeSet.size) {
                    return null;
                }
                return {
                    leave: (node, parentNode) => {
                        if (parentNode && this.isEvalRootAstHostNode(node)) {
                            return this.restoreNode(node, parentNode);
                        }
                    }
                };
            default:
                return null;
        }
    }
    transformNode(callExpressionNode, parentNode) {
        const callExpressionFirstArgument = callExpressionNode.arguments[0];
        if (!callExpressionFirstArgument) {
            return callExpressionNode;
        }
        const evalString = EvalCallExpressionTransformer_1
            .extractEvalStringFromCallExpressionArgument(callExpressionFirstArgument);
        if (!evalString) {
            return callExpressionNode;
        }
        let ast;
        try {
            ast = NodeUtils_1.NodeUtils.convertCodeToStructure(evalString);
        }
        catch (_a) {
            return callExpressionNode;
        }
        const evalRootAstHostNode = NodeFactory_1.NodeFactory
            .functionExpressionNode([], NodeFactory_1.NodeFactory.blockStatementNode(ast));
        NodeUtils_1.NodeUtils.parentizeAst(evalRootAstHostNode);
        NodeUtils_1.NodeUtils.parentizeNode(evalRootAstHostNode, parentNode);
        this.evalRootAstHostNodeSet.add(evalRootAstHostNode);
        return evalRootAstHostNode;
    }
    restoreNode(evalRootAstHostNode, parentNode) {
        const targetAst = evalRootAstHostNode.body.body;
        const obfuscatedCode = NodeUtils_1.NodeUtils.convertStructureToCode(targetAst);
        return NodeFactory_1.NodeFactory.callExpressionNode(NodeFactory_1.NodeFactory.identifierNode('eval'), [
            NodeFactory_1.NodeFactory.literalNode(js_string_escape_1.default(obfuscatedCode))
        ]);
    }
    isEvalRootAstHostNode(node) {
        return NodeGuards_1.NodeGuards.isFunctionExpressionNode(node) && this.evalRootAstHostNodeSet.has(node);
    }
};
EvalCallExpressionTransformer = EvalCallExpressionTransformer_1 = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _a : Object, typeof (_b = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _b : Object])
], EvalCallExpressionTransformer);
exports.EvalCallExpressionTransformer = EvalCallExpressionTransformer;


/***/ }),

/***/ "./src/node-transformers/preparing-transformers/MetadataTransformer.ts":
/*!*****************************************************************************!*\
  !*** ./src/node-transformers/preparing-transformers/MetadataTransformer.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetadataTransformer = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const NodeTransformer_1 = __webpack_require__(/*! ../../enums/node-transformers/NodeTransformer */ "./src/enums/node-transformers/NodeTransformer.ts");
const NodeTransformationStage_1 = __webpack_require__(/*! ../../enums/node-transformers/NodeTransformationStage */ "./src/enums/node-transformers/NodeTransformationStage.ts");
const AbstractNodeTransformer_1 = __webpack_require__(/*! ../AbstractNodeTransformer */ "./src/node-transformers/AbstractNodeTransformer.ts");
const NodeGuards_1 = __webpack_require__(/*! ../../node/NodeGuards */ "./src/node/NodeGuards.ts");
const NodeMetadata_1 = __webpack_require__(/*! ../../node/NodeMetadata */ "./src/node/NodeMetadata.ts");
let MetadataTransformer = class MetadataTransformer extends AbstractNodeTransformer_1.AbstractNodeTransformer {
    constructor(randomGenerator, options) {
        super(randomGenerator, options);
        this.runAfter = [
            NodeTransformer_1.NodeTransformer.ParentificationTransformer,
            NodeTransformer_1.NodeTransformer.VariablePreserveTransformer
        ];
    }
    getVisitor(nodeTransformationStage) {
        switch (nodeTransformationStage) {
            case NodeTransformationStage_1.NodeTransformationStage.Preparing:
                return {
                    enter: (node, parentNode) => {
                        return this.transformNode(node, parentNode);
                    }
                };
            default:
                return null;
        }
    }
    transformNode(node, parentNode) {
        NodeMetadata_1.NodeMetadata.set(node, { ignoredNode: false });
        if (NodeGuards_1.NodeGuards.isLiteralNode(node)) {
            NodeMetadata_1.NodeMetadata.set(node, { replacedLiteral: false });
        }
        return node;
    }
};
MetadataTransformer = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _a : Object, typeof (_b = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _b : Object])
], MetadataTransformer);
exports.MetadataTransformer = MetadataTransformer;


/***/ }),

/***/ "./src/node-transformers/preparing-transformers/ObfuscatingGuardsTransformer.ts":
/*!**************************************************************************************!*\
  !*** ./src/node-transformers/preparing-transformers/ObfuscatingGuardsTransformer.ts ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var ObfuscatingGuardsTransformer_1, _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObfuscatingGuardsTransformer = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TObfuscatingGuardFactory_1 = __webpack_require__(/*! ../../types/container/node-transformers/TObfuscatingGuardFactory */ "./src/types/container/node-transformers/TObfuscatingGuardFactory.ts");
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const NodeTransformer_1 = __webpack_require__(/*! ../../enums/node-transformers/NodeTransformer */ "./src/enums/node-transformers/NodeTransformer.ts");
const ObfuscatingGuard_1 = __webpack_require__(/*! ../../enums/node-transformers/preparing-transformers/obfuscating-guards/ObfuscatingGuard */ "./src/enums/node-transformers/preparing-transformers/obfuscating-guards/ObfuscatingGuard.ts");
const NodeTransformationStage_1 = __webpack_require__(/*! ../../enums/node-transformers/NodeTransformationStage */ "./src/enums/node-transformers/NodeTransformationStage.ts");
const AbstractNodeTransformer_1 = __webpack_require__(/*! ../AbstractNodeTransformer */ "./src/node-transformers/AbstractNodeTransformer.ts");
const NodeGuards_1 = __webpack_require__(/*! ../../node/NodeGuards */ "./src/node/NodeGuards.ts");
const NodeMetadata_1 = __webpack_require__(/*! ../../node/NodeMetadata */ "./src/node/NodeMetadata.ts");
let ObfuscatingGuardsTransformer = ObfuscatingGuardsTransformer_1 = class ObfuscatingGuardsTransformer extends AbstractNodeTransformer_1.AbstractNodeTransformer {
    constructor(obfuscatingGuardFactory, randomGenerator, options) {
        super(randomGenerator, options);
        this.runAfter = [
            NodeTransformer_1.NodeTransformer.ParentificationTransformer,
            NodeTransformer_1.NodeTransformer.VariablePreserveTransformer
        ];
        this.obfuscatingGuards = ObfuscatingGuardsTransformer_1.obfuscatingGuardsList.map(obfuscatingGuardFactory);
    }
    getVisitor(nodeTransformationStage) {
        switch (nodeTransformationStage) {
            case NodeTransformationStage_1.NodeTransformationStage.Preparing:
                return {
                    enter: (node, parentNode) => {
                        return this.transformNode(node, parentNode);
                    }
                };
            default:
                return null;
        }
    }
    transformNode(node, parentNode) {
        const obfuscationAllowed = this.obfuscatingGuards
            .every((nodeGuard) => nodeGuard.check(node));
        NodeMetadata_1.NodeMetadata.set(node, {
            ignoredNode: !(NodeGuards_1.NodeGuards.isProgramNode(node) || obfuscationAllowed)
        });
        return node;
    }
};
ObfuscatingGuardsTransformer.obfuscatingGuardsList = [
    ObfuscatingGuard_1.ObfuscatingGuard.BlackListObfuscatingGuard,
    ObfuscatingGuard_1.ObfuscatingGuard.ConditionalCommentObfuscatingGuard,
    ObfuscatingGuard_1.ObfuscatingGuard.ReservedStringObfuscatingGuard
];
ObfuscatingGuardsTransformer = ObfuscatingGuardsTransformer_1 = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__INodeGuard)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof TObfuscatingGuardFactory_1.TObfuscatingGuardFactory !== "undefined" && TObfuscatingGuardFactory_1.TObfuscatingGuardFactory) === "function" ? _a : Object, typeof (_b = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _b : Object, typeof (_c = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _c : Object])
], ObfuscatingGuardsTransformer);
exports.ObfuscatingGuardsTransformer = ObfuscatingGuardsTransformer;


/***/ }),

/***/ "./src/node-transformers/preparing-transformers/ParentificationTransformer.ts":
/*!************************************************************************************!*\
  !*** ./src/node-transformers/preparing-transformers/ParentificationTransformer.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParentificationTransformer = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const NodeTransformationStage_1 = __webpack_require__(/*! ../../enums/node-transformers/NodeTransformationStage */ "./src/enums/node-transformers/NodeTransformationStage.ts");
const AbstractNodeTransformer_1 = __webpack_require__(/*! ../AbstractNodeTransformer */ "./src/node-transformers/AbstractNodeTransformer.ts");
const NodeUtils_1 = __webpack_require__(/*! ../../node/NodeUtils */ "./src/node/NodeUtils.ts");
let ParentificationTransformer = class ParentificationTransformer extends AbstractNodeTransformer_1.AbstractNodeTransformer {
    constructor(randomGenerator, options) {
        super(randomGenerator, options);
    }
    getVisitor(nodeTransformationStage) {
        switch (nodeTransformationStage) {
            case NodeTransformationStage_1.NodeTransformationStage.Preparing:
                return {
                    enter: (node, parentNode) => {
                        return this.transformNode(node, parentNode);
                    }
                };
            default:
                return null;
        }
    }
    transformNode(node, parentNode) {
        return NodeUtils_1.NodeUtils.parentizeNode(node, parentNode);
    }
};
ParentificationTransformer = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _a : Object, typeof (_b = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _b : Object])
], ParentificationTransformer);
exports.ParentificationTransformer = ParentificationTransformer;


/***/ }),

/***/ "./src/node-transformers/preparing-transformers/VariablePreserveTransformer.ts":
/*!*************************************************************************************!*\
  !*** ./src/node-transformers/preparing-transformers/VariablePreserveTransformer.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariablePreserveTransformer = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const TIdentifierObfuscatingReplacerFactory_1 = __webpack_require__(/*! ../../types/container/node-transformers/TIdentifierObfuscatingReplacerFactory */ "./src/types/container/node-transformers/TIdentifierObfuscatingReplacerFactory.ts");
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const IScopeIdentifiersTraverser_1 = __webpack_require__(/*! ../../interfaces/node/IScopeIdentifiersTraverser */ "./src/interfaces/node/IScopeIdentifiersTraverser.ts");
const NodeTransformer_1 = __webpack_require__(/*! ../../enums/node-transformers/NodeTransformer */ "./src/enums/node-transformers/NodeTransformer.ts");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const NodeTransformationStage_1 = __webpack_require__(/*! ../../enums/node-transformers/NodeTransformationStage */ "./src/enums/node-transformers/NodeTransformationStage.ts");
const AbstractNodeTransformer_1 = __webpack_require__(/*! ../AbstractNodeTransformer */ "./src/node-transformers/AbstractNodeTransformer.ts");
const IdentifierObfuscatingReplacer_1 = __webpack_require__(/*! ../../enums/node-transformers/obfuscating-transformers/obfuscating-replacers/IdentifierObfuscatingReplacer */ "./src/enums/node-transformers/obfuscating-transformers/obfuscating-replacers/IdentifierObfuscatingReplacer.ts");
const NodeGuards_1 = __webpack_require__(/*! ../../node/NodeGuards */ "./src/node/NodeGuards.ts");
let VariablePreserveTransformer = class VariablePreserveTransformer extends AbstractNodeTransformer_1.AbstractNodeTransformer {
    constructor(identifierObfuscatingReplacerFactory, randomGenerator, options, scopeIdentifiersTraverser) {
        super(randomGenerator, options);
        this.runAfter = [
            NodeTransformer_1.NodeTransformer.ParentificationTransformer
        ];
        this.identifierObfuscatingReplacer = identifierObfuscatingReplacerFactory(IdentifierObfuscatingReplacer_1.IdentifierObfuscatingReplacer.BaseIdentifierObfuscatingReplacer);
        this.scopeIdentifiersTraverser = scopeIdentifiersTraverser;
        this.preserveScopeVariableIdentifiers = this.preserveScopeVariableIdentifiers.bind(this);
    }
    getVisitor(nodeTransformationStage) {
        switch (nodeTransformationStage) {
            case NodeTransformationStage_1.NodeTransformationStage.Preparing:
            case NodeTransformationStage_1.NodeTransformationStage.Converting:
            case NodeTransformationStage_1.NodeTransformationStage.Obfuscating:
                return {
                    enter: (node, parentNode) => {
                        if (parentNode && NodeGuards_1.NodeGuards.isProgramNode(node)) {
                            return this.transformNode(node, parentNode);
                        }
                    }
                };
            default:
                return null;
        }
    }
    transformNode(programNode, parentNode) {
        this.scopeIdentifiersTraverser.traverse(programNode, parentNode, this.preserveScopeVariableIdentifiers);
        return programNode;
    }
    preserveScopeVariableIdentifiers(data) {
        const { isGlobalDeclaration, isBubblingDeclaration, variable, variableScope } = data;
        for (const identifier of variable.identifiers) {
            if (isGlobalDeclaration || isBubblingDeclaration) {
                this.preserveIdentifierNameForRootLexicalScope(identifier);
            }
            else {
                this.preserveIdentifierNameForLexicalScope(identifier, variableScope);
            }
        }
    }
    preserveIdentifierNameForRootLexicalScope(identifierNode) {
        this.identifierObfuscatingReplacer.preserveName(identifierNode);
    }
    preserveIdentifierNameForLexicalScope(identifierNode, variableScope) {
        const lexicalScopeNode = NodeGuards_1.NodeGuards.isNodeWithLexicalScope(variableScope.block)
            ? variableScope.block
            : null;
        if (!lexicalScopeNode) {
            return;
        }
        this.identifierObfuscatingReplacer.preserveNameForLexicalScope(identifierNode, lexicalScopeNode);
    }
};
VariablePreserveTransformer = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IIdentifierObfuscatingReplacer)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __param(3, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IScopeIdentifiersTraverser)),
    __metadata("design:paramtypes", [typeof (_a = typeof TIdentifierObfuscatingReplacerFactory_1.TIdentifierObfuscatingReplacerFactory !== "undefined" && TIdentifierObfuscatingReplacerFactory_1.TIdentifierObfuscatingReplacerFactory) === "function" ? _a : Object, typeof (_b = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _b : Object, typeof (_c = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _c : Object, typeof (_d = typeof IScopeIdentifiersTraverser_1.IScopeIdentifiersTraverser !== "undefined" && IScopeIdentifiersTraverser_1.IScopeIdentifiersTraverser) === "function" ? _d : Object])
], VariablePreserveTransformer);
exports.VariablePreserveTransformer = VariablePreserveTransformer;


/***/ }),

/***/ "./src/node-transformers/preparing-transformers/obfuscating-guards/BlackListObfuscatingGuard.ts":
/*!******************************************************************************************************!*\
  !*** ./src/node-transformers/preparing-transformers/obfuscating-guards/BlackListObfuscatingGuard.ts ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var BlackListObfuscatingGuard_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlackListObfuscatingGuard = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const NodeGuards_1 = __webpack_require__(/*! ../../../node/NodeGuards */ "./src/node/NodeGuards.ts");
let BlackListObfuscatingGuard = BlackListObfuscatingGuard_1 = class BlackListObfuscatingGuard {
    constructor() {
        this.blackListGuardsLength = BlackListObfuscatingGuard_1.blackListGuards.length;
    }
    check(node) {
        for (let i = 0; i < this.blackListGuardsLength; i++) {
            if (BlackListObfuscatingGuard_1.blackListGuards[i](node)) {
                return false;
            }
        }
        return true;
    }
};
BlackListObfuscatingGuard.blackListGuards = [
    NodeGuards_1.NodeGuards.isUseStrictOperator
];
BlackListObfuscatingGuard = BlackListObfuscatingGuard_1 = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], BlackListObfuscatingGuard);
exports.BlackListObfuscatingGuard = BlackListObfuscatingGuard;


/***/ }),

/***/ "./src/node-transformers/preparing-transformers/obfuscating-guards/ConditionalCommentObfuscatingGuard.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/node-transformers/preparing-transformers/obfuscating-guards/ConditionalCommentObfuscatingGuard.ts ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ConditionalCommentObfuscatingGuard_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConditionalCommentObfuscatingGuard = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const NodeGuards_1 = __webpack_require__(/*! ../../../node/NodeGuards */ "./src/node/NodeGuards.ts");
let ConditionalCommentObfuscatingGuard = ConditionalCommentObfuscatingGuard_1 = class ConditionalCommentObfuscatingGuard {
    constructor() {
        this.obfuscationAllowed = true;
    }
    static isConditionalComment(comment) {
        return ConditionalCommentObfuscatingGuard_1.obfuscationEnableCommentRegExp.test(comment.value) ||
            ConditionalCommentObfuscatingGuard_1.obfuscationDisableCommentRegExp.test(comment.value);
    }
    check(node) {
        if (!NodeGuards_1.NodeGuards.isNodeWithComments(node)) {
            return this.obfuscationAllowed;
        }
        const leadingComments = node.leadingComments;
        if (leadingComments) {
            this.obfuscationAllowed = this.checkComments(leadingComments);
        }
        return this.obfuscationAllowed;
    }
    checkComments(comments) {
        const commentsLength = comments.length;
        let obfuscationAllowed = this.obfuscationAllowed;
        for (let i = 0; i < commentsLength; i++) {
            const comment = comments[i];
            if (ConditionalCommentObfuscatingGuard_1.obfuscationEnableCommentRegExp.test(comment.value)) {
                obfuscationAllowed = true;
                continue;
            }
            if (ConditionalCommentObfuscatingGuard_1.obfuscationDisableCommentRegExp.test(comment.value)) {
                obfuscationAllowed = false;
            }
        }
        return obfuscationAllowed;
    }
};
ConditionalCommentObfuscatingGuard.obfuscationEnableCommentRegExp = new RegExp('javascript-obfuscator *: *enable');
ConditionalCommentObfuscatingGuard.obfuscationDisableCommentRegExp = new RegExp('javascript-obfuscator *: *disable');
ConditionalCommentObfuscatingGuard = ConditionalCommentObfuscatingGuard_1 = __decorate([
    inversify_1.injectable()
], ConditionalCommentObfuscatingGuard);
exports.ConditionalCommentObfuscatingGuard = ConditionalCommentObfuscatingGuard;


/***/ }),

/***/ "./src/node-transformers/preparing-transformers/obfuscating-guards/ReservedStringObfuscatingGuard.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/node-transformers/preparing-transformers/obfuscating-guards/ReservedStringObfuscatingGuard.ts ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservedStringObfuscatingGuard = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const IOptions_1 = __webpack_require__(/*! ../../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const NodeGuards_1 = __webpack_require__(/*! ../../../node/NodeGuards */ "./src/node/NodeGuards.ts");
let ReservedStringObfuscatingGuard = class ReservedStringObfuscatingGuard {
    constructor(options) {
        this.options = options;
    }
    check(node) {
        if (this.options.reservedStrings.length
            && NodeGuards_1.NodeGuards.isLiteralNode(node)
            && typeof node.value === 'string') {
            return !this.isReservedString(node.value);
        }
        return true;
    }
    isReservedString(value) {
        return this.options.reservedStrings
            .some((reservedString) => {
            return new RegExp(reservedString, 'g').exec(value) !== null;
        });
    }
};
ReservedStringObfuscatingGuard = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _a : Object])
], ReservedStringObfuscatingGuard);
exports.ReservedStringObfuscatingGuard = ReservedStringObfuscatingGuard;


/***/ }),

/***/ "./src/node/NodeAppender.ts":
/*!**********************************!*\
  !*** ./src/node/NodeAppender.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeAppender = void 0;
const NodeGuards_1 = __webpack_require__(/*! ./NodeGuards */ "./src/node/NodeGuards.ts");
class NodeAppender {
    static append(nodeWithStatements, statements) {
        statements = NodeAppender.parentizeScopeStatementsBeforeAppend(nodeWithStatements, statements);
        NodeAppender.setScopeStatements(nodeWithStatements, [
            ...NodeAppender.getScopeStatements(nodeWithStatements),
            ...statements
        ]);
    }
    static appendToOptimalBlockScope(callsGraphData, nodeWithStatements, bodyStatements, index = 0) {
        const targetBlockScope = callsGraphData.length
            ? NodeAppender.getOptimalBlockScope(callsGraphData, index)
            : nodeWithStatements;
        NodeAppender.prepend(targetBlockScope, bodyStatements);
    }
    static getOptimalBlockScope(callsGraphData, index, deep = Infinity) {
        const firstCall = callsGraphData[index];
        if (deep <= 0) {
            throw new Error('Invalid `deep` argument value. Value should be bigger then 0.');
        }
        if (deep > 1 && firstCall.callsGraph.length) {
            return NodeAppender.getOptimalBlockScope(firstCall.callsGraph, 0, --deep);
        }
        else {
            return firstCall.callee;
        }
    }
    static insertBefore(nodeWithStatements, statements, target) {
        const indexInScopeStatement = NodeAppender
            .getScopeStatements(nodeWithStatements)
            .indexOf(target);
        NodeAppender.insertAtIndex(nodeWithStatements, statements, indexInScopeStatement);
    }
    static insertAfter(nodeWithStatements, statements, target) {
        const indexInScopeStatement = NodeAppender
            .getScopeStatements(nodeWithStatements)
            .indexOf(target);
        NodeAppender.insertAtIndex(nodeWithStatements, statements, indexInScopeStatement + 1);
    }
    static insertAtIndex(nodeWithStatements, statements, index) {
        statements = NodeAppender.parentizeScopeStatementsBeforeAppend(nodeWithStatements, statements);
        NodeAppender.setScopeStatements(nodeWithStatements, [
            ...NodeAppender.getScopeStatements(nodeWithStatements).slice(0, index),
            ...statements,
            ...NodeAppender.getScopeStatements(nodeWithStatements).slice(index)
        ]);
    }
    static prepend(nodeWithStatements, statements) {
        statements = NodeAppender.parentizeScopeStatementsBeforeAppend(nodeWithStatements, statements);
        NodeAppender.setScopeStatements(nodeWithStatements, [
            ...statements,
            ...NodeAppender.getScopeStatements(nodeWithStatements),
        ]);
    }
    static getScopeStatements(nodeWithStatements) {
        if (NodeGuards_1.NodeGuards.isSwitchCaseNode(nodeWithStatements)) {
            return nodeWithStatements.consequent;
        }
        return nodeWithStatements.body;
    }
    static parentizeScopeStatementsBeforeAppend(nodeWithStatements, statements) {
        statements.forEach((statement) => {
            statement.parentNode = nodeWithStatements;
        });
        return statements;
    }
    static setScopeStatements(nodeWithStatements, statements) {
        if (NodeGuards_1.NodeGuards.isSwitchCaseNode(nodeWithStatements)) {
            nodeWithStatements.consequent = statements;
            return;
        }
        nodeWithStatements.body = statements;
    }
}
exports.NodeAppender = NodeAppender;


/***/ }),

/***/ "./src/node/NodeFactory.ts":
/*!*********************************!*\
  !*** ./src/node/NodeFactory.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeFactory = void 0;
const escodegen = __importStar(__webpack_require__(/*! escodegen */ "escodegen"));
const NodeType_1 = __webpack_require__(/*! ../enums/node/NodeType */ "./src/enums/node/NodeType.ts");
class NodeFactory {
    static programNode(body = []) {
        return {
            type: NodeType_1.NodeType.Program,
            body,
            sourceType: 'script',
            metadata: { ignoredNode: false }
        };
    }
    static arrayExpressionNode(elements = []) {
        return {
            type: NodeType_1.NodeType.ArrayExpression,
            elements,
            metadata: { ignoredNode: false }
        };
    }
    static assignmentExpressionNode(operator, left, right) {
        return {
            type: NodeType_1.NodeType.AssignmentExpression,
            operator,
            left,
            right,
            metadata: { ignoredNode: false }
        };
    }
    static binaryExpressionNode(operator, left, right) {
        return {
            type: NodeType_1.NodeType.BinaryExpression,
            operator,
            left,
            right,
            metadata: { ignoredNode: false }
        };
    }
    static blockStatementNode(body = []) {
        return {
            type: NodeType_1.NodeType.BlockStatement,
            body,
            metadata: { ignoredNode: false }
        };
    }
    static breakStatement(label) {
        return {
            type: NodeType_1.NodeType.BreakStatement,
            label,
            metadata: { ignoredNode: false }
        };
    }
    static callExpressionNode(callee, args = []) {
        return {
            type: NodeType_1.NodeType.CallExpression,
            callee,
            arguments: args,
            metadata: { ignoredNode: false }
        };
    }
    static continueStatement(label) {
        return {
            type: NodeType_1.NodeType.ContinueStatement,
            label,
            metadata: { ignoredNode: false }
        };
    }
    static directiveNode(expression, directive) {
        return {
            type: NodeType_1.NodeType.ExpressionStatement,
            expression,
            directive,
            metadata: { ignoredNode: false }
        };
    }
    static expressionStatementNode(expression) {
        return {
            type: NodeType_1.NodeType.ExpressionStatement,
            expression,
            metadata: { ignoredNode: false }
        };
    }
    static functionDeclarationNode(functionName, params, body) {
        return {
            type: NodeType_1.NodeType.FunctionDeclaration,
            id: NodeFactory.identifierNode(functionName),
            params,
            body,
            generator: false,
            metadata: { ignoredNode: false }
        };
    }
    static functionExpressionNode(params, body) {
        return {
            type: NodeType_1.NodeType.FunctionExpression,
            params,
            body,
            generator: false,
            metadata: { ignoredNode: false }
        };
    }
    static ifStatementNode(test, consequent, alternate) {
        return Object.assign(Object.assign({ type: NodeType_1.NodeType.IfStatement, test,
            consequent }, alternate && { alternate }), { metadata: { ignoredNode: false } });
    }
    static identifierNode(name) {
        return {
            type: NodeType_1.NodeType.Identifier,
            name,
            metadata: { ignoredNode: false }
        };
    }
    static importDeclarationNode(specifiers, source) {
        return {
            type: NodeType_1.NodeType.ImportDeclaration,
            specifiers,
            source,
            metadata: { ignoredNode: false }
        };
    }
    static literalNode(value, raw) {
        raw = raw !== undefined ? raw : `'${value}'`;
        return {
            type: NodeType_1.NodeType.Literal,
            value,
            raw,
            'x-verbatim-property': {
                content: raw,
                precedence: escodegen.Precedence.Primary
            },
            metadata: { ignoredNode: false }
        };
    }
    static logicalExpressionNode(operator, left, right) {
        return {
            type: NodeType_1.NodeType.LogicalExpression,
            operator,
            left,
            right,
            metadata: { ignoredNode: false }
        };
    }
    static memberExpressionNode(object, property, computed = false) {
        return {
            type: NodeType_1.NodeType.MemberExpression,
            computed,
            object,
            property,
            metadata: { ignoredNode: false }
        };
    }
    static objectExpressionNode(properties) {
        return {
            type: NodeType_1.NodeType.ObjectExpression,
            properties,
            metadata: { ignoredNode: false }
        };
    }
    static propertyNode(key, value, computed = false) {
        return {
            type: NodeType_1.NodeType.Property,
            key,
            value,
            kind: 'init',
            method: false,
            shorthand: false,
            computed,
            metadata: { ignoredNode: false }
        };
    }
    static returnStatementNode(argument) {
        return {
            type: NodeType_1.NodeType.ReturnStatement,
            argument,
            metadata: { ignoredNode: false }
        };
    }
    static switchStatementNode(discriminant, cases) {
        return {
            type: NodeType_1.NodeType.SwitchStatement,
            discriminant,
            cases,
            metadata: { ignoredNode: false }
        };
    }
    static switchCaseNode(test, consequent) {
        return {
            type: NodeType_1.NodeType.SwitchCase,
            test,
            consequent,
            metadata: { ignoredNode: false }
        };
    }
    static unaryExpressionNode(operator, argument, prefix = true) {
        return {
            type: NodeType_1.NodeType.UnaryExpression,
            operator,
            argument,
            prefix,
            metadata: { ignoredNode: false }
        };
    }
    static updateExpressionNode(operator, argumentExpr) {
        return {
            type: NodeType_1.NodeType.UpdateExpression,
            operator,
            argument: argumentExpr,
            prefix: false,
            metadata: { ignoredNode: false }
        };
    }
    static variableDeclarationNode(declarations = [], kind = 'var') {
        return {
            type: NodeType_1.NodeType.VariableDeclaration,
            declarations,
            kind,
            metadata: { ignoredNode: false }
        };
    }
    static variableDeclaratorNode(id, init) {
        return {
            type: NodeType_1.NodeType.VariableDeclarator,
            id,
            init,
            metadata: { ignoredNode: false }
        };
    }
    static whileStatementNode(test, body) {
        return {
            type: NodeType_1.NodeType.WhileStatement,
            test,
            body,
            metadata: { ignoredNode: false }
        };
    }
}
exports.NodeFactory = NodeFactory;


/***/ }),

/***/ "./src/node/NodeGuards.ts":
/*!********************************!*\
  !*** ./src/node/NodeGuards.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeGuards = void 0;
const NodeType_1 = __webpack_require__(/*! ../enums/node/NodeType */ "./src/enums/node/NodeType.ts");
class NodeGuards {
    static isArrayPatternNode(node) {
        return node.type === NodeType_1.NodeType.ArrayPattern;
    }
    static isArrowFunctionExpressionNode(node) {
        return node.type === NodeType_1.NodeType.ArrowFunctionExpression;
    }
    static isAssignmentExpressionNode(node) {
        return node.type === NodeType_1.NodeType.AssignmentExpression;
    }
    static isAssignmentPatternNode(node) {
        return node.type === NodeType_1.NodeType.AssignmentPattern;
    }
    static isAwaitExpressionNode(node) {
        return node.type === NodeType_1.NodeType.AwaitExpression;
    }
    static isBigIntLiteralNode(node) {
        return NodeGuards.isLiteralNode(node) && !!node.bigint;
    }
    static isBlockStatementNode(node) {
        return node.type === NodeType_1.NodeType.BlockStatement;
    }
    static isBreakStatementNode(node) {
        return node.type === NodeType_1.NodeType.BreakStatement;
    }
    static isCallExpressionNode(node) {
        return node.type === NodeType_1.NodeType.CallExpression;
    }
    static isClassDeclarationNode(node) {
        return node.type === NodeType_1.NodeType.ClassDeclaration && node.id !== null;
    }
    static isContinueStatementNode(node) {
        return node.type === NodeType_1.NodeType.ContinueStatement;
    }
    static isDirectiveNode(node) {
        return node.type === NodeType_1.NodeType.ExpressionStatement
            && 'directive' in node;
    }
    static isExportNamedDeclarationNode(node) {
        return node.type === NodeType_1.NodeType.ExportNamedDeclaration;
    }
    static isExpressionStatementNode(node) {
        return node.type === NodeType_1.NodeType.ExpressionStatement
            && !('directive' in node);
    }
    static isFunctionNode(node) {
        return NodeGuards.isFunctionDeclarationNode(node) ||
            NodeGuards.isFunctionExpressionNode(node) ||
            NodeGuards.isArrowFunctionExpressionNode(node);
    }
    static isFunctionDeclarationNode(node) {
        return node.type === NodeType_1.NodeType.FunctionDeclaration && node.id !== null;
    }
    static isFunctionExpressionNode(node) {
        return node.type === NodeType_1.NodeType.FunctionExpression;
    }
    static isIdentifierNode(node) {
        return node.type === NodeType_1.NodeType.Identifier;
    }
    static isImportDeclarationNode(node) {
        return node.type === NodeType_1.NodeType.ImportDeclaration;
    }
    static isImportSpecifierNode(node) {
        return node.type === NodeType_1.NodeType.ImportSpecifier;
    }
    static isLabelIdentifierNode(node, parentNode) {
        const parentNodeIsLabeledStatementNode = NodeGuards.isLabeledStatementNode(parentNode) && parentNode.label === node;
        const parentNodeIsContinueStatementNode = NodeGuards.isContinueStatementNode(parentNode) && parentNode.label === node;
        const parentNodeIsBreakStatementNode = NodeGuards.isBreakStatementNode(parentNode) && parentNode.label === node;
        return parentNodeIsLabeledStatementNode || parentNodeIsContinueStatementNode || parentNodeIsBreakStatementNode;
    }
    static isLabeledStatementNode(node) {
        return node.type === NodeType_1.NodeType.LabeledStatement;
    }
    static isLiteralNode(node) {
        return node.type === NodeType_1.NodeType.Literal;
    }
    static isMemberExpressionNode(node) {
        return node.type === NodeType_1.NodeType.MemberExpression;
    }
    static isMethodDefinitionNode(node) {
        return node.type === NodeType_1.NodeType.MethodDefinition;
    }
    static isNode(object) {
        return object && !object.type !== undefined;
    }
    static isNodeWithLexicalScope(node) {
        return NodeGuards.isProgramNode(node) || NodeGuards.isFunctionNode(node);
    }
    static isNodeWithBlockLexicalScope(node) {
        return NodeGuards.isNodeWithLexicalScope(node) || NodeGuards.isBlockStatementNode(node);
    }
    static isNodeWithLexicalScopeStatements(node, parentNode) {
        return NodeGuards.isProgramNode(node)
            || (NodeGuards.isBlockStatementNode(node) && NodeGuards.nodesWithLexicalStatements.includes(parentNode.type));
    }
    static isNodeWithStatements(node) {
        return NodeGuards.isProgramNode(node)
            || NodeGuards.isBlockStatementNode(node)
            || NodeGuards.isSwitchCaseNode(node);
    }
    static isNodeWithComments(node) {
        return Boolean(node.leadingComments) || Boolean(node.trailingComments);
    }
    static isObjectPatternNode(node) {
        return node.type === NodeType_1.NodeType.ObjectPattern;
    }
    static isObjectExpressionNode(node) {
        return node.type === NodeType_1.NodeType.ObjectExpression;
    }
    static isProgramNode(node) {
        return node.type === NodeType_1.NodeType.Program;
    }
    static isPropertyNode(node) {
        return node.type === NodeType_1.NodeType.Property;
    }
    static isRestElementNode(node) {
        return node.type === NodeType_1.NodeType.RestElement;
    }
    static isReturnStatementNode(node) {
        return node.type === NodeType_1.NodeType.ReturnStatement;
    }
    static isSequenceExpressionNode(node) {
        return node.type === NodeType_1.NodeType.SequenceExpression;
    }
    static isSuperNode(node) {
        return node.type === NodeType_1.NodeType.Super;
    }
    static isSwitchCaseNode(node) {
        return node.type === NodeType_1.NodeType.SwitchCase;
    }
    static isTaggedTemplateExpressionNode(node) {
        return node.type === NodeType_1.NodeType.TaggedTemplateExpression;
    }
    static isTemplateLiteralNode(node) {
        return node.type === NodeType_1.NodeType.TemplateLiteral;
    }
    static isUnaryExpressionNode(node) {
        return node.type === NodeType_1.NodeType.UnaryExpression;
    }
    static isUseStrictOperator(node) {
        return NodeGuards.isDirectiveNode(node)
            && node.directive === 'use strict';
    }
    static isVariableDeclarationNode(node) {
        return node.type === NodeType_1.NodeType.VariableDeclaration;
    }
    static isVariableDeclaratorNode(node) {
        return node.type === NodeType_1.NodeType.VariableDeclarator;
    }
    static isWhileStatementNode(node) {
        return node.type === NodeType_1.NodeType.WhileStatement;
    }
}
exports.NodeGuards = NodeGuards;
NodeGuards.nodesWithLexicalStatements = [
    NodeType_1.NodeType.ArrowFunctionExpression,
    NodeType_1.NodeType.FunctionDeclaration,
    NodeType_1.NodeType.FunctionExpression,
    NodeType_1.NodeType.MethodDefinition,
];


/***/ }),

/***/ "./src/node/NodeLexicalScopeUtils.ts":
/*!*******************************************!*\
  !*** ./src/node/NodeLexicalScopeUtils.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeLexicalScopeUtils = void 0;
const NodeGuards_1 = __webpack_require__(/*! ./NodeGuards */ "./src/node/NodeGuards.ts");
class NodeLexicalScopeUtils {
    static getLexicalScope(node) {
        return NodeLexicalScopeUtils.getLexicalScopesRecursive(node, 1)[0];
    }
    static getLexicalScopes(node) {
        return NodeLexicalScopeUtils.getLexicalScopesRecursive(node);
    }
    static getLexicalScopesRecursive(node, maxSize = Infinity, nodesWithLexicalScope = [], depth = 0) {
        if (nodesWithLexicalScope.length >= maxSize) {
            return nodesWithLexicalScope;
        }
        const parentNode = node.parentNode;
        if (!parentNode) {
            throw new ReferenceError('`parentNode` property of given node is `undefined`');
        }
        if (NodeGuards_1.NodeGuards.isNodeWithLexicalScope(node)) {
            nodesWithLexicalScope.push(node);
        }
        if (node !== parentNode) {
            return NodeLexicalScopeUtils.getLexicalScopesRecursive(parentNode, maxSize, nodesWithLexicalScope, ++depth);
        }
        return nodesWithLexicalScope;
    }
}
exports.NodeLexicalScopeUtils = NodeLexicalScopeUtils;


/***/ }),

/***/ "./src/node/NodeLiteralUtils.ts":
/*!**************************************!*\
  !*** ./src/node/NodeLiteralUtils.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeLiteralUtils = void 0;
const NodeGuards_1 = __webpack_require__(/*! ./NodeGuards */ "./src/node/NodeGuards.ts");
class NodeLiteralUtils {
    static isProhibitedLiteralNode(literalNode, parentNode) {
        if (NodeGuards_1.NodeGuards.isPropertyNode(parentNode) && !parentNode.computed && parentNode.key === literalNode) {
            return true;
        }
        if (NodeGuards_1.NodeGuards.isImportDeclarationNode(parentNode)) {
            return true;
        }
        return false;
    }
}
exports.NodeLiteralUtils = NodeLiteralUtils;


/***/ }),

/***/ "./src/node/NodeMetadata.ts":
/*!**********************************!*\
  !*** ./src/node/NodeMetadata.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeMetadata = void 0;
class NodeMetadata {
    static set(node, metadata) {
        var _a;
        node.metadata = Object.assign((_a = node.metadata) !== null && _a !== void 0 ? _a : {}, metadata);
    }
    static get(node, metadataKey) {
        return node.metadata !== undefined
            ? node.metadata[metadataKey]
            : undefined;
    }
    static isIgnoredNode(node) {
        return NodeMetadata.get(node, 'ignoredNode') === true;
    }
    static isReplacedLiteral(literalNode) {
        return NodeMetadata.get(literalNode, 'replacedLiteral') === true;
    }
}
exports.NodeMetadata = NodeMetadata;


/***/ }),

/***/ "./src/node/NodeStatementUtils.ts":
/*!****************************************!*\
  !*** ./src/node/NodeStatementUtils.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeStatementUtils = void 0;
const NodeGuards_1 = __webpack_require__(/*! ./NodeGuards */ "./src/node/NodeGuards.ts");
class NodeStatementUtils {
    static getParentNodeWithStatements(node) {
        return NodeStatementUtils.getParentNodesWithStatementsRecursive(node, 1)[0];
    }
    static getParentNodesWithStatements(node) {
        return NodeStatementUtils.getParentNodesWithStatementsRecursive(node);
    }
    static getNextSiblingStatement(statement) {
        return NodeStatementUtils.getSiblingStatementByOffset(statement, 1);
    }
    static getPreviousSiblingStatement(statement) {
        return NodeStatementUtils.getSiblingStatementByOffset(statement, -1);
    }
    static getRootStatementOfNode(node) {
        if (NodeGuards_1.NodeGuards.isProgramNode(node)) {
            throw new Error('Unable to find root statement for `Program` node');
        }
        const parentNode = node.parentNode;
        if (!parentNode) {
            throw new ReferenceError('`parentNode` property of given node is `undefined`');
        }
        if (!NodeGuards_1.NodeGuards.isNodeWithStatements(parentNode)) {
            return NodeStatementUtils.getRootStatementOfNode(parentNode);
        }
        return node;
    }
    static getScopeOfNode(node) {
        const parentNode = node.parentNode;
        if (!parentNode) {
            throw new ReferenceError('`parentNode` property of given node is `undefined`');
        }
        if (!NodeGuards_1.NodeGuards.isNodeWithStatements(parentNode)) {
            return NodeStatementUtils.getScopeOfNode(parentNode);
        }
        return parentNode;
    }
    static getParentNodesWithStatementsRecursive(node, maxSize = Infinity, nodesWithStatements = [], depth = 0) {
        if (nodesWithStatements.length >= maxSize) {
            return nodesWithStatements;
        }
        const parentNode = node.parentNode;
        if (!parentNode) {
            throw new ReferenceError('`parentNode` property of given node is `undefined`');
        }
        if (NodeGuards_1.NodeGuards.isProgramNode(node) ||
            (NodeGuards_1.NodeGuards.isNodeWithLexicalScopeStatements(node, parentNode) && depth > 0)) {
            nodesWithStatements.push(node);
        }
        if (node !== parentNode) {
            return NodeStatementUtils.getParentNodesWithStatementsRecursive(parentNode, maxSize, nodesWithStatements, ++depth);
        }
        return nodesWithStatements;
    }
    static getSiblingStatementByOffset(statement, offset) {
        const scopeNode = NodeStatementUtils.getScopeOfNode(statement);
        const scopeBody = !NodeGuards_1.NodeGuards.isSwitchCaseNode(scopeNode)
            ? scopeNode.body
            : scopeNode.consequent;
        const indexInScope = scopeBody.indexOf(statement);
        return scopeBody[indexInScope + offset] || null;
    }
}
exports.NodeStatementUtils = NodeStatementUtils;


/***/ }),

/***/ "./src/node/NodeUtils.ts":
/*!*******************************!*\
  !*** ./src/node/NodeUtils.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeUtils = void 0;
const escodegen = __importStar(__webpack_require__(/*! escodegen */ "escodegen"));
const estraverse = __importStar(__webpack_require__(/*! estraverse */ "estraverse"));
const EcmaVersion_1 = __webpack_require__(/*! ../constants/EcmaVersion */ "./src/constants/EcmaVersion.ts");
const ASTParserFacade_1 = __webpack_require__(/*! ../ASTParserFacade */ "./src/ASTParserFacade.ts");
const NodeGuards_1 = __webpack_require__(/*! ./NodeGuards */ "./src/node/NodeGuards.ts");
const NodeMetadata_1 = __webpack_require__(/*! ./NodeMetadata */ "./src/node/NodeMetadata.ts");
class NodeUtils {
    static addXVerbatimPropertyTo(literalNode) {
        literalNode['x-verbatim-property'] = {
            content: literalNode.raw,
            precedence: escodegen.Precedence.Primary
        };
        return literalNode;
    }
    static clone(astTree) {
        return NodeUtils.parentizeAst(NodeUtils.cloneRecursive(astTree));
    }
    static convertCodeToStructure(code) {
        const structure = ASTParserFacade_1.ASTParserFacade.parse(code, {
            ecmaVersion: EcmaVersion_1.ecmaVersion,
            sourceType: 'script'
        });
        estraverse.replace(structure, {
            enter: (node, parentNode) => {
                NodeUtils.parentizeNode(node, parentNode);
                if (NodeGuards_1.NodeGuards.isLiteralNode(node)) {
                    NodeUtils.addXVerbatimPropertyTo(node);
                }
                NodeMetadata_1.NodeMetadata.set(node, { ignoredNode: false });
                return node;
            }
        });
        return structure.body;
    }
    static convertStructureToCode(structure) {
        return structure.reduce((code, node) => {
            return code + escodegen.generate(node, {
                sourceMapWithCode: true
            }).code;
        }, '');
    }
    static getUnaryExpressionArgumentNode(unaryExpressionNode) {
        if (NodeGuards_1.NodeGuards.isUnaryExpressionNode(unaryExpressionNode.argument)) {
            return NodeUtils.getUnaryExpressionArgumentNode(unaryExpressionNode.argument);
        }
        return unaryExpressionNode.argument;
    }
    static parentizeAst(astTree) {
        var _a;
        const parentNode = (_a = astTree.parentNode) !== null && _a !== void 0 ? _a : null;
        estraverse.replace(astTree, {
            enter: NodeUtils.parentizeNode
        });
        if (parentNode) {
            astTree.parentNode = parentNode;
        }
        return astTree;
    }
    static parentizeNode(node, parentNode) {
        node.parentNode = parentNode !== null && parentNode !== void 0 ? parentNode : node;
        return node;
    }
    static cloneRecursive(node) {
        if (node === null) {
            return node;
        }
        const copy = {};
        const nodeKeys = Object.keys(node);
        nodeKeys
            .forEach((property) => {
            if (property === 'parentNode') {
                return;
            }
            const value = node[property];
            let clonedValue;
            if (value === null || value instanceof RegExp) {
                clonedValue = value;
            }
            else if (Array.isArray(value)) {
                clonedValue = value.map(NodeUtils.cloneRecursive);
            }
            else if (typeof value === 'object') {
                clonedValue = NodeUtils.cloneRecursive(value);
            }
            else {
                clonedValue = value;
            }
            copy[property] = clonedValue;
        });
        return copy;
    }
}
exports.NodeUtils = NodeUtils;


/***/ }),

/***/ "./src/node/ScopeIdentifiersTraverser.ts":
/*!***********************************************!*\
  !*** ./src/node/ScopeIdentifiersTraverser.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var ScopeIdentifiersTraverser_1, _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScopeIdentifiersTraverser = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const IScopeAnalyzer_1 = __webpack_require__(/*! ../interfaces/analyzers/scope-analyzer/IScopeAnalyzer */ "./src/interfaces/analyzers/scope-analyzer/IScopeAnalyzer.ts");
const NodeGuards_1 = __webpack_require__(/*! ./NodeGuards */ "./src/node/NodeGuards.ts");
let ScopeIdentifiersTraverser = ScopeIdentifiersTraverser_1 = class ScopeIdentifiersTraverser {
    constructor(scopeAnalyzer) {
        this.scopeAnalyzer = scopeAnalyzer;
    }
    traverse(programNode, parentNode, callback) {
        this.scopeAnalyzer.analyze(programNode);
        const globalScope = this.scopeAnalyzer.acquireScope(programNode);
        this.traverseScopeVariables(globalScope, globalScope, callback);
    }
    traverseScopeVariables(rootScope, currentScope, callback) {
        const variableScope = currentScope.variableScope;
        const variableLexicalScopeNode = NodeGuards_1.NodeGuards.isNodeWithBlockLexicalScope(variableScope.block)
            ? variableScope.block
            : null;
        const isGlobalDeclaration = ScopeIdentifiersTraverser_1.globalScopeNames.includes(variableScope.type);
        if (!variableLexicalScopeNode) {
            return;
        }
        for (const variable of currentScope.variables) {
            if (variable.name === ScopeIdentifiersTraverser_1.argumentsVariableName) {
                continue;
            }
            const isBubblingDeclaration = variable
                .identifiers
                .some((identifier) => identifier.parentNode
                && NodeGuards_1.NodeGuards.isPropertyNode(identifier.parentNode)
                && identifier.parentNode.shorthand);
            callback({
                isGlobalDeclaration,
                isBubblingDeclaration,
                rootScope,
                variable,
                variableScope,
                variableLexicalScopeNode
            });
        }
        for (const childScope of currentScope.childScopes) {
            this.traverseScopeVariables(rootScope, childScope, callback);
        }
    }
};
ScopeIdentifiersTraverser.argumentsVariableName = 'arguments';
ScopeIdentifiersTraverser.globalScopeNames = [
    'global',
    'module'
];
ScopeIdentifiersTraverser = ScopeIdentifiersTraverser_1 = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IScopeAnalyzer)),
    __metadata("design:paramtypes", [typeof (_a = typeof IScopeAnalyzer_1.IScopeAnalyzer !== "undefined" && IScopeAnalyzer_1.IScopeAnalyzer) === "function" ? _a : Object])
], ScopeIdentifiersTraverser);
exports.ScopeIdentifiersTraverser = ScopeIdentifiersTraverser;


/***/ }),

/***/ "./src/options/Options.ts":
/*!********************************!*\
  !*** ./src/options/Options.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var Options_1, _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Options = void 0;
const tsenum_1 = __webpack_require__(/*! @gradecam/tsenum */ "@gradecam/tsenum");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const TInputOptions_1 = __webpack_require__(/*! ../types/options/TInputOptions */ "./src/types/options/TInputOptions.ts");
const TStringArrayEncoding_1 = __webpack_require__(/*! ../types/options/TStringArrayEncoding */ "./src/types/options/TStringArrayEncoding.ts");
const IOptionsNormalizer_1 = __webpack_require__(/*! ../interfaces/options/IOptionsNormalizer */ "./src/interfaces/options/IOptionsNormalizer.ts");
const IdentifierNamesGenerator_1 = __webpack_require__(/*! ../enums/generators/identifier-names-generators/IdentifierNamesGenerator */ "./src/enums/generators/identifier-names-generators/IdentifierNamesGenerator.ts");
const ObfuscationTarget_1 = __webpack_require__(/*! ../enums/ObfuscationTarget */ "./src/enums/ObfuscationTarget.ts");
const SourceMapMode_1 = __webpack_require__(/*! ../enums/source-map/SourceMapMode */ "./src/enums/source-map/SourceMapMode.ts");
const StringArrayEncoding_1 = __webpack_require__(/*! ../enums/StringArrayEncoding */ "./src/enums/StringArrayEncoding.ts");
const Default_1 = __webpack_require__(/*! ./presets/Default */ "./src/options/presets/Default.ts");
const ValidationErrorsFormatter_1 = __webpack_require__(/*! ./ValidationErrorsFormatter */ "./src/options/ValidationErrorsFormatter.ts");
const IsAllowedForObfuscationTargets_1 = __webpack_require__(/*! ./validators/IsAllowedForObfuscationTargets */ "./src/options/validators/IsAllowedForObfuscationTargets.ts");
let Options = Options_1 = class Options {
    constructor(inputOptions, optionsNormalizer) {
        Object.assign(this, Default_1.DEFAULT_PRESET, inputOptions);
        const errors = class_validator_1.validateSync(this, Options_1.validatorOptions);
        if (errors.length) {
            throw new ReferenceError(`Validation failed. errors:\n${ValidationErrorsFormatter_1.ValidationErrorsFormatter.format(errors)}`);
        }
        Object.assign(this, optionsNormalizer.normalize(this));
    }
};
Options.validatorOptions = {
    validationError: {
        target: false
    }
};
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], Options.prototype, "compact", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], Options.prototype, "controlFlowFlattening", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.Min(0),
    class_validator_1.Max(1),
    __metadata("design:type", Number)
], Options.prototype, "controlFlowFlatteningThreshold", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], Options.prototype, "deadCodeInjection", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], Options.prototype, "deadCodeInjectionThreshold", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], Options.prototype, "debugProtection", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], Options.prototype, "debugProtectionInterval", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], Options.prototype, "disableConsoleOutput", void 0);
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.ArrayUnique(),
    class_validator_1.IsString({
        each: true
    }),
    IsAllowedForObfuscationTargets_1.IsAllowedForObfuscationTargets([
        ObfuscationTarget_1.ObfuscationTarget.Browser,
        ObfuscationTarget_1.ObfuscationTarget.BrowserNoEval,
    ]),
    __metadata("design:type", Array)
], Options.prototype, "domainLock", void 0);
__decorate([
    class_validator_1.IsIn([
        IdentifierNamesGenerator_1.IdentifierNamesGenerator.DictionaryIdentifierNamesGenerator,
        IdentifierNamesGenerator_1.IdentifierNamesGenerator.HexadecimalIdentifierNamesGenerator,
        IdentifierNamesGenerator_1.IdentifierNamesGenerator.MangledIdentifierNamesGenerator
    ]),
    __metadata("design:type", typeof (_a = typeof tsenum_1.TypeFromEnum !== "undefined" && tsenum_1.TypeFromEnum) === "function" ? _a : Object)
], Options.prototype, "identifierNamesGenerator", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], Options.prototype, "identifiersPrefix", void 0);
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.ArrayUnique(),
    class_validator_1.IsString({
        each: true
    }),
    class_validator_1.ValidateIf((options) => options.identifierNamesGenerator === IdentifierNamesGenerator_1.IdentifierNamesGenerator.DictionaryIdentifierNamesGenerator),
    class_validator_1.ArrayNotEmpty(),
    __metadata("design:type", Array)
], Options.prototype, "identifiersDictionary", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], Options.prototype, "inputFileName", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], Options.prototype, "log", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], Options.prototype, "renameGlobals", void 0);
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.ArrayUnique(),
    class_validator_1.IsString({
        each: true
    }),
    __metadata("design:type", Array)
], Options.prototype, "reservedNames", void 0);
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.ArrayUnique(),
    class_validator_1.IsString({
        each: true
    }),
    __metadata("design:type", Array)
], Options.prototype, "reservedStrings", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], Options.prototype, "rotateStringArray", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], Options.prototype, "selfDefending", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], Options.prototype, "shuffleStringArray", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], Options.prototype, "sourceMap", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.ValidateIf((options) => Boolean(options.sourceMapBaseUrl)),
    class_validator_1.IsUrl({
        require_protocol: true,
        require_tld: false,
        require_valid_protocol: true
    }),
    __metadata("design:type", String)
], Options.prototype, "sourceMapBaseUrl", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], Options.prototype, "sourceMapFileName", void 0);
__decorate([
    class_validator_1.IsIn([SourceMapMode_1.SourceMapMode.Inline, SourceMapMode_1.SourceMapMode.Separate]),
    __metadata("design:type", typeof (_b = typeof tsenum_1.TypeFromEnum !== "undefined" && tsenum_1.TypeFromEnum) === "function" ? _b : Object)
], Options.prototype, "sourceMapMode", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], Options.prototype, "splitStrings", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.ValidateIf((options) => Boolean(options.splitStrings)),
    class_validator_1.Min(1),
    __metadata("design:type", Number)
], Options.prototype, "splitStringsChunkLength", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], Options.prototype, "stringArray", void 0);
__decorate([
    class_validator_1.IsIn([true, false, StringArrayEncoding_1.StringArrayEncoding.Base64, StringArrayEncoding_1.StringArrayEncoding.Rc4]),
    __metadata("design:type", typeof (_c = typeof TStringArrayEncoding_1.TStringArrayEncoding !== "undefined" && TStringArrayEncoding_1.TStringArrayEncoding) === "function" ? _c : Object)
], Options.prototype, "stringArrayEncoding", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.Min(0),
    class_validator_1.Max(1),
    __metadata("design:type", Number)
], Options.prototype, "stringArrayThreshold", void 0);
__decorate([
    class_validator_1.IsIn([ObfuscationTarget_1.ObfuscationTarget.Browser, ObfuscationTarget_1.ObfuscationTarget.BrowserNoEval, ObfuscationTarget_1.ObfuscationTarget.Node]),
    __metadata("design:type", typeof (_d = typeof tsenum_1.TypeFromEnum !== "undefined" && tsenum_1.TypeFromEnum) === "function" ? _d : Object)
], Options.prototype, "target", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], Options.prototype, "transformObjectKeys", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], Options.prototype, "unicodeEscapeSequence", void 0);
Options = Options_1 = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.TInputOptions)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptionsNormalizer)),
    __metadata("design:paramtypes", [typeof (_e = typeof TInputOptions_1.TInputOptions !== "undefined" && TInputOptions_1.TInputOptions) === "function" ? _e : Object, typeof (_f = typeof IOptionsNormalizer_1.IOptionsNormalizer !== "undefined" && IOptionsNormalizer_1.IOptionsNormalizer) === "function" ? _f : Object])
], Options);
exports.Options = Options;


/***/ }),

/***/ "./src/options/OptionsNormalizer.ts":
/*!******************************************!*\
  !*** ./src/options/OptionsNormalizer.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var OptionsNormalizer_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionsNormalizer = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ControlFlowFlatteningThresholdRule_1 = __webpack_require__(/*! ./normalizer-rules/ControlFlowFlatteningThresholdRule */ "./src/options/normalizer-rules/ControlFlowFlatteningThresholdRule.ts");
const DeadCodeInjectionRule_1 = __webpack_require__(/*! ./normalizer-rules/DeadCodeInjectionRule */ "./src/options/normalizer-rules/DeadCodeInjectionRule.ts");
const DeadCodeInjectionThresholdRule_1 = __webpack_require__(/*! ./normalizer-rules/DeadCodeInjectionThresholdRule */ "./src/options/normalizer-rules/DeadCodeInjectionThresholdRule.ts");
const DomainLockRule_1 = __webpack_require__(/*! ./normalizer-rules/DomainLockRule */ "./src/options/normalizer-rules/DomainLockRule.ts");
const InputFileNameRule_1 = __webpack_require__(/*! ./normalizer-rules/InputFileNameRule */ "./src/options/normalizer-rules/InputFileNameRule.ts");
const SeedRule_1 = __webpack_require__(/*! ./normalizer-rules/SeedRule */ "./src/options/normalizer-rules/SeedRule.ts");
const SelfDefendingRule_1 = __webpack_require__(/*! ./normalizer-rules/SelfDefendingRule */ "./src/options/normalizer-rules/SelfDefendingRule.ts");
const SourceMapBaseUrlRule_1 = __webpack_require__(/*! ./normalizer-rules/SourceMapBaseUrlRule */ "./src/options/normalizer-rules/SourceMapBaseUrlRule.ts");
const SourceMapFileNameRule_1 = __webpack_require__(/*! ./normalizer-rules/SourceMapFileNameRule */ "./src/options/normalizer-rules/SourceMapFileNameRule.ts");
const SplitStringsChunkLengthRule_1 = __webpack_require__(/*! ./normalizer-rules/SplitStringsChunkLengthRule */ "./src/options/normalizer-rules/SplitStringsChunkLengthRule.ts");
const StringArrayRule_1 = __webpack_require__(/*! ./normalizer-rules/StringArrayRule */ "./src/options/normalizer-rules/StringArrayRule.ts");
const StringArrayEncodingRule_1 = __webpack_require__(/*! ./normalizer-rules/StringArrayEncodingRule */ "./src/options/normalizer-rules/StringArrayEncodingRule.ts");
const StringArrayThresholdRule_1 = __webpack_require__(/*! ./normalizer-rules/StringArrayThresholdRule */ "./src/options/normalizer-rules/StringArrayThresholdRule.ts");
let OptionsNormalizer = OptionsNormalizer_1 = class OptionsNormalizer {
    normalize(options) {
        let normalizedOptions = Object.assign({}, options);
        for (const normalizerRule of OptionsNormalizer_1.normalizerRules) {
            normalizedOptions = normalizerRule(normalizedOptions);
        }
        return normalizedOptions;
    }
};
OptionsNormalizer.normalizerRules = [
    ControlFlowFlatteningThresholdRule_1.ControlFlowFlatteningThresholdRule,
    DeadCodeInjectionRule_1.DeadCodeInjectionRule,
    DeadCodeInjectionThresholdRule_1.DeadCodeInjectionThresholdRule,
    DomainLockRule_1.DomainLockRule,
    InputFileNameRule_1.InputFileNameRule,
    SeedRule_1.SeedRule,
    SelfDefendingRule_1.SelfDefendingRule,
    SourceMapBaseUrlRule_1.SourceMapBaseUrlRule,
    SourceMapFileNameRule_1.SourceMapFileNameRule,
    SplitStringsChunkLengthRule_1.SplitStringsChunkLengthRule,
    StringArrayRule_1.StringArrayRule,
    StringArrayEncodingRule_1.StringArrayEncodingRule,
    StringArrayThresholdRule_1.StringArrayThresholdRule,
];
OptionsNormalizer = OptionsNormalizer_1 = __decorate([
    inversify_1.injectable()
], OptionsNormalizer);
exports.OptionsNormalizer = OptionsNormalizer;


/***/ }),

/***/ "./src/options/ValidationErrorsFormatter.ts":
/*!**************************************************!*\
  !*** ./src/options/ValidationErrorsFormatter.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationErrorsFormatter = void 0;
class ValidationErrorsFormatter {
    static format(errors) {
        return errors
            .reduce((errorMessages, error) => [
            ...errorMessages,
            ValidationErrorsFormatter.formatWithNestedConstraints(error)
        ], [])
            .join('\n');
    }
    static formatWithNestedConstraints(error) {
        const constraints = error.constraints;
        if (!constraints) {
            return `\`${error.property}\` error\n`;
        }
        const rootError = `\`${error.property}\` errors:\n`;
        const nestedErrors = Object
            .keys(constraints)
            .map((constraint) => `    - ${constraints[constraint]}\n`)
            .join();
        return `${rootError}${nestedErrors}`;
    }
}
exports.ValidationErrorsFormatter = ValidationErrorsFormatter;


/***/ }),

/***/ "./src/options/normalizer-rules/ControlFlowFlatteningThresholdRule.ts":
/*!****************************************************************************!*\
  !*** ./src/options/normalizer-rules/ControlFlowFlatteningThresholdRule.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlFlowFlatteningThresholdRule = void 0;
exports.ControlFlowFlatteningThresholdRule = (options) => {
    if (options.controlFlowFlatteningThreshold === 0) {
        options = Object.assign(Object.assign({}, options), { controlFlowFlattening: false, controlFlowFlatteningThreshold: 0 });
    }
    return options;
};


/***/ }),

/***/ "./src/options/normalizer-rules/DeadCodeInjectionRule.ts":
/*!***************************************************************!*\
  !*** ./src/options/normalizer-rules/DeadCodeInjectionRule.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DeadCodeInjectionRule = void 0;
const Default_1 = __webpack_require__(/*! ../presets/Default */ "./src/options/presets/Default.ts");
exports.DeadCodeInjectionRule = (options) => {
    if (options.deadCodeInjection) {
        options = Object.assign(Object.assign({}, options), { deadCodeInjection: true, stringArray: true });
        if (!options.stringArrayThreshold) {
            options = Object.assign(Object.assign({}, options), { stringArray: true, stringArrayThreshold: Default_1.DEFAULT_PRESET.stringArrayThreshold });
        }
    }
    return options;
};


/***/ }),

/***/ "./src/options/normalizer-rules/DeadCodeInjectionThresholdRule.ts":
/*!************************************************************************!*\
  !*** ./src/options/normalizer-rules/DeadCodeInjectionThresholdRule.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DeadCodeInjectionThresholdRule = void 0;
exports.DeadCodeInjectionThresholdRule = (options) => {
    if (options.deadCodeInjectionThreshold === 0) {
        options = Object.assign(Object.assign({}, options), { deadCodeInjection: false, deadCodeInjectionThreshold: 0 });
    }
    return options;
};


/***/ }),

/***/ "./src/options/normalizer-rules/DomainLockRule.ts":
/*!********************************************************!*\
  !*** ./src/options/normalizer-rules/DomainLockRule.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainLockRule = void 0;
const Utils_1 = __webpack_require__(/*! ../../utils/Utils */ "./src/utils/Utils.ts");
exports.DomainLockRule = (options) => {
    if (options.domainLock.length) {
        const normalizedDomains = [];
        for (const domain of options.domainLock) {
            normalizedDomains.push(Utils_1.Utils.extractDomainFrom(domain));
        }
        options = Object.assign(Object.assign({}, options), { domainLock: normalizedDomains });
    }
    return options;
};


/***/ }),

/***/ "./src/options/normalizer-rules/InputFileNameRule.ts":
/*!***********************************************************!*\
  !*** ./src/options/normalizer-rules/InputFileNameRule.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InputFileNameRule = void 0;
const StringSeparator_1 = __webpack_require__(/*! ../../enums/StringSeparator */ "./src/enums/StringSeparator.ts");
exports.InputFileNameRule = (options) => {
    let { inputFileName } = options;
    if (inputFileName) {
        inputFileName = inputFileName
            .replace(/^\/+/, '')
            .split(StringSeparator_1.StringSeparator.Dot)
            .slice(0, -1)
            .join(StringSeparator_1.StringSeparator.Dot) || inputFileName;
        options = Object.assign(Object.assign({}, options), { inputFileName: `${inputFileName}.js` });
    }
    return options;
};


/***/ }),

/***/ "./src/options/normalizer-rules/SeedRule.ts":
/*!**************************************************!*\
  !*** ./src/options/normalizer-rules/SeedRule.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedRule = void 0;
exports.SeedRule = (options) => {
    if (options.seed) {
        return Object.assign(Object.assign({}, options), { seed: options.seed });
    }
    const getRandomInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    return Object.assign(Object.assign({}, options), { seed: getRandomInteger(0, 999999999) });
};


/***/ }),

/***/ "./src/options/normalizer-rules/SelfDefendingRule.ts":
/*!***********************************************************!*\
  !*** ./src/options/normalizer-rules/SelfDefendingRule.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SelfDefendingRule = void 0;
exports.SelfDefendingRule = (options) => {
    if (options.selfDefending) {
        options = Object.assign(Object.assign({}, options), { compact: true, selfDefending: true });
    }
    return options;
};


/***/ }),

/***/ "./src/options/normalizer-rules/SourceMapBaseUrlRule.ts":
/*!**************************************************************!*\
  !*** ./src/options/normalizer-rules/SourceMapBaseUrlRule.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceMapBaseUrlRule = void 0;
exports.SourceMapBaseUrlRule = (options) => {
    const { sourceMapBaseUrl } = options;
    if (!options.sourceMapFileName) {
        options = Object.assign(Object.assign({}, options), { sourceMapBaseUrl: '' });
        return options;
    }
    if (sourceMapBaseUrl && !sourceMapBaseUrl.endsWith('/')) {
        options = Object.assign(Object.assign({}, options), { sourceMapBaseUrl: `${sourceMapBaseUrl}/` });
    }
    return options;
};


/***/ }),

/***/ "./src/options/normalizer-rules/SourceMapFileNameRule.ts":
/*!***************************************************************!*\
  !*** ./src/options/normalizer-rules/SourceMapFileNameRule.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceMapFileNameRule = void 0;
const StringSeparator_1 = __webpack_require__(/*! ../../enums/StringSeparator */ "./src/enums/StringSeparator.ts");
exports.SourceMapFileNameRule = (options) => {
    let { sourceMapFileName } = options;
    if (sourceMapFileName) {
        sourceMapFileName = sourceMapFileName
            .replace(/^\/+/, '')
            .replace(/(?:\.js)?(?:\.map)?$/, '');
        let sourceMapFileNameParts = sourceMapFileName.split(StringSeparator_1.StringSeparator.Dot);
        const sourceMapFileNamePartsCount = sourceMapFileNameParts.length;
        const lastPart = sourceMapFileNameParts[sourceMapFileNamePartsCount - 1];
        if (sourceMapFileNamePartsCount > 1 && lastPart.length <= 3) {
            sourceMapFileNameParts = sourceMapFileNameParts.slice(0, -1);
        }
        sourceMapFileName = sourceMapFileNameParts.join(StringSeparator_1.StringSeparator.Dot);
        options = Object.assign(Object.assign({}, options), { sourceMapFileName: `${sourceMapFileName}.js.map` });
    }
    return options;
};


/***/ }),

/***/ "./src/options/normalizer-rules/SplitStringsChunkLengthRule.ts":
/*!*********************************************************************!*\
  !*** ./src/options/normalizer-rules/SplitStringsChunkLengthRule.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SplitStringsChunkLengthRule = void 0;
exports.SplitStringsChunkLengthRule = (options) => {
    if (options.splitStringsChunkLength === 0) {
        options = Object.assign(Object.assign({}, options), { splitStrings: false, splitStringsChunkLength: 0 });
    }
    else {
        options = Object.assign(Object.assign({}, options), { splitStringsChunkLength: Math.floor(options.splitStringsChunkLength) });
    }
    return options;
};


/***/ }),

/***/ "./src/options/normalizer-rules/StringArrayEncodingRule.ts":
/*!*****************************************************************!*\
  !*** ./src/options/normalizer-rules/StringArrayEncodingRule.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StringArrayEncodingRule = void 0;
const StringArrayEncoding_1 = __webpack_require__(/*! ../../enums/StringArrayEncoding */ "./src/enums/StringArrayEncoding.ts");
exports.StringArrayEncodingRule = (options) => {
    if (options.stringArrayEncoding === true) {
        options = Object.assign(Object.assign({}, options), { stringArrayEncoding: StringArrayEncoding_1.StringArrayEncoding.Base64 });
    }
    return options;
};


/***/ }),

/***/ "./src/options/normalizer-rules/StringArrayRule.ts":
/*!*********************************************************!*\
  !*** ./src/options/normalizer-rules/StringArrayRule.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StringArrayRule = void 0;
exports.StringArrayRule = (options) => {
    if (!options.stringArray) {
        options = Object.assign(Object.assign({}, options), { rotateStringArray: false, shuffleStringArray: false, stringArray: false, stringArrayEncoding: false, stringArrayThreshold: 0 });
    }
    return options;
};


/***/ }),

/***/ "./src/options/normalizer-rules/StringArrayThresholdRule.ts":
/*!******************************************************************!*\
  !*** ./src/options/normalizer-rules/StringArrayThresholdRule.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StringArrayThresholdRule = void 0;
exports.StringArrayThresholdRule = (options) => {
    if (options.stringArrayThreshold === 0) {
        options = Object.assign(Object.assign({}, options), { rotateStringArray: false, stringArray: false, stringArrayEncoding: false, stringArrayThreshold: 0 });
    }
    return options;
};


/***/ }),

/***/ "./src/options/presets/Default.ts":
/*!****************************************!*\
  !*** ./src/options/presets/Default.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_PRESET = void 0;
const IdentifierNamesGenerator_1 = __webpack_require__(/*! ../../enums/generators/identifier-names-generators/IdentifierNamesGenerator */ "./src/enums/generators/identifier-names-generators/IdentifierNamesGenerator.ts");
const ObfuscationTarget_1 = __webpack_require__(/*! ../../enums/ObfuscationTarget */ "./src/enums/ObfuscationTarget.ts");
const SourceMapMode_1 = __webpack_require__(/*! ../../enums/source-map/SourceMapMode */ "./src/enums/source-map/SourceMapMode.ts");
exports.DEFAULT_PRESET = Object.freeze({
    compact: true,
    config: '',
    controlFlowFlattening: false,
    controlFlowFlatteningThreshold: 0.75,
    deadCodeInjection: false,
    deadCodeInjectionThreshold: 0.4,
    debugProtection: false,
    debugProtectionInterval: false,
    disableConsoleOutput: false,
    domainLock: [],
    exclude: [],
    identifierNamesGenerator: IdentifierNamesGenerator_1.IdentifierNamesGenerator.HexadecimalIdentifierNamesGenerator,
    identifiersPrefix: '',
    identifiersDictionary: [],
    inputFileName: '',
    log: false,
    renameGlobals: false,
    reservedNames: [],
    reservedStrings: [],
    rotateStringArray: true,
    seed: 0,
    selfDefending: false,
    shuffleStringArray: true,
    sourceMap: false,
    sourceMapBaseUrl: '',
    sourceMapFileName: '',
    sourceMapMode: SourceMapMode_1.SourceMapMode.Separate,
    splitStrings: false,
    splitStringsChunkLength: 10,
    stringArray: true,
    stringArrayEncoding: false,
    stringArrayThreshold: 0.75,
    target: ObfuscationTarget_1.ObfuscationTarget.Browser,
    transformObjectKeys: false,
    unicodeEscapeSequence: false
});


/***/ }),

/***/ "./src/options/presets/NoCustomNodes.ts":
/*!**********************************************!*\
  !*** ./src/options/presets/NoCustomNodes.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NO_ADDITIONAL_NODES_PRESET = void 0;
const IdentifierNamesGenerator_1 = __webpack_require__(/*! ../../enums/generators/identifier-names-generators/IdentifierNamesGenerator */ "./src/enums/generators/identifier-names-generators/IdentifierNamesGenerator.ts");
const ObfuscationTarget_1 = __webpack_require__(/*! ../../enums/ObfuscationTarget */ "./src/enums/ObfuscationTarget.ts");
const SourceMapMode_1 = __webpack_require__(/*! ../../enums/source-map/SourceMapMode */ "./src/enums/source-map/SourceMapMode.ts");
exports.NO_ADDITIONAL_NODES_PRESET = Object.freeze({
    compact: true,
    controlFlowFlattening: false,
    controlFlowFlatteningThreshold: 0,
    deadCodeInjection: false,
    deadCodeInjectionThreshold: 0,
    debugProtection: false,
    debugProtectionInterval: false,
    disableConsoleOutput: false,
    domainLock: [],
    exclude: [],
    identifierNamesGenerator: IdentifierNamesGenerator_1.IdentifierNamesGenerator.HexadecimalIdentifierNamesGenerator,
    identifiersPrefix: '',
    identifiersDictionary: [],
    inputFileName: '',
    log: false,
    renameGlobals: false,
    reservedNames: [],
    reservedStrings: [],
    rotateStringArray: false,
    seed: 0,
    selfDefending: false,
    shuffleStringArray: false,
    sourceMap: false,
    sourceMapBaseUrl: '',
    sourceMapFileName: '',
    sourceMapMode: SourceMapMode_1.SourceMapMode.Separate,
    splitStrings: false,
    splitStringsChunkLength: 0,
    stringArray: false,
    stringArrayEncoding: false,
    stringArrayThreshold: 0,
    target: ObfuscationTarget_1.ObfuscationTarget.Browser,
    transformObjectKeys: false,
    unicodeEscapeSequence: false
});


/***/ }),

/***/ "./src/options/validators/IsAllowedForObfuscationTargets.ts":
/*!******************************************************************!*\
  !*** ./src/options/validators/IsAllowedForObfuscationTargets.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsAllowedForObfuscationTargets = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const fast_deep_equal_1 = __importDefault(__webpack_require__(/*! fast-deep-equal */ "fast-deep-equal"));
const StringSeparator_1 = __webpack_require__(/*! ../../enums/StringSeparator */ "./src/enums/StringSeparator.ts");
const Default_1 = __webpack_require__(/*! ../presets/Default */ "./src/options/presets/Default.ts");
function IsAllowedForObfuscationTargets(obfuscationTargets, validationOptions) {
    return (optionsObject, propertyName) => {
        class_validator_1.registerDecorator({
            propertyName,
            constraints: [obfuscationTargets],
            name: 'IsAllowedForObfuscationTargets',
            options: validationOptions,
            target: optionsObject.constructor,
            validator: {
                validate(value, validationArguments) {
                    const options = validationArguments.object;
                    const defaultValue = Default_1.DEFAULT_PRESET[propertyName];
                    const isDefaultValue = fast_deep_equal_1.default(value, defaultValue);
                    return isDefaultValue || obfuscationTargets.includes(options.target);
                },
                defaultMessage(validationArguments) {
                    const requiredObfuscationTargetsString = obfuscationTargets.join(`${StringSeparator_1.StringSeparator.Comma} `);
                    return `This option allowed only for obfuscation targets: ${requiredObfuscationTargetsString}`;
                }
            }
        });
    };
}
exports.IsAllowedForObfuscationTargets = IsAllowedForObfuscationTargets;


/***/ }),

/***/ "./src/source-code/ObfuscatedCode.ts":
/*!*******************************************!*\
  !*** ./src/source-code/ObfuscatedCode.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObfuscatedCode = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const ICryptUtils_1 = __webpack_require__(/*! ../interfaces/utils/ICryptUtils */ "./src/interfaces/utils/ICryptUtils.ts");
const Initializable_1 = __webpack_require__(/*! ../decorators/Initializable */ "./src/decorators/Initializable.ts");
const SourceMapMode_1 = __webpack_require__(/*! ../enums/source-map/SourceMapMode */ "./src/enums/source-map/SourceMapMode.ts");
const IOptions_1 = __webpack_require__(/*! ../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
let ObfuscatedCode = class ObfuscatedCode {
    constructor(cryptUtils, options) {
        this.cryptUtils = cryptUtils;
        this.options = options;
    }
    initialize(obfuscatedCode, sourceMap) {
        this.obfuscatedCode = obfuscatedCode;
        this.sourceMap = sourceMap;
    }
    getObfuscatedCode() {
        return this.correctObfuscatedCode();
    }
    getSourceMap() {
        return this.sourceMap;
    }
    toString() {
        return this.obfuscatedCode;
    }
    correctObfuscatedCode() {
        if (!this.sourceMap) {
            return this.obfuscatedCode;
        }
        const sourceMapUrl = this.options.sourceMapBaseUrl + this.options.sourceMapFileName;
        let sourceMappingUrl = '//# sourceMappingURL=';
        switch (this.options.sourceMapMode) {
            case SourceMapMode_1.SourceMapMode.Inline:
                sourceMappingUrl += `data:application/json;base64,${this.cryptUtils.btoa(this.sourceMap)}`;
                break;
            case SourceMapMode_1.SourceMapMode.Separate:
            default:
                if (!sourceMapUrl) {
                    return this.obfuscatedCode;
                }
                sourceMappingUrl += sourceMapUrl;
        }
        return `${this.obfuscatedCode}\n${sourceMappingUrl}`;
    }
};
__decorate([
    Initializable_1.initializable(),
    __metadata("design:type", String)
], ObfuscatedCode.prototype, "obfuscatedCode", void 0);
__decorate([
    Initializable_1.initializable(),
    __metadata("design:type", String)
], ObfuscatedCode.prototype, "sourceMap", void 0);
ObfuscatedCode = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ICryptUtils)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof ICryptUtils_1.ICryptUtils !== "undefined" && ICryptUtils_1.ICryptUtils) === "function" ? _a : Object, typeof (_b = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _b : Object])
], ObfuscatedCode);
exports.ObfuscatedCode = ObfuscatedCode;


/***/ }),

/***/ "./src/source-code/SourceCode.ts":
/*!***************************************!*\
  !*** ./src/source-code/SourceCode.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceCode = void 0;
class SourceCode {
    constructor(sourceCode, sourceMap) {
        this.sourceCode = sourceCode;
        this.sourceMap = sourceMap;
    }
    getSourceCode() {
        return this.sourceCode;
    }
    getSourceMap() {
        return this.sourceMap;
    }
    toString() {
        return this.sourceCode;
    }
}
exports.SourceCode = SourceCode;


/***/ }),

/***/ "./src/storages/MapStorage.ts":
/*!************************************!*\
  !*** ./src/storages/MapStorage.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapStorage = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const IOptions_1 = __webpack_require__(/*! ../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const Initializable_1 = __webpack_require__(/*! ../decorators/Initializable */ "./src/decorators/Initializable.ts");
let MapStorage = class MapStorage {
    constructor(randomGenerator, options) {
        this.randomGenerator = randomGenerator;
        this.options = options;
    }
    initialize() {
        this.storage = new Map();
        this.storageId = this.randomGenerator.getRandomString(6);
    }
    get(key) {
        return this.storage.get(key);
    }
    getOrThrow(key) {
        const value = this.get(key);
        if (!value) {
            throw new Error(`No value found in map storage with key \`${key}\``);
        }
        return value;
    }
    getKeyOf(value) {
        for (const [key, storageValue] of this.storage) {
            if (value === storageValue) {
                return key;
            }
        }
        return null;
    }
    getLength() {
        return this.storage.size;
    }
    getStorage() {
        return this.storage;
    }
    getStorageId() {
        return this.storageId;
    }
    has(key) {
        return this.storage.has(key);
    }
    mergeWith(storage, mergeId = false) {
        this.storage = new Map([...this.storage, ...storage.getStorage()]);
        if (mergeId) {
            this.storageId = storage.getStorageId();
        }
    }
    set(key, value) {
        this.storage.set(key, value);
    }
};
__decorate([
    Initializable_1.initializable(),
    __metadata("design:type", String)
], MapStorage.prototype, "storageId", void 0);
__decorate([
    Initializable_1.initializable(),
    __metadata("design:type", typeof (_a = typeof Map !== "undefined" && Map) === "function" ? _a : Object)
], MapStorage.prototype, "storage", void 0);
__decorate([
    inversify_1.postConstruct(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MapStorage.prototype, "initialize", null);
MapStorage = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_b = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _b : Object, typeof (_c = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _c : Object])
], MapStorage);
exports.MapStorage = MapStorage;


/***/ }),

/***/ "./src/storages/custom-code-helpers/CustomCodeHelperGroupStorage.ts":
/*!**************************************************************************!*\
  !*** ./src/storages/custom-code-helpers/CustomCodeHelperGroupStorage.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var CustomCodeHelperGroupStorage_1, _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomCodeHelperGroupStorage = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TCustomCodeHelperGroupFactory_1 = __webpack_require__(/*! ../../types/container/custom-code-helpers/TCustomCodeHelperGroupFactory */ "./src/types/container/custom-code-helpers/TCustomCodeHelperGroupFactory.ts");
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const CustomCodeHelperGroup_1 = __webpack_require__(/*! ../../enums/custom-code-helpers/CustomCodeHelperGroup */ "./src/enums/custom-code-helpers/CustomCodeHelperGroup.ts");
const MapStorage_1 = __webpack_require__(/*! ../MapStorage */ "./src/storages/MapStorage.ts");
let CustomCodeHelperGroupStorage = CustomCodeHelperGroupStorage_1 = class CustomCodeHelperGroupStorage extends MapStorage_1.MapStorage {
    constructor(customCodeHelperGroupFactory, randomGenerator, options) {
        super(randomGenerator, options);
        this.customCodeHelperGroupFactory = customCodeHelperGroupFactory;
    }
    initialize() {
        super.initialize();
        CustomCodeHelperGroupStorage_1.customCodeHelperGroupsList.forEach((customCodeHelperGroupName) => {
            const customCodeHelperGroup = this.customCodeHelperGroupFactory(customCodeHelperGroupName);
            this.storage.set(customCodeHelperGroupName, customCodeHelperGroup);
        });
    }
};
CustomCodeHelperGroupStorage.customCodeHelperGroupsList = [
    CustomCodeHelperGroup_1.CustomCodeHelperGroup.ConsoleOutput,
    CustomCodeHelperGroup_1.CustomCodeHelperGroup.DebugProtection,
    CustomCodeHelperGroup_1.CustomCodeHelperGroup.DomainLock,
    CustomCodeHelperGroup_1.CustomCodeHelperGroup.SelfDefending,
    CustomCodeHelperGroup_1.CustomCodeHelperGroup.StringArray
];
__decorate([
    inversify_1.postConstruct(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CustomCodeHelperGroupStorage.prototype, "initialize", null);
CustomCodeHelperGroupStorage = CustomCodeHelperGroupStorage_1 = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__ICustomCodeHelperGroup)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof TCustomCodeHelperGroupFactory_1.TCustomCodeHelperGroupFactory !== "undefined" && TCustomCodeHelperGroupFactory_1.TCustomCodeHelperGroupFactory) === "function" ? _a : Object, typeof (_b = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _b : Object, typeof (_c = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _c : Object])
], CustomCodeHelperGroupStorage);
exports.CustomCodeHelperGroupStorage = CustomCodeHelperGroupStorage;


/***/ }),

/***/ "./src/storages/custom-nodes/ControlFlowStorage.ts":
/*!*********************************************************!*\
  !*** ./src/storages/custom-nodes/ControlFlowStorage.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlFlowStorage = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const MapStorage_1 = __webpack_require__(/*! ../MapStorage */ "./src/storages/MapStorage.ts");
let ControlFlowStorage = class ControlFlowStorage extends MapStorage_1.MapStorage {
    constructor(randomGenerator, options) {
        super(randomGenerator, options);
    }
};
ControlFlowStorage = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_a = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _a : Object, typeof (_b = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _b : Object])
], ControlFlowStorage);
exports.ControlFlowStorage = ControlFlowStorage;


/***/ }),

/***/ "./src/storages/string-array/StringArrayStorage.ts":
/*!*********************************************************!*\
  !*** ./src/storages/string-array/StringArrayStorage.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var StringArrayStorage_1, _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringArrayStorage = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const TIdentifierNamesGeneratorFactory_1 = __webpack_require__(/*! ../../types/container/generators/TIdentifierNamesGeneratorFactory */ "./src/types/container/generators/TIdentifierNamesGeneratorFactory.ts");
const IArrayUtils_1 = __webpack_require__(/*! ../../interfaces/utils/IArrayUtils */ "./src/interfaces/utils/IArrayUtils.ts");
const ICryptUtils_1 = __webpack_require__(/*! ../../interfaces/utils/ICryptUtils */ "./src/interfaces/utils/ICryptUtils.ts");
const IEscapeSequenceEncoder_1 = __webpack_require__(/*! ../../interfaces/utils/IEscapeSequenceEncoder */ "./src/interfaces/utils/IEscapeSequenceEncoder.ts");
const IOptions_1 = __webpack_require__(/*! ../../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const StringArrayEncoding_1 = __webpack_require__(/*! ../../enums/StringArrayEncoding */ "./src/enums/StringArrayEncoding.ts");
const MapStorage_1 = __webpack_require__(/*! ../MapStorage */ "./src/storages/MapStorage.ts");
let StringArrayStorage = StringArrayStorage_1 = class StringArrayStorage extends MapStorage_1.MapStorage {
    constructor(identifierNamesGeneratorFactory, arrayUtils, randomGenerator, options, cryptUtils, escapeSequenceEncoder) {
        super(randomGenerator, options);
        this.rc4EncodedValuesSourcesCache = new Map();
        this.rotationAmount = 0;
        this.identifierNamesGenerator = identifierNamesGeneratorFactory(options);
        this.arrayUtils = arrayUtils;
        this.cryptUtils = cryptUtils;
        this.escapeSequenceEncoder = escapeSequenceEncoder;
        this.rc4Keys = this.randomGenerator.getRandomGenerator()
            .n(() => this.randomGenerator.getRandomGenerator().string({
            length: StringArrayStorage_1.rc4KeyLength
        }), StringArrayStorage_1.rc4KeysCount);
    }
    initialize() {
        super.initialize();
        this.rotationAmount = this.options.rotateStringArray
            ? this.randomGenerator.getRandomInteger(StringArrayStorage_1.minimumRotationAmount, StringArrayStorage_1.maximumRotationAmount)
            : 0;
    }
    get(value) {
        return this.getOrSetIfDoesNotExist(value);
    }
    getRotationAmount() {
        return this.rotationAmount;
    }
    getStorageName() {
        return this.getStorageId();
    }
    getStorageId() {
        if (!this.stringArrayStorageName) {
            this.stringArrayStorageName = this.identifierNamesGenerator
                .generateForGlobalScope(StringArrayStorage_1.stringArrayNameLength);
        }
        return this.stringArrayStorageName;
    }
    getStorageCallsWrapperName() {
        if (!this.stringArrayStorageCallsWrapperName) {
            this.stringArrayStorageCallsWrapperName = this.identifierNamesGenerator
                .generateForGlobalScope(StringArrayStorage_1.stringArrayNameLength);
        }
        return this.stringArrayStorageCallsWrapperName;
    }
    rotateStorage() {
        if (!this.getLength()) {
            return;
        }
        this.storage = new Map(this.arrayUtils.rotate(Array.from(this.storage.entries()), this.rotationAmount));
    }
    shuffleStorage() {
        this.storage = new Map(this.arrayUtils
            .shuffle(Array.from(this.storage.entries()))
            .map(([value, stringArrayStorageItemData], index) => {
            stringArrayStorageItemData.index = index;
            return [value, stringArrayStorageItemData];
        })
            .sort(([, stringArrayStorageItemDataA], [, stringArrayStorageItemDataB]) => stringArrayStorageItemDataA.index - stringArrayStorageItemDataB.index));
    }
    toString() {
        return Array
            .from(this.storage.values())
            .map((stringArrayStorageItemData) => {
            return `'${this.escapeSequenceEncoder.encode(stringArrayStorageItemData.encodedValue, this.options.unicodeEscapeSequence)}'`;
        }).toString();
    }
    getOrSetIfDoesNotExist(value) {
        const { encodedValue, decodeKey } = this.getEncodedValue(value);
        const storedStringArrayStorageItemData = this.storage.get(encodedValue);
        if (storedStringArrayStorageItemData) {
            return storedStringArrayStorageItemData;
        }
        const stringArrayStorageItemData = {
            encodedValue,
            decodeKey,
            value,
            index: this.getLength()
        };
        this.storage.set(encodedValue, stringArrayStorageItemData);
        return stringArrayStorageItemData;
    }
    getEncodedValue(value) {
        var _a;
        switch (this.options.stringArrayEncoding) {
            case StringArrayEncoding_1.StringArrayEncoding.Rc4: {
                const decodeKey = this.randomGenerator.getRandomGenerator().pickone(this.rc4Keys);
                const encodedValue = this.cryptUtils.btoa(this.cryptUtils.rc4(value, decodeKey));
                const encodedValueSources = (_a = this.rc4EncodedValuesSourcesCache.get(encodedValue)) !== null && _a !== void 0 ? _a : [];
                let encodedValueSourcesLength = encodedValueSources.length;
                const shouldAddValueToSourcesCache = !encodedValueSourcesLength || !encodedValueSources.includes(value);
                if (shouldAddValueToSourcesCache) {
                    encodedValueSources.push(value);
                    encodedValueSourcesLength++;
                }
                this.rc4EncodedValuesSourcesCache.set(encodedValue, encodedValueSources);
                if (encodedValueSourcesLength > 1) {
                    return this.getEncodedValue(value);
                }
                return { encodedValue, decodeKey };
            }
            case StringArrayEncoding_1.StringArrayEncoding.Base64: {
                const decodeKey = null;
                const encodedValue = this.cryptUtils.btoa(value);
                return { encodedValue, decodeKey };
            }
            default: {
                const decodeKey = null;
                const encodedValue = value;
                return { encodedValue, decodeKey };
            }
        }
    }
};
StringArrayStorage.minimumRotationAmount = 100;
StringArrayStorage.maximumRotationAmount = 500;
StringArrayStorage.rc4KeyLength = 4;
StringArrayStorage.rc4KeysCount = 50;
StringArrayStorage.stringArrayNameLength = 4;
__decorate([
    inversify_1.postConstruct(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StringArrayStorage.prototype, "initialize", null);
StringArrayStorage = StringArrayStorage_1 = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IArrayUtils)),
    __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __param(3, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __param(4, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ICryptUtils)),
    __param(5, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IEscapeSequenceEncoder)),
    __metadata("design:paramtypes", [typeof (_a = typeof TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory !== "undefined" && TIdentifierNamesGeneratorFactory_1.TIdentifierNamesGeneratorFactory) === "function" ? _a : Object, typeof (_b = typeof IArrayUtils_1.IArrayUtils !== "undefined" && IArrayUtils_1.IArrayUtils) === "function" ? _b : Object, typeof (_c = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _c : Object, typeof (_d = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _d : Object, typeof (_e = typeof ICryptUtils_1.ICryptUtils !== "undefined" && ICryptUtils_1.ICryptUtils) === "function" ? _e : Object, typeof (_f = typeof IEscapeSequenceEncoder_1.IEscapeSequenceEncoder !== "undefined" && IEscapeSequenceEncoder_1.IEscapeSequenceEncoder) === "function" ? _f : Object])
], StringArrayStorage);
exports.StringArrayStorage = StringArrayStorage;


/***/ }),

/***/ "./src/types/container/calls-graph-analyzer/TCalleeDataExtractorFactory.ts":
/*!*********************************************************************************!*\
  !*** ./src/types/container/calls-graph-analyzer/TCalleeDataExtractorFactory.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/types/container/code-transformers/TCodeTransformerFactory.ts":
/*!**************************************************************************!*\
  !*** ./src/types/container/code-transformers/TCodeTransformerFactory.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/types/container/custom-code-helpers/TCustomCodeHelperFactory.ts":
/*!*****************************************************************************!*\
  !*** ./src/types/container/custom-code-helpers/TCustomCodeHelperFactory.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/types/container/custom-code-helpers/TCustomCodeHelperGroupFactory.ts":
/*!**********************************************************************************!*\
  !*** ./src/types/container/custom-code-helpers/TCustomCodeHelperGroupFactory.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/types/container/custom-nodes/TControlFlowCustomNodeFactory.ts":
/*!***************************************************************************!*\
  !*** ./src/types/container/custom-nodes/TControlFlowCustomNodeFactory.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/types/container/custom-nodes/TDeadNodeInjectionCustomNodeFactory.ts":
/*!*********************************************************************************!*\
  !*** ./src/types/container/custom-nodes/TDeadNodeInjectionCustomNodeFactory.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/types/container/custom-nodes/TObjectExpressionKeysTransformerCustomNodeFactory.ts":
/*!***********************************************************************************************!*\
  !*** ./src/types/container/custom-nodes/TObjectExpressionKeysTransformerCustomNodeFactory.ts ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/types/container/generators/TIdentifierNamesGeneratorFactory.ts":
/*!****************************************************************************!*\
  !*** ./src/types/container/generators/TIdentifierNamesGeneratorFactory.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/types/container/node-transformers/TControlFlowReplacerFactory.ts":
/*!******************************************************************************!*\
  !*** ./src/types/container/node-transformers/TControlFlowReplacerFactory.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/types/container/node-transformers/TControlFlowStorageFactory.ts":
/*!*****************************************************************************!*\
  !*** ./src/types/container/node-transformers/TControlFlowStorageFactory.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/types/container/node-transformers/TIdentifierObfuscatingReplacerFactory.ts":
/*!****************************************************************************************!*\
  !*** ./src/types/container/node-transformers/TIdentifierObfuscatingReplacerFactory.ts ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/types/container/node-transformers/TLiteralObfuscatingReplacerFactory.ts":
/*!*************************************************************************************!*\
  !*** ./src/types/container/node-transformers/TLiteralObfuscatingReplacerFactory.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/types/container/node-transformers/TNodeTransformerFactory.ts":
/*!**************************************************************************!*\
  !*** ./src/types/container/node-transformers/TNodeTransformerFactory.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/types/container/node-transformers/TObfuscatingGuardFactory.ts":
/*!***************************************************************************!*\
  !*** ./src/types/container/node-transformers/TObfuscatingGuardFactory.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/types/container/node-transformers/TObjectExpressionExtractorFactory.ts":
/*!************************************************************************************!*\
  !*** ./src/types/container/node-transformers/TObjectExpressionExtractorFactory.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/types/container/source-code/TObfuscatedCodeFactory.ts":
/*!*******************************************************************!*\
  !*** ./src/types/container/source-code/TObfuscatedCodeFactory.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/types/options/TInputOptions.ts":
/*!********************************************!*\
  !*** ./src/types/options/TInputOptions.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/types/options/TStringArrayEncoding.ts":
/*!***************************************************!*\
  !*** ./src/types/options/TStringArrayEncoding.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/types/storages/TControlFlowStorage.ts":
/*!***************************************************!*\
  !*** ./src/types/storages/TControlFlowStorage.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/types/storages/TCustomCodeHelperGroupStorage.ts":
/*!*************************************************************!*\
  !*** ./src/types/storages/TCustomCodeHelperGroupStorage.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/utils/AbstractTransformerNamesGroupsBuilder.ts":
/*!************************************************************!*\
  !*** ./src/utils/AbstractTransformerNamesGroupsBuilder.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractTransformerNamesGroupsBuilder = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const ILevelledTopologicalSorter_1 = __webpack_require__(/*! ../interfaces/utils/ILevelledTopologicalSorter */ "./src/interfaces/utils/ILevelledTopologicalSorter.ts");
let AbstractTransformerNamesGroupsBuilder = class AbstractTransformerNamesGroupsBuilder {
    constructor(levelledTopologicalSorter) {
        this.levelledTopologicalSorter = levelledTopologicalSorter;
    }
    build(normalizedTransformers) {
        const transformerNames = Object.keys(normalizedTransformers);
        const relationEdges = this.buildTransformersRelationEdges(transformerNames, normalizedTransformers);
        for (const [precedent, consequent] of relationEdges) {
            this.levelledTopologicalSorter.add(precedent, consequent);
        }
        return this.levelledTopologicalSorter.sortByGroups();
    }
    buildTransformersRelationEdges(transformerNames, normalizedTransformers) {
        const relationEdges = [];
        for (const transformerName of transformerNames) {
            const transformer = normalizedTransformers[transformerName];
            const runAfterRelations = transformer.runAfter;
            if (!runAfterRelations || !runAfterRelations.length) {
                relationEdges.push([transformerName, null]);
                continue;
            }
            for (const runAfterRelation of runAfterRelations) {
                const isUnknownRelation = normalizedTransformers[runAfterRelation] === undefined;
                if (isUnknownRelation) {
                    relationEdges.push([transformerName, null]);
                    continue;
                }
                relationEdges.push([runAfterRelation, transformerName]);
            }
        }
        return relationEdges;
    }
};
AbstractTransformerNamesGroupsBuilder = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ILevelledTopologicalSorter)),
    __metadata("design:paramtypes", [typeof (_a = typeof ILevelledTopologicalSorter_1.ILevelledTopologicalSorter !== "undefined" && ILevelledTopologicalSorter_1.ILevelledTopologicalSorter) === "function" ? _a : Object])
], AbstractTransformerNamesGroupsBuilder);
exports.AbstractTransformerNamesGroupsBuilder = AbstractTransformerNamesGroupsBuilder;


/***/ }),

/***/ "./src/utils/ArrayUtils.ts":
/*!*********************************!*\
  !*** ./src/utils/ArrayUtils.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayUtils = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
let ArrayUtils = class ArrayUtils {
    constructor(randomGenerator) {
        this.randomGenerator = randomGenerator;
    }
    createWithRange(length) {
        const range = [];
        for (let i = 0; i < length; i++) {
            range.push(i);
        }
        return range;
    }
    findMostOccurringElement(array) {
        var _a;
        const arrayLength = array.length;
        if (!arrayLength) {
            return null;
        }
        const elementsMap = {};
        let mostOccurringElement = array[0];
        let mostOccurringElementCount = 1;
        for (const element of array) {
            const currentElementCount = (_a = elementsMap[element]) !== null && _a !== void 0 ? _a : 0;
            const updatedElementCount = currentElementCount + 1;
            if (updatedElementCount > mostOccurringElementCount) {
                mostOccurringElement = element;
                mostOccurringElementCount = updatedElementCount;
            }
            elementsMap[element] = updatedElementCount;
        }
        return mostOccurringElement;
    }
    rotate(array, times) {
        if (!array.length) {
            throw new ReferenceError('Cannot rotate empty array.');
        }
        if (times <= 0) {
            return array;
        }
        const newArray = array;
        let temp;
        while (times--) {
            temp = newArray.pop();
            if (temp) {
                newArray.unshift(temp);
            }
        }
        return newArray;
    }
    shuffle(array) {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length; i; i--) {
            const j = Math.floor(this.randomGenerator.getMathRandom() * i);
            [shuffledArray[i - 1], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i - 1]];
        }
        return shuffledArray;
    }
};
ArrayUtils = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __metadata("design:paramtypes", [typeof (_a = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _a : Object])
], ArrayUtils);
exports.ArrayUtils = ArrayUtils;


/***/ }),

/***/ "./src/utils/CryptUtils.ts":
/*!*********************************!*\
  !*** ./src/utils/CryptUtils.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptUtils = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const IRandomGenerator_1 = __webpack_require__(/*! ../interfaces/utils/IRandomGenerator */ "./src/interfaces/utils/IRandomGenerator.ts");
const RandomGenerator_1 = __webpack_require__(/*! ./RandomGenerator */ "./src/utils/RandomGenerator.ts");
const Utils_1 = __webpack_require__(/*! ./Utils */ "./src/utils/Utils.ts");
let CryptUtils = class CryptUtils {
    constructor(randomGenerator) {
        this.randomGenerator = randomGenerator;
    }
    btoa(string) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        let output = '';
        string = encodeURIComponent(string).replace(/%([0-9A-F]{2})/g, (match, p1) => {
            return String.fromCharCode(parseInt(`${Utils_1.Utils.hexadecimalPrefix}${p1}`, 16));
        });
        for (let block, charCode, idx = 0, map = chars; string.charAt(idx | 0) || (map = '=', idx % 1); output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
            charCode = string.charCodeAt(idx += 3 / 4);
            if (charCode > 0xFF) {
                throw new Error('\'btoa\' failed: The string to be encoded contains characters outside of the Latin1 range.');
            }
            block = block << 8 | charCode;
        }
        return output;
    }
    hideString(str, length) {
        const escapeRegExp = (s) => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        const randomMerge = (s1, s2) => {
            let i1 = -1;
            let i2 = -1;
            let result = '';
            while (i1 < s1.length || i2 < s2.length) {
                if (this.randomGenerator.getMathRandom() < 0.5 && i2 < s2.length) {
                    result += s2.charAt(++i2);
                }
                else {
                    result += s1.charAt(++i1);
                }
            }
            return result;
        };
        const randomString = this.randomGenerator.getRandomGenerator().string({
            length: length,
            pool: RandomGenerator_1.RandomGenerator.randomGeneratorPool
        });
        let randomStringDiff = randomString.replace(new RegExp(`[${escapeRegExp(str)}]`, 'g'), '');
        const randomStringDiffArray = randomStringDiff.split('');
        this.randomGenerator.getRandomGenerator().shuffle(randomStringDiffArray);
        randomStringDiff = randomStringDiffArray.join('');
        return [randomMerge(str, randomStringDiff), randomStringDiff];
    }
    rc4(string, key) {
        const s = [];
        let j = 0;
        let x;
        let result = '';
        for (var i = 0; i < 256; i++) {
            s[i] = i;
        }
        for (i = 0; i < 256; i++) {
            j = (j + s[i] + key.charCodeAt(i % key.length)) % 256;
            x = s[i];
            s[i] = s[j];
            s[j] = x;
        }
        i = 0;
        j = 0;
        for (let y = 0; y < string.length; y++) {
            i = (i + 1) % 256;
            j = (j + s[i]) % 256;
            x = s[i];
            s[i] = s[j];
            s[j] = x;
            result += String.fromCharCode(string.charCodeAt(y) ^ s[(s[i] + s[j]) % 256]);
        }
        return result;
    }
};
CryptUtils = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IRandomGenerator)),
    __metadata("design:paramtypes", [typeof (_a = typeof IRandomGenerator_1.IRandomGenerator !== "undefined" && IRandomGenerator_1.IRandomGenerator) === "function" ? _a : Object])
], CryptUtils);
exports.CryptUtils = CryptUtils;


/***/ }),

/***/ "./src/utils/EscapeSequenceEncoder.ts":
/*!********************************************!*\
  !*** ./src/utils/EscapeSequenceEncoder.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EscapeSequenceEncoder = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
let EscapeSequenceEncoder = class EscapeSequenceEncoder {
    constructor() {
        this.stringsCache = new Map();
    }
    encode(string, encodeAllSymbols) {
        const cacheKey = `${string}-${String(encodeAllSymbols)}`;
        if (this.stringsCache.has(cacheKey)) {
            return this.stringsCache.get(cacheKey);
        }
        const radix = 16;
        const replaceRegExp = new RegExp('[\\s\\S]', 'g');
        const escapeSequenceRegExp = new RegExp('[\'\"\\\\\\s]');
        const regExp = new RegExp('[\\x00-\\x7F]');
        let prefix;
        let template;
        const result = string.replace(replaceRegExp, (character) => {
            if (!encodeAllSymbols && !escapeSequenceRegExp.exec(character)) {
                return character;
            }
            if (regExp.exec(character)) {
                prefix = '\\x';
                template = '00';
            }
            else {
                prefix = '\\u';
                template = '0000';
            }
            return `${prefix}${(template + character.charCodeAt(0).toString(radix)).slice(-template.length)}`;
        });
        this.stringsCache.set(cacheKey, result);
        this.stringsCache.set(`${result}-${String(encodeAllSymbols)}`, result);
        return result;
    }
};
EscapeSequenceEncoder = __decorate([
    inversify_1.injectable()
], EscapeSequenceEncoder);
exports.EscapeSequenceEncoder = EscapeSequenceEncoder;


/***/ }),

/***/ "./src/utils/LevelledTopologicalSorter.ts":
/*!************************************************!*\
  !*** ./src/utils/LevelledTopologicalSorter.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelledTopologicalSorter = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
let LevelledTopologicalSorter = class LevelledTopologicalSorter {
    constructor() {
        this.graph = new Map();
    }
    add(precedent, consequent = null) {
        if (consequent !== null) {
            return this.link(precedent, consequent);
        }
        return this.register(precedent);
    }
    sort() {
        const consequents = Array.from(this.graph.keys());
        const results = [];
        const marks = {};
        for (const consequent of consequents) {
            if (marks[consequent] !== undefined) {
                continue;
            }
            this.visit(results, marks, consequent);
        }
        return results;
    }
    sortByGroups() {
        this.sort();
        const resultItemsGroups = [];
        while (this.hasNodes()) {
            const rootNodes = this.findRootNodes();
            resultItemsGroups.push(rootNodes);
            for (const rootNode of rootNodes) {
                this.delete(rootNode);
            }
        }
        return resultItemsGroups;
    }
    delete(consequent) {
        const precedents = this.getPrecedents(consequent);
        if (precedents.length) {
            throw new Error(`Unable to remove non-root node: ${consequent}`);
        }
        this.graph.delete(consequent);
        const precedentsGroups = Array.from(this.graph.values());
        for (const precedentsGroup of precedentsGroups) {
            const precedentsCount = precedentsGroup.length - 1;
            for (let index = precedentsCount; index >= 0; index = index - 1) {
                if (precedentsGroup[index] !== consequent) {
                    continue;
                }
                precedentsGroup.splice(index, 1);
            }
        }
    }
    findRootNodes() {
        const consequents = Array.from(this.graph.keys());
        const rootNodes = [];
        for (const consequent of consequents) {
            if (!this.hasPrecedents(consequent)) {
                rootNodes.push(consequent);
            }
        }
        return rootNodes;
    }
    getPrecedents(consequent) {
        const precedents = this.graph.get(consequent);
        if (!precedents) {
            throw new Error(`Unknown node: ${consequent}`);
        }
        return precedents;
    }
    hasNodes() {
        return this.graph.size > 0;
    }
    hasPrecedents(consequent) {
        return this.getPrecedents(consequent).length > 0;
    }
    link(precedent, consequent) {
        this.register(precedent);
        this.register(consequent);
        const target = this.graph.get(consequent);
        if (target && !target.includes(precedent)) {
            target.push(precedent);
        }
        return this;
    }
    register(name) {
        if (!this.graph.has(name)) {
            this.graph.set(name, []);
        }
        return this;
    }
    visit(results, marks, name) {
        const mark = marks[name];
        if (mark === 'visiting') {
            throw new Error(`Detected cycle involving node: ${name}`);
        }
        if (mark) {
            return;
        }
        marks[name] = 'visiting';
        const precedents = this.getPrecedents(name);
        for (const precedent of precedents) {
            this.visit(results, marks, precedent);
        }
        marks[name] = 'ok';
        results.push(name);
        return;
    }
};
LevelledTopologicalSorter = __decorate([
    inversify_1.injectable()
], LevelledTopologicalSorter);
exports.LevelledTopologicalSorter = LevelledTopologicalSorter;


/***/ }),

/***/ "./src/utils/NumberUtils.ts":
/*!**********************************!*\
  !*** ./src/utils/NumberUtils.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberUtils = void 0;
const Utils_1 = __webpack_require__(/*! ./Utils */ "./src/utils/Utils.ts");
class NumberUtils {
    static toHex(number) {
        const radix = 16;
        const basePart = typeof number === 'number'
            ? number.toString(radix)
            : `${number.toString(radix)}n`;
        return `${Utils_1.Utils.hexadecimalPrefix}${basePart}`;
    }
    static isCeil(number) {
        return typeof number === 'number'
            ? number % 1 === 0
            : true;
    }
}
exports.NumberUtils = NumberUtils;


/***/ }),

/***/ "./src/utils/RandomGenerator.ts":
/*!**************************************!*\
  !*** ./src/utils/RandomGenerator.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var RandomGenerator_1, _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomGenerator = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ServiceIdentifiers_1 = __webpack_require__(/*! ../container/ServiceIdentifiers */ "./src/container/ServiceIdentifiers.ts");
const md5_1 = __importDefault(__webpack_require__(/*! md5 */ "md5"));
const chance_1 = __webpack_require__(/*! chance */ "chance");
const IOptions_1 = __webpack_require__(/*! ../interfaces/options/IOptions */ "./src/interfaces/options/IOptions.ts");
const ISourceCode_1 = __webpack_require__(/*! ../interfaces/source-code/ISourceCode */ "./src/interfaces/source-code/ISourceCode.ts");
const Initializable_1 = __webpack_require__(/*! ../decorators/Initializable */ "./src/decorators/Initializable.ts");
let RandomGenerator = RandomGenerator_1 = class RandomGenerator {
    constructor(sourceCode, options) {
        this.sourceCode = sourceCode;
        this.options = options;
    }
    initialize() {
        this.randomGenerator = new chance_1.Chance(this.getRawSeed());
    }
    getMathRandom() {
        return this.getRandomInteger(0, 99999) / 100000;
    }
    getRandomGenerator() {
        return this.randomGenerator;
    }
    getRandomInteger(min, max) {
        return this.getRandomGenerator().integer({
            min: min,
            max: max
        });
    }
    getRandomString(length, pool = RandomGenerator_1.randomGeneratorPool) {
        return this.getRandomGenerator().string({ length, pool });
    }
    getInputSeed() {
        return this.options.seed.toString();
    }
    getRawSeed() {
        const inputSeed = this.getInputSeed();
        const inputSeedParts = `${inputSeed}`.split('|');
        if (inputSeedParts.length > 1) {
            return inputSeed;
        }
        const sourceCodeMD5Hash = md5_1.default(this.sourceCode.getSourceCode());
        return `${inputSeed}|${sourceCodeMD5Hash}`;
    }
};
RandomGenerator.randomGeneratorPool = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
__decorate([
    Initializable_1.initializable(),
    __metadata("design:type", typeof (_a = typeof chance_1.Chance !== "undefined" && chance_1.Chance.Chance) === "function" ? _a : Object)
], RandomGenerator.prototype, "randomGenerator", void 0);
__decorate([
    inversify_1.postConstruct(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RandomGenerator.prototype, "initialize", null);
RandomGenerator = RandomGenerator_1 = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ISourceCode)),
    __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)),
    __metadata("design:paramtypes", [typeof (_b = typeof ISourceCode_1.ISourceCode !== "undefined" && ISourceCode_1.ISourceCode) === "function" ? _b : Object, typeof (_c = typeof IOptions_1.IOptions !== "undefined" && IOptions_1.IOptions) === "function" ? _c : Object])
], RandomGenerator);
exports.RandomGenerator = RandomGenerator;


/***/ }),

/***/ "./src/utils/Utils.ts":
/*!****************************!*\
  !*** ./src/utils/Utils.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
class Utils {
    static buildVersionMessage(version, buildTimestamp) {
        if (!version || !buildTimestamp) {
            return 'unknown';
        }
        const buildDate = new Date(parseInt(buildTimestamp, 10)).toISOString();
        return `${version}_${buildDate}`;
    }
    static extractDomainFrom(url) {
        let domain;
        if (url.includes('://') || url.indexOf('//') === 0) {
            domain = url.split('/')[2];
        }
        else {
            domain = url.split('/')[0];
        }
        domain = domain.split(':')[0];
        return domain;
    }
    static getIdentifiersPrefixForMultipleSources(identifiersPrefix, sourceCodeIndex) {
        const baseIdentifiersPrefix = !!identifiersPrefix
            ? identifiersPrefix
            : Utils.baseMultipleSourcesIdentifiersPrefix;
        return `${baseIdentifiersPrefix}${sourceCodeIndex}`;
    }
}
exports.Utils = Utils;
Utils.baseMultipleSourcesIdentifiersPrefix = 'a';
Utils.hexadecimalPrefix = '0x';


/***/ }),

/***/ "@gradecam/tsenum":
/*!***********************************!*\
  !*** external "@gradecam/tsenum" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@gradecam/tsenum");

/***/ }),

/***/ "acorn":
/*!************************!*\
  !*** external "acorn" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("acorn");

/***/ }),

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),

/***/ "chance":
/*!*************************!*\
  !*** external "chance" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("chance");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("class-validator");

/***/ }),

/***/ "escodegen":
/*!****************************!*\
  !*** external "escodegen" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("escodegen");

/***/ }),

/***/ "eslint-scope":
/*!*******************************!*\
  !*** external "eslint-scope" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("eslint-scope");

/***/ }),

/***/ "estraverse":
/*!*****************************!*\
  !*** external "estraverse" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("estraverse");

/***/ }),

/***/ "eventemitter3":
/*!********************************!*\
  !*** external "eventemitter3" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("eventemitter3");

/***/ }),

/***/ "fast-deep-equal":
/*!**********************************!*\
  !*** external "fast-deep-equal" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fast-deep-equal");

/***/ }),

/***/ "inversify":
/*!****************************!*\
  !*** external "inversify" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inversify");

/***/ }),

/***/ "js-string-escape":
/*!***********************************!*\
  !*** external "js-string-escape" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-string-escape");

/***/ }),

/***/ "md5":
/*!**********************!*\
  !*** external "md5" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("md5");

/***/ }),

/***/ "reflect-metadata":
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reflect-metadata");

/***/ }),

/***/ "string-template":
/*!**********************************!*\
  !*** external "string-template" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("string-template");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map