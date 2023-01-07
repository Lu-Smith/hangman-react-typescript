export function showNotification(setter: any) {
    setter(true);
    setTimeout(() => {
        setter(false);
    }, 2000);
}