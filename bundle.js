/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst btn = document.getElementById(\"btn\");\r\nconst input = document.getElementById(\"userId\");\r\nconst loading = document.getElementById(\"loading\");\r\nconst getUserById = (id) => new Promise((resolve) => {\r\n    const users = [\r\n        {\r\n            id: 1,\r\n            firstname: \"Giorgi\",\r\n            lastname: \"Bazerashvili\",\r\n            age: 26,\r\n            isActive: true,\r\n        },\r\n        {\r\n            id: 2,\r\n            firstname: \"Giorgi\",\r\n            lastname: \"Bazerashvili\",\r\n            age: 27,\r\n            isActive: false,\r\n        },\r\n        {\r\n            id: 3,\r\n            firstname: \"Giorgi\",\r\n            lastname: \"Bazerashvili\",\r\n            age: 28,\r\n            isActive: true,\r\n        },\r\n    ];\r\n    setTimeout(() => {\r\n        resolve(users.find((u) => u.id == id));\r\n    }, 3000);\r\n});\r\nfunction memo(time) {\r\n    return function (target, name, descriptor) {\r\n        const cache = new Map();\r\n        descriptor.value = function (...args) {\r\n            return __awaiter(this, void 0, void 0, function* () {\r\n                if (cache.has(args[0])) {\r\n                    console.log(\"From cache\");\r\n                    console.log(cache.get(args[0]));\r\n                }\r\n                else {\r\n                    const result = yield getUserById.call(this, args);\r\n                    setTimeout(() => cache.clear(), time * 1000 * 60);\r\n                    cache.set(args[0], result);\r\n                    console.log(result);\r\n                }\r\n            });\r\n        };\r\n    };\r\n}\r\nclass UsersService {\r\n    getUserById(id) {\r\n        return getUserById(id);\r\n    }\r\n}\r\n__decorate([\r\n    memo(1) // <- Implement This Decorator\r\n], UsersService.prototype, \"getUserById\", null);\r\nconst usersService = new UsersService();\r\nbtn.addEventListener(\"click\", () => __awaiter(void 0, void 0, void 0, function* () {\r\n    loading.innerHTML = \"loading\";\r\n    yield usersService.getUserById(+input.value);\r\n    //.then((x) => console.log(x));\r\n    loading.innerHTML = \"\";\r\n}));\r\nlocalStorage.setItem(\"lastname\", \"Smith\");\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsUUFBUTtBQUNyRDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2RlY29yYXRvcnMvLi9zcmMvaW5kZXgudHM/ZTk0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuXCIpO1xyXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcklkXCIpO1xyXG5jb25zdCBsb2FkaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkaW5nXCIpO1xyXG5jb25zdCBnZXRVc2VyQnlJZCA9IChpZCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgIGNvbnN0IHVzZXJzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgIGZpcnN0bmFtZTogXCJHaW9yZ2lcIixcclxuICAgICAgICAgICAgbGFzdG5hbWU6IFwiQmF6ZXJhc2h2aWxpXCIsXHJcbiAgICAgICAgICAgIGFnZTogMjYsXHJcbiAgICAgICAgICAgIGlzQWN0aXZlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMixcclxuICAgICAgICAgICAgZmlyc3RuYW1lOiBcIkdpb3JnaVwiLFxyXG4gICAgICAgICAgICBsYXN0bmFtZTogXCJCYXplcmFzaHZpbGlcIixcclxuICAgICAgICAgICAgYWdlOiAyNyxcclxuICAgICAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgICAgZmlyc3RuYW1lOiBcIkdpb3JnaVwiLFxyXG4gICAgICAgICAgICBsYXN0bmFtZTogXCJCYXplcmFzaHZpbGlcIixcclxuICAgICAgICAgICAgYWdlOiAyOCxcclxuICAgICAgICAgICAgaXNBY3RpdmU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgIF07XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICByZXNvbHZlKHVzZXJzLmZpbmQoKHUpID0+IHUuaWQgPT0gaWQpKTtcclxuICAgIH0sIDMwMDApO1xyXG59KTtcclxuZnVuY3Rpb24gbWVtbyh0aW1lKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcikge1xyXG4gICAgICAgIGNvbnN0IGNhY2hlID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbiAoLi4uYXJncykge1xyXG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhY2hlLmhhcyhhcmdzWzBdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRnJvbSBjYWNoZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjYWNoZS5nZXQoYXJnc1swXSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgZ2V0VXNlckJ5SWQuY2FsbCh0aGlzLCBhcmdzKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGNhY2hlLmNsZWFyKCksIHRpbWUgKiAxMDAwICogNjApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhY2hlLnNldChhcmdzWzBdLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG59XHJcbmNsYXNzIFVzZXJzU2VydmljZSB7XHJcbiAgICBnZXRVc2VyQnlJZChpZCkge1xyXG4gICAgICAgIHJldHVybiBnZXRVc2VyQnlJZChpZCk7XHJcbiAgICB9XHJcbn1cclxuX19kZWNvcmF0ZShbXHJcbiAgICBtZW1vKDEpIC8vIDwtIEltcGxlbWVudCBUaGlzIERlY29yYXRvclxyXG5dLCBVc2Vyc1NlcnZpY2UucHJvdG90eXBlLCBcImdldFVzZXJCeUlkXCIsIG51bGwpO1xyXG5jb25zdCB1c2Vyc1NlcnZpY2UgPSBuZXcgVXNlcnNTZXJ2aWNlKCk7XHJcbmJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICBsb2FkaW5nLmlubmVySFRNTCA9IFwibG9hZGluZ1wiO1xyXG4gICAgeWllbGQgdXNlcnNTZXJ2aWNlLmdldFVzZXJCeUlkKCtpbnB1dC52YWx1ZSk7XHJcbiAgICAvLy50aGVuKCh4KSA9PiBjb25zb2xlLmxvZyh4KSk7XHJcbiAgICBsb2FkaW5nLmlubmVySFRNTCA9IFwiXCI7XHJcbn0pKTtcclxubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXN0bmFtZVwiLCBcIlNtaXRoXCIpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;