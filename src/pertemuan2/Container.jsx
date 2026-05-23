export default function Container({children}){
    return(
        
        <div className="card">
            <img src="img/Gambar.png" width="100%"/>
            <h1>Pemrograman Framework Lanjutan</h1>
            <br/>
                {children}
            <br/>
            <footer>
                <p>2025 - Politeknik Caltex Riau</p>
            </footer>
        </div>
    )
}