# Week6 - Redux

## Day1

Previous React project

- .editorconfig
- .eslintrc.cjs
- .gitignore
- jest.config.js
- package.json
- tsconfig.json
- tsconfig.node.json
- vite.config.ts

- index.html
- /src/vite-env.d.ts
- /src/main.tsx
- /src/index.css
- /public
- /__mocks__/assetsMock.js

- .github/workflows/sonar.yml
- sonar-project.properties

Install redux

```shell
npm i react-redux @reduxjs/toolkit
```

## Day2 - Redux

- Store -> REDUX / RTK -> configureStore
- Provider -> REDUX

- Actions + Reducer -> Slice -> RTK

  - type/interface State
  - initial State
  - createSlice:
    - name
    - initialState
    - reducer

- export slice.actions
- export default slice.reducer

- En vez de useReducer -> hooks de REDUX:
  - useSelector
  - useDispatch
