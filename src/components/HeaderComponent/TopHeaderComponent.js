import React from "react";


const TopHeaderComponent = () => {
    return (
        <div className="max-w-7xl mx-auto p-2">        
            <div className="flex justify-between items-center text-sm ">
                <div className="flex gap-2 hover:cursor-pointer ">
                    <a className=" hover:text-primary" href="/blogs">Tìm cửa hàng</a>
                    <p>|</p>
                    <a className=" hover:text-primary" href="/lien-he">Hỗ trợ mua hàng</a>
                </div>
                <div className="flex gap-2 hover:cursor-pointer" >
                    <a className=" hover:text-primary" href="/">Sản phẩm đã xem</a>
                    <p>|</p>
                    <a className=" hover:text-primary" href="/">Yêu thích <span class="js-wishlist-count">0</span></a>
                </div>
            </div>
         </div>   
    )
}

export default TopHeaderComponent