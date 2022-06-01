const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="img/logo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn" onclick="window.location.href='http://127.0.0.1:5500/ECom%20Website/search.html';">search</button>
                </div>
                <a href="http://127.0.0.1:5500/ECom%20Website/login.html"><img src="img/user.png" alt=""></a>
                <a href="#"><img src="img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="http://127.0.0.1:5500/ECom%20Website/index.html" class="link">home</a></li>
            <li class="link-item"><a href="http://127.0.0.1:5500/ECom%20Website/women.html" class="link">women</a></li>
            <li class="link-item"><a href="http://127.0.0.1:5500/ECom%20Website/men.html" class="link">men</a></li>
            <li class="link-item"><a href="http://127.0.0.1:5500/ECom%20Website/kids.html" class="link">kids</a></li>
            <li class="link-item"><a href="#" class="link">accessories</a></li>
        </ul>
    `;
}

createNav();