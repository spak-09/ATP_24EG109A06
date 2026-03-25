function Product(props){
    const {productObj}=props
    return (
        
        <div className="p-3 shadow-2xl rounded-2xl shadow-gray-600">
            <h2 className="text-3xl py-2">{productObj.title}</h2>
            <h3 className="py-2">{productObj.price}</h3>
            <p className="">{productObj.description}</p>
        </div>
        
    )

}
export default Product