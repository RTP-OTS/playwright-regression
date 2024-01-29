pipeline {
  agent any

  environment {
    PLAYWRIGHT_VERSION = '1.41.1-jammy'
  }

  tools {
    nodejs 'NodeJS 20.9'
    // Specify other tools as needed
  }
  stages {
    stage('install playwright') {
      steps {
        sh '''
          npm i -D @playwright/test
          npx playwright install
        '''
      }
    }
    // stage('test register page') {
    //   steps {
    //     sh 'npx playwright test RegisterPass.spec.js --project chromium --reporter=line'
    //   }
    // }
    stage('Smoke test') {
      steps {
        sh '''
          npx playwright test tc01.spec --project webkit --reporter=line
        '''
      }
    }

    stage('Regression test') {
      steps {
        sh '''
          npx playwright test tc04.spec --project webkit --reporter=line
        '''
      }
    }
  }
}
