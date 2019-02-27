export default {
    component: 'my-component',
    path: '/dist/bundle.js',
    functions: {
        initData: () => {
            dashboard.targetComponent.setData(['hello', 'world']);
        }
    }
}
