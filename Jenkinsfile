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
    stage('tc01-test backend authen') {
      steps {
        sh '''
          npx playwright test tc01_api.spec --project webkit --reporter=line
        '''
      }
    }

    stage('tc02-test update role') {
      steps {
        sh '''
          npx playwright test tc02_api.spec --project webkit --reporter=line
        '''
      }
    }
  }
}
