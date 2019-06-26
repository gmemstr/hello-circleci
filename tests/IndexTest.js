module.exports = {
    'Test Hello Button' : function (client) {
      client
        .url('http://localhost:8080')
        .waitForElementVisible('body', 1000)
        .assert.title('Hello There')
        .assert.visible('button#hello-button')
        .click('button#hello-button')
        .pause(1000)
        .assert.containsText('span#hello-text',
          'Hello!')
        .end();
    }
  };