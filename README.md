# ✓ PropAccess
> Deep property access written in TS.

## 📦 Installation
```shell
npm install propaccess
```


### ✅ Benefits
- [x] Type safe string with `dot notation` for query nested object.
- [x] Property `autocomplete`

☕ Enjoy :) ;) ...


# 📚 Documentation

## `deepPropAccess<T, P extends Path<T>>(obj: T, key: P):`

```ts
const obj = {
  data: {
    numberProp: 2,
    stringProp: 'code',
    nullProp: null,
    undefinedProp: undefined,
    arrayProp: [1, 2, 3, 4, 5],
    deep: {
      key: 1,
      deep: {
        key: 2,
        deep: {
          key: 3,
        },
      },
    },
  },
}

const props = deepPropAccess(obj, 'data.arrayProp')
```

## **:handshake: Contributing**

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request

---

### **:busts_in_silhouette: Credits**

- [Chris Michael](https://github.com/ChrisMichaelPerezSantiago) (Project Leader, and Developer)

---

### **:anger: Troubleshootings**

This is just a personal project created for study / demonstration purpose and to simplify my working life, it may or may
not be a good fit for your project(s).

---

### **:heart: Show your support**

Please :star: this repository if you like it or this project helped you!\
Feel free to open issues or submit pull-requests to help me improving my work.

---

### **:robot: Author**

_*Chris M. Perez*_

> You can follow me on
> [github](https://github.com/ChrisMichaelPerezSantiago)&nbsp;&middot;&nbsp;[twitter](https://twitter.com/Chris5855M)

---

Copyright ©2022 [propaccess](https://github.com/ChrisMichaelPerezSantiago/propaccess).
