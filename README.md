# install wdio
- `npm install wdio .`

# package.json
- check `type` : `module`

# tsconfig.json
- check `"module" : "ESNext"`
- check `"resolveJsonModule" : true`
- add `"esModuleInterop" : true`
- change `"Strict" : false`

# wdio.conf.ts
- check `project: "./tsconfig.json"`
- add `${process.cwd()}/test/features/**/*.feature`
- add `./test/feature/step-definitions/*.ts`