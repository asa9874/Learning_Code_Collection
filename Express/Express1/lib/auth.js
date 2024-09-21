module.exports = {
    IsOwner: function (request, response) {
        if (request.user) {
            return true
        }
        else {
            return false
        }
    },
    StatusUI: function (request, response) {
        var authStatusUI = '<a href="/auth/login">login</a>'
        if (this.IsOwner(request, response)) {
            authStatusUI = `${request.user.nickname}|<a href="/auth/logout">logout</a>`
        }
        return authStatusUI
    }
}