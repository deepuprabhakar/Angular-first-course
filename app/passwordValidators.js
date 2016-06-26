System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function matchingPasswords(passwordKey, confirmPasswordKey) {
        return function (group) {
            var password = group.controls[passwordKey];
            var confirmPassword = group.controls[confirmPasswordKey];
            if (password.value !== confirmPassword.value) {
                //alert(password.value);
                return {
                    mismatchedPasswords: true
                };
            }
        };
    }
    exports_1("matchingPasswords", matchingPasswords);
    function emailValidator(control) {
        var emailRegexp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (control.value && !emailRegexp.test(control.value)) {
            return { invalidEmail: true };
        }
    }
    exports_1("emailValidator", emailValidator);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=passwordValidators.js.map