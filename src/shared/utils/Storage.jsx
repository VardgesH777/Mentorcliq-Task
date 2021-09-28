const types = {
    USER_EMAIL: "userEmail"
}

function Storage (name) {
    this.set = function (value) {
        return localStorage.setItem(name, JSON.stringify(value))
    }
    this.remove = function () {
        return localStorage.removeItem(name)
    }

    this.get = function () {
        return JSON.parse(localStorage.getItem(name))
    }
}

export const ClearStorage = () => {
    return localStorage.clear()
}

export const UserEmail = new Storage(types.USER_EMAIL)
