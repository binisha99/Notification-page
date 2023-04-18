const markAllRead = document.querySelector(".mark-all-read");

markAllRead.addEventListener("click", () => {
    const unread = document.querySelectorAll(".unread");
    const unreadCount = document.querySelector(".unread-count");
    for (let i = 0; i < unread.length; i++) {
        const notification = unread[i];
        notification.classList.remove("unread");
    }
    unreadCount.textContent = 0;
})