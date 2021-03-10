안녕하세요! 3355Lab_Client에 오신 걸 환영합니다😊

**📔 [API명세서](https://github.com/3355lab/Read_me) [Github]**



### 🛠 사용 기술
---
- **Styled-Components :** css파일을 사용하지 않고 @types/styled-componets를 사용하였습니다.
- **Hooks :** useState와 useEffect를 사용하였습니다.


### 🏃‍♂️ How to Run
---
```javascript
yarn install
yarn start
```


### 📜 File Structure
```shell
3355Lab_client
│
│  .env
│  .gitingnore
│  tsconfig.json
│  yarn.lock
│  package.json
│  package-lick.json
│  .eslintcache
│
├─public
│  │  index.html
│  │  manifest.json
│  │  robots.txt
│  ├─styles
│  ├─favicons
│  ├─fonts
│  └─images
│
├─@types
│      index.d.ts
│
└─src
    │  App.tsx
    │  index.tsx
    │  react-app-env.d.ts
    │
    ├─components
    │  ├─common
    │  ├─company
    │  └─filter
    │  
    ├─containers
    │  ├─manufacture
    │  ├─material
    │  └─common
    │  
    │
    ├─controllers
    │  └─ axios.ts
    │    
    ├─lib
    │  └─styles
    │    └─ palletes.ts
    │  └─ interfaces
    │
    └─pages
      └─HomePage.tsx    
```
---

- Public : 정적 파일 저장하는 폴더입니다. index.html. image, font파일이 들어있습니다.

- Components : View 부분을 담당하는 Components를 저장하는 폴더입니다. 사용처에 따라 common, company, filter로 나누었습니다. company는 추후 변경될 예정입니다.

- Containers : View에 사용되어지는 Logic들을 저장하는 폴더입니다. Containers를 통해 Component가 호출되어 Render하는 방식으로 구현하였습니다.

- Controllers : API들을 저장하는 폴더입니다.

- lib : Interface와 styles의 공통적인 사용부분을 모아놓았습니다.

- modules : 생략

- pages : App.tsx에서 호출하는 각 페이지들을 저장한 폴더입니다.
