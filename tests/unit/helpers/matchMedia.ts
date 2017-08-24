if (!window.matchMedia) {
    module.exports = window.matchMedia = (() => {
        return {
            matches: true,
            addListener: () => undefined,
        };
    }) as any;
}
