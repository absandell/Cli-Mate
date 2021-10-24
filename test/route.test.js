import router from '../app/routes/auth-routes'

afterEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
});

describe('route tests', ()=> {
    test('has routes', () => {
        const routes = [
            { path: '/login', method: 'get' },
            { path: '/logout', method: 'get' },
            { path: '/google', method: 'get' },
            { path: '/google/redirect', method: 'get' }
        ]

        routes.forEach((route) => {
            const match = router.stack.find(
                (s) => s.route.path === route.path && s.route.methods[route.method]
            );
            expect(match).toBeTruthy();
        });
    });
});