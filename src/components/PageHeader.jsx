export default function PageHeader({ title, breadcrumb, children }) {
    return (
        <div id="pageheader-container" className="flex items-center justify-between p-4">
            <div id="pageheader-left" className="flex flex-col">
                <h1 id="page-title" className="text-3xl font-semibold text-gray-800">
                    {title}
                </h1>
                
                <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2 text-gray-500">
                    {/* Logika jika breadcrumb adalah Array */}
                    {Array.isArray(breadcrumb) ? (
                        breadcrumb.map((item, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <span>{item}</span>
                                {index < breadcrumb.length - 1 && <span>/</span>}
                            </div>
                        ))
                    ) : (
                        /* Logika jika breadcrumb hanya String tunggal */
                        <span>{breadcrumb}</span>
                    )}
                </div>
            </div>

            {/* Children digunakan untuk menampung button atau elemen aksi lainnya */}
            <div id="action-button">
                {children}
            </div>
        </div>
    );
}