module.exports = {
    commands: ['enterserver', 'enter server'], // You Can Keep Any Name
    description: 'Smple  Command', //Optional
    callback: (message, args) => {
        const user = message.member
        message.member.roles.add('997178569593733242');
    }
}