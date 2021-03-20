const getters={
    token: state => state.token.token,
    roles: state => state.token.roles,
    permission_routes: state => state.routes.routes,
}

export default getters