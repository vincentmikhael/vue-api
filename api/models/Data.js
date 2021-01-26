module.exports = {
    attributes:{
        sender_name: {
            type: 'string',
            required: true
        },
        sender_email: {
            type: 'string',
            required: true
        },
        recipient_name: {
            type: 'string',
            required: true
        },
        recipient_email: {
            type: 'string',
            required: true
        },
        message: {
            type: 'string',
            columnType: 'text',
            required: true
        }
    }
}