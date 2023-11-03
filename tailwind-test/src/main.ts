document.querySelector("#hamburger")!.addEventListener("click", () => {
    const sidebarContainer = document.querySelector("#sidebar-container")!
    sidebarContainer.classList.add("flex")
    sidebarContainer.classList.remove("hidden")

    setTimeout(() => {
        document.querySelector("#sidebar-container > div")!.classList.remove("-translate-x-40")
        document.querySelector("#scrim")!.classList.remove("opacity-0")
        document.querySelector("#scrim")!.classList.add("opacity-10")
    }, 10)

    const hamburger = document.querySelector("#hamburger")!
    hamburger.classList.add("hidden")
})

document.querySelector("#scrim")!.addEventListener("click", () => {
    document.querySelector("#sidebar-container > div")!.classList.add("-translate-x-40")
    document.querySelector("#scrim")!.classList.add("opacity-0")
        document.querySelector("#scrim")!.classList.remove("opacity-10")

    setTimeout(() => {
        const sidebarContainer = document.querySelector("#sidebar-container")!
        sidebarContainer.classList.remove("flex")
        sidebarContainer.classList.add("hidden")
    }, 100)

    const hamburger = document.querySelector("#hamburger")!
    hamburger.classList.remove("hidden")
})