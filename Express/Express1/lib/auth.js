module.exports = {
    IsOwner: function (request, response) {
        if (request.session.is_logined) {
            return true
        }
        else {
            return false
        }
    },
    StatusUI: function (request, response) {
        var authStatusUI = '<a href="/auth/login">login</a>'
        if (this.IsOwner(request, response)) {
            authStatusUI = `${request.session.nickname}|<a href="/auth/logout">logout</a>`
        }
        return authStatusUI
    }
}