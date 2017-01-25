# device-simulator

## A simple Node.js IoT device simulator.

This simple simulator is used to provide an example connection to a given IoT Hub. 
The preliminary steps require installing the `iothub-explorer` npm module as well 
as registering a new device.

To install this module, use the following command.
```bash
npm install -g iothub-explorer
```

After this, you will want to authenticate your session. The default amount of time
is one hour, however you can provide length (in seconds) as a parameter to this command.

```bash
iothub-explorer login "<my-connection-string>"
```

You'll need to provide your own connection string. This can be retrieved from
your Azure IoT Hub instance. You can find it by following these instructions.

 - Open your IoT Hub instance, you will see a column of options on 
 the left hand side. Select **Shared Access Policies**
 - There should be multiple policies present by default. Choose **iothubowner**
 - Next you are shown that policies permissions and access keys. Copy and paste
 the **Connection String - Primary Key** field.

 Now that you have your connection string, you can enter the above command to authenticate.
 After this, you are now able to create a new device on your Iot Hub. Do this by typing

 ```bash
 iothub-explorer create <device-id> --conection-string
 ```

 Provide your own device ID (e.g. `MySampleDevice`) and you will be given a variety of information
 about your new device, including a connection string. Copy and paste this connection string
 into the `index.js` file on this line

```javascript
var client = deviceAmqp.clientFromConnectionString('<connection-string-here>');
```

After this you are ready to go! You can now use the commands below to startup your simulated device.

```bash
cd device/
npm install
node .
```