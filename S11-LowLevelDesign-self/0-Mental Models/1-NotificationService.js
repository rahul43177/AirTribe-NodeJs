class Notifications {
    emailNotify(message) {
        console.log(`Email notification sent with message: ${message}`);
    }
    smsNotify(message) {
        console.log(`SMS notification sent with message: ${message}`);
    }
    pushNotify(message) {
        console.log(`Push notification sent with message: ${message}`);
    }
}