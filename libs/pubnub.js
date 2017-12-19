module.exports.initialize = () => {
  pubnub = new PubNub({
    'publishKey': process.env.PUBNUB_PUBLISH,
    'subscribeKey': process.env.PUBNUB_SUBSCRIBE
  });

  function publishSampleMessage() {
    console.log('Since we\'re publishing on subscribe connectEvent, we\'re sure we\'ll receive the following publish.');

    let publishConfig = {
      channel: 'presence_here',
      message: 'I am online!'
    }

    pubnub.publish(publishConfig, (status, response) => {
      console.log(status, response);
    });
  }

  pubnub.addListener({
    status: statusEvent => {
      if (statusEvent.category === 'PNConnectedCategory') {
        publishSampleMessage();
      }
    },
    message: message => {
      console.log('New Message!!', message);
    },
    presence: presenceEvent => {
      // handle presence
    }
  })

  console.log('Subscribing..');
  pubnub.subscribe({
    channels: ['presence_here']
  });

}