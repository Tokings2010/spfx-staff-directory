var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { Person } from '@microsoft/mgt-react/dist/es6/spfx';
import { PersonCardInteraction, PersonViewType } from '@microsoft/mgt-spfx';
import * as React from 'react';
import styles from './Results.module.scss';
var Result = function (_a) {
    var _b;
    var dataContext = _a.dataContext;
    var person = dataContext.person;
    var getPhoto = function (data) {
        var byteCharacters = atob(data);
        var byteArrays = [];
        for (var offset = 0; offset < byteCharacters.length; offset += 512) {
            var slice = byteCharacters.slice(offset, offset + 512);
            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        var blob = new Blob(byteArrays, { type: 'image/jpeg' });
        var url = window.URL || window.webkitURL;
        var img = url.createObjectURL(blob);
        return img;
    };
    return (React.createElement("div", { className: styles.result },
        React.createElement(Person, { userId: person.id, personDetails: __assign(__assign({}, person), { personImage: getPhoto((_b = person.picture) !== null && _b !== void 0 ? _b : '') }), personCardInteraction: PersonCardInteraction.hover, line1Property: 'displayName', line2Property: 'jobTitle', line3Property: 'department', view: PersonViewType.threelines, className: styles.person, disableImageFetch: true })));
};
export default Result;
//# sourceMappingURL=Result.js.map