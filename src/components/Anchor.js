import ui from 'veui/managers/ui';

ui.defaults(
    {
        ui: {
            size: {
                values: ['s', 'm'],
                default: 's',
                inherit: true
            }
        },
        parts: {
            current: 'strong'
        }
    },
    'anchor'
);
