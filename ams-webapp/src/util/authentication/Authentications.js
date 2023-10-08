export const isAuthenticated = () => {
    const userId = localStorage.getItem('userId')
    return !!userId
    }