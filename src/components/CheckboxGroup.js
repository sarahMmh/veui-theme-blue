import ui from 'veui/managers/ui';

ui.defaults(
    {
        ui: {
            size: {
                values: ['s', 'm', 'l'],
                default: 's',
                inherit: true
            }
        }
    },
    'checkboxgroup'
);
