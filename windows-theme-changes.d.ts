declare module 'windows-theme-changes' {
    function isLightMode(): boolean
    function register(callback: (light: boolean)=>void): void
}
