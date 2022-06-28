 self.addEventListener('push', function(e)
{
    var options = {
        body: 'This notification was genarated from a push!',
        icon: 'images/example.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [
            {action: 'explore', title: 'Explore this new world',
        icon: 'images/checkmark.png'},
        {action: 'close', title: 'close',
         icon: 'images/xmark.png'},
        ]
    };
    e.waituntil(
        self.registration.showNotification('Hello world!', options)
    );
});