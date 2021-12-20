/**
* feat：新功能
* style：仅样式改动
* perf：更新某功能
* fix：修补某功能的bug
* docs：文档/注释
* ci：持续集成修改
* refactor：重构某个功能
* build：编译相关的修改，例如发布版本、对项目构建或者依赖的改动
* test：测试用例修改
*/
module.exports = {
  extends: [
    '@commitlint/config-angular'
  ],
  rules: {
    'type-enum': [2, 'always', [
      'feat', 'perf', 'fix', 'refactor', 'style', 'docs', 'ci', 'build', 'test'
    ]],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72]
  }
}
