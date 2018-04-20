import {DatabaseORM} from '../database';
import events from '../context/events';
import bcrypt from 'bcryptjs';

const User = DatabaseORM.Model.extend({

    tableName: 'user',

    initialize: function () {

        this.on('saving', model => {
            if (model.hasChanged('password')) {
                return bcrypt.hash(model.attributes.password, 10)
                    .then(hash => model.set('password', hash));
            }
        });

        this.on('saved', (model, attrs, options) => {
            events.emit(`${options.method}_user`, model);
        });
    },

    verifyPassword: function (password) {
        return bcrypt.compare(password, this.get('password'));
    }


});

export default User;
