var push = require('web-push');

let vapidKeys = {
    publicKey: 'BCUc4sw8Rw73Y0JGQ5NefxElRoaw25-CKDngnkVkM8qWCGEqNwgNnxUdzOdrXsxzju_tHogkvrKykAmi4F2V9HY',
    privateKey: 'WlIiLSHxmtqi566USg9J8fkaSgQYQ2_JaQ3RFQw0rQE'
  }

push.setVapidDetails('mailto:edenitysukhlain@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
    endpoint:"https://fcm.googleapis.com/fcm/send/cDdqydd4HeY:APA91bEAif3L4Q2-vV3Wv_22wL5Wf1HuqwbnEbsdOq5WGfmzeyNwrr0jDqAnopC9AsmLuYt61ITmhWYghhwh4YcGKeHVAbuNROsEKx5ybHQo3FS8SN7PexKjbDrZQcXeCERM554ETzEq",
expirationTime :null,
keys:{
    p256dh:
    "BFq1e1pJimi2LUw_hdTrGnTXM-AFly_AwUbaMKdgYYuiF719UAAvUx4jKCiQwSG5vUY5dEsC6GJG57YfAA-rRXM",
    auth:"LyMtg8ozSSyGFoJraT8jBA"
}};

push.sendNotification(sub, 'test message')