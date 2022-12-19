"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const btn = document.getElementById("btn");
const input = document.getElementById("userId");
const loading = document.getElementById("loading");
const getUserById = (id) => new Promise((resolve) => {
    const users = [
        {
            id: 1,
            firstname: "Giorgi",
            lastname: "Bazerashvili",
            age: 26,
            isActive: true,
        },
        {
            id: 2,
            firstname: "Giorgi",
            lastname: "Bazerashvili",
            age: 27,
            isActive: false,
        },
        {
            id: 3,
            firstname: "Giorgi",
            lastname: "Bazerashvili",
            age: 28,
            isActive: true,
        },
    ];
    setTimeout(() => {
        resolve(users.find((u) => u.id == id));
    }, 3000);
});
function memo(time) {
    return function (target, name, descriptor) {
        const cache = new Map();
        descriptor.value = function (...args) {
            return __awaiter(this, void 0, void 0, function* () {
                let start = Date.now();
                if (cache.has(args[0])) {
                    console.log("From cache");
                    console.log(cache.get(args[0]).res);
                    const end = Date.now();
                    if (end - cache.get(args[0]).startTime >= time * 60 * 1000) {
                        cache.delete(args[0]);
                        start = Date.now();
                    }
                }
                else {
                    const result = yield getUserById.call(this, args);
                    cache.set(args[0], { res: result, startTime: start });
                    console.log(result);
                }
            });
        };
    };
}
class UsersService {
    getUserById(id) {
        return getUserById(id);
    }
}
__decorate([
    memo(1) // <- Implement This Decorator
], UsersService.prototype, "getUserById", null);
const usersService = new UsersService();
btn.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    loading.innerHTML = "loading";
    yield usersService.getUserById(+input.value);
    //.then((x) => console.log(x));
    loading.innerHTML = "";
}));
localStorage.setItem("lastname", "Smith");
