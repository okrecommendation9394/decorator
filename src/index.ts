const btn = document.getElementById("btn") as HTMLButtonElement;
const input = document.getElementById("userId") as HTMLInputElement;
const loading = document.getElementById("loading") as HTMLDivElement;

const getUserById = (id: number): Promise<User> =>
  new Promise((resolve) => {
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
      resolve(users.find((u) => u.id == id) as User);
    }, 3000);
  });

export interface User {
  id: number;
  firstname: string;
  lastname: string;
  age: number;
  isActive: boolean;
}
function memo(time: number) {
  return function (
    target: any,
    name: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const cache = new Map();
    descriptor.value = async function (...args: any) {
      if (cache.has(args[0])) {
        console.log("From cache");
        console.log(cache.get(args[0]));
      } else {
        const result = await getUserById.call(this, args);
        setTimeout(() => cache.clear(), time * 1000 * 60);
        cache.set(args[0], result);
        console.log(result);
      }
    };
  };
}
class UsersService {
  @memo(1) // <- Implement This Decorator
  getUserById(id: number): Promise<User> {
    return getUserById(id);
  }
}
const usersService = new UsersService();
btn.addEventListener("click", async () => {
  loading.innerHTML = "loading";
  await usersService.getUserById(+(input as HTMLInputElement).value);
  //.then((x) => console.log(x));
  loading.innerHTML = "";
});
localStorage.setItem("lastname", "Smith");
