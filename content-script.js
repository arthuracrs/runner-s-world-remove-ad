window.onload = () => {
    setTimeout(() => {
        const ad = document.querySelector('.journey-container-wrapper')
        ad.remove()
    
        
    }, 100);
    
    setTimeout(() => {
        
        const content2 = document.querySelector('div.standard-body')
        content2.classList.remove("standard-body");
    
        const content3 = document.querySelectorAll('.vertical-ad')
        content3.forEach(x => {
            x.remove()
        })
    }, 5000);
    
}
