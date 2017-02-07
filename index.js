var deviceAmqp = require('azure-iot-device-amqp');
var device = require('azure-iot-device');

// This connection string is custom, will need to change for new devices.
var client = deviceAmqp.clientFromConnectionString('HostName=IoT-Hub-17minds.azure-devices.net;DeviceId=AnotherSampleDevice;SharedAccessKey=x+SoC92iBx42rF80d8vWSNPNJc6kHw4NQC1MEWByqrQ=');

client.open(err => {
    // Handle C2D messages
    client.on('message', msg => {
        client.complete(msg, () => console.log('C2D message received <--'));
    });

    // Send a D2C message repeatedly
    setInterval(function () {
        var message = new device.Message(JSON.stringify({
            deviceId: 'MySampleDevice',
            value: {
                esr: Math.random() * 10,
                accelerationData: {
                    x: Math.random() * 10,
                    y: Math.random() * 10,
                    z: Math.random() * 10
                }
            }
        }));
        console.log('Sending D2C message -->');
        client.sendEvent(message, (err, res) => { });
    }, 5000);
});