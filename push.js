var push = require('web-push');

let vapidKeys = {
    publicKey: 'BCUc4sw8Rw73Y0JGQ5NefxElRoaw25-CKDngnkVkM8qWCGEqNwgNnxUdzOdrXsxzju_tHogkvrKykAmi4F2V9HY',
    privateKey: 'WlIiLSHxmtqi566USg9J8fkaSgQYQ2_JaQ3RFQw0rQE'
  }

push.setVapidDetails('mailto:edenitysukhlain@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {};
push.sendNotification(sub, 'test message')